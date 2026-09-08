# Data-analy — real-data bind — patrol

| Field | Value |
|-------|-------|
| feature | `patrol` |
| title | Tuần đường/tuần kiểm — leftover crud_formtype + upload media |
| packKind | `list` |
| changeScope | `edit_page` |
| status | `done` |
| taskId | `task_53b3bcbb` |
| prefix API | `api/v1/patrol` |
| prefix BFF | `web-bff/api/v1/patrol` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Field` |
| mfeStdUrl | `http://localhost:9304/patrol` |
| domain | **Patrol** |
| contentHash | `sha256:f2761b7dc5b13b1388b9db493b028a10227efd81de142607827c582bc04450b7` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.05.03` |
| rulesVersion | `2026.09.06.1` |
| analyzedAt | `2026-09-06T17:45:00.000Z` |

## § Delta Current vs New (`edit_page` · họp 04/09 W4-1 W4-2 · `task_53b3bcbb`)

| ID | Current | New |
|----|---------|-----|
| Analy L3 | control-hint stale hash `1d25897d…` · real-data **stub draft** | control-hint + §A–§E **done** · CTX hash `f2761b7d…` |
| crud_formtype | route SearchInput · `?route=` · validate · footer-only **CLOSED** | Leftover: code `readOnly` P2 · org bind inventory |
| Media | Không field trên DTO/entity UI | **`mediaIds[]`** FileService guid · resign · **GAP-DA-PAT-MEDIA-01** |
| File host | — | BFF `web-bff/api/v1/files/*` · `/init-bff-file` + `/integrate-file-upload-web` |
| PO/Design | Keep artifacts | PO copies delta · Design upload zone |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/patrol.md` | — | version gate · GPS/ảnh DoD |
| `demo` | `Linm.RMMS.Demo/src/demo/features/patrol-demo.html` → `patrol/patrol.html` | — | UI ref only · **cấm** demo-json SSOT |
| `api` | `PatrolSessionsController` `api/v1/patrol/sessions` | empty grid | toast · **cấm** alert |
| `entity` | `rmms_patrol_sessions` · PatrolSession | — | tenant |
| `domain-map` | DOMAIN-MAP slug `patrol` → Patrol | — | |
| `mfe` | `PatrolListPage` · `PatrolFormPage` · `services/patrol/*` | empty OK | live BFF |
| `catalog` | Integration `road-routes/search` · org RmmsOrgFormFields | — | SearchInput |
| `files` | BFF `web-bff/api/v1/files/*` · `Linm.Platform.FileService.Bff` | — | resign fail toast |
| `derived` | Kind E check-ins/tracks/coverage/kpi | P2 out | — |

## §B — Bind field (HARD)

| uiField | Label | controlHint | catalogKind | GET | write field | sameMfe |
|---------|-------|-------------|-------------|-----|-------------|---------|
| search | Tìm | SearchTextInput | — | `?search=` | — | yes |
| status | TT | SearchInput | enum VN | `?status=` | `status` | yes |
| route | Tuyến | SearchInput | road-route | `?route=` / detail | `route` (code) | yes |
| code | Mã TD-* | Text | — | detail | auto | yes · leftover readOnly |
| userName | NV | Text | — | detail | `userName` | yes |
| zoneOrgCode | Khu | SearchInput | org-unit | detail | `zoneOrgCode` | yes |
| vpOrgCode | VP | SearchInput | org-unit | detail | `vpOrgCode` | yes |
| assigneeCode | Assignee | SearchInput | org | detail | `assigneeCode` | yes |
| routeCode | Mã tuyến org | SearchInput | road-route | detail | `routeCode` | yes |
| patrolType | Loại tuần | SearchInput | enum | detail | `patrolType` | yes |
| plannedDate | Ngày KH | Date | — | detail | `plannedDate` | yes |
| startedAt | Bắt đầu | Date | — | detail | `startedAt` | yes |
| checkInCount | Điểm CI | Number | — | detail | `checkInCount` | yes |
| coveragePercent | Coverage | Number | — | detail | `coveragePercent` | yes |
| offlineQueued | Offline | SearchInput | bool | detail | `offlineQueued` | yes |
| note | Ghi chú | Text | — | detail | `note` | yes |
| mediaIds | Ảnh/video | FileMulti | files | detail **gap** | guid[] | **gap** · GAP-DA-PAT-MEDIA-01 |
| updatedAt | Cập nhật | Date | — | detail | readonly | yes |

**BFF:** `web-bff/api/v1/patrol/sessions` → API cùng resource.  
**Cấm** ERP.* · invent `api/v1/td-tk/*` / `api/v1/patrol-files` · persist full URL.

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| road-route | Integration road-routes/search | shared-catalogs/road-route-seed.json (38) | free-text route |
| org-unit | Integration / RmmsOrgFormFields | org master | invent org API trong Patrol |
| LOOKUP_STATIC | FE lookups status/type/offline | `services/patrol/lookups.ts` | enum ngoài allow-list VN |
| files | `web-bff/api/v1/files/*` | FileService Bff | persist full URL · copy FilesController |

## §D — Map / vẽ

| Mục | Ghi |
|-----|-----|
| List pack P1 | **Không** map trên MFE Field list |
| Engine | Leaflet demo Kind E+F only · **P2** |
| Media | Gallery/preview từ resign URL · **không** draw |

## §E — Progress / vòng đời

| stateField | Nguồn | Ai đổi | API | UI |
|------------|-------|--------|-----|-----|
| status | entity | user | PUT sessions | chip enum VN |
| offlineQueued | entity | user / sync P2 | PUT | badge Offline |
| mediaIds | FileService + entity | user upload | PUT + files/* | FileMulti form |
| isActive | soft-delete | user | DELETE | row delete |

## §F — Handoff

| Role | Dùng |
|------|------|
| PO | DoD leftover + upload · FileService HARD · GAP-DA-PAT-MEDIA-01 |
| Design | control-map = §B · upload zone · reviewUrl keep |
| SA | giữ sessions path · mediaIds schema · FileService reuse |
| Dev | sameMfe · enhance · T-FILE-01 · **cấm** ERP · lane web |

## Cấm

| ❌ | ✅ |
|----|-----|
| Mock-only SSOT | Cite controller/entity/MFE |
| Full presigned URL persist | file id + resign |
| `/implement-file-service` · invent file API | `/init-bff-file` + `/integrate-file-upload-web` |
| ERP.WebService / Domains/Master | Linm.RMMS.WebService · DOMAIN-MAP Patrol |
| Skip §B | this file |
| Mobile implement lane | web only |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.09.05.03 |
| schemaVersion | 2 |
| workflowVersion | 2026.09.05.03 |
| rulesVersion | 2026.09.06.1 |
| generatedAt | 2026-09-06T17:45:00.000Z |
| versionGate | ok |

---
<!-- Version meta: skillVersion=2026.09.05.03 · schemaVersion=data-analy-real-data-v2 · workflowVersion=2026.09.05.03 · versionGate=ok -->
