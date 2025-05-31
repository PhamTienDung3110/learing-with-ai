'use client'

// React Imports
import { useState } from 'react'

// Next Imports
import Link from 'next/link'

// MUI Imports
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import type { Theme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { Mode } from '@core/types'

// Component Imports
import Logo from '@components/layout/shared/Logo'
import ModeDropdown from '@components/layout/shared/ModeDropdown'
import CustomIconButton from '@core/components/mui/IconButton'
import FrontMenu from './FrontMenu'
import CartIcon from '@components/cart/CartIcon'

// Util Imports
import { frontLayoutClasses } from '@layouts/utils/layoutClasses'

// Styles Imports
import styles from './styles.module.css'

const Header = ({ mode }: { mode: Mode }) => {

  // States
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  // Hooks
  const isBelowLgScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'))

  // Detect window scroll
  // const trigger = useScrollTrigger({
  //   threshold: 0,
  //   disableHysteresis: true
  // })

  return (
    <header className={classnames(frontLayoutClasses.header, styles.header)}>
      <div className={classnames(frontLayoutClasses.navbar, styles.navbar, styles.headerScrolled)}>
        <div className={classnames(frontLayoutClasses.navbarContent, styles.navbarContent)}>
          {isBelowLgScreen ? (
            <div className='flex items-center gap-2 sm:gap-4'>
              <IconButton onClick={() => setIsDrawerOpen(true)} className='-mis-2'>
                <i className='tabler-menu-2 text-textPrimary' />
              </IconButton>
              <Link href='/home'>
                <Logo />
              </Link>
              <FrontMenu mode={mode} isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
            </div>
          ) : (
            <div className='flex items-center gap-10'>
              <Link href='/home'>
                <Logo />
              </Link>
              <FrontMenu mode={mode} isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
            </div>
          )}
          <div className='flex items-center gap-1 sm:gap-1'>
            <ModeDropdown />
            {isBelowLgScreen ? (
              <div className='flex items-center gap-1'>
                <Link href='/practice/cart'>
                  <CartIcon />
                </Link>
                <CustomIconButton
                  component={Link}
                  href='/register'
                  variant='contained'
                  color='primary'
                  target='_blank'
                >
                  <i className='tabler-user-plus text-xl' />
                </CustomIconButton>
              </div>
            ) : (
              <div className='flex items-center gap-2'>
                <Link href='/practice/cart'>
                  <CartIcon />
                </Link>
                <Button
                  onClick={() => window.location.href = '/login'}
                  variant='contained'
                  startIcon={<i className='tabler-login text-xl' />}
                  className='whitespace-nowrap'
                >
                  Đăng nhập
                </Button>
                <Button
                  onClick={() => window.location.href = '/register'}
                  variant='contained'
                  startIcon={<i className='tabler-user-plus text-xl' />}
                  className='whitespace-nowrap'
                >
                  Đăng ký
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
