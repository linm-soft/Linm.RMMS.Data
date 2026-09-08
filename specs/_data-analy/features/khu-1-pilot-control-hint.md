# Data-analy — controlHint — khu-1-pilot (Pilot dữ liệu Khu I)

| Field | Value |
|-------|-------|
| feature | `khu-1-pilot` |
| packKind | `list` |
| mode | `feature_context` (queue `roleOnly=data_analy` · **no Excel** · **DEM N/A** · CTX P0 + peers org-route-scope / import-gov-ssot) |
| changeScope | `new_page` |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.06.01` |
| rulesVersion | `2026.08.30.6` |
| versionGate | `rechecked` |
| contentHash | `sha256:721f9c659b694240f987553196aa422ceba50f1f2c1e7849e42fe27050168056` |
| headerFingerprint | `sha256:39ac2fc4e677a0980881d50eb9a10daa22430065a0fafa39ff57485d505940a3` |
| analyzedAt | `2026-09-06T15:21:00.000Z` |
| cluster | — (không Excel · CTX + seed DRVN REG-I + import SSOT + `/rmms-filter-org`) |
| taskId | `task_d855768c` |
| autoApprove | `ON` |
| realData | `specs/_data-analy/features/khu-1-pilot-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain đề xuất **Asset** (page) + lookups **Integration** · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` (+ Field / Gis filter consume) |
| mfeStdUrl | `http://localhost:9301/khu-1-pilot` |
| mfeStdRoute | `/khu-1-pilot` |
| runMode | `full_pipeline` · Autopilot ON · e2eQa queued QA · **lane web only** |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map + prototype + reviewUrl. SA **chốt** DOMAIN-MAP row + import scope API.  
> Họp **04/09/2026** hạng **3 + S1**: org-route-scope filter **Khu I** + `ReImportSeed`/`ReInitData` scoped zone.  
> Typography: label **13** · input D14 / M16 (**GAP-TYP-01**).  
> **Cấm** nhầm **Chi cục II.1** / `VP-II.1` / demo **QL.1** cũ · **cấm** `api/v1/rmms/*` · **cấm** ERP.* · **cấm** invent-seed · **cấm** gộp zone vào `gov-vn` · **cấm** dataset khu-2/khu-4 · **cấm** enqueue lại 16 biểu + 10 sổ typed · **cấm** mobile lane / `run-implement-mobile`.

## Sources

| Source | Path | sha256 / note |
|--------|------|---------------|
| Context (P0) | `docs/context/features/khu-1-pilot.md` | `721f9c65…` (contentHash) |
| Peer zone | `docs/context/features/org-route-scope.md` | REG-I…IV · cascade · **done** peer |
| Peer import | `docs/context/features/import-gov-ssot.md` | `gov-vn` + `t6-org-scope` · ReImportSeed/ReInitData |
| Org SSOT | `docs/context/20-ORG-STRUCTURE-DRVN.md` | REG-I · VP-I.1…I.4 · **GAP-ORG-01** II.1 legacy |
| Seed org | `docs/context/seed/org-unit-seed.json` | `REG-I` · 4 ROOM · `VP-I.1`…`VP-I.4` |
| Filter SSOT | `docs/context/features/reports-filter-bar.md` · `/rmms-filter-org` | cascade Khu→VP→ĐV→Tuyến · `km_skip` |
| Peer hint | `specs/_data-analy/features/org-route-scope-control-hint.md` | zone + consumer cascade |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | **thiếu** slug `khu-1-pilot` (**GAP-K1-DM-01**) |

Normalized header (list + filter + pilot scope):

`zoneOrgCode|vpOrgCode|assigneeCode|routeCode|search|importSet|reInit|pilotScope`

## § Delta Current vs New (`new_page` · `task_d855768c`)

| ID | Current | New (this pack) | Surface |
|----|---------|-----------------|---------|
| GAP-K1-HINT-01 | stub control-hint | Full list controlHint · filter REG-I locked + cascade | data-analy |
| GAP-K1-REAL-01 | stub real-data | §A+§B bind · cite live Integration lookups · page API = **GAP** SA | data-analy |
| GAP-K1-PAGE-01 | MFE Asset **0** route `/khu-1-pilot` | Kind A/B list + `LinErpListFilterBar` · pilot counts/status | Design/Dev |
| GAP-K1-SCOPE-01 | Import toàn quốc `gov-vn` | Pilot UI/ops **scoped `REG-I`** · ReImportSeed+ReInitData zone · **cấm** seed bịa | data + SA |
| GAP-K1-ALIAS-01 | Rủi ro nhầm II.1 / QL.1 demo | Filter default **chỉ** `REG-I` · exclude `VP-II.*` · **cấm** demo QL.1 | FE + copy |
| GAP-K1-DM-01 | DOMAIN-MAP thiếu slug | SA thêm row → **Asset** (đề xuất) + Integration lookups | SA |
| GAP-K1-MOBILE-01 | — | **Lane web only** · **cấm** qlbd-mobile / yarn run-implement-mobile | TL |

**Không** đổi: peer `org-route-scope` CRUD · 16 biểu + 10 sổ typed (đã done) · set `gov-vn` nationwide rebuild · `t6-org-scope` schema · Integration prefixes.

## Kind / zones (handoff Design)

Pack **list** = Kind **A/B** list trên MFE Asset host `:9301`. **Không** demo HTML · **không** typed CSDL form.

| Zone | Pattern | DoD |
|------|---------|-----|
| A | Header | title «Pilot dữ liệu Khu I» — **cấm** Thêm mới catalog · badge zone `REG-I` |
| B filter | `LinErpListFilterBar` · `/rmms-filter-org` | Khu **locked/default REG-I** · VP ⊆ I.1–I.4 · ĐV · Tuyến · search · 🔍 |
| B toolbar | Refresh · (ops) ReImport/ReInit **scoped** | **cấm** export chrome demo · **cấm** native `<select>` |
| C | Grid / cards pilot | counts route/asset/pavement **trong scope Khu I** · import status · **cấm** mock rows |
| D | Pagination | flat list nếu có rows chi tiết |
| Map consumer | Gis / Field (cite) | cùng `zoneOrgCode=REG-I` filter — **không** invent map API trong pack |

**Skip chrome:** GOVOne · Signed demo · hub nav demo · mobile shell.

## Control hint — list filters (Zone B · `/rmms-filter-org`)

| Field key | Label | controlHint | catalogKind | Slot | Notes |
|-----------|-------|-------------|-------------|------|-------|
| zoneOrgCode | Khu | `SearchInput` tree **hoặc** locked chip | **org-unit** | `leading` | **default + lock** `REG-I` · **cấm** chọn REG-II…IV trên pilot · **cấm** ô Cục · **cấm** mix Sở |
| vpOrgCode | Văn phòng | `SearchInput` | **org-unit** kind=`VP` | `leading` | ⊆ parent `REG-I` → `VP-I.1`…`VP-I.4` · **cấm** `VP-II.*` |
| assigneeCode | Đơn vị | `SearchInput` | org-unit SU **hoặc** partner-unit | `leading` | cascade sau VP · **cấm** nhét Sở vào org tree |
| routeCode | Tuyến | `SearchInput` | **road-route** | `leading` | tuyến chính ⊆ zone Khu I (org-route-scope) · **cấm** NHANH/TRANH/GOM · **cấm** mã `KM0+*` · **cấm** demo QL.1 làm mặc định sai zone |
| search | Tìm kiếm | `SearchTextInput` / `Input` | text | `leading` | mã · tên · **không** nút Tìm riêng |
| — | Đoạn | **không ô** P0 | — | — | **GAP-ORS-CASCADE-01** · `km_skip` · **cấm** invent `segmentId` |

**Cascade HARD:** Khu (locked REG-I) → VP → Đơn vị → Tuyến. Đổi VP → clear ĐV · page từ đầu. Layout: `filter-bar-layout-hard` · **cấm** `ErpListHeaderFilters` / `LinListFilterField` / wrapper cả `leading`.

## Control hint — pilot ops / status (Zone B toolbar · P0 đề xuất)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| importSet | Bộ import | `Dropdown` / chips read-only | * | `gov-vn` · `t6-org-scope` · `drvn-org` — **không** set khu-2/khu-4 |
| pilotScope | Phạm vi | locked text / chip | * | `zoneOrgCode=REG-I` |
| reImport | ReImportSeed | `Button` confirm | | scoped zone — SA chốt flag/API |
| reInit | ReInitData | `Button` confirm danger | | gỡ mã rác **trong scope** — **cấm** wipe ngoài REG-I |

## Control hint — grid columns (Zone C · đề xuất)

| Field key | Label | controlHint | Notes |
|-----------|-------|-------------|-------|
| catalog | Catalog | Text / Badge | route · pavement · asset-type aggregate |
| countInScope | Số lượng (Khu I) | Number | **DB sau import** — **cấm** HasData/demo JSON |
| lastImportAt | Lần import | Datetime | |
| status | Trạng thái | Badge | ok · empty · gap-no-source · error toast |

## GAPs (handoff)

| ID | Owner | Note |
|----|-------|------|
| GAP-K1-DM-01 | SA | DOMAIN-MAP row `khu-1-pilot` → Asset (đề xuất) |
| GAP-K1-API-01 | SA | List/status + scoped ReImport/ReInit — **cấm** invent path như live |
| GAP-K1-PAGE-01 | Design/Dev | Route `/khu-1-pilot` + FilterBar |
| GAP-K1-SCOPE-01 | SA/Data | Import flags scoped REG-I |
| GAP-K1-ALIAS-01 | PO/Design | Copy + filter exclude II.1 / QL.1 demo |
| GAP-ORS-CASCADE-01 | peer | Đoạn chưa ô filter — giữ `km_skip` |

## Handoff compact

`specs/khu-1-pilot/handoff/data_analy-compact.md`
