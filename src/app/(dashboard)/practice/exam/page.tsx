'use client'

import { useState } from 'react'

import { useRouter } from 'next/navigation'

import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Divider,
  Grid,
  IconButton,
  LinearProgress,
  Paper,
  Typography,
  alpha
} from '@mui/material'

import {
  Assignment as AssignmentIcon,
  Biotech as BiotechIcon,
  EmojiEvents as EmojiEventsIcon,
  MoreVert as MoreVertIcon,
  School as SchoolIcon,
  Science as ScienceIcon,
  TrendingUp as TrendingUpIcon,
} from '@mui/icons-material'

const ExamPage = () => {
  const router = useRouter()
  const [subject, setSubject] = useState('')
  const [selectedExam, setSelectedExam] = useState('')
  const [examType, setExamType] = useState('full')

  const subjects = [
    { 
      value: 'math', 
      label: 'Toán học',
      icon: <SchoolIcon />,
      color: 'primary',
      description: 'Đề thi thử môn Toán học',
      totalExams: 10,
      completedExams: 3
    },
    { 
      value: 'physics', 
      label: 'Vật lý',
      icon: <ScienceIcon />,
      color: 'success',
      description: 'Đề thi thử môn Vật lý',
      totalExams: 8,
      completedExams: 2
    },
    { 
      value: 'chemistry', 
      label: 'Hóa học',
      icon: <BiotechIcon />,
      color: 'warning',
      description: 'Đề thi thử môn Hóa học',
      totalExams: 8,
      completedExams: 1
    }
  ]

  const examTypes = [
    {
      value: 'full',
      label: 'Đề thi đầy đủ',
      icon: <AssignmentIcon />,
      description: 'Làm bài thi đầy đủ với thời gian quy định'
    },
    {
      value: 'practice',
      label: 'Luyện tập trắc nghiệm',
      icon: <TrendingUpIcon />,
      description: 'Luyện tập từng câu trắc nghiệm'
    }
  ]

  // Mock data cho danh sách đề thi
  const examList = {
    math: [
      {
        id: 'math-1',
        title: 'Đề thi thử Toán học số 1',
        difficulty: 'easy',
        time: 90,
        questions: 50,
        completed: false
      },
      {
        id: 'math-2',
        title: 'Đề thi thử Toán học số 2',
        difficulty: 'medium',
        time: 90,
        questions: 50,
        completed: true
      },
      {
        id: 'math-3',
        title: 'Đề thi thử Toán học số 3',
        difficulty: 'hard',
        time: 90,
        questions: 50,
        completed: false
      }
    ],
    physics: [
      {
        id: 'physics-1',
        title: 'Đề thi thử Vật lý số 1',
        difficulty: 'easy',
        time: 60,
        questions: 40,
        completed: false
      },
      {
        id: 'physics-2',
        title: 'Đề thi thử Vật lý số 2',
        difficulty: 'medium',
        time: 60,
        questions: 40,
        completed: true
      }
    ],
    chemistry: [
      {
        id: 'chemistry-1',
        title: 'Đề thi thử Hóa học số 1',
        difficulty: 'easy',
        time: 60,
        questions: 40,
        completed: false
      }
    ]
  }

  const handleStartExam = () => {
    if (!selectedExam) return
    router.push(`/practice/exam/${subject}/${selectedExam}?type=${examType}`)
  }

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

  const getDifficultyLabel = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return 'Dễ'
      case 'medium':
        return 'Trung bình'
      case 'hard':
        return 'Khó'
      default:
        return difficulty
    }
  }

  return (
    <Grid container spacing={4}>
      {/* Phần chọn loại đề thi */}
      <Grid item xs={12}>
        <Card elevation={2} sx={{ borderRadius: 2 }}>
          <CardHeader 
            title={
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                Chọn loại đề thi
              </Typography>
            }
            action={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
          />
          <Divider />
          <CardContent>
            <Grid container spacing={3}>
              {examTypes.map((type) => (
                <Grid item xs={12} md={6} key={type.value}>
                  <Paper
                    elevation={examType === type.value ? 4 : 1}
                    sx={{
                      p: 3,
                      cursor: 'pointer',
                      border: 2,
                      borderColor: examType === type.value ? 'primary.main' : 'transparent',
                      borderRadius: 2,
                      transition: 'all 0.2s ease',
                      position: 'relative',
                      '&:hover': {
                        borderColor: 'primary.main',
                        boxShadow: (theme) => `0 4px 12px ${alpha(theme.palette.primary.main, 0.15)}`
                      }
                    }}
                    onClick={() => setExamType(type.value)}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Avatar 
                        sx={{ 
                          bgcolor: examType === type.value ? 'primary.light' : 'action.hover',
                          color: examType === type.value ? 'primary.main' : 'text.secondary',
                          mr: 2,
                          width: 48,
                          height: 48,
                          transition: 'all 0.2s ease'
                        }}
                      >
                        {type.icon}
                      </Avatar>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {type.label}
                      </Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary" sx={{ pl: 7 }}>
                      {type.description}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      {/* Phần chọn môn học và đề thi */}
      <Grid item xs={12}>
        <Card elevation={2} sx={{ borderRadius: 2 }}>
          <CardHeader 
            title={
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                Chọn môn học và đề thi
              </Typography>
            }
            action={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
          />
          <Divider />
          <CardContent>
            <Grid container spacing={3}>
              {subjects.map((sub) => (
                <Grid item xs={12} md={4} key={sub.value}>
                  <Paper
                    elevation={subject === sub.value ? 4 : 1}
                    sx={{
                      p: 3,
                      cursor: 'pointer',
                      border: 2,
                      borderColor: subject === sub.value ? `${sub.color}.main` : 'transparent',
                      borderRadius: 2,
                      transition: 'all 0.2s ease',
                      position: 'relative',
                      '&:hover': {
                        borderColor: `${sub.color}.main`,
                        boxShadow: (theme) => `0 4px 12px ${alpha(theme.palette[sub.color as 'primary' | 'success' | 'warning' | 'error'].main, 0.15)}`
                      }
                    }}
                    onClick={() => setSubject(sub.value)}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Avatar 
                        sx={{ 
                          bgcolor: `${sub.color}.light`,
                          color: `${sub.color}.main`,
                          mr: 2,
                          width: 48,
                          height: 48,
                          transition: 'all 0.2s ease'
                        }}
                      >
                        {sub.icon}
                      </Avatar>
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 600 }}>
                          {sub.label}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {sub.description}
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={{ mt: 3 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography variant="body2" color="text.secondary">
                          Tiến độ
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 600 }}>
                          {sub.completedExams}/{sub.totalExams} đề
                        </Typography>
                      </Box>
                      <LinearProgress 
                        variant="determinate" 
                        value={(sub.completedExams / sub.totalExams) * 100}
                        sx={{
                          height: 8,
                          borderRadius: 4,
                          bgcolor: `${sub.color}.lighter`,
                          '& .MuiLinearProgress-bar': {
                            bgcolor: `${sub.color}.main`,
                            borderRadius: 4
                          }
                        }}
                      />
                    </Box>
                  </Paper>
                </Grid>
              ))}
            </Grid>

            {/* Danh sách đề thi */}
            {subject && (
              <>
                <Box sx={{ mt: 4, mb: 3 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Danh sách đề thi {subjects.find(s => s.value === subject)?.label}
                  </Typography>
                </Box>
                <Grid container spacing={3}>
                  {examList[subject as keyof typeof examList]?.map((exam) => (
                    <Grid item xs={12} md={6} key={exam.id}>
                      <Paper
                        elevation={selectedExam === exam.id ? 4 : 1}
                        sx={{
                          p: 3,
                          cursor: 'pointer',
                          border: 2,
                          borderColor: selectedExam === exam.id ? 'primary.main' : 'transparent',
                          borderRadius: 2,
                          transition: 'all 0.2s ease',
                          position: 'relative',
                          height: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                          '&:hover': {
                            borderColor: 'primary.main',
                            boxShadow: (theme) => `0 4px 12px ${alpha(theme.palette.primary.main, 0.15)}`
                          }
                        }}
                        onClick={() => setSelectedExam(exam.id)}
                      >
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                          <Typography variant="h6" sx={{ fontWeight: 600, flex: 1, pr: 2 }}>
                            {exam.title}
                          </Typography>
                          <Chip 
                            label={getDifficultyLabel(exam.difficulty)}
                            color={getDifficultyColor(exam.difficulty) as any}
                            size="small"
                            sx={{ fontWeight: 600, flexShrink: 0 }}
                          />
                        </Box>
                        <Box sx={{ display: 'flex', gap: 3, mb: 2 }}>
                          <Box>
                            <Typography variant="body2" color="text.secondary">
                              Thời gian
                            </Typography>
                            <Typography variant="body1" sx={{ fontWeight: 600 }}>
                              {exam.time} phút
                            </Typography>
                          </Box>
                          <Box>
                            <Typography variant="body2" color="text.secondary">
                              Số câu hỏi
                            </Typography>
                            <Typography variant="body1" sx={{ fontWeight: 600 }}>
                              {exam.questions} câu
                            </Typography>
                          </Box>
                        </Box>
                        <Box sx={{ mt: 'auto', pt: 2 }}>
                          {exam.completed && (
                            <Chip 
                              label="Đã hoàn thành"
                              color="success"
                              size="small"
                            />
                          )}
                        </Box>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>

                {/* Nút bắt đầu */}
                {selectedExam && (
                  <Box sx={{ mt: 4 }}>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      size="large"
                      onClick={handleStartExam}
                      startIcon={<EmojiEventsIcon />}
                      sx={{
                        py: 2,
                        borderRadius: 2,
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        textTransform: 'none',
                        boxShadow: (theme) => `0 8px 16px ${alpha(theme.palette.primary.main, 0.25)}`,
                        '&:hover': {
                          transform: 'translateY(-2px)',
                          boxShadow: (theme) => `0 12px 20px ${alpha(theme.palette.primary.main, 0.3)}`
                        },
                        transition: 'all 0.3s ease'
                      }}
                    >
                      Bắt đầu làm bài
                    </Button>
                  </Box>
                )}
              </>
            )}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default ExamPage 
