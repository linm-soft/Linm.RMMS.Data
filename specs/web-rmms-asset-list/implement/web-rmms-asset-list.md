# Implement — web-rmms-asset-list

| Field | Value |
|-------|-------|
| feature | `web-rmms-asset-list` |
| role | `dev` · `/agent-dev` |
| status | `done` |
| packKind | `list` (phone List+Detail · Kind B **WAIVE**) |
| changeScope | `new_page` |
| formPattern | Mobile List+Detail / full · phone 430 · no ERP Modal · no PUT |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-asset-list` |
| mfeStdUrl | `http://localhost:9301/web-rmms-asset-list` |
| nativeAlias | `/asset/list` · `/asset/{guid}` → same-slug `?id=` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Asset · cite Gis · **cấm ERP.*** |
| BFF | `mobile-bff/api/v1` :5202 · Live GET list+detail · `RoadAssetsMobileController` · **cấm** dual route trên Web BFF |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| updatedAt | `2026-09-25T14:55:00.000Z` |
| taskId | `task_215a5913` |
| demo | **N/A** · Live-only · **REMOVED** me* / feedback / cam-view |
| e2eQa | queued `/agent-qa*` — **cấm** e2e ở Dev |

## Build

| Gate | Result |
|------|--------|
| MFE `yarn build` | **PASS** (size-limit WARN only · chunk `web-rmms-asset-list` emitted) |
| BE `dotnet build` Linm.RMMS.WebService.sln | **PASS** (0 warning / 0 error) |
| migration / entity / invent write | **none** (SA) |
| Step 4b | dual `mobile-bff` route on `RoadAssetsBffController` · DOMAIN-MAP row exists |
| Kind B / ui-schema / filter-bar | **WAIVE** (phone list · DES-GRID N/A) |

## Screens wired

| id | Zone | Notes |
|----|------|-------|
| AL-00 | frame | phone max-width 430 |
| AL-01 | chrome | back → Hub |
| AL-02 | pageTitle | assetList.title · useFormOptions |
| AL-03 | search | server `?search=` debounce |
| AL-04/06 | listRow | GET road-assets · tap → `?id=` |
| AL-05 | empty/error | toast · retry · no alert |
| AL-10 | detail chrome | detailBack clears `id` |
| AL-11 | detail fields | code/type/route/km/lat/lng · hide null |
| AL-12 | pinMap | `/gis?focus={id}` · disable no coords |
| AL-13 | detail 404 | retry GET /{id} |
| guest | auth gate | → Home login |

## APIs wired (Live)

| Method · Path | UI |
|---------------|-----|
| `GET …/asset/road-assets?search&page&pageSize[&type]` | AL-04 list · type passthrough from KCHT |
| `GET …/asset/road-assets/{id}` | AL-11 detail RO |
| nav `/gis?focus={id}` | AL-12 pin · no geojson load |

## Files (FE)

- `src/pages/WebRmmsAssetList/**` — layout · AssetListPage · paths · lookupStatic · styles · aliasRedirects
- `src/services/assetList/{types,endpoint}.ts`
- `src/index.tsx` · route `/web-rmms-asset-list` · aliases `/asset/list` · `/asset/:id` (Guid only)
- `src/pages/WebRmmsAssetHub/paths.ts` · list → STD
- `src/pages/WebRmmsAssetKcht/paths.ts` · peer list → STD + `?type=`
- `src/dev/devRoutes.ts`

## BE Step 4b

- DOMAIN-MAP `web-rmms-asset-list` → Asset (CLOSED · cite Gis)
- **no** new API controller / entity / migration
- Web `RoadAssetsBffController` stays `web-bff` only
- Mobile list+detail: `Linm.RMMS.Mobile.Bff` `RoadAssetsMobileController` · **cấm** `[Route("mobile-bff/…")]` trên Web BFF

## Tasks

| id | status |
|----|--------|
| T-01 · T-02 · T-03 · T-04 · T-05 | **done** |
| T-06 | pending · queued `/agent-qa*` |
| T-07 | pending · `/agent-review` |

## Debt / notes

- Kind B catalog grid / LinCatalogUiSchemaEditorModal **WAIVE** (phone list)
- Peer stubs `/asset/collect|ai|adjust` still hub-nav only · Guid gate on `/asset/:id`
- GPS display stored Lat/Lng only · no geolocation · no PUT

## Handoff

- compact: `specs/web-rmms-asset-list/handoff/dev-compact.md`
- next: `/agent-qa*` (e2eQa ON) · roleOnly stop (GAP-PKT-ROLE-01)
