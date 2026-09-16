# SA — Solution — photo-geo-capture (Chụp ảnh kèm tọa độ)

| Field | Value |
|-------|-------|
| feature | `photo-geo-capture` |
| title | [Mobile] [Tuần đường] -> Chụp ảnh kèm tọa độ |
| this role | `sa` · `/agent-sa-mobile` |
| status | `confirmed` |
| solution_confirm | **approve** (`autoApprove=ON` · `task_c15db047`) |
| changeScope | `new_page` |
| packKind | **`sheet`** · `DES-MOB-PGC` `#sheet-pgc` · **cấm** hub row / invent screen owner |
| stack | `native_dual` |
| Feature Kind | **sheet** · entry host PhotoRow `openCapture('photo-geo')` |
| thisAction | **Chụp ảnh kèm tọa độ** only · hosts `field-reflect` / `vis-capture` / `incident-create` · **cấm** gộp patrol-pin / cam-patrol / invent photo-geo API |
| domain | **FileService** files/* · optional **AiVision** detect · optional **Patrol** sessions · host **Incident** MediaIds · device GPS/camera/IMU · **cấm** invent `api/v1/photo-geo*` / `PhotoGeoController` |
| BackendRoot | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` |
| prior · design | **confirmed** · `ui/design.md` · dual proto · `handoff/design-compact.md` · `task_a487c57b` |
| prior · po | **confirmed** · `po/requirement.md` · `handoff/po-compact.md` · `task_b9a20f2f` |
| prior · data_analy | **confirmed** · `_data-analy/photo-geo-capture-*.md` · contentHash `sha256:photo-geo-capture-control-hint-20260912` · realDataHash `sha256:photo-geo-capture-real-data-20260912` · bffContentHash `sha256:photo-geo-capture-bff-20260912` |
| autoApprove | **ON** |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** `yarn start:std` / `mfeStdUrl` / e2e ở role SA |
| versionGate | `rechecked` |
| taskId | `task_c15db047` |
| confirmedBy | agent autoApprove · `task_c15db047` |
| updatedAt | `2026-09-12T17:35:00.000Z` |

**Cấm:** invent `api/v1/photo-geo*` · invent path ngoài BFF table · clone domain controller trên Mobile.Bff · client `objectKey` / resign URL img src · app `:5101` / `:5018` · ERP.* · `mfeStdUrl` / `yarn start:std` · system `UIAlert` / `AlertDialog` · fake lat/lng · photographer GPS làm object · Write MFE/native ở role SA · chạy Step 4b / migration / e2e ở role này · re-scan demo (`GAP-DES-DEMO-RESCAN-01`).

Standards: api-endpoint · bff-api-structure · company-field · no-parent-json-field · sa-implement-gates · ios networking · android api-client · offline-sync · PrivacyInfo / Play Data safety (`GAP-SA-STORE-01`).

---

## Architecture (repo SSOT)

| Layer | Choice |
|-------|--------|
| BackendRoot | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` |
| Domain | FileService (init/PUT/commit/GET) · AiVision `Detect` (optional) · Patrol sessions (optional) · Incident Create (host) |
| API downstream | `files/*` live NuGet · `POST ai-vision/detect` existing Lat/Lng · `GET patrol/sessions` · host `POST incident/incidents` |
| BFF mobile | `Linm.RMMS.Mobile.Bff` · File NuGet rewrite + `MobileApiProxyController` catch-all → `ApiBase` |
| App | iOS + Android · base `{BffBase}/mobile-bff/api/v1` · **cấm** URLSession/OkHttp trong View |
| Sheet | `DES-MOB-PGC` · shutter → gim 1 pin → meta → MapPinSheet HITL → files commit → return host |
| Object geo | On-device pinhole ∩ mặt đường + HITL drag · **≠** photographer EXIF GPS |
| GPS | Device CL / Fused · stamp «Vị trí đã chốt» · deny → `DES-MOB-GPS-DENY` · conf >30 m → banner · **cấm** fake |
| Camera / IMU | Still capture · EXIF+IMU sidecar · **không** continuous finder |
| Files P1 | `purpose=photo-geo-capture` · init→PUT→commit · GET object JWT · **cấm** client objectKey |
| Detect optional | Sau HITL · Lat/Lng = **object confirmed** · conf >30 m → **không** POST detect · **cấm** photographer GPS |
| Host bind | Return `attachmentId` + object lat/lng sidecar · Incident `MediaIds` + `HasGps` only P1 |
| Offline | Queue files commit + host bind · sibling `patrol-offline` pattern · toast lỗi · **cấm** fake 200 / fake attachmentId |
| Persist BE mới | **GAP-PGC-BE-01 CLOSED P1** = sidecar on-device (không cột Incident mới) · Step 4b **N/A** turn này |
| Sibling | hosts field-reflect / vis-capture / incident-create · MapPinSheet reuse patrol-map/gis-map · FileService peer · **cấm** re-own |
| Out of pack | invent photo-geo API · multi-pin · hub row · web MFE · ERP.* · resign URL |

### Route decision

| | Choice |
|--|--------|
| Slug | `photo-geo-capture` → **sheet** · owner `DES-MOB-PGC` `#sheet-pgc` |
| App prefix | `mobile-bff/api/v1` |
| App path P1 files | `POST files/init` · `PUT files/{uploadId}/object` · `POST files/commit` · `GET files/{id}/object` |
| App path P1 optional | `POST ai-vision/detect` (object Lat/Lng) · `GET patrol/sessions` |
| App path host | `POST incident/incidents` — MediaIds CSV · HasGps · **không** object cols P1 |
| Downstream | existing File / AiVision / Patrol / Incident · **không** dedicated PhotoGeoController |
| GPS / gim / distance / map HITL | Device / local kit — **không** invent API |
| Step 4b | **N/A** — không endpoint/migration mới · GAP-PGC-BE-01 P1 sidecar · DETECT-01 reuse field đã live |
| Rationale | BFF table + real-data §B khớp live files + optional detect · object geo on-device+HITL · host nhận attachmentId+coords |

---

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| BFF HTTP | File NuGet + `MobileApiProxyController` | **cấm** `PhotoGeoController` local trên BFF |
| BE HTTP | FileService · `AiVisionOpsController.Detect` · `IncidentsController.Create` · `PatrolSessionsController` | **cấm** invent photo-geo path |
| Files purpose | `photo-geo-capture` | product `rmms` · contentType `image/jpeg` |
| Object key | BE gen SSOT | **cấm** client set objectKey (FILE-ATT-08) |
| Preview | GET `files/{id}/object` JWT | **cấm** resign URL img src (FILE-ATT-09) |
| Detect body | `DetectAiVisionRequest` live | Lat/Lng = **object HITL** · AccuracyM · ImageBase64 optional |
| Incident body | `CreateIncidentRequest` live | MediaIds · HasGps · **không** ObjectLat/Lng P1 |
| HTTP app | reuse File UseCases · optional Detect · host Create | **cấm** raw HTTP trong View |
| Location | `GetCurrentLocationUseCase` · object geo engine on-device | allow / deny / conf banner |
| Offline queue | `OfflineQueueStore` · files + host bind | sync qua sibling pack |
| Token | Keychain / EncryptedSharedPreferences | Bearer + company headers |
| Kit chrome | LinmSheet · ImagePreviewFullBleed · ImageTapPin · ListRow · MapPinSheet · PrimaryButton · GPS deny modal | Design kit_missing = **none** |
| Modals | `DES-MOB-GPS-DENY` | **cấm** system alert |
| Surfaces | Sheet từ host PhotoRow · **không** hub |
| Tabs | Shell Tab giữ · pack không đổi tab | **cấm** invent (`GAP-TAB-01`) |

---

## BFF / API contract (from analy BFF table)

| Action | App path | BFF | Downstream | Live / Gap |
|--------|----------|-----|------------|------------|
| Init upload | `POST files/init` | File NuGet | FileService init · purpose=`photo-geo-capture` | **CLOSED** |
| PUT bytes | `PUT files/{uploadId}/object` | same | object store JPEG+EXIF | **CLOSED** |
| Commit | `POST files/commit` | same | → `attachmentId` | **CLOSED** |
| Preview | `GET files/{id}/object` | JWT | bytes | reuse file preview |
| Detect optional | `POST ai-vision/detect` | proxy | DetectAiVisionRequest Lat·Lng | **GAP-PGC-DETECT-01 CLOSED** — object HITL |
| Prefill tuyến | `GET patrol/sessions` | proxy | PatrolSessions | optional live-only |
| Host gắn SC | `POST incident/incidents` | proxy | MediaIds · HasGps | **GAP-PGC-BE-01 CLOSED P1** — sidecar |

### Init body (P1)

| Field | Value |
|-------|-------|
| `purpose` | `photo-geo-capture` |
| `product` | `rmms` |
| `fileName` | device name |
| `contentType` | `image/jpeg` |
| `sizeBytes` | byte length |

### Host return (sheet dismiss → host)

| Field | Source | Persist P1 |
|-------|--------|------------|
| `attachmentId` | files/commit | host MediaIds / PhotoRow |
| `objectLat` / `objectLng` | on-device + HITL | **sidecar local** + host callback · **không** Incident cột mới |
| `photographerLat/Lng` | EXIF/GPS stamp | meta row only · **≠** object |
| `distanceM` / `confidenceM` | on-device | UI + gate detect |
| `HasGps` | GPS available | host CreateIncident |

---

## GAP closure (SA)

| GAP | Decision | Step 4b |
|-----|----------|---------|
| **GAP-PGC-BE-01** | P1: object lat/lng **không** thêm cột Incident. Persist = on-device sidecar + sheet return `{attachmentId, objectLat, objectLng, …}` cho host. Host incident chỉ `MediaIds` + `HasGps`. Future BE object-cols = TL backlog riêng · **cấm** invent field turn này. | **N/A** |
| **GAP-PGC-DETECT-01** | Optional detect: bind **object** confirmed Lat/Lng vào `DetectAiVisionRequest.Lat/Lng` đã live. **Cấm** photographer GPS. conf >30 m → no POST detect · no auto-attach. | **N/A** |
| Demo missing | Design dual proto PASS · **cấm** re-scan | — |
| invent photo-geo API | **REJECTED** | — |

---

## Offline / GPS / privacy

| Topic | Rule |
|-------|------|
| GPS deny | `DES-MOB-GPS-DENY` · chặn geo flow · **cấm** fake coords |
| Confidence >30 m | Banner · cho phép HITL map · **cấm** auto detect/attach object |
| Compass / IMU weak | Banner · vẫn cho HITL |
| Offline | Queue files init/PUT/commit khi online · host bind queue · toast · **cấm** fake attachmentId |
| Privacy | Camera · Location · Photo library per PrivacyInfo / Play Data safety |
| Bio / Push | n/a |

---

## Zone → API / device map

| Zone id | controlHint | Bind |
|---------|-------------|------|
| DES-MOB-PGC `#sheet-pgc` | LinmSheet | openCapture entry |
| capturePreview | ImagePreviewFullBleed | still + EXIF/IMU |
| gimPin | ImageTapPin | 1 pin only |
| rowPhotogGps | ListRow | photographer stamp |
| rowDistance | ListRow | on-device estimate |
| rowObjectCoord | ListRow | after HITL |
| mapConfirm | MapPinSheet | HITL object pin |
| btnConfirmMap / btnUse | PrimaryButton | commit files → return id+coords |
| DES-MOB-GPS-DENY | Modal | deny gate |

---

## Dev handoff (TL next)

1. Sheet `DES-MOB-PGC` wire hosts PhotoRow `openCapture('photo-geo')`.
2. On-device object geo + MapPinSheet HITL · sidecar schema.
3. FileService purpose=`photo-geo-capture` init→PUT→commit · JWT preview.
4. Optional detect chỉ sau HITL · object Lat/Lng · conf gate 30 m.
5. Host callback attachmentId+object coords · Incident MediaIds only.
6. Offline queue · GPS deny · **cấm** invent API / fake coords.
7. E2E: queued `/agent-qa*` · Maestro dual · **cấm** SA chạy e2e.

---

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-sa-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | 2026-09-12T17:35:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:photo-geo-capture-solution-20260912 |
| bffContentHash | sha256:photo-geo-capture-bff-20260912 |
| controlHintHash | sha256:photo-geo-capture-control-hint-20260912 |
| realDataHash | sha256:photo-geo-capture-real-data-20260912 |

---
<!-- Version meta: skillId=agent-sa-mobile skillVersion=2026.08.25.01 schemaVersion=1 -->
