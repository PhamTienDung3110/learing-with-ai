'use client'

import { useState } from 'react'

import { useParams } from 'next/navigation'

import {
  Box,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid,
  Paper,
  Typography,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  IconButton,
  Avatar,
  CircularProgress
} from '@mui/material'
import {
  ExpandMore as ExpandMoreIcon,
  CheckCircle as CheckCircleIcon,
  RemoveCircle as RemoveCircleIcon,
  HelpOutline as HelpOutlineIcon,
  SmartToy as SmartToyIcon,
  Send as SendIcon,
  Close as CloseIcon
} from '@mui/icons-material'

// Mock data - trong thực tế sẽ lấy từ API
const examData = {
  id: 'math-2',
  title: 'Đề thi thử Toán học số 2',
  difficulty: 'medium',
  time: 90,
  subject: 'Toán học',
  score: 8.5,
  correctAnswers: 42,
  wrongAnswers: 8,
  completedAt: '2024-03-15T10:30:00',
  timeSpent: 85,
  questions: [
    {
      id: 1,
      question: 'Tìm tập xác định của hàm số y = √(x² - 4)',
      options: [
        'A. D = (-∞, -2] ∪ [2, +∞)',
        'B. D = (-∞, -2) ∪ (2, +∞)',
        'C. D = [-2, 2]',
        'D. D = (-2, 2)'
      ],
      correctAnswer: 0,
      userAnswer: 0,
      explanation: 'Để hàm số có nghĩa thì x² - 4 ≥ 0 ⇔ x ≤ -2 hoặc x ≥ 2. Vậy tập xác định là D = (-∞, -2] ∪ [2, +∞)'
    },
    {
      id: 2,
      question: 'Giải phương trình: 2x + 3 = 7',
      options: [
        'A. x = 2',
        'B. x = 3',
        'C. x = 4',
        'D. x = 5'
      ],
      correctAnswer: 0,
      userAnswer: 1,
      explanation: '2x + 3 = 7 ⇔ 2x = 4 ⇔ x = 2'
    },
    {
      id: 3,
      question: 'Tính đạo hàm của hàm số y = x³ + 2x² - 5x + 1',
      options: [
        'A. y\' = 3x² + 4x - 5',
        'B. y\' = 3x² + 2x - 5',
        'C. y\' = 3x² + 4x + 1',
        'D. y\' = 3x² + 2x + 1'
      ],
      correctAnswer: 0,
      userAnswer: 0,
      explanation: 'Áp dụng công thức đạo hàm của hàm số bậc 3: (x³)\' = 3x², (x²)\' = 2x, (x)\' = 1'
    },
    {
      id: 4,
      question: 'Tìm nghiệm của phương trình: x² - 5x + 6 = 0',
      options: [
        'A. x = 2 hoặc x = 3',
        'B. x = -2 hoặc x = -3',
        'C. x = 2 hoặc x = -3',
        'D. x = -2 hoặc x = 3'
      ],
      correctAnswer: 0,
      userAnswer: 0,
      explanation: 'x² - 5x + 6 = 0 ⇔ (x-2)(x-3) = 0 ⇔ x = 2 hoặc x = 3'
    },
    {
      id: 5,
      question: 'Tính giới hạn: lim(x→0) (sinx/x)',
      options: [
        'A. 1',
        'B. 0',
        'C. ∞',
        'D. Không tồn tại'
      ],
      correctAnswer: 0,
      userAnswer: 2,
      explanation: 'Đây là giới hạn cơ bản: lim(x→0) (sinx/x) = 1'
    },
    {
      id: 6,
      question: 'Tìm nguyên hàm của hàm số f(x) = 2x + 3',
      options: [
        'A. F(x) = x² + 3x + C',
        'B. F(x) = x² + 3',
        'C. F(x) = 2x² + 3x + C',
        'D. F(x) = 2x² + 3'
      ],
      correctAnswer: 0,
      userAnswer: 0,
      explanation: 'Áp dụng công thức nguyên hàm: ∫(2x + 3)dx = x² + 3x + C'
    },
    {
      id: 7,
      question: 'Tính tích phân: ∫(0→1) x² dx',
      options: [
        'A. 1/3',
        'B. 1/2',
        'C. 2/3',
        'D. 1'
      ],
      correctAnswer: 0,
      userAnswer: 1,
      explanation: '∫(0→1) x² dx = [x³/3](0→1) = 1/3 - 0 = 1/3'
    },
    {
      id: 8,
      question: 'Tìm số phức z thỏa mãn: z² = -1',
      options: [
        'A. z = ±i',
        'B. z = ±1',
        'C. z = ±2i',
        'D. z = ±2'
      ],
      correctAnswer: 0,
      userAnswer: 0,
      explanation: 'z² = -1 ⇔ z = ±i, trong đó i là đơn vị ảo với i² = -1'
    },
    {
      id: 9,
      question: 'Tính thể tích khối chóp có đáy là hình vuông cạnh a và chiều cao h',
      options: [
        'A. V = (a²h)/3',
        'B. V = a²h',
        'C. V = (a²h)/2',
        'D. V = 2a²h'
      ],
      correctAnswer: 0,
      userAnswer: 0,
      explanation: 'Công thức tính thể tích khối chóp: V = (1/3).S.h = (1/3).a².h'
    },
    {
      id: 10,
      question: 'Tìm giá trị lớn nhất của hàm số y = -x² + 4x - 3',
      options: [
        'A. y = 1',
        'B. y = 2',
        'C. y = 3',
        'D. y = 4'
      ],
      correctAnswer: 0,
      userAnswer: 0,
      explanation: 'y = -x² + 4x - 3 = -(x-2)² + 1 ≤ 1. Dấu "=" xảy ra khi x = 2'
    },
    {
      id: 11,
      question: 'Tính tổng các nghiệm của phương trình: x³ - 3x² + 2 = 0',
      options: [
        'A. 3',
        'B. 2',
        'C. 1',
        'D. 0'
      ],
      correctAnswer: 0,
      userAnswer: 0,
      explanation: 'Theo định lý Vi-ét, tổng các nghiệm của phương trình bậc 3 ax³ + bx² + cx + d = 0 là -b/a = 3'
    },
    {
      id: 12,
      question: 'Tìm số nghiệm của phương trình: sinx = 0.5 trong khoảng [0, 2π]',
      options: [
        'A. 2',
        'B. 1',
        'C. 3',
        'D. 4'
      ],
      correctAnswer: 0,
      userAnswer: 0,
      explanation: 'sinx = 0.5 ⇔ x = π/6 + k2π hoặc x = 5π/6 + k2π. Trong [0, 2π] có 2 nghiệm: x = π/6 và x = 5π/6'
    }
  ]
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

interface Message {
  role: 'user' | 'assistant'
  content: string
}

const ReviewPage = () => {
  const params = useParams()
  const examId = params.examId as string
  const [openAIDialog, setOpenAIDialog] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputMessage, setInputMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  // Sử dụng examId để lấy dữ liệu bài thi
  console.log('Exam ID:', examId)

  const handleQuestionExpand = (questionId: number) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    if (isExpanded) {
      console.log(`Mở rộng câu hỏi ${questionId}`)
    } else {
      console.log(`Thu gọn câu hỏi ${questionId}`)
    }
  }

  const handleOpenAIDialog = (question: any) => {
    // Tạo prompt ban đầu
    const initialPrompt = `Câu hỏi: ${question.question}\n\nCác lựa chọn:\n${question.options.join('\n')}\n\nĐáp án đúng: ${question.options[question.correctAnswer]}\n\nHãy giải thích chi tiết tại sao đáp án này đúng và các đáp án khác sai.`

    setMessages([{ role: 'user', content: initialPrompt }])
    setOpenAIDialog(true)

    // Giả lập response từ AI
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'assistant', content: question.explanation }])
    }, 1000)
  }

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return

    setMessages(prev => [...prev, { role: 'user', content: inputMessage }])
    setInputMessage('')
    setIsLoading(true)

    // Giả lập response từ AI
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Đây là câu trả lời từ AI...' }])
      setIsLoading(false)
    }, 1000)
  }

  return (
    <Box sx={{ p: 4 }}>
      {/* Header */}
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                {examData.title}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                <Chip
                  label={examData.difficulty === 'easy' ? 'Dễ' : examData.difficulty === 'medium' ? 'Trung bình' : 'Khó'}
                  color={getDifficultyColor(examData.difficulty) as any}
                  size="small"
                  sx={{ fontWeight: 600, textTransform: 'capitalize' }}
                />
                <Typography variant="body2" color="text.secondary">
                  {examData.subject}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <HelpOutlineIcon fontSize="small" color="action" />
                  <Typography variant="body2" color="text.secondary">
                    {examData.questions.length} câu hỏi
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <CheckCircleIcon fontSize="small" color="success" />
                  <Typography variant="body2" color="text.secondary">
                    {examData.correctAnswers} đúng
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <RemoveCircleIcon fontSize="small" color="error" />
                  <Typography variant="body2" color="text.secondary">
                    {examData.wrongAnswers} sai
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 2, textAlign: 'center', bgcolor: 'primary.light', color: 'primary.contrastText' }}>
                <Typography variant="h4" sx={{ fontWeight: 700 }}>
                  {examData.score.toFixed(1)}
                </Typography>
                <Typography variant="body2">điểm</Typography>
              </Paper>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Questions */}
      <Typography variant="h6" sx={{ fontWeight: 700, mb: 3 }}>
        Danh sách câu hỏi
      </Typography>
      {examData.questions.map((question, index) => (
        <Accordion
          key={question.id}
          expanded={true}
          onChange={handleQuestionExpand(question.id)}
          sx={{ mb: 2 }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '100%' }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                Câu {index + 1}
              </Typography>
              {question.userAnswer === question.correctAnswer ? (
                <CheckCircleIcon color="success" />
              ) : (
                <RemoveCircleIcon color="error" />
              )}
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" sx={{ mb: 2 }}>
              {question.question}
            </Typography>
            <RadioGroup value={question.userAnswer}>
              {question.options.map((option, optionIndex) => (
                <FormControlLabel
                  key={optionIndex}
                  value={optionIndex}
                  control={
                    <Radio
                      checked={optionIndex === question.userAnswer}
                      sx={{
                        color: optionIndex === question.correctAnswer ? 'success.main' : 'error.main',
                        '&.Mui-checked': {
                          color: optionIndex === question.correctAnswer ? 'success.main' : 'error.main'
                        }
                      }}
                    />
                  }
                  label={option}
                  sx={{
                    color: optionIndex === question.correctAnswer ? 'success.main' : 'inherit',
                    mb: 1
                  }}
                />
              ))}
            </RadioGroup>
            <Divider sx={{ my: 2 }} />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                Giải thích:
              </Typography>
              <Button
                variant="outlined"
                color="primary"
                startIcon={<SmartToyIcon />}
                onClick={() => handleOpenAIDialog(question)}
                sx={{ textTransform: 'none' }}
              >
                Giải thích với AI
              </Button>
            </Box>
            <Typography variant="body2" color="text.secondary">
              {question.explanation}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}

      {/* AI Dialog */}
      <Dialog
        open={openAIDialog}
        onClose={() => setOpenAIDialog(false)}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            height: '80vh',
            maxHeight: 800
          }
        }}
      >
        <DialogTitle sx={{ m: 0, p: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
          <SmartToyIcon color="primary" />
          <Box sx={{ flex: 1 }}>
            Trợ lý AI
          </Box>
          <IconButton
            aria-label="close"
            onClick={() => setOpenAIDialog(false)}
            sx={{ color: 'text.secondary' }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers sx={{ p: 0, display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ flex: 1, overflow: 'auto', p: 2 }}>
            {messages.map((message, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  gap: 2,
                  mb: 2,
                  flexDirection: message.role === 'user' ? 'row-reverse' : 'row'
                }}
              >
                <Avatar
                  sx={{
                    bgcolor: message.role === 'user' ? 'primary.main' : 'success.main',
                    width: 32,
                    height: 32
                  }}
                >
                  {message.role === 'user' ? 'U' : <SmartToyIcon />}
                </Avatar>
                <Paper
                  sx={{
                    p: 2,
                    maxWidth: '80%',
                    bgcolor: message.role === 'user' ? 'primary.light' : 'grey.100',
                    color: message.role === 'user' ? 'primary.contrastText' : 'text.primary'
                  }}
                >
                  <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap' }}>
                    {message.content}
                  </Typography>
                </Paper>
              </Box>
            ))}
            {isLoading && (
              <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
                <CircularProgress size={24} />
              </Box>
            )}
          </Box>
          <Box sx={{ p: 2, bgcolor: 'background.paper' }}>
            <TextField
              fullWidth
              multiline
              maxRows={4}
              placeholder="Nhập câu hỏi của bạn..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault()
                  handleSendMessage()
                }
              }}
              InputProps={{
                endAdornment: (
                  <IconButton
                    color="primary"
                    onClick={handleSendMessage}
                    disabled={!inputMessage.trim() || isLoading}
                  >
                    <SendIcon />
                  </IconButton>
                )
              }}
            />
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  )
}

export default ReviewPage 
