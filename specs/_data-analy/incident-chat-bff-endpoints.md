# BFF endpoints — incident-chat (mobile · Trao đổi sự cố)

| | |
|---|---|
| feature | `incident-chat` |
| bff | `Linm.RMMS.Mobile.Bff` · `MobileApiProxyController` catch-all |
| prefix | `mobile-bff/api/v1` |
| downstream | `ApiBase` → `RMMS.Service.Api` · Incident domain |
| source | CTX `incident-chat.md` · `incident.md` · `IncidentsController` · DOMAIN-MAP Incident · demo toast `#i-chat` |
| **cấm** | invent `api/v1/incident-chat` · invent `…/comments` controller · invent CommentDto trên BFF · ERP.* · app `:5101` · DbContext trên BFF |

App `ApiClient.base` = `{BffBase}/mobile-bff/api/v1`. Path **không** lặp prefix.

## Như thế nào (skill step 6)

| Tầng | Repo / package | App có biết? |
|------|----------------|--------------|
| UI | iOS + Android | Có — toast P1 · `{BffPrefix}` khi P2 |
| BFF host | `Linm.RMMS.Mobile.Bff` | Có — một host |
| Domain API | `RMMS.Service.Api` · Incident | **Không** — proxy rewrite |
| Dedicated IncidentChatController | **không** | **cấm invent** |
| Comments endpoint | **không live** | **DEFER P2** |

## Table — P1 toast + P2 DEFER

| Action / zone | Method | `{BffPrefix}` path | BFF | Downstream | Source | Gap |
|---------------|--------|--------------------|-----|------------|--------|-----|
| Toast Trao đổi | — | — | — | local UI | demo `toast('Trao đổi sự cố')` | **không** API P1 |
| Prefetch incident (opt P2) | GET | `incident/incidents/{id}` | proxy | `IncidentsController.GetById` | live | sheet header DEFER |
| List comments | GET | `incident/incidents/{id}/comments` | — | — | CTX DEFER | **GAP-MOB-INC-CHAT-API-01** · **cấm invent** |
| Post comment | POST | `incident/incidents/{id}/comments` | — | — | CTX `incident.md` DEFER | **GAP-MOB-INC-CHAT-API-01** · **cấm invent** |

## Verify live (không invent)

| Check | Result |
|-------|--------|
| `IncidentsController` | `[Route("api/v1/incident/incidents")]` GET list · get · CRUD · assign · close |
| `…/comments` | **không** `[HttpPost("{id}/comments")]` · **không** GET comments |
| Mobile.Bff `incident/*` | proxy catch-all — đủ khi Signed comments sau |
| DOMAIN-MAP | Incident · **cấm** ERP.* |
| `api/v1/incident-chat` | **không** — **cấm invent** |
| Step 4b | **N/A** role data_analy · comments entity = P2 BE |

## Có trên domain — **không** thuộc slug P1 write

| Method | Path | Ghi |
|--------|------|-----|
| GET | `incident/incidents` | list — owner `incident-list` |
| GET | `incident/incidents/{id}` | detail — owner `incident-detail` · opt P2 header |
| POST | `incident/incidents` | create — `incident-create` |
| POST | `…/assign` · `…/close` | detail siblings — **OUT** |
| POST | `…/comments` | **DEFER** — this slug P2 only when Signed |

## Cấm

- App biết RMMS `:5101` trực tiếp  
- Invent CommentController / path trên Mobile.Bff  
- Fake POST 200 / fake thread khi DEFER  
- Bind `web-bff` / `mfeStdUrl`  
- Gộp list/detail/create API vào slug này như in-scope P1 write  

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | `2026-08-29T10:34:45.000Z` |
| versionGate | rechecked |
| contentHash | sha256:incident-chat-mobile-bff-20260829 |
| taskId | `task_9e8d18c5` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
