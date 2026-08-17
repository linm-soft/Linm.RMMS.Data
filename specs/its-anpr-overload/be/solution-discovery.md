# Solution discovery — its-anpr-overload

> Status: **confirmed** (`solution_confirm=approve` · autopilot · autoApprove=ON)

| Field | Value |
|-------|-------|
| feature | `its-anpr-overload` |
| packKind | `ai` |
| status | `confirmed` |
| domain_map | **AiVision** · kebab `ai-vision` · slug `its-anpr-overload` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/ai-vision/anpr/events` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.AiVision` · `/its-anpr-overload` |
| sa_tz_gate | `tz_required` |
| sa_xco_gate | `xco_get_only` |
| sa_shared_table | `share_tenant` |
| solution_confirm | **approve** |
| skillVersion | `2026.08.15.15` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.16.02` |
| versionGate | `ok` |
| updatedAt | `2026-08-17T09:35:00.000Z` |

## Path guard

**Only** `Linm.RMMS.WebService` / Domains/AiVision. **Cấm** ERP.* · Domains/Master · `api/v1/rmms/*`.

Spec P2 `/its/anpr/*` → **normalize** `api/v1/ai-vision/anpr/events`.

## Ownership

| Layer | Path |
|-------|------|
| API | `api/src/RMMS.Service.Api/Domains/AiVision/` |
| DTOs | `api/domains/ai-vision/LINM.RMMS.AiVision.Models/DTOs/AnprEventDtos.cs` |
| Entity | `AiVisionAnprEventEntity` → `rmms_ai_vision_anpr_events` |
| BFF | `web-bff/api/v1/ai-vision/anpr/events` proxy only |
| Migration | `20260817120000_Schema_RmmsAiVisionAnprEvents` |

## FormMode ↔ API

| Surface | FormMode | Endpoint |
|---------|----------|----------|
| List | — | GET `/anpr/events` |
| init-data | — | GET `/anpr/events/init-data` |
| View/Edit/Copy | view/edit/copy | GET `/{id}` |
| Create/Copy save | create/copy | POST `/` |
| Edit save | edit | PUT `/{id}` |
| Soft-delete | — | DELETE `/{id}` |
| Simulate | — | POST `/simulate` |
| Lookup | — | POST `/{id}/lookup` |
| Confirm HITL | — | POST `/{id}/confirm` → Incident stub `VI-ANPR-*` |
| Dismiss HITL | — | POST `/{id}/dismiss` |

## Handoff → TL

T-UI-LIST · T-UI-FORM · T-UI-ACT · T-BE-CRUD · T-BE-INIT · T-MIG · T-BFF · T-PERM · route_confirm `/its-anpr-overload`

## Version meta

skillId=agent-sa · skillVersion=2026.08.15.15 · versionGate=ok

---
<!-- Version meta: skillVersion=2026.08.15.15 · schemaVersion=1 · workflowVersion=2026.08.16.02 · versionGate=ok -->
