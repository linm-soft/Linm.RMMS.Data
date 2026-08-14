# Implement — users

| Field | Value |
|-------|-------|
| feature | `users` |
| status | `done` |
| mfeStdUrl | `http://localhost:9314/integration/users` |
| mfeStdRoute | `/integration/users` |
| taskId | `task_8b8a998f` |
| updatedAt | `2026-08-14T21:20:00.000Z` |

## Surface (T-UI-UX-01)

Desktop/Tablet Web — **1 layout**. Mobile web stacks form 2-col → 1-col at **767px** (system breakpoint). Không native app.

## retry.ssot_rereview

Live list (`UsersListPage`) trước gap pack:

| Check | Result |
|-------|--------|
| 1× LinPageLayout · cấm nested CatalogListShell | PASS |
| LinCatalogDataGrid + kéo cột default ON | PASS |
| footer LinCatalogListPagination | PASS |
| flex + skeleton | PASS |
| toolbar config | PASS (`LinListTableConfigModal`) |
| list_parity / tree_master | PASS (tree API + local fallback) |
| form checklist | PASS — full page Z2+Z3 · **footer actions only** · View `<dl>` |

## UX review → align (2026-08-14 live `/integration/users/new`)

| Gap | Live | Fix |
|-----|------|-----|
| **GAP-P2-SLIDE-TOP-ACT** / DUP-SAVE | Hủy/Lưu top + footer | Footer only · View: Đóng/Sao chép/Sửa |
| **GAP-DEV-UX-01** P2–3 | Custom pwd/profile/config overlay | `Modal` · `LinListTableConfigModal` · `LeaveConfirmModal` |
| **GAP-DEV-UX-01** P6 | Chỉ happy path | FormSkeleton · load error · 403 create · empty grid |
| **GAP-DEV-UX-01** P7 | Emoji trên nút | Text + FA title icon · label trên Input |
| Lookup `VP-II.2 — VP-II.2` | primary=secondary | `lookupDisplays` ẩn cặp trùng |
| **GAP-DEV-DROPDOWN-HARDCODE-01** | Filter/grid `ROLE_LOOKUP` tĩnh | `getInitData` → SearchInput + cell label |
| **GAP-DEV-DEMO-NOTE-01** | «Kind B» · «stub» · ALL CAPS GOVOne | Toast nghiệp vụ · «Mật khẩu cũ» |
| **GAP-DEV-UX-01** P5 | `@media 900px` | `767px` |
| P4 spacing | 4/8/16/24/32 | Giữ · sticky footer 12/16 |

## Done tasks (gap)

| id | status | notes |
|----|--------|-------|
| T-BE-CRUD-01 | done | `GET api/v1/integration/users/init-data` · BFF proxy · CRUD/assign đã có |
| T-UI-ACT-01 | done | route form · delete Modal · assign-routes · managed-users · pwd |
| T-UI-MAP-FORM | done | Input/SearchInput ↔ DTO |
| T-UI-LKP-01 | done | SearchInput + init-data + org-units/search |
| T-UI-FIELD-01 | done | email/tel/csv/lookup codes |
| T-UI-PROD-01 | done | bỏ Slideout · View `<dl>` · badge TẠO MỚI/SỬA/XEM |
| T-UI-UX-01 | done | constitution P1–7 · footer only · Lin* Modal · **bỏ** toolbar Hồ sơ/Đổi MK (GAP-DEV-DEMO-CHROME-01) |
| QA-CRUD | pending | smoke Create/Edit/View sau UX align |

## review.form

```
pattern: Full page
shell: footer_actions_only
modes: Create|Edit|View|Copy
wire: endpoint + unwrap OK
lock: View <dl> (no grey disabled fields)
validate: Pattern B + email
lookup: SearchInput catalog · init-data
leave: LeaveConfirmModal
toast: success + BE error
perm: create/update gated
```

## Build

```
yarn typecheck → PASS
LINM_RUN_DEV_LOCAL_BUNDLE=1 yarn build → PASS (webpack 5.109.2, 3 size warnings)
BE không đổi shape — không Schema migration
```

## Files (key)

### FE

- `src/pages/UsersListPage/UsersListPage.tsx` · `.module.css`
- `src/pages/UsersFormPage/*`
- `src/services/users/lookups.ts` (`lookupDisplays`)

### BE (`Linm.RMMS.WebService`)

- không sửa trong lượt UX align

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-dev |
| skillVersion | 2026.08.09.02 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.3 |
| generatedAt | 2026-08-14T14:20:00.000Z |
| versionGate | rechecked |
