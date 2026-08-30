# BFF endpoints — mnt-progress (mobile · Cập nhật trạng thái)

| | |
|---|---|
| feature | `mnt-progress` |
| bff | `Linm.RMMS.Mobile.Bff` · `MobileApiProxyController` catch-all |
| prefix | `mobile-bff/api/v1` |
| package | proxy catch-all |
| downstream | `ApiBase` → `RMMS.Service.Api` · Maintenance domain |
| source | CTX `mnt-progress.md` · `maintenance.md` · live `WorkOrdersController` · `ProgressWorkOrderRequest` · DOMAIN-MAP Maintenance · `docs/bff-route-map.md` `maintenance/*` · demo toast `#i-sync` |
| **cấm** | invent `api/v1/mnt-progress` · invent progress DTO fork · ERP.* · app `:5101` · DbContext trên BFF · `mfeStdUrl` |

App `ApiClient.base` = `{BffBase}/mobile-bff/api/v1`. Path **không** lặp prefix.

## Như thế nào (skill step 6)

| Tầng | Repo / package | App có biết? |
|------|----------------|--------------|
| UI | iOS + Android | Có — `{BffPrefix}` |
| BFF host | `Linm.RMMS.Mobile.Bff` | Có — một host |
| Domain API | `RMMS.Service.Api` · Maintenance | **Không** — proxy rewrite |
| Dedicated Mobile ProgressController | **không** | catch-all proxy · **cấm invent** |

Canonical path: `api/v1/maintenance/work-orders/{id}/progress` — **không** legacy flat `/api/v1/work-orders/{id}/progress` (07-TECH).

## Table — `#sc-mnt-progress` · entry `#i-sync`

| Action / zone | Method | `{BffPrefix}` path | BFF | Downstream | Source | Gap |
|---------------|--------|--------------------|-----|------------|--------|-----|
| Prefill WO header | GET | `maintenance/work-orders/{id}` | proxy | `WorkOrdersController.GetById` | nav arg id | optional nếu nav payload đủ |
| Init status labels (opt) | GET | `maintenance/work-orders/init-data` | proxy | `GetInitData` | status/workType | display map · **GAP-MOB-MNT-PROG-LABEL-01** |
| **Cập nhật tiến độ** | POST | `maintenance/work-orders/{id}/progress` | proxy | `Progress` | `ProgressWorkOrderRequest` | **primary CTA** |
| Hoàn thành (100% / done) | POST | `maintenance/work-orders/{id}/complete` | proxy | `Complete` | `CompleteWorkOrderRequest` | **GAP-MOB-MNT-PROG-DONE-01** |
| Optional media init | POST | `ai-vision/uploads` | proxy | `AiVisionUploadsController` | peer field-reflect | **GAP-MOB-MNT-PROG-MEDIA-01** |
| Optional media object | PUT | `ai-vision/uploads/{id}/object` | proxy | uploads | live | optional |
| GPS chốt | — | — | — | Device CL / Fused | location row | **không** API |
| Camera capture | — | — | — | Device camera | PhotoRow | **không** API |
| Tiến độ % / Ghi chú UI | — | — | — | local form | controlHint | → body fields |
| Nav back | — | — | — | local | `mnt-list` | **không** API |
| Toast ok / err | — | — | — | UI | after POST | **không** API |

## DTO bind (live)

### Progress — `ProgressWorkOrderRequest`

| Field | Required | Mobile P1 bind |
|-------|----------|----------------|
| `ProgressPercent` | yes (0–100) | field «Tiến độ (%)» · BE `ValidateProgress` |
| `Note` | opt | «Ghi chú» · + GPS tóm tắt nếu có (**GAP-MOB-MNT-PROG-GPS-01**) |

### Behavior (service)

| Rule | Effect |
|------|--------|
| WO `status == new` | auto → `in_progress` |
| `ProgressPercent` out of 0–100 | 422 |
| WO missing / inactive | 404 |
| Response | `WorkOrderDto` (updated) → toast `{ProgressPercent}%` · status VN |

### Complete — `CompleteWorkOrderRequest` (cùng slug khi done)

| Field | Mobile P1 |
|-------|-----------|
| `Note` | opt · reuse ghi chú |
| Effect | `status=done` · `ProgressPercent=100` |

**Cấm** app fork DTO khác BFF table · **cấm** invent MediaUrl trên progress body trước khi SA Signed.

## Query

List `maintenance/work-orders` — sibling `mnt-list` — **OUT** slug này.

## Có trên domain — **không** thuộc slug `mnt-progress` P1

| Method | Path | Ghi |
|--------|------|-----|
| GET | `maintenance/work-orders` | list — `mnt-list` |
| POST | `maintenance/work-orders` | create — estimate / web |
| PUT/DELETE | `maintenance/work-orders/{id}` | form web — **OUT** |
| POST | `…/comments` | **DEFER** · `mnt-chat` |
| GET | `maintenance/summary` | Kind E — **OUT** |
| Web | `web-bff/api/v1/maintenance/**` | web BFF · mobile = `mobile-bff` |

## Verify live (không invent)

| Check | Result |
|-------|--------|
| `WorkOrdersController` | `[Route("api/v1/maintenance/work-orders")]` · `[HttpPost("{id}/progress")]` · `complete` |
| `ProgressWorkOrderRequest` | `ProgressPercent` · `Note?` |
| Mobile.Bff `maintenance/*` | proxy catch-all · `docs/bff-route-map.md` |
| DOMAIN-MAP | Maintenance · **cấm** ERP.* |
| Step 4b | **N/A** — reuse Signed endpoints · **cấm** migration ở role analy |

## Cấm

- App biết RMMS `:5101` trực tiếp  
- DbContext trên Mobile.Bff  
- Invent `POST mnt-progress` / mobile-only progress path  
- Bind `mfeStdUrl`  

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | 2026-08-29T06:00:18.000Z |
| versionGate | rechecked |
| contentHash | sha256:mnt-progress-mobile-bff-20260829 |
| bffContentHash | sha256:maintenance-work-orders-progress-proxy-passthrough |
| taskId | `task_1867f892` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
