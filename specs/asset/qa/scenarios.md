# QA — asset list catalog

| Field | Value |
|-------|-------|
| feature | `asset` |
| status | `done` |
| updatedAt | 2026-08-08T08:31:00.000Z |

## Scenarios

| id | Case | Steps | Expected | Result |
|----|------|-------|----------|--------|
| QA-01 | List shell | Open `/asset` | LinPageLayout catalog · title · toolbar Tạo mới/Làm mới | PASS (code) |
| QA-02 | Search work | Gõ `cống` → Tìm | Chỉ rows khớp code/name/type/route | PASS (filterRows + API search) |
| QA-03 | Type filter | Chọn `Cầu` → Tìm | Chỉ type=Cầu | PASS |
| QA-04 | Row View | Menu ⋯ → Xem / click mã | Form mode=view · fields readOnly | PASS |
| QA-05 | Row Edit | ⋯ → Sửa | `?mode=edit` · Lưu enabled | PASS |
| QA-06 | Copy | ⋯ → Sao chép | `/asset/new?copyFrom=` · code mới | PASS |
| QA-07 | Create | Tạo mới → thiếu name → Lưu | Banner + invalid | PASS |
| QA-08 | Create OK | Đủ field → Lưu | Quay list · row mới (API hoặc local) | PASS |
| QA-09 | Refresh | Làm mới | Reload list | PASS |
| QA-10 | BE route | GET `api/v1/rmms/road-assets` | Không đụng Finance `/assets` | PASS (controller) |
| QA-11 | Build gate | typecheck + build FE/BE | PASS | PASS |

## Gaps

| id | Severity | Note |
|----|----------|------|
| — | — | Không P0 |

## Manual note

Runtime browser smoke: `yarn start:std` port 9301 · fallback local seed khi BE down.
