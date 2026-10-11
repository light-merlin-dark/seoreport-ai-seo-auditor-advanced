# Get a full SEO audit with a fix plan

Full advanced report from [SEOReport.dev](https://seoreport.dev). The same engine as the hosted advanced report — every finding unlocked, priority fix plan, and an AI executive narrative. **$12 per report.**

## What you get

- Instant 0–100 overall score plus SEO, AI readiness, performance, and security
- Every finding the hosted advanced report contains, with evidence and fix instructions
- Priority fix plan (top issues by impact and effort)
- AI executive narrative
- One dataset row per run (`overview` view) plus the full unlocked JSON on the `OUTPUT` key

## What the engine checks

| Category | What we audit |
|---|---|
| AI Readiness | llms.txt, AI crawler access, FAQ/HowTo schema, answer blocks, content freshness, entity markup |
| Access & Crawl | Reachability, robots.txt, sitemap, indexability, crawl access, noindex conflicts |
| Structured Data | JSON-LD validity, schema conflicts, Organization/WebSite/Breadcrumb/FAQ schema |
| Canonicalization & Redirects | Canonical tags, redirect chains, loops, trailing slashes, host normalization |
| Metadata & On-Page | Title, meta description, H1, Open Graph, mobile parity, content structure |
| Internal Architecture | Internal links, crawl depth, hreflang, image discoverability |
| Performance | TTFB, compression, HTTP/2, CDN, image optimization, render-blocking resources |
| Security | HSTS, CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, security.txt |

## Examples

- [Get a full SEO audit with a fix plan](https://apify.com/seoreport.dev/seoreport-dev-ai-seo-auditor-advanced/examples/full-seo-audit-fix-plan)
- [Run an agency-ready client SEO audit](https://apify.com/seoreport.dev/seoreport-dev-ai-seo-auditor-advanced/examples/agency-client-seo-audit)

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

## Run it from the API or an AI agent

One call runs the audit and returns the `overview` row:

```bash
curl -X POST \
  "https://api.apify.com/v2/acts/seoreport.dev~seoreport-dev-ai-seo-auditor-advanced/run-sync-get-dataset-items" \
  -H "Authorization: Bearer $APIFY_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"url": "https://example.com"}'
```

AI agents can call it through Apify's MCP server:
`https://mcp.apify.com/?tools=seoreport.dev/seoreport-dev-ai-seo-auditor-advanced`

## Pricing

**$12 per report.** One run is one report.

For recurring hosted reports, see the plans at [seoreport.dev/pricing](https://seoreport.dev/pricing).

## Contact

- Email: ops@seoreport.dev
- X: [@EnchantedRobot](https://x.com/EnchantedRobot)
- Website: [seoreport.dev](https://seoreport.dev)
