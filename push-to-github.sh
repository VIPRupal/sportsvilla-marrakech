#!/bin/bash
# Push latest form fixes to GitHub for Cloudflare deployment

echo "🚀 Pushing latest code to GitHub..."
echo ""

# Remove any lock file
rm -f .git/index.lock

# Stage all changes
git add -A

# Commit with a clear message
git commit -m "Push latest form fixes and SEO updates to production"

# Push to GitHub
git push origin main

echo ""
echo "✅ Done! Cloudflare will rebuild in 2-3 minutes."
echo "The form should work after the deployment completes!"
