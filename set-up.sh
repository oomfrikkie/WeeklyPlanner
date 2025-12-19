#!/usr/bin/env bash

set -e

echo "🚀 Setting up WeeklyPlanner (NestJS + React TS)"

# -------------------------------------------------------
# GLOBAL NPM PREFIX (SAFE & CROSS-SHELL)
# -------------------------------------------------------
echo "⚙️ Ensuring global npm prefix (~/.npm-global)..."

NPM_GLOBAL="$HOME/.npm-global"
mkdir -p "$NPM_GLOBAL"
npm config set prefix "$NPM_GLOBAL"

EXPORT_LINE='export PATH="$PATH:$HOME/.npm-global/bin"'

for file in "$HOME/.bashrc" "$HOME/.zshrc"; do
  if [ -f "$file" ] && ! grep -q ".npm-global/bin" "$file"; then
    echo "$EXPORT_LINE" >> "$file"
  fi
done

export PATH="$PATH:$HOME/.npm-global/bin"

echo "✔ npm global prefix configured"

# -------------------------------------------------------
# BACKEND SETUP
# -------------------------------------------------------
echo "📂 Entering backend folder..."
cd backend || { echo "❌ backend folder not found. Run 'nest new backend --skip-git' first."; exit 1; }

echo "📥 Installing backend dependencies..."
npm install

echo "🔐 Installing auth dependencies..."
npm install bcrypt
npm install -D @types/bcrypt

echo "📘 Installing Swagger..."
npm install @nestjs/swagger swagger-ui-express

echo "🗄️ Installing TypeORM + PostgreSQL..."
npm install @nestjs/typeorm typeorm pg

echo "✔ Backend setup complete"

cd ..

# -------------------------------------------------------
# FRONTEND SETUP
# -------------------------------------------------------
echo "🌐 Setting up frontend..."

if [ ! -d "frontend" ]; then
  echo "📦 Creating Vite React + TypeScript app..."
  npm create vite@latest frontend -- --template react-ts
fi

cd frontend || { echo "❌ frontend folder not found"; exit 1; }

echo "📥 Installing frontend dependencies..."
npm install

echo "➕ Installing axios + router..."
npm install axios react-router-dom

echo "✔ Frontend setup complete"

cd ..

# -------------------------------------------------------
# DONE
# -------------------------------------------------------
echo ""
echo "✨ Setup complete!"
echo ""
echo "▶ Backend:"
echo "   cd backend && npm run start:dev"
echo ""
echo "▶ Frontend:"
echo "   cd frontend && npm run dev"
echo ""
echo "📘 Swagger:"
echo "   http://localhost:3000/api"
echo ""
