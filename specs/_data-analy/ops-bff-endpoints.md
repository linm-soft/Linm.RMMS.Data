# BFF endpoints — ops (mobile list · Thông báo)

| | |
|---|---|
| feature | `ops` |
| bff | `Linm.RMMS.Mobile.Bff` · `bff/src/RMMS.Mobile.Bff` |
| prefix | `mobile-bff/api/v1` |
| package | proxy `MobileApiProxyController` catch-all |
| downstream | `ApiBase` → `RMMS.Service.Api` · Notification domain |
| source | CTX `ops.md` §3 · `NotificationInboxController` · DOMAIN-MAP Notification |
| **cấm** | invent path · app gọi `:5101` · `api/v1/ops` · DbContext trên BFF · ERP.* |

App `ApiClient.base` = `{BffBase}/mobile-bff/api/v1`. Path **không** lặp prefix.

## Như thế nào (skill step 6)

| Tầng | Repo / package | App có biết? |
|------|----------------|--------------|
| UI | iOS + Android | Có — `{BffPrefix}` |
| BFF host | `Linm.RMMS.Mobile.Bff` | Có — một host |
| Domain API | `RMMS.Service.Api` · Notification | **Không** — proxy rewrite |
| OpsController | **không** | — |

## Table — list `#sc-ops`

| Action / zone | Method | `{BffPrefix}` path | BFF | Downstream | Source | Gap |
|---------------|--------|--------------------|-----|------------|--------|-----|
| Inbox list | GET | `notification/inbox` | proxy | `NotificationInboxController` | `api/v1/notification/inbox` · page/pageSize | list rows |
| Mark read | POST | `notification/inbox/{id}/mark-read` | proxy | same | mark-read | tap unread |
| Overview unread (optional Me badge) | GET | `notification/overview` | proxy | `NotificationOverviewController` | unreadCount | Me/Home badge |
| Nav back | — | — | — | local nav | `me` / `home` | **không** API |

## Query (list) — passthrough

`search` · `status` · `priority` · `type` · `unreadOnly` · `direction` · `orgUnitCode` · `page` · `pageSize`  
Mobile P1: `page=1` · `pageSize=50` · **không** bắt buộc filter UI trên `#sc-ops`.

## Có trên domain — **không** thuộc slug `ops` mobile P1

| Method | Path | Ghi |
|--------|------|-----|
| POST/PUT/DELETE | `notification/inbox` · `…/{id}` | form create/edit — sibling / web |
| POST | `notification/inbox/mark-all-read` | **OUT** demo mobile P1 |
| SignalR | `OpsHub` | P2 DEFER |
| Web `web-bff/api/v1/notification/**` | — | web BFF · mobile = `mobile-bff` proxy |

## Verify live (không invent)

| Check | Result |
|-------|--------|
| `NotificationInboxController` | `api/v1/notification/inbox` GET/POST/PUT/DELETE · mark-read · mark-all-read |
| `NotificationOverviewController` | `api/v1/notification/overview` |
| Mobile.Bff `OpsController` | **không** |
| RMMS `api/v1/ops` | **không** |
| DOMAIN-MAP | Notification · **cấm** ERP.* / Domains/Master |

## Cấm

- App biết RMMS `:5101` trực tiếp  
- DbContext trên Mobile.Bff  
- Invent `GET ops` / mobile-only inbox DTO fork  

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.19.17 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.19.20 |
| rulesVersion | 2026.08.19.23 |
| generatedAt | 2026-08-19T11:50:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:ops-mobile-bff-20260819 |
| bffContentHash | sha256:notification-inbox-proxy-passthrough |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.19.17 schemaVersion=1 workflowVersion=2026.08.19.20 rulesVersion=2026.08.19.23 versionGate=rechecked -->
