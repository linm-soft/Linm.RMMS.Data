# 22 — Research: SDK / tích hợp iDS-TCM403-GIR

> **Status:** Research + **P1.5 DONE** (Login_V40 · CaptureJPEG · MFE JPEG UI) · next plate-listen / live gateway  
> **Product:** [iDS-TCM403-GIR — Urban road ANPR](https://www.hikvision.com/en/products/ITS-Products/traffic-cameras/urban-road-anpr-cameras/ids-tcm403-gir/)  
> **Datasheet:** API = **ISAPI, SDK, ISUP, ONVIF** (S/G/T/M) · Network TCP/IP · HTTP/HTTPS · RTSP · …  
> **Ngày:** 2026-08-09 · **Update implement:** 2026-09-05 (Railway Linux64 CaptureJPEG **kết nối được**)  
> **Liên quan:** `camera-connect` · `21-CAMERA-HLS-WEBRTC-GATEWAY.md` · `camera-model.md` · `specs/camera-connect/STATUS.md`  
> **Code:** `CameraModelCatalog` · `HikvisionSdkClient` · `POST …/connect/test` · `…/snapshot` · `GET …/models`

---

## 1. Product page nói gì về “SDK”?

Trên trang sản phẩm / datasheet, **không** ship binary SDK riêng theo SKU. Camera **khai báo khả năng tích hợp**:

| API / protocol | Vai trò |
|----------------|---------|
| **ISAPI** | REST HTTP(S) — config · snapshot · event notify · traffic |
| **SDK** | **Device Network SDK** (HCNetSDK / private protocol) — login · alarm listen · ITS plate callback |
| **ISUP** | Device → platform gateway (NAT-friendly; TPP / NDA) |
| **ONVIF** | Profile S/G/T/M — discover / media (ANPR payload vẫn lệch ISAPI/SDK) |
| **RTSP** | Live media (browser cần HLS/WebRTC gateway) |

→ “SDK” ở đây = **Hikvision Device Network SDK** (`HCNetSDK`) — **không** phải NuGet.

**Download:** [TPP](https://tpp.hikvision.com) Getting Started → **Integration Support** → **Download Integration Resources** → **Device Network SDK Download Info** → **Linux64** (Railway/Docker) hoặc **Win64** (lab host). HiTools cùng gói: https://www.hikvision.com/en/support/tools/hitools/?type=IP  

Cấm CDN zip 403. Cấm Push SDK / PMS / Digital Signage / Web ActiveX.

**Drop folder (SSOT):**

| OS | Path | Keep |
|----|------|------|
| Win64 | `D:\AI-QLBD\Linm.RMMS.WebService\api\src\RMMS.Service.Api\native\hikvision` | `HCNetSDK.dll` + `HCNetSDKCom/` — xóa ClientDemo / `.lib` / `.exe` |
| Linux64 | `…\native\hikvision_linux\lib` | `libhcnetsdk.so` + `HCNetSDKCom/` + deps — xóa QtDemo / consoleDemo / doc / incEn |

Runtime: `Camera:HikvisionSdk:NativePath` = `native/hikvision`. **Railway:** `api/Dockerfile` `COPY hikvision_linux/lib ./native/hikvision`. Docs ISAPI: [TPP](https://tpp.hikvision.com) · [open.hikvision.com](https://open.hikvision.com).

---

## 2. Hai đường tích hợp ANPR (SSOT ngành)

Tham chiếu: [ANPR & ITS Integration Solution](http://www.hikvisioneurope.com/za/portal/portal/01-Product%26%20solution%20promotion/02-Solution%20Promotion/03--Solution%20by%20industry%28such%20as%20Mine%2CBank%2Ceducation%2Cetc%29/09-Product%20integration%20technology%20solution/01-ANPR%20and%20ITS%20Integration%20Solution-20190307.pdf) · [LPR via SDK](https://www.televista.it/siti/TELEVISTA/img/upload/Prodotti/file_1/ZOOM_how%20to%20integrate%20with%20hikvision%20lpr%20function%20via%20sdk.pdf) · struct [`NET_ITS_PLATE_RESULT`](https://open.hikvision.com/hardware/v2/%E7%BB%93%E6%9E%84%E4%BD%93/NET_ITS_PLATE_RESULT.html)

### A. Device Network SDK (native / C++ · P/Invoke C#)

| Bước | API |
|------|-----|
| Init | `NET_DVR_Init` |
| Login | `NET_DVR_Login_V40` (host · **SDK port** mặc định **8000**) |
| Nhận sự kiện | `NET_DVR_SetDVRMessageCallBack_V30/V31` **hoặc** `NET_DVR_StartListen_V30` |
| Message type | `COMM_ITS_PLATE_RESULT` (hoặc `COMM_UPLOAD_PLATE_RESULT`) |
| Payload | Struct **`NET_ITS_PLATE_RESULT`** — biển · tốc độ · loại xe · hướng · ảnh `NET_ITS_PICTURE_INFO[]` |

**Đặc điểm:**

- Port điển hình: **8000** (private) — map public kiểu **8100** thường là port này, **không** phải HTTP ISAPI  
- Native: Windows `HCNetSDK.dll` · Linux `libhcnetsdk.so` (cdecl P/Invoke) — **không** chạy trong browser  
- Railway 2026-09-05: Linux64 trong **cùng** API image — **cấm** sidecar Linux cho Win64 DLL  
- Firmware/SDK version phải khớp (ITS traffic package)

### B. ISAPI (HTTP) — khuyến nghị RMMS khi mở được HTTP

| Mode | Cách |
|------|------|
| **Listen / Host notify** | `PUT /ISAPI/Event/notification/httpHosts` → cam **POST** event về server (query: plate · type · color · datetime; body có thể JPEG) |
| **Arm / alertStream** | `GET /ISAPI/Event/notification/alertStream` — long-poll |
| Traffic config | `/ISAPI/Traffic/channels/{n}/vehicleDetect` … |
| Pull plates | `GET /ISAPI/Traffic/channels/{n}/vehicleDetect/plates` |
| Snapshot | `GET /ISAPI/Streaming/channels/101/picture` |
| Device info | `GET /ISAPI/System/deviceInfo` |
| Auth | HTTP **Digest** (RFC 7616) |

**Đặc điểm:** Cross-platform · dễ BFF/C# · đã có stub RMMS `api/v1/cameras/*`.

---

## 3. Map port ↔ protocol (quan trọng với site 113.x:8100)

| Port typic | Protocol | Dùng SDK? | Dùng ISAPI RMMS P1.5? |
|------------|----------|-----------|------------------------|
| **80 / 443** | HTTP(S) + ISAPI + ONVIF | Không bắt buộc | **Có** |
| **554** | RTSP | Preview qua SDK / gateway | Live qua MediaMTX (plan 21) |
| **8000** (map **8100**) | **Private SDK** | **Có** | **Không** (TCP mở nhưng HTTP reset) |

Probe lab RMMS: `113.179.52.55:8100` TCP OPEN · HTTP/HTTPS/RTSP **reset** → khớp **SDK port**, không phải web.

---

## 4. Payload sự kiện (ý nghĩa nghiệp vụ)

Từ `NET_ITS_PLATE_RESULT` / ISAPI ANPR (tương đương nghiệp vụ):

| Field | Ý nghĩa |
|-------|---------|
| Plate text | Biển số |
| Speed / radar | Tốc độ (TCM403 có radar 77 GHz) |
| Vehicle type / color / direction | Phân loại |
| Lane / site / device ID | Gán tuyến · Km |
| Pictures | Overview + plate crop |

Consumer nội bộ: `its-anpr-overload` · Incident HITL.

---

## 5. Khuyến nghị kiến trúc RMMS — **đã áp dụng P1.5**

```
   Model iDS-TCM403-GIR (preferredProtocol=sdk)
                    ┌─────────────────────────────┐
   1) SDK-first     │ Device Network SDK :8000    │  ← public map :8100
                    │ TCP probe · Login_V40 (DLL / .so) │
                    ├─────────────────────────────┤
   2) ISAPI         │ HTTP Digest 80/443          │  ← khi mở được
                    │ deviceInfo · snapshot       │
                    ├─────────────────────────────┤
   3) Live video    │ RTSP → MediaMTX             │  ← plan 21
                    └─────────────────────────────┘
```

| Layer | Status P1.5 |
|-------|-------------|
| `CameraModelCatalog` | **DONE** — TCM403 SDK-first · remaps httpPort 8100→sdkPort |
| `HikvisionSdkClient` | **DONE** — TCP · Login_V40 · **CaptureJPEG_NEW** (live snapshot không cần HTTP) |
| ISAPI Digest | **DONE** — test + snapshot |
| ITS plate callback SDK | **DEFER** — cần DLL + `COMM_ITS_PLATE_RESULT` worker |
| Edge ISUP | **DEFER** |

**Cấm:** Nhúng HCNetSDK vào browser / MFE webpack.

---

## 6. Effort còn lại (plate listen)

| Task | Ước lượng |
|------|-----------|
| TPP/HiTools download Device Network SDK → `D:\AI-QLBD\Linm.RMMS.WebService\api\src\RMMS.Service.Api\native\hikvision` | 0.5 d |
| CaptureJPEG khi không có HTTP | **DONE** (`CaptureJPEGPicture_NEW`) |
| POC Login_V40 (đã stub) + StartListen / callback plate | 2–3 d |

---

## 7. Gaps / quyết định

| ID | Câu hỏi | Status |
|----|---------|--------|
| GAP-SDK-01 | Site chỉ mở **8100** | **Chốt B-lite:** BE SDK-first + TCP; full Login khi native load. Prod: 8100 phải reachable từ Railway (verified 2026-09-05) |
| GAP-SDK-02 | OS Edge: Windows (DLL) vs Linux (.so)? | **Cả hai.** Win64 lab host `:5101`. **Railway = Linux64** COPY `hikvision_linux/lib` + `LD_LIBRARY_PATH` + un-defer. DLL trong Linux image → `sdkDllLoaded=false` (`GAP-CAM-SDK-OS`). |
| GAP-SDK-03 | ISUP có trong scope hợp đồng TPP không? | Mở |

Version meta: research=`tcm403-sdk` · implement=`model-sdk-connect` · date=`2026-09-05`
