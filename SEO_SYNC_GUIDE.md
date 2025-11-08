# SEO & Meta Tags Sync Guide

## Overview
Your landing page uses a **centralized SEO content system** that keeps your hero section and meta tags in sync.

## Single Source of Truth: `seo-content.ts`

All SEO-related text lives in **`client/src/data/seo-content.ts`**:

```typescript
export const seoContent = {
  pageTitle: "...",        // Browser tab & Google search results
  metaDescription: "...",  // Google search snippet
  heroTitle: "...",        // H1 heading on page
  heroSubtitle: "...",     // Hero subtitle
  ogTitle: "...",          // Facebook/WhatsApp share title
  ogDescription: "...",    // Facebook/WhatsApp share description
  keywords: [...],         // SEO keywords
}
```

## How It Works

### ✅ Automatic Updates
When you change `seoContent.heroTitle` or `seoContent.heroSubtitle`:
- **Hero section** automatically updates (imported by `villa-content.ts`)
- Page displays the new text immediately

### ⚠️ Manual Updates Required
When you change ANY field in `seo-content.ts`:
- You **MUST** update the matching meta tags in `client/index.html`
- Look for comments like: `<!-- SYNC WITH: client/src/data/seo-content.ts → pageTitle -->`
- Copy the exact text from `seo-content.ts` to the meta tag

## Why This Matters

**Google & Social Media Crawlers** read meta tags from the static HTML file (`index.html`), NOT from React components.

If you don't sync the files:
- ❌ Google Ads will show outdated text
- ❌ WhatsApp shares will display wrong preview
- ❌ Google search results won't match your page

## Step-by-Step: Updating SEO Content

### Example: Changing the Hero Title

1. **Edit `client/src/data/seo-content.ts`:**
   ```typescript
   export const seoContent = {
     heroTitle: "New Amazing Villa Title",  // ← Change this
     // ...
   }
   ```

2. **Hero section updates automatically** ✅ (No action needed)

3. **Update `client/index.html` manually:**
   - Find the line with comment: `<!-- SYNC WITH: ... → pageTitle -->`
   - Update the `<title>` tag to match
   - Find the line with comment: `<!-- SYNC WITH: ... → ogTitle -->`
   - Update the `<meta property="og:title">` to match

4. **Deploy to GitHub/Cloudflare** to make changes live

## Quick Reference: What Syncs Where

| seo-content.ts Field | Where to Update in index.html |
|---------------------|-------------------------------|
| `pageTitle` | `<title>` tag |
| `metaDescription` | `<meta name="description">` |
| `keywords` | `<meta name="keywords">` |
| `ogTitle` | `<meta property="og:title">` |
| `ogDescription` | `<meta property="og:description">` |
| `siteUrl` | All URL meta tags |
| `siteName` | `<meta property="og:site_name">` |
| `author` | `<meta name="author">` |

## Testing Your Changes

### 1. Visual Test
- Open your site
- Check if hero title/subtitle match what you set

### 2. Meta Tag Test
- View page source (Right-click → View Page Source)
- Search for `<meta` tags
- Verify content matches `seo-content.ts`

### 3. Google Preview Test
Use these tools to see how your page appears:
- **Google Rich Results Test**: https://search.google.com/test/rich-results
- **Facebook Sharing Debugger**: https://developers.facebook.com/tools/debug/
- **Twitter Card Validator**: https://cards-dev.twitter.com/validator

### 4. Lighthouse SEO Test
1. Open Chrome DevTools (F12)
2. Go to "Lighthouse" tab
3. Select "SEO" category
4. Click "Analyze page load"
5. Should score 90+/100

## Common Mistakes to Avoid

❌ **Changing hero text in `villa-content.ts` directly**
→ Change it in `seo-content.ts` instead

❌ **Forgetting to update index.html**
→ Always update both files when changing SEO text

❌ **Not testing social share previews**
→ Use Facebook/WhatsApp debugger tools before deploying

## Benefits of This System

✅ **Single source of truth** - All SEO text in one file  
✅ **Automatic hero updates** - Change once, updates everywhere  
✅ **Google Ads relevance** - Search ads match landing page  
✅ **Better social sharing** - WhatsApp/Facebook show correct preview  
✅ **SEO optimization** - Consistent messaging across all channels  

## Need Help?

If meta tags and hero section are out of sync:
1. Check `client/src/data/seo-content.ts` for current values
2. Compare with `client/index.html` meta tags
3. Update index.html to match seo-content.ts
4. Commit and push to GitHub
5. Wait for Cloudflare Pages to deploy
