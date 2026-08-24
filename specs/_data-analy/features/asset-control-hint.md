# Data-analy — controlHint — asset (Kind B catalog list + form)

| Field | Value |
|-------|-------|
| feature | `asset` |
| packKind | `list` |
| mode | `cluster_import` feature-scoped (retry `roleOnly=data_analy` · **no Excel** in ProductRoot · demo + context + CUC2 catalogs) |
| status | `done` |
| changeScope | `edit_page` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.15.19` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.14.5` |
| rulesVersion | `2026.08.14.9` |
| versionGate | `rechecked` |
| contentHash | `sha256:b21de98e21ce800f30383fb452770f85aa87d5be969e4bf0ccd5387c2acd17af` |
| headerFingerprint | `sha256:e127da988394014b734c7277ce7e598b892525efcfefb53ecee2b034d1d7b051` |
| analyzedAt | `2026-08-14T14:51:00.000Z` |
| cluster | `specs/_data-analy/clusters/cluster-asset-header-v1.md` |
| taskId | `task_67ce475b` |
| realData | `specs/_data-analy/features/asset-real-data.md` |

## § Delta Current vs New (`edit_page` · `task_67ce475b`)

Giữ PO/Design/SA/TL artifacts đã confirmed. Delta **bắt buộc** pack edit:

| ID | Current (prior Review `task_bf4df098`) | New (SSOT) | Surface |
|----|----------------------------------------|------------|---------|
| GAP-L3-REAL-DATA | **Thiếu** `asset-real-data.md` | §A+§B bind list/form/lookup/init-data/schema | data-analy |
| GAP-RPT-SRC-ASSET-01 | Entity/DTO/list **không** SL/ĐVT · `rpt-tai-san` blocked | `Quantity` + `UnitCode` trên `rmms_road_assets` + DTO + form + lưới + init-data `units` + schema seed | form + list + BE |
| GAP-HARNESS-02 | HARNESS header stale `draft` vs Review done | STATUS + HARNESS sync `task_67ce475b` | docs |

**Không** đổi: Kind B A–D · full-page form · SearchInput type/route 23/38 · LinPageLayout · `LinCatalogUiSchemaEditorModal` · API `api/v1/asset/road-assets` · route MFE `/so-ts`.

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** lookup API.  
> **Cấm** Dev đoán Text vs SearchInput khi đã có bảng này.

## Sources

| Source | Path | sha256 |
|--------|------|--------|
| Context | `docs/context/features/asset.md` | `36082136ccb2e818f9f2981085d2f92ec0c3efaea498681823bfcb22bab631d7` |
| Control map | `docs/context/_raw/legacy-govone/demo-maps/asset-control-map.md` | `7cd9b288569012f8ade13f1e56eba0a840f24e8779a35bfcf88c6c9faa831daa` |
| Actions | `docs/context/_raw/legacy-govone/demo-maps/asset-actions.md` | `d1a1b356b5123160d693b082c5a4246d06e8abf82d9da9fb76d317eb07d6c59c` |
| Demo entry | `Linm.RMMS.Demo/src/demo/features/asset-demo.html` | `e90b5bb79a2daf9804fa5d3f7d369378a256efa38f7efaa4ba784bce11e90bb6` |
| Demo page | `Linm.RMMS.Demo/src/demo/asset/asset.html` | `1bbe1d23aa02b69ce977cc44913458a703b3389dbd7058a9c907ea9c64fd9c09` |
| Demo data | `Linm.RMMS.Demo/src/demo/asset/js/asset-data.js` | `acb78ff2e92b79443c327eab3f16ddc5663b45e47410d83e408cc1aa474f75c5` |
| Shared catalogs | `specs/_data-analy/shared-catalogs/INVESTIGATE-CUC2.md` · `asset-type-seed.json` · `road-route-seed.json` | APPROVED A |

## Kind / zones (handoff Design)

| Zone | Pattern | DoD |
|------|---------|-----|
| A | Header | title only — **cấm** Thêm mới trên A |
| B | Toolbar + filter | SearchInput + lookups · Tạo mới primary · Refresh · config · **search must work** |
| C | `LinCatalogDataGrid` | kéo cột default ON · row menu Xem/Sửa/Copy/Lịch sử |
| D | Footer | `LinCatalogListPagination` — **cấm** footerPagination / pageSizeBar / raw table |
| Form | Kind B full-page (`AssetFormPage`) | C/E/V/Copy · **cấm** Resource/Slideout/View=disabled xám · leave-confirm dirty |
| Map (demo only this pack) | Kind F | Leaflet live trên demo — MFE map strip **out of scope** list pack |

## Control hint — list filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchInput` | text | mã · tên · QR · tuyến · loại |
| type | Loại tài sản | `SearchInput` | **asset-type** | Master 23 mã · **không** Dropdown 8 nhãn demo làm SSOT |
| route | Tuyến đường | `SearchInput` | **road-route** | Master 38 · **cấm** free-text |
| kmFrom | Lý trình từ | `Text` | chainage | legacy textfield-1079 |
| kmTo | Lý trình đến | `Text` | chainage | legacy textfield-1080 |
| orgTree | Cây đơn vị / tuyến | `SearchInput` tree | **org-unit** | legacy textfield-1033 |

## Control hint — form fields

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| code | Mã tài sản | `Text` | auto | IdCode `TS-yyyyMMdd-nnn` readonly |
| name | Tên tài sản | `Text` | * | |
| type | Loại tài sản | `SearchInput` | * | `catalogKind=asset-type` |
| route | Tuyến đường | `SearchInput` | * | `catalogKind=road-route` |
| kmFrom | Lý trình bắt đầu | `Text` | * | vd km12+300 |
| kmTo | Lý trình kết thúc | `Text` | | |
| status | Tình trạng KT | `Dropdown` | * | Tốt · Theo dõi · Cần bảo trì |
| source | Nguồn | `Dropdown` | | manual · ai (AI confirm → ai-asset-detect) |
| lat | Vĩ độ | `Text` (number) | | pair GPS |
| lng | Kinh độ | `Text` (number) | | pair GPS |
| qr | Mã QR | `Text` | | display P1 |
| photos | Ảnh | `Text` | | mock P1 |
| valueVnd | Giá trị (VND) | `Text` (Money) | | |
| quantity | Số lượng (SL) | `Text` (number) | | GAP-RPT-SRC-ASSET-01 · `decimal?` |
| unitCode | Đơn vị tính (ĐVT) | `Dropdown` | | init-data `units` |
| note | Ghi chú | `Text` | | multiline |
| updatedAt | Cập nhật | `Date` | | readonly display |

## Demo 8 loại ↔ asset-type (alias — Design/SA map)

Closed demo `ASSET_TYPES` (8) **không** thay seed 23. Filter/form production = **SearchInput** master.

| Demo label | Proposed `asset-type.code` | controlHint |
|------------|----------------------------|-------------|
| Mặt đường | `LAND_ROW` (gần nhất) / **UNCLEAR** | SearchInput · PO chốt vs pavement-section |
| Cầu | — | **UNCLEAR** — không mã 1:1 trong 23 · PO/SA (BRIDGE entity roadmap) |
| Biển báo | `GANTRY_SIGN` | SearchInput |
| Hộ lan | `GUARDRAIL` | SearchInput |
| Cột Km | `KM_POST` | SearchInput |
| Cống | `CULVERT_X` (default) / `CULVERT_L` | SearchInput |
| Taluy | `SLOPE_PROTECT` | SearchInput |
| Đèn | `LIGHTING` | SearchInput |

## Lookup APIs (đề xuất SA — **chưa chốt**)

Domain **Asset** · prefix `api/v1/asset` · BFF `web-bff/api/v1/asset` · repo `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** · **cấm** Finance `api/v1/assets`.

| Lookup | API | controlHint consumer |
|--------|-----|----------------------|
| list | `GET /api/v1/asset/road-assets?search=&type=&route=&page=&pageSize=` | Zone B + grid |
| by id | `GET /api/v1/asset/road-assets/{id}` | form View/Edit · XCO |
| create / update | `POST` / `PUT …/road-assets` | form Create/Edit/Copy |
| soft delete | `DELETE …/road-assets/{id}` | |
| road-route | Master `GET /api/v1/…/road-routes` | SearchInput route |
| asset-type | Master `GET /api/v1/…/asset-types` | SearchInput type |
| org-unit | Master tree | SearchInput tree filter |
| history | stub P1 | row menu Lịch sử |

Entity: `RoadAssetEntity` · `rmms_road_assets` · SHARE=tenant_keep.

## Seed / mock

- Demo seed: Cống QL1-CN-001 · Hộ lan QL1-HL-001 · Đèn QL1-CS-001 trên **QL.1**
- Context mock 5 loại: mặt đường · cầu · biển báo · hộ lan · cột Km
- Import Excel wizard **out of scope** list pack

## Handoff

→ **PO:** Kind B list+form · inventory từ bảng trên · Q UNCLEAR Cầu / Mặt đường vs pavement-section  
→ **Design:** A–D + controlHint · **không** Text cho route/type · prototype content-only + reviewUrl · `autoApprove=OFF` → **await_confirm**  
→ **SA:** Asset APIs · Master lookup · **cấm parent JSON**  
→ **TL:** T-CTX · T-PERM · T-UI-LIST (A–D) · T-UI-FORM · T-UI-ACT · **T-UI-LKP · T-UI-FIELD · T-UI-PROD · T-UI-UX** · T-BE/BFF  
→ **Dev:** sau `confirms.beRepo && uiRepo` · MFE `Linm.Web.RMMS.Asset` · `/asset`

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.08.15.19 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.14.5 |
| rulesVersion | 2026.08.14.9 |
| generatedAt | 2026-08-14T14:51:00.000Z |
| versionGate | rechecked |
