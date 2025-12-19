#!/bin/bash
# Build all repositories in correct order

set -e

echo "🚀 Building Advanced Knock Index..."
cd advanced-knock-index
npm install
npm run build
cd ..

echo "🔨 Building Advanced Knock Backend..."
cd advanced-knock-backend
npm install
npm run build
cd ..

echo "🎨 Building Advanced Knock Frontend..."
cd advanced-knock-frontend
npm install
npm run build
cd ..

echo "📱 Building Advanced Knock Mobile..."
cd advanced-knock-mobile
npm install
npm run build
cd ..

echo "✅ All builds completed successfully!"
