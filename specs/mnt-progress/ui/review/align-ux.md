# Align UX — mnt-progress (live vs demo)

| Field | Value |
|-------|-------|
| feature | `mnt-progress` |
| role | `/review-align-ux-ios-android` · `/agent-qa-mobile` |
| verdict | **Aligned** |
| Must open | **0** |
| autoApprove | ON · `align_confirm=approve` |
| demo | `ui/prototype/{ios,android}/index.html` `#sc-mnt-progress` · `DES-MOB-MNT-PROGRESS` |
| live | `qa/screens/A3-CORE.png` (iOS) · `P6-CORE.png` · `P6-CORE-2.png` (Android) |
| updatedAt | `2026-09-01T05:10:00.000Z` |

## Vision (REQUIRED — CLI ≠ visual)

| Zone | Demo | Live iOS A3 | Live Android P6 | Gap |
|------|------|-------------|-----------------|-----|
| Title | **Cập nhật trạng thái** | **Cập nhật trạng thái** | **Cập nhật trạng thái** | — |
| Back | iOS `#i-chevron-left`+**Công việc** · Android icon-only | **Công việc** + chevron | icon-only ArrowBack | — (Design GAP-MOB-ALIGN-01 OK) |
| WO header rows | `.row.no-icon` title/code/status | present (live WO · Chờ xử lý) | present · GPS+CTA fold | — |
| Tiến độ | % + slider | `45` + slider sync | slider visible | — |
| Ghi chú | textarea placeholder | filled ≥16 | filled + GPS embed | — |
| `#i-camera` | photo-slot glyph | below IME fold · a11y id live | Maestro `scrollUntilVisible` PASS | — (không GAP-MOB-UX-COMP-03) |
| Location | **Vị trí đã chốt** | below fold (IME) | stamp + subtitle | — |
| CTA | **Cập nhật** primary | below IME | primary visible P6/P6-2 | — |
| Tabs | 5 · **work** active | work active | work active | — |
| WO `.row-icon` | **none** (`no-icon`) | n/a | n/a | — |
| Watermark | — | none | none | — |

**Cấm** GAP-MOB-E2E-VIS-01 — CORE PNG **Read** done.  
IME chrome (iOS keyboard / Android Gboard floating bar) = OS · **không** Must.

## Observe (non-Must)

| Item | Note |
|------|------|
| Android TopBar overflow `…` | kit default · not in HTML demo · **không** block P1 |
| Demo code `CV-20260810-0001` vs live `WO-DEMO-1` | demoItems SSOT app · **không** pictogram Must |
| Label copy Tiêu đề / Mã công việc vs demo Công việc / Mã | copy map kit · Observe |
| iOS `btn-mnt-sync-*` a11y id missing | **Should** · `qa/bugs/mnt-progress.md` · e2e dùng point fallback |

## Result

| Gate | Value |
|------|-------|
| align_confirm | **approve** (autoApprove) |
| handoff | `/agent-review-mobile` |
