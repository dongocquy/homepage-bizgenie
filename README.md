# Homepage BizGenie.vn

Dự án website sử dụng Next.js 15 với TypeScript.

## Yêu cầu hệ thống

- Node.js 18.18.0 hoặc cao hơn
- npm 10.8.0 hoặc cao hơn

## Cài đặt

### 1. Cài đặt Node.js 18 bằng nvm (Khuyến nghị)

```bash
# Cài đặt nvm nếu chưa có
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Khởi động lại terminal hoặc chạy
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Cài đặt Node.js 18
nvm install 18
nvm use 18
```

### 2. Cài đặt dependencies

```bash
# Sử dụng script tự động
./scripts/install.sh

# Hoặc cài đặt thủ công
npm install
```

## Chạy ứng dụng

### Development mode

```bash
# Sử dụng script tự động
./scripts/dev.sh

# Hoặc chạy thủ công
npm run dev
```

Ứng dụng sẽ chạy tại: http://localhost:3000

### Production build

```bash
npm run build
npm start
```

## Scripts có sẵn

- `./scripts/install.sh` - Cài đặt dependencies với Node.js 18
- `./scripts/dev.sh` - Chạy ứng dụng development mode

## Cấu trúc dự án

```
src/
├── app/           # App Router (Next.js 13+)
├── components/    # React components
│   ├── layout/   # Layout components
│   ├── sections/ # Section components
│   └── ui/       # UI components
└── lib/          # Utility functions
```

## Lưu ý

- Luôn sử dụng Node.js 18 hoặc cao hơn để tránh lỗi compatibility
- Sử dụng nvm để quản lý phiên bản Node.js
- Nếu gặp lỗi, hãy xóa `node_modules` và `package-lock.json` rồi cài đặt lại
