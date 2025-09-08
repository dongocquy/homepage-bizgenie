#!/bin/bash

# Kích hoạt nvm và sử dụng Node.js 18
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Sử dụng Node.js 18
nvm use 18

# Kiểm tra phiên bản Node.js
echo "Node.js version: $(node --version)"
echo "npm version: $(npm --version)"

# Chạy ứng dụng development
npm run dev 