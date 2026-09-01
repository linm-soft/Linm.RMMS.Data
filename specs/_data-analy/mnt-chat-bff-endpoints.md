# BFF endpoints — mnt-chat (mobile · Trao đổi công việc)

| | |
|---|---|
| feature | `mnt-chat` |
| bff | `Linm.RMMS.Mobile.Bff` · `MobileApiProxyController` catch-all |
| prefix | `mobile-bff/api/v1` |
| downstream | `ApiBase` → `RMMS.Service.Api` · Maintenance · `WorkOrdersController` |
| source | CTX `mnt-chat.md` · WebService messages · DOMAIN-MAP Maintenance |
| **cấm** | invent `api/v1/mnt-chat` · ERP.* · app `:5101` · DbContext trên Mobile.Bff |
| status | **confirmed** |
| taskId | `task_e0e94a4c` |

App `ApiClient.base` = `{BffBase}/mobile-bff/api/v1`. Path **không** lặp prefix.

## Như thế nào

| Tầng | Repo / package | App có biết? |
|------|----------------|--------------|
| UI | iOS + Android | Có — `{BffPrefix}/maintenance/work-orders/{id}/messages` |
| BFF host | `Linm.RMMS.Mobile.Bff` | Có — catch-all proxy |
| Domain API | `RMMS.Service.Api` · Maintenance | **Không** — proxy rewrite |
| Dedicated MntChatController | **không** | **cấm invent** |

## Table — live Message contract

| Action / zone | Method | `{BffPrefix}` path | BFF | Downstream | Source | Gap |
|---------------|--------|--------------------|-----|------------|--------|-----|
| List messages | GET | `maintenance/work-orders/{id}/messages?type=message` | proxy | `WorkOrdersController.GetMessages` | live | — |
| Send message | POST | `maintenance/work-orders/{id}/messages` | proxy | `WorkOrdersController.CreateMessage` | body `{ content, type:"message" }` | — |
| Prefetch WO (opt) | GET | `maintenance/work-orders/{id}` | proxy | GetById | header seed OK without | OUT |

## Verify live (không invent)

| Check | Result |
|-------|--------|
| `WorkOrdersController` messages | GET + POST `api/v1/maintenance/work-orders/{id}/messages` **PRESENT** |
| Web BFF forward | `WorkOrdersBffController` GET/POST messages **PRESENT** |
| Mobile.Bff | catch-all → ApiBase — **đủ** · **cấm** DbContext |
| Entity | `WorkOrderMessageEntity` · `rmms_work_order_messages` |
| `api/v1/mnt-chat` | **không** — **cấm invent** |
| DOMAIN-MAP | Maintenance · **cấm** ERP.* |
| Step 4b | **N/A** — endpoint Signed · no new BE invent this turn |

## Cấm

- App biết RMMS `:5101` trực tiếp
- Invent MntChatController / path trên Mobile.Bff
- Fake POST 200 / fake thread
- Bind `web-bff` / `mfeStdUrl`
- SignalR start from kit chat (GAP-MSG-HUB-01 DEFER)

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | `2026-09-01T09:35:00.000Z` |
| versionGate | ok |
| contentHash | sha256:mnt-chat-mobile-bff-20260901 |
| taskId | `task_e0e94a4c` |

---
<!-- Version meta: skillId=agent-data-analy-mobile · qaFix author GAP-SA-BFF-MISS-01 -->
