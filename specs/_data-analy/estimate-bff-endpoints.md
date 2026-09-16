# BFF endpoints — estimate (mobile · Giao việc xử lý)

| | |
|---|---|
| feature | `estimate` |
| bff | `Linm.RMMS.Mobile.Bff` · `MobileApiProxyController` catch-all |
| prefix | `mobile-bff/api/v1` |
| downstream | `ApiBase` → `RMMS.Service.Api` · AiVision · Maintenance · Incident |
| source | CTX `estimate.md` · `maintenance.md` · live `AiVisionEstimatesController` · `WorkOrdersController` · `IncidentsController.Assign` · demo `#sc-estimate` · `docs/bff-route-map.md` |
| **cấm** | invent `api/v1/estimate` · invent `api/v1/ai-estimate/*` · ERP.* · app `:5101` · DbContext trên BFF · bind `mfeStdUrl` |

App `ApiClient.base` = `{BffBase}/mobile-bff/api/v1`.

## Như thế nào (skill step 6)

| Tầng | Repo / package | App có biết? |
|------|----------------|--------------|
| UI | iOS + Android | Có — `{BffPrefix}` |
| BFF host | `Linm.RMMS.Mobile.Bff` | Có — một host |
| Domain API | AiVision · Maintenance · Incident | **Không** — proxy rewrite |
| Dedicated EstimateController trên Mobile.Bff | **không** | **cấm invent** |

Canonical path (DOMAIN-MAP / live): `api/v1/ai-vision/estimates` — **không** legacy CTX `api/v1/ai-estimate/*`.

## Table — `#sc-estimate` · `DES-MOB-EST`

| Action / zone | Method | `{BffPrefix}` path | BFF | Downstream | Source | Gap |
|---------------|--------|--------------------|-----|------------|--------|-----|
| Prefill header SC | GET | `incident/incidents/{id}` | proxy | `IncidentsController.GetById` | CTX incident · nav arg | optional if nav payload đủ |
| Seed / mở ước lượng | POST | `ai-vision/estimates/from-incident/{incidentId}` | proxy | `AiVisionEstimatesController.FromIncident` | live · DOMAIN-MAP estimate | returns lines |
| Init catalogs (opt) | GET | `ai-vision/estimates/init-data` | proxy | `GetInitData` | unitCatalog · host stubs | optional P1 |
| Get draft | GET | `ai-vision/estimates/{id}` | proxy | `GetById` | live | resume draft |
| Update qty/giá (line) | PUT | `ai-vision/estimates/{id}` | proxy | `Update` | `UpdateEstimateRequest.Lines` | map mobile 1 row → line[0] |
| Lưu nháp | POST | `ai-vision/estimates/{id}/draft` | proxy | `SaveDraft` | live | secondary CTA |
| Confirm ước lượng (opt chain) | POST | `ai-vision/estimates/{id}/confirm` | proxy | `Confirm` | live | after/with giao việc |
| Giao việc → tạo CV | POST | `maintenance/work-orders` | proxy | `WorkOrdersController.Create` | CTX maintenance · demo CV-* | **primary CTA** |
| Gán người trên SC | POST | `incident/incidents/{id}/assign` | proxy | `Assign` | `AssignIncidentRequest` | sync AssigneeName |
| Qty / đơn giá / assignee UI | — | — | — | local | controlHint | **không** API |
| SLA giờ / hạn UI | — | — | — | local default 24h | derived → `SlaHours`/`DueAt` | **GAP-MOB-EST-SLA-01** |
| Nav back | — | — | — | local | `mnt-list` | **không** API |
| Toast ok / err | — | — | — | UI | after POST | **không** API |

## DTO bind (live)

### Prefill / lines — `EstimateDto` + `UpdateEstimateRequest`

Mobile P1 (demo 1 dòng):

| UI | → API |
|----|-------|
| qty | `Lines[0].Qty` |
| unitPrice | `Lines[0].UnitPrice` |
| totalAmount | `Lines[0].Amount` / `TotalAmount` (server recalc OK) |
| fromIncident header | `IncidentId` · `DefectType` · `RouteSection` · from GET incident |

`ItemCode` / `ItemName` / `Unit` P1: từ seed `from-incident` hoặc unitCatalog (BTN/BOC…) — **cấm** invent catalog API khác.

### Giao việc — `CreateWorkOrderRequest`

| Field | Required | Mobile P1 bind |
|-------|----------|----------------|
| `RouteName` | yes | từ SC / estimate `RouteSection` |
| `WorkType` | yes | P1 default e.g. `sua-chua` / init-data — **GAP** nếu thiếu convention |
| `Status` | yes | `new` |
| `DueAt` | yes | field «Hạn xử lý» |
| `SlaHours` | opt | field «Thời hạn xử lý (giờ)» = 24 |
| `AssigneeName` | opt | «Giao cho *» (trim trước `·` hoặc full string) |
| `TeamName` | opt | parse sau `·` nếu có |
| `IncidentId` | opt | SC id/code |
| `Title` | opt | từ defect / SC title |
| `Description` / `Note` | opt | qty · đơn giá · thành tiền text |

Response `WorkOrderDto.Code` → toast `Đã giao việc · {Code} · thời hạn {SlaHours} giờ`.

### Assign SC — `AssignIncidentRequest`

| Field | Mobile P1 |
|-------|-----------|
| `AssigneeName` | same «Giao cho *» |
| `Note` | optional (qty/total) |

**Cấm** app fork DTO khác BFF table.

## Query

**estimates list** (`search` · `status` · `sourceType` · `from`/`to` · `page`/`pageSize`) — **OUT** mobile `#sc-estimate` (web Kind B).  
**work-orders list** — sibling `mnt-list` — **OUT** slug này.

## Có trên domain — **không** thuộc slug mobile P1 UI

| Method | Path | Ghi |
|--------|------|-----|
| GET | `ai-vision/estimates` | web list Kind B — **OUT** |
| POST | `ai-vision/estimates/from-defects` | web toolbar — **OUT** mobile demo |
| DELETE | `ai-vision/estimates/{id}` | soft-delete — **OUT** P1 mobile |
| GET/PUT | `maintenance/work-orders/{id}` | detail — sibling / web |
| POST | `…/progress` · `…/complete` · `…/comments` | `mnt-progress` / P2 / `mnt-chat` — **OUT** |
| Legacy CTX | `api/v1/ai-estimate/*` | **không** live — **cấm invent** |
| Web BFF | `web-bff/api/v1/ai-vision/estimates` | web — mobile = `mobile-bff` proxy |

## Verify live

| Check | Result |
|-------|--------|
| `AiVisionEstimatesController` | **Live** · `api/v1/ai-vision/estimates` CRUD + from-incident + draft + confirm |
| `WorkOrdersController` | **Live** · `api/v1/maintenance/work-orders` POST create |
| `IncidentsController.Assign` | **Live** · `POST …/incidents/{id}/assign` |
| Mobile.Bff `ai-vision/*` · `maintenance/*` · `incident/*` | proxy catch-all · bff-route-map |
| `api/v1/estimate` / `api/v1/ai-estimate` | **không** — **cấm invent** |
| DOMAIN-MAP | estimate → **AiVision** · WO → **Maintenance** · **cấm** ERP.* |

## Step 4b

**Không** chạy ở role data_analy. Schema estimates + work-orders **Signed**. Gaps assignee lookup / WorkType default / SLA policy = handoff PO → SA nếu Signed.

## § Delta (`edit_page` · `task_210a31d6`)

**GAP-MOB-EDIT-01** = UX labelHeader only · **không** đổi path / method / DTO · table trên **giữ** · hash path **unchanged**.

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.29.1 |
| rulesVersion | 2026.08.29.5 |
| generatedAt | 2026-09-01T14:28:40.000Z |
| versionGate | rechecked |
| contentHash | sha256:estimate-mobile-bff-20260829 |
| bffContentHash | sha256:estimate-mobile-bff-20260829 |
| taskId | `task_210a31d6` |
| note | paths hash-skip · meta bump only |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.29.1 rulesVersion=2026.08.29.5 versionGate=rechecked taskId=task_210a31d6 -->
