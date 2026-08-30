# Real-data bind — incident (Kind B list + Kind D slideout)

| | |
|---|---|
| feature | `incident` |
| packKind | `list` |
| changeScope | `edit_page` |
| taskId | `task_29a0c673` |
| prefix | API `api/v1/incident` · BFF `web-bff/api/v1/incident` |
| sourceTables | `rmms_incidents` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Field` · `/su-co` |
| map | `none` (MFE list pack) · demo Kind F **tham chiếu only** |
| progress | status lifecycle `new` → `in_progress` → `closed` |

## § Delta Current vs New (`edit_page` · `task_29a0c673`)

| ID | Current | New |
|----|---------|-----|
| GAP-DA-REAL | Stub draft empty | §A–§F cite live Controller + Entity + MFE |
| CRUD | Live FormType CLOSED | **Giữ** path/DTO — không invent |
| routeName | Text free trên MFE | Bind SearchInput → road-route (**GAP-INC-ROUTE-01**) |
| Report fields | DurationMin / DefectItem / damage lines **thiếu** | Ghi gap · **cấm** pretend có cột |
| Demo | zone/action ref | **cấm** demo-json SSOT (**GAP-DA-REAL-03**) |
| Giao việc | Platform Task integrate | Cite `rmms-task-integrate` · **không** duplicate |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/incident.md` | — | version gate |
| `demo` (zone ref) | `Linm.RMMS.Demo/src/demo/incident/incident.html` + `incident-demo.html` redirect | — | **không** SSOT data |
| `api` · list | `IncidentsController.cs` `GET api/v1/incident/incidents` | «Không có dữ liệu sự cố» / «Không có sự cố phù hợp bộ lọc» | empty grid · totalCount=0 · toast |
| `api` · detail | `GET …/incidents/{id}` | — | 404 toast · đóng slideout |
| `api` · create | `POST …/incidents` | — | 422 validation banner/toast |
| `api` · update | `PUT …/incidents/{id}` | — | 404/422 toast |
| `api` · delete | `DELETE …/incidents/{id}` | — | 404 toast · Confirm modal |
| `api` · assign | `POST …/incidents/{id}/assign` | — | 422 nếu thiếu assignee |
| `api` · close | `POST …/incidents/{id}/close` | — | 404 toast |
| `entity` | `IncidentEntity` / table `rmms_incidents` | — | tenant `CompanyCode` |
| `dto` | `LINM.RMMS.Incident.Models/DTOs/IncidentDtos.cs` | — | flat scalars |
| `mfe` · list | `IncidentListPage.tsx` · `incidentService.getList` | empty grid | catch → [] |
| `mfe` · form | `IncidentFormSlideout.tsx` · getById/create/update | — | leave-confirm |
| `catalog` · ui-schema | catalogKind `incidents` | bootstrap `uiColumns` | schema fail → bootstrap |
| `domain-map` | `docs/DOMAIN-MAP.md` row Incident | — | prefix SSOT |
| `integration` · road-route | RoadRoutes search (shared catalog READY) | no match | **GAP-INC-ROUTE-01** chưa wire |
| `task` · giao việc | Platform Task BFF `POST /tasks` | — | xem real-data `rmms-task-integrate` |

`sourceCite` = file/controller **có trong repo**. Fallback localStorage `incidentStore` chỉ khi BFF down — **không** SSOT.

## §B — Bind field (HARD)

| uiField | Label | controlHint | catalogKind | GET | write field | sameMfe | sameMobile |
|---------|-------|-------------|-------------|-----|-------------|---------|------------|
| search | Tìm | SearchTextInput | — | `GET …/incidents?search=` | — | yes | n/a |
| status (filter) | Trạng thái | Dropdown | LOOKUP_STATIC | `?status=` | — | yes | n/a |
| severity (filter) | Mức độ | Dropdown | LOOKUP_STATIC | `?severity=` | — | yes | n/a |
| code | Mã | Text readonly | — | list/detail `code` | auto IdCode | yes | n/a |
| title | Tiêu đề | Text | — | detail | `title` | yes | n/a |
| routeName | Đoạn đường | SearchInput **target** | road-route | detail | `routeName` | **gap** (Text today) | n/a |
| incidentType | Loại | Dropdown | static / incident-type | detail | `incidentType` | yes | n/a |
| status | Trạng thái | Dropdown | LOOKUP_STATIC | detail | `status` | yes | n/a |
| severity | Mức độ | Dropdown | LOOKUP_STATIC | detail | `severity` | yes | n/a |
| reporterName | Người báo | Text | — | detail | `reporterName` | yes | n/a |
| handleDirection | Hướng XL | Dropdown / Text | — | detail | `handleDirection` | yes | n/a |
| readStatus | TT đọc | Dropdown / Text | — | detail | `readStatus` | yes | n/a |
| reportStatus | TT BC | Dropdown / Text | — | detail | `reportStatus` | yes | n/a |
| assetLabel | Tài sản | Text | — | detail | `assetLabel` | yes | n/a |
| kmStart | Km đầu | Text | — | detail | `kmStart` | yes | n/a |
| kmEnd | Km cuối | Text | — | detail | `kmEnd` | yes | n/a |
| weather | Thời tiết | Text | — | detail | `weather` | yes | n/a |
| requestedAt | Ngày YC | Date | — | detail | `requestedAt` | yes | n/a |
| detectionId | AI DET | Text | — | detail | `detectionId` | yes | n/a |
| description | Mô tả | Text multiline | — | detail | `description` | yes | n/a |
| causesCongestion | Gây ùn tắc | Dropdown bool | — | detail | `causesCongestion` | yes | n/a |
| hasGps | Có GPS | Dropdown bool | — | detail | `hasGps` | yes | n/a |
| assigneeName | Người XL | Text | — | detail · assign | `assigneeName` | yes | n/a |
| durationMin | Thời lượng | Number | — | **GAP** entity | `durationMin` | **gap** | n/a |
| defectItem | HM hư hỏng | Text / SearchInput | — | **GAP** entity | `defectItem` | **gap** | n/a |
| sourceKind | Nguồn | Dropdown | — | **GAP** entity | `sourceKind` | **gap** | n/a |
| grid.code…detectionId | cột lưới | dynamic schema | — | list page | — | yes | n/a |

**Prefix map (live cite):**

| Operation | Path |
|-----------|------|
| List | `GET /web-bff/api/v1/incident/incidents` → `GET /api/v1/incident/incidents` |
| Detail | `GET …/incidents/{id}` |
| Create | `POST …/incidents` |
| Update | `PUT …/incidents/{id}` |
| Soft delete | `DELETE …/incidents/{id}` |
| Assign | `POST …/incidents/{id}/assign` |
| Close | `POST …/incidents/{id}/close` |
| Comments | CTX `POST …/comments` — **DEFER P2** (không live) |

FE cite: `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Field/src/services/incident/incidentService.ts` · endpoint relative `/incident/incidents`.

**BFF:** `web-bff/api/v1/incident/incidents` proxy.  
**Cấm** ERP.* · Finance paths · invent `api/v1/su-co/*` resource fork (route UI `/su-co` ≠ API segment).

## §C — Catalog / write rules

| Action | Rule |
|--------|------|
| create | Required: `title` · `routeName` · `incidentType` · `status` · `requestedAt` · IdCode auto `VD-*` |
| update | PUT scalars flat · **cấm** parent JSON nest |
| copy | POST new · clear `id` · new code |
| delete | soft `IsActive=false` tenant-scoped |
| assign | body `assigneeName` + optional `note` |
| close | body optional `note` · status → `closed` |
| routeName | Target validate Integration road-route (**GAP-INC-ROUTE-01**) |
| quantity lines | **không** — `rpt-thiet-hai` cần child table riêng (gap) |

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| road-route | Integration road-routes search | shared-catalogs CUC2 · 38 | free-text route khi master READY |
| org-unit | org-units tree/search | shared org-structure | hardcode công ty demo |
| LOOKUP_STATIC status/severity/type | init-data **đề xuất** hoặc FE const tạm | demo statuses | Dropdown demo làm **master** type nếu PO chọn SearchInput |

## §D — Map / vẽ

`map: none` — MFE list pack **không** Kind F.  
Demo Leaflet + basemap = **tham chiếu UX** only · SD-MAP defer · **không** GAP-DA-MAP-01 trên packKind=list.

## §E — Progress / vòng đời

| stateField | Nguồn | Ai đổi | API | UI |
|------------|-------|--------|-----|-----|
| `status` | `IncidentEntity.Status` | user · close/assign | PUT · `POST …/close` · assign may set in_progress | chip lưới · Dropdown form |
| `readStatus` | entity | user | PUT | form field |
| `reportStatus` | entity | user | PUT | form field |
| SLA full | — | — | — | **DEFER** Workflow P2 · stub only |
| comments timeline | — | — | comments DEFER | demo only |

## §F — Empty / fail / handoff

| Case | Behavior |
|------|----------|
| list empty | empty grid copy VN · totalCount=0 |
| list fail | catch → [] · toast · **cấm** alert |
| detail 404 | đóng slideout · toast |
| init-data fail | fallback FE const statuses/severities |
| lookup route fail | SearchInput empty · save 422 |
| schema fail | bootstrap `uiColumns` từ list page |

| Role | Dùng packet |
|------|-------------|
| PO | DoD «màn mở = data thật BFF» · Ask Q-INC-* |
| Design | control-map khớp §B |
| SA | Giữ path cite · gap DurationMin/DefectItem/sourceKind |
| Dev | Cùng §B web · **cấm** invent API |
| QA | scenarios CRUD + assign/close — E2E queued `/agent-qa*` only |

## §G — Cấm

- Invent `api/v1/su-co/incidents` API fork (UI route `/su-co` OK)
- ERP.* / Finance assets
- Mock localStorage làm SSOT khi BFF available
- Pretend `DurationMin` / damage child lines đã có trên entity
- Embed TasksController vào RMMS.WebService (Platform Task package)
- Re-run FormType CRUD rewrite không delta

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.25.02 |
| rulesVersion | 2026.08.28.4 |
| generatedAt | 2026-08-29T02:20:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:adf95ccc3f97b05abb02eb1332959aa4525025c55d876bac9ce18f1a4b003577 |

---
<!-- Version meta: skillId=agent-data-analy skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.25.02 rulesVersion=2026.08.28.4 versionGate=rechecked contentHash=sha256:adf95ccc3f97b05abb02eb1332959aa4525025c55d876bac9ce18f1a4b003577 -->
