# Báo cáo tổng hợp tuần đường — Feature Context

> **Slug:** `bc-th` · **Module:** Patrol · **Phase:** P1  
> **Status:** Context  
> **Kind:** report full page trên Field, không CRUD  
> **MFE:** `Linm.Web.RMMS.Field` · route `/td-tk/bc-th` (đăng ký trước `td-tk/:id`)  
> **Khác:** `/bao-cao/dashboard` (KPI một ngày) · `/bao-cao/tuan-duong` · `/bao-cao/tuan-kiem` (lưới)  
> **Perm đề xuất:** `patrol.bc-th.read` · seed menu Auth = `/gen-navigation-menu-import` sau  

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | Trend số phiên và số người tuần đường / tuần kiểm, trạng thái task `source=patrol`, xem dòng chi tiết, tải PDF, Word, CSV |
| Persona | Lãnh đạo · hạt trưởng |
| App hiện có | Danh sách phiên `/td-tk` giữ CRUD |
| DoD | Xem ra thẻ + biểu đồ · bấm chỉ số ra dòng · ba file cùng số với màn · CSV đúng header skill |

## 2. Current vs New

| Hạng mục | Đã có | Mới |
|----------|--------|-----|
| Screen | `/td-tk` danh sách phiên · `/bao-cao/dashboard` đếm một ngày | `/td-tk/bc-th` |
| Số liệu | List có phân trang · KPI dashboard không có series | `GET api/v1/patrol/bc-th/summary` |
| Task | `GET api/v1/tasks/stats` theo người xem | `GET api/v1/tasks/stats/series?source=` |
| Export | CSV từng báo cáo lưới | `bc-th.csv` · `bc-th.pdf` · `bc-th.docx` |
| DB | `rmms_patrol_sessions` · `tasks` | Không bảng mới, không migration |

## 3. Screens

| Screen | Pattern | Zones |
|--------|---------|-------|
| `/td-tk/bc-th` | Full page report | Lọc grain + từ/đến + tuyến + mã khu · Xem · Làm mới · PDF · Word · CSV · thẻ · SVG · lưới chi tiết |

Chưa bấm Xem thì không gọi API. Bấm thẻ hoặc cột thì tải detail. Dòng phiên mở `/td-tk/{id}`.

Nhãn trạng thái task trên lưới lấy `useFormOptions().taskStatusOptions`. Nhãn chỉ số trên thẻ lấy từ API (`label`), cùng chuỗi với PDF/Word.

## 4. Số liệu

Grain `day` | `month` | `year`. Mốc phiên là `PlannedDate`. Loại đúng `Tuần đường` và `Tuần kiểm`.

| indicator_code | Nghĩa |
|----------------|--------|
| `td_sessions` | Số phiên tuần đường trong bucket |
| `td_staff` | Số người phân biệt trong bucket (`UserId`, thiếu thì `UserName`) |
| `tk_sessions` | Số phiên tuần kiểm |
| `tk_staff` | Số người tuần kiểm |
| `task_created` | Task `source=patrol` tạo trong bucket, trạng thái hiện tại `created` |
| `task_assigned` | `assigned` |
| `task_in_progress` | `in_progress` và các trạng thái active còn lại |
| `task_completed` | `completed` |
| `task_cancelled` | `cancelled` |
| `task_overdue` | Quá hạn tại thời điểm xem, không theo bucket |

Thẻ người là số phân biệt **cả kỳ**, không cộng dồn từng bucket. Trần kỳ: 62 ngày, 36 tháng, 12 năm.

Ngày task nhóm theo `X-Timezone` nếu có, không có thì UTC. SQL nới một ngày hai đầu rồi lọc ngày local.

## 5. API

| Method | Path | Mô tả |
|--------|------|--------|
| GET | `/api/v1/patrol/bc-th/summary?grain&from&to&route&zoneOrgCode` | Thẻ + series |
| GET | `/api/v1/patrol/bc-th/detail?indicator&bucket&group&...` | Cột khu / văn phòng / phòng và tem tên tuyến, tên nhân viên. `group` không đổi cột |
| GET | `/api/v1/patrol/bc-th/export?format=csv\|pdf\|docx&...` | Cùng bộ lọc |
| GET | `/api/v1/tasks/stats/series?source&from&to&grain` | Series task, `source` là tên chung |
| GET | `/api/v1/tasks/stats/series/rows?...&statusGroup&bucket` | Dòng task, tối đa 2000 |

BFF chỉ forward: `web-bff/api/v1/patrol/bc-th/**`. File binary đi `ReadAsByteArrayAsync`. WebService gọi TaskService bằng HTTP (`ServiceEndpoints:TaskService`), không ProjectReference. TaskService lỗi thì phần tuần vẫn trả, `tasksUnavailable=true`.

CSV UTF-8 BOM, file `bc-th.csv`, header:

`row_type,grain,bucket_start,indicator_code,value,ref_id,code,title,actor,route,status,due_at,actor_name,route_name,khu_name,van_phong_name,phong_name`

`row_type`: `series` | `task_status` | `overdue` | `detail`.

Phạm vi phiên dùng `IPatrolDataScope` giống list `/td-tk`. Tenant qua query filter `CompanyCode`.

## 6. Perm + menu

`patrol.bc-th.read`. Dev nav lá trên nhóm Tuần đường. Seed Auth chưa làm trong pass này.

## 7. Gaps

| ID | Default |
|----|---------|
| GAP-BC-TH-01 Quá hạn không có lịch sử theo ngày | Một số tại thời điểm xem |
| GAP-BC-TH-02 Menu Auth | Chỉ đề xuất code |
| GAP-BC-TH-03 TaskService tắt | Tuần vẫn hiện, task = 0 + cờ |

## 8. Handoff

Skill `/build-rmms-report` đọc `bc-th.csv`. Không bịa số ngoài file.
