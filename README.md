# BizHKD - AI Ghi Sổ Kế Toán Thông Minh

## 📋 Mô tả dự án

BizHKD là trang web giới thiệu phần mềm AI ghi sổ kế toán thông minh dành cho Hộ kinh doanh. Trang web được thiết kế hiện đại, responsive và tối ưu SEO để thu hút khách hàng tiềm năng.

## ✨ Tính năng chính

### 🎨 Giao diện
- **Thiết kế hiện đại**: Sử dụng Bootstrap 5.3.2 và CSS tùy chỉnh
- **Responsive**: Tương thích mọi thiết bị (desktop, tablet, mobile)
- **Gradient đẹp mắt**: Sử dụng gradient màu sắc hiện đại
- **Animation mượt mà**: Hiệu ứng hover và scroll animation

### 🚀 Tính năng kỹ thuật
- **Smooth scrolling**: Cuộn mượt đến các section
- **Intersection Observer**: Animation khi scroll
- **Back to top**: Nút quay về đầu trang
- **Navbar effects**: Hiệu ứng navbar khi scroll
- **Play button**: Nút play tương tác cho demo

### 📱 Responsive Design
- **Mobile-first**: Thiết kế ưu tiên mobile
- **Breakpoints**: Tối ưu cho mọi kích thước màn hình
- **Touch-friendly**: Tương tác tốt trên thiết bị cảm ứng

## 🛠️ Công nghệ sử dụng

### Frontend
- **HTML5**: Semantic markup, SEO friendly
- **CSS3**: Custom properties, Flexbox, Grid, Animations
- **JavaScript ES6+**: Modern JavaScript features
- **Bootstrap 5.3.2**: CSS framework
- **Font Awesome 6.4.0**: Icon library

### Libraries & CDN
- **Google Fonts**: Inter font family
- **Bootstrap CDN**: CSS và JavaScript
- **Font Awesome CDN**: Icons

## 📁 Cấu trúc dự án

```
KH/
├── index.html              # Trang chủ chính
├── assets/
│   ├── css/
│   │   └── style.css      # CSS tùy chỉnh
│   └── js/
│       └── main.js        # JavaScript chính
├── agentcloud_agent.js    # Chatbot integration
└── README.md              # Tài liệu dự án
```

## 🎯 Các section chính

### 1. Header & Navigation
- Logo và brand name
- Menu navigation responsive
- Call-to-action buttons

### 2. Hero Section
- Tiêu đề chính với gradient text
- Thống kê ấn tượng (99% độ chính xác, 80% tiết kiệm thời gian)
- Buttons CTA chính
- Hình ảnh demo

### 3. Features Section
- 3 tính năng chính với icons
- Hover effects và animations
- Layout responsive

### 4. Demo Section
- Hình ảnh demo sản phẩm
- Nút play tương tác
- Mô tả quy trình hoạt động

### 5. Pricing Section
- 3 gói dịch vụ (Starter, Pro, Premium)
- Badge "Phổ biến nhất" cho gói Pro
- Hover effects và pricing details

### 6. CTA Section
- Call-to-action chính
- Gradient background
- Buttons liên hệ

### 7. Footer
- Thông tin công ty
- Links navigation
- Social media links
- Contact information

## 🚀 Cách sử dụng

### 1. Chạy trang web
```bash
# Mở file index.html trong trình duyệt
# Hoặc sử dụng local server
python -m http.server 8000
# Hoặc
npx serve .
```

### 2. Tùy chỉnh nội dung
- **Text content**: Chỉnh sửa trong `index.html`
- **Styling**: Chỉnh sửa trong `assets/css/style.css`
- **Functionality**: Chỉnh sửa trong `assets/js/main.js`

### 3. Thay đổi màu sắc
```css
:root {
    --primary-color: #0d6efd;      /* Màu chính */
    --success-color: #198754;      /* Màu thành công */
    --warning-color: #ffc107;      /* Màu cảnh báo */
    --info-color: #0dcaf0;         /* Màu thông tin */
}
```

## 📱 Responsive Breakpoints

```css
/* Large devices (desktops) */
@media (min-width: 992px) { ... }

/* Medium devices (tablets) */
@media (max-width: 991.98px) { ... }

/* Small devices (mobile) */
@media (max-width: 767.98px) { ... }

/* Extra small devices */
@media (max-width: 575.98px) { ... }
```

## 🎨 Custom CSS Classes

### Utility Classes
- `.text-gradient`: Text với gradient
- `.bg-gradient-primary`: Background gradient chính
- `.shadow-custom`: Shadow tùy chỉnh
- `.rounded-custom`: Border radius tùy chỉnh

### Animation Classes
- `.animate-fade-in-up`: Animation fade in từ dưới lên
- `.animate-fade-in-left`: Animation fade in từ trái
- `.animate-fade-in-right`: Animation fade in từ phải

### Hover Effects
- `.hover-lift`: Hiệu ứng nâng lên khi hover
- `.hover-scale`: Hiệu ứng phóng to khi hover

## 🔧 Tùy chỉnh JavaScript

### Các function chính
- `initSmoothScrolling()`: Khởi tạo smooth scrolling
- `initAnimations()`: Khởi tạo animations
- `initPlayButton()`: Khởi tạo nút play
- `handleNavbarScroll()`: Xử lý navbar scroll effect
- `handleBackToTop()`: Xử lý nút back to top

### Event Listeners
- Scroll events cho navbar và back to top
- Click events cho navigation links
- Click events cho play button

## 📊 SEO Optimization

### Meta Tags
- Title tối ưu với từ khóa chính
- Description chi tiết và hấp dẫn
- Keywords phù hợp
- Open Graph tags cho social media

### Semantic HTML
- Sử dụng các thẻ HTML5 semantic
- Heading hierarchy rõ ràng
- Alt text cho images
- Schema markup (có thể thêm)

### Performance
- Lazy loading cho images
- Minified CSS/JS
- Optimized images
- Fast loading times

## 🌐 Browser Support

- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+
- **Mobile browsers**: iOS Safari 14+, Chrome Mobile 90+

## 📈 Analytics & Tracking

### Google Analytics
```javascript
// Thêm Google Analytics tracking
gtag('event', 'page_view', {
    page_title: 'BizHKD - AI Ghi Sổ Kế Toán',
    page_location: window.location.href
});
```

### Facebook Pixel
```javascript
// Thêm Facebook Pixel tracking
fbq('track', 'PageView');
```

## 🔒 Security

- HTTPS required cho production
- Content Security Policy (CSP)
- XSS protection
- CSRF protection

## 📝 License

© 2025 BizHKD. All rights reserved.

## 📞 Liên hệ

- **Website**: https://bizgenie.vn
- **Email**: contact@bizgenie.vn
- **Phone**: 032 8866 539
- **Zalo**: 091 778 7708
- **Địa chỉ**: Số 4 Phan Huy Ôn, Phường Trung Mỹ Tây, TP.HCM

## 🚀 Deployment

### Production
1. Minify CSS và JavaScript
2. Optimize images
3. Enable gzip compression
4. Set up CDN
5. Configure caching headers

### Local Development
1. Clone repository
2. Mở `index.html` trong trình duyệt
3. Sử dụng local server để test
4. Edit files và refresh để xem thay đổi

---

**Lưu ý**: Đây là template landing page cho BizHKD. Để sử dụng trong production, hãy:
- Thay thế placeholder content với nội dung thực tế
- Cập nhật contact information
- Thêm Google Analytics và tracking
- Test trên nhiều thiết bị và trình duyệt
- Optimize performance và SEO
