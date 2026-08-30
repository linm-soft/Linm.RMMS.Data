# Dev — Implement — org-route-scope

> Status: **confirmed** · autoApprove=ON · task `task_966e1ff3`  
> Role: `/agent-dev` · packKind=`master` · changeScope=`new_page`  
> contentHash: `sha256:81b3c9a520472625cc78375571d1d94ae34a6badc62a7a7bf21f0a2eac7894dc`

| | |
|--|--|
| Feature | `org-route-scope` |
| Title | Phân khu lý trình (zone km) |
| Role | `dev` |
| MFE | `Linm.Web.RMMS.Master` · `/mas/phan-khu` |
| BE | `Linm.RMMS.WebService` · Integration · `org-route-scopes` |
| Build | **PASS** — `yarn build` (MFE) · `dotnet build` API + Integration.Bff |
| Seed | **0** invent-seed (GAP-ORS-01) |
| E2E | **queued** — cấm chạy ở role Dev |
| QA verdict | **PASS** · `task_8148ad6d` · S0/S1/QA-20 · `qa/scenarios.md` · next Review |

## Delivered

### BE (Step 4b)

| Item | Path / note |
|------|-------------|
| Entities | `OrgRouteScopeEntity` · `OrgRouteScopeSegmentEntity` (Type A · flat child · no SegmentsJson) |
| Migration | `Schema_RmmsOrgRouteScopes` (+ Designer) |
| DTOs | `OrgRouteScopeDtos.cs` |
| Service | `IOrgRouteScopeService` / `OrgRouteScopeService` — list/search/init/CRUD + segments + overlap 422 |
| API | `OrgRouteScopesController` — API-01…10 |
| BFF | `OrgRouteScopesBffController` — proxy only |
| UiSchema | catalogKind `org-route-scopes` registry + seed |
| Perm | `master.org-route-scopes.read\|create\|update\|delete\|approve` CSV |

### FE

| Item | Path / note |
|------|-------------|
| Route | `/mas/phan-khu` (+ tao-moi / sua / :id redirect) |
| Service | `src/services/orgRouteScope/*` · BASE `/integration/org-route-scopes` |
| List | Kind B · org-router SearchInput 2 line · `LinErpListFilterBar` · `LinCatalogDataGrid` · ui-schema FULL · History stub |
| Form | Slideout C/E/V/Copy · `data-form-cols="2"` · tab Đoạn · LeaveConfirmModal |
| Lookups | SearchInput zone/route/assignee · assignee PARTNER → partner-unit · exclude KM* |
| LKP display | **GAP-ORS-LKP-DISPLAY-01** — dual-box mã+tên · `orgRouteScopeSearchConfig` `codeNameDisplay` · form `primaryDisplay=code` · `secondaryDisplay=name` · `getDetail` hydrate edit (`/edit-web-feature` 2026-08-30) |
| Perms | `useOrgRouteScopePermissions` |

## Notes (`/edit-web-feature` 2026-08-30)

SearchInput zone / tuyến chính / assignee / filter: trái **mã** · phải **tên**. Config `codeNameDisplay` + `getDetail` search-by-code. Form `primaryDisplay={code}` · `secondaryDisplay={name || undefined}` để hydrate khi edit chỉ có mã. Dest: `Linm.Web.RMMS.Master` · `orgRouteScopeSearchConfig.ts` · `OrgRouteScopeFormModal.tsx` · `OrgRouteScopeListPage.tsx`. `yarn typecheck` PASS. Label **Tuyến chính** (không «Tuyến mẹ») `2026-08-30`.

## Notes (`/hey-linm` + implement 2026-08-30)

`vpOrgCode` trên đoạn — neo VP · validate `ParentCode` = zone · list filter `vpOrgCode` + `assigneeCode` (ô trống = hợp con). Schema `Schema_OrgRouteScopeVpOrgCode`. Form tab Đoạn: SearchInput VP bắt buộc · Đơn vị ẩn khi kind=VP. Dest: entity/DTO/service · `OrgRouteScopeFormModal` · `OrgRouteScopeListPage` · context + filter-bar + design.

## Notes (`/edit-web-feature` 2026-08-30 — filter org router)

Khu **SearchInput** trong bar (bỏ ZONE tabs). Cục = implicit Cục QLĐB — **cấm** ô filter. Bar **2 line** (`leadBreak`): L1 Tìm · Khu · VP · Đơn vị · L2 Tuyến · Hiệu lực · 🔍. Đoạn filter **chưa** (GAP-ORS-CASCADE-01 còn tab form). Dest: `OrgRouteScopeListPage.tsx` · filter-bar context · design §3a.

Case đủ **Cục → Khu → VP → Đơn vị → tuyến → đoạn** — **GAP-ORS-CASCADE-01** (Cục ẩn implicit QLĐB · Khu bar **closed** · filter/list đoạn chưa ship). Docker API: `Dockerfile.local` restore lại trước publish (NETSDK1004).

## DoR

| Check | Pass |
|-------|------|
| Task + Design + SA đọc · controlHint không đổi | ✅ |
| DOMAIN-MAP Integration · resource `org-route-scopes` | ✅ |
| yarn build PASS | ✅ |
| dotnet build API + BFF PASS | ✅ |
| No invent-seed · no ERP.* · no e2e/start:std | ✅ |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev |
| skillVersion | 2026.08.29.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.29.04 |
| rulesVersion | 2026.08.30.5 |
| contentHash | sha256:81b3c9a520472625cc78375571d1d94ae34a6badc62a7a7bf21f0a2eac7894dc |
| generatedAt | 2026-08-30T12:00:00.000Z |
| versionGate | rechecked |
| taskId | task_966e1ff3 |

---
<!-- Version meta: skillId=agent-dev skillVersion=2026.08.29.01 schemaVersion=1 workflowVersion=2026.08.29.04 rulesVersion=2026.08.30.5 versionGate=rechecked contentHash=sha256:81b3c9a520472625cc78375571d1d94ae34a6badc62a7a7bf21f0a2eac7894dc taskId=task_966e1ff3 -->
