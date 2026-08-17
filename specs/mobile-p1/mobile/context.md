# Mobile context — mobile-p1

| Field | Value |
|-------|-------|
| feature | `mobile-p1` |
| packKind | mobile |
| platforms | ios + android |
| outcome | Tuần đường chấm CI ≥3/ngày/tuyến, tạo SC offline, xem map 2D, HITL AI online, xem JPEG camera — trên máy hiện trường |
| webContext | `docs/context/features/{slug}.md` · brief `map-feature/mobile-design-brief.md` |
| api | Same Web BFF `web-bff/api/v1/{resource}` — **cấm** invent path |
| stack P1 | iOS SwiftUI + Android Compose · **cấm** Flutter / KMP UI |

## 1. Business outcome

KPI HĐ Gói B (300tr) — minh chứng trên thiết bị:

1. Patrol + attendance giám sát được (ca đang chạy · CI · coverage · chấm vào/ra GPS)
2. Incident E2E + offline queue (tạo SC · ảnh · pin · sync khi online)
3. AI vision / asset-detect **online** + HITL (chụp/upload → Confirm/Dismiss)
4. Map 2D overlay đọc (TS/SC/hành lang) — OMS live, **cấm** fake gradient
5. Camera: xem JPEG/event — **cấm** cấu hình HW trên mobile

Persona: Tuần đường · Hạt · vận hành ITS (xem).  
DoD pack: 12 slug P1 (login + 11 màn) có field + API reuse + mock iOS **và** Android.

**Mock Gói 1 (SSOT địa bàn):** Khu QLĐB IV · `VP-IV.1`. Nguồn `data-import/Sau-sat-nhap/19. Khu Quản lý đường bộ IV.xlsx` (148 đoạn tuyến). Ca chính **QL.1 Km 1551+200–1561+134** (Xuân Hải → Phước Dinh · VP-IV.1). Tuyến phụ **HCM**. Seed map `Demo/_shared/real-data/khu-iv/map-seed.json` (QL.1 Km 1525+000–1874+360). Cột tọa độ X/Y trong xlsx trống — pin theo địa danh hồ sơ.

## 2. Persona + DoD

| Persona | Làm được trên máy | DoD |
|---------|-------------------|-----|
| Tuần đường | Login → ca → map CI → SC nháp offline | `api/v1/patrol/sessions` + check-ins |
| Hạt | Xem list SC/TS · nhận notify ops | `api/v1/incident/incidents` · `api/v1/notification/inbox` |
| Vận hành | Xem JPEG camera · Confirm DET | `api/v1/cameras` snapshot · `api/v1/ai-vision/asset-candidates/{id}/confirm` |

## 3. Field inventory (mobile controls)

Web demo = **tham chiếu field**, không clone layout desktop.

### login

| uiField | Label VN | Control mobile | Required | API |
|---------|----------|----------------|----------|-----|
| username | Tài khoản | Text | * | `web-bff/api/v1/auth/login` |
| password | Mật khẩu | Secure + eye | * | same |
| companyCode | Mã đơn vị | **Ẩn Gói 1** — không hiện trên đăng nhập (đơn vị theo tài khoản) | | — |
| biometric | Khuôn mặt / vân tay | **Ẩn Gói 1** — không hiện trên đăng nhập | | — |

### patrol

| uiField | Label VN | Control mobile | Required | API |
|---------|----------|----------------|----------|-----|
| code | Mã phiên | Text readonly | | `GET api/v1/patrol/sessions` |
| userName | Nhân viên | Text | * | session |
| route | Tuyến · Km | Text + map pin | * | session |
| patrolType | Loại tuần | Segment | * | Tuần đường · Tuần kiểm |
| plannedDate | Ngày KH | Date local TZ | * | session |
| startedAt | Bắt đầu | DateTime | | session |
| checkInCount | Số điểm CI | KPI number | * | ≥3/ngày/tuyến |
| coveragePercent | Coverage % | Progress | | `…/coverage` |
| status | Trạng thái | Badge | * | Đang tuần · Xong · Bỏ sót · Offline |
| plannedPointId | Điểm kế hoạch | Select / điểm tiếp (map) | * | chống nhầm điểm |
| kmMark | Lý trình | Readonly từ điểm KH | * | |
| lat / lng | Tọa độ | Auto-pin · **cấm** gõ tay | * | |
| accuracyM | Sai số GPS (m) | Readonly | * | ≤ 30 |
| distanceM | Cách điểm KH (m) | Readonly tính | * | ≤ 50 |
| matchStatus | Khớp điểm | Badge | * | `ok` mới Lưu |
| note | Ghi chú CI | TextArea | | `POST …/check-ins` |
| gps | GPS | Readonly + accuracy | * | deny → Settings · **cấm** Lưu |
| photo | Ảnh CI | Camera slots | | check-ins media |

### attendance

| uiField | Label VN | Control | Required | API |
|---------|----------|---------|----------|-----|
| clockIn / clockOut | Chấm vào / ra | CTA + auto-pin GPS | * | `api/v1/patrol/attendance-logs` |
| lat / lng / kmPoint | Vị trí | Auto-pin · **cấm** gõ tay | * | entity AttendanceLog |
| inZone | Trong zone | Badge | * | P1 client ≤ 80 m hành lang · server zone P2 |
| dayRows | 7 ngày | List rows | | logs |

### incident

| uiField | Label VN | Control | Required | API |
|---------|----------|---------|----------|-----|
| type | Loại SC | Select sheet | * | `POST api/v1/incident/incidents` |
| severity | Mức độ | Select | * | Critical…Low |
| location | Vị trí | Auto-pin GPS + tuyến/Km * | * | **cấm** Lưu nếu lat/lng null |
| description | Mô tả | TextArea | | |
| photos | Ảnh | Camera slots | | |
| offlineDraft | Nháp offline | Secondary | | queue same DTO |

### asset

| uiField | Label VN | Control | Required | API |
|---------|----------|---------|----------|-----|
| search | Tìm mã/tên | Search | | `GET api/v1/asset/road-assets` |
| type / route | Loại · tuyến | Chip / filter / Select | * thu thập | query · POST |
| name / kmMark | Tên · lý trình | Text + auto Km | * thu thập | POST |
| photo | Ảnh TS | Camera slots | | media |
| pin | Pin map | Map row | | nearby P2 |
| collectMode | Thủ công / Camera AI | Hub tile | * | manual POST · `detect-assets` + HITL |
| remove | Bớt TS | Confirm modal | | DELETE soft |

### gis

| uiField | Label VN | Control | Required | API |
|---------|----------|---------|----------|-----|
| layers | Lớp TS/SC/hành lang | Legend isolate | * | `GET api/v1/gis/geojson/{layer}` |
| basemap | OSM / Esri / Sat | Bar | * | OMS gate |

### ai-vision

| uiField | Label VN | Control | Required | API |
|---------|----------|---------|----------|-----|
| photo | Ảnh mặt đường | Camera / picker | * | `POST api/v1/ai-vision/detect` |
| class / severity | Class · mức | Readonly HITL | | detect result |
| attachIncident | Gắn SC | Confirm | | incident create |

### ai-asset-detect

| uiField | Label VN | Control | Required | API |
|---------|----------|---------|----------|-----|
| candidate | Candidate | Card HITL | * | `GET api/v1/ai-vision/asset-candidates` |
| confirm / dismiss | Xác nhận / Bỏ | CTA | * | `…/confirm` · `…/dismiss` |

### camera-connect (xem only)

| uiField | Label VN | Control | Required | API |
|---------|----------|---------|----------|-----|
| jpeg | Ảnh JPEG | Image + refresh | * | `api/v1/cameras` snapshot |
| event | Event | List thin | | ingest events |

**Cấm** form config HW trên mobile.

### maintenance (mỏng)

| uiField | Label VN | Control | Required | API |
|---------|----------|---------|----------|-----|
| woCode | Mã CV | List row | | `GET api/v1/maintenance/work-orders` |
| status | Tiến độ | Badge | | |

### ops (mỏng)

| uiField | Label VN | Control | Required | API |
|---------|----------|---------|----------|-----|
| inbox | Chỉ đạo | List | | `GET api/v1/notification/inbox` |
| unread | Chưa đọc | Badge | | mark-read |

### estimate

| uiField | Label VN | Control | Required | API |
|---------|----------|---------|----------|-----|
| qty | Khối lượng | Number | * | `POST api/v1/ai-estimate/from-incident/{id}` (BE MISSING — UI sẵn) |
| unitPrice | Đơn giá | Money | * | |
| confirm | Xác nhận | CTA | * | thủ công P1 |

## 4. Tech factors

| Factor | Need | iOS | Android | Edge |
|--------|------|-----|---------|------|
| GPS | **Yes** patrol · attendance · SC pin | CoreLocation | Fused | Deny → banner + copy mở Settings · **cấm** crash |
| Camera | **Yes** CI · SC · Vision | AVFoundation + CoreLocation cùng lúc chụp | CameraX + Fused | Ảnh **bắt buộc** GPS tại shutter · §11 |
| Offline | **Yes** CI + SC draft | queue (Core Data / file) | Room | Same DTO Web · Sync CTA |
| Map | **Yes** patrol · gis · asset pin | WKWebView Leaflet OMS | WebView Leaflet OMS | **cấm** fake · `/agent-dev-oms-map` |
| Biometric | **Ẩn Gói 1** | — | — | Không hiện trên đăng nhập |
| Push | Thin ops | APNs | FCM | `targetUrl` → inbox / SC |
| Auth | **Yes** | Keychain | Encrypted store | Same BFF `web-bff/api/v1/auth` — **cấm** fork token |

## 5. Out of scope

Twin 3D · YOLO local · train offline · WO/SLA full · TOC · cổng dân · camera **config HW** · Face/NFC chấm công · Flutter/KMP UI.

## 7. CRUD — màn nhập liệu (REQUIRED implement)

Mọi surface **nhập liệu** trên demo/mock phải có cặp CRUD thật (cùng DTO Web). Map chỉ xem (`gis`) không invent write API.

| Slug | List | Create | View | Update | Delete / close | Mobile P1 |
|------|------|--------|------|--------|----------------|-----------|
| `login` | — | session login | profile | — | logout | Auth BFF only |
| `patrol` session | * | Bắt đầu ca | * | note/status limited | Kết thúc ca (không hard-delete) | `api/v1/patrol/sessions` |
| `patrol` **check-in** | timeline trên detail | * sheet | * | **cấm** sửa GPS sau Lưu | cấm xóa P1 | `POST …/sessions/{id}/check-ins` |
| `attendance` | 7 ngày | Chấm vào / ra | * | cấm | cấm | `api/v1/patrol/attendance-logs` |
| `incident` | * | * sheet / FAB | * | nháp offline only | Close `…/close` · cấm hard-delete | `api/v1/incident/incidents` |
| `asset` | search * | **Thu thập thủ công** + **Camera AI** (HITL) | * | Cập nhật hiện trường | **Bớt** soft (`IsActive=false`) · cấm hard-delete | `api/v1/asset/road-assets` · confirm `…/asset-candidates/{id}/confirm` |
| `gis` | overlay đọc | cấm | pin tap → View TS/SC | cấm | cấm | `GET api/v1/gis/geojson/{layer}` |
| `ai-vision` | — | detect (ảnh+GPS) | result | — | — | `POST api/v1/ai-vision/detect` |
| `ai-asset-detect` | candidates | — | * | Confirm / Dismiss | — | `…/asset-candidates/{id}/confirm\|dismiss` |
| `estimate` | — | confirm qty/giá | * | cấm sau confirm | cấm | `api/v1/ai-estimate/…` (BE MISSING — UI + queue) |
| `camera-connect` | event thin | cấm | JPEG | cấm HW | cấm | snapshot GET |
| `maintenance` | WO mỏng | cấm (nhận từ SC Web) | * | cấm | cấm | `GET …/work-orders` |
| `ops` | inbox | cấm trên mobile | * | mark-read | cấm | `api/v1/notification/inbox` |

**Check-in = Create immutable.** Sai điểm → **chặn Create**, không cho Lưu rồi sửa.

## 8. Location SSOT — auto-pin + chống check-in nhầm

Áp dụng mọi form **có map / GPS** (check-in · attendance · incident create · vision capture).  
**Cấm** Lưu khi thiếu location hợp lệ. **Cấm** user gõ tay lat/lng.

### 8.1 Auto-pin (map nhập liệu)

| Bước | Hành vi |
|------|---------|
| Mở sheet / form | Xin quyền vị trí in-context → **auto drop pin** = GPS hiện tại |
| Map | Pin xanh = GPS · pin cam = **điểm KH** (planned) · camera follow user |
| GPS đổi | Pin GPS cập nhật; **không** đổi `plannedPointId` đã chọn |
| Deny / timeout | `DES-MOB-GPS-DENY` · CTA disabled · **cấm** pin giả / tọa độ cứng |

### 8.2 Field location — **required** trước Lưu

| uiField | Label VN | Check-in | Attendance | Incident | Vision |
|---------|----------|----------|------------|----------|--------|
| `plannedPointId` | Điểm kế hoạch | * (chọn / điểm tiếp) | — | — | — |
| `routeCode` | Tuyến | * (từ ca) | * (tuyến gán) | * (đoạn) | từ ca / GPS |
| `kmMark` | Lý trình | * (từ điểm KH) | * | * | |
| `lat` / `lng` | Tọa độ GPS | * auto | * auto | * auto | * auto |
| `accuracyM` | Sai số GPS | * | * | * | * |
| `capturedAt` | Thời điểm GPS | * UTC | * | * | * |
| `distanceM` | Cách điểm KH | * tính | — | — | — |
| `matchStatus` | Khớp điểm | * | `inZone` | — | — |

Submit body check-in (cùng `POST …/check-ins` — **cấm** path mới):

`plannedPointId` · `routeCode` · `kmMark` · `lat` · `lng` · `accuracyM` · `capturedAt` · `distanceM` · `note?` · `photoIds?`

### 8.3 Rule chống nhầm điểm (P1 — fail closed)

Hằng số P1 (client + BE cùng số; tenant config sau):

| Constant | Value | Nguồn |
|----------|-------|--------|
| `CHECKIN_MAX_RADIUS_M` | **50** | Mobile P1 lock — gần điểm KH |
| `GPS_MAX_ACCURACY_M` | **30** | GPS kém → chặn |
| `ATT_CORRIDOR_M` | **80** | Đúng tuyến (attendance InZone client) · server zone P2 |
| `AI_NEARBY_M` | **25** | Demo detect — [`ai-asset-detect.md`](../../../docs/context/features/ai-asset-detect.md) |

| `matchStatus` | Điều kiện | UI | Lưu |
|---------------|-----------|-----|-----|
| `ok` | `distanceM` ≤ 50 **và** `accuracyM` ≤ 30 **và** điểm = điểm KH đang mở | Badge xanh «Đúng điểm» | Cho phép |
| `wrong_point` | GPS gần **điểm KH khác** hơn điểm đang chọn | Banner đỏ · gợi ý đổi điểm | **Chặn** |
| `too_far` | `distanceM` > 50 · không điểm nào trong 50 m | Banner «Ra ngoài điểm · {n} m» | **Chặn** |
| `poor_gps` | `accuracyM` > 30 hoặc không fix | Banner GPS kém | **Chặn** |
| `no_gps` | Deny / timeout | `DES-MOB-GPS-DENY` | **Chặn** |
| `out_of_route` | Attendance: ngoài hành lang 80 m | Badge `inZone=false` | **Chặn** chấm công |

Incident / Vision: **bắt buộc** auto-pin GPS + `routeCode`/`kmMark` (snap tuyến gần nhất) — **không** bắt `plannedPointId` (SC có thể lệch điểm tuần).  
**Cấm** tạo SC/CI khi `lat`/`lng` null.

### 8.4 Demo lỗi → implement (cùng copy)

| Demo / mock | Implement | Code |
|-------------|-----------|------|
| GPS deny modal | Quyền + copy Settings | `LOC_DENIED` |
| Offline queue | Queue cùng DTO · Sync CTA | `OFFLINE_QUEUED` |
| Sheet Hủy dirty | `DES-MOB-LEAVE` | `LEAVE_DIRTY` |
| (thiếu trên mock cũ) Đúng/sai điểm | Banner `matchStatus` trên sheet + map | `LOC_WRONG_POINT` · `LOC_TOO_FAR` · `LOC_POOR_GPS` |
| Auth fail | Banner BFF | `AUTH_FAIL` |
| Sync conflict | GAP-F-PAT-01 last-write + review | `SYNC_CONFLICT` |

## 11. Chụp ảnh + GPS — thuật toán gim vị trí (REQUIRED)

**Ref docs (không fork ITS HW):**

| Doc | Dùng cho mobile P1 |
|-----|-------------------|
| [`16-ITS-TRAFFIC-OBJECT-DETECTION-DESIGN.md`](../../../docs/context/16-ITS-TRAFFIC-OBJECT-DETECTION-DESIGN.md) §3 · §5.1 | Stack máy: iOS AVFoundation + CoreLocation · Android CameraX + Fused GPS · **Kalman** làm mịn raw GPS |
| Cùng file §5.2 | Triangulation tia (object trong khung) — **P2**; P1 không bắt ≥2 ray |
| [`features/ai-vision.md`](../../../docs/context/features/ai-vision.md) | Chụp mặt đường → detect · ảnh gắn GPS/IMU |
| [`features/ai-asset-detect.md`](../../../docs/context/features/ai-asset-detect.md) | Camera tuần đường + GPS track → pin TS |
| [`features/camera-connect.md`](../../../docs/context/features/camera-connect.md) | Camera **ITS** xem JPEG — **không** thay camera điện thoại |
| `ios-app/rule/location-camera.md` · `android-app/rule/location-camera.md` | Quyền in-context · hiện ±m · **cấm** fake 0 m |

**Phân biệt:** camera điện thoại (chụp hiện trường) ≠ camera ITS TCM403 (xem JPEG). Mobile P1 **không** cấu hình HW ITS.

### 11.1 Lúc bấm chụp (shutter)

Cùng một thời điểm ghi:

| Field | Nguồn | Bắt buộc |
|-------|--------|----------|
| `photoBytes` / local URI | AV / CameraX | * |
| `rawLat` / `rawLng` | GPS raw (trước lọc) | * |
| `lat` / `lng` | **Sau Kalman** (§11.2) | * submit |
| `accuracyM` | horizontalAccuracy / Fused | * ≤ 30 |
| `headingDeg` | Course / Fused bearing | P1 nếu có |
| `capturedAt` | UTC shutter | * |
| `routeCode` / `kmMark` | **Snap tuyến** (§11.3) | * CI/SC/Vision |

**Cấm** lưu ảnh khi `lat`/`lng` null hoặc `accuracyM` > 30. **Cấm** gõ tay tọa độ. P1: chụp live — không lấy ảnh thư viện nếu không có GPS lúc gắn.

### 11.2 Thuật toán P1 (trên máy → cùng số BE)

Pipeline (khớp ITS §5.1, áp dụng **mọi** ảnh CI / SC / Vision):

```
Shutter
  → raw GPS + accuracy + heading
  → GpsKalman.Update(sessionId, raw)     // state [lat,lng,v_lat,v_lng] · reset nếu gap > 8 s
  → SnapRoute(filtered)                  // điểm gần nhất trên hành lang tuyến ca
  → kmMark = lý trình nội suy
  → Pin map = filtered (xanh) · điểm KH = cam (nếu CI)
  → Bind photoId + lat/lng/accuracy/heading/capturedAt
```

| Bước | Hằng / rule | UI native (không hiện tên thuật toán) |
|------|-------------|----------------------------------------|
| Kalman | Per ca / session · gap > 8 s → reset | Chip «Vị trí đã chốt · ±n m» |
| Accuracy | `GPS_MAX_ACCURACY_M=30` | Không chốt ảnh nếu GPS kém |
| Snap tuyến | Hành lang `ATT_CORRIDOR_M=80` (SC/Vision) · CI vẫn `CHECKIN_MAX_RADIUS_M=50` so với điểm KH | Hiện `QL.1 · Km 1556+050` (Khu IV · VP-IV.1) |
| Pin | Leaflet / native map | Pin xanh = vị trí ảnh · không cho kéo tay P1 |

P2 (ITS §5.2): ≥2 tia + heading → giao điểm object (biển, cọc) — **DEFER** field photo.

### 11.3 Submit (cùng API Web — không path mới)

| Surface | Body thêm trên DTO đã có |
|---------|--------------------------|
| Check-in | `photoIds[]` + `lat`/`lng`/`accuracyM`/`capturedAt` (§8.2) |
| Incident | `photos[]` + cùng GPS snap |
| Vision | `POST api/v1/ai-vision/detect` — ảnh + `lat`/`lng`/`accuracyM`/`headingDeg?`/`routeCode`/`kmMark` |

## 9. Gaps context (trước implement)

| ID | Gap | Action |
|----|-----|--------|
| GAP-MOB-LOC-01 | Web list pack **chưa** body check-ins (P2 trên `specs/patrol`) | Mobile P1 **vẫn** Create check-in — SA phải chốt DTO §8.2 trên `POST …/check-ins` cùng task native |
| GAP-MOB-LOC-02 | `CHECKIN_MAX_RADIUS_M=50` chưa có trên Web context | Lock mobile P1 · ghi lại Web khi align check-ins |
| GAP-MOB-CRUD-01 | Mock cũ toast-only (Vision/HITL/Estimate) | Implement theo bảng §7 — không ship toast giả CRUD |
| GAP-MOB-CAM-01 | Mock HTML không chạy Kalman thật | Native: AV/CameraX + `GpsKalman` + snap tuyến §11 cùng task · mock đã có shutter + stamp + pin |

## 10. Handoff → Design

IA **v3 (launcher + tab):** sau login → **Trang Chủ** 6 ô (Giám sát · Check In · Công việc · Vấn đề · Tài sản · Lưu trữ) + tab 5 (Trang Chủ · Check-in · Vấn đề · Công việc · Tôi).  
Tài sản = ô launcher → hub (thủ công / camera AI / cập nhật-bớt / bản đồ). Bản đồ / Nhận diện **không** tab riêng.

Zones `DES-MOB-*` cùng id hai platform.  
Next: `ui/design.md` + `ui/prototype/ios/index.html` + `ui/prototype/android/index.html`.
