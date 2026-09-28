# Implement — web-rmms-asset-ai

> Status: **done** · writtenAt `2026-09-27T17:20:00.000Z` · task `task_9f56dd9a`  
> skillVersion: `2026.09.05.03` · packKind: `list` · autoApprove: ON  
> contentHash: `sha256:e223304b3658e8067766aed729e36988d54f1df8ad38ca953b2e176e63c9594c`  
> mfeStdUrl: `http://localhost:9301/tai-san/ai`

| | |
|--|--|
| Feature | `web-rmms-asset-ai` |
| Title | Camera AI + HITL — Pattern B detect + SearchInput route |
| Role | `dev` · `/agent-dev` |
| changeScope | `edit_page` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/tai-san/ai` · HITL `/tai-san/ai/hitl/:id` |
| nativeAlias | `/asset/ai` · `/asset/ai/hitl/:id` (redirect only · **cấm** native edit) |
| be | Mobile.Bff `:5202` `mobile-bff/api/v1` · domain **AiVision** · **Step 4b skip** · T-BE **N/A** |
| DES-GRID | N/A phone |
| build | MFE `yarn build` **PASS** · BE `dotnet build` WebService.sln **PASS** |

## Done (T-*)

| id | Result |
|----|--------|
| T-01…T-05 | Prior ship keep — route `/tai-san/ai` · Live BFF · zones AA-* · HITL busy-only · score SHOW % · no auto-confirm |
| T-EDIT | Pattern B: drop `disabled={!canDetect}` → `disabled={detecting}` only · validationAttempted banner photo+route+GPS Acc≤30 · GPS deny **không** khóa CTA trước · SearchInput `ROAD_ROUTE_LOOKUP_CONFIG` Live · **cấm** seed / select search · miss=`--` · sessions prefill keep · useFormOptions · DES-LEAVE |
| T-BE | **N/A** — no new API / entity / migration (SA) · verify-only `dotnet build` PASS |
| T-QA | pending — queued `/agent-qa*` · **cấm** e2e ở Dev |
| T-REV | pending — after QA |

## Files (MFE · T-EDIT)

- `src/pages/WebRmmsAssetAi/AssetAiDetectPage.tsx` — Pattern B + SearchInput
- `src/pages/WebRmmsAssetAi/lookupStatic.ts` — error.photoRequired / routeRequired / bannerDismiss
- `src/pages/WebRmmsAssetAi/styles.module.css` — bannerList / fieldError
- HITL `AssetAiHitlPage.tsx` — keep busy-only · score SHOW % (no change required)

## APIs (Mobile.Bff · reuse)

- `POST ai-vision/uploads/init` + PUT + `complete`
- `GET integration/road-routes/search` · `GET patrol/sessions`
- `GET ai-vision/asset-candidates/nearby`
- `POST ai-vision/detect-assets`
- `GET ai-vision/asset-candidates/{id}` · `POST …/confirm` · `POST …/dismiss`

## Gates

- List/grid Kind B: **N/A** phone (DES-GRID / filterBar)
- Form: Mobile full ≤430 · Pattern B · SearchInput · LeaveConfirmModal · cấm native confirm · cấm ERP.*
- Build HARD: MFE **PASS** · BE **PASS** (no BE write)

## Debt / notes

- Pin lat/lng local-only (note on confirm/dismiss) — no PUT candidate GPS
- Score SHOW không gate Confirm/Dismiss
- E2E Pattern B + SearchInput: queued `/agent-qa*`

## nextSlash

`/agent-qa` · roleOnly stop (GAP-PKT-ROLE-01)
