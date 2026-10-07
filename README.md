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

Cả nhóm sửa cùng file `index.html`. Mỗi khối nằm giữa một cặp comment `MEMBER-x:START` và `MEMBER-x:END`. Chỉ sửa bên trong cặp của mình, không format cả file, để Git gộp nhánh mà không đụng nhau.

| Thành viên | Cặp comment |
|---|---|
| Nguyễn Văn Thái | `MEMBER-1` |
| Nguyễn Hoàng Đạo | `MEMBER-2` |
| Mai Thạch Anh | `MEMBER-3` |

### Member 1 — Nguyễn Văn Thái — Đầu trang

| Khối | Mốc trong `index.html` | Nội dung |
|---|---|---|
| Header | `MEMBER-1:START header` | Logo, menu, nút Login và Sign up free |
| Hero | `MEMBER-1:START hero` | Tiêu đề “Simplify your SaaS solution with AI”, mô tả, hai nút, ảnh dashboard |
| Logo đối tác | `MEMBER-1:START brands` | Dòng chữ tin cậy và dải logo chạy ngang |
| Core features | `MEMBER-1:START features` | 4 thẻ: Resource Flexibility, Managed Services, Web-Based Access, Resource Flexibility |

### Member 2 — Nguyễn Hoàng Đạo — Giữa trang

| Khối | Mốc trong `index.html` | Nội dung |
|---|---|---|
| Accessible to a wider audience | `MEMBER-2:START audience` | Ảnh và hai đoạn mô tả |
| Providing quick deploy solutions | `MEMBER-2:START deploy` | Đoạn giới thiệu và 3 dòng có dấu check |
| Video | `MEMBER-2:START video` | Ảnh funfact và nút Play |
| AI-powered that streamline tasks | `MEMBER-2:START stats` | Đoạn mô tả và hai số liệu 92%, 75% |

### Member 3 — Mai Thạch Anh — Cuối trang

| Khối | Mốc trong `index.html` | Nội dung |
|---|---|---|
| Pricing | `MEMBER-3:START pricing` | Nút Monthly / Annually và 3 gói Beginner, Starter, Pro |
| FAQ | `MEMBER-3:START faq` | 3 câu hỏi đóng/mở và nút “Ask you questions” |
| Testimonials | `MEMBER-3:START testimonials` | Tiêu đề và các nhận xét của người dùng |
| Footer | `MEMBER-3:START footer` | Dải chữ “Start building software”, giới thiệu, cột link, form newsletter |
