# BFF endpoints — photo-geo-capture (Mobile · Chụp ảnh kèm tọa độ)

| | |
|---|---|
| feature | `photo-geo-capture` |
| bff | `Linm.RMMS.Mobile.Bff` · File NuGet + `MobileApiProxyController` |
| prefix | `mobile-bff/api/v1` |
| downstream | FileService `:5018` · RMMS AiVision · Incident · Patrol |
| backend | `Linm.RMMS.WebService` · DOMAIN-MAP — **cấm ERP.*** |
| changeScope | `new_page` · task `task_fc7c8ad5` |
| source | CTX `photo-geo-capture.md` · peer `mobile-bff-file` · `vis-capture` |
| **cấm** | invent `api/v1/photo-geo*` · client `objectKey` · resign URL img src · app `:5101` / `:5018` · ERP.* · DbContext trên BFF |

App `ApiClient.base` = `{BffBase}/mobile-bff/api/v1`.  
Tọa độ vật thể = **on-device** (+ HITL) — BFF chỉ file + payload Signed sẵn.

## Như thế nào (skill step 6)

| Tầng | Repo / package | App có biết? |
|------|----------------|--------------|
| UI / sheet | iOS + Android | Có — files + optional detect/incident |
| BFF host | `Linm.RMMS.Mobile.Bff` | Có — một host `:5202` |
| File NuGet | `Linm.Platform.FileService.Bff` | **Không** — rewrite `mobile-bff`→`web-bff` files |
| Domain API | FileService · AiVision · Incident · Patrol | **Không** — proxy |
| Dedicated PhotoGeoController | **không** | **cấm invent** |

## Table — sheet capture · File + optional domain

| Action / zone | Method | `{BffPrefix}` path | BFF | Downstream | Source | Gap |
|---------------|--------|--------------------|-----|------------|--------|-----|
| Init upload | POST | `files/init` | File NuGet | FileService init | CTX · peer file | **CLOSED** host · purpose=`photo-geo-capture` |
| PUT bytes | PUT | `files/{uploadId}/object` | same | object store | JPEG+EXIF | **CLOSED** |
| Commit | POST | `files/commit` | same | → `attachmentId` | domain persist guid | **CLOSED** |
| Preview | GET | `files/{id}/object` | JWT | bytes | FILE-ATT-09 | reuse file preview GAP |
| Detect optional | POST | `ai-vision/detect` | proxy | `DetectAiVisionRequest` Lat·Lng | object **HITL** | GAP-PGC-DETECT-01 |
| Prefill tuyến | GET | `patrol/sessions` | proxy | PatrolSessions | Route/Km toast | optional · live-only |
| Gắn sự cố (host) | POST | `incident/incidents` | proxy | Create · `MediaIds` · `HasGps` | host | GAP-PGC-BE-01 no object cols |
| GPS / IMU / gim / distance | — | — | — | Device on-device | sidecar | **không** API |
| Map HITL | — | — | — | reuse map kit | drag pin | **không** invent map path |

## Init body (P1)

| Field | P1 |
|-------|-----|
| `purpose` | **`photo-geo-capture`** |
| `product` | `rmms` |
| `fileName` | device name |
| `contentType` | `image/jpeg` |
| `sizeBytes` | byte length |

Object key SSOT (BE gen — **cấm** client set):

```
{tmp|data}/{appId}/{yyyy}/{companyId}/{featureId}/{uploadId}.{ext}
```

## Detect request (optional · sau HITL)

`DetectAiVisionRequest`: `Lat?` · `Lng?` · `AccuracyM?` · `ImageBase64?` · `Note?` · …  
P1: Lat/Lng = **object confirmed** · **cấm** photographer GPS · **cấm** thêm ObjectLat đến SA Signed · confidence > 30 m → **không** POST detect.

## Incident bind (host · không cột object)

| UI / pack out | → Create body |
|---------------|---------------|
| `attachmentId` | `MediaIds` CSV |
| GPS available | `HasGps=true` |
| object lat/lng | **sidecar / SA** · GAP-PGC-BE-01 · **cấm** invent field analy |

## Có trên domain — **không** thuộc invent

| Method | Path | Ghi |
|--------|------|-----|
| * | `api/v1/photo-geo*` | **cấm invent** |
| * | client-chosen `objectKey` | FILE-ATT-08 |
| * | resign URL làm img src | FILE-ATT-09 |
| * | ERP.* / Domains/Master | **cấm** |

## Verify (Dev/QA — **cấm** data_analy chạy)

```bash
# 401/422 OK · 404 = route missing
curl -s -o /dev/null -w "%{http_code}\n" \
  -X POST http://localhost:5202/mobile-bff/api/v1/files/init \
  -H "Content-Type: application/json" -d '{}'
```

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | 2026-09-12T17:20:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:photo-geo-capture-bff-20260912 |
| ctxHash | sha256:96c48bab551b693f |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.25.01 schemaVersion=2 -->
