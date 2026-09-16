# Map loại xe camera ITS (Hikvision) → RMMS

> **Slug:** `camera-vehicle-type` · **peer** [`camera-connect.md`](camera-connect.md) (HĐ `camera-gtvt`) · **không** page/route mới  
> **Status:** Context (SSOT nhãn) · **không** đổi schema Sổ 04  
> **Code:** `CameraVehicleTypeCatalog` · parser `CameraIngestPayloadParser` · persist raw `CameraEvent.VehicleType`  
> **Lab:** TCM403-GIR firmware **V5.4.0** · host `14.239.20.231` · [`../31-CAMERA-TCM403-LAB-RADAR.md`](../31-CAMERA-TCM403-LAB-RADAR.md)

**Cấm:** invent API · train lại loại xe trên `Linm.RMMS.Vision` · map 1:1 sang 19 hạng TCVN 14182 · đổi `class01`…`class16` Sổ 04.

## 1. Nguồn hãng (chốt)

| | |
|--|--|
| Model lab / seed | **iDS-TCM403-GIR** (kể cả `/POE/2812`) |
| Trang sản phẩm | [ids-tcm403-gir](https://www.hikvision.com/en/products/ITS-Products/traffic-cameras/urban-road-anpr-cameras/ids-tcm403-gir/) |
| Datasheet | [iDS-TCM403-GIR_Datasheet_20240801.pdf](https://www.hikvision.com/content/dam/hikvision/products/S000000001/S000000177/S000000188/S000000209/OFR000286/M000073503/Data_Sheet/iDS-TCM403-GIR_Datasheet_20240801.pdf) |
| Tra cứu nội bộ | [`../camera-model.md`](../camera-model.md) · [`hikvision-document-research.md`](../../gioi-thieu-ung-dung/tai-lieu-ky-thuat/hikvision-document-research.md) |
| Ngày tra mapping | 2026-09-12 |

Hãng **không** công bố % chính xác phân loại. Có % bắt xe / hướng / LPR khi lắp đúng khuyến nghị.

Cùng họ TCM403 (BI / B): **cùng 9 Vehicle Type**. DeepinView `2CD7A*` = họ khác — §4.

## 2. Loại sự kiện (`eventType` → `RawKind`)

| `eventType` ISAPI | Khi | RMMS |
|-------------------|-----|------|
| `ANPR` | Mặc định parser nếu thiếu | Event bắt xe / biển |
| `AID` | Lab TCM403 (incident / pedestrian) | Cùng UUID với ANPR → **dedup gộp 1 hàng** (payload giàu hơn thắng) |
| `illaccess` | Không UUID | Fingerprint host + `RawKind` + giây UTC |

Một hàng `CameraEvent` = một lần bắt. **Không** tách ùn tắc / đổi làn / vượt tốc thành loại event riêng (datasheet có incident; ingest P1 chưa parse). Vượt tốc = cùng ANPR + `speedKmh`.

## 3. 9 Vehicle Type (datasheet) → ISAPI → nhãn RMMS

Persist **raw** (`ANPR/vehicleType`). UI/stats = `DisplayKey` + `LabelVi`. **Không** dùng `vehicleInfo/vehicleType` số (lab = `4`).

| STT | Datasheet (EN) | Raw ISAPI đã thấy / alias catalog | `DisplayKey` TCM403 | Nhãn VN | Lab 10/09 (chip) |
|-----|----------------|-----------------------------------|---------------------|---------|------------------|
| 1 | Car | `vehicle` · `car` · `sedan` · `passengerCar` · `smallCar` · `motorVehicle` | `car` | Xe con | Có (đông nhất) |
| 2 | Van | `van` · `minivan` | `van` | Xe van | Có |
| 3 | Bus | `bus` · `coach` · `largeBus` · `midBus` · `smallBus` | `bus` | Xe khách | Datasheet **có** · lab ngày đó **chưa** chip |
| 4 | Truck | `truck` · `lorry` · `largeTruck` · `midTruck` · `smallTruck` | `truck` | Xe tải | Có |
| 5 | Light Truck | `lightTruck` | `lightTruck` | Xe tải nhẹ | Datasheet **có** · lab ngày đó **chưa** chip |
| 6 | SUV (MPV) | `SUVMPV` · `suv` · `mpv` | `suv` | SUV/MPV | Có |
| 7 | Pickup | `pickup` · `pickupTruck` | `pickup` | Xe bán tải | Có |
| 8 | Motorcycle | `twoWheelVehicle` · `motorcycle` · `motorbike` · `bike` | `twoWheel` | Xe máy | Có |
| 9 | Tricycle | `threeWheelVehicle` · `tricycle` · `threeWheeler` | `tricycle` | Xe ba bánh | Có |

Firmware lab gửi **`vehicle` / `twoWheelVehicle` / `SUVMPV`**, không gửi chữ `Car` / `Motorcycle` trên datasheet.

### 3.1 Ngoài danh mục Vehicle Type (vẫn ingest)

| Raw | `DisplayKey` | Nhãn VN | Nguồn |
|-----|--------------|---------|--------|
| `pedestrian` · `person` · `people` · `human` | `pedestrian` | Người đi bộ | AID / capture pedestrian — **không** nằm trong 9 loại datasheet |
| `nonMotorVehicle` · `bicycle` · `cycle` · `ebike` · `nonMotor` | `bicycle` | Xe thô sơ | Datasheet mixed / non-motor — TCM403 không liệt kê trong Vehicle Type |
| `container` · `trailer` · `tractor` · `tractorTrailer` | `container` | Xe container | Catalog sẵn cho DeepinView; **không** có trên Vehicle Type TCM403 |
| rỗng · `unknown` · `none` · `-` · không map | `unknown` | Không xác định | Parser bỏ `unknown`/`none`/`-` |

Hướng (`direction`):

| Raw | Nhãn |
|-----|------|
| `forward` · `in` · `enter` | Chiều tới |
| `reverse` · `backward` · `out` · `exit` | Chiều lui |
| `approach` | Lại gần |
| `leave` · `away` | Đi xa |
| rỗng | — |

Màu datasheet (ban ngày): red, yellow, green, blue, pink, purple, cyan, brown, white, grey, black. RMMS lưu raw `Color`, **chưa** catalog nhãn VN.

Hãng xe (datasheet ~212): **chưa** parse.

## 4. Họ DeepinView checkpoint (`2CD7A*`)

`CameraVehicleTypeCatalog.Family.Checkpoint4` — 4 nhóm UI (catalog RMMS / `camera-model.md`): Xe con · xe tải · xe khách · xe container.

Gom khi `modelCode` chứa `2CD7A` / `2CD7146`:

| Canonical | Display |
|-----------|---------|
| `suv` · `van` · `pickup` | `car` (Xe con) |
| `lightTruck` | `truck` (Xe tải) |
| `tricycle` | `twoWheel` (Xe máy) |

TCM403 lab **không** gom — giữ 9 key.

## 5. Không map sang sổ / PCU

| Bộ | Số nhóm | Quan hệ camera |
|----|---------|----------------|
| Hikvision TCM403 | **9** hình học | SSOT ingest / chip Events |
| TCVN 14182:2024 BDTX | **19** (trục · tải · chỗ · 20/40 feet) | **Không** 1:1 — thiếu số trục/tấn |
| TCVN 4054 PCU | **6** × địa hình | Cần bảng quy đổi + 19 loại — **không** từ ISAPI |
| NĐ 130 / TT 35 thu phí | **5** nhóm | Camera thu phí ≠ Vehicle Type TCM403 |
| Sổ 04 | **16** `class01`…`class16` | CRUD thủ công/tự động **nhập tay** · **cấm** ghi đè từ event |

Gợi ý thô (chỉ phân tích, **cấm** ghi Sổ 04):

| DisplayKey | Có thể gần TCVN 14182 | Không làm được |
|------------|------------------------|----------------|
| `car` · `suv` · `van` · `pickup` | Nhóm 1 (xe con / Jeep / bán tải / &lt;12 chỗ) | Tách chỗ / Jeep |
| `bus` | Khách / buýt | Tách 12–25 / 25–30 / ≥30 chỗ |
| `truck` · `lightTruck` | Tải | Tách 2/3 trục · 4/6 bánh · 2T/4T/10T/18T |
| `twoWheel` | Nhóm 18 xe máy | — |
| `tricycle` | Không có dòng rõ | Không gán |
| `pedestrian` · `bicycle` | Ngoài «tổng ô tô» | — |
| `container` | 15–16 đầu kéo | Tách 20 vs 40 feet |

Word Cục: `docs/tai-lieu/Đếm xe tự động.docx`. Quy đổi PCU **không** do Hikvision.

## 6. Field event đã parse (P1)

| ISAPI | Field RMMS | Ghi chú |
|-------|------------|---------|
| `ANPR/licensePlate` | `Plate` | `unknown` → null |
| `vehicleInfo/speed` | `SpeedKmh` | ≤ 0 → null · lab chỉ khi radar **Fused** |
| `ANPR/vehicleType` | `VehicleType` raw | §3 |
| `vehicleInfo/color` | `Color` | Ban ngày |
| `ANPR/direction` | `Direction` | §3.1 |
| `eventType` | `RawKind` | §2 |
| `UUID` | `SourceUuid` | Dedup |
| JPEG parts | pending | **Chưa** persist file |

## 7. GAP

| ID | | P1 |
|----|--|----|
| GAP-CAM-VT-01 | Bus / Light Truck datasheet có, lab ít/không chip | UAT góc lắp · **không** bịa seed |
| GAP-CAM-VT-AID | Pedestrian / AID không thuộc 9 type | Giữ nhãn · **cấm** cộng vào đếm ô tô |
| GAP-CAM-VT-TCVN | 9 type ≠ 19 hạng Sổ 04 | Báo cáo theo **hãng** · sổ = nhập typed |
| GAP-CAM-VT-COLOR | Màu raw, chưa nhãn VN | DEFER |
| GAP-CAM-VT-MAKE | Manufacturer datasheet | DEFER parse |
| GAP-CAM-COUNTS | `GET /cameras/{id}/counts` mock | Report `rpt-dem-xe` đọc **event** theo `DisplayKey` khi ship — **cấm** 16 class |

## 8. Ownership

| Layer | Path |
|-------|-------|
| CTX map (file này) | `docs/context/features/camera-vehicle-type.md` |
| Form / ingest | [`camera-connect.md`](camera-connect.md) |
| Catalog model | [`../camera-model.md`](../camera-model.md) |
| BE | `RMMS.Service.Api/Domains/Camera/Services/CameraVehicleTypeCatalog.cs` |
| Sổ 04 | [`csdl-so-04.md`](csdl-so-04.md) · **không** bind |
| Báo cáo | [`rpt-dem-xe.md`](rpt-dem-xe.md) · P2 đọc event / summary — taxonomy **hãng** |
