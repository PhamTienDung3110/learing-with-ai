'use client'

import { useState } from 'react'

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  Stepper,
  Step,
  StepLabel,
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar
} from '@mui/material'
import { Icon } from '@iconify/react'

import { useCart } from '@/contexts/CartContext'

interface PaymentModalProps {
  open: boolean
  onClose: () => void
}

const steps = ['Giỏ hàng', 'Thanh toán', 'Hoàn tất']

const PaymentModal = ({ open, onClose }: PaymentModalProps) => {
  const { items, total, clearCart } = useCart()
  const [activeStep, setActiveStep] = useState(0)
  const [paymentMethod, setPaymentMethod] = useState<'momo' | 'viettel' | 'zalo'>('momo')

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      clearCart()
      onClose()
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
          <List>
            {items.map(item => (
              <ListItem key={item.id}>
                <ListItemAvatar>
                  <Avatar src={item.image} alt={item.title} />
                </ListItemAvatar>
                <ListItemText
                  primary={item.title}
                  secondary={item.subject}
                />
                <Typography variant="body1" color="primary" sx={{ fontWeight: 600 }}>
                  {item.price.toLocaleString('vi-VN')}đ
                </Typography>
              </ListItem>
            ))}
            <Divider sx={{ my: 2 }} />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h6">Tổng cộng:</Typography>
              <Typography variant="h6" color="primary" sx={{ fontWeight: 700 }}>
                {total.toLocaleString('vi-VN')}đ
              </Typography>
            </Box>
          </List>
        )
      case 1:
        return (
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ mb: 3 }}>
              Chọn phương thức thanh toán
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 4 }}>
              <Button
                variant={paymentMethod === 'momo' ? 'contained' : 'outlined'}
                onClick={() => setPaymentMethod('momo')}
                startIcon={<Icon icon="simple-icons:momo" />}
                sx={{ minWidth: 120 }}
              >
                MoMo
              </Button>
              <Button
                variant={paymentMethod === 'viettel' ? 'contained' : 'outlined'}
                onClick={() => setPaymentMethod('viettel')}
                startIcon={<Icon icon="simple-icons:viettel" />}
                sx={{ minWidth: 120 }}
              >
                ViettelPay
              </Button>
              <Button
                variant={paymentMethod === 'zalo' ? 'contained' : 'outlined'}
                onClick={() => setPaymentMethod('zalo')}
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
                src={`/images/qr-${paymentMethod}.png`}
                alt="QR Code"
                sx={{ width: 200, height: 200 }}
              />
              <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                Số tiền: {total.toLocaleString('vi-VN')}đ
              </Typography>
            </Box>
          </Box>
        )
      case 2:
        return (
          <Box sx={{ textAlign: 'center', py: 4 }}>
            <Icon
              icon="tabler-circle-check"
              style={{ fontSize: '4rem', color: 'var(--mui-palette-success-main)' }}
            />
            <Typography variant="h5" sx={{ mt: 2, mb: 1 }}>
              Thanh toán thành công!
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Cảm ơn bạn đã mua khóa học. Bạn có thể bắt đầu học ngay bây giờ.
            </Typography>
          </Box>
        )
      default:
        return null
    }
  }

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          Thanh toán
        </Typography>
        <IconButton onClick={onClose}>
          <Icon icon="tabler-x" />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {renderStepContent(activeStep)}
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 3 }}>
        {activeStep > 0 && (
          <Button onClick={handleBack} sx={{ color: 'black' }}>
            Quay lại
          </Button>
        )}
        <Button
          variant="contained"
          onClick={handleNext}
          sx={{ minWidth: 120 }}
        >
          {activeStep === steps.length - 1 ? 'Hoàn tất' : 'Tiếp tục'}
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default PaymentModal 
