# AI Vision — QUẢN LÝ GIÁM SÁT

> Autogen. Agent **phải** mở ảnh + điền mục Analysis. Không chứa password.

| | |
|---|---|
| **id** | `004-quan-ly-giam-sat` |
| **slug** | `patrol` |
| **url** | https://pmdb.govone.vn/dbv3giamsat.aspx#pnlViTriHienThoi |
| **screenshot** | `screenshots/004-quan-ly-giam-sat.png` |
| **DOM fields** | 2 |
| **DOM labels** | 3 |
| **DOM buttons** | 3 |

## DOM inventory (đã capture)

### Labels
- Danh sách nhân viên
- Chưa checkin: 0
- Tổng số : 0

### Buttons / actions
- Ban.TK.Nguyễn Anh Phúc
- Xuất excel
- Tải lại

### Inputs

| tag | type | name/id |
|-----|------|---------|
| input | text | treepickerex-1025-inputEl |
| input | text | doanduong |

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
