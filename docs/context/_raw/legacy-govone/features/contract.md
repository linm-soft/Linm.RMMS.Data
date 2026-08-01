# Legacy capture (synthesized) — `contract`

> Không có màn GOVOne vision cho Hợp đồng / ngân sách (module mới P2–P3).  
> Synthetized từ `07-TECHNICAL-IMPLEMENTATION.md` § Hạng mục 11 · `15-SCREEN-AI-MAP.md` · MFE ownership Contract.

## Pages (2)

### DANH SÁCH HỢP ĐỒNG / NGÂN SÁCH

- **id:** `contract-list`
- **url:** (planned) `/contract`
- **title:** Hợp đồng và ngân sách

#### Labels / field captions (list + KPI)

- Mã HĐ · Số HĐ · Tên HĐ · Loại HĐ · Nhà thầu · Giá trị HĐ · Ngân sách năm · Đã giải ngân · Ngày ký · Hiệu lực · Hết hạn · Trạng thái · KPI nhà thầu · SLA % · Tháng bảo hành · Ngày hết BH · Tổng đã TT · Quyết toán · Đơn vị QL · Tuyến/đoạn · Năm NS · Liên kết WO

#### Actions / buttons (full)

| label | kind | zone |
|-------|------|------|
| Làm mới | action | toolbar |
| Làm mới KPI | action | toolbar |
| Tạo hợp đồng | create | toolbar |
| Lọc / Tìm | filter | filter |
| Xem chi tiết | view | grid |
| Sửa | action | grid |
| Xóa | destructive | grid |
| Ký hợp đồng | action | grid |
| Ghi nhận thanh toán | action | grid |
| Xem KPI nhà thầu | view | grid |
| Xuất Excel | export | toolbar |
| Xuất báo cáo ngân sách | export | toolbar |
| Mở quyết toán | nav | toolbar |
| Gia hạn bảo hành | action | grid |
| Liên kết WorkOrder | nav | toolbar |
| User menu | nav | header |

### CHI TIẾT / TẠO HỢP ĐỒNG

- **id:** `contract-form`
- **url:** (planned) `/contract/new` · `/contract/:id`
- **title:** Chi tiết hợp đồng

#### Labels / field captions (form + payment lines)

- Mã HĐ · Số HĐ · Tên HĐ · Loại HĐ · Nhà thầu · Giá trị HĐ · Ngân sách năm · Đã giải ngân · Ngày ký · Ngày hiệu lực · Ngày hết hạn · Trạng thái · Điểm KPI · SLA % · Tháng bảo hành · Ngày hết BH · Đơn vị quản lý · Tuyến/đoạn · Năm ngân sách · Liên kết WO · Ghi chú · Kỳ TT · Số tiền TT · Ngày TT · TT dòng · Ghi chú dòng

#### Actions / buttons (full)

| label | kind | zone |
|-------|------|------|
| Lưu | create | footer |
| Lưu nháp | action | footer |
| Phê duyệt | action | footer |
| Thêm dòng thanh toán | create | lines |
| Xóa dòng thanh toán | destructive | lines |
| Hủy thay đổi | close | footer |
| Đóng | close | header |
| Quay lại | nav | header |

- **fieldCount:** 26
- **actionCount:** 24

## Migration notes

- Map → control-map modern MFE · erp-form-context Kind **B** list + Kind **D** slideout.
- Demo: same fields · Linm shell — **cấm** clone skin GOVOne · **cấm** BE.
- Badge **P2–P3** trên hub/list.
