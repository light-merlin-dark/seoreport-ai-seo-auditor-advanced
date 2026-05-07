# SEOReport.dev – Advanced AI SEO Audit | Full Report + Priority Fixes

**Full advanced report** from [SEOReport.dev](https://seoreport.dev). Everything the free preview shows — plus the complete action plan.

## What you get

- **Instant 0–100 overall score** + 4 domain scores (SEO, AI Readiness, Performance, Security)
- **Complete findings with full evidence** — every issue, every affected URL, every header value
- **Priority fix plan** — ranked by impact and effort, with verification steps
- **Per-page evidence clusters** — see exactly what to fix on each page
- **AI executive narrative** — consultant-style summary of top issues and opportunities
- **Full JSON output** pushed to Apify Dataset for automation and reporting pipelines

## What makes this different from the free actor

| | Free Actor | This Advanced Actor |
|---|---|---|
| **Score** | ✅ | ✅ |
| **Top findings (4-6)** | ✅ | ✅ |
| **Full findings (all issues)** | ❌ Locked | ✅ Unlocked |
| **Fix instructions** | ❌ Locked | ✅ Full detail |
| **Priority ranking** | ❌ Locked | ✅ Ranked by impact |
| **Per-page evidence** | ❌ Locked | ✅ Every page |
| **AI executive narrative** | ❌ Locked | ✅ Included |

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
      { "key": "top_findings", "visibility": "free", ... },
      { "key": "fix_priorities", "visibility": "paid", "state": "ready", ... },
      { "key": "full_findings", "visibility": "paid", "state": "ready", ... },
      { "key": "coverage_summary", "visibility": "paid", "state": "ready", ... }
    ]
  }
}
```

**Key fields:**
- `score.overall` — 0-100 overall grade
- `score.domainScores` — per-category breakdown
- `view.sections` — all sections with `state: "ready"` (nothing locked)
- `paidUnlock.unlocked` — `true`

## Pricing

This actor uses **Pay per Event**. You pay per report run.

**Want unlimited reports?**
→ Subscribe at [seoreport.dev/pricing](https://seoreport.dev/pricing) (starts at $19/mo)

## Contact

- **Email:** ops@seoreport.dev
- **X:** [@EnchantedRobot](https://x.com/EnchantedRobot)
- **Website:** [seoreport.dev](https://seoreport.dev)
