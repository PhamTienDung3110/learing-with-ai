'use client'

// React Imports
import { useState } from 'react'

import { useRouter } from 'next/navigation'

// Next Imports
import Link from 'next/link'

// MUI Imports
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Checkbox from '@mui/material/Checkbox'
import Divider from '@mui/material/Divider'
import FormControlLabel from '@mui/material/FormControlLabel'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import Typography from '@mui/material/Typography'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'

// Component Imports
import Logo from '@components/layout/shared/Logo'
import CustomTextField from '@core/components/mui/TextField'

// Util Imports

// Styled Component Imports
import AuthIllustrationWrapper from './AuthIllustrationWrapper'

const RegisterV1 = () => {
  // States
  const [isPasswordShown, setIsPasswordShown] = useState(false)
  const [openDialog, setOpenDialog] = useState(false)
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false)
  const [selectedSubject, setSelectedSubject] = useState<any>(null)
  const router = useRouter()

  const subjects = [
    {
      name: 'Hóa học',
      path: 'hóa học',
      questions: 20,
      time: 30,
      difficulty: 'Dễ',
      description: 'Kiểm tra kiến thức cơ bản về hóa học'
    },
    {
      name: 'Vật lý',
      path: 'vật lý',
      questions: 25,
      time: 35,
      difficulty: 'Dễ',
      description: 'Kiểm tra kiến thức cơ bản về vật lý'
    },
    {
      name: 'Toán học',
      path: 'toán học',
      questions: 30,
      time: 40,
      difficulty: 'Dễ',
      description: 'Kiểm tra kiến thức cơ bản về toán học'
    },
    {
      name: 'Sinh học',
      path: 'sinh học',
      questions: 20,
      time: 30,
      difficulty: 'Dễ',
      description: 'Kiểm tra kiến thức cơ bản về sinh học'
    }
  ]

  const handleClickShowPassword = () => setIsPasswordShown(show => !show)

  const handleRegister = () => {
    setOpenDialog(true)
  }

  const handleCloseDialog = () => {
    setOpenDialog(false)
  }

  const handleSelectSubject = (subject: any) => {
    setSelectedSubject(subject)
    setOpenConfirmDialog(true)
  }

  const handleConfirmSubject = () => {
    if (selectedSubject) {
      router.push(`/practice/exam/${encodeURIComponent(selectedSubject.path)}/easy`)
    }
  }

  const handleCloseConfirmDialog = () => {
    setOpenConfirmDialog(false)
    setSelectedSubject(null)
  }

  return (
    <AuthIllustrationWrapper>
      <Card className='flex flex-col sm:is-[450px]'>
        <CardContent className='sm:!p-12'>
          <Link href={'/home'} className='flex justify-center mbe-4'>
            <Logo />
          </Link>
          <div className='flex flex-col gap-1 mbe-4'>
            <Typography variant='h4'>Đăng ký tài khoản</Typography>
          </div>
          <form noValidate autoComplete='off' onSubmit={e => e.preventDefault()} className='flex flex-col gap-6'>
            <CustomTextField autoFocus fullWidth label='Tên tài khoản' placeholder='Nhập tên tài khoản' />
            <CustomTextField fullWidth label='Email' placeholder='Nhập email' />
            <CustomTextField
              fullWidth
              label='Mật khẩu'
              placeholder='············'
              type={isPasswordShown ? 'text' : 'password'}
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton edge='end' onClick={handleClickShowPassword} onMouseDown={e => e.preventDefault()}>
                        <i className={isPasswordShown ? 'tabler-eye-off' : 'tabler-eye'} />
                      </IconButton>
                    </InputAdornment>
                  )
                }
              }}
            />
            <FormControlLabel
              control={<Checkbox />}
              label={
                <>
                  <span>Tôi đồng ý với </span>
                  <Link className='text-primary' href='/' onClick={e => e.preventDefault()}>
                    điều khoản và điều kiện
                  </Link>
                </>
              }
            />
            <Button fullWidth variant='contained' type='submit' onClick={handleRegister}>
              Đăng ký
            </Button>
            <div className='flex justify-center items-center flex-wrap gap-2'>
              <Typography>Đã có tài khoản?</Typography>
              <Typography
                component={Link}
                href={'/login'}
                color='primary.main'
              >
                Đăng nhập thay
              </Typography>
            </div>
            <Divider className='gap-2 text-textPrimary'>hoặc</Divider>
            <div className='flex justify-center items-center gap-1.5'>
              <IconButton className='text-facebook' size='small'>
                <i className='tabler-brand-facebook-filled' />
              </IconButton>
              <IconButton className='text-twitter' size='small'>
                <i className='tabler-brand-twitter-filled' />
              </IconButton>
              <IconButton className='text-textPrimary' size='small'>
                <i className='tabler-brand-github-filled' />
              </IconButton>
              <IconButton className='text-error' size='small'>
                <i className='tabler-brand-google-filled' />
              </IconButton>
            </div>
          </form>
        </CardContent>
      </Card>

      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        PaperProps={{
          sx: {
            width: '100%',
            maxWidth: '800px',
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
          }
        }}
      >
        <DialogContent sx={{ pt: 4, pb: 2 }}>
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Typography variant="h4" sx={{ color: 'primary.main', fontWeight: 600, mb: 1 }}>
              Chào mừng bạn đến với Hệ thống Kiểm tra Năng lực
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Hãy chọn môn học bạn muốn kiểm tra để bắt đầu
            </Typography>
          </Box>
          <Grid container spacing={2} sx={{ py: 1 }}>
            {subjects.map((subject) => (
              <Grid item xs={12} sm={6} key={subject.name}>
                <Card
                  sx={{
                    cursor: 'pointer',
                    transition: 'all 0.2s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.15)'
                    }
                  }}
                  onClick={() => handleSelectSubject(subject)}
                >
                  <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                      <Typography variant="h6" sx={{ fontWeight: 600, color: 'primary.main' }}>
                        {subject.name}
                      </Typography>
                      <Chip
                        label={subject.difficulty}
                        color="primary"
                        size="small"
                        sx={{ borderRadius: '4px' }}
                      />
                    </Box>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      {subject.description}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <i className="tabler-file-text text-primary" />
                        <Typography variant="body2">
                          {subject.questions} câu hỏi
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <i className="tabler-clock text-primary" />
                        <Typography variant="body2">
                          {subject.time} phút
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 3 }}>
          <Button
            onClick={handleCloseDialog}
            variant="outlined"
            sx={{
              borderRadius: '8px',
              textTransform: 'none',
              px: 4,
              '&:hover': {
                backgroundColor: 'action.hover'
              }
            }}
          >
            Đóng
          </Button>
        </DialogActions>
      </Dialog>

      {/* Confirm Dialog */}
      <Dialog
        open={openConfirmDialog}
        onClose={handleCloseConfirmDialog}
        PaperProps={{
          sx: {
            width: '100%',
            maxWidth: '400px',
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
          }
        }}
      >
        <DialogTitle sx={{ textAlign: 'center', color: 'primary.main', fontWeight: 600 }}>
          Xác nhận bắt đầu kiểm tra
        </DialogTitle>
        <DialogContent>
          {selectedSubject && (
            <Box sx={{ textAlign: 'center', py: 2 }}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                {selectedSubject.name}
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, alignItems: 'center' }}>
                <Typography variant="body2" color="text.secondary">
                  Số câu hỏi: {selectedSubject.questions} câu
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Thời gian: {selectedSubject.time} phút
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Độ khó: {selectedSubject.difficulty}
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                Bạn có chắc chắn muốn bắt đầu bài kiểm tra này?
              </Typography>
            </Box>
          )}
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 3, justifyContent: 'center', gap: 2 }}>
          <Button
            onClick={handleCloseConfirmDialog}
            variant="outlined"
            sx={{
              borderRadius: '8px',
              textTransform: 'none',
              px: 4
            }}
          >
            Hủy
          </Button>
          <Button
            onClick={handleConfirmSubject}
            variant="contained"
            sx={{
              borderRadius: '8px',
              textTransform: 'none',
              px: 4
            }}
          >
            Bắt đầu
          </Button>
        </DialogActions>
      </Dialog>
    </AuthIllustrationWrapper>
  )
}

export default RegisterV1
