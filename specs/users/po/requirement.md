# PO — users (Quản lý người dùng / tổ chức)

| Field | Value |
|-------|-------|
| feature | `users` |
| changeScope | `edit_page` |
| packKind | `list` |
| Feature Kind | **B** — Catalog list A–D + **tree master** + **full-page** form (`UsersFormPage`) · **cấm** Slideout |
| status | `done` |
| requestSource | run packet `task_45437e12` · `/agent-qldb-workflow` · roleOnly=`po` · `/agent-po` |
| autoApprove | **OFF** (Design gate → `await_confirm` khi tới lượt) |
| prior | data-analy `done` (`confirmed`) · controlHint `specs/_data-analy/features/users-control-hint.md` · contentHash `sha256:0e46bf2c8b232a40f403e2777ef387f8cdea1b04edafa0c04edbca1bb07024b1` · cluster `specs/users/specs/_data-analy/clusters/users.md` **không tồn tại** — SSOT = feature controlHint · **no Excel** |
| updatedAt | `2026-08-15T08:30:00.000Z` |
| taskId | `task_45437e12` |

## 1. Goal

Chỉnh trang **Quản lý người dùng / tổ chức** Kind B catalog list + form **full-page**: shell A–D · cây tổ chức lọc user · toolbar · **search must work** · row menu · View = display (`<dl>`) · Create/Edit/Copy · đổi mật khẩu modal · phân tuyến / cán bộ QL (SearchInput, không CSV thuần). Align demo → MFE `Linm.Web.RMMS.Integration` `/integration/users` · BE `Linm.RMMS.WebService` domain **Integration** · `api/v1/integration/users`. IdCode `USR-YYYYMMDD-NNNN`. **Cấm ERP.*** · **cấm** `api/v1/rmms/*` · **cấm** parent JSON.

Persona: Admin hạt/công ty.

Pack P1 **không** clone chrome demo (Ban.TK · Hồ sơ · Đăng xuất · VỀ TRANG CHỦ). List CRUD + tree + form full-page **đã live** — PO chốt **controlHint + GAP** sau data-analy (`routesCsv` Text · filter tuyến thiếu · `design.md` stale Slideout/Select/View=`readOnly`).

Auth host tách = **GAP-F-USR-01** — **không block P1** (host tạm Integration).

## 2. Current → New (edit_page)

| Layer | Current | New (delta) |
|-------|---------|-------------|
| Demo | Kind B + user-chrome 7 actions · localStorage | Giữ visual SSOT demo; pack **không** clone chrome / Ban.TK skin |
| MFE list | Kind B `/integration/users` · tree org · SearchText + SearchInput role/status | 1× `LinPageLayout` · Zone A–D · tree master Zone C · `LinCatalogDataGrid` kéo cột default ON · footer `LinCatalogListPagination` — **cấm** nested CatalogListShell · footerPagination · pageSizeBar · raw table · **đề xuất** SearchInput tuyến `road-route` |
| MFE form | `UsersFormPage` full-page · View `<dl>` · org/role/status SearchInput · `routesCsv` = **Input** | Giữ full-page `/integration/users/new` · `/:id` · View = **`<dl>`** (**cấm** Slideout · **cấm** Resource · **cấm** View=`readOnly` Input) · `routesCsv` = **SearchInput multi `road-route`** · footer-only Lưu/Hủy · leave-confirm dirty |
| Filter | search free-text · role/status SearchInput · org tree | + SearchInput tuyến `catalogKind=road-route` (GAP-DA-USR-FILTER-ROUTE) · **cấm** native Select |
| Assign modals | CSV `Input` tuyến / cán bộ | SearchInput multi `road-route` / `users` |
| Đổi MK | Modal 3 password | **IN P1** row/toolbar trên user đang chọn — **≠** shell user menu |
| API | CRUD + init-data + change-password + assign-routes + managed-users **DONE** | Giữ · **delta** `GET …/users?route=` · validate `RoutesCsv` ∈ 38 CUC2 · **không** parent JSON |
| BE | `Linm.RMMS.WebService` · Integration · `AppUser` / `rmms_users` | SHARE=`tenant_keep` · **cấm ERP.*** |

## 3. DoD (đo được)

1. List load + **search work** (mã · họ tên · username · tuyến) — page=1 khi filter đổi.
2. Zone A: title «Quản lý người dùng» — **cấm** Thêm mới trên A.
3. Zone B: SearchTextInput · SearchInput vai trò · SearchInput trạng thái · SearchInput tuyến `road-route` · tree org chọn node → `?orgCode=` · Tạo mới **primary trên B** · Làm mới · Delete · config `fa-cog` · History stub.
4. Zone C: tree org + grid STT · □ · Mã · Họ tên · Tổ chức · Vai trò / Cấp · Tuyến · Trạng thái · SĐT · actions; row menu **Xem · Sửa · Sao chép · Xóa · Đổi MK · Phân tuyến · Cán bộ QL**.
5. Zone D: `LinCatalogListPagination` pageSize **50 / 100 / 200 / 500**.
6. Form full-page: validate + save · leave-confirm dirty · Copy → POST new · IdCode `USR-YYYYMMDD-NNNN` readonly · footer-only Lưu/Hủy.
7. View = **display `<dl>`** (không Input `readOnly` xám).
8. Lookup: orgCode / roleCode / status / routesCsv / managedUserIdsCsv = **SearchInput** — **cấm** native Select · **cấm** free-text cho tuyến.
9. Đổi mật khẩu: 3 field password + submit (label Title Case, **cấm** ALL CAPS GOVOne).
10. FE `yarn build` (+ typecheck nếu có) PASS · BE `dotnet build` PASS khi đụng API — Dev ghi implement § Build.
11. Live shell: title + toolbar + grid/empty **không** blank/title-clip.

## 4. CTX / DEM / DI inventory

| ID | Path | Loại |
|----|------|------|
| CTX-01 | `docs/context/features/users.md` | feature |
| CTX-02 | `docs/context/_raw/legacy-govone/demo-maps/users-control-map.md` | control-map (legacy chrome — **SKIP** clone) |
| CTX-03 | `docs/context/_raw/legacy-govone/demo-maps/users-actions.md` | 7 actions — 3 nghiệp vụ IN + chrome SKIP |
| DEM-01 | `Linm.RMMS.Demo/src/demo/features/users-demo.html` | demo entry |
| DEM-02 | `Linm.RMMS.Demo/src/demo/integration/users.html` | page |
| DI-01 | — | **no Excel cluster** |
| DI-02 | `specs/_data-analy/features/users-control-hint.md` | controlHint |
| DI-03 | `specs/_data-analy/shared-catalogs/INVESTIGATE-CUC2.md` · `org-unit-seed.json` · `road-route-seed.json` | 60 org · 38 tuyến APPROVED A |
| MFE | `Linm.Web.RMMS.Integration` `/integration/users` · `/new` · `/:id` | UI |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP Integration | API |

## 5. controlHint (PO chốt từ data-analy — Design map UI · SA map API)

### List filters (Zone B)

| Field key | Label | controlHint | catalogKind |
|-----------|-------|-------------|-------------|
| search | Tìm đoạn đường / tuyến / người dùng | `SearchTextInput` | text (mã · họ tên · username · tuyến) |
| role | Vai trò | `SearchInput` | enum init-data `roles` |
| status | Trạng thái | `SearchInput` | enum init-data `statuses` |
| orgCode | Tổ chức | tree + filter | **org-unit** · chọn node → `?orgCode=` |
| route | Tuyến / đoạn đường | `SearchInput` | **road-route** · **IN P1** (GAP-DA-USR-FILTER-ROUTE) |
| checkAll | Chọn tất cả | `Checkbox` | grid selection — không persist |

### Form fields

| Field key | Label | controlHint | required |
|-----------|-------|-------------|----------|
| code | Mã người dùng | `Text` readonly IdCode `USR-YYYYMMDD-NNNN` | auto |
| username | Tên đăng nhập | `Text` unique | * |
| fullName | Họ và tên | `Text` | * |
| email | Email | `Text` (email) | * |
| phone | Số điện thoại | `Text` (tel) | |
| orgCode | Tổ chức | `SearchInput` `org-unit` | * |
| roleCode | Vai trò / Cấp | `SearchInput` enum init-data | |
| status | Trạng thái | `SearchInput` enum | |
| routesCsv | Tuyến được phân | `SearchInput` multi `road-route` | persist CSV codes ∈ 38 CUC2 |
| password | Mật khẩu khởi tạo | `Text` (password) | create / copy only |
| updatedAt | Cập nhật | `Date` | View display |

### Password modal

| Field key | Label | controlHint | required |
|-----------|-------|-------------|----------|
| currentPassword | Mật khẩu cũ | `Text` (password) | * |
| newPassword | Mật khẩu mới | `Text` (password) | * |
| confirmPassword | Xác nhận mật khẩu mới | `Text` (password) | * khớp new |

### Assign modals

| Field key | Label | controlHint | catalogKind |
|-----------|-------|-------------|-------------|
| routesCsv | Phân tuyến | `SearchInput` multi | **road-route** |
| managedUserIdsCsv | Cán bộ thuộc QL | `SearchInput` multi | **users** (self) |

## 6. Open questions — PO chốt (UNCLEAR / GAP data-analy)

| ID | Question | Decision (PO) |
|----|----------|----------------|
| GAP-PO-USR-01 · GAP-DA-USR-DESIGN-STALE | design.md Slideout + View=`readOnly` vs live full-page `<dl>` | **Full-page** `UsersFormPage`. **Cấm** Slideout · **cấm** Resource. Design **regen** prototype A–D + form + reviewUrl. |
| GAP-PO-USR-02 · GAP-DA-USR-SELECT | design.md Select role/status/org | **SearchInput**. **Cấm** native Select. Live MFE đã SearchInput — Design control-map khớp live + SSOT. |
| GAP-PO-USR-03 · GAP-DA-USR-ROUTE | `routesCsv` Input Text | **IN P1:** SearchInput multi `catalogKind=road-route`. **Cấm** free-text. SA validate ∈ 38 CUC2. |
| GAP-PO-USR-04 · GAP-DA-USR-MANAGED | `managedUserIdsCsv` CSV text | **IN P1:** SearchInput multi `users`. **Cấm** CSV thuần trên UI. |
| GAP-PO-USR-05 · GAP-DA-USR-FILTER-ROUTE | Zone B chưa filter tuyến · list API chưa `?route=` | **IN P1:** SearchInput tuyến + SA query `?route=`. |
| GAP-PO-USR-06 · GAP-REC-USR | Capture 7 actions chrome | **SKIP** Ban.TK · Hồ sơ · Đăng xuất · VỀ TRANG CHỦ (mfe-run-modes). **IN:** Thêm · Đổi MK **row** · Phân tuyến · Cán bộ QL · CRUD. |
| GAP-PO-USR-07 · GAP-F-USR-01 | Auth service tách | **P2 / UNCLEAR** — không block P1. Host Integration. |
| GAP-PO-USR-08 | Thêm tổ chức trên page users | **Navigate/master org-unit** — không duplicate CRUD org trên pack này. |
| GAP-PO-USR-09 | parent JSON / ERP path | **Cấm** parent JSON. **Cấm** `ERP.*` · `api/v1/rmms/*`. BE = `D:/AI-QLBD/Linm.RMMS.WebService`. |

## 7. Grid AC (REQUIRED · list)

| ID | AC |
|----|-----|
| AC-G-01 | Zones **A Header · B Toolbar · C Tree+Grid · D Pagination** |
| AC-G-02 | Search + role/status/org/route apply → page=1 |
| AC-G-03 | Row menu Xem / Sửa / Copy / Xóa / Đổi MK / Phân tuyến / Cán bộ QL |
| AC-G-04 | `LinCatalogDataGrid` + kéo cột default ON |
| AC-G-05 | Footer `LinCatalogListPagination` 50/100/200/500 |
| AC-G-06 | 1× `LinPageLayout` — **cấm** nested CatalogListShell |
| AC-G-07 | Flex + skeleton load — **cấm** blank body |
| AC-G-08 | Tree master org-unit — chọn node lọc user |

## 8. Out of scope (this pack)

- Auth service tách / IAM JWT production (GAP-F-USR-01)
- Clone chrome demo (logo · hamburger · Ban.TK · Hồ sơ · Đăng xuất · VỀ TRANG CHỦ)
- Clone skin GOVOne · ALL CAPS labels
- Excel import users
- Duplicate org-unit master CRUD trên page này
- Events `user.updated` platform bus (optional P2 Patrol cache)
- Invent org/route codes ngoài CUC2 seed

## 9. Handoff → Design

| Field | Value |
|-------|-------|
| Kind | B catalog list A–D + tree master + **full-page** form |
| Prototype | content-only zones A–D · `list-shell-prototype.md` · **skip** note/sidebar/menu/chrome demo |
| reviewUrl | bắt buộc · `autoApprove=OFF` → **await_confirm** (user Approve board) |
| controlHint | bảng §5 — **không** Select · **không** Text cho `routesCsv` · **không** Slideout / View=`readOnly` Input |
| Demo visual | `users-demo.html` → `integration/users.html` |
| BE | `api/v1/integration/users` · lookup org-unit + road-route · query `?route=` |
| Next roles | design → sa → team-lead → dev → qa → review = **pending** đến lượt |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po |
| skillVersion | 2026.08.08.30 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.3 |
| generatedAt | 2026-08-15T08:30:00.000Z |
| versionGate | rechecked |
| version_mismatch_action | recheck_new (STATUS) |
| contentHashPriorDataAnaly | sha256:0e46bf2c8b232a40f403e2777ef387f8cdea1b04edafa0c04edbca1bb07024b1 |
| orchestratorSkillVersion | 2026.08.08.21 |
| orchestratorWorkflowVersion | 2026.08.09.02 |
| orchestratorRulesVersion | 2026.08.09.3 |
| dataAnalySkillVersion | 2026.08.08.20 |
| dataAnalyWorkflowVersion | 2026.08.15.1 |
| dataAnalyRulesVersion | 2026.08.15.2 |

---
<!-- Version meta: skillVersion=2026.08.08.30 · schemaVersion=2 · workflowVersion=2026.08.09.02 · rulesVersion=2026.08.09.3 · versionGate=rechecked -->
