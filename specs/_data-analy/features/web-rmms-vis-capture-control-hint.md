# Data-analy — controlHint — web-rmms-vis-capture

| Field | Value |
|-------|-------|
| feature | `web-rmms-vis-capture` |
| title | Nhận diện sự cố |
| packKind | `list` |
| changeScope | `edit_page` |
| mode | `feature_context` |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:f749bc65f84b7bde51beeebaa85e5db22dacc8e8a040a53de30af834fa55c8cd` |
| analyzedAt | `2026-09-27T11:10:00.000Z` |
| demo | **N/A** |
| realData | `specs/_data-analy/features/web-rmms-vis-capture-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **AiVision** + Incident · Patrol cite · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/chup-hien-truong` |
| mfeStdRoute | `/chup-hien-truong` |
| productRoute | `/incident/vis` |
| taskId | `task_0527afc8` |
| priorTask | `task_9af023ae` (new_page · closed) |
| phoneFrame | `max-width: 430px` |
| formPattern | Mobile full · Android 1-1 `#sc-vis-capture` · **không** ERP Modal/Slideout Kind B desktop |
| bff | `Linm.RMMS.Mobile.Bff` · `VITE_MOBILE_API_URL=http://localhost:5202/mobile-bff/api/v1` · **cấm** web-bff |
| priorPeer | `vis-capture` · `web-rmms-incident` · photo-geo · offline · ai-vision |
| editCite | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` · Pattern B · slug row VisCapturePage |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map + prototype reviewUrl (giữ artifact sẵn). SA **cite** Live paths · **cấm** invent `web-rmms-vis-capture` controller.  
> Nhãn UI: `useFormOptions()` / copy key — **cấm** hardcode tiếng Việt trên form.  
> **Cấm** tab Cá nhân · **cấm** iOS/Android edit · **cấm** fake GPS · **cấm** journal/kết ca/tồn tại/tần suất (B–E).  
> **Cấm** typed CRUD `new_page` · **cấm** toolbar/export Excel (SUBMIT-VALIDATE override).

## § Delta Current vs New (edit_page HARD)

| | Current (shipped MFE) | New (this task) |
|--|----------------------|-----------------|
| changeScope | `new_page` (task_9af023ae pipeline PASS) | `edit_page` · NEW AutocodeTask `task_0527afc8` |
| mfeStdRoute | legacy notes `/web-rmms-vis-capture` | **SSOT** `/chup-hien-truong` · alias `/incident/vis` → redirect · **cấm** path slug |
| Detect CTA | `disabled={!canDetect}` (GPS/photo/online/authed gates) | Pattern B: nút **luôn bật** khi idle · chỉ `disabled={detecting}` · thiếu GPS/ảnh → bấm mới banner |
| Attach CTA | `disabled={!detection \|\| attaching \|\| gpsBlocked \|\| !online}` | Chỉ khóa lúc `attaching` · thiếu detection/GPS/offline → bấm mới báo (banner) · **cấm** khóa trước |
| Skip CTA | `disabled={attaching}` | Giữ — pending request only |
| Validate UX | toast / offline banner; thiếu `validationAttempted` Pattern B | Lần bấm đầu set `validationAttempted` · banner `string[]` + inline · **cấm** một `alert.warning` · API 4xx → toast |
| GPS gate | Khóa Detect/Attach trước khi đủ fix | Deny / >30 m: **không** khóa nút · bấm mới báo · vẫn **không** POST detect khi Acc>30 |
| Photo input | peer `openCapture('vision')` / PhotoRow | Giữ camera · nếu có `<input type="file">` local → `capture="environment"` |
| Search user/tuyến | N/A trên VIS (loc RO từ session) | VIS **không** gắn SearchInput users/routes · RO session stamp · mã thiếu catalog → `--` (peer shared lookups ngoài màn) |
| BFF | Mobile.Bff live detect/attach | Giữ `mobileApiBase()` · road-routes/search đã có · users thiếu → forward `GET integration/users` trên Mobile.Bff (peer forms; VIS không picker) |
| Align cuối | — | `/align-mobile-to-mfe` · SSOT = `VisCapturePage` · 430px · **cấm** tab/route mới · **cấm** icon path mới · **cấm** mở prototype android/ios |
| PO/Design/SA artifacts | requirement · design · prototype · solution PASS | **Giữ** · PO/Design ghi delta validate · **không** typed new_page |

## Sources

| Source | Path | note |
|--------|------|------|
| CTX | `docs/context/features/web-rmms-vis-capture.md` | edit_page · hash gate |
| Submit-validate | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` | Pattern B · VisCapturePage row |
| Screens | `docs/plan/web-rmms-mobile/SCREENS.md` | `/incident/vis` Nhận diện |
| Code | `VisCapturePage.tsx` · `paths.ts` `VIS_CAPTURE_BASE` | Current disabled gates · std route |
| Peer | web-rmms-incident · photo-geo · offline | banner entry · capture · queue |
| DOMAIN-MAP | AiVision (+ Incident/Patrol cite) | row closed prior SA |
| Prototype | prior `ui/prototype/index.html` · **không** mở android/ios ship | Design giữ · align = MFE page |

## Screens (ids)

| id | route | surface |
|----|-------|---------|
| VIS | `/incident/vis` · std `/chup-hien-truong` | PhotoRow · GPS rows · detect result · Attach/Skip |
| INC-L* | `/incident` | peer entry banner · back |
| CAP* | `/capture` | peer `openCapture('vision')` |

**Out:** Me* · feedback · cam-view · cam-patrol finder · det-hitl · journal/kết ca/tồn tại/tần suất (B–E) · invent VisCapture*Controller · web-bff client · on-device detect · Excel export · new tab/route.

## ControlHint inventory

### VIS — Capture / Detect / Attach

| uiField | screen | controlHint | catalogKind / notes |
|---------|--------|-------------|---------------------|
| navBack | VIS | BackButton | copy key «Vấn đề» · nav peer incident list |
| screenTitle | VIS | Text | copy key «Nhận diện sự cố» · useFormOptions |
| sectionPhoto | VIS | SectionLabel | copy key «Ảnh hiện trường» |
| photos | VIS | PhotoRow | camera · `openCapture('vision')` · uploads init/PUT/complete · `capture="environment"` nếu file input |
| rowLoc | VIS | ListRow RO | GPS + optional `GET patrol/sessions` → Route/Km · thiếu catalog → `--` |
| rowAcc | VIS | ListRow RO | device `AccuracyM` display |
| detect | VIS | Button | Pattern B · idle always-on · `disabled` chỉ `detecting` · POST detect khi GPS+Acc≤30 |
| rowClass | VIS | ListRow RO | `DefectClass` từ detect |
| rowSev | VIS | ListRow + Badge | `Severity` từ detect |
| btnAttach | VIS | Button primary | Pattern B · `disabled` chỉ `attaching` · POST incidents + DetectionId |
| btnSkip | VIS | Button secondary | dismiss · `disabled` chỉ `attaching` |
| gpsLock | VIS | GPS | deny / poor → banner on click · **cấm** fake · **cấm** disable Detect/Attach trước |
| validationBanner | VIS | Banner `string[]` | Pattern B client errors · thu gọn/đóng |
| toast.ok | VIS | Toast | attach ok copy key |
| toast.gpsBlock | VIS | Toast/banner | thiếu GPS / > 30 m — on click |
| toast.fail | VIS | Toast | API/load error · **cấm** `window.alert` |
| offlineQueue | VIS | — | peer `web-rmms-offline` · **cấm** fake SC |

## Filter / grid (desktop HARD)

| | |
|--|--|
| LinErpListFilterBar / DES-GRID-* | **N/A** — phone full screen · **không** Kind B desktop grid primary |
| toolbar / export Excel | **N/A** — SUBMIT-VALIDATE override · **cấm** |

## GPS

| Màn | Rule |
|-----|------|
| VIS | Deny → **không** khóa nút · bấm Detect/Attach mới banner · **cấm** fake |
| Detect | accuracy > 30 m → không POST detect (gate trong handler) |
| Attach | `HasGps=true` khi có fix · Title/Type từ DefectClass · tuyến từ session |

## API (cite Live — SA confirm DTO)

| Method | Path | Note |
|--------|------|------|
| POST | `ai-vision/uploads/init` · PUT `{id}/object` · complete | media |
| POST | `ai-vision/detect` | Lat/Lng/AccuracyM · handler gate Acc≤30 |
| GET | `ai-vision/detections/{id}` | optional |
| GET | `patrol/sessions` | optional stamp |
| POST | `incident/incidents` | attach + DetectionId |
| GET | `integration/users` | BFF forward peer · **không** picker trên VIS |
| GET | `integration/road-routes/search` | đã có · shared lookups · VIS RO |

App base: `{BffBase}/mobile-bff/api/v1`. **Cấm** invent path theo slug `web-rmms-vis-capture`.

## UNCLEAR

| id | Issue | Action |
|----|-------|--------|
| UNCLEAR-VALIDATE-B | Detect/Attach vẫn `disabled` theo canDetect/gpsBlocked | Dev Pattern B per SUBMIT-VALIDATE · QA re-e2e |
| UNCLEAR-ALIGN-01 | End pipeline align-mobile-to-mfe vs giữ prototype reviewUrl | TL/Dev: SSOT = MFE page · **không** mở android/ios |
| — | Prior DOMAIN-MAP / DUAL / TITLE / PACK / DETECT-HOST / PGC-BE | **Closed** prior pipeline — không reopen trừ lệch code |

## Handoff

| Role | Dùng |
|------|------|
| PO | Delta validate Pattern B · giữ DoD VIS · GPS on-click · no Me · useFormOptions · **cấm** new_page |
| Design | Giữ prototype/reviewUrl · delta note Pattern B banner zones · phone 430 · **không** vẽ icon mới |
| SA | Cite Live · Mobile.Bff users forward nếu thiếu · **cấm** ERP.* · **cấm** invent path |
| TL/Dev | Edit `VisCapturePage.tsx` only gates · mfeStd `/chup-hien-truong` · align cuối |
| QA | Pattern B: nút idle on · click thiếu GPS/ảnh → banner · Acc>30 no POST · attach pending-only disable |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:f749bc65f84b7bde51beeebaa85e5db22dacc8e8a040a53de30af834fa55c8cd` · `rulesVersion=2026.09.25.2` · `analyzedAt=2026-09-27T11:10:00.000Z` · `changeScope=edit_page` · `taskId=task_0527afc8`
