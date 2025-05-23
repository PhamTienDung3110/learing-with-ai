'use client'

// Component Imports
import { useRouter } from 'next/navigation'

import { Card, CardContent, Typography, Grid, Box, Avatar, Chip, LinearProgress, Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import {
  EmojiEvents as TrophyIcon,
  LocalFireDepartment as FlameIcon,
  BarChart as ChartIcon,
  GpsFixed as TargetIcon,
  AccessTime as ClockIcon,
  SmartToy as RobotIcon,
  Assignment as ExerciseIcon,
  PlayArrow as PlayIcon,
  WavingHand as WaveIcon,
  Star as StarIcon
} from '@mui/icons-material'

// Color Config
const colors = {
  light: '#FFC107',
  main: '#FFA000',
  dark: '#FF6F00',
  background: '#F8F9FA',
  text: {
    primary: '#2C3E50',
    secondary: '#6C757D'
  },
  accent: {
    blue: '#2196F3',
    green: '#4CAF50',
    purple: '#9C27B0'
  }
}

// Styled Components
const GradientCard = styled(Card)(() => ({
  background: `linear-gradient(135deg, ${colors.main} 0%, ${colors.light} 100%)`,
  color: 'white',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 30px rgba(0,0,0,0.15)'
  }
}))

const StatsCard = styled(Card)(() => ({
  background: 'white',
  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
  borderRadius: '16px',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
    transform: 'translateY(-5px)'
  }
}))

const ExerciseCard = styled(Card)(() => ({
  background: 'white',
  borderRadius: '12px',
  transition: 'all 0.3s ease-in-out',
  cursor: 'pointer',
  '&:hover': {
    boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
    transform: 'translateY(-5px)'
  }
}))

const WelcomeText = styled(Typography)(() => ({
  background: 'linear-gradient(45deg, #fff 30%, #f0f0f0 90%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  textShadow: '0 2px 4px rgba(0,0,0,0.1)',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: -4,
    left: 0,
    width: '100%',
    height: '2px',
    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)'
  }
}))

const HomePage = () => {
  const router = useRouter()

  // Mock data for AI suggestions
  const aiSuggestions = [
    {
      id: 1,
      title: 'Đề số 15',
      difficulty: 'Trung bình',
      reason: 'Dựa trên kết quả làm đề số 12, bạn cần cải thiện phần Hàm số',
      progress: 0
    },
    {
      id: 2,
      title: 'Đề số 18',
      difficulty: 'Khó',
      reason: 'Phù hợp với mục tiêu tăng điểm của bạn',
      progress: 0
    },
    {
      id: 3,
      title: 'Đề số 20',
      difficulty: 'Dễ',
      reason: 'Ôn tập lại các dạng bài đã làm sai gần đây',
      progress: 0
    }
  ]

  return (
    <Box sx={{
      p: { xs: 2, md: 4 },
      background: colors.background,
      minHeight: '100vh',
      maxWidth: '1400px',
      margin: '0 auto'
    }}>
      {/* Welcome Section */}
      <GradientCard sx={{ mb: 4, borderRadius: '20px', position: 'relative', overflow: 'hidden' }}>
        <Box sx={{
          position: 'absolute',
          right: 0,
          top: 0,
          width: '40%',
          height: '100%',
          opacity: 0.1,
          zIndex: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <TrophyIcon sx={{ fontSize: 200, color: 'white' }} />
        </Box>
        <CardContent sx={{ p: 4, position: 'relative', zIndex: 1 }}>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 3,
            flexDirection: { xs: 'column', sm: 'row' },
            textAlign: { xs: 'center', sm: 'left' }
          }}>
            <Box sx={{ position: 'relative' }}>
              <Avatar
                sx={{
                  width: { xs: 100, sm: 80 },
                  height: { xs: 100, sm: 80 },
                  border: '4px solid rgba(255,255,255,0.8)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  background: 'linear-gradient(45deg, #fff 30%, #f0f0f0 90%)'
                }}
              />
              <Box sx={{
                position: 'absolute',
                bottom: -5,
                right: -5,
                backgroundColor: colors.accent.green,
                borderRadius: '50%',
                width: 30,
                height: 30,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
              }}>
                <StarIcon sx={{ color: 'white', fontSize: 16 }} />
              </Box>
            </Box>
            <Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                <WaveIcon sx={{ fontSize: 28, color: 'rgba(255,255,255,0.9)' }} />
                <WelcomeText variant="h4" sx={{
                  fontWeight: 'bold',
                  fontSize: { xs: '1.75rem', sm: '2rem' }
                }}>
                  Xin chào, User!
                </WelcomeText>
              </Box>
              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                flexDirection: { xs: 'column', sm: 'row' }
              }}>
                <Typography sx={{
                  opacity: 0.9,
                  fontSize: '1.1rem',
                  color: 'rgba(255,255,255,0.9)'
                }}>
                  Chúc bạn một ngày học tập hiệu quả
                </Typography>
                <Chip
                  label="🔥 Đang duy trì streak"
                  size="small"
                  sx={{
                    backgroundColor: 'rgba(255,255,255,0.2)',
                    color: 'white',
                    fontWeight: 'bold',
                    backdropFilter: 'blur(4px)',
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.3)'
                    }
                  }}
                />
              </Box>
            </Box>
          </Box>
        </CardContent>
      </GradientCard>

      {/* Main Content Grid */}
      <Grid container spacing={4}>
        {/* Left Column - Stats */}
        <Grid item xs={12} md={4}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {/* Streak Card */}
            <StatsCard>
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <FlameIcon sx={{ fontSize: 40, color: colors.accent.blue, mr: 2 }} />
                  <Typography variant="h6" sx={{ color: colors.accent.blue, fontWeight: 'bold' }}>
                    Chuỗi ngày học tập
                  </Typography>
                  <Chip
                    label="🔥 Đang duy trì"
                    sx={{
                      ml: 'auto',
                      fontWeight: 'bold',
                      backgroundColor: `${colors.accent.blue}15`,
                      color: colors.accent.blue
                    }}
                  />
                </Box>
                <Typography variant="h3" sx={{ color: colors.accent.blue, fontWeight: 'bold', mb: 1 }}>
                  7 ngày
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={70}
                  sx={{
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: `${colors.accent.blue}15`,
                    '& .MuiLinearProgress-bar': {
                      backgroundColor: colors.accent.blue
                    }
                  }}
                />
              </CardContent>
            </StatsCard>

            {/* Monthly Stats */}
            <StatsCard>
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <ChartIcon sx={{ fontSize: 40, color: colors.accent.green, mr: 2 }} />
                  <Typography variant="h6" sx={{ color: colors.accent.green, fontWeight: 'bold' }}>
                    Tổng đề đã làm (tháng này)
                  </Typography>
                </Box>
                <Typography variant="h3" sx={{ color: colors.accent.green, fontWeight: 'bold', mb: 1 }}>
                  24 đề
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Typography variant="body2" sx={{ color: colors.accent.green }}>
                    Tăng 15% so với tháng trước
                  </Typography>
                  <Typography variant="body2" sx={{ color: colors.accent.green }}>
                    📈
                  </Typography>
                </Box>
              </CardContent>
            </StatsCard>

            {/* Accuracy Stats */}
            <StatsCard>
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <TargetIcon sx={{ fontSize: 40, color: colors.main, mr: 2 }} />
                  <Typography variant="h6" sx={{ color: colors.main, fontWeight: 'bold' }}>
                    Độ chính xác
                  </Typography>
                </Box>
                <Typography variant="h3" sx={{ color: colors.main, fontWeight: 'bold', mb: 1 }}>
                  85%
                </Typography>
                <Typography variant="body2" sx={{ color: colors.text.secondary }}>
                  Dựa trên 100 câu gần nhất
                </Typography>
              </CardContent>
            </StatsCard>
          </Box>
        </Grid>

        {/* Right Column - Recent Exercises & AI Recommendations */}
        <Grid item xs={12} md={8}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {/* Recent Exercises */}
            <Card sx={{ borderRadius: '20px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
              <CardContent sx={{ p: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <ClockIcon sx={{ fontSize: 40, color: colors.text.primary, mr: 2 }} />
                  <Typography variant="h5" sx={{ fontWeight: 'bold', color: colors.text.primary }}>
                    Các đề đã làm gần đây
                  </Typography>
                </Box>
                <Grid container spacing={3}>
                  {[1, 2, 3].map((item) => (
                    <Grid item xs={12} sm={6} key={item}>
                      <ExerciseCard onClick={() => router.push('/practice/completed-exams/math-2/review')}>
                        <CardContent sx={{ p: 3 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <ExerciseIcon sx={{ fontSize: 32, color: colors.text.primary, mr: 2 }} />
                            <Typography variant="h6" sx={{ fontWeight: 'bold', color: colors.text.primary }}>
                              Đề số {item}
                            </Typography>
                          </Box>
                          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                            <Typography variant="body2" sx={{ color: colors.text.secondary, display: 'flex', alignItems: 'center', gap: 1 }}>
                              <span>🕒</span> Hoàn thành: 2 giờ trước
                            </Typography>
                            <Typography variant="body2" sx={{ color: colors.text.secondary, display: 'flex', alignItems: 'center', gap: 1 }}>
                              <span>📊</span> Điểm số: 85/100
                            </Typography>
                          </Box>
                        </CardContent>
                      </ExerciseCard>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>

            {/* AI Recommendations */}
            <Card sx={{ borderRadius: '20px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
              <CardContent sx={{ p: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <RobotIcon sx={{ fontSize: 40, color: colors.accent.purple, mr: 2 }} />
                  <Typography variant="h5" sx={{ fontWeight: 'bold', color: colors.accent.purple }}>
                    Đề xuất từ AI
                  </Typography>
                </Box>
                <Grid container spacing={3}>
                  {aiSuggestions.map((suggestion) => (
                    <Grid item xs={12} sm={6} key={suggestion.id}>
                      <ExerciseCard>
                        <CardContent sx={{ p: 3 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <RobotIcon sx={{ fontSize: 32, color: colors.accent.purple, mr: 2 }} />
                            <Typography variant="h6" sx={{ fontWeight: 'bold', color: colors.accent.purple }}>
                              {suggestion.title}
                            </Typography>
                          </Box>
                          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                              <Chip
                                label={suggestion.difficulty}
                                size="small"
                                sx={{
                                  backgroundColor:
                                    suggestion.difficulty === 'Dễ' ? `${colors.accent.green}15` :
                                      suggestion.difficulty === 'Trung bình' ? `${colors.main}15` :
                                        `${colors.accent.purple}15`,
                                  color:
                                    suggestion.difficulty === 'Dễ' ? colors.accent.green :
                                      suggestion.difficulty === 'Trung bình' ? colors.main :
                                        colors.accent.purple,
                                  fontWeight: 'bold'
                                }}
                              />
                            </Box>
                            <Typography
                              variant="body2"
                              sx={{
                                color: colors.text.secondary,
                                backgroundColor: `${colors.accent.purple}08`,
                                p: 1.5,
                                borderRadius: 1,
                                border: `1px solid ${colors.accent.purple}15`
                              }}
                            >
                              {suggestion.reason}
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                              <Typography variant="body2" sx={{ color: colors.text.secondary }}>
                                Tiến độ:
                              </Typography>
                              <LinearProgress
                                variant="determinate"
                                value={suggestion.progress}
                                sx={{
                                  flex: 1,
                                  height: 6,
                                  borderRadius: 3,
                                  backgroundColor: `${colors.accent.purple}15`,
                                  '& .MuiLinearProgress-bar': {
                                    backgroundColor: colors.accent.purple
                                  }
                                }}
                              />
                            </Box>
                            <Button
                              variant="contained"
                              onClick={() => router.push('/practice/exam/a/easy')}
                              startIcon={<PlayIcon />}
                              sx={{
                                mt: 1,
                                backgroundColor: `${colors.accent.purple}dd`,
                                color: 'white',
                                '&:hover': {
                                  backgroundColor: `${colors.accent.purple}cc`,
                                  opacity: 0.9
                                }
                              }}
                            >
                              Làm bài thi
                            </Button>
                          </Box>
                        </CardContent>
                      </ExerciseCard>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default HomePage
