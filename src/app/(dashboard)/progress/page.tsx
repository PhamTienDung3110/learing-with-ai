'use client'

import { useState } from 'react'

import { useRouter } from 'next/navigation'

import dynamic from 'next/dynamic'

import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Divider,
  Grid,
  IconButton,
  LinearProgress,
  Typography
} from '@mui/material'

import {
  Assignment as AssignmentIcon,
  Biotech as BiotechIcon,
  Calculate as CalculateIcon,
  CalendarMonth as CalendarIcon,
  MenuBook as MenuBookIcon,
  MoreVert as MoreVertIcon,
  Science as ScienceIcon,
  TrendingUp as TrendingUpIcon
} from '@mui/icons-material'

import type { ApexOptions } from 'apexcharts'

// Import ApexCharts dynamically to avoid SSR issues
const ReactApexcharts = dynamic(() => import('react-apexcharts'), { ssr: false })

const ProgressPage = () => {
  const router = useRouter()
  const [timeRange, setTimeRange] = useState('week')

  const subjects = [
    {
      name: 'Toán học',
      progress: 75,
      totalExams: 10,
      completedExams: 7,
      averageScore: 8.5,
      icon: <CalculateIcon />,
      color: 'primary',
      studyDays: 15,
      totalQuestions: 200
    },
    {
      name: 'Vật lý',
      progress: 60,
      totalExams: 10,
      completedExams: 6,
      averageScore: 7.8,
      icon: <ScienceIcon />,
      color: 'success',
      studyDays: 12,
      totalQuestions: 180
    },
    {
      name: 'Hóa học',
      progress: 40,
      totalExams: 10,
      completedExams: 4,
      averageScore: 7.2,
      icon: <BiotechIcon />,
      color: 'warning',
      studyDays: 8,
      totalQuestions: 150
    }
  ]

  const handleSubjectClick = (subjectName: string) => {
    router.push(`/progress/${subjectName.toLowerCase()}`)
  }

  // Chart options for scores
  const scoreChartOptions: ApexOptions = {
    chart: {
      type: 'bar',
      toolbar: { show: false },
      fontFamily: 'inherit',
      height: 350
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '35%',
        borderRadius: 4
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: ['Toán', 'Lý', 'Hóa'],
      labels: {
        style: {
          fontFamily: 'inherit'
        }
      }
    },
    yaxis: {
      title: {
        text: 'Điểm số',
        style: {
          fontFamily: 'inherit'
        }
      },
      labels: {
        style: {
          fontFamily: 'inherit'
        }
      }
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function (val: number) {
          return val + ' điểm'
        }
      }
    },
    colors: ['#7367f0']
  }

  // Chart options for study days
  const studyDaysChartOptions: ApexOptions = {
    chart: {
      type: 'bar',
      toolbar: { show: false },
      fontFamily: 'inherit',
      height: 350
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '35%',
        borderRadius: 4
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: ['Toán', 'Lý', 'Hóa'],
      labels: {
        style: {
          fontFamily: 'inherit'
        }
      }
    },
    yaxis: {
      title: {
        text: 'Số ngày học',
        style: {
          fontFamily: 'inherit'
        }
      },
      labels: {
        style: {
          fontFamily: 'inherit'
        }
      }
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function (val: number) {
          return val + ' ngày'
        }
      }
    },
    colors: ['#28c76f']
  }

  // Chart options for completed questions
  const questionsChartOptions: ApexOptions = {
    chart: {
      type: 'bar',
      toolbar: { show: false },
      fontFamily: 'inherit',
      height: 350
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '35%',
        borderRadius: 4
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: ['Toán', 'Lý', 'Hóa'],
      labels: {
        style: {
          fontFamily: 'inherit'
        }
      }
    },
    yaxis: {
      title: {
        text: 'Số câu hỏi',
        style: {
          fontFamily: 'inherit'
        }
      },
      labels: {
        style: {
          fontFamily: 'inherit'
        }
      }
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function (val: number) {
          return val + ' câu'
        }
      }
    },
    colors: ['#ea5455']
  }

  const scoreSeries = [
    {
      name: 'Điểm trung bình',
      data: [8.5, 7.8, 7.2]
    }
  ]

  const studyDaysSeries = [
    {
      name: 'Số ngày học',
      data: [15, 12, 8]
    }
  ]

  const questionsSeries = [
    {
      name: 'Số câu đã làm',
      data: [200, 180, 150]
    }
  ]

  return (
    <Grid container spacing={3}>
      {/* Thống kê tổng quan */}
      <Grid item xs={12}>
        <Card>
          <CardHeader 
            title="Báo cáo tiến độ học tập"
            action={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
          />
          <Divider />
          <CardContent>
            <Grid container spacing={3}>
              {subjects.map((subject) => (
                <Grid item xs={12} md={4} key={subject.name}>
                  <Card 
                    sx={{ 
                      cursor: 'pointer',
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'translateY(-5px)'
                      }
                    }}
                    onClick={() => handleSubjectClick(subject.name)}
                  >
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Avatar 
                          sx={{ 
                            bgcolor: `${subject.color}.light`,
                            color: `${subject.color}.main`,
                            mr: 2,
                            width: 40,
                            height: 40
                          }}
                        >
                          {subject.icon}
                        </Avatar>
                        <Typography variant="h6">
                          {subject.name}
                        </Typography>
                      </Box>
                      <Box sx={{ mb: 2 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                          <Typography variant="body2" color="text.secondary">
                            Tiến độ
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {subject.progress}%
                          </Typography>
                        </Box>
                        <LinearProgress
                          variant="determinate"
                          value={subject.progress}
                          sx={{ 
                            height: 8,
                            borderRadius: 4,
                            bgcolor: `${subject.color}.lighter`,
                            '& .MuiLinearProgress-bar': {
                              bgcolor: `${subject.color}.main`
                            }
                          }}
                        />
                      </Box>
                      <Grid container spacing={2}>
                        <Grid item xs={6}>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <MenuBookIcon sx={{ mr: 1, color: 'text.secondary' }} />
                            <Typography variant="body2">
                              {subject.completedExams}/{subject.totalExams} đề
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={6}>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <TrendingUpIcon sx={{ mr: 1, color: 'text.secondary' }} />
                            <Typography variant="body2">
                              {subject.averageScore}/10
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={6}>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <CalendarIcon sx={{ mr: 1, color: 'text.secondary' }} />
                            <Typography variant="body2">
                              {subject.studyDays} ngày
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={6}>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <AssignmentIcon sx={{ mr: 1, color: 'text.secondary' }} />
                            <Typography variant="body2">
                              {subject.totalQuestions} câu
                            </Typography>
                          </Box>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      {/* Biểu đồ điểm số */}
      <Grid item xs={12} md={4}>
        <Card>
          <CardHeader 
            title="Thống kê điểm số"
            action={
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Chip 
                  label="Tuần" 
                  color={timeRange === 'week' ? 'primary' : 'default'}
                  onClick={() => setTimeRange('week')}
                />
                <Chip 
                  label="Tháng" 
                  color={timeRange === 'month' ? 'primary' : 'default'}
                  onClick={() => setTimeRange('month')}
                />
              </Box>
            }
          />
          <Divider />
          <CardContent>
            <Box sx={{ height: 350 }}>
              <ReactApexcharts 
                options={scoreChartOptions} 
                series={scoreSeries} 
                type="bar" 
                height="100%" 
              />
            </Box>
          </CardContent>
        </Card>
      </Grid>

      {/* Biểu đồ số ngày học */}
      <Grid item xs={12} md={4}>
        <Card>
          <CardHeader 
            title="Thống kê số ngày học"
            action={
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Chip 
                  label="Tuần" 
                  color={timeRange === 'week' ? 'primary' : 'default'}
                  onClick={() => setTimeRange('week')}
                />
                <Chip 
                  label="Tháng" 
                  color={timeRange === 'month' ? 'primary' : 'default'}
                  onClick={() => setTimeRange('month')}
                />
              </Box>
            }
          />
          <Divider />
          <CardContent>
            <Box sx={{ height: 350 }}>
              <ReactApexcharts 
                options={studyDaysChartOptions} 
                series={studyDaysSeries} 
                type="bar" 
                height="100%" 
              />
            </Box>
          </CardContent>
        </Card>
      </Grid>

      {/* Biểu đồ số câu đã làm */}
      <Grid item xs={12} md={4}>
        <Card>
          <CardHeader 
            title="Thống kê số câu đã làm"
            action={
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Chip 
                  label="Tuần" 
                  color={timeRange === 'week' ? 'primary' : 'default'}
                  onClick={() => setTimeRange('week')}
                />
                <Chip 
                  label="Tháng" 
                  color={timeRange === 'month' ? 'primary' : 'default'}
                  onClick={() => setTimeRange('month')}
                />
              </Box>
            }
          />
          <Divider />
          <CardContent>
            <Box sx={{ height: 350 }}>
              <ReactApexcharts 
                options={questionsChartOptions} 
                series={questionsSeries} 
                type="bar" 
                height="100%" 
              />
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default ProgressPage 
