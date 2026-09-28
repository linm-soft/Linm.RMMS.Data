# Data-analy — real-data bind — web-rmms-vis-capture

| Field | Value |
|-------|-------|
| feature | `web-rmms-vis-capture` |
| title | Nhận diện sự cố |
| packKind | `list` |
| changeScope | `edit_page` |
| status | `done` |
| taskId | `task_0527afc8` |
| priorTask | `task_9af023ae` |
| prefix API | `api/v1` · resources `ai-vision` · `incident` · `patrol` · `integration` (cite) |
| prefix BFF web (cite) | `web-bff/api/v1/{resource}` · **không** base client |
| prefix BFF mobile (HARD) | `mobile-bff/api/v1` · `:5202` · cùng `{resource}` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| bffRepo | `Linm.RMMS.Mobile.Bff` · **cấm** Route mobile-bff trên web-bff controllers |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/chup-hien-truong` |
| mfeStdRoute | `/chup-hien-truong` |
| productRoute | `/incident/vis` |
| domain | **AiVision** + **Incident** (+ Patrol cite) |
| contentHash | `sha256:f749bc65f84b7bde51beeebaa85e5db22dacc8e8a040a53de30af834fa55c8cd` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| analyzedAt | `2026-09-27T11:10:00.000Z` |
| demo | **N/A** · **cấm** demo-json / in-app mock SSOT / fake GPS |
| editCite | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` |

## § Delta Current vs New (edit_page HARD)

| Area | Current | New |
|------|---------|-----|
| Scope type | new_page ship VIS live | edit_page · Pattern B validate trên page đã có |
| Detect bind | UI gate `canDetect` trước POST | POST vẫn cần Lat/Lng/Acc≤30 trong handler · UI **không** disable trước |
| Attach bind | UI gate detection+GPS+online | Body Live giữ nguyên · UI chỉ `attaching` disable |
| Client errors | toast/offline banner | Pattern B banner `string[]` + inline + `validationAttempted` |
| Route SSOT | notes mixed `/web-rmms-vis-capture` | `/chup-hien-truong` only (paths.ts) |
| Users/routes API | N/A picker on VIS | BFF: forward users nếu thiếu (peer) · road-routes/search đã có · VIS loc RO |
| Align | — | MFE page SSOT · no android/ios prototype open · no new route |

## § Scope

| In | Out |
|----|-----|
| Edit VIS Pattern B · live detect/attach | Me tab · cam-view · feedback · cam-patrol finder · det-hitl |
| Live uploads/detect/detections · sessions · POST incidents | invent controller/path `web-rmms-vis-capture/*` |
| GPS HARD (handler) · offline peer | journal / kết ca / tồn tại / tần suất (B–E) |
| Mobile.Bff proxy only · users forward cite | web-bff client · ERP.* · iOS/Android edit · on-device · Excel · new_page |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/web-rmms-vis-capture.md` | — | edit_page |
| `plan` | `SUBMIT-VALIDATE.md` · SCREENS `/incident/vis` | — | Pattern B SSOT |
| `code` | `VisCapturePage.tsx` · `paths.ts` | — | Current gates |
| `api-upload` | `POST ai-vision/uploads/init` + PUT + complete | empty photo → banner on Detect click | toast API |
| `api-detect` | `POST ai-vision/detect` | no class → empty rows | fail toast · **cấm** fake class |
| `api-detection` | `GET ai-vision/detections/{id}` | optional | toast |
| `api-session` | `GET patrol/sessions` | no ca → loc GPS-only | **cấm** bịa Route |
| `api-attach` | `POST incident/incidents` | — | 4xx toast · **cấm** silent ok |
| `api-users` | `GET integration/users` | peer BFF forward | VIS không bind picker |
| `api-routes` | `GET integration/road-routes/search` | already BFF | VIS RO · shared no seed |
| `domain-map` | AiVision · Incident · Patrol | — | prior row · **cấm ERP.*** |
| `geo` | `navigator.geolocation` | deny → banner on click | **cấm** fake lat/lng |
| `offline` | peer `web-rmms-offline` | queue local | **cấm** invent OfflineQueueController |
| `catalog` | useFormOptions (titles · actions · toasts · validate msgs) | — | **cấm** hardcode VN form |
| `demo` | — | N/A | **cấm** demo SSOT ship |

## §B — Bind field (HARD)

### VIS

| uiField | Label (key) | controlHint | catalogKind | GET | write field | sameMfe | sameMobile |
|---------|-------------|-------------|-------------|-----|-------------|---------|------------|
| photos | ảnh hiện trường | PhotoRow | files/ai-vision | uploads init/PUT/complete | media / ImageUrl / ImageBase64 | peer photo-geo | n/a |
| rowLoc | vị trí đã chốt | ListRow RO | — | GPS + optional sessions | RouteName · KmStart display | SCREENS | n/a |
| rowAcc | sai số định vị | ListRow RO | geo | device AccuracyM | Detect `AccuracyM` | SCREENS | n/a |
| detect | nhận diện | Button | — | — | POST detect Lat/Lng/AccuracyM · UI Pattern B | Live | n/a |
| rowClass | phân loại | ListRow RO | — | detect DTO | DefectClass display | Live | **cấm** fake |
| rowSev | mức | ListRow+Badge | — | detect DTO | Severity display | Live | n/a |
| btnAttach | gắn sự cố | Button primary | — | — | POST incidents + DetectionId · HasGps · UI Pattern B | Live | n/a |
| btnSkip | bỏ qua | Button secondary | — | — | local dismiss | dual closed | n/a |
| lat/lng | GPS | GPS | geo | device | detect Lat/Lng · HasGps attach | SCREENS | n/a |
| validationBanner | lỗi client | Banner | — | — | Pattern B string[] | SUBMIT-VALIDATE | n/a |

**Attach body (cite Live / SCREENS):** `DetectionId` · `HasGps=true` · Title/Type từ `DefectClass` · tuyến từ `RouteLabel`/session · `RequestedAt` · `Status=new` · **không** invent Lat trên Create nếu Live không có (PGC-BE-01 closed).

**Cấm** ERP.* · **cấm** fake GPS · **cấm** itemsOrDemo · **cấm** invent slug DTO/path · **cấm** hardcode VN labels · **cấm** on-device detect · **cấm** disable Detect/Attach vì thiếu required trước click.

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| LOOKUP_STATIC | FE `useFormOptions` (title · section · actions · toasts · validate) | CTX + SCREENS + peer | hardcode label VN |
| defect class | server detect DTO | AiVision Live | invent class list ngoài detect |
| severity display | detect Severity | peer badge map | invent severity API |
| sessions | `GET patrol/sessions` | Patrol | invent session stub |
| files/uploads | ai-vision uploads* | AiVision via Mobile.Bff | persist full URL only as needed |
| users (peer) | `GET integration/users` | Mobile.Bff forward | VIS không SearchInput |
| road-routes (peer) | `GET integration/road-routes/search` | no seed | VIS RO only |

## §D — Map / vẽ

| Mục | Ghi |
|-----|-----|
| map | **none** embed trên VIS · loc = GPS label + Route/Km |
| GPS | detect/attach point · deny → on-click banner · Acc≤30 detect handler |

## §E — Progress / vòng đời

| stateField | Nguồn | Ai đổi | API | UI |
|------------|-------|--------|-----|-----|
| GPS fix | device | OS | — | rowLoc · rowAcc · on-click gate |
| validationAttempted | local | first Detect/Attach click | — | banner + inline |
| Detection | AiVision Live | after photo+GPS | POST detect | rowClass · rowSev |
| Incident attach | Incident Live | Attach | POST incidents | toast · back list |
| Skip | local | Skip | — | clear · nav list |
| Offline | local queue | network fail | peer offline | toast · **cấm** fake SC |

`progress: photo+GPS → detect → attach|skip` · Pattern B overlay trên CTA.

## §F — Handoff

| Role | Packet |
|------|--------|
| PO | Delta Pattern B · DoD VIS · no Me · BFF mobile · **cấm** new_page |
| Design | Giữ control-map · delta banner zones · phone 430 · reviewUrl giữ |
| SA | Cite Live · users forward Mobile.Bff nếu thiếu · **cấm** invent path · **cấm** ERP.* |
| Dev | `VisCapturePage.tsx` disable gates · `mobileApiBase()` · align cuối |
| QA | Pattern B idle CTA · click GPS/ảnh missing · Acc>30 no POST · attach pending-only |

## Gaps (cite)

| id | Note |
|----|------|
| GAP-VALIDATE-B-01 | `disabled={!canDetect}` + Attach multi-gate — Dev bỏ per SUBMIT-VALIDATE |
| GAP-ALIGN-01 | End `/align-mobile-to-mfe` · SSOT MFE page · cấm android/ios open |
| GAP-BFF-USERS | Mobile.Bff thiếu `integration/users` forward — peer; VIS không picker |
| — | Prior CTX/DOMAIN-MAP/DUAL/TITLE/PACK/DETECT-HOST/PGC-BE | **Closed** prior — không reopen |
