# UX analy — asset-kcht-dashboard (icon SSOT delta)

| Field | Value |
|-------|-------|
| feature | `asset-kcht-dashboard` |
| this role | `design` · `/edit-web-feature` |
| changeScope | `edit_page` — count từ DB (`BRIDGE`/`TUNNEL` + summary-by-type) · pict GIS giữ |
| updatedAt | `2026-09-16T21:40:00.000Z` · `/edit-mobile-feature` native hang-mục |

## Zones (không đổi)

| Zone | Copy | GAP |
|------|------|-----|
| A | H1 «Hạng Mục Kết Cấu Hạ Tầng» | Chrome `fa-th-large` OK — không pict tài sản |
| GRID | 40 ô · 4 cột wrap | GAP-WEB-EDIT-04 **closed** — GIS SVG `iconCode` |
| CARD | label + count `vi-VN` | Pict = `assetIconBareHtml(iconCode)` · vòng 40×40 `#e6f4ff` · **cấm** recolor `#1677ff` |
| Widget | body cards only · host title **Tổng quan tài sản** | **cấm** H1 trùng host · size/parcel từ Authen `menuType=widget` |

## Copy / GAP mới

| ID | Issue | Fix (Design chốt) |
|----|-------|-------------------|
| GAP-WEB-EDIT-04 | Tile dùng Font Awesome | `iconCode` ∈ `ASSET_CODE_META` + GIS SVG |
| GAP-WEB-EDIT-05 | Copy SVG vào Asset MFE | webpack alias `{MapIconModule}` · `declare module` |
| GAP-WEB-EDIT-COUNT | Count tile ≠ Type DB (ô 5/16/24 lệch live DRVN) | Ô 5/16/24 bind `PONTOON`/`SPILLWAY`/`RESCUE_VEHICLE` · alias `CULVERT_L`→`DITCH` · 5xx toast GAP-DASH-COUNT-03 |
| GAP-WEB-EDIT-SEED | `withFallback` → demo/localStorage khi API lỗi (số giả trên hub/list) | **cấm** seed fallback · list/form throw · hub nguồn lỗi hiện «—» không phải 0 |

Tile không 1:1 GIS → **closest** (bảng design §6) · **cấm** invent pict dashboard (`/gen-icon-img`).

## Out

- Không đổi toast GAP-AKD-01 / drill.
- Host `/dashboard`: Authen size+parcel · ẩn ERP placeholder · Lối tắt nhanh gated `dashboard:widget:quick-links:read`.
- L0 **Bảng điều khiển** → `/dashboard` (flatten group `#` · **cấm** `#` → `/` → packageDefaultUrl `/so-ts`).
- Không AskQuestion `design_confirm` (user scoped Design + TL).

## Mobile native (`/edit-mobile-feature` 2026-09-16)

| Zone | Copy | GAP |
|------|------|-----|
| A | `LinmTopBar` «Hạng mục KCHT» | Dual `#sc-asset-kcht` · back hub |
| GRID | 40 ô 1 cột phone · icon + nhãn + count | SSOT `KCHT_TILES` web · **cấm** pick-grid 32 loại cũ |
| CARD | display-only | icon + nhãn + count · **cấm** tap / drill |
| Hub entry | wallet + tile 32 loại | GAP-MOB-AHUB-KCHT-01 **closed** |

| ID | Issue | Fix |
|----|-------|-----|
| GAP-MOB-AHUB-KCHT-01 | Hồ sơ / 32 loại chỉ toast | Dual hang-mục 40 ô stats · wallet+tile push |
| GAP-MOB-KCHT-STATS-01 | Card có tap drill | **closed** · stats only · back TopBar only |
| GAP-MOB-EDIT-01 | Packet web 4-col / widget làm SSOT phone | design §11 + `html-to-native-map.md` · 1 cột · kit tokens |
| GAP-WEB-EDIT-SEED | API lỗi hiện 0 | Count nguồn lỗi «—» · **cấm** seed 0 |
