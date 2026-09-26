# Implement — web-rmms-asset-ai

> Status: **done** · writtenAt `2026-09-25T16:15:00.000Z` · task `task_e57c44e0`  
> skillVersion: `2026.09.05.03` · packKind: `list` · autoApprove: ON  
> mfeStdUrl: `http://localhost:9301/web-rmms-asset-ai`

| | |
|--|--|
| Feature | `web-rmms-asset-ai` |
| Title | Camera AI và HITL |
| Role | `dev` · `/agent-dev` |
| changeScope | `new_page` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-asset-ai` · HITL `/web-rmms-asset-ai/hitl/:id` |
| nativeAlias | `/asset/ai` · `/asset/ai/hitl/:id` |
| be | Mobile.Bff `:5202` `mobile-bff/api/v1/ai-vision/**` · **Step 4b skip** · no new API |
| DES-GRID | N/A phone |
| build | `yarn build` **PASS** (webpack 5.111.1 · chunk `web-rmms-asset-ai`) |

## Done (T-*)

| id | Result |
|----|--------|
| T-01 | Route + layout AA-00 · navBack Hub · aliases · Hub tile → STD |
| T-02 | Detect AA-01…05 · photo upload Live · GPS Acc≤30 gate · RouteId* · trip opt · useFormOptions |
| T-03 | Nearby AA-07 · Detect/Cancel AA-08/09 · POST detect-assets → Draft → HITL · **no** auto-confirm |
| T-04 | HITL AA-10…14 · GET candidate · score SHOW % · pin local drag · confirm/dismiss · DES-LEAVE |
| T-05 | BFF clients `assetAiEndpoint` · toast · Android 1-1 zones · labels `assetAi.*` |
| T-BE | **N/A** — Mobile.Bff `AiVisionCandidatesMobileController` already Live |

## Files (MFE)

- `src/pages/WebRmmsAssetAi/*` — layout · Detect · HITL · paths · lookupStatic · styles · aliases
- `src/services/assetAi/{types,endpoint}.ts`
- `src/index.tsx` · `src/dev/devRoutes.ts`
- Hub: `paths.ai` → `/web-rmms-asset-ai` · pending → `hitl/:id`

## APIs (Mobile.Bff)

- `POST ai-vision/uploads/init` + PUT + `complete`
- `GET integration/road-routes/search` · `GET patrol/sessions`
- `GET ai-vision/asset-candidates/nearby`
- `POST ai-vision/detect-assets`
- `GET ai-vision/asset-candidates/{id}` · `POST …/confirm` · `POST …/dismiss`

## Gates

- List/grid Kind B: **N/A** phone (DES-GRID)
- Form: Mobile full ≤430 · LeaveConfirmModal · cấm native confirm · cấm ERP.*
- Build HARD: **PASS**

## Debt / notes

- Pin lat/lng local-only (note on confirm/dismiss) — no PUT candidate GPS
- Score SHOW không gate CTA (Design SCORE-01)
- E2E: queued `/agent-qa*` — **cấm** e2e ở Dev

## nextSlash

`/agent-qa` · roleOnly stop (GAP-PKT-ROLE-01)
