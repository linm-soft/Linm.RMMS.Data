# Align UX — feedback (live vs demo)

| Field | Value |
|-------|-------|
| feature | `feedback` |
| role | `/review-align-ux-ios-android` · `/agent-qa-mobile` |
| verdict | **Aligned** |
| Must open | **0** |
| autoApprove | ON · `align_confirm=approve` |
| demo | `ui/prototype/{ios,android}/index.html` `#sc-feedback` · `DES-MOB-FEEDBACK` |
| live | `qa/screens/A3-CORE.png` (iOS) · `P6-CORE.png` · `P6-CORE-2.png` (Android) |
| updatedAt | `2026-08-29T00:20:00.000Z` |

## Vision (REQUIRED — CLI ≠ visual)

| Zone | Demo | Live iOS A3 | Live Android P6 | Gap |
|------|------|-------------|-----------------|-----|
| Title | **Góp ý** | **Góp ý** | **Góp ý** | — |
| Back | iOS `#i-chevron-left`+**Tôi** · Android icon-only | **Tôi** + chevron | icon-only ArrowBack | — (Design GAP-MOB-ALIGN-01 OK) |
| Label | **Nội dung góp ý** 13 | present | present | — |
| Body | multiline TextArea | filled ≥16 | filled ≥16 | — |
| CTA | **Gửi góp ý** primary | present | present | — |
| Tabs | 5 · **me** active | me active | me active | — |
| Category pills | **cấm** P1 | none | none | — |
| `.row-icon` on CORE form | none (form surface) | n/a | n/a | — |
| Entry `#i-info` | Me hub reuse | entry via `#row-feedback` | same | — |
| Watermark | — | none | none | — |

**Cấm** GAP-MOB-E2E-VIS-01 — CORE PNG **Read** done.  
IME chrome (iOS keyboard / Android Gboard floating bar) = OS · **không** Must.

## Observe (non-Must)

| Item | Note |
|------|------|
| Android TopBar overflow `…` | kit default · not in HTML demo · **không** block P1 |
| Demo `entry-hint` | only `?entry=1` · **không** trên live screen |

## Result

| Gate | Value |
|------|-------|
| align_confirm | **approve** (autoApprove) |
| handoff | `/agent-review-mobile` |
