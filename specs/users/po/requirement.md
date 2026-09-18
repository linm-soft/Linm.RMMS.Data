# PO — users (Quản lý người dùng / tổ chức)

| Field | Value |
|-------|-------|
| feature | `users` |
| changeScope | `edit_page` |
| packKind | `list` |
| Feature Kind | **B** — Catalog list A–D + tree master + **full-page** form · **cấm** Slideout |
| status | `done` |
| requestSource | run packet `task_e3d2b6f8` · `/agent-qldb-workflow` · roleOnly=`po` · `/agent-po` |
| autoApprove | **ON** |
| e2eQa | **ON** (queued `/agent-qa*` only) |
| prior | data_analy `confirmed` · compact `handoff/data_analy-compact.md` · controlHint + real-data · contentHash `sha256:8bd9897e1ab2483fdb96e9a37492d87c38c7e709c2e3df118c7b884f5d4bb257` · **hash skip** · **cấm** re-scan demo |
| priorPO | **KEEP** baseline route/org SearchInput (task_45437e12) · **delta only** chức vụ |
| cite | `job-title.md` §5b · GAP-F-USR-05 |
| analyTaskId | `task_8c25b03b` |
| updatedAt | `2026-09-18T16:10:00.000Z` |
| taskId | `task_e3d2b6f8` |

## 1. Goal

**KEEP** Kind B catalog list + form full-page `/integration/users` (shell A–D · tree org · SearchInput role/status/route · routesCsv multi · Đổi MK · Phân tuyến / Cán bộ QL) — **đã live**.

**Delta this task (GAP-F-USR-05):** consumer **chức vụ** = catalog `job-title` trên list + form + Profile/switch — persist `jobTitleCode` · hiển thị catalog `name` · **≠** `roleCode`. Align MFE `Linm.Web.RMMS.Integration` · BE `Linm.RMMS.WebService` Integration · LKP `api/v1/integration/job-titles`. **Cấm ERP.*** · **cấm** `api/v1/rmms/*` · **cấm** open-api · **cấm** invent package Cục/VP · **cấm** `new_page` typed CRUD staff · **cấm** master CRUD `job-title` trên pack này.

Persona: Admin hạt/công ty.

## 2. Current → New (edit_page · delta)

| Layer | Current (KEEP live / prior) | New (this task) |
|-------|----------------------------|-----------------|
| List Zone C | Không cột JobTitle · «Vai trò / Cấp» = `roleCode` | **+** cột **Chức vụ** = `lookupLabel(job-titles, jobTitleCode)` — **≠** roleCode |
| Zone B filter | search · role · status · route · org tree | **+** SearchInput filter `job-title` (`jobTitleCode`) |
| Form C/E/V | Org/role/status SearchInput · **không** chức vụ | **+** SearchInput **Chức vụ** peer `orgCode` · persist `jobTitleCode` · View `<dl>` resolve `name` · **cấm** Input text |
| Profile / switch | Auth `Position` free text · risk placeholder «Chuyên viên IT» | SearchInput cùng catalog · **cấm** placeholder «Chuyên viên IT» |
| Persist | missing / free JobTitle text (GAP-JOB-02) | `jobTitleCode` · denormalize `JobTitle`/`Position` = catalog `name` |
| Lookup | org / road-route / users DONE | **+** `GET api/v1/integration/job-titles` (+ `/search`) · BFF same |
| Scope | route/org SearchInput DONE | **Không** invent package · **không** new_page CRUD · master `/mas/chuc-vu` = pack riêng |

## 3. DoD (đo được · delta + KEEP)

**KEEP (prior DoD vẫn đúng):**
1–11 prior: list search · Zone A–D · form full-page · View `<dl>` · SearchInput org/role/status/route/managed · Đổi MK · build Dev ghi · live shell không blank.

**Delta DoD (this task):**
1. List cột **Chức vụ** hiển thị catalog `name` từ `jobTitleCode` (sample: `HAT-TRUONG`→Hạt trưởng · `CHUYEN-VIEN`→Chuyên viên · `TUAN-DUONG`→Tuần đường).
2. Zone B: SearchInput filter chức vụ `catalogKind=job-title` · apply → page=1 · optional QS `?jobTitleCode=`.
3. Form: SearchInput `jobTitleCode` peer `orgCode` · create/edit persist code · View `<dl>` «Chức vụ» = resolved name · **cấm** Text/Input free.
4. `roleCode` cột/field **giữ** — **không** thay / trộn với chức vụ.
5. ProfileTab / switch user: SearchInput catalog · **cấm** placeholder «Chuyên viên IT».
6. LKP wire `job-titles` (stub OK nếu GAP-JOB-05 soft-block) · **cấm** open-api · **cấm** `api/v1/rmms/*`.
7. Seed resolve 19 mã `job-title-seed.json` — **cấm** invent mã ngoài seed.

## 4. CTX / DEM / DI inventory

| ID | Path | Loại |
|----|------|------|
| CTX-01 | `docs/context/features/users.md` | feature · GAP-F-USR-05 |
| CTX-02 | `docs/context/features/job-title.md` §5b | consumer SSOT |
| SEED-01 | `docs/context/seed/job-title-seed.json` | 19 mã · titleGroup LEAD/TECH/PATROL |
| DEM-01 | `Linm.RMMS.Demo/.../users-demo.html` | hash skip · không re-scan |
| DI-01 | `specs/_data-analy/features/users-control-hint.md` | controlHint done |
| DI-02 | `specs/_data-analy/features/users-real-data.md` | real-data done |
| MFE | `Linm.Web.RMMS.Integration` `/integration/users` | UI consumer |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · Integration | users + LKP job-titles |

## 5. controlHint (PO chốt · KEEP + delta)

### List filters (Zone B)

| Field key | Label | controlHint | catalogKind |
|-----------|-------|-------------|-------------|
| search | Tìm… | `SearchTextInput` | text |
| role | Vai trò | `SearchInput` | enum · **≠** chức vụ |
| status | Trạng thái | `SearchInput` | enum |
| orgCode | Tổ chức | tree + filter | **org-unit** |
| route | Tuyến | `SearchInput` | **road-route** |
| **jobTitleCode** | **Chức vụ** | **`SearchInput`** | **job-title** · **NEW** |
| checkAll | Chọn tất cả | `Checkbox` | grid |

### Form fields (delta highlight)

| Field key | Label | controlHint | required |
|-----------|-------|-------------|----------|
| code | Mã người dùng | `Text` readonly IdCode | auto |
| username | Tên đăng nhập | `Text` unique | * |
| fullName | Họ và tên | `Text` | * |
| email | Email | `Text` | * |
| phone | Số điện thoại | `Text` | |
| orgCode | Tổ chức | `SearchInput` `org-unit` | * |
| **jobTitleCode** | **Chức vụ** | **`SearchInput` `job-title`** | | **NEW** · View `<dl>` · **cấm** Text |
| roleCode | Vai trò / Cấp | `SearchInput` enum | · **≠** jobTitleCode |
| status | Trạng thái | `SearchInput` enum | |
| routesCsv | Tuyến được phân | `SearchInput` multi `road-route` | |
| password | Mật khẩu khởi tạo | `Text` (password) | create/copy |
| updatedAt | Cập nhật | `Date` | View |

### Password / Assign modals

**KEEP** prior: Đổi MK 3 password · Phân tuyến `road-route` · Cán bộ QL `users`.

### Profile / switch

| Field key | Label | controlHint | Notes |
|-----------|-------|-------------|-------|
| jobTitleCode / Position | Chức vụ | `SearchInput` `job-title` | sync name · **cấm** «Chuyên viên IT» |

## 6. Open questions — PO chốt

| ID | Question | Decision (PO) |
|----|----------|----------------|
| GAP-F-USR-05 | chức vụ list+form+Profile | **IN P1** SearchInput + persist `jobTitleCode` · cite §5b |
| GAP-DA-USR-JOBTITLE-UI | MFE thiếu field/cột | **IN** Design control-map · Dev T-UI-LIST/FORM |
| GAP-DA-USR-JOBTITLE-API | DTO/LKP thiếu | **IN** SA LKP + users DTO · soft-block GAP-JOB-05 stub OK |
| GAP-JOB-05/02/06 | master API · migrate · Profile | peer job-title pack · **không** invent package · Profile IN nếu cùng MFE boundary |
| GAP-F-USR-01 | Auth tách | **P2 không block** |
| GAP-PO-USR-01…09 | prior route/org/Slideout | **KEEP** decisions prior requirement |

## 7. Grid AC (REQUIRED · list)

| ID | AC |
|----|-----|
| AC-G-01 | Zones **A · B · C Tree+Grid · D Pagination** |
| AC-G-02 | Search + role/status/org/route/**jobTitle** apply → page=1 |
| AC-G-03 | Row menu Xem / Sửa / Copy / Xóa / Đổi MK / Phân tuyến / Cán bộ QL |
| AC-G-04 | `LinCatalogDataGrid` + kéo cột default ON |
| AC-G-05 | Footer `LinCatalogListPagination` 50/100/200/500 |
| AC-G-06 | 1× `LinPageLayout` — **cấm** nested CatalogListShell |
| AC-G-07 | Flex + skeleton — **cấm** blank body |
| AC-G-08 | Tree master org-unit lọc user |
| **AC-G-09** | **Cột Chức vụ** = catalog name(`jobTitleCode`) · **≠** cột Vai trò |

## 8. Screens / Leave (packKind=list)

| Screen | Rule |
|--------|------|
| List | Kind B A–D · delta cột + filter chức vụ |
| Form Create/Edit | full-page · SearchInput `jobTitleCode` · leave-confirm dirty **KEEP** |
| Form View | `<dl>` «Chức vụ» resolved · **cấm** readOnly Input |
| Profile/switch | SearchInput catalog (boundary SA nếu repo Home khác) |

## 9. Out of scope (this pack)

- Master CRUD `job-title` (`/mas/chuc-vu`)
- Auth IAM tách (GAP-F-USR-01)
- Clone chrome demo / GOVOne skin
- Invent mã chức vụ / package Cục/VP ngoài seed
- `new_page` typed CRUD staff
- Excel import users (alias map = peer job-title pack)

## 10. Handoff → Design

| Field | Value |
|-------|-------|
| Kind | B · **KEEP** shell + **delta** Zone B/C + Form + Profile |
| Prototype | content-only · patch list col + form field · reviewUrl |
| autoApprove | **ON** → Design gate auto-confirm |
| controlHint | §5 · SearchInput `job-title` · **cấm** Text chức vụ · **cấm** Slideout |
| real-data | seed 19 · resolve samples § real-data |
| BE | users + `jobTitleCode` · LKP `job-titles` · **cấm** ERP.* |
| Next | design → sa → team-lead → dev → qa → review = **pending** |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po |
| skillVersion | 2026.08.08.30 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.3 |
| generatedAt | 2026-09-18T16:10:00.000Z |
| versionGate | rechecked |
| version_mismatch_action | recheck_new (STATUS) |
| contentHashPriorDataAnaly | sha256:8bd9897e1ab2483fdb96e9a37492d87c38c7e709c2e3df118c7b884f5d4bb257 |
| orchestratorSkillVersion | 2026.08.08.21 |
| orchestratorWorkflowVersion | 2026.08.09.02 |
| orchestratorRulesVersion | 2026.08.09.3 |
| dataAnalySkillVersion | 2026.08.08.20 |
| dataAnalyWorkflowVersion | 2026.08.15.1 |
| dataAnalyRulesVersion | 2026.08.15.2 |

---
<!-- Version meta: skillVersion=2026.08.08.30 · schemaVersion=2 · workflowVersion=2026.08.09.02 · rulesVersion=2026.08.09.3 · versionGate=rechecked -->
