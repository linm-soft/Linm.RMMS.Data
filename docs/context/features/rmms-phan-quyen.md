# Phân quyền data RMMS — Feature Context

> **Slug:** `rmms-phan-quyen` · **Module:** Patrol / Auth · **Phase:** support (data scope tuần đường)  
> **Status:** Context · ref khi implement phân quyền RMMS  
> **Chốt:** 2026-09-28 · chức danh catalog LEAD thấy member cùng phòng ban · bản ghi nối `UserId` + mã nhân viên · không khớp họ tên  
> **Menu user:** [`users.md`](users.md) · chức danh [`job-title.md`](job-title.md)  
> **Checker:** [`phan-quyen/index.html`](../../../phan-quyen/index.html) (mở file, click một người → member được xem)

## 1. Hai lớp

| Lớp | SSOT | Việc |
|-----|------|------|
| Menu | Auth package `MANAGER-RMMS` / `RMMS-TDTK` / `ADMIN-RMMS` | App được vào |
| Data list | Bảng `rmms_job_titles` (`titleGroup`) + phòng ban `SourceUnit` + `UserId` / `EmployeeCode` | Ai thấy tuần đường, tuần kiểm, chấm công, nhật ký, phát hiện, sự cố |

Package không quyết định danh sách data. `MANAGER-RMMS` không có nghĩa thấy mọi nhân viên.

`ManagedUserIdsCsv` là UI gán cán bộ. Filter data không đọc cột này.

`RequirePermission` trên controller patrol vẫn là stub. Data scope chạy trong service.

## 2. Ai thấy data

Code: `PatrolDataScope.BuildAsync`. Catalog đọc `rmms_job_titles` (`JobTitleCatalog.FromRows`). Bảng trống thì mới fallback map tĩnh trong `JobTitleCatalog.cs`.

Khớp người đăng nhập bằng username, email, họ tên, `Phone`, mã `Code`, claim `full_name` và `employee_id`. JWT `Name` là số điện thoại.

| Người gọi | Thấy |
|-----------|------|
| JWT role Admin / Administrator, hoặc package `ADMIN` / `ADMIN-RMMS` | Cả công ty |
| Mã `TRUONG-VP` / `PHO-TRUONG-VP` | Bản thân + TECH/PATROL trong cùng khối VP (`PatrolOrgBlock`) |
| `titleGroup` LEAD khác | Bản thân + TECH/PATROL cùng phòng ban (`SourceUnit`) |
| TECH / PATROL | Chỉ bản thân |
| Chưa đăng nhập, hoặc đăng nhập không khớp `AppUser` | Không thấy dòng nào |

LEAD không thấy LEAD cùng cấp. Phòng ban là chuỗi cột nguồn trong file nhân sự (ví dụ `II VĂN PHÒNG QLĐBI.2`, `VII QUỐC LỘ 5`), không phải `OrgCode` VP-I.4.

Seed cuc-01 trên checker: 188 người · 86 LEAD · 102 TECH/PATROL · 6 trưởng/phó văn phòng · 80 LEAD có danh sách member.

## 3. Khóa bản ghi — không khớp tên

Tuần đường, tuần kiểm, chấm công, nhật ký, sự cố lưu:

| Cột | Nghĩa |
|-----|--------|
| `UserId` | `AppUser.Id` |
| `EmployeeCode` | `AppUser.Code` (`RMMS-VPI2-013`) |

List/get so `UserId` hoặc `EmployeeCode`. `AssigneeCode` chỉ là fallback khi hàng test cũ chưa có `EmployeeCode` và giá trị đó đúng mã nhân viên.

Tạo/sửa gọi `RequireActorAsync`: tìm theo mã nhân viên, rồi username đăng nhập. Không tìm theo họ tên. Không thấy người, hoặc người ngoài grant → `ArgumentException`.

Họ tên trên form là nhãn. Ba họ tên trùng trong seed cuc-01 nên không được dùng làm khóa.

## 4. Chức danh và phòng ban

Nguồn chuỗi chức danh: Excel `data-import/cuc-01/ds-nhan-su-rmms` và checker `phan-quyen/index.html`. Mã nằm ở [`../seed/job-title-seed.json`](../seed/job-title-seed.json) (23 mã). Bốn mã bổ sung từ file, không đặt tên mới:

| Chuỗi trong file | Mã | Nhóm |
|------------------|----|------|
| Phụ trách hồ sơ bảo trì | `PHU-TRACH-HO-SO` | TECH |
| Phụ trách phòng dự án/ Phụ trách chung | `PHU-TRACH-DU-AN` | LEAD |
| Trưởng ban GS/Phụ trách trạm thu phí BOT | `TRUONG-BAN-GS` | LEAD |
| Tuần điện Đội bảo trì số 01 / 05 | `TUAN-DIEN` | PATROL |

Admin:

| Việc | Trang |
|------|--------|
| Chức danh | `/mas/chuc-vu` |
| Nhân viên + chức vụ + phòng ban | `/integration/users` |

`SourceUnit` trên `rmms_users` là phòng ban. Auth lưu cùng chuỗi ở `DepartmentName`, mã chức danh ở `JobTitleCode`, tên hiển thị ở `Position`.

## 5. Block văn phòng

Chỉ trưởng / phó văn phòng dùng block. Người sort theo số cuối mã (`RMMS-VPI1-001`) rồi `PatrolOrgBlock.Assign` theo `SourceUnit`.

1. `SourceUnit` có QLĐB + La Mã + `.n` → `VP-{I|II|III|IV}.{n}`.
2. `OrgCode` là `VP-*` khác VP vừa gặp → giữ `OrgCode`.
3. La Mã đầu `I`–`IV` → `VP-I.{n}` (nhà thầu).
4. Không La Mã và `OrgCode` bắt đầu `VP-` → block = `OrgCode`.

`OrgCode` CSV của nhà thầu có thể vẫn là VP office. Scope đi theo `SourceUnit`.

## 6. Bề mặt đã lọc

| Service | List / get | Ghi ngoài grant |
|---------|------------|-----------------|
| `PatrolSessionService` | `Where(access)` · ẩn thì null | `ArgumentException` |
| `AttendanceLogService` | cùng | cùng |
| `PatrolJournalLineService` | theo session · dòng copy `UserId` + `EmployeeCode` từ session | cùng |
| `PatrolFindingService` | theo session | cùng |
| `IncidentRecordService` | `Where(access)` · get ẩn thì null | create gắn assignee bằng mã nhân viên |

Check-in là con của session. `ListAssignableAsync` trả đúng tập grant, người gọi đứng đầu.

Km trên `rmms_user_route_segments` vẫn là phân công tuyến. List data **không** lọc theo km.

Ngoài phạm vi: báo cáo, tài sản, camera. Đừng gắn filter này khi chưa có chốt mới.

## 7. Code và seed

| Việc | Path |
|------|------|
| Filter | `Linm.RMMS.WebService/.../Patrol/Services/PatrolDataScope.cs` |
| Catalog runtime | `Domains/Integration/JobTitleCatalog.cs` |
| Import chức danh | `JobTitleCatalogHandler` · catalog `job_titles` · `job_titles.csv` |
| Import nhân sự | `AppUserCatalogHandler` · cột `job_title_code` · `source_unit` |
| Bảng chức danh | `rmms_job_titles` · seed cũ `20260918194928_Seed_RmmsJobTitles` (19 mã) · 4 mã mới vào bằng import |
| Cột actor | `20260927165358_Schema_PatrolActorLink` trên session, attendance, journal, incident |
| Auth mã chức danh | `20260927171406_Schema_UserJobTitleCode` · `cuc01_staff.csv` cột `jobTitleCode` |
| Manifest | cuc-01 `importVersion` **6** · Auth users `importVersion` **4** |
| Backfill hàng test | `Linm.RMMS.WebService/local-script/link-patrol-actor.sql` (mã NV hoặc username, không họ tên) |
| Checker | `Linm.RMMS.Data/phan-quyen/index.html` |

Chưa apply migration thì API mới không chạy được trên DB cũ. Restart API sau apply để import version 6 ghi `rmms_job_titles` và `job_title_code`.

## 8. Khi implement tiếp

- Đọc file này trước khi thêm filter.
- Khóa bản ghi là `UserId` và `EmployeeCode`. Không thêm nhánh so họ tên.
- Sửa luật LEAD / phòng ban thì sửa `PatrolDataScope` và checker HTML cùng lúc.
- Chức danh mới lấy từ file nhân sự hoặc `/mas/chuc-vu`, rồi vào `job-title-seed.json` và `job_titles.csv`.
