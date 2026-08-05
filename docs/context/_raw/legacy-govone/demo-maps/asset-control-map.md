# Demo control-map (modern MFE) — `asset`

> **Rule:** cùng field/action legacy · UI theo **`/erp-form-context`** (Linm.Development.Rules).
> Demo HTML mock `Lin*` look · **cấm** copy skin GOVOne cũ · **cấm** BE.
> sourceKind: **legacy** · form Create/Edit bổ sung từ product docs (capture form-sample shallow / miscapture zoom).

## Kind hint

- F/custom map + list — erp-custom-manage + GIS · erp-list-page-shell
- Step 2a-K · 2d readonly · 2g control-map · 2g common controls mandatory

## Fields (legacy → Linm)

### Filter / list chrome

| Legacy | type | zone | Control | Linm SSOT |
|--------|------|------|---------|-----------|
| textfield-1033-inputEl | text | side | Search (tree filter) | SearchInput · LinErpListFilterBar · lọc tree tuyến |
| textfield-1079-inputEl | text | filter | Search (lý trình từ) | SearchField · common-field-control · filter lý trình từ |
| textfield-1080-inputEl | text | filter | Search (lý trình đến) | SearchField · common-field-control · filter lý trình đến |
| inputItem | text | pager | Number (pager) | Pagination current page · list shell |
| *(product)* search grid | text | filter | Search (mã·tên·QR·status) | LinErpListFilterBar · grid search |
| *(product)* loại TS | select | filter | Select loại | FilterBar · option list |

### Form Create / Edit / View / Copy (product + AI media)

| Field | type | zone | Control | Notes |
|-------|------|------|---------|-------|
| code | text | form | IdCode readonly | gen `TS-YYYYMMDD-NNN` mock |
| name * | text | form | TextField | required |
| type * | select | form | Select | Mặt đường / Cầu / Biển báo / … |
| route * | select | form | Select | tree tuyến master |
| kmFrom * | text | form | Text (lý trình) | vd km12+300 |
| kmTo | text | form | Text (lý trình) | optional |
| status * | select | form | Select | Tốt · Theo dõi · Cần bảo trì |
| source | select | form | Select | manual · ai |
| lat / lng | number | form | Number | GPS pin Leaflet |
| qr | text | form | TextField | QR mock |
| photos | text | form | TextField multi | media mock CSV |
| valueVnd | number | form | Number | + valueDisplay local format |
| note | textarea | form | TextArea | |
| updatedAt | datetime | form | ISO + local display | mock offset +07 |

Count fields (filter+form): **18**

## Actions / buttons (legacy → toolbar MFE)

| Legacy label | kind | zone | Demo button | Linm SSOT |
|--------------|------|------|-------------|-----------|
| 24 | nav | toolbar | Thông báo | Notification badge · header · mfe-run-modes |
| Ban.TK.Nguyễn Anh Phúc | nav | toolbar | User menu | Avatar dropdown · profile / logout · mfe-run-modes |
| Tiện ích | nav | toolbar | Tiện ích | Overflow / utilities menu · toolbar |
| Xóa điều kiện | destructive | grid | Xóa điều kiện | LinErpListFilterBar · clear filter |
| Lấy dữ liệu | nav | grid | Lấy dữ liệu | query map pins + grid · GAP-P2-87 |
| + | action | grid | Zoom + | MapPane zoomIn (`#zoomIn`) · GIS chrome · ≠ Create catalog |
| − | action | grid | Zoom − | MapPane zoomOut (`#zoomOut`) · GIS chrome |
| ⇧ | action | grid | ⇧ Đưa lên | bring pin layer front |
| Vị trí của tôi | action | grid | Vị trí của tôi | Map geolocate · GIS toolbar |
| Lớp nền | action | grid | Lớp nền | Map basemap switcher OSM/sat/topo |
| Lớp chuyên đề | action | modal | Lớp chuyên đề | thematic layers + side tab Lớp dữ liệu |

### Catalog actions (product — form work gate)

| Demo label | kind | zone | Behaviour |
|------------|------|------|-----------|
| + Tạo mới | create | toolbar | openForm create |
| Sao chép | copy | toolbar / row | openForm copy · save new |
| Xem / Sửa | view · edit | row | openForm view/edit |
| Confirm / Dismiss AI | action | AI panel | create asset / dismiss candidate |

## Demo page rules (bắt buộc)

1. **Layout** — list: LinPageLayout zones A–F · form: Pattern A/B/C theo Kind F (map+list + detail panel)
2. **Filter** — `LinErpListFilterBar` · Tìm trên filter · Làm mới toolbar
3. **Grid** — STT · sort/filter · row action menu · không header `TT`
4. **Form** — validation banner · không disabled xám View · toast mock · modes Create/Edit/View/Copy
5. **Labels** — hardcode VN demo OK nếu gắn data-i18n key
6. **Datetime** — hiển thị local · lưu ISO offset (mock)
7. Mọi **button** trong bảng Actions phải có trên demo (click → toast/modal/map mock)
8. **Map** — Leaflet live · cấm CSS gradient map · pin lat/lng seed
9. **AI** — badge + candidate panel P1 read+confirm (15-map)

## Refs

- `web-app/skill/erp-form-context/erp-form-context.md`
- `erp-common-controls-mandatory.md` · `erp-list-page-shell.md`
- Capture raw: `_raw/legacy-govone/features/asset.md`
- Demo: `Linm.RMMS.Demo/src/demo/asset/asset.html`
