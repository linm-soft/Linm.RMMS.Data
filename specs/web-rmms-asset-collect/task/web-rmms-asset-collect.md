# Team lead — Task — web-rmms-asset-collect

> Status: **confirmed** · autoApprove ON · task `task_190676f8` · 2026-09-27T16:25:00.000Z  
> **Cấm** implement code tại role này · **cấm** e2e / yarn build / start:std · Step 4b skip.

| | |
|--|--|
| Feature | `web-rmms-asset-collect` |
| Title | Thu thập tài sản — edit_page (Pattern B · SearchInput · GPS-on-submit) |
| Role | `team_lead` |
| packKind | `list` |
| changeScope | `edit_page` |
| formPattern | Mobile full form ≤430 · Pattern B · N/A ERP Modal/Slideout · Create only · Android 1-1 |
| domain | **Asset** (`asset`) · cite Integration + Patrol |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| codeCurrent | `src/pages/WebRmmsAssetCollect/AssetCollectPage.tsx` |
| mfeStdRoute | `/tai-san/thu-thap` |
| mfeStdUrl | `http://localhost:9301/tai-san/thu-thap` |
| nativeRouteCite | SCREENS `/asset/collect` · alias nếu shell |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Mobile.Bff `:5202` `mobile-bff/api/v1` |
| demo | **N/A** |
| deltaCite | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` |
| contentHash | `sha256:bf61e3677d8c0ff81bfccd4e08df8f452a069408ae43f3d025dde73959990a79` |
| skillVersion | `2026.09.05.03` |
| route_confirm | **keep** · existing `/tai-san/thu-thap` · no new URL · no new tab/icon |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-collect/ui/prototype/index.html` |
| prior | data_analy · po · design · sa = **confirmed** |

## 0. changeScope / gates

| Gate | Result |
|------|--------|
| control-hint | `specs/_data-analy/features/web-rmms-asset-collect-control-hint.md` **exists** |
| real-data | `specs/_data-analy/features/web-rmms-asset-collect-real-data.md` **exists** · §A+§B PASS |
| changeScope | `edit_page` · full pipeline · **cấm** new_page typed CRUD |
| DES-GRID / LinErpListFilterBar | **N/A** phone form |
| Step 4b / migration / API Mới / entity | **skip** · none (SA) · reuse Live `road-assets` · **cấm** invent CollectController |
| ERP.* | **cấm** |
| media upload path | **GAP** · local only · **cấm** invent |
| GPS fake / type-in | **cấm** · `navigator.geolocation` only · validate-on-submit |
| baseline T-01…T-07 (new_page) | **superseded** · replan dưới đây |

## 1. Scope (DoD) — Delta edit_page

| In (delta) | Out / keep-forbid |
|------------|-------------------|
| remove `disabled={!canSave}` · CTA `disabled={saving}` only | lock CTA trước khi user submit |
| Pattern B · errBanner string[] after attempt · name/type/route/km/GPS/photos | hardcode VN labels |
| route → `SearchInput` + `ROAD_ROUTE_LOOKUP_CONFIG` · **no seed** · missing → `--` | seed list / fake options |
| GPS validate-on-submit · deny on submit click · Lat/Lng RO | fake GPS / type-in · lock CTA sớm |
| keep photos local capture (GAP) · DES-LEAVE in-app discard | invent media upload · native `confirm` |
| keep POST `road-assets` Source→`manual` · toast Code · back Hub | invent CollectController / entity / migration |
| keep Live lookups init-data · asset-types · road-routes/search · sessions prefill | web-bff client base · ERP.* |
| labels `useFormOptions()` / `assetCollect.*` | me* / feedback / cam-view · AI/adjust/list · Excel |

## 2. Screens / zones (keep ids)

| Zone | Control | Bind / edit note |
|------|---------|------------------|
| AC-00 | page chrome | phone 430 · Android 1-1 · keep |
| AC-01 | navBack Button/Nav | → Hub `/asset` · DES-LEAVE dirty |
| AC-02 | pageTitle Text RO | `assetCollect.title` · useFormOptions |
| AC-03 | name Text* | CreateRoadAsset.Name · Pattern B |
| AC-04 | type Select* | GET `integration/asset-types` |
| AC-05 | route **SearchInput*** | `ROAD_ROUTE_LOOKUP_CONFIG` · no seed · missing→`--` · sessions prefill |
| AC-06 | kmFrom Text* · kmTo Text opt | CreateRoadAsset.KmFrom / KmTo |
| AC-07 | status Select* | GET init-data Status options |
| AC-08 | gpsPin Lat/Lng Text RO* | geolocation · **validate-on-submit** · deny blocks submit |
| AC-09 | photos PhotoRow | local capture keep · GAP media · no upload |
| AC-10 | submit/cancel CTA | `disabled={saving}` only · POST · toast Code · back Hub |
| errBanner | Banner | string[] after attempt · name/type/route/km/GPS/photos |

## 3. Live API (HARD — keep · no new)

| Method | Client path | Bind |
|--------|-------------|------|
| GET | `mobile-bff/api/v1/asset/init-data` | AC-07 Status · form defaults |
| GET | `mobile-bff/api/v1/integration/asset-types` | AC-04 Type |
| GET | `mobile-bff/api/v1/integration/road-routes/search` | AC-05 Route SearchInput |
| GET | `mobile-bff/api/v1/patrol/sessions` (prefill cite) | AC-05 route/km prefill nếu session |
| POST | `mobile-bff/api/v1/asset/road-assets` | AC-10 · Source=`manual` · Name* Type* Route* KmFrom* Status* Lat/Lng* · KmTo opt |

- Base: `http://localhost:5202` + `mobile-bff/api/v1` · `mobileApiBase()` only
- Fail 503/network → toast + retry · **cấm** `alert`
- Validation fail → errBanner · GPS deny on submit · **cấm** early CTA lock
- Success → toast Code · navigate Hub
- Write API mới / CollectController / media upload: **none** · **cấm** invent
- **Cấm** web-bff client base · **cấm** ERP.*

## 4. Task board (T-*) — edit_page replan

| ID | Title | Owner | Deps | AC (trace) | Status |
|----|-------|-------|------|------------|--------|
| T-01 | Pattern B + errBanner · remove `disabled={!canSave}` · CTA `disabled={saving}` only · keep shell AC-00…02 · labels `assetCollect.*` | `/agent-dev` | — | PO Form DoD · design errBanner · delta SUBMIT-VALIDATE · SA FormMode | pending |
| T-02 | AC-05 route → SearchInput + `ROAD_ROUTE_LOOKUP_CONFIG` · no seed · missing→`--` · keep sessions prefill · lookups Live | `/agent-dev` | T-01 | PO SearchInput · design route · SA road-routes/search · real-data §B | pending |
| T-03 | GPS AC-08 validate-on-submit · deny on submit click · Lat/Lng RO · **cấm** fake/type-in · **cấm** lock CTA trước | `/agent-dev` | T-01 | PO GPS · design gpsPin · SA GPS HARD · delta | pending |
| T-04 | photos AC-09 keep local capture · DES-LEAVE dirty discard in-app · cancel · **cấm** invent media · **cấm** native confirm | `/agent-dev` | T-01 | PO photos GAP · design DES-LEAVE · SA UNCLEAR-MEDIA-01 | pending |
| T-05 | Submit POST road-assets Source=manual keep · required gate via Pattern B · toast Code · back Hub · Android 1-1 · list-form quality gates | `/agent-dev` | T-02,T-03,T-04 | PO DoD POST · SA Write · design AC-10 | pending |
| T-06 | QA scenarios + E2E queued · Pattern B banner · SearchInput no seed · GPS deny-on-submit · leave · phone 430 · mfeStdUrl `/tai-san/thu-thap` | `/agent-qa` | T-05 | e2eQa ON · scenarios.md | pending |
| T-07 | Review findings vs design/prototype · STATUS route keep · delta DoD | `/agent-review` | T-06 | design reviewUrl · STATUS | pending |

### Dev assign (agent-dev-assign)

| Field | Value |
|-------|-------|
| feature | `web-rmms-asset-collect` |
| packKind | `list` |
| slash | `/agent-dev` |
| mfe cwd | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| codeCurrent | `src/pages/WebRmmsAssetCollect/AssetCollectPage.tsx` |
| implement artifact | `specs/web-rmms-asset-collect/implement/web-rmms-asset-collect.md` |
| BE align | skip until Dev · Step 4b none expected |
| cấm | ERP.* · invent CollectController/media · e2e ở Dev (QA owns) · fake GPS · hardcode VN · web-bff base · Step 4b/migration · new_page CRUD · seed route lookup |

## 5. route_confirm

| Item | Value |
|------|-------|
| mfeStdRoute | `/tai-san/thu-thap` |
| mfeStdUrl | `http://localhost:9301/tai-san/thu-thap` |
| native cite | `/asset/collect` |
| decision | **keep** · edit_page · no new URL/tab/icon · STATUS already resolved |
| shell alias | `/asset/collect` nếu shell map native SCREENS |
| legacy | `/web-rmms-asset-collect` — **superseded** by STATUS `/tai-san/thu-thap` |

## 6. Risks / carry

| ID | Status | Dev note |
|----|--------|----------|
| UNCLEAR-DOMAIN-MAP-ACOLLECT | **resolved** SA | DOMAIN-MAP row Asset — follow |
| UNCLEAR-STD-ROUTE | **resolved** | STATUS `/tai-san/thu-thap` canonical |
| UNCLEAR-STATUS-ANDROID | **resolved** SA | Status Select từ init-data |
| UNCLEAR-MEDIA-01 / GAP-MOB-ASSET-COLLECT-MEDIA-01 | **open** | local preview/capture only · **cấm** invent upload |

## 7. Handoff next

- Next role: `/agent-dev` · roleOnly stop (GAP-PKT-ROLE-01)
- compact: `specs/web-rmms-asset-collect/handoff/team_lead-compact.md`
- implement: `specs/web-rmms-asset-collect/implement/web-rmms-asset-collect.md` (Dev writes)
- e2eQa: ON · queued `/agent-qa*` only
