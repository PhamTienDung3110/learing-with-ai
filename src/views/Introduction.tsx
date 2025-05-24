'use client'

// React Imports
import { useState } from 'react'

// Next Imports
import Link from 'next/link'
import { useRouter } from 'next/navigation'

// MUI Imports
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import IconButton from '@mui/material/IconButton'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'

// Component Imports
import Logo from '@components/layout/shared/Logo'

const Introduction = () => {
  const router = useRouter()
  const [openDialog, setOpenDialog] = useState(false)

  const features = [
    {
      icon: 'tabler-brain',
      title: 'Đánh giá năng lực',
      description: 'Hệ thống đánh giá toàn diện giúp bạn hiểu rõ điểm mạnh và điểm yếu của mình'
    },
    {
      icon: 'tabler-chart-bar',
      title: 'Thống kê chi tiết',
      description: 'Theo dõi tiến độ học tập qua các biểu đồ và báo cáo chi tiết'
    },
    {
      icon: 'tabler-book',
      title: 'Đa dạng môn học',
      description: 'Nhiều môn học khác nhau để bạn có thể lựa chọn phù hợp với nhu cầu'
    },
    {
      icon: 'tabler-clock',
      title: 'Linh hoạt thời gian',
      description: 'Tự do lựa chọn thời gian phù hợp để thực hiện bài kiểm tra'
    }
  ]

  const testimonials = [
    {
      name: 'Nguyễn Văn A',
      role: 'Học sinh THPT',
      content: 'Hệ thống giúp tôi đánh giá được năng lực của mình và có kế hoạch học tập phù hợp'
    },
    {
      name: 'Trần Thị B',
      role: 'Sinh viên Đại học',
      content: 'Giao diện dễ sử dụng, bài kiểm tra chất lượng và đánh giá chính xác'
    },
    {
      name: 'Lê Văn C',
      role: 'Giáo viên',
      content: 'Công cụ hữu ích để đánh giá và theo dõi tiến độ học tập của học sinh'
    }
  ]

  const handleStart = () => {
    setOpenDialog(true)
  }

  const handleCloseDialog = () => {
    setOpenDialog(false)
  }

  const handleRegister = () => {
    router.push('/register')
  }

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(45deg, primary.main 30%, primary.light 90%)',
          color: 'white',
          py: 8
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ mb: 4 }}>
                <Link href="/introduction">
                  <Logo />
                </Link>
              </Box>
              <Typography variant="h2" sx={{ fontWeight: 700, mb: 2 }}>
                Hệ thống Kiểm tra Năng lực
              </Typography>
              <Typography variant="h5" sx={{ mb: 4, opacity: 0.9 }}>
                Đánh giá toàn diện năng lực của bạn qua các bài kiểm tra chất lượng
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={handleStart}
                  sx={{
                    bgcolor: 'white',
                    color: 'primary.main',
                    '&:hover': {
                      bgcolor: 'grey.100'
                    }
                  }}
                >
                  Bắt đầu ngay
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  onClick={handleRegister}
                  sx={{
                    borderColor: 'white',
                    color: 'white',
                    '&:hover': {
                      borderColor: 'white',
                      bgcolor: 'rgba(255,255,255,0.1)'
                    }
                  }}
                >
                  Đăng ký
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="/images/hero-illustration.svg"
                alt="Hero Illustration"
                sx={{
                  width: '100%',
                  maxWidth: 500,
                  height: 'auto',
                  display: { xs: 'none', md: 'block' }
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" align="center" sx={{ mb: 6, fontWeight: 600 }}>
          Tính năng nổi bật
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  height: '100%',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-8px)'
                  }
                }}
              >
                <CardContent sx={{ textAlign: 'center', p: 4 }}>
                  <IconButton
                    sx={{
                      bgcolor: 'primary.light',
                      color: 'primary.main',
                      mb: 2,
                      '&:hover': {
                        bgcolor: 'primary.main',
                        color: 'white'
                      }
                    }}
                  >
                    <i className={feature.icon} />
                  </IconButton>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Testimonials Section */}
      <Box sx={{ bgcolor: 'grey.50', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" align="center" sx={{ mb: 6, fontWeight: 600 }}>
            Phản hồi từ người dùng
          </Typography>
          <Grid container spacing={4}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card sx={{ height: '100%' }}>
                  <CardContent sx={{ p: 4 }}>
                    <Typography variant="body1" sx={{ mb: 3, fontStyle: 'italic' }}>
                      &quot;{testimonial.content}&quot;
                    </Typography>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                      {testimonial.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {testimonial.role}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 4 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Link href="/introduction">
                <Logo />
              </Link>
              <Typography variant="body2" sx={{ mt: 2, opacity: 0.8 }}>
                Hệ thống kiểm tra năng lực toàn diện
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Liên kết nhanh
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Link href="/introduction" className="text-white opacity-80 hover:opacity-100">
                  Trang chủ
                </Link>
                <Link href="/register" className="text-white opacity-80 hover:opacity-100">
                  Đăng ký
                </Link>
                <Link href="/login" className="text-white opacity-80 hover:opacity-100">
                  Đăng nhập
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Liên hệ
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                Email: support@example.com
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                Hotline: 1900 1234
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Start Dialog */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        PaperProps={{
          sx: {
            width: '100%',
            maxWidth: '400px',
            borderRadius: '12px'
          }
        }}
      >
        <DialogContent sx={{ p: 4, textAlign: 'center' }}>
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
            Bắt đầu kiểm tra ngay
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            Đăng ký tài khoản để bắt đầu kiểm tra năng lực của bạn
          </Typography>
          <Button
            variant="contained"
            fullWidth
            size="large"
            onClick={handleRegister}
            sx={{ mb: 2 }}
          >
            Đăng ký
          </Button>
          <Button
            variant="outlined"
            fullWidth
            size="large"
            component={Link}
            href="/login"
          >
            Đăng nhập
          </Button>
        </DialogContent>
      </Dialog>
    </Box>
  )
}

export default Introduction 
