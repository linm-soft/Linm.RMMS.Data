# Data-analy — controlHint — org-route-scope (Phân khu lý trình · zone km)

| Field | Value |
|-------|-------|
| feature | `org-route-scope` |
| packKind | `master` |
| mode | `feature_context` (queue `roleOnly=data_analy` · **no Excel raw** · **DEM N/A** · CTX P0 + peer master live) |
| changeScope | `new_page` (lớp gán zone km mới — **không** reopen CRUD `org-unit` / `road-route` / `partner-unit` đã `done`) |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.29.04` |
| rulesVersion | `2026.08.30.5` |
| versionGate | `rechecked` |
| contentHash | `sha256:81b3c9a520472625cc78375571d1d94ae34a6badc62a7a7bf21f0a2eac7894dc` |
| headerFingerprint | `sha256:72758524d03f6b4b62ccf4262873b39bdd01601654b368e153678ecc84d1865d` |
| analyzedAt | `2026-08-30T10:43:51.475Z` |
| cluster | — (không Excel · CTX + INVESTIGATE + seed DRVN + peer live Integration) |
| taskId | `task_8a74dc46` |
| autoApprove | `ON` |
| realData | `specs/_data-analy/features/org-route-scope-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Integration** (đề xuất SA) · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Master` · `ui_repo_confirm` locked Master |
| mfeStdUrl | `http://localhost:9318/mas/phan-khu` |
| mfeStdRoute | `/mas/phan-khu` (CTX/STATUS đề xuất · SA chốt) |
| runMode | `full_pipeline` · Autopilot ON · e2eQa queued |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map + prototype. SA **chốt** bảng gán + DOMAIN-MAP row + path API.  
> **Cấm** Dev đoán Text vs SearchInput khi đã có bảng này.  
> **DEM N/A** (`master-catalog-no-demo.md`) — **cấm** đòi DEM-* · **cấm** GOVOne chrome · **cấm** demo-json SSOT.  
> Typography: label **13** · input D14 / M16 (**GAP-TYP-01**).  
> **Cấm** `api/v1/rmms/*` · **cấm** ERP.* · **cấm** invent seed gán từ dump (**GOV-IMP-01/03**).

## Sources

| Source | Path | sha256 / note |
|--------|------|---------------|
| Context | `docs/context/features/org-route-scope.md` | `81b3c9a5…` (contentHash) |
| Org SSOT | `docs/context/20-ORG-STRUCTURE-DRVN.md` | `3306242c…` |
| LRS | `docs/context/24-TUAN-DUONG-DUONG-BO.md` §6 | peer |
| Seed org | `docs/context/seed/org-unit-seed.json` | 60 nodes · REG-I…IV |
| Investigate | `specs/_data-analy/shared-catalogs/INVESTIGATE-CUC2.md` | `72758524…` (headerFingerprint) · cluster_confirm **A** |
| Peer CTX | `org-unit.md` · `road-route.md` · `partner-unit.md` · `pavement-section.md` · `users.md` · `login.md` · `import-gov-ssot.md` | P0 peers |
| Hub hint | `specs/_data-analy/features/master-control-hint.md` | consumer 2li |
| MFE live peers | `Linm.Web.RMMS.Master` `/mas/co-cau-tc` · `/mas/tuyen-duong` · `/mas/doi-tac` | Kind B · **chưa** `/mas/phan-khu` |
| BE live peers | `…/Integration/Controllers/{OrgUnits,RoadRoutes,PartnerUnits}Controller.cs` | `api/v1/integration/*` |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | org-unit/road-route/partner-unit → Integration · **thiếu** slug `org-route-scope` |

Normalized header (zone assignment + đoạn child + consumer cascade):

`zoneOrgCode|routeCode|kmFrom|kmTo|effectiveFrom|effectiveTo|isActive|parentAssignmentId|assigneeKind|assigneeCode|cucFilter|zoneFilter|vpFilter|unitFilter|routeFilter|search`

## § Delta Current vs New (`new_page` · `task_8a74dc46`)

Peers catalog **đã ship**. Feature này = **lớp gán mới** — không sửa CRUD 5 field `org-unit` / `road-route`.

| ID | Current (live 2026-08-30) | New (this pack) | Surface |
|----|---------------------------|-----------------|---------|
| GAP-ORS-HINT-01 | stub `org-route-scope-control-hint.md` | Full controlHint Kind B zone + child đoạn + cascade consumer | data-analy |
| GAP-ORS-REAL-01 | stub `org-route-scope-real-data.md` | §A+§B bind · cite live peers · zone API = **GAP** SA | data-analy |
| GAP-ORS-UI-01 | SearchInput «Đơn vị QL» live **mix** Sở vào cây Cục | Tree `org-unit` **chỉ** DRVN · Sở = `partner-unit` SearchInput riêng | MFE filter peer |
| GAP-ORS-01 | Dump **0** gán Khu↔tuyến km | Config tay / file quản trị · **cấm** invent-seed từ CSV | data |
| GAP-ORS-03 | `OrgUnit` **0** km · **0** FK tuyến | Bảng gán zone (REG-I…IV × route × km) — **không** nhét km vào OrgUnit | SA |
| GAP-ORS-PAGE-01 | MFE **0** route `/mas/phan-khu` | List Kind B + form/grid gán · nested đoạn | Design/Dev |
| GAP-ORS-DM-01 | DOMAIN-MAP thiếu slug `org-route-scope` | SA thêm row → Integration (đề xuất) | SA |
| GAP-ROUTE-01/02 | Dropdown BC chọn `KM0+000-*` như «Tuyến» | Tuyến chính = QUOC_LO/HCM/CAO_TOC · **cấm** mã KM* làm tuyến chính | peer + consumer |

**Không** đổi: peer Kind B CRUD live · seed 60 DRVN · Integration prefixes · leave-confirm · toast not alert · DEM skip · **cấm** Slideout hồ sơ lớn trên catalog peer.

## Kind / zones (handoff Design)

Pack **master** = Kind **B** catalog trên MFE Master host `:9318`. **Không** demo HTML.

| Zone / surface | Pattern | DoD |
|----------------|---------|-----|
| A | Header | title «Phân khu lý trình» — **cấm** Thêm mới trên A |
| B | Toolbar + filter | zone tabs/tree REG-I…IV · search · Tạo dòng gán · Refresh · schema config |
| C | Grid gán | 1 dòng = Khu × tuyến × kmFrom–kmTo · row menu Xem/Sửa/Copy/Lịch sử |
| D | Pagination | flat list gán |
| Form / inline | Modal hoặc inline grid (&lt;10 fields) | SearchInput route · Number km · Datetime hiệu lực · Switch |
| Đoạn (child) | Nested list / tab | ⊆ km zone · assignee VP/SU **hoặc** partner |
| Filter consumer | `LinErpListFilterBar` | Cascade Cục→Khu→VP→Đơn vị→tuyến · **không** date trên catalog |
| SearchInput LRS | 3 bước | Tuyến → zone trên tuyến → đoạn ⊆ zone |

**Skip chrome:** GOVOne · Signed demo · hub nav skin demo.

## Control hint — list filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã tuyến · tên · zone code |
| zoneOrgCode | Khu (zone) | `SearchInput` tree **hoặc** tabs 4 Khu | **org-unit** | leaf `REG-I`…`REG-IV` — **cấm** gán trên node nhóm `REG` |
| routeCode | Tuyến | `SearchInput` | **road-route** | ưu tiên QUOC_LO / HCM / CAO_TOC — **cấm** `KM0+000-*` |
| isActive | Hiệu lực | `Dropdown` / Switch filter | — | optional |
| effectiveAt | Tại thời điểm | `Date` | — | filter cửa sổ hiệu lực (P1) |

## Control hint — form / dòng gán zone (P0)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| zoneOrgCode | Khu QLĐB | `SearchInput` tree | * | catalogKind=org-unit · kind REG leaf I–IV |
| routeCode | Tuyến chính | `SearchInput` | * | catalogKind=road-route · exclude NHANH/TRANH/GOM mã KM* |
| kmFrom | Km từ | `Number` LRS | * | ≥ 0 |
| kmTo | Km đến | `Number` LRS | * | kmTo > kmFrom · ⊆ extent tuyến khi có |
| effectiveFrom | Hiệu lực từ | `Date` / Datetime UTC | * | «sẽ thay đổi» — bắt buộc |
| effectiveTo | Hiệu lực đến | `Date` / Datetime UTC | * | |
| isActive | Hiệu lực | `Switch` | | |

## Control hint — đoạn child (P0)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| parentAssignmentId | Gán zone cha | hidden | * | ⊆ zone km |
| kmFrom · kmTo | Km đoạn | `Number` | * | ⊆ parent km |
| assigneeKind | Loại đơn vị | `Dropdown` | * | LOOKUP: `VP` · `SU` · `PARTNER` |
| assigneeCode | Đơn vị | `SearchInput` | * | `org-unit` (VP/SU) **hoặc** `partner-unit` theo kind — **cấm** mix Sở vào org tree |

## Control hint — cascade filter consumer (Asset / Patrol / Report / Users)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| cucFilter | Cục | `SearchInput` tree | **org-unit** | root DRVN |
| zoneFilter | Khu | `SearchInput` tree | **org-unit** | REG-I…IV · cascade từ Cục |
| vpFilter | Văn phòng | `SearchInput` tree | **org-unit** | VP-*.* dưới Khu |
| unitFilter | Đơn vị | `SearchInput` | **org-unit** (SU) **hoặc** **partner-unit** | SearchInput **tách** — GAP-ORS-UI-01 |
| routeFilter | Tuyến | `SearchInput` | **road-route** | tuyến chính |
| zoneOnRoute | Zone trên tuyến | `SearchInput` | org-route-scope | derived từ gán · 3 bước LRS |
| segmentOnZone | Đoạn | `SearchInput` | org-route-scope-segment | ⊆ zone |

## Gaps / open Q (handoff PO)

| ID | Severity | Note |
|----|----------|------|
| GAP-ORS-01 | P0 | Dump không có gán Khu↔km — nguồn danh sách gán = file quản trị / config tay · **cấm** suy từ `manage_unit` Sở |
| GAP-ORS-02 | P0 | Tách SearchInput org vs partner (mapped-wrong live) |
| GAP-ORS-03 | P0 | Bảng gán riêng — không nhét km vào `OrgUnit` |
| GAP-ORS-04 | P1 | `RoadRoute` thiếu KmFrom/KmTo catalog — SA: cột catalog vs chỉ trên assignment |
| GAP-ORS-05 | P1 | CSV trộn QL.* với `KM0+000-*` — classify tuyến chính |
| GAP-ORS-06 | P1 | Đoạn quản lý ≠ `pavement-section` |
| GAP-ORS-07 | P1 | `UserRoute`/`ContractRoute` chưa entity — peer login SPEC |
| GAP-ORS-08 | P2 | Overlap km cùng tuyến + cửa sổ hiệu lực — rule SA |
| GAP-ORS-DM-01 | P1 | DOMAIN-MAP thiếu `org-route-scope` |
| GAP-ORS-API-01 | P0 | Zone assignment API **GAP** — SA chốt path dưới Integration · **cấm** invent trước DOMAIN-MAP |

## Handoff

| To | Đủ khi |
|----|--------|
| **PO** | CTX §1–§9 · **no-demo** · controlHint + real-data **cả hai** · open Q GAP-ORS-* |
| Design | Kind B `/mas/phan-khu` · control-map · prototype + reviewUrl · cascade filter |
| SA | DOMAIN-MAP row · `Schema_*` pair bảng gán · unique `(ZoneOrgCode, RouteCode, KmFrom, KmTo, EffectiveFrom)` · overlap rule |
| TL/Dev | T-UI-LIST/FORM + T-BE · source=`Linm.Web.RMMS.Master` · **cấm** ERP.* |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.29.04 |
| rulesVersion | 2026.08.30.5 |
| contentHash | sha256:81b3c9a520472625cc78375571d1d94ae34a6badc62a7a7bf21f0a2eac7894dc |
| headerFingerprint | sha256:72758524d03f6b4b62ccf4262873b39bdd01601654b368e153678ecc84d1865d |
| generatedAt | 2026-08-30T10:43:51.475Z |
| versionGate | rechecked |
| taskId | task_8a74dc46 |

---
<!-- Version meta: skillId=agent-data-analy skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.08.29.04 rulesVersion=2026.08.30.5 versionGate=rechecked contentHash=sha256:81b3c9a520472625cc78375571d1d94ae34a6badc62a7a7bf21f0a2eac7894dc -->
