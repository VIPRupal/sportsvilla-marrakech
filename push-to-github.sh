#!/bin/bash
# Push Resend contact form back to GitHub for Cloudflare deployment

echo "🚀 Pushing Resend contact form to GitHub..."
echo ""

# Remove any lock file
rm -f .git/index.lock

# Stage all changes
git add -A

# Commit with a clear message
git commit -m "Restore Resend API contact form - awaiting Cloudflare env variables"

# Push to GitHub
git push origin main

echo ""
echo "✅ Done! Cloudflare will rebuild in 2-3 minutes."
echo ""
echo "📋 Next steps for your developer:"
echo "1. In Cloudflare Pages → Settings → Environment variables"
echo "2. Add: RESEND_API_KEY (from Resend dashboard)"
echo "3. Add: NOTIFICATION_EMAIL = Rupal@thevipgroups.com"
echo "4. Click 'Redeploy' to apply the variables"
echo "5. Test the form - emails will work!"
