# Data-analy — controlHint — patrol (Kind B catalog list + form)

| Field | Value |
|-------|-------|
| feature | `patrol` |
| packKind | `list` |
| changeScope | `edit_page` |
| mode | `feature_context` |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.05.03` |
| rulesVersion | `2026.09.06.1` |
| versionGate | `ok` (recheck_new · CTX hash đổi) |
| contentHash | `sha256:f2761b7dc5b13b1388b9db493b028a10227efd81de142607827c582bc04450b7` |
| headerFingerprint | `sha256:bd9ce13d763c39d04a56a9a24eee73013c09d3679bf0da9fb74ff2d3588bef35` |
| analyzedAt | `2026-09-06T17:45:00.000Z` |
| updatedAt | `2026-09-06T17:45:00.000Z` |
| cluster | — (không Excel · CTX + demo + live MFE/BE) |
| taskId | `task_53b3bcbb` |
| autoApprove | `ON` |
| realData | `specs/_data-analy/features/patrol-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Patrol** · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Field` · `/patrol` · `/td-tk` |
| mfeStdUrl | `http://localhost:9304/patrol` |
| runMode | `fix_gaps` · gap=`crud_formtype` + **upload media** (họp 04/09 W4-1 · W4-2) |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** lookup/FileService.  
> **Cấm** Dev đoán Text vs SearchInput / invent file API khi đã có bảng này.  
> **Cấm ERP.*** · BE `Linm.RMMS.WebService` only.  
> Giữ PO/Design/SA/TL/Dev/QA artifacts đã confirmed — **chỉ** § Delta.

## § Delta Current vs New (`edit_page` · họp 04/09 W4-1 W4-2 · `task_53b3bcbb`)

| ID | Current (shipped / prior analy) | New (this run) | Surface |
|----|----------------------------------|----------------|---------|
| Scope | List pack Kind B CRUD sessions · `crud_formtype` route/filter **CLOSED** (`task_4f8ea737`) | + **leftover** formType debt + **upload ảnh/video** trên form | form |
| GAP-DA-PAT-ROUTE / FILTER | Form+Zone B `route` SearchInput · `?route=` · validate ∈ 38 | **KEEP** CLOSED | list+form |
| GAP-QA-PAT-CODE-DISABLED | Form `code` = `Input disabled` | Leftover: ưu tiên `readOnly` (không xám) — P2 constitution | form |
| Org bind | Live `RmmsOrgFormFields` (zone/vp/assignee/routeCode) · DTO optional | Inventory controlHint org · **KEEP** SearchInput org-unit / road-route | form |
| Media | **Không** field media trên DTO/form · CTX mục tiêu «GPS/ảnh» | **`mediaIds[]`** `FileMulti` · image+video · FileService BFF · persist **guid** · resign mỗi xem | form |
| File API | — | Reuse **đang có** `/init-bff-file` + `/integrate-file-upload-web` · `web-bff/api/v1/files/*` · **cấm** scaffold / invent `nghiem-thu-files` | BFF+UI |
| Kind E+F | Map/check-in/tracks/KPI | **P2 KEEP** — không block list pack | demo |
| PO/Design artifacts | `po/requirement.md` · `ui/design.md` + prototype | **giữ** · PO copy § Delta · Design thêm zone upload | docs |

**Không** đổi: Kind B A–D · full-page `PatrolFormPage` · View=`<dl>` · footer-only Lưu/Hủy · prefix `api/v1/patrol/sessions` · Integration road-routes · **cấm ERP.*** · **cấm** parent JSON · lane **web** only.

## Sources

| Source | Path | sha256 / note |
|--------|------|---------------|
| Context | `docs/context/features/patrol.md` | `f2761b7dc5b13b1388b9db493b028a10227efd81de142607827c582bc04450b7` |
| Control map | `docs/context/_raw/legacy-govone/demo-maps/patrol-control-map.md` | prior |
| Actions | `docs/context/_raw/legacy-govone/demo-maps/patrol-actions.md` | prior |
| Demo entry | `Linm.RMMS.Demo/src/demo/features/patrol-demo.html` | `dead8bcee1871db1d10ba5d3a1304ff1ffcaf6398b4cff4ebd4065eaccf003d7` |
| Demo page | `Linm.RMMS.Demo/src/demo/patrol/patrol.html` | `bd9ce13d763c39d04a56a9a24eee73013c09d3679bf0da9fb74ff2d3588bef35` |
| Shared catalogs | `specs/_data-analy/shared-catalogs` · road-route-seed 38 | APPROVED |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` · Patrol · `api/v1/patrol` | cite |
| MFE | `PatrolListPage` · `PatrolFormPage` · `services/patrol/*` | list pack live · **no media** |
| Prior design | `specs/patrol/ui/design.md` + prototype | **KEEP** · extend upload zone |
| Files BFF | `bff/src/RMMS.Service.Bff` · NuGet `Linm.Platform.FileService.Bff` | HARD reuse |

Normalized header (entity + form inventory):

`code|userName|route|zoneOrgCode|vpOrgCode|assigneeCode|routeCode|patrolType|plannedDate|startedAt|checkInCount|coveragePercent|status|offlineQueued|note|mediaIds|updatedAt|search`

## Kind / zones (handoff Design)

| Zone | Pattern | DoD |
|------|---------|-----|
| A | Header | title «Tuần đường / tuần kiểm» — **cấm** Thêm mới trên A |
| B | Toolbar + filter | SearchTextInput · status SearchInput · route SearchInput `road-route` · Tạo mới · Refresh · Delete · config · History stub |
| C | `LinCatalogDataGrid` | kéo cột default ON · row Xem/Sửa/Copy/Xóa/Lịch sử |
| D | Footer | `LinCatalogListPagination` 50/100/200/500 |
| Form | Kind B **full-page** | C/E/V/Copy · View=`<dl>` · footer Lưu/Hủy · leave-confirm · **+ media upload zone** |
| Upload | FileService | ảnh/video · `mediaIds[]` guid · resign GET |
| Map / KPI / report | Kind E+F | **P2** — không clone vào list pack P1 |

**Skip chrome:** logo · Ban.TK skin · govone/social · đổi mật khẩu · theme.

## Control hint — list filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · NV · tuyến · loại · status |
| status | Trạng thái | `SearchInput` | enum | Đang tuần · Hoàn thành · Bỏ sót · Offline queue |
| route | Tuyến đường | `SearchInput` | **road-route** | Master 38 · **cấm** free-text · `?route=` exact — **KEEP CLOSED** |
| userName | Nhân viên | `Text` | text | P1 free · P2 users UNCLEAR |
| orgUnit | Công ty / NV | `SearchInput` | **org-unit** | **P2** list filter |
| fromDate / toDate | Từ / Đến | `Date` | | **P2** Kind E |

## Control hint — form fields (phiên tuần · list pack)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| code | Mã phiên tuần | `Text` | auto | IdCode `TD-yyyyMMdd-nnn` · leftover: `readOnly` > `disabled` (GAP-QA-PAT-CODE-DISABLED P2) |
| userName | Nhân viên | `Text` | * | P1 free text |
| route | Tuyến đường | `SearchInput` | * | `catalogKind=road-route` · persist **code** — **KEEP** |
| zoneOrgCode / zoneOrgName | Khu / Chi cục | `SearchInput` | | `RmmsOrgFormFields` · org-unit |
| vpOrgCode / vpOrgName | VP | `SearchInput` | | org-unit |
| assigneeCode / assigneeOrgName | Người giao / NV | `SearchInput` | | org / assignee bind live |
| routeCode | Mã tuyến (org) | derived / SearchInput | | sync với `route` |
| patrolType | Loại tuần | `SearchInput` | * | Tuần đường · Tuần kiểm |
| plannedDate | Ngày kế hoạch | `Date` | * | |
| startedAt | Bắt đầu thực tế | `Date` | | datetime-local |
| checkInCount | Số điểm check-in | `Text` (number) | * | ≥0 |
| coveragePercent | Coverage % | `Text` (number) | | 0–100 |
| status | Trạng thái | `SearchInput` | * | 4 enum VN |
| offlineQueued | Hàng đợi offline | `SearchInput` | | true/false |
| note | Ghi chú | `Text` | | |
| mediaIds | Ảnh / video hiện trường | `FileMulti` | | **NEW** · FileService ids · image+video · **cấm** persist full URL |
| updatedAt | Cập nhật | `Date` | | readonly View |

## Upload HARD (họp 1–5)

| Rule | Value |
|------|-------|
| Host BFF | `Linm.RMMS.WebService/bff/src/RMMS.Service.Bff` |
| Route | `web-bff/api/v1/files/*` · NuGet `Linm.Platform.FileService.Bff` |
| Slash | `/init-bff-file` + `/integrate-file-upload-web` nếu thiếu package |
| Persist | **file id (guid)** only trên `PatrolSession` / DTO |
| View | resign mỗi lần xem |
| Accept | image/* · video/* (Design chốt MIME/size) |
| **Cấm** | `/implement-file-service` · copy `FilesController` · invent `api/v1/nghiem-thu-files` / `api/v1/patrol-files` · log full presigned URL · mobile lane |

## Lookup / API

| Lookup | API | controlHint consumer | BE |
|--------|-----|----------------------|-----|
| list | `GET /api/v1/patrol/sessions?search=&status=&route=&page=&pageSize=` | Zone B+C | **DONE** |
| by id | `GET …/sessions/{id}` | form | **DONE** |
| create / update | `POST` / `PUT …/sessions` | form · **+ mediaIds** | **DONE** CRUD · **GAP media column** |
| soft delete | `DELETE …/sessions/{id}` | toolbar/row | **DONE** |
| road-route | `GET /api/v1/integration/road-routes/search` | SearchInput route | master |
| org-unit | Integration org search | RmmsOrgFormFields | master |
| files | `web-bff/api/v1/files/*` | FileMulti upload/resign | FileService |
| check-ins / tracks / coverage / kpi | `…/sessions/{id}/…` | Kind E+F | **P2 MISSING** |

Entity: `PatrolSession` · `rmms_patrol_sessions` · TenantEntity.  
Perms: `patrol.sessions.read|create|update|delete`.

## Actions (list pack P1)

| id | label | P1 | Notes |
|----|-------|----|-------|
| refresh / filter / create / view / edit / copy / delete | — | **IN** | KEEP |
| history / config | — | stub / hint | KEEP |
| upload-media | Upload ảnh/video | **IN NEW** | form zone · FileService |
| export / sync / check-in / map-* | — | **P2** | demo only |

## GAP (data-analy → PO/Design/SA/TL)

| ID | Gap | Severity | Hướng |
|----|-----|----------|-------|
| GAP-DA-PAT-MEDIA-01 | Form/DTO **không** media · CTX cần ảnh hiện trường | **P0** this pack | `mediaIds[]` FileMulti · T-FILE-01 · SA column/json |
| GAP-DA-PAT-FILE-01 | Persist column vs JSON array file ids | P1 | SA chốt schema · **cấm** URL string |
| GAP-QA-PAT-CODE-DISABLED | `code` Input `disabled` | P2 leftover | `readOnly` constitution |
| GAP-DA-PAT-USER | userName Text | P2 | giữ Text P1 |
| GAP-DA-PAT-MAP | Kind E+F API | P2 | không block |
| GAP-F-PAT-01 | Offline conflict merge | Open | flag only |

## Open / UNCLEAR

| ID | Q | Owner |
|----|---|-------|
| GAP-DA-PAT-FILE-01 | `mediaIds` jsonb trên session vs child table? | SA |
| GAP-DA-PAT-MEDIA-UI | Zone media = section form hay strip View gallery? | Design |
| MIME/size | Giới hạn MB / số file / video codec | PO+Design |

## Handoff

→ **PO:** § Delta leftover + upload DoD · FileService HARD · keep prior GAP-PO CLOSED  
→ **Design:** full-page + **upload zone** · prototype/reviewUrl · `autoApprove=ON`  
→ **SA:** giữ `api/v1/patrol/sessions` · thêm mediaIds · FileService reuse · **cấm** invent file path  
→ **TL/Dev:** enhance mode · T-FILE-01 · **không** greenfield · lane web  

Chain: role này **done**. Roles sau = **pending**.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.09.05.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.05.03 |
| rulesVersion | 2026.09.06.1 |
| generatedAt | 2026-09-06T17:45:00.000Z |
| versionGate | ok |
| orchestratorSkillVersion | 2026.08.09.02 |
| orchestratorWorkflowVersion | 2026.08.09.02 |
| orchestratorRulesVersion | 2026.08.09.02 |

---
<!-- Version meta: skillVersion=2026.09.05.03 · schemaVersion=1 · workflowVersion=2026.09.05.03 · rulesVersion=2026.09.06.1 · versionGate=ok -->
