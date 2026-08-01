# AI Vision — BẢN ĐỒ CÔNG TRÌNH GIAO THÔNG

> Autogen. Agent **phải** mở ảnh + điền mục Analysis. Không chứa password.

| | |
|---|---|
| **id** | `002-ban-o-cong-trinh-giao-thong` |
| **slug** | `gis-draw-google` |
| **url** | https://pmdb.govone.vn/geditor.aspx?mapid=17384&gtoken=[REDACTED] |
| **screenshot** | `screenshots/002-ban-o-cong-trinh-giao-thong.png` |
| **DOM fields** | 39 |
| **DOM labels** | 0 |
| **DOM buttons** | 26 |

## DOM inventory (đã capture)

### Labels
- _(trống — ưu tiên đọc từ ảnh)_

### Buttons / actions
- Lớp bản đồ
- Chú giải
- Thuộc tính
- Kết quả
- Đo diện tích
- Đo chiều dài
- Lấy thông tin vị trí
- Chụp màn hình
- Xuất bản đồ
- In bản đồ
- Chuẩn hóa cột Km
- Xem hướng đoạn đường
- Gộp đoạn đường multiline
- Tạo đoạn đánh giá 100m
- Gán mã đoạn đánh giá cho điểm thu thập
- Tự động đánh giá chất lượng mặt đường
- Danh sách thiết bị
- Sao chép thiết bị
- Sao chép tài sản
- Tổng hợp
- Hủy biên tập
- Lưu kết quả (Ctrl + S)
- Biểu đồ
- Bản đồ
- Công cụ
- Tìm kiếm

### Inputs

| tag | type | name/id |
|-----|------|---------|
| input | button | — |
| input | button | — |
| input | button | — |
| input | button | — |
| input | button | — |
| input | button | — |
| input | button | — |
| input | button | — |
| input | button | — |
| input | button | — |
| input | button | — |
| input | button | — |
| input | button | — |
| input | button | — |
| input | button | — |
| input | button | — |
| input | button | — |
| input | button | — |
| input | button | — |
| input | button | — |
| input | button | — |
| input | button | — |
| input | button | — |
| input | button | — |
| input | button | — |
| input | button | — |
| input | button | — |
| input | button | — |
| input | button | — |
| input | button | — |
| input | button | — |
| input | button | — |
| input | text | inputDienTich |
| input | text | inputChieuDai |
| input | text | inputChieuDaiKhongGian |
| input | text | inputDienTichKhongGian |
| input | text | — |
| input | text | gMapInputTextSearch |
| select | — | ddlLopDuLieu |

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

- Feature: `docs/context/features/gis-draw-google.md`
- Section: `## Legacy GOVOne (auto-capture)`
- Demo: parity UI trong `*-demo.html`

## Status

- [ ] Vision reviewed
- [ ] Mapped to step context
