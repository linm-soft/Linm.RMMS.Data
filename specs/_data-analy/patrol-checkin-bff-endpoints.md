# BFF endpoints — patrol-checkin (mobile · Ghi điểm tuần · edit)

| | |
|---|---|
| feature | `patrol-checkin` |
| bff | `Linm.RMMS.Mobile.Bff` · catch-all + File BFF NuGet (khi init) |
| prefix | `mobile-bff/api/v1` |
| downstream | `RMMS.Service.Api` · Patrol · `{FileService}/api/v1/files/*` |
| source | CTX `patrol-checkin.md` · `mobile-bff-file.md` · review GAP 2026-09-12 |
| changeScope | `edit_page` · `task_7e0ff15b` |
| **cấm** | invent `api/v1/patrol-checkin` · `api/v1/mobile-files` · ERP.* · DbContext trên BFF |

App `ApiClient.base` = `{BffBase}/mobile-bff/api/v1`.

## § Delta API (`edit_page`)

| Gap | Current | New |
|-----|---------|-----|
| Photo | POST body `photoLocalIds[]` local UUID · **không** object store | `files/*` lifecycle → `attachmentId` · POST check-ins mang id FileService (map field SA: `photoLocalIds`→attachment guids **hoặc** `mediaIds`/`photoAttachmentIds` khi BE rename — **không** fork app-only) |
| Plan | Client set plan = GPS | `GET …/plan-points` (Kind E đề xuất) **khi BE live** · else stamp GAP · **cấm** fake coords |
| Check-ins | POST live (GAP-MOB-BFF-01 **closed**) | Giữ |

## Table — `#sheet-checkin`

| Action / zone | Method | `{BffPrefix}` path | BFF | Downstream | Gap |
|---------------|--------|--------------------|-----|------------|-----|
| Prefill Route / CheckInCount | GET | `patrol/sessions` | proxy | `PatrolSessionsController` | live |
| Prefill session | GET | `patrol/sessions/{id}` | proxy | `GetById` | live |
| Plan-points đối soát | GET | `patrol/sessions/{id}/plan-points` | proxy | Patrol Kind E **đề xuất** | **GAP-MOB-CI-PLAN-BE-01** · chưa controller — SA/TL Step 4b |
| Submit Lưu / Ghi nhận | POST | `patrol/sessions/{id}/check-ins` | proxy | `POST check-ins` | **live** · body photos = File ids |
| File init | POST | `files` (init) | FileService.Bff NuGet | FileService `:5018` | **GAP-MOB-BFF-FILE-01** nếu chưa NuGet |
| File PUT bytes | PUT | `files/{id}/object` | same | FileService | same |
| File commit | POST | `files/{id}/commit` (SSOT file-attach) | same | FileService | same |
| Preview ảnh | GET | `files/{id}/object` | JWT forward | bytes | **cấm** resign URL làm img src |
| GPS fix | — | — | — | Device | **cấm** fake · **không** API pin |
| Offline queue | — | — | — | local → `patrol-offline` | |

## Body POST check-ins (live + edit)

| Field | UI / bind |
|-------|-----------|
| `planPointLabel` | Điểm kế hoạch (từ BE plan nearest / session) |
| `route` | Tuyến / lý trình |
| `lat` · `lng` · `accuracyM` | **Live GPS only** |
| `distanceToPlanM` · `matchOk` | haversine vs BE plan (khi có) |
| `content` | TextArea |
| `photoLocalIds[]` / attachment guids | Sau File commit — **không** UUID thiết bị thuần |

## Có trên domain — OUT slug

| Method | Path | Ghi |
|--------|------|-----|
| CRUD | `patrol/sessions` | web list — OUT sheet |
| POST | `…/tracks` · coverage · kpi | Kind E sibling |
| POST | `patrol/attendance-logs` | `attendance` |

## Verify live (scan 2026-09-12)

| Check | Result |
|-------|--------|
| `GET/POST …/check-ins` | **Live** trên `PatrolSessionsController` |
| `GET …/plan-points` | **MISSING** → GAP-MOB-CI-PLAN-BE-01 |
| `files/*` qua Mobile.Bff | **GAP** `mobile-bff-file` / GAP-MOB-BFF-FILE-01 |
| Invent `patrol-checkin` | **cấm** |

## Step 4b

**Cấm** data-analy chạy migration. Handoff SA: (1) plan-points Kind E schema/controller · (2) confirm photo field = FileService attachment ids · (3) `/init-bff-file` nếu NuGet thiếu.

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
| contentHash | sha256:patrol-checkin-mobile-bff-20260912-edit |
| bffContentHash | sha256:patrol-checkin-mobile-bff-20260912-edit |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
