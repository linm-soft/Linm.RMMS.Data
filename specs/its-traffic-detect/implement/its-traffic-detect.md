# Implement — its-traffic-detect

| Field | Value |
|-------|-------|
| feature | `its-traffic-detect` |
| skillVersion | `2026.08.16.01` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.16.02` |
| versionGate | `ok` |
| status | `done` |
| updatedAt | `2026-08-17T10:20:00.000Z` |

## FE (`Linm.Web.RMMS.AiVision`)

| Area | Path |
|------|------|
| Page | `src/pages/ItsTrafficDetectListPage/*` |
| Service | `src/services/itsTrafficDetect/*` |
| Demo store | `src/demo/itsTrafficDetectStore.ts` (seed 4 · radius 10 m) |
| Routes | `/its-traffic-detect` · `/ai-vision/its-traffic-detect` |
| Dev nav | `src/dev/devRoutes.ts` |

S-LIST + S-DETECT + S-MAP · taxonomy `bien_bao`/`coc_tieu` · IdCode `ITS-*` · localStorage fallback · Confirm HITL.

## BE (`Linm.RMMS.WebService` · AiVision)

| Area | Notes |
|------|-------|
| Entity | `AiVisionItsTrafficObjectEntity` → `rmms_ai_vision_its_traffic_objects` |
| Migration | `20260817160000_Schema_RmmsAiVisionItsTrafficObjects` |
| API | `api/v1/ai-vision/its/objects` · `/detect` |
| BFF | `web-bff/api/v1/ai-vision/its/*` |
| DOMAIN-MAP | `its-traffic-detect` → AiVision |

## Build

| Layer | Command | Result |
|-------|---------|--------|
| MFE | `yarn build` @ AiVision | **PASS** exit 0 (size warnings only · no TS/webpack errors) |
| BE | `dotnet build Linm.RMMS.WebService.sln -c Release` | **PASS** 0 error 0 warning |

## Chrome / SSOT

- No AI badge on header/`beforeToolbar`
- LinCatalogDataGrid + LinCatalogListPagination
- Nearby radius **10 m** (≠ ai-asset-detect 25 m)
