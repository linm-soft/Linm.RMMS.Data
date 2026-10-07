# SA — Solution — gis-patrol-map

> Status: **confirmed** · `solution_confirm=approve` · autoApprove ON · task `task_1bd936ce`  
> Role: `sa` · packKind: `map` · changeScope: `edit_page` · Delta REAL/SCOPE/LAYER/FIT/PIN-02/KMPOST/BASE/CHAIN/KM-EMPTY · keep PHOTO

| | |
|--|--|
| Feature | `gis-patrol-map` |
| Title | Bản đồ tuần đường — ca thật · scope segment · nét giao + KM_POST · pin HARD · gallery FileService |
| Lane | `web` |
| Design | confirmed · `design_confirm=approve` · reviewUrl prototype |
| contentHash | `sha256:ca2b1f0e2bf0bd97e92b99936fde30e4e92f1db00023191cf55297415b8d8247` |
| Demo | N/A (hash skip · cấm re-scan) |

## Architecture (repo SSOT)

| Layer | Choice |
|-------|--------|
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` · **be_repo_confirm** (STATUS) |
| Domain | **Patrol** · kebab `patrol` · DOMAIN-MAP row Patrol · peer cite `web-rmms-patrol-map` |
| API host | `api/…/Domains/Patrol/` · prefix `api/v1/patrol` |
| BFF | `web-bff/api/v1/patrol/*` · **proxy only = yes** |
| Files BFF | `web-bff/api/v1/files/*` · NuGet **Linm.Platform.FileService.Bff** · **cấm** invent FilesController / `/implement-file-service` |
| Gis cite | `GET gis/chainage` · bake `GisRouteGeoms` · KM_POST · **cấm** invent PatrolMapController / Map.Api · **cấm** POST tracks từ map |
| Segments | `rmms_user_route_segments` / `AppUserRouteSegmentEntity` · `GisService` AllowChainage — **cấm** invent map-only table |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Gis` · live `/gis/tuan-duong` · std `/gis-patrol-map` |
| Response | Linm.Platform.CommonLib `ApiResponse` / list |
| Auth perm | Linm.Platform.Authentication · **reuse** Patrol · role scope TDTK vs Admin/MANAGER-RMMS |
| Persist | no-parent-json-field · `PhotoLocalIds` = **guid[]** · chainageKm/Label scalars peer |
| Out of pack | Cesium/3D · ERP.* · new `api/v1/gis-patrol-map` · draw CRUD · POST check-in on web P1 · OSM.org/Esri · VietnamBoundaries embed |

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| UI map | `/agent-dev-oms-map` R1–R11 · `/map-inspect-popup` | peer GIS `attachVnClipBasemap` · cấm OSM.org/Esri DTO |
| UI common | `@linm-soft-org/linm-web-common-components` | toast/`useAlert` · cấm native alert |
| HTTP | apiClient SSOT | BFF paths only from MFE |
| BE | Linm.Platform.CommonLib | ApiResponse |
| Auth | Linm.Platform.Authentication + RequirePermission | existing Patrol + role segment scope |
| Files | FileService.Bff | resign mỗi view · cấm persist/log presigned |
| Persist | no-parent-json-field | PhotoLocalIds guid[] · chainage scalars |
| Peer | `web-rmms-patrol-map` | chainage/bake pair · migration=none |

## FormType pack (`packKind=map`)

| Field | Value |
|-------|-------|
| formType | `map` |
| formPattern | Full page (SCR-MAP) + MapPopup Modal (SCR-INSPECT) + Chi tiết (SCR-DETAIL) |
| Grid AC | N/A |
| Report AC | N/A |
| Leave | N/A dirty (read-only P1) · toast soft |
| Dev slash | `/agent-dev-oms-map` · leaf `/map-inspect-popup` |
| Map gates | R1–R11 (+ Fit `fitVnClipMap`) · **cấm** Fit chip page · click pin = popup only |
| Delta NEW | REAL · SCOPE · LAYER-ASSIGNED · KMPOST clamp · FIT person · PIN-02 · CHAIN reuse · KM-EMPTY · BASE clip · keep GALLERY-PATROL |
| Write P1 | **none** — web read-only; upload = mobile field path |

### Screens (from Design)

| id | Surface | Pattern | FormMode | Actions |
|----|---------|---------|----------|---------|
| SCR-MAP | Bản đồ tuần + sidebar tabs | Full page | **View** | filter · select person · fitBounds nét · animate · geolocate |
| SCR-INSPECT | MapPopup pin | Modal | **View** | PIN-02 fields · gallery photos |
| SCR-DETAIL | Tab Chi tiết / timeline | Panel | **View** | history → gallery parity |

Zones: `NAV-GIS` · `FILTER-BAR` · `TAB-ROAD` · `TAB-CHECK` · `TAB-DETAIL` · `LIST-PERSON` · `MAP-HOST` · `LAYER-ASSIGNED` · `LAYER-KMPOST` · `MAP-BAR` · `MAP-POPUP-INSPECT` · `GALLERY-PATROL`

## FormMode ↔ API (REQUIRED)

| FormMode / surface | Method/Path | Notes |
|--------------------|-------------|-------|
| SCR-MAP · LIST-PERSON | `GET web-bff/api/v1/patrol/sessions` → `api/v1/patrol/sessions` | **SCOPE**: TDTK → filter by own `rmms_user_route_segments` · Admin/MANAGER-RMMS → company-wide · **REAL**: cấm seed khi đã có session |
| SCR-MAP · FILTER-BAR | same sessions + segments/routes | office/route/mode — reuse existing query keys · cấm invent |
| SCR-MAP · LAYER-ASSIGNED | segments + bake geom | MapPolyline đoạn giao · empty segment → empty nét |
| SCR-MAP · LAYER-KMPOST | `GET gis/chainage` + KM_POST bake | clamp km đoạn chọn (**KMPOST-01**) |
| SCR-MAP · MAP-HOST pins/track | `GET …/patrol/sessions/{id}/check-ins` | pins xanh/đỏ · OSRM `routeDrivingTrack` client · **cấm** chord-only |
| SCR-MAP · list.kmFromTo | segment km cols | **KM-EMPTY**: empty ok · cấm bịa |
| SCR-INSPECT · PIN-02 | check-in DTO | tên · mã NV · **chainageLabel** · GPS **6dp** · giờ |
| SCR-INSPECT · GALLERY-PATROL | `photoLocalIds` → `GET web-bff/api/v1/files/{id}` resign | guid FileService · empty = «Chưa có ảnh» |
| SCR-DETAIL · detail.history | same check-ins DTO | Timeline → gallery parity (U-GALLERY-ZONE) |
| Create/Edit/PATCH page | **n/a P1** | cấm invent POST files / PATCH session trên GIS map |
| Mobile field write (cite) | existing `POST …/check-ins` (+chainageKm/Label) | cite only — not Dev scope this page |

### controlHint → API shape

| uiField | controlHint | SA shape |
|---------|-------------|----------|
| filter.office / filter.route / filter.mode | Select / Tab | query + segments/routes scalars |
| list.personName / list.employeeCode | Text | sessions DTO · click→**FIT** fitBounds nét assigned/track |
| list.kmFromTo | Text | segment km · **empty-ok** |
| list.status | Badge | scalar / derived |
| map.assignedSeg | MapPolyline | segments + bake · LAYER-ASSIGNED |
| map.kmPost | MapLayer | KM_POST clamp selected km |
| map.track | MapPolyline | OSRM client / bake · cấm chord-only |
| map.pin | MapPin | check-ins lat,lng |
| inspect.* (PIN-02) | Text | personName · employeeCode · chainageLabel · lat/lng 6dp · time |
| checkIn.chainageKm / chainageLabel | Text | peer patrol-map scalars · **CHAIN-01** reuse |
| checkIn.photoLocalIds | ImageGallery | **fileIds[] guid** → FileService resign |
| map.basemap | — | `attachVnClipBasemap` MapService · **BASE-01** |

## Persist / entity / migration

| Item | Decision |
|------|----------|
| Entities | **reuse** `PatrolSessions` · `PatrolCheckIns` · `AppUserRouteSegmentEntity` · `GisRouteGeoms` |
| `PhotoLocalIds` | **guid[]** FileService — **confirm** |
| chainageKm / chainageLabel | **reuse** peer `web-rmms-patrol-map` columns/DTO — **confirm** |
| Parent `*Json` | **none** |
| Migration Schema_* | **none** — pair chainage/bake đã có · **cấm** Schema mới nếu pair có |
| Seed | FE **không** seed Vinh trong mọi trường hợp (REAL-01) |
| data-import | **N/A** |

## Implement gates (confirm)

| Gate | Decision | Endpoints / surfaces | Skill | Note |
|------|----------|----------------------|-------|------|
| TZ | **required** | check-in / session DateTime | `/review-timezone-implement` | FE local · BE UTC |
| XCO | **get_only** | `GET sessions` · `GET check-ins` · segments read | `/implement-view-cross-company` | AllowedCompanyIds · scope role |
| SHARE | **tenant_keep** | PatrolSessions / CheckIns / segments | `/implement-shared-table` | operational tenant |

AskQuestion (autoApprove ON): `sa_tz_gate=tz_required` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant` · `solution_confirm=approve` · 2026-09-30T15:50:00.000Z

## API catalog

### API-01: GET /api/v1/patrol/sessions

| | |
|--|--|
| Purpose | List phiên tuần — LIST-PERSON · **SCOPE-01** |
| Permission | existing Patrol list/read |
| Tenant | X-Company-Id |
| Scope | **RMMS-TDTK** → chỉ ca giao với `rmms_user_route_segments` của user · **Admin / MANAGER-RMMS** → mọi ca công ty · **cấm** client bypass |
| Request | query: optional office/route/mode/status (reuse existing — **cấm** invent keys) |
| Response | sessions[]: id · personName · employeeCode · route(s) · status · timestamps · segment refs |
| Errors | 401 · 403 · empty → empty state (TDTK no segment) · seed **chỉ** zero-data |
| Form surfaces | SCR-MAP View list + filters |
| Field map | personName · employeeCode · kmFromTo(empty-ok) · status |
| BFF | `GET web-bff/api/v1/patrol/sessions` proxy |
| Migration | none |
| gates | tz=yes · xco=yes · shared=tenant_keep |

### API-02: GET /api/v1/patrol/sessions/{id}/check-ins

| | |
|--|--|
| Purpose | Pins + timeline + photoLocalIds + chainage |
| Permission | existing Patrol read by session |
| Request | path `{id}` |
| Response | `PatrolCheckInDto[]`: lat · lng · status · **chainageKm** · **chainageLabel** · **photoLocalIds: guid[]** · timestamps · person fields for popup |
| Form surfaces | MAP pins/track · SCR-INSPECT PIN-02 · SCR-DETAIL · GALLERY |
| BFF | `GET web-bff/api/v1/patrol/sessions/{id}/check-ins` proxy |
| Migration | none |
| gates | tz=yes · xco=yes · shared=tenant_keep |

### API-03: GET web-bff/api/v1/files/{id} (resign / view)

| | |
|--|--|
| Purpose | ImageGallery resign URL mỗi view |
| Ownership | **BFF FileService only** — domain API **không** host files |
| Field map | `photoLocalIds[]` → file guid |
| Migration | none |

### API-04: segments `rmms_user_route_segments` (cite existing)

| | |
|--|--|
| Purpose | LAYER-ASSIGNED · list.kmFromTo · SCOPE join · FIT bounds |
| Owner | existing Integration/Auth/Gis service (cite — **cấm** invent map-only API) |
| Response | assigned polylines via bake · km cols (nullable) |
| Migration | none |

### API-05: GET gis/chainage + bake `GisRouteGeoms` (cite peer)

| | |
|--|--|
| Purpose | chainageLabel/Km · LAYER-KMPOST clamp · track bake |
| Peer | `web-rmms-patrol-map` · **CHAIN-01**. UI gọi RMMS `GET gis/chainage`, không gọi Map.Api từ browser |
| Measure | RMMS API → Map.Api `GET api/v1/gis/chainage` + `POST api/v1/gis/route-measures` (`Gis__MapServiceBaseUrl`). BFF `ServiceEndpoints__MapService` chỉ tile và `streets/search` |
| Migration | `Schema_DropGisRouteGeomLineM` bỏ `LineM` trên RMMS. Cột M nằm `route_centerlines` trên `linm_maps` |

### API-06 (cite only · out of page): POST …/check-ins

Mobile upload + chainageKm/Label — **không** implement trên web map P1.

## BFF vs API

| Path | Owner | Role |
|------|-------|------|
| `api/v1/patrol/sessions*` | Domain Patrol API | source of truth + **scope filter** |
| `web-bff/api/v1/patrol/sessions*` | BFF | **proxy only** |
| `web-bff/api/v1/files/*` | FileService.Bff | media resign/view |
| gis/chainage · GisRouteGeoms | Gis domain (cite) | UI → RMMS chainage. Measure SQL ở Map.Api qua `Gis__MapServiceBaseUrl` |
| `rmms_user_route_segments` | existing service (cite) | assigned segments |
| Invent `api/v1/gis-patrol-map` / `*-files` / PatrolMapController | **cấm** | — |

## Gaps for TL/Dev (ids only — HOW = TL)

| Id | Summary |
|----|---------|
| GAP-MAP-PATROL-REAL-01 | Bind ca thật · cấm seed khi có session |
| GAP-MAP-PATROL-SCOPE-01 | BE role scope TDTK vs Admin/MANAGER + segments |
| GAP-MAP-PATROL-LAYER-01 | LAYER-ASSIGNED polyline + bake |
| GAP-MAP-PATROL-FIT-01 | click person → fitBounds nét |
| GAP-MAP-PATROL-PIN-02 | popup HARD fields + gallery |
| GAP-MAP-PATROL-KMPOST-01 | KM_POST clamp km đoạn chọn |
| GAP-MAP-PATROL-BASE-01 | attachVnClipBasemap only |
| GAP-MAP-PATROL-CHAIN-01 | reuse RMMS chainage. `LineM` trên MapService `route_centerlines`, không trên DB RMMS |
| GAP-MAP-PATROL-KM-EMPTY-01 | empty km ok · cấm bịa |
| GAP-MAP-PATROL-PHOTO-01 | gallery fileIds popup + Chi tiết |
| GAP-MAP-PATROL-FILE-HARD | FileService.Bff only |
| leftover OMS | R1–R11 · inspect · animate · OMS-KEEP |

## Handoff → team_lead

| Field | Value |
|-------|-------|
| feature / packKind | `gis-patrol-map` · `map` |
| phase_from / phase_to | sa → team_lead |
| STATUS | solution **confirmed** |
| formType | map · Full + MapPopup · FormMode View-only P1 |
| APIs | API-01 sessions(scoped) · API-02 check-ins(+chainage) · API-03 files · API-04 segments cite · API-05 chainage/bake cite |
| FormMode↔API | table above |
| entity/migration | reuse Patrol* + segments + GisRouteGeoms · **migration=none** |
| TZ/XCO/SHARE | tz_required · xco_get_only · tenant_keep |
| FileGate | FileService.Bff · PhotoLocalIds=guid |
| BFF vs API | patrol proxy · files BFF · gis/segments cite |
| Map AC | REAL-01 · SCOPE-01 · LAYER-01 · FIT-01 · PIN-02 · KMPOST-01 · BASE-01 · CHAIN-01 · KM-EMPTY-01 · SNAP/PIN/PHOTO · OMS-KEEP |
| Open questions | **none** (U-* locked PO/Design) |
| Next | `/agent-team-lead` · T-* Delta · **cấm** e2e ở SA |
| Cấm | ERP.* · re-scan demo · yarn build/e2e/start:std · Step 4b · Write MFE |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-sa |
| skillVersion | 2026.09.05.03 |
| schemaVersion | 2 |
| workflowVersion | 2026.09.05.03 |
| rulesVersion | 2026.09.12.1 |
| contentHash | sha256:ca2b1f0e2bf0bd97e92b99936fde30e4e92f1db00023191cf55297415b8d8247 |
| generatedAt | 2026-09-30T15:50:00.000Z |
| versionGate | ok |
| solution_confirm | approve |
| taskId | task_1bd936ce |
