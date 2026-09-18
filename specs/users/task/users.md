# Team-lead — task pack · users

| Field | Value |
|-------|-------|
| feature | `users` |
| this role | `team_lead` · `/agent-team-lead` |
| status | `done` |
| changeScope | `edit_page` |
| packKind | `list` |
| Feature Kind | **B** — catalog A–D + tree master + **full-page** form (`UsersFormPage`) · **cấm** Slideout |
| mfeStdRoute | `/integration/users` |
| route_confirm | **approve** A = `/integration/users` (KEEP · **không** URL mới) |
| autoApprove | **ON** |
| e2eQa | **ON** (queued `/agent-qa*`) |
| taskId | `task_8149b4c8` |
| prior | data_analy `confirmed` · PO `confirmed` · Design `confirmed` · SA `confirmed` |
| title | Users — chức vụ lookup (job-title) |
| cite | `job-title.md` §5b · GAP-F-USR-05 |
| updatedAt | `2026-09-18T16:25:00.000Z` |

## Source lock

| Key | Value |
|-----|-------|
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Integration` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` |
| domain | **Integration** |
| api | `api/v1/integration/users` |
| bff | `web-bff/api/v1/integration/users` |
| lkp job-title | `api/v1/integration/job-titles` (+`/search`) · BFF same |
| org reuse | `api/v1/integration/org-units` (tree + search) |
| road reuse | `api/v1/integration/road-routes/search` |
| **cấm** | `ERP.Service.*` · `Domains/Master` · `api/v1/rmms/*` · open-api · invent package Cục/VP · master CRUD job-title |

## Enum SSOT (SA chốt — TL bind UI label) — KEEP

**roleCode** persist = live BE (không kebab prototype):

| value | Label VN |
|-------|----------|
| `Admin` | Admin |
| `Ban.TK` | Ban.TK |
| `KyThuat` | Kỹ thuật |
| `VanPhong` | Văn phòng |

**status** persist `active` \| `locked`:

| value | Label VN (UI) |
|-------|----------------|
| `active` | **Đang dùng** |
| `locked` | **Khóa** |

`init-data` có thể trả «Hoạt động» / «Đang khóa» — Dev **override display** theo bảng trên; **không** đổi API value.

**jobTitleCode** (delta): persist code catalog · display = catalog **name** · **≠** `roleCode` · seed 19 (`job-title-seed.json`).

## DES-GRID → Lin\* map (T-UI-LIST A–D) — KEEP + delta Zone B/C

| Zone | Component / rule |
|------|------------------|
| A | `LinPageLayout` header · icon `fa-user-shield` · title «Quản lý người dùng» · **cấm** Thêm trên A |
| B | `catalogToolbar` + `ErpListHeaderFilters`: SearchText · role · status · route `road-route` · **+ SearchInput `job-title` (`jobTitleCode`, page=1)** |
| C1 | filters trên B |
| C2 | org tree + `LinCatalogDataGrid` · **+ cột Chức vụ** = name(`jobTitleCode`) · **≠** roleCode · AC-G-09 |
| D | `LinCatalogListPagination` 50/100/200/500 — **cấm** footerPagination / pageSizeBar / raw table |
| Form | full-page Z1–Z3 · **+ SearchInput `jobTitleCode` peer orgCode** · View `<dl>` · **cấm** Text · footer-only Lưu/Hủy |
| Profile | SearchInput catalog · **cấm** «Chuyên viên IT» · **P1 boundary** GAP-JOB-06 (không block staff) |
| LAYOUT-06 | page flex column · gridWrap `min-height:0` · skeleton |

## retry.ssot_rereview (prior wave DONE — delta job-title only)

Prior surface (route filter · routesCsv/managed SearchInput · CRUD) = **PASS / done** per STATUS. **This wave** chỉ GAP chức vụ:

| Check | Live prior | Gap this wave |
|-------|------------|---------------|
| list_parity A–D shell | PASS | — |
| Zone B job-title filter | **GAP** | T-UI-JOB-01 |
| Zone C cột Chức vụ catalog name | **GAP** | T-UI-JOB-01 · AC-G-09 |
| Form `jobTitleCode` SearchInput | **GAP** | T-UI-JOB-01 |
| LKP wire `job-titles` | **GAP** | T-UI-LKP-JOB (stub OK GAP-JOB-05) |
| BE `job_title_code` + `?jobTitleCode=` | **GAP** | T-BE-JOB-01 |
| BFF QS + LKP proxy | **GAP** | T-BFF-JOB-01 |

**Cấm** rewrite shell A–D / tree / pagination đã DONE — chỉ delta job-title cùng surface.

## Tasks

### KEEP — prior DONE (không re-open)

| id | page | layer | deps | status | DoD |
|----|------|-------|------|--------|-----|
| T-CTX-01 | users | docs | — | **done** | Kind B LinPageLayout |
| T-PERM-01 | users | ui+api | T-CTX-01 | FE **done** · BE stub | `integration.users.read\|create\|update\|delete` |
| T-BE-01 | users | api | T-CTX-01 | **done** | `?route=` + validate RoutesCsv / OrgCode / ManagedUserIdsCsv |
| T-BE-02 | users | migration | T-BE-01 | **n/a** | Schema_RmmsUsers DONE |
| T-BFF-01 | users | bff | T-BE-01 | **done** | QS forward `route` |
| T-UI-LIST-01 | users | ui | T-BFF-01 | **done** | shell + filter tuyến SearchInput |
| T-UI-FORM-01 | users | ui | T-UI-LIST-01 | **done** | full-page · View `<dl>` |
| T-UI-ACT-01 | users | ui | T-UI-LIST-01 | **done** | Đổi MK · Phân tuyến / Cán bộ QL SearchInput |
| T-UI-MAP-FORM | users | ui | T-UI-FORM-01 | **done** | routesCsv SearchInput multi |
| T-UI-LKP-01 | users | ui | T-BE-CRUD-01 | **done** | road-route + users |
| T-UI-FIELD-01 | users | ui | T-UI-MAP-FORM | **done** | cấm Text `routesCsv` |
| T-UI-PROD-01 | users | ui | T-UI-FORM-01 | **done** | cấm Resource/Slideout/View=readOnly |
| T-UI-UX-01 | users | ui | T-UI-LIST-01 | **done** | spacing · Lin confirm |
| T-BE-CRUD-01 | users | api | T-BE-01 | **done** | CRUD + validate |
| T-QA-01 | users | qa | T-UI-FORM-01 | **done** | scenarios list A–D + `?route=` |
| QA-CRUD | users | qa | T-UI-ACT-01 | **done** | Create/Edit/View + assign + pwd + delete |

### DELTA — job-title (this wave · emit SA)

| id | page | layer | deps | status | DoD |
|----|------|-------|------|--------|-----|
| T-BE-JOB-01 | users | api | T-SA-01 | **pending** | Migration **ADD** `job_title_code` (không bảng mới) · DTO expose code+name · denorm `JobTitle`/`Position` = catalog name · list `GET …/users?jobTitleCode=` · Create/Edit POST/PUT + `jobTitleCode` · validate soft (GAP-JOB-05 stub OK) · SHARE=`tenant_keep` · **cấm** ERP.* |
| T-BFF-JOB-01 | users | bff | T-BE-JOB-01 | **pending** | QS forward `jobTitleCode` · proxy LKP `job-titles` (+`/search`) · **cấm** endpoint mới ngoài Integration |
| T-UI-JOB-01 | users | ui | T-SA-01 · T-BFF-JOB-01 | **pending** | Zone B SearchInput filter `jobTitleCode` `catalogKind=job-title` page=1 · Zone C cột **Chức vụ** name(**≠** roleCode) AC-G-09 · Form SearchInput peer orgCode · View `<dl>` · **cấm** Text · `getList({ jobTitleCode })` |
| T-UI-LKP-JOB | users | ui | T-BE-JOB-01 | **pending** | Wire LKP `job-titles/search` (stub OK nếu catalog chưa live) · value=`jobTitleCode` · display=name · **cấm** native Select / invent package |
| T-QA-JOB-01 | users | qa | T-UI-JOB-01 | **pending** | scenarios delta: filter chức vụ · col name · form SearchInput · View dl · soft empty LKP |
| QA-JOB-CRUD | users | qa | T-UI-JOB-01 | **pending** | Create/Edit persist code · list filter · display name |

## Action inventory — KEEP (GAP-P2-ACT)

| UI action | Zone | Pair |
|-----------|------|------|
| Thêm | toolbar B | GET/POST `/integration/users/new` |
| Sửa / Xem | toolbar + row | GET/PUT `/integration/users/:id` |
| Sao chép | row + form view | POST create `?copyFrom=` |
| Xóa | toolbar + row | DELETE `{id}` · Lin Modal |
| Phân tuyến | row | POST `{id}/assign-routes` · SearchInput multi road-route |
| Cán bộ QL | row | POST `{id}/managed-users` · SearchInput multi users |
| Đổi MK | toolbar + row | POST `{id}/change-password` |
| Hồ sơ / Ban.TK / Đăng xuất / VỀ TRANG CHỦ | — | **SKIP** P1 (GAP-PO-USR-06 / GAP-JOB-06) |

## FormMode ↔ API (delta job-title)

| Mode | API |
|------|-----|
| List+filter | `GET …/users?jobTitleCode=` (+ KEEP `search`·`status`·`role`·`orgCode`·`route`) |
| Create/Copy | `POST …/users` + `jobTitleCode` |
| Edit | `PUT …/users/{id}` + `jobTitleCode` |
| View | `GET …/users/{id}` |
| LKP | `GET …/job-titles/search` |

## T-BE / T-BFF detail — KEEP + delta

| Item | Spec |
|------|------|
| List query | `search` · `status` · `role` · `orgCode` · `route` · **`jobTitleCode`** · `page` · `pageSize` |
| `jobTitleCode` | Trim; exact match code · empty = no filter · display name from catalog/denorm |
| Persist | col `job_title_code` · denorm JobTitle = catalog name |
| Migration | ADD column only · **không** bảng mới |
| LKP | Integration `job-titles` · soft GAP-JOB-05 stub |
| BFF | proxy-only · QS passthrough `jobTitleCode` · X-Company-Id |
| SHARE | `tenant_keep` |
| TZ / XCO | n/a |

## SD flags

| Flag | Value |
|------|-------|
| SD-BFF | proxy-only |
| SD-AUTH | stub local perms |
| SD-JOB | **delta** LKP job-titles soft stub |
| SD-TOKEN | reuse existing API client |
| SD-HEADER | X-Company-Id forward |

## GAP (bind)

| ID | Sev | TL |
|----|-----|-----|
| GAP-F-USR-05 | P1 | IN T-*-JOB |
| GAP-DA-USR-JOBTITLE-UI/API | P0 | IN T-UI-JOB / T-BE-JOB |
| GAP-JOB-05 | soft | stub OK |
| GAP-JOB-06 | boundary | Profile out P1 |
| GAP-F-USR-01 | P2 | no block |

## Handoff → Dev

1. **Không** rewrite list shell A–D / grid / pagination / tree / route filter đã DONE.
2. Implement **cùng surface** delta: Zone B `jobTitleCode` + col Chức vụ + form SearchInput + BE migration/DTO/`?jobTitleCode=` + BFF QS + LKP wire.
3. Bind enum **value** SA (role/status KEEP) · jobTitle display = catalog **name** (**≠** roleCode).
4. Chỉ repo `Linm.RMMS.WebService` domain Integration — **cấm ERP.***
5. VERIFY (Dev role): MFE `yarn build` PASS · BE `dotnet build` API+BFF PASS — ghi implement § Build. Fail → **cấm** `completed` / handoff QA.
6. E2E / `yarn start:std` = **chỉ** QA role · **cấm** TL.
7. Roles sau = **pending** đến lượt (chain ON · autoApprove ON).

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-team-lead |
| skillVersion | 2026.08.09.02 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.3 |
| generatedAt | 2026-09-18T16:25:00.000Z |
| versionGate | rechecked |
| version_mismatch_action | recheck_new (STATUS) |
| contentHashAnaly | sha256:8bd9897e1ab2483fdb96e9a37492d87c38c7e709c2e3df118c7b884f5d4bb257 |
| orchestratorSkillVersion | 2026.08.08.21 |
| dataAnalySkillVersion | 2026.08.08.20 |
| poSkillVersion | 2026.08.08.30 |
| designSkillVersion | 2026.08.08.31 |
| saSkillVersion | 2026.08.08.21 |

---
<!-- Version meta: skillVersion=2026.08.09.02 · schemaVersion=2 · workflowVersion=2026.08.09.02 · rulesVersion=2026.08.09.3 · versionGate=rechecked -->
