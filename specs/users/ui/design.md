# Design — users (Quản lý người dùng / tổ chức)

| Field | Value |
|-------|-------|
| feature | `users` |
| Feature Kind | **B** — Catalog list A–D + **tree master** + **full-page** form (`UsersFormPage`) · **cấm** Slideout |
| status | `confirmed` |
| design_confirm | **approve** (`autoApprove=ON` · SA chain `task_810854fa`) |
| changeScope | `edit_page` |
| packKind | `list` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Integration` (`/integration/users`) |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/integration/users` |
| domain | **Integration** |
| prior | PO `confirmed` · `po/requirement.md` · GAP-PO-USR-01..09 · data-analy hash `sha256:0e46bf2c8b232a40f403e2777ef387f8cdea1b04edafa0c04edbca1bb07024b1` |
| autoApprove | **ON** (`task_810854fa`) → agent confirm Design + SA |
| updatedAt | `2026-08-15T08:36:00.000Z` |
| taskId | `task_7dfdf128` |

## 0. Context & Demo (from PO)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/users.md` | Kind B list + form; **regen** khỏi Slideout / Select / View=`readOnly` |
| DEM-01 | `Linm.RMMS.Demo/src/demo/features/users-demo.html` → `integration/users.html` | Visual SSOT — **skip** chrome / Ban.TK / Hồ sơ / Đăng xuất |
| DI-02 | `specs/_data-analy/features/users-control-hint.md` | controlHint SSOT |
| DI-03 | `org-unit-seed.json` · `road-route-seed.json` | 60 org · 38 tuyến CUC2 |

Persona: Admin hạt/công ty. Pack **không** clone chrome demo. Auth host tách = GAP-F-USR-01 **P2 không block**.

## 1. Kind + UI pattern

| | |
|--|--|
| Feature Kind | **B** |
| List pattern | **1×** `LinPageLayout` kind=catalog — **cấm** nested `CatalogListShell` |
| Grid | `LinCatalogDataGrid` · kéo cột **default ON** |
| Footer | `LinCatalogListPagination` — **cấm** footerPagination / pageSizeBar / raw table production |
| Tree | Zone C master **org-unit** — chọn node → `?orgCode=` |
| Form pattern | **Full-page** `UsersFormPage` C/E/V/Copy — **cấm** Resource · **cấm** Slideout (GAP-PO-USR-01) |
| Routes | List `/integration/users` · Create `/integration/users/new` · Edit/View `/integration/users/:id` |
| Toolbar SSOT | `catalog-list-toolbar` + `erp-control-icon-map` (`editConfig`=`fa-cog`) |
| View | **`<dl>` / display** — **cấm** Input `readOnly` xám (GAP-PO-USR-01) |
| Extra | Đổi MK modal · Phân tuyến modal · Cán bộ QL modal — **IN P1** row/toolbar user đang chọn |

## 2. Screens / zones

| Screen | FormMode | Zones | Controls |
|--------|----------|-------|----------|
| Quản lý người dùng | list | **A Header · B Toolbar+filter · C Tree+Grid · D Pagination** | SearchTextInput + SearchInput role/status/route · tree org |
| Form người dùng | create/edit/view/copy | **Full-page** header + body + footer | fields §3 · footer-only Lưu/Hủy |
| Đổi mật khẩu | modal | 3 password | Title Case — **cấm** ALL CAPS GOVOne |
| Phân tuyến | modal | SearchInput multi `road-route` | **cấm** CSV thuần |
| Cán bộ QL | modal | SearchInput multi `users` | **cấm** CSV thuần |

### Zone A — Header

- Icon `fa-user-shield` + title **Quản lý người dùng** (22px)
- **Cấm** nút Thêm mới / Tạo mới trên A
- Badge Auth tạm Integration — informational only

### Zone B — Toolbar + filter (PO DoD)

**Trái (filter + icon):**

| key | Label | Control (Design chốt) | catalogKind |
|-----|-------|------------------------|-------------|
| search | Tìm đoạn đường / tuyến / người dùng | `SearchTextInput` | text — mã · họ tên · username · tuyến |
| role | Vai trò | `SearchInput` | enum init-data `roles` — **cấm** native `<select>` |
| status | Trạng thái | `SearchInput` | enum init-data `statuses` |
| route | Tuyến / đoạn đường | `SearchInput` | **road-route** · **IN P1** (GAP-PO-USR-05) |
| orgCode | Tổ chức | tree Zone C | **org-unit** · node → `?orgCode=` |
| — | Làm mới | `fa-sync-alt` | reload · page=1 |
| — | Lịch sử | `fa-history` | stub `LinCatalogHistoryModal` |
| — | Sửa config | `fa-cog` | column config |
| — | Xóa | `fa-trash` | khi có selection · **Lin confirm** — **cấm** `window.alert` / `window.confirm` |

**Phải:** **Tạo mới** primary (`fa-plus`) — **chỉ trên B** → `/integration/users/new`.

**Cấm trên B (P1):** Hồ sơ · Đăng xuất · VỀ TRANG CHỦ · Ban.TK (GAP-PO-USR-06). Đổi MK **không** trên shell — chỉ row menu / khi có user chọn.

Filter đổi → **page=1** (search must work).

### Zone C — Tree + Grid

- Trái: cây tổ chức (Tất cả + CUC2 nodes). Chọn node lọc user.
- Phải: card title **Danh sách người dùng**
- Help: nhấn đúp / menu dòng — Xem · Sửa · Sao chép · Xóa · Đổi MK · Phân tuyến · Cán bộ QL
- Flex + skeleton load — **cấm** blank body
- Columns (kéo cột ON): STT · □ · **Mã** · **Họ tên** · **Tổ chức** · **Vai trò / Cấp** · **Tuyến** · **Trạng thái** · **SĐT** · ⋯
- Click mã → View **full-page** `<dl>`
- Row menu: **Xem · Sửa · Sao chép · Xóa · Đổi MK · Phân tuyến · Cán bộ QL**

### Zone D — Pagination

`LinCatalogListPagination`: `Tổng: N · Trang x/y` · Hiển thị **50 / 100 / 200 / 500** · FA pager 32×32.

## 3. Field inventory (form) — Design chốt controlHint

| uiField | Label VN | Control | Required | FormMode lock | Notes |
|---------|----------|---------|----------|---------------|-------|
| code | Mã người dùng | `Text` readonly IdCode | auto | all readonly | `USR-YYYYMMDD-NNNN` · copy = mã mới |
| username | Tên đăng nhập | `Text` | * | view=`<dl>` | unique |
| fullName | Họ và tên | `Text` | * | view=`<dl>` | |
| email | Email | `Text` (email) | * | view=`<dl>` | pattern email |
| phone | Số điện thoại | `Text` (tel) | | view=`<dl>` | |
| orgCode | Tổ chức | `SearchInput` | * | view=`<dl>` | `catalogKind=org-unit` — **cấm** Select |
| roleCode | Vai trò / Cấp | `SearchInput` | | view=`<dl>` | enum init-data — **cấm** Select |
| status | Trạng thái | `SearchInput` | | view=`<dl>` | enum — **cấm** Select |
| routesCsv | Tuyến được phân | `SearchInput` multi | | view=`<dl>` | `catalogKind=road-route` · persist CSV codes ∈ 38 CUC2 — **cấm** free-text |
| password | Mật khẩu khởi tạo | `Text` (password) | create/copy | hidden view/edit | chỉ Create/Copy |
| updatedAt | Cập nhật | `Date` | | View display | |

### Password modal

| uiField | Label VN | Control | Required |
|---------|----------|---------|----------|
| currentPassword | Mật khẩu cũ | `Text` (password) | * |
| newPassword | Mật khẩu mới | `Text` (password) | * |
| confirmPassword | Xác nhận mật khẩu mới | `Text` (password) | * khớp new |

### Assign modals

| uiField | Label VN | Control | catalogKind |
|---------|----------|---------|-------------|
| routesCsv | Phân tuyến | `SearchInput` multi | **road-route** |
| managedUserIdsCsv | Cán bộ thuộc QL | `SearchInput` multi | **users** (self) |

### Enum values (P1) — Design chốt value + label

**roleCode** (init-data `roles` — SA chốt API; prototype mock)

| value | Label |
|-------|--------|
| `admin` | Admin |
| `ban-tk` | Ban.TK |
| `ky-thuat` | Kỹ thuật |

**status** (init-data `statuses`)

| value | Label |
|-------|--------|
| `active` | Đang dùng |
| `locked` | Khóa |

**orgCode:** SearchInput Master org-unit (CUC2 60). Prototype mock: `DRVN` · `KHU-II` · `VP-II.2`. **Cấm** invent mã ngoài seed. Thêm tổ chức = navigate master org-unit (GAP-PO-USR-08).

**route / routesCsv:** SearchInput `road-route` ∈ 38 CUC2. Prototype mock: `QL.1` · `QL.14` · `QL.1K`.

### CSS / layout gates

| Rule | Gap |
|------|-----|
| Full-page form · **cấm** Slideout / Resource | GAP-PO-USR-01 · GAP-DA-USR-DESIGN-STALE |
| View `<dl>` — **cấm** Input `readOnly` xám | GAP-PO-USR-01 |
| SearchInput enum — **cấm** native Select | GAP-PO-USR-02 · GAP-DA-USR-SELECT |
| `routesCsv` SearchInput road-route | GAP-PO-USR-03 · GAP-DA-USR-ROUTE |
| `managedUserIdsCsv` SearchInput users | GAP-PO-USR-04 |
| Zone B filter tuyến + `?route=` | GAP-PO-USR-05 |
| Skip chrome Ban.TK / Hồ sơ / Đăng xuất | GAP-PO-USR-06 |
| Xóa: Lin confirm + toast — **cấm** native alert | list-form quality |
| Input pad 6×10 · min-height 32 · focus shadow | T-UI-UX |
| Spacing 4/8/16 · **cấm** `filterMaxWidth` | T-UI-UX |
| Checkbox grid 24×24 · cột STT/□ 48px | T-UI-UX |

## 4. Form full-page wire

```
[Header] [← Quay lại]  Title «Người dùng» · badge Tạo mới|Sửa|Xem|Sao chép
         [📋 Sao chép] [✏ Sửa] khi view — không Lưu/Hủy trên header (footer-only)
[Hint] leave-confirm dirty
[Body C/E/Copy] 2-col · SearchInput org/role/status · SearchInput multi tuyến
[Body View] <dl> display — không Input xám
[Footer] [Hủy] [Lưu] — ẩn khi view
```

- Copy → POST new · IdCode mới
- Dirty leave-confirm khi Hủy / Quay lại
- **Cấm** parent JSON string trên field/DTO

## Prototype (REQUIRED)

| | |
|--|--|
| Artifact | `ui/prototype/users-list-prototype.html` |
| Zones | **A–D** content-only + tree Zone C — skip note/sidebar/menu/chrome |
| Form | **Full-page** (không Slideout) · View = `<dl>` · footer-only Lưu/Hủy |
| Lookups | SearchInput combo mock role/status/route/org-unit/users |
| SSOT | `list-shell-prototype.md` · `erp-control-icon-map` |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/users/ui/prototype/users-list-prototype.html` |

### List wire

```
[A] fa-user-shield + «Quản lý người dùng»
[B] SearchTextInput · role · status · route SearchInput · Làm mới · Lịch sử · fa-cog · Xóa | [+ Tạo mới]
[C] tree org | «Danh sách người dùng» · LinCatalogDataGrid mock · ⋯ menu
[D] Tổng · Hiển thị [50|100|200|500] · pager FA
```

## 5. Map / AI / report (out of pack)

- Auth service tách / IAM JWT production (GAP-F-USR-01)
- Clone chrome demo (logo · hamburger · Ban.TK · Hồ sơ · Đăng xuất · VỀ TRANG CHỦ)
- Excel import users
- Duplicate org-unit master CRUD trên page này
- Events `user.updated` platform bus (optional P2 Patrol cache)

## 6. Open questions (PO closed — Design không re-open)

GAP-PO-USR-01..09 giữ nguyên. SA map lookup org-unit + road-route + `GET …/users?route=` · validate `RoutesCsv` ∈ 38 CUC2. **Cấm ERP.*** · **cấm** `api/v1/rmms/*` · **cấm** parent JSON.

## Confirm

`design_confirm` = **approve** — `autoApprove=ON` (`task_810854fa`) · agent tự confirm · chain SA.

## Handoff → SA

| Field | Value |
|-------|-------|
| Kind / pattern | B · catalog A–D + tree master + **full-page** form |
| Field inventory | §3 · SearchInput orgCode/roleCode/status/routesCsv · SearchInput filter `route` |
| Filters | search · role · status · orgCode · **route** → page=1 |
| Prototype · reviewUrl | § Prototype |
| API prefer | `GET/POST/PUT/DELETE api/v1/integration/users` + `GET …/init-data` + `POST …/change-password` + `POST …/assign-routes` + `POST …/managed-users` + **delta** `GET …/users?route=` · BFF `web-bff/api/v1/integration/users` |
| Lookups (SA chốt) | org-units tree **DONE** · road-route 38 CUC2 · users self-catalog managed |
| Entity | `AppUser` · `rmms_users` · SHARE=`tenant_keep` · **cấm** parent JSON |
| Seed | IdCode `USR-YYYYMMDD-NNNN` |
| Next | SA **confirmed** (`task_810854fa`) · chain team-lead |

## DES-GRID map → Lin\*

| Zone | DES-GRID | Component |
|------|----------|-----------|
| A | DES-GRID-A | `LinPageLayout` header |
| B | DES-GRID-B | `catalogToolbar` + SearchInput filters |
| C | DES-GRID-C1 / C2 | tree org-unit + `LinCatalogDataGrid` + resize ON |
| D | DES-GRID-D | `LinCatalogListPagination` |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design |
| skillVersion | 2026.08.08.31 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.3 |
| generatedAt | 2026-08-15T08:36:00.000Z |
| versionGate | rechecked |
| version_mismatch_action | recheck_new (STATUS) |
| contentHashPriorPo | sha256:task_45437e12 |
| contentHashPriorDataAnaly | sha256:0e46bf2c8b232a40f403e2777ef387f8cdea1b04edafa0c04edbca1bb07024b1 |
| orchestratorSkillVersion | 2026.08.08.21 |
| orchestratorWorkflowVersion | 2026.08.09.02 |
| orchestratorRulesVersion | 2026.08.09.3 |
| dataAnalySkillVersion | 2026.08.08.20 |
| poSkillVersion | 2026.08.08.30 |

---
<!-- Version meta: skillVersion=2026.08.08.31 · schemaVersion=2 · workflowVersion=2026.08.09.02 · rulesVersion=2026.08.09.3 · versionGate=rechecked -->
