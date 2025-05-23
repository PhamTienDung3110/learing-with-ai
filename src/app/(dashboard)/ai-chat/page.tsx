'use client'

import { useEffect, useRef, useState } from 'react'

import { useSearchParams } from 'next/navigation'

import {
  Person as PersonIcon,
  Send as SendIcon,
  SmartToy as SmartToyIcon
} from '@mui/icons-material'
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  Paper,
  TextField,
  Typography
} from '@mui/material'

const AIChatPage = () => {
  const searchParams = useSearchParams()
  const examId = searchParams.get('examId')
  const messagesEndRef = useRef<HTMLDivElement>(null)
  
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const [chatHistory, setChatHistory] = useState([
    {
      id: 1,
      sender: 'user',
      message: 'Xin chào, tôi cần giúp đỡ về bài toán này',
      timestamp: '2024-03-20 10:00'
    },
    {
      id: 2,
      sender: 'ai',
      message: 'Chào bạn! Tôi có thể giúp gì cho bạn?',
      timestamp: '2024-03-20 10:01'
    }
  ])

  // Thêm state để lưu lịch sử chat
  const [chatSessions, setChatSessions] = useState([
    {
      id: 1,
      title: 'Cuộc trò chuyện 1',
      lastMessage: 'Xin chào, tôi cần giúp đỡ về bài toán này',
      timestamp: '2024-03-20 10:00'
    }
  ])

  useEffect(() => {
    if (examId) {
      // TODO: Gọi API lấy thông tin đề thi và câu hỏi
      setChatHistory(prev => [...prev, {
        id: prev.length + 1,
        sender: 'ai',
        message: `Tôi thấy bạn đang xem lại đề thi ${examId}. Bạn cần giúp đỡ gì không?`,
        timestamp: new Date().toLocaleString()
      }])
    }
  }, [examId])

  const handleSend = () => {
    if (!message.trim()) return

    const newMessage = {
      id: chatHistory.length + 1,
      sender: 'user',
      message: message,
      timestamp: new Date().toLocaleString()
    }

    setChatHistory([...chatHistory, newMessage])
    setMessage('')
    setIsLoading(true)

    // Cập nhật lịch sử chat
    setChatSessions(prev => [{
      id: prev.length + 1,
      title: `Cuộc trò chuyện ${prev.length + 1}`,
      lastMessage: message,
      timestamp: new Date().toLocaleString()
    }, ...prev])

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: chatHistory.length + 2,
        sender: 'ai',
        message: 'Tôi đang xử lý câu hỏi của bạn...',
        timestamp: new Date().toLocaleString()
      }

      setChatHistory(prev => [...prev, aiResponse])
      setIsLoading(false)
    }, 1000)
  }

  return (
    <Grid container spacing={3} sx={{ minHeight: 'calc(90vh - 48px)', p: 2 }}>
      {/* Phần lịch sử chat */}
      <Grid item xs={12} md={2.5}>
        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          <CardHeader 
            title="Lịch sử chat" 
            sx={{ pb: 1 }}
          />
          <Divider />
          <List sx={{ p: 1, flex: 1, overflow: 'auto' }}>
            {chatSessions.map((session) => (
              <ListItem 
                key={session.id} 
                component="button"
                sx={{ 
                  mb: 1,
                  borderRadius: 1,
                  '&:hover': {
                    bgcolor: 'action.hover'
                  }
                }}
              >
                <ListItemAvatar>
                  <Avatar sx={{ width: 32, height: 32 }}>
                    <SmartToyIcon fontSize="small" />
                  </Avatar>
                </ListItemAvatar>
                <Box sx={{ ml: 1 }}>
                  <Typography variant="subtitle2" noWrap>
                    {session.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" noWrap sx={{ maxWidth: 150 }}>
                    {session.lastMessage}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {session.timestamp}
                  </Typography>
                </Box>
              </ListItem>
            ))}
          </List>
        </Card>
      </Grid>

      {/* Phần chat chính */}
      <Grid item xs={12} md={9.5}>
        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          <CardHeader 
            title={
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <SmartToyIcon color="primary" />
                <Typography variant="h6">Chat với AI</Typography>
              </Box>
            }
            sx={{ pb: 1 }}
          />
          <Divider />
          <CardContent sx={{ flex: 1, overflow: 'hidden', p: 0, display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ flex: 1, overflow: 'auto', p: 2, minHeight: 0 }}>
                <List>
                  {chatHistory.map((chat) => (
                    <ListItem 
                      key={chat.id}
                      sx={{
                        flexDirection: chat.sender === 'user' ? 'row-reverse' : 'row',
                        gap: 1,
                        mb: 2
                      }}
                    >
                      <ListItemAvatar>
                        <Avatar 
                          sx={{ 
                            bgcolor: chat.sender === 'ai' ? 'primary.main' : 'secondary.main',
                            width: 32,
                            height: 32
                          }}
                        >
                          {chat.sender === 'ai' ? <SmartToyIcon fontSize="small" /> : <PersonIcon fontSize="small" />}
                        </Avatar>
                      </ListItemAvatar>
                      <Paper
                        elevation={1}
                        sx={{
                          p: 2,
                          maxWidth: '70%',
                          bgcolor: chat.sender === 'ai' ? 'primary.light' : 'secondary.light',
                          color: chat.sender === 'ai' ? 'primary.contrastText' : 'secondary.contrastText',
                          borderRadius: 2
                        }}
                      >
                        <Typography variant="body1">{chat.message}</Typography>
                        <Typography variant="caption" sx={{ display: 'block', mt: 1, opacity: 0.7 }}>
                          {chat.timestamp}
                        </Typography>
                      </Paper>
                    </ListItem>
                  ))}
                  {isLoading && (
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar sx={{ bgcolor: 'primary.main', width: 32, height: 32 }}>
                          <CircularProgress size={20} color="inherit" />
                        </Avatar>
                      </ListItemAvatar>
                      <Paper elevation={1} sx={{ p: 2, bgcolor: 'primary.light', borderRadius: 2 }}>
                        <Typography>Đang xử lý...</Typography>
                      </Paper>
                    </ListItem>
                  )}
                  <div ref={messagesEndRef} />
                </List>
              </Box>
              <Box sx={{ p: 2, bgcolor: 'background.paper' }}>
                <Grid container spacing={2}>
                  <Grid item xs>
                    <TextField
                      fullWidth
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Nhập câu hỏi của bạn..."
                      onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                      disabled={isLoading}
                      variant="outlined"
                      size="small"
                    />
                  </Grid>
                  <Grid item>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleSend}
                      disabled={!message.trim() || isLoading}
                      endIcon={<SendIcon />}
                    >
                      Gửi
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default AIChatPage 
