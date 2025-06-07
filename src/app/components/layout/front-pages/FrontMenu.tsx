'use client'

// React Imports
import { useEffect } from 'react'

// Next Imports
import Link from 'next/link'
import { usePathname } from 'next/navigation'

// MUI Imports
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import type { Theme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'

// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { Mode } from '@core/types'

// Hook Imports

// Component Imports
// import DropdownMenu from './DropdownMenu'

type Props = {
  mode: Mode
  isDrawerOpen: boolean
  setIsDrawerOpen: (open: boolean) => void
}

type WrapperProps = {
  children: React.ReactNode
  isBelowLgScreen: boolean
  className?: string
  isDrawerOpen: boolean
  setIsDrawerOpen: (open: boolean) => void
}

const Wrapper = (props: WrapperProps) => {
  // Props
  const { children, isBelowLgScreen, className, isDrawerOpen, setIsDrawerOpen } = props

  if (isBelowLgScreen) {
    return (
      <Drawer
        variant='temporary'
        anchor='left'
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        ModalProps={{
          keepMounted: true
        }}
        sx={{ '& .MuiDrawer-paper': { width: ['100%', 300] } }}
        className={classnames('p-5', className)}
      >
        <div className='p-4 flex flex-col gap-x-3'>
          <IconButton onClick={() => setIsDrawerOpen(false)} className='absolute inline-end-4 block-start-2'>
            <i className='tabler-x' />
          </IconButton>
          {children}
        </div>
      </Drawer>
    )
  }

  return <div className={classnames('flex items-center flex-wrap gap-x-3 gap-y-3', className)}>{children}</div>
}

const FrontMenu = (props: Props) => {
  // Props
  // const { isDrawerOpen, setIsDrawerOpen, mode } = props
  const { isDrawerOpen, setIsDrawerOpen } = props

  // Hooks
  const pathname = usePathname()
  const isBelowLgScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'))

  useEffect(() => {
    if (!isBelowLgScreen && isDrawerOpen) {
      setIsDrawerOpen(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isBelowLgScreen])

  return (
    <Wrapper isBelowLgScreen={isBelowLgScreen} isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen}>
      <Typography
        color='text.primary'
        component={Link}
        href='/home'
        className={classnames('font-medium plb-3 pli-1.5 hover:text-primary', {
          'text-[#FEE63C]': pathname === '/home'
        })}
      >
        Trang chủ
      </Typography>
      <Typography
        color='text.primary'
        component={Link}
        href='/practice/exam'
        className={classnames('font-medium plb-3 pli-1.5 hover:text-primary', {
          'text-[#FEE63C]': pathname.includes('/practice/exam')
        })}
      >
        Đề thi
      </Typography>
      <Typography
        color='text.primary'
        component={Link}
        href='/practice/completed-exams'
        className={classnames('font-medium plb-3 pli-1.5 hover:text-primary', {
          'text-[#FEE63C]': pathname.includes('/practice/completed-exams')
        })}
      >
        Đề đã làm
      </Typography>
      <Typography
        color='text.primary'
        component={Link}
        href='/ai-chat'
        className={classnames('font-medium plb-3 pli-1.5 hover:text-primary', {
          'text-[#FEE63C]': pathname === '/ai-chat'
        })}
      >
        Hỏi AI
      </Typography>
      <Typography
        color='text.primary'
        component={Link}
        href='/practice/books'
        className={classnames('font-medium plb-3 pli-1.5 hover:text-primary', {
          'text-[#FEE63C]': pathname === '/practice/books'
        })}
      >
        Thẻ luyện tập
      </Typography>
      {/* <Typography
        color='text.primary'
        component={Link}
        href='/front-pages/landing-page#contact-us'
        className={classnames('font-medium plb-3 pli-1.5 hover:text-primary', {
          'text-primary': intersections['contact-us']
        })}
      >
        Làm đề thi theo gợi ý
      </Typography>
      <DropdownMenu
        mode={mode}
        isBelowLgScreen={isBelowLgScreen}
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
      /> */}
      <Typography
        component={Link}
        color='text.primary'
        href='/progress'
        className={classnames('font-medium plb-3 pli-1.5 hover:text-primary', {
          'text-[#FEE63C]': pathname === '/progress'
        })}
      >
        Báo cáo
      </Typography>
    </Wrapper>
  )
}

export default FrontMenu
