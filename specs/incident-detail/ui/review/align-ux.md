# Align UX — incident-detail (live vs demo)

| Field | Value |
|-------|-------|
| feature | `incident-detail` |
| skill | `/review-align-ux-ios-android` |
| sources | `qa/screens/A3-CORE.png` · `P6-CORE.png` · `P6-CORE-2.png` vs `ui/prototype/{ios,android}/index.html` `#sc-incident-detail` |
| result | **Aligned** |
| Must open | **0** |
| updatedAt | `2026-08-29T04:10:00.000Z` |
| taskId | `task_21b55839` |

## Demo pictogram inventory

| Demo element | Present? |
|--------------|----------|
| `#i-chevron-left` back | yes (iOS text+chevron · Android icon-only) |
| `.row-icon` on Loại/Vị trí/Định vị/Nguồn | **none** in SSOT HTML |
| CTA glyph on Giao việc / Map / Close | **none** — text buttons |
| Hero code + badge | yes |

## Live Read (CORE)

| Zone | iOS A3 | Android P6 | Match |
|------|--------|------------|-------|
| Back chevron | «Vấn đề» + chevron | icon-only | **OK** (parity chrome) |
| Title | Chi tiết | Chi tiết sự cố | **OK** |
| Mã + code hero | VD-20260829-0001 (live seed) | same | **OK** (≠ demo SC-2401 — live API) |
| Badge severity×status | Nghiêm trọng · Đã đóng (after Close) | same | **OK** |
| Rows Loại / Vị trí / Định vị | text rows · no leading icon | same | **OK** (= demo) |
| Nguồn | omitted (empty) | omitted | **OK** (GAP-MOB-INC-DETAIL-SRC-01) |
| CTA stack | primary + 2 secondary | same | **OK** |
| Tab **Vấn đề** selected | yes | yes | **OK** |
| Watermark | none | none | **OK** |

## Verdict

- **Cấm** CLI PASS = Aligned — vision done trên CORE PNG.
- Không GAP-MOB-UX-COMP-03 (demo không có `.row-icon` trên rows detail).
- Không GAP-MOB-E2E-VIS-01.
- autoApprove=ON · `align_confirm` = confirm (Must 0).

---
<!-- Version meta: skillId=review-align-ux-ios-android schemaVersion=1 -->
