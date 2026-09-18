# Data-analy â€” controlHint â€” csdl-bieu-15 (Kind B list + Kind D Slideout Â· Biá»ƒu 15)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-15` |
| packKind | `list` |
| mode | `feature_context` (edit_page Â· T-XLS-S15 Â· keep typed CRUD) |
| changeScope | `edit_page` |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.05.03` |
| rulesVersion | `2026.09.17.3` |
| versionGate | `ok` (CTX hash change + export delta Wave 1 Â· autoApprove queue Â· **khÃ´ng** AskQuestion) |
| contentHash | `sha256:8a85d68eaef24cf98c312f83a3a100de25b1212e8a751d6f1f42005d38dd0fc8` |
| headerFingerprint | `sha256:0064a4903777f7ea8d51c7423d8451a20daf77a5934929001905edaa380f4fe4` |
| analyzedAt | `2026-09-18T02:10:00.000Z` |
| cluster | `csdl-cuc-2026` Â· Excel sheet Biá»ƒu 15 Â· **20 cá»™t** Â· TMC/thu phÃ­/háº¡t/kho Â· Wave 1 `T-XLS-S15` |
| taskId | `task_4b6f0c6e` |
| priorTask | `task_23453ac3` â†’ pipeline review `task_0c28671f` (typed CRUD **done** â€” **cáº¥m** re-run new_page typed) |
| autoApprove | `ON` (queue) |
| realData | `specs/_data-analy/features/csdl-bieu-15-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` Â· domain **Asset** Â· `api/v1/asset/csdl-records` Â· **cáº¥m ERP.*** Â· **cáº¥m** invent `api/v1/infra/*` |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` Â· alias `/csdl-bieu-15` Â· hub `?resource=ops-facilities` |
| resource | `ops-facilities` |
| formNo | `15` Â· title VN **TMC / thu phÃ­ / háº¡t / kho** |
| peerSoTs | `so-ts-toll` Â· `so-ts-rest-area` Â· `so-ts-station-house` Â· **â‰ ** merge form so-ts-* Â· **GAP-CSDL-CUC-11** |
| runMode | `edit_page` Â· export/import Excel Ä‘Ãºng máº«u Cá»¥c Â· **cáº¥m** new_page typed CRUD |
| epicCite | `docs/context/features/csdl-export-print.md` Wave 1 Â· `T-XLS-S15` |
| devSlashExport | `/implement-export-import-excel` Â· BFF binary |

> Data-analy **Ä‘á» xuáº¥t** controlHint. Design **chá»‘t** control-map (giá»¯ prototype typed Â· **chá»‰** delta toolbar export). SA **chá»‘t** binary export path.  
> Typography: label **13** Â· input D14 / M16 (**GAP-TYP-01**).  
> **Giá»¯** PO/Design/SA artifacts typed â€” analy **chá»‰** Â§ Delta export.  
> Toast stub / typed STATUS done **â‰ ** export xong.  
> Golden = Cá»¥c **16-sheet** xls Â· **cáº¥m** há»“ sÆ¡ 12+8.

## Sources

| Source | Path | sha256 / note |
|--------|------|---------------|
| Context | `docs/context/features/csdl-bieu-15.md` | `8a85d68eaef24cf98c312f83a3a100de25b1212e8a751d6f1f42005d38dd0fc8` |
| Export epic | `docs/context/features/csdl-export-print.md` | Wave 1 Â· `T-XLS-S15` Â· API export/import |
| Parent hub | `docs/context/features/csdl-so-sach.md` | cite hub Kind G Â· resource `ops-facilities` |
| Cluster analy | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` | Biá»ƒu 15 Â· **20 cá»™t** Â· 5 loáº¡i CT |
| DB API SSOT | `docs/context/11-CSDL-SO-SACH-DATABASE-API.md` | Schema_CsdlBieu15 / OpsFacility |
| Demo | N/A (packet) Â· prior hub demo zone-only | **cáº¥m** demo SSOT |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Asset Â· `csdl-records` Â· slug `csdl-bieu-15` |
| Live MFE | `CsdlBieu15Page` Â· `fromCatalogToolbar` | typed list+slideout **shipped** Â· **thiáº¿u** Xuáº¥t Excel |
| Live API | `CsdlCatalogRecordsController` | CRUD live Â· export/import **gap** |
| Golden Excel | `data-import/â€¦/1. Biá»ƒu máº«u CSDL.xls` sheet Biá»ƒu 15 | Cá»¥c **16-sheet** Â· **cáº¥m** há»“ sÆ¡ 12+8 lÃ m golden |
| Peer Sá»• TS | toll / rest-area / station-house Â· `road-assets?type=â€¦` | cite only Â· **cáº¥m** merge vÃ o export |

Normalized header (unchanged Â· 20 â€” Excel flatten):

`code|roadCode|roadName|province|kmFrom|kmTo|facilityKind|facilityName|courtyardAreaM2|buildingQty|buildingAreaM2|otherStructQty|otherStructAreaM2|status|yearBuilt|equipmentKind|equipmentQty|equipmentStatus|manageUnit|notes`

**KhÃ´ng** thÃªm cá»™t ngoÃ i 20. DB map giá»¯ typed SA: `FacilityKind` Â· `FacilityName` Â· area/qty Â· `Status` Â· `YearBuilt` Â· equipment* â†” camelCase.

## Â§ Delta Current vs New (`edit_page` Â· `task_4b6f0c6e` Â· **T-XLS-S15**)

| ID | Current (live / prior analy) | New (this analy) | Surface |
|----|------------------------------|------------------|---------|
| GAP-BIEU15-XLS-01 | Typed CRUD + 20 cá»™t + section cÃ´ng trÃ¬nh/thiáº¿t bá»‹ **PASS** Â· toolbar **khÃ´ng** Xuáº¥t/Import binary | **Xuáº¥t Excel** (+ Import P1) Ä‘Ãºng sheet Biá»ƒu 15 Â· merge-header Â· 20 cá»™t | `catalogToolbar` / `report-toolbar-actions` |
| GAP-BIEU15-XLS-02 | Toast / stub action coi Â«cÃ³ nÃºtÂ» | File binary qua BFF Â· `/implement-export-import-excel` Â· **cáº¥m** toast-only done | FE + BFF + BE |
| GAP-BIEU15-XLS-03 | â€” / há»“ sÆ¡ 12+8 STALE | Golden = Cá»¥c **16-sheet** xls sheet Biá»ƒu 15 Â· **cáº¥m** 12+8 golden | SA/Dev checksum |
| GAP-BIEU15-XLS-04 | Filter bar chá»‰ field + ðŸ” | **Cáº¥m** Ä‘áº·t Xuáº¥t/Import trÃªn `LinErpListFilterBar` (**GAP-FILTER-BAR-08**) | Zone B filter vs toolbar |
| GAP-BIEU15-XLS-05 | API CRUD only | `GET â€¦/csdl-records/export?resource=ops-facilities` Â· `POST â€¦/import?resource=` (cite epic Â· SA chá»‘t) | BE Asset |
| GAP-BIEU15-XLS-06 | facilityKind 5 loáº¡i + area + equipment form | Export **1 sheet** 20 cá»™t Â· facility+area+equipment cÃ¹ng hÃ ng Â· **cáº¥m** invent sheet riÃªng | export engine |
| GAP-BIEU15-XLS-07 | Peer so-ts-toll / rest-area / station-house tá»“n táº¡i | Export qty/m biá»ƒu Cá»¥c Â· **cáº¥m** merge/dump Sá»• TS `road-assets` vÃ o file | export bind |
| â€” | Typed form/list/route/hub | **KhÃ´ng Ä‘á»•i** Â· **cáº¥m** new_page typed CRUD re-open | form / list / hub |

**KhÃ´ng** Ä‘á»•i: API prefix `api/v1/asset/csdl-records` Â· resource `ops-facilities` Â· Kind B Aâ€“D Â· Kind D Slideout Â· filter slots Â· **cáº¥m ERP.*** Â· IdCode `OF` Â· formNo `15` Â· section vá»‹ trÃ­ + cÃ´ng trÃ¬nh + thiáº¿t bá»‹ Â· peer cite-only.

**Closed / keep (prior new_page â€” khÃ´ng reopen):** GAP-BIEU15-HUB/TYPED/ROUTE/KIND/AREA/EQ/STATUS/DB/DMAP Â· ROAD/PROV/ORG P2 debt Â· GAP-CSDL-CUC-11 Â· prior GAP-CSDL-XLS-01 stub â†’ **supersede** báº±ng GAP-BIEU15-XLS-*.

## Kind / zones (handoff Design â€” delta only)

| Zone / surface | Pattern | DoD this edit |
|----------------|---------|----------------|
| List A | Header | Giá»¯ Â«Biá»ƒu 15 â€” TMC / thu phÃ­ / háº¡t / khoÂ» Â· back hub |
| List B toolbar | `catalogToolbar` | **ThÃªm** Xuáº¥t Excel (+ Import P1) Â· icon `erp-control-icon-map` Â· **cáº¥m** filter |
| List B filter | `LinErpListFilterBar` | **Unchanged** Â· 0 action Xuáº¥t (**GAP-FILTER-BAR-08**) |
| List C/D | Grid + pagination | Unchanged Â· typed 20 |
| Form | Kind D Slideout | Unchanged Â· section vá»‹ trÃ­ + cÃ´ng trÃ¬nh + thiáº¿t bá»‹ |
| Map | none | â€” |

## Control hint â€” list filters (Zone B) â€” **unchanged**

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | TÃ¬m kiáº¿m | `SearchTextInput` | text | mÃ£ Â· tÃªn CS Â· Ä‘Æ°á»ng Â· ghi chÃº |
| province | Tá»‰nh/TP | `Dropdown` | LOOKUP_STATIC | |
| facilityKind | Loáº¡i CS | `Dropdown` | LOOKUP_STATIC | 5 loáº¡i |
| status | TÃ¬nh tráº¡ng | `Dropdown` | LOOKUP_STATIC | |
| roadCode | ÄÆ°á»ng | `SearchInput` | **road-route** | |
| kmFrom / kmTo | LÃ½ trÃ¬nh tá»«â€“Ä‘áº¿n | `Number` | â€” | |

## Control hint â€” form fields â€” **unchanged** (cite prior Â· 20 typed)

Giá»¯ báº£ng form prior `task_23453ac3` (shared + facility + area + equipment). **Cáº¥m** Ä‘á»•i controlHint form trong pack nÃ y.

## Control hint â€” actions (**delta**)

| Action | Surface | Notes |
|--------|---------|-------|
| export-excel | **catalogToolbar** | Label **Xuáº¥t Excel** Â· binary download Â· sheet Biá»ƒu 15 Â· filter QS Ã¡p dá»¥ng náº¿u SA chá»‘t |
| import-excel | **catalogToolbar** (P1) | Template Cá»¥c Â· merge-header 20 Â· **cáº¥m** filter bar |
| create / view / edit / copy / delete / history / schema-config / refresh | Toolbar (keep) | Unchanged |
| save / cancel | Form footer | Unchanged |
| print-pdf | â€” | **OUT** Biá»ƒu (sá»• Word) Â· khÃ´ng Wave 1 S15 |

## Open questions (PO trÆ°á»›c Design)

| ID | Q | Options |
|----|---|---------|
| Q-XLS-SCOPE | Export = **filtered set** (road/province/facilityKind/status/â€¦) hay **all tenant resource**? | filtered Â· all_resource (**SA/PO**) |
| Q-XLS-IMPORT | Import P1 cÃ¹ng task hay DEFER sau export-only? | import_now Â· export_only_p0 |
| Q-XLS-FILENAME | TÃªn file download? | `Bieu15_TMC_Tram_Hat_{yyyyMMdd}.xls(x)` Â· SA chá»‘t |
| Q-XLS-SHEET | 1 sheet 20 cá»™t (facility+area+equipment cÃ¹ng hÃ ng) hay split? | one_sheet Â· split (**cáº¥m** split trá»« Excel Cá»¥c yÃªu cáº§u) |

## Handoff

| Role | DÃ¹ng packet |
|------|-------------|
| **PO** | Â§ Delta T-XLS-S15 Â· DoD binary â‰  toast Â· giá»¯ Grid AC typed |
| **Design** | **Giá»¯** prototype typed Â· **chá»‰** thÃªm nÃºt Xuáº¥t (+Import) trÃªn toolbar Â· reviewUrl cáº­p nháº­t zone |
| **SA** | Path export/import Â· BFF binary Â· golden 16-sheet Â· 20 cá»™t checksum Â· **cáº¥m** Ä‘á»•i typed entity trá»« gap |
| **TL/Dev** | `/implement-export-import-excel` Â· **cáº¥m** filter-bar export Â· **cáº¥m** re-CRUD typed Â· **cáº¥m** merge so-ts-toll/rest/station |

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
