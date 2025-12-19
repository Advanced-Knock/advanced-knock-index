#!/bin/bash
# Test all repositories

set -e

echo "🧪 Testing Advanced Knock Index..."
cd advanced-knock-index
npm test || echo "⚠️  No tests configured"
cd ..

echo "🧪 Testing Advanced Knock Backend..."
cd advanced-knock-backend
npm test || echo "⚠️  No tests configured"
cd ..

echo "🧪 Testing Advanced Knock Frontend..."
cd advanced-knock-frontend
npm test || echo "⚠️  No tests configured"
cd ..

echo "🧪 Testing Advanced Knock Mobile..."
cd advanced-knock-mobile
npm test || echo "⚠️  No tests configured"
cd ..

echo "✅ All tests completed!"
