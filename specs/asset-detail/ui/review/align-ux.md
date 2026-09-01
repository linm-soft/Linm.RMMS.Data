# Align UX — asset-detail (live vs demo)

| Field | Value |
|-------|-------|
| feature | `asset-detail` |
| slash | `/review-align-ux-ios-android` |
| status | **Not Aligned** · Must open |
| demo | `ui/prototype/{ios,android}/index.html` `#sc-asset-detail` |
| live | `qa/screens/A3-CORE*.png` · `P6-CORE*.png` |
| updatedAt | `2026-08-30T22:21:24.000Z` |

## Visual compare (Read CORE)

| Zone | Demo | Live iOS | Live Android | Gap |
|------|------|----------|--------------|-----|
| Hero Mã TS + Code | `TS-20260810-014` demo SSOT | EmptyChrome **Không tìm thấy tài sản** | Demo list / mock detail + toast load-fail (prior run) | **GAP-QA-REAL-01** |
| Rows Loại / Tuyến / GPS | LinmListRow no leading icon | không render (empty) | demo/mock | **GAP-MOB-UX-COMP-03** N/A (screen empty) |
| CTA Ghim trên bản đồ | primary button | không | mock only | blocked |
| Pictogram `.row-icon` / `#i-*` | demo rows no glyph slot on detail (text rows) | — | — | detail kit = text rows · N/A tile |

## Verdict

**Not Aligned** — **cấm** `align_confirm` approve · **cấm** `phase=review`.

CLI e2e PASS ≠ visual. Skip vision → **GAP-MOB-E2E-VIS-01** (logged).
