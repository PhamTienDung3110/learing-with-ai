'use client'

// React Imports
import { useState } from 'react'

// Next Imports
import { useRouter } from 'next/navigation'

// MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import Divider from '@mui/material/Divider'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Radio from '@mui/material/Radio'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Chip from '@mui/material/Chip'
import Avatar from '@mui/material/Avatar'
import CardContent from '@mui/material/CardContent'
import { AccessTime as AccessTimeIcon, Visibility as VisibilityIcon, HelpOutline as HelpOutlineIcon, EmojiEvents as EmojiEventsIcon, Search as SearchIcon } from '@mui/icons-material'

// Icon Imports
import { Icon } from '@iconify/react'


// Types
interface Book {
  id: string
  title: string
  description: string
  icon: string
  color: string
  image: string
  chapters: Chapter[]
  subject: string
  views: number
  attempts: number
  time: number
  questions: number
  grade: number
  totalBooks: number
  totalPurchases: number
  totalChapters: number
  price: number
  originalPrice?: number
}

interface Chapter {
  id: string
  title: string
  lessons: Lesson[]
}

interface Lesson {
  id: string
  title: string
  difficulty: 'easy' | 'medium' | 'hard'
  isLocked: boolean
  duration: number
}

export const books: Book[] = [
  {
    id: 'canh-dieu',
    title: 'Bộ sách Cánh Diều lóp 12',
    description: 'Bộ sách giáo khoa Cánh Diều cho các lớp từ 3-12',
    icon: 'tabler-book',
    color: '#FF6B6B',
    image: 'https://cdn0.fahasa.com/media/catalog/product/c/a/canh-dieu-toan-3-tap-1.jpg',
    subject: 'Toán học',
    views: 120,
    attempts: 10,
    time: 90,
    questions: 50,
    grade: 3,
    totalBooks: 8,
    totalPurchases: 1500,
    totalChapters: 24,
    price: 100000,
    originalPrice: 120000,
    chapters: [
      {
        id: 'cd-chuong-1',
        title: 'Chương 1: Số tự nhiên',
        lessons: [
          { id: 'cd-1-1', title: 'Bài 1: Các số đến 1000', difficulty: 'easy', isLocked: false, duration: 30 },
          { id: 'cd-1-2', title: 'Bài 2: Phép cộng, phép trừ', difficulty: 'medium', isLocked: false, duration: 45 },
          { id: 'cd-1-3', title: 'Bài 3: Phép nhân, phép chia', difficulty: 'medium', isLocked: false, duration: 45 },
          { id: 'cd-1-4', title: 'Bài 4: Tính giá trị biểu thức', difficulty: 'hard', isLocked: true, duration: 60 }
        ]
      },
      {
        id: 'cd-chuong-2',
        title: 'Chương 2: Hình học',
        lessons: [
          { id: 'cd-2-1', title: 'Bài 1: Điểm, đoạn thẳng', difficulty: 'easy', isLocked: false, duration: 30 },
          { id: 'cd-2-2', title: 'Bài 2: Góc, tam giác', difficulty: 'hard', isLocked: true, duration: 60 },
          { id: 'cd-2-3', title: 'Bài 3: Hình chữ nhật, hình vuông', difficulty: 'medium', isLocked: false, duration: 45 }
        ]
      },
      {
        id: 'cd-chuong-3',
        title: 'Chương 3: Đại lượng và đo đại lượng',
        lessons: [
          { id: 'cd-3-1', title: 'Bài 1: Đơn vị đo độ dài', difficulty: 'easy', isLocked: false, duration: 30 },
          { id: 'cd-3-2', title: 'Bài 2: Đơn vị đo khối lượng', difficulty: 'easy', isLocked: false, duration: 30 },
          { id: 'cd-3-3', title: 'Bài 3: Đơn vị đo thời gian', difficulty: 'medium', isLocked: false, duration: 45 },
          { id: 'cd-3-4', title: 'Bài 4: Đơn vị đo diện tích', difficulty: 'hard', isLocked: true, duration: 60 }
        ]
      }
    ]
  },
  {
    id: 'chan-troi',
    title: 'Bộ sách Chân trời sáng tạo',
    description: 'Bộ sách giáo khoa Chân trời sáng tạo cho các lớp từ 3-12',
    icon: 'tabler-book-2',
    color: '#4ECDC4',
    image: 'https://cdn0.fahasa.com/media/catalog/product/c/h/chan-troi-sang-tao-toan-3-tap-1.jpg',
    subject: 'Vật lý',
    views: 80,
    attempts: 5,
    time: 60,
    questions: 40,
    grade: 3,
    totalBooks: 6,
    totalPurchases: 1200,
    totalChapters: 18,
    price: 80000,
    originalPrice: 100000,
    chapters: [
      {
        id: 'ct-chuong-1',
        title: 'Chương 1: Đại số',
        lessons: [
          { id: 'ct-1-1', title: 'Bài 1: Phương trình bậc nhất', difficulty: 'easy', isLocked: false, duration: 30 },
          { id: 'ct-1-2', title: 'Bài 2: Phương trình bậc hai', difficulty: 'hard', isLocked: true, duration: 60 },
          { id: 'ct-1-3', title: 'Bài 3: Hệ phương trình', difficulty: 'medium', isLocked: false, duration: 45 }
        ]
      },
      {
        id: 'ct-chuong-2',
        title: 'Chương 2: Hình học không gian',
        lessons: [
          { id: 'ct-2-1', title: 'Bài 1: Khái niệm về hình không gian', difficulty: 'easy', isLocked: false, duration: 30 },
          { id: 'ct-2-2', title: 'Bài 2: Hình chóp, hình lăng trụ', difficulty: 'medium', isLocked: false, duration: 45 },
          { id: 'ct-2-3', title: 'Bài 3: Thể tích khối đa diện', difficulty: 'hard', isLocked: true, duration: 60 }
        ]
      }
    ]
  },
  {
    id: 'ket-noi',
    title: 'Bộ sách Kết nối tri thức với cuộc sống',
    description: 'Bộ sách giáo khoa Kết nối tri thức cho các lớp từ 3-12',
    icon: 'tabler-book-3',
    color: '#45B7D1',
    image: 'https://cdn0.fahasa.com/media/catalog/product/k/e/ket-noi-tri-thuc-toan-3-tap-1.jpg',
    subject: 'Hóa học',
    views: 60,
    attempts: 2,
    time: 60,
    questions: 40,
    grade: 3,
    totalBooks: 4,
    totalPurchases: 800,
    totalChapters: 12,
    price: 60000,
    originalPrice: 80000,
    chapters: [
      {
        id: 'kn-chuong-1',
        title: 'Chương 1: Vật lý cơ bản',
        lessons: [
          { id: 'kn-1-1', title: 'Bài 1: Chuyển động cơ học', difficulty: 'easy', isLocked: false, duration: 30 },
          { id: 'kn-1-2', title: 'Bài 2: Lực và chuyển động', difficulty: 'medium', isLocked: false, duration: 45 },
          { id: 'kn-1-3', title: 'Bài 3: Năng lượng và công', difficulty: 'hard', isLocked: true, duration: 60 }
        ]
      },
      {
        id: 'kn-chuong-2',
        title: 'Chương 2: Nhiệt học',
        lessons: [
          { id: 'kn-2-1', title: 'Bài 1: Nhiệt độ và nhiệt lượng', difficulty: 'easy', isLocked: false, duration: 30 },
          { id: 'kn-2-2', title: 'Bài 2: Sự truyền nhiệt', difficulty: 'medium', isLocked: false, duration: 45 },
          { id: 'kn-2-3', title: 'Bài 3: Các định luật nhiệt động', difficulty: 'hard', isLocked: true, duration: 60 }
        ]
      }
    ]
  },
  {
    id: 'global-success',
    title: 'Bộ sách ngoại ngữ Tiếng Anh Global Success',
    description: 'Bộ sách Tiếng Anh Global Success cho các lớp từ 3-12',
    icon: 'tabler-language',
    color: '#96CEB4',
    image: 'https://cdn0.fahasa.com/media/catalog/product/g/l/global-success-3-student-book.jpg',
    subject: 'Tiếng Anh',
    views: 100,
    attempts: 7,
    time: 90,
    questions: 50,
    grade: 3,
    totalBooks: 5,
    totalPurchases: 1000,
    totalChapters: 15,
    price: 120000,
    originalPrice: 150000,
    chapters: [
      {
        id: 'gs-chuong-1',
        title: 'Chương 1: Giao tiếp cơ bản',
        lessons: [
          { id: 'gs-1-1', title: 'Bài 1: Chào hỏi và giới thiệu', difficulty: 'easy', isLocked: false, duration: 30 },
          { id: 'gs-1-2', title: 'Bài 2: Giao tiếp hàng ngày', difficulty: 'medium', isLocked: false, duration: 45 }
        ]
      }
    ]
  },
  {
    id: 'nang-cao',
    title: 'Bộ sách nâng cao tham khảo khác',
    description: 'Các bộ sách nâng cao và tham khảo cho học sinh',
    icon: 'tabler-book-4',
    color: '#FFB347',
    image: 'https://cdn0.fahasa.com/media/catalog/product/t/o/toan-nang-cao-va-phat-trien-3.jpg',
    subject: 'Toán học',
    views: 90,
    attempts: 4,
    time: 90,
    questions: 50,
    grade: 3,
    totalBooks: 3,
    totalPurchases: 600,
    totalChapters: 9,
    price: 80000,
    originalPrice: 100000,
    chapters: [
      {
        id: 'nc-chuong-1',
        title: 'Chương 1: Toán nâng cao',
        lessons: [
          { id: 'nc-1-1', title: 'Bài 1: Phương trình bậc cao', difficulty: 'hard', isLocked: true, duration: 60 },
          { id: 'nc-1-2', title: 'Bài 2: Bất đẳng thức', difficulty: 'hard', isLocked: true, duration: 60 }
        ]
      }
    ]
  },
  {
    id: 'de-kiem-tra',
    title: 'Đề kiểm tra tham khảo',
    description: 'Tuyển tập các đề kiểm tra tham khảo',
    icon: 'tabler-file-text',
    color: '#9B59B6',
    image: 'https://cdn0.fahasa.com/media/catalog/product/t/u/tuyen-tap-de-kiem-tra-toan-3.jpg',
    subject: 'Tổng hợp',
    views: 70,
    attempts: 3,
    time: 60,
    questions: 40,
    grade: 3,
    totalBooks: 2,
    totalPurchases: 400,
    totalChapters: 6,
    price: 50000,
    originalPrice: 60000,
    chapters: [
      {
        id: 'kt-chuong-1',
        title: 'Đề kiểm tra học kỳ 1',
        lessons: [
          { id: 'kt-1-1', title: 'Đề số 1', difficulty: 'medium', isLocked: false, duration: 45 },
          { id: 'kt-1-2', title: 'Đề số 2', difficulty: 'medium', isLocked: false, duration: 45 }
        ]
      }
    ]
  }
]

const difficultyOptions = [
  { value: '', label: 'Tất cả' },
  { value: 'easy', label: 'Dễ' },
  { value: 'medium', label: 'Trung bình' },
  { value: 'hard', label: 'Khó' }
]

const subjectOptions = [
  { value: '', label: 'Tất cả' },
  { value: 'Toán học', label: 'Toán học' },
  { value: 'Vật lý', label: 'Vật lý' },
  { value: 'Hóa học', label: 'Hóa học' },
  { value: 'Tiếng Anh', label: 'Tiếng Anh' },
  { value: 'Tổng hợp', label: 'Tổng hợp' }
]

const sortOptions = [
  { value: 'newest', label: 'Mới nhất' },
  { value: 'popular', label: 'Phổ biến' },
  { value: 'attempts', label: 'Bán chạy' }
]

const gradeOptions = [
  { value: '', label: 'Tất cả' },
  { value: '3', label: 'Lớp 3' },
  { value: '4', label: 'Lớp 4' },
  { value: '5', label: 'Lớp 5' },
  { value: '6', label: 'Lớp 6' },
  { value: '7', label: 'Lớp 7' },
  { value: '8', label: 'Lớp 8' },
  { value: '9', label: 'Lớp 9' },
  { value: '10', label: 'Lớp 10' },
  { value: '11', label: 'Lớp 11' },
  { value: '12', label: 'Lớp 12' }
]

const BooksPage = () => {
  const router = useRouter()

  const [filters, setFilters] = useState({
    difficulty: '',
    searchQuery: '',
    subject: '',
    grade: ''
  })

  const [sort, setSort] = useState('newest')

  // Lọc sách
  let filteredBooks = books.filter(book => {
    let ok = true

    if (filters.difficulty) {
      ok = ok && book.chapters.some(chapter =>
        chapter.lessons.some(lesson => lesson.difficulty === filters.difficulty)
      )
    }

    if (filters.subject) ok = ok && book.subject === filters.subject
    if (filters.grade) ok = ok && book.grade === parseInt(filters.grade)
    if (filters.searchQuery) ok = ok && book.title.toLowerCase().includes(filters.searchQuery.toLowerCase())

    return ok
  })

  // Sắp xếp
  if (sort === 'newest') filteredBooks = [...filteredBooks].reverse()
  if (sort === 'popular') filteredBooks = [...filteredBooks].sort((a, b) => b.views - a.views)
  if (sort === 'attempts') filteredBooks = [...filteredBooks].sort((a, b) => b.attempts - a.attempts)

  return (
    <Grid container spacing={8} sx={{ margin: '0px 0px 40px 0px' }}>
      {/* Sidebar filter */}
      <Grid item xs={12} md={3}>
        <Paper elevation={2} sx={{ p: 3, borderRadius: 1, minHeight: 400 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>
            <SearchIcon sx={{ mr: 1, verticalAlign: 'middle' }} /> BỘ LỌC TÌM KIẾM
          </Typography>
          <TextField
            fullWidth
            size="small"
            placeholder="Tìm kiếm bộ sách..."
            value={filters.searchQuery}
            onChange={e => setFilters(f => ({ ...f, searchQuery: e.target.value }))}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              )
            }}
            sx={{ mb: 3 }}
          />
          <Divider sx={{ mb: 2 }} />
          <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
            Môn học
          </Typography>
          <RadioGroup
            value={filters.subject}
            onChange={e => setFilters(f => ({ ...f, subject: e.target.value }))}
            sx={{ mb: 2 }}
          >
            {subjectOptions.slice(1).map(opt => (
              <FormControlLabel key={opt.value} value={opt.value} control={<Radio size="small" />} label={opt.label} />
            ))}
          </RadioGroup>
          <Divider sx={{ mb: 2 }} />
          <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
            Mức độ
          </Typography>
          <RadioGroup
            value={filters.difficulty}
            onChange={e => setFilters(f => ({ ...f, difficulty: e.target.value }))}
            sx={{ mb: 2 }}
          >
            {difficultyOptions.slice(1).map(opt => (
              <FormControlLabel key={opt.value} value={opt.value} control={<Radio size="small" />} label={opt.label} />
            ))}
          </RadioGroup>
          <Divider sx={{ mb: 2 }} />
          <Typography variant="subtitle2" sx={{ fontWeight: 600, marginBottom: 1 }}>
            Lớp
          </Typography>
          <RadioGroup
            value={filters.grade}
            onChange={e => setFilters(f => ({ ...f, grade: e.target.value }))}
            sx={{ marginBottom: 2 }}
          >
            {gradeOptions.slice(1).map(opt => (
              <FormControlLabel key={opt.value} value={opt.value} control={<Radio size="small" />} label={opt.label} />
            ))}
          </RadioGroup>
        </Paper>
      </Grid>

      {/* Main content */}
      <Grid item xs={12} md={9}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, gap: 2, flexWrap: 'wrap' }}>
          <Typography variant="h5" sx={{ fontWeight: 700, flex: 1 }}>
            Danh sách bộ sách
          </Typography>
          <FormControl size="small">
            <InputLabel>Sắp xếp theo</InputLabel>
            <Select
              value={sort}
              label="Sắp xếp theo"
              onChange={e => setSort(e.target.value)}
              sx={{ minWidth: 150 }}
            >
              {sortOptions.map(opt => (
                <MenuItem key={opt.value} value={opt.value}>{opt.label}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Grid container spacing={8}>
          {filteredBooks.length === 0 && (
            <Grid item xs={12}>
              <Paper sx={{ p: 5, textAlign: 'center', color: 'text.secondary' }}>
                Không tìm thấy bộ sách phù hợp.
              </Paper>
            </Grid>
          )}
          {filteredBooks.map(book => (
            <Grid item xs={12} sm={6} md={4} key={book.id}>
              <Card elevation={3} sx={{ borderRadius: 1, height: '100%', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'visible' }}>
                <Box sx={{ position: 'absolute', top: 16, left: 16, zIndex: 2 }}>
                  <Chip
                    label={book.subject}
                    color="primary"
                    size="small"
                    sx={{ fontWeight: 600, textTransform: 'capitalize' }}
                  />
                </Box>
                <Box sx={{ height: 120, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'grey.100', borderTopLeftRadius: 4, borderTopRightRadius: 4, margin: '8px' }}>
                  <Avatar variant="rounded" sx={{ width: 80, height: 80, bgcolor: 'white', border: '2px solid', borderColor: 'primary.light' }}>
                    <img src={book.image} alt={book.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </Avatar>
                </Box>
                <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Typography variant="subtitle2" color="text.secondary" sx={{ fontWeight: 500, marginBottom: 0.5 }}>
                    {book.subject}
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 700, minHeight: 48 }}>
                    {book.title}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, marginTop: 1, marginBottom: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <Icon icon="tabler-book" fontSize="small" color="action" />
                      <Typography variant="body2" color="text.secondary">{book.totalBooks} sách</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <Icon icon="tabler-shopping-cart" fontSize="small" color="action" />
                      <Typography variant="body2" color="text.secondary">{book.totalPurchases} người mua</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <Icon icon="tabler-list" fontSize="small" color="action" />
                      <Typography variant="body2" color="text.secondary">{book.totalChapters} chương</Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, marginBottom: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <HelpOutlineIcon fontSize="small" color="action" />
                      <Typography variant="body2" color="text.secondary">{book.questions} câu</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <AccessTimeIcon fontSize="small" color="action" />
                      <Typography variant="body2" color="text.secondary">{book.time} phút</Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, marginBottom: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <VisibilityIcon fontSize="small" color="action" />
                      <Typography variant="body2" color="text.secondary">{book.views}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <EmojiEventsIcon fontSize="small" color="action" />
                      <Typography variant="body2" color="text.secondary">{book.attempts}</Typography>
                    </Box>
                  </Box>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => router.push(`/practice/books/${book.id}`)}
                    fullWidth
                    sx={{ marginTop: 'auto', fontWeight: 700, borderRadius: 1, textTransform: 'none', paddingY: 1.2 }}
                  >
                    Vào học
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default BooksPage 
