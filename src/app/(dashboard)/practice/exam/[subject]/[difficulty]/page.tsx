'use client'

import { useEffect, useState } from 'react'


import { useRouter } from 'next/navigation'

import {
  Cancel as CancelIcon,
  CheckCircle as CheckCircleIcon,
  Flag as FlagIcon,
  NavigateBefore as NavigateBeforeIcon,
  NavigateNext as NavigateNextIcon,
  Timer as TimerIcon
} from '@mui/icons-material'
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  LinearProgress,
  Paper,
  Radio,
  RadioGroup,
  Typography
} from '@mui/material'

// Mock data cho đề thi
const mockExam = {
  title: 'Đề thi thử môn Toán học',
  duration: 90, // phút
  totalQuestions: 20,
  questions: [
    {
      id: 1,
      content: 'Câu 1: Giải phương trình: x² + 2x - 3 = 0',
      options: [
        { id: 'A', content: 'x = 1 hoặc x = -3' },
        { id: 'B', content: 'x = -1 hoặc x = 3' },
        { id: 'C', content: 'x = 1 hoặc x = 3' },
        { id: 'D', content: 'x = -1 hoặc x = -3' }
      ],
      correctAnswer: 'A',
      explanation: 'Phương trình x² + 2x - 3 = 0 có Δ = 4 + 12 = 16 > 0 nên có 2 nghiệm phân biệt: x = 1 hoặc x = -3'
    },
    {
      id: 2,
      content: 'Câu 2: Tìm tập xác định của hàm số y = √(x² - 4)',
      options: [
        { id: 'A', content: 'D = (-∞, -2] ∪ [2, +∞)' },
        { id: 'B', content: 'D = (-∞, -2) ∪ (2, +∞)' },
        { id: 'C', content: 'D = [-2, 2]' },
        { id: 'D', content: 'D = (-2, 2)' }
      ],
      correctAnswer: 'A',
      explanation: 'Hàm số xác định khi x² - 4 ≥ 0 ⇔ x ≤ -2 hoặc x ≥ 2'
    },
    {
      id: 3,
      content: 'Câu 3: Tính đạo hàm của hàm số y = sin²x',
      options: [
        { id: 'A', content: 'y\' = 2sinx' },
        { id: 'B', content: 'y\' = 2sinx.cosx' },
        { id: 'C', content: 'y\' = sin2x' },
        { id: 'D', content: 'y\' = 2cosx' }
      ],
      correctAnswer: 'B',
      explanation: 'y = sin²x ⇒ y\' = 2sinx.(sinx)\' = 2sinx.cosx'
    },
    {
      id: 4,
      content: 'Câu 4: Tìm giá trị lớn nhất của hàm số y = -x² + 4x - 3',
      options: [
        { id: 'A', content: '1' },
        { id: 'B', content: '2' },
        { id: 'C', content: '3' },
        { id: 'D', content: '4' }
      ],
      correctAnswer: 'A',
      explanation: 'y = -x² + 4x - 3 = -(x-2)² + 1 ≤ 1 với mọi x'
    },
    {
      id: 5,
      content: 'Câu 5: Giải bất phương trình: log₂(x-1) > 2',
      options: [
        { id: 'A', content: 'x > 5' },
        { id: 'B', content: 'x > 3' },
        { id: 'C', content: 'x > 4' },
        { id: 'D', content: 'x > 2' }
      ],
      correctAnswer: 'A',
      explanation: 'log₂(x-1) > 2 ⇔ x-1 > 2² ⇔ x > 5'
    },
    {
      id: 6,
      content: 'Câu 6: Tính tích phân I = ∫(0 to 1) x²dx',
      options: [
        { id: 'A', content: '1/2' },
        { id: 'B', content: '1/3' },
        { id: 'C', content: '1/4' },
        { id: 'D', content: '1/5' }
      ],
      correctAnswer: 'B',
      explanation: 'I = ∫(0 to 1) x²dx = [x³/3](0 to 1) = 1/3'
    },
    {
      id: 7,
      content: 'Câu 7: Tìm số phức z thỏa mãn: z + 2z̅ = 3 + 4i',
      options: [
        { id: 'A', content: 'z = 1 + 4i' },
        { id: 'B', content: 'z = 1 - 4i' },
        { id: 'C', content: 'z = 3 + 4i' },
        { id: 'D', content: 'z = 3 - 4i' }
      ],
      correctAnswer: 'A',
      explanation: 'Đặt z = a + bi, giải hệ phương trình tìm được z = 1 + 4i'
    },
    {
      id: 8,
      content: 'Câu 8: Tính thể tích khối chóp tứ giác đều có cạnh đáy bằng a và chiều cao bằng h',
      options: [
        { id: 'A', content: 'V = a²h/3' },
        { id: 'B', content: 'V = a²h/2' },
        { id: 'C', content: 'V = a²h' },
        { id: 'D', content: 'V = 2a²h/3' }
      ],
      correctAnswer: 'A',
      explanation: 'V = (1/3).S.h = (1/3).a².h'
    },
    {
      id: 9,
      content: 'Câu 9: Tìm m để phương trình x² - 2mx + m² - 1 = 0 có hai nghiệm phân biệt',
      options: [
        { id: 'A', content: 'm > 1' },
        { id: 'B', content: 'm < -1' },
        { id: 'C', content: 'm ≠ 0' },
        { id: 'D', content: 'm > 1 hoặc m < -1' }
      ],
      correctAnswer: 'D',
      explanation: 'Δ\' = m² - (m² - 1) = 1 > 0 với mọi m, nên phương trình luôn có 2 nghiệm phân biệt'
    },
    {
      id: 10,
      content: 'Câu 10: Tính giới hạn lim(x→0) (sinx/x)',
      options: [
        { id: 'A', content: '0' },
        { id: 'B', content: '1' },
        { id: 'C', content: '∞' },
        { id: 'D', content: 'Không tồn tại' }
      ],
      correctAnswer: 'B',
      explanation: 'Đây là giới hạn cơ bản, lim(x→0) (sinx/x) = 1'
    },
    {
      id: 11,
      content: 'Câu 11: Tìm tập nghiệm của bất phương trình: 2^x > 8',
      options: [
        { id: 'A', content: 'x > 3' },
        { id: 'B', content: 'x > 2' },
        { id: 'C', content: 'x > 4' },
        { id: 'D', content: 'x > 1' }
      ],
      correctAnswer: 'A',
      explanation: '2^x > 8 ⇔ 2^x > 2³ ⇔ x > 3'
    },
    {
      id: 12,
      content: 'Câu 12: Tính đạo hàm của hàm số y = ln(x² + 1)',
      options: [
        { id: 'A', content: 'y\' = 2x/(x² + 1)' },
        { id: 'B', content: 'y\' = 1/(x² + 1)' },
        { id: 'C', content: 'y\' = 2x' },
        { id: 'D', content: 'y\' = x/(x² + 1)' }
      ],
      correctAnswer: 'A',
      explanation: 'y\' = (x² + 1)\'/(x² + 1) = 2x/(x² + 1)'
    },
    {
      id: 13,
      content: 'Câu 13: Tìm giá trị nhỏ nhất của hàm số y = |x| + |x-1|',
      options: [
        { id: 'A', content: '0' },
        { id: 'B', content: '1' },
        { id: 'C', content: '2' },
        { id: 'D', content: '3' }
      ],
      correctAnswer: 'B',
      explanation: 'y = |x| + |x-1| ≥ |x - (x-1)| = 1, dấu "=" xảy ra khi 0 ≤ x ≤ 1'
    },
    {
      id: 14,
      content: 'Câu 14: Giải phương trình: cos²x - sin²x = 0',
      options: [
        { id: 'A', content: 'x = π/4 + kπ/2' },
        { id: 'B', content: 'x = π/4 + kπ' },
        { id: 'C', content: 'x = π/2 + kπ' },
        { id: 'D', content: 'x = kπ' }
      ],
      correctAnswer: 'A',
      explanation: 'cos²x - sin²x = 0 ⇔ cos2x = 0 ⇔ x = π/4 + kπ/2'
    },
    {
      id: 15,
      content: 'Câu 15: Tính tích phân I = ∫(0 to π) sinxdx',
      options: [
        { id: 'A', content: '0' },
        { id: 'B', content: '1' },
        { id: 'C', content: '2' },
        { id: 'D', content: 'π' }
      ],
      correctAnswer: 'C',
      explanation: 'I = ∫(0 to π) sinxdx = [-cosx](0 to π) = 2'
    },
    {
      id: 16,
      content: 'Câu 16: Tìm số phức z thỏa mãn: |z| = 2 và |z + 2| = 2',
      options: [
        { id: 'A', content: 'z = -1 ± √3i' },
        { id: 'B', content: 'z = 1 ± √3i' },
        { id: 'C', content: 'z = ±2i' },
        { id: 'D', content: 'z = ±2' }
      ],
      correctAnswer: 'A',
      explanation: 'Giải hệ phương trình tìm được z = -1 ± √3i'
    },
    {
      id: 17,
      content: 'Câu 17: Tính thể tích khối cầu có bán kính R',
      options: [
        { id: 'A', content: 'V = 4πR³/3' },
        { id: 'B', content: 'V = πR³' },
        { id: 'C', content: 'V = 4πR²' },
        { id: 'D', content: 'V = 2πR³/3' }
      ],
      correctAnswer: 'A',
      explanation: 'Công thức tính thể tích khối cầu: V = 4πR³/3'
    },
    {
      id: 18,
      content: 'Câu 18: Tìm m để hàm số y = x³ - 3x² + mx + 1 có cực trị',
      options: [
        { id: 'A', content: 'm < 3' },
        { id: 'B', content: 'm > 3' },
        { id: 'C', content: 'm = 3' },
        { id: 'D', content: 'm ≠ 3' }
      ],
      correctAnswer: 'A',
      explanation: 'y\' = 3x² - 6x + m, hàm số có cực trị khi y\' = 0 có 2 nghiệm phân biệt ⇔ Δ\' > 0 ⇔ m < 3'
    },
    {
      id: 19,
      content: 'Câu 19: Tính giới hạn lim(x→+∞) (√(x² + 1) - x)',
      options: [
        { id: 'A', content: '0' },
        { id: 'B', content: '1' },
        { id: 'C', content: '∞' },
        { id: 'D', content: 'Không tồn tại' }
      ],
      correctAnswer: 'A',
      explanation: 'Nhân liên hợp và rút gọn được lim = 0'
    },
    {
      id: 20,
      content: 'Câu 20: Tìm tập nghiệm của bất phương trình: log₃(x-1) ≤ 2',
      options: [
        { id: 'A', content: '1 < x ≤ 10' },
        { id: 'B', content: 'x ≥ 10' },
        { id: 'C', content: 'x ≤ 10' },
        { id: 'D', content: 'x > 1' }
      ],
      correctAnswer: 'A',
      explanation: 'log₃(x-1) ≤ 2 ⇔ 0 < x-1 ≤ 3² ⇔ 1 < x ≤ 10'
    }
  ]
}

const ExamPage = () => {

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [timeLeft, setTimeLeft] = useState(mockExam.duration * 60) // Đổi phút thành giây
  const [showSubmitDialog, setShowSubmitDialog] = useState(false)
  const router = useRouter()
  const isSubmitted = false;

  // Xử lý đếm ngược thời gian
  useEffect(() => {
    if (timeLeft > 0 && !isSubmitted) {
      const timer = setInterval(() => {
        setTimeLeft(prev => prev - 1)
      }, 1000)


      return () => clearInterval(timer)
    }
  }, [timeLeft, isSubmitted])

  const handleAnswerChange = (questionId: number, answer: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }))
  }

  const handleNextQuestion = () => {
    if (currentQuestion < mockExam.questions.length - 1) {
      setCurrentQuestion(prev => prev + 1)
    }
  }

  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1)
    }
  }

  const handleSubmit = () => {
    router.push(`/practice/completed-exams/math-2/review`)
  }

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60


    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
  }

  const calculateScore = () => {
    let correctAnswers = 0

    mockExam.questions.forEach(question => {
      if (answers[question.id] === question.correctAnswer) {
        correctAnswers++
      }
    })

    return (correctAnswers / mockExam.questions.length) * 10
  }

  return (
    <Grid container spacing={3}>
      {/* Sidebar */}
      <Grid item xs={12} md={3}>
        <Card>
          <CardContent>
            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" gutterBottom>
                Thời gian còn lại
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <TimerIcon sx={{ mr: 1, color: timeLeft < 300 ? 'error.main' : 'primary.main' }} />
                <Typography variant="h4" color={timeLeft < 300 ? 'error.main' : 'primary.main'}>
                  {formatTime(timeLeft)}
                </Typography>
              </Box>
              <LinearProgress
                variant="determinate"
                value={(timeLeft / (mockExam.duration * 60)) * 100}
                color={timeLeft < 300 ? 'error' : 'primary'}
              />
            </Box>

            <Divider sx={{ my: 2 }} />

            <Typography variant="h6" gutterBottom>
              Danh sách câu hỏi
            </Typography>
            <Grid container spacing={1}>
              {mockExam.questions.map((_, index) => (
                <Grid item xs={2} key={index}>
                  <Paper
                    sx={{
                      p: 1,
                      textAlign: 'center',
                      cursor: 'pointer',
                      bgcolor: currentQuestion === index ? 'primary.main' : 'background.paper',
                      color: currentQuestion === index ? 'primary.contrastText' : 'text.primary',
                      border: answers[index + 1] ? 2 : 1,
                      borderColor: answers[index + 1] ? 'success.main' : 'divider',
                      '&:hover': {
                        bgcolor: currentQuestion === index ? 'primary.dark' : 'action.hover'
                      }
                    }}
                    onClick={() => setCurrentQuestion(index)}
                  >
                    {index + 1}
                  </Paper>
                </Grid>
              ))}
            </Grid>

            <Box sx={{ mt: 3 }}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={() => setShowSubmitDialog(true)}
                disabled={isSubmitted}
              >
                Nộp bài
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Grid>

      {/* Main content */}
      <Grid item xs={12} md={9}>
        <Card>
          <CardContent>
            {!isSubmitted ? (
              <>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                  <Typography variant="h5">
                    Câu {currentQuestion + 1}/{mockExam.questions.length}
                  </Typography>
                  <Chip
                    icon={<FlagIcon />}
                    label="Đánh dấu"
                    color="warning"
                    variant="outlined"
                  />
                </Box>

                <Typography variant="body1" sx={{ mb: 3 }}>
                  {mockExam.questions[currentQuestion].content}
                </Typography>

                <FormControl component="fieldset">
                  <RadioGroup
                    value={answers[mockExam.questions[currentQuestion].id] || ''}
                    onChange={(e) => handleAnswerChange(mockExam.questions[currentQuestion].id, e.target.value)}
                  >
                    {mockExam.questions[currentQuestion].options.map((option) => (
                      <FormControlLabel
                        key={option.id}
                        value={option.id}
                        control={<Radio />}
                        label={option.content}
                        sx={{
                          mb: 2,
                          p: 2,
                          border: 1,
                          borderColor: 'divider',
                          borderRadius: 1,
                          '&:hover': {
                            bgcolor: 'action.hover'
                          }
                        }}
                      />
                    ))}
                  </RadioGroup>
                </FormControl>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
                  <Button
                    variant="outlined"
                    startIcon={<NavigateBeforeIcon />}
                    onClick={handlePrevQuestion}
                    disabled={currentQuestion === 0}
                  >
                    Câu trước
                  </Button>
                  <Button
                    variant="outlined"
                    endIcon={<NavigateNextIcon />}
                    onClick={handleNextQuestion}
                    disabled={currentQuestion === mockExam.questions.length - 1}
                  >
                    Câu tiếp
                  </Button>
                </Box>
              </>
            ) : (
              <Box>
                <Typography variant="h5" gutterBottom>
                  Kết quả bài thi
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Typography variant="h4" color="primary.main" sx={{ mr: 2 }}>
                    {calculateScore().toFixed(1)} điểm
                  </Typography>
                  <Chip
                    icon={calculateScore() >= 5 ? <CheckCircleIcon /> : <CancelIcon />}
                    label={calculateScore() >= 5 ? 'Đạt' : 'Không đạt'}
                    color={calculateScore() >= 5 ? 'success' : 'error'}
                  />
                </Box>
                <Typography variant="body1" gutterBottom>
                  Số câu đúng: {Object.values(answers).filter((answer, index) =>
                    answer === mockExam.questions[index].correctAnswer
                  ).length}/{mockExam.questions.length}
                </Typography>
              </Box>
            )}
          </CardContent>
        </Card>
      </Grid>

      {/* Dialog xác nhận nộp bài */}
      <Dialog open={showSubmitDialog} onClose={() => setShowSubmitDialog(false)}>
        <DialogTitle>Xác nhận nộp bài</DialogTitle>
        <DialogContent>
          <Typography>
            Bạn có chắc chắn muốn nộp bài thi? Sau khi nộp, bạn không thể thay đổi câu trả lời.
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
            Số câu đã làm: {Object.keys(answers).length}/{mockExam.questions.length}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowSubmitDialog(false)}>Hủy</Button>
          <Button onClick={handleSubmit} variant="contained" color="primary">
            Nộp bài
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  )
}

export default ExamPage 
