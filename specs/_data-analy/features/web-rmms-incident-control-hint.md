# Data-analy — controlHint — web-rmms-incident

| Field | Value |
|-------|-------|
| feature | `web-rmms-incident` |
| title | Sự cố list, tạo, chi tiết — edit Pattern B |
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
| contentHash | `sha256:d753df685c7334cda81339c1c6daccaa3463c4e8c6350eaff5562a6e41584015` |
| analyzedAt | `2026-09-27T12:20:00.000Z` |
| demo | **N/A** |
| realData | `specs/_data-analy/features/web-rmms-incident-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **Incident** + Patrol · Integration · AiVision · FileService cite · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/van-de/moi` |
| mfeStdRoute | `/van-de/moi` |
| productRoute | `/incident` · `/incident/new` · `/incident/:id` |
| taskId | `task_43536f7d` |
| priorTask | `task_5674f223` (new_page · review-approved) |
| phoneFrame | `max-width: 430px` |
| formPattern | Mobile full · Android 1-1 · Pattern B validate · **không** ERP Modal/Slideout |
| bff | `Linm.RMMS.Mobile.Bff` · `VITE_MOBILE_API_URL=http://localhost:5202/mobile-bff/api/v1` · **cấm** web-bff |
| deltaCite | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` · row `web-rmms-incident` |
| keepArtifacts | prior PO/Design/SA/implement · **cấm** typed CRUD `new_page` |

> Data-analy **đề xuất** controlHint Delta. Design **chốt** control-map + prototype reviewUrl (giữ). SA **cite** Live · **cấm** invent controller.  
> **Cấm** Excel/toolbar export · **cấm** tab/route/icon mới · **cấm** fake GPS · **cấm** iOS/Android.

## Sources

| Source | Path | note |
|--------|------|------|
| CTX | `docs/context/features/web-rmms-incident.md` | § Delta · hash gate |
| Delta SSOT | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` | Pattern B · IncidentCreatePage |
| Code Current | `src/pages/WebRmmsIncident/IncidentCreatePage.tsx` | `disabled={!canCreate}` |
| Paths | `paths.ts` | `INCIDENT_BASE=/van-de` · create `/van-de/moi` |
| Screens | `SCREENS.md` Tab Incident | SSOT actions |
| Peer CTX | incident-list · incident-create · incident-detail | DES + Live |
| DOMAIN-MAP | Incident | MFE `/van-de` |

## Screens (ids)

| id | route | surface |
|----|-------|---------|
| INC-L | `/incident` · std `/van-de` | List filter · cards · FAB · banner vis · map/chat |
| INC-N | `/incident/new` · std `/van-de/moi` | Pick TS · form · GPS · Create/Draft · **Pattern B** |
| INC-D | `/incident/:id` · std `/van-de/:id` | Detail RO · close · nav estimate/map |
| INC-V/C/E | peer | vis / chat / estimate — nav-only |

**Out:** Me* · feedback · cam-view · journal B–E · invent slug controller · Excel export · new tab/route.

## § Delta Current vs New (HARD)

| uiField | Current | New controlHint |
|---------|---------|-----------------|
| create | Button · `disabled={!canCreate}` | Button primary · **always enabled** (form ready) · `disabled` **chỉ** `creating` |
| validate.banner | missing · early return / toast | Banner `string[]` (asset · session · GPS) · Pattern B · `validationAttempted` |
| validate.inline | missing | Inline dưới field + scroll first error · **cấm** single alert.warning |
| gpsLock | deny → disable Create | GPS · deny **không** khóa nút · báo lúc bấm Create |
| photos | PhotoRow · capture OK | **Giữ** `capture="environment"` |
| INC-L / INC-D | shipped | **Giữ** · không đổi DoD trừ regression |

## ControlHint inventory (base + Delta)

### INC-L — List (giữ)

| uiField | screen | controlHint | catalogKind / notes |
|---------|--------|-------------|---------------------|
| search | INC-L | SearchInput | query `search` |
| filter.status | INC-L | Select/Chip | LOOKUP_STATIC → `status` |
| filter.severity | INC-L | Select/Chip | LOOKUP_STATIC → `severity` |
| list | INC-L | CardList | `GET incident/incidents` · pageSize=50 |
| fab | INC-L | FAB | nav `/van-de/moi` |
| empty / toast.fail | INC-L | EmptyState / Toast | **cấm** `window.alert` |

### INC-N — Create (Delta focus)

| uiField | screen | controlHint | catalogKind / notes |
|---------|--------|-------------|---------------------|
| assetPick | INC-N | LookupGrid | `GET integration/asset-types` |
| kind | INC-N | Segment/Pill 3 | → `IncidentType` |
| checklist | INC-N | CheckboxGroup | local → `Description` |
| photos | INC-N | PhotoRow | capture="environment" · **giữ** |
| detect | INC-N | Button | POST detect · GPS≤30 · **không** khóa Create vì detect |
| sessionStamp | INC-N | Text RO | `GET patrol/sessions` · RouteName · KmStart · **không** SearchInput tuyến |
| gpsLock | INC-N | GPS | deny → banner/modal **on submit** · **cấm** disable Create |
| severity | INC-N | Select | LOOKUP_STATIC |
| description | INC-N | Textarea | useFormOptions key |
| validate.banner | INC-N | Banner | asset · session · GPS · Pattern B |
| create | INC-N | Button primary | POST · HasGps · **disabled chỉ creating** |
| draftOffline | INC-N | Button secondary | peer offline |

### INC-D — Detail (giữ)

| uiField | screen | controlHint | notes |
|---------|--------|-------------|-------|
| close | INC-D | Button | POST close · Note optional · disabled chỉ `closing` |

## Filter / grid

| | |
|--|--|
| LinErpListFilterBar / DES-GRID / Excel export | **N/A** · phone · **cấm** toolbar export |
| INC-L filters | mobile Search + chips |

## GPS

| Màn | Rule |
|-----|------|
| INC-N | **edit:** deny → báo lúc bấm Create · **cấm** khóa nút trước · **cấm** fake |
| Detect | accuracy > 30 m → không POST detect |
| INC-L / INC-D | HasGps cờ xem |

## API (cite Live — SA confirm)

| Method | Path | Note |
|--------|------|------|
| GET/POST | `incident/incidents` | list / create |
| GET | `incident/incidents/{id}` | detail |
| POST | `incident/incidents/{id}/close` | close |
| GET | `patrol/sessions` | ca create RO |
| GET | `integration/asset-types` | pick |
| POST | `ai-vision/uploads` · `ai-vision/detect` | media |
| POST | `files/*` | photo-geo peer |

App base: `{BffBase}/mobile-bff/api/v1`. **Cấm** invent path theo slug. Users SearchInput **N/A** form này.

## UNCLEAR

| id | Issue | Action |
|----|-------|--------|
| — | Prior UNCLEAR-DOMAIN-MAP-INC · CHK · PGC · PEER · STD · SESS | **resolved** prior pipeline |
| UNCLEAR-PB-BANNER-01 | Banner copy keys cho asset/session/GPS thiếu? | PO map `useFormOptions` keys · **cấm** hardcode VN mới nếu key có |

## Handoff

| Role | Dùng |
|------|------|
| PO | Delta Pattern B · keep L/N/D AC · GPS on-submit · no Excel · keep Design |
| Design | Phone 430 · update zones create button / banner · **giữ** reviewUrl hoặc patch prototype |
| SA | **no MIG** · cite Live · Mobile.Bff only · cấm invent |
| TL/Dev | `IncidentCreatePage.tsx` only focus · align no_demo · BFF `:5202` |
| QA | submit always on · banner missing fields · GPS deny on click · no fake · no web-bff |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:d753df685c7334cda81339c1c6daccaa3463c4e8c6350eaff5562a6e41584015` · `rulesVersion=2026.09.25.2` · `analyzedAt=2026-09-27T12:20:00.000Z`
