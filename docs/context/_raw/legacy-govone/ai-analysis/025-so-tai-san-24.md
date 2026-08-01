# AI Vision — SỔ TÀI SẢN › 24 › +

> Autogen + AI review. Không chứa password.

| | |
|---|---|
| **id** | `025-so-tai-san-24` |
| **slug** | `asset` |
| **url** | https://pmdb.govone.vn/ketcauhatang.aspx#pnltaisan |
| **screenshot** | `screenshots/025-so-tai-san-24.png` |
| **DOM fields** | 4 |
| **DOM labels** | 2 |
| **DOM buttons** | 11 |

## DOM inventory (đã capture)

### Labels
- Lý trình từ:
- Lý trình đến:

### Inputs

| tag | type | name/id |
|-----|------|---------|
| input | text | textfield-1033-inputEl |
| input | text | textfield-1079-inputEl |
| input | text | textfield-1080-inputEl |
| input | text | inputItem |

### Buttons / actions
- 24 · Ban.TK.Nguyễn Anh Phúc · Tiện ích · Xóa điều kiện · Lấy dữ liệu · + · − · ⇧ · Vị trí của tôi · Lớp nền · Lớp chuyên đề

## Analysis (AI điền)

### Màn hình / mục đích

Cùng sổ tài sản sau khi mở thông báo (badge 24) / luồng tạo (+). Parity field/action với root SỔ TÀI SẢN — form tạo mẫu gắn lý trình từ/đến.

### Vùng UI (layout zones)

| Zone | Mô tả | Controls thấy trên ảnh |
|------|-------|------------------------|
| Header | Shell + badge 24 | Notification · User · Tiện ích |
| Filter / toolbar | Lý trình + Lấy dữ liệu | textfield-1079/1080 |
| Grid / map / content | Map + grid placeholder | Zoom · layers · locate |
| Create | Trigger + | Form sample lý trình từ/đến |

### Field list (từ ảnh — bổ sung DOM)

| Nhãn VN | Control gợi ý | Bắt buộc? | Ghi chú |
|---------|---------------|-----------|---------|
| Lý trình từ | TextField | * trên create | Form sample |
| Lý trình đến | TextField | * trên create | Form sample |
| Lọc tree | SearchInput | | sidebar |

### Tính năng / hành động

- Mọi action DOM (11) · create modal mock trên demo MFE modern

### Map → step context

- Feature: `docs/context/features/asset.md`
- Demo: `public/demo/asset/asset.html` · control-map `asset-control-map.md`

## Status

- [x] Vision reviewed
- [x] Mapped to step context
