# STATUS — review-rmms-role

| Field | Value |
|-------|-------|
| feature | `review-rmms-role` |
| phase | `dev` |
| status | `in_progress` |
| packKind | `list` |
| changeScope | `edit_page` |
| demo | **N/A** |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/review-rmms-role.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/trang-chu` |
| mfeStdUrl | `http://localhost:9301/trang-chu` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · role caps + action gate · **cấm ERP.*** |
| updatedAt | `2026-10-08T00:30:00.000Z` |
| skillVersion | `2026.10.08.1` |
| schemaVersion | `1` |

## Pipeline

| Lane | Phase | Status |
|------|-------|--------|
| web | `dev` | `in_progress` |

Context đủ ma trận màn, gói master `RMMS-TDTK` / `MANAGER-RMMS` / `ADMIN-RMMS`, và cờ `RmmsMobile:EnablePermissionCheck`. CSV đã ghi, deploy Auth còn lại. Cấm đánh done.
