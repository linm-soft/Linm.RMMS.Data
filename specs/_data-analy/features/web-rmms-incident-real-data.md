# Data-analy — real-data bind — web-rmms-incident

| Field | Value |
|-------|-------|
| feature | `web-rmms-incident` |
| title | Sự cố list, tạo, chi tiết |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_5674f223` |
| prefix API | `api/v1` · resources `incident` · `patrol` · `integration` · `ai-vision` · `files` · cite `maintenance` (estimate peer) |
| prefix BFF web (cite) | `web-bff/api/v1/{resource}` · **không** base client |
| prefix BFF mobile (HARD) | `mobile-bff/api/v1` · `:5202` · cùng `{resource}` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| bffRepo | `Linm.RMMS.Mobile.Bff` · **cấm** Route mobile-bff trên web-bff controllers |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/web-rmms-incident` |
| productRoute | `/incident` · `/incident/new` · `/incident/:id` |
| domain | **Incident** + **Patrol** + **Integration** + **AiVision** (+ FileService · Maintenance cite peer) |
| contentHash | `sha256:665f3697a399a948edb0ab14da5fc13716b477aa84b0b8e43f6ca33eb7216d2d` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| analyzedAt | `2026-09-26T03:55:00.000Z` |
| demo | **N/A** · **cấm** demo-json / in-app mock SSOT / fake GPS |

## § Scope

| In | Out |
|----|-----|
| INC-L list · INC-N create · INC-D detail | Me tab · cam-view · feedback |
| Live incidents GET/POST/GET{id}/close · asset-types · sessions · uploads/detect/files | invent controller/path `web-rmms-incident/*` |
| GPS HARD trên create/detect · offline draft peer | journal / kết ca / tồn tại / tần suất (B–E) |
| Mobile.Bff proxy only | web-bff client base · ERP.* · iOS/Android |
| Peer nav vis/chat/estimate | gộp WO CRUD primary vào slug này |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/web-rmms-incident.md` | — | created this run |
| `peer-context` | `incident-list.md` · `incident-create.md` · `incident-detail.md` | — | DES + Live |
| `plan` | `SCREENS.md` Tab Incident · `PLAN.md` · TASKS T-W4-01/02/03 | — | SSOT |
| `api-list` | `GET incident/incidents` | EmptyState | toast fail |
| `api-detail` | `GET incident/incidents/{id}` | 404 toast | toast |
| `api-create` | `POST incident/incidents` | — | 4xx toast · **cấm** silent ok |
| `api-close` | `POST incident/incidents/{id}/close` | — | toast |
| `api-session` | `GET patrol/sessions` | no ca → toast · chặn Route bind | **cấm** bịa |
| `api-asset-types` | `GET integration/asset-types` | empty pick | toast |
| `api-upload` | `POST ai-vision/uploads` + PUT | — | toast |
| `api-files` | `files/init` · PUT · commit | — | peer photo-geo |
| `api-detect` | `POST ai-vision/detect` | optional | fail toast · **cấm** fake class |
| `domain-map` | Incident · Patrol · Integration · AiVision | — | **GAP** slug · **cấm ERP.*** |
| `geo` | `navigator.geolocation` | deny → block create/detect | **cấm** fake lat/lng |
| `offline` | peer `web-rmms-offline` | queue local | **cấm** invent OfflineQueueController |
| `catalog` | useFormOptions + asset-types + severity/status | — | **cấm** hardcode VN form |
| `demo` | — | N/A | **cấm** demo SSOT ship |

## §B — Bind field (HARD)

### List INC-L

| uiField | Label (key) | controlHint | catalogKind | GET | write field | sameMfe | sameMobile |
|---------|-------------|-------------|-------------|-----|-------------|---------|------------|
| search | tìm | SearchInput | — | query `search` | — | Live | n/a |
| filter.status | trạng thái | Chip/Select | LOOKUP_STATIC | `status` | — | Live | n/a |
| filter.severity | mức | Chip/Select | LOOKUP_STATIC | `severity` | — | Live | n/a |
| card.* | thẻ | CardList | — | list DTO | — | SCREENS | **không** Lat/Lng |
| fab | tạo | FAB | — | — | nav new | peer create | n/a |

### Create INC-N

| uiField | Label (key) | controlHint | catalogKind | GET | write field | sameMfe | sameMobile |
|---------|-------------|-------------|-------------|-----|-------------|---------|------------|
| asset.type | loại TS | LookupGrid/Card | asset-types | `GET …/integration/asset-types` | `AssetLabel` · `Title` | peer create | n/a |
| kind | loại hư | Segment 3 | LOOKUP_STATIC | — | map → `IncidentType` | DES-MOB-INC-KIND | n/a |
| checklist.* | checklist | CheckboxGroup | local | — | fold → `Description` | GAP-CHK | n/a |
| photos | ảnh | PhotoRow | files / ai-vision | uploads/files | `MediaIds` / DetectionId | photo-geo | n/a |
| detect | nhận diện | Button | — | — | POST detect | Live | n/a |
| session.route | tuyến | Text RO | — | `GET patrol/sessions` | `RouteName` | peer | n/a |
| session.km | lý trình | Text RO | — | session | `KmStart` | peer | n/a |
| lat/lng | GPS | GPS | geo | device | HasGps=true · detect Lat/Lng | SCREENS | n/a |
| accuracyM | GPS accuracy | GPS | geo | device | gate ≤30 detect | SCREENS | n/a |
| severity | mức | Select | LOOKUP_STATIC | — | `Severity` | peer | n/a |
| description | mô tả | Textarea | — | — | `Description` | Live | n/a |
| status | trạng thái | Hidden | LOOKUP_STATIC | — | `Status=new` | Live | **cấm** send Draft nếu BE reject |
| requestedAt | giờ | Hidden | — | UTC now | `RequestedAt` | Live | n/a |
| create | tạo vấn đề | Button | — | — | POST incidents | Live | n/a |
| draftOffline | nháp mất sóng | Button | — | — | local queue peer offline | offline | n/a |

**Create body (cite Live / SCREENS):** `Title` · `RouteName` · `IncidentType` · `Status` · `RequestedAt` · optional `Severity` · `Description` · `AssetLabel` · `KmStart` · `MediaIds` · `DetectionId` · `HasGps=true` khi có fix · **không** cột Lat trên CreateIncidentRequest (GAP-PGC-BE-01).

### Detail INC-D

| uiField | Label (key) | controlHint | catalogKind | GET | write field | sameMfe | sameMobile |
|---------|-------------|-------------|-------------|-----|-------------|---------|------------|
| detail.* | header fields | Text RO | — | `GET …/{id}` | — | Live | **cấm** invent Lat |
| close.note | ghi chú đóng | Textarea | — | — | `Note` optional | Live | empty OK |
| close | đóng | Button | — | — | POST close | Live | n/a |

**Cấm** ERP.* · **cấm** fake GPS · **cấm** itemsOrDemo · **cấm** invent slug DTO/path · **cấm** hardcode VN labels.

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| LOOKUP_STATIC | FE `useFormOptions` (title · kind · severity · status · toasts · actions) | CTX + SCREENS + peer | hardcode label VN |
| asset-types | `GET integration/asset-types` | DOMAIN-MAP Integration | invent asset-type trong Incident |
| sessions | `GET patrol/sessions` | Patrol | invent session stub |
| checklist | local by asset code | peer asset-kcht / create | invent checklist endpoint |
| files | `files/init|object|commit` | FileService via Mobile.Bff | persist full URL |
| profile | `GET auth/profile` | Auth cite shell | invent user API trong Incident |

## §D — Map / vẽ

| Mục | Ghi |
|-----|-----|
| map | INC-L/D nav `/gis` · **không** draw GIS CRUD trên Incident L/N/D |
| GPS | create/detect point · deny block · accuracy ≤ 30 m detect |

## §E — Progress / vòng đời

| stateField | Nguồn | Ai đổi | API | UI |
|------------|-------|--------|-----|-----|
| list Status/Severity | Incident Live | filter chips | GET list | cards |
| incident create | Incident Live | create | POST | toast · nav detail optional |
| draftOffline | local queue | draft | peer offline | toast draft |
| close | Incident Live | close button | POST close | toast · back list |
| detection | AiVision Live | detect | POST detect | optional hint |

`progress: list → create|detail → close` · peer vis/chat/estimate ngoài core DoD.

## §F — Handoff

| Role | Packet |
|------|--------|
| PO | DoD L/N/D · GPS · live API · no Me · BFF mobile only |
| Design | control-map §B · phone 430 · Android 1-1 · reviewUrl |
| SA | Cite Live Incident(+Patrol/Integration/AiVision/files) · DOMAIN-MAP row · Mobile.Bff · **cấm** invent path · **cấm** ERP.* |
| Dev web mobile | `Linm.Web.RMMS.Mobile` · `VITE_MOBILE_API_URL` `:5202` · GPS gate |
| QA | empty list · GPS deny · accuracy>30 · close empty Note · offline draft · no fake · no web-bff |

## Gaps (cite)

| id | Note |
|----|------|
| GAP-DA-INC-CTX-01 | CTX `web-rmms-incident.md` thiếu lúc start → **created** từ SCREENS + peer |
| GAP-DOMAIN-MAP-INC | slug `web-rmms-incident` chưa có row DOMAIN-MAP |
| GAP-MOB-INC-CREATE-CHK-01 | checklist local · no API |
| GAP-PGC-BE-01 | object/create lat chưa có cột · HasGps cờ only |
| GAP-PEER-VIS-EST | vis/chat/estimate = peer · không gộp primary WO vào slug |
| GAP-STD-NEST | std nested `/new` `/:id` — Design/Dev chốt mount |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=2` · `contentHash=sha256:665f3697a399a948edb0ab14da5fc13716b477aa84b0b8e43f6ca33eb7216d2d` · `rulesVersion=2026.09.25.2` · `analyzedAt=2026-09-26T03:55:00.000Z`
