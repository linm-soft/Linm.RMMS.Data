# Màn hình — input, action, GPS

> **Ngày:** 2026-09-24 · bổ sung [`PLAN.md`](PLAN.md)  
> **Phạm vi:** tab Home · Field · Incident · Work + overlay login, chụp ảnh, check-in, bản đồ.  
> **Bỏ:** tab Cá nhân (`/me`, hồ sơ, góp ý, cài đặt, cam view) và mọi màn config.  
> **Nguồn:** `specs/_data-analy/*-bff-endpoints.md` · context `docs/context/features/{slug}.md` · `AppRouter.swift`.  
> **Prefix mọi path:** `mobile-bff/api/v1` trên `http://localhost:5202`.

## BFF — dùng Mobile.Bff

MFE gọi **chỉ** `Linm.RMMS.Mobile.Bff` (`:5202`). Không đặt base URL Web BFF.

| Việc | Cách đi | Vì sao |
|------|---------|--------|
| Form / list domain (patrol, incident, asset, maintenance, gis overlay, notification) | Catch-all `MobileApiProxyController` → `api/v1/{path}` trên RMMS API `:5101` | Đúng DTO app (GPS, check-in, sự cố). Data-analy ghi Web BFF là **web only** |
| Login / refresh / logout | App gọi `mobile-bff/api/v1/auth/*`. Middleware rewrite sang route NuGet `web-bff/api/v1/auth` **trên cùng host** Mobile.Bff | Auth package chung. Trình duyệt không gọi host Web BFF |
| Ảnh FileService | App gọi `mobile-bff/api/v1/files/*`. Cùng kiểu rewrite sang File NuGet | `Program.cs` đã `AddLinmFileServiceBff`. Preview = `GET files/{id}/object` + JWT |
| Tile bản đồ | `GET mobile-bff/api/v1/gis/tiles/{layer}/{z}/{x}/{y}.pbf` · `GisTilesController` → MapService `:5021` | Overlay `gis/geojson/*` vẫn proxy RMMS. Cấm `AddLinmMapServiceBffControllers` |
| Web BFF desktop | Không dùng làm client MFE này | Contract lưới `Asset` / `Gis` / `Camera` (filter, import). Context `gis-map`, `asset-detail`, `mnt-list`, `ops`, `nghiem-thu` khóa mobile prefix |

GPS **không** có API riêng. Trình duyệt lấy `navigator.geolocation` (tương đương CoreLocation / Fused). Tọa độ chỉ vào body DTO đã có. Cấm bịa lat/lng khi từ chối quyền hoặc accuracy vượt ngưỡng.

Ngưỡng dùng chung khi màn ghi `AccuracyM ≤ 30`: không POST detect nếu chưa có fix hoặc accuracy > 30 m.

## Login (cổng, không thuộc tab Cá nhân)

| Input | Action | API |
|-------|--------|-----|
| Tài khoản + mật khẩu | Đăng nhập | `POST auth/login` |
| — | Làm mới phiên | `POST auth/refresh-token` |
| — | Sau login, cửa sổ hợp đồng | `GET contract-accounts/session-window?authUserId=` · 403 `Allowed=false` thì thoát |

Quên mật khẩu và đổi mật khẩu nằm ngoài phạm vi này (config / Auth).

## Tab Home

### `/` Home

Không form. `GET auth/profile` lần đầu để hiện tên. Guest: FAQ + privacy (copy tĩnh) + nút đăng nhập.

| Nút | Đi tới |
|-----|--------|
| Đăng nhập | `/login` |
| Điểm tuần | tab Field |
| Ghi sự cố | `/incident/new` |
| Giám sát | `/supervise` |
| Tuần đường | `/patrol-map` |
| Công việc | tab Work |
| Vấn đề | tab Incident |
| Tài sản | `/asset` |
| Lưu trữ | `/offline` |
| Hồ sơ tài sản (wallet) | `/asset` |
| Thông báo | `/ops` |

GPS: không.

### `/ops` Thông báo

| Input | Action | API |
|-------|--------|-----|
| — | Mở inbox | `GET notification/inbox` · `page=1` · `pageSize=50` |
| Tap dòng chưa đọc | Đánh dấu đã đọc | `POST notification/inbox/{id}/mark-read` |
| Badge Home | Đếm chưa đọc | `GET notification/overview` |

Query có sẵn, P1 không bắt filter UI: `search` · `status` · `priority` · `type` · `unreadOnly`. GPS: không.

### `/asset` Hub tài sản

Không form. Chỉ điều hướng. API nằm ở màn con.

| Nút | Route |
|-----|-------|
| Hạng mục | `/asset/kcht` |
| Danh sách | `/asset/list` |
| Thêm thủ công | `/asset/collect` |
| Camera AI | `/asset/ai` |
| Cập nhật / bớt | `/asset/adjust` |
| Xem bản đồ | `/gis` |

### `/asset/kcht` Hạng mục

Hub lưới loại. `GET integration/asset-types`. Không GPS. Không tạo bản ghi trên màn này.

### `/asset/list` + `/asset/:id` Chi tiết

| Màn | Input | Action | API |
|-----|-------|--------|-----|
| List | ô search | Tải / lọc | `GET asset/road-assets?search&page&pageSize` |
| Detail | — | Mở | `GET asset/road-assets/{id}` |
| Detail | — | Ghim bản đồ | nav `/gis?focus={id}` · center bằng `Lat`/`Lng` |

Detail hiện: `Code` · `Type` · `Route` · `KmFrom`/`KmTo` · `Lat`/`Lng` (ẩn nếu null). Không PUT trên detail.

GPS: chỉ **hiển thị** tọa độ đã lưu. Không lấy GPS mới.

### `/asset/collect` Thêm tài sản

| Input | Bắt buộc | Vào body `POST asset/road-assets` |
|-------|----------|-------------------------------------|
| Tên | yes | `Name` |
| Loại | yes | `Type` · catalog `GET integration/asset-types` |
| Tuyến | yes | `Route` · `GET integration/road-routes/search` · prefill `GET patrol/sessions` ca Đang tuần |
| Km từ | yes | `KmFrom` · parse lý trình / snap GPS |
| Km đến | no | `KmTo` |
| Trạng thái | yes | `Status` · `GET asset/road-assets/init-data` · mặc định `tot` |
| GPS ghim | yes trên UI | `Lat` · `Lng` |
| Ảnh | — | camera local · upload media **GAP-MOB-ASSET-COLLECT-MEDIA-01** (chưa POST media) |

| Action | Kết quả |
|--------|---------|
| Thêm | `POST asset/road-assets` · `Source` bỏ trống → server `manual` · cấm `ai` |
| Hủy | về `/asset` |
| Từ chối GPS | chặn submit |

Toast dùng `Code` trả về.

### `/asset/ai` + HITL

| Input | Bắt buộc | API |
|-------|----------|-----|
| Ảnh finder | yes | `POST ai-vision/uploads/init` → `PUT …/{id}/object` → `ImageUrl` |
| GPS | yes | `Lat` · `Lng` · server từ chối 0,0 |
| Tuyến | yes | `RouteId` · sessions + `integration/road-routes/search` |
| Ca | no | `PatrolTripId` |

| Action | API |
|--------|-----|
| Gửi nhận diện | `POST ai-vision/detect-assets` · body `DetectAssetsRequest` |
| Cảnh báo gần | `GET ai-vision/asset-candidates/nearby` |
| Mở HITL | nav `/asset/ai/hitl/{id}` |
| Xác nhận HITL | `POST ai-vision/asset-candidates/{id}/confirm` |
| Bỏ HITL | `POST ai-vision/asset-candidates/{id}/dismiss` |
| Hủy | về `/asset` |

GPS: fix thiết bị trước khi detect. Accuracy không đủ thì không gửi.

### `/asset/adjust` Bớt / sửa

| Input | Action | API |
|-------|--------|-----|
| Search | Tải sổ | `GET asset/road-assets?search&page&pageSize` · chỉ active |
| Bớt | Xác nhận rồi xóa mềm | `DELETE asset/road-assets/{id}` |
| Sửa | Mở detail | nav `/asset/:id` · PUT **không** có trên form P1 |

GPS: không lấy mới. `Lat`/`Lng` không hiện trên row P1.

### `/gis` Bản đồ tài sản

| Action | API |
|--------|-----|
| Pin tài sản | `GET gis/geojson/all` · client giữ layer `ts` |
| Pin sự cố | `GET gis/geojson/incidents` |
| Hành lang | `GET gis/geojson/tuyen-duong` · `lod=corridor` |
| Lớp | `GET gis/layers` |
| Basemap | tile `gis/tiles/…` · `GET gis/basemap-config` tùy chọn |
| Focus từ detail | `GET asset/road-assets/{id}` · center `Lat`/`Lng` |
| Search | query `search` trên geojson |

Query: `bbox` · `route` · `search` · `lod` · `skip` · `take`.

GPS: chấm “vị trí của bạn” từ Geolocation, không ghi DB trên màn này. Fit / legend là thao tác map local.

### `/offline` Hàng đợi

| Action | API |
|--------|-----|
| Xem hàng | local store · không GET queue |
| Đồng bộ check-in | `POST patrol/sessions/{sessionId}/check-ins` |
| Biên nhận (sau khi OK) | `POST integration/sync/offline-batch` · `Partner` · `DeviceId` · `BatchId` · `RecordCount` · `Note` |

Body check-in replay: `PlanPointLabel` · `Route` · `Lat` · `Lng` · `AccuracyM` · `DistanceToPlanM` · `MatchOk` · `Content` · id ảnh File.

Sự cố trong hàng: giữ local (P1 không xóa khi sync check-in). GPS: dùng lat/lng đã lưu lúc mất sóng, không lấy fix mới để bịa lại.

### `/supervise` + `/:id`

| Input | Action | API |
|-------|--------|-----|
| Tuyến | Lọc | `GET patrol/attendance-logs?route&page&pageSize` |
| Ngày | Lọc client theo `CheckInAt` | cùng GET · `fromDate` chưa có trên BE |
| Mở dòng | Chi tiết | `GET patrol/attendance-logs/{id}` |
| Bản đồ | Nav | `/patrol-map` |

Card: `UserName` · `Route` · `KmPoint` · `CheckInAt` · `Lat` · `Lng` · `InZone` · `Status` · `Note`.

GPS: chỉ đọc tọa độ đã chấm. Không POST trên màn giám sát.

### `/patrol-map` (từ Home)

| Action | API |
|--------|-----|
| Ca đang tuần | `GET patrol/sessions` · lọc `Đang tuần` |
| Overlay đường đi | P1 không POST `tracks` |
| Check-in | không submit ở đây · toast · owner là sheet check-in |

GPS: theo vị trí để vẽ “bạn đang ở đâu”. Không ghi check-in từ CTA map P1 (`MatchOk` phải true — pin không tự POST).

### `/incident/new` từ Home

Cùng form mục Incident create bên dưới.

## Tab Field

### `/field` Tuần đường

| Action | Body / API |
|--------|------------|
| Danh sách hôm nay + ca active | `GET patrol/sessions` · `pageSize=50` · lọc `Đang tuần` |
| Mở ca | `POST patrol/sessions` · `CreatePatrolSessionRequest`: `UserName` · `Route` · `PatrolType` · `Status` · `PlannedDate` · `StartedAt` · `CheckInCount` · `CoveragePercent` · `OfflineQueued` · `Note` · `MediaIds` |
| Kết ca | `PUT patrol/sessions/{id}` · cùng bộ field + `IsActive` |
| Chi tiết ca | `GET patrol/sessions/{id}` |
| Sync | nav `/field/offline` · badge đếm local |

GPS: không trên hub. Check-in mở sheet.

### Sheet check-in + pin

| Input | Body `POST patrol/sessions/{id}/check-ins` |
|-------|-----------------------------------------------|
| Điểm kế hoạch | `planPointLabel` · `GET …/plan-points` **chưa có controller** (GAP-MOB-CI-PLAN-BE-01) · cấm tọa độ giả |
| Tuyến / lý trình | `route` · prefill `GET patrol/sessions` và `GET …/{id}` |
| GPS | `lat` · `lng` · `accuracyM` · chỉ fix sống |
| Lệch kế hoạch | `distanceToPlanM` · `matchOk` (haversine khi có plan) |
| Nội dung | `content` |
| Ảnh | `files/init` → `PUT files/{id}/object` → `POST files/commit` → guid vào `photoLocalIds` / attachment |

| Action | Kết quả |
|--------|---------|
| Lưu / Ghi nhận | POST check-ins · `MatchOk` phải true |
| Mất sóng | vào hàng offline |
| Pin “tôi ở đây” | chỉ đưa GPS sang sheet · không POST từ pin |

### `/field/attendance` Chấm công

| Input | Body `POST patrol/attendance-logs` |
|-------|-------------------------------------|
| Người | `userName` từ profile |
| Tuyến | `route` |
| Giờ | `checkInAt` UTC now |
| Lý trình | `kmPoint` optional |
| GPS | `lat` · `lng` |
| Trong vùng | `inZone` · P1 mặc định true |
| Trạng thái | `status` · P1 `Đúng tuyến` |
| Ghi chú | `note` |

| Action | API |
|--------|-----|
| Lịch sử | `GET patrol/attendance-logs` |
| Chấm vào | POST body trên |
| Mở một dòng | `GET patrol/attendance-logs/{id}` |
| Báo cáo | nav `/field/attendance/report` |

GPS: bắt buộc trên Chấm vào. Không có endpoint “attendance” riêng.

### Báo cáo công → ngày → log

| Màn | Input | Action | API |
|-----|-------|--------|-----|
| Report | — | Nhóm theo ngày từ list | `GET patrol/attendance-logs` |
| Day | `dayKey` | Các lần trong ngày | cùng list · lọc client |
| Log | id | Xem một lần | `GET patrol/attendance-logs/{id}` |

Hiện `Lat`/`Lng`/`KmPoint`/`InZone`. Không form sửa.

### `/field/history` + `/:id`

| Action | API |
|--------|-----|
| List ca | `GET patrol/sessions` |
| Timeline check-in | `GET patrol/sessions/{id}` + check-ins của ca |

Mỗi điểm: `Lat` · `Lng` · `AccuracyM` · `MatchOk` · `CreatedAt`. Không form tạo mới.

### `/field/nghiem-thu` List

| Input | Query `GET patrol/nghiem-thu` |
|-------|-------------------------------|
| Tìm | `search` |
| Trạng thái | `status` |
| Tuyến | `route` |
| Mẫu | `templateType` |
| Từ / đến ngày | `fromDate` · `toDate` |

P1: `page=1` · `pageSize=50`. Nút tạo → `/field/nghiem-thu/new`. Bấm dòng → detail.

Init nhãn: `GET patrol/nghiem-thu/init-data`.

### `/field/nghiem-thu/new`

| Input | Body `POST patrol/nghiem-thu` | Bắt buộc |
|-------|-------------------------------|----------|
| Mẫu | `TemplateType` `mau-01`…`10` | yes |
| Tuyến | `Route` | yes |
| Hiện trường | `FieldInfo` | yes |
| GPS / khu | `ZoneOrgCode` | no · ghi vào FieldInfo |
| Km | `KmFrom` · `KmTo` | no |
| Ảnh | `MediaIds` guid[] max 10 · `files/*` | no |
| Trạng thái | `Status=draft` khi Lưu nháp | yes |
| Người | `AssigneeCode` từ profile | yes |
| Thời điểm | `InspectedAt` now UTC | yes |
| Ghi chú | `Note` · `VpOrgCode` | no |

| Action | Kết quả |
|--------|---------|
| Lưu nháp | POST create |
| Hủy | về list |
| GPS | Geolocation → điền FieldInfo / ZoneOrgCode · không field lat riêng trên DTO này |

### `/field/nghiem-thu/:id`

| Input | Body `PUT patrol/nghiem-thu/{id}` |
|-------|-----------------------------------|
| Mẫu | `TemplateType` |
| Kết quả | `ResultCode` `pass`/`fail`/`deduct` · bắt buộc khi `Status=done` |
| Ghi chú KQ | `ResultNote` |
| Chỉ số | `Scores[]` `{CriterionCode, Verdict pass\|fail\|n_a, Note, SortOrder}` · gửi = thay cả bộ |
| Tuyến / km / hiện trường | `Route` · `KmFrom` · `KmTo` · `FieldInfo` · `ZoneOrgCode` |
| Trạng thái | `Status` |
| Giờ làm | `WorkStartedAt` · `WorkEndedAt` |
| Ảnh | `MediaIds` · rỗng = xóa |
| Người / giờ KT | `AssigneeCode` · `InspectedAt` |

| Action | API |
|--------|-----|
| Mở | `GET patrol/nghiem-thu/{id}` + `init-data` |
| Lưu | PUT |
| GPS (sửa) | Geolocation cập nhật `FieldInfo` / `ZoneOrgCode` |
| Hủy | về list, bỏ draft local |

Xóa: OUT P1.

### `/field/cam` Camera tuần

| Input | API |
|-------|-----|
| Ca / tuyến | `GET patrol/sessions` · Đang tuần |
| Khung hình | `ImageBase64` bắt buộc |
| GPS | `Lat` · `Lng` · `AccuracyM` |

| Action | API |
|--------|-----|
| Nhận diện | `POST ai-vision/detect` · `Engine=P1` · chỉ khi có GPS và accuracy ≤ 30 m |
| Xem detection | `GET ai-vision/detections/{id}` |
| Xác nhận thành sự cố | `POST incident/incidents` · `DetectionId` · `HasGps=true` |
| Bỏ qua | đóng UI |
| Mất sóng | hàng offline |

### `/field/reflect` Phản ánh hiện trường

| Input | Nguồn |
|-------|--------|
| Ca / tuyến | `GET patrol/sessions` · có ca thì gắn Route·Km · rỗng thì toast, không bịa ca |
| Loại TS | `GET integration/asset-types` |
| Ảnh | `POST ai-vision/uploads` + PUT object |
| Loại hư / checklist | local → `IncidentType` / `Description` |
| GPS | thiết bị |

| Action | API |
|--------|-----|
| Nhận diện | `POST ai-vision/detect` |
| Tạo vấn đề | `POST incident/incidents` · cùng map body với Ghi sự cố |

## Tab Incident

### `/incident` List

| Input | Action | API |
|-------|--------|-----|
| Search / severity / status | Tải | `GET incident/incidents` · `search` · `status` · `severity` · `page=1` · `pageSize=50` |
| FAB | Tạo | nav `/incident/new` |
| Thẻ | Chi tiết | `/incident/{id}` |
| Banner | Nhận diện | `/incident/vis` |
| Bản đồ | Nav | `/gis` |
| Chat | Trao đổi | `/incident/{id}/chat` |

Card: `Title` · `IncidentType` · `Code` · `RouteName` · `KmStart` · người · `RequestedAt` · `Status`. `HasGps` là cờ, DTO list không có Lat/Lng.

### `/incident/new` Ghi sự cố

| Input | Body `POST incident/incidents` |
|-------|--------------------------------|
| Loại tài sản | `GET integration/asset-types` → `AssetLabel` · `Title` |
| Ca / tuyến / km | `GET patrol/sessions` → `RouteName` · `KmStart` |
| Hư / Mất / Hỏng | `IncidentType` |
| Mức | `Severity` |
| Checklist + mô tả | `Description` |
| Ảnh | `POST ai-vision/uploads` + PUT · nhận diện `POST ai-vision/detect` → `DetectionId` |
| GPS | `HasGps=true` khi có fix · không cột Lat trên `CreateIncidentRequest` |
| Trạng thái | `Mới` hoặc `Nháp` |
| Giờ | `RequestedAt` UTC now |

Bắt buộc server: `Title` · `RouteName` · `IncidentType` · `Status` · `RequestedAt`.

| Action | Kết quả |
|--------|---------|
| Tạo vấn đề | POST |
| Mất sóng | hàng offline |
| Checklist | local · GAP-MOB-INC-CREATE-CHK-01 chưa có API checklist |

GPS: Geolocation trước khi bật `HasGps`. Không bịa tọa độ.

### `/incident/:id` Chi tiết

| Action | API |
|--------|-----|
| Mở | `GET incident/incidents/{id}` |
| Đóng | `POST incident/incidents/{id}/close` · `Note` optional, để trống được |
| Giao việc | nav estimate |
| Bản đồ | nav `/gis` |

Hiện `Code` · `Severity` · `Status` · `Title` · `RouteName` · `KmStart` · `HasGps`. Không invent Lat/Lng.

### `/incident/vis` Nhận diện

| Input | Rule |
|-------|------|
| Ảnh | `POST ai-vision/uploads/init` · PUT object · complete |
| GPS | `Lat` · `Lng` · `AccuracyM` · POST detect chỉ khi ≤ 30 m |
| Ca | `GET patrol/sessions` |

| Action | API |
|--------|-----|
| Nhận diện | `POST ai-vision/detect` |
| Gắn sự cố | `POST incident/incidents` · `DetectionId` · `HasGps=true` · Title/Type từ `DefectClass` · tuyến từ `RouteLabel` |
| Bỏ qua | đóng |
| Offline | hàng local |

### `/incident/:id/chat`

| Input | Action | API |
|-------|--------|-----|
| — | Tải thread | `GET incident/incidents/{id}/messages?type=message` |
| Ô nội dung | Gửi | `POST incident/incidents/{id}/messages` · `{ content, type: "message" }` |

Controller live: `IncidentsController` GET/POST `{id}/messages`. GPS: không.

### `/incident/estimate/:id` Ước lượng

| Input | Action | API |
|-------|--------|-----|
| — | Header sự cố | `GET incident/incidents/{id}` |
| — | Mở dòng dự toán | `POST ai-vision/estimates/from-incident/{incidentId}` |
| Số lượng · đơn giá | Sửa dòng | `PUT ai-vision/estimates/{id}` · `Lines[0].Qty` · `UnitPrice` · `Amount` |
| — | Lưu nháp | `POST ai-vision/estimates/{id}/draft` |
| — | Xác nhận | `POST ai-vision/estimates/{id}/confirm` |
| Hạn · SLA giờ · người | Giao việc | `POST maintenance/work-orders` |
| Người trên SC | Gán | `POST incident/incidents/{id}/assign` |

`CreateWorkOrderRequest`: `RouteName` · `WorkType` · `Status=new` · `DueAt` · `SlaHours` (P1 24) · `AssigneeName` · `TeamName` · `IncidentId` · `Title` · `Description`.

GPS: không.

## Tab Work

### `/work` Danh sách công việc

| Input | Action | API |
|-------|--------|-----|
| Search | Tải | `GET maintenance/work-orders` · `search` · `status` · `workType` · `page=1` · `pageSize=50` |
| Thẻ | Tiến độ / nhật ký / chat | nav con |
| Ước lượng | Nav | estimate |

Không form tạo trên list (tạo từ estimate).

### `/work/progress`

| Input | Body |
|-------|------|
| Tiến độ % 0–100 | `ProgressPercent` · `POST …/work-orders/{id}/progress` |
| Ghi chú | `Note` · có thể kèm câu GPS (cột GPS riêng **chưa** có · GAP-MOB-MNT-PROG-GPS-01) |
| Ảnh | `ai-vision/uploads` optional · GAP media |
| Header | `GET maintenance/work-orders/{id}` |

| Action | API |
|--------|-----|
| Cập nhật | POST progress · status `new` → `in_progress` |
| Hoàn thành | `POST …/{id}/complete` · `Note` · server đặt 100% và `done` |
| GPS | Geolocation chỉ để ghi vào `Note` cho đến khi có field riêng |

### `/work/log` Nhật ký

Chỉ đọc. `GET maintenance/work-orders/{id}`. Timeline dựng từ `CreatedAt` · `DueAt` · `Description` · `ProgressPercent` · `Note` · `UpdatedAt`. Không POST. GPS: không.

### `/work/chat`

| Input | Action | API |
|-------|--------|-----|
| — | Tải | `GET maintenance/work-orders/{id}/messages?type=message` |
| Nội dung | Gửi | `POST …/messages` · `{ content, type: "message" }` |

GPS: không.

## Overlay chụp ảnh tọa độ

Dùng từ Ghi sự cố, vis, phản ánh hiện trường.

| Bước | API |
|------|-----|
| Init | `POST files/init` · `purpose=photo-geo-capture` · `product=rmms` · `fileName` · `contentType=image/jpeg` · `sizeBytes` |
| Bytes | `PUT files/{uploadId}/object` |
| Xong | `POST files/commit` → `attachmentId` |
| Xem | `GET files/{id}/object` |
| Detect sau khi ghim vật thể | `POST ai-vision/detect` · Lat/Lng = **vật thể đã xác nhận** · cấm GPS người chụp · accuracy > 30 m thì không detect |
| Gắn sự cố | `MediaIds` · `HasGps=true` · lat/lng vật thể chưa có cột (GAP-PGC-BE-01) |

GPS / la bàn / khoảng cách: trên máy. Kéo pin HITL là thao tác map, không endpoint mới.

## GPS — chỗ nào ghi, chỗ nào chỉ xem

| Ghi vào API | Chỉ xem / điều hướng |
|-------------|----------------------|
| Check-in `lat` `lng` `accuracyM` | Giám sát, lịch sử ca, chi tiết tài sản |
| Chấm công `lat` `lng` | Home, ops, list sự cố (`HasGps` cờ) |
| Thêm TS `Lat` `Lng` (chặn nếu deny) | Bản đồ focus `RoadAssetDto.Lat/Lng` |
| Detect AI `Lat` `Lng` `AccuracyM` ≤ 30 | Nhật ký công việc |
| Sự cố `HasGps=true` (không cột lat trên create) | |
| Nghiệm thu: GPS → `FieldInfo` / `ZoneOrgCode` | |
| Tiến độ: GPS vào `Note` đến khi có field | |
| Ảnh: GPS vật thể trên detect, không phải GPS người chụp | |

Web: xin quyền vị trí trước action có dấu * . Deny → chặn submit ở collect và check-in. Không fallback tọa độ demo.
