# Handoff: TTC Internal Website — Home & Services Redesign

## Overview
Redesign of the internal website for the Tax Transformation Tech (TTC) unit. Two pages: **Home** and **Services**. The site is used internally by other teams to find TTC's tax technology tools and request support. The **About page has been removed**. Remove it from the nav and footer and delete the route if it exists.

## About the Design Files
The files in `design/` are **design references built in HTML**. They show the intended look and behaviour; they are not production code to copy directly. Recreate them in the existing codebase's framework and patterns (React, Vue, etc.), reusing its routing, components and styling approach. If there is no existing environment, choose a suitable framework (e.g. React + Vite, or Next.js) and implement there.

To view a reference file, open it in a browser. Each file is self-describing: markup is inline-styled, and the data and logic sit in the `<script>` class at the bottom.

## Fidelity
**High-fidelity.** Match the colours, typography, spacing, radii and copy exactly as specified below.

## Global

### Layout container
- Max width `1240px`, centred, horizontal padding `32px`.
- Sections are separated by `1px solid #161A14` borders.
- Alternate sections use the `#070907` background; the page background is `#050605`.

### Header (sticky, both pages)
- Height `72px`, `position: sticky; top: 0; z-index: 20`.
- Background `rgba(5,6,5,0.82)` with `backdrop-filter: blur(14px)`.
- Bottom border `1px solid #161A14`.
- **Left: logo.**
  - "TTC" in 24px, weight 700, letter-spacing −0.02em, followed by a "." in accent `#8CC63F`.
  - Next to it, gap 10px: the tagline "TAX TRANSFORMATION" in Geist Mono 11px, uppercase, letter-spacing 0.08em, colour `#6E7768`, nowrap.
- **Right: nav links "Home" and "Services".**
  - 14px, weight 500, padding 8px 14px, radius 8px, nowrap.
  - Inactive: colour `#A3AB9C`. Hover: `#F2F4EF` text on `#0E110C` background.
  - Active: `#F2F4EF` text on `#12160F` background, with a 5px accent dot before the label (gap 8px).
- **Right: "Request support" button.**
  - Primary style, 9px 16px padding, radius 8px, 14px weight 600, 12px left margin.
  - Clicking it opens the Contact modal.

### Footer
- **Home:** "TTC." (logo) + "Tax Transformation Consulting · Internal use" on the left; "Home" and "Services" links on the right (`#8A9383`).
- **Services:** "© 2026 Deloitte TTC Services" on the left; "Built by Deloitte TTC unit" on the right.
- Both use 13px text in `#6E7768`, padding 28px 32px, with a top border.
- Recommended: use the same footer on both pages. Pick one copy set and confirm with the owner.

### Buttons
- **Primary:**
  - Background `#8CC63F`, text `#0A0D07`, weight 600, 15px, padding 14px 22px, radius 10px.
  - Hover background `#A1D85A`.
  - The hero version adds `box-shadow: 0 0 0 1px #9BD24F inset, 0 10px 30px -10px rgba(140,198,63,0.6)`.
- **Secondary:**
  - Transparent or `#0B0D09` background, `1px solid #2A3122` border (`#3A4A2A` on green panels), text `#F2F4EF`, weight 500.
  - Hover border `#4A5A38` or `#8CC63F`.

### Section eyebrow
Geist Mono 12px, letter-spacing 0.12em, uppercase, colour `#8CC63F` (e.g. "OUR SOLUTIONS", "WHY TTC", "PROCESS").

### Section heading (H2)
`clamp(34px, 4vw, 52px)`, weight 600, line-height 1.05, letter-spacing −0.03em.

### Contact modal (both pages)
Opened by every "Request support", "Talk to the team", "Book a consultation" and "Suggest a service" trigger.
- **Overlay:** `position: fixed; inset: 0; z-index: 100`, background `rgba(2,3,2,0.72)` with `backdrop-filter: blur(8px)`, content centred, padding 24px. Clicking the overlay closes the modal.
- **Panel:**
  - Max width 520px, padding 40px, radius 20px, border `1px solid #2A3A1B`, background `#0B1008`, shadow `0 40px 120px -20px #000`.
  - Radial accent glow in the top-right corner: `radial-gradient(circle, rgba(140,198,63,0.22), transparent 65%)`, 420px, offset −140px right and −180px top.
- **Close button:** "×" in a 36px square at the top right (16px inset), radius 8px, border `#232A1E`, background `#0A0C09`.
- **Content, vertical gap 20px:**
  - 48px icon tile containing an envelope icon (tile styles under Shared components).
  - Eyebrow "CONSULTATION & SUPPORT".
  - H2 "Talk to the TTC team" (30px, weight 600).
  - Body text, 16px, line-height 1.6, colour `#B4BCAD`: "Contact or email the Tax Transformation Tech (TTC) team directly for consultations and support. We are always willing to assist."
  - Buttons: primary "Email the TTC team →" and secondary "Maybe later" (closes the modal).
- **Do not display any email address or phone number.** The email button should be a `mailto:` link whose address lives in config only. **TODO:** the team will supply the address.
- Close the modal on Esc and trap focus inside it (accessibility).

## Screen 1 — Home (`design/TTC Home.dc.html`)

### Hero
- **Background effects:**
  - Optional grid: 64px squares drawn with `#11150F` 1px lines, faded by `mask-image: radial-gradient(ellipse 70% 80% at 30% 40%, #000 20%, transparent 75%)`.
  - Green glow: 720px circle at left −120px, top −260px, `radial-gradient(circle, rgba(140,198,63,0.16), transparent 62%)`.
- **Layout:**
  - Two-column grid: `repeat(auto-fit, minmax(min(100%, 460px), 1fr))`, gap 64px, vertically centred.
  - Padding 104px top, 96px bottom.
- **Left column (gap 28px):**
  - **Pill:**
    - Container: border `#24301A`, background `#0B0F08`, radius 999px.
    - Inside, an "INTERNAL" badge: Geist Mono 11px, `#8CC63F` background, dark text.
    - Then "Tax Transformation Consulting": 13px, colour `#B9D98F`.
  - **H1** "Transform your **tax** operations.":
    - The word "tax" is in `#8CC63F`.
    - Size `clamp(44px, 6.2vw, 80px)`, weight 600, line-height 1.02, letter-spacing −0.035em.
  - **Paragraph** (19px, colour `#C9CFC3`, max width 540px): "Digital tax solutions to transform your business. We help identify, design, implement, and maintain tax systems that bring accuracy, transparency, and control to your tax function."
  - **Buttons:** "Explore services →" (primary, links to /services) and "Talk to the team" (secondary, opens the modal).
- **Right column, the "Tool directory" card:**
  - Card: radius 18px, border `#1E241A`, background `linear-gradient(180deg, #0D110B, #080A07)`.
  - **Header row:** "TOOL DIRECTORY" in mono 12px `#8A9383`, and on the right "7 services available" with a glowing 6px accent dot.
  - **3 rows**, one per featured tool:
    - Grid columns `40px 1fr auto`, padding 18px 20px, bottom border `#161A13`, hover background `#10150D`.
    - A 40px number tile, then the name (15px, weight 600) with the category tag below it (13px, `#7E8777`), then "→".
  - **Footer row:** "+ 4 more services" and "View all →" in accent, linking to /services.
  - Compute the counts from the data; don't hard-code them.

### Approach strip
A four-column grid, `minmax(220px, 1fr)`. Each cell has padding 32px 24px and a right border. It contains a mono number in accent, a title (18px, weight 600) and a description (14px, `#8A9383`).

| No. | Title | Description |
|---|---|---|
| 01 | Identify | Map gaps and manual effort across the tax function. |
| 02 | Design | Shape solutions around real workflows and rules. |
| 03 | Implement | Build, test and roll out with the teams who use it. |
| 04 | Maintain | Keep tools current as regulations change. |

### Solutions (first 3 services)
- **Intro:**
  - Eyebrow "OUR SOLUTIONS".
  - H2 "Powerful tax technology tools".
  - Subtitle (17px, `#A3AB9C`): "From payroll automation to compliance reporting — tools built for your tax function."
  - On the right, a secondary button "See all 7 services →", linking to /services.
- **Cards:** a grid with `minmax(320px, 1fr)` columns and gap 20px. Card specs are under Shared components.

### Why TTC
- **Layout:** two columns, `minmax(360px, 1fr)`, gap 64px. Padding 112px vertical, background `#070907`.
- **Left column**, sticky at top 112px:
  - Eyebrow "WHY TTC".
  - H2 "Deep tax expertise, built into technology that works."
  - Paragraph: "We combine deep tax expertise with cutting-edge technology to deliver solutions that work."
- **Right column:** a list of 3 rows.
  - Each row: grid `56px 1fr`, gap 24px, padding 32px 0, bottom border `#1C2118`.
  - 56px icon tile (radius 14px), then the title (22px, weight 600) and description (16px, `#A3AB9C`).

| Icon (Lucide) | Title | Description |
|---|---|---|
| zap | Speed & efficiency | Automate repetitive tax workflows to free your team for high-value work and faster decision-making. |
| circle-check | Accuracy you can trust | Eliminate manual errors with precision-built computation engines that deliver consistent, reliable results. |
| shield | Compliance ready | Stay audit-ready with tools designed around regulatory standards and built to meet NRS and OECD requirements. |

### CTA banner
- Panel: radius 24px, padding 56px, border `#2A3A1B`, background `#0B1008`, with a top-right radial glow.
- Heading "Have a tax process that needs fixing?" (`clamp(28px, 3vw, 40px)`).
- Body: "Tell us what you're working on — we'll help scope the right tool or build a new one."
- Buttons: "Request support →" (primary, opens the modal) and "Browse services" (secondary, links to /services).

## Screen 2 — Services (`design/TTC Services.dc.html`)

### Page header
- Background: the same grid and glow treatment as the Home hero.
- Padding 56px top, 64px bottom.
- Breadcrumb (13px): "Home / Services". "Home" is a link in `#8A9383`; "Services" is in `#B9D98F`.
- H1 "Our services": `clamp(44px, 5.6vw, 72px)`.
- Subtitle (19px, `#C9CFC3`): "End-to-end digital tax solutions designed to simplify compliance, automate workflows, and empower tax functions."
- **Right side, two stats:**
  - Values are 40px, weight 600, zero-padded (e.g. "07"). Labels are Geist Mono 11px with 0.1em tracking.
  - "SERVICES" shows the total number of services.
  - "CATEGORIES" shows the number of unique tags.
  - A 1px `#1E241A` vertical divider separates them.

### Filter bar (sticky)
- `position: sticky; top: 72px` (sits directly below the header), padding 16px 0.
- Background `rgba(5,6,5,0.9)` with blur, bottom border `#161A14`.
- Uses flex-wrap with space-between.
- **Category tabs (left):** a segmented control.
  - **Container:** padding 4px, gap 2px, border `#1C2118`, radius 12px, background `#0A0C09`. Scrolls horizontally on overflow with the scrollbar hidden; tabs never wrap.
  - **Tab:** height 34px, padding 0 12px, radius 8px, 13px, weight 500, nowrap.
    - Inactive: transparent, text `#8A9383`, hover text `#F2F4EF`.
    - Active: background `#151B10`, inset ring `0 0 0 1px #2E3A22`, text `#F2F4EF`.
  - **Count badge** inside each tab:
    - Size: min-width 18px, height 18px, radius 5px, Geist Mono 11px.
    - Inactive: background `#141811`, text `#6E7768`.
    - Active: background `#8CC63F`, text `#0A0D07`.
  - **Tabs:** "All" first, then one tab per unique tag, in data order.
- **Search (right):**
  - Height 40px, min-width 280px, border `#232A1E`, radius 10px, background `#0A0C09`.
  - 15px search icon (`#6E7768`), then the input: placeholder "Search services or features", 14px.
  - Placeholder colour `#5D6656`.

### Service grid
- Columns `repeat(auto-fill, minmax(min(100%, 340px), 1fr))`, gap 20px.
- Shows every service that matches the filters (card specs under Shared components). Numbers are assigned by position: 01, 02, …
- **"Need something else?" card:** always the last item.
  - Shown only when the "All" tab is active and the search box is empty.
  - Dashed border `1px dashed #2E3A22`, transparent background, min-height 320px. Hover: border `#8CC63F`, background `#0A0D08`.
  - Dashed 40px tile containing a "+".
  - Title "Need something else?"
  - Body: "New services are added as the unit grows. Tell us about a process you'd like automated."
  - Link: "Suggest a service →" (opens the modal).
- **Empty state:** a bordered panel reading 'No services match "{query}"' with a "Clear filters" button that resets the category to All and clears the search.

### Process
- **Intro:** on the left, eyebrow "PROCESS" and H2 "Getting started is simple". On the right, a paragraph (max 420px): "Our structured onboarding process ensures you're up and running quickly with minimal disruption."
- **Step cards:**
  - Grid `minmax(240px, 1fr)`, gap 20px.
  - Each card: padding 32px 28px, radius 18px, border `#1C2118`, background `#090B08`.
  - Top: a 44px filled accent circle holding the mono number, then a gradient line `linear-gradient(90deg, #3E5226, transparent)`.
  - Title 22px, weight 600; description 15px.

| No. | Title | Description |
|---|---|---|
| 01 | Request | Reach out to the TTC team with your tax challenge or the service you need. |
| 02 | Assess | We review your current processes and recommend the right solution. |
| 03 | Implement | We configure the solution and integrate it with your existing systems. |
| 04 | Support | Your team goes live with ongoing support. We monitor and refine as needs change. |

### CTA banner
Same panel as the Home banner.
- Heading: "Not sure which service fits?"
- Body: "Book a consultation and we'll recommend the right solution for your team."
- Button: "Book a consultation →" (opens the modal).

## Shared components

### Service card
- **Container:** a link; flex column, gap 20px, padding 28px, radius 18px, border `#1C2118`, background `#090B08`.
- **Hover:** border `#3E5226`, background `#0C1009`, `translateY(-3px)`. Transition `.2s` on border-color, transform and background.
- **Top row:**
  - Left: a 40px number tile (the "tile" style below) showing the mono number.
  - Right: a tag pill: 12px, weight 500, padding 5px 10px, radius 999px, background `#131B0C`, border `#26321C`, text `#A8D46A`.
- **Text:** title 22px, weight 600, letter-spacing −0.02em; description 15px, line-height 1.6, `#A3AB9C`.
- **Divider:** 1px line in `#1A1F16`.
- **Features:** a two-column grid, gap 10px 16px, 13px text in `#C9CFC3`, each item preceded by a 4px accent dot.
- **Footer:** "View service →" in accent, 14px, weight 500, pushed to the bottom with `margin-top: auto`. On Home the label is "Open tool →".

### Tile
Radius 10px (14px for the 56px size), border `1px solid #26321C`, background `#0F160A`, content in accent colour.

## Data — services (single source of truth)
Store the services in one config, JSON or CMS, so new services can be added without touching layout. Home reads the first 3 entries; Services shows all of them. Counts and category tabs are derived from the data.

```json
[
  { "name": "CBC Conversion Service", "tag": "Compliance",
    "desc": "Automates the conversion of Country-by-Country Reports (CbCR) into compliant XML formats required for OECD automatic exchange.",
    "features": ["OECD XML format compliance", "Automated data mapping", "Error validation & flagging", "Multi-jurisdiction support"] },
  { "name": "Neptune Payroll", "tag": "Payroll",
    "desc": "A comprehensive HR payroll management solution that handles statutory deductions, employee records, and payroll computations.",
    "features": ["Statutory deductions", "Employee records", "Payslip generation", "Pension & tax integration"] },
  { "name": "WHT & VAT Automation", "tag": "Tax Automation",
    "desc": "Streamlines the computation, filing, and remittance of Withholding Tax and Value Added Tax, ensuring full compliance with tax authorities.",
    "features": ["WHT computation & filing", "VAT return preparation", "Remittance schedules", "Audit-ready reports"] },
  { "name": "Silverfin", "tag": "Reporting",
    "desc": "A cloud-based financial reporting and workflow platform that connects accounting data to enable seamless tax reporting.",
    "features": ["Cloud collaboration", "Financial templates", "Compliance checklists", "Real-time data sync"] },
  { "name": "E-Invoicing Implementation", "tag": "E-Invoicing",
    "desc": "Guides businesses through the setup and integration of compliant e-invoicing systems, fully aligned with NRS requirements.",
    "features": ["NRS-compliant integration", "Invoice validation", "ERP system integration", "End-to-end support"] },
  { "name": "WHT Receipt Generator", "tag": "WHT",
    "desc": "Automatically generates accurate Withholding Tax receipts and documentation for remittances, providing a clear audit trail.",
    "features": ["Automated receipts", "WHT schedule tracking", "Bulk processing", "Exportable formats"] },
  { "name": "Interest Expense Analyser", "tag": "Analytics",
    "desc": "Cuts through the complexities of manual interest analysis by computing and evaluating deductible interest expenses.",
    "features": ["Deductible interest computation", "Financial institution support"] }
]
```
Add a `url` field per service (where it links) when the destinations are known.

## Interactions & State
- **Services page state:**
  - `category` (default `"All"`).
  - `query` (string; case-insensitive match against name, description, tag and features).
  - `contactOpen` (boolean).
  - Filters combine with AND.
- **Home page state:** `contactOpen`.
- **Card hover:** lift by 3px with a border colour change, 0.2s.
- **Responsiveness:** everything is fluid via auto-fit grids and flex-wrap; no fixed heights on text containers. Below about 640px, collapse the nav into a menu and hide the header tagline.
- **Scroll:** the header is sticky, and on Services the filter bar is also sticky, directly below it.

## Design tokens
**Colours**
- Background: `#050605` (page), `#070907` (alternate section), `#090B08` (card), `#0A0C09` (input / control), `#0B1008` (green panel).
- Borders: `#161A14` (section), `#1C2118` (card), `#232A1E` (input), `#26321C` (tile / tag), `#2A3A1B` (green panel), `#3E5226` (hover).
- Text: `#F2F4EF` (primary), `#C9CFC3` (body strong), `#A3AB9C` (body), `#8A9383` (muted), `#6E7768` (subtle), `#5D6656` (faint).
- Accent: `#8CC63F` (hover `#A1D85A`), accent text `#A8D46A` / `#B9D98F`, text on accent `#0A0D07`.

**Typography**
- **Geist** (Google Fonts) at weights 400, 500, 600 and 700; **Geist Mono** at 400 and 500 for numbers, eyebrows and labels.

| Use | Size | Weight |
|---|---|---|
| Hero H1 | 80px max | 600 |
| Page H1 | 72px max | 600 |
| H2 | 52px max | 600 |
| Card title | 22px | 600 |
| Lead text | 19px | 400 |
| Body | 15–17px | 400 |
| Small | 13–14px | 400–500 |
| Mono label | 11–12px | 400–500 |

**Radii and spacing**
- Radius: 5px (badge), 8px (nav / tab), 10px (button / tile), 12px (segmented control), 18px (card), 20px (modal), 24px (CTA panel), 999px (pill).
- Section vertical padding is 112–120px; card padding 28px; grid gap 20px.

## Assets
- No images.
- Icons are simple strokes; use **Lucide**: zap, circle-check, shield, search, mail.

## Files
- `design/TTC Home.dc.html`: Home reference.
- `design/TTC Services.dc.html`: Services reference.

## Open TODOs for the implementer
1. Set the TTC team email address for the modal's `mailto:` button (keep it hidden from the UI).
2. Add the destination URL for each service card.
3. Remove the About route and its links.
