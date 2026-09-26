# Implement — web-rmms-mobile-b

| Field | Value |
|-------|-------|
| feature | `web-rmms-mobile-b` |
| role | `dev` · `/agent-dev` |
| status | `done` |
| packKind | `list` (phone Field cards · Kind B **WAIVE**) |
| changeScope | `edit_page` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-mobile-b` |
| mfeStdUrl | `http://localhost:9301/web-rmms-mobile-b` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Patrol · **cấm ERP.*** |
| BFF | `mobile-bff/api/v1/patrol/**` (catch-all peer) · `web-bff/api/v1/patrol/**` proxy |
| contentHash | `sha256:58be487c963674c63e2436a6277905c70eb483f673a867c595bbd1babca3e773` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| updatedAt | `2026-09-25T08:15:00.000Z` |
| taskId | `task_86d662d7` |
| demo | **N/A** · wave B |
| e2eQa | queued `/agent-qa*` — **cấm** e2e ở Dev |

## Build

| Gate | Result |
|------|--------|
| MFE `yarn build` | **PASS** (chunk `web-rmms-mobile-b` · size-limit WARN only) |
| BE `dotnet build` RMMS.Service.Api | **PASS** (0 error) |
| BE `dotnet build` RMMS.Service.Bff | **PASS** (0 error) |
| migration | `20260925150000_Schema_PatrolJournalLine` · table `rmms_patrol_journal_lines` |

## Screens wired

| id | Route | Notes |
|----|-------|-------|
| TD-04 | `/web-rmms-mobile-b` · `/web-rmms-mobile-b/:sessionId` | entry resolve ca · list cards · empty «Chưa ghi việc» · **cấm** check-in |
| TD-05 | `…/:sessionId/moi` · `…/:sessionId/:lineId` | Full create/edit · GPS HARD · FileMulti · LeaveConfirm |
| DES-LEAVE | TD-05 | `useFormLeaveGuard` · LeaveConfirmModal |
| Peer A | TD-01 quick | Ghi nhật ký / Sổ trong ca → B |

## APIs

| Method | Path | FE |
|--------|------|----|
| GET | `/patrol/sessions/{id}/journal-lines` | TD-04 list |
| POST | `/patrol/journal-lines` | TD-05 create · GPS+narrative required |
| GET | `/patrol/journal-lines/{id}` | TD-05 hydrate · XCO get_only |
| PUT | `/patrol/journal-lines/{id}` | TD-05 update |
| GET | `/patrol/sessions/{id}` | parent · Note `chieu=` default |
| GET | auth profile | userName RO |
| files/* | LinImageUpload | mediaIds guid CSV |

## Tasks DoD

| id | status |
|----|--------|
| T-BE-SCHEMA-01 | **done** · Entity + Schema_PatrolJournalLine + migration |
| T-BE-CRUD-01 | **done** · nested list + top-level POST/GET/PUT |
| T-BE-INIT-01 | **done** · LOOKUP_STATIC weather/kind/status/direction/reportedTo |
| T-PERM-01 | **done** · codes documented · RequirePermission TODO peer CommonLib |
| T-UI-LIST-01 | **done** · phone cards · Kind B **WAIVE** |
| T-UI-FORM-01 | **done** |
| T-UI-ACT-01 | **done** |
| T-UI-LEAVE-01 | **done** |
| T-UI-FIELD-01 | **done** · field↔DTO |
| T-UI-PROD-01 | **done** |
| T-UI-UX-01 | **done** · phone 430 · reuse A styles |
| T-UI-RESP-01 | **done** · phone shell CSS |
| T-QA-* | **pending** · queued QA |

## Debt

- RequirePermission attribute TODO until CommonLib ≥1.4.0 (peer sessions pattern)
- Apply migration on target DB before QA live CRUD
- LRS kmText tay · weather API later (GAP closed wave B)
- scope/WO / TD-06 out of B

## Notes

- 2026-09-25 edit-web-feature: TD-05 «Xử lý tại chỗ» dùng `toggleRow`. Checkbox 20×20, nhãn đầu hàng. Text-field chrome (width 100% · min-height 52 · padding · radius) không áp `input[type=radio|checkbox]`. SSOT `WebRmmsMobileA/styles.module.css`.
- 2026-09-25 edit-web-feature: TD-05 Định vị — SSOT `gpsPinCopy.ts` · nút «Ghim vị trí hiện tại» · dòng OK = `[lat, lng]`. accuracyM vẫn gửi API. **Cấm** «Thử lại GPS». Hủy/Lưu onTop.
- 2026-09-25 edit-web-feature: topbar back `‹` và `+` font-size 36 · flex center trong ô 44×44. SSOT `WebRmmsMobileA/styles.module.css`.

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:58be487c963674c63e2436a6277905c70eb483f673a867c595bbd1babca3e773` · `updatedAt=2026-09-25T08:15:00.000Z`
