// Types
export interface BookSubject {
  id: string
  name: string
  books: Book[]
}

export interface Book {
  id: string
  title: string
  description: string
  icon: string
  color: string
  image: string
  subjects: Subject[]
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

export interface Subject {
  id: string
  name: string
  chapters: Chapter[]
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
    id: 'bộ-sách-cánh-diều-3',
    title: 'Lớp 3 - Bộ sách Cánh Diều',
    description: 'Bộ sách giáo khoa Cánh Diều cho lớp 3',
    icon: 'tabler-book',
    color: '#FF6B6B',
    image: 'https://salt.tikicdn.com/cache/w1200/ts/product/b9/a0/7d/19f5a67abbccc6bf4795cc862dad5d73.jpg',
    views: 120,
    attempts: 10,
    time: 90,
    questions: 50,
    grade: 3,
    totalBooks: 8,
    totalPurchases: 1500,
    totalChapters: 24,
    price: 49000,
    originalPrice: 300000,
    subjects: [
      {
        id: 'toan-3',
        name: 'Toán học',
        chapters: [
          {
            id: 'cd-chuong-1',
            title: 'Chương 1: Số học',
            lessons: [
              { id: 'cd-1-1', title: 'Bài 1: Số học', difficulty: 'easy', isLocked: false, duration: 30 },
              { id: 'cd-1-2', title: 'Bài 2: Đại lượng và đo đại lượng', difficulty: 'medium', isLocked: true, duration: 45 },
              { id: 'cd-1-3', title: 'Bài 3: Phép tính với số tự nhiên', difficulty: 'medium', isLocked: true, duration: 45 },
              { id: 'cd-1-4', title: 'Bài 4: Phép tính với số thập phân', difficulty: 'hard', isLocked: true, duration: 60 }
            ]
          }
        ]
      },
      {
        id: 'vat-ly-3',
        name: 'Vật lý',
        chapters: [
          {
            id: 'cd-vl-chuong-1',
            title: 'Chương 1: Số học',
            lessons: [
              { id: 'cd-1-1', title: 'Bài 1: Số học', difficulty: 'easy', isLocked: false, duration: 30 },
              { id: 'cd-1-2', title: 'Bài 2: Đại lượng và đo đại lượng', difficulty: 'medium', isLocked: true, duration: 45 },
              { id: 'cd-1-3', title: 'Bài 3: Phép tính với số tự nhiên', difficulty: 'medium', isLocked: true, duration: 45 },
              { id: 'cd-1-4', title: 'Bài 4: Phép tính với số thập phân', difficulty: 'hard', isLocked: true, duration: 60 }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'bộ-sách-cánh-diều-4',
    title: 'Lớp 4 - Bộ sách Cánh Diều',
    description: 'Bộ sách giáo khoa Cánh Diều cho lớp 4',
    icon: 'tabler-book',
    color: '#FF6B6B',
    image: 'https://baovinhlong.com.vn/file/e7837c027f6ecd14017ffa4e5f2a0e34/dataimages/202302/original/images2515798_BVL_cc.jpg',
    views: 120,
    attempts: 10,
    time: 90,
    questions: 50,
    grade: 4,
    totalBooks: 8,
    totalPurchases: 1500,
    totalChapters: 24,
    price: 59000,
    originalPrice: 300000,
    subjects: [
      {
        id: 'toan-4',
        name: 'Toán học',
        chapters: [
          {
            id: 'cd-chuong-1',
            title: 'Chương 1: Số học',
            lessons: [
              { id: 'cd-1-1', title: 'Bài 1: Số học', difficulty: 'easy', isLocked: false, duration: 30 },
              { id: 'cd-1-2', title: 'Bài 2: Đại lượng và đo đại lượng', difficulty: 'medium', isLocked: true, duration: 45 },
              { id: 'cd-1-3', title: 'Bài 3: Phép tính với số tự nhiên', difficulty: 'medium', isLocked: true, duration: 45 },
              { id: 'cd-1-4', title: 'Bài 4: Phép tính với số thập phân', difficulty: 'hard', isLocked: true, duration: 60 }
            ]
          }
        ]
      },
      {
        id: 'vat-ly-4',
        name: 'Vật lý',
        chapters: [
          {
            id: 'cd-vl-chuong-1',
            title: 'Chương 1: Số học',
            lessons: [
              { id: 'cd-1-1', title: 'Bài 1: Số học', difficulty: 'easy', isLocked: false, duration: 30 },
              { id: 'cd-1-2', title: 'Bài 2: Đại lượng và đo đại lượng', difficulty: 'medium', isLocked: true, duration: 45 },
              { id: 'cd-1-3', title: 'Bài 3: Phép tính với số tự nhiên', difficulty: 'medium', isLocked: true, duration: 45 },
              { id: 'cd-1-4', title: 'Bài 4: Phép tính với số thập phân', difficulty: 'hard', isLocked: true, duration: 60 }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'bộ-sách-cánh-diều-5',
    title: 'Lớp 5 - Bộ sách Cánh Diều',
    description: 'Bộ sách giáo khoa Cánh Diều cho lớp 5',
    icon: 'tabler-book',
    color: '#FF6B6B',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-lY-4Qy2iXu2AxkVU3JwETi5pVvFJWKQmfg&s',
    views: 120,
    attempts: 10,
    time: 90,
    questions: 50,
    grade: 5,
    totalBooks: 8,
    totalPurchases: 1500,
    totalChapters: 24,
    price: 69000,
    originalPrice: 300000,
    subjects: [
      {
        id: 'toan-5',
        name: 'Toán học',
        chapters: [
          {
            id: 'cd-chuong-1',
            title: 'Chương 1: Số học',
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
        id: 'vat-ly-5',
        name: 'Vật lý',
        chapters: [
          {
            id: 'cd-vl-chuong-1',
            title: 'Chương 1: Số học',
            lessons: [
              { id: 'cd-1-1', title: 'Bài 1: Số học', difficulty: 'easy', isLocked: false, duration: 30 },
              { id: 'cd-1-2', title: 'Bài 2: Đại lượng và đo đại lượng', difficulty: 'medium', isLocked: true, duration: 45 },
              { id: 'cd-1-3', title: 'Bài 3: Phép tính với số tự nhiên', difficulty: 'medium', isLocked: true, duration: 45 },
              { id: 'cd-1-4', title: 'Bài 4: Phép tính với số thập phân', difficulty: 'hard', isLocked: true, duration: 60 }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'bộ-sách-cánh-diều-6',
    title: 'Lớp 6 - Bộ sách Cánh Diều',
    description: 'Bộ sách giáo khoa Cánh Diều cho lớp 6',
    icon: 'tabler-book',
    color: '#FF6B6B',
    image: 'https://lh3.googleusercontent.com/proxy/jzXOfiAAc-v-NxLwIPg99yQIJYGZgvMXzhNl_NbY_lY5piwAJFwd73NhlyRaK233IYRbbRc7tMy_VbYwTPmNKlGOSNrYOcAcINIf28aWOlsLOYVFjyzc7pMBqz46DwvdyzJIGU7GXYgpuQiBvSE3DQ3RhCzX535bk66SEO568YY',
    views: 120,
    attempts: 10,
    time: 90,
    questions: 50,
    grade: 6,
    totalBooks: 8,
    totalPurchases: 1500,
    totalChapters: 24,
    price: 99000,
    originalPrice: 300000,
    subjects: [
      {
        id: 'toan-6',
        name: 'Toán học',
        chapters: [
          {
            id: 'cd-chuong-1',
            title: 'Chương 1: Số học',
            lessons: [
              { id: 'cd-1-1', title: 'Bài 1: Số học', difficulty: 'easy', isLocked: false, duration: 30 },
              { id: 'cd-1-2', title: 'Bài 2: Đại lượng và đo đại lượng', difficulty: 'medium', isLocked: true, duration: 45 },
              { id: 'cd-1-3', title: 'Bài 3: Phép tính với số tự nhiên', difficulty: 'medium', isLocked: true, duration: 45 },
              { id: 'cd-1-4', title: 'Bài 4: Phép tính với số thập phân', difficulty: 'hard', isLocked: true, duration: 60 }
            ]
          }
        ]
      },
      {
        id: 'vat-ly-6',
        name: 'Vật lý',
        chapters: [
          {
            id: 'cd-vl-chuong-1',
            title: 'Chương 1: Số học',
            lessons: [
              { id: 'cd-1-1', title: 'Bài 1: Số học', difficulty: 'easy', isLocked: false, duration: 30 },
              { id: 'cd-1-2', title: 'Bài 2: Đại lượng và đo đại lượng', difficulty: 'medium', isLocked: true, duration: 45 },
              { id: 'cd-1-3', title: 'Bài 3: Phép tính với số tự nhiên', difficulty: 'medium', isLocked: true, duration: 45 },
              { id: 'cd-1-4', title: 'Bài 4: Phép tính với số thập phân', difficulty: 'hard', isLocked: true, duration: 60 }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'bộ-sách-cánh-diều-7',
    title: 'Lớp 7 - Bộ sách Cánh Diều',
    description: 'Bộ sách giáo khoa Cánh Diều cho lớp 7',
    icon: 'tabler-book',
    color: '#FF6B6B',
    image: 'https://www.baolongan.vn/image/news/2022/20220301/images/1071.jpg',
    views: 120,
    attempts: 10,
    time: 90,
    questions: 50,
    grade: 7,
    totalBooks: 8,
    totalPurchases: 1500,
    totalChapters: 24,
    price: 109000,
    originalPrice: 300000,
    subjects: [
      {
        id: 'toan-7',
        name: 'Toán học',
        chapters: [
          {
            id: 'cd-chuong-1',
            title: 'Chương 1: Số học',
            lessons: [
              { id: 'cd-1-1', title: 'Bài 1: Số học', difficulty: 'easy', isLocked: false, duration: 30 },
              { id: 'cd-1-2', title: 'Bài 2: Đại lượng và đo đại lượng', difficulty: 'medium', isLocked: true, duration: 45 },
              { id: 'cd-1-3', title: 'Bài 3: Phép tính với số tự nhiên', difficulty: 'medium', isLocked: true, duration: 45 },
              { id: 'cd-1-4', title: 'Bài 4: Phép tính với số thập phân', difficulty: 'hard', isLocked: true, duration: 60 }
            ]
          }
        ]
      },
      {
        id: 'vat-ly-7',
        name: 'Vật lý',
        chapters: [
          {
            id: 'cd-vl-chuong-1',
            title: 'Chương 1: Dao động cơ',
            lessons: [
              { id: 'cd-1-1', title: 'Bài 1: Số học', difficulty: 'easy', isLocked: false, duration: 30 },
              { id: 'cd-1-2', title: 'Bài 2: Đại lượng và đo đại lượng', difficulty: 'medium', isLocked: true, duration: 45 },
              { id: 'cd-1-3', title: 'Bài 3: Phép tính với số tự nhiên', difficulty: 'medium', isLocked: true, duration: 45 },
              { id: 'cd-1-4', title: 'Bài 4: Phép tính với số thập phân', difficulty: 'hard', isLocked: true, duration: 60 }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'bộ-sách-cánh-diều-8',
    title: 'Lớp 8 - Bộ sách Cánh Diều',
    description: 'Bộ sách giáo khoa Cánh Diều cho lớp 8',
    icon: 'tabler-book',
    color: '#FF6B6B',
    image: 'https://giadinh.mediacdn.vn/296230595582509056/2023/3/10/photo-1678425739126-1678425739928686947180.jpg',
    views: 120,
    attempts: 10,
    time: 90,
    questions: 50,
    grade: 8,
    totalBooks: 8,
    totalPurchases: 1500,
    totalChapters: 24,
    price: 119000,
    originalPrice: 300000,
    subjects: [
      {
        id: 'toan-8',
        name: 'Toán học',
        chapters: [
          {
            id: 'cd-chuong-1',
            title: 'Chương 1: Số học',
            lessons: [
              { id: 'cd-1-1', title: 'Bài 1: Số học', difficulty: 'easy', isLocked: false, duration: 30 },
              { id: 'cd-1-2', title: 'Bài 2: Đại lượng và đo đại lượng', difficulty: 'medium', isLocked: true, duration: 45 },
              { id: 'cd-1-3', title: 'Bài 3: Phép tính với số tự nhiên', difficulty: 'medium', isLocked: true, duration: 45 },
              { id: 'cd-1-4', title: 'Bài 4: Phép tính với số thập phân', difficulty: 'hard', isLocked: true, duration: 60 }
            ]
          }
        ]
      },
      {
        id: 'vat-ly-8',
        name: 'Vật lý',
        chapters: [
          {
            id: 'cd-vl-chuong-1',
            title: 'Chương 1: Số học',
            lessons: [
              { id: 'cd-1-1', title: 'Bài 1: Số học', difficulty: 'easy', isLocked: false, duration: 30 },
              { id: 'cd-1-2', title: 'Bài 2: Đại lượng và đo đại lượng', difficulty: 'medium', isLocked: true, duration: 45 },
              { id: 'cd-1-3', title: 'Bài 3: Phép tính với số tự nhiên', difficulty: 'medium', isLocked: true, duration: 45 },
              { id: 'cd-1-4', title: 'Bài 4: Phép tính với số thập phân', difficulty: 'hard', isLocked: true, duration: 60 }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'bộ-sách-cánh-diều-9',
    title: 'Lớp 9 - Bộ sách Cánh Diều',
    description: 'Bộ sách giáo khoa Cánh Diều cho lớp 9',
    icon: 'tabler-book',
    color: '#FF6B6B',
    image: 'https://xdcs.cdnchinhphu.vn/446259493575335936/2023/12/31/sgk9-17040323740382062033379.jpg',
    views: 120,
    attempts: 10,
    time: 90,
    questions: 50,
    grade: 9,
    totalBooks: 8,
    totalPurchases: 1500,
    totalChapters: 24,
    price: 129000,
    originalPrice: 300000,
    subjects: [
      {
        id: 'toan-9',
        name: 'Toán học',
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
        id: 'vat-ly-9',
        name: 'Vật lý',
        chapters: [
          {
            id: 'cd-vl-chuong-1',
            title: 'Chương 1: Dao động cơ',
            lessons: [
              { id: 'cd-1-1', title: 'Bài 1: Số học', difficulty: 'easy', isLocked: false, duration: 30 },
              { id: 'cd-1-2', title: 'Bài 2: Đại lượng và đo đại lượng', difficulty: 'medium', isLocked: true, duration: 45 },
              { id: 'cd-1-3', title: 'Bài 3: Phép tính với số tự nhiên', difficulty: 'medium', isLocked: true, duration: 45 },
              { id: 'cd-1-4', title: 'Bài 4: Phép tính với số thập phân', difficulty: 'hard', isLocked: true, duration: 60 }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'bộ-sách-cánh-diều-10',
    title: 'Lớp 10 - Bộ sách Cánh Diều',
    description: 'Bộ sách giáo khoa Cánh Diều cho lớp 10',
    icon: 'tabler-book',
    color: '#FF6B6B',
    image: 'https://st.download.vn/data/image/2022/04/03/SGK-lop-10-700.jpg',
    views: 120,
    attempts: 10,
    time: 90,
    questions: 50,
    grade: 10,
    totalBooks: 8,
    totalPurchases: 1500,
    totalChapters: 24,
    price: 199000,
    originalPrice: 300000,
    subjects: [
      {
        id: 'toan-10',
        name: 'Toán học',
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
        id: 'vat-ly-10',
        name: 'Vật lý',
        chapters: [
          {
            id: 'cd-vl-chuong-1',
            title: 'Chương 1: Dao động cơ',
            lessons: [
              { id: 'cd-vl-1-1', title: 'Bài 1: Dao động điều hòa', difficulty: 'easy', isLocked: false, duration: 30 },
              { id: 'cd-vl-1-2', title: 'Bài 2: Con lắc lò xo', difficulty: 'medium', isLocked: true, duration: 45 },
              { id: 'cd-1-4', title: 'Bài 4: Phép tính với số thập phân', difficulty: 'hard', isLocked: true, duration: 60 }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'bộ-sách-cánh-diều-11',
    title: 'Lớp 11 - Bộ sách Cánh Diều',
    description: 'Bộ sách giáo khoa Cánh Diều cho lớp 11',
    icon: 'tabler-book',
    color: '#FF6B6B',
    image: 'https://giadinh.mediacdn.vn/296230595582509056/2023/4/26/1-16824784108542077345096.jpg',
    views: 120,
    attempts: 10,
    time: 90,
    questions: 50,
    grade: 11,
    totalBooks: 8,
    totalPurchases: 1500,
    totalChapters: 24,
    price: 209000,
    originalPrice: 300000,
    subjects: [
      {
        id: 'toan-11',
        name: 'Toán học',
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
        id: 'vat-ly-11',
        name: 'Vật lý',
        chapters: [
          {
            id: 'cd-vl-chuong-1',
            title: 'Chương 1: Dao động cơ',
            lessons: [
              { id: 'cd-vl-1-1', title: 'Bài 1: Dao động điều hòa', difficulty: 'easy', isLocked: false, duration: 30 },
              { id: 'cd-vl-1-2', title: 'Bài 2: Con lắc lò xo', difficulty: 'medium', isLocked: true, duration: 45 }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'bộ-sách-cánh-diều-12',
    title: 'Lớp 12 - Bộ sách Cánh Diều',
    description: 'Bộ sách giáo khoa Cánh Diều cho lớp 12',
    icon: 'tabler-book',
    color: '#FF6B6B',
    image: 'https://cdnphoto.dantri.com.vn/W6E31t2GCa8R0cnymB69iW63kSY=/thumb_w/1020/2024/06/30/anh-man-hinh-2024-06-30-luc-73650-sa-1719707848145.png',
    views: 120,
    attempts: 10,
    time: 90,
    questions: 50,
    grade: 12,
    totalBooks: 8,
    totalPurchases: 1500,
    totalChapters: 24,
    price: 219000,
    originalPrice: 300000,
    subjects: [
      {
        id: 'toan-12',
        name: 'Toán học',
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
        id: 'vat-ly-12',
        name: 'Vật lý',
        chapters: [
          {
            id: 'cd-vl-chuong-1',
            title: 'Chương 1: Dao động cơ',
            lessons: [
              { id: 'cd-vl-1-1', title: 'Bài 1: Dao động điều hòa', difficulty: 'easy', isLocked: false, duration: 30 },
              { id: 'cd-vl-1-2', title: 'Bài 2: Con lắc lò xo', difficulty: 'medium', isLocked: true, duration: 45 }
            ]
          }
        ]
      }
    ]
  },
]

export const subjects: BookSubject[] = [
  {
    id: 'toan',
    name: 'Toán học',
    books: books.filter(book => book.subjects.some(subject => subject.name === 'Toán học'))
  },
  {
    id: 'tieng-anh',
    name: 'Tiếng Anh',
    books: books.filter(book => book.subjects.some(subject => subject.name === 'Tiếng Anh'))
  },
  {
    id: 'van',
    name: 'Văn - Tiếng Việt',
    books: books.filter(book => book.subjects.some(subject => subject.name === 'Văn - Tiếng Việt'))
  },
  {
    id: 'khtn',
    name: 'Khoa học tự nhiên',
    books: books.filter(book => book.subjects.some(subject => ['Vật lý', 'Hóa học'].includes(subject.name)))
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
