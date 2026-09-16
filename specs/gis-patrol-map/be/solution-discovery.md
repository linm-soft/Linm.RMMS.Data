# SA — Solution — gis-patrol-map

> Status: **confirmed** · `solution_confirm=approve` · autoApprove ON · task `task_a393d3b7`  
> Role: `sa` · packKind: `map` · changeScope: `edit_page`

| | |
|--|--|
| Feature | `gis-patrol-map` |
| Title | Bản đồ tuần đường — leftover OMS + ảnh inspect (FileService resign) |
| Lane | `web` |
| Design | confirmed · `design_confirm=approve` · reviewUrl prototype |
| contentHash | `sha256:e1d043dbf402977a2d0e888df1d32d0e542b2792b22076e2dc5fc482e8a7c287` |
| Demo | N/A (hash skip · cấm re-scan) |

## Architecture (repo SSOT)

| Layer | Choice |
|-------|--------|
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` · **be_repo_confirm** (STATUS) |
| Domain | **Patrol** · kebab `patrol` · DOMAIN-MAP row Patrol |
| API host | `api/…/Domains/Patrol/` · prefix `api/v1/patrol` |
| BFF | `web-bff/api/v1/patrol/*` · **proxy only = yes** (PatrolSessionsBff) |
| Files BFF | `web-bff/api/v1/files/*` · NuGet **Linm.Platform.FileService.Bff** · **cấm** invent FilesController / `/implement-file-service` |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Gis` · live `/gis/tuan-duong` · std `/gis-patrol-map` |
| Response | Linm.Platform.CommonLib `ApiResponse` / list |
| Auth perm | Linm.Platform.Authentication · **reuse** Patrol existing codes (TL cite registry — cấm invent ERP.*) |
| Persist | no-parent-json-field · `PhotoLocalIds` = **guid[]** scalar list · **không** parent `*Json` blob |
| Out of pack | Cesium/3D · ERP.* · new `api/v1/gis-patrol-map` · draw CRUD · POST check-in on web P1 |

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| UI map | `/agent-dev-oms-map` R1–R11 · `/map-inspect-popup` | peer GIS clip basemap · cấm OSM.org/Esri DTO |
| UI common | `@linm-soft-org/linm-web-common-components` | toast/`useAlert` · cấm native alert |
| HTTP | apiClient SSOT | BFF paths only from MFE |
| BE | Linm.Platform.CommonLib | ApiResponse |
| Auth | Linm.Platform.Authentication + RequirePermission | existing Patrol |
| Files | FileService.Bff | resign mỗi view · cấm persist/log presigned |
| Persist | no-parent-json-field | PhotoLocalIds guid[] |

## FormType pack (`packKind=map`)

| Field | Value |
|-------|-------|
| formType | `map` |
| formPattern | Full page (SCR-MAP) + MapPopup Modal (SCR-INSPECT) + Chi tiết (SCR-DETAIL) |
| Grid AC | N/A |
| Report AC | N/A · export/chart **n/a** |
| Leave | N/A dirty (read-only P1) · toast soft |
| Dev slash | `/agent-dev-oms-map` · leaf `/map-inspect-popup` |
| Map gates | R1–R11 (+ R4b/R4c/R7b/R7c/R11 Fit `fitVnClipMap`) · **cấm** Fit chip page · click pin = popup only |
| Delta NEW | **GALLERY-PATROL** = ImageGallery bind `photoLocalIds` → FileService resign |
| Write P1 | **none** — web read-only inspect/animate; upload = mobile field path |

### Screens (from Design)

| id | Surface | Pattern | FormMode | Actions |
|----|---------|---------|----------|---------|
| SCR-MAP | Bản đồ tuần + sidebar tabs | Full page | **View** (map) | select person · animate · zoom · geolocate |
| SCR-INSPECT | MapPopup pin | Modal | **View** | gallery photos · locate |
| SCR-DETAIL | Tab Chi tiết / timeline | Panel | **View** | history → gallery parity |

Zones: `NAV-GIS` · `TAB-ROAD` · `TAB-CHECK` · `TAB-DETAIL` · `LIST-PERSON` · `MAP-HOST` · `MAP-BAR` · `MAP-POPUP-INSPECT` · `GALLERY-PATROL`

## FormMode ↔ API (REQUIRED)

| FormMode / surface | Method/Path | Notes |
|--------------------|-------------|-------|
| SCR-MAP · LIST-PERSON | `GET web-bff/api/v1/patrol/sessions` → `api/v1/patrol/sessions` | personName · route · status Badge |
| SCR-MAP · MAP-HOST pins/track | `GET …/patrol/sessions/{id}/check-ins` | pins xanh/đỏ · OSRM `routeDrivingTrack` (client) |
| SCR-INSPECT · GALLERY-PATROL | check-in `photoLocalIds` → `GET web-bff/api/v1/files/{id}` resign/view | guid FileService · empty = «Chưa có ảnh» |
| SCR-DETAIL · detail.history | same check-ins DTO | Timeline → gallery parity (U-GALLERY-ZONE) |
| Create/Edit/PATCH page | **n/a P1** | cấm invent POST files / PATCH session trên GIS map |
| Mobile field write (out of page) | existing `POST …/check-ins` | cite only — not Dev scope this page |

### controlHint → API shape

| uiField | controlHint | SA shape |
|---------|-------------|----------|
| list.personName / detail.name | Text | scalar DTO sessions |
| list.status / checkIn.status | Badge | scalar / derived done·pending |
| detail.history | Timeline | check-ins list |
| map.track | MapPolyline | OSRM client · cấm chord-only |
| map.pin | MapPin | check-ins lat,lng |
| checkIn.photoLocalIds | ImageGallery | **fileIds[] guid** → FileService resign · **U-PHOTO-FIELD locked** |
| map.basemap | ChipGroup | peer Gis clip config · cấm OSM.org |
| SearchInput / Dropdown master | **none** on this page | cấm invent lookup/init-data |

## Persist / entity / migration

| Item | Decision |
|------|----------|
| Entities | **reuse** `PatrolSessions` · `PatrolCheckIns` (existing) |
| `PhotoLocalIds` | **guid[]** FileService ids on check-in DTO — **confirm** |
| Parent `*Json` | **none** — GAP-SA-JSON n/a |
| Migration Schema_* | **none** this edit_page (bind existing field + UI gallery) |
| Seed | existing Vinh seed fallback FE · no new Seed_* required for SA P1 |
| data-import | **N/A** (map read · not Excel master) · default đơn vị RMMS CUC 2/II.1 keep |

## Implement gates (confirm)

| Gate | Decision | Endpoints / surfaces | Skill | Note |
|------|----------|----------------------|-------|------|
| TZ | **required** | check-in / session DateTime display (timeline · status times) | `/review-timezone-implement` | FE local display · BE UTC store; no list fromDate filter on P1 |
| XCO | **get_only** | `GET sessions` · `GET …/sessions/{id}/check-ins` | `/implement-view-cross-company` | read multi-company AllowedCompanyIds; no subordinate ledger |
| SHARE | **tenant_keep** | PatrolSessions / CheckIns | `/implement-shared-table` | operational tenant data — not shared master |

AskQuestion (autoApprove ON): `sa_tz_gate=tz_required` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant` · `solution_confirm=approve` · 2026-09-12T06:30:00.000Z

## API catalog

### API-01: GET /api/v1/patrol/sessions

| | |
|--|--|
| Purpose | List phiên tuần đường cho sidebar LIST-PERSON |
| Permission | existing Patrol list/read (TL cite Auth registry) |
| Tenant | X-Company-Id · company filter |
| Request | query: optional status/search (reuse existing — **cấm** invent new keys without analy) |
| Response | sessions[]: id · personName · route(s) · status · timestamps |
| Errors | 401 · 403 · empty → FE seed toast soft |
| Form surfaces | SCR-MAP View list |
| Field map | `list.personName`→personName · `list.route`→route · `list.status`→status |
| Context | `docs/context/features/gis-patrol-map.md` |
| Demo HTML | N/A hash skip |
| data-import | N/A |
| BFF | `GET web-bff/api/v1/patrol/sessions` proxy |
| Migration | none |
| gates.tz | yes (timestamps) |
| gates.xco | yes (list read tenant) |
| gates.shared | tenant_keep |

### API-02: GET /api/v1/patrol/sessions/{id}/check-ins

| | |
|--|--|
| Purpose | Pins + timeline + photoLocalIds cho inspect/detail |
| Permission | existing Patrol read by session |
| Tenant | X-Company-Id · session company |
| Request | path `{id}` session |
| Response | `PatrolCheckInDto[]`: planPointLabel · lat · lng · content · status/flags · **photoLocalIds: guid[]** · timestamps |
| Errors | 404 session · empty pins → seed/empty history |
| Form surfaces | SCR-MAP pins/track · SCR-INSPECT · SCR-DETAIL |
| Field map | `checkIn.*` · `map.pin` · `inspect.photoLocalIds`→photoLocalIds · `detail.history`→list |
| Context | real-data §B · GAP-MAP-PATROL-PHOTO-01 |
| Demo HTML | N/A |
| data-import | N/A |
| BFF | `GET web-bff/api/v1/patrol/sessions/{id}/check-ins` proxy |
| Migration | none |
| gates.tz | yes |
| gates.xco | yes (GET by session id) |
| gates.shared | tenant_keep |

### API-03: GET web-bff/api/v1/files/{id} (resign / view)

| | |
|--|--|
| Purpose | Ảnh tuần đường ImageGallery — resign URL mỗi view |
| Permission | FileService.Bff host policy |
| Tenant | per FileService contract |
| Request | path file guid · resign/view ops per BFF |
| Response | short-lived view URL / stream — **cấm** persist URL |
| Errors | resign fail → placeholder + toast |
| Form surfaces | GALLERY-PATROL (popup + Chi tiết parity) |
| Field map | `checkIn.photoLocalIds[]` → file id |
| Context | GAP-MAP-PATROL-FILE-HARD · FileGate |
| Demo HTML | N/A |
| data-import | N/A |
| Ownership | **BFF FileService only** — domain API **không** host files |
| Migration | none |
| gates.tz | n/a |
| gates.xco | n/a |
| gates.shared | n/a (platform files) |

### API-04 (cite only · out of page): POST …/check-ins

Field/mobile upload path — **không** implement trên web map P1. SA ghi để TL không invent alternate write.

## BFF vs API

| Path | Owner | Role |
|------|-------|------|
| `api/v1/patrol/sessions*` | Domain Patrol API | source of truth |
| `web-bff/api/v1/patrol/sessions*` | BFF | **proxy only** |
| `web-bff/api/v1/files/*` | FileService.Bff | media resign/view |
| Invent `api/v1/gis-patrol-map` / `*-files` | **cấm** | — |

## Gaps for TL/Dev (ids only — HOW = TL)

| Id | Summary |
|----|---------|
| GAP-MAP-PATROL-PHOTO-01 | Bind gallery fileIds on MapPopup + Chi tiết |
| GAP-MAP-PATROL-FILE-HARD | FileService.Bff only · no new FilesController |
| leftover OMS | R1–R11 · inspect popup · animate · seed fallback (Design keep shell) |

## Handoff → team_lead

| Field | Value |
|-------|-------|
| feature / packKind | `gis-patrol-map` · `map` |
| phase_from / phase_to | sa → team_lead |
| STATUS | solution **confirmed** |
| formType | map · Full + MapPopup · FormMode View-only P1 |
| APIs | API-01 sessions · API-02 check-ins · API-03 files resign |
| FormMode↔API | table above |
| entity/migration | reuse Patrol* · **migration=none** |
| TZ/XCO/SHARE | tz_required · xco_get_only · tenant_keep |
| FileGate | FileService.Bff · PhotoLocalIds=guid |
| BFF vs API | patrol proxy · files BFF |
| Open questions | **none** |
| Next | `/agent-team-lead` · T-UI-MAP-01 · photo gap · **cấm** e2e ở SA |
| Cấm | ERP.* · re-scan demo · yarn build/e2e/start:std · Step 4b |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-sa |
| skillVersion | 2026.09.05.03 |
| schemaVersion | 2 |
| workflowVersion | 2026.09.05.03 |
| rulesVersion | 2026.09.12.1 |
| contentHash | sha256:e1d043dbf402977a2d0e888df1d32d0e542b2792b22076e2dc5fc482e8a7c287 |
| generatedAt | 2026-09-12T06:30:00.000Z |
| versionGate | ok |
| solution_confirm | approve |
| taskId | task_a393d3b7 |
