# Data-analy — real-data bind — web-rmms-cam-patrol

| Field | Value |
|-------|-------|
| feature | `web-rmms-cam-patrol` |
| title | Camera tuần |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_c661fa52` |
| prefix API | `api/v1` · resources `patrol` · `ai-vision` · `incident` |
| prefix BFF web (cite) | `web-bff/api/v1/{resource}` |
| prefix BFF mobile (HARD) | `mobile-bff/api/v1` · `:5202` · cùng `{resource}` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| bffRepo | `Linm.RMMS.Mobile.Bff` · **cấm** Route mobile-bff trên web-bff controllers |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/web-rmms-cam-patrol` |
| productRoute | `/field/cam` |
| domain | **Patrol** + **AiVision** + **Incident** (+ Auth cite) |
| contentHash | `sha256:cd46c9486c0a3fe71165c27906508a1608ba46cca1351fe9df832ab7b2efa68c` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| analyzedAt | `2026-09-25T18:05:00.000Z` |
| demo | **N/A** · **cấm** demo-json / in-app mock SSOT / fake GPS |

## § Scope

| In | Out |
|----|-----|
| CP-01 Camera tuần finder + detect + confirm/skip | Me tab · cam-view · feedback |
| Live `patrol/sessions` · `ai-vision/detect` · `incident/incidents` | invent `cam-patrol` controller/path |
| GPS HARD ≤ 30 m · ImageBase64 bắt buộc | journal / kết ca / tồn tại / tần suất (B–E) |
| Mobile.Bff proxy only | web-bff client base · ERP.* · iOS/Android |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/web-rmms-cam-patrol.md` | — | created this run |
| `peer-context` | `docs/context/features/cam-patrol.md` | — | DES + GAP FRAME/SCORE |
| `plan` | `docs/plan/web-rmms-mobile/SCREENS.md` `/field/cam` | — | SSOT actions |
| `task` | `TASKS.md` T-W3-09 | — | CamPatrolView |
| `api-session` | `GET patrol/sessions` · Đang tuần | no ca → empty + chặn detect | toast · **cấm** bịa ca |
| `api-detect` | `POST ai-vision/detect` · AiVisionOpsController | — | fail toast · **cấm** fake class |
| `api-detection` | `GET ai-vision/detections/{id}` | optional | 404 toast |
| `api-incident` | `POST incident/incidents` | — | 4xx toast · **cấm** silent ok |
| `domain-map` | DOMAIN-MAP Patrol · AiVision · Incident | — | **cấm ERP.*** |
| `geo` | `navigator.geolocation` | deny → block | **cấm** fake lat/lng |
| `offline` | peer `web-rmms-offline` | queue local | **cấm** invent OfflineQueueController |
| `demo` | — | N/A | **cấm** demo SSOT ship |

## §B — Bind field (HARD)

| uiField | Label (key) | controlHint | catalogKind | GET | write field | sameMfe | sameMobile |
|---------|-------------|-------------|-------------|-----|-------------|---------|------------|
| session.active | ca Đang tuần | Text RO stamp | — | `GET …/patrol/sessions` filter Đang tuần | display Route/Km · PatrolType | peer field hub | n/a |
| stamp.route | tuyến | Text RO | — | session.Route | — | peer A | n/a |
| stamp.km | lý trình | Text RO | — | session / Note | — | peer | n/a |
| lat | GPS lat | GPS | geo | device | `Lat` body detect + HasGps | peer CI | n/a |
| lng | GPS lng | GPS | geo | device | `Lng` | peer CI | n/a |
| accuracyM | GPS accuracy | GPS | geo | device | `AccuracyM` · gate ≤ 30 | SCREENS | n/a |
| imageBase64 | khung hình | CameraCapture | — | device camera | `ImageBase64` **required** detect | GAP-FRAME | n/a |
| engine | engine | Hidden | LOOKUP_STATIC | — | `Engine=P1` | cam-patrol CTX | n/a |
| detect.submit | nhận diện | Button | — | — | POST `ai-vision/detect` | Live | n/a |
| detection.id | id phát hiện | Hidden | — | detect response / GET detections/{id} | `DetectionId` confirm | Live | n/a |
| detection.kind | loại phát hiện | Text/Chip | — | detect DTO | display only | Live | n/a |
| detection.score | độ tin cậy | — | — | demo only | **OUT ship UI** GAP-SCORE | — | — |
| confirm | xác nhận sự cố | Button | — | — | POST `incident/incidents` · DetectionId · HasGps=true | Live | n/a |
| skip | bỏ qua | Button | — | — | UI dismiss only | — | n/a |

**Detect body (cite Live):** `ImageBase64` · `Lat` · `Lng` · `AccuracyM` · `Engine=P1` (+ fields SA cite từ AiVisionOpsController).

**Confirm body (cite Live):** `DetectionId` · `HasGps=true` (+ map incident fields SA cite — **không** invent cam-patrol DTO).

**Cấm** ERP.* · **cấm** fake GPS · **cấm** detect khi chưa fix / accuracy > 30 · **cấm** ImageBase64=null ship DoD.

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| LOOKUP_STATIC | FE `useFormOptions` keys (title · actions · toasts · Engine) | CTX + SCREENS | hardcode label VN trên form |
| profile | `GET auth/profile` | Auth | invent user API trong Patrol |
| sessions | `GET patrol/sessions` | Patrol | invent session stub |
| files | (không bắt buộc CP-01 nếu detect dùng base64) | FileService | persist full URL nếu sau này upload |

## §D — Map / vẽ

| Mục | Ghi |
|-----|-----|
| map | **none** trên CP-01 (finder camera · không draw layer) |
| GPS | point capture only · accuracy gate 30 m |

## §E — Progress / vòng đời

| stateField | Nguồn | Ai đổi | API | UI |
|------------|-------|--------|-----|-----|
| session.Status | `rmms_patrol_sessions` Live | (hub Field) | GET sessions | stamp RO · empty nếu không Đang tuần |
| detection | AiVision Live | detect button | POST detect | card kết quả · **không** score % |
| incident create | Incident Live | confirm | POST incidents | toast ok · nav optional list |
| skip | UI only | skip | — | dismiss · toast skip |

`progress: cam-patrol detect → confirm|skip` · không đổi session Status trên CP-01.

## §F — Handoff

| Role | Packet |
|------|--------|
| PO | DoD camera+GPS+detect+confirm · no Me · BFF mobile only |
| Design | control-map §B · phone 430 · Android 1-1 · ẩn score · reviewUrl |
| SA | Cite Live AiVision/Incident/Patrol · Mobile.Bff · **cấm** invent path · **cấm** ERP.* |
| Dev web mobile | `Linm.Web.RMMS.Mobile` · `VITE_MOBILE_API_URL` `:5202` · GPS+frame gate |
| QA | no session · GPS deny · accuracy>30 · frame fail · no fake coords · no web-bff |

## Gaps (cite)

| id | Note |
|----|------|
| GAP-DA-CAM-CTX-01 | CTX `web-rmms-cam-patrol.md` thiếu lúc start → **created** từ SCREENS + peer cam-patrol |
| GAP-MOB-CAM-FRAME-01 | OPEN · frame thật DoD · **cấm** null heuristic ship |
| GAP-MOB-CAM-FRAME-02 | fail = toast · **cấm** fallback class giả |
| GAP-MOB-CAM-SCORE-01 | Design ẩn % tin cậy trên ship |
| GAP-DA-CAM-OUT-ME | Me / cam-view OUT · **cấm** ship tab Cá nhân |
| GAP-DA-CAM-OUT-WAVE | journal/kết ca/tần suất = waves B–E · **cấm** gộp |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=2` · `contentHash=sha256:cd46c9486c0a3fe71165c27906508a1608ba46cca1351fe9df832ab7b2efa68c` · `rulesVersion=2026.09.25.2` · `analyzedAt=2026-09-25T18:05:00.000Z`
