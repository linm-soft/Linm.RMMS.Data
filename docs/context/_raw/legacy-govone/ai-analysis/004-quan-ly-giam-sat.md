# AI Vision — QUẢN LÝ GIÁM SÁT

> Autogen. Agent **phải** mở ảnh + điền mục Analysis. Không chứa password.

| | |
|---|---|
| **id** | `004-quan-ly-giam-sat` |
| **slug** | `patrol` |
| **url** | https://pmdb.govone.vn/dbv3giamsat.aspx#pnlViTriHienThoi |
| **screenshot** | `screenshots/004-quan-ly-giam-sat.png` |
| **DOM fields** | 12 |
| **DOM labels** | 11 |
| **DOM buttons** | 16 |

## DOM inventory (đã capture)

### Labels
- Danh sách nhân viên
- Chưa checkin: 0
- Tổng số : 0
- Tất cả
- Đoạn đường
- Không có bản ghi nào
- Vị trí hiện thời
- Giám sát nhân viên 2
- Giám sát tuyến đường 2
- Lịch sử checkin 2
- Tổng hợp 2

### Buttons / actions
- Ban.TK.Nguyễn Anh Phúc
- Xuất excel
- Tải lại
- Vệ tinh
- Google
- Giao thông
- Hành chính
- Không nền
- Bản đồ nền
- +
- −
- Giám sát nhân viên 2
- Giám sát tuyến đường 2
- Lịch sử checkin 2
- Tổng hợp 2
- Thu/mở panel list

### Inputs

| tag | type | name/id |
|-----|------|---------|
| input | text | treepickerex-1025-inputEl |
| input | text | doanduong |
| div | text | Danh sách nhân viên |
| div | metric | Chưa checkin |
| div | metric | Tổng số |
| div | text | Empty state |
| button | text | Bản đồ nền |
| a | text | Vệ tinh |
| a | text | Google |
| a | text | Giao thông |
| a | text | Hành chính |
| a | text | Không nền |

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
