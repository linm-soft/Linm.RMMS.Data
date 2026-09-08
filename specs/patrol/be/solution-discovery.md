# SA — solution-discovery — patrol (edit_page · media)

| Field | Value |
|-------|-------|
| feature | `patrol` |
| this role | `sa` · `/agent-sa` |
| status | `confirmed` (autoApprove=ON · agent self-confirm) |
| changeScope | `edit_page` |
| packKind | `list` |
| runMode | `fix_gaps` · gap=`crud_formtype` + upload media (W4-1 W4-2) |
| domain | **Patrol** (DOMAIN-MAP slug `patrol` → Patrol) |
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Field` · `/patrol` |
| solution_confirm | `approve` (autoApprove=ON · `task_8072f549`) |
| prior · design | `confirmed` · compact + `ui/design.md` · `task_a57d8389` |
| prior · po | `confirmed` · compact · `task_54394ae1` |
| prior · data_analy | `done` · hash `f2761b7dc5…` · `task_53b3bcbb` |
| taskId | `task_8072f549` |
| updatedAt | `2026-09-06T17:55:00.000Z` |

> SA **chốt** FILE-01 `mediaIds` schema + FormMode↔API + FileService reuse. Design **chốt** upload zone. **Cấm** invent `patrol-files` · full URL · `ERP.*`.  
> Prior GAP-SA-PAT-Q01/LKP/VAL/ENUM **KEEP CLOSED** (đã ship).

## Gates

| Gate | Value |
|------|-------|
| sa_tz_gate | **tz_na** — `StartedAt`/`CreatedAt`/`UpdatedAt` **UTC** · `PlannedDate`=`DateOnly` · display local FE |
| sa_xco_gate | **xco_get_only** — GetById IgnoreQueryFilters + `allowed_company_ids` · deny 403 |
| sa_shared_table | **share_tenant** (`PatrolSessionEntity` : `TenantEntity`) |
| lookup_share | road-route = **share_a** (Integration Type A) — KEEP |
| parent_json | **cấm** nested object JSON trên DTO/entity · `mediaIds` = **CSV guid** (pattern CSDL) — **không** jsonb blob · **không** child table P1 |
| design_confirm | **approve** (Design `task_a57d8389`) |
| solution_confirm | **approve** (autoApprove ON · this pack) |
| repo | `be_repo_confirm=approve` · `ui_repo_confirm=approve` |

## Paths (LOCKED — no new domain)

| Layer | Path |
|-------|------|
| API domain | `api/src/RMMS.Service.Api/Domains/Patrol/` |
| Models | `api/domains/patrol/LINM.RMMS.Patrol.Models/DTOs/PatrolSessionDtos.cs` |
| Entity | `api/shared/RMMS.Service.Persistence/Entities/PatrolSessionEntity.cs` |
| Table | `rmms_patrol_sessions` |
| Migration P1 | **`Schema_RmmsPatrolSessions_MediaIds`** — add column only |
| BFF sessions | `bff/domains/patrol/.../PatrolSessionsBffController.cs` |
| Route prefix | **`api/v1/patrol/sessions`** |
| BFF sessions | **`web-bff/api/v1/patrol/sessions`** |
| Files (reuse) | **`web-bff/api/v1/files/*`** · `Linm.Platform.FileService.Bff` · slash `/init-bff-file` + `/integrate-file-upload-web` |
| Lookup | **`api/v1/integration/road-routes`** KEEP |

**Cấm** domain mới · **cấm** `ERP.*` · **cấm** copy FilesController vào Patrol.

## Live BE vs this pack (delta)

CRUD + `?route=` + validate catalog **đã ship**. Pack này **chỉ** media:

| ID | Live today | Required this pack | Layer |
|----|------------|--------------------|-------|
| GAP-SA-PAT-FILE-01 | không cột media | `MediaIds` varchar(2000) CSV guid · DTO `List<string>? mediaIds` max **10** | Entity + migration + DTO + Service Create/Update/GetById |
| GAP-SA-PAT-FILE-API | sessions body không media | Create/Update/GetById bind `mediaIds[]` · List **không** trả media (AC-G-08) | API + BFF proxy body as-is |
| GAP-SA-PAT-FILE-SVC | — | Upload/resign **chỉ** FileService `files/*` · session persist **guid only** | FE + FileService · **không** Patrol files API |
| GAP-SA-PAT-COPY | Copy POST không media | Clone `mediaIds[]` cùng guid (share FileService refs · **không** re-upload) | FE Copy → POST body |
| GAP-SA-PAT-Q01..ENUM | **KEEP CLOSED** | — | — |

**P2 / out:** child table media · Kind E+F map/tracks · `code` readOnly leftover · MIME refine BE (FE+FileService enforce P1).

## FILE-01 — schema (LOCKED)

| | |
|--|--|
| Decision | **guid[] trên session** · store **CSV** `varchar(2000)` nullable · cùng pattern `CsdlBookEntryEntity.MediaIds` |
| DB column | `media_ids` / property `MediaIds` |
| DTO | `List<string>? MediaIds` (camelCase JSON `mediaIds`) |
| Serialize | join `,` · Parse split trim · empty → null |
| Validate | mỗi id guid non-empty · **max 10** · 422 VN nếu vượt |
| Cấm | jsonb parent · child table P1 · persist full URL · invent patrol-files endpoint |
| MIME/size | PO-chốt: image jpeg\|png\|webp ≤10MB · video mp4\|webm ≤50MB · max 10 — enforce tại **FileService + FE** toast; BE session chỉ count guid |

## FormMode ↔ API

| FormMode | API | mediaIds |
|----------|-----|----------|
| List | `GET …/sessions?search&status&route&page&pageSize` | **không** field · **không** cột grid |
| View | `GET …/sessions/{id}` | trả `mediaIds[]` · FE resign URL qua `files/*` · gallery |
| Create | `POST …/sessions` | optional `mediaIds[]` (sau upload FileService) |
| Edit | `PUT …/sessions/{id}` | **replace-all** array (guid list hiện tại) |
| Copy | `POST …/sessions` (new) | **clone** guid[] từ source · cùng FileService ids |
| Delete | `DELETE …/sessions/{id}` | soft-delete session · **không** cascade delete files P1 |

## API catalog (delta only)

### API-03/04 — Create / Update (widen body)

| | |
|--|--|
| Body add | `mediaIds?: string[]` max 10 |
| Validate | guid format · max 10 · Route/Status/PatrolType KEEP |
| Response DTO | include `mediaIds` trên detail |

### API-02 — GetById

| | |
|--|--|
| Response | + `mediaIds: string[]` (empty `[]` nếu null) |

### API-01 — List

| | |
|--|--|
| Response item | **không** `mediaIds` P1 (AC-G-08) |

### API-FILE — FileService (reuse · không Patrol)

| | |
|--|--|
| Upload / get / resign | `web-bff/api/v1/files/*` |
| FE | FileMulti · integrate-file-upload-web |
| Persist on session | **guid only** |

## Field map (delta)

| uiField | controlHint | dtoField | dbColumn | notes |
|---------|-------------|----------|----------|-------|
| mediaIds | FileMulti | `MediaIds` | `media_ids` | CSV guid · max 10 · FileService |
| (KEEP) code…note · org · route | per prior SA | — | — | unchanged |

## Entity — PatrolSessionEntity (widen)

| Column | Type | Notes |
|--------|------|-------|
| MediaIds | varchar(2000)? | CSV FileService guids · **NEW** |
| (KEEP) | Code…Note · org fields · IsActive · timestamps | unchanged |

## BFF

- Sessions: **proxy-only** — body/query passthrough · **không** business logic.
- Files: FE → FileService BFF trực tiếp · **không** proxy files qua Patrol BFF.

## Migration

**Có** `Schema_RmmsPatrolSessions_MediaIds`: `ALTER` add `MediaIds` varchar(2000) NULL.  
**Không** table mới · **không** jsonb · **không** seed media.

## Perm (KEEP + files)

`patrol.sessions.read|create|update|delete`  
Files: perm FileService platform (existing) · Lookup `master.road-routes.read` KEEP

## Handoff → TL

Emit **T-BE-FILE-01 · T-MIG-MEDIA · T-DTO-MEDIA · T-FE-FILE-01 · T-UI-FORM-MEDIA · T-UI-VIEW-GALLERY · T-QA-MEDIA** (+ KEEP tasks không reopen).

| Task hint | Scope |
|-----------|--------|
| T-MIG-MEDIA | Schema_RmmsPatrolSessions_MediaIds |
| T-BE-FILE-01 | Entity/DTO/Service serialize + max 10 · Create/Update/GetById |
| T-BFF-FILE | verify sessions proxy body (no new controller) |
| T-FE-FILE-01 | FileMulti → files/* → bind `mediaIds` form |
| T-UI-FORM-MEDIA | upload zone sau note · MIME toast |
| T-UI-VIEW-GALLERY | View resign gallery |
| T-UI-COPY-MEDIA | Copy clone mediaIds[] |
| T-QA-MEDIA | upload/View/Copy/max10 · P0 none |

Next: team-lead **pending** chain (autoApprove ON).

## Confirm

`solution_confirm` = **approve** — autoApprove **ON** · agent self-confirm · **cấm** chờ board.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-sa |
| skillVersion | 2026.08.14.5 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.14.5 |
| rulesVersion | 2026.08.14.9 |
| generatedAt | 2026-09-06T17:55:00.000Z |
| versionGate | rechecked |
| version_mismatch_action | recheck_new |
| contentHashPriorDesign | design-compact · task_a57d8389 · 2026-09-07T00:49:00.000Z |
| contentHashPriorPo | po-compact · task_54394ae1 |
| contentHashPriorDataAnaly | sha256:f2761b7dc5b13b1388b9db493b028a10227efd81de142607827c582bc04450b7 |
| orchestratorSkillVersion | 2026.08.09.02 |
| orchestratorWorkflowVersion | 2026.08.09.02 |

---
<!-- Version meta: skillVersion=2026.08.14.5 · schemaVersion=2 · workflowVersion=2026.08.14.5 · rulesVersion=2026.08.14.9 · versionGate=rechecked -->
