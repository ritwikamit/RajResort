# Security & Privacy Requirements

## General
Static-first reduces the attack surface. Do not add accounts, databases or a custom booking engine without a concrete need.

## Headers
Configure and test CSP, HSTS (after HTTPS/domain readiness), X-Content-Type-Options, Referrer-Policy, Permissions-Policy and CSP `frame-ancestors`. Test fonts, image/CDN, map and form dependencies before enforcing a strict CSP.

## Forms, if any
Server-side validation and length limits, rate limiting, anti-spam protection, safe output rendering, secure delivery, no exposed API/SMTP credentials and a clear privacy notice. Avoid collecting sensitive information.

## External links
Clearly identify third-party booking providers. Use `rel="noopener noreferrer"` for new tabs. Do not pass personal information to providers automatically or embed third-party checkout without owner approval and privacy/security review.

## Repository and hosting
Minimal, updated dependencies; run dependency audit and secret scan; never commit `.env` or credentials; protect production branch; use preview deployments and least-privilege access; enable MFA on domain/hosting accounts.

## Privacy policy
Reflect what the site actually does. If forms, analytics, cookies or map embeds are added, disclose relevant collection and third-party processing. Obtain owner review.
