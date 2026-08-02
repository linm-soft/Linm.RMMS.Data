# Demo control-map (modern MFE) — `asset`

> **Rule:** cùng field/action legacy · UI theo **`/erp-form-context`** (Linm.Development.Rules).
> Demo HTML mock `Lin*` look · **cấm** copy skin GOVOne cũ · **cấm** BE.

## Kind hint

- F/custom map + list — erp-custom-manage + GIS · erp-list-page-shell
- Step 2a-K · 2d readonly · 2g control-map · 2g common controls mandatory

## Fields (legacy → Linm)

| Legacy | type | zone | Control | Linm SSOT |
|--------|------|------|---------|-----------|
| textfield-1033-inputEl | text | toolbar | Search (tree filter) | SearchInput · LinErpListFilterBar · lọc tree tuyến |
| textfield-1079-inputEl | text | toolbar | Text (lý trình) | TextField · common-field-control · filter lý trình từ/đến |
| textfield-1080-inputEl | text | toolbar | Text (lý trình) | TextField · common-field-control · filter lý trình từ/đến |
| inputItem | text | toolbar | Number (pager) | Pagination current page · list shell |


## Actions / buttons (legacy → toolbar MFE)

| Legacy label | kind | zone | Demo button | Linm SSOT |
|--------------|------|------|-------------|-----------|
| 24 | nav | toolbar | Thông báo | Notification badge · header · mfe-run-modes |
| Ban.TK.Nguyễn Anh Phúc | nav | toolbar | User menu | Avatar dropdown · profile / logout · mfe-run-modes |
| Tiện ích | nav | toolbar | Tiện ích | Overflow / utilities menu · toolbar |
| Xóa điều kiện | destructive | grid | Xóa điều kiện | LinErpListFilterBar · clear filter lý trình / điều kiện |
| Lấy dữ liệu | nav | grid | Lấy dữ liệu | LinErpListFilterBar · query map pins + grid · GAP-P2-87 |
| + | action | grid | Zoom + | MapPane zoomIn (`#zoomIn`) · GIS chrome · ≠ Create catalog (vision 007/009/011 form-sample miscapture) |
| − | action | grid | Zoom − | MapPane zoomOut (`#zoomOut`) · GIS chrome |
| ⇧ | action | grid | ⇧ | Button · toolbar zone |
| Vị trí của tôi | action | grid | Vị trí của tôi | Map geolocate · GIS toolbar |
| Lớp nền | action | grid | Lớp nền | Map basemap switcher · GIS toolbar |
| Lớp chuyên đề | action | modal | Lớp chuyên đề | Map thematic layers · GIS toolbar / modal |


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
- Capture raw: `_raw/legacy-govone/features/asset.md`
