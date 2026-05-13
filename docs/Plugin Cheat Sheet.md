# Plugin Cheat Sheet

Drew's installed plugins, their skills, and example prompts you can copy/paste. Skills are how you "use" a plugin — just describe what you want and the matching skill triggers automatically.

Generated: May 9, 2026

---

## Quick reference

| Plugin | What it's for | External services it talks to |
|---|---|---|
| **nimble** | Live web data, business research, healthcare, SEO, talent | Nimble API (web search & extraction) |
| **brightdata** | Alt web scraping & SERP, structured data feeds | Bright Data API |
| **enterprise-search** | Search across all your connected tools | Whatever connectors you have |
| **productivity** | Tasks, daily planning, working memory | Local CLAUDE.md + connectors |
| **sales** | Account research, call prep, pipeline review, outreach | CRM / Clay / SimilarWeb / ZoomInfo |
| **marketing** | Content, campaigns, brand review, SEO audits, email | HubSpot / SimilarWeb |
| **legal** | NDA triage, contract review, vendor checks | Box / Egnyte |
| **finance** | Journal entries, reconciliation, close, SOX, variance | BigQuery |
| **data** | SQL, analysis, dashboards, statistical work | BigQuery / Definite |
| **product-management** | Specs, roadmaps, sprint plans, brainstorming | Asana |
| **design** | Critique, design systems, UX copy, accessibility, research | Asana |
| **pdf-viewer** | Open, annotate, sign, fill PDFs interactively | Local files |
| **cowork-plugin-management** | Build/customize plugins | None |

Plus core tooling: **Gmail**, **Google Calendar**, **Google Drive**, **Computer Use** (control desktop apps), **Claude in Chrome** (control browser).

---

## nimble — live web data

Real-time web search and structured extraction. Powers most "research X" or "find Y" requests.

| Skill | Use when you want to… | Example prompt |
|---|---|---|
| `nimble:nimble-web-expert` | Pull data from any URL, scrape a page, or search the web | "Get the pricing from stripe.com/pricing" |
| `nimble:company-deep-dive` | Full 360° report on a single company | "Tell me about Anthropic" |
| `nimble:competitor-intel` | Monitor multiple competitors for fresh signals | "What are my competitors Vercel and Netlify doing this week?" |
| `nimble:competitor-positioning` | Compare competitor messaging and homepages | "Compare positioning between Linear and Asana" |
| `nimble:meeting-prep` | Brief on attendees before a meeting | "Prep me for my call with Acme Corp tomorrow with Jane Smith and John Doe" |
| `nimble:market-finder` | List every business of a type in a geography | "Find all SaaS companies in Austin doing developer tools" |
| `nimble:local-places` | Discover and rank local businesses with reviews | "Map every coffee shop in SoHo" |
| `nimble:talent-sourcing` | Find candidates for a role | "Find me 20 senior backend engineers in Berlin" |
| `nimble:seo-intel` | Keyword research, rank tracking, content gap analysis | "Run an SEO audit on amberwaves.com" |
| `nimble:healthcare-providers-extract` | Pull practitioners from a practice site | "Extract all the doctors from clevelandclinic.org" |
| `nimble:healthcare-providers-enrich` | Fill gaps in a provider list | "Add phone numbers to this list of doctors" |
| `nimble:healthcare-providers-verify` | Validate against NPI registry | "Verify these practitioners are still licensed" |
| `nimble:nimble-agent-builder` | Build a reusable extraction workflow | "Build me a reusable scraper for Zillow listings" |

---

## brightdata — alternative web data

Similar coverage to Nimble; install/auth separately if you want both.

| Skill | Use when you want to… | Example prompt |
|---|---|---|
| `brightdata-plugin:bright-data-mcp` | Default tool for any web scraping/search | "Scrape this URL with Bright Data" |
| `brightdata-plugin:scrape` | Clean markdown/HTML/JSON from a URL | "Scrape this page as markdown" |
| `brightdata-plugin:search` | SERP results from Google/Bing/Yandex | "Search Google for 'small batch coffee roaster'" |
| `brightdata-plugin:data-feeds` | Structured data from 40+ platforms | "Pull product details from this Amazon link" |
| `brightdata-plugin:scraper-builder` | Build a production scraper for any site | "Build me a scraper for product listings on Etsy" |
| `brightdata-plugin:competitive-intel` | Real-time competitive intelligence | "Track pricing changes at my top 3 competitors" |
| `brightdata-plugin:design-mirror` | Replicate a site's visual style | "Make my app's frontend look like Linear's" |
| `brightdata-plugin:seo-audit` | Live-data SEO audit | "Audit my SEO using real SERP data" |

---

## sales — full deal lifecycle

| Skill | Example prompt |
|---|---|
| `sales:account-research` | "Research Acme Corp before I reach out" |
| `sales:call-prep` | "Prep me for my call with Acme tomorrow" |
| `sales:call-summary` | "Process these call notes and draft a follow-up email" *(paste notes after)* |
| `sales:competitive-intelligence` | "Build a battlecard against Salesforce" |
| `sales:create-an-asset` | "Make a one-pager for Acme based on what we discussed" |
| `sales:daily-briefing` | "Morning briefing — what's on my plate today" |
| `sales:draft-outreach` | "Write a cold email to the VP of Eng at Acme" |
| `sales:forecast` | "Build my Q2 forecast from this pipeline CSV" |
| `sales:pipeline-review` | "Run my weekly pipeline review" |

---

## marketing — campaigns and content

| Skill | Example prompt |
|---|---|
| `marketing:brand-review` | "Review this draft against our brand voice" *(paste draft)* |
| `marketing:campaign-plan` | "Plan a product launch campaign for our new feature" |
| `marketing:competitive-brief` | "Build a competitive brief on HubSpot vs us" |
| `marketing:content-creation` | "Write a blog post on AI agents for marketers" |
| `marketing:draft-content` | "Draft a LinkedIn post announcing our funding" |
| `marketing:email-sequence` | "Design a 5-email onboarding sequence for new signups" |
| `marketing:performance-report` | "Build last month's marketing performance report" |
| `marketing:seo-audit` | "Audit our site's SEO and find quick wins" |

---

## legal — contracts and risk

| Skill | Example prompt |
|---|---|
| `legal:triage-nda` | "Triage this NDA: GREEN/YELLOW/RED?" *(paste NDA)* |
| `legal:review-contract` | "Review this MSA against our playbook" |
| `legal:vendor-check` | "What do we have signed with AWS? Any gaps?" |
| `legal:compliance-check` | "Compliance check: launching a feature that collects health data" |
| `legal:legal-risk-assessment` | "Assess the risk on this clause" |
| `legal:legal-response` | "Draft a response to this data subject request" |
| `legal:meeting-briefing` | "Brief me before the board contract review" |
| `legal:brief` | "Daily legal brief — anything urgent?" |
| `legal:signature-request` | "Pre-sig checklist on this final contract" |

---

## finance — close, controls, statements

| Skill | Example prompt |
|---|---|
| `finance:journal-entry` / `journal-entry-prep` | "Book a $50k accrual for AWS, monthly" |
| `finance:reconciliation` | "Run a bank rec for April" |
| `finance:close-management` | "Plan the May close calendar" |
| `finance:financial-statements` | "Generate April P&L with variance commentary" |
| `finance:variance-analysis` | "Decompose the COGS variance vs. budget" |
| `finance:sox-testing` / `audit-support` | "Pull a SOX sample for revenue recognition Q1" |

---

## data — SQL and analysis

| Skill | Example prompt |
|---|---|
| `data:analyze` | "Why did signups drop last week?" |
| `data:write-query` / `sql-queries` | "Write a query to get DAU by week from events table" |
| `data:explore-data` | "Profile this CSV — null rates, distributions" |
| `data:statistical-analysis` | "Run a t-test on conversion between A and B" |
| `data:create-viz` / `data-visualization` | "Chart this trend with matplotlib" |
| `data:build-dashboard` | "Turn these query results into a self-contained HTML dashboard" |
| `data:validate-data` | "QA this analysis before I share with the exec team" |
| `data:data-context-extractor` | "Help me create a data skill for our warehouse" |

---

## product-management

| Skill | Example prompt |
|---|---|
| `product-management:write-spec` | "Write a PRD for a notifications redesign" |
| `product-management:roadmap-update` | "Add this initiative to the roadmap and tell me what slips" |
| `product-management:sprint-planning` | "Plan our next sprint — Drew, Sam, Priya, 2 weeks, 1 day PTO each" |
| `product-management:metrics-review` | "Run our weekly metrics review" |
| `product-management:competitive-brief` | "Build a competitive brief on Notion's AI features" |
| `product-management:synthesize-research` | "Synthesize these 8 user interviews into themes" |
| `product-management:stakeholder-update` | "Write this week's update for leadership" |
| `product-management:brainstorm` / `product-brainstorming` | "Brainstorm: how do we make onboarding faster?" |

---

## design

| Skill | Example prompt |
|---|---|
| `design:design-critique` | "Review this mockup" *(attach screenshot)* |
| `design:accessibility-review` | "Check this design for WCAG 2.1 AA compliance" |
| `design:design-system` | "Audit our design system for naming inconsistencies" |
| `design:design-handoff` | "Generate handoff specs for this screen" |
| `design:ux-copy` | "What should this empty state say?" |
| `design:user-research` | "Plan a usability test for our checkout" |
| `design:research-synthesis` | "Synthesize these support tickets into themes" |

---

## productivity

| Skill | Example prompt |
|---|---|
| `productivity:start` | "Initialize the productivity system" |
| `productivity:update` | "Sync my tasks and refresh memory" |
| `productivity:task-management` | "What tasks do I have open?" |
| `productivity:memory-management` | "Remember that 'AW' = Amber Waves" |

---

## enterprise-search

| Skill | Example prompt |
|---|---|
| `enterprise-search:search` | "Find that doc about Q3 OKRs" |
| `enterprise-search:digest` | "What did I miss this week across email, Slack, and Asana?" |

---

## pdf-viewer

| Skill | Example prompt |
|---|---|
| `pdf-viewer:open` | "Open this PDF" |
| `pdf-viewer:annotate` | "Annotate this contract — markup the risky clauses" |
| `pdf-viewer:sign` | "Place my signature on page 4 of this PDF" |
| `pdf-viewer:fill-form` | "Fill out this PDF form interactively" |

---

## cowork-plugin-management

| Skill | Example prompt |
|---|---|
| `cowork-plugin-management:create-cowork-plugin` | "Help me build a new plugin for our team's tools" |
| `cowork-plugin-management:cowork-plugin-customizer` | "Customize the sales plugin for our org" |

---

## anthropic-skills (always available)

These don't need any plugin — they ship with the app.

| Skill | When it triggers |
|---|---|
| `docx` | Anything involving Word docs |
| `xlsx` | Anything involving spreadsheets |
| `pptx` | Anything involving slide decks |
| `pdf` | Anything involving PDFs |
| `schedule` | Set up scheduled / recurring tasks |
| `setup-cowork` | Initial Cowork onboarding |
| `consolidate-memory` | Clean up your memory files |
| `skill-creator` | Create or modify skills |
| `requirement-check` | Verify nothing was missed in a multi-part request |

---

## How to actually invoke a skill

You almost never type the skill name. Just describe what you want — Claude picks the matching skill.

- "Tell me about Anthropic" → `nimble:company-deep-dive`
- "Plan a campaign for Q3" → `marketing:campaign-plan`
- "Triage this NDA" → `legal:triage-nda`
- "Why did signups drop?" → `data:analyze`

If you want to force a specific skill, type its slash command (e.g. `/nimble:company-deep-dive`).

---

## Connector status (auth state)

These are the external services your plugins can talk to. Each one needs a one-time auth before its skills can pull live data.

*(filled in once smoke tests run)*
