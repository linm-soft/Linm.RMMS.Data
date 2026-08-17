# Implement — its-anpr-overload

| Field | Value |
|-------|-------|
| feature | `its-anpr-overload` |
| status | `done` |
| skillVersion | `2026.08.16.01` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.16.02` |
| versionGate | `ok` |
| mfeStdRoute | `/its-anpr-overload` |
| mfeStdUrl | `http://localhost:9303/its-anpr-overload` |
| updatedAt | `2026-08-17T10:00:00.000Z` |

## Build

| Gate | Result |
|------|--------|
| MFE `yarn build` | **PASS** (webpack size warnings only) |
| BE `dotnet build Linm.RMMS.WebService.sln` | **PASS** 0 errors |

## FE paths

- `src/demo/itsAnprStore.ts`
- `src/services/itsAnpr/*`
- `src/pages/ItsAnprOverloadListPage/*`
- `src/index.tsx` routes `/its-anpr-overload` + `/ai-vision/its-anpr-overload`
- `src/dev/devRoutes.ts`

## BE paths

- Entity `AiVisionAnprEventEntity` · table `rmms_ai_vision_anpr_events`
- DTOs `AnprEventDtos.cs`
- `AiVisionAnprEventsController` · Service · BFF
- Migration `20260817120000_Schema_RmmsAiVisionAnprEvents`
- DOMAIN-MAP slug `its-anpr-overload`

## Tasks

| id | status |
|----|--------|
| T-UI-LIST-01 | done |
| T-UI-FORM-01 | done |
| T-UI-ACT-01 | done |
| T-BE-CRUD-01 | done |
| T-BE-HITL-01 | done |
| T-MIG-01 | done |
| T-BFF-01 | done |

## SSOT re-review

| Check | Result |
|-------|--------|
| 1× LinPageLayout | OK |
| LinCatalogDataGrid + resize | OK |
| LinCatalogListPagination | OK |
| No AI badge header | OK |
| No window.confirm | OK |
| Local fallback store | OK |

## Version meta

skillId=agent-dev · skillVersion=2026.08.16.01 · versionGate=ok

---
<!-- Version meta: skillVersion=2026.08.16.01 · schemaVersion=1 · workflowVersion=2026.08.16.02 · versionGate=ok -->
