# Legacy capture — `pavement-section` (Phân loại mặt đường · Biểu 1)

> **Không có màn GOVOne vision** riêng «Biểu 1 / Phân loại mặt đường».  
> GOVOne **SỔ TÀI SẢN** (`ketcauhatang.aspx`) đã map slug **`asset`** — không clone skin làm SSOT của `pavement-section`.  
> Capture synthetized từ `features/pavement-section.md` · hồ sơ CSDL Biểu 1 · `11-CSDL-SO-SACH-DATABASE-API.md` § Biểu 1.  
> Source: product docs — **không** password · **không** clone skin GOVOne.

## Pages (2)

### DANH SÁCH PHÂN LOẠI MẶT ĐƯỜNG (list)

- **id:** `pavement-section-list`
- **url:** (planned) `/asset/pavement-sections`
- **title:** Phân loại mặt đường (Biểu 1)
- **headings:** Tiêu đề · Toolbar · Bộ lọc · Lưới dữ liệu · Phân trang

#### Labels / field captions

- Tìm (Mã / tên đường):
- Tỉnh / TP:
- Tên đường:
- Từ Km:
- Đến Km:
- Tình trạng:
- STT · Mã · Tên đường · Tỉnh · Từ Km · Đến Km · Kết cấu · Cấp · Tình trạng · ĐV quản lý

#### Inputs (filter)

| tag | type | name/id | placeholder |
|-----|------|---------|-------------|
| input | search | fSearch | Mã / đường |
| select | select-one | fProvince | Tất cả |
| input | text | fRoad | QL.1 |
| input | number | fKmFrom | 0 |
| input | number | fKmTo | 10 |
| select | select-one | fStatus | Tất cả |
| select | select-one | fPageSize | 20 |

#### Actions / buttons (full)

| label | kind | zone | tag | disabled |
|-------|------|------|-----|----------|
| Tạo mới | create | toolbar | button | |
| Import | import | toolbar | button | |
| Export | export | toolbar | button | |
| Làm mới | action | toolbar | button | |
| Cấu hình cột | action | toolbar | button | |
| Tìm | filter | filter | button | |
| Xóa điều kiện | filter | filter | button | |
| Xem | view | grid | button | |
| Sửa | edit | grid | button | |
| Xóa | destructive | grid | button | |
| Vẽ trên bản đồ live | nav | header | a | |
| Trợ giúp | nav | header | button | |
| Thông báo | nav | header | button | |
| User menu | nav | header | button | |
| Trang trước | nav | pager | button | |
| Trang sau | nav | pager | button | |

### FORM ĐOẠN MẶT ĐƯỜNG (Kind B full page)

- **id:** `pavement-section-form`
- **url:** (planned) `/asset/pavement-sections/new` · `/asset/pavement-sections/:id`
- **title:** Tạo / Sửa / Xem — Phân loại mặt đường

#### Inputs

| tag | type | name/id | placeholder |
|-----|------|---------|-------------|
| input | text | code | MD-YYYYMMDD-NNNN |
| input | text | roadName | QL.1 |
| select | select-one | provinceName | Lạng Sơn |
| input | number | kmFrom | 0 |
| input | number | kmTo | 1 |
| input | number | lengthKm | 1 |
| input | number | baseWidthM | 23 |
| input | number | surfaceWidthM | 21 |
| select | select-one | structureType | BTN |
| input | number | surfaceThicknessCm | 12 |
| select | select-one | roadClass | I |
| input | text | yearsInService | 6 |
| input | checkbox | handoverMaintenance | |
| input | checkbox | handoverConstruction | |
| input | number | lastMajorRehabYear | 2020 |
| input | number | lastSurfaceRepairYear | 2022 |
| select | select-one | status | Tốt |
| input | text | constructionUnit | Công ty XD … |
| input | text | manageUnit | Khu QLĐB I |
| input | text | ownerUnit | Công ty … |
| textarea | text | notes | |
| input | text | updatedAt | (readonly) |
| input | text | updatedBy | (readonly) |

#### Actions / buttons (full)

| label | kind | zone | tag | disabled |
|-------|------|------|-----|----------|
| ← Danh sách | nav | header | button | |
| Lưu | create/save | toolbar | button | view hidden |
| Huỷ | close | toolbar | button | |
| Xóa | destructive | toolbar | button | create/view hidden |
| Sửa | edit | toolbar | button | create/edit hidden |
| Đóng | close | toolbar | button | create/edit hidden |
| Mở bản đồ live | nav | toolbar | a | |

## Related (không remap)

- GOVOne Sổ tài sản → slug **`asset`**
- Bản đồ vẽ đoạn → `gis-draw-live` (`layerCode=mat-duong`)
