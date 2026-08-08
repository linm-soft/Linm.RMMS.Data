# Design — asset-type (Loại tài sản KCHT)

| Field | Value |
|-------|-------|
| feature | `asset-type` |
| Feature Kind | **B** — Catalog **flat** list + **Modal** form |
| status | `confirmed` (Autopilot · run packet) |
| design_confirm | `approve` |
| changeScope | `new_page` |
| packKind | `master` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Master` (`/master/asset-type`) |
| updatedAt | 2026-08-08T18:55:00.000Z |

## 0. Context & Demo (from PO)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/asset-type.md` | Kind B · fields |
| CTX-02 | `docs/context/features/master.md` | hub |
| CTX-03 | `specs/_data-analy/shared-catalogs/INVESTIGATE-CUC2.md` §4 | canonical ~23 |
| SEED-01 | `docs/context/seed/asset-type-seed.json` | 23 types |
| DEM-* | **N/A** | `packKind=master` |

## 1. Kind + UI pattern

| | |
|--|--|
| Feature Kind | **B** |
| List pattern | `LinPageLayout` kind=catalog + **CatalogListShell** (flat grid) |
| Form pattern | **Modal** (5 controls &lt;10) |
| Routes | List `/master/asset-type` · form overlay Modal |
| Toolbar SSOT | `catalog-list-toolbar` + `erp-control-icon-map` |
| Lookup consumer | **`SearchInput`** `assetTypeCode` — Step **2li** · **cấm** Text |
| groupCode | Dropdown từ **init-data** |

## 2. Screens / zones

| Screen | FormMode | Zones | Controls |
|--------|----------|-------|----------|
| Loại tài sản | list | **A Header · B Toolbar · C Grid · D Pagination** | SearchTextInput · table · row menu |
| Form loại TS | create/edit/view/copy | **Modal** | 5 controls · View `readOnly` |

## 3. Field inventory (tiếng Việt)

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| code | **Mã loại** | Text code | * | create editable · edit/view readonly |
| name | **Tên loại** | Text | * | |
| groupCode | **Nhóm** | LOOKUP / Select | * | init-data |
| legacyAliases | **Alias import** | Text | | comma-separated → BE array |
| isActive | **Đang dùng** | Switch | | |

### Nhóm (LOOKUP)

| value | Nhãn |
|-------|------|
| `THOAT_NUOC` | Thoát nước |
| `AN_TOAN` | An toàn |
| `GIAO_THONG` | Giao thông |
| `NHA_TRAM` | Nhà / trạm |
| `KHAC` | Khác |

### List columns

STT · **Mã loại** · **Tên loại** · **Nhóm** · **Số alias** · **Trạng thái** · ⋯

### FormMode badge

| mode | Badge |
|------|-------|
| create | Tạo mới |
| edit | Sửa |
| view | Xem |
| copy | Sao chép |

## 4. Control map

- Shell: `LinPageLayout` · `CatalogListShell` · `SearchTextInput` · `useCatalogTableBusy`
- **A** title «Loại tài sản» — **cấm** Thêm mới trên header
- **B** toolbar: Tạo mới · Làm mới
- **C** flat table; search CI không dấu
- Consumer lookup: SearchInput → `/asset-types/search` · display `code — name`
- View: `readOnly` — **cấm** disabled xám

## Prototype (REQUIRED)

| | |
|--|--|
| Artifact | `ui/prototype/asset-type-list-prototype.html` |
| Zones | **A · B · C · D** |
| Form | Modal · **Nhóm = Dropdown** · consumer SearchInput documented |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/asset-type/ui/prototype/asset-type-list-prototype.html` |

## Handoff → SA

| Field | Value |
|-------|-------|
| controlHint | assetTypeCode=**SearchInput** · groupCode=Dropdown · còn lại Text/Switch |
| reviewUrl | file://…/asset-type-list-prototype.html |
| API outline | `api/v1/integration/asset-types` (DOMAIN-MAP Integration) |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design |
| skillVersion | 2026.08.08.17 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.08.21 |
| rulesVersion | 2026.08.08.19 |
| generatedAt | 2026-08-08T18:55:00.000Z |
| versionGate | ok |
