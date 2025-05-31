'use client'

// MUI Imports
import Grid from '@mui/material/Grid2'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import IconButton from '@mui/material/IconButton'

// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { Mode } from '@core/types'

// Component Imports
import Link from '@components/Link'
import Logo from '@components/layout/shared/Logo'
import CustomTextField from '@core/components/mui/TextField'

// Hooks Imports
import { useImageVariant } from '@core/hooks/useImageVariant'

// Util Imports
import { frontLayoutClasses } from '@layouts/utils/layoutClasses'

// Styles Imports
import styles from './styles.module.css'
import frontCommonStyles from '@views/front-pages/styles.module.css'

const Footer = ({ mode }: { mode: Mode }) => {
  // Vars
  const footerImageLight = '/images/front-pages/footer-bg-light.png'
  const footerImageDark = '/images/front-pages/footer-bg-dark.png'

  // Hooks
  const dashboardImage = useImageVariant(mode, footerImageLight, footerImageDark)

  return (
    <footer className={frontLayoutClasses.footer} suppressHydrationWarning>
      <div className='relative' suppressHydrationWarning>
        <img src={dashboardImage} alt='footer bg' className='absolute inset-0 is-full bs-full object-cover -z-[1]' />
        <div className={classnames('plb-12 text-white', frontCommonStyles.layoutSpacing)} suppressHydrationWarning>
          <Grid container rowSpacing={10} columnSpacing={12} suppressHydrationWarning>
            <Grid size={{ xs: 12, lg: 5 }} suppressHydrationWarning>
              <div className='flex flex-col items-start gap-6' suppressHydrationWarning>
                <Link href='/front-pages/landing-page' suppressHydrationWarning>
                  <Logo color='var(--mui-palette-common-white)' />
                </Link>
                <Typography color='white' className='md:max-is-[390px] opacity-[0.78]' suppressHydrationWarning>
                  Nền tảng giáo dục trực tuyến hàng đầu với công nghệ AI tiên tiến, giúp học viên tiếp cận kiến thức một cách hiệu quả và linh hoạt.
                </Typography>
                <div className='flex items-center is-full' suppressHydrationWarning>
                  <div suppressHydrationWarning>
                    <CustomTextField
                      size='small'
                      className={styles.inputBorder}
                      label='Đăng ký nhận thông tin'
                      placeholder='Email của bạn'
                      sx={{
                        '& .MuiInputBase-root': {
                          borderStartEndRadius: '0 !important',
                          borderEndEndRadius: '0 !important',
                          '&:not(.Mui-focused)': {
                            borderColor: 'rgb(var(--mui-mainColorChannels-dark) / 0.22)'
                          },
                          '&.MuiFilledInput-root:not(.Mui-focused):not(.Mui-disabled):hover': {
                            borderColor: 'rgba(255 255 255 / 0.6) !important'
                          }
                        }
                      }}
                      suppressHydrationWarning
                    />
                  </div>
                  <div suppressHydrationWarning>
                    <Button
                      variant='contained'
                      color='primary'
                      sx={{
                        borderStartStartRadius: 0,
                        borderEndStartRadius: 0,
                        marginTop: '20px'
                      }}
                      suppressHydrationWarning
                    >
                      Đăng ký
                    </Button>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid size={{ xs: 12, sm: 3, lg: 2 }}>
              <Typography color='white' className='font-medium mbe-6 opacity-[0.92]'>
                Khóa học
              </Typography>
              <div className='flex flex-col gap-4'>
                <Typography component={Link} href='/front-pages/pricing' color='white' className='opacity-[0.78]'>
                  Lập trình
                </Typography>
                <Link href='/front-pages/payment' className='flex items-center gap-[10px]'>
                  <Typography color='white' className='opacity-[0.78]'>
                    Ngoại ngữ
                  </Typography>
                  <Chip label='Mới' color='primary' size='small' />
                </Link>
                <Typography component={Link} href='/pages/misc/under-maintenance' color='white' className='opacity-[0.78]'>
                  Kỹ năng mềm
                </Typography>
                <Typography component={Link} href='/pages/misc/coming-soon' color='white' className='opacity-[0.78]'>
                  Chứng chỉ
                </Typography>
              </div>
            </Grid>
            <Grid size={{ xs: 12, sm: 3, lg: 2 }}>
              <Typography color='white' className='font-medium mbe-6 opacity-[0.92]'>
                Hỗ trợ
              </Typography>
              <div className='flex flex-col gap-4'>
                <Typography component={Link} href='/front-pages/landing-page' color='white' className='opacity-[0.78]'>
                  Trung tâm trợ giúp
                </Typography>
                <Typography component={Link} href='/front-pages/landing-page' color='white' className='opacity-[0.78]'>
                  Giáo viên
                </Typography>
                <Typography component={Link} href='/front-pages/landing-page' color='white' className='opacity-[0.78]'>
                  Doanh nghiệp
                </Typography>
                <Typography component={Link} href='/front-pages/landing-page' color='white' className='opacity-[0.78]'>
                  Liên hệ
                </Typography>
              </div>
            </Grid>
            <Grid size={{ xs: 12, sm: 3, lg: 3 }}>
              <Typography color='white' className='font-medium mbe-6 opacity-[0.92]'>
                Liên kết
              </Typography>
              <div className='flex flex-col gap-4'>
                <Typography component={Link} href='/front-pages/landing-page' color='white' className='opacity-[0.78]'>
                  Trang chủ
                </Typography>
                <Typography component={Link} href='/front-pages/pricing' color='white' className='opacity-[0.78]'>
                  Bảng giá
                </Typography>
                <Typography component={Link} href='/front-pages/payment' color='white' className='opacity-[0.78]'>
                  Thanh toán
                </Typography>
                <Typography component={Link} href='/pages/misc/under-maintenance' color='white' className='opacity-[0.78]'>
                  Bảo trì
                </Typography>
                <Typography component={Link} href='/pages/misc/coming-soon' color='white' className='opacity-[0.78]'>
                  Sắp ra mắt
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
      <div className='bg-[#211B2C]' suppressHydrationWarning>
        <div
          className={classnames(
            'flex flex-wrap items-center justify-center sm:justify-between gap-4 plb-[15px]',
            frontCommonStyles.layoutSpacing
          )}
          suppressHydrationWarning
        >
          <Typography className='text-white' variant='body2'>
            <span>{`© ${new Date().getFullYear()}, Made with `}</span>
            <span>{`❤️`}</span>
            <span>{` by `}</span>
            <Link href='https://pixinvent.com/' target='_blank' className='font-medium text-white'>
              InterEdu
            </Link>
          </Typography>
          <div className='flex gap-1.5 items-center'>
            <IconButton component={Link} size='small' href='https://github.com/pixinvent' target='_blank'>
              <i className='tabler-brand-github-filled text-white text-lg' />
            </IconButton>
            <IconButton component={Link} size='small' href='https://www.facebook.com/pixinvents/' target='_blank'>
              <i className='tabler-brand-facebook-filled text-white text-lg' />
            </IconButton>
            <IconButton component={Link} size='small' href='https://x.com/pixinvents' target='_blank'>
              <i className='tabler-brand-twitter-filled text-white text-lg' />
            </IconButton>
            <IconButton
              component={Link}
              size='small'
              href='https://www.youtube.com/channel/UClOcB3o1goJ293ri_Hxpklg'
              target='_blank'
            >
              <i className='tabler-brand-youtube-filled text-white text-lg' />
            </IconButton>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
