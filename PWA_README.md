# BizHKD PWA - Progressive Web App

## Tính năng PWA đã được tích hợp

### ✅ Đã hoàn thành:

1. **Web App Manifest** (`/public/manifest.json`)
   - Tên ứng dụng: BizHKD - AI Ghi Sổ Kế Toán Thông Minh
   - Short name: BizHKD
   - Theme color: #8b5cf6 (màu tím)
   - Background color: #0a0a0a (màu đen)
   - Display mode: standalone (hiển thị như app native)
   - Orientation: portrait-primary
   - Language: vi (Tiếng Việt)

2. **Service Worker** (`/public/sw.js`)
   - Cache static resources
   - Offline support
   - Automatic cache management
   - Cache versioning

3. **PWA Icons**
   - `/public/icon-192x192.svg` - Icon 192x192px
   - `/public/icon-512x512.svg` - Icon 512x512px
   - `/public/favicon.ico` - Favicon

4. **Meta Tags PWA**
   - Apple Touch Icons
   - Mobile web app capable
   - Theme color
   - Status bar styling
   - Microsoft tile configuration

5. **Next.js Configuration**
   - Service Worker headers
   - Manifest caching
   - PWA optimization

## Cách sử dụng PWA

### Trên Desktop:
1. Mở website trong Chrome/Edge
2. Click vào icon "Install" trên thanh địa chỉ
3. Hoặc vào Menu > Install App

### Trên Mobile:
1. Mở website trong Chrome/Safari
2. Tap "Add to Home Screen" từ menu
3. App sẽ xuất hiện trên màn hình chính

## Tính năng PWA

- **Offline Support**: Website vẫn hoạt động khi không có internet
- **App-like Experience**: Hiển thị như ứng dụng native
- **Fast Loading**: Cache resources để tải nhanh hơn
- **Push Notifications**: Có thể thêm tính năng thông báo đẩy
- **Background Sync**: Đồng bộ dữ liệu khi có internet trở lại

## Kiểm tra PWA

1. Mở Chrome DevTools
2. Vào tab "Application"
3. Kiểm tra:
   - Manifest
   - Service Workers
   - Storage (Cache)

## Lighthouse PWA Score

Chạy Lighthouse audit để kiểm tra điểm PWA:
- Installable: ✅
- PWA Optimized: ✅
- Offline functionality: ✅
