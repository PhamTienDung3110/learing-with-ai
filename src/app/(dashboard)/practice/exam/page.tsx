'use client'

import { useState } from 'react'

import { useRouter } from 'next/navigation'

import {
  AccessTime as AccessTimeIcon,
  Clear as ClearIcon,
  EmojiEvents as EmojiEventsIcon,
  HelpOutline as HelpOutlineIcon,
  Search as SearchIcon,
  Visibility as VisibilityIcon,
  Close as CloseIcon
} from '@mui/icons-material'
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
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

const examList = [
  // Toán
  {
    id: 'math-1',
    title: 'Đề thi thử Toán học số 1',
    difficulty: 'easy',
    time: 90,
    questions: 50,
    completed: false,
    subject: 'Toán học',
    views: 120,
    attempts: 10
  },
  {
    id: 'math-2',
    title: 'Đề thi thử Toán học số 2',
    difficulty: 'medium',
    time: 90,
    questions: 50,
    completed: true,
    subject: 'Toán học',
    views: 80,
    attempts: 5
  },
  {
    id: 'math-3',
    title: 'Đề thi thử Toán học số 3',
    difficulty: 'hard',
    time: 90,
    questions: 50,
    completed: false,
    subject: 'Toán học',
    views: 60,
    attempts: 2
  },

  // Lý
  {
    id: 'physics-1',
    title: 'Đề thi thử Vật lý số 1',
    difficulty: 'easy',
    time: 60,
    questions: 40,
    completed: false,
    subject: 'Vật lý',
    views: 100,
    attempts: 7
  },
  {
    id: 'physics-2',
    title: 'Đề thi thử Vật lý số 2',
    difficulty: 'medium',
    time: 60,
    questions: 40,
    completed: true,
    subject: 'Vật lý',
    views: 90,
    attempts: 4
  },

  // Hóa
  {
    id: 'chemistry-1',
    title: 'Đề thi thử Hóa học số 1',
    difficulty: 'easy',
    time: 60,
    questions: 40,
    completed: false,
    subject: 'Hóa học',
    views: 70,
    attempts: 3
  }
]

const difficultyOptions = [
  { value: '', label: 'Tất cả' },
  { value: 'easy', label: 'Dễ' },
  { value: 'medium', label: 'Trung bình' },
  { value: 'hard', label: 'Khó' }
]

const questionCountOptions = [
  { value: '', label: 'Tất cả' },
  { value: '0-20', label: '0-20 câu' },
  { value: '21-40', label: '21-40 câu' },
  { value: '41-60', label: '41-60 câu' },
  { value: '61-100', label: '61-100 câu' }
]

const sortOptions = [
  { value: 'newest', label: 'Mới nhất' },
  { value: 'popular', label: 'Phổ biến' },
  { value: 'attempts', label: 'Bán chạy' },
  { value: 'questions', label: 'Số câu' }
]

const subjectOptions = [
  { value: '', label: 'Tất cả' },
  { value: 'Toán học', label: 'Toán học' },
  { value: 'Vật lý', label: 'Vật lý' },
  { value: 'Hóa học', label: 'Hóa học' }
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

const ExamPage = () => {
  const router = useRouter();
  const [selectedExam, setSelectedExam] = useState<any>(null);
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);

  const [filters, setFilters] = useState({
    difficulty: '',
    questionCount: '',
    searchQuery: '',
    subject: ''
  })

  const [sort, setSort] = useState('newest')

  // Lọc đề thi
  let filteredExams = examList.filter(exam => {
    let ok = true

    if (filters.difficulty) ok = ok && exam.difficulty === filters.difficulty
    if (filters.subject) ok = ok && exam.subject === filters.subject

    if (filters.questionCount) {
      const [min, max] = filters.questionCount.split('-').map(Number)

      ok = ok && exam.questions >= min && exam.questions <= max
    }

    if (filters.searchQuery) ok = ok && exam.title.toLowerCase().includes(filters.searchQuery.toLowerCase())

    return ok
  })

  // Sắp xếp
  if (sort === 'newest') filteredExams = [...filteredExams].reverse()
  if (sort === 'popular') filteredExams = [...filteredExams].sort((a, b) => b.views - a.views)
  if (sort === 'attempts') filteredExams = [...filteredExams].sort((a, b) => b.attempts - a.attempts)
  if (sort === 'questions') filteredExams = [...filteredExams].sort((a, b) => b.questions - a.questions)

  const handleStartExam = (exam: any) => {
    setSelectedExam(exam);
    setOpenConfirmDialog(true);
  };

  const handleConfirmStart = () => {
    setOpenConfirmDialog(false);
    router.push(`/practice/exam/${selectedExam.subject.toLowerCase()}/${selectedExam.difficulty}`);
  };

  return (
    <>
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
            <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
              Số câu hỏi
            </Typography>
            <RadioGroup
              value={filters.questionCount}
              onChange={e => setFilters(f => ({ ...f, questionCount: e.target.value }))}
              sx={{ mb: 2 }}
            >
              {questionCountOptions.slice(1).map(opt => (
                <FormControlLabel key={opt.value} value={opt.value} control={<Radio size="small" />} label={opt.label} />
              ))}
            </RadioGroup>
            <Divider sx={{ mb: 2 }} />
            <Button
              fullWidth
              variant="outlined"
              color="secondary"
              startIcon={<ClearIcon />}
              onClick={() => setFilters({ difficulty: '', questionCount: '', searchQuery: '', subject: '' })}
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
              Danh sách đề thi
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
                  Không tìm thấy đề thi phù hợp.
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
                      <HelpOutlineIcon color="primary" sx={{ fontSize: 48 }} />
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
                        <Typography variant="body2" color="text.secondary">{exam.time} phút</Typography>
                      </Box>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <VisibilityIcon fontSize="small" color="action" />
                        <Typography variant="body2" color="text.secondary">{exam.views}</Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <EmojiEventsIcon fontSize="small" color="action" />
                        <Typography variant="body2" color="text.secondary">{exam.attempts}</Typography>
                      </Box>
                    </Box>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleStartExam(exam)}
                      fullWidth
                      sx={{ mt: 'auto', fontWeight: 700, borderRadius: 1, textTransform: 'none', py: 1.2 }}
                    >
                      Vào thi
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      <Dialog
        open={openConfirmDialog}
        onClose={() => setOpenConfirmDialog(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box sx={{ fontWeight: 700 }}>
            Xác nhận vào thi
          </Box>
          <IconButton onClick={() => setOpenConfirmDialog(false)}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          {selectedExam && (
            <Box sx={{ mt: 2 }}>
              <Box sx={{ mb: 2, fontWeight: 600, fontSize: '1.25rem' }}>
                {selectedExam.title}
              </Box>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <HelpOutlineIcon color="action" />
                    <Typography>Số câu hỏi: {selectedExam.questions}</Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <AccessTimeIcon color="action" />
                    <Typography>Thời gian: {selectedExam.time} phút</Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Chip
                      label={difficultyOptions.find(d => d.value === selectedExam.difficulty)?.label}
                      color={getDifficultyColor(selectedExam.difficulty) as any}
                      size="small"
                    />
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Typography>Môn: {selectedExam.subject}</Typography>
                  </Box>
                </Grid>
              </Grid>
              <Typography sx={{ mt: 3, color: 'warning.main', fontWeight: 500 }}>
                Lưu ý: Khi bắt đầu làm bài, thời gian sẽ được tính ngay lập tức và không thể tạm dừng.
              </Typography>
            </Box>
          )}
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 3 }}>
          <Button
            variant="outlined"
            onClick={() => setOpenConfirmDialog(false)}
            sx={{ fontWeight: 600 }}
          >
            Hủy
          </Button>
          <Button
            variant="contained"
            onClick={handleConfirmStart}
            sx={{ fontWeight: 600 }}
          >
            Xác nhận vào thi
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default ExamPage 
