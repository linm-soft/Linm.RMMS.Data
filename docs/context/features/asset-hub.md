# Mobile hub Tài sản — Feature Context

> **Slug:** `asset-hub` · **Module:** Asset × AiVision × GIS · **Phase:** P1  
> **Status:** data_analy · pack `specs/asset-hub/`  
> **Feature Kind:** **hub** — menu con Tài sản (thu thập · quản lý · bản đồ · AI)  
> **Sources:** `asset.md` · `asset-kcht-32.md` · `ai-asset-detect.md` · `gis.md` · `home.md` (entry tile + wallet)  
> **Demo:** `specs/mobile-p1/ui/prototype/{ios,android}/index.html` `#sc-asset-hub` · `DES-MOB-ASSET-HUB`  
> **Parent entry:** `home` tile Tài sản + wallet `DES-MOB-HOME-WALLET` · `go('asset-hub')`  
> **BFF prefix:** `mobile-bff/api/v1` · proxy `asset/*` · `integration/*` · `ai-vision/*` · `gis/*`

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | Hub menu Tài sản mobile — ví hồ sơ tuyến + lối vào 32 loại KCHT · thu thập thủ công / Camera AI · tra cứu · cập nhật/bớt · bản đồ · hàng chờ xác nhận AI |
| Persona | Tuần đường · Hạt QLĐB IV |
| App hiện có | App cũ Tài sản (menu con) · Web Sổ TS · Giám sát TS |
| DoD hub | Một slug `#sc-asset-hub` · nav từ home · wallet + grid + section + row AI pending · sibling screens **không** gộp turn này |

## 2. Design / UI (`#sc-asset-hub`)

| Zone | DES id | Kit | Route sibling |
|------|--------|-----|---------------|
| Nav back | — | `LinmTopBar` / nav chrome | `home` |
| Ví hồ sơ | `DES-MOB-ASSET-WALLET` | `LinmWalletCard` | display · tap **không** nav (đã ở hub) |
| Grid 32 loại + bản đồ | hub-grid | `LinmHubTile` ×2 | `asset-types` · `gis-map` |
| Thu thập | section + grid | `LinmSectionLabel` · `LinmHubTile` ×2 | `asset-collect` · `asset-ai` |
| Quản lý | section + grid | `LinmSectionLabel` · `LinmHubTile` ×2 | `asset-list` · `asset-adjust` |
| Row bản đồ | card-group | `LinmListRow` | `gis-map` (cùng slug tile) |
| Chờ xác nhận AI | section + row + CTA | `LinmListRow` · `LinmPrimaryButton` | `det-hitl` |

**Mock wallet:** eyebrow **HỒ SƠ TÀI SẢN** · title **QL.1 · Khu IV** · subtitle **32 loại KCHT · thông số + checklist sự cố** (+ iOS thêm dòng patrol demo).

## 3. API (hub turn — read-only summary)

App `{BffPrefix}` = `mobile-bff/api/v1`. **Cấm** invent `api/v1/asset-hub`.

| Hub zone | Method | `{BffPrefix}` path | Downstream | Ghi |
|----------|--------|--------------------|------------|-----|
| Wallet title tuyến | GET | `integration/road-routes/search` | `api/v1/integration/road-routes` | filter theo hợp đồng/tuyến giao · **UNCLEAR** live org |
| Wallet số loại | GET | `integration/asset-types` | `api/v1/integration/asset-types` | count catalog (target 36 · demo «32») |
| Wallet ghi chú patrol | — | — | — | demo copy · sibling `patrol-home` |
| AI pending list | GET | `ai-vision/asset-candidates` | `api/v1/ai-vision/asset-candidates` | filter status=Draft |
| AI pending (nearby) | GET | `ai-vision/asset-candidates/nearby` | optional | hub demo 1 row |

Sibling screens gọi CRUD riêng — xem `asset-hub-bff-endpoints.md`.

## 4. Gaps

| ID | Question | Default |
|----|----------|---------|
| GAP-F-AHUB-01 | Wallet «QL.1 · Khu IV» live từ API nào | **Không invent.** Demo copy đến khi PO chốt route/org contract |
| GAP-F-AHUB-02 | 32 vs 36 loại trên ví | Hiển thị count từ `asset-types` API · copy demo «32» OK P1 |
| GAP-F-AHUB-03 | Hub load AI pending mỗi lần mở | GET candidates Draft · empty → ẩn section |

## 5. Cấm

- Gộp sibling (`asset-list` · `asset-collect` · …) vào slug `asset-hub`  
- Invent `GET asset/hub` / wallet controller  
- WebView HTML · `alert` · hard delete TS  
- ERP.* prefix

<!-- context: asset-hub mobile hub P1 · data_analy 2026-08-19 -->
