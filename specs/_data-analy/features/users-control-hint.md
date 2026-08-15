# Data-analy — controlHint — users (Kind B catalog list + form)

| Field | Value |
|-------|-------|
| feature | `users` |
| packKind | `list` |
| mode | `cluster_import` feature-scoped (retry `roleOnly=data_analy` · **no Excel** in ProductRoot · demo + context + CUC2 catalogs) |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.08.20` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.1` |
| rulesVersion | `2026.08.15.2` |
| versionGate | `rechecked` |
| contentHash | `sha256:0e46bf2c8b232a40f403e2777ef387f8cdea1b04edafa0c04edbca1bb07024b1` |
| headerFingerprint | `sha256:adbb21dd21e61cd2226f445aa066adbb266ee0eb5bf9ae611dbd0c6b53ea6dca` |
| analyzedAt | `2026-08-15T08:27:00.000Z` |
| cluster | — (không Excel header · context + demo HTML + live MFE) |
| taskId | `task_67e5319a` |
| autoApprove | `OFF` |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** lookup API.  
> **Cấm** Dev đoán Text vs SearchInput khi đã có bảng này.  
> **Cấm ERP.*** · domain **Integration** · BE `D:/AI-QLBD/Linm.RMMS.WebService` · prefix `api/v1/integration`.  
> Auth host tách = **GAP-F-USR-01** (không block P1 list pack).

## Sources

| Source | Path | sha256 |
|--------|------|--------|
| Context | `docs/context/features/users.md` | `0e46bf2c8b232a40f403e2777ef387f8cdea1b04edafa0c04edbca1bb07024b1` |
| Control map | `docs/context/_raw/legacy-govone/demo-maps/users-control-map.md` | `2e6a57c9ee88ae29f84f58792697f9cc2953761888aa9be13c197007a437a4a8` |
| Actions | `docs/context/_raw/legacy-govone/demo-maps/users-actions.md` | `9e3ae3592fa01020298d786f3da96f448e20895ee5a8014f22b5ee1c2d8474a9` |
| Demo entry | `Linm.RMMS.Demo/src/demo/features/users-demo.html` | `0c7e8b38d9c4733e737ebf7892a96270805cec43729025986dff0b8502b88329` |
| Demo page | `Linm.RMMS.Demo/src/demo/integration/users.html` | `adbb21dd21e61cd2226f445aa066adbb266ee0eb5bf9ae611dbd0c6b53ea6dca` |
| Shared catalogs | `specs/_data-analy/shared-catalogs/INVESTIGATE-CUC2.md` · `org-unit-seed.json` · `road-route-seed.json` | APPROVED A · 60 org · 38 tuyến |
| MFE live (read) | `Linm.Web.RMMS.Integration` · `/integration/users` · `UsersListPage` + `UsersFormPage` | Kind B list + **full-page** form `<dl>` View |
| Prior design.md | `specs/users/ui/design.md` | **STALE** Slideout + View=`readOnly` vs live full-page `<dl>` |

Normalized header (no Excel):

`code|username|fullName|email|phone|orgCode|roleCode|status|routesCsv|managedUserIdsCsv|password|currentPassword|newPassword|confirmPassword|search`

## Kind / zones (handoff Design)

Pack **list** = Kind **B** catalog (MFE Integration). Demo HTML = Kind B + user-chrome (Hồ sơ / Đăng xuất / VỀ TRANG CHỦ) — **không** clone chrome/topnav/user menu vào MFE list pack.

List-form quality / Dev constitution (SSOT 2026.08.15): **cấm** Resource / **Slideout** / View=`readOnly` Input trên UI list pack. Live MFE **đã** full-page + View `<dl>` — **PASS**. `design.md` còn Slideout — **GAP docs**.

| Zone | Pattern | DoD |
|------|---------|-----|
| A | Header | title «Quản lý người dùng» — **cấm** Thêm mới trên A |
| B | Toolbar + filter | SearchTextInput (mã/tên/tuyến) · SearchInput vai trò · SearchInput trạng thái · **đề xuất** SearchInput tuyến `road-route` · tree org `org-unit` · Tạo mới primary · Refresh · Delete · config · History stub · **search must work** |
| C | `LinCatalogDataGrid` + tree master | kéo cột default ON · row menu Xem/Sửa/Copy/Xóa/Đổi MK/Phân tuyến/Cán bộ QL |
| D | Footer | `LinCatalogListPagination` 50/100/200/500 — **cấm** footerPagination / pageSizeBar / raw table |
| Form | Kind B **full-page** (live MFE `UsersFormPage`) | C/E/V/Copy · View=`<dl>` display (**cấm** Slideout · **cấm** View=`readOnly` Input) · footer Lưu/Hủy · leave-confirm dirty |
| Đổi mật khẩu | Modal Lin* | 3 password + submit — **IN** list pack (row/toolbar) |
| Phân tuyến / Cán bộ QL | Modal Lin* | SearchInput `road-route` / `users` — live đang CSV `Input` — **GAP** |
| Hồ sơ / Đăng xuất / VỀ TRANG CHỦ / Ban.TK… | chrome | **SKIP** — mfe-run-modes shell, không toolbar page |

**Skip chrome:** logo · hamburger · user Hồ sơ/Đăng xuất demo · Ban.TK skin · govone · đổi MK trên **shell** (giữ đổi MK **row** trên user đang chọn).

## Control hint — list filters (Zone B · list pack)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm đoạn đường / tuyến / người dùng | `SearchTextInput` | text | mã · họ tên · username · tuyến (live MFE) |
| role | Vai trò | `SearchInput` | enum | init-data `roles` — live OK SearchInput |
| status | Trạng thái | `SearchInput` | enum | init-data `statuses` — live OK SearchInput |
| orgCode | Tổ chức | tree + filter | **org-unit** | Zone C tree `org-units/tree` · chọn node → `?orgCode=` — live OK |
| route | Tuyến / đoạn đường | `SearchInput` | **road-route** | Legacy `textfield-1031` «Đoạn đường» · **cấm** nhồi vào free-text nếu Design tách filter — live **chưa** filter riêng — GAP |
| checkAll | Chọn tất cả | `Checkbox` | bool | grid selection SSOT — không persist |

## Control hint — form fields (người dùng · list pack)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| code | Mã người dùng | `Text` | auto | IdCode `USR-YYYYMMDD-NNNN` readonly |
| username | Tên đăng nhập | `Text` | * | unique |
| fullName | Họ và tên | `Text` | * | |
| email | Email | `Text` (email) | * | pattern email |
| phone | Số điện thoại | `Text` (tel) | | |
| orgCode | Tổ chức | `SearchInput` | * | `catalogKind=org-unit` · **cấm** Select/`<select>` · live OK SearchInput |
| roleCode | Vai trò / Cấp | `SearchInput` | | enum init-data · **cấm** Select · live OK |
| status | Trạng thái | `SearchInput` | | enum · live OK |
| routesCsv | Tuyến được phân | `SearchInput` (multi) | | `catalogKind=road-route` · persist CSV codes ∈ 38 CUC2 · **cấm** free-text Input — live = `Input` — **GAP-DA-USR-ROUTE** |
| password | Mật khẩu khởi tạo | `Text` (password) | create | chỉ Create/Copy |
| updatedAt | Cập nhật | `Date` | | readonly display View |

## Control hint — password modal

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| currentPassword | Mật khẩu cũ | `Text` (password) | * | **cấm** ALL CAPS GOVOne |
| newPassword | Mật khẩu mới | `Text` (password) | * | |
| confirmPassword | Xác nhận mật khẩu mới | `Text` (password) | * | khớp new |

## Control hint — assign modals

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| routesCsv | Phân tuyến | `SearchInput` multi | **road-route** | live Modal CSV text — GAP |
| managedUserIdsCsv | Cán bộ thuộc QL | `SearchInput` multi | **users** | self-catalog · **cấm** CSV thuần |

## Lookup APIs (đề xuất SA — **chưa chốt** trừ CRUD đã DONE)

Domain **Integration** · prefix `api/v1/integration` · BFF `web-bff/api/v1/integration` · repo `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** · **cấm** `api/v1/rmms/*` · **cấm** parent JSON.

| Lookup | API | controlHint consumer | BE |
|--------|-----|----------------------|-----|
| list | `GET /api/v1/integration/users?search=&status=&role=&orgCode=&page=&pageSize=` | Zone B + grid | **DONE** |
| by id | `GET /api/v1/integration/users/{id}` | form View/Edit · XCO | **DONE** |
| create / update | `POST` / `PUT …/users` | form Create/Edit/Copy | **DONE** |
| soft delete | `DELETE …/users/{id}` | toolbar/row | **DONE** |
| init-data | `GET …/users/init-data` | roles · statuses · orgs | **DONE** |
| change-password | `POST …/users/{id}/change-password` | modal MK | **DONE** |
| assign-routes | `POST …/users/{id}/assign-routes` | modal tuyến | **DONE** (body CSV) |
| managed-users | `POST …/users/{id}/managed-users` | modal cán bộ | **DONE** (body CSV) |
| list + route | `GET …/users?route=` | Zone B SearchInput tuyến | **MISSING** đề xuất SA |
| org-units tree | `GET /api/v1/integration/org-units/tree` | Zone C tree | **DONE** reuse |
| org-unit search | `GET …/org-units/search` | SearchInput orgCode | master pack |
| road-route | `GET /api/v1/integration/road-routes/search` | SearchInput routesCsv | master pack |
| users search | `GET …/users` / search | SearchInput managed users | self |

Entity: `AppUser` · table `rmms_users` (Schema_RmmsUsers) · TenantEntity · SHARE=tenant_keep.  
`RoutesCsv` hiện string free — SA nên validate ∈ 38 CUC2 khi LKP P1.  
Perms: `integration.users.read|create|update|delete`.

## Seed / mock

- MFE store: `USR-YYYYMMDD-NNNN` · Ban.TK · org VP-II.* · localStorage fallback
- Demo HTML: Kind B · sourceKind=legacy capture
- Import Excel **out of scope**
- Shared org-unit 60 · road-route 38 APPROVED A

## Actions (list pack P1 vs demo)

| id | label | list pack P1 | Notes |
|----|-------|--------------|-------|
| refresh | Tải lại | **IN** | toolbar |
| filter / search | Lọc / Tìm | **IN** | Zone B |
| create | Tạo mới / Thêm tag | **IN** | toolbar primary → `/integration/users/new` |
| view / edit / copy / delete | row + toolbar | **IN** | live MFE |
| history | Lịch sử | stub | |
| config | Cấu hình lưới | **IN** | `LinListTableConfigModal` |
| change-password | Đổi mật khẩu | **IN** | Modal row — **≠** shell user menu |
| assign-routes | Phân tuyến | **IN** | Modal |
| managed-users | Phân cán bộ QL | **IN** | Modal |
| user-profile / logout / home / Ban.TK | User chrome | **SKIP** | mfe-run-modes |

## GAP (data-analy → PO/Design/SA/TL)

| ID | Gap | Severity | Hướng |
|----|-----|----------|-------|
| GAP-DA-USR-ROUTE | Form/modal `routesCsv` = `Input` Text; SSOT = SearchInput `road-route` (multi) | P0 list | T-UI-LKP · T-UI-FIELD |
| GAP-DA-USR-MANAGED | `managedUserIdsCsv` CSV text; SSOT = SearchInput `users` | P1 | T-UI-LKP |
| GAP-DA-USR-FILTER-ROUTE | List Zone B chưa SearchInput tuyến · API list chưa `?route=` | P1 | Design Zone B · SA query |
| GAP-DA-USR-DESIGN-STALE | `ui/design.md` còn Slideout + View=`readOnly`; live = full-page `<dl>` | P0 docs | Design re-chốt Kind B form (list-form-quality) |
| GAP-DA-USR-SELECT | design.md còn Select role/status/org; live = SearchInput | P0 docs | Design control-map = SearchInput |
| GAP-F-USR-01 | Auth service tách | Open | context · không block P1 |
| GAP-REC-USR | Capture chrome 7 actions | Closed P1 | SKIP chrome · map 3 nghiệp vụ + CRUD |

## Handoff

→ **PO:** Kind B list+form · inventory bảng trên · Q UNCLEAR Auth host P2 · **không** mở Excel · **không** clone Ban.TK chrome  
→ **Design:** A–D + controlHint · **không** Text cho `routesCsv` · **không** Slideout / View=`readOnly` · prototype content-only + reviewUrl · `autoApprove=OFF` → **await_confirm**  
→ **SA:** Integration `users` (đã có) · Master road-route lookup + optional `?route=` · validate RoutesCsv ∈ catalog · **cấm** `api/v1/rmms/*` ERP-style · **cấm parent JSON**  
→ **TL:** T-CTX · T-PERM · T-UI-LIST (A–D) · T-UI-FORM · T-UI-ACT · **T-UI-LKP · T-UI-FIELD · T-UI-PROD · T-UI-UX** · T-BE/BFF (delta route query/validate)  
→ **Dev:** sau `confirms.beRepo && uiRepo` · MFE `Linm.Web.RMMS.Integration` · `/integration/users`

Chain: role này **done**. Roles sau = **pending**. `autoApprove=OFF` → Design/SA/Review dừng `await_confirm` khi tới lượt.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.08.08.20 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.15.1 |
| rulesVersion | 2026.08.15.2 |
| generatedAt | 2026-08-15T08:27:00.000Z |
| versionGate | rechecked |
| orchestratorSkillVersion | 2026.08.08.21 |
| orchestratorWorkflowVersion | 2026.08.09.02 |
| orchestratorRulesVersion | 2026.08.09.3 |

---
<!-- Version meta: skillVersion=2026.08.08.20 · schemaVersion=1 · workflowVersion=2026.08.15.1 · rulesVersion=2026.08.15.2 · versionGate=rechecked -->
