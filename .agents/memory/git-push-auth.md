---
name: GitHub push auth fallback
description: When gitPush() fails due to INDEX_LOCKED, fall back to shell git push with token in remote URL via $GITHUB_PERSONAL_ACCESS_TOKEN env var.
---

## Rule
If the `gitPush()` callback returns `INDEX_LOCKED`, remove all `.git/*.lock` files first (`find .git -name "*.lock" -delete`), then retry `gitPush()`. If it still fails, fall back to:

```bash
git remote set-url origin "https://${GITHUB_PERSONAL_ACCESS_TOKEN}@github.com/<owner>/<repo>.git"
git push origin main
```

**Why:** The Replit `gitPush()` callback uses the user's connected GitHub account and normally needs no manual token. A stale lock file can block it; clearing locks is the fix. The manual shell fallback with the env-var token is a last resort — the user should not need to re-enter their token each session.

**How to apply:** Always try `gitPush({})` first. Only use the shell fallback after clearing locks and retrying once.
