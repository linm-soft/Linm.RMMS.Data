# Real-data bind â€” csdl-bieu-15 (edit_page Â· T-XLS-S15 export/import)

| | |
|---|---|
| feature | `csdl-bieu-15` |
| packKind | `list` |
| changeScope | `edit_page` |
| status | `done` |
| taskId | `task_4b6f0c6e` |
| priorTask | `task_23453ac3` â†’ review `task_0c28671f` (typed CRUD **done** Â· **cáº¥m** reopen new_page) |
| resource | `ops-facilities` |
| prefix | **live** `api/v1/asset/csdl-records` Â· BFF `web-bff/api/v1/asset/csdl-records` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` Â· **cáº¥m ERP.*** Â· **cáº¥m** `api/v1/infra/*` |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` Â· alias `/csdl-bieu-15` Â· hub `?resource=ops-facilities` |
| map | `none` |
| contentHash | `sha256:8a85d68eaef24cf98c312f83a3a100de25b1212e8a751d6f1f42005d38dd0fc8` |
| headerFingerprint | `sha256:0064a4903777f7ea8d51c7423d8451a20daf77a5934929001905edaa380f4fe4` |
| sourceTables | typed `Schema_CsdlBieu15` / `OpsFacility` Â· **khÃ´ng** báº£ng report store P1 |
| catalogKind UI schema | `ops-facilities` |
| IdCode prefix | `OF` |
| peerSoTs | `so-ts-toll` Â· `so-ts-rest-area` Â· `so-ts-station-house` Â· **cáº¥m** merge so-ts-* / `road-assets` vÃ o export |
| epicCite | `docs/context/features/csdl-export-print.md` Â· Wave 1 `T-XLS-S15` |
| golden | Cá»¥c `1. Biá»ƒu máº«u CSDL.xls` sheet Biá»ƒu 15 Â· **cáº¥m** há»“ sÆ¡ 12+8 |
| devSlash | `/implement-export-import-excel` Â· BFF binary |

## Â§ Delta Current vs New (`edit_page` Â· `task_4b6f0c6e`)

| ID | Current live | New (this analy) |
|----|--------------|------------------|
| Form / list | Typed 20 Â· facility + area + equipment Â· Slideout + grid **shipped** | **Unchanged** |
| Toolbar | Refresh Â· Add Â· History Â· Schema Â· View/Edit/Delete â€” **khÃ´ng** Xuáº¥t | **Xuáº¥t Excel** (+ Import P1) trÃªn `catalogToolbar` |
| Filter | `LinErpListFilterBar` field+ðŸ” | **Unchanged** Â· **cáº¥m** action Xuáº¥t (**GAP-FILTER-BAR-08**) |
| Export API | Missing / stub | `GET â€¦/csdl-records/export?resource=ops-facilities` â†’ binary (epic cite Â· SA) |
| Import API | Missing / stub | `POST â€¦/csdl-records/import?resource=ops-facilities` (P1) |
| Golden | â€” | Cá»¥c 16-sheet Â· sheet Biá»ƒu 15 Â· checksum 20 cá»™t Â· 1 sheet (facility+area+equipment cÃ¹ng hÃ ng) |
| Peer | so-ts-toll / rest-area / station-house cite | **cáº¥m** merge/dump `road-assets` vÃ o file Â· **GAP-CSDL-CUC-11** |
| Done gate | Typed STATUS done | **â‰ ** export xong Â· cáº§n file má»Ÿ Ä‘Æ°á»£c cáº¡nh máº«u |

## Â§A â€” Nguá»“n

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/csdl-bieu-15.md` | â€” | version gate |
| `context` | `docs/context/features/csdl-export-print.md` Â§ Wave 1 Â· API | â€” | golden / toolbar rules |
| `analy` | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` Biá»ƒu 15 | â€” | 20 cá»™t Â· 5 loáº¡i CT |
| `db-ssot` | `docs/context/11-CSDL-SO-SACH-DATABASE-API.md` Â§ OpsFacility / Schema_CsdlBieu15 | â€” | FacilityKind Â· area Â· equipment |
| `api` Â· list/CRUD | `GET/POST/PUT/DELETE â€¦/csdl-records?resource=ops-facilities` | empty grid VN | toast 4xx |
| `api` Â· **export** | `GET â€¦/csdl-records/export?resource=ops-facilities` (epic Â· SA chá»‘t) | file 0 row OK | toast Â· **cáº¥m** fake blob |
| `api` Â· **import** | `POST â€¦/csdl-records/import?resource=ops-facilities` | â€” | validation Â· typed fields |
| `entity` | `Schema_CsdlBieu15` / OpsFacility | â€” | CompanyCode tenant |
| `mfe` | `CsdlBieu15Page` Â· `fromCatalogToolbar` | â€” | wire export action |
| `excel` | `1. Biá»ƒu máº«u CSDL.xls` sheet Biá»ƒu 15 | â€” | golden Â· not runtime SSOT |
| `excel` | Há»“ sÆ¡ `4.1. In_Máº«uâ€¦xlsx` 12 biá»ƒu | â€” | **STALE** Â· so sÃ¡nh only |
| `peer` | so-ts-toll / rest-area / station-house Â· `api/v1/asset/road-assets` | â€” | **cite only** Â· **cáº¥m** bind export |

## Â§B â€” Bind field (HARD)

### B1 â€” CRUD fields (**unchanged** â€” keep prior bind)

Reuse prior Â§B (`task_23453ac3`): `resource` Â· filters Â· typed 20 Â· soft-delete Â· facilityKind/area/equipment*. **Cáº¥m** Ä‘á»•i write paths typed trong pack nÃ y.

### B2 â€” Export / import (**delta**)

| uiField / action | Label | controlHint | catalogKind | GET / POST | write field | sameMfe |
|------------------|-------|-------------|-------------|------------|-------------|---------|
| exportExcel | Xuáº¥t Excel | ToolbarButton | â€” | `GET â€¦/export?resource=ops-facilities` (+ filter QS náº¿u Q-XLS-SCOPE=filtered) | â€” (download) | **gap** (thiáº¿u nÃºt) |
| importExcel | Nháº­p Excel | ToolbarButton + file | â€” | `POST â€¦/import?resource=ops-facilities` multipart | upsert typed | **gap** P1 |
| exportFileName | â€” | derived | â€” | Content-Disposition | â€” | SA |

**Prefix map (keep + delta):**

| Operation | Path |
|-----------|------|
| List / Detail / CRUD | `/web-bff/api/v1/asset/csdl-records` (+ `/{id}`) â€” **keep** |
| **Export** | `GET /web-bff/api/v1/asset/csdl-records/export?resource=ops-facilities` |
| **Import** | `POST /web-bff/api/v1/asset/csdl-records/import?resource=ops-facilities` |
| API mirror | `api/v1/asset/csdl-records[/export|/import]` Â· **cáº¥m** invent `/infra/` |

DB SSOT map (export row): `FacilityKind`â†”`facilityKind` Â· `FacilityName`â†”`facilityName` Â· `CourtyardAreaM2`â†”`courtyardAreaM2` Â· `BuildingQty`/`BuildingAreaM2` Â· `OtherStructQty`/`OtherStructAreaM2` Â· `Status`â†”`status` Â· `YearBuilt`â†”`yearBuilt` Â· `EquipmentKind`/`EquipmentQty`/`EquipmentStatus` â€” **SA** giá»¯ typed.

## Â§C â€” Catalog / lookup

Unchanged prior LOOKUP_STATIC (province/facilityKind/status/equipmentStatus) + `road-route` + `org-unit` P2. Export **khÃ´ng** thÃªm catalogKind.

## Â§D â€” Map / váº½

`none`

## Â§E â€” Empty / error / permission / export

| Case | UX |
|------|-----|
| Empty list export | File váº«n táº£i Â· 0 data row Â· header merge Ä‘Ãºng máº«u Â· toast info OK |
| Export fail | toast Â· **cáº¥m** silent Â· **cáº¥m** CSV generic lÆ°á»›i |
| Import invalid typed | toast Â· giá»¯ map SA Â· **cáº¥m** Ä‘á»•i entity |
| Permission | Auth debt Â· **cáº¥m** invent path |
| Toast stub only | **FAIL** DoD Â· **GAP-BIEU15-XLS-02** |

## Â§F â€” Cáº¥m

- Demo / localStorage / seed giáº£ lÃ m SSOT runtime  
- ERP.* / Domains/Master / `api/v1/infra/*` / invent `api/v1/so-ts/*`  
- Toast stub = export done Â· filter-bar export (**GAP-FILTER-BAR-08**)  
- Golden há»“ sÆ¡ 12+8 Â· invent sheet riÃªng cÃ´ng trÃ¬nh/thiáº¿t bá»‹  
- Merge peer so-ts-toll / rest-area / station-house / `road-assets` vÃ o export  
- Re-open new_page typed CRUD Â· yarn build / e2e @ data_analy  

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.09.05.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.05.03 |
| rulesVersion | 2026.09.17.3 |
| contentHash | `sha256:8a85d68eaef24cf98c312f83a3a100de25b1212e8a751d6f1f42005d38dd0fc8` |
| headerFingerprint | `sha256:0064a4903777f7ea8d51c7423d8451a20daf77a5934929001905edaa380f4fe4` |
| generatedAt | 2026-09-18T02:10:00.000Z |
| versionGate | ok |
| taskId | task_4b6f0c6e |
| packKind | list |
| changeScope | edit_page |

---
<!-- Version meta: skillId=agent-data-analy skillVersion=2026.09.05.03 schemaVersion=1 workflowVersion=2026.09.05.03 rulesVersion=2026.09.17.3 versionGate=ok contentHash=sha256:8a85d68eaef24cf98c312f83a3a100de25b1212e8a751d6f1f42005d38dd0fc8 changeScope=edit_page taskId=task_4b6f0c6e -->
