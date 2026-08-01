# Legacy capture (synthesized) — `drone`

> Không có màn GOVOne vision cho Drone / Reality Capture (module mới P2–P3).  
> Synthetized từ `07-TECHNICAL-IMPLEMENTATION.md` § Hạng mục 13 · `_extract/rmms-giaiphap-tinhnang.txt` Phân hệ 13 · `15-SCREEN-AI-MAP.md` #13 · MFE ownership Drone.

## Pages (2)

### DANH SÁCH SCAN / JOB BAY

- **id:** `drone-list`
- **url:** (planned) `/drone`
- **title:** Drone / Reality Capture

#### Labels / field captions (list + KPI)

- Mã scan · Tên nhiệm vụ · Loại bay · Mục đích · Tuyến/đoạn · Công trình · Đơn vị TH · Thiết bị · Phi công · Ngày bay · Giờ BD · Giờ KT · Diện tích km² · Số ảnh · Trạng thái · Point cloud · Orthophoto · 3D Tiles · GIS ref · Incident ref · AiVision job · Ghi chú

#### Actions / buttons (full)

| label | kind | zone |
|-------|------|------|
| Làm mới | action | toolbar |
| Làm mới KPI | action | toolbar |
| Tạo scan / Upload | create | toolbar |
| Lọc / Tìm | filter | filter |
| Xem chi tiết | view | grid |
| Sửa | action | grid |
| Xóa | destructive | grid |
| Upload files | action | grid |
| Xử lý (process) | action | grid |
| Xem artifacts | view | grid |
| Mở viewer stub | view | toolbar |
| Mở GIS Twin | nav | toolbar |
| Xuất Excel | export | toolbar |
| Gửi sự cố | action | grid |
| Liên kết AiVision | nav | toolbar |
| User menu | nav | header |

### CHI TIẾT / TẠO SCAN

- **id:** `drone-form`
- **url:** (planned) `/drone/new` · `/drone/:id`
- **title:** Chi tiết scan drone

#### Labels / field captions (form + artifact lines)

- Mã scan · Tên nhiệm vụ · Loại bay · Mục đích · Tuyến/đoạn · Công trình · Đơn vị TH · Thiết bị · Phi công · Ngày bay · Giờ BD · Giờ KT · Diện tích km² · Số ảnh · Trạng thái · Point cloud key · Orthophoto key · 3D Tiles · GIS ref · Incident ref · AiVision job · Ghi chú · Loại artifact · Tên file · Size MB · Storage key · TT artifact

#### Actions / buttons (full)

| label | kind | zone |
|-------|------|------|
| Lưu | create | footer |
| Lưu nháp | action | footer |
| Hủy job | destructive | footer |
| Thêm artifact | create | lines |
| Xóa artifact | destructive | lines |
| Hủy thay đổi | close | footer |
| Đóng | close | header |
| Quay lại | nav | header |

- **fieldCount:** 27
- **actionCount:** 24

## Migration notes

- Map → control-map modern MFE · erp-form-context Kind **B** list + Kind **D** slideout + viewer stub.
- Demo: same fields · Linm shell — **cấm** clone skin GOVOne · **cấm** BE.
- Badge **P2–P3** trên hub/list · DoD P2: upload job + viewer stub.
