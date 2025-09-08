#!/bin/bash

# Kích hoạt nvm và sử dụng Node.js 18
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Sử dụng Node.js 18
nvm use 18

# Kiểm tra phiên bản Node.js
echo "Node.js version: $(node --version)"
echo "npm version: $(npm --version)"

# Xóa node_modules cũ nếu có
if [ -d "node_modules" ]; then
    echo "Removing old node_modules..."
    rm -rf node_modules
fi

if [ -f "package-lock.json" ]; then
    echo "Removing old package-lock.json..."
    rm -f package-lock.json
fi

# Cài đặt dependencies
echo "Installing dependencies..."
npm install

echo "Installation completed!" 