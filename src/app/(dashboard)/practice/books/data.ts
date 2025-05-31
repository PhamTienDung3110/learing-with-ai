// Types
export interface Book {
  id: string
  title: string
  description: string
  icon: string
  color: string
  image: string
  chapters: Chapter[]
  subject: string
  views: number
  attempts: number
  time: number
  questions: number
  grade: number
  totalBooks: number
  totalPurchases: number
  totalChapters: number
  price: number
  originalPrice?: number
}

export interface Chapter {
  id: string
  title: string
  lessons: Lesson[]
}

export interface Lesson {
  id: string
  title: string
  difficulty: 'easy' | 'medium' | 'hard'
  isLocked: boolean
  duration: number
}

export const books: Book[] = [
  {
    id: 'toan-12-cd',
    title: 'Toán 12 - Bộ sách Cánh Diều',
    description: 'Bộ sách giáo khoa Cánh Diều cho lớp 12',
    icon: 'tabler-book',
    color: '#FF6B6B',
    image: 'https://www.nxbgd.vn/Attachments/images/5912/t12ct.jpg',
    subject: 'Toán học',
    views: 120,
    attempts: 10,
    time: 90,
    questions: 50,
    grade: 12,
    totalBooks: 8,
    totalPurchases: 1500,
    totalChapters: 24,
    price: 100000,
    originalPrice: 120000,
    chapters: [
      {
        id: 'cd-chuong-1',
        title: 'Chương 1: Ứng dụng đạo hàm',
        lessons: [
          { id: 'cd-1-1', title: 'Bài 1: Sự đồng biến, nghịch biến của hàm số', difficulty: 'easy', isLocked: false, duration: 30 },
          { id: 'cd-1-2', title: 'Bài 2: Cực trị của hàm số', difficulty: 'medium', isLocked: true, duration: 45 },
          { id: 'cd-1-3', title: 'Bài 3: Giá trị lớn nhất, nhỏ nhất', difficulty: 'medium', isLocked: true, duration: 45 },
          { id: 'cd-1-4', title: 'Bài 4: Đường tiệm cận', difficulty: 'hard', isLocked: true, duration: 60 }
        ]
      }
    ]
  },
  {
    id: 'vat-ly-12-ct',
    title: 'Vật lý 12 - Bộ sách Chân trời sáng tạo',
    description: 'Bộ sách giáo khoa Chân trời sáng tạo cho lớp 12',
    icon: 'tabler-book-2',
    color: '#4ECDC4',
    image: 'https://www.nxbgd.vn/Attachments/images/5912/lop%2012-2%20bo.jpg',
    subject: 'Vật lý',
    views: 80,
    attempts: 5,
    time: 60,
    questions: 40,
    grade: 12,
    totalBooks: 6,
    totalPurchases: 1200,
    totalChapters: 18,
    price: 80000,
    originalPrice: 100000,
    chapters: [
      {
        id: 'ct-chuong-1',
        title: 'Chương 1: Dao động cơ',
        lessons: [
          { id: 'ct-1-1', title: 'Bài 1: Dao động điều hòa', difficulty: 'easy', isLocked: false, duration: 30 },
          { id: 'ct-1-2', title: 'Bài 2: Con lắc lò xo', difficulty: 'hard', isLocked: true, duration: 60 },
          { id: 'ct-1-3', title: 'Bài 3: Con lắc đơn', difficulty: 'medium', isLocked: true, duration: 45 }
        ]
      }
    ]
  },
  {
    id: 'hoa-hoc-12-kn',
    title: 'Hóa học 12 - Bộ sách Kết nối tri thức',
    description: 'Bộ sách giáo khoa Kết nối tri thức cho lớp 12',
    icon: 'tabler-book-3',
    color: '#45B7D1',
    image: 'https://tailieugiangday.vn/public/storage/items/S%C3%81CH%20GI%C3%81O%20VI%C3%8AN%20V%E1%BA%ACT%20L%C3%8D%2012%20K%E1%BA%BET%20N%E1%BB%90I%20TRI%20TH%E1%BB%A8C%20Mi%E1%BB%85n%20ph%C3%AD.JPG',
    subject: 'Hóa học',
    views: 60,
    attempts: 2,
    time: 60,
    questions: 40,
    grade: 12,
    totalBooks: 4,
    totalPurchases: 800,
    totalChapters: 12,
    price: 60000,
    originalPrice: 80000,
    chapters: [
      {
        id: 'kn-chuong-1',
        title: 'Chương 1: Este - Lipit',
        lessons: [
          { id: 'kn-1-1', title: 'Bài 1: Khái niệm về este', difficulty: 'easy', isLocked: false, duration: 30 },
          { id: 'kn-1-2', title: 'Bài 2: Tính chất hóa học', difficulty: 'medium', isLocked: true, duration: 45 },
          { id: 'kn-1-3', title: 'Bài 3: Lipit', difficulty: 'hard', isLocked: true, duration: 60 }
        ]
      }
    ]
  },
  {
    id: 'anh-van-12-gs',
    title: 'Tiếng Anh 12 - Bộ sách Global Success',
    description: 'Bộ sách Tiếng Anh Global Success cho lớp 12',
    icon: 'tabler-language',
    color: '#96CEB4',
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh9861eVmklwR5D9V-6hR_eDNJDrU2m3ScTnmiHqUBgdnIIIpPHg0EclLXQASjNVkgIcRQnwDxBawYONtHUErkgdBVLIeyCU_vcP9d0S4Iklm4XxJxiBgI1fbTIcil_OjPIVXVkvMs4iqr5Ts6giQM60gXe-_Hdfj9TKsfZQSOFW25d5dt5E_pun-Bl3rGB/w1200-h630-p-k-no-nu/vn-11134207-7r98o-lvwzxjaq3y6z63.jpg',
    subject: 'Tiếng Anh',
    views: 100,
    attempts: 7,
    time: 90,
    questions: 50,
    grade: 12,
    totalBooks: 5,
    totalPurchases: 1000,
    totalChapters: 15,
    price: 120000,
    originalPrice: 150000,
    chapters: [
      {
        id: 'gs-chuong-1',
        title: 'Chương 1: Life stories',
        lessons: [
          { id: 'gs-1-1', title: 'Bài 1: Getting started', difficulty: 'easy', isLocked: false, duration: 30 },
          { id: 'gs-1-2', title: 'Bài 2: Language', difficulty: 'medium', isLocked: true, duration: 45 }
        ]
      }
    ]
  },
  {
    id: 'toan-11-cd',
    title: 'Toán 11 - Bộ sách Cánh Diều',
    description: 'Bộ sách giáo khoa Cánh Diều cho lớp 11',
    icon: 'tabler-book',
    color: '#FF6B6B',
    image: 'https://img.loigiaihay.com/picture/2024/0129/cd_1.png',
    subject: 'Toán học',
    views: 120,
    attempts: 10,
    time: 90,
    questions: 50,
    grade: 11,
    totalBooks: 8,
    totalPurchases: 1500,
    totalChapters: 24,
    price: 100000,
    originalPrice: 120000,
    chapters: [
      {
        id: 'cd-chuong-1',
        title: 'Chương 1: Hàm số lượng giác',
        lessons: [
          { id: 'cd-1-1', title: 'Bài 1: Hàm số sin và cos', difficulty: 'easy', isLocked: false, duration: 30 },
          { id: 'cd-1-2', title: 'Bài 2: Hàm số tan và cot', difficulty: 'medium', isLocked: true, duration: 45 },
          { id: 'cd-1-3', title: 'Bài 3: Phương trình lượng giác', difficulty: 'medium', isLocked: true, duration: 45 },
          { id: 'cd-1-4', title: 'Bài 4: Phương trình lượng giác cơ bản', difficulty: 'hard', isLocked: true, duration: 60 }
        ]
      }
    ]
  },
  {
    id: 'vat-ly-11-ct',
    title: 'Vật lý 11 - Bộ sách Chân trời sáng tạo',
    description: 'Bộ sách giáo khoa Chân trời sáng tạo cho lớp 11',
    icon: 'tabler-book-2',
    color: '#4ECDC4',
    image: 'https://www.nxbgd.vn/Attachments/images/5912/lop%2012-2%20bo.jpg',
    subject: 'Vật lý',
    views: 80,
    attempts: 5,
    time: 60,
    questions: 40,
    grade: 11,
    totalBooks: 6,
    totalPurchases: 1200,
    totalChapters: 18,
    price: 80000,
    originalPrice: 100000,
    chapters: [
      {
        id: 'ct-chuong-1',
        title: 'Chương 1: Điện tích - Điện trường',
        lessons: [
          { id: 'ct-1-1', title: 'Bài 1: Điện tích', difficulty: 'easy', isLocked: false, duration: 30 },
          { id: 'ct-1-2', title: 'Bài 2: Định luật Cu-lông', difficulty: 'hard', isLocked: true, duration: 60 },
          { id: 'ct-1-3', title: 'Bài 3: Điện trường', difficulty: 'medium', isLocked: true, duration: 45 }
        ]
      }
    ]
  },
  {
    id: 'hoa-hoc-11-kn',
    title: 'Hóa học 11 - Bộ sách Kết nối tri thức',
    description: 'Bộ sách giáo khoa Kết nối tri thức cho lớp 11',
    icon: 'tabler-book-3',
    color: '#45B7D1',
    image: 'https://tailieugiangday.vn/public/storage/items/S%C3%81CH%20GI%C3%81O%20VI%C3%8AN%20V%E1%BA%ACT%20L%C3%8D%2012%20K%E1%BA%BET%20N%E1%BB%90I%20TRI%20TH%E1%BB%A8C%20Mi%E1%BB%85n%20ph%C3%AD.JPG',
    subject: 'Hóa học',
    views: 60,
    attempts: 2,
    time: 60,
    questions: 40,
    grade: 11,
    totalBooks: 4,
    totalPurchases: 800,
    totalChapters: 12,
    price: 60000,
    originalPrice: 80000,
    chapters: [
      {
        id: 'kn-chuong-1',
        title: 'Chương 1: Sự điện li',
        lessons: [
          { id: 'kn-1-1', title: 'Bài 1: Sự điện li', difficulty: 'easy', isLocked: false, duration: 30 },
          { id: 'kn-1-2', title: 'Bài 2: Axit, bazơ và muối', difficulty: 'medium', isLocked: true, duration: 45 },
          { id: 'kn-1-3', title: 'Bài 3: pH và môi trường', difficulty: 'hard', isLocked: true, duration: 60 }
        ]
      }
    ]
  },
  {
    id: 'anh-van-11-gs',
    title: 'Tiếng Anh 11 - Bộ sách Global Success',
    description: 'Bộ sách Tiếng Anh Global Success cho lớp 11',
    icon: 'tabler-language',
    color: '#96CEB4',
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh9861eVmklwR5D9V-6hR_eDNJDrU2m3ScTnmiHqUBgdnIIIpPHg0EclLXQASjNVkgIcRQnwDxBawYONtHUErkgdBVLIeyCU_vcP9d0S4Iklm4XxJxiBgI1fbTIcil_OjPIVXVkvMs4iqr5Ts6giQM60gXe-_Hdfj9TKsfZQSOFW25d5dt5E_pun-Bl3rGB/w1200-h630-p-k-no-nu/vn-11134207-7r98o-lvwzxjaq3y6z63.jpg',
    subject: 'Tiếng Anh',
    views: 100,
    attempts: 7,
    time: 90,
    questions: 50,
    grade: 11,
    totalBooks: 5,
    totalPurchases: 1000,
    totalChapters: 15,
    price: 120000,
    originalPrice: 150000,
    chapters: [
      {
        id: 'gs-chuong-1',
        title: 'Chương 1: Generation gap',
        lessons: [
          { id: 'gs-1-1', title: 'Bài 1: Getting started', difficulty: 'easy', isLocked: false, duration: 30 },
          { id: 'gs-1-2', title: 'Bài 2: Language', difficulty: 'medium', isLocked: true, duration: 45 }
        ]
      }
    ]
  }
]

export const difficultyOptions = [
  { value: '', label: 'Tất cả' },
  { value: 'easy', label: 'Dễ' },
  { value: 'medium', label: 'Trung bình' },
  { value: 'hard', label: 'Khó' }
]

export const subjectOptions = [
  { value: '', label: 'Tất cả' },
  { value: 'Toán học', label: 'Toán học' },
  { value: 'Vật lý', label: 'Vật lý' },
  { value: 'Hóa học', label: 'Hóa học' },
  { value: 'Tiếng Anh', label: 'Tiếng Anh' },
  { value: 'Tổng hợp', label: 'Tổng hợp' }
]

export const sortOptions = [
  { value: 'newest', label: 'Mới nhất' },
  { value: 'popular', label: 'Phổ biến' },
  { value: 'attempts', label: 'Bán chạy' }
]

export const gradeOptions = [
  { value: '', label: 'Tất cả' },
  { value: '3', label: 'Lớp 3' },
  { value: '4', label: 'Lớp 4' },
  { value: '5', label: 'Lớp 5' },
  { value: '6', label: 'Lớp 6' },
  { value: '7', label: 'Lớp 7' },
  { value: '8', label: 'Lớp 8' },
  { value: '9', label: 'Lớp 9' },
  { value: '10', label: 'Lớp 10' },
  { value: '11', label: 'Lớp 11' },
  { value: '12', label: 'Lớp 12' }
] 
