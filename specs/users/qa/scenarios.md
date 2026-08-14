# QA — users

| Field | Value |
|-------|-------|
| feature | `users` |
| status | `done` |
| mfeStdUrl | `http://localhost:9314/integration/users` |
| updatedAt | 2026-08-14T13:55:00.000Z |

## Smoke scenarios

| # | Step | Expect |
|---|------|--------|
| S1 | Mở `yarn start:std` → `/integration/users` | List load (API hoặc local seed) · title «Quản lý người dùng» |
| S2 | Search «Phúc» + Enter | Lọc · skeleton/pulse · grid cập nhật |
| S3 | Chọn node cây «VP-II.2» | Chỉ user org đó |
| S4 | Toolbar Thêm → `/integration/users/new` → điền bắt buộc → Lưu | Về list · row mới · mã USR-* |
| S5 | Row menu Xem | Form page View `<dl>` (không Input readOnly) |
| S6 | Row menu Sửa → Lưu | Update OK · về list |
| S7 | Đổi MK 3 field + submit | Alert success · validate confirm mismatch |
| S8 | Hồ sơ | Modal `<dl>` user active/seed |
| S9 | Phân tuyến (prompt CSV) | POST assign-routes · grid cập nhật |
| S10 | Pagination đổi pageSize | Reload page 1 |
| S11 | QA-CRUD Create | Form SearchInput org/role/status · Lưu |
| S12 | QA-CRUD Edit | `?mode=edit` · Lưu |
| S13 | QA-CRUD View | Không control N · nút Sửa/Sao chép |
| S14 | Row Xóa | Confirm · DELETE soft |
| S15 | Cán bộ QL (prompt CSV) | POST managed-users |
| S16 | Lookup filter vai trò/trạng thái | SearchInput · không native select |

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
| generatedAt | 2026-08-14T13:55:00.000Z |
| versionGate | rechecked |
