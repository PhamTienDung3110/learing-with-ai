'use client'

import { useState, useEffect } from 'react'

import { useRouter } from 'next/navigation'

import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  Divider,
  IconButton,
  Stepper,
  Step,
  StepLabel
} from '@mui/material'
import { Icon } from '@iconify/react'

import { useCart } from '@/contexts/CartContext'

const steps = ['Giỏ hàng', 'Thanh toán', 'Hoàn tất']

type PaymentMethod = 'momo' | 'viettel' | 'zalo'

// Tách component CartItem
const CartItem = ({ item, onRemove }: { item: any; onRemove: (id: string) => void }) => (
  <ListItem
    secondaryAction={
      <IconButton edge="end" onClick={() => onRemove(item.id)} color="error">
        <Icon icon="tabler-trash" />
      </IconButton>
    }
  >
    <ListItemAvatar>
      <Avatar
        variant="rounded"
        src={item.image}
        alt={item.title}
        sx={{
          width: '100%',
          height: 120,
          mr: 2,
          borderRadius: 1
        }}
      />
    </ListItemAvatar>
    <Box sx={{ flex: 1 }}>
      <Typography variant="h6" sx={{ mb: 0.5 }}>
        {item.title}
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
        <Typography variant="body2" color="text.secondary">
          Môn học: {item.subject}
        </Typography>
        <Typography variant="h6" color="primary" sx={{ fontWeight: 700 }}>
          {item.price.toLocaleString('vi-VN')}đ
        </Typography>
      </Box>
    </Box>
  </ListItem>
)

// Tách component PaymentMethods
const PaymentMethods = ({
  paymentMethod,
  onSelect,
  total
}: {
  paymentMethod: PaymentMethod;
  onSelect: (method: PaymentMethod) => void;
  total: number
}) => (
  <Box>
    <Typography variant="h6" sx={{ mb: 3 }}>
      Chọn phương thức thanh toán
    </Typography>
    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 4 }}>
      <Button
        variant={paymentMethod === 'momo' ? 'contained' : 'outlined'}
        onClick={() => onSelect('momo')}
        startIcon={<Icon icon="simple-icons:momo" />}
        sx={{ minWidth: 120 }}
      >
        MoMo
      </Button>
      <Button
        variant={paymentMethod === 'viettel' ? 'contained' : 'outlined'}
        onClick={() => onSelect('viettel')}
        startIcon={<Icon icon="simple-icons:viettel" />}
        sx={{ minWidth: 120 }}
      >
        ViettelPay
      </Button>
      <Button
        variant={paymentMethod === 'zalo' ? 'contained' : 'outlined'}
        onClick={() => onSelect('zalo')}
        startIcon={<Icon icon="simple-icons:zalo" />}
        sx={{ minWidth: 120 }}
      >
        ZaloPay
      </Button>
    </Box>
    <Box sx={{ p: 3, bgcolor: 'grey.50', borderRadius: 2, mb: 3 }}>
      <Typography variant="subtitle1" sx={{ mb: 2 }}>
        Quét mã QR để thanh toán
      </Typography>
      <Box
        component="img"
        src='https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg'
        alt="QR Code"
        sx={{ width: 200, height: 200, mx: 'auto', display: 'block' }}
      />
      <Typography variant="body2" color="text.secondary" sx={{ mt: 2, textAlign: 'center' }}>
        Số tiền: {total.toLocaleString('vi-VN')}đ
      </Typography>
    </Box>
  </Box>
)

// Tách component SuccessStep
const SuccessStep = ({ onBack }: { onBack: () => void }) => (
  <Box sx={{ textAlign: 'center', py: 4 }}>
    <Icon
      icon="tabler-circle-check"
      style={{ fontSize: '4rem', color: 'var(--mui-palette-success-main)' }}
    />
    <Typography variant="h5" sx={{ mt: 2, mb: 1 }}>
      Thanh toán thành công!
    </Typography>
    <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
      Cảm ơn bạn đã mua khóa học. Bạn có thể bắt đầu học ngay bây giờ.
    </Typography>
    <Button
      variant="contained"
      onClick={onBack}
      startIcon={<Icon icon="tabler-arrow-left" />}
    >
      Quay lại trang khóa học
    </Button>
  </Box>
)

// Tách component EmptyCart
const EmptyCart = ({ onBack }: { onBack: () => void }) => (
  <Box sx={{ p: 4, textAlign: 'center' }}>
    <Icon icon="tabler-shopping-cart-off" style={{ fontSize: '4rem', color: 'var(--mui-palette-text-disabled)' }} />
    <Typography variant="h5" sx={{ mt: 2, mb: 1 }}>
      Giỏ hàng trống
    </Typography>
    <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
      Hãy thêm khóa học vào giỏ hàng để tiếp tục
    </Typography>
    <Button
      variant="contained"
      onClick={onBack}
      startIcon={<Icon icon="tabler-arrow-left" />}
    >
      Quay lại trang khóa học
    </Button>
  </Box>
)

const CartPage = () => {
  const router = useRouter()
  const { items, removeFromCart, total, clearCart } = useCart()
  const [activeStep, setActiveStep] = useState(0)
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('momo')
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      clearCart()
      router.push('/practice/books')
    } else {
      setActiveStep(prev => prev + 1)
    }
  }

  const handleBack = () => {
    setActiveStep(prev => prev - 1)
  }

  const renderStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <Box>
            <List>
              {items.map(item => (
                <CartItem key={item.id} item={item} onRemove={removeFromCart} />
              ))}
            </List>
            <Divider sx={{ my: 2 }} />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <Typography variant="h6">Tổng cộng:</Typography>
              <Typography variant="h6" color="primary" sx={{ fontWeight: 700 }}>
                {isClient ? total.toLocaleString('vi-VN') : total}đ
              </Typography>
            </Box>
            <Button
              variant="contained"
              fullWidth
              size="large"
              onClick={handleNext}
              startIcon={<Icon icon="tabler-credit-card" />}
            >
              Thanh toán ngay
            </Button>
          </Box>
        )
      case 1:
        return (
          <Box>
            <PaymentMethods
              paymentMethod={paymentMethod}
              onSelect={setPaymentMethod}
              total={total}
            />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
              <Button
                variant="outlined"
                onClick={handleBack}
                sx={{ color: 'black' }}
                startIcon={<Icon icon="tabler-arrow-left" />}
              >
                Quay lại
              </Button>
              <Button
                variant="contained"
                onClick={handleNext}
                startIcon={<Icon icon="tabler-check" />}
              >
                Xác nhận thanh toán
              </Button>
            </Box>
          </Box>
        )
      case 2:
        return <SuccessStep onBack={() => router.push('/practice/books')} />
      default:
        return null
    }
  }

  if (items.length === 0) {
    return <EmptyCart onBack={() => router.push('/practice/books')} />
  }

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', p: 4 }}>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: 700 }}>
        {activeStep === 0 ? 'Giỏ hàng của bạn' : activeStep === 1 ? 'Thanh toán' : 'Hoàn tất'}
      </Typography>

      <Card>
        <CardContent>
          <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {renderStepContent(activeStep)}
        </CardContent>
      </Card>
    </Box>
  )
}

export default CartPage 
