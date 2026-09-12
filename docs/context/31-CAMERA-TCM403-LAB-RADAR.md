# 31 — Lab iDS-TCM403-GIR: radar speed ↔ ISAPI ingest

> **Feature:** `camera-connect`  
> **Ngày:** 2026-09-10  
> **Lab:** firmware **V5.4.0.build250528** · web `14.239.20.231:8086` · LAN `192.168.1.66` · ingest `https://api-rmms.linm-soft.com`  
> **Liên quan:** [`23-CAMERA-HOST-NOTIFY-CONFIG.md`](23-CAMERA-HOST-NOTIFY-CONFIG.md) · [`22-CAMERA-TCM403-SDK-RESEARCH.md`](22-CAMERA-TCM403-SDK-RESEARCH.md) · [`features/camera-connect.md`](features/camera-connect.md)  
> **Nguồn hãng (không đoán menu TCV):**  
> - [Radar-Assisted Smart Monitoring Camera User Manual](https://manualsnet.com/hikvision/ids-tcm403-eir) (họ TCM403 radar — Ch.2.1 Application Mode · Ch.3 Radar)  
> - [iDS-TCM403-GIR POE User Manual](https://www.alarme-direct.ch/shopinhalte/documents/usermanuals/IDS-TCM403-GIR_POE_0832_Usermanual.pdf)  
> - Datasheet: Capture Speed Range **5–120 km/h** · radar 77 GHz · tới 3 làn · ±2 km/h

---

## 0. Kết luận lab

| | Chốt |
|--|------|
| Ingest | Cam POST **multipart** `EventNotificationAlert` XML + JPEG. HTTP **200**. Auth query `apiKey` = tên key · Auth Mode **None**. |
| MFE Events | Biển · loại ISAPI (`vehicle` / `twoWheelVehicle` / `SUVMPV`) hiển thị **Xe con / Xe máy / SUV/MPV** · hướng `forward`/`reverse` → **Chiều tới / Chiều lui**. Cột tốc độ **—** khi XML `<speed>0` (parser bỏ ≤ 0). Filter default **Hôm nay** · pager server-side. |
| Radar UI | Vehicle List đo được (VD **11.88** / **20.32 km/h**) **độc lập** với XML ANPR. |
| Speed XML | Chỉ khi capture **Fused** (radar + video). Trigger Line video **không** tự gắn km/h. |
| Menu **không** có | Trigger Mode **Video & Radar** (đó là model ITS TCV/cũ). Overlay / LPR / TPS **không** điền `<speed>`. |
| Log API | **Cấm** plaintext `apiKey` và dump XML `jsonBody` (đã rollback 2026-09-10). |

---

## 1. Payload ISAPI (thực tế lab)

| | |
|--|--|
| Content-Type | `multipart/form-data; boundary=-------------------------7e13971310878` |
| XML | `EventNotificationAlert` · `eventType` **ANPR** hoặc **AID** |
| Biển | `ANPR/licensePlate` — `unknown` → RMMS **null** |
| Loại | `ANPR/vehicleType` (không dùng `vehicleInfo/vehicleType=4`) |
| Hướng | `ANPR/direction` (`forward` / `reverse`) |
| Tốc độ | `vehicleInfo/speed` — **0** nếu chưa Fused. `speedLimit` trên XML = hạn Speeding (VD 20), **không** phải tốc độ đo. |
| Ảnh | JPEG thường `pedestrianDetectionPicture.jpg` / `detectionPicture.jpg` / `licensePlatePicture_*.jpg` — RMMS **chưa lưu** (pending) |
| Trùng | Cùng `UUID` POST 2 lần → 2 hàng nếu chưa dedup DB. Plan [`../plan/camera-connect/PLAN-event-dedup.md`](../plan/camera-connect/PLAN-event-dedup.md). |

Parser: `CameraIngestPayloadParser` · `CameraConnectService.IngestIsapiAsync`.

---

## 2. Menu firmware V5.4.0 (đúng UI lab)

### 2.1 ISAPI Listening (đã chạy)

**Configuration → Network → Data Connection → ISAPI Listening**

| Field | Lab |
|-------|------|
| ISAPI | **On** |
| Version | **HTTPS** |
| Host | `api-rmms.linm-soft.com` |
| Port | `443` |
| Host URL | `/api/v1/camera-events/ingest?host=14.239.20.231&apiKey={Tên}` |
| Heartbeat | **0** (tắt) |
| Auth Mode | **None** |
| Picture | lab từng gửi JPEG; có thể **Not Upload Picture** để giảm body |

Tick **Arm Upload** ≠ nhân đôi ingest RMMS trừ khi Arm/SDK **cùng URL**. Manual: ISAPI và SDK **loại trừ** về kênh ảnh.

### 2.2 Ứng dụng / vạch bắt (video)

**Configuration → Capture → Application Mode**

| Field | Lab / khuyến nghị |
|-------|-------------------|
| Trigger / Running Mode | **Smart Mode** (manual §2.1 — bắt **video triggering**) |
| Capture Type | Test tốc độ: chỉ **Motor Vehicle**. Pedestrian + Non-Motor → AID / `pedestrianDetectionPicture` · XML speed 0. |
| Speeding | Tick = **hạn** (VD 20 km/h). **Không** đo radar. Hạ hạn **không** điền `<speed>`. Datasheet sàn đo **5 km/h** — đừng để hạn = 5. |
| Total Lanes | 2 (hoặc **1** nếu lab một hành lang) |
| Draw | Lane lines + **Trigger Line** (vàng) — 1/3 dưới khung |

**Không** nằm Capture Parameters (LPR, Overlay, Encoding, Schedule). Overlay chỉ vẽ chữ lên ảnh.

### 2.3 Radar (hình học + Fused)

Tab trên **Radar** (không phải Capture Parameters).

| Tab | Việc |
|-----|------|
| **Lane Parameters → Radar** | Scene Mode · Construction Height · Horizontal Correction · Angle Deviation · Detection Distance. **Radar Prediction / Radar Port Mapping = OFF** (radar built-in GIR). |
| **Lane Parameters → Lane** | Number of Lanes · bề rộng (m) · **Settings**. Không vẽ trên Live View. |
| **Coordinate Calibration** | **Chỗ gắn tọa độ** radar ↔ ảnh. Manual Ch.3: *Radar is used to detect the target and **link the capture**.* |

Legend sơ đồ: xanh **Single Radar** · cam **Single Video** · hồng **Fused**. XML có km/h khi xe cắt Trigger Line lúc ô **hồng**.

**Calibration — lỗi lab đã gặp**

| Triệu chứng | Sửa |
|-----------|------|
| Status **Terminated unexpectedly** / **Calibrating 0%** | **End** trước. **Total Lanes** không để trống. Mode **Manual** (Force Auto dễ kẹt 0%). Bỏ **Enable Independent** nếu fail. |
| Vạch chéo / song song | 1 làn = 2 mép **cùng hành lang**, hội tụ phía xa, trên mặt đường (~8–20 m — đúng Position Vehicle List). |
| Bảng 4 điểm Y=`3606` / `-706` | Vỡ. Y trong **5–50 m** (radar 50 m). X lệch đúng bề rộng làn (~3–5 m). Hình chữ nhật L1–L4 sơ đồ Top View. |

Lab đã set: Height **4.0 m** · Angle **2.0°** · Horizontal **0.0 m** · Distance **50 m**. Scene **Road Section** trên **ngã tư** dễ lệch — thử **Intersection** nếu dropdown có.

### 2.4 Duplicate Events

| Nguồn | Hành động |
|-------|-----------|
| **Enable Multi-Way Upload** (Capture → Advanced → System Service) | **Tắt** nếu chỉ ISAPI → RMMS. Manual: *Data will be uploaded in multiple set ways simultaneously.* |
| 2 POST cùng UUID ~1 s | Firmware retry. RMMS chưa gộp → 2 hàng. |
| ANPR + AID cùng lúc | Capture Type Pedestrian / incident AID — khác listener HTTP+ISAPI. |

---

## 3. RMMS — không config thêm cho speed

Parser đã map `vehicleInfo/speed`. Events **—** = cam gửi 0. **Không** hạ Speeding limit trên cam để “có cột tốc độ”.

Log ingest (sau rollback): `plate` · `speed` · `vehicleType` · `direction` · `bodyLength` · `apiKeyLength` — **không** `apiKey=` · **không** `jsonBody=`.
