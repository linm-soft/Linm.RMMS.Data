# Legacy GOVOne capture — `gis`

> Synthetized + mapped từ vision bản đồ giám sát / shell GIS · Input cho `/product-analy-demo` · `/qlbd-analy-demo`.
> Source: https://pmdb.govone.vn — **không** chứa password.
> Sibling draw editor: [`gis-draw-google.md`](gis-draw-google.md) (vẽ Point/Line/Polygon).

## Pages (2)

### BẢN ĐỒ GIÁM SÁT 2D (PCI + overlay)

- **id:** `gis-map-2d-monitor`
- **url:** (planned) `/gis` · legacy ref `geditor.aspx` view-mode
- **title:** GIS bản đồ 2D · heatmap PCI
- **headings:** Lớp bản đồ · Chú giải · Thuộc tính · Kết quả · PCI

#### Labels / field captions

- Nhập thông tin đối tượng · Lớp dữ liệu · PCI từ · PCI đến · Viewport bbox · Hệ tọa độ · Trạng thái overlay · Tài sản Twin (P2)

#### Inputs

| tag | type | name/id | placeholder |
|-----|------|---------|-------------|
| input | text | gMapInputTextSearch | Nhập thông tin đối tượng… |
| select | — | ddlLopDuLieu | |
| input | number | pciMin | 0 |
| input | number | pciMax | 100 |
| input | text | bboxReadout | |
| input | text | heToaDo | EPSG:4326 |
| input | text | overlayStatus | SignalR · idle |
| input | text | twinAssetId | AST-… (P2) |

#### Actions / buttons (full)

| label | kind | zone | tag | disabled |
|-------|------|------|-----|----------|
| 24 | nav | toolbar | a | |
| Ban.TK.Nguyễn Anh Phúc | nav | toolbar | a | |
| Tiện ích | nav | toolbar | a | |
| Lớp bản đồ | action | sidebar | button | |
| Chú giải | action | sidebar | button | |
| Thuộc tính | action | sidebar | button | |
| Kết quả | action | sidebar | button | |
| Lấy dữ liệu | nav | toolbar | button | |
| Làm mới overlay | action | toolbar | button | |
| Heatmap PCI | action | toolbar | button | |
| Lớp nền | action | toolbar | button | |
| Vị trí của tôi | action | map | button | |
| Fit viewport | action | map | button | |
| + | action | map | button | |
| − | action | map | button | |
| Chụp màn hình | export | toolbar | button | |
| Xuất bản đồ | export | toolbar | button | |
| Digital Twin 3D | nav | toolbar | button | |
| Mở vẽ Google | nav | toolbar | a | |
| Tìm kiếm | filter | toolbar | button | |
| Đóng | close | panel | button | |

- **actionCount:** 20

### DIGITAL TWIN 3D (P2 stub)

- **id:** `gis-digital-twin-p2`
- **url:** (planned) `/gis/twin/{assetId}`
- **title:** Digital Twin 3D — Cesium (P2)
- **headings:** 3D Tiles · badge P2

#### Labels / field captions

- Mã tài sản Twin · Trạng thái viewer

#### Inputs

| tag | type | name/id | placeholder |
|-----|------|---------|-------------|
| input | text | twinAssetId | AST-BRIDGE-01 |
| input | text | twinStatus | P2 — chưa mở |

#### Actions / buttons (full)

| label | kind | zone | tag | disabled |
|-------|------|------|-----|----------|
| Digital Twin 3D | nav | toolbar | button | |
| Đóng | close | panel | button | |

- **actionCount:** 2 (subset · P2)

## Migration notes

- Map fields/actions → `demo-maps/gis-control-map.md` (modern MFE · erp-form-context Kind F).
- Demo: Leaflet live map · PCI legend · layer toggle · Twin badge P2 — **cấm** clone skin GOVOne · **cấm** BE.
- Vẽ geometry → sub-feature `gis-draw-google` / `gis-draw-live`.
