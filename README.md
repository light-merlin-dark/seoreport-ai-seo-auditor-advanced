# SEOReport.dev – Advanced AI SEO Auditor | 139-Point Deep Audit + Priority Fix Plan

**Full advanced report** from [SEOReport.dev](https://seoreport.dev). The same engine that runs 139 checks per site — fully unlocked with evidence, fix instructions, and an AI-generated executive narrative.

## What you get

- **Instant 0–100 overall score** + 4 domain scores (SEO, AI Readiness, Performance, Security)
- **All 139 findings with full evidence** — every issue, every affected URL, every header value, every fix instruction
- **Priority fix plan** — the top 5 issues ranked by impact and effort, with owner assignment and verification steps
- **AI executive narrative** — consultant-style summary of your site's technical SEO health and top opportunities
- **Coverage summary** — sitemap analysis, redirect chain details, evidence highlights, and derived signals
- **Full JSON output** pushed to Apify Dataset for automation and reporting pipelines

## What the engine checks (139 checks, 8 categories)

| Category | Weight | What we audit |
|---|---|---|
| **AI Readiness** | 22% | llms.txt, AI crawler access, FAQ/HowTo schema, answer blocks, content freshness, entity markup |
| **Access & Crawl** | 20% | Reachability, robots.txt, sitemap, indexability, crawl access, noindex conflicts |
| **Structured Data** | 14% | JSON-LD validity, schema conflicts, Organization/WebSite/Breadcrumb/FAQ schema |
| **Canonicalization & Redirects** | 13% | Canonical tags, redirect chains, redirect loops, trailing slashes, alternate host normalization |
| **Metadata & On-Page** | 13% | Title, meta description, H1, Open Graph, mobile parity, content structure |
| **Internal Architecture** | 8% | Internal links, crawl depth, hreflang structure, image discoverability |
| **Performance** | 5% | TTFB, compression, HTTP/2, CDN, browser resources, image optimization, render-blocking resources |
| **Security** | 5% | HSTS, CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, security.txt, vulnerability advisories |

## Free actor vs. Advanced actor

| | Free Actor | Advanced Actor |
|---|---|---|
| **Overall & domain scores** | ✅ | ✅ |
| **Findings shown** | 4 top findings only | **All 139 findings** |
| **Fix instructions** | ❌ Hidden | ✅ **Full detail for every issue** |
| **Evidence depth** | Abstracted (e.g., "HSTS: Missing") | **Concrete (e.g., full header values, actual URLs)** |
| **Priority fix plan** | ❌ Hidden | ✅ **Top 5 ranked by impact + effort** |
| **AI executive narrative** | ❌ Hidden | ✅ **Consultant-style summary** |
| **Coverage & sitemap analysis** | ❌ Hidden | ✅ **Full technical coverage report** |
| **Verification steps** | ❌ Hidden | ✅ **"How to confirm this fix worked"** |
| **Per-owner assignment** | ❌ Hidden | ✅ **Who should fix what (SEO eng, frontend, security, content)** |

## Perfect for

- 🏢 **Agencies** — deliver client-ready audits without manual analysis
- 🔧 **Developers** — get a ranked fix list you can execute this sprint
- 📊 **Consultants** — export structured data into your own reports and dashboards
- 🤖 **Automation** — chain with other actors for scheduled deep monitoring

## Input

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string | ✅ | Website URL or domain to audit |

## Output

The actor returns a structured JSON report with **all sections unlocked**:

```json
{
  "jobId": "abc-123",
  "targetUrl": "https://example.com",
  "score": {
    "overall": 87,
    "domainScores": {
      "seo": 92,
      "ai": 78,
      "performance": 85,
      "security": 95
    }
  },
  "view": {
    "sections": [
      { "key": "hero_summary", "visibility": "free", ... },
      { "key": "check_summary", "visibility": "free", ... },
      { "key": "top_findings", "visibility": "free", ... },
      { "key": "fix_priorities", "visibility": "paid", "state": "ready", ... },
      { "key": "coverage_summary", "visibility": "paid", "state": "ready", ... },
      { "key": "full_findings", "visibility": "paid", "state": "ready", ... },
      { "key": "artifacts", "visibility": "paid", "state": "ready", ... }
    ]
  }
}
```

**Key fields:**
- `score.overall` — 0-100 overall grade
- `score.domainScores` — per-category breakdown
- `view.sections` — all 7 sections with `state: "ready"` (nothing locked)
- `paidUnlock.unlocked` — `true`

## Pricing

This actor uses **Pay per Event**. You pay per report run.

**Want unlimited reports?**
→ Subscribe at [seoreport.dev/pricing](https://seoreport.dev/pricing) (starts at $19/mo)

## Contact

- **Email:** ops@seoreport.dev
- **X:** [@EnchantedRobot](https://x.com/EnchantedRobot)
- **Website:** [seoreport.dev](https://seoreport.dev)
