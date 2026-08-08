# QA — asset list catalog

| Field | Value |
|-------|-------|
| feature | `asset` |
| status | `done` |
| packKind | `list` (Kind B) |
| updatedAt | 2026-08-08T19:20:00.000Z |
| skillVersion | 2026.08.08.17 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.08.17 |

## Scenarios

| id | Case | Steps | Expected | Result |
|----|------|-------|----------|--------|
| QA-01 | Zone A Header | Open `/asset` | Title «Sổ tài sản…» · `fa-road` · **không** Thêm mới ở header | PASS (code) |
| QA-02 | Zone B Toolbar | Inspect toolbar | refresh · history · editConfig(`fa-cog`) · excel · **Thêm mới** primary | PASS |
| QA-03 | Zone C Search | Gõ `cống` → Tìm | Rows khớp code/name/type/route · `?search=` | PASS |
| QA-04 | Zone C Type | Chọn `Cầu` → Tìm | Chỉ type=Cầu · `?type=` | PASS |
| QA-05 | Zone C Grid | Columns | STT · □ 24×24 · Mã/Tên/Loại/Tuyến/Lý trình/Tình trạng KT/GPS · ⋯ | PASS |
| QA-06 | Zone D Pager | pageSize select | `[50,100,200,500]` · default 50 · footer total | PASS |
| QA-07 | Row View | ⋯ → Xem / click mã | Slideout mode=view · fields **readOnly** (không disabled xám) | PASS |
| QA-08 | Row Edit | ⋯ → Sửa | Slideout edit · Lưu · PUT | PASS |
| QA-09 | Copy | ⋯ → Sao chép | Slideout copy · POST · mã mới | PASS |
| QA-10 | Create | Thêm mới → thiếu name → Lưu | Banner + invalid | PASS |
| QA-11 | Create OK | Đủ field → Lưu | Close slideout · reload list | PASS |
| QA-12 | Leave confirm | Edit dirty → Quay lại | confirm dialog | PASS |
| QA-13 | Deep link | `/asset/new` · `/asset/:id` | Redirect → `?form=` + Slideout | PASS |
| QA-14 | Perm stub | Local mode | toolbar/form gated via `asset.road-assets.*` | PASS (stub) |
| QA-15 | BE route | GET `/api/v1/asset/road-assets` | **không** ERP · **không** `/rmms/` · CommonLib envelope | PASS |
| QA-16 | BFF | `web-bff/api/v1/asset/road-assets/**` | Proxy only | PASS |
| QA-17 | Build gate | `yarn typecheck` · `LINM_RUN_DEV_LOCAL_BUNDLE=1 yarn build` · `dotnet build` API+BFF | 0 Error | PASS |

## Gaps

| id | Severity | Note |
|----|----------|------|
| GAP-AUTH | P2 | `[RequirePermission]` TODO — CommonLib/Auth NuGet |
| GAP-EXCEL | P3 | Excel toolbar stub (out of pack) |

## Manual note

Runtime: `yarn start:std` · `http://localhost:9301/asset` · local seed fallback khi BE down.
