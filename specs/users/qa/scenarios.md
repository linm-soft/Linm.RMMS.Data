# QA — users

| Field | Value |
|-------|-------|
| feature | `users` |
| status | `done` |
| mfeStdUrl | `http://localhost:9314/integration/users` |
| updatedAt | 2026-08-10T08:46:00.000Z |

## Smoke scenarios

| # | Step | Expect |
|---|------|--------|
| S1 | Mở `yarn start:std` → `/integration/users` | List load (API hoặc local seed) · title «Quản lý người dùng» |
| S2 | Search «Phúc» + Enter | Lọc · skeleton/pulse · grid cập nhật |
| S3 | Chọn node cây «VP-II.2» | Chỉ user org đó |
| S4 | Toolbar Thêm → điền bắt buộc → Lưu | Slideout đóng · row mới · mã USR-* |
| S5 | Row menu Xem | Form readOnly (không xám disabled) |
| S6 | Row menu Sửa → Lưu | Update OK |
| S7 | Đổi MK 3 field + submit | Toast/alert success · validate confirm mismatch |
| S8 | Hồ sơ | Modal hiện user active/seed |
| S9 | Phân tuyến (prompt CSV) | routesCsv cập nhật |
| S10 | Pagination đổi pageSize | Reload page 1 |

## Automated / build

| Check | Result |
|-------|--------|
| `yarn typecheck` | PASS |
| `LINM_RUN_DEV_LOCAL_BUNDLE=1 yarn build` | PASS |
| `dotnet build` API + BFF | PASS |

## Notes

- Manual browser smoke trên mfeStdUrl: pending operator
- Auth RequirePermission vẫn TODO CommonLib

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-qa |
| skillVersion | 2026.08.08.21 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.3 |
| generatedAt | 2026-08-10T08:46:00.000Z |
| versionGate | rechecked |
