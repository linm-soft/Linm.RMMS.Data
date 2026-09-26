# Implement — web-rmms-asset-collect

| Field | Value |
|-------|-------|
| feature | `web-rmms-asset-collect` |
| role | `dev` · `/agent-dev` |
| status | `done` |
| packKind | `list` (phone Create form · Kind B **WAIVE**) |
| changeScope | `new_page` |
| formPattern | Mobile full form ≤430 · Create only · no ERP Modal/Slideout · useFormOptions / assetCollect.* |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-asset-collect` |
| mfeStdUrl | `http://localhost:9301/web-rmms-asset-collect` |
| nativeAlias | `/asset/collect` → STD |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Asset · cite Integration/Patrol · **cấm ERP.*** |
| BFF | `mobile-bff/api/v1` :5202 · Live GET lookups + POST create · Source=manual |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| updatedAt | `2026-09-25T15:10:00.000Z` |
| taskId | `task_55cb554c` |
| demo | **N/A** · Live-only · **REMOVED** me* / feedback / cam-view / AI |
| e2eQa | queued `/agent-qa*` — **cấm** e2e ở Dev |

## Build

| Gate | Result |
|------|--------|
| MFE `yarn build` | **PASS** (size-limit WARN only · chunk `web-rmms-asset-collect` emitted) |
| BE `dotnet build` Linm.RMMS.WebService.sln | **PASS** (0 warning / 0 error) |
| migration / entity / invent CollectController | **none** (SA · reuse road-assets) |
| Step 4b | skip write — DOMAIN-MAP row + dual BFF route already exist |
| Kind B / ui-schema / filter-bar | **WAIVE** (phone form · DES-GRID N/A) |

## Screens wired

| id | Zone | Notes |
|----|------|-------|
| AC-00 | frame | phone max-width 430 |
| AC-01 | chrome | back → Hub · DES-LEAVE LeaveConfirmModal |
| AC-02 | name | Text * · Name |
| AC-03 | type | Select * · GET asset-types |
| AC-04 | route | Search+Select * · GET road-routes/search · sessions prefill |
| AC-05 | km | KmFrom * · KmTo opt |
| AC-06 | status | Select * · GET init-data · default `tot` |
| AC-07 | gpsPin | Text RO · navigator.geolocation · deny blocks submit |
| AC-08 | photos | local File/capture · GAP media · no upload |
| AC-09 | submit | POST Source=manual · toast Code · back Hub |
| AC-10 | cancel | → Hub · DES-LEAVE |
| guest | auth gate | → Home login |

## APIs wired (Live)

| Method · Path | UI |
|---------------|-----|
| `GET …/asset/road-assets/init-data` | AC-06 statuses |
| `GET …/integration/asset-types` | AC-03 type Select |
| `GET …/integration/road-routes/search` | AC-04 route Search/Select |
| `GET …/patrol/sessions?status=open` | AC-04 route prefill (opt) |
| `POST …/asset/road-assets` | AC-09 create · Source=`manual` · Lat/Lng required |

## Files (FE)

- `src/pages/WebRmmsAssetCollect/**` — layout · AssetCollectPage · paths · lookupStatic · styles · aliasRedirects
- `src/services/assetCollect/{types,endpoint}.ts`
- `src/index.tsx` · route `/web-rmms-asset-collect` · alias `/asset/collect` (before `:id`)
- `src/pages/WebRmmsAssetHub/paths.ts` · collect → STD
- `src/dev/devRoutes.ts`

## BE Step 4b

- DOMAIN-MAP `web-rmms-asset-collect` → Asset (CLOSED · cite Integration/Patrol)
- **no** new API controller / entity / migration / media path
- `RoadAssetsBffController` · dual mobile-bff + POST already present
- Mobile.Bff :5202 catch-all proxies asset/integration/patrol

## Tasks

| id | status |
|----|--------|
| T-01 · T-02 · T-03 · T-04 · T-05 | **done** |
| T-06 | pending · queued `/agent-qa*` |
| T-07 | pending · `/agent-review` |

## Debt / GAP

- GAP-MOB-ASSET-COLLECT-MEDIA-01 — photos local only · no invent upload
- Kind B WAIVE — phone Create form
- Peer AI/adjust stubs still out of scope

## Version meta

`skillVersion=2026.09.05.03` · `contentHash=sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` · `updatedAt=2026-09-25T15:10:00.000Z`
