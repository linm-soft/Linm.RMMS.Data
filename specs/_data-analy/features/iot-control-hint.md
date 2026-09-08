# Data-analy — controlHint — iot (Kind B list + Kind D full-page form)

| Field | Value |
|-------|-------|
| feature | `iot` |
| title | Danh sách IoT |
| packKind | `list` |
| mode | `feature_context` (**new_page** · **no Excel** · CTX only · demo **N/A**) |
| changeScope | `new_page` |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.05.2` |
| versionGate | `ok` |
| contentHash | `sha256:b4425f2faa85d5abfa66660ff6082401389281a346dd70bd77f024d0695a41b3` |
| headerFingerprint | `sha256:7ce53f8ee10b3309e435879a0a14bbf3398a9220d2c049f9d61d3f48ea5cfe1c` |
| analyzedAt | `2026-09-05T03:51:05.144Z` |
| cluster | — (không Excel / DI) |
| taskId | `task_2f176635` |
| realData | `specs/_data-analy/features/iot-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Iot** · **cấm ERP.*** / Domains/Master |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Iot` · route `/iot` |
| mfeStdUrl | `http://localhost:9309/iot` |
| demo | **N/A** |
| menu | `rmms-iot-iot` · `package_menu_items` **ADMIN** only (**GAP-IOT-03**) |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** schema/migration + devices CRUD.  
> Typography: label **13** · input D14 / M16 (**GAP-TYP-01**).  
> Filter bar: `LinErpListFilterBar` + `data-lin-list-layout="erp-filter-bar"` · **cấm** nút Tìm riêng (**GAP-FILTER-BAR-01**).  
> Grid: `po-design-grid-standard` · CatalogListShell Kind B A–D.  
> **≠** `asset-kcht-dashboard` · **≠** `csdl-so-sach`.  
> **Cấm** coi `api/v1/iot/health` = CRUD devices (**GAP-IOT-02**).

## Sources

| Source | Path | sha256 / note |
|--------|------|---------------|
| Context | `docs/context/features/iot.md` | `b4425f2faa85d5abfa66660ff6082401389281a346dd70bd77f024d0695a41b3` |
| Demo | — | **N/A** · skip |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Iot · `api/v1/iot` · `web-bff/api/v1/iot` |
| API health | `…/Domains/Iot/Controllers/IotHealthController.cs` | `GET api/v1/iot/health` **live** |
| BFF health | `…/Iot.Bff/Controllers/IotBffController.cs` | `GET web-bff/api/v1/iot/health` **live** |
| DTO | `…/Iot.Models/DTOs/IotHealthResponse.cs` | health only |
| MFE list | `Linm.Web.RMMS.Iot/.../IotListPage.tsx` | scaffold empty-state |
| MFE form | `Linm.Web.RMMS.Iot/.../IotFormPage.tsx` | scaffold hint `/erp-form-context` |
| Catalog | `specs/_data-analy/shared-catalogs/road-route-seed.json` | `catalogKind=road-route` |

Normalized header (CTX §4 draft · no Excel):

`code|name|type|status|routeCode|km|search`

## Kind / zones (handoff Design)

| Zone | Pattern | DoD |
|------|---------|-----|
| A | Header | title «Danh sách IoT» — **cấm** Thêm mới trên A |
| B | Toolbar + filter | `LinErpListFilterBar` · SearchTextInput · status · type · routeCode SearchInput · Tạo mới / Refresh / Delete / History / config trên **toolbar** (không trong filter) |
| C | `LinCatalogDataGrid` | kéo cột default ON · row menu Xem/Sửa/Xóa · STT · **cấm** header `TT` |
| D | Footer | `LinCatalogListPagination` 50/100/200/500 |
| Form | Kind D **Full page** | `/iot/tao-moi` · `/iot/:id` · CatalogFormShell · leave-confirm · **cấm** slideout trừ Design đổi |

## Control hint — list filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | — | mã · tên thiết bị |
| status | Trạng thái | `Dropdown` | LOOKUP_STATIC | `online` · `offline` (CTX) |
| type | Loại cảm biến | `Dropdown` | LOOKUP_STATIC | closed-set **đề xuất** · PO chốt mã (**Q-IOT-TYPE-01**) |
| routeCode | Tuyến | `SearchInput` | **road-route** | **cấm** free-text khi seed READY |

## Control hint — form fields (Full page)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| code | Mã thiết bị | `Text` code / IdCode | * | auto hoặc nhập · SA chốt pattern |
| name | Tên thiết bị | `Text` | * | |
| type | Loại cảm biến | `Dropdown` | * | LOOKUP_STATIC · **Q-IOT-TYPE-01** |
| status | Trạng thái | `Dropdown` | * | online / offline |
| routeCode | Tuyến | `SearchInput` | * | **road-route** |
| km | Lý trình | `Number` | | chainage · CTX |

## Grid columns (đề xuất)

| Column | Source | Notes |
|--------|--------|-------|
| STT | client | |
| code | list | |
| name | list | |
| type | list | chip/label |
| status | list | chip online/offline |
| routeCode | list | |
| km | list | |
| actions | row menu | Xem · Sửa · Xóa |

## Gaps / open questions

| ID | |
|----|--|
| GAP-IOT-01 | MFE scaffold — chưa CatalogListShell / field inventory wire |
| GAP-IOT-02 | BE chỉ health — thiếu `devices` CRUD + Schema pair + Entity |
| GAP-IOT-03 | Menu P2 extra — **cấm** gán STAFF / ADMIN-RMMS |
| Q-IOT-TYPE-01 | Closed-set mã `type` (cảm biến/logger) — PO chốt trước Design hardcode |
| Q-IOT-CODE-01 | IdCode pattern (prefix) — SA chốt |

## Confirmed by

ai-autocode-autopilot · task_2f176635 · roleOnly=`data_analy`

---
<!-- Version meta: skillVersion=2026.08.25.01 · schemaVersion=1 · workflowVersion=2026.09.01.02 · rulesVersion=2026.09.05.2 · contentHash=sha256:b4425f2faa85d5abfa66660ff6082401389281a346dd70bd77f024d0695a41b3 · versionGate=ok · status=done -->