# PO — asset (List danh mục tài sản KCHT)

| Field | Value |
|-------|-------|
| feature | `asset` |
| changeScope | `edit_page` |
| packKind | `list` |
| Feature Kind | **B** — Catalog list A–D + **full-page** form (`AssetFormPage`) |
| status | `done` |
| requestSource | run packet `task_9ab7f74a` · `/agent-qldb-workflow` · roleOnly=`po` · `/agent-po` |
| autoApprove | **OFF** (Design gate → `await_confirm` khi tới lượt) |
| prior | data-analy `confirmed` · cluster `cluster-asset-header-v1` · controlHint `asset-control-hint.md` · hash `b21de98e…` |
| updatedAt | `2026-08-14T15:00:00.000Z` |
| taskId | `task_9ab7f74a` |

## 1. Goal

Chỉnh trang **Sổ / danh mục tài sản đường bộ (KCHT)** trên web: Kind B catalog list parity + form Create/Edit/View/Copy **full page**. Align demo Signed → MFE `Linm.Web.RMMS.Asset` `/asset` · BE `Linm.RMMS.WebService` domain **Asset** · `api/v1/asset/road-assets`. **Cấm ERP.*** · **cấm** Finance `api/v1/assets` · **cấm** prefix `/rmms/`.

Persona: Ban QLDA · Sở GTVT · Tuần đường (web).

## 2. Current → New (edit_page)

| Layer | Current | New (delta) |
|-------|---------|-------------|
| Demo | Kind F map+list (`asset-demo.html` → `asset/asset.html`) | Giữ visual SSOT map; **pack này không clone chrome/map** — list+form Kind B |
| MFE list | Kind B (prior pack) | 1× `LinPageLayout` · Zone A–D · `LinCatalogDataGrid` kéo cột default ON · footer `LinCatalogListPagination` — **cấm** nested CatalogListShell · footerPagination · pageSizeBar · raw table |
| MFE form | Slideout / mixed (stale PO) | **Full-page** `AssetFormPage` C/E/V/Copy · **cấm** Resource/Slideout · View = `readOnly` **không** disabled xám |
| Filter type/route | Select 8 nhãn demo / Text (stale Design) | **SearchInput** master `asset-type` (23) · `road-route` (38) — **cấm** Dropdown 8 nhãn làm SSOT |
| API | `api/v1/asset/road-assets` | Giữ · BFF `web-bff/api/v1/asset/road-assets` |
| BE | `Linm.RMMS.WebService` · Asset | `RoadAssetEntity` · `rmms_road_assets` · SHARE=`tenant_keep` · **cấm** parent JSON string |

## 3. DoD (đo được)

1. List load + **search work** (mã · tên · QR · tuyến · loại) — page=1 khi filter đổi.
2. Zone B: SearchInput + lookup type/route · kmFrom/kmTo Text · Tạo mới **primary trên B** (**cấm** Thêm mới trên A) · Làm mới · config `fa-cog` · Xóa điều kiện.
3. Zone C: grid STT · Mã · Tên · Loại · Tuyến · Lý trình từ · Lý trình đến · Trạng thái · GPS · actions; row menu **Xem · Sửa · Sao chép · Lịch sử** (history stub P1).
4. Zone D: `LinCatalogListPagination` pageSize **50 / 100 / 200 / 500**.
5. Form full-page: validate + save · leave-confirm dirty · Copy → POST new · IdCode `TS-yyyyMMdd-nnn` readonly.
6. View = `readOnly` (không disabled xám toàn form).
7. Lookup: type + route = SearchInput master — **cấm** free-text.
8. FE `yarn build` (+ typecheck nếu có) PASS · BE `dotnet build` PASS khi đụng API — Dev ghi implement § Build.
9. Live shell: title + toolbar + grid/empty **không** blank/title-clip (GAP-P2-LAYOUT-06).

## 4. CTX / DEM / DI inventory

| ID | Path | Loại |
|----|------|------|
| CTX-01 | `docs/context/features/asset.md` | feature |
| CTX-02 | `docs/context/_raw/legacy-govone/demo-maps/asset-control-map.md` | control-map |
| CTX-03 | `docs/context/_raw/legacy-govone/demo-maps/asset-actions.md` | actions |
| DEM-01 | `Linm.RMMS.Demo/src/demo/features/asset-demo.html` | demo entry |
| DEM-02 | `Linm.RMMS.Demo/src/demo/asset/asset.html` + `js/asset-data.js` | page + seed |
| DI-01 | `specs/_data-analy/clusters/cluster-asset-header-v1.md` | cluster |
| DI-02 | `specs/_data-analy/features/asset-control-hint.md` | controlHint |
| DI-03 | `specs/_data-analy/shared-catalogs/asset-type-seed.json` | 23 loại |
| DI-04 | `specs/_data-analy/shared-catalogs/road-route-seed.json` | 38 tuyến |
| MFE | `Linm.Web.RMMS.Asset` `/asset` | UI |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP Asset | API |

## 5. controlHint (PO chốt từ data-analy — Design map UI · SA map API)

### List filters (Zone B)

| Field key | Label | controlHint | catalogKind |
|-----------|-------|-------------|-------------|
| search | Tìm kiếm | `SearchInput` | text |
| type | Loại tài sản | `SearchInput` | **asset-type** (23) |
| route | Tuyến đường | `SearchInput` | **road-route** (38) |
| kmFrom | Lý trình từ | `Text` | chainage |
| kmTo | Lý trình đến | `Text` | chainage |
| orgTree | Cây đơn vị / tuyến | `SearchInput` tree | **org-unit** |

### Form fields

| Field key | Label | controlHint | required |
|-----------|-------|-------------|----------|
| code | Mã tài sản | `Text` readonly IdCode | auto |
| name | Tên tài sản | `Text` | * |
| type | Loại tài sản | `SearchInput` `asset-type` | * |
| route | Tuyến đường | `SearchInput` `road-route` | * |
| kmFrom | Lý trình bắt đầu | `Text` | * |
| kmTo | Lý trình kết thúc | `Text` | |
| status | Tình trạng KT | `Dropdown` Tốt · Theo dõi · Cần bảo trì | * |
| source | Nguồn | `Dropdown` manual · ai | |
| lat / lng | GPS | `Text` (number) pair | |
| qr | Mã QR | `Text` display P1 | |
| photos | Ảnh | `Text` mock P1 | |
| valueVnd | Giá trị (VND) | `Text` (Money) | |
| note | Ghi chú | `Text` multiline | |
| updatedAt | Cập nhật | `Date` readonly | |

## 6. Open questions — Autopilot chốt (UNCLEAR data-analy)

| ID | Question | Decision (PO) |
|----|----------|----------------|
| GAP-PO-ASSET-01 | Demo «Mặt đường» vs seed `LAND_ROW` vs `pavement-section` | **Không** map «Mặt đường» → `LAND_ROW`. `LAND_ROW` = *Đất thuộc tài sản hạ tầng đường bộ* (hành lang đất), không phải kết cấu mặt đường. CRUD mặt đường = feature **`pavement-section`** (`api/v1/asset/pavement-sections`). Pack `asset` **không** thêm mã loại «Mặt đường». Demo 8 nhãn chỉ alias mock — filter/form production = 23 mã SearchInput. |
| GAP-PO-ASSET-02 | Demo «Cầu» không có mã 1:1 trong 23 | **Không** invent `BRIDGE` trong seed pack này. Cầu = entity roadmap (context Bridge table) **P2 / master `asset-type` riêng**. Demo label «Cầu» = mock alias only. Production create **chỉ** 23 `asset-type` hiện có. SA **không** tách bảng Bridge trong list pack. |
| GAP-PO-ASSET-03 | 6 alias còn lại (Biển báo…Đèn) | Map **canonical** (không thay 23): Biển báo→`GANTRY_SIGN` · Hộ lan→`GUARDRAIL` · Cột Km→`KM_POST` · Cống→`CULVERT_X` (default; `CULVERT_L` chọn SearchInput) · Taluy→`SLOPE_PROTECT` · Đèn→`LIGHTING`. |
| GAP-PO-ASSET-04 | Form Slideout vs full-page | **Full-page** `AssetFormPage` (data-analy + ≥10 field). |
| GAP-PO-ASSET-05 | Excel export | **P1 out of scope** list pack. |
| GAP-PO-ASSET-06 | parent JSON | **Cấm** parent JSON string trên entity/DTO. |

## 7. Grid AC (REQUIRED · list)

| ID | AC |
|----|-----|
| AC-G-01 | Zones **A Header · B Toolbar · C Grid · D Pagination** |
| AC-G-02 | Search + type/route/km apply → page=1 |
| AC-G-03 | Row menu Xem / Sửa / Copy / Lịch sử |
| AC-G-04 | `LinCatalogDataGrid` + kéo cột default ON |
| AC-G-05 | Footer `LinCatalogListPagination` 50/100/200/500 |
| AC-G-06 | 1× `LinPageLayout` — **cấm** nested CatalogListShell |
| AC-G-07 | Flex + skeleton load — **cấm** blank body |

## 8. Out of scope (this pack)

- Full Leaflet / Kind F map shell (giữ demo; MFE map strip later)
- AI candidate Confirm (`ai-asset-detect`)
- Media upload / QR generate runtime (display field only)
- Import Excel wizard · Excel export
- Bảng polymorphic Bridge / Tunnel / … (GAP-F-ASSET-01) — header `RoadAssetEntity` only
- Digital Twin 3D
- Auth NuGet `[RequirePermission]` nếu CommonLib chưa mount (nợ BE cũ — SA ghi TODO, không block list CRUD)

## 9. Handoff → Design

| Field | Value |
|-------|-------|
| Kind | B catalog list A–D + full-page form |
| Prototype | content-only zones A–D · `list-shell-prototype.md` · **skip** note/sidebar/menu/chrome demo |
| reviewUrl | bắt buộc · `autoApprove=OFF` → **await_confirm** (user Approve board) |
| controlHint | bảng §5 — **không** Text cho route/type · **không** Select 8 nhãn |
| Demo visual | `asset-demo.html` → `asset/asset.html` |
| BE | `api/v1/asset/road-assets` · lookups master road-routes / asset-types / org-unit tree |
| Next roles | design → sa → team-lead → dev → qa → review = **pending** đến lượt |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po |
| skillVersion | 2026.08.14.5 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.14.5 |
| rulesVersion | 2026.08.14.9 |
| generatedAt | 2026-08-14T15:00:00.000Z |
| versionGate | rechecked |
| contentHashPriorDataAnaly | sha256:b21de98e21ce800f30383fb452770f85aa87d5be969e4bf0ccd5387c2acd17af |
