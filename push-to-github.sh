#!/bin/bash
# Quick script to push SEO changes to GitHub

echo "🚀 Pushing SEO meta tags to GitHub..."
echo ""

# Remove any lock file
rm -f .git/index.lock

# Stage all the new SEO files
git add client/src/data/seo-content.ts
git add client/src/data/villa-content.ts
git add client/index.html
git add SEO_SYNC_GUIDE.md
git add replit.md

# Commit with a clear message
git commit -m "Add comprehensive SEO meta tags with auto-sync system"

# Push to GitHub
git push origin main

echo ""
echo "✅ Done! Check Cloudflare Pages in 1-2 minutes for deployment."
