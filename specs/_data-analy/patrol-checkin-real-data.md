# Real-data bind — patrol-checkin (`edit_page`)

| | |
|---|---|
| feature | `patrol-checkin` |
| prefix | `mobile-bff/api/v1` |
| sameMobile | yes · proxy Patrol + FileService |
| changeScope | `edit_page` |
| taskId | `task_7e0ff15b` |

Skill: real-data-bind · **GAP-MOB-REAL-01**

## § Delta Current vs New

| Bind | Current | New |
|------|---------|-----|
| Điểm KH coords | `planLat/lng` = GPS fix (always match) | BE plan-points nearest · GPS chỉ là vị trí ghim |
| Ảnh | local URI / UUID trong `photoLocalIds` | FileService `attachmentId` sau commit · preview JWT object |
| Fake GPS | cleanup removed demo Phước Dinh | **cấm** restore fake |

## §A Source / Resource

| Resource | Entity | Key |
|----------|--------|-----|
| Patrol session | `PatrolSession` / `rmms_patrol_sessions` | `Id` Guid |
| Check-in | `rmms_patrol_check_ins` | sessionId + checkInId |
| Plan point | Kind E plan-points (khi live) | sessionId + pointId / chainage |
| File object | FileService attachment | `attachmentId` Guid |

## §B Path = BFF table

| UI zone | Bind | Method · Path |
|---------|------|----------------|
| Tuyến / lý trình | `Route` active | `GET patrol/sessions` |
| Điểm kế hoạch label | plan-points / session Note | `GET …/plan-points` **khi live** · else label session · **không** invent coords |
| Cách điểm KH / banner | haversine(GPS, planBE) · `matchOk` | Device GPS + BE plan · **cấm** plan=GPS |
| Định vị ghim | live `lat/lng/accuracyM` | Device only |
| Nội dung | form → `content` | `POST …/check-ins` |
| Ảnh | capture → files init/PUT/commit → ids | `files/*` + POST body |
| Detail photos | attachmentIds | `GET files/{id}/object` |
| CheckInCount toast | `CheckInCount` | GET sessions |

§B **khớp** BFF table — **không** invent `patrol-checkin` / `mobile-files`.

## §C Map DTO → UI

| dtoField | UI |
|----------|-----|
| `Route` · `Code` · `CheckInCount` · `Status` | prefill / toast / gate Đang tuần |
| plan point `label` · `lat` · `lng` (BE) | Điểm KH · distance source |
| device `lat`·`lng`·`accuracyM` | Định vị ghim |
| `distanceToPlanM` · `matchOk` | Cách điểm KH · banner |
| `content` | TextArea |
| `attachmentId[]` (via photo field) | PhotoRow filled · **không** device-only UUID làm SSOT |

## §D Map overlay

N/A trên sheet.

## §E Progress

| Case | Behavior |
|------|----------|
| plan-points **MISSING** | Prefill label từ session Route/Note · banner: stamp GAP-MOB-CI-PLAN-BE-01 · **không** tuyên bố đúng điểm từ plan=GPS · Dev defer match thật đến khi BE live **hoặc** SA chấp nhận interim documented |
| GPS deny | `DES-MOB-GPS-DENY` · **không** submit · **không** fake |
| Sai điểm | banner đỏ · disable Lưu |
| File BFF **MISSING** | GAP-MOB-BFF-FILE-01 · queue offline ảnh · **cấm** fake 200 upload |
| POST check-ins fail | enqueue `patrol-offline` · **cấm** fake 200 |
| Offline | sheet mở · queue check-in + file |

## §F Cấm

- Fake lat/lng / demo Phước Dinh prefill  
- Invent path · bind `mfeStdUrl`  
- Watermark / process text  
- §B ≠ BFF → **GAP-MOB-REAL-01**  
- Submit chỉ local photo id mà DoD yêu cầu FileService  

## Demo rows SSOT (prototype only · **không** bind live sheet)

| Field | Value |
|-------|-------|
| Điểm kế hoạch | Km 1561+134 · Phước Dinh |
| Tuyến | QL.1 · Km 1561+134 |
| (live) | session Route + GPS + BE plan khi có |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | 2026-09-12T12:38:16.000Z |
| versionGate | rechecked |
| contentHash | sha256:patrol-checkin-real-data-20260912-edit |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
