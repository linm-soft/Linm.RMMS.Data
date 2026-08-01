# Demo control-map (modern MFE) — `gis`

> **Rule:** cùng field/action legacy · UI theo **`/erp-form-context`** (Linm.Development.Rules).
> Demo HTML mock `Lin*` look · **cấm** copy skin GOVOne cũ · **cấm** BE.
> Live map REQUIRED (Leaflet OSM/Esri) — `example/map-live-required.md`.

## Kind hint

- **F**/custom map — erp-custom-manage + GIS shell (viewer 2D + overlay)
- Step 2a-K · 2g control-map · 2g common controls mandatory
- Digital Twin 3D = **P2** badge (không implement Cesium P1)

## Fields (legacy → Linm)

| Legacy | type | zone | Control | Linm SSOT |
|--------|------|------|---------|-----------|
| gMapInputTextSearch | text | header | Lookup ĐT | SearchInput · form-catalog-lookup-input |
| ddlLopDuLieu | select | sidebar | Select lớp | Select · useFormOptions (cấm hardcode VN prod) |
| pciMin | number | filter | Number PCI từ | NumberField · common-field-control |
| pciMax | number | filter | Number PCI đến | NumberField · common-field-control |
| bboxReadout | text | footer | Text readonly | TextField readOnly · viewport bbox |
| heToaDo | text | footer | Text | TextField · common-field-control · EPSG |
| overlayStatus | text | toolbar | Text readonly | TextField readOnly · SignalR stub status |
| twinAssetId | text | panel | Text | TextField · Twin asset id (P2) |

## Actions / buttons (legacy → toolbar MFE)

| Legacy label | kind | zone | Demo button | Linm SSOT |
|--------------|------|------|-------------|-----------|
| 24 | nav | toolbar | Thông báo | Notification badge · header · mfe-run-modes |
| Ban.TK.Nguyễn Anh Phúc | nav | toolbar | User menu | Avatar dropdown · profile / logout |
| Tiện ích | nav | toolbar | Tiện ích | Overflow / utilities menu · toolbar |
| Lớp bản đồ | action | sidebar | Tab Lớp bản đồ | Sidebar tab · layer tree |
| Chú giải | action | sidebar | Tab Chú giải | Sidebar tab · PCI legend |
| Thuộc tính | action | sidebar | Tab Thuộc tính | Sidebar tab · selected props |
| Kết quả | action | sidebar | Tab Kết quả | Sidebar tab · query results |
| Lấy dữ liệu | nav | toolbar | Lấy dữ liệu | Query GeoJSON bbox + refresh layers |
| Làm mới overlay | action | toolbar | Làm mới overlay | SignalR stub · toast mock |
| Heatmap PCI | action | toolbar | Heatmap PCI | Toggle heatmap layer |
| Lớp nền | action | toolbar | Lớp nền | Basemap switcher OSM/topo/sat |
| Vị trí của tôi | action | map | Vị trí của tôi | Map geolocate |
| Fit viewport | action | map | Fit viewport | fitBounds mock segments |
| + | action | map | Zoom + | Map zoomIn |
| − | action | map | Zoom − | Map zoomOut |
| Chụp màn hình | export | toolbar | Chụp màn hình | Screenshot stub · toast |
| Xuất bản đồ | export | toolbar | Xuất bản đồ | Export stub · toast |
| Digital Twin 3D | nav | toolbar | Digital Twin 3D | Panel P2 · badge · không Cesium |
| Mở vẽ Google | nav | toolbar | Mở vẽ Google | Link `gis-draw-live.html` / google |
| Tìm kiếm | filter | toolbar | Tìm kiếm | Filter object search |
| Đóng | close | panel | Đóng | Close detail / twin panel |

## Demo page rules (bắt buộc)

1. **Layout** — Full map shell Kind F · sidebar tabs · toolbar · live Leaflet canvas
2. **Layers** — road_sections · pci_heatmap · incidents · 3d_tiles (P2 badge)
3. **Legend PCI** — tốt / trung bình / kém (màu rõ)
4. **Form/panel** — thuộc tính đoạn chọn · validation banner mock · toast
5. **Labels** — hardcode VN OK trong demo nếu gắn `data-i18n`
6. Mọi **button** trong bảng Actions phải có trên demo (click → toast/modal/nav mock)
7. **Cấm** CSS-gradient giả map · **cấm** BE

## Refs

- `web-app/skill/erp-form-context/erp-form-context.md`
- `erp-common-controls-mandatory.md` · `erp-custom-manage-page.md`
- Capture raw: `_raw/legacy-govone/features/gis.md`
- Parent context: `features/gis.md` · sibling `gis-draw-google`
