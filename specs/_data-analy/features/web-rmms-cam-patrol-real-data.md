# Data-analy — real-data bind — web-rmms-cam-patrol

| Field | Value |
|-------|-------|
| feature | `web-rmms-cam-patrol` |
| title | Camera tuần |
| packKind | `list` |
| changeScope | `edit_page` |
| status | `done` |
| taskId | `task_9bdd3978` |
| prefix API | `api/v1` · resources `patrol` · `ai-vision` · `incident` |
| prefix BFF web (cite) | `web-bff/api/v1/{resource}` |
| prefix BFF mobile (HARD) | `mobile-bff/api/v1` · `:5202` · cùng `{resource}` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| bffRepo | `Linm.RMMS.Mobile.Bff` · **cấm** Route mobile-bff trên web-bff controllers |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/camera-tuan` |
| mfeStdRoute | `/camera-tuan` |
| productRoute | `/field/cam` |
| domain | **Patrol** + **AiVision** + **Incident** (+ Auth cite) |
| contentHash | `sha256:c46ae5660ccba1b8e64ce8e5294acef77ceb4e0a75474372f2a3d3901efb5796` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.27.1` |
| analyzedAt | `2026-09-27T10:35:00.000Z` |
| demo | **N/A** · **cấm** demo-json / fake GPS |
| deltaCite | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` |

## § Scope

| In | Out |
|----|-----|
| Edit CP-01 Pattern B submit/validate | new_page CRUD · Excel toolbar/export |
| Live patrol/detect/incident (giữ bind) | invent `cam-patrol` path |
| GPS Acc≤30 · ImageBase64 required (success path) | khóa nút trước bấm vì thiếu GPS/frame |
| Mobile.Bff only · align 430px | web-bff · ERP.* · iOS/Android · SearchInput user/route trên CP-01 |

## § Delta Current vs New

| Bind / UX | Current | New |
|-----------|---------|-----|
| detect gate | `canDetect` disables button | validate on click · banner `string[]` · `validationAttempted` |
| confirm gate | gpsBlocked / !online disable | on-click banner · chỉ `confirming` disables |
| APIs | sessions · detect · detections · incidents | **không đổi** paths/DTO |
| road-routes / users | N/A CP-01 (stamp RO) | N/A · peer forms dùng SearchInput riêng |
| BFF | `mobileApiBase()` | giữ · cấm web-bff |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/web-rmms-cam-patrol.md` | — | edit_page Delta |
| `submit-validate` | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` | — | Pattern B HARD |
| `code` | `CamPatrolPage.tsx` | — | current disabled gates |
| `api-session` | `GET patrol/sessions` · Đang tuần | no ca → banner on detect | toast session load |
| `api-detect` | `POST ai-vision/detect` | — | toast API · **cấm** fake class |
| `api-detection` | `GET ai-vision/detections/{id}` | optional | 404 toast |
| `api-incident` | `POST incident/incidents` | — | 4xx toast |
| `domain-map` | Patrol · AiVision · Incident | — | **cấm ERP.*** |
| `geo` | `navigator.geolocation` | deny → banner on click | **cấm** fake |
| `demo` | — | N/A | **cấm** demo SSOT |

## §B — Bind field (HARD)

| uiField | Label (key) | controlHint | catalogKind | GET | write field | sameMfe | editNote |
|---------|-------------|-------------|-------------|-----|-------------|---------|----------|
| session.active | ca Đang tuần | Text RO stamp | — | `GET …/patrol/sessions` | display Route/Km · PatrolType | peer hub | giữ |
| stamp.route | tuyến | Text RO | — | session.Route | — | peer A | RO · không SearchInput |
| stamp.km | lý trình | Text RO | — | session / Note | — | peer | giữ |
| lat / lng / accuracyM | GPS | GPS | geo | device | detect body · gate ≤30 | peer | không disable CTA trước bấm |
| imageBase64 | khung hình | CameraCapture | — | device | `ImageBase64` required | GAP-FRAME | capture=environment |
| engine | engine | Hidden | LOOKUP_STATIC | — | `Engine=P1` | — | giữ |
| detect.submit | nhận diện | Button | — | — | POST `ai-vision/detect` | Live | Pattern B |
| detection.id / kind | kết quả | Hidden / Chip | — | detect DTO | DetectionId confirm | Live | no score % |
| confirm | xác nhận | Button | — | — | POST incidents · DetectionId · HasGps | Live | chỉ lock `confirming` |
| skip | bỏ qua | Button | — | — | UI dismiss | — | lock khi confirming |
| validationBanner | lỗi client | Banner | — | — | string[] Pattern B | SUBMIT-VALIDATE | **new edit** |

**Detect body:** `ImageBase64` · `Lat` · `Lng` · `AccuracyM` · `Engine=P1` (+ SA cite).  
**Confirm body:** `DetectionId` · `HasGps=true` (+ SA cite).  
**Cấm** ERP.* · fake GPS · ImageBase64=null success · invent cam-patrol DTO.

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| LOOKUP_STATIC | FE keys (title · actions · toasts · banner) | CTX + lookupStatic | hardcode VN mới nếu key có |
| sessions | `GET patrol/sessions` | Patrol | invent session stub |
| users / road-routes | peer SUBMIT-VALIDATE | Mobile.Bff forward | **N/A** CP-01 (không picker) |

## §D — Map / vẽ

| Mục | Ghi |
|-----|-----|
| map | **none** trên CP-01 |
| GPS | point capture · Acc gate 30 m (validate on submit) |

## §E — Progress / vòng đời

| stateField | Nguồn | Ai đổi | API | UI |
|------------|-------|--------|-----|-----|
| session.Status | Live | Field hub | GET sessions | stamp RO |
| detection | AiVision | detect | POST detect | card · no score |
| incident | Incident | confirm | POST incidents | toast ok |
| validationAttempted | UI | first detect/confirm click | — | banner + inline |
| skip | UI | skip | — | dismiss |

## §F — Handoff

| Role | Packet |
|------|--------|
| PO | Delta Pattern B · keep prior DEC · edit_page |
| Design | keep control-map · banner keys nếu thiếu |
| SA | keep Live cite · Mobile.Bff · no new API |
| Dev | `CamPatrolPage` · remove pre-disable · banner · align 430 |
| QA | CTA enabled · missing GPS/frame → banner · API toast |

## Gaps (cite)

| id | Note |
|----|------|
| GAP-DA-CAM-PATTERN-B | Current `disabled={!canDetect}` / gpsBlocked confirm — **edit** theo SUBMIT-VALIDATE |
| GAP-MOB-CAM-FRAME-01 | frame thật DoD · giữ |
| GAP-MOB-CAM-SCORE-01 | ẩn % · giữ |
| GAP-DA-CAM-OUT-ME | Me/cam-view OUT |
| GAP-DA-CAM-STD-URL | mfeStdUrl = `/camera-tuan` · **cấm** `/web-rmms-cam-patrol` |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=2` · `contentHash=sha256:c46ae5660ccba1b8e64ce8e5294acef77ceb4e0a75474372f2a3d3901efb5796` · `rulesVersion=2026.09.27.1` · `analyzedAt=2026-09-27T10:35:00.000Z` · `changeScope=edit_page`
