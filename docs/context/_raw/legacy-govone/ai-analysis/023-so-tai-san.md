# AI Vision — SỔ TÀI SẢN

> Autogen + AI review. Không chứa password.

| | |
|---|---|
| **id** | `023-so-tai-san` |
| **slug** | `asset` |
| **url** | https://pmdb.govone.vn/ketcauhatang.aspx#pnltaisan |
| **screenshot** | `screenshots/023-so-tai-san.png` |
| **DOM fields** | 4 |
| **DOM labels** | 2 |
| **DOM buttons** | 11 |

## DOM inventory (đã capture)

### Labels
- Lý trình từ:
- Lý trình đến:

### Buttons / actions
- 24
- Ban.TK.Nguyễn Anh Phúc
- Tiện ích
- Xóa điều kiện
- Lấy dữ liệu
- +
- −
- ⇧
- Vị trí của tôi
- Lớp nền
- Lớp chuyên đề

### Inputs

| tag | type | name/id |
|-----|------|---------|
| input | text | textfield-1033-inputEl |
| input | text | textfield-1079-inputEl |
| input | text | textfield-1080-inputEl |
| input | text | inputItem |

## Analysis (AI điền)

### Màn hình / mục đích

Sổ tài sản KCHT — chọn tuyến (tree) → lọc lý trình → lấy dữ liệu lên map + lưới thuộc tính. Layout master: sidebar cây tuyến · map GIS · grid/detail dưới.

### Vùng UI (layout zones)

| Zone | Mô tả | Controls thấy trên ảnh |
|------|-------|------------------------|
| Header | App shell KCHT | Bell badge 24 · User menu · Tiện ích |
| Filter / toolbar | Filter lý trình trên map | Lý trình từ/đến · Lấy dữ liệu · Xóa điều kiện |
| Left pane | Tree tuyến / lớp | Search tree · QL.48C · QL.7 · eye toggle |
| Grid / map / content | Map VN + grid trống | Zoom +/− · locate · lớp nền · lớp chuyên đề · pager |
| Footer / actions | Grid toolbar | Search · Edit · Delete · Export · Refresh (DOM icon; map demo = mock) |

### Field list (từ ảnh — bổ sung DOM)

| Nhãn VN | Control gợi ý | Bắt buộc? | Ghi chú |
|---------|---------------|-----------|---------|
| Lọc tree tuyến | SearchInput | | placeholder Enter để lọc |
| Lý trình từ | TextField | | vd: km1+100 |
| Lý trình đến | TextField | | vd: km5+100 |
| Trang (pager) | Number | | inputItem |

### Tính năng / hành động

- Lọc tuyến tree · lấy dữ liệu theo lý trình · zoom/locate map · đổi lớp nền/chuyên đề · tạo mới (+) · pager

### Map → step context

- Feature: `docs/context/features/asset.md`
- Section: `## Legacy GOVOne (auto-capture)`
- Demo: `Linm.RMMS.Demo/public/demo/asset/asset.html`
- Control-map: `demo-maps/asset-control-map.md`

## Status

- [x] Vision reviewed
- [x] Mapped to step context
