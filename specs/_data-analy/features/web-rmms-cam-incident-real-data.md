# Data-analy — real-data bind — web-rmms-cam-incident

| Field | Value |
|-------|-------|
| feature | `web-rmms-cam-incident` |
| title | Camera sự cố theo vai |
| packKind | `list` |
| changeScope | `edit_page` |
| status | `done` |
| taskId | `task_770ceabe` |
| prefix API | `api/v1` · resource `incident` |
| prefix BFF web (cite) | `web-bff/api/v1/incident` |
| prefix BFF mobile (HARD) | `mobile-bff/api/v1` · `:5202` · cùng `{resource}` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| bffRepo | `Linm.RMMS.Mobile.Bff` · **cấm** Route mobile trên web-bff |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/web-rmms-cam-incident` (alias) |
| mfeStdRoute | product `/van-de` · `/van-de/moi` · `/van-de/:id` |
| productRoute | `/van-de` · `/van-de/moi` · `/van-de/:id` |
| domain | **Incident** (+ Patrol · Integration · FileService · Auth · Maintenance peer · AiVision cite) |
| contentHash | `sha256:e515f74ca821b652154473ac30eaec7bb13c8921acf6725b739dc4eb1744b8d1` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.27.1` |
| analyzedAt | `2026-10-01T00:00:00.000Z` |
| demo | **N/A** · **cấm** demo-json / fake GPS |
| deltaCite | `docs/plan/web-rmms-mobile/PLAN-3-VAI.md` |

## § Scope

| In | Out |
|----|-----|
| Edit INC-CAP/N/D/L role-gate + Giao việc CTA QL_HAT | `new_page` · route mới · invent CamIncident* |
| Tuần đường POST + capture | TK/NT/QL_HAT tạo sự cố |
| QL_HAT list mọi + assign CTA | Giao việc ngoài QL_HAT · suy từ MANAGER-RMMS |
| Mobile.Bff · 430px | web-bff · ERP.* · iOS/Android · SLA 24h · Mục IV tiền · form giao fields (peer) |

## § Delta Current vs New

| Bind / UX | Current | New |
|-----------|---------|-----|
| create/capture | mọi user mở form | chỉ tuần đường · BE/FE role enforce |
| INC-L scope | chưa role | tuần đường own · QL_HAT all · TK/NT RO |
| INC-D assign | thiếu CTA | **Giao việc xử lý** chỉ QL_HAT → `paths.workFor` |
| APIs | incidents GET/POST/GET{id}/close | **không đổi** paths/DTO core · scope/filter by role |
| BFF | `mobileApiBase()` | giữ · cấm web-bff |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/web-rmms-cam-incident.md` | — | edit_page Delta |
| `plan-3-vai` | `docs/plan/web-rmms-mobile/PLAN-3-VAI.md` | — | role matrix HARD |
| `peer-context` | `docs/context/features/web-rmms-incident.md` | — | Live L/N/D |
| `code` | `IncidentCaptureSheet.tsx` · `IncidentDetailPage.tsx` · `IncidentCreatePage.tsx` · `IncidentListPage.tsx` | — | missing role gate / assign CTA |
| `api-list` | `GET incident/incidents` | empty «Chưa có sự cố» | toast |
| `api-post` | `POST incident/incidents` | — | toast · role deny |
| `api-get` | `GET incident/incidents/{id}` | — | toast / notFound |
| `api-close` | `POST …/{id}/close` | — | toast · role policy |
| `api-sessions` | `GET patrol/sessions` | no session → banner | toast |
| `api-asset-types` | `GET integration/asset-types` | empty pick | toast |
| `files` | FileService via RouteCapture | — | upload error toast |
| `auth-role` | cite role-gate profile caps | missing caps → deny write/assign | — |
| `domain-map` | Incident · peer web-rmms-incident | — | **cấm ERP.*** |
| `geo` | `navigator.geolocation` | deny → banner on Create/Lưu | **cấm** fake |
| `demo` | — | N/A | **cấm** demo SSOT |

## §B — Bind field (HARD)

| uiField | Label (key) | controlHint | catalogKind | GET | write field | sameMfe | editNote |
|---------|-------------|-------------|-------------|-----|-------------|---------|----------|
| title | Tiêu đề | TextInput | — | dto | `Title` required | incident | keep |
| incidentType | Loại | Select | LOOKUP_STATIC | dto | `IncidentType` | incident | keep |
| severity | Mức | Select | severities | dto | severity | incident | keep |
| routeName | Tuyến | Text RO | sessions | session/dto | `RouteName` | incident | stamp |
| kmStart/kmEnd | Km | Text/Number | — | dto | optional | incident | keep |
| description | Mô tả | TextArea | — | dto | `Description` + pin sidecar | incident | keep |
| requestedAt | Thời gian | DateTime | — | dto | `RequestedAt` | incident | keep |
| status | Trạng thái | Badge/Select | LOOKUP_STATIC | dto | `Status` | incident | create default |
| hasGps / lat/lng | GPS | GPS | geo | device / dto | `HasGps` (+ pins) | incident | Pattern B · **cấm** fake |
| mediaIds | Ảnh | RouteCapture | files | files commit | `mediaIds` | incident | tuần đường write |
| createSubmit | Tạo | Button | — | — | POST | incident | role tuần đường |
| incidentCards | list | List RO | — | GET list | — | incident | scope by role |
| fabCreate | FAB | Button | — | — | nav moi | incident | **hide** non-tuần-đường |
| assignCta | Giao việc xử lý | Button | — | — | nav workFor | incident | **QL_HAT only** · peer form |
| closeNote | Ghi chú đóng | TextArea | — | — | close Note | incident | peer · ẩn QL_HAT nếu SA chốt |
| roleCaps | quyền vai | Hidden | auth | profile | gate UI | role-gate | **new edit** |

**POST body (Live keep):** `Title` · `RouteName` · `IncidentType` · `Status` · `RequestedAt` · `HasGps` · media/desc/severity per peer.  
**Cấm** ERP.* · fake GPS · invent cam-incident DTO · `SlaHours=24` trên form này · Mục IV money fields.

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| LOOKUP_STATIC | FE INCIDENT_* | web-rmms-incident | hardcode VN nếu key có |
| incidents | Live incident | Incident | invent stub |
| sessions | Live patrol | Patrol | seed fake session |
| asset-types | Live integration | Integration | invent |
| roleCaps / packageCode | auth profile · job-titles | role-gate · `QL_HAT` | suy từ MANAGER-RMMS |
| work-orders | Maintenance peer | giao-viec-ql-hat | invent assign DTO trên slug này |

## §D — Map / vẽ

| Mục | Ghi |
|-----|-----|
| map | optional focus via `paths.mapFocus` · không draw CRUD |
| GPS | point Pattern B trên capture/create |

## §E — Progress / vòng đời

| stateField | Nguồn | Ai đổi | API | UI |
|------------|-------|--------|-----|-----|
| incident.status | Live | create · close · assign peer | GET/POST/close | badge INC-L/D |
| mediaIds | Live | tuần đường capture | POST + files | gallery / capture view |
| assign CTA | UI | QL_HAT | nav workFor | INC-D/L |
| validationAttempted | UI | first Create/Lưu | — | banner |
| roleCaps | profile | login | cite role-gate | hide/show FAB/assign/write |

## §F — Handoff

| Role | Packet |
|------|--------|
| PO | role matrix · edit_page · PLAN-3-VAI #4 · Giao việc QL_HAT |
| Design | keep zones · role visibility · CTA · 430 |
| SA | Live incidents · Mobile.Bff · DOMAIN-MAP slug · list scope |
| Dev | Incident* pages · caps · assign CTA · no new route |
| QA | create tuần đường · QL_HAT all+giao · TK/NT no giao · Pattern B |

## Gaps (cite)

| id | Note |
|----|------|
| GAP-DA-INC-ROLE | Current screens thiếu roleCaps — **edit** theo PLAN-3-VAI #4 |
| GAP-DA-INC-ASSIGN-CTA | INC-D thiếu nút **Giao việc xử lý** — add QL_HAT only |
| GAP-DA-INC-DOMAIN-ROW | DOMAIN-MAP thiếu slug `web-rmms-cam-incident` — SA add/bind peer incident |
| GAP-DA-INC-STD-ALIAS | mfeStdUrl alias ≠ product route — **cấm** invent product route |
| GAP-DA-INC-DEPS-ROLE-GATE | Cần caps từ `web-rmms-role-gate` |
| GAP-DA-INC-PEER-GIAO | Form giao + hạn TT41 = peer `web-rmms-giao-viec-ql-hat` |
| GAP-DA-INC-OUT | SLA 24h · Mục IV · native · web-bff · ERP.* · Giao việc ngoài QL_HAT |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=2` · `contentHash=sha256:e515f74ca821b652154473ac30eaec7bb13c8921acf6725b739dc4eb1744b8d1` · `rulesVersion=2026.09.27.1` · `analyzedAt=2026-10-01T00:00:00.000Z` · `changeScope=edit_page`
