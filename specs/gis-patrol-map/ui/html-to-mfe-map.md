# HTML → MFE map — gis-patrol-map

| Demo / mobile control | MFE |
|----------------------|-----|
| `#sc-patrol-home` person / ca | Sidebar list `GisPatrolMapPage` |
| `#sc-patrol-detail` Nhân viên | Zone **Họ tên** |
| `#sc-patrol-detail` Tuyến | **Danh sách tuyến đường** |
| Timeline điểm tuần | **Lịch sử hoạt động** |
| `map-oms.js` PATROL_WAYPOINTS | `vinhPatrolSeed.ts` `QL1_VINH_WAYPOINTS` |
| ai-demo motorcycle `pathPoint` | `animateAlongPath.ts` `interpolatePath` **trên path OSRM** |
| Check-in GPS | Pin SVG `L.icon` teardrop · `routeKmChainAlongHighway` · **cấm** `/match` |
| Live map-bar Tiêu chuẩn/Vệ tinh | `CLIP_STYLE_OPTIONS` (reuse tài sản `/gis/tai-san`) |
| Vị trí của tôi | `locateUserOnMap` |
