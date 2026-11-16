---
name: Mockup sandbox isolation
description: Keep design previews independent of the legacy site's build tools.
---

Keep the mockup sandbox's Tailwind pipeline independent of the legacy main application's PostCSS configuration.

**Why:** The main app uses Tailwind 3 while the sandbox uses Tailwind 4. Inherited PostCSS configuration can break otherwise valid preview styles.

**How to apply:** Keep any preview configuration changes scoped to the sandbox. Do not upgrade or alter the main site's dependencies to make design previews work.
