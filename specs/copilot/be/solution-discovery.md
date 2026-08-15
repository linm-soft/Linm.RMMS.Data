# SA — solution-discovery — copilot

| Field | Value |
|-------|-------|
| feature | `copilot` |
| status | `confirmed` (autopilot · solution_confirm=approve) |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` |
| domain | `Copilot` · kebab `copilot` (DOMAIN-MAP) |
| skillVersion | `2026.08.10.3` |
| schemaVersion | `qldb-workflow-skill-v1` |
| workflowVersion | `2026.08.10.3` |
| versionGate | `ok` |
| updatedAt | `2026-08-15T13:07:00.000Z` |

## 0. Path guard

**Only** `Linm.RMMS.WebService` / `Domains/Copilot` · `api/domains/copilot` · `bff/domains/copilot`.  
**Cấm** `Linm.Web.ERP.WebService` · `Domains/Master` · `api/v1/rmms/*` ERP.

## 1. Decision

| Topic | Choice |
|-------|--------|
| API | `GET/POST/DELETE api/v1/copilot/sessions` · `GET sessions/{id}` · `POST sessions/{id}/archive` |
| Chat | `POST api/v1/copilot/chat` — canned P1 replies (no Azure this pack) |
| Feedback | `POST api/v1/copilot/feedback` |
| Stats | `GET api/v1/copilot/stats` |
| Health | `GET api/v1/copilot/health` (existing) |
| BFF | `web-bff/api/v1/copilot/**` → API |
| Entity | `CopilotSessionEntity` · `CopilotMessageEntity` · `CopilotFeedbackEntity` |
| Tables | `rmms_copilot_sessions` · `rmms_copilot_messages` · `rmms_copilot_feedbacks` |
| Migration | **`Schema_RmmsCopilotSessions`** (`20260815130000_…`) |
| Search | `?search=` + `status` · page/pageSize |
| Soft delete | `IsActive=false` · archive = `Status=archived` |
| Tenant | `HasQueryFilter` CompanyCode |
| Rate | 10 req/min/user (in-memory) · HTTP 429 |
| sa_tz_gate | `tz_required` (UTC store) |
| sa_xco_gate | `xco_get_only` |
| sa_shared_table | `share_tenant` |

## 2. controlHint → API

| Control | API |
|---------|-----|
| SearchInput | `GET …/sessions?search=` |
| Status dropdown | `?status=active\|archived` |
| Composer send | `POST …/chat` |
| Thumb | `POST …/feedback` |
| Phiên mới | `POST …/sessions` |

## 3. Files

| Layer | Path |
|-------|------|
| Entity | `api/shared/.../Entities/Copilot*.cs` |
| DTOs | `api/domains/copilot/.../CopilotSessionDtos.cs` |
| Service/Controller | `api/src/.../Domains/Copilot/` |
| BFF | `bff/domains/copilot/.../CopilotBffController.cs` |
| Migration | `Migrations/20260815130000_Schema_RmmsCopilotSessions.cs` |

## 4. Handoff → TL

T-BE-01/02/03 · T-UI-LIST · T-UI-DRAWER · T-PERM · retry SSOT re-review

---
<!-- Version meta: skillVersion=2026.08.10.3 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.08.10.3 · versionGate=ok -->
