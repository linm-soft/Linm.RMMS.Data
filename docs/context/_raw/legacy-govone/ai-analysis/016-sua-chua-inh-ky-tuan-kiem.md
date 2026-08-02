# AI Vision — SỬA CHỮA ĐỊNH KỲ › Tuần kiểm

> Autogen. Agent **phải** mở ảnh + điền mục Analysis. Không chứa password.

| | |
|---|---|
| **id** | `016-sua-chua-inh-ky-tuan-kiem` |
| **slug** | `patrol` |
| **url** | https://pmdb.govone.vn/DuongBo/dashboard |
| **screenshot** | `screenshots/016-sua-chua-inh-ky-tuan-kiem.png` |
| **DOM fields** | 8 |
| **DOM labels** | 6 |
| **DOM buttons** | 22 |

## DOM inventory (đã capture)

### Labels
- Ngày tổng hợp
- Tuần kiểm
- CÔNG TÁC TUẦN KIỂM
- Tuyến (QL)
- Trạng thái check-in
- Empty / loading (panel)

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
- Maximize
- Đóng

### Inputs

| tag | type | name/id |
|-----|------|---------|
| input | date | Ngày tổng hợp |
| div | metric | Tuần kiểm |
| button | text | CÔNG TÁC TUẦN KIỂM |
| div | text | Tuyến (QL) — tuần kiểm |
| div | text | Trạng thái check-in |
| div | text | Empty / loading (panel) |
| div | text | Tiêu đề modal (miscapture) |
| div | text | Empty state modal (miscapture) |

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

- Feature: `docs/context/features/patrol.md`
- Section: `## Legacy GOVOne (auto-capture)`
- Demo: parity UI trong `*-demo.html`

## Status

- [ ] Vision reviewed
- [ ] Mapped to step context
