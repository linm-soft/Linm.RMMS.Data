# Quản lý — nghiệm thu và giao việc

> **Slug:** `quan-ly-context` · **Module:** Patrol · **Phase:** context  
> **Status:** Context draft  
> **Command:** `/implement-quan-ly-context`  
> **MFE:** `Linm.Web.RMMS.Mobile`  
> **BE:** `Linm.RMMS.WebService` · Integration `RoleCapsResolver` · **cấm ERP.***  
> **Peer:** `tuan-kiem-context` · `web-rmms-role-gate` · `web-rmms-cam-nghiem-thu` · `web-rmms-giao-viec-ql-hat` · `PLAN-3-VAI.md`

## 1. Mục tiêu

Chỉ ba vai: **Tuần đường**, **Tuần kiểm**, **Quản lý**.

Nghiệm thu và giao việc (đang gọi QL hạt) là việc của Quản lý. Không còn vai Nghiệm thu và vai QL hạt trên menu.

Quản lý = hạt trưởng, hạt phó, và mọi chức danh `titleGroup` `LEAD` trong `docs/context/seed/job-title-seed.json`.

## 2. Việc theo vai

| Việc | Tuần đường | Tuần kiểm | Quản lý |
|------|------------|-----------|---------|
| Mở ca, điểm tuần, ghi nhật ký | Ghi | Xem, đối chiếu | Xem báo cáo ca |
| Tạo sự cố `/van-de/moi` | Ghi | Xem cùng tuyến | Xem mọi dòng, không tạo hộ |
| Phiếu phát hiện, xác nhận đạt / chưa đạt | Không | Ghi | Không xác nhận hộ |
| Kiến nghị, tần suất, sổ tuần kiểm | Không | Ghi sổ | Ký cuối tuần |
| Giao việc xử lý | Không | Không | Ghi |
| `/giam-sat` | Không | Không | Xem |
| `/nghiem-thu` lập phiếu | Không | Chỉ đọc phiếu đã xác nhận | Lập và lưu |
| Hoàn thành `/cong-viec` | Đơn vị được giao báo xong | Không bấm hộ | Theo dõi, không bấm hộ |

## 3. Màn giữ nguyên route

| Màn | Route | Vai ghi |
|-----|-------|---------|
| Nghiệm thu | `/nghiem-thu` · `/nghiem-thu/moi` · `/nghiem-thu/:id` | Quản lý |
| Giao việc | Chi tiết `/van-de/:id` và báo cáo ca | Quản lý |
| Giám sát | `/giam-sat` | Quản lý |
| Xác nhận phiếu | `/phat-hien/:sessionId/:findingId` | Tuần kiểm |

Hạn gợi ý trên form giao vẫn theo Phụ lục IV. Người quản lý sửa trước khi giao. Không tính tiền Mục IV trên form này.

## 4. API đang có

`RoleCapsResolver.Derive` đọc view `tuan-duong` | `tuan-kiem` | `nghiem-thu` | `ql-hat` | `hat`, và bật `QlHat` khi package là `QL_HAT`. Context không thêm path. Khi implement, một view `quan-ly` thay `nghiem-thu` và `ql-hat`.

Seed `HAT-TRUONG`, `HAT-PHO` và các mã LEAD khác đang `packageHint` `MANAGER-RMMS`. Giao việc không được suy từ gói đó khi chức danh trống.

## 5. Ngoài phạm vi

Công thức tiền Mục IV, màn chấm 100 điểm, route mới, app native, sửa form đợt tuần kiểm A–E.

## 6. Gap

| Id | Việc |
|----|------|
| GAP-QL-01 | Menu còn bốn lựa chọn tuần đường, tuần kiểm, nghiệm thu, QL hạt |
| GAP-QL-02 | Giao việc chỉ package `QL_HAT`, chưa phải mọi chức danh LEAD |
| GAP-QL-03 | Phiếu nghiệm thu đang cổng vai `nghiem-thu`, chưa cổng vai Quản lý |
| GAP-QL-04 | View `hat` bật cả tuần đường và tuần kiểm trên một phiên |

Chi tiết id: `common/skill/implement-quan-ly-context/example/roles.md`.
