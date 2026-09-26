# Data-analy — controlHint — web-rmms-cam-patrol

| Field | Value |
|-------|-------|
| feature | `web-rmms-cam-patrol` |
| title | Camera tuần |
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
| contentHash | `sha256:cd46c9486c0a3fe71165c27906508a1608ba46cca1351fe9df832ab7b2efa68c` |
| analyzedAt | `2026-09-25T18:05:00.000Z` |
| demo | **N/A** |
| realData | `specs/_data-analy/features/web-rmms-cam-patrol-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · Patrol + AiVision + Incident · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/web-rmms-cam-patrol` |
| mfeStdRoute | `/web-rmms-cam-patrol` |
| productRoute | `/field/cam` |
| taskId | `task_c661fa52` |
| phoneFrame | `max-width: 430px` |
| formPattern | Mobile full · copy 1-1 Android · **không** ERP Modal/Slideout Kind B desktop |
| bff | `Linm.RMMS.Mobile.Bff` · `VITE_MOBILE_API_URL=http://localhost:5202/mobile-bff/api/v1` · **cấm** web-bff |
| priorPeer | `cam-patrol.md` · DES-MOB-CAM-PATROL / FINDER · waves A–E out |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map + prototype reviewUrl. SA **cite** Live detect/incident paths · **cấm** invent `cam-patrol` controller.  
> Nhãn UI: `useFormOptions()` / copy key — **cấm** hardcode tiếng Việt trên form.  
> **Cấm** tab Cá nhân · **cấm** iOS/Android · **cấm** tọa độ mẫu · **cấm** score % ship.

## Sources

| Source | Path | note |
|--------|------|------|
| CTX | `docs/context/features/web-rmms-cam-patrol.md` | **created this run** · hash gate |
| Screens | `docs/plan/web-rmms-mobile/SCREENS.md` | `/field/cam` Camera tuần |
| Plan/task | `PLAN.md` · `TASKS.md` T-W3-09 | `CamPatrolView` |
| Peer CTX | `docs/context/features/cam-patrol.md` | DES · gaps FRAME/SCORE |
| DOMAIN-MAP | Patrol · AiVision · Incident | cite · **cấm ERP.*** |
| Prototype | `specs/mobile-p1/ui/prototype/android/index.html` `#sc-cam-patrol` | Design 1-1 only |

## Screens (ids)

| id | route | surface |
|----|-------|---------|
| CP-01 | `/field/cam` · std `/web-rmms-cam-patrol` | Finder + stamp + detect card + Confirm/Skip |

**Out:** `/me*` · feedback · `cam-view` · `field-reflect` · journal/kết ca/tần suất (B–E) · asset AI.

## ControlHint inventory

| uiField | screen | controlHint | catalogKind / notes |
|---------|--------|-------------|---------------------|
| screenTitle | CP-01 | Text | copy key «Camera tuần» · useFormOptions |
| back | CP-01 | Button/Nav | → Field hub (Tuần đường / Tuần kiểm entry) |
| finder | CP-01 | CameraViewfinder | live stream · FOV box DES-MOB-CAM-FINDER |
| stamp.route | CP-01 | Text RO | từ `GET patrol/sessions` ca Đang tuần |
| stamp.km | CP-01 | Text RO | km / lý trình từ ca · không bịa |
| stamp.gps | CP-01 | GPS read | lat,lng · ±accuracyM · chip «đã chốt» khi fix OK |
| getGps / lockGps | CP-01 | Button | `navigator.geolocation` · deny → disable detect/confirm |
| detect | CP-01 | Button primary | `POST ai-vision/detect` · **cần** ImageBase64 + GPS + accuracy ≤ 30 m |
| detection.kind | CP-01 | Text/Chip | kết quả class · **không** hiện % score ship |
| detection.surface | CP-01 | Text | loại mặt / hạng mục từ DTO |
| detection.actionHint | CP-01 | Text | copy key hành động sau xác nhận |
| confirm | CP-01 | Button | `POST incident/incidents` · `DetectionId` · `HasGps=true` · cần GPS |
| skip | CP-01 | Button secondary | dismiss card · toast skip · **không** POST incident |
| offlineBanner | CP-01 | Banner | mất sóng → queue peer offline · **cấm** fake success |
| emptyNoSession | CP-01 | EmptyState | không ca Đang tuần → toast · chặn detect · **cấm** bịa ca |
| toast.ok | CP-01 | Toast | copy key tạo sự cố ok |
| toast.fail | CP-01 | Toast | detect/frame fail · **cấm** class giả |
| toast.gpsDeny | CP-01 | Toast | GPS deny / accuracy > 30 m |

## Filter / grid (desktop HARD)

| | |
|--|--|
| LinErpListFilterBar / DES-GRID-* | **N/A** — phone Field · **không** Kind B desktop grid |
| CP-01 | Full-bleed finder · **cấm** clone ERP filter bar |

## GPS

| Màn | Rule |
|-----|------|
| CP-01 | **HARD** deny **hoặc** accuracy > 30 m → chặn Nhận diện + Xác nhận · hiện accuracy · **cấm** fake |

## API (cite Live — SA confirm DTO)

| Method | Path | Note |
|--------|------|------|
| GET | `patrol/sessions` | ca Đang tuần · stamp Route/Km |
| POST | `ai-vision/detect` | `Engine=P1` · ImageBase64 + Lat/Lng/AccuracyM |
| GET | `ai-vision/detections/{id}` | optional after detect |
| POST | `incident/incidents` | confirm · DetectionId · HasGps=true |

App base: `{BffBase}/mobile-bff/api/v1`. **Cấm** invent `cam-patrol/*`.

## UNCLEAR

| id | Issue | Action |
|----|-------|--------|
| UNCLEAR-CAM-FRAME | GAP-MOB-CAM-FRAME-01 OPEN — frame thật vs null heuristic | Dev DoD frame capture · fail toast · **cấm** fake class |
| UNCLEAR-CAM-SCORE | GAP-MOB-CAM-SCORE-01 — demo 91% | Design **ẩn** % trên ship |
| UNCLEAR-CAM-ENTRY | Entry exact từ hub TD vs TK | Design: 1 route CP-01 · stamp `PatrolType` từ ca |
| UNCLEAR-CAM-DETECT-DTO | Field names ImageBase64/Lat/Lng Live | SA cite AiVisionOpsController · **không** invent |

## Handoff

| Role | Dùng |
|------|------|
| PO | CP-01 DoD · GPS≤30 · frame · no Me tab · useFormOptions |
| Design | Phone 430 · Android 1-1 · zones CP-01 · prototype + reviewUrl · ẩn score |
| SA | Cite Live detect/incident/sessions · Mobile.Bff proxy · **cấm** ERP.* · **cấm** cam-patrol path |
| TL/Dev | Wire Mobile MFE only · BFF `:5202` · GPS gate |
| QA | no session · GPS deny · accuracy>30 · detect fail toast · no fake coords · no Me routes |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:cd46c9486c0a3fe71165c27906508a1608ba46cca1351fe9df832ab7b2efa68c` · `rulesVersion=2026.09.25.2` · `analyzedAt=2026-09-25T18:05:00.000Z`
