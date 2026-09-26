# Data-analy — real-data bind — web-rmms-asset-ai

| Field | Value |
|-------|-------|
| feature | `web-rmms-asset-ai` |
| title | Camera AI và HITL |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_fd6a0724` |
| prefix API | AiVision · Integration · Patrol (prefill) · Asset (confirm side-effect) |
| prefix BFF web (cite) | `web-bff/api/v1/*` · **không** base client |
| prefix BFF mobile (HARD) | `mobile-bff/api/v1` · host `http://localhost:5202` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/web-rmms-asset-ai` |
| domain | **AiVision** (+ cite Asset · Integration · Patrol) |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| analyzedAt | `2026-09-25T15:55:00.000Z` |
| demo | **N/A** · **cấm** demo-json / in-app mock SSOT |

## § Scope AI + HITL

| In | Out |
|----|-----|
| AA-00…14 · photo upload · GPS · detect-assets · nearby · HITL confirm/dismiss | `me*` · collect manual · adjust · list/detail · Field 2-door deep · journal-lines · findings · session close · frequency (b–e) |
| API **Live** uploads · detect-assets · nearby · confirm · dismiss · sessions · road-routes/search | invent `asset-ai` controller · `mock://` ImageUrl · auto-confirm trên detect · Web BFF base |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/web-rmms-asset-ai.md` | — | — |
| `peer-ctx` | `docs/context/features/asset-ai.md` | — | DES · gaps |
| `peer-web` | `docs/context/features/ai-asset-detect.md` | — | candidates |
| `screens` | `docs/plan/web-rmms-mobile/SCREENS.md` · `/asset/ai` + HITL | — | BFF + GPS Acc≤30 |
| `peer` | `web-rmms-asset-hub` · shell / mobile-a…e | n/a | owners out |
| `api` | ai-vision uploads/detect/candidates · integration · patrol | required block detect | toast · **cấm** `window.alert` |
| `bff` | Mobile.Bff `:5202` · rewrite auth/files · proxy RMMS | 503 | retry |
| `domain-map` | AiVision + cite Asset/Integration/Patrol | — | **GAP** slug · **cấm ERP.*** |
| `catalog` | `/erp-form-context` · `useFormOptions` | — | labels via copy keys |
| `auth` | session required (staff) | guest → login peer | Hub/shell |
| `geo` | `navigator.geolocation` | deny/poor → disable detect | **cấm** fake |
| `demo` | — | N/A | **cấm** demo SSOT |

## §B — Bind field (HARD) — AI + HITL

| uiField | Label (key) | controlHint | catalogKind | GET | write field | sameMfe | sameMobile |
|---------|-------------|-------------|-------------|-----|-------------|---------|------------|
| nav.back | assetAi.nav.back | Button/Nav | — | — | nav Hub `/asset` | hub | n/a |
| title | assetAi.title | Text RO | — | — | — | local | n/a |
| field.photo | assetAi.field.photo | PhotoRow | file-upload | `POST ai-vision/uploads/init` + PUT | `ImageUrl` | AiVision | Upload |
| field.gps | assetAi.field.gps | Text RO | geo | geolocation | `Lat`/`Lng`/`AccuracyM` | device | n/a |
| field.route | assetAi.field.route | Select/Search | road-route | `GET integration/road-routes/search` | `RouteId` | Integration | n/a |
| field.routePrefill | assetAi.field.routePrefill | Hidden/Prefill | patrol-session | `GET patrol/sessions` | RouteId opt | Patrol | n/a |
| field.patrolTrip | assetAi.field.patrolTrip | Select | patrol-session | `GET patrol/sessions` | `PatrolTripId` | Patrol | n/a |
| field.nearby | assetAi.field.nearby | Alert | — | `GET ai-vision/asset-candidates/nearby` | — | AiVision | Nearby |
| action.detect | assetAi.action.detect | Button | — | — | `POST ai-vision/detect-assets` | AiVision | Detect |
| action.cancel | assetAi.action.cancel | Button/Nav | — | — | `/asset` | hub | n/a |
| hitl.fields | assetAi.hitl.fields | Text/Select RO | asset-class | candidate GetById | bind Draft | AiVision | Candidate |
| hitl.pin | assetAi.hitl.pin | MapPin | — | local | Lat/Lng object | local | n/a |
| action.confirm | assetAi.action.confirm | Button | — | — | `POST …/confirm` | AiVision | Confirm→Asset |
| action.dismiss | assetAi.action.dismiss | Button | — | — | `POST …/dismiss` | AiVision | Dismiss |

**Cấm** invent AssetAiController · **cấm** ERP.* · **cấm** fake GPS · **cấm** hardcode VN labels · **cấm** `mock://` · **cấm** auto-confirm · **cấm** gộp collect/adjust vào slug · **cấm** Route `mobile-bff` trên Web BFF.

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| LOOKUP_STATIC | FE `useFormOptions` / LinmCopy `assetAi.*` | SCREENS `/asset/ai` · CTX | hardcode label VN |
| road-route | `GET integration/road-routes/search` | DOMAIN-MAP Integration | invent route free-text SSOT |
| patrol-session | `GET patrol/sessions` | DOMAIN-MAP Patrol | invent session on AI |
| asset-class | candidate / init-data cite `ai-asset-detect` | DOMAIN-MAP AiVision | hardcode class list |
| file-upload | `POST ai-vision/uploads/init` + PUT object | FileService via Mobile.Bff | `mock://` ImageUrl |
| geo | `navigator.geolocation` | device Acc≤30 | fake coords / type-in |

## §D — Map / vẽ

| Mục | Ghi |
|-----|-----|
| map detect | **none** full GIS · GPS text RO only |
| map HITL | AA-12 pin drag local · **không** endpoint mới |
| GPS detect | AA-04 capture · AA-08 gated Acc≤30 · deny blocks |
| Map nav | GIS peer `/gis` **out** slug |

## §E — Progress / vòng đời

| stateField | Nguồn | Ai đổi | API | UI |
|------------|-------|--------|-----|-----|
| AuthJWT | shell/session | login peer | auth/* | staff only |
| GpsFix | device | geolocation | — | AA-04 · gate AA-08 |
| ImageUrl | FileService | upload | uploads init+PUT | AA-03 |
| DetectResult | AiVision | detect | `POST detect-assets` | Draft list → nav HITL |
| CandidateDraft | AiVision | detect auto-create | candidates | AA-10…12 |
| ConfirmResult | AiVision→Asset | confirm | `POST …/confirm` | toast · back Hub |
| DismissResult | AiVision | dismiss | `POST …/dismiss` | toast · back Hub |

`progress: Detect → Draft candidate → HITL confirm|dismiss` — **cấm** auto-confirm trên detect.

## §F — Handoff

| Role | Need |
|------|------|
| PO | DoD: photo+GPS+route · detect Live · HITL confirm/dismiss · Acc≤30 · no me · no collect · no auto-confirm |
| Design | AA zones · Android parity · score visibility · reviewUrl |
| SA | Add DOMAIN-MAP `web-rmms-asset-ai` · confirm Mobile.Bff · uploads Live |
| TL | Tasks AI detect page + HITL page wire |
| Dev | Implement Mobile MFE AI+HITL only |
| QA | GPS deny/poor · upload · detect · confirm · dismiss · phone 430 · no me · no invent path · no Web BFF |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=2` · `contentHash=sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` · `rulesVersion=2026.09.25.2` · `analyzedAt=2026-09-25T15:55:00.000Z`
