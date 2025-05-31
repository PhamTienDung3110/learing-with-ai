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
  // ... existing books data ...
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
