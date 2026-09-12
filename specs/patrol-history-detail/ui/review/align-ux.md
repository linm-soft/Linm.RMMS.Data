# Align UX — patrol-history-detail · live vs demo

| | |
|--|--|
| feature | `patrol-history-detail` |
| task | `task_8aedde45` · prior QA `task_01ffb168` |
| demo | `ui/prototype/{ios,android}/index.html#sc-patrol-detail` |
| live | `qa/screens/A3-CORE.png` · `P6-CORE.png` · `P6-CORE-2.png` |
| seed | `b33e…0002` / `PAT-20260810-0009` · RMMS |
| verdict | **Aligned** · Must open = **0** |
| align_confirm | approve (autoApprove ON) |
| writtenAt | `2026-09-12T14:25:00.000Z` |

## Zone check

| Zone | Demo | Live iOS A3 | Live Android P6 | Gap |
|------|------|-------------|-----------------|-----|
| NAV | back Lịch sử · title · ellipsis | text back · title · … | icon back · title · … | none |
| HERO | Mã phiên · PAT-* · badge | (fold) · covered P6 | **PAT-20260810-0009** · Hoàn thành | runtime PAT ≠ demo TD-* — **Accept** (design SSOT) |
| INFO | ListRow §B | Tuyến…Độ phủ | Nhân viên…Bắt đầu | none |
| TL | 3-row UI ref | 3 live · Km 1551/1552/1553 | same P6-CORE-2 | ListRow≈Timeline (kit debt P2) · **cấm** timelineDemo |
| CTA | Map primary · End secondary | both A3 | both P6-CORE-2 | none |
| TAB | Tuần đường on | on | on | none |

## Must

- GAP-MOB-UX-COMP-03: **none**
- GAP-MOB-E2E-VIS-01: **none** (CORE Read done)
- GAP-DEV-MOB-PLACEHOLDER-01: **none**
- GAP-QA-REAL-01: **none** (live PAT-* + check-ins)
- GAP-MOB-PAT-HIST-DET-TIMELINE-01: **none** (GET check-ins Live)
- GAP-MOB-PAT-HIST-DET-TAP-01 / MAP-01 / END-01: **none** (Dev+QA closed)

## Notes

- A3 = INFO/TL/CTA fold · hero on P6-CORE.
- Demo TL labels may differ · runtime live check-ins Accept.
- Debt: TimelineRow kit · PatrolMap consume session Id P2.
