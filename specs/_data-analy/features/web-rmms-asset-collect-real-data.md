# Data-analy — real-data bind — web-rmms-asset-collect

| Field | Value |
|-------|-------|
| feature | `web-rmms-asset-collect` |
| title | Thêm tài sản thủ công |
| packKind | `list` |
| changeScope | `edit_page` |
| status | `done` |
| taskId | `task_ed5bbfb2` |
| priorTask | `task_a6862c38` |
| prefix API | Asset · Integration · Patrol (prefill) |
| prefix BFF web (cite) | `web-bff/api/v1/*` · **không** base client |
| prefix BFF mobile (HARD) | `mobile-bff/api/v1` · `mobileApiBase()` / `VITE_MOBILE_API_URL` · `:5202` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/tai-san/thu-thap` |
| mfeStdRoute | `/tai-san/thu-thap` |
| domain | **Asset** (+ cite Integration · Patrol) |
| contentHash | `sha256:bf61e3677d8c0ff81bfccd4e08df8f452a069408ae43f3d025dde73959990a79` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| analyzedAt | `2026-09-27T09:10:00.000Z` |
| demo | **N/A** · **cấm** demo-json / in-app mock SSOT |
| deltaCite | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` |

## § Scope Collect

| In | Out |
|----|-----|
| AC-00…10 · edit validate/SearchInput/GPS/submit · GPS pin · local photos | `me*` · AI · adjust · list/detail · Field deep · journal/findings/close/frequency · Excel |
| API **Live** init-data · asset-types · road-routes/search · sessions · POST road-assets | invent `asset-collect` · media POST · Source=`ai` · `new_page` |

## § Delta Current vs New (bind)

| Bind / rule | Current code | New bind |
|-------------|--------------|----------|
| submit enable | `canSave` = requiredOk ∧ gps ok ∧ !saving | enable = authed ∧ !saving ∧ !loading · validate on click |
| client errors | toast + `showErrors` class | banner `string[]` + inline · fields: name·type·route·km·GPS·photos |
| GPS | gate CTA | bind validate message only · still write `Lat`/`Lng` when ok |
| route control | select options from local fetch | `SearchInput` → `GET integration/road-routes/search` · shared config · empty/error → [] · unknown code → `--` |
| route seed | `ROAD_ROUTE_SEED` / filterSeed in `lookups.ts` (shared) | **remove** seed + QL.22 filter (shared edit · cite SUBMIT) |
| BFF base | Mobile | HARD `mobileApiBase()` · **cấm** web-bff |
| users API | n/a on form | forward BFF shared · **không** bind field trên collect |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `delta` | `SUBMIT-VALIDATE.md` · AssetCollect row | — | Pattern B / SearchInput |
| `context` | `docs/context/features/web-rmms-asset-collect.md` | — | — |
| `code` | `AssetCollectPage.tsx` | — | Current canSave / select route |
| `peer-ctx` | `docs/context/features/asset-collect.md` | — | DES · gaps |
| `screens` | `SCREENS.md` · `/asset/collect` | — | BFF + GPS |
| `api` | asset/road-assets · integration · patrol | banner required | toast API · **cấm** `window.alert` |
| `bff` | Mobile.Bff `:5202` · rewrite | 503 | retry |
| `domain-map` | Asset + Integration/Patrol | — | **cấm ERP.*** |
| `catalog` | `/erp-form-context` · `useFormOptions` | — | copy keys |
| `auth` | session staff | guest → login peer | Hub/shell |
| `geo` | `navigator.geolocation` | deny → banner on submit | **cấm** fake |
| `demo` | — | N/A | **cấm** demo SSOT |

## §B — Bind field (HARD) — Collect

| uiField | Label (key) | controlHint | catalogKind | GET | write field | sameMfe | sameMobile |
|---------|-------------|-------------|-------------|-----|-------------|---------|------------|
| nav.back | assetCollect.nav.back | Button/Nav | — | — | nav Hub `/asset` | hub | n/a |
| field.name | assetCollect.field.name | Text | — | — | `Name` | Asset | CreateRoadAsset |
| field.type | assetCollect.field.type | Select | asset-type | `GET integration/asset-types` | `Type` | Integration | n/a |
| field.route | assetCollect.field.route | **SearchInput** | road-route | `GET integration/road-routes/search` | `Route` | Integration | n/a |
| field.routePrefill | assetCollect.field.routePrefill | Prefill | patrol-session | `GET patrol/sessions` | Route/KmFrom opt · missing catalog → `--` | Patrol | n/a |
| field.kmFrom | assetCollect.field.kmFrom | Number/Text | — | — | `KmFrom` | Asset | n/a |
| field.kmTo | assetCollect.field.kmTo | Number/Text | — | — | `KmTo` | Asset | n/a |
| field.status | assetCollect.field.status | Select | asset-status | `GET asset/road-assets/init-data` | `Status` | Asset | n/a |
| field.gps | assetCollect.field.gps | Text RO | geo | geolocation | `Lat`/`Lng` | device | n/a |
| field.photos | assetCollect.field.photos | PhotoRow | — | local + capture | — (GAP media) | local | n/a |
| action.submit | assetCollect.action.submit | Button | — | — | `POST asset/road-assets` · `disabled={saving}` only | Asset | Create |
| action.cancel | assetCollect.action.cancel | Button/Nav | — | — | `/asset` | hub | n/a |
| err.banner | — | Banner | — | — | client validation list | local | n/a |

**Cấm** invent CollectController · **cấm** ERP.* · **cấm** fake GPS · **cấm** hardcode VN labels · **cấm** Source=`ai` · **cấm** seed route · **cấm** web-bff base.

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| LOOKUP_STATIC | FE `useFormOptions` / LinmCopy `assetCollect.*` | SCREENS · CTX | hardcode label VN |
| asset-type | `GET integration/asset-types` | DOMAIN-MAP Integration | hardcode options |
| road-route | `GET integration/road-routes/search` | `ROAD_ROUTE_LOOKUP_CONFIG` · **no** `ROAD_ROUTE_SEED` | free-text as valid route · seed QL.* |
| asset-status | `GET asset/road-assets/init-data` | DOMAIN-MAP Asset | hardcode «Tốt» only |
| patrol-session | `GET patrol/sessions` | DOMAIN-MAP Patrol | invent session |
| geo | `navigator.geolocation` | device | fake / type-in |

## §D — Map / vẽ

| Mục | Ghi |
|-----|-----|
| map | **none** trên collect · GIS peer |
| GPS | AC-07 capture · validate AC-09 on click |
| icons/routes | **giữ** DemoIcon / route hiện có · **cấm** path mới |

## §E — Progress / vòng đời

| stateField | Nguồn | Ai đổi | API | UI |
|------------|-------|--------|-----|-----|
| AuthJWT | shell/session | login peer | auth/* | staff only |
| GpsFix | device | geolocation | — | AC-07 · message on submit if deny |
| ValidationAttempted | local | first submit click | — | banner + inline |
| FormDraft | local | user | — | AC-02…08 |
| CreateResult | Asset | submit | `POST asset/road-assets` | toast Code · back Hub |
| MediaPending | local | user | GAP media | AC-08 local only |
| Saving | local | submit | POST pending | AC-09 disabled only then |

`progress: Create road-asset` — Source server `manual` · Code `TS-yyyyMMdd-nnn`.

## §F — Handoff

| Role | Need |
|------|------|
| PO | Delta DoD: Pattern B · SearchInput route · submit always on · POST Live · keep no me/AI |
| Design | Keep AC zones · delta control notes · reopen reviewUrl |
| SA | Confirm BFF road-routes · no invent · optional users forward shared |
| TL | Edit tasks only — page + shared lookups seed |
| Dev | Patch AssetCollectPage + lookups · mobileApiBase |
| QA | Banner fields · GPS deny on click · SearchInput no seed · POST · phone 430 |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=2` · `contentHash=sha256:bf61e3677d8c0ff81bfccd4e08df8f452a069408ae43f3d025dde73959990a79` · `rulesVersion=2026.09.25.2` · `analyzedAt=2026-09-27T09:10:00.000Z` · `taskId=task_ed5bbfb2`
