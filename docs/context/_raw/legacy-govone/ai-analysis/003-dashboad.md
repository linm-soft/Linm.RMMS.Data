# AI Vision — DASHBOAD

> Autogen. Agent **phải** mở ảnh + điền mục Analysis. Không chứa password.

| | |
|---|---|
| **id** | `003-dashboad` |
| **slug** | `dashboard` |
| **url** | https://pmdb.govone.vn/DuongBo/dashboard |
| **screenshot** | `screenshots/003-dashboad.png` |
| **DOM fields** | 12 |
| **DOM labels** | 11 |
| **DOM buttons** | 20 |

## DOM inventory (đã capture)

### Labels
- Ngày tổng hợp
- Tuần đường
- Tuần kiểm
- Tình hình bão lũ
- Tai nạn giao thông
- Vi phạm xâm phạm
- Công việc
- CÔNG TÁC TUẦN ĐƯỜNG
- CÔNG TÁC TUẦN KIỂM
- CÔNG VIỆC
- Chưa thực hiện checkin

### Buttons / actions
- dropdown trigger
- Báo cáo tổng hợp
- Phân quyền
- Bản đồ
- Vấn đề
- Giám sát
- Hồ sơ
- govone.vn
- youtube
- facebook
- Thiết lập cỡ chữ
- Giao diện sáng
- Giao diện tối
- Ban.TK.Nguyễn Anh Phúc nguyenanhphuc.dbna@cloudgis.vn
- Thông tin của tôi
- Đổi mật khẩu
- Đăng xuất
- CÔNG TÁC TUẦN ĐƯỜNG
- CÔNG TÁC TUẦN KIỂM
- CÔNG VIỆC

### Inputs

| tag | type | name/id |
|-----|------|---------|
| input | date | Ngày tổng hợp |
| div | metric | Tuần đường |
| div | metric | Tuần kiểm |
| div | metric | Tình hình bão lũ |
| div | metric | Tai nạn giao thông |
| div | metric | Vi phạm xâm phạm |
| div | metric | Công việc |
| div | text | Đơn vị / công ty |
| div | text | Tuyến (QL) |
| div | text | Điểm Km / lý trình |
| div | text | Trạng thái check-in |
| div | text | Empty state |

## Analysis (AI điền)

### Màn hình / mục đích

_(TODO AI)_

### Vùng UI (layout zones)

| Zone | Mô tả | Controls thấy trên ảnh |
|------|-------|------------------------|
| Header | | |
| Filter / toolbar | | |
| Grid / map / content | | |
| Footer / actions | | |

### Field list (từ ảnh — bổ sung DOM)

| Nhãn VN | Control gợi ý | Bắt buộc? | Ghi chú |
|---------|---------------|-----------|---------|
| | | | |

### Tính năng / hành động

- 

### Map → step context

- Feature: `docs/context/features/dashboard.md`
- Section: `## Legacy GOVOne (auto-capture)`
- Demo: parity UI trong `*-demo.html`

## Status

- [ ] Vision reviewed
- [ ] Mapped to step context
