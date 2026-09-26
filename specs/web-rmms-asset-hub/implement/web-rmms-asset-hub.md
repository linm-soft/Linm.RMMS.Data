# Implement — web-rmms-asset-hub

| Field | Value |
|-------|-------|
| feature | `web-rmms-asset-hub` |
| role | `dev` · `/agent-dev` |
| status | `done` |
| packKind | `list` (phone Hub · Kind B **WAIVE**) |
| changeScope | `new_page` |
| formPattern | Mobile Hub / full · phone 430 · no master · no CRUD · DES-LEAVE N/A |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-asset-hub` |
| mfeStdUrl | `http://localhost:9301/web-rmms-asset-hub` |
| nativeAlias | `/asset` → hub |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Asset cite Integration/AiVision/Gis · **cấm ERP.*** |
| BFF | `mobile-bff/api/v1` :5202 · Live 3 GET · **no** AssetHub controller |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| updatedAt | `2026-09-25T13:45:00.000Z` |
| taskId | `task_e1a6313e` |
| demo | **N/A** · Live-only · **REMOVED** me* / feedback / cam-view |
| e2eQa | queued `/agent-qa*` — **cấm** e2e ở Dev |
| GAP-F-AHUB-01 | accept · wallet title = first road-route · no invent org API |

## Build

| Gate | Result |
|------|--------|
| MFE `yarn build` | **PASS** (size-limit WARN only · chunk `web-rmms-asset-hub` emitted) |
| BE `dotnet build` RMMS.Service.Bff | **PASS** (0 warning / 0 error) |
| migration / entity / Hub controller | **none** (SA) |
| Step 4b | BFF `mobile-bff` alias on Live 3 proxies only |
| Kind B / ui-schema / filter-bar | **WAIVE** (phone Hub tiles) |

## Screens wired

| id | Zone | Notes |
|----|------|-------|
| AH-00 | `/web-rmms-asset-hub` frame | phone max-width 430 |
| AH-01 | chrome | back → Home · title · refresh |
| AH-02 | wallet.eyebrow | LOOKUP_STATIC / useFormOptions |
| AH-03 | wallet.title | GET road-routes/search (first row) |
| AH-04 | wallet.subtitle | GET asset-types → totalCount |
| AH-05 | tile×5 | nav `/asset/kcht\|list\|collect\|ai\|adjust` |
| AH-06 | rowGis | nav `/gis` · no geojson |
| AH-07 | aiPending | GET candidates Draft · empty hide · tap → `/asset/ai` |
| peer | Home gridAsset / walletAsset | paths.asset → hub |

## APIs wired (Live)

| Method · Path | UI |
|---------------|-----|
| `GET …/integration/road-routes/search?page=1&pageSize=1` | AH-03 title |
| `GET …/integration/asset-types?page=1&pageSize=1` | AH-04 count |
| `GET …/ai-vision/asset-candidates?status=Draft&page=1&pageSize=20` | AH-07 list |

## Files (FE)

- `src/pages/WebRmmsAssetHub/**` — layout · AssetHubPage · paths · lookupStatic · styles
- `src/services/assetHub/{types,endpoint}.ts`
- `src/index.tsx` · route `/web-rmms-asset-hub` · alias `/asset`
- `src/pages/WebRmmsHome/paths.ts` · asset → hub
- `src/dev/devRoutes.ts` · `mfe.routes.json`

## BE Step 4b

- DOMAIN-MAP `web-rmms-asset-hub` → Asset (CLOSED · no change)
- **no** new API controller / entity / migration
- Web BFF controllers stay `web-bff` only
- Mobile routes on `Linm.RMMS.Mobile.Bff`: `RoadRoutesMobileController` · `AssetTypesMobileController` · `AiVisionCandidatesMobileController` · **cấm** alias `mobile-bff` trên Web BFF

## Tasks

| id | status |
|----|--------|
| T-01 · T-02 · T-03 · T-04 · T-05 | **done** |
| T-06 | pending · queued `/agent-qa*` |
| T-07 | pending · `/agent-review` |
| WAIVE | LIST/FILTER/CFG/UISCHEMA/FORM/LEAVE (phone Hub) |

## Debt

- LOOKUP_STATIC until OMS seed `web-rmms-asset-hub`
- Peer deep `/asset/kcht|list|collect|ai|adjust` · `/gis` = nav-only until sibling MFE mounts
- Wallet org live name = GAP-F-AHUB-01 (road-routes first row)

## Next

`/agent-qa*` · roleOnly stop (**GAP-PKT-ROLE-01**) · e2eQa=ON
