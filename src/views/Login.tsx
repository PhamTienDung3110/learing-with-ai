'use client'

// React Imports
import { useState } from 'react'

// Next Imports
import Link from 'next/link'

// MUI Imports
import { useRouter } from 'next/navigation'

import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Checkbox from '@mui/material/Checkbox'
import Divider from '@mui/material/Divider'
import FormControlLabel from '@mui/material/FormControlLabel'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import Typography from '@mui/material/Typography'

// Component Imports
import Logo from '@components/layout/shared/Logo'
import CustomTextField from '@core/components/mui/TextField'

// Config Imports
import AuthIllustrationWrapper from './AuthIllustrationWrapper'

// Util Imports

// Styled Component Imports

const LoginV1 = () => {
  const router = useRouter()

  // States
  const [isPasswordShown, setIsPasswordShown] = useState(false)

  // Hooks

  const handleClickShowPassword = () => setIsPasswordShown(show => !show)

  return (
    <AuthIllustrationWrapper>
      <Card className='flex flex-col sm:is-[450px]'>
        <CardContent className='sm:!p-12'>
          <Link href={'/'} className='flex justify-center mbe-6'>
            <Logo />
          </Link>
          <div className='flex flex-col gap-1 mbe-6'>
            <Typography variant='h4'>{`Welcome to My App 👋🏻`}</Typography>
            <Typography>Hãy đăng nhập để tiếp tục các chức năng của bạn</Typography>
          </div>
          <form noValidate autoComplete='off' onSubmit={e => {
            e.preventDefault()
            router.push('/home')
          }} className='flex flex-col gap-6'>
            <CustomTextField autoFocus fullWidth label='Email' placeholder='Nhập email của bạn' />
            <CustomTextField
              fullWidth
              label='Mật khẩu'
              placeholder='Nhập mật khẩu của bạn'
              id='outlined-adornment-password'
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
            <div className='flex justify-between items-center gap-x-3 gap-y-1 flex-wrap'>
              <FormControlLabel control={<Checkbox />} label='Ghi nhớ tôi' />
              <Typography
                className='text-end'
                color='primary.main'
                component={Link}
                href={'/'}
              >
                Quên mật khẩu?
              </Typography>
            </div>
            <Button fullWidth variant='contained' type='submit'>
              Đăng nhập
            </Button>
            <div className='flex justify-center items-center flex-wrap gap-2'>
              <Typography>Bạn chưa có tài khoản?</Typography>
              <Typography
                component={Link}
                href={'/register'}
                color='primary.main'
              >
                Tạo tài khoản
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
    </AuthIllustrationWrapper>
  )
}

export default LoginV1
