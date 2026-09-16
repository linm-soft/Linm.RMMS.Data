# Data-analy — real-data bind — nghiem-thu

| Field | Value |
|-------|-------|
| feature | `nghiem-thu` |
| title | Công tác nghiệm thu — clone tuần kiểm + 10 mẫu |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_01b899ee` |
| prefix API (proposed) | `api/v1/patrol/nghiem-thu` |
| prefix BFF (proposed) | `web-bff/api/v1/patrol/nghiem-thu` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Field` |
| mfeStdUrl | `http://localhost:9301/nghiem-thu` |
| domain (proposed) | **Patrol** (sibling · **không** `sessions` · **không** Maintenance WO) |
| contentHash | `sha256:41b14359b00a0bacbd2f5e88ab9ed8f7604f962c4e4e58219bf9c1145b5ef4ea` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.05.03` |
| rulesVersion | `2026.09.05.8` |
| analyzedAt | `2026-09-12T09:00:00.000Z` |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/nghiem-thu.md` | — | greenfield · chờ API web |
| `peer-context` | `docs/context/features/patrol.md` · sessions live | — | clone UX only · **cấm** reuse entity sessions |
| `meeting` | `specs/_form-type-mobile/MEETING-1-5.md` họp 1 | — | 10 mẫu · mobile later |
| `domain-map` | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | — | slug `nghiem-thu` **missing** → **GAP-DA-NT-DOMAIN-01** |
| `api` | **chưa có** controller NT trên BE | empty grid sau seed | **GAP-DA-NT-API-01** · toast · **cấm** alert |
| `anti-source` | `docs/context/features/maintenance.md` WO complete stub | — | **cấm** gộp NT vào WO |
| `files` | BFF `web-bff/api/v1/files/*` · `Linm.Platform.FileService.Bff` | — | resign fail toast |
| `catalog` | Integration road-routes · org-unit shared catalogs | — | SearchInput |
| `demo` | **N/A** (web) · mobile zones `#sc-nghiem-thu` seed only | — | **cấm** demo-json SSOT |

**GAP-DA-REAL-01:** chưa có controller/entity cite live — bind dưới đây = **proposed** cho SA; PO DoD = màn mở sau khi SA+Dev ship API + seed DB (không mock-only).

## §B — Bind field (HARD)

| uiField | Label | controlHint | catalogKind | GET | write field | sameMfe |
|---------|-------|-------------|-------------|-----|-------------|---------|
| search | Tìm | SearchTextInput | — | `?search=` **gap** | — | **gap** |
| status | TT | SearchInput | enum VN | `?status=` **gap** | `status` | **gap** |
| route | Tuyến | SearchInput | road-route | `?route=` **gap** | `route` (code) | **gap** |
| templateType | Mẫu | SearchInput | LOOKUP_STATIC | `?templateType=` **gap** | `templateType` | **gap** |
| fromDate / toDate | Kỳ | Date | — | `?from=&to=` **gap** | — | **gap** |
| code | Mã NT-* | Text | — | detail **gap** | auto | **gap** |
| zoneOrgCode | Khu | SearchInput | org-unit | detail **gap** | `zoneOrgCode` | **gap** |
| vpOrgCode | VP | SearchInput | org-unit | detail **gap** | `vpOrgCode` | **gap** |
| assigneeCode | Cán bộ NT | SearchInput | org | detail **gap** | `assigneeCode` | **gap** |
| inspectedAt | Ngày NT | Date | — | detail **gap** | `inspectedAt` | **gap** |
| kmFrom / kmTo | Km | Number | — | detail **gap** | `kmFrom`/`kmTo` | **gap** |
| fieldInfo | Hiện trường | Text | — | detail **gap** | `fieldInfo` | **gap** |
| note | Ghi chú | Text | — | detail **gap** | `note` | **gap** |
| mediaIds | Ảnh/video | FileMulti | files | detail **gap** | guid[] | **gap** |
| updatedAt | Cập nhật | Date | — | detail **gap** | readonly | **gap** |

**Proposed CRUD (SA giữ path hoặc AskQuestion đổi):**

| Method | Path |
|--------|------|
| GET/POST | `api/v1/patrol/nghiem-thu` |
| GET/PUT/DELETE | `api/v1/patrol/nghiem-thu/{id}` |
| BFF | `web-bff/api/v1/patrol/nghiem-thu` |

**Cấm** ERP.* · invent `api/v1/nghiem-thu-files` · persist full URL · gộp `api/v1/maintenance/work-orders/*/complete`.

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| road-route | Integration road-routes/search | `shared-catalogs/road-route-seed.json` | free-text route |
| org-unit | Integration / RmmsOrgFormFields pattern | org master | invent org API trong NT |
| LOOKUP_STATIC templateType | FE lookups 10 mẫu | PO chốt tên · **GAP-DA-NT-TMPL-01** | hardcode demo-only ngoài allow-list |
| LOOKUP_STATIC status | FE lookups | PO **GAP-DA-NT-STATUS-01** | enum ngoài allow-list |
| files | `web-bff/api/v1/files/*` | FileService Bff | persist full URL · copy FilesController |

## §D — Map / vẽ

| Mục | Ghi |
|-----|-----|
| List pack P1 | **map: none** |
| Media | Gallery/preview từ resign URL · **không** draw |

## §E — Progress / vòng đời

| stateField | Nguồn | Ai đổi | API | UI |
|------------|-------|--------|-----|-----|
| status | entity (proposed) | cán bộ NT | PUT **gap** | chip enum VN |
| templateType | entity | user lúc tạo | POST/PUT **gap** | SearchInput mẫu |
| mediaIds | FileService + entity | user upload | PUT + files/* | FileMulti form |
| isActive | soft-delete | user | DELETE **gap** | row delete |

## §F — Handoff

| Role | Dùng |
|------|------|
| PO | DoD «màn mở = data thật» sau API · Ask TMPL/STATUS · FileService HARD · **cấm** maintenance WO |
| Design | control-map = §B · zones A–D · full-page form · upload zone · filter-bar wrap |
| SA | DOMAIN-MAP row `nghiem-thu`→Patrol · entity/migration · giữ path proposed hoặc AskQuestion |
| Dev | greenfield Field `/nghiem-thu` · T-FILE FileService · **cấm** ERP · lane web |
| Mobile | chờ API web · enqueue_later `/scan-mobile-feature` |

## Cấm

| ❌ | ✅ |
|----|-----|
| Mock-only SSOT list | Cite CTX/DOMAIN-MAP · SA ship API + seed DB rồi GET |
| Full presigned URL persist | file id + resign |
| `/implement-file-service` · invent file API | `/init-bff-file` + `/integrate-file-upload-web` |
| ERP.* / Domains/Master | Linm.RMMS.WebService · DOMAIN-MAP 15 |
| Gộp Maintenance WO | module NT riêng |
| Reuse `rmms_patrol_sessions` rows | entity NT riêng |
| Skip §B | this file |
| Mobile implement lane web task | web only |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.09.05.03 |
| schemaVersion | 2 |
| workflowVersion | 2026.09.05.03 |
| rulesVersion | 2026.09.05.8 |
| generatedAt | 2026-09-12T09:00:00.000Z |
| versionGate | ok |

---
<!-- Version meta: skillVersion=2026.09.05.03 · schemaVersion=data-analy-real-data-v2 · workflowVersion=2026.09.05.03 · versionGate=ok -->
