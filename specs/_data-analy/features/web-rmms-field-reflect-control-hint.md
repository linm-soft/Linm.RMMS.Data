# Data-analy — controlHint — web-rmms-field-reflect

| Field | Value |
|-------|-------|
| feature | `web-rmms-field-reflect` |
| title | Phản ánh hiện trường |
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
| contentHash | `sha256:e678be9152069e48f353f88e9f4d377e20e4fd4ad5c8d4aa2c86bd995bc1e667` |
| analyzedAt | `2026-09-26T02:54:00.000Z` |
| demo | **N/A** |
| realData | `specs/_data-analy/features/web-rmms-field-reflect-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **Incident** + Patrol · Integration · AiVision · FileService cite · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/web-rmms-field-reflect` |
| mfeStdRoute | `/web-rmms-field-reflect` |
| productRoute | `/field/reflect` |
| taskId | `task_f225c747` |
| phoneFrame | `max-width: 430px` |
| formPattern | Mobile full · Android 1-1 · **không** ERP Modal/Slideout Kind B desktop |
| bff | `Linm.RMMS.Mobile.Bff` · `VITE_MOBILE_API_URL=http://localhost:5202/mobile-bff/api/v1` · **cấm** web-bff |
| priorPeer | `field-reflect.md` · DES-MOB-FIELD-REFLECT / KIND · photo-geo · incident-create |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map + prototype reviewUrl. SA **cite** Live paths · **cấm** invent `field-reflect` controller.  
> Nhãn UI: `useFormOptions()` / copy key — **cấm** hardcode tiếng Việt trên form.  
> **Cấm** tab Cá nhân · **cấm** iOS/Android · **cấm** fake GPS / bịa ca.

## Sources

| Source | Path | note |
|--------|------|------|
| CTX | `docs/context/features/web-rmms-field-reflect.md` | **created this run** · hash gate |
| Screens | `docs/plan/web-rmms-mobile/SCREENS.md` | `/field/reflect` + overlay photo-geo |
| Plan/task | `PLAN.md` · `TASKS.md` T-W3-10 | `FieldReflectView` |
| Peer CTX | `docs/context/features/field-reflect.md` | DES · GAP SESS/CHK/MEDIA |
| Peer | photo-geo-capture · incident-create · web-rmms-field | capture overlay · body map · hub tile |
| DOMAIN-MAP | Incident · Patrol · Integration · AiVision | **GAP** slug `web-rmms-field-reflect` |
| Prototype | `specs/mobile-p1/ui/prototype/android/index.html` `#sc-field-reflect` | Design 1-1 only · **không** demo SSOT ship |

## Screens (ids)

| id | route | surface |
|----|-------|---------|
| FR-00 | pick gate | Grid loại TS · optional trước form |
| FR-01 | `/field/reflect` · std `/web-rmms-field-reflect` | Form phản ánh · kind · checklist · photo · GPS · severity · desc · Create/Draft |
| FR-02 | capture overlay | Photo / photo-geo · GPS deny gate |

**Out:** Me* · feedback · cam-view · journal/kết ca/tồn tại/tần suất (B–E) · cam-patrol finder · invent field-reflect API.

## ControlHint inventory

| uiField | screen | controlHint | catalogKind / notes |
|---------|--------|-------------|---------------------|
| screenTitle | FR-01 | Text | copy key «Phản ánh hiện trường» / peer «Ghi nhận hư hỏng» · useFormOptions |
| back | FR-01 | Button/Nav | → pick FR-00 hoặc Field hub |
| assetPick | FR-00 | LookupGrid | `GET integration/asset-types` · AssetLabel/Title |
| assetCard | FR-01 | Text RO / Card | loại TS đã chọn |
| kind | FR-01 | Segment/Pill 3 | Hư · Mất · Hỏng → map `IncidentType` catalog · DES-MOB-FIELD-KIND |
| checklist | FR-01 | CheckboxGroup | local by asset · → `Description` · **cấm** invent API |
| photos | FR-01 | PhotoRow | openCapture · FR-02 · ai-vision/uploads hoặc files/* |
| detect | FR-01 | Button | `POST ai-vision/detect` · cần ảnh + GPS ≤30 m |
| detectionHint | FR-01 | Text RO | class từ detect · **không** bắt buộc |
| sessionStamp | FR-01 | Text RO | Route·Km từ `GET patrol/sessions` Đang tuần · empty toast |
| gpsLock | FR-01 | GPS / Button | `navigator.geolocation` · chip đã chốt · deny → disable Create/Detect |
| severity | FR-01 | Select | LOOKUP_STATIC severity keys |
| description | FR-01 | Textarea | copy placeholder key |
| create | FR-01 | Button primary | `POST incident/incidents` · HasGps khi có fix · **cần** GPS |
| draftOffline | FR-01 | Button secondary | queue peer `web-rmms-offline` · **cấm** fake success |
| emptyNoSession | FR-01 | EmptyState/Toast | không ca → chặn gắn Route · **cấm** bịa |
| toast.ok / fail / gpsDeny | FR-01 | Toast | copy keys · **cấm** `window.alert` |

## Filter / grid (desktop HARD)

| | |
|--|--|
| LinErpListFilterBar / DES-GRID-* | **N/A** — phone Field form · **không** Kind B desktop grid |
| FR-00 pick | mobile grid asset-types · **cấm** ERP list filter bar |

## GPS

| Màn | Rule |
|-----|------|
| FR-01 / FR-02 | **HARD** deny → chặn Create · Detect · capture geo · **cấm** fake |
| Detect | accuracy > 30 m → không POST detect (SCREENS / peer photo-geo) |

## API (cite Live — SA confirm DTO)

| Method | Path | Note |
|--------|------|------|
| GET | `patrol/sessions` | ca Đang tuần · Route/Km |
| GET | `integration/asset-types` | pick loại TS |
| POST | `ai-vision/uploads` (+ PUT) | ảnh optional |
| POST | `files/init` · PUT object · POST commit | photo-geo · purpose=`photo-geo-capture` |
| POST | `ai-vision/detect` | optional nhận diện |
| POST | `incident/incidents` | tạo vấn đề · map Ghi sự cố |

App base: `{BffBase}/mobile-bff/api/v1`. **Cấm** invent `field-reflect/*`.

## UNCLEAR

| id | Issue | Action |
|----|-------|--------|
| UNCLEAR-DOMAIN-MAP-REFLECT | DOMAIN-MAP chưa có row `web-rmms-field-reflect` | SA thêm · Incident (+ cite Patrol/Integration/AiVision) · MFE `/web-rmms-field-reflect` |
| UNCLEAR-SESS-01 | GAP-MOB-FIELD-SESS-01 live-only sessions | Dev DoD: **cấm** itemsOrDemo · empty+toast |
| UNCLEAR-CHK-01 | GAP-MOB-FIELD-CHK-01 checklist local | PO/Design: taxonomy peer asset-kcht · **không** API mới |
| UNCLEAR-MEDIA-01 | GAP-MOB-FIELD-MEDIA-01 MediaIds / Description bind | SA cite CreateIncidentRequest Live |
| UNCLEAR-PGC | Overlay photo-geo vs PhotoRow simple | Design: FR-02 peer photo-geo · P1 still PhotoRow OK |
| UNCLEAR-ENTRY | Entry TD vs TK hub | 1 route FR-01 · stamp PatrolType từ ca |

## Handoff

| Role | Dùng |
|------|------|
| PO | FR-00/01/02 DoD · GPS gate · live sessions · no Me · useFormOptions |
| Design | Phone 430 · Android 1-1 `#sc-field-reflect` · zones FR-* · prototype + reviewUrl |
| SA | Cite Live incident/patrol/integration/ai-vision/files · Mobile.Bff · DOMAIN-MAP row · **cấm** ERP.* |
| TL/Dev | Wire Mobile MFE only · BFF `:5202` · GPS + sessions live-only |
| QA | no session · GPS deny · accuracy>30 · offline draft · no fake coords · no Me · no web-bff |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:e678be9152069e48f353f88e9f4d377e20e4fd4ad5c8d4aa2c86bd995bc1e667` · `rulesVersion=2026.09.25.2` · `analyzedAt=2026-09-26T02:54:00.000Z`
