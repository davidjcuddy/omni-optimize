export const scores = {
  seo: 78,
  aeo: 64,
  technical: 91,
};

export const webVitals = {
  lcp: { value: 1.8, unit: "s", threshold: 2.0, status: "good" as const },
  cls: { value: 0.05, unit: "", threshold: 0.1, status: "good" as const },
  inp: { value: 245, unit: "ms", threshold: 200, status: "poor" as const },
};

export const aemSyncStatus = {
  connected: true,
  server: "aem-prod.example.com",
  pendingUpdates: 3,
  lastSync: "2 min ago",
  logs: [
    { time: "14:32", action: "Meta description updated", page: "/products/cloud", status: "success" as const },
    { time: "14:28", action: "Schema markup pushed", page: "/about", status: "success" as const },
    { time: "14:15", action: "Alt text update failed", page: "/blog/ai-trends", status: "error" as const },
    { time: "13:55", action: "H1 tag optimized", page: "/services", status: "success" as const },
  ],
};

export const radarData = [
  { metric: "Expertise", score: 82, fullMark: 100 },
  { metric: "Search Intent", score: 70, fullMark: 100 },
  { metric: "Topical Authority", score: 65, fullMark: 100 },
  { metric: "Content Freshness", score: 88, fullMark: 100 },
];

export const schemaTable = [
  { type: "FAQ Schema", page: "/products/cloud", status: "valid", format: "JSON-LD" },
  { type: "HowTo Schema", page: "/docs/setup", status: "valid", format: "JSON-LD" },
  { type: "Article Schema", page: "/blog/ai-trends", status: "missing", format: "—" },
  { type: "Organization", page: "/about", status: "valid", format: "JSON-LD" },
  { type: "BreadcrumbList", page: "/products", status: "warning", format: "JSON-LD" },
];

export const aeoChecklist = [
  { check: "Citable Answer (40-60 words)", status: true, detail: "52 words in lead paragraph" },
  { check: "Question-Based H2/H3", status: true, detail: "3 of 5 headings are questions" },
  { check: "Factual Density Score", status: false, detail: "Below threshold — add statistics" },
  { check: "Extractable Tables/Lists", status: true, detail: "2 tables, 3 ordered lists found" },
  { check: "AI Crawler Access (robots.txt)", status: true, detail: "GPTBot, Google-Extended allowed" },
  { check: "llms.txt Present", status: false, detail: "File not found at /llms.txt" },
];

export const technicalIssues = [
  { severity: "critical" as const, message: "Missing alt text on 12 images", page: "/products/cloud", category: "Accessibility" },
  { severity: "critical" as const, message: "Touch target < 44x44px on mobile CTA", page: "/pricing", category: "WCAG 2.2" },
  { severity: "warning" as const, message: "Render-blocking CSS detected", page: "/blog/ai-trends", category: "Performance" },
  { severity: "warning" as const, message: "Duplicate H1 tags found", page: "/services", category: "SEO" },
  { severity: "info" as const, message: "HTTP/2 push not configured", page: "Global", category: "Performance" },
  { severity: "critical" as const, message: "301 redirect chain (3 hops)", page: "/old-products", category: "Crawl" },
  { severity: "warning" as const, message: "Largest image not using WebP/AVIF", page: "/about", category: "Performance" },
];

export const remediationItems = [
  {
    id: "rem-1",
    page: "/products/cloud",
    element: "Meta Description",
    current: '<meta name="description" content="Cloud products and services for your business needs.">',
    suggested: '<meta name="description" content="Enterprise cloud solutions: scalable hosting, CDN, and managed services. 99.99% uptime SLA. Start free trial today.">',
    reason: "Current description is generic. Suggested includes value props, specifics, and CTA.",
    status: "pending" as const,
  },
  {
    id: "rem-2",
    page: "/blog/ai-trends",
    element: "Article Schema",
    current: "<!-- No schema markup -->",
    suggested: `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "AI Trends in 2026",
  "author": { "@type": "Person", "name": "Jane Doe" },
  "datePublished": "2026-04-15"
}
</script>`,
    reason: "Missing Article schema. Adding structured data improves SERP rich results eligibility.",
    status: "pending" as const,
  },
  {
    id: "rem-3",
    page: "/about",
    element: "H1 Tag",
    current: "<h1>About Us</h1>",
    suggested: '<h1>About AcmeCorp — Enterprise Cloud & AI Solutions Since 2012</h1>',
    reason: "Current H1 is too generic. Suggested includes brand, keywords, and authority signals.",
    status: "approved" as const,
  },
];
