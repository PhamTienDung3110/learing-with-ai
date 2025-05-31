'use client'

// React Imports
import { useState } from 'react'

// Next Imports
import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation'

// MUI Imports
import { Search as SearchIcon } from '@mui/icons-material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import Divider from '@mui/material/Divider'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import Grid from '@mui/material/Grid'
import InputAdornment from '@mui/material/InputAdornment'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Paper from '@mui/material/Paper'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

// Icon Imports
import { Icon } from '@iconify/react'

// Data Imports
import { books, difficultyOptions, subjectOptions, sortOptions, gradeOptions } from './data'

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
  let filteredBooks = books?.filter(book => {
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
    <Grid container spacing={8} sx={{ margin: '0px 0px 40px 0px' }} suppressHydrationWarning>
      {/* Sidebar filter */}
      <Grid item xs={12} md={3}>
        <Paper elevation={2} sx={{ p: 3, borderRadius: 1, minHeight: 400 }} suppressHydrationWarning>
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
            suppressHydrationWarning
          />
          <Divider sx={{ mb: 2 }} />
          <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
            Môn học
          </Typography>
          <RadioGroup
            value={filters.subject}
            onChange={e => setFilters(f => ({ ...f, subject: e.target.value }))}
            sx={{ mb: 2 }}
            suppressHydrationWarning
          >
            {subjectOptions.slice(1).map(opt => (
              <FormControlLabel
                key={opt.value}
                value={opt.value}
                control={<Radio size="small" suppressHydrationWarning />}
                label={opt.label}
              />
            ))}
          </RadioGroup>
          <Divider sx={{ mb: 2 }} />
          <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
            Mức độ
          </Typography>
          <RadioGroup
            value={filters.difficulty}
            onChange={e => setFilters(f => ({ ...f, difficulty: e.target.value }))}
            suppressHydrationWarning
          >
            {difficultyOptions.slice(1).map(opt => (
              <FormControlLabel
                key={opt.value}
                value={opt.value}
                control={<Radio size="small" suppressHydrationWarning />}
                label={opt.label}
              />
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
            suppressHydrationWarning
          >
            {gradeOptions.slice(1).map(opt => (
              <FormControlLabel
                key={opt.value}
                value={opt.value}
                control={<Radio size="small" suppressHydrationWarning />}
                label={opt.label}
              />
            ))}
          </RadioGroup>
        </Paper>
      </Grid>

      {/* Main content */}
      <Grid item xs={12} md={9}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, gap: 2, flexWrap: 'wrap' }} suppressHydrationWarning>
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
              suppressHydrationWarning
            >
              {sortOptions.map(opt => (
                <MenuItem key={opt.value} value={opt.value}>{opt.label}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Grid container spacing={8} suppressHydrationWarning>
          {filteredBooks.length === 0 && (
            <Grid item xs={12}>
              <Paper sx={{ p: 5, textAlign: 'center', color: 'text.secondary' }} suppressHydrationWarning>
                Không tìm thấy bộ sách phù hợp.
              </Paper>
            </Grid>
          )}
          {filteredBooks.map(book => (
            <Grid item xs={12} sm={6} md={4} key={book.id}>
              <Card elevation={3} sx={{ borderRadius: 1, height: '100%', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'visible' }} suppressHydrationWarning>
                <Box sx={{ position: 'absolute', top: 16, left: 16, zIndex: 2 }}>
                  <Chip
                    label={book.subject}
                    color="primary"
                    size="small"
                    sx={{ fontWeight: 600, textTransform: 'capitalize' }}
                  />
                </Box>
                <Box sx={{ height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'grey.100', borderTopLeftRadius: 4, borderTopRightRadius: 4, margin: '8px' }}>
                  <img src={book.image} alt={book.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </Box>
                <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Typography variant="subtitle2" color="text.secondary" sx={{ fontWeight: 500, marginBottom: 0.5 }}>
                    {book.subject}
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    {book.title}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, marginTop: 1, marginBottom: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <Icon icon="tabler-book" fontSize="small" color="action" />
                      <Typography variant="body2" color="text.secondary">{book.totalBooks} sách</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <Icon icon="tabler-list" fontSize="small" color="action" />
                      <Typography variant="body2" color="text.secondary">{book.totalChapters} chương</Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, marginBottom: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <Icon icon="tabler-shopping-cart" fontSize="small" color="action" />
                      <Typography variant="body2" color="text.secondary">{book.totalPurchases} người mua</Typography>
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

export default dynamic(() => Promise.resolve(BooksPage), { ssr: false }) 
