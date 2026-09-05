# UX analy — gis (bản đồ giám sát)

| Field | Value |
|-------|-------|
| feature | `gis` |
| route | `/gis` |
| updatedAt | `2026-09-01T01:45:00.000Z` |

## Zones

| Zone | Copy / hành vi |
|------|----------------|
| Header | **Không** `← Dev` · title «GIS bản đồ giám sát 2D» |
| Toolbar | **Giữ** Lấy dữ liệu / Làm mới overlay / Heatmap PCI / Twin 3D / Mở vẽ |
| Filter | Tìm kiếm · lớp · PCI từ–đến |
| Sidebar | Tabs Lớp · Chú giải (PCI + pin QCVN) · Thuộc tính · Kết quả |
| Status | bbox · EPSG:4326 · overlay status |
| Map | Leaflet live · **default zoom min** (toàn clip VN) · **flex fill** remaining · **cấm** auto Fit tài sản on load |
| Map-bar | **Tiêu chuẩn \| Vệ tinh** · **Vị trí của tôi** · toggle full/dock · **cấm** nút Fit · **cấm** Default/Streets/Sat EN · **không** meta |
| Attribution | **Ẩn** Leaflet prefix · chỉ `RMMS.vn` |
| Bottom legend | **Không** isolate «Tất cả» / lớp |
| Click đoạn / pin trên map | Popup + tab Thuộc tính · **không** `isolateSection` / auto zoom |
| Click camera trên map | `openCamera` (popup/slideout) · **không** zoom |
| Grid row đoạn | Vẫn isolate + Fit |
| `?cam=` | Deep-link `setView` + live — **giữ** |

## GAP

| ID | Note |
|----|------|
| GAP-WEB-EDIT-01 | Context lock 2026-09-01 — **cấm** worker re-add page header / isolate legend / 42vh cap / map click zoom |
| GAP-MAP-CLICK-ZOOM | Map click = popup only |
| GAP-MAP-ATTR-RMMS | Attribution `RMMS.vn` · `setPrefix(false)` |

## Copy

Không hardcode title page. Chrome **parity** `/gis/live` trừ toolbar vận hành list.
