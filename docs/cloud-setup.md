# Reusable cloud setup

The environment draft API could not confirm persistence during onboarding. These instructions are a repository fallback, not proof that the environment settings are saved or published.

Installation script (Node 22+, tested with Node 24):

```sh
#!/usr/bin/env bash
set -euo pipefail
cd /workspace/thejctcollective
npm ci --cache /workspace/.npm-cache --no-audit --no-fund
```

Startup instructions:

Use the existing `/workspace/thejctcollective` checkout. Each task is isolated; do not create a worktree unless explicitly requested. Dependencies can persist in a snapshot, but running servers must restart. From that directory run `npm run dev` (port 3000, all interfaces). Validate with local HTTP requests: homepage includes Clear thinking / Creative doing, the Studio/Expertise/Inquiries pages return 200, and `/work/brand-strategy-project` returns 404. Do not create public localhost preview links during onboarding.

Checks: `npm run lint`, `npm run build`, `npm run typecheck`. For a production static export run `npm run build` and serve `out/` with a static server; `npm start` is not supported for static exports. No secrets, database, or external services are required. Set `NEXT_PUBLIC_SITE_URL` only to the actual production origin before launch. See README for launch instructions; deployment requires explicit authorization.

Once the environment settings service is available, save these installation and startup fields there, then review and publish through the environment UI. This file alone does not register startup instructions.
