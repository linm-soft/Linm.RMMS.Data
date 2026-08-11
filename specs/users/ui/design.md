# Design — users (Quản lý người dùng / tổ chức)

| Field | Value |
|-------|-------|
| feature | `users` |
| Feature Kind | **B** — Catalog list (+ org tree) + **Slideout** form |
| status | `confirmed` |
| design_confirm | `approve` (autopilot · task_abbcb82f) |
| changeScope | `edit_page` |
| packKind | `list` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Integration` (`/integration/users`) |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/users/ui/prototype/users-list-prototype.html` |
| updatedAt | 2026-08-10T08:36:00.000Z |

## 0. Context & Demo

| ID | Path |
|----|------|
| CTX-01 | `docs/context/features/users.md` |
| MAP-01 | `demo-maps/users-control-map.md` |
| ACT-01 | `demo-maps/users-actions.md` |
| DEM-01 | `Demo/src/demo/integration/users.html` |

## 1. Kind + UI pattern

| | |
|--|--|
| Feature Kind | **B** |
| List | `LinPageLayout` catalog · zones **A–D** · **1** shell (cấm nested CatalogListShell) |
| Grid | `LinCatalogDataGrid` · column resize **ON** |
| Footer | `LinCatalogListPagination` only |
| Form | Slideout Z1–Z3 · View `readOnly` |
| Extra modals | Đổi MK · Hồ sơ · Phân tuyến / Cán bộ QL (stub) |
| Org tree | Sidebar trong Zone C (filter `orgCode`) — data từ org-units |
| Icons | `fa-user-shield` title · toolbar `fa-cog` editConfig |

## 2. Screens / DES-GRID

| Zone | Content | DES-GRID |
|------|---------|----------|
| A | Title «Quản lý người dùng» · icon | DES-GRID-A |
| B | Làm mới · Lịch sử · fa-cog · Thêm · Hồ sơ · Đổi MK | DES-GRID-B |
| C filters | SearchTextInput · Select role · Select status | DES-GRID-C1 |
| C body | Tree (org) + DataGrid users | DES-GRID-C2 |
| D | LinCatalogListPagination | DES-GRID-D |

### Form Z1–Z3

| Zone | Controls |
|------|----------|
| Z1 | Back/Close · title · dirty badge · mode badge |
| Z2 | Fields grid · validation banner |
| Z3 | Lưu · Hủy · Đóng |

## 3. Field inventory (VN)

| uiField | Label | Control | Required |
|---------|-------|---------|----------|
| code | Mã người dùng | Text readonly | auto |
| username | Tên đăng nhập | Text | * |
| fullName | Họ và tên | Text | * |
| email | Email | Text | * |
| phone | Số điện thoại | Text | |
| orgCode | Tổ chức | Select | * |
| roleCode | Vai trò / Cấp | Select | |
| status | Trạng thái | Select | |
| routesCsv | Tuyến được phân | Text/CSV multi | |

### Password modal

| Field | Label |
|-------|-------|
| currentPassword | MẬT KHẨU CŨ |
| newPassword | MẬT KHẨU MỚI |
| confirmPassword | XÁC NHẬN MẬT KHẨU MỚI |

## 4. Grid columns

STT · Mã · Họ tên · Tổ chức · Vai trò · Tuyến · Trạng thái · SĐT · ⋮

## 5. Prototype

- Path: `ui/prototype/users-list-prototype.html`
- Content-only A–D · **no** chrome/sidebar/menu demo
- reviewUrl stamped above

## 6. Handoff → SA

- API prefix Integration · reuse org-units tree
- Users table tenant-scoped · flat scalars (routes as CSV string)
- Auth deep = GAP stub OK

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design |
| skillVersion | 2026.08.08.31 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.3 |
| generatedAt | 2026-08-10T08:36:00.000Z |
| versionGate | rechecked |
