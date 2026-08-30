# Get a full SEO audit with a fix plan

Full advanced report from [SEOReport.dev](https://seoreport.dev). The same 139-check engine as the hosted advanced report — unlocked findings, priority fix plan, and an AI executive narrative. **$12 per report.**

## What you get

- Instant 0–100 overall score plus SEO, AI readiness, performance, and security
- All 139 findings with evidence and fix instructions
- Priority fix plan (top issues by impact and effort)
- AI executive narrative
- One dataset row per run (`overview` view) plus the full unlocked JSON on the `OUTPUT` key

## What the engine checks

| Category | Weight | What we audit |
|---|---|---|
| AI Readiness | 22% | llms.txt, AI crawler access, FAQ/HowTo schema, answer blocks, content freshness, entity markup |
| Access & Crawl | 20% | Reachability, robots.txt, sitemap, indexability, crawl access, noindex conflicts |
| Structured Data | 14% | JSON-LD validity, schema conflicts, Organization/WebSite/Breadcrumb/FAQ schema |
| Canonicalization & Redirects | 13% | Canonical tags, redirect chains, loops, trailing slashes, host normalization |
| Metadata & On-Page | 13% | Title, meta description, H1, Open Graph, mobile parity, content structure |
| Internal Architecture | 8% | Internal links, crawl depth, hreflang, image discoverability |
| Performance | 5% | TTFB, compression, HTTP/2, CDN, image optimization, render-blocking resources |
| Security | 5% | HSTS, CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, security.txt |

## Free vs advanced

| | Free Actor | This Actor |
|---|---|---|
| Overall and domain scores | yes | yes |
| Findings shown | top free findings | all 139 |
| Fix instructions | hidden | full detail |
| Priority fix plan | hidden | top issues by impact and effort |
| AI executive narrative | hidden | consultant-style summary |
| Price | compute only | **$12 per report** |

## Input

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string | yes | Website URL or domain. Prefill is `https://example.com`. |

## Output (dataset `overview`)

```json
{
  "targetUrl": "https://example.com",
  "jobId": "abc-123",
  "overallScore": 87,
  "seoScore": 92,
  "aiScore": 78,
  "performanceScore": 85,
  "securityScore": 95,
  "paidUnlocked": true
}
```

The unlocked report JSON is stored on the run's `OUTPUT` key-value record.

## Pricing

Pay-per-event: **$12** per advanced report. Subscribe at [seoreport.dev/pricing](https://seoreport.dev/pricing) for unlimited hosted reports.

## Contact

- Email: ops@seoreport.dev
- X: [@EnchantedRobot](https://x.com/EnchantedRobot)
- Website: [seoreport.dev](https://seoreport.dev)
