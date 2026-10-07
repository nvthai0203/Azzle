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

Chỉ làm trang Home 01 trong `index.html`. Các trang còn lại không làm.

Cả nhóm sửa cùng một file. Mỗi người chỉ thêm hoặc sửa đúng khối của mình, theo thứ tự từ trên xuống dưới.

### Member 1 — Nguyễn Văn Thái — Đầu trang

Header đã có sẵn. Làm tiếp các khối ngay bên dưới.

| Khối | Nội dung |
|---|---|
| Header | Logo, menu, nút Login và Sign up free |
| Hero | Tiêu đề “Simplify your SaaS solution with AI”, mô tả, hai nút, ảnh dashboard |
| Logo đối tác | Dòng chữ tin cậy và dải logo chạy ngang |
| Core features | 4 thẻ: Resource Flexibility, Managed Services, Web-Based Access, Resource Flexibility |

### Member 2 — Nguyễn Hoàng Đạo — Giữa trang

| Khối | Nội dung |
|---|---|
| Accessible to a wider audience | Ảnh và hai đoạn mô tả |
| Providing quick deploy solutions | Đoạn giới thiệu và 3 dòng có dấu check |
| Video | Ảnh funfact và nút Play |
| AI-powered that streamline tasks | Đoạn mô tả và hai số liệu 92%, 75% |

### Member 3 — Mai Thạch Anh — Cuối trang

| Khối | Nội dung |
|---|---|
| Pricing | Nút Monthly / Annually và 3 gói Beginner, Starter, Pro |
| FAQ | 3 câu hỏi đóng/mở và nút “Ask you questions” |
| Testimonials | Tiêu đề và các nhận xét của người dùng |
| Footer | Dải chữ “Start building software”, giới thiệu, cột link, form newsletter |
