'use client'

// MUI Imports
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import Badge from '@mui/material/Badge'
import IconButton from '@mui/material/IconButton'
import { useTheme } from '@mui/material/styles'

// Hook Imports

const CartIcon = () => {
  // Hooks
  const theme = useTheme()

  // TODO: Thay thế bằng số lượng thực tế từ cart state
  const cartItemsCount = 0

  return (
    <IconButton
      color='inherit'
      aria-label='cart'
      sx={{
        color: theme.palette.text.primary,
        '&:hover': {
          backgroundColor: 'rgba(var(--mui-mainColorChannels-lightShadow) / 0.08)'
        }
      }}
    >
      <Badge badgeContent={cartItemsCount} color='error'>
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  )
}

export default CartIcon 
