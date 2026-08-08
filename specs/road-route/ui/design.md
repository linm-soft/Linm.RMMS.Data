# Design — road-route (Tuyến đường)

| Field | Value |
|-------|-------|
| feature | `road-route` |
| Feature Kind | **B** — Catalog **flat** list + **Modal** form |
| status | `confirmed` (Autopilot · run packet) |
| design_confirm | `approve` |
| changeScope | `new_page` |
| packKind | `master` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Master` (`/master/road-route`) |
| updatedAt | 2026-08-08T18:40:00.000Z |

## 0. Context & Demo (from PO)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/road-route.md` | Kind B · fields |
| CTX-02 | `docs/context/features/master.md` | hub |
| CTX-03 | `specs/_data-analy/shared-catalogs/INVESTIGATE-CUC2.md` §3 | canonical |
| SEED-01 | `docs/context/seed/road-route-seed.json` | ~38 routes |
| DEM-* | **N/A** | `packKind=master` |

## 1. Kind + UI pattern

| | |
|--|--|
| Feature Kind | **B** |
| List pattern | `LinPageLayout` kind=catalog + **CatalogListShell** (flat grid) |
| Form pattern | **Modal** (6 controls &lt;10) |
| Routes | List `/master/road-route` · form overlay Modal |
| Toolbar SSOT | `catalog-list-toolbar` + `erp-control-icon-map` |
| Lookup | **`SearchInput`** `parentCode` — Step **2li** · **cấm** Text |
| routeKind | Dropdown từ **init-data** |

## 2. Screens / zones

| Screen | FormMode | Zones | Controls |
|--------|----------|-------|----------|
| Tuyến đường | list | **A Header · B Toolbar · C Grid · D Pagination** | SearchTextInput · table · row menu |
| Form tuyến | create/edit/view/copy | **Modal** | 6 controls · View `readOnly` |

## 3. Field inventory (tiếng Việt)

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| code | **Mã tuyến** | Text code | * | create editable · edit/view readonly |
| name | **Tên tuyến** | Text | * | |
| routeKind | **Loại tuyến** | LOOKUP / Select | * | init-data |
| parentCode | **Tuyến mẹ** | **SearchInput** | | cấm Text |
| notes | **Ghi chú** | Text | | |
| isActive | **Đang dùng** | Switch | | |

### Loại tuyến (LOOKUP)

| value | Nhãn |
|-------|------|
| `QUOC_LO` | Quốc lộ |
| `HCM` | Đường Hồ Chí Minh |
| `CAO_TOC` | Cao tốc / đường nối |
| `KHAC` | Khác |

### List columns

STT · **Mã tuyến** · **Tên tuyến** · **Loại** · **Trạng thái** · ⋯

### FormMode badge

| mode | Badge |
|------|-------|
| create | Tạo mới |
| edit | Sửa |
| view | Xem |
| copy | Sao chép |

## 4. Control map

- Shell: `LinPageLayout` · `CatalogListShell` · `SearchTextInput` · `useCatalogTableBusy`
- **A** title «Tuyến đường» — **cấm** Thêm mới trên header
- **B** toolbar: Tạo mới · Làm mới
- **C** flat table; search CI không dấu
- **parentCode:** SearchInput → `/road-routes/search` · display `code — name`
- View: `readOnly` — **cấm** disabled xám

## Prototype (REQUIRED)

| | |
|--|--|
| Artifact | `ui/prototype/road-route-list-prototype.html` |
| Zones | **A · B · C · D** |
| Form | Modal · **Tuyến mẹ = SearchInput** |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/road-route/ui/prototype/road-route-list-prototype.html` |

## Handoff → SA

| Field | Value |
|-------|-------|
| controlHint | parentCode=**SearchInput** · routeKind=Dropdown · còn lại Text/Switch |
| reviewUrl | file://…/road-route-list-prototype.html |
| API outline | `api/v1/integration/road-routes` (DOMAIN-MAP Integration) |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design |
| skillVersion | 2026.08.08.17 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.08.20 |
| rulesVersion | 2026.08.08.19 |
| generatedAt | 2026-08-08T18:40:00.000Z |
| versionGate | ok |
