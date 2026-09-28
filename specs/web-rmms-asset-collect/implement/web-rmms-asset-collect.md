# Implement — web-rmms-asset-collect

| Field | Value |
|-------|-------|
| feature | `web-rmms-asset-collect` |
| role | `dev` · `/agent-dev` |
| status | `done` |
| packKind | `list` (phone Create form · Kind B **WAIVE**) |
| changeScope | `edit_page` |
| formPattern | Mobile ≤430 · Pattern B · Create only · no ERP Modal/Slideout · useFormOptions / assetCollect.* |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/tai-san/thu-thap` |
| mfeStdUrl | `http://localhost:9301/tai-san/thu-thap` |
| nativeAlias | `/asset/collect` → STD |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Asset · cite Integration/Patrol · **cấm ERP.*** |
| BFF | `mobile-bff/api/v1` :5202 · `mobileApiBase()` · Live GET lookups + POST create · Source=manual |
| contentHash | `sha256:bf61e3677d8c0ff81bfccd4e08df8f452a069408ae43f3d025dde73959990a79` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| updatedAt | `2026-09-27T16:45:00.000Z` |
| taskId | `task_89061d65` |
| demo | **N/A** · Live-only · **REMOVED** me* / feedback / cam-view / AI |
| e2eQa | queued `/agent-qa*` — **cấm** e2e ở Dev |
| deltaCite | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` |

## Build

| Gate | Result |
|------|--------|
| MFE `yarn build` | **PASS** (size-limit WARN only · chunk `tai-san/thu-thap` emitted) |
| BE `dotnet build` Linm.RMMS.WebService.sln | **PASS** (1 CS0105 WARN · 0 error) |
| migration / entity / invent CollectController | **none** (SA · reuse road-assets) |
| Step 4b | skip write — Live APIs + dual BFF already exist · DOMAIN-MAP keep |
| Kind B / ui-schema / filter-bar | **WAIVE** (phone form · DES-GRID N/A) |

## Delta DoD (edit_page)

| Item | Done |
|------|------|
| remove `disabled={!canSave}` → `disabled={saving}` only | yes |
| Pattern B `validationAttempted` · errBanner string[] name/type/route/km/GPS/photos + inline + scroll | yes |
| GPS deny on submit · Lat/Lng RO · cấm fake/type-in · cấm lock CTA trước | yes |
| route → `SearchInput` + `ROAD_ROUTE_LOOKUP_CONFIG` · no seed · miss `--` | yes |
| photos local `capture="environment"` keep · GAP media · no invent upload | yes |
| DES-LEAVE `LeaveConfirmModal` · cấm native confirm | yes |
| POST road-assets Source=manual · toast Code · back Hub | yes (keep) |

## Screens wired

| id | Zone | Notes |
|----|------|-------|
| AC-00 | frame | phone max-width 430 |
| AC-01 | chrome | back → Hub · DES-LEAVE |
| AC-02 | name | Text * · Pattern B |
| AC-03 | type | Select * · GET asset-types |
| AC-04 | route | SearchInput * · ROAD_ROUTE_LOOKUP_CONFIG · sessions prefill |
| AC-05 | km | KmFrom * · KmTo opt |
| AC-06 | status | Select * · GET init-data · default `tot` |
| AC-07 | gpsPin | Text RO · geolocation · validate-on-submit |
| AC-08 | photos | local File/capture * · GAP media · no upload |
| AC-09 | submit | `disabled={saving}` · POST Source=manual · toast Code · Hub |
| AC-10 | cancel | → Hub · DES-LEAVE |
| errBanner | banner | string[] after attempt · dismissible |
| guest | auth gate | → Home login |

## APIs wired (Live)

| Method · Path | UI |
|---------------|-----|
| `GET …/asset/road-assets/init-data` | AC-06 statuses |
| `GET …/integration/asset-types` | AC-03 type Select |
| `GET …/integration/road-routes/search` | AC-04 SearchInput (shared lookups) |
| `GET …/patrol/sessions?status=open` | AC-04 route prefill (opt) |
| `POST …/asset/road-assets` | AC-09 create · Source=`manual` · Lat/Lng required |

## Files (FE)

- `src/pages/WebRmmsAssetCollect/AssetCollectPage.tsx` — Pattern B · SearchInput · errBanner
- `src/pages/WebRmmsAssetCollect/lookupStatic.ts` — error.* keys
- `src/pages/WebRmmsAssetCollect/styles.module.css` — bannerList / fieldError
- `src/services/patrol/lookups.ts` — `ROAD_ROUTE_LOOKUP_CONFIG` (shared · no seed · miss `--`)
- `src/services/assetCollect/{types,endpoint}.ts` — keep Live

## BE Step 4b

- DOMAIN-MAP `web-rmms-asset-collect` → Asset (CLOSED · cite Integration/Patrol)
- **no** new API controller / entity / migration / media path (SA approve)
- `RoadAssetsBffController` · dual mobile-bff + POST already present
- Mobile.Bff :5202 catch-all proxies asset/integration/patrol
- Align = verify `dotnet build` PASS only

## Tasks

| id | status |
|----|--------|
| T-01 Pattern B + errBanner + remove canSave | **done** |
| T-02 SearchInput route no seed | **done** |
| T-03 GPS-on-submit | **done** |
| T-04 photos keep + DES-LEAVE | **done** |
| T-05 POST keep + quality / build | **done** |
| T-06 QA E2E | pending (queued) |
| T-07 Review | pending |

## Debt / GAP

- UNCLEAR-MEDIA-01 · GAP-MOB-ASSET-COLLECT-MEDIA-01 — local photos only · **cấm** invent media path
- Kind B / LinCatalogUiSchemaEditorModal / filter-bar — **WAIVE** phone form

## Next

- `/agent-qa*` · e2eQa queued · **roleOnly stop** (GAP-PKT-ROLE-01)
