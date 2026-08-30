# BFF endpoints — field-reflect (mobile · Ghi nhận hư hỏng)

| | |
|---|---|
| feature | `field-reflect` |
| bff | `Linm.RMMS.Mobile.Bff` · `MobileApiProxyController` catch-all |
| prefix | `mobile-bff/api/v1` |
| downstream | `ApiBase` → `RMMS.Service.Api` · Patrol · AiVision · Incident · Integration |
| source | CTX `field-reflect.md` · `incident.md` · `cam-patrol.md` · `IncidentsController` · `AiVisionOpsController` · `AssetTypesController` · design §5b bước 1 |
| **cấm** | invent `api/v1/field-reflect` · ERP.* · app `:5101` · DbContext trên BFF |

App `ApiClient.base` = `{BffBase}/mobile-bff/api/v1`.

## Như thế nào (skill step 6)

| Tầng | Repo / package | App có biết? |
|------|----------------|--------------|
| UI | iOS + Android | Có — `{BffPrefix}` |
| BFF host | `Linm.RMMS.Mobile.Bff` | Có — một host |
| Domain API | Patrol · AiVision · Incident · Integration | **Không** — proxy rewrite |
| Dedicated FieldReflectController | **không** | **cấm invent** |

## Table — `#sc-field-reflect` · `DES-MOB-FIELD-REFLECT`

| Action / zone | Method | `{BffPrefix}` path | BFF | Downstream | Source | Gap |
|---------------|--------|--------------------|-----|------------|--------|-----|
| Prefill ca / tuyến active | GET | `patrol/sessions` | proxy | `PatrolSessionsController.GetList` | CTX patrol-home · field-reflect | filter Đang tuần client |
| Catalog loại TS (checklist host) | GET | `integration/asset-types` | proxy | `AssetTypesController.GetList` / Search | CTX asset-kcht-32 · DOMAIN-MAP | optional P1 |
| Optional media init | POST | `ai-vision/uploads` | proxy | `AiVisionUploadsController` | live | **GAP-MOB-FIELD-MEDIA-01** |
| Optional media object | PUT | `ai-vision/uploads/{id}/object` | proxy | uploads | live | optional |
| Nhận diện sau ảnh | POST | `ai-vision/detect` | proxy | `AiVisionOpsController.Detect` | CTX · peer cam-patrol | **GAP-MOB-CAM-DETECT-01** body ảnh/GPS |
| Tạo vấn đề | POST | `incident/incidents` | proxy | `IncidentsController.Create` | CTX incident · design §5b | bind kind + detect + GPS |
| GPS chốt | — | — | — | Device CL / Fused | location row | **không** API |
| Camera capture | — | — | — | Device camera | PhotoRow | **không** API |
| Checklist ticks | — | — | — | local catalog `asset-kcht-32` | demo CHK | **GAP-MOB-FIELD-CHK-01** · không invent path |
| Lưu nháp mất sóng | — | — | — | local → `patrol-offline` | | **không** invent path |
| Kind pills Hư/Mất/Hỏng | — | — | — | local enum → `IncidentType` / Description | | **không** API |

## Query (sessions)

`search` · `status` · `route` · `page` · `pageSize`  
Mobile P1: session `Status=Đang tuần` · `page=1` · `pageSize=50`.

## DTO bind (live)

### Detect request (stub hiện tại)

`DetectAiVisionRequest`: `Engine?` · `Note?` (+ mở rộng SA ảnh/GPS khi Signed)  
→ response `AiVisionDetectionDto`: `Id` · `Code` · `DefectClass` · `Score` · `Severity` · `Lat` · `Lng` · `RouteLabel` · `SectionId` · …

### Create incident (Tạo vấn đề)

`CreateIncidentRequest` (fields live): `Title` · `RouteName` · `IncidentType` · `Status` · `Severity?` · `KmStart?` · `KmEnd?` · `DetectionId?` · `Description?` · `AssetLabel?` · `HasGps` · `RequestedAt` · …

P1 map từ form + detect + GPS:

| UI | → Create body |
|----|----------------|
| Kind pill Hư/Mất/Hỏng | `IncidentType` (hoặc prefix Description) |
| Nhận diện / DefectClass | `Title` · `AssetLabel` |
| Mức / Severity | `Severity` |
| Route / Km chốt | `RouteName` · `KmStart` |
| Detection `Id` | `DetectionId` |
| GPS chốt | `HasGps=true` |
| Checklist ticks | `Description` (join labels) P1 |
| Status | `Nháp` / `Mới` theo product convention |

**Cấm** app fork DTO khác BFF table.

## Có trên domain — **không** thuộc slug này

| Method | Path | Ghi |
|--------|------|-----|
| Continuous finder confirm | `cam-patrol` flow | sibling — **OUT** |
| CRUD | `cameras*` | web `camera-connect` — **OUT** |
| POST | `ai-vision/detect-assets` | `ai-asset-detect` — **OUT** |
| Sheet | `#sheet-incident` / `inc-form` | sibling form — **OUT** |

## Verify live

| Check | Result |
|-------|--------|
| `GET api/v1/patrol/sessions` | **Live** |
| `GET api/v1/integration/asset-types` | **Live** |
| `POST api/v1/ai-vision/detect` | **Live stub** |
| `POST api/v1/ai-vision/uploads` | **Live** |
| `POST api/v1/incident/incidents` | **Live** |
| `api/v1/field-reflect` | **không** — **cấm invent** |

## Step 4b

**Pending SA** nếu Signed: media trên Incident · mở rộng detect body · checklist schema API — **cấm** data-analy chạy migration / Step 4b (roleOnly). Ghi GAP · handoff PO → SA.

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | 2026-08-29T05:12:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:field-reflect-mobile-bff-20260829 |
| bffContentHash | sha256:field-reflect-mobile-bff-20260829 |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
