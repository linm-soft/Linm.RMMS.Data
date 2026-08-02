# AI Vision — SỬA CHỮA ĐỊNH KỲ › Tai nạn giao thông

> Autogen. Agent **phải** mở ảnh + điền mục Analysis. Không chứa password.

| | |
|---|---|
| **id** | `015-sua-chua-inh-ky-tai-nan-giao-thong` |
| **slug** | `maintenance` |
| **url** | https://pmdb.govone.vn/DuongBo/dashboard |
| **screenshot** | `screenshots/015-sua-chua-inh-ky-tai-nan-giao-thong.png` |
| **DOM fields** | 4 |
| **DOM labels** | 2 |
| **DOM buttons** | 22 |

## DOM inventory (đã capture)

### Labels
- Tai nạn giao thông
- Empty state (TNGT)

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
| div | text | Tiêu đề modal |
| div | text | Empty state (TNGT) |
| input | date | Ngày tổng hợp |
| div | metric | Tai nạn giao thông |

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

- Feature: `docs/context/features/maintenance.md`
- Section: `## Legacy GOVOne (auto-capture)`
- Demo: parity UI trong `*-demo.html`

## Status

- [ ] Vision reviewed
- [ ] Mapped to step context
