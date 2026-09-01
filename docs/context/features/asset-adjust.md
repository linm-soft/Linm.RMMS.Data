# Context — asset-adjust (mobile · Cập nhật / bớt)

| Field | Value |
|-------|-------|
| feature | `asset-adjust` |
| title | [Mobile] [Tài sản] -> Cập nhật / bớt |
| des | `DES-MOB-ASSET-ADJUST` |
| demo | `#sc-asset-adjust` · `specs/mobile-p1/ui/prototype/{ios,android}/index.html` · modal `#md-asset-remove` `DES-MOB-ASSET-REMOVE` |
| packKind | **`screen`** (PO chốt · đóng GAP-MOB-ASSET-ADJUST-PACK-01 · scan meta `sheet` = mislabel) |
| changeScope | `new_page` |
| parent | `asset-hub` tile «Cập nhật / bớt» `#i-minus` · toast `asset.tile.adjust` → wire |
| domain | Asset · `RoadAssetDto` / `UpdateRoadAssetRequest` / soft-delete `IsActive=false` · `rmms_road_assets` |
| BE | `Linm.RMMS.WebService` · DOMAIN-MAP Asset — **cấm ERP.*** |
| BFF | `Linm.RMMS.Mobile.Bff` · `mobile-bff/api/v1/asset/road-assets` GET+PUT+DELETE |
| peers | `asset.md` · `asset-hub.md` · `asset-detail.md` · `asset-collect.md` · mobile list `asset` |
| perm | `asset.road-assets.read` · `asset.road-assets.update` · `asset.road-assets.delete` |

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | Màn **Cập nhật / bớt**: tìm mã TS · danh sách trên tuyến · **Sửa** → chi tiết · **Bớt** = modal soft (ẩn sổ · `IsActive=false`) |
| Persona | Tuần đường · Hạt QLĐB |
| Entry | Hub `#sc-asset-hub` tile Cập nhật/bớt · chip jump |
| DoD P1 | Dual `#sc-asset-adjust` · GET list(+search) thật · Sửa → `asset-detail` · Bớt → DELETE soft + toast Code · modal in-app · **cấm** invent `asset-adjust` path · **cấm** hard delete · **cấm** gộp collect/AI/list |

## 2. Design / UI

| Zone | Pattern | DES-ID | Notes |
|------|---------|--------|-------|
| Screen | Full list+search | `DES-MOB-ASSET-ADJUST` | Title «Cập nhật / bớt» · back hub |
| Search | SearchField | — | SSOT **«Tìm mã TS cần sửa hoặc bớt…»** dual (PO đóng SEARCH-01) |
| Row | ListRow + actions | — | `Code · TypeLabel` · `Route · Km {KmFrom}` |
| Sửa | Secondary / text btn | — | `go('asset-detail')` · pass `Id` |
| Bớt | Danger / text btn | — | `openModal('asset-remove')` |
| Modal | Confirm soft | `DES-MOB-ASSET-REMOVE` | «Bớt tài sản khỏi sổ?» · CTA «Bớt khỏi sổ» · «Giữ lại» |
| Toast | Toast | — | «Đã bớt tài sản · {Code}» |

**Không** gộp: `#sc-asset-collect` · `#sc-asset-ai` · `#sc-asset-list` · form Edit full web · hard delete · system `confirm()`.

**Demo P1:** không form edit inline trên adjust — «Sửa» = nav detail (GET). PUT field update = domain live · **UI edit sheet OUT demo** → GAP PO/Design.

## 3. API (mobile BFF — cấm invent path `asset-adjust`)

| Method | `{BffPrefix}` path | Downstream | Status |
|--------|-------------------|------------|--------|
| GET | `asset/road-assets?search=&page=&pageSize=` | `RoadAssetsController.GetList` | **Live** — list + search |
| DELETE | `asset/road-assets/{id}` | `SoftDeleteAsync` · `IsActive=false` | **Live** — Bớt |
| PUT | `asset/road-assets/{id}` | `UpdateAsync` · `UpdateRoadAssetRequest` | **Live** domain · **OUT** demo form P1 |
| GET | `asset/road-assets/{id}` | GetById | owner `asset-detail` — Sửa nav |

App base: `{BffBase}/mobile-bff/api/v1`. **Cấm** app `:5101` · invent `api/v1/asset-adjust` · Finance `api/v1/assets` · ERP.*.

## 4. Sibling (không gộp slug)

| Slug | Quan hệ |
|------|---------|
| `asset-hub` | Parent / back |
| `asset-detail` | «Sửa» nav — **reuse** · **không** start |
| `asset` / list | Sibling tra cứu — **OUT** |
| `asset-collect` / `asset-ai` | OUT |
| `gis-map` | OUT P1 adjust |

## 5. Demo SSOT

| Field | iOS | Android |
|-------|-----|---------|
| Title | Cập nhật / bớt | **same** |
| Back | text «Tài sản» + chevron | icon-only chevron |
| Search placeholder | Tìm mã TS cần sửa hoặc bớt… | **same** (SSOT dài) |
| Row1 | TS-20260810-014 · Cống ngang · QL.1 · Km 1556+000 | **same** (1 row demo) |
| Row2 | TS-20260809-088 · Biển P.127 · HCM · Biển báo | **thiếu** Android |
| Sửa / Bớt | Secondary + danger filled | text primary/error |
| Modal | Bớt tài sản khỏi sổ? · khôi phục Web | **same** |
| Toast | Đã bớt tài sản · TS-20260810-014 | **same** |

## 6. Gaps

| ID | Default |
|----|---------|
| GAP-MOB-ASSET-ADJUST-PACK-01 | **closed** · packKind=`screen` |
| GAP-MOB-ASSET-ADJUST-SEARCH-01 | **closed** · SSOT placeholder «Tìm mã TS cần sửa hoặc bớt…» dual |
| GAP-MOB-ASSET-ADJUST-ROW-01 | **closed** · live GET · demo rows = fallback |
| GAP-MOB-ASSET-ADJUST-EDIT-01 | **closed** · P1 Sửa=nav detail · PUT UI OUT |
| GAP-MOB-ASSET-ADJUST-MEDIA-01 | **closed** · OUT P1 · không invent media |

## 7. Cấm

- Invent `api/v1/asset-adjust` / dedicated AdjustController trên BFF  
- ERP.* · Finance `api/v1/assets` · `mfeStdUrl` · WebView HTML  
- Hard delete DB · system alert/confirm  
- Fake toast success khi DELETE/PUT fail  
- Gộp collect / AI / list / detail form vào slug  
- Start sibling trước Approve (`GAP-MOB-ACT-06`) · enqueue DELETE/PUT submit (`GAP-MOB-ACT-07`)  
- Ship list từ `demoItems` khi BFF live (`GAP-MOB-REAL-02`)

<!-- context: asset-adjust mobile P1 · data_analy 2026-08-30 -->

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | — | — | — |
| mobile | `dev` | `await_confirm` | `2026-09-01T09:50:50.416Z` |
