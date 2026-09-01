# Align UX — patrol-history-detail · live vs demo

| | |
|--|--|
| feature | `patrol-history-detail` |
| task | `task_cf2aadc0` |
| demo | `ui/prototype/{ios,android}/index.html#sc-patrol-detail` |
| live | `qa/screens/A3-CORE.png` · `P6-CORE.png` · `P6-CORE-2.png` |
| verdict | **Aligned** · Must open = **0** |
| align_confirm | approve (autoApprove ON) |
| writtenAt | `2026-09-01T11:22:46.000Z` |

## Zone check

| Zone | Demo | Live iOS A3 | Live Android P6 | Gap |
|------|------|-------------|-----------------|-----|
| NAV | back Lịch sử · title · ellipsis | text back · title · … | icon back · title · … | none |
| HERO | Mã phiên · PAT-* · badge | (CTA fold) · code on P6 | TD-20260821-001 · Đang tuần | Code **TD-*** = BFF real (demo PAT SSOT) — OK |
| INFO | ListRow §B | present (scroll) | Nhân viên…Bắt đầu | none |
| TL | 3 demo SSOT | 3 rows · Đang tới badge | same on P6-CORE-2 | ListRow≈Timeline (kit debt · known) |
| CTA | Map primary · End secondary | both visible A3 | both P6-CORE-2 | none |
| TAB | Tuần đường on | on | on | none |

## Must

- GAP-MOB-UX-COMP-03: **none** (ellipsis / chevron / badge present)
- GAP-MOB-E2E-VIS-01: **none** (CORE Read done)
- GAP-DEV-MOB-PLACEHOLDER-01: **none**
- GAP-QA-REAL-01: **none** (live TD-* from GET)
- GAP-MOB-PAT-HIST-DET-NAV-01: **none** (history → detail push verified)

## Notes

- A3 shot = CTA/timeline fold · hero code covered by P6-CORE top fold.
- Timeline visual rail demo ≠ ListRow live — PO/Dev debt accepted P1.
- OfflineDemo stripped — fail path not exercised this run (happy-path seed).
