# Real-data bind — asset (Kind B catalog list + form)

| | |
|---|---|
| feature | `asset` |
| prefix | `web-bff/api/v1` |
| sourceTables | `rmms_road_assets` · master `asset-types` · `road-routes` · `org-units` |
| changeScope | `edit_page` |
| taskId | `task_67ce475b` |

## §A Resource

| Resource | Entity / table | Key |
|----------|----------------|-----|
| Road asset list/detail | `RoadAssetEntity` / `rmms_road_assets` | `Id` Guid · `Code` TS-yyyyMMdd-nnn · tenant `CompanyCode` |
| Loại TS lookup | master `asset-types` | `code` · `name` (23 mã) |
| Tuyến lookup | master `road-routes` | `code` · `name` (38 tuyến) |
| Đơn vị filter | master `org-units` tree | `code` · `name` |
| ĐVT dropdown | init-data constants | `UnitOptions` cái · m · m2 · km · bộ · tấn |
| Catalog UI schema | `CatalogUiSchemaRegistry.road-assets` | seed cột list + form |

## §B Bind

| UI zone | Method | Path | DTO → display |
|---------|--------|------|---------------|
| Zone B search | GET | `/asset/road-assets?search=&type=&route=&kmFrom=&kmTo=&orgUnit=&page=&pageSize=` | filter → page=1 |
| Zone C grid | GET | (same list) | `code` · `name` · `type` · `route` · `kmFrom` · `kmTo` · `status` · **`quantity`** · **`unitCode`** · GPS |
| Zone D pagination | — | client | `totalCount` · pageSize 50/100/200/500 |
| Type filter/form | GET | `/integration/asset-types/search` | `code`→value · `name`→label |
| Route filter/form | GET | `/integration/road-routes/search` | `code`→value |
| Org filter | GET | `/integration/org-units/tree` | flatten tree → SearchInput |
| Status/source/ĐVT | GET | `/asset/road-assets/init-data` | `statuses` · `sources` · **`units`** |
| Form View/Edit | GET | `/asset/road-assets/{id}` | full DTO incl. `quantity` · `unitCode` |
| Create/Copy | POST | `/asset/road-assets` | body incl. `quantity` · `unitCode` |
| Update | PUT | `/asset/road-assets/{id}` | body incl. `quantity` · `unitCode` · `source` |
| Soft delete | DELETE | `/asset/road-assets/{id}` | `IsActive=false` |
| Schema editor | GET/PUT | `/integration/catalogs/road-assets/ui-schema` | `LinCatalogUiSchemaEditorModal` |

**BFF:** `web-bff/api/v1/asset/road-assets` proxy → API `api/v1/asset/road-assets`.  
**Cấm** ERP.* · Finance `api/v1/assets` · prefix `/rmms/`.

## §C Write rules

| Action | Rule |
|--------|------|
| create | `Type` + `Route` validated Integration master · IdCode auto `TS-*` |
| update | PUT scalars flat · **cấm** parent JSON |
| copy | POST new · clear `id` · optional `codePrefix` |
| delete | soft delete tenant-scoped |
| quantity | `decimal?` nullable · step 0.0001 |
| unitCode | `string?` from init-data `units` · max 32 |

## §D Empty / fail

| Case | Behavior |
|------|----------|
| list empty | «Không có dữ liệu tài sản» / «Không có tài sản phù hợp bộ lọc» |
| list fail | empty grid · totalCount=0 |
| init-data fail | status/source/units fallback `[]` |
| lookup fail | SearchInput empty · toast on save 422 |
| schema fail | bootstrap columns from `uiColumns` |

## §E Progress

| Milestone | Status |
|-----------|--------|
| Analy real-data | **this turn** (`task_67ce475b`) |
| GAP-RPT-SRC-ASSET-01 Quantity+UnitCode | Dev verified live |
| Report `rpt-tai-san` source | unblocks after Dev |

## §F Cấm

- Invent `api/v1/so-ts/*` ERP fork  
- Dropdown 8 nhãn demo làm SSOT type/route  
- Resource/Slideout form  
- `LinListTableConfigModal` thay schema editor  
- Mock-only list khi BFF available  

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.08.15.19 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.14.5 |
| rulesVersion | 2026.08.14.9 |
| generatedAt | 2026-08-23T16:30:00.000Z |
| versionGate | rechecked |

---
<!-- Version meta: skillId=agent-data-analy skillVersion=2026.08.15.19 schemaVersion=1 workflowVersion=2026.08.14.5 rulesVersion=2026.08.14.9 versionGate=rechecked -->
