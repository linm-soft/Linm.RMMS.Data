# Data-analy — controlHint — web-rmms-incident

| Field | Value |
|-------|-------|
| feature | `web-rmms-incident` |
| title | Sự cố list, tạo, chi tiết |
| packKind | `list` |
| changeScope | `new_page` |
| mode | `feature_context` |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:665f3697a399a948edb0ab14da5fc13716b477aa84b0b8e43f6ca33eb7216d2d` |
| analyzedAt | `2026-09-26T03:55:00.000Z` |
| demo | **N/A** |
| realData | `specs/_data-analy/features/web-rmms-incident-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **Incident** + Patrol · Integration · AiVision · FileService · Maintenance cite · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/web-rmms-incident` |
| mfeStdRoute | `/web-rmms-incident` |
| productRoute | `/incident` · `/incident/new` · `/incident/:id` |
| taskId | `task_5674f223` |
| phoneFrame | `max-width: 430px` |
| formPattern | Mobile full · Android 1-1 · **không** ERP Modal/Slideout Kind B desktop |
| bff | `Linm.RMMS.Mobile.Bff` · `VITE_MOBILE_API_URL=http://localhost:5202/mobile-bff/api/v1` · **cấm** web-bff |
| priorPeer | `incident-list` · `incident-create` · `incident-detail` · field-reflect · offline · home |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map + prototype reviewUrl. SA **cite** Live paths · **cấm** invent `web-rmms-incident` controller.  
> Nhãn UI: `useFormOptions()` / copy key — **cấm** hardcode tiếng Việt trên form.  
> **Cấm** tab Cá nhân · **cấm** iOS/Android · **cấm** fake GPS · **cấm** journal/kết ca/tồn tại/tần suất (B–E).

## Sources

| Source | Path | note |
|--------|------|------|
| CTX | `docs/context/features/web-rmms-incident.md` | **created this run** · hash gate |
| Screens | `docs/plan/web-rmms-mobile/SCREENS.md` | Tab Incident list/new/detail (+ vis/chat/estimate peer) |
| Plan/task | `PLAN.md` Tab incident · `TASKS.md` T-W4-01/02/03 | IncidentList/Create/DetailView |
| Peer CTX | `incident-list.md` · `incident-create.md` · `incident-detail.md` | DES + Live create body |
| Peer | field-reflect · offline · home · photo-geo | reflect map · draft · entry · capture |
| DOMAIN-MAP | Incident (+ cite Patrol/Integration/AiVision) | **GAP** slug `web-rmms-incident` |
| Prototype | `specs/mobile-p1/ui/prototype/android/index.html` `#sc-incident-list` · `#sc-inc-form` · detail | Design 1-1 only · **không** demo SSOT ship |

## Screens (ids)

| id | route | surface |
|----|-------|---------|
| INC-L | `/incident` · std `/web-rmms-incident` | List filter · cards · FAB · banner vis · map/chat |
| INC-N | `/incident/new` · std `…/new` | Pick TS · form kind/checklist/photo/GPS/severity · Create/Draft |
| INC-D | `/incident/:id` · std `…/:id` | Detail RO · close · nav estimate/map |
| INC-V | `/incident/vis` | Peer vis-capture (banner) |
| INC-C | `/incident/:id/chat` | Peer chat |
| INC-E | `/incident/estimate/:id` | Peer estimate/WO |

**Out:** Me* · feedback · cam-view · journal/kết ca/tồn tại/tần suất (B–E) · invent Incident*Controller cho slug này · web-bff client.

## ControlHint inventory

### INC-L — List

| uiField | screen | controlHint | catalogKind / notes |
|---------|--------|-------------|---------------------|
| screenTitle | INC-L | Text | copy key «Vấn đề» / «Sự cố» · useFormOptions |
| search | INC-L | SearchInput | query `search` |
| filter.status | INC-L | Select/Chip | LOOKUP_STATIC status → `status` |
| filter.severity | INC-L | Select/Chip | LOOKUP_STATIC severity → `severity` |
| list | INC-L | CardList | `GET incident/incidents` · pageSize=50 |
| card.title | INC-L | Text | `Title` |
| card.type | INC-L | Text/Badge | `IncidentType` |
| card.code | INC-L | Text | `Code` |
| card.route | INC-L | Text | `RouteName` · `KmStart` |
| card.person | INC-L | Text | requester display |
| card.requestedAt | INC-L | Text | `RequestedAt` |
| card.status | INC-L | Badge | `Status` |
| card.hasGps | INC-L | Icon/Flag | `HasGps` cờ · **không** Lat/Lng trên list DTO |
| fab | INC-L | FAB | nav `/incident/new` |
| banner.vis | INC-L | Banner/Button | nav `/incident/vis` peer |
| nav.map | INC-L | Button | nav `/gis` |
| row.open | INC-L | Nav | `/incident/{id}` |
| row.chat | INC-L | IconButton | `/incident/{id}/chat` peer |
| empty | INC-L | EmptyState | copy key |
| toast.fail | INC-L | Toast | load error · **cấm** `window.alert` |

### INC-N — Create

| uiField | screen | controlHint | catalogKind / notes |
|---------|--------|-------------|---------------------|
| assetPick | INC-N | LookupGrid | `GET integration/asset-types` → AssetLabel/Title |
| assetCard | INC-N | Card RO | loại TS đã chọn |
| kind | INC-N | Segment/Pill 3 | Hư · Mất · Hỏng → `IncidentType` · DES-MOB-INC-KIND |
| checklist | INC-N | CheckboxGroup | local by asset → `Description` · GAP-MOB-INC-CREATE-CHK-01 |
| photos | INC-N | PhotoRow | ai-vision/uploads hoặc files/* · capture overlay |
| detect | INC-N | Button | `POST ai-vision/detect` · cần ảnh + GPS ≤30 m |
| sessionStamp | INC-N | Text RO | `GET patrol/sessions` → RouteName · KmStart |
| gpsLock | INC-N | GPS | `navigator.geolocation` · deny → disable Create/Detect |
| severity | INC-N | Select | LOOKUP_STATIC |
| description | INC-N | Textarea | copy placeholder key |
| status | INC-N | Hidden/Select | `Status=new` · draft offline local only |
| create | INC-N | Button primary | `POST incident/incidents` · HasGps khi có fix |
| draftOffline | INC-N | Button secondary | peer `web-rmms-offline` |
| emptyNoSession | INC-N | Toast | không ca → chặn gắn Route · **cấm** bịa |

### INC-D — Detail

| uiField | screen | controlHint | catalogKind / notes |
|---------|--------|-------------|---------------------|
| header | INC-D | Text | Code · Severity · Status · Title |
| routeKm | INC-D | Text RO | RouteName · KmStart |
| hasGps | INC-D | Flag | HasGps · **cấm** invent Lat/Lng |
| close | INC-D | Button | `POST …/{id}/close` · Note optional |
| note | INC-D | Textarea | close Note |
| nav.estimate | INC-D | Button | peer estimate |
| nav.map | INC-D | Button | `/gis` |
| toast.ok/fail | INC-D | Toast | copy keys |

## Filter / grid (desktop HARD)

| | |
|--|--|
| LinErpListFilterBar / DES-GRID-* | **N/A** — phone list chips · **không** Kind B desktop grid primary |
| INC-L filters | mobile Search + status/severity chips · pageSize=50 |

## GPS

| Màn | Rule |
|-----|------|
| INC-N (+ capture) | **HARD** deny → chặn Create · Detect · geo capture · **cấm** fake |
| INC-L / INC-D | HasGps cờ xem · **không** bắt buộc GPS để load |
| Detect | accuracy > 30 m → không POST detect |

## API (cite Live — SA confirm DTO)

| Method | Path | Note |
|--------|------|------|
| GET | `incident/incidents` | list filters |
| POST | `incident/incidents` | create |
| GET | `incident/incidents/{id}` | detail |
| POST | `incident/incidents/{id}/close` | close |
| GET | `patrol/sessions` | ca create |
| GET | `integration/asset-types` | pick |
| POST | `ai-vision/uploads` · `ai-vision/detect` | media/detect |
| POST | `files/init` · PUT · commit | photo-geo peer |

App base: `{BffBase}/mobile-bff/api/v1`. **Cấm** invent path theo slug `web-rmms-incident`.

## UNCLEAR

| id | Issue | Action |
|----|-------|--------|
| UNCLEAR-DOMAIN-MAP-INC | DOMAIN-MAP chưa có row `web-rmms-incident` | SA thêm · Incident (+ cite) · MFE `/web-rmms-incident` |
| UNCLEAR-CHK-01 | GAP-MOB-INC-CREATE-CHK-01 checklist local | PO/Design taxonomy · **không** API mới |
| UNCLEAR-PGC-BE-01 | CreateIncidentRequest không cột Lat | HasGps only · SA cite Live |
| UNCLEAR-PEER-VIS | vis/chat/estimate in/out pack | P1 core = L/N/D · peer nav OK · không gộp CRUD WO vào slug |
| UNCLEAR-STD-NEST | std deep `/new` `/:id` vs query | Design/Dev: mount list + nested routes Mobile MFE |
| UNCLEAR-SESS | sessions empty on create | live-only · toast · **cấm** itemsOrDemo |

## Handoff

| Role | Dùng |
|------|------|
| PO | INC-L/N/D DoD · GPS gate · live list/create/detail · no Me · useFormOptions |
| Design | Phone 430 · Android 1-1 `#sc-incident-list` / `#sc-inc-form` / detail · zones INC-* · prototype + reviewUrl |
| SA | Cite Live incident(+patrol/integration/ai-vision/files) · Mobile.Bff · DOMAIN-MAP row · **cấm** ERP.* |
| TL/Dev | Wire Mobile MFE only · BFF `:5202` · GPS + live list · **cấm** web-bff |
| QA | empty list · GPS deny create · accuracy>30 · close Note empty · no fake coords · no Me · no web-bff |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:665f3697a399a948edb0ab14da5fc13716b477aa84b0b8e43f6ca33eb7216d2d` · `rulesVersion=2026.09.25.2` · `analyzedAt=2026-09-26T03:55:00.000Z`
