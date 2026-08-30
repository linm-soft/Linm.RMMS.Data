# Align UX — asset (live vs demo)

| Field | Value |
|-------|-------|
| feature | `asset` |
| demo | `specs/mobile-p1/ui/prototype/{ios,android}/index.html` `#sc-asset-list` |
| shots | `qa/screens/A3-CORE.png` · `P6-CORE.png` · `P6-CORE-2.png` |
| method | Read CORE PNG vs HTML · **cấm** CLI PASS = Aligned |
| result | **Aligned** · Must **0** |
| taskId | `task_edfc2374` |
| updatedAt | `2026-08-29T17:15:00.000Z` |

## Vision CORE

| Demo HTML | Live iOS (A3) | Live Android (P6) | Verdict |
|-----------|---------------|-------------------|---------|
| TopBar «Tài sản» + title **Danh sách** | `< Tài sản` + **Danh sách** | Back arrow + **Danh sách** | **OK** (kit platform) |
| Search `#i-search` | `LinmSearchField` «Tìm» | Same | **OK** (placeholder kit shorter — Should) |
| `.row-icon` + `#i-cube` indigo/gray | Cube SF Symbol leading ô màu | ViewInAr cube leading ô màu | **Aligned** · **không** GAP-MOB-UX-COMP-03 |
| Row title/sub + chevron | Live 3 rows API | Demo 2 rows SSOT | **OK** (fail/empty→demo PO) |
| Badge «Ghim» row1 | Không badge | Không badge | **Should** (P2 · Dev list badge null) |
| Watermark Gói | Không | Không | **OK** |

## Must / Should

| Severity | ID | Note |
|----------|----|------|
| Must | — | **none** |
| Should | badge-demo | Demo «Ghim» · live omit (implement `badge: null`) |
| Should | search-ph | Demo placeholder dài · kit «Tìm» |
| Should | and-overflow | Android TopBar `…` · demo spacer |

## Form / scroll

- packKind **list** · **không** submit form → form-field-e2e **N/A**
- List short · P6-CORE-2 = fold row2 · **không** GAP-MOB-UX-SCROLL-01

## align_confirm

Autopilot **ON** · Must 0 → **approve** · chain Review **pending** (roleOnly QA **cấm** start).
