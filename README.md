# Azzle

Bài tập BC-Capstone_Tailwind làm theo mẫu [Azzle - AI Technology & Startup](https://azzle.netlify.app/).

## Cấu trúc

```text
Azzle/
├── index.html                 Trang chủ (Home 01)
├── About/
│   └── about.html
├── Services/
│   ├── services.html
│   └── service-details.html
├── Contact/
│   └── contact.html
├── Pages/
│   ├── Blogs/
│   │   ├── blog.html
│   │   └── blog-details.html
│   ├── Teams/
│   │   ├── teams.html
│   │   └── team-details.html
│   ├── FAQ/
│   │   ├── faq.html
│   │   └── faq-2.html
│   ├── Portfolio/
│   │   ├── portfolio.html
│   │   └── portfolio-details.html
│   ├── Pricing/
│   │   └── pricing.html
│   └── Utilities/
│       ├── error-404.html
│       ├── login.html
│       ├── signup.html
│       └── reset-password.html
└── assets/
    ├── css/
    │   ├── style.css
    │   └── flaticon/
    │       ├── flaticon.css
    │       └── Flaticon.woff2
    ├── js/
    ├── fonts/
    │   └── fonts.css
    └── images/
```

## Đường dẫn tài nguyên

File trong thư mục con phải lùi đủ cấp mới trỏ đúng `assets/`.

| Vị trí file | Đường dẫn CSS |
|---|---|
| `index.html` | `assets/css/style.css` |
| `About/`, `Contact/`, `Services/` | `../assets/css/style.css` |
| `Pages/Blogs/`, `Pages/FAQ/`, … | `../../assets/css/style.css` |

Icon Flaticon dùng `assets/css/flaticon/flaticon.css`. File font đi kèm là `Flaticon.woff2`, cùng thư mục với file CSS đó.

## Phân công

Chỉ làm Home 01.

### Member 1 - Nguyễn Văn Thái — Trang chủ và các khối tái sử dụng

Pricing và FAQ đã nằm trên trang chủ, làm một lần rồi gắn sang trang kia.

| File | Nội dung |
|---|---|
| `index.html` | Header, hero, dải logo đối tác, 4 tính năng, “Accessible to a wider audience”, “Quick deploy”, khối video/số liệu, pricing, FAQ, testimonial, footer |
| `Pages/Pricing/pricing.html` | Banner, 4 gói Free / Beginner / Starter / Pro, nút Monthly / Annually, FAQ |
| `Pages/FAQ/faq.html` | Banner, 8 câu hỏi đóng/mở, dải liên hệ cuối trang |
| `Pages/FAQ/faq-2.html` | Cùng nội dung FAQ, bố cục khác FAQ-1 |

### Member 2 - Nguyễn Hoàng Đạo — Giới thiệu, dịch vụ, liên hệ

| File | Nội dung |
|---|---|
| `About/about.html` | Banner, 4 số liệu (2K+, 95%, 40+, 73+), sứ mệnh, 4 giá trị cốt lõi, lưới thành viên, dải liên hệ |
| `Services/services.html` | Banner, 8 thẻ dịch vụ. Khối FAQ và testimonial copy từ Member 1 |
| `Services/service-details.html` | Banner, phần giới thiệu, preprocessing / predictive analytics, 3 nhóm ngành, số liệu 92% và 75%, quản lý dữ liệu, dải liên hệ |
| `Contact/contact.html` | Banner, email / điện thoại / mạng xã hội, form liên hệ, 3 văn phòng (Toronto, Sao Paulo, Bamako) |

### Member 3 - Mai Thạch Anh — Bài viết, đội ngũ, portfolio, tài khoản

Nhiều file hơn, nhưng chỉ 3 dạng: lưới thẻ, trang chi tiết, form giữa màn hình. Ba form tài khoản và trang 404 dùng chung một khung.

| File | Nội dung |
|---|---|
| `Pages/Blogs/blog.html` | Banner “Our Blog”, 6 bài (chuyên mục, ngày, tiêu đề, mô tả) |
| `Pages/Blogs/blog-details.html` | Ảnh bài viết, nội dung, thông tin tác giả |
| `Pages/Teams/teams.html` | Banner, 8 thành viên (tên, chức danh), khối “Join our team” |
| `Pages/Teams/team-details.html` | Ảnh, tên, chức danh, tiểu sử, mạng xã hội |
| `Pages/Portfolio/portfolio.html` | Banner, 6 dự án |
| `Pages/Portfolio/portfolio-details.html` | Ảnh dự án, mô tả, kết quả |
| `Pages/Utilities/login.html` | Form “Welcome back” |
| `Pages/Utilities/signup.html` | Form đăng ký |
| `Pages/Utilities/reset-password.html` | Form đặt lại mật khẩu |
| `Pages/Utilities/error-404.html` | Thông báo không tìm thấy trang, nút về trang chủ |
