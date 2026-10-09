# Fill tuyến theo GPS — Feature Context

> **Slug:** `gps-route-capture` · **Module:** Patrol · Incident · GIS  
> **Phase:** P1 mobile web  
> **Status:** Context  
> **MFE:** `Linm.Web.RMMS.Mobile`  
> **BE:** `Linm.RMMS.WebService` GIS `tuyen-duong` + catalog `RoadRoutes`  
> **Peer:** [`road-route.md`](road-route.md) · [`patrol-map.md`](patrol-map.md) · [`web-rmms-incident.md`](web-rmms-incident.md)

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | Chụp hiện trường và ghi sự cố điền mã tuyến từ hành lang GIS quanh GPS. Không gán sẵn một mã quốc lộ. |
| Persona | Tuần đường · tuần kiểm · người ghi sự cố trên phone web |
| App hiện có | `RouteCaptureControl` + `searchRoutesNear` · bản đồ tuần `routeAlongRoads` |
| DoD ngắn | Tuyến được chọn là nét danh mục gần fix. Tuyến ca chỉ được ưu tiên khi cũng nằm trong 200 m. Check-in và sự cố lưu mã đó. |

## 2. Design / UI

| Screen | Pattern | Zones | Ghi chú |
|--------|---------|-------|---------|
| Capture ảnh | Nhúng form | Map nét xám / nét xanh · danh sách tuyến gần | `RouteCaptureControl` |
| Ghi điểm tuần | Sheet | Ảnh + tuyến | `CheckInSheet` lưu `route` từ capture |
| Phiếu tuần kiểm / nhật ký | Full | Ảnh | Capture nhận `preferredRouteCodes` của ca |
| Ghi sự cố | Full | Ca / tuyến | `IncidentCreatePage` gọi `searchRoutesNear` |
| Bản đồ tuần | Full | Nét hành trình | Vẫn `routeAlongRoads`. Không đổi mã ca |

Mở ca tuần đường và mở đợt tuần kiểm vẫn chọn tuyến bằng `SearchInput` danh mục. GPS lúc mở ca chỉ lưu điểm xuất phát.

## 3. API

Không thêm endpoint. Client dùng API đang có.

| Method | Path | Mô tả |
|--------|------|-------|
| GET | `gis/geojson/tuyen-duong?bbox=&lod=corridor&take=40` | Hành lang trong bbox |
| GET | cùng path + `route=` | Bổ sung đúng mã ca khi bbox chưa trả nét |
| POST | check-in ca tuần | Field `route` = mã capture chọn |
| POST | `incident/incidents` | `routeCode` / `routeName` = mã GPS chọn, không có nét thì mã ca đang mở |

Khoảng cách đo tới đoạn thẳng của `LineString`, không chỉ tới đỉnh. `pickAutoRoute` bỏ hàng không có nét.

## 4. Database

| Entity | Key columns | Notes |
|--------|-------------|-------|
| `RoadRoutes` | `Code` | Nguồn mã hợp lệ. Không default một mã quốc lộ |
| `PatrolCheckIn` | `Route` | Đã có. Ghi mã GPS |
| `Incident` | `RouteCode`, `RouteName` | Đã có. Ghi mã GPS |
| `PatrolFinding` | — | Không có cột tuyến. Màn hình vẫn hiện `Session.Route` |
| `PatrolJournalLine` | — | Không có cột tuyến |

## 5. Events / tích hợp

| Event | Publisher | Consumer |
|-------|-----------|----------|
| GPS fix | Browser geolocation | `searchRoutesNear` |
| Corridor geojson | GIS `tuyen-duong` | Capture + form sự cố |

`GisRouteCanon` chỉ gộp alias (`QL.1` ≡ `QL1`). `GisRoutePinSnap` chỉ chiếu pin lên mã đã biết.

## 6. Gaps / quyết định

| ID | Question | Default |
|----|----------|---------|
| GAP-GPS-ROUTE-01 | Phiếu phát hiện và dòng nhật ký chưa có cột tuyến | Giữ tuyến của ca. Capture chỉ tô nét. Không thêm cột trong đợt này |
| GAP-GPS-ROUTE-02 | Hành lang bbox sắp theo số tài sản, `take=40` | Mã ca được hỏi thêm khi thiếu trong 40 dòng |
| Ảnh trên capture | Ghim và xem `LinImageView` | [`lin-image-view-capture.md`](lin-image-view-capture.md) |

## 7. Demo checklist (chốt khách)

- [ ] Đứng trên tuyến A, capture không tự chọn tuyến của ca cũ khi ca cũ cách hơn 200 m
- [ ] Không có nét trong bbox thì danh sách trống, không chèn mã ca với khoảng cách rỗng
- [ ] Check-in lưu đúng mã đang chọn trên capture
- [ ] Sự cố lưu `routeCode` của nét gần GPS
- [ ] Mở ca / mở đợt vẫn bắt buộc chọn danh mục, không điền mã cố định
