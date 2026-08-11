# PO — users (Quản lý người dùng / tổ chức)

| Field | Value |
|-------|-------|
| feature | `users` |
| changeScope | `edit_page` |
| packKind | `list` |
| Feature Kind | **B** catalog list + **Modal/Slideout** form |
| status | `confirmed` (autopilot · task_abbcb82f) |
| updatedAt | 2026-08-10T08:35:43.795Z |

## 1. Goal

CRUD người dùng + lọc theo cây tổ chức (reuse `org-units`) · đổi mật khẩu · hồ sơ · phân tuyến / cán bộ QL (stub) · align demo Kind B → MFE `Linm.Web.RMMS.Integration` `/integration/users` · BE `Linm.RMMS.WebService` domain **Integration** · IdCode `USR-YYYYMMDD-NNNN`.

## 2. Current → New (edit_page)

| Layer | Current | New (delta) |
|-------|---------|-------------|
| Demo | Kind B localStorage Signed · tree + grid + modals | Giữ SSOT UX · 7 actions legacy |
| MFE | **MISSING** route `/integration/users` | `LinPageLayout` · tree sidebar · `LinCatalogDataGrid` · `LinCatalogListPagination` · slideout form · pwd/profile modals |
| API client | — / demo only | BFF → `api/v1/integration/users` (+ org-units tree reuse) |
| BE | GAP Auth host · no `rmms_users` | Greenfield Integration (**cấm** ERP.* · **cấm** invent `api/v1/users` ngoài prefix integration) |

## 3. Personas / DoD

- Persona: Admin hạt/công ty · Ban.TK
- DoD:
  1. List load + search (đoạn đường/tuyến/user) + filter role/status/org
  2. Cây tổ chức chọn node → lọc user theo `orgCode`
  3. Toolbar: Thêm · Làm mới · Hồ sơ · Đổi MK · config `fa-cog`
  4. Row menu: Xem · Sửa · Sao chép · Phân tuyến · Cán bộ QL · (Xóa soft)
  5. Form modal đủ field · View = `readOnly` · IdCode USR-*
  6. Đổi mật khẩu 3 field + submit stub
  7. FE `yarn typecheck` + `yarn build` PASS · BE `dotnet build` PASS

## 4. CTX / DEM inventory

| Source | Path |
|--------|------|
| Context | `docs/context/features/users.md` |
| Control map | `docs/context/_raw/legacy-govone/demo-maps/users-control-map.md` |
| Actions | `docs/context/_raw/legacy-govone/demo-maps/users-actions.md` |
| Demo | `Demo/.../integration/users.html` |
| MFE | `Linm.Web.RMMS.Integration` `/integration/users` |

### List columns (Grid AC)

STT · Mã · Họ tên · Tổ chức · Vai trò / Cấp · Tuyến · Trạng thái · SĐT · actions

### Form fields

Mã · Username* · Họ tên* · Email* · SĐT · Tổ chức* · Vai trò · Trạng thái · Tuyến (multi CSV)

### controlHint (data-analy / control-map)

| Field | Hint |
|-------|------|
| search | SearchTextInput |
| role / status / org filter | Select |
| password ×3 | TextField password |
| org tree | LinTreeNav / sidebar list |

## 5. Out of scope

- Auth service tách hoàn toàn (GAP-F-USR-01) — host tạm Integration
- Deep IAM / JWT scopes production
- Clone skin GOVOne

## 6. Handoff → Design

- Kind B list zones A–D · tree in C · Slideout/Modal form Z1–Z3 · pwd modal
- prototype + reviewUrl bắt buộc
- Reuse org-unit tree data (không duplicate master CRUD org trên page này ngoài «Thêm TC» stub → navigate/master)

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po |
| skillVersion | 2026.08.08.30 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.3 |
| generatedAt | 2026-08-10T08:35:43.795Z |
| versionGate | rechecked |
