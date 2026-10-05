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
