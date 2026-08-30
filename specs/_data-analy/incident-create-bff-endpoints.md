# BFF endpoints — incident-create (mobile · Ghi sự cố)

| | |
|---|---|
| feature | `incident-create` |
| bff | `Linm.RMMS.Mobile.Bff` · `MobileApiProxyController` catch-all |
| prefix | `mobile-bff/api/v1` |
| downstream | `ApiBase` → `RMMS.Service.Api` · Incident · Integration · AiVision · Patrol |
| source | CTX `incident-create.md` · `incident.md` · `IncidentsController` · `AssetTypesController` · `AiVisionOpsController` · demo `#sc-inc-form` |
| **cấm** | invent `api/v1/incident-create` · ERP.* · app `:5101` · DbContext trên BFF |

App `ApiClient.base` = `{BffBase}/mobile-bff/api/v1`.

## Như thế nào (skill step 6)

| Tầng | Repo / package | App có biết? |
|------|----------------|--------------|
| UI | iOS + Android | Có — `{BffPrefix}` |
| BFF host | `Linm.RMMS.Mobile.Bff` | Có — một host |
| Domain API | Incident · Integration · AiVision · Patrol | **Không** — proxy rewrite |
| Dedicated IncidentCreateController | **không** | **cấm invent** |

## Table — `#sc-inc-form` · `DES-MOB-INC-FORM`

| Action / zone | Method | `{BffPrefix}` path | BFF | Downstream | Source | Gap |
|---------------|--------|--------------------|-----|------------|--------|-----|
| Catalog loại TS (pick + checklist host) | GET | `integration/asset-types` | proxy | `AssetTypesController.GetList` / Search | CTX asset-kcht-32 · DOMAIN-MAP | optional Search |
| Prefill ca / tuyến (loc Route-Km) | GET | `patrol/sessions` | proxy | `PatrolSessionsController.GetList` | CTX patrol · optional | filter Đang tuần client |
| Optional media init | POST | `ai-vision/uploads` | proxy | `AiVisionUploadsController` | live | **GAP-MOB-INC-CREATE-MEDIA-01** |
| Optional media object | PUT | `ai-vision/uploads/{id}/object` | proxy | uploads | live | optional |
| Nhận diện sau ảnh | POST | `ai-vision/detect` | proxy | `AiVisionOpsController.Detect` | CTX · peer field-reflect/cam-patrol | detect stub body |
| Tạo vấn đề | POST | `incident/incidents` | proxy | `IncidentsController.Create` | CTX incident · live DTO | bind asset + kind + GPS |
| GPS chốt | — | — | — | Device CL / Fused | location * | **không** API |
| Camera capture | — | — | — | Device camera | PhotoRow | **không** API |
| Checklist ticks | — | — | — | local catalog `asset-kcht-32` | `data-inc-chk` | **GAP-MOB-INC-CREATE-CHK-01** |
| Lưu nháp mất sóng | — | — | — | local → `patrol-offline` | | **không** invent path |
| Kind pills Hư/Mất/Hỏng | — | — | — | local enum → `IncidentType` / Description | | **không** API |
| Severity select | — | — | — | local → `Severity` | | **không** API |

## Query (sessions / asset-types)

**sessions:** `search` · `status` · `route` · `page` · `pageSize` — P1 optional `Status=Đang tuần`.  
**asset-types:** list/search per live controller — bind pick grid + AssetLabel.

## DTO bind (live)

### Create incident (Tạo vấn đề)

`CreateIncidentRequest` (fields live): `Title` · `RouteName` · `IncidentType` · `Status` · `Severity?` · `KmStart?` · `KmEnd?` · `DetectionId?` · `Description?` · `AssetLabel?` · `HasGps` · `RequestedAt` · `ReporterName?` · …

Required validate: `Title` · `RouteName` · `IncidentType` · `Status` · `RequestedAt`.

P1 map từ form + asset + GPS:

| UI | → Create body |
|----|----------------|
| Asset card title/sub | `Title` (prefix) · `AssetLabel` |
| Kind pill Hư/Mất/Hỏng | `IncidentType` (hoặc prefix Description) |
| Severity select | `Severity` |
| Loc Route / Km | `RouteName` · `KmStart` |
| Detection `Id` | `DetectionId` |
| GPS chốt | `HasGps=true` |
| Checklist + mô tả | `Description` (join) P1 |
| Status | `Mới` / `Nháp` theo product convention |
| RequestedAt | device UTC now |

**Cấm** app fork DTO khác BFF table.

## Có trên domain — **không** thuộc slug này

| Method | Path | Ghi |
|--------|------|-----|
| GET/PUT/DELETE | `incident/incidents*` | list/detail/update — `incident-list` / detail |
| POST | `…/assign` · `…/close` | sibling detail — **OUT** |
| Sheet UI | `#sheet-incident` | **OUT** · GAP-MOB-INC-CREATE-SHEET-01 |
| Screen | `#sc-field-reflect` | sibling `field-reflect` — **OUT** |

## Verify live

| Check | Result |
|-------|--------|
| `GET api/v1/integration/asset-types` | **Live** |
| `GET api/v1/patrol/sessions` | **Live** |
| `POST api/v1/ai-vision/detect` | **Live stub** |
| `POST api/v1/ai-vision/uploads` | **Live** |
| `POST api/v1/incident/incidents` | **Live** |
| `api/v1/incident-create` | **không** — **cấm invent** |

## Step 4b

**Pending SA** nếu Signed: media trên Incident · checklist schema API — **cấm** data-analy chạy migration / Step 4b (roleOnly). Ghi GAP · handoff PO → SA.

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | 2026-08-29T00:30:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:incident-create-mobile-bff-20260829 |
| bffContentHash | sha256:incident-create-mobile-bff-20260829 |
| taskId | `task_5f9013dd` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
