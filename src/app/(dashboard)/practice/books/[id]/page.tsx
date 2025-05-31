'use client'

// React Imports
import { useState } from 'react'
import { use } from 'react'

// Next Imports
import { useRouter } from 'next/navigation'

// MUI Imports
import Box from '@mui/material/Box'
import Card
  from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import Collapse from '@mui/material/Collapse'
import Chip from '@mui/material/Chip'
import Avatar from '@mui/material/Avatar'
import CardContent from '@mui/material/CardContent'
import { ExpandLess, ExpandMore } from '@mui/icons-material'

// Icon Imports
import { Icon } from '@iconify/react'

// Component Imports
import PaymentModal from '@/components/payment/PaymentModal'

// Context Imports
import { useCart } from '@/contexts/CartContext'
import { books } from '../data'

// Import data từ file chính

interface BookDetailPageProps {
  params: Promise<{
    id: string
  }>
}

const BookDetailPage = ({ params }: BookDetailPageProps) => {
  const router = useRouter()
  const resolvedParams = use(params)
  const book = books.find(b => b.id === resolvedParams.id)
  const [expandedChapters, setExpandedChapters] = useState<string[]>([])
  const [openPaymentModal, setOpenPaymentModal] = useState(false)
  const { addToCart, items } = useCart()

  if (!book) {
    return (
      <Box sx={{ p: 4, textAlign: 'center' }}>
        <Typography variant="h5">Không tìm thấy bộ sách</Typography>
      </Box>
    )
  }

  const handleChapterClick = (chapterId: string) => {
    setExpandedChapters(prev =>
      prev.includes(chapterId) ? prev.filter(id => id !== chapterId) : [...prev, chapterId]
    )
  }

  const handleLessonClick = (lessonId: string) => {
    router.push(`/practice/exam/${lessonId}/easy`)
  }

  const handleAddToCart = () => {
    addToCart({
      id: book.id,
      title: book.title,
      price: book.price,
      image: book.image,
      subject: book.subject
    })
    router.push('/practice/cart')
  }

  const isInCart = items.some(item => item.id === book.id)

  return (
    <>
      <Grid container spacing={6}>
        {/* Danh sách chương và bài học */}
        <Grid item xs={12} md={9}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
                <Typography variant="h5" sx={{ fontWeight: 700 }}>
                  Nội dung bộ sách
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Chip
                    icon={<Icon icon="tabler-lock-open" />}
                    label={`${book.chapters.reduce((acc, chapter) => acc + chapter.lessons.filter(lesson => !lesson.isLocked).length, 0)} bài mở khóa`}
                    color="success"
                    variant="outlined"
                  />
                  <Chip
                    icon={<Icon icon="tabler-list" />}
                    label={`${book.chapters.reduce((acc, chapter) => acc + chapter.lessons.length, 0)} bài học`}
                    color="primary"
                    variant="outlined"
                  />
                </Box>
              </Box>
              <List>
                {book.chapters.map(chapter => (
                  <Box key={chapter.id}>
                    <ListItem
                      component="div"
                      onClick={() => handleChapterClick(chapter.id)}
                      sx={{
                        bgcolor: 'action.hover',
                        borderRadius: 1,
                        mb: 1,
                        cursor: 'pointer'
                      }}
                    >
                      <ListItemIcon>
                        <Icon icon="tabler-book-2" />
                      </ListItemIcon>
                      <ListItemText
                        primary={chapter.title}
                        secondary={`${chapter.lessons.filter(lesson => !lesson.isLocked).length}/${chapter.lessons.length} bài mở khóa`}
                      />
                      {expandedChapters.includes(chapter.id) ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={expandedChapters.includes(chapter.id)} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        {chapter.lessons.map(lesson => (
                          <ListItem
                            key={lesson.id}
                            component="div"
                            onClick={() => !lesson.isLocked && handleLessonClick(lesson.id)}
                            sx={{
                              pl: 4,
                              cursor: lesson.isLocked ? 'not-allowed' : 'pointer',
                              opacity: lesson.isLocked ? 0.7 : 1
                            }}
                          >
                            <ListItemIcon>
                              {lesson.isLocked ? (
                                <Icon icon="tabler-lock" color="error" />
                              ) : (
                                <Icon
                                  icon="tabler-play"
                                  color={lesson.difficulty === 'easy' ? 'success' : lesson.difficulty === 'medium' ? 'warning' : 'error'}
                                />
                              )}
                            </ListItemIcon>
                            <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Typography variant="body1">{lesson.title}</Typography>
                                {lesson.isLocked && (
                                  <Chip
                                    icon={<Icon icon="tabler-lock" />}
                                    label="Khóa"
                                    size="small"
                                    color="error"
                                    variant="outlined"
                                  />
                                )}
                              </Box>
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
                                <Chip
                                  label={lesson.difficulty === 'easy' ? 'Dễ' : lesson.difficulty === 'medium' ? 'Trung bình' : 'Khó'}
                                  size="small"
                                  color={lesson.difficulty === 'easy' ? 'success' : lesson.difficulty === 'medium' ? 'warning' : 'error'}
                                />
                              </Box>
                            </Box>
                          </ListItem>
                        ))}
                      </List>
                    </Collapse>
                  </Box>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Chi tiết bộ sách */}
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
                <Avatar
                  variant="rounded"
                  src={book.image}
                  alt={book.title}
                  sx={{ width: '100%', height: 200 }}
                />
              </Box>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
                {book.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                {book.description}
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Icon icon="tabler-book" color="primary" />
                  <Typography variant="body2" color="text.secondary">
                    Môn học: {book.subject}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Icon icon="tabler-users" color="primary" />
                  <Typography variant="body2" color="text.secondary">
                    {book.totalPurchases} người đang học
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Icon icon="tabler-list" color="primary" />
                  <Typography variant="body2" color="text.secondary">
                    {book.totalChapters} chương
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ mb: 3 }}>
                <Typography variant="h4" color="primary" sx={{ fontWeight: 700, mb: 1 }}>
                  {book.price.toLocaleString('vi-VN')}đ
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Giá gốc: <span style={{ textDecoration: 'line-through' }}>{book.originalPrice?.toLocaleString('vi-VN')}đ</span>
                </Typography>
              </Box>
              <Button
                variant="contained"
                fullWidth
                size="large"
                onClick={() => handleLessonClick(book.chapters[0].lessons[0].id)}
                startIcon={<Icon icon="tabler-play" />}
                sx={{ mb: 2 }}
              >
                Bắt đầu học
              </Button>
              <Button
                variant="outlined"
                fullWidth
                size="large"
                startIcon={<Icon icon={isInCart ? "tabler-shopping-cart-check" : "tabler-shopping-cart"} />}
                color="primary"
                onClick={handleAddToCart}
                sx={{ color: '#deaf18' }}
                disabled={isInCart}
              >
                {isInCart ? 'Đã thêm vào giỏ' : 'Mua khóa học'}
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <PaymentModal
        open={openPaymentModal}
        onClose={() => setOpenPaymentModal(false)}
      />
    </>
  )
}

export default BookDetailPage 
