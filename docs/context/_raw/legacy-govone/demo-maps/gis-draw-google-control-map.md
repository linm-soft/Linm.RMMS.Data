# Demo control-map (modern MFE) — `gis-draw-google`

> **Rule:** cùng field/action legacy · UI theo **`/erp-form-context`** (Linm.Development.Rules).
> Demo HTML mock `Lin*` look · **cấm** copy skin GOVOne cũ · **cấm** BE.

## Kind hint

- F/custom map — erp-custom-manage + GIS
- Step 2a-K · 2d readonly · 2g control-map · 2g common controls mandatory

## Fields (legacy → Linm)

| Legacy | type | zone | Control | Linm SSOT |
|--------|------|------|---------|-----------|
| (unnamed) | button | sidebar | Text | TextField · common-field-control |
| inputDienTich | text | content | Text readonly (measure) | TextField readOnly · common-field-control · kết quả Đo diện tích (m²/km²) |
| inputChieuDai | text | content | Text readonly (measure) | TextField readOnly · common-field-control · kết quả Đo chiều dài (m/km) |
| inputChieuDaiKhongGian | text | content | Text readonly (measure) | TextField readOnly · common-field-control · chiều dài không gian |
| inputDienTichKhongGian | text | content | Text readonly (measure) | TextField readOnly · common-field-control · diện tích không gian |
| Nhập thông tin đối tượng... | text | header | Lookup ĐT | SearchInput · form-catalog-lookup-input |
| gMapInputTextSearch | text | header | Lookup ĐT | SearchInput · form-catalog-lookup-input |
| ddlLopDuLieu | select | toolbar | Select | Select · useFormOptions (cấm hardcode VN) |
| tenBanDo | text | footer | Text | TextField · common-field-control |
| textfield-1059-inputEl | text | footer | Text | TextField · common-field-control |
| moTa | textarea | footer | TextArea | TextField multiline |
| heToaDo | text | footer | Text | TextField · common-field-control |
| txtTemplateMapNam | text | content | Text | TextField · common-field-control |
| color4 | text | footer | Text | TextField · common-field-control |


## Actions / buttons (legacy → toolbar MFE)

| Legacy label | kind | zone | Demo button | Linm SSOT |
|--------------|------|------|-------------|-----------|
| Lớp bản đồ | action | grid | Lớp bản đồ | Button · toolbar zone |
| Chú giải | action | grid | Chú giải | Button · toolbar zone |
| Thuộc tính | action | grid | Thuộc tính | Button · toolbar zone |
| Kết quả | action | grid | Kết quả | Button · toolbar zone |
| Đo diện tích | nav | toolbar | Tool Đo diện tích | GIS toolbar · polygon measure · bind `inputDienTich` / `inputDienTichKhongGian` |
| Đo chiều dài | nav | toolbar | Tool Đo chiều dài | GIS toolbar · polyline measure · bind `inputChieuDai` / `inputChieuDaiKhongGian` |
| Lấy thông tin vị trí | export | toolbar | Tool Lấy thông tin vị trí | GIS toolbar · click point · readout lng/lat (X/Y) · `btTienIchThongTinDiem` |
| Chụp màn hình | nav | toolbar | Tool Chụp màn hình | GIS toolbar · `btnScreenMap` · map screenshot · download/png |
| Xuất bản đồ | export | toolbar | Xuất bản đồ | GIS toolbar · export map image/PDF |
| In bản đồ | export | toolbar | In bản đồ | GIS toolbar · print map |
| Chuẩn hóa cột Km | nav | toolbar | Tool Chuẩn hóa cột Km | GIS toolbar · `btChuanHoaCotKm` · layer `cot-km` · normalize lyTrinh `KmN+OO` · popup/attrs · Lưu/Hủy biên tập (vision 014) |
| Xem hướng đoạn đường | view | toolbar | Tool Xem hướng đoạn đường | GIS toolbar · `btXemHuongDoanDuong` · direction arrows on route polyline (view-only) |
| Gộp đoạn đường multiline | nav | toolbar | Tool Gộp đoạn đường multiline | GIS toolbar · `btGopDoanDuong` · multi-select ≥2 route polylines · merge geometry · Lưu/Hủy biên tập |
| Tạo đoạn đánh giá 100m | create | toolbar | Tool Tạo đoạn đánh giá 100m | GIS toolbar · `btTaoDoan100m` · select route polyline · generate 100m evaluation segments · Lưu/Hủy biên tập |
| Gán mã đoạn đánh giá cho điểm thu thập | nav | toolbar | Tool Gán mã đoạn đánh giá | GIS toolbar · `btGanMaDoanDanhGia` · select collection point · assign evaluation segment code · Lưu/Hủy biên tập |
| Tự động đánh giá chất lượng mặt đường | nav | toolbar | Tool Tự động đánh giá CL mặt đường | GIS toolbar · `btTinhToanCLMD` · select evaluation segments · run CLMD/PCI compute · Lưu/Hủy biên tập |
| Danh sách thiết bị | nav | toolbar | Tool Danh sách thiết bị | GIS toolbar · `toolThietBi` · open device/asset list by layer/scope · row→map highlight + Thuộc tính (≠ inventory kho) |
| Sao chép thiết bị | nav | toolbar | Tool Sao chép thiết bị | GIS toolbar · `toolSaoChepThietBi` · select source device · copy geometry/attributes · place copy · Lưu/Hủy biên tập (≠ Sao chép tài sản · ≠ inventory kho) |
| Sao chép tài sản | nav | toolbar | Điều hướng | MemoryRouter / navigate · mfe-run-modes |
| Tổng hợp | nav | toolbar | Tool Tổng hợp | GIS toolbar · `toolTongHopThietBi` · aggregate devices by layer/scope · Kết quả / Biểu đồ · drill-down map (≠ list `toolThietBi` · ≠ copy · ≠ reports Web tổng hợp) |
| Hủy biên tập | destructive | toolbar | Tool Hủy biên tập | GIS toolbar · `resetEditing` · discard unsaved edit session · Confirm modal · pair `saveEditing` (≠ Hủy bỏ dialog · ≠ delete object) |
| Lưu kết quả (Ctrl + S) | submit | toolbar | Tool Lưu kết quả (Ctrl+S) | GIS toolbar · `saveEditing` · Ctrl+S · commit unsaved edit session · toast · form-api-error-handling · pair `resetEditing` (≠ FormActions Lưu catalog · ≠ export/print) |
| Vệ tinh | nav | content | Basemap Vệ tinh | Map basemap switcher · `basemap=satellite` · GIS sidebar Lớp nền (≠ route navigate · ≠ overlay checkbox) |
| Google | nav | content | Basemap Google | Map basemap switcher · `basemap=google` · GIS sidebar Lớp nền (default parity) |
| Giao thông | nav | content | Basemap Giao thông | Map basemap switcher · `basemap=traffic` · GIS sidebar Lớp nền |
| Hành chính | nav | content | Basemap Hành chính | Map basemap switcher · `basemap=admin` · GIS sidebar Lớp nền |
| Không nền | nav | content | Basemap Không nền | Map basemap switcher · `basemap=none` · GIS sidebar Lớp nền |
| Bản đồ nền | nav | footer | Bản đồ nền | Map basemap shortcut (map corner) · same switcher as Lớp nền radios · GIS chrome |
| Biểu đồ | action | grid | Biểu đồ | Button · toolbar zone |
| Bản đồ quản lý hạ tầng giao thông Nghệ An | nav | toolbar | Điều hướng | MemoryRouter / navigate · mfe-run-modes |
| Bản đồ | action | toolbar | Bản đồ | Button · toolbar zone |
| Mở bản đồ | nav | toolbar | Điều hướng | MemoryRouter / navigate · mfe-run-modes |
| Công cụ | action | toolbar | Công cụ | Button · toolbar zone |
| Video Tracking | nav | toolbar | Điều hướng | MemoryRouter / navigate · mfe-run-modes |
| Phân tích không gian | nav | toolbar | Điều hướng | MemoryRouter / navigate · mfe-run-modes |
| Phân tích mạng lưới | nav | toolbar | Điều hướng | MemoryRouter / navigate · mfe-run-modes |
| Thiết kế mạng lưới | nav | toolbar | Điều hướng | MemoryRouter / navigate · mfe-run-modes |
| Tạo biểu mẫu | create | toolbar | Tạo mới / Thêm | Button primary · catalog/voucher toolbar |
| Quản lý biểu mẫu | nav | toolbar | Điều hướng | MemoryRouter / navigate · mfe-run-modes |
| Thiết lập hướng | nav | toolbar | Điều hướng | MemoryRouter / navigate · mfe-run-modes |
| Tìm kiếm | filter | toolbar | Tìm / Làm mới | LinErpListFilterBar · GAP-P2-87 |
| Về trang chủ | nav | header | Điều hướng | MemoryRouter / navigate · mfe-run-modes |
| Hồ sơ của tôi | nav | header | User menu | Avatar dropdown · profile / logout · mfe-run-modes |
| Đăng xuất | export | header | Đăng xuất | Auth logout · mfe-run-modes |
| Cơ bản | action | grid | Cơ bản | Button · toolbar zone |
| Chi tiết | view | grid | Xem | Button/link · View mode · fieldLockProps |
| Dịch vụ | action | grid | Dịch vụ | Button · toolbar zone |
| Công cụ | action | grid | Công cụ | Button · toolbar zone |
| Chia sẻ liên kết | action | grid | Chia sẻ liên kết | Button · toolbar zone |
| ... | action | content | ... | Button · toolbar zone |
| Chấp nhận | action | toolbar | Chấp nhận | Button · toolbar zone |
| Đóng | close | toolbar | Đóng | Modal/Slideout close · leave-confirm |
| Hủy bỏ | destructive | sidebar | Xóa / Hủy | Button danger · Confirm modal |
| Chọn | action | sidebar | Chọn | Button · toolbar zone |
| Lớp bản đồ | action | content | Lớp bản đồ | Button · toolbar zone |
| Chú giải | action | content | Chú giải | Button · toolbar zone |
| Thuộc tính | action | content | Thuộc tính | Button · toolbar zone |
| Kết quả | action | content | Kết quả | Button · toolbar zone |
| Biểu đồ | action | content | Biểu đồ | Button · toolbar zone |
| Bản đồ | action | content | Bản đồ | Button · toolbar zone |
| Công cụ | action | content | Công cụ | Button · toolbar zone |
| Tìm kiếm | action | content | Tìm kiếm | Button · toolbar zone |


## Demo page rules (bắt buộc)

1. **Layout** — list: LinPageLayout zones A–F · form: Pattern A/B/C theo Kind
2. **Filter** — `LinErpListFilterBar` · Tìm trên filter · Làm mới toolbar
3. **Grid** — STT · sort/filter · row action menu · không header `TT`
4. **Form** — validation banner · không disabled xám View · toast mock
5. **Labels** — `useFormOptions` pattern (hardcode VN chỉ trong demo HTML OK nếu gắn data-i18n key)
6. **Datetime** — hiển thị local · lưu ISO offset (mock)
7. Mọi **button** trong bảng Actions phải có trên demo (click → toast/modal mock)

## Refs

- `web-app/skill/erp-form-context/erp-form-context.md`
- `erp-common-controls-mandatory.md` · `erp-list-page-shell.md`
- Capture raw: `_raw/legacy-govone/features/gis-draw-google.md`
