# PO — gis-patrol-map

| Field | Value |
|-------|-------|
| feature | `gis-patrol-map` |
| changeScope | `edit_page` |
| packKind | `map` |
| status | `confirmed` |
| updatedAt | `2026-09-01T21:30:00.000Z` |

## Goal

Thêm **Bản đồ Tuần đường** trên GIS MFE (cùng Leaflet clip với Bản đồ tài sản). Bỏ menu màn bản đồ khác. Seed + animation GPS tuần đường/tuần kiểm Vinh–Nghệ An, bind `api/v1/patrol/sessions` + check-ins (mobile).

## AC

1. Sidebar GIS chỉ 2 mục: Bản đồ tài sản `/gis/tai-san` · Bản đồ Tuần đường `/gis/tuan-duong`
2. Map tuần: tabs Tuần đường / Tuần kiểm / Chi tiết — không lớp tài sản
3. Click người → Họ tên, tuyến, lịch sử check-in
4. Marker animate **arc-length** trên path **`routeKmChainAlongHighway`** (mã tuyến) · **cấm** `/match` 100m / chord / giật `setIcon` mỗi frame
5. Pin teardrop SVG `L.icon` từng check-in (TD xanh · TK cam) ghim `projectToPath`
6. Click pin → `{MapPopup}` **Họ tên** · **Tên vị trí** · **Tọa độ** · **cấm** title-only / `setView`
7. GET check-ins live
