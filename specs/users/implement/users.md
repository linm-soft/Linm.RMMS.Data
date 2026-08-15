# Implement — users

| Field | Value |
|-------|-------|
| feature | `users` |
| this role | `dev` · `/agent-dev` |
| status | `done` |
| changeScope | `edit_page` |
| packKind | `list` |
| mfeStdUrl | `http://localhost:9314/integration/users` |
| mfeStdRoute | `/integration/users` |
| taskId | `task_438be5dc` |
| autoApprove | `ON` |
| updatedAt | `2026-08-15T12:55:00.000Z` |
| align | `/integration/users/new` · **GAP-P2-FORM-GRID-05** · header chrome · `useFormLeaveGuard` |

## Surface (T-UI-UX-01)

Desktop/Tablet Web — **1 layout**. Mobile web stacks at **767px**. Không native app.

## retry.ssot_rereview (live MFE trước Write · 2026-08-15)

| Check | Live | Gap closed this role |
|-------|------|----------------------|
| 1× `LinPageLayout`, **cấm** nested `CatalogListShell` | **PASS** | keep |
| `LinCatalogDataGrid` + kéo cột default ON | **PASS** | keep |
| Footer `LinCatalogListPagination` | **PASS** | keep |
| flex + skeleton | **PASS** | keep |
| toolbar config | **PASS** | keep |
| list_parity Kind B A–D | Zone B thiếu tuyến | **SearchInput** `road-route` + `getList({ route })` |
| tree_master org exact `orgCode` | **PASS** | keep |
| form full-page · **cấm** Slideout/Resource | **PASS** | keep |
| View `<dl>` · **cấm** View=`readOnly` nghiệp vụ | **PASS** | keep |
| `routesCsv` SearchInput multi | FAIL Input CSV | **MultiSearchCsvField** form + modal Phân tuyến |
| `managedUserIdsCsv` SearchInput multi users | FAIL Input CSV | **MultiSearchCsvField** modal Cán bộ QL (persist Guid CSV) |
| list `?route=` | FAIL | FE + API `route` + BFF QS passthrough (đã có) |
| status label Đang dùng / Khóa | init «Hoạt động» | FE override + init-data BE |

**Cấm** chỉ patch 1 chỗ: đóng đủ filter tuyến + form tuyến + 2 modal lookup + BE validate org/route/managed.

## Done tasks

| id | status | notes |
|----|--------|-------|
| T-BE-01 | **done** | `GET ?route=` match `RoutesCsv` split CI · validate RoutesCsv ∈ `rmms_road_routes` active · OrgCode ∈ org-units · ManagedUserIdsCsv Guid cùng tenant ≠ self · 422 `{ success:false, message }` |
| T-BE-02 | **n/a** | không bảng mới |
| T-BFF-01 | **done** | `BuildListPath` forward QS gồm `route` — không endpoint mới |
| T-UI-LIST-01 | **done** | Zone B SearchInput tuyến · filter page=1 · empty copy gồm route |
| T-UI-FORM-01 | **done** | keep full-page View `<dl>` |
| T-UI-ACT-01 | **done** | Phân tuyến / Cán bộ QL SearchInput multi · Đổi MK keep |
| T-UI-MAP-FORM | **done** | routesCsv multi lookup · persist CSV sau chọn |
| T-UI-LKP-01 | **done** | road-routes/search · users?search= · init-data role/status/org |
| T-UI-FIELD-01 | **done** | cấm Text `routesCsv` |
| T-UI-PROD-01 | **done** | keep |
| T-UI-UX-01 | **done** | gap 4/8/16 · Lin Modal · toast |
| T-BE-CRUD-01 | **done** | CRUD + validate delta |
| T-PERM-01 | FE done · BE stub | `RequirePermission` P2 Auth |
| T-QA-01 / QA-CRUD | **pending** | role QA |

## review.form

```
pattern: Full page
shell: header_chrome (Quay lại trái · Hủy/Tạo mới|Lưu thay đổi phải · cấm footer Lưu)
modes: Create|Edit|View|Copy
wire: endpoint + unwrap OK
lock: View <dl> 5 cột (GAP-PO-USR-01 · không Input xám)
grid: data-form-cols="5" · medium 3 · small 2 · routesCsv spanFull
validate: Pattern B + email + BE org/route
lookup: SearchInput · multi CSV persist
leave: useFormLeaveGuard + LeaveConfirmModal
toast: success + BE error
perm: create/update gated
```

## Align `/integration/users/new` (2026-08-15)

| Gap | Before | After |
|-----|--------|-------|
| **GAP-P2-FORM-GRID-05** | 2-cột Slideout CSS | `repeat(5, minmax(0,1fr))` · `data-form-cols="5"` |
| Footer Lưu | Zone Z3 footer | **cấm** — chrome header như `CitizenFormPage` |
| Leave | `leaveOpen` tay | `useFormLeaveGuard` + `guardedNavigate` |
| Hint | `LinPageHeader` | title + hint trong card chrome |

**Giữ:** View `<dl>` (PO GAP-PO-USR-01) · SearchInput org/role/status · MultiSearchCsv tuyến · toast · FormSkeleton · không Slideout.

## Build

```
yarn typecheck → PASS (align /new 2026-08-15)
LINM_RUN_DEV_LOCAL_BUNDLE=1 yarn build → PASS (webpack 5.109.2)
BE this align: n/a (UI form chrome/grid only)
migration: n/a
```

## Files (key)

### FE (`Linm.Web.RMMS.Integration`)

- `src/pages/UsersListPage/UsersListPage.tsx` — filter `route` · MultiSearchCsv modal
- `src/pages/UsersListPage/MultiSearchCsvField.tsx`
- `src/pages/UsersFormPage/UsersFormPage.tsx` + `.module.css` — 5 cột · header chrome · `useFormLeaveGuard`
- `src/services/users/endpoint.ts` · `usersService.ts` · `lookups.ts`
- `src/demo/usersStore.ts` — status labels + local `route` filter

### BE (`Linm.RMMS.WebService` · **cấm ERP.***)

- `api/.../Controllers/AppUsersController.cs` — query `route` · 422 assign
- `api/.../Services/AppUserService.cs` · `IAppUserService.cs`
- BFF `AppUsersBffController` — không đổi (QS already forwarded)

## Handoff → QA

1. Smoke `http://localhost:9314/integration/users` — filter tuyến, tree org exact, grid A–D.
2. Form `/new` · header [Quay lại] [Hủy][Tạo mới] · 5 cột · **không** footer Lưu · `/:id` View `<dl>` 5 cột.
3. Row Phân tuyến / Cán bộ QL SearchInput · Đổi MK · delete Modal.
4. Invalid route/org/managed → 422 message.
5. Roles sau Review = **pending**.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-dev |
| skillVersion | 2026.08.09.02 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.3 |
| generatedAt | 2026-08-15T08:55:00.000Z |
| versionGate | rechecked |
| version_mismatch_action | recheck_new |
| orchestratorSkillVersion | 2026.08.08.21 |
| teamLeadSkillVersion | 2026.08.09.02 |
