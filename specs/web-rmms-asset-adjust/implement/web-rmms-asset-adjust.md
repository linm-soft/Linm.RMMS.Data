# Implement — web-rmms-asset-adjust

| Field | Value |
|-------|-------|
| feature | `web-rmms-asset-adjust` |
| role | `dev` · `/agent-dev` |
| status | `done` |
| packKind | `list` (phone list+confirm · Kind B **WAIVE**) |
| changeScope | `new_page` |
| formPattern | Mobile list + confirm · phone 430 · no ERP Modal · no PUT P1 |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-asset-adjust` |
| mfeStdUrl | `http://localhost:9301/web-rmms-asset-adjust` |
| nativeAlias | `/asset/adjust` → STD |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Asset · **cấm ERP.*** |
| BFF | `mobile-bff/api/v1` :5202 · Live GET list + DELETE soft · **cấm** invent AdjustController |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| updatedAt | `2026-09-25T17:00:00.000Z` |
| taskId | `task_fc91c814` |
| demo | **N/A** · Live-only · **REMOVED** me* / feedback / cam-view |
| e2eQa | queued `/agent-qa*` — **cấm** e2e ở Dev |

## Build

| Gate | Result |
|------|--------|
| MFE `yarn build` | **PASS** (size-limit WARN only · chunk `web-rmms-asset-adjust` emitted) |
| BE `dotnet build` Linm.RMMS.WebService.sln | **PASS** (1 pre-existing warning · 0 error) |
| migration / entity / invent write | **none** (SA) |
| Step 4b | **skip** — reuse Live `road-assets` GET+DELETE · DOMAIN-MAP row exists |
| Kind B / ui-schema / filter-bar | **WAIVE** (phone list · DES-GRID N/A) |

## Screens wired

| id | Zone | Notes |
|----|------|-------|
| AA-00 | frame | phone max-width 430 |
| AA-01 | chrome | back → Hub |
| AA-02 | pageTitle | assetAdjust.title · useFormOptions |
| AA-03 | search | server `?search=` debounce |
| AA-04 | listRow | GET road-assets · Code/Type/Route · **no** Lat/Lng |
| AA-05 | empty/error | toast · retry · no alert |
| AA-06 | action.remove | → AA-08 confirm |
| AA-07 | action.edit | nav peer list `?id=` · no PUT |
| AA-08 | confirmDelete | soft DELETE · toast · reload |
| guest | auth gate | → Home login |

## APIs wired (Live)

| Method · Path | UI |
|---------------|-----|
| `GET …/asset/road-assets?search&page&pageSize` | AA-04 list · active |
| `DELETE …/asset/road-assets/{id}` | AA-08 soft-delete |
| nav `/web-rmms-asset-list?id={id}` | AA-07 edit peer · no PUT |

## Files (FE)

- `src/pages/WebRmmsAssetAdjust/**` — layout · AssetAdjustPage · paths · lookupStatic · styles · aliasRedirects
- `src/services/assetAdjust/{types,endpoint}.ts`
- `src/index.tsx` · route `/web-rmms-asset-adjust` · alias `/asset/adjust` (before `/asset/:id`)
- `src/pages/WebRmmsAssetHub/paths.ts` · adjust → STD
- `src/dev/devRoutes.ts` · `mfe.routes.json`

## BE Step 4b

- DOMAIN-MAP `web-rmms-asset-adjust` → Asset (CLOSED)
- **no** new API controller / entity / migration / BFF route invent
- Soft DELETE already on `RoadAssetsController` + BFF proxy

## Tasks

| id | status |
|----|--------|
| T-01 · T-02 · T-03 · T-04 · T-05 | **done** |
| T-06 | pending · queued `/agent-qa*` |
| T-07 | pending · `/agent-review` |

## Debt / notes

- Kind B catalog grid / LinCatalogUiSchemaEditorModal **WAIVE** (phone list)
- GPS / LatLng row **out** P1 · no PUT on adjust
- Soft-delete confirm+toast mandatory · cấm silent/hard

## Handoff

- compact: `specs/web-rmms-asset-adjust/handoff/dev-compact.md`
- next: `/agent-qa*` (e2eQa ON) · roleOnly stop (GAP-PKT-ROLE-01)
