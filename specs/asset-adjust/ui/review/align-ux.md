# Align UX — asset-adjust (live vs demo)

| Field | Value |
|-------|-------|
| feature | `asset-adjust` |
| slash | `/review-align-ux-ios-android` |
| demo | `ui/prototype/{ios,android}/index.html` `#sc-asset-adjust` |
| live | `qa/screens/A3-CORE.png` · `P6-CORE.png` |
| align shots | `ui/review/align/asset-adjust-{ios,android}.png` |
| verdict | **Not Aligned** · Must **1** |
| updatedAt | `2026-08-31T00:20:00.000Z` |

## Vision CORE (REQUIRED Read)

| Shot | Observed |
|------|----------|
| A3-CORE (iOS) | Title **Cập nhật / bớt** · back **Tài sản** · search · 3 rows live `KM-QL1-NA-*` · leading cube tile · **Sửa** / **Bớt** · tab shell · **không** watermark |
| P6-CORE (Android) | Cùng zone title/search/Sửa/Bớt · **1** row demo `TS-20260810-014 · Cống` · toast **Không tải được danh sách. Đang dùng dữ liệu mẫu.** |
| Demo HTML | Search `#i-search` · placeholder dài · rows **không** `.row-icon` · Sửa/Bớt inline |

## Must

| ID | Result |
|----|--------|
| GAP-QA-REAL-01 | **OPEN** — Android mock CORE khi BFF+iOS live |
| GAP-MOB-UX-COMP-03 | **PASS** — demo không `.row-icon` row; live có leading cube (richer) |
| GAP-MOB-E2E-VIS-01 | **PASS** — đã Read CORE PNG (không lấy CLI = Aligned) |
| GAP-DEV-MOB-PLACEHOLDER-01 | **PASS** — không watermark |

## Should

| ID | Result |
|----|--------|
| Search placeholder SSOT | Live kit `Tìm` · demo dài — **DEFER kit** |

## align_confirm

**confirm_fix** (autoApprove=ON) → Dev fix Android real GET · **cấm** QA PASS / phase=review.
