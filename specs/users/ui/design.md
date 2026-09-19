# Design — users (Quản lý người dùng / tổ chức)

| Field | Value |
|-------|-------|
| feature | `users` |
| Feature Kind | **B** — Catalog list A–D + **tree master** + **full-page** form (`UsersFormPage`) · **cấm** Slideout |
| status | `confirmed` |
| design_confirm | **approve** (`autoApprove=ON` · `task_141a68a1`) |
| changeScope | `edit_page` |
| packKind | `list` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Integration` (`/integration/users`) |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/integration/users` + LKP `job-titles` |
| domain | **Integration** |
| prior | PO `confirmed` · `po/requirement.md` (**KEEP** + delta job-title) · analy hash `sha256:8bd9897e1ab2483fdb96e9a37492d87c38c7e709c2e3df118c7b884f5d4bb257` |
| cite | `job-title.md` §5b · GAP-F-USR-05 |
| autoApprove | **ON** (`task_141a68a1`) → agent confirm Design |
| updatedAt | `2026-09-18T16:20:00.000Z` |
| taskId | `task_141a68a1` |

## 0. Context & Demo (from PO)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/users.md` | Kind B list + form · GAP-F-USR-05 |
| CTX-02 | `docs/context/features/job-title.md` §5b | consumer chức vụ |
| DEM-01 | `Linm.RMMS.Demo/src/demo/features/users-demo.html` | hash skip — **cấm** re-scan |
| DI-02 | `specs/_data-analy/features/users-control-hint.md` | controlHint SSOT |
| DI-03 | `users-real-data.md` · `job-title-seed.json` (19) | resolve name |

Persona: Admin hạt/công ty. Pack **không** clone chrome demo. Auth host tách = GAP-F-USR-01 **P2 không block**.

## 0b. Delta Current → New (HARD · edit_page)

| Surface | Current (KEEP) | New (this task) |
|---------|----------------|-----------------|
| Zone B | search · role · status · route · org tree | **+** SearchInput filter `jobTitleCode` · `catalogKind=job-title` |
| Zone C grid | STT · □ · Mã · Họ tên · Tổ chức · **Vai trò** · Tuyến · Trạng thái · SĐT | **+** cột **Chức vụ** = catalog `name(jobTitleCode)` · **≠** Vai trò |
| Form C/E/V | org/role/status SearchInput · không chức vụ | **+** SearchInput `jobTitleCode` peer `orgCode` · View `<dl>` · **cấm** Text |
| Profile/switch | free Position / placeholder risk | SearchInput catalog · **cấm** «Chuyên viên IT» |
| Persist | missing / free JobTitle | `jobTitleCode` · denormalize JobTitle/Position = `name` |
| LKP | org / road-route / users | **+** `GET api/v1/integration/job-titles` (+ `/search`) · BFF same · soft GAP-JOB-05 stub OK |

**Out of pack:** master CRUD `job-title` · invent package Cục/VP · `new_page` staff CRUD · ERP.* · `api/v1/rmms/*` · open-api.

## 1. Kind + UI pattern

| | |
|--|--|
| Feature Kind | **B** |
| List pattern | **1×** `LinPageLayout` kind=catalog — **cấm** nested `CatalogListShell` |
| Grid | `LinCatalogDataGrid` · kéo cột **default ON** |
| Footer | `LinCatalogListPagination` — **cấm** footerPagination / pageSizeBar / raw table production |
| Tree | Zone C master **org-unit** — chọn node → `?orgCode=` |
| Form pattern | **Full-page** `UsersFormPage` C/E/V/Copy — **cấm** Resource · **cấm** Slideout |
| Routes | List `/integration/users` · Create `/integration/users/new` · Edit/View `/integration/users/:id` |
| Toolbar SSOT | `catalog-list-toolbar` + `erp-control-icon-map` (`editConfig`=`fa-cog`) |
| View | **`<dl>` / display** — **cấm** Input `readOnly` xám |
| Extra | Đổi MK · Phân tuyến · Cán bộ QL — **IN P1** |

## 2. Screens / zones

| Screen | FormMode | Zones | Controls |
|--------|----------|-------|----------|
| Quản lý người dùng | list | **A Header · B Toolbar+filter · C Tree+Grid · D Pagination** | SearchTextInput + SearchInput role/status/route/**job-title** · tree org |
| Form người dùng | create/edit/view/copy | **Full-page** | fields §3 · **+ jobTitleCode** · footer-only Lưu/Hủy |
| Đổi mật khẩu | modal | 3 password | Title Case |
| Phân tuyến | modal | SearchInput multi `road-route` | **cấm** CSV thuần |
| Cán bộ QL | modal | SearchInput multi `users` | **cấm** CSV thuần |
| Profile / switch | Home · Auth | SearchInput `job-title` | boundary note SA · **cấm** free text |

### Zone A — Header

- Icon `fa-user-shield` + title **Quản lý người dùng** (22px)
- **Cấm** nút Thêm mới / Tạo mới trên A
- Badge Auth tạm Integration — informational only

### Zone B — Toolbar + filter (PO DoD · KEEP + delta)

**Trái (filter + icon):**

| key | Label | Control (Design chốt) | catalogKind |
|-----|-------|------------------------|-------------|
| search | Tìm đoạn đường / tuyến / người dùng | `SearchTextInput` | text |
| role | Vai trò | `SearchInput` | enum — **≠** chức vụ |
| status | Trạng thái | `SearchInput` | enum |
| route | Tuyến / đoạn đường | `SearchInput` | **road-route** |
| **jobTitleCode** | **Chức vụ** | **`SearchInput`** | **job-title** · **NEW** · optional QS `?jobTitleCode=` |
| orgCode | Tổ chức | tree Zone C | **org-unit** |
| — | Làm mới | `fa-sync-alt` | reload · page=1 |
| — | Lịch sử | `fa-history` | stub |
| — | Sửa config | `fa-cog` | column config |
| — | Xóa | `fa-trash` | Lin confirm |

**Phải:** **Tạo mới** primary (`fa-plus`) — **chỉ trên B**.

**Cấm trên B (P1):** Hồ sơ · Đăng xuất · VỀ TRANG CHỦ · Ban.TK. Filter đổi → **page=1**.

### Zone C — Tree + Grid

- Trái: cây tổ chức. Phải: **Danh sách người dùng**
- Columns (kéo cột ON): STT · □ · **Mã** · **Họ tên** · **Tổ chức** · **Chức vụ** · **Vai trò / Cấp** · **Tuyến** · **Trạng thái** · **SĐT** · ⋯
- **Chức vụ** = `lookupLabel(job-titles, jobTitleCode)` — sample AC: `HAT-TRUONG`→Hạt trưởng · `CHUYEN-VIEN`→Chuyên viên · `TUAN-DUONG`→Tuần đường
- **Vai trò** giữ `roleCode` — **≠** chức vụ (AC-G-09)
- Row menu: Xem · Sửa · Sao chép · Xóa · Đổi MK · Phân tuyến · Cán bộ QL

### Zone D — Pagination

`LinCatalogListPagination`: `Tổng: N · Trang x/y` · Hiển thị **50 / 100 / 200 / 500** · FA pager 32×32.

## 3. Field inventory (form) — Design chốt controlHint

| uiField | Label VN | Control | Required | FormMode lock | Notes |
|---------|----------|---------|----------|---------------|-------|
| code | Mã người dùng | `Text` readonly IdCode | auto | all readonly | `USR-YYYYMMDD-NNNN` |
| username | Tên đăng nhập | `Text` | * | view=`<dl>` | unique |
| fullName | Họ và tên | `Text` | * | view=`<dl>` | |
| email | Email | `Text` (email) | * | view=`<dl>` | |
| phone | Số điện thoại | `Text` (tel) | | view=`<dl>` | |
| orgCode | Tổ chức | `SearchInput` | * | view=`<dl>` | `catalogKind=org-unit` |
| **jobTitleCode** | **Chức vụ** | **`SearchInput`** | | view=`<dl>` | **NEW** · `catalogKind=job-title` · peer orgCode · **cấm** Text · resolve `name` |
| roleCode | Vai trò / Cấp | `SearchInput` | | view=`<dl>` | enum — **≠** jobTitleCode |
| status | Trạng thái | `SearchInput` | | view=`<dl>` | enum |
| routesCsv | Tuyến được phân | `SearchInput` multi | | view=`<dl>` | `road-route` |
| password | Mật khẩu khởi tạo | `Text` (password) | create/copy | hidden view/edit | |
| updatedAt | Cập nhật | `Date` | | View display | |

### Password / Assign modals — KEEP

| uiField | Control | catalogKind |
|---------|---------|-------------|
| currentPassword / newPassword / confirmPassword | `Text` (password) | — |
| routesCsv (modal) | `SearchInput` multi | **road-route** |
| managedUserIdsCsv | `SearchInput` multi | **users** |

### Enum / catalog values (P1)

**roleCode** — KEEP: `admin` · `ban-tk` · `ky-thuat`

**status** — KEEP: `active` · `locked`

**jobTitleCode** (seed 19 · prototype mock subset):

| value | Label | titleGroup |
|-------|-------|------------|
| `HAT-TRUONG` | Hạt trưởng | LEAD |
| `CHUYEN-VIEN` | Chuyên viên | TECH |
| `TUAN-DUONG` | Tuần đường | PATROL |
| `TUAN-KIEM` | Tuần kiểm | PATROL |
| `DOI-TRUONG` | Đội trưởng | LEAD |

Full seed: `docs/context/seed/job-title-seed.json`. **Cấm** invent mã ngoài seed · **cấm** invent package Cục/VP.

### CSS / layout gates — KEEP

| Rule | Gap |
|------|-----|
| Full-page · **cấm** Slideout / Resource | GAP-PO-USR-01 |
| View `<dl>` — **cấm** Input `readOnly` | GAP-PO-USR-01 |
| SearchInput enum — **cấm** native Select | GAP-PO-USR-02 |
| `jobTitleCode` SearchInput — **cấm** Text | GAP-F-USR-05 · GAP-DA-USR-JOBTITLE-UI |
| `routesCsv` SearchInput road-route | GAP-PO-USR-03 |
| Skip chrome Ban.TK / Hồ sơ / Đăng xuất | GAP-PO-USR-06 |
| Input pad 6×10 · min-height 32 · focus shadow | T-UI-UX |
| Spacing 4/8/16 · **cấm** `filterMaxWidth` | T-UI-UX |
| Checkbox 24×24 · STT/□ 48px | T-UI-UX |

## 4. Form full-page wire

```
[Header] [← Quay lại]  Title «Người dùng» · badge Tạo mới|Sửa|Xem|Sao chép
         [📋 Sao chép] [✏ Sửa] khi view — footer-only Lưu/Hủy
[Hint] leave-confirm dirty
[Body C/E/Copy] 2-col · SearchInput org + **jobTitle** peer · role/status · multi tuyến
[Body View] <dl> incl. «Chức vụ» resolved name — không Input xám
[Footer] [Hủy] [Lưu] — ẩn khi view
```

## Prototype (REQUIRED)

| | |
|--|--|
| Artifact | `ui/prototype/users-list-prototype.html` |
| Zones | **A–D** + tree · **delta** B filter job-title · C cột Chức vụ · Form SearchInput |
| Form | Full-page · View `<dl>` «Chức vụ» · footer-only Lưu/Hủy |
| Lookups | mock role/status/route/org/**job-title**/users |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/users/ui/prototype/users-list-prototype.html` |

### List wire (delta)

```
[A] fa-user-shield + «Quản lý người dùng»
[B] SearchTextInput · role · status · route · **job-title** · icons | [+ Tạo mới]
[C] tree org | grid + **cột Chức vụ** · ⋯ menu
[D] Tổng · Hiển thị [50|100|200|500] · pager FA
```

## 5. Map / AI / report (out of pack)

- Auth IAM JWT production (GAP-F-USR-01)
- Clone chrome demo
- Excel import users · master job-title CRUD
- Events `user.updated` bus (optional P2)

## 6. Open questions (PO closed — Design không re-open)

GAP-F-USR-05 **IN** · GAP-JOB-05 soft stub OK · GAP-F-USR-01 P2 no block. SA map LKP `job-titles` + users field `jobTitleCode`. **Cấm ERP.*** · **cấm** `api/v1/rmms/*` · **cấm** open-api.

## Confirm

`design_confirm` = **approve** — `autoApprove=ON` (`task_141a68a1`) · agent tự confirm · chain SA.

## Handoff → SA

| Field | Value |
|-------|-------|
| Kind / pattern | B · catalog A–D + tree + **full-page** · KEEP + delta job-title |
| Field inventory | §3 · **+ jobTitleCode SearchInput** |
| Filters | search · role · status · route · **jobTitleCode** · orgCode → page=1 |
| Prototype · reviewUrl | § Prototype |
| API prefer | users CRUD + `jobTitleCode` · LKP `GET api/v1/integration/job-titles` (+ `/search`) · BFF same · filter `?jobTitleCode=` |
| Lookups | org-unit · road-route · users · **job-titles** (soft GAP-JOB-05) |
| Entity | `AppUser.jobTitleCode` · denormalize JobTitle/Position = name |
| Seed | `job-title-seed.json` (19) · IdCode `USR-…` |
| Next | SA pending · chain `solution-discovery` delta |

## DES-GRID map → Lin\*

| Zone | DES-GRID | Component | Delta |
|------|----------|-----------|-------|
| A | DES-GRID-A | `LinPageLayout` header | — |
| B | DES-GRID-B | `catalogToolbar` + SearchInput | **+ job-title** |
| C | DES-GRID-C1 / C2 | tree + `LinCatalogDataGrid` | **+ col Chức vụ** |
| D | DES-GRID-D | `LinCatalogListPagination` | — |
| Form | DES-FORM | full-page | **+ jobTitleCode** |
| Profile | DES-PROFILE | SearchInput catalog | note boundary |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design |
| skillVersion | 2026.08.08.31 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.3 |
| generatedAt | 2026-09-18T16:20:00.000Z |
| versionGate | rechecked |
| version_mismatch_action | recheck_new (STATUS) |
| contentHashPriorPo | task_e3d2b6f8 |
| contentHashPriorDataAnaly | sha256:8bd9897e1ab2483fdb96e9a37492d87c38c7e709c2e3df118c7b884f5d4bb257 |
| orchestratorSkillVersion | 2026.08.08.21 |
| orchestratorWorkflowVersion | 2026.08.09.02 |
| orchestratorRulesVersion | 2026.08.09.3 |
| dataAnalySkillVersion | 2026.08.08.20 |
| poSkillVersion | 2026.08.08.30 |

---
<!-- Version meta: skillVersion=2026.08.08.31 · schemaVersion=2 · workflowVersion=2026.08.09.02 · rulesVersion=2026.08.09.3 · versionGate=rechecked -->
