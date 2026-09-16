# BFF endpoints — field-reflect (mobile · Ghi nhận hư hỏng)

| | |
|---|---|
| feature | `field-reflect` |
| bff | `Linm.RMMS.Mobile.Bff` · `MobileApiProxyController` catch-all |
| prefix | `mobile-bff/api/v1` |
| downstream | `ApiBase` → RMMS.Service.Api · Patrol · AiVision · Incident · Integration |
| changeScope | `edit_page` · gap=`field_reflect_sessions_live_only` |
| taskId | `task_d6e72d87` |
| source | CTX `field-reflect.md` · controllers cite · **cấm invent** |
| **cấm** | invent `api/v1/field-reflect` · ERP.* · app `:5101` · DbContext BFF |

App `ApiClient.base` = `{BffBase}/mobile-bff/api/v1`.

## Table — `#sc-field-reflect` · `DES-MOB-FIELD-REFLECT`

| Action / zone | Method | `{BffPrefix}` path | BFF | Downstream | Source | Gap |
|---------------|--------|--------------------|-----|------------|--------|-----|
| Prefill ca / tuyến active | GET | `patrol/sessions` | proxy | `PatrolSessionsController.GetList` | CTX | **GAP-MOB-FIELD-SESS-01** live-only · fail/empty → empty+toast · **cấm** itemsOrDemo |
| Catalog loại TS | GET | `integration/asset-types` | proxy | `AssetTypesController` | CTX asset-kcht-32 | optional |
| Optional media init | POST | `ai-vision/uploads` | proxy | `AiVisionUploadsController` | live | GAP-MOB-FIELD-MEDIA-01 Accept |
| Optional media object | PUT | `ai-vision/uploads/{id}/object` | proxy | uploads | live | optional |
| Nhận diện sau ảnh | POST | `ai-vision/detect` | proxy | `AiVisionOpsController.Detect` | CTX | GAP-MOB-CAM-DETECT-01 |
| Tạo vấn đề | POST | `incident/incidents` | proxy | `IncidentsController.Create` | CTX incident | |
| GPS / Camera / Kind / Checklist / Draft | — | — | — | device / local / offline | | không API |

## Query (sessions)

`search` · `status` · `route` · `page` · `pageSize`  
P1: filter client `Status=Đang tuần` · `page=1` · `pageSize=50`.

### Client outcome (HARD · edit)

| Outcome | UI |
|---------|-----|
| GET OK + active session | bind `routeStamp` / Route·Km |
| GET OK + empty / no active | empty location · toast «Không có ca đang tuần» |
| GET fail / network / 4xx | empty location · toast «Không tải được ca tuần» · **cấm** demoToday |

## DTO bind (unchanged paths)

`DetectAiVisionRequest` / `AiVisionDetectionDto` · `CreateIncidentRequest` — giữ map prior analy. **Cấm** fork DTO.

## Có trên domain — OUT slug

`cam-patrol` · `cameras*` · `ai-vision/detect-assets` · `#sheet-incident` / `inc-form`.

## Verify live

| Check | Result |
|-------|--------|
| `GET api/v1/patrol/sessions` | **Live** · app live-only |
| `GET api/v1/integration/asset-types` | **Live** |
| `POST api/v1/ai-vision/detect` | **Live stub** |
| `POST api/v1/ai-vision/uploads` | **Live** |
| `POST api/v1/incident/incidents` | **Live** |
| `api/v1/field-reflect` | **không** |

## Step 4b

**N/A this edit** — sessions client behavior only · **cấm** data-analy migration.

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.09.05.03 |
| schemaVersion | 2 |
| workflowVersion | 2026.09.05.03 |
| rulesVersion | 2026.09.05.8 |
| generatedAt | 2026-09-12T10:33:53.000Z |
| versionGate | rechecked |
| contentHash | sha256:43744be6c3dc+field-reflect-bff-sess-20260912 |
| bffContentHash | sha256:field-reflect-mobile-bff-20260912 |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.09.05.03 schemaVersion=2 workflowVersion=2026.09.05.03 rulesVersion=2026.09.05.8 versionGate=rechecked -->
