# Data-analy — real-data bind — web-rmms-vis-capture

| Field | Value |
|-------|-------|
| feature | `web-rmms-vis-capture` |
| title | Nhận diện sự cố |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_9af023ae` |
| prefix API | `api/v1` · resources `ai-vision` · `incident` · `patrol` |
| prefix BFF web (cite) | `web-bff/api/v1/{resource}` · **không** base client |
| prefix BFF mobile (HARD) | `mobile-bff/api/v1` · `:5202` · cùng `{resource}` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| bffRepo | `Linm.RMMS.Mobile.Bff` · **cấm** Route mobile-bff trên web-bff controllers |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/web-rmms-vis-capture` |
| productRoute | `/incident/vis` |
| domain | **AiVision** + **Incident** (+ Patrol cite) |
| contentHash | `sha256:96ffc2878a4c6ad0367088c699203864c2e711b055ca68da8a59d696c8d4de97` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| analyzedAt | `2026-09-25T21:24:17.563Z` |
| demo | **N/A** · **cấm** demo-json / in-app mock SSOT / fake GPS |

## § Scope

| In | Out |
|----|-----|
| VIS capture · detect · result · attach/skip | Me tab · cam-view · feedback · cam-patrol finder · det-hitl |
| Live uploads/detect/detections · sessions · POST incidents | invent controller/path `web-rmms-vis-capture/*` |
| GPS HARD · offline queue peer | journal / kết ca / tồn tại / tần suất (B–E) |
| Mobile.Bff proxy only | web-bff client base · ERP.* · iOS/Android edit · on-device detect |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/web-rmms-vis-capture.md` | — | created this run |
| `peer-context` | `vis-capture.md` · `ai-vision.md` · `incident-list.md` | — | DES + Live |
| `plan` | `SCREENS.md` `/incident/vis` · PLAN · T-W4-04 | — | SSOT |
| `api-upload` | `POST ai-vision/uploads/init` + PUT + complete | empty photo → chặn detect | toast |
| `api-detect` | `POST ai-vision/detect` | no class → empty rows | fail toast · **cấm** fake class |
| `api-detection` | `GET ai-vision/detections/{id}` | optional | toast |
| `api-session` | `GET patrol/sessions` | no ca → loc GPS-only | **cấm** bịa Route |
| `api-attach` | `POST incident/incidents` | — | 4xx toast · **cấm** silent ok |
| `domain-map` | AiVision · Incident · Patrol | — | **GAP** slug · **cấm ERP.*** |
| `geo` | `navigator.geolocation` | deny → block detect/attach | **cấm** fake lat/lng |
| `offline` | peer `web-rmms-offline` | queue local | **cấm** invent OfflineQueueController |
| `catalog` | useFormOptions (titles · actions · toasts) | — | **cấm** hardcode VN form |
| `demo` | — | N/A | **cấm** demo SSOT ship |

## §B — Bind field (HARD)

### VIS

| uiField | Label (key) | controlHint | catalogKind | GET | write field | sameMfe | sameMobile |
|---------|-------------|-------------|-------------|-----|-------------|---------|------------|
| photos | ảnh hiện trường | PhotoRow | files/ai-vision | uploads init/PUT/complete | media / ImageUrl / ImageBase64 | peer photo-geo | n/a |
| rowLoc | vị trí đã chốt | ListRow RO | — | GPS + optional sessions | RouteName · KmStart display | SCREENS | n/a |
| rowAcc | sai số định vị | ListRow RO | geo | device AccuracyM | Detect `AccuracyM` | SCREENS | n/a |
| detect | nhận diện | Button/auto | — | — | POST detect Lat/Lng/AccuracyM | Live | n/a |
| rowClass | phân loại | ListRow RO | — | detect DTO | DefectClass display | Live | **cấm** fake |
| rowSev | mức | ListRow+Badge | — | detect DTO | Severity display | Live | n/a |
| btnAttach | gắn sự cố | Button primary | — | — | POST incidents + DetectionId · HasGps | Live | n/a |
| btnSkip | bỏ qua | Button secondary | — | — | local dismiss | dual GAP | n/a |
| lat/lng | GPS | GPS | geo | device | detect Lat/Lng · HasGps attach | SCREENS | n/a |

**Attach body (cite Live / SCREENS):** `DetectionId` · `HasGps=true` · Title/Type từ `DefectClass` · tuyến từ `RouteLabel`/session · `RequestedAt` · `Status=new` · **không** invent Lat trên Create nếu Live không có (GAP-PGC-BE-01).

**Cấm** ERP.* · **cấm** fake GPS · **cấm** itemsOrDemo · **cấm** invent slug DTO/path · **cấm** hardcode VN labels · **cấm** on-device detect.

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| LOOKUP_STATIC | FE `useFormOptions` (title · section · actions · toasts) | CTX + SCREENS + peer | hardcode label VN |
| defect class | server detect DTO | AiVision Live | invent class list ngoài detect |
| severity display | detect Severity | peer badge map | invent severity API |
| sessions | `GET patrol/sessions` | Patrol | invent session stub |
| files/uploads | ai-vision uploads* | AiVision via Mobile.Bff | persist full URL only as needed |

## §D — Map / vẽ

| Mục | Ghi |
|-----|-----|
| map | **none** embed trên VIS · loc = GPS label + Route/Km |
| GPS | detect/attach point · deny block · accuracy ≤ 30 m detect |

## §E — Progress / vòng đời

| stateField | Nguồn | Ai đổi | API | UI |
|------------|-------|--------|-----|-----|
| GPS fix | device | OS | — | rowLoc · rowAcc · gate |
| Detection | AiVision Live | after photo+GPS | POST detect | rowClass · rowSev |
| Incident attach | Incident Live | Attach | POST incidents | toast · back list |
| Skip | local | Skip | — | clear · nav list |
| Offline | local queue | network fail | peer offline | toast · **cấm** fake SC |

`progress: photo+GPS → detect → attach|skip` · peer incident list ngoài core DoD attach.

## §F — Handoff

| Role | Packet |
|------|--------|
| PO | DoD VIS · GPS · live detect/attach · no Me · BFF mobile only · title key |
| Design | control-map §B · phone 430 · Android 1-1 · dual Skip · reviewUrl |
| SA | Cite Live AiVision(+Incident/Patrol) · DOMAIN-MAP row · Mobile.Bff · **cấm** invent path · **cấm** ERP.* |
| Dev web mobile | `Linm.Web.RMMS.Mobile` · `VITE_MOBILE_API_URL` `:5202` · GPS gate |
| QA | GPS deny · accuracy>30 · skip · attach · no fake · no web-bff · no Me |

## Gaps (cite)

| id | Note |
|----|------|
| GAP-DA-VIS-CTX-01 | CTX `web-rmms-vis-capture.md` thiếu lúc start → **created** từ SCREENS + peer |
| GAP-DOMAIN-MAP-VIS | slug `web-rmms-vis-capture` chưa có row DOMAIN-MAP |
| GAP-MOB-VIS-DUAL-01 | Android thiếu section «Ảnh hiện trường» + CTA «Bỏ qua» |
| GAP-TITLE-01 | Packet «Nhận diện sự cố» vs peer «Nhận diện mặt đường» — PO chốt copy |
| GAP-PACK-01 | packKind STATUS=`list` · surface full screen (peer native `screen`) |
| GAP-PGC-BE-01 | CreateIncidentRequest HasGps · không Lat column |
| GAP-DETECT-HOST | P1 detect host / hard-default — SA cite · **cấm** on-device |
