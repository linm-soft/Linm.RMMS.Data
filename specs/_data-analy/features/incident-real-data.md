# Real-data bind — incident (Kind B list + Kind D slideout)

| | |
|---|---|
| feature | `incident` |
| packKind | `list` |
| changeScope | `edit_page` |
| taskId | `task_2ed457c2` |
| contentHash | `sha256:927979e9a8dc3f1491792cc2a87a5e42e0af21842278e65aefcb359f45e021ad` |
| prefix | API `api/v1/incident` · BFF `web-bff/api/v1/incident` · files `web-bff/api/v1/files` |
| sourceTables | `rmms_incidents` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Field` · `/su-co` |
| map | `none` (MFE list pack) · demo Kind F **tham chiếu only** |
| progress | status lifecycle `new` → `in_progress` → `closed` |
| runMode | `full_pipeline` · `qa_fail_rollback` · gap=`bff_init` + `media_upload` |

## § Delta Current vs New (`edit_page` · `task_2ed457c2` · họp 04/09)

| ID | Current | New |
|----|---------|-----|
| GAP-QA-BFF-INIT-01 | BFF init-data **404** · API **200** · FE FALLBACK | Fix BFF proxy → **200** · **cấm** invent path · `qa_fail_rollback` |
| GAP-INC-MEDIA-01 | Form **không** upload | FileService BFF `web-bff/api/v1/files/*` · `/init-bff-file` + `/integrate-file-upload-web` |
| GAP-INC-MEDIA-HARD | — | **Cấm** `/implement-file-service` · copy FilesController · persist presigned URL · ERP.* |
| CRUD | FormType CLOSED | **Giữ** path/DTO |
| Report fields | DurationMin / DefectItem **thiếu** | **DEFER** · **cấm** pretend |
| Demo | zone/action ref | **cấm** demo-json SSOT |

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
| `bff` · init-data | `GET web-bff/api/v1/incident/incidents/init-data` | FALLBACK FE | **GAP-QA-BFF-INIT-01** 404 |
| `bff` · files | `web-bff/api/v1/files/*` · NuGet `Linm.Platform.FileService.Bff` · host `RMMS.Service.Bff` | no files | **GAP-INC-MEDIA-01** |
| `integration` · road-route | RoadRoutes search (shared catalog READY) | no match | **GAP-INC-ROUTE-01** |
| `task` · giao việc | Platform Task BFF `POST /tasks` | — | `rmms-task-integrate` |

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
| mediaFiles | Ảnh / tệ | FileUpload | FileService | `files/*` upload | fileIds / attachmentKeys | **gap** | n/a |
| causesCongestion | Gây ùn tắc | Dropdown bool | — | detail | `causesCongestion` | yes | n/a |
| hasGps | Có GPS | Dropdown bool | — | detail | `hasGps` | yes | n/a |
| assigneeName | Người XL | Text | — | detail · assign | `assigneeName` | yes | n/a |
| durationMin | Thời lượng | Number | — | **GAP** entity DEFER | `durationMin` | **gap** | n/a |
| defectItem | HM hư hỏng | Text / SearchInput | — | **GAP** entity DEFER | `defectItem` | **gap** | n/a |
| sourceKind | Nguồn | Dropdown | — | **GAP** entity DEFER | `sourceKind` | **gap** | n/a |
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
| Init-data | `GET …/incidents/init-data` — API **200** · BFF **404** = **GAP-QA-BFF-INIT-01** |
| Files upload | `web-bff/api/v1/files/*` — FileService.Bff · **GAP-INC-MEDIA-01** |
| Comments | CTX `POST …/comments` — **DEFER P2** (không live) |

FE cite: `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Field/src/services/incident/incidentService.ts` · endpoint relative `/incident/incidents`.

**BFF:** `web-bff/api/v1/incident/incidents` proxy · files via `Linm.Platform.FileService.Bff` trên `RMMS.Service.Bff`.  
**Cấm** ERP.* · Finance · invent `api/v1/su-co/*` fork · `/implement-file-service` · copy FilesController · persist presigned URL.

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
| init-data fail | **GAP-QA-BFF-INIT-01** · fallback FE const · target = BFF 200 |
| files upload fail | toast · **cấm** alert · không block save scalars nếu media optional |
| lookup route fail | SearchInput empty · save 422 |
| schema fail | bootstrap `uiColumns` từ list page |

| Role | Dùng packet |
|------|-------------|
| PO | Delta media + BFF init · keep prior requirement |
| Design | FileUpload zone trên slideout · reviewUrl |
| SA | BFF init fix + FileService integrate confirm |
| Dev | Wire init-data BFF + FileUpload → `files/*` · **cấm** invent API |
| QA | Re-run sau Dev · init-data 200 + upload smoke — E2E queued `/agent-qa*` only |

## §G — Cấm

- Invent `api/v1/su-co/incidents` API fork (UI route `/su-co` OK)
- ERP.* / Finance assets
- `/implement-file-service` · copy `FilesController` · persist presigned URL
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
| generatedAt | 2026-09-07T01:30:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:927979e9a8dc3f1491792cc2a87a5e42e0af21842278e65aefcb359f45e021ad |

---
<!-- Version meta: skillId=agent-data-analy skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.25.02 rulesVersion=2026.08.28.4 versionGate=rechecked contentHash=sha256:927979e9a8dc3f1491792cc2a87a5e42e0af21842278e65aefcb359f45e021ad taskId=task_2ed457c2 -->
