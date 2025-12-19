#!/bin/bash
# Deploy all repositories (coordination script)

set -e

echo "🚀 Deploying Advanced Knock Backend..."
cd advanced-knock-backend
# Add deployment commands here
echo "✅ Backend deployment completed"
cd ..

echo "🚀 Deploying Advanced Knock Frontend..."
cd advanced-knock-frontend
# Add deployment commands here
echo "✅ Frontend deployment completed"
cd ..

echo "🚀 Deploying Advanced Knock Mobile..."
cd advanced-knock-mobile
# Add deployment commands here
echo "✅ Mobile deployment completed"
cd ..

echo "✅ All deployments completed!"
