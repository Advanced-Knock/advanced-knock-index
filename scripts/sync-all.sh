#!/bin/bash
# Sync all repositories

set -e

echo "🔄 Syncing Advanced Knock Index..."
cd advanced-knock-index
git pull origin main
cd ..

echo "🔄 Syncing Advanced Knock Backend..."
cd advanced-knock-backend
git pull origin main || echo "⚠️  Repository not initialized"
cd ..

echo "🔄 Syncing Advanced Knock Frontend..."
cd advanced-knock-frontend
git pull origin main || echo "⚠️  Repository not initialized"
cd ..

echo "🔄 Syncing Advanced Knock Mobile..."
cd advanced-knock-mobile
git pull origin main || echo "⚠️  Repository not initialized"
cd ..

echo "✅ All repositories synced!"
