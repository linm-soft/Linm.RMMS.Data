# Team lead — tasks — its-anpr-overload

| Field | Value |
|-------|-------|
| feature | `its-anpr-overload` |
| status | `confirmed` |
| changeScope | `new_page` |
| packKind | `ai` |
| route_confirm | **route_a** `/its-anpr-overload` (+ alias `/ai-vision/its-anpr-overload`) |
| skillVersion | `2026.08.15.17` |
| schemaVersion | `2` |
| workflowVersion | `2026.08.16.02` |
| versionGate | `ok` |
| updatedAt | `2026-08-17T09:40:00.000Z` |

## Source

| Field | Value |
|-------|-------|
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.AiVision` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` |
| domain | AiVision |
| api | `api/v1/ai-vision/anpr/events` |
| bff | `web-bff/api/v1/ai-vision/anpr/events` |
| mfeStdRoute | `/its-anpr-overload` |
| mfeStdUrl | `http://localhost:9303/its-anpr-overload` |
| devSlash | `/agent-dev` (HITL patterns from ai-detect) |

## Tasks

| id | title | DoD |
|----|-------|-----|
| T-CTX-01 | Context + DOMAIN-MAP slug | slug mapped AiVision |
| T-PERM-01 | Permission codes stub | anpr.events.* |
| T-UI-LIST-01 | Catalog A–D shell | LinPageLayout · grid · pagination · no AI badge |
| T-UI-FORM-01 | Kind D slideout C/E/V/Copy | footer only · LeaveConfirm |
| T-UI-ACT-01 | Simulate · Lookup · Confirm · Dismiss | Modal/slideout · no window.confirm |
| T-UI-UX-01 | Constitution | list_parity · flex+skeleton |
| T-BE-CRUD-01 | Events CRUD | list/get/create/update/delete |
| T-BE-INIT-01 | init-data | cameras · statuses |
| T-BE-HITL-01 | lookup/confirm/dismiss/simulate | rule engine |
| T-MIG-01 | Migration anpr_events | table + indexes |
| T-BFF-01 | BFF proxy | forward only |
| T-QA-01 | Scenarios CRUD+HITL | static review |

## Version meta

skillId=agent-team-lead · skillVersion=2026.08.15.17 · versionGate=ok

---
<!-- Version meta: skillVersion=2026.08.15.17 · schemaVersion=2 · workflowVersion=2026.08.16.02 · versionGate=ok -->
