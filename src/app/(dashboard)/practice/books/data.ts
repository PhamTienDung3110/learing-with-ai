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
  pages?: any
}

export const books: Book[] = [
  {
    id: 'bộ-sách-cánh-diều-3',
    title: 'Lớp 3 Cánh diều',
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
        name: 'Môn Toán',
        chapters: [
          {
            "id": "cd-chuong-1",
            "title": "Chương 1: Bảng nhân, bảng chia",
            "lessons": [
              { "id": "cd-1-1", "title": "Ôn tập về các số trong phạm vi 1000", "difficulty": "easy", "isLocked": false, "duration": 30 },
              { "id": "cd-1-2", "title": "Ôn tập về phép cộng, phép trừ trong phạm vi 1000", "difficulty": "easy", "isLocked": false, "duration": 30 },
              { "id": "cd-1-3", "title": "Ôn tập về hình học và đo lường trang 10", "difficulty": "medium", "isLocked": false, "duration": 45 },
              { "id": "cd-1-4", "title": "Mi-li-mét", "difficulty": "medium", "isLocked": false, "duration": 45 },
              { "id": "cd-1-5", "title": "Ôn tập về phép nhân, bảng nhân 2, bảng nhân 5", "difficulty": "medium", "isLocked": false, "duration": 40 },
              { "id": "cd-1-6", "title": "Bảng nhân 3", "difficulty": "medium", "isLocked": false, "duration": 30 },
              { "id": "cd-1-7", "title": "Bảng nhân 4", "difficulty": "medium", "isLocked": false, "duration": 30 },
              { "id": "cd-1-8", "title": "Bảng nhân 6", "difficulty": "medium", "isLocked": false, "duration": 30 },
              { "id": "cd-1-9", "title": "Gấp một số lên một số lần", "difficulty": "hard", "isLocked": true, "duration": 60 },
              { "id": "cd-1-10", "title": "Bảng nhân 7", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-1-11", "title": "Bảng nhân 8", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-1-12", "title": "Bảng nhân 9", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-1-13", "title": "Luyện tập trang 30", "difficulty": "medium", "isLocked": true, "duration": 40 },
              { "id": "cd-1-14", "title": "Luyện tập (Tiếp theo) trang 32", "difficulty": "medium", "isLocked": true, "duration": 40 },
              { "id": "cd-1-15", "title": "Gam", "difficulty": "medium", "isLocked": true, "duration": 50 },
              { "id": "cd-1-16", "title": "Ôn tập về phép chia, bảng chia 2, bảng chia 5", "difficulty": "medium", "isLocked": true, "duration": 50 },
              { "id": "cd-1-17", "title": "Bảng chia 3", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-1-18", "title": "Bảng chia 4", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-1-19", "title": "Bảng chia 6", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-1-20", "title": "Giảm một số đi một số lần", "difficulty": "hard", "isLocked": true, "duration": 60 },
              { "id": "cd-1-21", "title": "Bảng chia 7", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-1-22", "title": "Bảng chia 8", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-1-23", "title": "Bảng chia 9", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-1-24", "title": "Luyện tập trang 52", "difficulty": "medium", "isLocked": true, "duration": 50 },
              { "id": "cd-1-25", "title": "Luyện tập (Tiếp theo) trang 54", "difficulty": "medium", "isLocked": true, "duration": 50 },
              { "id": "cd-1-26", "title": "Một phần hai. Một phần tư", "difficulty": "medium", "isLocked": true, "duration": 50 },
              { "id": "cd-1-27", "title": "Một phần ba. Một phần năm. Một phần sáu", "difficulty": "medium", "isLocked": true, "duration": 50 },
              { "id": "cd-1-28", "title": "Một phần bảy. Một phần tám. Một phần chín", "difficulty": "medium", "isLocked": true, "duration": 50 },
              { "id": "cd-1-29", "title": "Em ôn lại những gì đã học trang 63", "difficulty": "easy", "isLocked": false, "duration": 30 },
              { "id": "cd-1-30", "title": "Em vui học toán trang 65", "difficulty": "easy", "isLocked": false, "duration": 30 }
            ]
          },
          {
            "id": "cd-chuong-2",
            "title": "Chương 2: Nhân, chia các số trong phạm vi 1000",
            "lessons": [
              { "id": "cd-2-1", "title": "Nhân số tròn chục với một chữ số", "difficulty": "easy", "isLocked": false, "duration": 30 },
              { "id": "cd-2-2", "title": "Nhân với số có một chữ số (không nhớ)", "difficulty": "medium", "isLocked": false, "duration": 45 },
              { "id": "cd-2-3", "title": "Luyện tập trang 72", "difficulty": "medium", "isLocked": true, "duration": 40 },
              { "id": "cd-2-4", "title": "Phép chia hết. Phép chia có dư", "difficulty": "medium", "isLocked": true, "duration": 50 },
              { "id": "cd-2-5", "title": "Chia số tròn trục, tròn trăm cho số có một chữ số", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-2-6", "title": "Chia cho số có một chữ số", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-2-7", "title": "Luyện tập trang 79", "difficulty": "medium", "isLocked": true, "duration": 40 },
              { "id": "cd-2-8", "title": "Luyện tập chung trang 80", "difficulty": "medium", "isLocked": true, "duration": 40 },
              { "id": "cd-2-9", "title": "So sánh số lớn gấp mấy lần số bé", "difficulty": "medium", "isLocked": true, "duration": 40 },
              { "id": "cd-2-10", "title": "Giải bài toán có đến hai bước tính", "difficulty": "medium", "isLocked": true, "duration": 50 },
              { "id": "cd-2-11", "title": "Làm quen với biểu thức số", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-2-12", "title": "Tính giá trị biểu thức số", "difficulty": "medium", "isLocked": true, "duration": 50 },
              { "id": "cd-2-13", "title": "Tính giá trị biểu thức số (tiếp theo) trang 91", "difficulty": "medium", "isLocked": true, "duration": 50 },
              { "id": "cd-2-14", "title": "Tính giá trị biểu thức số (tiếp theo) trang 93", "difficulty": "medium", "isLocked": true, "duration": 50 },
              { "id": "cd-2-15", "title": "Luyện tập chung trang 95", "difficulty": "medium", "isLocked": true, "duration": 50 },
              { "id": "cd-2-16", "title": "Mi-li-lít", "difficulty": "medium", "isLocked": true, "duration": 40 },
              { "id": "cd-2-17", "title": "Nhiệt độ", "difficulty": "medium", "isLocked": true, "duration": 40 },
              { "id": "cd-2-18", "title": "Góc vuông, góc không vuông", "difficulty": "medium", "isLocked": true, "duration": 40 },
              { "id": "cd-2-19", "title": "Hình tam giác. Hình tứ giác", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-2-20", "title": "Chu vi hình tam giác. Chu vi hình tứ giác", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-2-21", "title": "Hình chữ nhật", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-2-22", "title": "Hình vuông", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-2-23", "title": "Chu vi hình chữ nhật, chu vi hình vuông", "difficulty": "medium", "isLocked": true, "duration": 50 },
              { "id": "cd-2-24", "title": "Em ôn lại những gì đã học trang 113", "difficulty": "easy", "isLocked": false, "duration": 30 },
              { "id": "cd-2-25", "title": "Em vui học toán trang 115", "difficulty": "easy", "isLocked": false, "duration": 30 }
            ]
          },
          {
            "id": "cd-chuong-3",
            "title": "Chương 3: Các số trong phạm vi 100 000",
            "lessons": [
              { "id": "cd-3-1", "title": "Các số trong phạm vi 10 000", "difficulty": "easy", "isLocked": false, "duration": 30 },
              { "id": "cd-3-2", "title": "Các số trong phạm vi 10 000 (Tiếp theo)", "difficulty": "medium", "isLocked": false, "duration": 40 },
              { "id": "cd-3-3", "title": "Em làm quen với chữ số la mã", "difficulty": "medium", "isLocked": false, "duration": 40 },
              { "id": "cd-3-4", "title": "Các số trong phạm vi 100 000", "difficulty": "medium", "isLocked": false, "duration": 45 },
              { "id": "cd-3-5", "title": "Các số trong phạm vi 100 000 (Tiếp theo)", "difficulty": "medium", "isLocked": false, "duration": 45 },
              { "id": "cd-3-6", "title": "So sánh các số trong phạm vi 100 000", "difficulty": "medium", "isLocked": false, "duration": 45 },
              { "id": "cd-3-7", "title": "Luyện tập trang 20", "difficulty": "medium", "isLocked": true, "duration": 50 },
              { "id": "cd-3-8", "title": "Điểm ở giữa. Trung điểm của đoạn thẳng", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-3-9", "title": "Hình tròn, tâm, đường kính, bán kính", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-3-10", "title": "Vẽ trang trí hình tròn", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-3-11", "title": "Làm tròn số đến hàng chục, hàng trăm", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-3-12", "title": "Làm tròn số đến hàng nghìn, hàng chục nghìn", "difficulty": "medium", "isLocked": true, "duration": 50 },
              { "id": "cd-3-13", "title": "Luyện tập chung trang 34", "difficulty": "medium", "isLocked": true, "duration": 50 },
              { "id": "cd-3-14", "title": "Khối hộp chữ nhật. Khối lập phương", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-3-15", "title": "Thực hành xem đồng hồ", "difficulty": "medium", "isLocked": true, "duration": 40 },
              { "id": "cd-3-16", "title": "Thực hành xem đồng hồ (Tiếp theo)", "difficulty": "medium", "isLocked": true, "duration": 40 },
              { "id": "cd-3-17", "title": "Tháng năm", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-3-18", "title": "Em ôn lại những gì đã học trang 47", "difficulty": "easy", "isLocked": false, "duration": 30 },
              { "id": "cd-3-19", "title": "Em vui học toán trang 49", "difficulty": "easy", "isLocked": false, "duration": 30 }
            ]
          },
          {
            "id": "cd-chuong-4",
            "title": "Chương 4: Cộng, trừ, nhân, chia trong phạm vi 100 000",
            "lessons": [
              { "id": "cd-4-1", "title": "Phép cộng trong phạm vi 100 000", "difficulty": "easy", "isLocked": false, "duration": 30 },
              { "id": "cd-4-2", "title": "Phép trừ trong phạm vi 100 000", "difficulty": "medium", "isLocked": false, "duration": 40 },
              { "id": "cd-4-3", "title": "Tiền Việt Nam", "difficulty": "medium", "isLocked": false, "duration": 45 },
              { "id": "cd-4-4", "title": "Nhân với số có một chữ số (không nhớ)", "difficulty": "medium", "isLocked": false, "duration": 45 },
              { "id": "cd-4-5", "title": "Nhân với số có một chữ số (có nhớ)", "difficulty": "medium", "isLocked": true, "duration": 50 },
              { "id": "cd-4-6", "title": "Luyện tập trang 63", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-4-7", "title": "Chia cho số có một chữ số trong phạm vi 100 000", "difficulty": "medium", "isLocked": true, "duration": 50 },
              { "id": "cd-4-8", "title": "Chia cho số có một chữ số trong phạm vi 100 000 (Tiếp theo) trang 67", "difficulty": "medium", "isLocked": true, "duration": 50 },
              { "id": "cd-4-9", "title": "Luyện tập trang 69", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-4-10", "title": "Chia cho số có một chữ số trong phạm vi 100 000 (Tiếp theo) trang 71", "difficulty": "medium", "isLocked": true, "duration": 50 },
              { "id": "cd-4-11", "title": "Luyện tập trang 73", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-4-12", "title": "Luyện tập chung trang 75", "difficulty": "medium", "isLocked": true, "duration": 50 },
              { "id": "cd-4-13", "title": "Tìm thành phần chưa biết của phép tính", "difficulty": "medium", "isLocked": true, "duration": 50 },
              { "id": "cd-4-14", "title": "Tìm thành phần chưa biết của phép tính (Tiếp theo)", "difficulty": "medium", "isLocked": true, "duration": 50 },
              { "id": "cd-4-15", "title": "Luyện tập chung trang 81", "difficulty": "medium", "isLocked": true, "duration": 50 },
              { "id": "cd-4-16", "title": "Diện tích một hình", "difficulty": "medium", "isLocked": true, "duration": 50 },
              { "id": "cd-4-17", "title": "Đơn vị đo diện tích. Xăng-ti-mét vuông", "difficulty": "medium", "isLocked": true, "duration": 50 },
              { "id": "cd-4-18", "title": "Diện tích hình chữ nhật, diện tích hình vuông", "difficulty": "medium", "isLocked": true, "duration": 50 },
              { "id": "cd-4-19", "title": "Luyện tập chung trang 90", "difficulty": "medium", "isLocked": true, "duration": 50 },
              { "id": "cd-4-20", "title": "Thu thập, phân loại, ghi chép số liệu thống kê", "difficulty": "medium", "isLocked": true, "duration": 50 },
              { "id": "cd-4-21", "title": "Bảng số liệu thống kê", "difficulty": "medium", "isLocked": true, "duration": 50 },
              { "id": "cd-4-22", "title": "Khả năng xảy ra của một sự kiện", "difficulty": "medium", "isLocked": true, "duration": 50 },
              { "id": "cd-4-23", "title": "Em ôn lại những gì đã học trang 100", "difficulty": "easy", "isLocked": false, "duration": 30 },
              { "id": "cd-4-24", "title": "Em vui học toán trang 102", "difficulty": "easy", "isLocked": false, "duration": 30 },
              { "id": "cd-4-25", "title": "Ôn tập về số và phép tính trong phạm vi 100 000", "difficulty": "medium", "isLocked": true, "duration": 50 },
              { "id": "cd-4-26", "title": "Ôn tập về hình học và đo lường trang 109", "difficulty": "medium", "isLocked": true, "duration": 50 },
              { "id": "cd-4-27", "title": "Ôn tập về một số yếu tố thống kê và xác suất", "difficulty": "medium", "isLocked": true, "duration": 50 },
              { "id": "cd-4-28", "title": "Ôn tập chung trang 113", "difficulty": "medium", "isLocked": true, "duration": 50 }
            ]
          }
        ]
      },
      {
        id: 'vat-ly-3',
        name: 'Tiếng Việt lớp 3',
        chapters: [
          {
            "id": "tv-chuong-1",
            "title": "Bài 1: Chào năm học mới",
            "lessons": [
              { "id": "tv-1-1", "title": "Chia sẻ và đọc: Ngày khai trường", "difficulty": "easy", "isLocked": false, "duration": 30, "pages": [5, 6, 7] },
              { "id": "tv-1-2", "title": "Tự đọc sách báo", "difficulty": "easy", "isLocked": false, "duration": 20, "pages": [7] },
              { "id": "tv-1-3", "title": "Viết", "difficulty": "medium", "isLocked": false, "duration": 25, "pages": [7] },
              { "id": "tv-1-4", "title": "Nói và nghe: Kể chuyện: Em chuẩn bị đi khai giảng", "difficulty": "medium", "isLocked": false, "duration": 30, "pages": [8] },
              { "id": "tv-1-5", "title": "Đọc: Lễ chào cờ đặc biệt", "difficulty": "medium", "isLocked": false, "duration": 40, "pages": [8, 9, 10] },
              { "id": "tv-1-6", "title": "Viết", "difficulty": "medium", "isLocked": false, "duration": 25, "pages": [11] },
              { "id": "tv-1-7", "title": "Đọc: Bạn mới", "difficulty": "medium", "isLocked": false, "duration": 35, "pages": [11, 12, 13] },
              { "id": "tv-1-8", "title": "Viết", "difficulty": "medium", "isLocked": false, "duration": 25, "pages": [13, 14] },
              { "id": "tv-1-9", "title": "Nói và nghe: Kể chuyện: Bạn mới", "difficulty": "medium", "isLocked": false, "duration": 30, "pages": [14, 15] },
              { "id": "tv-1-10", "title": "Đọc: Mùa thu của em", "difficulty": "medium", "isLocked": false, "duration": 35, "pages": [15, 16] },
              { "id": "tv-1-11", "title": "Góc sáng tạo", "difficulty": "easy", "isLocked": false, "duration": 20, "pages": [17] },
              { "id": "tv-1-12", "title": "Tự đánh giá", "difficulty": "easy", "isLocked": false, "duration": 15, "pages": [17] }
            ]
          },
          {
            "id": "tv-chuong-2",
            "title": "Bài 2: Em đã lớn",
            "lessons": [
              { "id": "tv-2-1", "title": "Chia sẻ và đọc: Nhớ lại buổi đầu đi học", "difficulty": "medium", "isLocked": false, "duration": 40, "pages": [18, 19, 20] },
              { "id": "tv-2-2", "title": "Tự đọc sách báo", "difficulty": "easy", "isLocked": false, "duration": 20, "pages": [20] },
              { "id": "tv-2-3", "title": "Viết", "difficulty": "medium", "isLocked": false, "duration": 25, "pages": [21] },
              { "id": "tv-2-4", "title": "Nói và nghe: Nghe - kể: Chỉ cần tích tắc đến đều đặn", "difficulty": "medium", "isLocked": false, "duration": 30, "pages": [21, 22] },
              { "id": "tv-2-5", "title": "Đọc: Con đã lớn thật rồi", "difficulty": "medium", "isLocked": false, "duration": 40, "pages": [22, 23, 24] },
              { "id": "tv-2-6", "title": "Viết", "difficulty": "medium", "isLocked": false, "duration": 25, "pages": [24] },
              { "id": "tv-2-7", "title": "Đọc: Giặt áo", "difficulty": "medium", "isLocked": false, "duration": 30, "pages": [25, 26] },
              { "id": "tv-2-8", "title": "Viết", "difficulty": "medium", "isLocked": false, "duration": 25, "pages": [26, 27] },
              { "id": "tv-2-9", "title": "Nói và nghe: Kể chuyện: Con đã lớn thật rồi", "difficulty": "medium", "isLocked": false, "duration": 30, "pages": [28] },
              { "id": "tv-2-10", "title": "Đọc: Bài tập làm văn", "difficulty": "medium", "isLocked": false, "duration": 40, "pages": [28, 29, 30] },
              { "id": "tv-2-11", "title": "Góc sáng tạo", "difficulty": "easy", "isLocked": false, "duration": 20, "pages": [30, 31] },
              { "id": "tv-2-12", "title": "Tự đánh giá", "difficulty": "easy", "isLocked": false, "duration": 15, "pages": [31] }
            ]
          },
          {
            "id": "tv-chuong-3",
            "title": "Bài 3: Niềm vui của em",
            "lessons": [
              { "id": "tv-3-1", "title": "Chia sẻ và đọc: Con heo đất", "difficulty": "easy", "isLocked": false, "duration": 40, "pages": [32, 33, 34] },
              { "id": "tv-3-2", "title": "Tự đọc sách báo", "difficulty": "easy", "isLocked": false, "duration": 20, "pages": [34] },
              { "id": "tv-3-3", "title": "Viết", "difficulty": "medium", "isLocked": false, "duration": 25, "pages": [34] },
              { "id": "tv-3-4", "title": "Nói và nghe: Kể chuyện: Em tiết kiệm", "difficulty": "medium", "isLocked": false, "duration": 30, "pages": [35] },
              { "id": "tv-3-5", "title": "Đọc: Thả diều", "difficulty": "medium", "isLocked": false, "duration": 40, "pages": [36, 37] },
              { "id": "tv-3-6", "title": "Viết", "difficulty": "medium", "isLocked": false, "duration": 25, "pages": [37] },
              { "id": "tv-3-7", "title": "Đọc: Chú gấu Mi-sa", "difficulty": "medium", "isLocked": false, "duration": 40, "pages": [38, 39] },
              { "id": "tv-3-8", "title": "Viết", "difficulty": "medium", "isLocked": false, "duration": 25, "pages": [40] },
              { "id": "tv-3-9", "title": "Nói và nghe: Nghe - kể: Chiếc răng rụng", "difficulty": "medium", "isLocked": false, "duration": 30, "pages": [41] },
              { "id": "tv-3-10", "title": "Đọc: Hai bàn tay em", "difficulty": "medium", "isLocked": false, "duration": 40, "pages": [42, 43] },
              { "id": "tv-3-11", "title": "Góc sáng tạo", "difficulty": "easy", "isLocked": false, "duration": 20, "pages": [43, 44] },
              { "id": "tv-3-12", "title": "Tự đánh giá", "difficulty": "easy", "isLocked": false, "duration": 15, "pages": [44] }
            ]
          },
          {
            "id": "tv-chuong-4",
            "title": "Bài 4: Mái ấm gia đình",
            "lessons": [
              { "id": "tv-4-1", "title": "Chia sẻ và đọc: Ngưỡng cửa", "difficulty": "easy", "isLocked": false, "duration": 30, "pages": [45, 46, 47] },
              { "id": "tv-4-2", "title": "Tự đọc sách báo", "difficulty": "easy", "isLocked": false, "duration": 20, "pages": [47] },
              { "id": "tv-4-3", "title": "Viết", "difficulty": "medium", "isLocked": false, "duration": 25, "pages": [47] },
              { "id": "tv-4-4", "title": "Nói và nghe: Trao đổi: Nhận và gọi điện thoại", "difficulty": "medium", "isLocked": false, "duration": 35, "pages": [48, 49] },
              { "id": "tv-4-5", "title": "Đọc: Cha sẽ luôn ở bên con", "difficulty": "medium", "isLocked": false, "duration": 45, "pages": [49, 50, 51] },
              { "id": "tv-4-6", "title": "Viết", "difficulty": "medium", "isLocked": false, "duration": 25, "pages": [51] },
              { "id": "tv-4-7", "title": "Đọc: Quạt cho bà ngủ", "difficulty": "medium", "isLocked": false, "duration": 35, "pages": [52, 53] },
              { "id": "tv-4-8", "title": "Viết", "difficulty": "medium", "isLocked": false, "duration": 25, "pages": [53, 54] },
              { "id": "tv-4-9", "title": "Nói và nghe: Trao đổi: Em đọc sách báo", "difficulty": "medium", "isLocked": false, "duration": 30, "pages": [54, 55] },
              { "id": "tv-4-10", "title": "Đọc: Ba con búp bê", "difficulty": "medium", "isLocked": false, "duration": 40, "pages": [55, 56] },
              { "id": "tv-4-11", "title": "Góc sáng tạo", "difficulty": "easy", "isLocked": false, "duration": 20, "pages": [57, 58] },
              { "id": "tv-4-12", "title": "Tự đánh giá", "difficulty": "easy", "isLocked": false, "duration": 15, "pages": [58] }
            ]
          },
          {
            "id": "tv-chuong-5",
            "title": "Bài 5: Ôn tập giữa học kì 1",
            "lessons": [
              { "id": "tv-5-1", "title": "Tiết 1", "difficulty": "medium", "isLocked": false, "duration": 30, "pages": [59] },
              { "id": "tv-5-2", "title": "Tiết 2", "difficulty": "medium", "isLocked": false, "duration": 30, "pages": [59, 60] },
              { "id": "tv-5-3", "title": "Tiết 3", "difficulty": "medium", "isLocked": false, "duration": 30, "pages": [61] },
              { "id": "tv-5-4", "title": "Tiết 4", "difficulty": "medium", "isLocked": false, "duration": 30, "pages": [61, 62] },
              { "id": "tv-5-5", "title": "Tiết 5", "difficulty": "medium", "isLocked": false, "duration": 30, "pages": [62, 63] },
              { "id": "tv-5-6", "title": "Tiết 6", "difficulty": "medium", "isLocked": false, "duration": 30, "pages": [63, 64, 65] },
              { "id": "tv-5-7", "title": "Tiết 7", "difficulty": "medium", "isLocked": false, "duration": 30, "pages": [65] }
            ]
          },
          {
            "id": "tv-chuong-6",
            "title": "Bài 6: Yêu thương, chia sẻ",
            "lessons": [
              { "id": "tv-6-1", "title": "Chia sẻ và đọc: Bảy sắc cầu vồng", "difficulty": "medium", "isLocked": false, "duration": 40, "pages": [67, 68, 69] },
              { "id": "tv-6-2", "title": "Tự đọc sách báo", "difficulty": "easy", "isLocked": false, "duration": 20, "pages": [69] },
              { "id": "tv-6-3", "title": "Viết", "difficulty": "medium", "isLocked": false, "duration": 25, "pages": [70] },
              { "id": "tv-6-4", "title": "Nói và nghe: Nghe - kể: Bộ lông rực rỡ của chim thiên đường", "difficulty": "medium", "isLocked": false, "duration": 30, "pages": [70] },
              { "id": "tv-6-5", "title": "Đọc: Bận", "difficulty": "medium", "isLocked": false, "duration": 30, "pages": [71, 72] },
              { "id": "tv-6-6", "title": "Viết", "difficulty": "medium", "isLocked": false, "duration": 25, "pages": [72, 73] },
              { "id": "tv-6-7", "title": "Đọc: Chia sẻ niềm vui", "difficulty": "medium", "isLocked": false, "duration": 35, "pages": [73, 74, 75] },
              { "id": "tv-6-8", "title": "Viết", "difficulty": "medium", "isLocked": false, "duration": 25, "pages": [75, 76] },
              { "id": "tv-6-9", "title": "Nói và nghe: Trao đổi: Quà tặng của em", "difficulty": "medium", "isLocked": false, "duration": 30, "pages": [76] },
              { "id": "tv-6-10", "title": "Đọc: Nhà rông", "difficulty": "medium", "isLocked": false, "duration": 40, "pages": [77, 78] },
              { "id": "tv-6-11", "title": "Góc sáng tạo", "difficulty": "easy", "isLocked": false, "duration": 20, "pages": [78, 79] },
              { "id": "tv-6-12", "title": "Tự đánh giá", "difficulty": "easy", "isLocked": false, "duration": 15, "pages": [79] }
            ]
          }
        ]
      },
      {
        id: 'tu-nhien-3',
        name: 'Tự nhiên và xã hội lớp 3',
        chapters: [
          {
            "id": "khoahoc-chu-de-1",
            "title": "Chủ đề 1: Gia đình",
            "lessons": [
              { "id": "khoahoc-1-1", "title": "Bài 1: Họ hàng nội, ngoại", "difficulty": "easy", "isLocked": false, "duration": 30 },
              { "id": "khoahoc-1-2", "title": "Bài 2: Một số ngày kỉ niệm, sự kiện gia đình", "difficulty": "medium", "isLocked": false, "duration": 40 },
              { "id": "khoahoc-1-3", "title": "Bài 3: Phòng tránh hỏa hoạn khi ở nhà", "difficulty": "medium", "isLocked": false, "duration": 45 },
              { "id": "khoahoc-1-4", "title": "Bài 4: Giữ vệ sinh xung quanh nhà ở", "difficulty": "medium", "isLocked": false, "duration": 40 },
              { "id": "khoahoc-1-5", "title": "Ôn tập: chủ đề gia đình", "difficulty": "easy", "isLocked": false, "duration": 30 }
            ]
          },
          {
            "id": "khoahoc-chu-de-2",
            "title": "Chủ đề 2: Trường học",
            "lessons": [
              { "id": "khoahoc-2-1", "title": "Bài 5: Một số hoạt động kết nối với xã hội của trường học", "difficulty": "medium", "isLocked": false, "duration": 40 },
              { "id": "khoahoc-2-2", "title": "Bài 6: Truyền thống trường em", "difficulty": "medium", "isLocked": false, "duration": 40 },
              { "id": "khoahoc-2-3", "title": "Bài 7: Thực hành: Khảo sát về sự an toàn của trường học", "difficulty": "medium", "isLocked": false, "duration": 45 },
              { "id": "khoahoc-2-4", "title": "Bài 8: Giữ vệ sinh trường học", "difficulty": "medium", "isLocked": false, "duration": 40 },
              { "id": "khoahoc-2-5", "title": "Ôn tập: Chủ đề trường học", "difficulty": "easy", "isLocked": false, "duration": 30 }
            ]
          },
          {
            "id": "khoahoc-chu-de-3",
            "title": "Chủ đề 3: Cộng đồng địa phương",
            "lessons": [
              { "id": "khoahoc-3-1", "title": "Bài 9: Hoạt động sản xuất nông nghiệp", "difficulty": "medium", "isLocked": false, "duration": 40 },
              { "id": "khoahoc-3-2", "title": "Bài 10: Hoạt động sản xuất công nghiệp và thủ công nghiệp", "difficulty": "medium", "isLocked": false, "duration": 45 },
              { "id": "khoahoc-3-3", "title": "Bài 11: Di tích lịch sử - văn hóa và cảnh quan thiên nhiên", "difficulty": "medium", "isLocked": false, "duration": 45 },
              { "id": "khoahoc-3-4", "title": "Ôn tập: Chủ đề cộng đồng địa phương", "difficulty": "easy", "isLocked": false, "duration": 30 }
            ]
          },
          {
            "id": "khoahoc-chu-de-4",
            "title": "Chủ đề 4: Thực vật và động vật",
            "lessons": [
              { "id": "khoahoc-4-1", "title": "Bài 12: Các bộ phận của thực vật và chức năng của chúng", "difficulty": "medium", "isLocked": false, "duration": 40 },
              { "id": "khoahoc-4-2", "title": "Bài 13: Các bộ phận của động vật và chức năng của chúng", "difficulty": "medium", "isLocked": false, "duration": 45 },
              { "id": "khoahoc-4-3", "title": "Bài 14: Sử dụng hợp lý thực vật và động vật", "difficulty": "medium", "isLocked": false, "duration": 50 },
              { "id": "khoahoc-4-4", "title": "Ôn tập: Chủ đề thực vật và động vật", "difficulty": "easy", "isLocked": false, "duration": 30 }
            ]
          },
          {
            "id": "khoahoc-chu-de-5",
            "title": "Chủ đề 5: Con người và sức khoẻ",
            "lessons": [
              { "id": "khoahoc-5-1", "title": "Bài 15: Cơ quan tiêu hóa", "difficulty": "medium", "isLocked": false, "duration": 45 },
              { "id": "khoahoc-5-2", "title": "Bài 16: Cơ quan tuần hoàn", "difficulty": "medium", "isLocked": false, "duration": 45 },
              { "id": "khoahoc-5-3", "title": "Bài 17: Cơ quan thần kinh", "difficulty": "medium", "isLocked": false, "duration": 45 },
              { "id": "khoahoc-5-4", "title": "Bài 18: Thức ăn, đồ uống có lợi cho sức khỏe", "difficulty": "medium", "isLocked": false, "duration": 40 },
              { "id": "khoahoc-5-5", "title": "Bài 19: Một số chất có hại đối với các cơ quan tiêu hóa, tuần hoàn, thần kinh", "difficulty": "medium", "isLocked": false, "duration": 45 },
              { "id": "khoahoc-5-6", "title": "Ôn tập: Chủ đề con người và sức khỏe", "difficulty": "easy", "isLocked": false, "duration": 30 }
            ]
          },
          {
            "id": "khoahoc-chu-de-6",
            "title": "Chủ đề 6: Trái đất và bầu trời",
            "lessons": [
              { "id": "khoahoc-6-1", "title": "Bài 20: Phương hướng", "difficulty": "medium", "isLocked": false, "duration": 40 },
              { "id": "khoahoc-6-2", "title": "Bài 21: Hình dạng trái đất", "difficulty": "medium", "isLocked": false, "duration": 45 },
              { "id": "khoahoc-6-3", "title": "Các đới khí hậu", "difficulty": "medium", "isLocked": false, "duration": 45 },
              { "id": "khoahoc-6-4", "title": "Bài 22: Bề mặt trái đất", "difficulty": "medium", "isLocked": false, "duration": 40 },
              { "id": "khoahoc-6-5", "title": "Bài 23: Trái đất trong hệ mặt trời", "difficulty": "medium", "isLocked": false, "duration": 50 },
              { "id": "khoahoc-6-6", "title": "Ôn tập: chủ đề trái đất và bầu trời", "difficulty": "easy", "isLocked": false, "duration": 30 }
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
        name: 'Toán học lớp 4',
        chapters: [
          {
            "id": "cd-so-tu-nhien",
            "title": "I. Số tự nhiên",
            "lessons": [
              { "id": "cd-1-1", "title": "Bài 1: Ôn tập về số và phép tính trong phạm vi 100 000", "difficulty": "easy", "isLocked": false, "duration": 30 },
              { "id": "cd-1-2", "title": "Bài 2: Ôn tập về hình học và đo lường", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-1-3", "title": "Bài 3: Ôn tập về một số yếu tố thống kê và xác suất", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-1-4", "title": "Bài 4: Các số trong phạm vi 1 000 000", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-1-5", "title": "Bài 5: Các số trong phạm vi 1 000 000 (tiếp theo)", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-1-6", "title": "Bài 6: Các số có nhiều chữ số", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-1-7", "title": "Bài 7: Các số có nhiều chữ số (tiếp theo)", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-1-8", "title": "Bài 8: Luyện tập", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-1-9", "title": "Bài 9: So sánh các số có nhiều chữ số", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-1-10", "title": "Bài 10: Làm tròn số đến hàng trăm nghìn", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-1-11", "title": "Bài 11: Luyện tập", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-1-12", "title": "Bài 12: Số tự nhiên. dãy số tự nhiên", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-1-13", "title": "Bài 13: Viết số tự nhiên trong hệ thập phân", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-1-14", "title": "Bài 14: Yến, tạ, tấn", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-1-15", "title": "Bài 15: Giây", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-1-16", "title": "Bài 16: Thế kỉ", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-1-17", "title": "Bài 17: Bài toán liên quan đến rút về đơn vị", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-1-18", "title": "Bài 18: Luyện tập", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-1-19", "title": "Bài 19: Góc nhọn, góc tù, góc bẹt", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-1-20", "title": "Bài 20: Đơn vị đo góc. Độ (°)", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-1-21", "title": "Bài 21: Hai đường thẳng vuông góc. Vẽ hai đường thẳng vuông góc", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-1-22", "title": "Bài 22: Hai đường thẳng song song. Vẽ hai đường thẳng song song", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-1-23", "title": "Bài 23: Luyện tập chung", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-1-24", "title": "Bài 24: Em ôn lại những gì đã học", "difficulty": "easy", "isLocked": false, "duration": 30 },
              { "id": "cd-1-25", "title": "Bài 25: Em vui học toán", "difficulty": "easy", "isLocked": false, "duration": 30 }
            ]
          },
          {
            "id": "cd-phep-tinh-so-tu-nhien",
            "title": "II. Các phép tính với số tự nhiên",
            "lessons": [
              { "id": "cd-2-1", "title": "Bài 26: Phép cộng, phép trừ", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-2-2", "title": "Bài 27: Các tính chất của phép cộng", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-2-3", "title": "Bài 28: Tìm số trung bình cộng", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-2-4", "title": "Bài 29: Tìm hai số khi biết tổng và hiệu của hai số đó", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-2-5", "title": "Bài 30: Luyện tập chung", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-2-6", "title": "Bài 31: Nhân với số có một chữ số", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-2-7", "title": "Bài 32: Nhân với số có hai chữ số", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-2-8", "title": "Bài 33: Luyện tập", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-2-9", "title": "Bài 34: Các tính chất của phép nhân", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-2-10", "title": "Bài 35: Luyện tập", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-2-11", "title": "Bài 36: Nhân với 10, 100, 1 000,…", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-2-12", "title": "Bài 37: Luyện tập chung", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-2-13", "title": "Bài 38: Chia cho số có một chữ số", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-2-14", "title": "Bài 39: Chia cho 10, 100, 1 000,…", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-2-15", "title": "Bài 40: Chia cho số có hai chữ số", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-2-16", "title": "Bài 41: Luyện tập", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-2-17", "title": "Bài 42: Chia cho số có hai chữ số (tiếp theo)", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-2-18", "title": "Bài 43: Luyện tập", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-2-19", "title": "Bài 44: Thương có chữ số 0", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-2-20", "title": "Bài 45: Luyện tập", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-2-21", "title": "Bài 46: Luyện tập chung", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-2-22", "title": "Bài 47: Ước lượng tính", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-2-23", "title": "Bài 48: Luyện tập", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-2-24", "title": "Bài 49: Biểu thức có chứa chữ", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-2-25", "title": "Bài 50: Em ôn lại những gì đã học", "difficulty": "easy", "isLocked": false, "duration": 30 },
              { "id": "cd-2-26", "title": "Bài 51: Em học vui toán", "difficulty": "easy", "isLocked": false, "duration": 30 },
              { "id": "cd-2-27", "title": "Bài 52: Ôn tập chung", "difficulty": "easy", "isLocked": false, "duration": 30 }
            ]
          }
        ]

      },
      {
        id: 'vat-ly-4',
        name: 'Tiếng Việt lớp 4',
        chapters: [
          {
            "id": "cd-chan-dung-cua-em",
            "title": "Bài 1: Chân dung của em",
            "lessons": [
              { "id": "cd-1-1", "title": "Chia sẻ và đọc: Tuổi Ngựa (trang 5, 6)", "difficulty": "easy", "isLocked": false, "duration": 30 },
              { "id": "cd-1-2", "title": "Tự đọc sách báo (trang 7)", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-1-3", "title": "Viết: Viết đoạn văn về một nhân vật (trang 7, 8)", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-1-4", "title": "Nói và nghe: Kể chuyện: Làm chị (trang 8, 9)", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-1-5", "title": "Đọc: Cái răng khểnh (trang 9, 10)", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-1-6", "title": "Luyện từ và câu: Danh từ (trang 10, 11)", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-1-7", "title": "Viết: Luyện tập viết đoạn văn về một nhân vật (trang 11)", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-1-8", "title": "Đọc: Vệt phấn trên mặt bàn (trang 12, 13)", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-1-9", "title": "Viết: Luyện tập viết đoạn văn về một nhân vật (trang 13)", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-1-10", "title": "Nói và nghe: Trao đổi: Chân dung của em, của bạn (trang 13, 14)", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-1-11", "title": "Đọc: Những vết đinh (trang 14, 15)", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-1-12", "title": "Luyện từ và câu: Dấu gạch ngang (trang 15, 16)", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-1-13", "title": "Góc sáng tạo: Em tuổi gì? (trang 16)", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-1-14", "title": "Tự đánh giá (trang 17, 18)", "difficulty": "easy", "isLocked": false, "duration": 30 }
            ]
          },
          {
            "id": "cd-cham-hoc-cham-lam",
            "title": "Bài 2: Chăm học, chăm làm",
            "lessons": [
              { "id": "cd-2-1", "title": "Chia sẻ và đọc: Văn hay chữ tốt (trang 19, 20, 21)", "difficulty": "easy", "isLocked": false, "duration": 30 },
              { "id": "cd-2-2", "title": "Tự đọc sách báo (trang 21)", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-2-3", "title": "Viết: Viết đơn (trang 21, 22, 23)", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-2-4", "title": "Nói và nghe: Kể chuyện: Tấm huy chương (trang 23)", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-2-5", "title": "Đọc: Lên rẫy (trang 24)", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-2-6", "title": "Luyện từ và câu: Danh từ chung, danh từ riêng (trang 25)", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-2-7", "title": "Viết: Luyện tập viết đơn (trang 25)", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-2-8", "title": "Đọc: Cô giáo nhỏ (trang 26, 27)", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-2-9", "title": "Viết: Trả bài viết đoạn văn về một nhân vật (trang 27)", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-2-10", "title": "Nói và nghe: Trao đổi: Chăm học, chăm làm (trang 28)", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-2-11", "title": "Đọc: Bài văn tả cảnh (trang 29, 30)", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-2-12", "title": "Luyện từ và câu: Luyện tập về danh từ (trang 30)", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-2-13", "title": "Góc sáng tạo: Đố vui: Ai chăm, ai ngoan (trang 31)", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-2-14", "title": "Tự đánh giá (trang 31)", "difficulty": "easy", "isLocked": false, "duration": 30 }
            ]
          },
          {
            "id": "cd-nhu-mang-moc-thang",
            "title": "Bài 3: Như măng mọc thẳng",
            "lessons": [
              { "id": "cd-3-1", "title": "Chia sẻ và đọc: Cau (trang 33, 34, 35)", "difficulty": "easy", "isLocked": false, "duration": 30 },
              { "id": "cd-3-2", "title": "Tự đọc sách báo (trang 35)", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-3-3", "title": "Viết: Tả cây cối (trang 35, 36, 37)", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-3-4", "title": "Nói và nghe: Kể chuyện: Chiếc ví (trang 37, 38)", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-3-5", "title": "Đọc: Một người chính trực (trang 38, 39)", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-3-6", "title": "Luyện từ và câu: Nhân hóa (trang 39, 40)", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-3-7", "title": "Viết: Luyện tập tả cây cối (trang 41)", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-3-8", "title": "Đọc: Những hạt thóc giống (trang 41, 42)", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-3-9", "title": "Viết: Trả bài viết đơn (trang 43)", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-3-10", "title": "Nói và nghe: Trao đổi: Như măng mọc thẳng (trang 43, 44)", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-3-11", "title": "Đọc: Những chú bé giàu trí tưởng tượng (trang 44, 45)", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-3-12", "title": "Luyện từ và câu: Luyện tập về nhân hóa (trang 46, 47)", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-3-13", "title": "Góc sáng tạo: Quan sát vườn cây (trang 47)", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-3-14", "title": "Tự đánh giá (trang 47, 48, 49)", "difficulty": "easy", "isLocked": false, "duration": 30 }
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
        name: 'Toán lớp 5',
        chapters: [
          {
            "id": "cd-so-tu-nhien-phan-so",
            "title": "Chương 1: Ôn tập và bổ sung về số tự nhiên, phân số. Số thập phân",
            "lessons": [
              { "id": "cd-1-1", "title": "Bài 1: Ôn tập về số tự nhiên", "difficulty": "easy", "isLocked": false, "duration": 30 },
              { "id": "cd-1-2", "title": "Bài 2: Ôn tập về các phép tính với số tự nhiên", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-1-3", "title": "Bài 3: Ôn tập về giải toán", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-1-4", "title": "Bài 4: Ôn tập và bổ sung về phân số", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-1-5", "title": "Bài 5: Ôn tập và bổ sung và các phép tính với phân số", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-1-6", "title": "Bài 6: Giới thiệu về tỉ số", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-1-7", "title": "Bài 7: Tìm hai số khi biết tổng và tỉ số của hai số đó", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-1-8", "title": "Bài 8: Tìm hai số khi biết hiệu và tỉ số của hai số đó", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-1-9", "title": "Bài 9: Bài toán liên quan đến quan hệ phụ thuộc", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-1-10", "title": "Bài 10: Luyện tập", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-1-11", "title": "Bài 11: Hỗn số", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-1-12", "title": "Bài 12: Phân số thập phân", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-1-13", "title": "Bài 13: Số thập phân", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-1-14", "title": "Bài 14: Số thập phân (tiếp theo)", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-1-15", "title": "Bài 15: Số thập phân (tiếp theo)", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-1-16", "title": "Bài 16: Số thập phân (tiếp theo)", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-1-17", "title": "Bài 17: Số thập phân bằng nhau", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-1-18", "title": "Bài 18: So sánh các số thập phân", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-1-19", "title": "Bài 19: Làm tròn số thập phân", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-1-20", "title": "Bài 20: Ôn tập về các đơn vị đo diện tích đã học", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-1-21", "title": "Bài 21: Héc-ta", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-1-22", "title": "Bài 22: Ki-lô-mét vuông", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-1-23", "title": "Bài 23: Em ôn lại những gì đã học", "difficulty": "easy", "isLocked": false, "duration": 30 },
              { "id": "cd-1-24", "title": "Bài 24: Em vui học toán", "difficulty": "easy", "isLocked": false, "duration": 30 }
            ]
          },
          {
            "id": "cd-phep-tinh-so-thap-phan",
            "title": "Chương 2: Các phép tính với số thập phân",
            "lessons": [
              { "id": "cd-2-1", "title": "Bài 25: Cộng các số thập phân", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-2-2", "title": "Bài 26: Trừ các số thập phân", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-2-3", "title": "Bài 27: Luyện tập", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-2-4", "title": "Bài 28: Nhân một số thập phân với 10, 100, 1000, …", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-2-5", "title": "Bài 29: Nhân một số thập phân với một số tự nhiên", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-2-6", "title": "Bài 30: Nhân một số thập phân với một số thập phân", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-2-7", "title": "Bài 31: Luyện tập", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-2-8", "title": "Bài 32: Chia một số thập phân cho 10, 100, 1000, …", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-2-9", "title": "Bài 33: Chia một số thập phân cho một số tự nhiên", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-2-10", "title": "Bài 34: Luyện tập", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-2-11", "title": "Bài 35: Chia một số thập phân cho một số thập phân", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-2-12", "title": "Bài 36: Luyện tập", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-2-13", "title": "Bài 37: Luyện tập chung", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-2-14", "title": "Bài 38: Viết các số đo đại lượng dưới dạng số thập phân", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-2-15", "title": "Bài 39: Luyện tập chung", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-2-16", "title": "Bài 40: Tỉ số phần trăm", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-2-17", "title": "Bài 41: Tìm tỉ số phần trăm của hai số", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-2-18", "title": "Bài 42: Tìm giá trị phần trăm của một số cho trước", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-2-19", "title": "Bài 43: Luyện tập chung", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-2-20", "title": "Bài 44: Sử dụng máy tính cầm tay", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-2-21", "title": "Bài 45: Tỉ lệ bản đồ", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-2-22", "title": "Bài 46: Luyện tập chung", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-2-23", "title": "Bài 47: Em ôn lại những gì đã học", "difficulty": "easy", "isLocked": false, "duration": 30 },
              { "id": "cd-2-24", "title": "Bài 48: Em vui học toán", "difficulty": "easy", "isLocked": false, "duration": 30 },
              { "id": "cd-2-25", "title": "Bài 49: Ôn tập chung", "difficulty": "easy", "isLocked": false, "duration": 30 }
            ]
          },
          {
            "id": "cd-hinh-hoc",
            "title": "Chương 3: Hình học và đo lường",
            "lessons": [
              { "id": "cd-3-1", "title": "Bài 50: Hình tam giác", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-3-2", "title": "Bài 51: Diện tích hình tam giác", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-3-3", "title": "Bài 52: Hình thang", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-3-4", "title": "Bài 53: Diện tích hình thang", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-3-5", "title": "Bài 54: Hình tròn. Đường tròn", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-3-6", "title": "Bài 55: Chu vi hình tròn", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-3-7", "title": "Bài 56: Diện tích hình tròn", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-3-8", "title": "Bài 57: Luyện tập về tính diện tích", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-3-9", "title": "Bài 58: Hình hộp chữ nhật. Hình lập phương. Hình trụ", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-3-10", "title": "Bài 59: Hình khai triển của hình hộp chữ nhật, hình lập phương, hình trụ", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-3-11", "title": "Bài 60: Diện tích xung quanh, diện tích toàn phần của hình hộp chữ nhật và hình lập phương", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-3-12", "title": "Bài 61: Luyện tập chung", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-3-13", "title": "Bài 62: Thể tích của một hình", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-3-14", "title": "Bài 63: Xăng-ti-mét khối. Đề-xi-mét khối", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-3-15", "title": "Bài 64: Mét khối", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-3-16", "title": "Bài 65: Thể tích hình hộp chữ nhật, hình lập phương", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-3-17", "title": "Bài 66: Luyện tập", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-3-18", "title": "Bài 67: Luyện tập chung", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-3-19", "title": "Bài 68: Ôn tập về các đơn vị đo thời gian", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-3-20", "title": "Bài 69: Cộng số đo thời gian. Trừ số đo thời gian", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-3-21", "title": "Bài 70: Nhân số đo thời gian với một số. Chia số đo thời gian cho một số", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-3-22", "title": "Bài 71: Luyện tập", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-3-23", "title": "Bài 72: Vận tốc", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-3-24", "title": "Bài 73: Luyện tập", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-3-25", "title": "Bài 74: Quãng đường, thời gian trong chuyển động đều", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-3-26", "title": "Bài 75: Luyện tập", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-3-27", "title": "Bài 76: Luyện tập chung", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-3-28", "title": "Bài 77: Em ôn lại những gì đã học", "difficulty": "easy", "isLocked": false, "duration": 30 },
              { "id": "cd-3-29", "title": "Bài 78: Em vui học Toán", "difficulty": "easy", "isLocked": false, "duration": 30 }
            ]
          },
          {
            "id": "cd-thong-ke-xac-suat",
            "title": "Chương 4: Thống kê và xác suất. Ôn tập cuối năm",
            "lessons": [
              { "id": "cd-4-1", "title": "Bài 79: Biểu đồ hình quạt tròn", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-4-2", "title": "Bài 80: Một số cách biểu diễn số liệu thống kê", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-4-3", "title": "Bài 81: Mô tả số lần lặp lại của một kết quả có thể xảy ra trong một số trò chơi đơn giản", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-4-4", "title": "Bài 82: Ôn tập về số tự nhiên và các phép tính với số tự nhiên", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-4-5", "title": "Bài 83: Ôn tập về phân số và các phép tính với phân số", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-4-6", "title": "Bài 84: Ôn tập về số thập phân và các phép tính với số thập phân", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-4-7", "title": "Bài 85: Ôn tập về tỉ số, tỉ số phần trăm", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-4-8", "title": "Bài 86: Ôn tập về hình học", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-4-9", "title": "Bài 87: Ôn tập về đo lường", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-4-10", "title": "Bài 88: Ôn tập về một số yếu tố thống kê và xác suất", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-4-11", "title": "Bài 89: Em ôn lại những gì đã học", "difficulty": "easy", "isLocked": false, "duration": 30 },
              { "id": "cd-4-12", "title": "Bài 90: Em vui học Toán", "difficulty": "easy", "isLocked": false, "duration": 30 },
              { "id": "cd-4-13", "title": "Bài 91: Ôn tập chung", "difficulty": "easy", "isLocked": false, "duration": 30 }
            ]
          }
        ]

      },
      {
        id: 'vat-ly-5',
        name: 'Tiếng Việt lớp 5',
        chapters: [
          {
            "id": "cd-tre-em-bup",
            "title": "Bài 1: Trẻ em như búp trên cành",
            "lessons": [
              { "id": "cd-1-1", "title": "Chia sẻ và đọc: Thư gửi các học sinh", "difficulty": "easy", "isLocked": false, "duration": 30 },
              { "id": "cd-1-2", "title": "Tự đọc sách báo: Đọc sách báo về trẻ em, quyền của trẻ em", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-1-3", "title": "Viết: Viết đoạn văn giới thiệu một nhân vật văn học", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-1-4", "title": "Nói và nghe: Trao đổi: Quyền của trẻ em", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-1-5", "title": "Đọc: Chuyện một người thầy", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-1-6", "title": "Luyện từ và câu: Từ đồng nghĩa", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-1-7", "title": "Viết: Luyện tập viết đoạn văn giới thiệu một nhân vật văn học (Tìm ý, sắp xếp ý)", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-1-8", "title": "Đọc: Khi bé Hoa ra đời", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-1-9", "title": "Viết: Luyện tập viết đoạn văn giới thiệu một nhân vật văn học (Thực hành viết)", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-1-10", "title": "Nói và nghe: Trao đổi: Em đọc sách báo", "difficulty": "easy", "isLocked": false, "duration": 30 },
              { "id": "cd-1-11", "title": "Đọc: Tôi học chữ", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-1-12", "title": "Luyện từ và câu: Luyện tập về từ đồng nghĩa", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-1-13", "title": "Góc sáng tạo: Nội quy lớp học", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-1-14", "title": "Tự đánh giá: Rất nhiều Mặt Trăng", "difficulty": "easy", "isLocked": false, "duration": 30 }
            ]
          },
          {
            "id": "cd-ban-nam-ban-nu",
            "title": "Bài 2: Bạn nam, bạn nữ",
            "lessons": [
              { "id": "cd-2-1", "title": "Chia sẻ và đọc: Lớp trưởng lớp tôi", "difficulty": "easy", "isLocked": false, "duration": 30 },
              { "id": "cd-2-2", "title": "Tự đọc sách báo: Đọc sách báo về bình đẳng giới", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-2-3", "title": "Viết: Tả người (Cấu tạo của bài văn)", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-2-4", "title": "Nói và nghe: Trao đổi: Bạn nam, bạn nữ", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-2-5", "title": "Đọc: Muôn sắc hoa tươi", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-2-6", "title": "Luyện từ và câu: Dấu gạch ngang", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-2-7", "title": "Viết: Luyện tập tả người (Quan sát)", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-2-8", "title": "Đọc: Dây thun xanh, dây thun đỏ", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-2-9", "title": "Viết: Trả bài viết đoạn văn giới thiệu một nhân vật văn học", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-2-10", "title": "Nói và nghe: Trao đổi: Em đọc sách báo", "difficulty": "easy", "isLocked": false, "duration": 30 },
              { "id": "cd-2-11", "title": "Đọc: Cuộc họp bí mật", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-2-12", "title": "Luyện từ và câu: Luyện tập về dấu gạch ngang", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-2-13", "title": "Góc sáng tạo: Chúng mình thật đáng yêu", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-2-14", "title": "Tự đánh giá: Vì bức tranh tương lai có trẻ em gái", "difficulty": "easy", "isLocked": false, "duration": 30 }
            ]
          },
          {
            "id": "cd-co-hoc-moi-hay",
            "title": "Bài 3: Có học mới hay",
            "lessons": [
              { "id": "cd-3-1", "title": "Chia sẻ và đọc: Trái cam", "difficulty": "easy", "isLocked": false, "duration": 30 },
              { "id": "cd-3-2", "title": "Tự đọc sách báo: Đọc sách báo về học và hành", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-3-3", "title": "Viết: Luyện tập tả người (Tìm ý, lập dàn ý)", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-3-4", "title": "Nói và nghe: Trao đổi: Học và hành", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-3-5", "title": "Đọc: Làm thủ công", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-3-6", "title": "Luyện từ và câu: Mở rộng vốn từ: Học hành", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-3-7", "title": "Viết: Luyện tập tả người (Viết mở bài)", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-3-8", "title": "Đọc: Hạt nảy mầm", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-3-9", "title": "Viết: Luyện tập tả người (Viết kết bài)", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-3-10", "title": "Nói và nghe: Trao đổi: Em đọc sách báo", "difficulty": "easy", "isLocked": false, "duration": 30 },
              { "id": "cd-3-11", "title": "Đọc: Bầu trời mùa thu", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-3-12", "title": "Luyện từ và câu: Quy tắc viết tên riêng nước ngoài", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-3-13", "title": "Góc sáng tạo: Những bài học hay", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-3-14", "title": "Tự đánh giá: Buổi sớm ở Mường Động", "difficulty": "easy", "isLocked": false, "duration": 30 }
            ]
          }
        ]

      }
    ]
  },
  {
    id: 'bộ-sách-cánh-diều-6',
    title: 'Lớp 6 - Cánh Diều',
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
        name: 'Toán 6',
        chapters: [
          {
            "id": "cd-so-tu-nhien",
            "title": "Chương 1: Số tự nhiên",
            "lessons": [
              { "id": "cd-1-1", "title": "Bài 1: Tập hợp", "difficulty": "easy", "isLocked": false, "duration": 30 },
              { "id": "cd-1-2", "title": "Bài 2: Tập hợp các số tự nhiên", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-1-3", "title": "Bài 3: Phép cộng, phép trừ các số tự nhiên", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-1-4", "title": "Bài 4: Phép nhân, phép chia các số tự nhiên", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-1-5", "title": "Bài 5: Phép tính lũy thừa với số mũ tự nhiên", "difficulty": "hard", "isLocked": true, "duration": 60 },
              { "id": "cd-1-6", "title": "Bài 6: Thứ tự thực hiện các phép tính", "difficulty": "hard", "isLocked": true, "duration": 60 },
              { "id": "cd-1-7", "title": "Bài 7: Quan hệ chia hết. Tính chất chia hết", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-1-8", "title": "Bài 8: Dấu hiệu chia hết cho 2, cho 5", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-1-9", "title": "Bài 9: Dấu hiệu chia hết cho 3, cho 9", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-1-10", "title": "Bài 10: Số nguyên tố. Hợp số", "difficulty": "hard", "isLocked": true, "duration": 60 },
              { "id": "cd-1-11", "title": "Bài 11: Phân tích một số ra thừa số nguyên tố", "difficulty": "hard", "isLocked": true, "duration": 60 },
              { "id": "cd-1-12", "title": "Bài 12: Ước chung và ước chung lớn nhất", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-1-13", "title": "Bài 13: Bội chung và bội chung nhỏ nhất", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-1-14", "title": "Bài tập cuối chương 1", "difficulty": "easy", "isLocked": false, "duration": 30 }
            ]
          },
          {
            "id": "cd-so-nguyen",
            "title": "Chương 2: Số nguyên",
            "lessons": [
              { "id": "cd-2-1", "title": "Bài 1: Số nguyên âm", "difficulty": "easy", "isLocked": false, "duration": 30 },
              { "id": "cd-2-2", "title": "Bài 2: Tập hợp các số nguyên", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-2-3", "title": "Bài 3: Phép cộng các số nguyên", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-2-4", "title": "Bài 4: Phép trừ số nguyên. Quy tắc dấu ngoặc", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-2-5", "title": "Bài 5: Phép nhân các số nguyên", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-2-6", "title": "Bài 6: Phép chia hết hai số nguyên. Quan hệ chia hết trong tập hợp số nguyên", "difficulty": "hard", "isLocked": true, "duration": 60 },
              { "id": "cd-2-7", "title": "Bài tập cuối chương 2", "difficulty": "easy", "isLocked": false, "duration": 30 }
            ]
          },
          {
            "id": "cd-hinh-hoc",
            "title": "Chương 3: Hình học trực quan",
            "lessons": [
              { "id": "cd-3-1", "title": "Bài 1: Tam giác đều. Hình vuông. Lục giác đều", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-3-2", "title": "Bài 2: Hình chữ nhật. Hình thoi", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-3-3", "title": "Bài 3: Hình bình hành", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-3-4", "title": "Bài 4: Hình thang cân", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-3-5", "title": "Bài 5: Hình có trục đối xứng", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-3-6", "title": "Bài 6: Hình có tâm đối xứng", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-3-7", "title": "Bài 7: Đối xứng trong thực tiễn", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-3-8", "title": "Bài tập cuối chương 3", "difficulty": "easy", "isLocked": false, "duration": 30 }
            ]
          },
          {
            "id": "cd-thong-ke",
            "title": "Chương 4: Một số yếu tố thống kê và xác suất",
            "lessons": [
              { "id": "cd-4-1", "title": "Bài 1: Thu thập, tổ chức, biểu diễn, phân tích và xử lí dữ liệu", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-4-2", "title": "Bài 2: Biểu đồ cột kép", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-4-3", "title": "Bài 3: Mô hình xác suất trong một số trò chơi và thí nghiệm đơn giản", "difficulty": "hard", "isLocked": true, "duration": 60 },
              { "id": "cd-4-4", "title": "Bài 4: Xác suất thực nghiệm trong một trò chơi và thí nghiệm đơn giản", "difficulty": "hard", "isLocked": true, "duration": 60 },
              { "id": "cd-4-5", "title": "Bài ôn tập cuối chương 4", "difficulty": "easy", "isLocked": false, "duration": 30 }
            ]
          },
          {
            "id": "cd-phan-so",
            "title": "Chương 5: Phân số và số thập phân",
            "lessons": [
              { "id": "cd-5-1", "title": "Bài 1: Phân số với tử và mẫu là số nguyên", "difficulty": "easy", "isLocked": false, "duration": 30 },
              { "id": "cd-5-2", "title": "Bài 2: So sánh các phân số. Hỗn số dương", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-5-3", "title": "Bài 3: Phép cộng. Phép trừ phân số", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-5-4", "title": "Bài 4: Phép nhân, phép chia phân số", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-5-5", "title": "Bài 5: Số thập phân", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-5-6", "title": "Bài 6: Phép cộng, phép trừ số thập phân", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-5-7", "title": "Bài 7: Phép nhân, phép chia số thập phân", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-5-8", "title": "Bài 8: Ước lượng và làm tròn số", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-5-9", "title": "Bài 9: Tỉ số. Tỉ số phần trăm", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-5-10", "title": "Bài 10: Hai bài toán về phân số", "difficulty": "hard", "isLocked": true, "duration": 60 },
              { "id": "cd-5-11", "title": "Bài tập cuối chương 5", "difficulty": "easy", "isLocked": false, "duration": 30 }
            ]
          },
          {
            "id": "cd-hinh-hoc-phang",
            "title": "Chương 6: Hình học phẳng",
            "lessons": [
              { "id": "cd-6-1", "title": "Bài 1: Điểm. Đường thẳng", "difficulty": "easy", "isLocked": false, "duration": 30 },
              { "id": "cd-6-2", "title": "Bài 2: Hai đường thẳng cắt nhau. Hai đường thẳng song song", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-6-3", "title": "Bài 3: Đoạn thẳng", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-6-4", "title": "Bài 4: Tia", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-6-5", "title": "Bài 5: Góc", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-6-6", "title": "Bài tập cuối chương 6", "difficulty": "easy", "isLocked": false, "duration": 30 }
            ]
          },
          {
            "id": "cd-thuc-hanh",
            "title": "Hoạt động thực hành và trải nghiệm",
            "lessons": [
              { "id": "cd-thuc-hanh-1", "title": "Chủ đề 2: Chỉ số khối cơ thể (BMI)", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-thuc-hanh-2", "title": "Chủ đề 3: Sắp xếp các vị trí thẳng hàng", "difficulty": "medium", "isLocked": true, "duration": 45 }
            ]
          },
          {
            "id": "cd-giai-hinh",
            "title": "Giải Hình học lớp 6 Cánh diều",
            "lessons": [
              { "id": "cd-giai-hinh-1", "title": "Giải Hình học lớp 6 Cánh diều", "difficulty": "hard", "isLocked": true, "duration": 60 }
            ]
          }
        ]

      },
      {
        id: 'vat-ly-6',
        name: 'Soạn văn 6',
        chapters: [
          {
            "id": "cd-truyen",
            "title": "Bài 1: Truyện",
            "lessons": [
              { "id": "cd-1-1", "title": "Kiến thức ngữ văn trang 14 - 15", "difficulty": "easy", "isLocked": false, "duration": 30 },
              { "id": "cd-1-2", "title": "Thánh Gióng", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-1-3", "title": "Thạch Sanh", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-1-4", "title": "Thực hành tiếng Việt trang 24 - 25", "difficulty": "hard", "isLocked": true, "duration": 60 },
              { "id": "cd-1-5", "title": "Thực hành đọc hiểu: Sự tích Hồ Gươm", "difficulty": "hard", "isLocked": true, "duration": 60 },
              { "id": "cd-1-6", "title": "Viết bài văn kể lại một truyện truyền thuyết hoặc cổ tích", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-1-7", "title": "Kể lại một truyện truyền thuyết hoặc cổ tích", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-1-8", "title": "Tự đánh giá: Em bé thông minh", "difficulty": "easy", "isLocked": false, "duration": 30 }
            ]
          },
          {
            "id": "cd-tho",
            "title": "Bài 2: Thơ",
            "lessons": [
              { "id": "cd-2-1", "title": "Kiến thức ngữ văn trang 36 - 37", "difficulty": "easy", "isLocked": false, "duration": 30 },
              { "id": "cd-2-2", "title": "À ơi tay mẹ", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-2-3", "title": "Về thăm mẹ", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-2-4", "title": "Thực hành tiếng Việt trang 41 - 42", "difficulty": "hard", "isLocked": true, "duration": 60 },
              { "id": "cd-2-5", "title": "Thực hành đọc hiểu: Ca dao Việt Nam", "difficulty": "hard", "isLocked": true, "duration": 60 },
              { "id": "cd-2-6", "title": "Tập làm thơ lục bát", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-2-7", "title": "Kể lại một trải nghiệm đáng nhớ", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-2-8", "title": "Tự đánh giá: Những điều bố yêu", "difficulty": "easy", "isLocked": false, "duration": 30 }
            ]
          },
          {
            "id": "cd-ki",
            "title": "Bài 3: Kí",
            "lessons": [
              { "id": "cd-3-1", "title": "Kiến thức ngữ văn trang 50 - 51", "difficulty": "easy", "isLocked": false, "duration": 30 },
              { "id": "cd-3-2", "title": "Trong lòng mẹ", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-3-3", "title": "Đồng Tháp Mười mùa nước nổi", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-3-4", "title": "Thực hành tiếng Việt trang 59 - 60", "difficulty": "hard", "isLocked": true, "duration": 60 },
              { "id": "cd-3-5", "title": "Thực hành đọc hiểu: Thời thơ ấu của Hon-đa", "difficulty": "hard", "isLocked": true, "duration": 60 },
              { "id": "cd-3-6", "title": "Viết bài văn kể về một kỉ niệm của bản thân", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-3-7", "title": "Kể về một kỉ niệm của bản thân", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-3-8", "title": "Tự đánh giá: Thẳm sâu Hồng Ngài", "difficulty": "easy", "isLocked": false, "duration": 30 }
            ]
          },
          {
            "id": "cd-nghiluan",
            "title": "Bài 4: Văn bản nghị luận",
            "lessons": [
              { "id": "cd-4-1", "title": "Kiến thức ngữ văn trang 72 - 73", "difficulty": "easy", "isLocked": false, "duration": 30 },
              { "id": "cd-4-2", "title": "Nguyên Hồng - nhà văn của những người cùng khổ", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-4-3", "title": "Vẻ đẹp của một bài ca dao", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-4-4", "title": "Thực hành tiếng Việt trang 78 - 79", "difficulty": "hard", "isLocked": true, "duration": 60 },
              { "id": "cd-4-5", "title": "Thực hành đọc hiểu: Thánh Gióng - tượng đài vĩnh cửu của lòng yêu nước", "difficulty": "hard", "isLocked": true, "duration": 60 },
              { "id": "cd-4-6", "title": "Viết đoạn văn ghi lại cảm nghĩ về bài thơ lục bát", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-4-7", "title": "Trình bày ý kiến về một vấn đề", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-4-8", "title": "Tự đánh giá: Con cò trong ca dao", "difficulty": "easy", "isLocked": false, "duration": 30 }
            ]
          },
          {
            "id": "cd-thongtin",
            "title": "Bài 5: Văn bản thông tin",
            "lessons": [
              { "id": "cd-5-1", "title": "Kiến thức ngữ văn trang 89 - 90", "difficulty": "easy", "isLocked": false, "duration": 30 },
              { "id": "cd-5-2", "title": "Hồ Chí Minh và Tuyên ngôn Độc lập", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-5-3", "title": "Diễn biến Chiến dịch Điện Biên Phủ", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-5-4", "title": "Thực hành tiếng Việt trang 96 - 97", "difficulty": "hard", "isLocked": true, "duration": 60 },
              { "id": "cd-5-5", "title": "Thực hành đọc hiểu: Giờ Trái Đất", "difficulty": "hard", "isLocked": true, "duration": 60 },
              { "id": "cd-5-6", "title": "Viết bài văn thuyết minh thuật lại một sự kiện", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-5-7", "title": "Trao đổi, thảo luận về ý nghĩa của một sự kiện lịch sử", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-5-8", "title": "Tự đánh giá trang 104 - 105 - 106", "difficulty": "easy", "isLocked": false, "duration": 30 }
            ]
          },
          {
            "id": "cd-truyen-2",
            "title": "Bài 6: Truyện",
            "lessons": [
              { "id": "cd-6-1", "title": "Kiến thức ngữ văn trang 3 - 4", "difficulty": "easy", "isLocked": false, "duration": 30 },
              { "id": "cd-6-2", "title": "Bài học đường đời đầu tiên", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-6-3", "title": "Ông lão đánh cá và con cá vàng", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-6-4", "title": "Thực hành tiếng Việt trang 16", "difficulty": "hard", "isLocked": true, "duration": 60 },
              { "id": "cd-6-5", "title": "Thực hành đọc hiểu: Cô bé bán diêm", "difficulty": "hard", "isLocked": true, "duration": 60 },
              { "id": "cd-6-6", "title": "Viết bài văn kể lại một trải nghiệm đáng nhớ", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-6-7", "title": "Kể lại một trải nghiệm đáng nhớ", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-6-8", "title": "Tự đánh giá: Anh Cút lủi", "difficulty": "easy", "isLocked": false, "duration": 30 }
            ]
          }
        ]

      },
      {
        id: 'khoa-hoc-6',
        name: 'Khoa học tự nhiên 6',
        chapters: [
          {
            "id": "cd-khoa-hoc-tu-nhien",
            "title": "Chủ đề 1: Giới thiệu về khoa học tự nhiên, dụng cụ đo và an toàn thực hành",
            "lessons": [
              { "id": "cd-1-1", "title": "Bài 1: Giới thiệu về khoa học tự nhiên", "difficulty": "easy", "isLocked": false, "duration": 30 },
              { "id": "cd-1-2", "title": "Bài 2: Một số dụng cụ đo và quy định an toàn trong phòng thực hành", "difficulty": "medium", "isLocked": true, "duration": 45 }
            ]
          },
          {
            "id": "cd-cac-phep-do",
            "title": "Chủ đề 2: Các phép đo",
            "lessons": [
              { "id": "cd-2-1", "title": "Bài 3: Đo chiều dài, khối lượng và thời gian", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-2-2", "title": "Bài 4: Đo nhiệt độ", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-2-3", "title": "Bài tập Chủ đề 1 và 2 trang 29", "difficulty": "easy", "isLocked": false, "duration": 30 }
            ]
          },
          {
            "id": "cd-the-cua-chat",
            "title": "Chủ đề 3: Các thể của chất",
            "lessons": [
              { "id": "cd-3-1", "title": "Bài 5: Sự đa dạng của chất", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-3-2", "title": "Bài 6: Tính chất và sự chuyển thể của chất", "difficulty": "medium", "isLocked": true, "duration": 45 }
            ]
          },
          {
            "id": "cd-oxygen-khong-khi",
            "title": "Chủ đề 4: Oxygen và không khí",
            "lessons": [
              { "id": "cd-4-1", "title": "Bài 7: Oxygen và không khí", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-4-2", "title": "Bài tập Chủ đề 3 và 4 trang 43", "difficulty": "easy", "isLocked": false, "duration": 30 }
            ]
          },
          {
            "id": "cd-vat-lieu",
            "title": "Chủ đề 5: Một số vật liệu, nhiên liệu, nguyên liệu, lương thực - thực phẩm",
            "lessons": [
              { "id": "cd-5-1", "title": "Bài 8: Một số vật liệu, nhiên liệu và nguyên liệu thông dụng", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-5-2", "title": "Bài 9: Một số lương thực - thực phẩm thông dụng", "difficulty": "medium", "isLocked": true, "duration": 45 }
            ]
          },
          {
            "id": "cd-hon-hop",
            "title": "Chủ đề 6: Hỗn hợp",
            "lessons": [
              { "id": "cd-6-1", "title": "Bài 10: Hỗn hợp, chất tinh khiết, dung dịch", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-6-2", "title": "Bài 11: Tách chất ra khỏi hỗn hợp", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-6-3", "title": "Bài tập Chủ đề 5 và 6 trang 65", "difficulty": "easy", "isLocked": false, "duration": 30 }
            ]
          },
          {
            "id": "cd-te-bao",
            "title": "Chủ đề 7: Tế bào",
            "lessons": [
              { "id": "cd-7-1", "title": "Bài 12: Tế bào – đơn vị cơ sở của sự sống", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-7-2", "title": "Bài 13: Từ tế bào đến cơ thể", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-7-3", "title": "Bài tập Chủ đề 7 trang 83", "difficulty": "easy", "isLocked": false, "duration": 30 }
            ]
          },
          {
            "id": "cd-da-dang-sv",
            "title": "Chủ đề 8: Đa dạng thế giới sống",
            "lessons": [
              { "id": "cd-8-1", "title": "Bài 14: Phân loại thế giới sống", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-8-2", "title": "Bài 15: Khóa lưỡng phân", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-8-3", "title": "Bài 16: Virus và vi khuẩn", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-8-4", "title": "Bài 17: Đa dạng nguyên sinh vật", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-8-5", "title": "Bài 18: Đa dạng nấm", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-8-6", "title": "Bài 19: Đa dạng thực vật", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-8-7", "title": "Bài 20: Vai trò của thực vật trong đời sống và trong tự nhiên", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-8-8", "title": "Bài 21: Thực hành phân chia các nhóm thực vật", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-8-9", "title": "Bài 22: Đa dạng động vật không xương sống", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-8-10", "title": "Bài 23: Đa dạng động vật có xương sống", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-8-11", "title": "Bài 24: Đa dạng sinh học", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-8-12", "title": "Bài 25: Tìm hiểu sinh vật ngoài thiên nhiên", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-8-13", "title": "Bài tập Chủ đề 8 trang 136", "difficulty": "easy", "isLocked": false, "duration": 30 }
            ]
          }
        ]

      }
    ]
  },
  {
    id: 'bộ-sách-cánh-diều-7',
    title: 'Lớp 7 - Cánh Diều',
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
        name: 'Toán 7',
        chapters: [
          {
            "id": "toan-chuong-1",
            "title": "Chương 1: Số hữu tỉ",
            "lessons": [
              { "id": "toan-1-1", "title": "Bài 1: Tập hợp Q các số hữu tỉ", "difficulty": "medium", "isLocked": false, "duration": 50 },
              { "id": "toan-1-2", "title": "Bài 2: Cộng, trừ, nhân, chia số hữu tỉ", "difficulty": "medium", "isLocked": false, "duration": 55 },
              { "id": "toan-1-3", "title": "Bài 3: Phép tính lũy thừa với số mũ tự nhiên của một số hữu tỉ", "difficulty": "medium", "isLocked": false, "duration": 60 },
              { "id": "toan-1-4", "title": "Bài 4: Thứ tự thực hiện các phép tính. Quy tắc dấu ngoặc", "difficulty": "medium", "isLocked": false, "duration": 60 },
              { "id": "toan-1-5", "title": "Bài 5: Biểu diễn thập phân của số hữu tỉ", "difficulty": "medium", "isLocked": false, "duration": 65 },
              { "id": "toan-1-6", "title": "Bài tập cuối chương 1", "difficulty": "hard", "isLocked": false, "duration": 70 }
            ]
          },
          {
            "id": "toan-chuong-2",
            "title": "Chương 2: Số thực",
            "lessons": [
              { "id": "toan-2-1", "title": "Bài 1: Số vô tỉ. Căn bậc hai số học", "difficulty": "medium", "isLocked": false, "duration": 55 },
              { "id": "toan-2-2", "title": "Bài 2: Tập hợp R các số thực", "difficulty": "medium", "isLocked": false, "duration": 60 },
              { "id": "toan-2-3", "title": "Bài 3: Giá trị tuyệt đối của một số thực", "difficulty": "medium", "isLocked": false, "duration": 55 },
              { "id": "toan-2-4", "title": "Bài 4: Làm tròn và ước lượng", "difficulty": "medium", "isLocked": false, "duration": 60 },
              { "id": "toan-2-5", "title": "Bài 5: Tỉ lệ thức", "difficulty": "medium", "isLocked": false, "duration": 60 },
              { "id": "toan-2-6", "title": "Bài 6: Dãy tỉ số bằng nhau", "difficulty": "medium", "isLocked": false, "duration": 55 },
              { "id": "toan-2-7", "title": "Bài 7: Đại lượng tỉ lệ thuận", "difficulty": "medium", "isLocked": false, "duration": 60 },
              { "id": "toan-2-8", "title": "Bài 8: Đại lượng tỉ lệ nghịch", "difficulty": "medium", "isLocked": false, "duration": 60 },
              { "id": "toan-2-9", "title": "Bài tập cuối chương 2", "difficulty": "hard", "isLocked": false, "duration": 70 }
            ]
          },
          {
            "id": "toan-chuong-3",
            "title": "Chương 3: Hình học trực quan",
            "lessons": [
              { "id": "toan-3-1", "title": "Bài 1: Hình hộp chữ nhật. Hình lập phương", "difficulty": "medium", "isLocked": false, "duration": 50 },
              { "id": "toan-3-2", "title": "Bài 2: Hình lăng trụ đứng tam giác. Hình lăng trụ đứng tứ giác", "difficulty": "medium", "isLocked": false, "duration": 55 },
              { "id": "toan-3-3", "title": "Bài tập cuối chương 3", "difficulty": "hard", "isLocked": false, "duration": 60 }
            ]
          },
          {
            "id": "toan-chuong-4",
            "title": "Chương 4: Góc. Đường thẳng song song",
            "lessons": [
              { "id": "toan-4-1", "title": "Bài 1: Góc ở vị trí đặc biệt", "difficulty": "medium", "isLocked": false, "duration": 50 },
              { "id": "toan-4-2", "title": "Bài 2: Tia phân giác của một góc", "difficulty": "medium", "isLocked": false, "duration": 55 },
              { "id": "toan-4-3", "title": "Bài 3: Hai đường thẳng song song", "difficulty": "medium", "isLocked": false, "duration": 60 },
              { "id": "toan-4-4", "title": "Bài 4: Định lý", "difficulty": "medium", "isLocked": false, "duration": 60 }
            ]
          },
          {
            "id": "toan-chuong-5",
            "title": "Chương 5: Một số yếu tố thống kê và xác suất",
            "lessons": [
              { "id": "toan-5-1", "title": "Bài 1: Thu thập, phân loại và biểu diễn dữ liệu", "difficulty": "medium", "isLocked": false, "duration": 50 },
              { "id": "toan-5-2", "title": "Bài 2: Phân tích và xử lí dữ liệu", "difficulty": "medium", "isLocked": false, "duration": 55 },
              { "id": "toan-5-3", "title": "Bài 3: Biểu đồ đoạn thẳng", "difficulty": "medium", "isLocked": false, "duration": 55 },
              { "id": "toan-5-4", "title": "Bài 4: Biểu đồ hình quạt tròn", "difficulty": "medium", "isLocked": false, "duration": 60 },
              { "id": "toan-5-5", "title": "Bài 5: Biến cố trong một số trò chơi đơn giản", "difficulty": "medium", "isLocked": false, "duration": 60 },
              { "id": "toan-5-6", "title": "Bài 6: Xác suất của biến cố ngẫu nhiên trong một số trò chơi đơn giản", "difficulty": "hard", "isLocked": false, "duration": 65 },
              { "id": "toan-5-7", "title": "Bài tập cuối chương 5", "difficulty": "hard", "isLocked": false, "duration": 70 }
            ]
          },
          {
            "id": "toan-chuong-6",
            "title": "Chương 6: Biểu thức đại số",
            "lessons": [
              { "id": "toan-6-1", "title": "Bài 1: Biểu thức số. Biểu thức đại số", "difficulty": "medium", "isLocked": false, "duration": 50 },
              { "id": "toan-6-2", "title": "Bài 2: Đa thức một biến. Nghiệm của đa thức một biến", "difficulty": "medium", "isLocked": false, "duration": 55 },
              { "id": "toan-6-3", "title": "Bài 3: Phép cộng, phép trừ đa thức một biến", "difficulty": "medium", "isLocked": false, "duration": 60 },
              { "id": "toan-6-4", "title": "Bài 4: Phép nhân đa thức một biến", "difficulty": "medium", "isLocked": false, "duration": 60 },
              { "id": "toan-6-5", "title": "Bài 5: Phép chia đa thức một biến", "difficulty": "medium", "isLocked": false, "duration": 65 },
              { "id": "toan-6-6", "title": "Bài tập cuối chương 6", "difficulty": "hard", "isLocked": false, "duration": 70 }
            ]
          },
          {
            "id": "toan-chuong-7",
            "title": "Chương 7: Tam giác",
            "lessons": [
              { "id": "toan-7-1", "title": "Bài 1: Tổng các góc của một tam giác", "difficulty": "medium", "isLocked": false, "duration": 50 },
              { "id": "toan-7-2", "title": "Bài 2: Quan hệ giữa góc và cạnh đối diện. Bất đẳng thức tam giác", "difficulty": "medium", "isLocked": false, "duration": 55 },
              { "id": "toan-7-3", "title": "Bài 3: Hai tam giác bằng nhau", "difficulty": "medium", "isLocked": false, "duration": 60 },
              { "id": "toan-7-4", "title": "Bài 4: Trường hợp bằng nhau thứ nhất của tam giác: cạnh - cạnh - cạnh", "difficulty": "medium", "isLocked": false, "duration": 60 },
              { "id": "toan-7-5", "title": "Bài 5: Trường hợp bằng nhau thứ hai của tam giác: cạnh - góc - cạnh", "difficulty": "medium", "isLocked": false, "duration": 60 },
              { "id": "toan-7-6", "title": "Bài 6: Trường hợp bằng nhau thứ ba của tam giác: góc - cạnh - góc", "difficulty": "medium", "isLocked": false, "duration": 60 },
              { "id": "toan-7-7", "title": "Bài 7: Tam giác cân", "difficulty": "medium", "isLocked": false, "duration": 60 },
              { "id": "toan-7-8", "title": "Bài 8: Đường vuông góc và đường xiên", "difficulty": "medium", "isLocked": false, "duration": 60 },
              { "id": "toan-7-9", "title": "Bài 9: Đường trung trực của một đoạn thẳng", "difficulty": "medium", "isLocked": false, "duration": 60 },
              { "id": "toan-7-10", "title": "Bài 10: Tính chất ba đường trung tuyến của tam giác", "difficulty": "medium", "isLocked": false, "duration": 60 },
              { "id": "toan-7-11", "title": "Bài 11: Tính chất ba đường phân giác của tam giác", "difficulty": "medium", "isLocked": false, "duration": 60 },
              { "id": "toan-7-12", "title": "Bài 12: Tính chất ba đường trung trực của tam giác", "difficulty": "medium", "isLocked": false, "duration": 60 },
              { "id": "toan-7-13", "title": "Bài 13: Tính chất ba đường cao của tam giác", "difficulty": "medium", "isLocked": false, "duration": 60 },
              { "id": "toan-7-14", "title": "Bài tập cuối chương 7", "difficulty": "hard", "isLocked": false, "duration": 70 },
              { "id": "toan-7-15", "title": "Giải Toán Hình 7 Cánh diều", "difficulty": "hard", "isLocked": false, "duration": 70 }
            ]
          }
        ]
      },
      {
        id: 'vat-ly-7',
        name: 'Soạn văn 7',
        chapters: [
          {
            "id": "nguvan-chu-de-1",
            "title": "Bài 1: Truyện ngắn và tiểu thuyết",
            "lessons": [
              { "id": "nguvan-1-1", "title": "Kiến thức ngữ văn", "difficulty": "easy", "isLocked": false, "duration": 30, "pages": [13, 14] },
              { "id": "nguvan-1-2", "title": "Người đàn ông cô độc giữa rừng", "difficulty": "medium", "isLocked": false, "duration": 40 },
              { "id": "nguvan-1-3", "title": "Buổi học cuối cùng", "difficulty": "medium", "isLocked": false, "duration": 45 },
              { "id": "nguvan-1-4", "title": "Thực hành tiếng Việt", "difficulty": "easy", "isLocked": false, "duration": 25, "pages": [26] },
              { "id": "nguvan-1-5", "title": "Dọc đường xứ Nghệ", "difficulty": "medium", "isLocked": false, "duration": 50 },
              { "id": "nguvan-1-6", "title": "Viết bài văn kể lại một sự việc có thật liên quan đến nhân vật hoặc sự kiện lịch sử", "difficulty": "hard", "isLocked": false, "duration": 60 },
              { "id": "nguvan-1-7", "title": "Trình bày ý kiến về một vấn đề trong đời sống", "difficulty": "hard", "isLocked": false, "duration": 60 },
              { "id": "nguvan-1-8", "title": "Tự đánh giá: Bố của Xi-mông", "difficulty": "easy", "isLocked": false, "duration": 30 },
              { "id": "nguvan-1-9", "title": "Hướng dẫn tự học", "difficulty": "easy", "isLocked": false, "duration": 20, "pages": [42] }
            ]
          },
          {
            "id": "nguvan-chu-de-2",
            "title": "Bài 2: Thơ bốn chữ, năm chữ",
            "lessons": [
              { "id": "nguvan-2-1", "title": "Kiến thức ngữ văn", "difficulty": "easy", "isLocked": false, "duration": 30, "pages": [43] },
              { "id": "nguvan-2-2", "title": "Mẹ (Đỗ Trung Lai)", "difficulty": "medium", "isLocked": false, "duration": 40 },
              { "id": "nguvan-2-3", "title": "Ông đồ (Vũ Đình Liên)", "difficulty": "medium", "isLocked": false, "duration": 45 },
              { "id": "nguvan-2-4", "title": "Thực hành tiếng việt", "difficulty": "easy", "isLocked": false, "duration": 25, "pages": [48] },
              { "id": "nguvan-2-5", "title": "Thực hành đọc hiểu: Tiếng gà trưa (Xuân Quỳnh)", "difficulty": "medium", "isLocked": false, "duration": 50 },
              { "id": "nguvan-2-6", "title": "Viết tập làm thơ bốn chữ, năm chữ", "difficulty": "hard", "isLocked": false, "duration": 60 },
              { "id": "nguvan-2-7", "title": "Viết đoạn văn ghi lại cảm xúc sau khi đọc một bài thơ bốn chữ, năm chữ", "difficulty": "hard", "isLocked": false, "duration": 60 },
              { "id": "nguvan-2-8", "title": "Nói và nghe: Trao đổi về một vấn đề", "difficulty": "hard", "isLocked": false, "duration": 60 },
              { "id": "nguvan-2-9", "title": "Tự đánh giá: Một mình trong mưa", "difficulty": "easy", "isLocked": false, "duration": 30 },
              { "id": "nguvan-2-10", "title": "Hướng dẫn tự học", "difficulty": "easy", "isLocked": false, "duration": 20, "pages": [57] }
            ]
          },
          {
            "id": "nguvan-chu-de-3",
            "title": "Bài 3: Truyện khoa học viễn tưởng",
            "lessons": [
              { "id": "nguvan-3-1", "title": "Kiến thức ngữ văn", "difficulty": "easy", "isLocked": false, "duration": 30, "pages": [58, 59] },
              { "id": "nguvan-3-2", "title": "Bạch tuộc (Trích tiểu thuyết Hai vạn dặm dưới đáy biển)", "difficulty": "medium", "isLocked": false, "duration": 40 },
              { "id": "nguvan-3-3", "title": "Chất làm gỉ (Rây Brét-bơ-ry)", "difficulty": "medium", "isLocked": false, "duration": 45 },
              { "id": "nguvan-3-4", "title": "Thực hành tiếng việt", "difficulty": "easy", "isLocked": false, "duration": 25, "pages": [69] },
              { "id": "nguvan-3-5", "title": "Thực hành đọc hiểu: Nhật trình Sol 6 (Trích tiểu thuyết Người về từ Sao Hỏa)", "difficulty": "medium", "isLocked": false, "duration": 50 },
              { "id": "nguvan-3-6", "title": "Viết bài văn biểu cảm về một con người hoặc sự việc", "difficulty": "hard", "isLocked": false, "duration": 60 },
              { "id": "nguvan-3-7", "title": "Nói và nghe: Thảo luận nhóm về một vấn đề", "difficulty": "hard", "isLocked": false, "duration": 60 },
              { "id": "nguvan-3-8", "title": "Tự đánh giá: Một trăm dặm dưới mặt đất", "difficulty": "easy", "isLocked": false, "duration": 30 },
              { "id": "nguvan-3-9", "title": "Hướng dẫn tự học", "difficulty": "easy", "isLocked": false, "duration": 20, "pages": [82] }
            ]
          },
          {
            "id": "nguvan-chu-de-4",
            "title": "Bài 4: Nghị luận văn học",
            "lessons": [
              { "id": "nguvan-4-1", "title": "Kiến thức ngữ văn", "difficulty": "easy", "isLocked": false, "duration": 30, "pages": [83] },
              { "id": "nguvan-4-2", "title": "Thiên nhiên và con người trong truyện “Đất rừng phương Nam”", "difficulty": "medium", "isLocked": false, "duration": 40 },
              { "id": "nguvan-4-3", "title": "Vẻ đẹp của bài thơ Tiếng gà trưa", "difficulty": "medium", "isLocked": false, "duration": 45 },
              { "id": "nguvan-4-4", "title": "Thực hành tiếng Việt", "difficulty": "easy", "isLocked": false, "duration": 25, "pages": [90] },
              { "id": "nguvan-4-5", "title": "Thực hành đọc hiểu: Sức hấp dẫn của tác phẩm 'Hai vạn dặm dưới đáy biển'", "difficulty": "medium", "isLocked": false, "duration": 50 },
              { "id": "nguvan-4-6", "title": "Viết bài văn phân tích đặc điểm nhân vật", "difficulty": "hard", "isLocked": false, "duration": 60 },
              { "id": "nguvan-4-7", "title": "Nói và nghe: Thảo luận nhóm về một vấn đề", "difficulty": "hard", "isLocked": false, "duration": 60 },
              { "id": "nguvan-4-8", "title": "Tự đánh giá: Về bài thơ Ông đồ của Vũ Đình Liên", "difficulty": "easy", "isLocked": false, "duration": 30 },
              { "id": "nguvan-4-9", "title": "Hướng dẫn tự học", "difficulty": "easy", "isLocked": false, "duration": 20, "pages": [101] }
            ]
          },
          {
            "id": "nguvan-chu-de-5",
            "title": "Bài 5: Văn bản thông tin",
            "lessons": [
              { "id": "nguvan-5-1", "title": "Kiến thức ngữ văn", "difficulty": "easy", "isLocked": false, "duration": 30, "pages": [102] },
              { "id": "nguvan-5-2", "title": "Ca Huế", "difficulty": "medium", "isLocked": false, "duration": 40 },
              { "id": "nguvan-5-3", "title": "Hội thi thổi cơm", "difficulty": "medium", "isLocked": false, "duration": 45 },
              { "id": "nguvan-5-4", "title": "Thực hành tiếng Việt", "difficulty": "easy", "isLocked": false, "duration": 25, "pages": [108, 109] },
              { "id": "nguvan-5-5", "title": "Thực hành đọc hiểu: Những nét đặc sắc trên “đất vật” Bắc Giang", "difficulty": "medium", "isLocked": false, "duration": 50 },
              { "id": "nguvan-5-6", "title": "Viết bài văn thuyết minh về quy tắc luật lệ trong một hoạt động hay trò chơi", "difficulty": "hard", "isLocked": false, "duration": 60 },
              { "id": "nguvan-5-7", "title": "Nói và nghe: Giới thiệu quy tắc, luật lệ của một hoạt động hay trò chơi", "difficulty": "hard", "isLocked": false, "duration": 60 },
              { "id": "nguvan-5-8", "title": "Tự đánh giá: Trò chơi dân gian của người Khmer Nam Bộ", "difficulty": "easy", "isLocked": false, "duration": 30 },
              { "id": "nguvan-5-9", "title": "Hướng dẫn tự học", "difficulty": "easy", "isLocked": false, "duration": 20, "pages": [118] }
            ]
          },
          {
            "id": "nguvan-chu-de-6",
            "title": "Bài 6: Truyện ngụ ngôn và tục ngữ",
            "lessons": [
              { "id": "nguvan-6-1", "title": "Kiến thức ngữ văn", "difficulty": "easy", "isLocked": false, "duration": 30, "pages": [3, 4] },
              { "id": "nguvan-6-2", "title": "Ếch ngồi đáy giếng", "difficulty": "medium", "isLocked": false, "duration": 40 },
              { "id": "nguvan-6-3", "title": "Đẽo cày giữa đường", "difficulty": "medium", "isLocked": false, "duration": 45 },
              { "id": "nguvan-6-4", "title": "Tục ngữ về thiên nhiên, lao động và con người, xã hội", "difficulty": "medium", "isLocked": false, "duration": 50 },
              { "id": "nguvan-6-5", "title": "Thực hành tiếng việt", "difficulty": "easy", "isLocked": false, "duration": 25, "pages": [9, 10] },
              { "id": "nguvan-6-6", "title": "Bụng và Răng Miệng, Tay, Chân", "difficulty": "medium", "isLocked": false, "duration": 50 },
              { "id": "nguvan-6-7", "title": "Thực hành đọc hiểu: Tục ngữ về thiên nhiên, lao động và con người, xã hội", "difficulty": "medium", "isLocked": false, "duration": 50 },
              { "id": "nguvan-6-8", "title": "Viết bài văn phân tích đặc điểm nhân vật", "difficulty": "hard", "isLocked": false, "duration": 60 },
              { "id": "nguvan-6-9", "title": "Nói và nghe: Kể lại một truyện ngụ ngôn", "difficulty": "hard", "isLocked": false, "duration": 60 },
              { "id": "nguvan-6-10", "title": "Tự đánh giá: Thầy bói xem voi", "difficulty": "easy", "isLocked": false, "duration": 30 },
              { "id": "nguvan-6-11", "title": "Tự đánh giá: Tục ngữ", "difficulty": "easy", "isLocked": false, "duration": 30 },
              { "id": "nguvan-6-12", "title": "Hướng dẫn tự học", "difficulty": "easy", "isLocked": false, "duration": 20, "pages": [20] }
            ]
          }
        ]
      },
      {
        id: 'khoa-hoc-7',
        name: 'Khoa học tự nhiên 7',
        chapters: [
          {
            "id": "cd-nguyen-tu",
            "title": "Chủ đề 1: Nguyên tử. Nguyên tố hóa học",
            "lessons": [
              { "id": "cd-1-1", "title": "Bài 1: Nguyên tử", "difficulty": "easy", "isLocked": false, "duration": 30 },
              { "id": "cd-1-2", "title": "Bài 2: Nguyên tố hóa học", "difficulty": "medium", "isLocked": true, "duration": 45 }
            ]
          },
          {
            "id": "cd-bang-tuan-hoan",
            "title": "Chủ đề 2: Sơ lược về bảng tuần hoàn các nguyên tố hóa học",
            "lessons": [
              { "id": "cd-2-1", "title": "Bài 3: Sơ lược về bảng tuần hoàn các nguyên tố hóa học", "difficulty": "medium", "isLocked": true, "duration": 45 }
            ]
          },
          {
            "id": "cd-phan-tu",
            "title": "Chủ đề 3: Phân tử",
            "lessons": [
              { "id": "cd-3-1", "title": "Bài 4: Phân tử, đơn chất, hợp chất", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-3-2", "title": "Bài 5: Giới thiệu về liên kết hóa học", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-3-3", "title": "Bài 6: Hóa trị, công thức hóa học", "difficulty": "hard", "isLocked": true, "duration": 60 }
            ]
          },
          {
            "id": "cd-nang-luong",
            "title": "Phần 2. Năng lượng và sự biến đổi",
            "lessons": [
              { "id": "cd-4-1", "title": "Bài 7: Tốc độ của chuyển động", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-4-2", "title": "Bài 8: Đồ thị quãng đường – thời gian", "difficulty": "medium", "isLocked": true, "duration": 45 }
            ]
          },
          {
            "id": "cd-am-thanh",
            "title": "Chủ đề 5: Âm thanh",
            "lessons": [
              { "id": "cd-5-1", "title": "Bài 9: Sự truyền âm", "difficulty": "easy", "isLocked": false, "duration": 30 },
              { "id": "cd-5-2", "title": "Bài 10: Biên độ, tần số, độ cao và độ to của âm", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-5-3", "title": "Bài 11: Phản xạ âm", "difficulty": "hard", "isLocked": true, "duration": 60 }
            ]
          },
          {
            "id": "cd-anh-sang",
            "title": "Chủ đề 6: Ánh sáng",
            "lessons": [
              { "id": "cd-6-1", "title": "Bài 12: Ánh sáng, tia sáng", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-6-2", "title": "Bài 13: Sự phản xạ ánh sáng", "difficulty": "medium", "isLocked": true, "duration": 45 }
            ]
          },
          {
            "id": "cd-tinh-chat-tu",
            "title": "Chủ đề 7: Tính chất từ của chất",
            "lessons": [
              { "id": "cd-7-1", "title": "Bài 14: Nam châm", "difficulty": "easy", "isLocked": false, "duration": 30 },
              { "id": "cd-7-2", "title": "Bài 15: Từ trường", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-7-3", "title": "Bài 16: Từ trường Trái Đất", "difficulty": "medium", "isLocked": true, "duration": 45 }
            ]
          },
          {
            "id": "cd-trao-doi-chat",
            "title": "Chủ đề 8: Trao đổi chất và chuyển hóa năng lượng ở sinh vật",
            "lessons": [
              { "id": "cd-8-1", "title": "Bài 17: Vai trò của trao đổi chất và chuyển hoá năng lượng ở sinh vật", "difficulty": "easy", "isLocked": false, "duration": 30 },
              { "id": "cd-8-2", "title": "Bài 18: Quang hợp ở thực vật", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-8-3", "title": "Bài 19: Các yếu tố ảnh hưởng đến quang hợp", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-8-4", "title": "Bài 20: Thực hành về quang hợp ở cây xanh", "difficulty": "hard", "isLocked": true, "duration": 60 },
              { "id": "cd-8-5", "title": "Bài 21: Hô hấp tế bào", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-8-6", "title": "Bài 22: Các yếu tố ảnh hưởng đến hô hấp tế bào", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-8-7", "title": "Bài 23: Trao đổi khí ở sinh vật", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-8-8", "title": "Bài 24: Vai trò của nước và các chất dinh dưỡng đối với cơ thể sinh vật", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-8-9", "title": "Bài 25: Trao đổi nước và các chất dinh dưỡng ở thực vật", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-8-10", "title": "Bài 26: Trao đổi nước và các chất dinh dưỡng ở động vật", "difficulty": "medium", "isLocked": true, "duration": 45 }
            ]
          },
          {
            "id": "cd-cam-ung",
            "title": "Chủ đề 9: Cảm ứng ở sinh vật",
            "lessons": [
              { "id": "cd-9-1", "title": "Bài 27: Khái quát về cảm ứng và cảm ứng ở thực vật", "difficulty": "easy", "isLocked": false, "duration": 30 },
              { "id": "cd-9-2", "title": "Bài 28: Cảm ứng ở động vật", "difficulty": "medium", "isLocked": true, "duration": 45 }
            ]
          },
          {
            "id": "cd-sinh-truong",
            "title": "Chủ đề 10: Sinh trưởng và phát triển ở sinh vật",
            "lessons": [
              { "id": "cd-10-1", "title": "Bài 29: Khái quát về sinh trưởng và phát triển ở sinh vật", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-10-2", "title": "Bài 30: Sinh trưởng và phát triển ở thực vật", "difficulty": "medium", "isLocked": true, "duration": 45 },
              { "id": "cd-10-3", "title": "Bài 31: Sinh trưởng và phát triển ở động vật", "difficulty": "medium", "isLocked": true, "duration": 45 }
            ]
          }
        ]

      }
    ]
  },
  {
    id: 'bộ-sách-cánh-diều-8',
    title: 'Lớp 8 - Cánh Diều',
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
        name: 'Toán 8',
        chapters: [
          {
            "id": "toan-chuong-1",
            "title": "Chương 1: Đa thức nhiều biến",
            "lessons": [
              { "id": "toan-1-1", "title": "Bài 1: Đơn thức nhiều biến. Đa thức nhiều biến", "difficulty": "medium", "isLocked": false, "duration": 50 },
              { "id": "toan-1-2", "title": "Bài 2: Các phép tính với đa thức nhiều biến", "difficulty": "medium", "isLocked": false, "duration": 55 },
              { "id": "toan-1-3", "title": "Bài 3: Hằng đẳng thức đáng nhớ", "difficulty": "medium", "isLocked": false, "duration": 60 },
              { "id": "toan-1-4", "title": "Bài 4: Vận dụng hằng đẳng thức vào phân tích đa thức thành nhân tử", "difficulty": "hard", "isLocked": false, "duration": 65 },
              { "id": "toan-1-5", "title": "Bài tập cuối chương 1", "difficulty": "hard", "isLocked": false, "duration": 70 }
            ]
          },
          {
            "id": "toan-chuong-2",
            "title": "Chương 2: Phân thức đại số",
            "lessons": [
              { "id": "toan-2-1", "title": "Bài 1: Phân thức đại số", "difficulty": "medium", "isLocked": false, "duration": 50 },
              { "id": "toan-2-2", "title": "Bài 2: Phép cộng, phép trừ phân thức đại số", "difficulty": "medium", "isLocked": false, "duration": 55 },
              { "id": "toan-2-3", "title": "Bài 3: Phép nhân, phép chia phân thức đại số", "difficulty": "medium", "isLocked": false, "duration": 60 },
              { "id": "toan-2-4", "title": "Bài tập cuối chương 2", "difficulty": "hard", "isLocked": false, "duration": 65 }
            ]
          },
          {
            "id": "toan-chuong-3",
            "title": "Chương 3: Hàm số và đồ thị",
            "lessons": [
              { "id": "toan-3-1", "title": "Bài 1: Hàm số", "difficulty": "medium", "isLocked": false, "duration": 50 },
              { "id": "toan-3-2", "title": "Bài 2: Mặt phẳng tọa độ. Đồ thị của hàm số", "difficulty": "medium", "isLocked": false, "duration": 55 },
              { "id": "toan-3-3", "title": "Bài 3: Hàm số bậc nhất y = ax + b (a ≠ 0)", "difficulty": "medium", "isLocked": false, "duration": 60 },
              { "id": "toan-3-4", "title": "Bài 4: Đồ thị của hàm số bậc nhất y = ax + b (a ≠ 0)", "difficulty": "medium", "isLocked": false, "duration": 65 },
              { "id": "toan-3-5", "title": "Bài tập cuối chương 3", "difficulty": "hard", "isLocked": false, "duration": 70 }
            ]
          },
          {
            "id": "toan-chuong-4",
            "title": "Chương 4: Hình học trực quan",
            "lessons": [
              { "id": "toan-4-1", "title": "Bài 1: Hình chóp tam giác đều", "difficulty": "medium", "isLocked": false, "duration": 50 },
              { "id": "toan-4-2", "title": "Bài 2: Hình chóp tứ giác đều", "difficulty": "medium", "isLocked": false, "duration": 55 },
              { "id": "toan-4-3", "title": "Bài tập cuối chương 4", "difficulty": "hard", "isLocked": false, "duration": 60 }
            ]
          },
          {
            "id": "toan-chuong-5",
            "title": "Chương 5: Tam giác. Tứ giác",
            "lessons": [
              { "id": "toan-5-1", "title": "Bài 1: Định lí Pythagore", "difficulty": "medium", "isLocked": false, "duration": 50 },
              { "id": "toan-5-2", "title": "Bài 2: Tứ giác", "difficulty": "medium", "isLocked": false, "duration": 55 },
              { "id": "toan-5-3", "title": "Bài 3: Hình thang cân", "difficulty": "medium", "isLocked": false, "duration": 60 },
              { "id": "toan-5-4", "title": "Bài 4: Hình bình hành", "difficulty": "medium", "isLocked": false, "duration": 60 },
              { "id": "toan-5-5", "title": "Bài 5: Hình chữ nhật", "difficulty": "medium", "isLocked": false, "duration": 60 },
              { "id": "toan-5-6", "title": "Bài 6: Hình thoi", "difficulty": "medium", "isLocked": false, "duration": 60 },
              { "id": "toan-5-7", "title": "Bài 7: Hình vuông", "difficulty": "medium", "isLocked": false, "duration": 60 },
              { "id": "toan-5-8", "title": "Bài tập cuối chương 5", "difficulty": "hard", "isLocked": false, "duration": 70 }
            ]
          },
          {
            "id": "toan-chuong-6",
            "title": "Chương 6: Một số yếu tố thống kê và xác suất",
            "lessons": [
              { "id": "toan-6-1", "title": "Bài 1: Thu thập và phân loại dữ liệu", "difficulty": "medium", "isLocked": false, "duration": 50 },
              { "id": "toan-6-2", "title": "Bài 2: Mô tả và biểu diễn dữ liệu trên các bảng, biểu đồ", "difficulty": "medium", "isLocked": false, "duration": 55 },
              { "id": "toan-6-3", "title": "Bài 3: Phân tích và xử lí dữ liệu thu được ở dạng bảng, biểu đồ", "difficulty": "medium", "isLocked": false, "duration": 60 },
              { "id": "toan-6-4", "title": "Bài 4: Xác suất của biến cố ngẫu nhiên trong một số trò chơi đơn giản", "difficulty": "medium", "isLocked": false, "duration": 60 },
              { "id": "toan-6-5", "title": "Bài 5: Xác suất thực nghiệm của một biến cố trong một số trò chơi đơn giản", "difficulty": "medium", "isLocked": false, "duration": 65 },
              { "id": "toan-6-6", "title": "Bài tập cuối chương 6", "difficulty": "hard", "isLocked": false, "duration": 70 }
            ]
          },
          {
            "id": "toan-chuong-7",
            "title": "Chương 7: Phương trình bậc nhất một ẩn",
            "lessons": [
              { "id": "toan-7-1", "title": "Bài 1: Phương trình bậc nhất một ẩn", "difficulty": "medium", "isLocked": false, "duration": 50 },
              { "id": "toan-7-2", "title": "Bài 2: Ứng dụng của phương trình bậc nhất một ẩn", "difficulty": "medium", "isLocked": false, "duration": 55 },
              { "id": "toan-7-3", "title": "Bài tập cuối chương 7", "difficulty": "hard", "isLocked": false, "duration": 60 }
            ]
          },
          {
            "id": "toan-chuong-8",
            "title": "Chương 8: Tam giác đồng dạng. Hình đồng dạng",
            "lessons": [
              { "id": "toan-8-1", "title": "Bài 1: Định lí Thalès trong tam giác", "difficulty": "medium", "isLocked": false, "duration": 50 },
              { "id": "toan-8-2", "title": "Bài 2: Ứng dụng của định lí Thalès trong tam giác", "difficulty": "medium", "isLocked": false, "duration": 55 },
              { "id": "toan-8-3", "title": "Bài 3: Đường trung bình của tam giác", "difficulty": "medium", "isLocked": false, "duration": 60 },
              { "id": "toan-8-4", "title": "Bài 4: Tính chất đường phân giác của tam giác", "difficulty": "medium", "isLocked": false, "duration": 60 },
              { "id": "toan-8-5", "title": "Bài 5: Tam giác đồng dạng", "difficulty": "medium", "isLocked": false, "duration": 60 },
              { "id": "toan-8-6", "title": "Bài 6: Trường hợp đồng dạng thứ nhất của tam giác", "difficulty": "medium", "isLocked": false, "duration": 65 }
            ]
          }
        ]
      },
      {
        id: 'vat-ly-8',
        name: 'Soạn văn 8',
        chapters: [
          {
            "id": "nguvan-chu-de-1",
            "title": "Bài 1: Truyện ngắn",
            "lessons": [
              { "id": "nguvan-1-1", "title": "Kiến thức ngữ văn", "difficulty": "easy", "isLocked": false, "duration": 30, "pages": [12] },
              { "id": "nguvan-1-2", "title": "Tôi đi học", "difficulty": "medium", "isLocked": false, "duration": 40 },
              { "id": "nguvan-1-3", "title": "Gió lạnh đầu mùa", "difficulty": "medium", "isLocked": false, "duration": 45 },
              { "id": "nguvan-1-4", "title": "Thực hành tiếng Việt", "difficulty": "easy", "isLocked": false, "duration": 25, "pages": [24] },
              { "id": "nguvan-1-5", "title": "Người mẹ vườn cau", "difficulty": "medium", "isLocked": false, "duration": 50 },
              { "id": "nguvan-1-6", "title": "Kể lại một chuyến đi hoặc một hoạt động xã hội", "difficulty": "medium", "isLocked": false, "duration": 60 },
              { "id": "nguvan-1-7", "title": "Trình bày ý kiến về một vấn đề xã hội", "difficulty": "hard", "isLocked": false, "duration": 60 },
              { "id": "nguvan-1-8", "title": "Tự đánh giá: Chuỗi hạt cườm màu xám", "difficulty": "easy", "isLocked": false, "duration": 30 },
              { "id": "nguvan-1-9", "title": "Hướng dẫn tự học", "difficulty": "easy", "isLocked": false, "duration": 20, "pages": [39] }
            ]
          },
          {
            "id": "nguvan-chu-de-2",
            "title": "Bài 2: Thơ sáu chữ, bảy chữ",
            "lessons": [
              { "id": "nguvan-2-1", "title": "Kiến thức Ngữ văn", "difficulty": "easy", "isLocked": false, "duration": 30, "pages": [40] },
              { "id": "nguvan-2-2", "title": "Nắng mới", "difficulty": "medium", "isLocked": false, "duration": 40 },
              { "id": "nguvan-2-3", "title": "Nếu mai em về Chiêm Hóa", "difficulty": "medium", "isLocked": false, "duration": 45 },
              { "id": "nguvan-2-4", "title": "Thực hành tiếng Việt", "difficulty": "easy", "isLocked": false, "duration": 25, "pages": [46] },
              { "id": "nguvan-2-5", "title": "Đường về quê mẹ", "difficulty": "medium", "isLocked": false, "duration": 50 },
              { "id": "nguvan-2-6", "title": "Viết đoạn văn ghi lại cảm nghĩ sau khi đọc một bài thơ sáu chữ, bảy chữ", "difficulty": "hard", "isLocked": false, "duration": 60 },
              { "id": "nguvan-2-7", "title": "Tập làm thơ sáu chữ, bảy chữ", "difficulty": "hard", "isLocked": false, "duration": 60 },
              { "id": "nguvan-2-8", "title": "Thảo luận ý kiến về một vấn đề trong đời sống", "difficulty": "hard", "isLocked": false, "duration": 60 },
              { "id": "nguvan-2-9", "title": "Tự đánh giá: Quê người", "difficulty": "easy", "isLocked": false, "duration": 30 },
              { "id": "nguvan-2-10", "title": "Hướng dẫn tự học", "difficulty": "easy", "isLocked": false, "duration": 20, "pages": [57] }
            ]
          },
          {
            "id": "nguvan-chu-de-3",
            "title": "Bài 3: Văn bản thông tin",
            "lessons": [
              { "id": "nguvan-3-1", "title": "Kiến thức ngữ văn", "difficulty": "easy", "isLocked": false, "duration": 30, "pages": [58] },
              { "id": "nguvan-3-2", "title": "Sao băng", "difficulty": "medium", "isLocked": false, "duration": 40 },
              { "id": "nguvan-3-3", "title": "Nước biển dâng: bài toán khó cần giải trong thế kỉ XXI", "difficulty": "medium", "isLocked": false, "duration": 45 },
              { "id": "nguvan-3-4", "title": "Thực hành tiếng Việt", "difficulty": "easy", "isLocked": false, "duration": 25, "pages": [68] },
              { "id": "nguvan-3-5", "title": "Lũ lụt là gì? Nguyên nhân và tác hại", "difficulty": "medium", "isLocked": false, "duration": 50 },
              { "id": "nguvan-3-6", "title": "Viết văn bản thuyết minh giải thích một hiện tượng tự nhiên", "difficulty": "hard", "isLocked": false, "duration": 60 },
              { "id": "nguvan-3-7", "title": "Văn bản kiến nghị về một vấn đề đời sống", "difficulty": "hard", "isLocked": false, "duration": 60 },
              { "id": "nguvan-3-8", "title": "Tóm tắt nội dung thuyết minh giải thích một hiện tượng tự nhiên", "difficulty": "hard", "isLocked": false, "duration": 60 },
              { "id": "nguvan-3-9", "title": "Tự đánh giá: Vì sao chim bồ câu không bị lạc đường?", "difficulty": "easy", "isLocked": false, "duration": 30 },
              { "id": "nguvan-3-10", "title": "Hướng dẫn tự học", "difficulty": "easy", "isLocked": false, "duration": 20, "pages": [82] }
            ]
          },
          {
            "id": "nguvan-chu-de-4",
            "title": "Bài 4: Hài kịch và truyện cười",
            "lessons": [
              { "id": "nguvan-4-1", "title": "Kiến thức ngữ văn", "difficulty": "easy", "isLocked": false, "duration": 30, "pages": [83] },
              { "id": "nguvan-4-2", "title": "Đổi tên cho xã", "difficulty": "medium", "isLocked": false, "duration": 40 },
              { "id": "nguvan-4-3", "title": "Cái kính", "difficulty": "medium", "isLocked": false, "duration": 45 },
              { "id": "nguvan-4-4", "title": "Thực hành tiếng Việt", "difficulty": "easy", "isLocked": false, "duration": 25, "pages": [95] },
              { "id": "nguvan-4-5", "title": "Ông Giuốc-đanh mặc lễ phục", "difficulty": "medium", "isLocked": false, "duration": 50 },
              { "id": "nguvan-4-6", "title": "Thi nói khoác", "difficulty": "medium", "isLocked": false, "duration": 55 },
              { "id": "nguvan-4-7", "title": "Nghị luận về một vấn đề của đời sống", "difficulty": "hard", "isLocked": false, "duration": 60 },
              { "id": "nguvan-4-8", "title": "Thảo luận ý kiến về một hiện tượng trong đời sống", "difficulty": "hard", "isLocked": false, "duration": 60 },
              { "id": "nguvan-4-9", "title": "Tự đánh giá: Treo biển", "difficulty": "easy", "isLocked": false, "duration": 30 },
              { "id": "nguvan-4-10", "title": "Hướng dẫn tự học", "difficulty": "easy", "isLocked": false, "duration": 20, "pages": [107] }
            ]
          },
          {
            "id": "nguvan-chu-de-5",
            "title": "Bài 5: Nghị luận xã hội",
            "lessons": [
              { "id": "nguvan-5-1", "title": "Kiến thức ngữ văn", "difficulty": "easy", "isLocked": false, "duration": 30, "pages": [108] },
              { "id": "nguvan-5-2", "title": "Hịch tướng sĩ", "difficulty": "medium", "isLocked": false, "duration": 40 },
              { "id": "nguvan-5-3", "title": "Nước Đại Việt ta", "difficulty": "medium", "isLocked": false, "duration": 45 },
              { "id": "nguvan-5-4", "title": "Thực hành tiếng Việt", "difficulty": "easy", "isLocked": false, "duration": 25, "pages": [116] },
              { "id": "nguvan-5-5", "title": "Chiếu dời đô", "difficulty": "medium", "isLocked": false, "duration": 50 },
              { "id": "nguvan-5-6", "title": "Nước Việt Nam ta nhỏ hay không nhỏ?", "difficulty": "medium", "isLocked": false, "duration": 55 },
              { "id": "nguvan-5-7", "title": "Viết bài nghị luận về một vấn đề xã hội đặt ra trong tác phẩm văn học", "difficulty": "hard", "isLocked": false, "duration": 60 },
              { "id": "nguvan-5-8", "title": "Nghe và tóm tắt nội dung thuyết trình về một vấn đề đặt ra trong tác phẩm văn học", "difficulty": "hard", "isLocked": false, "duration": 60 },
              { "id": "nguvan-5-9", "title": "Tự đánh giá: Chuẩn bị hành trang vào thế kỉ mới", "difficulty": "easy", "isLocked": false, "duration": 30 },
              { "id": "nguvan-5-10", "title": "Hướng dẫn tự học", "difficulty": "easy", "isLocked": false, "duration": 20, "pages": [131] }
            ]
          }
        ]
      },
      {
        id: 'khoa-hoc-8',
        name: 'Khoa học tự nhiên 8',
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
    title: 'Lớp 9 - Cánh Diều',
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
        name: 'Toán 9',
        chapters: [
          {
            "id": "toan-chuong-1",
            "title": "Chương 1: Phương trình và hệ phương trình bậc nhất",
            "lessons": [
              { "id": "toan-1-1", "title": "Bài 1: Phương trình quy về phương trình bậc nhất một ẩn", "difficulty": "medium", "isLocked": false, "duration": 40 },
              { "id": "toan-1-2", "title": "Bài 2: Phương trình bậc nhất hai ẩn. Hệ hai phương trình bậc nhất hai ẩn", "difficulty": "medium", "isLocked": false, "duration": 45 },
              { "id": "toan-1-3", "title": "Bài 3: Giải hệ hai phương trình bậc nhất hai ẩn", "difficulty": "medium", "isLocked": false, "duration": 50 },
              { "id": "toan-1-4", "title": "Bài tập cuối chương 1", "difficulty": "hard", "isLocked": false, "duration": 60 }
            ]
          },
          {
            "id": "toan-chuong-2",
            "title": "Chương 2: Bất đẳng thức. Bất phương trình bậc nhất một ẩn",
            "lessons": [
              { "id": "toan-2-1", "title": "Bài 1: Bất đẳng thức", "difficulty": "medium", "isLocked": false, "duration": 45 },
              { "id": "toan-2-2", "title": "Bài 2: Bất phương trình bậc nhất một ẩn", "difficulty": "medium", "isLocked": false, "duration": 50 },
              { "id": "toan-2-3", "title": "Bài tập cuối chương 2", "difficulty": "hard", "isLocked": false, "duration": 60 }
            ]
          },
          {
            "id": "toan-chuong-3",
            "title": "Chương 3: Căn thức",
            "lessons": [
              { "id": "toan-3-1", "title": "Bài 1: Căn bậc hai và căn bậc ba của số thực", "difficulty": "medium", "isLocked": false, "duration": 50 },
              { "id": "toan-3-2", "title": "Bài 2: Một số phép tính về căn bậc hai của số thực", "difficulty": "medium", "isLocked": false, "duration": 55 },
              { "id": "toan-3-3", "title": "Bài 3: Căn thức bậc hai và căn thức bậc ba của biểu thức đại số", "difficulty": "medium", "isLocked": false, "duration": 60 },
              { "id": "toan-3-4", "title": "Bài 4: Một số phép biến đổi căn thức bậc hai của biểu thức đại số", "difficulty": "hard", "isLocked": false, "duration": 65 },
              { "id": "toan-3-5", "title": "Bài tập cuối chương 3", "difficulty": "hard", "isLocked": false, "duration": 70 }
            ]
          },
          {
            "id": "toan-chuong-4",
            "title": "Chương 4: Hệ thức lượng trong tam giác vuông",
            "lessons": [
              { "id": "toan-4-1", "title": "Bài 1: Tỉ số lượng giác của góc nhọn", "difficulty": "medium", "isLocked": false, "duration": 50 },
              { "id": "toan-4-2", "title": "Bài 2: Một số hệ thức về cạnh và góc trong tam giác vuông", "difficulty": "medium", "isLocked": false, "duration": 55 },
              { "id": "toan-4-3", "title": "Bài 3: Ứng dụng của tỉ số lượng giác của góc nhọn", "difficulty": "hard", "isLocked": false, "duration": 60 },
              { "id": "toan-4-4", "title": "Bài tập cuối chương 4", "difficulty": "hard", "isLocked": false, "duration": 65 }
            ]
          },
          {
            "id": "toan-chuong-5",
            "title": "Chương 5: Đường tròn",
            "lessons": [
              { "id": "toan-5-1", "title": "Bài 1: Đường tròn. Vị trí tương đối của hai đường tròn", "difficulty": "medium", "isLocked": false, "duration": 50 },
              { "id": "toan-5-2", "title": "Bài 2: Vị trí tương đối của đường thẳng và đường tròn", "difficulty": "medium", "isLocked": false, "duration": 55 },
              { "id": "toan-5-3", "title": "Bài 3: Tiếp tuyến của đường tròn", "difficulty": "medium", "isLocked": false, "duration": 60 },
              { "id": "toan-5-4", "title": "Bài 4: Góc ở tâm. Góc nội tiếp", "difficulty": "medium", "isLocked": false, "duration": 60 },
              { "id": "toan-5-5", "title": "Bài 5: Độ dài cung tròn, diện tích hình quạt tròn, diện tích hình vành khuyên", "difficulty": "hard", "isLocked": false, "duration": 65 },
              { "id": "toan-5-6", "title": "Bài tập cuối chương 5", "difficulty": "hard", "isLocked": false, "duration": 70 }
            ]
          },
          {
            "id": "toan-chuong-6",
            "title": "Chương 6: Một số yếu tố thống kê và xác suất",
            "lessons": [
              { "id": "toan-6-1", "title": "Bài 1: Mô tả và biểu diễn dữ liệu trên các bảng, biểu đồ", "difficulty": "medium", "isLocked": false, "duration": 50 },
              { "id": "toan-6-2", "title": "Bài 2: Tần số. Tần số tương đối", "difficulty": "medium", "isLocked": false, "duration": 55 },
              { "id": "toan-6-3", "title": "Bài 3: Tần số ghép nhóm. Tần số tương đối ghép nhóm", "difficulty": "medium", "isLocked": false, "duration": 60 },
              { "id": "toan-6-4", "title": "Bài 4: Phép thử ngẫu nhiên và không gian mẫu. Xác suất của biến cố", "difficulty": "hard", "isLocked": false, "duration": 65 },
              { "id": "toan-6-5", "title": "Bài tập cuối chương 6", "difficulty": "hard", "isLocked": false, "duration": 70 }
            ]
          },
          {
            "id": "toan-chuong-7",
            "title": "Chương 7: Hàm số y = ax² (a ≠ 0). Phương trình bậc hai một ẩn",
            "lessons": [
              { "id": "toan-7-1", "title": "Bài 1: Hàm số y = ax² (a ≠ 0)", "difficulty": "medium", "isLocked": false, "duration": 50 },
              { "id": "toan-7-2", "title": "Bài 2: Phương trình bậc hai một ẩn", "difficulty": "medium", "isLocked": false, "duration": 55 },
              { "id": "toan-7-3", "title": "Bài 3: Định lí Viète", "difficulty": "hard", "isLocked": false, "duration": 60 },
              { "id": "toan-7-4", "title": "Bài tập cuối chương 7", "difficulty": "hard", "isLocked": false, "duration": 65 }
            ]
          },
          {
            "id": "toan-chuong-8",
            "title": "Chương 8: Đường tròn ngoại tiếp và đường tròn nội tiếp",
            "lessons": [
              { "id": "toan-8-1", "title": "Bài 1: Đường tròn ngoại tiếp tam giác. Đường tròn nội tiếp tam giác", "difficulty": "medium", "isLocked": false, "duration": 50 },
              { "id": "toan-8-2", "title": "Bài 2: Tứ giác nội tiếp đường tròn", "difficulty": "medium", "isLocked": false, "duration": 55 },
              { "id": "toan-8-3", "title": "Bài tập cuối chương 8", "difficulty": "hard", "isLocked": false, "duration": 60 }
            ]
          },
          {
            "id": "toan-chuong-9",
            "title": "Chương 9: Đa giác đều",
            "lessons": [
              { "id": "toan-9-1", "title": "Bài 1: Đa giác đều. Hình đa giác đều trong thực tiễn", "difficulty": "medium", "isLocked": false, "duration": 50 },
              { "id": "toan-9-2", "title": "Bài 2: Phép quay", "difficulty": "medium", "isLocked": false, "duration": 55 },
              { "id": "toan-9-3", "title": "Bài tập cuối chương 9", "difficulty": "hard", "isLocked": false, "duration": 60 }
            ]
          }
        ]
      },
      {
        id: 'vat-ly-9',
        name: 'Soạn văn 9',
        chapters: [
          {
            "id": "nguvan-chu-de-1",
            "title": "Bài 1: Thơ và thơ song thất lục bát",
            "lessons": [
              { "id": "nguvan-1-1", "title": "Kiến thức ngữ văn", "difficulty": "easy", "isLocked": false, "duration": 30, "pages": [11] },
              { "id": "nguvan-1-2", "title": "Sông núi nước Nam (Nam quốc sơn hà)", "difficulty": "medium", "isLocked": false, "duration": 40 },
              { "id": "nguvan-1-3", "title": "Khóc Dương Khuê", "difficulty": "medium", "isLocked": false, "duration": 45 },
              { "id": "nguvan-1-4", "title": "Thực hành tiếng Việt", "difficulty": "easy", "isLocked": false, "duration": 25, "pages": [18] },
              { "id": "nguvan-1-5", "title": "Thực hành đọc hiểu: Phò giá về kinh", "difficulty": "medium", "isLocked": false, "duration": 50 },
              { "id": "nguvan-1-6", "title": "Thực hành đọc hiểu: Tình cảnh lẻ loi của người chinh phụ", "difficulty": "medium", "isLocked": false, "duration": 55 },
              { "id": "nguvan-1-7", "title": "Phân tích một tác phẩm thơ", "difficulty": "hard", "isLocked": false, "duration": 60 },
              { "id": "nguvan-1-8", "title": "Nghe và nhận biết tính thuyết phục của một ý kiến", "difficulty": "hard", "isLocked": false, "duration": 60 },
              { "id": "nguvan-1-9", "title": "Tự đánh giá: Cảnh vui của nhà nghèo", "difficulty": "easy", "isLocked": false, "duration": 30 },
              { "id": "nguvan-1-10", "title": "Hướng dẫn tự học", "difficulty": "easy", "isLocked": false, "duration": 20, "pages": [31] }
            ]
          },
          {
            "id": "nguvan-chu-de-2",
            "title": "Bài 2: Truyện thơ Nôm",
            "lessons": [
              { "id": "nguvan-2-1", "title": "Kiến thức ngữ văn", "difficulty": "easy", "isLocked": false, "duration": 30, "pages": [32] },
              { "id": "nguvan-2-2", "title": "Cảnh ngày xuân", "difficulty": "medium", "isLocked": false, "duration": 40 },
              { "id": "nguvan-2-3", "title": "Lục Vân Tiên cứu Kiều Nguyệt Nga", "difficulty": "medium", "isLocked": false, "duration": 45 },
              { "id": "nguvan-2-4", "title": "Thực hành tiếng Việt", "difficulty": "easy", "isLocked": false, "duration": 25, "pages": [42] },
              { "id": "nguvan-2-5", "title": "Thực hành đọc hiểu: Kiều ở lầu Ngưng Bích", "difficulty": "medium", "isLocked": false, "duration": 50 },
              { "id": "nguvan-2-6", "title": "Phân tích một đoạn trích tác phẩm văn học", "difficulty": "hard", "isLocked": false, "duration": 60 },
              { "id": "nguvan-2-7", "title": "Nghe và nhận biết tính thuyết phục của một ý kiến", "difficulty": "hard", "isLocked": false, "duration": 60 },
              { "id": "nguvan-2-8", "title": "Tự đánh giá: Lục Vân Tiên gặp nạn", "difficulty": "easy", "isLocked": false, "duration": 30 },
              { "id": "nguvan-2-9", "title": "Hướng dẫn tự học", "difficulty": "easy", "isLocked": false, "duration": 20, "pages": [52] }
            ]
          },
          {
            "id": "nguvan-chu-de-3",
            "title": "Bài 3: Văn bản thông tin",
            "lessons": [
              { "id": "nguvan-3-1", "title": "Kiến thức ngữ văn", "difficulty": "easy", "isLocked": false, "duration": 30, "pages": [53] },
              { "id": "nguvan-3-2", "title": "Vịnh Hạ Long: một kì quan thiên nhiên độc đáo và tuyệt mĩ", "difficulty": "medium", "isLocked": false, "duration": 40 },
              { "id": "nguvan-3-3", "title": "Khám phá kì quan thế giới: thác I-goa-du", "difficulty": "medium", "isLocked": false, "duration": 45 },
              { "id": "nguvan-3-4", "title": "Thực hành tiếng Việt", "difficulty": "easy", "isLocked": false, "duration": 25, "pages": [65] },
              { "id": "nguvan-3-5", "title": "Thực hành đọc hiểu: Vườn quốc gia Tràm Chim - Tam Nông", "difficulty": "medium", "isLocked": false, "duration": 50 },
              { "id": "nguvan-3-6", "title": "Viết văn bản thuyết minh về một danh lam thắng cảnh", "difficulty": "hard", "isLocked": false, "duration": 60 },
              { "id": "nguvan-3-7", "title": "Thuyết minh về một danh lam thắng cảnh", "difficulty": "hard", "isLocked": false, "duration": 60 },
              { "id": "nguvan-3-8", "title": "Tự đánh giá: Cao nguyên đá Đồng Văn", "difficulty": "easy", "isLocked": false, "duration": 30 },
              { "id": "nguvan-3-9", "title": "Hướng dẫn tự học", "difficulty": "easy", "isLocked": false, "duration": 20, "pages": [75] }
            ]
          },
          {
            "id": "nguvan-chu-de-4",
            "title": "Bài 4: Truyện ngắn",
            "lessons": [
              { "id": "nguvan-4-1", "title": "Kiến thức ngữ văn", "difficulty": "easy", "isLocked": false, "duration": 30, "pages": [76] },
              { "id": "nguvan-4-2", "title": "Làng", "difficulty": "medium", "isLocked": false, "duration": 45 },
              { "id": "nguvan-4-3", "title": "Ông lão bên chiếc cầu", "difficulty": "medium", "isLocked": false, "duration": 45 },
              { "id": "nguvan-4-4", "title": "Thực hành tiếng Việt", "difficulty": "easy", "isLocked": false, "duration": 25, "pages": [90] },
              { "id": "nguvan-4-5", "title": "Thực hành đọc hiểu: Chiếc lược ngà", "difficulty": "medium", "isLocked": false, "duration": 50 },
              { "id": "nguvan-4-6", "title": "Thực hành đọc hiểu: Chiếc lá cuối cùng", "difficulty": "medium", "isLocked": false, "duration": 50 },
              { "id": "nguvan-4-7", "title": "Phân tích một tác phẩm truyện", "difficulty": "hard", "isLocked": false, "duration": 60 },
              { "id": "nguvan-4-8", "title": "Thảo luận về một vấn đề đáng quan tâm trong đời sống", "difficulty": "hard", "isLocked": false, "duration": 60 },
              { "id": "nguvan-4-9", "title": "Tự đánh giá: Những con cá cờ", "difficulty": "easy", "isLocked": false, "duration": 30 },
              { "id": "nguvan-4-10", "title": "Hướng dẫn tự học", "difficulty": "easy", "isLocked": false, "duration": 20, "pages": [112] }
            ]
          },
          {
            "id": "nguvan-chu-de-5",
            "title": "Bài 6: Truyện truyền kì và truyện trinh thám",
            "lessons": [
              { "id": "nguvan-5-1", "title": "Kiến thức ngữ văn", "difficulty": "easy", "isLocked": false, "duration": 30, "pages": [3] },
              { "id": "nguvan-5-2", "title": "Chuyện người con gái Nam Xương", "difficulty": "medium", "isLocked": false, "duration": 40 },
              { "id": "nguvan-5-3", "title": "Vụ cải trang bất thành", "difficulty": "medium", "isLocked": false, "duration": 45 },
              { "id": "nguvan-5-4", "title": "Thực hành tiếng Việt", "difficulty": "easy", "isLocked": false, "duration": 25, "pages": [17] },
              { "id": "nguvan-5-5", "title": "Thực hành đọc hiểu: Dế chọi", "difficulty": "medium", "isLocked": false, "duration": 50 },
              { "id": "nguvan-5-6", "title": "Viết truyện kể sáng tạo", "difficulty": "hard", "isLocked": false, "duration": 60 },
              { "id": "nguvan-5-7", "title": "Kể một câu chuyện tưởng tượng", "difficulty": "hard", "isLocked": false, "duration": 60 },
              { "id": "nguvan-5-8", "title": "Tự đánh giá: Gói thuốc lá", "difficulty": "easy", "isLocked": false, "duration": 30 },
              { "id": "nguvan-5-9", "title": "Hướng dẫn tự học", "difficulty": "easy", "isLocked": false, "duration": 20, "pages": [32] }
            ]
          },
          {
            "id": "nguvan-chu-de-6",
            "title": "Bài 7: Thơ tám chữ và thơ tự do",
            "lessons": [
              { "id": "nguvan-6-1", "title": "Kiến thức ngữ văn", "difficulty": "easy", "isLocked": false, "duration": 30, "pages": [33] },
              { "id": "nguvan-6-2", "title": "Quê hương", "difficulty": "medium", "isLocked": false, "duration": 40 },
              { "id": "nguvan-6-3", "title": "Bếp lửa", "difficulty": "medium", "isLocked": false, "duration": 45 },
              { "id": "nguvan-6-4", "title": "Thực hành tiếng Việt", "difficulty": "easy", "isLocked": false, "duration": 25, "pages": [41] },
              { "id": "nguvan-6-5", "title": "Thực hành đọc hiểu: Chiều xuân", "difficulty": "medium", "isLocked": false, "duration": 50 },
              { "id": "nguvan-6-6", "title": "Thực hành đọc hiểu: Nhật kí đô thị hóa", "difficulty": "medium", "isLocked": false, "duration": 50 },
              { "id": "nguvan-6-7", "title": "Tập làm thơ tám chữ", "difficulty": "hard", "isLocked": false, "duration": 60 },
              { "id": "nguvan-6-8", "title": "Viết đoạn văn ghi lại cảm nghĩ về một bài thơ tám chữ", "difficulty": "hard", "isLocked": false, "duration": 60 },
              { "id": "nguvan-6-9", "title": "Nghe và nhận biết tính thuyết phục của một ý kiến về thơ tám chữ", "difficulty": "medium", "isLocked": false, "duration": 50 },
              { "id": "nguvan-6-10", "title": "Tự đánh giá: Nói với con", "difficulty": "easy", "isLocked": false, "duration": 30 },
              { "id": "nguvan-6-11", "title": "Hướng dẫn tự học", "difficulty": "easy", "isLocked": false, "duration": 20, "pages": [53] }
            ]
          }
        ]
      },
      {
        id: 'khoa-hoc-9',
        name: 'Khoa học tự nhiên 9',
        chapters: [
          {
            "id": "vatly-chu-de-1",
            "title": "Chủ đề 1: Năng lượng cơ học",
            "lessons": [
              { "id": "vatly-1-1", "title": "Bài 1: Công và công suất", "difficulty": "medium", "isLocked": false, "duration": 50 },
              { "id": "vatly-1-2", "title": "Bài 2: Cơ năng", "difficulty": "medium", "isLocked": false, "duration": 55 },
              { "id": "vatly-1-3", "title": "Bài tập Chủ đề 1", "difficulty": "hard", "isLocked": false, "duration": 60 }
            ]
          },
          {
            "id": "vatly-chu-de-2",
            "title": "Chủ đề 2: Ánh sáng",
            "lessons": [
              { "id": "vatly-2-1", "title": "Bài 3: Khúc xạ ánh sáng và phản xạ toàn phần", "difficulty": "medium", "isLocked": false, "duration": 50 },
              { "id": "vatly-2-2", "title": "Bài 4: Hiện tượng tán sắc ánh sáng. Màu sắc ánh sáng", "difficulty": "medium", "isLocked": false, "duration": 55 },
              { "id": "vatly-2-3", "title": "Bài 5: Sự khúc xạ ánh sáng qua thấu kính", "difficulty": "medium", "isLocked": false, "duration": 60 },
              { "id": "vatly-2-4", "title": "Bài 6: Sự tạo ảnh qua thấu kính. Kính lúp", "difficulty": "medium", "isLocked": false, "duration": 60 },
              { "id": "vatly-2-5", "title": "Bài tập Chủ đề 2", "difficulty": "hard", "isLocked": false, "duration": 70 }
            ]
          },
          {
            "id": "vatly-chu-de-3",
            "title": "Chủ đề 3: Điện",
            "lessons": [
              { "id": "vatly-3-1", "title": "Bài 7: Định luật Ohm. Điện trở", "difficulty": "medium", "isLocked": false, "duration": 50 },
              { "id": "vatly-3-2", "title": "Bài 8: Đoạn mạch nối tiếp", "difficulty": "medium", "isLocked": false, "duration": 55 },
              { "id": "vatly-3-3", "title": "Bài 9: Đoạn mạch song song", "difficulty": "medium", "isLocked": false, "duration": 60 },
              { "id": "vatly-3-4", "title": "Bài 10: Năng lượng của dòng điện và công suất điện", "difficulty": "medium", "isLocked": false, "duration": 60 },
              { "id": "vatly-3-5", "title": "Bài tập Chủ đề 3", "difficulty": "hard", "isLocked": false, "duration": 70 }
            ]
          },
          {
            "id": "vatly-chu-de-4",
            "title": "Chủ đề 4: Điện từ",
            "lessons": [
              { "id": "vatly-4-1", "title": "Bài 11: Cảm ứng điện từ. Nguyên tắc tạo ra dòng điện xoay chiều", "difficulty": "medium", "isLocked": false, "duration": 60 },
              { "id": "vatly-4-2", "title": "Bài 12: Tác dụng của dòng điện xoay chiều", "difficulty": "medium", "isLocked": false, "duration": 60 },
              { "id": "vatly-4-3", "title": "Bài tập Chủ đề 4", "difficulty": "hard", "isLocked": false, "duration": 70 }
            ]
          },
          {
            "id": "vatly-chu-de-5",
            "title": "Chủ đề 5: Năng lượng với cuộc sống",
            "lessons": [
              { "id": "vatly-5-1", "title": "Bài 13: Sử dụng năng lượng", "difficulty": "medium", "isLocked": false, "duration": 50 },
              { "id": "vatly-5-2", "title": "Bài 14: Năng lượng tái tạo", "difficulty": "medium", "isLocked": false, "duration": 55 },
              { "id": "vatly-5-3", "title": "Bài tập Chủ đề 5", "difficulty": "hard", "isLocked": false, "duration": 60 }
            ]
          },
          {
            "id": "hoahoc-chu-de-6",
            "title": "Chủ đề 6: Kim loại",
            "lessons": [
              { "id": "hoahoc-6-1", "title": "Bài 15: Tính chất chung của kim loại", "difficulty": "medium", "isLocked": false, "duration": 50 },
              { "id": "hoahoc-6-2", "title": "Bài 16: Dãy hoạt động hoá học", "difficulty": "medium", "isLocked": false, "duration": 55 },
              { "id": "hoahoc-6-3", "title": "Bài 17: Tách kim loại. Sử dụng hợp kim", "difficulty": "medium", "isLocked": false, "duration": 60 },
              { "id": "hoahoc-6-4", "title": "Bài 18: Sự khác nhau cơ bản giữa phi kim và kim loại", "difficulty": "medium", "isLocked": false, "duration": 60 },
              { "id": "hoahoc-6-5", "title": "Bài tập Chủ đề 6", "difficulty": "hard", "isLocked": false, "duration": 70 }
            ]
          },
          {
            "id": "hoahoc-chu-de-7",
            "title": "Chủ đề 7: Giới thiệu về chất hữu cơ, hydrocarbon và nguồn nhiên liệu",
            "lessons": [
              { "id": "hoahoc-7-1", "title": "Bài 19: Giới thiệu về chất hữu cơ", "difficulty": "medium", "isLocked": false, "duration": 50 },
              { "id": "hoahoc-7-2", "title": "Bài 20: Hydrocarbon, alkane", "difficulty": "medium", "isLocked": false, "duration": 55 },
              { "id": "hoahoc-7-3", "title": "Bài 21: Alkene", "difficulty": "medium", "isLocked": false, "duration": 60 },
              { "id": "hoahoc-7-4", "title": "Bài 22: Nguồn nhiên liệu", "difficulty": "medium", "isLocked": false, "duration": 60 },
              { "id": "hoahoc-7-5", "title": "Bài tập Chủ đề 7", "difficulty": "hard", "isLocked": false, "duration": 70 }
            ]
          },
          {
            "id": "hoahoc-chu-de-8",
            "title": "Chủ đề 8: Ethylic alcohol và acetic acid",
            "lessons": [
              { "id": "hoahoc-8-1", "title": "Bài 23: Ethylic alcohol", "difficulty": "medium", "isLocked": false, "duration": 50 },
              { "id": "hoahoc-8-2", "title": "Bài 24: Acetic acid", "difficulty": "medium", "isLocked": false, "duration": 55 },
              { "id": "hoahoc-8-3", "title": "Bài tập Chủ đề 8", "difficulty": "hard", "isLocked": false, "duration": 60 }
            ]
          },
          {
            "id": "hoahoc-chu-de-9",
            "title": "Chủ đề 9: Lipid - Carbohydrate - Protein - Polymer",
            "lessons": [
              { "id": "hoahoc-9-1", "title": "Bài 25: Lipid và chất béo", "difficulty": "medium", "isLocked": false, "duration": 50 },
              { "id": "hoahoc-9-2", "title": "Bài 26: Glucose và saccharose", "difficulty": "medium", "isLocked": false, "duration": 55 },
              { "id": "hoahoc-9-3", "title": "Bài 27: Tinh bột và cellulose", "difficulty": "medium", "isLocked": false, "duration": 60 },
              { "id": "hoahoc-9-4", "title": "Bài 28: Protein", "difficulty": "medium", "isLocked": false, "duration": 60 },
              { "id": "hoahoc-9-5", "title": "Bài 29: Polymer", "difficulty": "medium", "isLocked": false, "duration": 60 },
              { "id": "hoahoc-9-6", "title": "Bài tập Chủ đề 9", "difficulty": "hard", "isLocked": false, "duration": 70 }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'bộ-sách-cánh-diều-10',
    title: 'Lớp 10 - Cánh Diều',
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
        name: 'Toán học 10',
        chapters: [
          {
            "id": "toan-chuong-1",
            "title": "Chương 1: Mệnh đề toán học. Tập hợp",
            "lessons": [
              { "id": "toan-1-1", "title": "Bài 1: Mệnh đề toán học", "difficulty": "medium", "isLocked": false, "duration": 40 },
              { "id": "toan-1-2", "title": "Bài 2: Tập hợp. Các phép toán trên tập hợp", "difficulty": "medium", "isLocked": false, "duration": 45 },
              { "id": "toan-1-3", "title": "Bài tập cuối chương 1", "difficulty": "hard", "isLocked": false, "duration": 60, "pages": [19] }
            ]
          },
          {
            "id": "toan-chuong-2",
            "title": "Chương 2: Bất phương trình và hệ bất phương trình bậc nhất hai ẩn",
            "lessons": [
              { "id": "toan-2-1", "title": "Bài 1: Bất phương trình bậc nhất hai ẩn", "difficulty": "medium", "isLocked": false, "duration": 50 },
              { "id": "toan-2-2", "title": "Bài 2: Hệ bất phương trình bậc nhất hai ẩn", "difficulty": "medium", "isLocked": false, "duration": 55 },
              { "id": "toan-2-3", "title": "Bài tập cuối chương 2", "difficulty": "hard", "isLocked": false, "duration": 60, "pages": [30] }
            ]
          },
          {
            "id": "toan-chuong-3",
            "title": "Chương 3: Hàm số và đồ thị",
            "lessons": [
              { "id": "toan-3-1", "title": "Bài 1: Hàm số và đồ thị", "difficulty": "medium", "isLocked": false, "duration": 55 },
              { "id": "toan-3-2", "title": "Bài 2: Hàm số bậc hai. Đồ thị hàm số bậc hai và ứng dụng", "difficulty": "medium", "isLocked": false, "duration": 60 },
              { "id": "toan-3-3", "title": "Bài 3: Dấu của tam thức bậc hai", "difficulty": "medium", "isLocked": false, "duration": 55 },
              { "id": "toan-3-4", "title": "Bài 4: Bất phương trình bậc hai một ẩn", "difficulty": "hard", "isLocked": false, "duration": 60 },
              { "id": "toan-3-5", "title": "Bài 5: Hai dạng phương trình quy về phương trình bậc hai", "difficulty": "hard", "isLocked": false, "duration": 65 },
              { "id": "toan-3-6", "title": "Bài tập cuối chương 3", "difficulty": "hard", "isLocked": false, "duration": 70, "pages": [60, 61] }
            ]
          },
          {
            "id": "toan-chuong-4",
            "title": "Chương 4: Hệ thức lượng trong tam giác. Vectơ",
            "lessons": [
              { "id": "toan-4-1", "title": "Bài 1: Giá trị lượng giác của một góc từ 00 đến 1800. Định lý côsin và định lý sin trong tam giác", "difficulty": "medium", "isLocked": false, "duration": 60 },
              { "id": "toan-4-2", "title": "Bài 2: Giải tam giác. Tính diện tích tam giác", "difficulty": "medium", "isLocked": false, "duration": 65 },
              { "id": "toan-4-3", "title": "Bài 3: Khái niệm vectơ", "difficulty": "medium", "isLocked": false, "duration": 60 },
              { "id": "toan-4-4", "title": "Bài 4: Tổng và hiệu của hai vectơ", "difficulty": "medium", "isLocked": false, "duration": 60 },
              { "id": "toan-4-5", "title": "Bài 5: Tích của một số với một vectơ", "difficulty": "medium", "isLocked": false, "duration": 60 },
              { "id": "toan-4-6", "title": "Bài 6: Tích vô hướng của hai vectơ", "difficulty": "medium", "isLocked": false, "duration": 65 },
              { "id": "toan-4-7", "title": "Bài tập cuối chương 4", "difficulty": "hard", "isLocked": false, "duration": 70, "pages": [99, 100] }
            ]
          },
          {
            "id": "toan-chuong-5",
            "title": "Chương 5: Đại số tổ hợp",
            "lessons": [
              { "id": "toan-5-1", "title": "Bài 1: Quy tắc cộng. Quy tắc nhân. Sơ đồ hình cây", "difficulty": "medium", "isLocked": false, "duration": 55 },
              { "id": "toan-5-2", "title": "Bài 2: Hoán vị. Chỉnh hợp", "difficulty": "medium", "isLocked": false, "duration": 60 },
              { "id": "toan-5-3", "title": "Bài 3: Tổ hợp", "difficulty": "medium", "isLocked": false, "duration": 65 },
              { "id": "toan-5-4", "title": "Bài 4: Nhị thức Newton", "difficulty": "hard", "isLocked": false, "duration": 70 },
              { "id": "toan-5-5", "title": "Bài tập cuối chương 5", "difficulty": "hard", "isLocked": false, "duration": 75, "pages": [20] }
            ]
          },
          {
            "id": "toan-chuong-6",
            "title": "Chương 6: Một số yếu tố thống kê và xác suất",
            "lessons": [
              { "id": "toan-6-1", "title": "Bài 1: Số gần đúng. Sai số", "difficulty": "medium", "isLocked": false, "duration": 50 },
              { "id": "toan-6-2", "title": "Bài 2: Các số đặc trưng đo xu thế trung tâm cho mẫu số liệu không ghép nhóm", "difficulty": "medium", "isLocked": false, "duration": 55 },
              { "id": "toan-6-3", "title": "Bài 3: Các số liệu đặc trưng đo mức độ phân tán cho mẫu số liệu không ghép nhóm", "difficulty": "medium", "isLocked": false, "duration": 60 },
              { "id": "toan-6-4", "title": "Bài 4: Xác suất của biến cố trong một số trò chơi đơn giản", "difficulty": "medium", "isLocked": false, "duration": 55 },
              { "id": "toan-6-5", "title": "Bài 5: Xác suất của biến cố", "difficulty": "hard", "isLocked": false, "duration": 60 },
              { "id": "toan-6-6", "title": "Bài tập cuối chương 6", "difficulty": "hard", "isLocked": false, "duration": 65, "pages": [53, 54] }
            ]
          },
          {
            "id": "toan-chuong-7",
            "title": "Chương 7: Phương pháp tọa độ trong mặt phẳng",
            "lessons": [
              { "id": "toan-7-1", "title": "Bài 1: Tọa độ của vectơ", "difficulty": "medium", "isLocked": false, "duration": 50 },
              { "id": "toan-7-2", "title": "Bài 2: Biểu thức tọa độ của các phép toán vectơ", "difficulty": "medium", "isLocked": false, "duration": 55 },
              { "id": "toan-7-3", "title": "Bài 3: Phương trình đường thẳng", "difficulty": "medium", "isLocked": false, "duration": 60 },
              { "id": "toan-7-4", "title": "Bài 4: Vị trí tương đối và góc giữa hai đường thẳng. Khoảng cách từ một điểm đến một đường thẳng", "difficulty": "hard", "isLocked": false, "duration": 65 }
            ]
          }
        ]
      },
      {
        id: 'vat-ly-10',
        name: 'Soạn văn lớp 10',
        chapters: [
          {
            "id": "nguvan-chu-de-1",
            "title": "Bài 1: Thần thoại và sử thi",
            "lessons": [
              { "id": "nguvan-1-1", "title": "Kiến thức ngữ văn", "difficulty": "easy", "isLocked": false, "duration": 30, "pages": [11] },
              { "id": "nguvan-1-2", "title": "Hê-ra-clét đi tìm táo vàng", "difficulty": "medium", "isLocked": false, "duration": 40 },
              { "id": "nguvan-1-3", "title": "Chiến thắng Mtao Mxây", "difficulty": "medium", "isLocked": false, "duration": 45 },
              { "id": "nguvan-1-4", "title": "Thần trụ trời", "difficulty": "medium", "isLocked": false, "duration": 50 },
              { "id": "nguvan-1-5", "title": "Ra-ma buộc tội", "difficulty": "medium", "isLocked": false, "duration": 55 },
              { "id": "nguvan-1-6", "title": "Thực hành tiếng Việt", "difficulty": "easy", "isLocked": false, "duration": 25, "pages": [32] },
              { "id": "nguvan-1-7", "title": "Viết bài văn nghị luận về một vấn đề xã hội", "difficulty": "hard", "isLocked": false, "duration": 60 },
              { "id": "nguvan-1-8", "title": "Thuyết trình về một vấn đề xã hội", "difficulty": "hard", "isLocked": false, "duration": 60 },
              { "id": "nguvan-1-9", "title": "Tự đánh giá: Nữ Oa", "difficulty": "easy", "isLocked": false, "duration": 30 },
              { "id": "nguvan-1-10", "title": "Hướng dẫn tự học", "difficulty": "easy", "isLocked": false, "duration": 20, "pages": [42] }
            ]
          },
          {
            "id": "nguvan-chu-de-2",
            "title": "Bài 2: Thơ đường luật",
            "lessons": [
              { "id": "nguvan-2-1", "title": "Kiến thức Ngữ văn", "difficulty": "easy", "isLocked": false, "duration": 30, "pages": [43] },
              { "id": "nguvan-2-2", "title": "Cảm xúc mùa thu", "difficulty": "medium", "isLocked": false, "duration": 40 },
              { "id": "nguvan-2-3", "title": "Tự tình", "difficulty": "medium", "isLocked": false, "duration": 45 },
              { "id": "nguvan-2-4", "title": "Câu cá mùa thu", "difficulty": "medium", "isLocked": false, "duration": 50 },
              { "id": "nguvan-2-5", "title": "Thực hành tiếng Việt", "difficulty": "easy", "isLocked": false, "duration": 25, "pages": [51] },
              { "id": "nguvan-2-6", "title": "Viết Báo cáo kết quả nghiên cứu về một vấn đề", "difficulty": "hard", "isLocked": false, "duration": 60 },
              { "id": "nguvan-2-7", "title": "Trình bày báo cáo kết quả nghiên cứu về một vấn đề", "difficulty": "hard", "isLocked": false, "duration": 60 },
              { "id": "nguvan-2-8", "title": "Tự đánh giá: Tỏ lòng (Thuật hoài)", "difficulty": "easy", "isLocked": false, "duration": 30 },
              { "id": "nguvan-2-9", "title": "Hướng dẫn tự học", "difficulty": "easy", "isLocked": false, "duration": 20, "pages": [61] }
            ]
          },
          {
            "id": "nguvan-chu-de-3",
            "title": "Bài 3: Kịch bản chèo và tuồng",
            "lessons": [
              { "id": "nguvan-3-1", "title": "Kiến thức ngữ văn", "difficulty": "easy", "isLocked": false, "duration": 30, "pages": [63] },
              { "id": "nguvan-3-2", "title": "Xúy Vân giả dại", "difficulty": "medium", "isLocked": false, "duration": 40 },
              { "id": "nguvan-3-3", "title": "Mắc mưu Thị Hến", "difficulty": "medium", "isLocked": false, "duration": 45 },
              { "id": "nguvan-3-4", "title": "Thị Mầu lên chùa", "difficulty": "medium", "isLocked": false, "duration": 50 },
              { "id": "nguvan-3-5", "title": "Thực hành tiếng Việt", "difficulty": "easy", "isLocked": false, "duration": 25, "pages": [80] },
              { "id": "nguvan-3-6", "title": "Viết bài luận thuyết phục người khác từ bỏ một thói quen hay một quan niệm", "difficulty": "hard", "isLocked": false, "duration": 60 },
              { "id": "nguvan-3-7", "title": "Thảo luận về một vấn đề có những ý kiến khác nhau", "difficulty": "hard", "isLocked": false, "duration": 60 },
              { "id": "nguvan-3-8", "title": "Tự đánh giá: Xử kiện", "difficulty": "easy", "isLocked": false, "duration": 30 },
              { "id": "nguvan-3-9", "title": "Hướng dẫn tự học", "difficulty": "easy", "isLocked": false, "duration": 20, "pages": [91] }
            ]
          },
          {
            "id": "nguvan-chu-de-4",
            "title": "Bài 4: Văn bản thông tin",
            "lessons": [
              { "id": "nguvan-4-1", "title": "Kiến thức ngữ văn", "difficulty": "easy", "isLocked": false, "duration": 30, "pages": [92] },
              { "id": "nguvan-4-2", "title": "Thăng Long – Đông Đô – Hà Nội: Một hằng số văn hóa Việt Nam", "difficulty": "medium", "isLocked": false, "duration": 40 },
              { "id": "nguvan-4-3", "title": "Lễ hội Đền Hùng", "difficulty": "medium", "isLocked": false, "duration": 45 },
              { "id": "nguvan-4-4", "title": "Lễ hội dân gian đặc sắc của dân tộc Chăm ở Ninh Thuận", "difficulty": "medium", "isLocked": false, "duration": 50 },
              { "id": "nguvan-4-5", "title": "Thực hành tiếng Việt", "difficulty": "easy", "isLocked": false, "duration": 25, "pages": [104] },
              { "id": "nguvan-4-6", "title": "Viết bản nội quy, hướng dẫn nơi công cộng", "difficulty": "hard", "isLocked": false, "duration": 60 },
              { "id": "nguvan-4-7", "title": "Viết bài luận về bản thân", "difficulty": "hard", "isLocked": false, "duration": 60 },
              { "id": "nguvan-4-8", "title": "Thuyết trình và thảo luận về một địa chỉ văn hóa", "difficulty": "hard", "isLocked": false, "duration": 60 },
              { "id": "nguvan-4-9", "title": "Tự đánh giá: Lễ hội Ok Om Bok", "difficulty": "easy", "isLocked": false, "duration": 30 },
              { "id": "nguvan-4-10", "title": "Hướng dẫn tự học", "difficulty": "easy", "isLocked": false, "duration": 20, "pages": [118] }
            ]
          },
          {
            "id": "nguvan-chu-de-5",
            "title": "Bài 5: Thơ văn Nguyễn Trãi",
            "lessons": [
              { "id": "nguvan-5-1", "title": "Kiến thức ngữ văn", "difficulty": "easy", "isLocked": false, "duration": 30, "pages": [3] },
              { "id": "nguvan-5-2", "title": "Nguyễn Trãi - cuộc đời và sự nghiệp", "difficulty": "medium", "isLocked": false, "duration": 40 },
              { "id": "nguvan-5-3", "title": "Đại cáo bình Ngô", "difficulty": "medium", "isLocked": false, "duration": 45 },
              { "id": "nguvan-5-4", "title": "Gương báu khuyên răn", "difficulty": "medium", "isLocked": false, "duration": 50 },
              { "id": "nguvan-5-5", "title": "Thực hành tiếng Việt", "difficulty": "easy", "isLocked": false, "duration": 25, "pages": [20] },
              { "id": "nguvan-5-6", "title": "Viết bài văn nghị luận về một vấn đề xã hội", "difficulty": "hard", "isLocked": false, "duration": 60 },
              { "id": "nguvan-5-7", "title": "Thuyết trình và thảo luận về một vấn đề xã hội", "difficulty": "hard", "isLocked": false, "duration": 60 },
              { "id": "nguvan-5-8", "title": "Tự đánh giá: Thư dụ Vương Thông lần nữa", "difficulty": "easy", "isLocked": false, "duration": 30 },
              { "id": "nguvan-5-9", "title": "Hướng dẫn tự học", "difficulty": "easy", "isLocked": false, "duration": 20, "pages": [32] }
            ]
          },
          {
            "id": "nguvan-chu-de-6",
            "title": "Bài 6: Tiểu thuyết và truyện ngắn",
            "lessons": [
              { "id": "nguvan-6-1", "title": "Kiến thức ngữ văn", "difficulty": "easy", "isLocked": false, "duration": 30, "pages": [33] },
              { "id": "nguvan-6-2", "title": "Kiêu binh nổi loạn", "difficulty": "medium", "isLocked": false, "duration": 40 },
              { "id": "nguvan-6-3", "title": "Người ở bến sông Châu", "difficulty": "medium", "isLocked": false, "duration": 45 },
              { "id": "nguvan-6-4", "title": "Hồi trống Cổ Thành", "difficulty": "medium", "isLocked": false, "duration": 50 },
              { "id": "nguvan-6-5", "title": "Thực hành tiếng Việt", "difficulty": "easy", "isLocked": false, "duration": 25, "pages": [54, 55] },
              { "id": "nguvan-6-6", "title": "Viết bài văn nghị luận phân tích đánh giá một tác phẩm truyện", "difficulty": "hard", "isLocked": false, "duration": 60 },
              { "id": "nguvan-6-7", "title": "Nói và nghe: Giới thiệu, đánh giá về một tác phẩm truyện", "difficulty": "hard", "isLocked": false, "duration": 60 },
              { "id": "nguvan-6-8", "title": "Tự đánh giá: Ngày cuối cùng của chiến tranh", "difficulty": "easy", "isLocked": false, "duration": 30 },
              { "id": "nguvan-6-9", "title": "Hướng dẫn tự học", "difficulty": "easy", "isLocked": false, "duration": 20, "pages": [67] }
            ]
          },
          {
            "id": "nguvan-chu-de-7",
            "title": "Bài 7: Thơ tự do",
            "lessons": [
              { "id": "nguvan-7-1", "title": "Kiến thức ngữ văn", "difficulty": "easy", "isLocked": false, "duration": 30, "pages": [68] },
              { "id": "nguvan-7-2", "title": "Đất nước", "difficulty": "medium", "isLocked": false, "duration": 40 },
              { "id": "nguvan-7-3", "title": "Lính đảo hát tình ca trên đảo", "difficulty": "medium", "isLocked": false, "duration": 45 },
              { "id": "nguvan-7-4", "title": "Đi trong hương tràm", "difficulty": "medium", "isLocked": false, "duration": 45 },
              { "id": "nguvan-7-5", "title": "Mùa hoa mận", "difficulty": "medium", "isLocked": false, "duration": 50 },
              { "id": "nguvan-7-6", "title": "Thực hành tiếng Việt", "difficulty": "easy", "isLocked": false, "duration": 25, "pages": [79] },
              { "id": "nguvan-7-7", "title": "Viết bài văn nghị luận phân tích, đánh giá một tác phẩm thơ", "difficulty": "hard", "isLocked": false, "duration": 60 },
              { "id": "nguvan-7-8", "title": "Giới thiệu, đánh giá về một tác phẩm thơ", "difficulty": "hard", "isLocked": false, "duration": 60 },
              { "id": "nguvan-7-9", "title": "Tự đánh giá: Khoảng trời, hố bom", "difficulty": "easy", "isLocked": false, "duration": 30 },
              { "id": "nguvan-7-10", "title": "Hướng dẫn tự học", "difficulty": "easy", "isLocked": false, "duration": 20, "pages": [90] }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'bộ-sách-cánh-diều-11',
    title: 'Lớp 11 - Cánh Diều',
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
        name: 'Toán học 12',
        chapters: [
          {
            "id": "toan-chuong-1",
            "title": "Chương 1: Hàm số lượng giác và phương trình lượng giác",
            "lessons": [
              { "id": "toan-1-1", "title": "Bài 1: Góc lượng giác. Giá trị lượng giác của góc lượng giác", "difficulty": "medium", "isLocked": false, "duration": 40 },
              { "id": "toan-1-2", "title": "Bài 2: Các phép biến đổi lượng giác", "difficulty": "medium", "isLocked": false, "duration": 45 },
              { "id": "toan-1-3", "title": "Bài 3: Hàm số lượng giác và đồ thị", "difficulty": "medium", "isLocked": false, "duration": 50 },
              { "id": "toan-1-4", "title": "Bài 4: Phương trình lượng giác cơ bản", "difficulty": "hard", "isLocked": false, "duration": 60 },
              { "id": "toan-1-5", "title": "Bài tập cuối chương 1", "difficulty": "hard", "isLocked": false, "duration": 60 }
            ]
          },
          {
            "id": "toan-chuong-2",
            "title": "Chương 2: Dãy số. Cấp số cộng. Cấp số nhân",
            "lessons": [
              { "id": "toan-2-1", "title": "Bài 1: Dãy số", "difficulty": "medium", "isLocked": false, "duration": 40 },
              { "id": "toan-2-2", "title": "Bài 2: Cấp số cộng", "difficulty": "medium", "isLocked": false, "duration": 45 },
              { "id": "toan-2-3", "title": "Bài 3: Cấp số nhân", "difficulty": "medium", "isLocked": false, "duration": 50 },
              { "id": "toan-2-4", "title": "Bài tập cuối chương 2", "difficulty": "hard", "isLocked": false, "duration": 60 }
            ]
          },
          {
            "id": "toan-chuong-3",
            "title": "Chương 3: Giới hạn. Hàm số liên tục",
            "lessons": [
              { "id": "toan-3-1", "title": "Bài 1: Giới hạn của dãy số", "difficulty": "medium", "isLocked": false, "duration": 50 },
              { "id": "toan-3-2", "title": "Bài 2: Giới hạn của hàm số", "difficulty": "medium", "isLocked": false, "duration": 55 },
              { "id": "toan-3-3", "title": "Bài 3: Hàm số liên tục", "difficulty": "hard", "isLocked": false, "duration": 60 },
              { "id": "toan-3-4", "title": "Bài tập cuối chương 3", "difficulty": "hard", "isLocked": false, "duration": 60 }
            ]
          },
          {
            "id": "toan-chuong-4",
            "title": "Chương 4: Đường thẳng và mặt phẳng trong không gian. Quan hệ song song",
            "lessons": [
              { "id": "toan-4-1", "title": "Bài 1: Đường thẳng và mặt phẳng trong không gian", "difficulty": "medium", "isLocked": false, "duration": 50 },
              { "id": "toan-4-2", "title": "Bài 2: Hai đường thẳng song song trong không gian", "difficulty": "medium", "isLocked": false, "duration": 55 },
              { "id": "toan-4-3", "title": "Bài 3: Đường thẳng và mặt phẳng song song", "difficulty": "medium", "isLocked": false, "duration": 60 },
              { "id": "toan-4-4", "title": "Bài 4: Hai mặt phẳng song song", "difficulty": "medium", "isLocked": false, "duration": 55 },
              { "id": "toan-4-5", "title": "Bài 5: Hình lăng trụ và hình hộp", "difficulty": "hard", "isLocked": false, "duration": 60 },
              { "id": "toan-4-6", "title": "Bài 6: Phép chiếu song song. Hình biểu diễn của một hình không gian", "difficulty": "hard", "isLocked": false, "duration": 65 },
              { "id": "toan-4-7", "title": "Bài tập cuối chương 4", "difficulty": "hard", "isLocked": false, "duration": 70 }
            ]
          },
          {
            "id": "toan-chuong-5",
            "title": "Chương 5: Một số yếu tố thống kê và xác suất",
            "lessons": [
              { "id": "toan-5-1", "title": "Bài 1: Các số đặc trưng đo xu thế trung tâm cho mẫu số liệu ghép nhóm", "difficulty": "medium", "isLocked": false, "duration": 50 },
              { "id": "toan-5-2", "title": "Bài 2: Biến cố hợp và biến cố giao. Biến cố độc lập. Các quy tắc tính xác suất", "difficulty": "hard", "isLocked": false, "duration": 60 },
              { "id": "toan-5-3", "title": "Bài tập cuối chương 5", "difficulty": "hard", "isLocked": false, "duration": 60 }
            ]
          },
          {
            "id": "toan-chuong-6",
            "title": "Chương 6: Hàm số mũ và hàm số lôgarit",
            "lessons": [
              { "id": "toan-6-1", "title": "Bài 1: Phép tính lũy thừa với số mũ thực", "difficulty": "medium", "isLocked": false, "duration": 50 },
              { "id": "toan-6-2", "title": "Bài 2: Phép tính lôgarit", "difficulty": "medium", "isLocked": false, "duration": 55 },
              { "id": "toan-6-3", "title": "Bài 3: Hàm số mũ. Hàm số lôgarit", "difficulty": "hard", "isLocked": false, "duration": 60 },
              { "id": "toan-6-4", "title": "Bài 4: Phương trình, bất phương trình mũ và lôgarit", "difficulty": "hard", "isLocked": false, "duration": 65 },
              { "id": "toan-6-5", "title": "Bài tập cuối chương 6", "difficulty": "hard", "isLocked": false, "duration": 70 }
            ]
          },
          {
            "id": "toan-chuong-7",
            "title": "Chương 7: Đạo hàm",
            "lessons": [
              { "id": "toan-7-1", "title": "Bài 1: Định nghĩa đạo hàm. Ý nghĩa hình học của đạo hàm", "difficulty": "medium", "isLocked": false, "duration": 50 },
              { "id": "toan-7-2", "title": "Bài 2: Các quy tắc tính đạo hàm", "difficulty": "medium", "isLocked": false, "duration": 55 },
              { "id": "toan-7-3", "title": "Bài 3: Đạo hàm cấp hai", "difficulty": "hard", "isLocked": false, "duration": 60 },
              { "id": "toan-7-4", "title": "Bài tập cuối chương 7", "difficulty": "hard", "isLocked": false, "duration": 65 }
            ]
          },
          {
            "id": "toan-chuong-8",
            "title": "Chương 8: Quan hệ vuông góc trong không gian. Phép chiếu vuông góc",
            "lessons": [
              { "id": "toan-8-1", "title": "Bài 1: Hai đường thẳng vuông góc", "difficulty": "medium", "isLocked": false, "duration": 50 },
              { "id": "toan-8-2", "title": "Bài 2: Đường thẳng vuông góc với mặt phẳng", "difficulty": "medium", "isLocked": false, "duration": 55 },
              { "id": "toan-8-3", "title": "Bài 3: Góc giữa đường thẳng và mặt phẳng. Góc nhị diện", "difficulty": "medium", "isLocked": false, "duration": 60 },
              { "id": "toan-8-4", "title": "Bài 4: Hai mặt phẳng vuông góc", "difficulty": "medium", "isLocked": false, "duration": 55 },
              { "id": "toan-8-5", "title": "Bài 5: Khoảng cách", "difficulty": "medium", "isLocked": false, "duration": 60 },
              { "id": "toan-8-6", "title": "Bài 6: Hình lăng trụ đứng. Hình chóp đều. Thể tích của một số hình khối", "difficulty": "hard", "isLocked": false, "duration": 65 },
              { "id": "toan-8-7", "title": "Bài tập cuối chương 8", "difficulty": "hard", "isLocked": false, "duration": 70 }
            ]
          }
        ]
      },
      {
        id: 'vat-ly-11',
        name: 'Soạn văn 11',
        chapters: [
          {
            "id": "nguvan-chu-de-1",
            "title": "Bài 1: Thơ và truyện thơ",
            "lessons": [
              { "id": "nguvan-1-1", "title": "Kiến thức ngữ văn", "difficulty": "easy", "isLocked": false, "duration": 30, "pages": [11] },
              { "id": "nguvan-1-2", "title": "Sóng", "difficulty": "medium", "isLocked": false, "duration": 40 },
              { "id": "nguvan-1-3", "title": "Lời tiễn dặn", "difficulty": "medium", "isLocked": false, "duration": 45 },
              { "id": "nguvan-1-4", "title": "Tôi yêu em", "difficulty": "medium", "isLocked": false, "duration": 45 },
              { "id": "nguvan-1-5", "title": "Nỗi niềm tương tư", "difficulty": "medium", "isLocked": false, "duration": 50 },
              { "id": "nguvan-1-6", "title": "Thực hành tiếng Việt", "difficulty": "easy", "isLocked": false, "duration": 25, "pages": [24] },
              { "id": "nguvan-1-7", "title": "Viết bài nghị luận xã hội về một tư tưởng, đạo lí", "difficulty": "hard", "isLocked": false, "duration": 60 },
              { "id": "nguvan-1-8", "title": "Trình bày ý kiến đánh giá, bình luận về một tư tưởng, đạo lí", "difficulty": "hard", "isLocked": false, "duration": 60 },
              { "id": "nguvan-1-9", "title": "Tự đánh giá: Hôm qua tát nước đầu đình", "difficulty": "easy", "isLocked": false, "duration": 30 },
              { "id": "nguvan-1-10", "title": "Hướng dẫn tự học", "difficulty": "easy", "isLocked": false, "duration": 20, "pages": [34] }
            ]
          },
          {
            "id": "nguvan-chu-de-2",
            "title": "Bài 2: Thơ văn Nguyễn Du",
            "lessons": [
              { "id": "nguvan-2-1", "title": "Kiến thức ngữ văn", "difficulty": "easy", "isLocked": false, "duration": 30, "pages": [35] },
              { "id": "nguvan-2-2", "title": "Nguyễn Du – Cuộc đời và sự nghiệp", "difficulty": "medium", "isLocked": false, "duration": 40 },
              { "id": "nguvan-2-3", "title": "Trao duyên", "difficulty": "medium", "isLocked": false, "duration": 45 },
              { "id": "nguvan-2-4", "title": "Đọc Tiểu Thanh kí", "difficulty": "medium", "isLocked": false, "duration": 45 },
              { "id": "nguvan-2-5", "title": "Anh hùng tiếng đã gọi rằng", "difficulty": "medium", "isLocked": false, "duration": 50 },
              { "id": "nguvan-2-6", "title": "Thực hành tiếng Việt", "difficulty": "easy", "isLocked": false, "duration": 25, "pages": [52] },
              { "id": "nguvan-2-7", "title": "Viết bài nghị luận về một tác phẩm nghệ thuật", "difficulty": "hard", "isLocked": false, "duration": 60 },
              { "id": "nguvan-2-8", "title": "Giới thiệu một tác phẩm nghệ thuật", "difficulty": "hard", "isLocked": false, "duration": 60 },
              { "id": "nguvan-2-9", "title": "Tự đánh giá: Thề nguyền", "difficulty": "easy", "isLocked": false, "duration": 30 },
              { "id": "nguvan-2-10", "title": "Hướng dẫn tự học", "difficulty": "easy", "isLocked": false, "duration": 20, "pages": [63] }
            ]
          },
          {
            "id": "nguvan-chu-de-3",
            "title": "Bài 3: Truyện",
            "lessons": [
              { "id": "nguvan-3-1", "title": "Kiến thức ngữ văn", "difficulty": "easy", "isLocked": false, "duration": 30, "pages": [64] },
              { "id": "nguvan-3-2", "title": "Chí Phèo", "difficulty": "medium", "isLocked": false, "duration": 45 },
              { "id": "nguvan-3-3", "title": "Chữ người tử tù", "difficulty": "medium", "isLocked": false, "duration": 45 },
              { "id": "nguvan-3-4", "title": "Tấm lòng người mẹ", "difficulty": "medium", "isLocked": false, "duration": 50 },
              { "id": "nguvan-3-5", "title": "Thực hành tiếng Việt", "difficulty": "easy", "isLocked": false, "duration": 25, "pages": [91] },
              { "id": "nguvan-3-6", "title": "Viết bài nghị luận về một vấn đề đặt ra trong tác phẩm văn học", "difficulty": "hard", "isLocked": false, "duration": 60 },
              { "id": "nguvan-3-7", "title": "Thảo luận về một vấn đề xã hội đặt ra trong tác phẩm văn học", "difficulty": "hard", "isLocked": false, "duration": 60 },
              { "id": "nguvan-3-8", "title": "Tự đánh giá: Kép Tư Bền", "difficulty": "easy", "isLocked": false, "duration": 30 },
              { "id": "nguvan-3-9", "title": "Hướng dẫn tự học", "difficulty": "easy", "isLocked": false, "duration": 20, "pages": [101] }
            ]
          },
          {
            "id": "nguvan-chu-de-4",
            "title": "Bài 4: Văn bản thông tin",
            "lessons": [
              { "id": "nguvan-4-1", "title": "Kiến thức ngữ văn", "difficulty": "easy", "isLocked": false, "duration": 30, "pages": [102] },
              { "id": "nguvan-4-2", "title": "Phải coi luật pháp như khí trời để thở", "difficulty": "medium", "isLocked": false, "duration": 40 },
              { "id": "nguvan-4-3", "title": "Tạ Quang Bửu – người thầy thông thái", "difficulty": "medium", "isLocked": false, "duration": 45 },
              { "id": "nguvan-4-4", "title": "Tiếng Việt lớp trẻ bây giờ", "difficulty": "medium", "isLocked": false, "duration": 50 },
              { "id": "nguvan-4-5", "title": "Thực hành tiếng Việt", "difficulty": "easy", "isLocked": false, "duration": 25, "pages": [116] },
              { "id": "nguvan-4-6", "title": "Viết bài thuyết minh tổng hợp", "difficulty": "hard", "isLocked": false, "duration": 60 },
              { "id": "nguvan-4-7", "title": "Nghe bài thuyết minh tổng hợp", "difficulty": "medium", "isLocked": false, "duration": 40 },
              { "id": "nguvan-4-8", "title": "Tự đánh giá: Sông nước trong tiếng miền Nam", "difficulty": "easy", "isLocked": false, "duration": 30 },
              { "id": "nguvan-4-9", "title": "Hướng dẫn tự học", "difficulty": "easy", "isLocked": false, "duration": 20, "pages": [125] }
            ]
          },
          {
            "id": "nguvan-chu-de-5",
            "title": "Bài 5: Truyện ngắn",
            "lessons": [
              { "id": "nguvan-5-1", "title": "Kiến thức ngữ văn", "difficulty": "easy", "isLocked": false, "duration": 30, "pages": [3] },
              { "id": "nguvan-5-2", "title": "Trái tim Đan-kô", "difficulty": "medium", "isLocked": false, "duration": 40 },
              { "id": "nguvan-5-3", "title": "Một người Hà Nội", "difficulty": "medium", "isLocked": false, "duration": 45 },
              { "id": "nguvan-5-4", "title": "Tầng hai", "difficulty": "medium", "isLocked": false, "duration": 50 },
              { "id": "nguvan-5-5", "title": "Thực hành tiếng Việt", "difficulty": "easy", "isLocked": false, "duration": 25, "pages": [23] },
              { "id": "nguvan-5-6", "title": "Viết bài văn nghị luận về một tác phẩm truyện", "difficulty": "hard", "isLocked": false, "duration": 60 },
              { "id": "nguvan-5-7", "title": "Giới thiệu một tác phẩm truyện", "difficulty": "hard", "isLocked": false, "duration": 60 },
              { "id": "nguvan-5-8", "title": "Tự đánh giá: Nắng đẹp miền quê ngoại", "difficulty": "easy", "isLocked": false, "duration": 30 },
              { "id": "nguvan-5-9", "title": "Hướng dẫn tự học", "difficulty": "easy", "isLocked": false, "duration": 20, "pages": [35] }
            ]
          },
          {
            "id": "nguvan-chu-de-6",
            "title": "Bài 6: Thơ",
            "lessons": [
              { "id": "nguvan-6-1", "title": "Kiến thức ngữ văn", "difficulty": "easy", "isLocked": false, "duration": 30, "pages": [36] },
              { "id": "nguvan-6-2", "title": "Đây mùa thu tới", "difficulty": "medium", "isLocked": false, "duration": 40 },
              { "id": "nguvan-6-3", "title": "Sông Đáy", "difficulty": "medium", "isLocked": false, "duration": 45 },
              { "id": "nguvan-6-4", "title": "Đây thôn Vĩ Dạ", "difficulty": "medium", "isLocked": false, "duration": 45 },
              { "id": "nguvan-6-5", "title": "Tình ca ban mai", "difficulty": "medium", "isLocked": false, "duration": 50 },
              { "id": "nguvan-6-6", "title": "Thực hành tiếng Việt", "difficulty": "easy", "isLocked": false, "duration": 25, "pages": [44] },
              { "id": "nguvan-6-7", "title": "Viết bài văn nghị luận về một tác phẩm thơ", "difficulty": "hard", "isLocked": false, "duration": 60 },
              { "id": "nguvan-6-8", "title": "Giới thiệu một tác phẩm thơ", "difficulty": "hard", "isLocked": false, "duration": 60 },
              { "id": "nguvan-6-9", "title": "Tự đánh giá: Tràng giang", "difficulty": "easy", "isLocked": false, "duration": 30 },
              { "id": "nguvan-6-10", "title": "Hướng dẫn tự học", "difficulty": "easy", "isLocked": false, "duration": 20, "pages": [53] }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'bộ-sách-cánh-diều-12',
    title: 'Lớp 12 - Cánh Diều',
    description: 'Bộ sách giáo khoa Cánh Diều cho lớp 12',
    icon: 'tabler-book',
    color: '#FF6B6B',
    image: 'https://down-vn.img.susercontent.com/file/vn-11134208-7r98o-lx0irhiv4gd507',
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
        name: 'Toán học 12',
        chapters: [
          {
            "id": "toan-chuong-1",
            "title": "Chương 1: Ứng dụng đạo hàm để khảo sát và vẽ đồ thị của hàm số",
            "lessons": [
              { "id": "toan-1-1", "title": "Bài 1: Tính đơn điệu của hàm số", "difficulty": "medium", "isLocked": false, "duration": 40 },
              { "id": "toan-1-2", "title": "Bài 2: Giá trị lớn nhất và giá trị nhỏ nhất của hàm số", "difficulty": "medium", "isLocked": false, "duration": 45 },
              { "id": "toan-1-3", "title": "Bài 3: Đường tiệm cận của đồ thị hàm số", "difficulty": "medium", "isLocked": false, "duration": 50 },
              { "id": "toan-1-4", "title": "Bài 4: Khảo sát sự biến thiên và vẽ đồ thị của hàm số", "difficulty": "hard", "isLocked": false, "duration": 60 },
              { "id": "toan-1-5", "title": "Bài tập cuối chương 1", "difficulty": "hard", "isLocked": false, "duration": 60 }
            ]
          },
          {
            "id": "toan-chuong-2",
            "title": "Chương 2: Toạ độ vectơ trong không gian",
            "lessons": [
              { "id": "toan-2-1", "title": "Bài 1: Vectơ và các phép toán vectơ trong không gian", "difficulty": "medium", "isLocked": false, "duration": 45 },
              { "id": "toan-2-2", "title": "Bài 2: Toạ độ của vectơ", "difficulty": "medium", "isLocked": false, "duration": 50 },
              { "id": "toan-2-3", "title": "Bài 3: Biểu thức toạ độ của các phép toán vectơ", "difficulty": "hard", "isLocked": false, "duration": 60 },
              { "id": "toan-2-4", "title": "Bài tập cuối chương 2", "difficulty": "hard", "isLocked": false, "duration": 60 }
            ]
          },
          {
            "id": "toan-chuong-3",
            "title": "Chương 3: Các số đặc trưng đo mức độ phân tán cho mẫu số liệu ghép nhóm",
            "lessons": [
              { "id": "toan-3-1", "title": "Bài 1: Khoảng biến thiên, khoảng tứ phân vị của mẫu số liệu ghép nhóm", "difficulty": "medium", "isLocked": false, "duration": 50 },
              { "id": "toan-3-2", "title": "Bài 2: Phương sai, độ lệch chuẩn của mẫu số liệu ghép nhóm", "difficulty": "medium", "isLocked": false, "duration": 55 },
              { "id": "toan-3-3", "title": "Bài tập cuối chương 3", "difficulty": "hard", "isLocked": false, "duration": 60 }
            ]
          },
          {
            "id": "toan-chuong-4",
            "title": "Chương 4: Nguyên hàm. Tích phân",
            "lessons": [
              { "id": "toan-4-1", "title": "Bài 1: Nguyên hàm", "difficulty": "medium", "isLocked": false, "duration": 50 },
              { "id": "toan-4-2", "title": "Bài 2: Nguyên hàm của một số hàm số sơ cấp", "difficulty": "medium", "isLocked": false, "duration": 55 },
              { "id": "toan-4-3", "title": "Bài 3: Tích phân", "difficulty": "hard", "isLocked": false, "duration": 60 },
              { "id": "toan-4-4", "title": "Bài 4: Ứng dụng hình học của tích phân", "difficulty": "hard", "isLocked": false, "duration": 65 },
              { "id": "toan-4-5", "title": "Bài tập cuối chương 4", "difficulty": "hard", "isLocked": false, "duration": 70 }
            ]
          },
          {
            "id": "toan-chuong-5",
            "title": "Chương 5: Phương trình mặt phẳng, đường thẳng, mặt cầu trong không gian",
            "lessons": [
              { "id": "toan-5-1", "title": "Bài 1: Phương trình mặt phẳng", "difficulty": "medium", "isLocked": false, "duration": 50 },
              { "id": "toan-5-2", "title": "Bài 2: Phương trình đường thẳng", "difficulty": "medium", "isLocked": false, "duration": 55 },
              { "id": "toan-5-3", "title": "Bài 3: Phương trình mặt cầu", "difficulty": "hard", "isLocked": false, "duration": 60 },
              { "id": "toan-5-4", "title": "Bài tập cuối chương 5", "difficulty": "hard", "isLocked": false, "duration": 65 }
            ]
          },
          {
            "id": "toan-chuong-6",
            "title": "Chương 6: Một số yếu tố xác suất",
            "lessons": [
              { "id": "toan-6-1", "title": "Bài 1: Xác suất có điều kiện", "difficulty": "medium", "isLocked": false, "duration": 50 },
              { "id": "toan-6-2", "title": "Bài 2: Công thức xác suất toàn phần. Công thức Bayes", "difficulty": "hard", "isLocked": false, "duration": 60 },
              { "id": "toan-6-3", "title": "Bài tập cuối chương 6", "difficulty": "hard", "isLocked": false, "duration": 65 }
            ]
          }
        ]
      },
      {
        id: 'vat-ly-12',
        name: 'Soạn văn 12',
        chapters: [
          {
            "id": "nguvan-chu-de-1",
            "title": "Bài 1: Truyện truyền kì và truyện ngắn hiện đại",
            "lessons": [
              { "id": "nguvan-1-1", "title": "Tri thức Ngữ văn", "difficulty": "easy", "isLocked": false, "duration": 30, "pages": [12] },
              { "id": "nguvan-1-2", "title": "Chuyện chức phán sự đền Tản Viên", "difficulty": "medium", "isLocked": false, "duration": 40 },
              { "id": "nguvan-1-3", "title": "Muối của rừng", "difficulty": "medium", "isLocked": false, "duration": 45 },
              { "id": "nguvan-1-4", "title": "Thực hành đọc hiểu: Chiếc thuyền ngoài xa", "difficulty": "medium", "isLocked": false, "duration": 50, "pages": [33] },
              { "id": "nguvan-1-5", "title": "Thực hành tiếng Việt", "difficulty": "easy", "isLocked": false, "duration": 25, "pages": [33] },
              { "id": "nguvan-1-6", "title": "Viết bài nghị luận so sánh, đánh giá hai tác phẩm truyện", "difficulty": "hard", "isLocked": false, "duration": 60 },
              { "id": "nguvan-1-7", "title": "Trình bày về so sánh, đánh giá hai tác phẩm truyện", "difficulty": "hard", "isLocked": false, "duration": 60 },
              { "id": "nguvan-1-8", "title": "Tự đánh giá: Hai cõi U Minh", "difficulty": "easy", "isLocked": false, "duration": 30 },
              { "id": "nguvan-1-9", "title": "Hướng dẫn tự học", "difficulty": "easy", "isLocked": false, "duration": 20, "pages": [46] }
            ]
          },
          {
            "id": "nguvan-chu-de-2",
            "title": "Bài 2: Hài kịch",
            "lessons": [
              { "id": "nguvan-2-1", "title": "Tri thức Ngữ văn", "difficulty": "easy", "isLocked": false, "duration": 30, "pages": [47] },
              { "id": "nguvan-2-2", "title": "Quan thanh tra", "difficulty": "medium", "isLocked": false, "duration": 40 },
              { "id": "nguvan-2-3", "title": "Thực thi công lí", "difficulty": "medium", "isLocked": false, "duration": 45 },
              { "id": "nguvan-2-4", "title": "Thực hành đọc hiểu: Loạn đến nơi rồi", "difficulty": "medium", "isLocked": false, "duration": 50 },
              { "id": "nguvan-2-5", "title": "Thực hành tiếng Việt", "difficulty": "easy", "isLocked": false, "duration": 25, "pages": [71] },
              { "id": "nguvan-2-6", "title": "Viết báo cáo kết quả của bài tập dự án", "difficulty": "hard", "isLocked": false, "duration": 60 },
              { "id": "nguvan-2-7", "title": "Trình bày báo cáo kết quả của bài tập dự án", "difficulty": "hard", "isLocked": false, "duration": 60 },
              { "id": "nguvan-2-8", "title": "Tự đánh giá: Tiền tội nghiệp của tôi ơi", "difficulty": "easy", "isLocked": false, "duration": 30 },
              { "id": "nguvan-2-9", "title": "Hướng dẫn tự học", "difficulty": "easy", "isLocked": false, "duration": 20, "pages": [80] }
            ]
          },
          {
            "id": "nguvan-chu-de-3",
            "title": "Bài 3: Nhật kí, phóng sự, hồi kí",
            "lessons": [
              { "id": "nguvan-3-1", "title": "Tri thức Ngữ văn", "difficulty": "easy", "isLocked": false, "duration": 30, "pages": [81] },
              { "id": "nguvan-3-2", "title": "Nhật kí Đặng Thùy Trâm", "difficulty": "medium", "isLocked": false, "duration": 40 },
              { "id": "nguvan-3-3", "title": "Khúc tráng ca nhà giàn", "difficulty": "medium", "isLocked": false, "duration": 45 },
              { "id": "nguvan-3-4", "title": "Thực hành đọc hiểu: Quyết định khó khăn nhất", "difficulty": "medium", "isLocked": false, "duration": 50 },
              { "id": "nguvan-3-5", "title": "Thực hành tiếng Việt", "difficulty": "easy", "isLocked": false, "duration": 25, "pages": [100] },
              { "id": "nguvan-3-6", "title": "Viết bài nghị luận so sánh, đánh giá hai tác phẩm kí", "difficulty": "hard", "isLocked": false, "duration": 60 },
              { "id": "nguvan-3-7", "title": "Trình bày về so sánh, đánh giá hai tác phẩm kí", "difficulty": "hard", "isLocked": false, "duration": 60 },
              { "id": "nguvan-3-8", "title": "Tự đánh giá: Một lít nước mắt", "difficulty": "easy", "isLocked": false, "duration": 30 },
              { "id": "nguvan-3-9", "title": "Hướng dẫn tự học", "difficulty": "easy", "isLocked": false, "duration": 20, "pages": [108] }
            ]
          },
          {
            "id": "nguvan-chu-de-4",
            "title": "Bài 4: Văn tế, thơ",
            "lessons": [
              { "id": "nguvan-4-1", "title": "Tri thức Ngữ văn", "difficulty": "easy", "isLocked": false, "duration": 30, "pages": [109] },
              { "id": "nguvan-4-2", "title": "Văn tế nghĩa sĩ Cần Giuộc", "difficulty": "medium", "isLocked": false, "duration": 40 },
              { "id": "nguvan-4-3", "title": "Việt Bắc", "difficulty": "medium", "isLocked": false, "duration": 45 },
              { "id": "nguvan-4-4", "title": "Thực hành đọc hiểu: Lưu biệt khi xuất dương", "difficulty": "medium", "isLocked": false, "duration": 50 },
              { "id": "nguvan-4-5", "title": "Thực hành đọc hiểu: Tây Tiến", "difficulty": "medium", "isLocked": false, "duration": 50 },
              { "id": "nguvan-4-6", "title": "Thực hành tiếng Việt", "difficulty": "easy", "isLocked": false, "duration": 25, "pages": [126] },
              { "id": "nguvan-4-7", "title": "Viết bài nghị luận về một vấn đề có liên quan đến tuổi trẻ", "difficulty": "hard", "isLocked": false, "duration": 60 },
              { "id": "nguvan-4-8", "title": "Thuyết trình về một vấn đề của tuổi trẻ có liên quan đến cơ hội và thách thức đối với đất nước", "difficulty": "hard", "isLocked": false, "duration": 60 },
              { "id": "nguvan-4-9", "title": "Tự đánh giá: Mưa xuân", "difficulty": "easy", "isLocked": false, "duration": 30 },
              { "id": "nguvan-4-10", "title": "Hướng dẫn tự học", "difficulty": "easy", "isLocked": false, "duration": 20, "pages": [134] }
            ]
          },
          {
            "id": "nguvan-chu-de-5",
            "title": "Bài 5: Văn nghị luận",
            "lessons": [
              { "id": "nguvan-5-1", "title": "Tri thức Ngữ văn", "difficulty": "easy", "isLocked": false, "duration": 30, "pages": [135] },
              { "id": "nguvan-5-2", "title": "Văn học và tác dụng chiều sâu trong việc xây dựng nhân cách văn hóa con người", "difficulty": "medium", "isLocked": false, "duration": 40 },
              { "id": "nguvan-5-3", "title": "Toàn cầu hóa và bản sắc văn hóa dân tộc", "difficulty": "medium", "isLocked": false, "duration": 45 },
              { "id": "nguvan-5-4", "title": "Thực hành đọc hiểu: Phân tích bài thơ 'Việt Bắc'", "difficulty": "medium", "isLocked": false, "duration": 50 },
              { "id": "nguvan-5-5", "title": "Thực hành tiếng Việt", "difficulty": "easy", "isLocked": false, "duration": 25, "pages": [151] },
              { "id": "nguvan-5-6", "title": "Viết bài nghị luận về vai trò của văn học đối với tuổi trẻ", "difficulty": "hard", "isLocked": false, "duration": 60 },
              { "id": "nguvan-5-7", "title": "Nghe thuyết trình một vấn đề văn học", "difficulty": "medium", "isLocked": false, "duration": 40 },
              { "id": "nguvan-5-8", "title": "Tự đánh giá: Hẹn hò với định mệnh", "difficulty": "easy", "isLocked": false, "duration": 30 },
              { "id": "nguvan-5-9", "title": "Hướng dẫn tự học", "difficulty": "easy", "isLocked": false, "duration": 20, "pages": [159] }
            ]
          },
          {
            "id": "nguvan-chu-de-6",
            "title": "Bài 6: Thơ văn Nguyễn Ái Quốc - Hồ Chí Minh",
            "lessons": [
              { "id": "nguvan-6-1", "title": "Tri thức Ngữ văn", "difficulty": "easy", "isLocked": false, "duration": 30, "pages": [3] },
              { "id": "nguvan-6-2", "title": "Nguyễn Ái Quốc - Hồ Chí Minh - Cuộc đời và sự nghiệp", "difficulty": "medium", "isLocked": false, "duration": 40 },
              { "id": "nguvan-6-3", "title": "Tuyên ngôn Độc lập", "difficulty": "medium", "isLocked": false, "duration": 45 },
              { "id": "nguvan-6-4", "title": "Nhật kí trong tù: Ngắm trăng, Lai Tân", "difficulty": "medium", "isLocked": false, "duration": 50 },
              { "id": "nguvan-6-5", "title": "Thực hành đọc hiểu: Vi hành", "difficulty": "medium", "isLocked": false, "duration": 50 },
              { "id": "nguvan-6-6", "title": "Thực hành tiếng Việt", "difficulty": "easy", "isLocked": false, "duration": 25, "pages": [25] },
              { "id": "nguvan-6-7", "title": "Viết bài nghị luận về quan niệm yêu nước của tuổi trẻ", "difficulty": "hard", "isLocked": false, "duration": 60 },
              { "id": "nguvan-6-8", "title": "Nghe thuyết trình một vấn đề xã hội", "difficulty": "medium", "isLocked": false, "duration": 40 },
              { "id": "nguvan-6-9", "title": "Tự đánh giá: Cảnh rừng Việt Bắc", "difficulty": "easy", "isLocked": false, "duration": 30 },
              { "id": "nguvan-6-10", "title": "Hướng dẫn tự học", "difficulty": "easy", "isLocked": false, "duration": 20, "pages": [33] }
            ]
          },
          {
            "id": "nguvan-chu-de-7",
            "title": "Bài 7: Tiểu thuyết hiện đại",
            "lessons": [
              { "id": "nguvan-7-1", "title": "Tri thức Ngữ văn", "difficulty": "easy", "isLocked": false, "duration": 30, "pages": [34] },
              { "id": "nguvan-7-2", "title": "Hạnh phúc của một tang gia", "difficulty": "medium", "isLocked": false, "duration": 40 },
              { "id": "nguvan-7-3", "title": "Ánh sáng cứu rỗi", "difficulty": "medium", "isLocked": false, "duration": 45 },
              { "id": "nguvan-7-4", "title": "Thực hành đọc hiểu: Đêm trăng và cây sồi", "difficulty": "medium", "isLocked": false, "duration": 50 },
              { "id": "nguvan-7-5", "title": "Thực hành tiếng Việt", "difficulty": "easy", "isLocked": false, "duration": 25, "pages": [53] },
              { "id": "nguvan-7-6", "title": "Viết thư trao đổi công việc hoặc một vấn đề đáng quan tâm", "difficulty": "hard", "isLocked": false, "duration": 60 },
              { "id": "nguvan-7-7", "title": "Tranh luận về một vấn đề có những ý kiến trái ngược nhau", "difficulty": "hard", "isLocked": false, "duration": 60 },
              { "id": "nguvan-7-8", "title": "Tự đánh giá: Con người không thể bị đánh bại", "difficulty": "easy", "isLocked": false, "duration": 30 },
              { "id": "nguvan-7-9", "title": "Hướng dẫn tự học", "difficulty": "easy", "isLocked": false, "duration": 20, "pages": [63] }
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
