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
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import Paper from '@mui/material/Paper'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'

// Component Imports
import Logo from '@components/layout/shared/Logo'
import Footer from '@/app/components/layout/front-pages/Footer'

const IntroductionPage = () => {
  const router = useRouter()
  const [openDialog, setOpenDialog] = useState(false)

  const features = [
    {
      icon: 'tabler-brain',
      title: 'Đánh giá năng lực',
      description: 'Hệ thống đánh giá toàn diện giúp bạn hiểu rõ điểm mạnh và điểm yếu của mình',
      color: '#FF6B6B'
    },
    {
      icon: 'tabler-chart-bar',
      title: 'Thống kê chi tiết',
      description: 'Theo dõi tiến độ học tập qua các biểu đồ và báo cáo chi tiết',
      color: '#4ECDC4'
    },
    {
      icon: 'tabler-book',
      title: 'Đa dạng môn học',
      description: 'Nhiều môn học khác nhau để bạn có thể lựa chọn phù hợp với nhu cầu',
      color: '#45B7D1'
    },
    {
      icon: 'tabler-clock',
      title: 'Linh hoạt thời gian',
      description: 'Tự do lựa chọn thời gian phù hợp để thực hiện bài kiểm tra',
      color: '#96CEB4'
    }
  ]

  const testimonials = [
    {
      name: 'Nguyễn Văn A',
      role: 'Học sinh THPT',
      content: 'Hệ thống giúp tôi đánh giá được năng lực của mình và có kế hoạch học tập phù hợp',
      avatar: '/images/avatars/1.png'
    },
    {
      name: 'Trần Thị B',
      role: 'Sinh viên Đại học',
      content: 'Giao diện dễ sử dụng, bài kiểm tra chất lượng và đánh giá chính xác',
      avatar: '/images/avatars/2.png'
    },
    {
      name: 'Lê Văn C',
      role: 'Giáo viên',
      content: 'Công cụ hữu ích để đánh giá và theo dõi tiến độ học tập của học sinh',
      avatar: '/images/avatars/3.png'
    }
  ]

  const stats = [
    { number: '10K+', label: 'Người dùng' },
    { number: '50+', label: 'Môn học' },
    { number: '100K+', label: 'Bài kiểm tra' },
    { number: '95%', label: 'Độ chính xác' }
  ]

  const benefits = [
    {
      icon: 'tabler-target',
      title: 'Mục tiêu rõ ràng',
      description: 'Xác định chính xác điểm mạnh và điểm yếu của bạn'
    },
    {
      icon: 'tabler-chart-dots',
      title: 'Theo dõi tiến độ',
      description: 'Theo dõi sự tiến bộ của bạn qua thời gian'
    },
    {
      icon: 'tabler-certificate',
      title: 'Chứng chỉ',
      description: 'Nhận chứng chỉ sau khi hoàn thành các bài kiểm tra'
    }
  ]

  const subjects = [
    {
      name: 'Toán học',
      icon: 'tabler-math',
      color: '#FF6B6B',
      description: 'Kiểm tra kiến thức toán học từ cơ bản đến nâng cao'
    },
    {
      name: 'Vật lý',
      icon: 'tabler-atom',
      color: '#4ECDC4',
      description: 'Đánh giá hiểu biết về các nguyên lý vật lý'
    },
    {
      name: 'Hóa học',
      icon: 'tabler-flask',
      color: '#45B7D1',
      description: 'Kiểm tra kiến thức về phản ứng hóa học'
    },
    {
      name: 'Sinh học',
      icon: 'tabler-dna',
      color: '#96CEB4',
      description: 'Đánh giá hiểu biết về sinh học và cơ thể người'
    }
  ]

  const steps = [
    {
      number: '01',
      title: 'Đăng ký tài khoản',
      description: 'Tạo tài khoản miễn phí để bắt đầu hành trình'
    },
    {
      number: '02',
      title: 'Chọn môn học',
      description: 'Lựa chọn môn học bạn muốn kiểm tra'
    },
    {
      number: '03',
      title: 'Làm bài kiểm tra',
      description: 'Hoàn thành bài kiểm tra trong thời gian quy định'
    },
    {
      number: '04',
      title: 'Xem kết quả',
      description: 'Nhận kết quả và phân tích chi tiết'
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
      {/* Navigation Bar */}
      <AppBar
        position="fixed"
        sx={{
          bgcolor: 'white',
          boxShadow: 1,
          transition: 'all 0.3s ease'
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ px: { xs: 0 } }}>
            <Link href="/introduction">
              <Logo />
            </Link>
            <Box sx={{ flexGrow: 1 }} />
            <Stack direction="row" spacing={2}>
              <Button
                variant="outlined"
                color="primary"
                component={Link}
                href="/login"
                sx={{
                  borderColor: 'primary.main',
                  color: 'primary.main',
                  '&:hover': {
                    borderColor: 'primary.dark',
                    bgcolor: 'primary.light'
                  }
                }}
              >
                Đăng nhập
              </Button>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                href="/register"
                sx={{
                  bgcolor: 'primary.main',
                  color: 'white',
                  '&:hover': {
                    bgcolor: 'primary.dark'
                  }
                }}
              >
                Đăng ký
              </Button>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, primary.main 0%, primary.dark 100%)',
          color: 'white',
          position: 'relative',
          overflow: 'hidden',
          pt: { xs: 10, md: 14 },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'url("/images/hero-pattern.svg")',
            opacity: 0.1
          }
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', py: { xs: 8, md: 12 } }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h1"
                sx={{
                  fontWeight: 800,
                  mb: 2,
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  lineHeight: 1.2,
                  textShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}
              >
                Hệ thống Kiểm tra Năng lực
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  mb: 4,
                  opacity: 0.9,
                  fontSize: { xs: '1.1rem', md: '1.25rem' }
                }}
              >
                Đánh giá toàn diện năng lực của bạn qua các bài kiểm tra chất lượng
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={handleStart}
                  sx={{
                    bgcolor: 'white',
                    color: 'primary.main',
                    py: 1.5,
                    px: 4,
                    fontSize: '1.1rem',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    '&:hover': {
                      bgcolor: 'grey.100',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 6px 16px rgba(0,0,0,0.15)'
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  Bắt đầu ngay
                </Button>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="https://undraw.co/illustrations/online-test.svg"
                alt="Hero Illustration"
                sx={{
                  width: '100%',
                  maxWidth: 600,
                  height: 'auto',
                  display: { xs: 'none', md: 'block' },
                  animation: 'float 6s ease-in-out infinite',
                  '@keyframes float': {
                    '0%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                    '100%': { transform: 'translateY(0px)' }
                  }
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Stats Section */}
      <Container maxWidth="lg" sx={{ mt: -5, mb: 8, position: 'relative' }}>
        <Paper
          elevation={4}
          sx={{
            p: 4,
            borderRadius: 2,
            background: 'white'
          }}
        >
          <Grid container spacing={4}>
            {stats.map((stat, index) => (
              <Grid item xs={6} md={3} key={index}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography
                    variant="h3"
                    sx={{
                      color: 'primary.main',
                      fontWeight: 700,
                      mb: 1
                    }}
                  >
                    {stat.number}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {stat.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Container>

      {/* How It Works Section */}
      <Box sx={{ py: 8, bgcolor: 'grey.50' }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            align="center"
            sx={{
              mb: 2,
              fontWeight: 700,
              fontSize: { xs: '2rem', md: '2.5rem' }
            }}
          >
            Cách thức hoạt động
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            sx={{ mb: 8 }}
          >
            Bắt đầu hành trình đánh giá năng lực của bạn chỉ với 4 bước đơn giản
          </Typography>
          <Grid container spacing={4}>
            {steps.map((step, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    position: 'relative',
                    overflow: 'visible',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: '50%',
                      right: '-50%',
                      width: '100%',
                      height: '2px',
                      bgcolor: 'primary.light',
                      display: index === steps.length - 1 ? 'none' : { xs: 'none', md: 'block' }
                    }
                  }}
                >
                  <CardContent sx={{ textAlign: 'center', p: 4 }}>
                    <Typography
                      variant="h1"
                      sx={{
                        color: 'primary.main',
                        opacity: 0.8,
                        fontSize: '4rem',
                        fontWeight: 700,
                        mb: 2
                      }}
                    >
                      {step.number}
                    </Typography>
                    <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                      {step.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {step.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography
          variant="h2"
          align="center"
          sx={{
            mb: 2,
            fontWeight: 700,
            fontSize: { xs: '2rem', md: '2.5rem' }
          }}
        >
          Tính năng nổi bật
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="text.secondary"
          sx={{ mb: 8 }}
        >
          Khám phá những tính năng độc đáo của chúng tôi
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  height: '100%',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 24px rgba(0,0,0,0.1)'
                  }
                }}
              >
                <CardContent sx={{ textAlign: 'center', p: 4 }}>
                  <IconButton
                    sx={{
                      bgcolor: `${feature.color}15`,
                      color: feature.color,
                      mb: 2,
                      width: 64,
                      height: 64,
                      '&:hover': {
                        bgcolor: `${feature.color}25`
                      }
                    }}
                  >
                    <i className={feature.icon} style={{ fontSize: '2rem' }} />
                  </IconButton>
                  <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Subjects Section */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            align="center"
            sx={{
              mb: 2,
              fontWeight: 700,
              fontSize: { xs: '2rem', md: '2.5rem' }
            }}
          >
            Các môn học
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            sx={{ mb: 8 }}
          >
            Khám phá các môn học đa dạng của chúng tôi
          </Typography>
          <Grid container spacing={4}>
            {subjects.map((subject, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 24px rgba(0,0,0,0.1)'
                    }
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box
                      sx={{
                        width: 64,
                        height: 64,
                        borderRadius: '50%',
                        bgcolor: `${subject.color}15`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 3
                      }}
                    >
                      <i className={subject.icon} style={{ fontSize: '2rem', color: subject.color }} />
                    </Box>
                    <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                      {subject.name}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {subject.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Benefits Section */}
      <Box sx={{ py: 8, bgcolor: 'grey.50' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h2"
                sx={{
                  mb: 3,
                  fontWeight: 700,
                  fontSize: { xs: '2rem', md: '2.5rem' }
                }}
              >
                Lợi ích khi sử dụng
              </Typography>
              <Typography
                variant="h6"
                color="text.secondary"
                sx={{ mb: 4 }}
              >
                Khám phá những lợi ích khi tham gia hệ thống của chúng tôi
              </Typography>
              <List>
                {benefits.map((benefit, index) => (
                  <ListItem key={index} sx={{ px: 0, py: 2 }}>
                    <ListItemIcon sx={{ minWidth: 48 }}>
                      <Box
                        sx={{
                          width: 40,
                          height: 40,
                          borderRadius: '50%',
                          bgcolor: 'primary.light',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <i className={benefit.icon} style={{ fontSize: '1.5rem', color: 'primary.main' }} />
                      </Box>
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography variant="h6" sx={{ mb: 1 }}>
                          {benefit.title}
                        </Typography>
                      }
                      secondary={benefit.description}
                    />
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="https://undraw.co/illustrations/achieving-goals.svg"
                alt="Benefits Illustration"
                sx={{
                  width: '100%',
                  maxWidth: 500,
                  height: 'auto'
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Box sx={{ bgcolor: 'grey.50', py: 8 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            align="center"
            sx={{
              mb: 2,
              fontWeight: 700,
              fontSize: { xs: '2rem', md: '2.5rem' }
            }}
          >
            Phản hồi từ người dùng
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            sx={{ mb: 8 }}
          >
            Những gì người dùng nói về chúng tôi
          </Typography>
          <Grid container spacing={4}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 24px rgba(0,0,0,0.1)'
                    }
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                      <Avatar
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        sx={{ width: 56, height: 56, mr: 2 }}
                      />
                      <Box>
                        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                          {testimonial.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {testimonial.role}
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={{ position: 'relative', pl: 2 }}>
                      <Typography
                        component="span"
                        sx={{
                          position: 'absolute',
                          top: -20,
                          left: -10,
                          fontSize: '4rem',
                          color: 'primary.light',
                          opacity: 0.2,
                          fontFamily: 'serif',
                          lineHeight: 1
                        }}
                      >
                        &ldquo;
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          mb: 3,
                          fontStyle: 'italic',
                          color: 'text.secondary'
                        }}
                      >
                        {testimonial.content}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          position: 'relative',
          py: { xs: 8, md: 14 },
          background: 'linear-gradient(135deg, #6EE7B7 0%, #3B82F6 100%)',
          color: 'white',
          textAlign: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Hiệu ứng sóng phía dưới */}
        <Box
          sx={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            height: 80,
            zIndex: 1,
            pointerEvents: 'none',
            background: 'url("/images/wave.svg") repeat-x',
            backgroundSize: 'cover',
            opacity: 0.25
          }}
        />
        <Container maxWidth="sm" sx={{ position: 'relative', zIndex: 2 }}>
          {/* Icon động hoặc illustration nhỏ */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
            <Box
              component="span"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 64,
                height: 64,
                borderRadius: '50%',
                bgcolor: 'rgba(255,255,255,0.12)',
                boxShadow: '0 4px 16px rgba(0,0,0,0.10)',
                animation: 'pulse 2.5s infinite',
                mb: 1
              }}
            >
              <i className="tabler-rocket" style={{ fontSize: '2.2rem', color: '#fff' }} />
            </Box>
          </Box>
          {/* Tiêu đề gradient */}
          <Typography
            variant="h2"
            sx={{
              mb: 2,
              fontWeight: 900,
              fontSize: { xs: '2.3rem', md: '2.8rem' },
              letterSpacing: '-1px',
              background: 'linear-gradient(90deg, #fff 30%, #bae6fd 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 2px 8px rgba(0,0,0,0.10)'
            }}
          >
            Sẵn sàng bắt đầu?
          </Typography>
          {/* Mô tả ngắn gọn */}
          <Typography
            variant="subtitle1"
            sx={{ mb: 2, opacity: 0.95, fontWeight: 400, fontSize: { xs: '1rem', md: '1.15rem' } }}
          >
            Đăng ký miễn phí để khám phá hệ thống đánh giá năng lực hiện đại, cá nhân hóa lộ trình học tập và nhận chứng chỉ uy tín.
          </Typography>
          {/* Nhấn mạnh lợi ích */}
          <Typography
            variant="body2"
            sx={{ mb: 5, color: 'rgba(255,255,255,0.85)', fontWeight: 500 }}
          >
            Hoàn toàn miễn phí & không giới hạn số lần kiểm tra!
          </Typography>
          {/* Nút lớn bo tròn có icon */}
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4} justifyContent="center" alignItems="center">
            <Button
              variant="contained"
              size="large"
              component={Link}
              href="/register"
              startIcon={<i className="tabler-user-plus" style={{ fontSize: '1.5rem' }} />}
              sx={{
                bgcolor: 'white',
                color: '#3B82F6',
                fontWeight: 800,
                px: 6,
                py: 2,
                fontSize: '1.15rem',
                borderRadius: 99,
                boxShadow: '0 4px 24px rgba(59,130,246,0.13)',
                transition: 'all 0.25s',
                '&:hover': {
                  bgcolor: '#bae6fd',
                  color: '#2563eb',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 32px rgba(59,130,246,0.18)'
                }
              }}
            >
              Đăng ký ngay
            </Button>
            <Button
              variant="outlined"
              size="large"
              component={Link}
              href="/login"
              startIcon={<i className="tabler-login" style={{ fontSize: '1.5rem' }} />}
              sx={{
                borderColor: 'white',
                color: 'white',
                fontWeight: 800,
                px: 6,
                py: 2,
                fontSize: '1.15rem',
                borderRadius: 99,
                transition: 'all 0.25s',
                '&:hover': {
                  borderColor: 'white',
                  bgcolor: 'rgba(255,255,255,0.18)',
                  color: '#fff',
                  transform: 'translateY(-2px)'
                }
              }}
            >
              Đăng nhập
            </Button>
          </Stack>
        </Container>
        {/* Keyframes cho hiệu ứng pulse */}
        <style jsx>{`
          @keyframes pulse {
            0% { box-shadow: 0 0 0 0 rgba(59,130,246,0.18); }
            70% { box-shadow: 0 0 0 16px rgba(59,130,246,0.01); }
            100% { box-shadow: 0 0 0 0 rgba(59,130,246,0.18); }
          }
        `}</style>
      </Box>
      <div className='bg-[#211b2c]'>
        <Footer mode={'system'} />
      </div>


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

export default IntroductionPage 
