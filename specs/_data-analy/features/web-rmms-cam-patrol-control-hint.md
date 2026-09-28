# Data-analy — controlHint — web-rmms-cam-patrol

| Field | Value |
|-------|-------|
| feature | `web-rmms-cam-patrol` |
| title | Camera tuần |
| packKind | `list` |
| changeScope | `edit_page` |
| mode | `feature_context` |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.27.1` |
| versionGate | `ok` |
| contentHash | `sha256:c46ae5660ccba1b8e64ce8e5294acef77ceb4e0a75474372f2a3d3901efb5796` |
| analyzedAt | `2026-09-27T10:35:00.000Z` |
| demo | **N/A** |
| realData | `specs/_data-analy/features/web-rmms-cam-patrol-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · Patrol + AiVision + Incident · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/camera-tuan` |
| mfeStdRoute | `/camera-tuan` |
| productRoute | `/field/cam` |
| taskId | `task_9bdd3978` |
| phoneFrame | `max-width: 430px` |
| formPattern | Mobile full · copy 1-1 Android · **không** ERP Modal/Slideout Kind B desktop |
| bff | `Linm.RMMS.Mobile.Bff` · `VITE_MOBILE_API_URL=http://localhost:5202/mobile-bff/api/v1` · **cấm** web-bff |
| deltaCite | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` |
| priorArtifacts | keep PO/Design/SA · prior task_c661fa52 new_page DONE |

> Data-analy **đề xuất** controlHint (edit). Design **giữ** zones/prototype đã approve. SA **cite** Live paths.  
> Pattern B: nút detect/confirm **không** `disabled` vì thiếu GPS/frame — chỉ khóa lúc request chạy.  
> Nhãn: `useFormOptions()` / copy key — **cấm** hardcode VN. **Cấm** toolbar/export Excel.

## § Delta Current vs New

| Area | Current (`CamPatrolPage.tsx`) | New |
|------|------------------------------|-----|
| changeScope | shipped `new_page` | `edit_page` · **cấm** typed CRUD new_page |
| `#btnDetect` | `disabled={!canDetect}` | chỉ `disabled={detecting}` · thiếu session/GPS/frame/online → banner on click |
| `#btnConfirm` | `disabled={confirming \|\| gpsBlocked \|\| !online}` | chỉ `disabled={confirming}` · fail → banner |
| `#btnSkip` | `disabled={confirming}` | giữ |
| capture | `capture="environment"` | giữ |
| score % | ẩn ship | giữ |
| route stamp | RO ca | giữ RO · không SearchInput · mã lạ → `--` |
| mfeStdUrl | `/camera-tuan` (paths.ts) | giữ · **không** `/web-rmms-cam-patrol` |
| align | — | `/align-mobile-to-mfe` · 430px · no tab/route/icon |

## Sources

| Source | Path | note |
|--------|------|------|
| CTX | `docs/context/features/web-rmms-cam-patrol.md` | edit_page · § Delta · hash gate |
| SUBMIT-VALIDATE | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` | Pattern B · cam-patrol row |
| Screens | `docs/plan/web-rmms-mobile/SCREENS.md` | `/field/cam` |
| Code | `Linm.Web.RMMS.Mobile/src/pages/WebRmmsCamPatrol/CamPatrolPage.tsx` | current SSOT |
| DOMAIN-MAP | Patrol · AiVision · Incident | **cấm ERP.*** |
| Design keep | `specs/web-rmms-cam-patrol/ui/` | reviewUrl đã approve |

## Screens (ids)

| id | route | surface |
|----|-------|---------|
| CP-01 | `/field/cam` · std `/camera-tuan` | Finder + stamp + detect card + Confirm/Skip |

**Out:** `/me*` · feedback · `cam-view` · journal/kết ca/tần suất (B–E) · invent `cam-patrol` path · Excel export.

## ControlHint inventory

| uiField | screen | controlHint | catalogKind / notes |
|---------|--------|-------------|---------------------|
| screenTitle | CP-01 | Text | copy key «Camera tuần» · useFormOptions |
| back | CP-01 | Button/Nav | → Field hub |
| finder | CP-01 | CameraViewfinder | live · FOV DES-MOB-CAM-FINDER |
| stamp.route | CP-01 | Text RO | `GET patrol/sessions` Đang tuần |
| stamp.km | CP-01 | Text RO | km từ ca · không bịa |
| stamp.gps | CP-01 | GPS read | lat,lng · ±accuracyM |
| getGps / lockGps | CP-01 | Button | geolocation · deny → banner **khi bấm** detect/confirm |
| frame.capture | CP-01 | File/Camera | `capture="environment"` · ImageBase64 |
| detect | CP-01 | Button primary | POST detect · Pattern B · chỉ disabled khi `detecting` |
| detection.kind | CP-01 | Text/Chip | **không** % score |
| detection.actionHint | CP-01 | Text | copy key |
| confirm | CP-01 | Button | POST incident · chỉ disabled khi `confirming` |
| skip | CP-01 | Button secondary | dismiss · disabled khi `confirming` |
| validationBanner | CP-01 | Banner `string[]` | Pattern B client errors · **cấm** alert.warning thay banner |
| offlineBanner | CP-01 | Banner | mất sóng · **cấm** fake success |
| emptyNoSession | CP-01 | EmptyState / banner on click | không ca → báo khi bấm · **cấm** bịa ca |
| toast.ok / fail / api | CP-01 | Toast | API 4xx/5xx = toast · **cấm** banner API |

## Filter / grid (desktop HARD)

| | |
|--|--|
| LinErpListFilterBar / DES-GRID-* | **N/A** — phone Field |
| toolbar / export Excel | **N/A** — SUBMIT-VALIDATE override |

## GPS

| Màn | Rule |
|-----|------|
| CP-01 | Acc ≤ 30 m required for success path · deny/poor → **không** khóa nút trước · báo khi bấm · **cấm** fake |

## API (cite Live — SA confirm DTO)

| Method | Path | Note |
|--------|------|------|
| GET | `patrol/sessions` | ca Đang tuần · stamp |
| POST | `ai-vision/detect` | Engine=P1 · ImageBase64 + Lat/Lng/AccuracyM |
| GET | `ai-vision/detections/{id}` | optional |
| POST | `incident/incidents` | DetectionId · HasGps=true |

App base: `{BffBase}/mobile-bff/api/v1`. **Cấm** invent `cam-patrol/*` · **cấm** web-bff client.

## UNCLEAR

| id | Issue | Action |
|----|-------|--------|
| UNCLEAR-CAM-FRAME | GAP-MOB-CAM-FRAME-01 | Dev giữ frame thật · fail toast · **cấm** fake class |
| UNCLEAR-CAM-DETECT-DTO | Field names Live | SA cite đã approve — giữ |
| — | Pattern B banner copy keys | PO/Design: dùng key có sẵn lookupStatic |

## Handoff

| Role | Dùng |
|------|------|
| PO | Delta Pattern B · keep prior DEC · no new_page |
| Design | keep zones/prototype · optional banner copy |
| SA | keep Live cite · Mobile.Bff |
| TL/Dev | Edit `CamPatrolPage` only · remove canDetect/gpsBlocked disabled · banner |
| QA | detect/confirm luôn bật · thiếu GPS/frame → banner · confirming/detecting lock |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:c46ae5660ccba1b8e64ce8e5294acef77ceb4e0a75474372f2a3d3901efb5796` · `rulesVersion=2026.09.27.1` · `analyzedAt=2026-09-27T10:35:00.000Z` · `changeScope=edit_page`
