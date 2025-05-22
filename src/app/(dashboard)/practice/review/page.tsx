'use client'

import { useState } from 'react'

import { useRouter } from 'next/navigation'

import { 
  Button,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText
} from '@mui/material'
import { Chat as ChatIcon } from '@mui/icons-material'

const ReviewPage = () => {
  const router = useRouter()

  const [exams] = useState([
    {
      id: 1,
      subject: 'Toán học',
      date: '2024-03-20',
      score: 8.5,
      totalQuestions: 40,
      correctAnswers: 34
    },
    {
      id: 2,
      subject: 'Vật lý',
      date: '2024-03-19',
      score: 7.0,
      totalQuestions: 40,
      correctAnswers: 28
    }
  ])

  const handleViewDetails = (examId: number) => {
    router.push(`/practice/review/${examId}`)
  }

  const handleChat = (examId: number) => {
    router.push(`/ai-chat?examId=${examId}`)
  }

  return (
    <Card>
      <CardHeader title="Review đề đã làm" />
      <CardContent>
        <List>
          {exams.map((exam) => (
            <ListItem key={exam.id}>
              <ListItemText
                primary={`${exam.subject} - ${exam.date}`}
                secondary={`Điểm: ${exam.score}/10 - Đúng: ${exam.correctAnswers}/${exam.totalQuestions} câu`}
              />
              <ListItemSecondaryAction>
                <Button 
                  variant="contained" 
                  color="primary" 
                  sx={{ mr: 1 }}
                  onClick={() => handleViewDetails(exam.id)}
                >
                  Xem chi tiết
                </Button>
                <IconButton 
                  edge="end" 
                  aria-label="chat"
                  onClick={() => handleChat(exam.id)}
                >
                  <ChatIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  )
}

export default ReviewPage 
