'use client'

import { useState } from 'react'

import { useRouter } from 'next/navigation'

import {
  AccessTime as AccessTimeIcon,
  CheckCircle as CheckCircleIcon,
  Clear as ClearIcon,
  HelpOutline as HelpOutlineIcon,
  History as HistoryIcon,
  RemoveCircle as RemoveCircleIcon,
  Search as SearchIcon
} from '@mui/icons-material'
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography
} from '@mui/material'

const completedExamList = [
  {
    id: 'math-2',
    title: 'Đề thi thử Toán học số 2',
    difficulty: 'medium',
    time: 90,
    questions: 50,
    subject: 'Toán học',
    score: 8.5,
    correctAnswers: 42,
    wrongAnswers: 8,
    completedAt: '2024-03-15T10:30:00',
    timeSpent: 85
  },
  {
    id: 'physics-2',
    title: 'Đề thi thử Vật lý số 2',
    difficulty: 'medium',
    time: 60,
    questions: 40,
    subject: 'Vật lý',
    score: 7.5,
    correctAnswers: 30,
    wrongAnswers: 10,
    completedAt: '2024-03-14T15:45:00',
    timeSpent: 55
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
  { value: 'Hóa học', label: 'Hóa học' }
]

const sortOptions = [
  { value: 'newest', label: 'Mới nhất' },
  { value: 'oldest', label: 'Cũ nhất' },
  { value: 'score', label: 'Điểm cao nhất' },
  { value: 'time', label: 'Thời gian làm' }
]

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'easy':
      return 'success'
    case 'medium':
      return 'warning'
    case 'hard':
      return 'error'
    default:
      return 'default'
  }
}

const getScoreColor = (score: number) => {
  if (score >= 8) return 'success'
  if (score >= 6.5) return 'warning'

  return 'error'
}

const CompletedExamsPage = () => {
  const router = useRouter()

  const [filters, setFilters] = useState({
    difficulty: '',
    subject: '',
    searchQuery: ''
  })

  const [sort, setSort] = useState('newest')

  // Lọc đề thi
  let filteredExams = completedExamList.filter(exam => {
    let ok = true

    if (filters.difficulty) ok = ok && exam.difficulty === filters.difficulty
    if (filters.subject) ok = ok && exam.subject === filters.subject
    if (filters.searchQuery) ok = ok && exam.title.toLowerCase().includes(filters.searchQuery.toLowerCase())

    return ok
  })

  // Sắp xếp
  if (sort === 'newest') filteredExams = [...filteredExams].sort((a, b) => new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime())
  if (sort === 'oldest') filteredExams = [...filteredExams].sort((a, b) => new Date(a.completedAt).getTime() - new Date(b.completedAt).getTime())
  if (sort === 'score') filteredExams = [...filteredExams].sort((a, b) => b.score - a.score)
  if (sort === 'time') filteredExams = [...filteredExams].sort((a, b) => a.timeSpent - b.timeSpent)

  const handleReview = (examId: string) => {
    router.push(`/practice/completed-exams/${examId}/review`)
  }

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
            placeholder="Tìm kiếm đề thi..."
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
          <Button
            fullWidth
            variant="outlined"
            color="secondary"
            startIcon={<ClearIcon />}
            onClick={() => setFilters({ difficulty: '', subject: '', searchQuery: '' })}
            sx={{ fontWeight: 600 }}
          >
            Xóa tất cả
          </Button>
        </Paper>
      </Grid>
      {/* Main content */}
      <Grid item xs={12} md={9}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, gap: 2, flexWrap: 'wrap' }}>
          <Typography variant="h5" sx={{ fontWeight: 700, flex: 1 }}>
            Đề thi đã làm
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
          {filteredExams.length === 0 && (
            <Grid item xs={12}>
              <Paper sx={{ p: 5, textAlign: 'center', color: 'text.secondary' }}>
                Không tìm thấy đề thi đã làm.
              </Paper>
            </Grid>
          )}
          {filteredExams.map(exam => (
            <Grid item xs={12} sm={6} md={4} key={exam.id}>
              <Card elevation={3} sx={{ borderRadius: 1, height: '100%', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'visible' }}>
                <Box sx={{ position: 'absolute', top: 16, left: 16, zIndex: 2 }}>
                  <Chip
                    label={difficultyOptions.find(d => d.value === exam.difficulty)?.label}
                    color={getDifficultyColor(exam.difficulty) as any}
                    size="small"
                    sx={{ fontWeight: 600, textTransform: 'capitalize' }}
                  />
                </Box>
                <Box sx={{ height: 120, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'grey.100', borderTopLeftRadius: 4, borderTopRightRadius: 4, margin: '8px' }}>
                  <Avatar variant="rounded" sx={{ width: 80, height: 80, bgcolor: 'white', border: '2px solid', borderColor: 'primary.light' }}>
                    <HistoryIcon color="primary" sx={{ fontSize: 48 }} />
                  </Avatar>
                </Box>
                <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Typography variant="subtitle2" color="text.secondary" sx={{ fontWeight: 500, mb: 0.5 }}>
                    {exam.subject}
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 700, minHeight: 48 }}>
                    {exam.title}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 1, mb: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <HelpOutlineIcon fontSize="small" color="action" />
                      <Typography variant="body2" color="text.secondary">{exam.questions} câu</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <AccessTimeIcon fontSize="small" color="action" />
                      <Typography variant="body2" color="text.secondary">{exam.timeSpent}/{exam.time} phút</Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <CheckCircleIcon fontSize="small" color="success" />
                      <Typography variant="body2" color="text.secondary">{exam.correctAnswers} đúng</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <RemoveCircleIcon fontSize="small" color="error" />
                      <Typography variant="body2" color="text.secondary">{exam.wrongAnswers} sai</Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                    <Typography variant="h6" color={getScoreColor(exam.score)} sx={{ fontWeight: 700 }}>
                      {exam.score.toFixed(1)}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      điểm
                    </Typography>
                  </Box>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={() => handleReview(exam.id)}
                    sx={{ mt: 'auto', fontWeight: 700, borderRadius: 1, textTransform: 'none', py: 1.2 }}
                  >
                    Xem lại
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

export default CompletedExamsPage 
