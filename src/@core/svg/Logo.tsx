// React Imports
import type { SVGAttributes } from 'react'

const Logo = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg width='1.4583em' height='1em' viewBox='0 0 35 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      {/* Quyển sách - Bìa trái */}
      <path
        d='M2 2C2 2 3 2 4 2C5 2 5 3 5 3V21C5 21 5 22 4 22C3 22 2 22 2 22V2Z'
        fill='currentColor'
      />
      {/* Quyển sách - Bìa phải */}
      <path
        d='M5 3C5 3 6 3 7 3C8 3 8 4 8 4V20C8 20 8 21 7 21C6 21 5 21 5 21V3Z'
        fill='currentColor'
      />
      {/* Gáy sách */}
      <path
        d='M5 3C5 3 5.5 3 6 3C6.5 3 6.5 3.5 6.5 3.5V20.5C6.5 20.5 6.5 21 6 21C5.5 21 5 21 5 21V3Z'
        fill='currentColor'
      />
      {/* Trang sách bên trái - Lớp 1 */}
      <path
        d='M3 4C3 4 3.5 4 4 4C4.5 4 4.5 4.5 4.5 4.5V19.5C4.5 19.5 4.5 20 4 20C3.5 20 3 20 3 20V4Z'
        fill='white'
        fillOpacity='0.4'
      />
      {/* Trang sách bên trái - Lớp 2 */}
      <path
        d='M3.5 5C3.5 5 4 5 4.5 5C5 5 5 5.5 5 5.5V18.5C5 18.5 5 19 4.5 19C4 19 3.5 19 3.5 19V5Z'
        fill='white'
        fillOpacity='0.3'
      />
      {/* Trang sách bên phải - Lớp 1 */}
      <path
        d='M5.5 4C5.5 4 6 4 6.5 4C7 4 7 4.5 7 4.5V19.5C7 19.5 7 20 6.5 20C6 20 5.5 20 5.5 20V4Z'
        fill='white'
        fillOpacity='0.4'
      />
      {/* Trang sách bên phải - Lớp 2 */}
      <path
        d='M6 5C6 5 6.5 5 7 5C7.5 5 7.5 5.5 7.5 5.5V18.5C7.5 18.5 7.5 19 7 19C6.5 19 6 19 6 19V5Z'
        fill='white'
        fillOpacity='0.3'
      />
      {/* Đường gấp trang trái */}
      <path
        d='M3.5 7H4.5M3.5 11H4.5M3.5 15H4.5'
        stroke='currentColor'
        strokeWidth='0.5'
        strokeLinecap='round'
      />
      {/* Đường gấp trang phải */}
      <path
        d='M5.5 7H6.5M5.5 11H6.5M5.5 15H6.5'
        stroke='currentColor'
        strokeWidth='0.5'
        strokeLinecap='round'
      />
      {/* Biểu tượng giáo dục trên sách */}
      <path
        d='M3 8L4.5 9.5L6 8'
        stroke='white'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M4.5 9.5V13'
        stroke='white'
        strokeWidth='1.5'
        strokeLinecap='round'
      />

      {/* Robot */}
      {/* Đầu robot */}
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M22 4H32V10H22V4ZM24 6V8H30V6H24Z'
        fill='currentColor'
      />
      {/* Mắt robot */}
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M25 6H27V8H25V6ZM28 6H30V8H28V6Z'
        fill='currentColor'
      />
      {/* Thân robot */}
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M24 10H30V18H24V10Z'
        fill='currentColor'
      />
      {/* Tay robot */}
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M20 12H24V16H20V12ZM30 12H34V16H30V12Z'
        fill='currentColor'
      />
      {/* Chân robot */}
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M26 18H28V22H26V18Z'
        fill='currentColor'
      />

      {/* Kết nối giữa sách và robot */}
      <path
        d='M8 12H20'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}

export default Logo
