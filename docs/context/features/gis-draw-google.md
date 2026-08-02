# Vẽ tài sản trên Google Map — Feature Context

> **Slug:** `gis-draw-google` · **Module:** `Gis` + `Asset` · **Phase:** P1  
> **Status:** Demo  
> **Feature Kind:** F/custom map (GIS shell) · Confirmed by: ai-autocode-autopilot 2026-08-02 · vision `002-ban-o-cong-trinh-giao-thong`  
> **Sources:** GOVOne screenshot `1-ban-do.png` + vision `002`/`003` · `07` §1–§2 · `09` GIS 2D · **sourceKind=legacy**  
> **Demo HTML (runtime):** `Linm.RMMS.Demo/public/demo/gis/gis-draw-google.html` — Leaflet live · basemap Google proxy (Carto) / Esri / OSM · Leaflet.draw  
> **Alias live rút gọn:** `gis-draw-live.html`  
> **Ảnh ref only:** `public/demo/gis/assets/1-ban-do.png` (không dùng làm map runtime)  
> **MFE:** `Linm.Web.RMMS.Gis` · page `GisDrawGoogleDemoPage` (`/gis/draw-google`) · `GisDrawLivePage` (`/gis/draw`)  
> **Parent:** [`gis.md`](gis.md) · liên quan [`asset.md`](asset.md) · [`pavement-section.md`](pavement-section.md)

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | **Giữ UX bản đồ hiện có**: nền Google + lớp tài sản + **vẽ Point / Line / Polygon** → lưu geometry PostGIS |
| Persona | Cán bộ GIS · tuần đường · Ban QLDA |
| App hiện có | GOVOne «Bản đồ quản lý hạ tầng giao thông» — screenshot `1-ban-do.png` |
| DoD P1 | Base Google · toggle lớp · toolbar vẽ · save draft → API · form thuộc tính tối thiểu |

**Nguyên tắc:** Không redesign shell — parity layout screenshot (header · sidebar lớp · toolbar · map). Nâng cấp = API/DB chuẩn Linm + adapter.

## 2. Design / UI (parity screenshot)

### Layout zones (Full page)

| Zone | Nội dung (khớp GOVOne) |
|------|------------------------|
| **Z1 Header** | Logo · tiêu đề tỉnh · menu Bản đồ / Công cụ / Tìm kiếm · ô «Nhập thông tin đối tượng» · icons user |
| **Z2 Sidebar** | Tabs: Lớp bản đồ · Chú giải · Thuộc tính · Kết quả |
| **Z2a Lớp nền** | Radio: Hành chính · Giao thông · **Google** (default giữ) · Vệ tinh · Không nền |
| **Z2b Lớp tài sản** | Tree checkbox: Tuyến đường, Cột km, Cột H, Điểm đấu nối, Ta luy, Cầu, Hộ lan, Biển báo, Cống, … |
| **Z3 Toolbar map** | Select · Pan · Zoom · Đo · **Point · Line · Polygon** · Text · Delete · Undo/Redo |
| **Z4 Map** | Google Maps base + overlay tuyến (đỏ/xanh) + marker |
| **Z5 Thuộc tính** | Panel sau khi vẽ xong: loại tài sản · mã · tên · lưu |

### Flow vẽ (chốt khách)

```
1. Chọn Lớp nền = Google
2. Chọn loại tài sản trên tree (vd. Tuyến đường / Biển báo)
3. Chọn tool Point | Line | Polygon trên toolbar
4. Click/drag trên map → geometry tạm (draft)
5. Tab Thuộc tính → nhập mã/tên → Lưu
6. Geometry → PostGIS + hiện trên lớp tương ứng
```

**UI pattern:** Full page (map + sidebar) — Kind G-like shell · không Modal cho canvas chính.

**Control map:** [`gis-draw-google-control-map.md`](gis-draw-google-control-map.md)

## 3. API

Base: `api/v1/gis` + `api/v1/assets`

| Method | Path | Mô tả |
|--------|------|-------|
| GET | `/api/v1/gis/basemap-config` | Key/style Google · options lớp nền |
| GET | `/api/v1/gis/layers` | Catalog lớp tài sản (code · geomType · style) |
| GET | `/api/v1/gis/geojson/{layer}?bbox=` | Load overlay theo viewport |
| POST | `/api/v1/gis/drawings` | Lưu draft vẽ (GeoJSON + layerCode) |
| PUT | `/api/v1/gis/drawings/{id}` | Sửa geometry / thuộc tính |
| DELETE | `/api/v1/gis/drawings/{id}` | Xóa |
| POST | `/api/v1/assets/{type}` | Commit drawing → asset chính thức (optional 2-step) |

### Request skeleton — lưu vẽ

```json
{
  "layerCode": "tuyen-duong",
  "geomType": "LineString",
  "geometry": {
    "type": "LineString",
    "coordinates": [[105.68, 18.67], [105.72, 18.71]]
  },
  "properties": {
    "code": "TD-NA-012",
    "name": "Tuyến QL1A đoạn …",
    "status": "draft"
  },
  "srid": 4326
}
```

Auth: JWT · tenant. Google Maps JS API key: config server / env (không hardcode FE).

## 4. Database

| Entity / table | Key columns | Notes |
|----------------|-------------|-------|
| `gis.layer_defs` | Code, Name, GeomType, StyleJson | Catalog lớp = tree sidebar |
| `gis.drawings` / Asset geom | Id, LayerCode, Geom (PostGIS), Props jsonb, Status | SRID 4326 |
| Asset tables (§ Asset) | … + `Geom` | Commit từ drawing |

Indexes: GIST(`Geom`) · `(LayerCode, Status)` · bbox query.

## 5. Events / tích hợp

| Event | Publisher | Consumer |
|-------|-----------|----------|
| `gis.drawing.saved` | Gis | Asset sync / audit |
| `asset.updated` | Asset | Map refresh overlay |

## 6. Gaps / quyết định

| ID | Question | Default P1 |
|----|----------|------------|
| GAP-F-GDG-01 | Giữ Google Maps JS vs MapLibre + Google raster tiles | **Giữ Google JS** (parity app) |
| GAP-F-GDG-02 | Snap to road / Google Roads API | DEFER P2 |
| GAP-F-GDG-03 | Edit vertex sau khi lưu | P1 minimal (select + redraw) |
| GAP-F-GDG-04 | Multi-user lock khi vẽ cùng đoạn | DEFER |
| GAP-F-GDG-05 | License Google Maps (billing) | Bên A cung cấp key + quota |

## 7. Demo checklist (chốt khách)

- [x] Layout khớp screenshot: sidebar lớp + toolbar + nền Google (proxy demo)
- [x] Chọn loại tài sản trước khi vẽ
- [x] Vẽ được Point / Line / Polygon trên map (Leaflet.draw)
- [x] Panel thuộc tính sau vẽ + Lưu (mock localStorage)
- [x] Undo / xóa draft rõ (Leaflet.draw edit + Huỷ draft · Hủy biên tập)
- [x] Tuyến hiện có (seed) vẫn thấy khi bật lớp
- [x] Không đổi UX tìm kiếm đối tượng trên header
- [x] Dev menu MFE `/gis/draw-google` · catalog Demo `gis-draw-google`
- [x] AI badge P1 Leaflet · P2 Google JS
- [x] sourceKind=legacy · Linm shell (không clone GOVOne)

## Ref ảnh

| File | Dùng |
|------|------|
| `docs/1-ban-do.png` | SSOT UX hiện trường |
| `Linm.RMMS.Demo/docs/features/ref/1-ban-do.png` | Copy cho demo HTML |

<!-- LEGACY-GOVONE-CAPTURE:START -->
## Legacy GOVOne (auto-capture)

> Auto map từ `tools/legacy-govone-capture` · vision: `_raw/legacy-govone/ai-analysis/`.
> Dùng làm **step context** cho `/qlbd-analy-demo` · `yarn scan-qlbd-demo`.

### Nguồn

- Raw feature: `docs/context/_raw/legacy-govone/features/gis-draw-google.md`
- Vision packets: 18

### AI Vision summaries

- [`002-ban-o-cong-trinh-giao-thong`](../_raw/legacy-govone/ai-analysis/002-ban-o-cong-trinh-giao-thong.md) — BẢN ĐỒ CÔNG TRÌNH GIAO THÔNG
- [`003-ban-o-cong-trinh-giao-thong-ban-o-quan-ly-ha-tang-giao-thong-nghe-an`](../_raw/legacy-govone/ai-analysis/003-ban-o-cong-trinh-giao-thong-ban-o-quan-ly-ha-tang-giao-thong-nghe-an.md) — BẢN ĐỒ CÔNG TRÌNH GIAO THÔNG › Bản đồ quản lý hạ tầng giao thông Nghệ An
- [`010-o-dien-tich`](../_raw/legacy-govone/ai-analysis/010-o-dien-tich.md) — Đo diện tích
- [`011-o-chieu-dai`](../_raw/legacy-govone/ai-analysis/011-o-chieu-dai.md) — Đo chiều dài
- [`012-lay-thong-tin-vi-tri`](../_raw/legacy-govone/ai-analysis/012-lay-thong-tin-vi-tri.md) — Lấy thông tin vị trí
- [`013-chup-man-hinh`](../_raw/legacy-govone/ai-analysis/013-chup-man-hinh.md) — Chụp màn hình
- [`014-chuan-hoa-cot-km`](../_raw/legacy-govone/ai-analysis/014-chuan-hoa-cot-km.md) — Chuẩn hóa cột Km
- [`015-xem-huong-oan-uong`](../_raw/legacy-govone/ai-analysis/015-xem-huong-oan-uong.md) — Xem hướng đoạn đường
- [`016-gop-oan-uong-multiline`](../_raw/legacy-govone/ai-analysis/016-gop-oan-uong-multiline.md) — Gộp đoạn đường multiline
- [`017-tao-oan-anh-gia-100m`](../_raw/legacy-govone/ai-analysis/017-tao-oan-anh-gia-100m.md) — Tạo đoạn đánh giá 100m
- [`018-gan-ma-oan-anh-gia-cho-iem-thu-thap`](../_raw/legacy-govone/ai-analysis/018-gan-ma-oan-anh-gia-cho-iem-thu-thap.md) — Gán mã đoạn đánh giá cho điểm thu thập
- [`019-tu-ong-anh-gia-chat-luong-mat-uong`](../_raw/legacy-govone/ai-analysis/019-tu-ong-anh-gia-chat-luong-mat-uong.md) — Tự động đánh giá chất lượng mặt đường
- [`020-danh-sach-thiet-bi`](../_raw/legacy-govone/ai-analysis/020-danh-sach-thiet-bi.md) — Danh sách thiết bị
- [`021-sao-chep-thiet-bi`](../_raw/legacy-govone/ai-analysis/021-sao-chep-thiet-bi.md) — Sao chép thiết bị
- [`022-tong-hop`](../_raw/legacy-govone/ai-analysis/022-tong-hop.md) — Tổng hợp
- [`023-huy-bien-tap`](../_raw/legacy-govone/ai-analysis/023-huy-bien-tap.md) — Hủy biên tập
- [`024-luu-ket-qua-ctrl-s`](../_raw/legacy-govone/ai-analysis/024-luu-ket-qua-ctrl-s.md) — Lưu kết quả (Ctrl + S)
- [`025-ve-tinh`](../_raw/legacy-govone/ai-analysis/025-ve-tinh.md) — Vệ tinh

### Capture inventory

> Auto-generated by `tools/legacy-govone-capture`. Input cho `/product-analy-demo` · `/qlbd-analy-demo`.
> Source: https://pmdb.govone.vn — **không** chứa password.

## Pages (18)

### BẢN ĐỒ CÔNG TRÌNH GIAO THÔNG

- **id:** `002-ban-o-cong-trinh-giao-thong`
- **capture:** `capture/gis-draw-google/root/view/` (master/page/action)
- **url:** https://pmdb.govone.vn/geditor.aspx?mapid=17384&gtoken=[REDACTED]
- **title:** Tạo bản đồ - gServer Phiên bản 2.1
- **headings:** Diện tích · km2 · Chiều dài · km · Chiều dài: · m · Diện tích: · m2 · Vệ tinh · Google · Giao thông · Hành chính

#### Inputs

| tag | type | name/id | placeholder |
|-----|------|---------|-------------|
| input | button | — |  |
| input | button | — |  |
| input | button | — |  |
| input | button | — |  |
| input | button | — |  |
| input | button | — |  |
| input | button | — |  |
| input | button | — |  |
| input | button | — |  |
| input | button | — |  |
| input | button | — |  |
| input | button | — |  |
| input | button | — |  |
| input | button | — |  |
| input | button | — |  |
| input | button | — |  |
| input | button | — |  |
| input | button | — |  |
| input | button | — |  |
| input | button | — |  |
| input | button | — |  |
| input | button | — |  |
| input | button | — |  |
| input | button | — |  |
| input | button | — |  |
| input | button | — |  |
| input | button | — |  |
| input | button | — |  |
| input | button | — |  |
| input | button | — |  |
| input | button | — |  |
| input | button | — |  |
| input | text | inputDienTich |  |
| input | text | inputChieuDai |  |
| input | text | inputChieuDaiKhongGian |  |
| input | text | inputDienTichKhongGian |  |
| input | text | — | Nhập thông tin đối tượng... |
| input | text | gMapInputTextSearch | Nhập thông tin đối tượng... |
| select | — | ddlLopDuLieu |  |

#### Actions / buttons (full)

| label | kind | zone | tag | disabled |
|-------|------|------|-----|----------|
| Lớp bản đồ | action | grid | button |  |
| Chú giải | action | grid | button |  |
| Thuộc tính | action | grid | button |  |
| Kết quả | action | grid | button |  |
| Đo diện tích | nav | toolbar | a |  |
| Đo chiều dài | nav | toolbar | a |  |
| Lấy thông tin vị trí | export | toolbar | a |  |
| Chụp màn hình | nav | toolbar | a |  |
| Xuất bản đồ | export | toolbar | a |  |
| In bản đồ | export | toolbar | a |  |
| Chuẩn hóa cột Km | nav | toolbar | a |  |
| Xem hướng đoạn đường | view | toolbar | a |  |
| Gộp đoạn đường multiline | nav | toolbar | a |  |
| Tạo đoạn đánh giá 100m | create | toolbar | a |  |
| Gán mã đoạn đánh giá cho điểm thu thập | nav | toolbar | a |  |
| Tự động đánh giá chất lượng mặt đường | nav | toolbar | a |  |
| Danh sách thiết bị | nav | toolbar | a |  |
| Sao chép thiết bị | nav | toolbar | a |  |
| Sao chép tài sản | nav | toolbar | a |  |
| Tổng hợp | nav | toolbar | a |  |
| Hủy biên tập | destructive | toolbar | a |  |
| Lưu kết quả (Ctrl + S) | submit | toolbar | a |  |
| Vệ tinh | nav | content | a |  |
| Google | nav | content | a |  |
| Giao thông | nav | content | a |  |
| Hành chính | nav | content | a |  |
| Không nền | nav | content | a |  |
| Bản đồ nền | nav | footer | a |  |
| Biểu đồ | action | grid | button |  |
| Bản đồ quản lý hạ tầng giao thông Nghệ An | nav | toolbar | a |  |
| Bản đồ | action | toolbar | li |  |
| Mở bản đồ | nav | toolbar | a |  |
| Công cụ | action | toolbar | li |  |
| Video Tracking | nav | toolbar | a |  |
| Phân tích không gian | nav | toolbar | a |  |
| Phân tích mạng lưới | nav | toolbar | a |  |
| Thiết kế mạng lưới | nav | toolbar | a |  |
| Tạo biểu mẫu | create | toolbar | a |  |
| Quản lý biểu mẫu | nav | toolbar | a |  |
| Thiết lập hướng | nav | toolbar | a |  |
| Tìm kiếm | filter | toolbar | li |  |
| Về trang chủ | nav | header | a |  |
| Hồ sơ của tôi | nav | header | a |  |
| Đăng xuất | export | header | a |  |

- **actionCount:** 44

### BẢN ĐỒ CÔNG TRÌNH GIAO THÔNG › Bản đồ quản lý hạ tầng giao thông Nghệ An

- **id:** `003-ban-o-cong-trinh-giao-thong-ban-o-quan-ly-ha-tang-giao-thong-nghe-an`
- **capture:** `capture/gis-draw-google/ban-o-quan-ly-ha-tang-giao-thong-nghe-an/view/` (master/page/action)
- **url:** https://pmdb.govone.vn/geditor.aspx?mapid=17384&gtoken=[REDACTED]
- **title:** Tạo bản đồ - gServer Phiên bản 2.1
- **headings:** Diện tích · km2 · Chiều dài · km · Chiều dài: · m · Diện tích: · m2 · Vệ tinh · Google · Giao thông · Hành chính

#### Labels / field captions

- Tên bản đồ(*):
- Loại bản đồ:
- Mô tả:
- Hệ tọa độ:
- Chọn mẫu bản đồ:
- Màu nền mặc định:

#### Inputs

| tag | type | name/id | placeholder |
|-----|------|---------|-------------|
| input | button | — |  |
| input | button | — |  |
| input | button | — |  |
| input | button | — |  |
| input | button | — |  |
| input | button | — |  |
| input | button | — |  |
| input | button | — |  |
| input | button | — |  |
| input | button | — |  |
| input | button | — |  |
| input | button | — |  |
| input | button | — |  |
| input | button | — |  |
| input | button | — |  |
| input | button | — |  |
| input | button | — |  |
| input | button | — |  |
| input | button | — |  |
| input | button | — |  |
| input | button | — |  |
| input | button | — |  |
| input | button | — |  |
| input | button | — |  |
| input | button | — |  |
| input | button | — |  |
| input | button | — |  |
| input | button | — |  |
| input | button | — |  |
| input | button | — |  |
| input | button | — |  |
| input | button | — |  |
| input | text | inputDienTich |  |
| input | text | inputChieuDai |  |
| input | text | inputChieuDaiKhongGian |  |
| input | text | inputDienTichKhongGian |  |
| input | text | — | Nhập thông tin đối tượng... |
| input | text | gMapInputTextSearch | Nhập thông tin đối tượng... |
| select | — | ddlLopDuLieu |  |
| input | text | tenBanDo |  |
| input | text | textfield-1059-inputEl |  |
| textarea | — | moTa |  |
| input | text | heToaDo |  |
| input | text | txtTemplateMapNam |  |
| input | text | color4 |  |
| input | t

…_(truncated — xem raw)_

### Step context checklist

- [x] Design demo parity legacy zones
- [x] Control-map fields từ Labels/Inputs/Vision
- [x] Status Demo · HTML + MFE live map · `/qlbd-align-mfe` sau Signed
<!-- LEGACY-GOVONE-CAPTURE:END -->

<!-- DEMO-MFE-MODERN:START -->
## Demo MFE modern (erp-form-context)

> Same fields/actions từ GOVOne · UI chuẩn Linm — **không** clone skin legacy.

- Control-map: [`gis-draw-google-control-map.md`](../_raw/legacy-govone/demo-maps/gis-draw-google-control-map.md)
- Actions: [`gis-draw-google-actions.md`](../_raw/legacy-govone/demo-maps/gis-draw-google-actions.md)
- Fields mapped: 14 · Actions: 62
- Kind hint: F/custom map — erp-custom-manage + GIS

Gen demo: `/qlbd-analy-demo @gis-draw-google` — load control-map trên + `/erp-form-context` rules (2a-K · 2g · common controls).
<!-- DEMO-MFE-MODERN:END -->
