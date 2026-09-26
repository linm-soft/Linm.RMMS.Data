# Data-analy — real-data bind — web-rmms-field-reflect

| Field | Value |
|-------|-------|
| feature | `web-rmms-field-reflect` |
| title | Phản ánh hiện trường |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_f225c747` |
| prefix API | `api/v1` · resources `incident` · `patrol` · `integration` · `ai-vision` · `files` |
| prefix BFF web (cite) | `web-bff/api/v1/{resource}` · **không** base client |
| prefix BFF mobile (HARD) | `mobile-bff/api/v1` · `:5202` · cùng `{resource}` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| bffRepo | `Linm.RMMS.Mobile.Bff` · **cấm** Route mobile-bff trên web-bff controllers |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/web-rmms-field-reflect` |
| productRoute | `/field/reflect` |
| domain | **Incident** + **Patrol** + **Integration** + **AiVision** (+ FileService cite) |
| contentHash | `sha256:e678be9152069e48f353f88e9f4d377e20e4fd4ad5c8d4aa2c86bd995bc1e667` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| analyzedAt | `2026-09-26T02:54:00.000Z` |
| demo | **N/A** · **cấm** demo-json / in-app mock SSOT / fake GPS |

## § Scope

| In | Out |
|----|-----|
| FR-00 pick · FR-01 form · FR-02 capture | Me tab · cam-view · feedback |
| Live sessions · asset-types · uploads/files · detect · incidents POST | invent `field-reflect` controller/path |
| GPS HARD · live-only sessions · offline draft peer | journal / kết ca / tồn tại / tần suất (B–E) |
| Mobile.Bff proxy only | web-bff client base · ERP.* · iOS/Android |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/web-rmms-field-reflect.md` | — | created this run |
| `peer-context` | `field-reflect.md` · `photo-geo-capture.md` · `incident-create.md` | — | DES + GAP SESS/CHK/MEDIA |
| `plan` | `SCREENS.md` `/field/reflect` · overlay photo-geo | — | SSOT actions |
| `task` | `TASKS.md` T-W3-10 | — | FieldReflectView |
| `api-session` | `GET patrol/sessions` · Đang tuần | no ca → toast · chặn gắn Route | **cấm** bịa / itemsOrDemo |
| `api-asset-types` | `GET integration/asset-types` | empty pick | toast |
| `api-upload` | `POST ai-vision/uploads` + PUT | — | toast fail |
| `api-files` | `files/init` · PUT object · commit | — | peer photo-geo · **cấm** persist full URL |
| `api-detect` | `POST ai-vision/detect` | optional | fail toast · **cấm** fake class |
| `api-incident` | `POST incident/incidents` | — | 4xx toast · **cấm** silent ok |
| `domain-map` | Incident · Patrol · Integration · AiVision | — | **GAP** slug reflect · **cấm ERP.*** |
| `geo` | `navigator.geolocation` | deny → block | **cấm** fake lat/lng |
| `offline` | peer `web-rmms-offline` | queue local | **cấm** invent OfflineQueueController |
| `catalog` | useFormOptions + asset-types | — | **cấm** hardcode VN form |
| `demo` | — | N/A | **cấm** demo SSOT ship |

## §B — Bind field (HARD)

| uiField | Label (key) | controlHint | catalogKind | GET | write field | sameMfe | sameMobile |
|---------|-------------|-------------|-------------|-----|-------------|---------|------------|
| asset.type | loại TS | LookupGrid/Card | asset-types | `GET …/integration/asset-types` | `AssetLabel` · `Title` | peer create | field-reflect |
| kind | loại hư | Segment 3 | LOOKUP_STATIC | — | map → `IncidentType` | peer create | DES-MOB-FIELD-KIND |
| checklist.* | checklist | CheckboxGroup | LOOKUP_STATIC local | — | fold → `Description` | GAP-CHK | asset-kcht-32 |
| photos | ảnh | PhotoRow | files / ai-vision | uploads hoặc files/* | `MediaIds` / DetectionId | photo-geo | n/a |
| detect | nhận diện | Button | — | — | POST `ai-vision/detect` | Live | n/a |
| session.route | tuyến | Text RO | — | `GET patrol/sessions` | `RouteName` · Km | peer A | n/a |
| session.km | lý trình | Text RO | — | session | `KmStart` display/bind | peer | n/a |
| lat/lng | GPS | GPS | geo | device | HasGps=true · detect Lat/Lng | SCREENS | n/a |
| accuracyM | GPS accuracy | GPS | geo | device | gate ≤30 detect | SCREENS | n/a |
| severity | mức | Select | LOOKUP_STATIC | — | `Severity` | peer create | n/a |
| description | mô tả | Textarea | — | — | `Description` | Live | n/a |
| status | trạng thái | Hidden/Select | LOOKUP_STATIC | — | `Status` = `new` (draft offline local) | Live | **cấm** send Draft nếu BE reject |
| requestedAt | giờ | Hidden | — | UTC now | `RequestedAt` | Live | n/a |
| create | tạo vấn đề | Button | — | — | POST `incident/incidents` | Live | n/a |
| draftOffline | nháp mất sóng | Button | — | — | local queue peer offline | offline | n/a |

**Create body (cite Live / SCREENS):** `Title` · `RouteName` · `IncidentType` · `Status` · `RequestedAt` · optional `Severity` · `Description` · `AssetLabel` · `KmStart` · `MediaIds` · `DetectionId` · `HasGps=true` khi có fix · **không** cột Lat trên CreateIncidentRequest (GAP-PGC-BE-01 object lat).

**Cấm** ERP.* · **cấm** fake GPS · **cấm** itemsOrDemo sessions · **cấm** invent field-reflect DTO/path · **cấm** hardcode VN labels.

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| LOOKUP_STATIC | FE `useFormOptions` (title · kind · severity · toasts · actions) | CTX + SCREENS + peer | hardcode label VN |
| asset-types | `GET integration/asset-types` | DOMAIN-MAP Integration | invent asset-type trong Incident |
| sessions | `GET patrol/sessions` | Patrol | invent session stub |
| checklist | local by asset code | peer asset-kcht-32 | invent checklist endpoint |
| files | `files/init|object|commit` | FileService via Mobile.Bff | persist full URL |
| profile | `GET auth/profile` | Auth cite shell | invent user API trong Incident |

## §D — Map / vẽ

| Mục | Ghi |
|-----|-----|
| map | optional HITL pin trong peer photo-geo FR-02 · **không** draw GIS CRUD trên FR-01 |
| GPS | point capture · deny block · detect accuracy ≤ 30 m |

## §E — Progress / vòng đời

| stateField | Nguồn | Ai đổi | API | UI |
|------------|-------|--------|-----|-----|
| session.Status | `rmms_patrol_sessions` Live | peer Field A | GET sessions | stamp RO · empty nếu không Đang tuần |
| incident create | Incident Live | create button | POST incidents | toast ok · nav optional list |
| draftOffline | local queue | draft button | peer offline replay | toast draft |
| detection | AiVision Live | detect | POST detect | optional hint row |

`progress: reflect pick → form → create|draft` · không đổi session Status trên FR-*.

## §F — Handoff

| Role | Packet |
|------|--------|
| PO | DoD pick+form+GPS+create · live sessions · no Me · BFF mobile only |
| Design | control-map §B · phone 430 · Android 1-1 · reviewUrl |
| SA | Cite Live Incident/Patrol/Integration/AiVision/files · DOMAIN-MAP row · Mobile.Bff · **cấm** invent path · **cấm** ERP.* |
| Dev web mobile | `Linm.Web.RMMS.Mobile` · `VITE_MOBILE_API_URL` `:5202` · GPS+sessions gate |
| QA | no session · GPS deny · accuracy>30 · offline draft · no fake coords · no web-bff |

## Gaps (cite)

| id | Note |
|----|------|
| GAP-DA-REFLECT-CTX-01 | CTX `web-rmms-field-reflect.md` thiếu lúc start → **created** từ SCREENS + peer field-reflect |
| GAP-MOB-FIELD-SESS-01 | OPEN · live-only sessions · **cấm** itemsOrDemo |
| GAP-MOB-FIELD-CHK-01 | checklist local · no API |
| GAP-MOB-FIELD-MEDIA-01 | MediaIds / Description bind · SA cite |
| GAP-PGC-BE-01 | object lat chưa có cột create · HasGps cờ only |
| GAP-DOMAIN-MAP-REFLECT | slug `web-rmms-field-reflect` chưa có row |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=2` · `contentHash=sha256:e678be9152069e48f353f88e9f4d377e20e4fd4ad5c8d4aa2c86bd995bc1e667` · `rulesVersion=2026.09.25.2` · `analyzedAt=2026-09-26T02:54:00.000Z`
