# Data-analy — real-data bind — web-rmms-asset-ai

| Field | Value |
|-------|-------|
| feature | `web-rmms-asset-ai` |
| title | Camera AI và HITL |
| packKind | `list` |
| changeScope | `edit_page` |
| status | `done` |
| taskId | `task_38801b3b` |
| prefix API | AiVision · Integration · Patrol (prefill) · Asset (confirm side-effect) |
| prefix BFF web (cite) | `web-bff/api/v1/*` · **không** base client |
| prefix BFF mobile (HARD) | `mobile-bff/api/v1` · host `http://localhost:5202` · `mobileApiBase()` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/tai-san/ai` |
| mfeStdRoute | `/tai-san/ai` |
| domain | **AiVision** (+ cite Asset · Integration · Patrol) |
| contentHash | `sha256:e223304b3658e8067766aed729e36988d54f1df8ad38ca953b2e176e63c9594c` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| analyzedAt | `2026-09-27T09:45:09.284Z` |
| demo | **N/A** · **cấm** demo-json / in-app mock SSOT |
| deltaCite | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` |

## § Delta — Current vs New (HARD)

| Bind / rule | Current | New |
|-------------|---------|-----|
| changeScope | new_page (prior) | **edit_page** · page `AssetAiDetectPage` / Hitl đã có |
| action.detect disable | `!canDetect` (requiredOk ∧ gpsOk ∧ imageUrl ∧ !detecting) | chỉ `detecting` / `pending` · validate on click · banner ảnh+tuyến+GPS |
| field.route control | search input + select options | **SearchInput** · `GET integration/road-routes/search` · **cấm** ROAD_ROUTE_SEED · miss → `--` |
| field.gps gate | khóa CTA trước khi Acc≤30 | báo khi bấm · **cấm** khóa trước |
| field.photo | capture + uploads Live | **giữ** |
| HITL confirm/dismiss | disabled={busy} | **giữ** |
| export | — | **cấm** Excel |
| BFF | Mobile.Bff Live | **giữ** · cấm web-bff · users forward = peer (AI N/A picker) |
| API invent | none | **giữ** none |

## § Scope AI + HITL

| In | Out |
|----|-----|
| AA-00…14 · photo upload · GPS · detect · nearby · HITL · Pattern B · SearchInput route | `me*` · collect · adjust · list/detail · Field deep · journal…frequency · invent asset-ai · mock:// · auto-confirm · Excel · `new_page` · `disabled={!canDetect}` |
| API **Live** uploads · detect · nearby · confirm · dismiss · sessions · road-routes/search | Web BFF base · seed routes |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/web-rmms-asset-ai.md` | — | — |
| `delta` | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` | — | Pattern B |
| `code` | `AssetAiDetectPage.tsx` · `AssetAiHitlPage.tsx` | — | Current baseline |
| `peer-ctx` | `docs/context/features/asset-ai.md` | — | DES · gaps |
| `peer-web` | `docs/context/features/ai-asset-detect.md` | — | candidates |
| `screens` | `docs/plan/web-rmms-mobile/SCREENS.md` · `/asset/ai` + HITL | — | BFF + GPS |
| `peer` | `web-rmms-asset-hub` · shell / mobile-a…e | n/a | owners out |
| `api` | ai-vision · integration · patrol | required → banner on submit | toast API · **cấm** `window.alert` |
| `bff` | Mobile.Bff `:5202` | 503 | retry |
| `domain-map` | AiVision + cite | — | SA row · **cấm ERP.*** |
| `catalog` | `/erp-form-context` · `useFormOptions` | — | copy keys |
| `auth` | session staff | guest → login peer | Hub/shell |
| `geo` | `navigator.geolocation` | deny/poor → banner on click | **cấm** fake |
| `demo` | — | N/A | **cấm** demo SSOT |

## §B — Bind field (HARD) — AI + HITL

| uiField | Label (key) | controlHint | catalogKind | GET | write field | sameMfe | sameMobile |
|---------|-------------|-------------|-------------|-----|-------------|---------|------------|
| nav.back | assetAi.nav.back | Button/Nav | — | — | nav Hub `/asset` | hub | n/a |
| title | assetAi.title | Text RO | — | — | — | local | n/a |
| field.photo | assetAi.field.photo | PhotoRow | file-upload | uploads init+PUT | `ImageUrl` | AiVision | Upload |
| field.gps | assetAi.field.gps | Text RO | geo | geolocation | Lat/Lng/AccuracyM | device | n/a |
| field.route | assetAi.field.route | SearchInput | road-route | `GET integration/road-routes/search` | `RouteId` | Integration | n/a |
| field.routePrefill | assetAi.field.routePrefill | Hidden/Prefill | patrol-session | `GET patrol/sessions` | RouteId opt | Patrol | n/a |
| field.patrolTrip | assetAi.field.patrolTrip | Select | patrol-session | `GET patrol/sessions` | `PatrolTripId` | Patrol | n/a |
| field.nearby | assetAi.field.nearby | Alert | — | `GET ai-vision/asset-candidates/nearby` | — | AiVision | Nearby |
| action.detect | assetAi.action.detect | Button | — | — | `POST detect-assets` · Pattern B | AiVision | Detect |
| action.cancel | assetAi.action.cancel | Button/Nav | — | — | `/asset` | hub | n/a |
| hitl.fields | assetAi.hitl.fields | Text/Select RO | asset-class | candidate GetById | bind Draft | AiVision | Candidate |
| hitl.pin | assetAi.hitl.pin | MapPin | — | local | Lat/Lng object | local | n/a |
| action.confirm | assetAi.action.confirm | Button | — | — | `POST …/confirm` | AiVision | Confirm→Asset |
| action.dismiss | assetAi.action.dismiss | Button | — | — | `POST …/dismiss` | AiVision | Dismiss |

**Cấm** invent AssetAiController · ERP.* · fake GPS · hardcode VN · `mock://` · auto-confirm · gộp collect/adjust · Web BFF base · ROAD_ROUTE_SEED · `disabled={!canDetect}`.

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| LOOKUP_STATIC | FE `useFormOptions` / LinmCopy `assetAi.*` | SCREENS · CTX | hardcode label VN |
| road-route | `GET integration/road-routes/search` | DOMAIN-MAP Integration · SearchInput | seed / free-text SSOT / hiện mã lạ |
| patrol-session | `GET patrol/sessions` | DOMAIN-MAP Patrol | invent session on AI |
| asset-class | candidate / init-data cite `ai-asset-detect` | AiVision | hardcode class list |
| file-upload | uploads init+PUT | FileService via Mobile.Bff | `mock://` |
| geo | `navigator.geolocation` | Acc≤30 validate on click | fake / type-in |

## §D — Map / vẽ

| Mục | Ghi |
|-----|-----|
| map detect | none full GIS · GPS text RO |
| map HITL | AA-12 pin drag local · no new endpoint |
| GPS detect | AA-04 capture · AA-08 Pattern B on click |
| Map nav | GIS peer `/gis` **out** |

## §E — Progress / vòng đời

| stateField | Nguồn | Ai đổi | API | UI |
|------------|-------|--------|-----|-----|
| AuthJWT | shell/session | login peer | auth/* | staff only |
| GpsFix | device | geolocation | — | AA-04 · validate AA-08 click |
| ImageUrl | FileService | upload | uploads | AA-03 |
| DetectResult | AiVision | detect | `POST detect-assets` | Draft → HITL |
| CandidateDraft | AiVision | detect | candidates | AA-10…12 |
| ConfirmResult | AiVision→Asset | confirm | `POST …/confirm` | toast · Hub |
| DismissResult | AiVision | dismiss | `POST …/dismiss` | toast · Hub |
| ValidationAttempted | FE | first detect click | — | banner + inline |

`progress: Detect → Draft → HITL confirm|dismiss` — **cấm** auto-confirm · **cấm** khóa CTA vì thiếu required trước click.

## §F — Handoff

| Role | Need |
|------|------|
| PO | § Delta DoD: Pattern B · SearchInput route · Acc≤30 on click · no me · no auto-confirm · no Excel · no new_page |
| Design | giữ reviewUrl · confirm AA + validate UX |
| SA | DOMAIN-MAP row · BFF road-routes (đã) |
| TL | Tasks: patch detect validate + route SearchInput · shared lookups no seed |
| Dev | `AssetAiDetectPage` + `lookups.ts` · Mobile.Bff only |
| QA | Pattern B: CTA enabled · banner missing · SearchInput no seed · GPS deny on click · phone 430 · no Web BFF |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=2` · `contentHash=sha256:e223304b3658e8067766aed729e36988d54f1df8ad38ca953b2e176e63c9594c` · `rulesVersion=2026.09.25.2` · `analyzedAt=2026-09-27T09:45:09.284Z`
