# Chi tiết kỹ thuật GPU — Chịu tải & kịch bản mở rộng (RMMS / QLBD)

> **Loại tài liệu:** Tham khảo kỹ thuật hạ tầng AI — **không** báo giá / đơn hàng.  
> **Ngày:** 2026-08-12 · **Update quyết định:** 2026-08-12  
> **Phạm vi:** Worker GPU cho YOLOv8/ONNX · tách khỏi API camera Edge AI  
> **SSOT liên quan:** `10-YOLO-SERVER-REQUIREMENTS.md` · `16-ITS-TRAFFIC-OBJECT-DETECTION-DESIGN.md` · `camera-model.md` · `features/camera-connect.md` · `features/ai-asset-detect.md` · `features/ai-vision.md`

**Giả định chịu tải:** YOLOv8 @ **640** · suy diễn **1 FPS** + batch + NVDEC · chỉ đếm camera **Nhóm 2** (hệ thống tự phân tích). Cam Edge ANPR (TCM403…) **không** tính vào cột “số thiết bị”.

---

## Quyết định khách (đã chốt)

| Hạng mục | Chốt |
|----------|------|
| **Máy on-prem / site** | **M1 — Supermicro SYS-741A-T** |
| **Vai trò M1** | **Chỉ infer 24/7** — phân tích video/ảnh (YOLO worker): body / CCTV thường / batch tuần đường → Asset / Vấn đề |
| **Train / fine-tune model** | **Cloud** (A100 PAYG / tương đương) → export ONNX → pin lên M1 · **không** train trên M1 |
| **Không dùng M1 cho** | Edge ANPR (cam tự phân tích) · live gateway (MediaMTX CPU) · MLOps train |

```
[Cloud train]  Dataset ──► A100 (theo giờ) ──► model.onnx + modelVersion
                                                    │
                                                    ▼ pin / OTA
[M1 SYS-741A-T]  RTSP/clip/ảnh ──► Its.GpuWorker ──► candidates 24/7
                 (1→2× GPU lắp dần · NVDEC · 1 FPS)
```

**Cấu hình M1 gợi ý (infer-only):**

| Hạng mục | Gợi ý |
|----------|--------|
| GPU khởi đầu | **1× L40S** (hoặc Ada/L40-class tương đương) — đủ pilot ~40–80 cam @ 1 FPS |
| Khi tăng tải | Gắn **card 2** cùng loại → ~80–100 cam ổn định (tới ~100–160 nếu RAM/NVMe đủ) |
| RAM | **≥ 128 GB** |
| Ổ | NVMe cho model + scratch queue |
| PSU | Đủ dual GPU (datasheet opt **2200W** nếu gắn 2× L40S-class) |
| OS / runtime | Ubuntu + CUDA · ONNX-GPU / TensorRT · tách process khỏi RMMS.Api |

---

## Bảng so sánh 3 model (tóm tắt gửi khách)

| Hạng mục | **M1 — SYS-741A-T** | **M2 — R760 + 2× RTX PRO 2000** | **M3 — R760 + 2× L40S 48GB** |
|----------|---------------------|----------------------------------|------------------------------|
| **Tên model / mã** | Supermicro **SYS-741A-T** (4U Tower) | Dell PowerEdge **R760** + **2× RTX PRO 2000 Blackwell** | Dell PowerEdge **R760** + **2× NVIDIA L40S 48GB** |
| Form | 4U Tower rackmount | 2U Rack | 2U Rack |
| CPU | Dual Xeon Scalable 4th/5th Gen (tới 64C/CPU) | **2×** Xeon Silver **4410Y** (12C/24T) | **2×** Xeon Silver **4410Y** (12C/24T) |
| RAM | Tới 4 TB DDR5 (theo cấu hình) | **128 GB** (2×64GB) | **64 GB** (2×32GB) — nên nâng ≥128GB khi full tải |
| GPU | Tới **2×** double-width (lắp sau; vd. L40S / RTX PRO 6000…) | **2×** RTX PRO **2000** 16GB GDDR7 | **2×** **L40S** 48GB GDDR6 |
| Tổng VRAM | Theo card lắp (max 2 DW) | **32 GB** | **96 GB** |
| Ổ cứng | 8× hot-swap NVMe/SATA | 2× 960GB SATA · H755 | 2× 960GB SATA · H755 |
| Mạng | **2× 10GbE** | 1GbE (Broadcom 5720) | **10/25GbE** + SFP+ |
| PSU | 2× 1200W (opt 2200W) | **2× 2400W** | **2× 1400W** |
| Vai trò | **Đã chốt:** infer video **24/7** (train = cloud) · lắp thêm card | Lab / develop / UAT | Hub infer production (sẵn 2× L40S) |
| Lắp thêm GPU cùng máy | **Có** (tới 2× DW) | Nâng/đổi card (PSU dư) | **Khó** (đã full 2× L40S) |
| **Vận hành 24/7 — số thiết bị tối đa (khuyến nghị ổn định)** | **~80–100** *(khi đủ 2× L40S-class)* · **~40–80** *(1 card)* | **~20–40** | **~80–100** *(nâng RAM)* · **~60–90** *(giữ RAM 64GB)* |
| **Vận hành 24/7 — trần kỹ thuật GPU** | **~100–160** (2× L40S-class + RAM/NVMe đủ) | **~40–50** (sát VRAM 32GB) | **~100–160** (sau nâng RAM ≥128GB + NVMe) |
| Mở rộng khi vượt trần 1 máy | Gắn đủ 2 card → rồi **thêm worker** | Thêm worker / nâng card | **Thêm worker** (scale-out) |

> **M3b (tham chiếu thêm — không gộp cột trên):** R760 + **1× A100 80GB** · ưu tiên **train/dataset** · camera 24/7 khoảng **60–100** (1 card) — không thay M3 (L40S) làm hub mặc định.

---

## 1. Kiến trúc & giả định vận hành (phân tích theo context RMMS)

> Nguồn: `02-SYSTEM-ARCHITECTURE.md` · `09-PLAN-P1-V2.md` · `10` · `14` · `16` · `21` · `22` · `23` · `camera-connect` · `ai-vision` · `ai-asset-detect` · `camera-model.md`

### 1.1 Hệ thống đang xây — bức tranh tổng thể

RMMS là **modular monolith** (.NET 8): **một API host** chứa nhiều phân hệ domain (Asset, GIS, AiVision, Patrol, Incident, IoT, Camera…). Frontend: **MFE** (vd. `Linm.Web.RMMS.Camera`) + Mobile đã có + Demo HTML.

| Lớp | Thành phần hiện có / kế hoạch | Ghi chú GPU |
|-----|------------------------------|-------------|
| **Client** | MFE Camera `/camera` · Demo · Mobile tuần đường | Không GPU |
| **API mono** | `Linm.RMMS.WebService` · `api/v1/cameras` · AiVision stubs | **Cấm** block request chờ YOLO lâu (`10` R6 · `16`) |
| **Camera P1.5** | SDK Login_V40 · CaptureJPEG · ISAPI Digest · ingest event | Edge AI trên cam — **không** GPU server |
| **Live P2** | `Rmms.Camera.Gateway` (MediaMTX) — plan `21` | Process riêng · CPU; không nhét FFmpeg vào API |
| **AI P1** | GPT-4o Vision online (`09` · `08`) | Không GPU local |
| **AI P2** | ONNX detector + optional SAM (`14`) · `Its.GpuWorker` (`16`) | **Cần** host M1/M2/M3 |
| **Data** | PostgreSQL + PostGIS · Redis · MinIO/S3 | Ảnh gốc / model artifact trên object storage |

**Nguyên tắc scale (`02`):** giữ mono đến khi AI Vision / IoT vượt ngưỡng → tách **worker process** (AiVision / Its.GpuWorker / Iot), không tách 14 microservice ngay.

```
Phase hiện tại (P1.5 Camera)
  Client MFE ──► RMMS.Api (Camera + ingest) ──► PG / Redis
  TCM403 ──ISAPI/SDK event──► Api (biển · tốc độ · loại xe)
  (JPEG poll xem ảnh — chưa live FPS)

Phase tiếp (P2)
  ┌─ Rmms.Camera.Gateway (MediaMTX) ← RTSP sub 102  → UI live
  ├─ RMMS.Api (core + queue publish)
  └─ Its.GpuWorker / AiVision.Worker ← RTSP main 101 / ảnh / clip
         GPU M1|M2|M3 ──► candidates ──► Asset / Incident / GIS
```

---

### 1.2 Hai nhóm nguồn hình ảnh (quyết định có cần GPU)

#### Nhóm 1 — Camera Edge AI (ITS ANPR) — **không** cần GPU server

| Mục | Context |
|-----|---------|
| Thiết bị | Catalog `camera-model.md`: **TCM403-GIR**, DeepinView 2CD7A46/7A26, mixed-traffic 7146… |
| Việc cam làm sẵn | Biển số · loại/màu/hướng xe · đếm · (TCM403) tốc độ radar 77 GHz |
| Độ chính xác datasheet | LPR **>98%** · capture **>99%** · hướng **>98.5%** · tốc độ ±2 km/h (TCM403) — §1b `camera-model.md` |
| Đường vào RMMS | ISAPI **HTTP Host notify** (`23`) · SDK `COMM_ITS_PLATE_RESULT` (`22`) · ingest `api/v1/cameras` |
| Module | `camera-connect` · domain Camera · event `camera.speed.measured` / plate feed |
| Live UI | P1.5: JPEG CaptureJPEG · P2: gateway sub-stream **102** (`21` D6) — **không** phải YOLO |
| **GPU M1/M2/M3** | **Không dùng** cho ANPR/đếm/tốc độ Edge |

#### Nhóm 2 — Media thô · hệ thống tự phân tích — **cần** GPU (P2)

| Nguồn | Context feature | Đầu ra nghiệp vụ |
|-------|-----------------|------------------|
| Camera body / dashcam / clip tuần đường | `patrol` · `ai-asset-detect` · `16` | Candidate TS → **Confirm → Asset** |
| Ảnh/video kiểm định mặt đường | `ai-vision` · `14` (10 class ổ gà/nứt…) | Detection → **Vấn đề / Incident** · PCI |
| CCTV cố định **không** Edge ANPR | `16` P2.1 · RTSP main **101** | ITS object (biển báo/cọc tiêu) / detect chung |
| Mobile TFLite/CoreML | `16` edge mobile | Buffer offline → sync IoT (GPU server không bắt buộc) |

Pipeline chuẩn (`16`):

```
Frame/Detect → (Kalman GPS) → (Triangulate) → Candidate
  → PostGIS dedupe ~10 m → INSERT/UPDATE
  → SignalR / map pin → User Confirm (P1 bắt buộc với asset)
```

**P1 vs P2 (`09` · `14`):**

| | P1 (đang / online) | P2 (Go local) |
|--|-------------------|---------------|
| Engine | GPT-4o Vision | ONNX / TensorRT (P2-A Apache hoặc P2-B Ultralytics Enterprise) |
| GPU server | Không | **Có** — bảng M1/M2/M3 |
| Cam kết mAP | Không hứa trên UI | Sau UAT + dataset ≥20k (`14`) |

---

### 1.3 Luồng kỹ thuật chi tiết theo thành phần

#### A. Camera connect & event (đã có P1.5)

```
[TCM403 LAN]
   │  SDK :8000 (map 8100)     ISAPI :80/:443        RTSP :554
   │  Login_V40 / CaptureJPEG   Host notify POST      101 main / 102 sub
   ▼
RMMS.Api  CameraConnectService
   │  Test connect · Snapshot JPEG · IngestIsapi → feed events
   ▼
MFE Linm.Web.RMMS.Camera   /camera · /camera/:id
   Z3 Live (JPEG) · Z4 Events (plate · speed · type · color · direction)
```

- Event **đã phân tích trên cam** → API chỉ **nhận/lưu/hiển thị**.  
- Độ chính xác ANPR = **cam** (datasheet), không phụ thuộc GPU server.

#### B. Live video (P2 gateway — kế hoạch `21`)

| Quyết định | Giá trị |
|------------|---------|
| Process | `Rmms.Camera.Gateway` Docker riêng |
| Engine | MediaMTX ± FFmpeg |
| Sub 102 | Preview UI (10–15 FPS mục tiêu) |
| Main 101 | Dành **AI worker** — không đẩy full main lên wall |
| Deploy | Ưu tiên **site Edge / VPN** (cam thường không public Internet) |

Gateway **không** thay GPU YOLO; chỉ chuyển mã/stream cho người xem.

#### C. GPU Worker (P2 — gắn M1/M2/M3)

```
Nguồn Nhóm 2 (RTSP 101 / upload clip / batch ảnh)
        │
        ▼
   Redis / Channel queue     ◄── Api publish job (không infer inline)
        │
        ▼
   Its.GpuWorker  (Linux khuyến nghị · CUDA)
        │  NVDEC decode
        │  YOLO @640 · 1 FPS / stream (+ batch)
        │  optional SAM async
        ▼
   ai_vision.* / its candidates / detections
        │
        ├──► Asset (confirm)     ai-asset-detect
        ├──► Incident            ai-vision defect
        └──► GIS pin / SignalR   map giám sát
```

| Ràng buộc context | Ý nghĩa vận hành |
|-------------------|------------------|
| Tách khỏi mono khi tải cao (`02` Phase B · `10` R6) | Máy GPU = worker, **không** gắn vào DMS 1U 350W |
| 1 FPS + batch (`17` · `16`) | Capacity bảng so sánh 3 model ở trên |
| Main ≠ Sub (`21` D6) | Live UI không ăn bandwidth AI |
| Confirm asset P1 (`ai-asset-detect`) | GPU chỉ đề xuất — người xác nhận trước ghi Asset |
| Model registry + `modelVersion` (`14`) | Export ONNX từ train (M3b/PAYG) → pin trên worker |

#### D. Train / cập nhật model (MLOps) — **cloud only** (đã chốt)

| | |
|--|--|
| **Quyết định** | Train **không** chạy trên M1 · dùng **cloud** (A100 PAYG / tương đương `17`) |
| Workload | Fine-tune YOLOv8-nano · ~20–40 phút / đợt · export `.onnx` (+ sha256 · `modelVersion`) |
| Sau export | Pin artifact xuống **M1 GpuWorker** · **tắt VM cloud** ngay |
| M1 | **Chỉ** infer 24/7 (cả 1 hoặc 2 card đều dành video/ảnh) — **cấm** chiếm GPU train làm nghẽn CCTV |

---

### 1.4 Giả định vận hành dùng cho mọi số “chịu tải”

| # | Giả định | Nguồn context | Hệ quả |
|---|----------|---------------|--------|
| G1 | Chỉ đếm **Nhóm 2** vào “số thiết bị 24/7” | camera-connect vs `16`/`14` | Cam Edge ANPR **không** trừ GPU |
| G2 | Suy diễn **1 FPS**/luồng + batch | `16` · `17` C6 | Full 25–30 FPS → giảm ~20–30× capacity |
| G3 | `imgsz` **640** · model n/s/m | `14` · `16` | VRAM/process thấp (vài GB) — scale theo **số stream** |
| G4 | NVDEC H.264 | `17` §3 | CPU không phải bottleneck chính nếu bật HW decode |
| G5 | Worker **tách** API | `02` · `10` · `16` | Chọn M1/M2/M3 = máy worker, không thay app server |
| G6 | Live gateway ≠ AI path | `21` | MediaMTX không tính vào VRAM YOLO |
| G7 | Prod hub dual GPU cần RAM ≥128GB | `10` R4 · phân tích M3 | M3 RAM 64GB → trần thực tế thấp hơn GPU |
| G8 | Scale lớn = **thêm worker** | `02` Phase B | Không nhồi vô hạn GPU vào 1 chassis |
| G9 | P1 online vẫn là fallback | `09` · `14` | GPU down → GPT / queue delay — không mất hết nghiệp vụ |

---

### 1.5 Map module → có đụng GPU không

| Module / slug | Phase | Đụng GPU M1/M2/M3? |
|---------------|-------|---------------------|
| `camera-connect` | P1.5 DONE | **Không** (event Edge) |
| Live gateway `21` | P2 next | **Không** (CPU gateway) |
| `ai-vision` (mặt đường) | P1 online · P2 ONNX | **Có** ở P2 |
| `ai-asset-detect` | P1 GPT · P2 ONNX | **Có** ở P2 |
| `its-traffic-detect` / `16` | Design P2/P2.1 | **Có** (CCTV RTSP worker) |
| Patrol / GIS / Incident | Nhận kết quả | **Không** trực tiếp |
| Copilot / GPT | Online | **Không** (Azure) |

---

### 1.6 Tóm tắt giả định cho chọn máy

1. **Đang vận hành / develop P1.5:** kiến trúc = API + cam Edge + JPEG — **chưa bắt buộc** M1/M2/M3.  
2. **Khi Go local P2:** thêm **GPU worker** theo bảng 3 model; API vẫn mono đến khi vượt ngưỡng rồi tách process.  
3. **Số cam 24/7 trên bảng so sánh** = luồng Nhóm 2 @ 1 FPS — không gồm TCM403 ANPR.  
4. **Mở rộng:** ưu tiên queue + nhiều worker; M1 nếu muốn lắp thêm card trên 1 thùng; train tách (M3b).

```
[Nhóm 1 — Edge AI]     TCM403 ──event──► Api ──► UI/DB     (no GPU)
[Nhóm 2 — Server AI]   Body/CCTV ──queue──► GpuWorker(M*) ──► Asset/Incident
[Live P2]              RTSP 102 ──► Gateway ──► MFE         (no YOLO)
[Train]                Dataset ──► A100 burst ──► ONNX ──► Worker pin
```

---

## 2. Danh mục model tham chiếu (GPU + host)

| Mã | Host | GPU | Vai trò chính |
|----|------|-----|---------------|
| **M1** | Supermicro **SYS-741A-T** (4U Tower) | Tới **2×** double-width (chưa chốt card) | Nền tảng linh hoạt · lắp thêm card |
| **M2** | Dell **R760** 2U | **2× RTX PRO 2000 Blackwell 16GB** | Lab / develop / UAT |
| **M3a** | Dell **R760** 2U | **2× NVIDIA L40S 48GB** | Hub infer nhiều camera |
| **M3b** | Dell **R760** (cloud LNX) | **1× NVIDIA A100 80GB** | Train / dataset / SAM |

### 2.1 Chi tiết GPU

| Mã | GPU | VRAM / card | Tổng VRAM | Kiến trúc / ghi chú | TDP tham chiếu |
|----|-----|-------------|-----------|---------------------|----------------|
| **M2** | RTX PRO **2000** Blackwell ×2 | 16 GB GDDR7 ECC | **32 GB** | Workstation / infer nhẹ · 4 mDP | Thấp–trung (WS) |
| **M3a** | **L40S** ×2 | 48 GB GDDR6 | **96 GB** | Ada datacenter · NVDEC mạnh video | ~350 W / card |
| **M3b** | **A100** ×1 | 80 GB HBM2e | **80 GB** | Ampere · MIG tới 7×~10GB · train | ~300 W |
| **M1** (ví dụ lắp) | RTX PRO 6000 / L40S / Ada… | Theo card | Theo số card (max 2 DW) | PCIe 5.0 x16 · CPU–GPU Gen5 | Theo card + PSU |

### 2.2 Chi tiết host kèm GPU

| Hạng mục | **M1 SYS-741A-T** | **M2 R760 + PRO 2000** | **M3a R760 + L40S** | **M3b R760 + A100** |
|----------|-------------------|------------------------|---------------------|---------------------|
| Form | 4U Tower rackmount | 2U Rack | 2U Rack | 2U / cloud |
| CPU | Dual Xeon 4th/5th Gen (tới 64C/CPU) | 2× Silver **4410Y** (24C tổng) | 2× Silver **4410Y** | 1× Gold **6430** (32C) |
| RAM | Tới 4 TB DDR5 (cấu hình) | **128 GB** | **64 GB** | **128 GB** |
| Ổ | 8× hot-swap NVMe/SATA | 2× 960GB SATA · H755 | 2× 960GB SATA · H755 | **3.2 TB NVMe** |
| Mạng | **2× 10GbE** | 1GbE (5720) | **10/25GbE** + SFP+ | 1GbE + 10/25GbE |
| PSU | 2× 1200W (opt 2200W) | **2× 2400W** | **2× 1400W** | **2× 2400W** |
| Slot GPU | Tới **2×** DW · PCIe 5.0 | Đã 2× PRO 2000 · PSU dư nâng | Đã **full 2× L40S** | 1× A100 |
| Link / nguồn | [SYS-741A-T](https://www.supermicro.com/en/products/system/superworkstation/4u%20tower/sys-741a-t) | Spec text cấu hình | Ảnh báo cáo KT | Ảnh Public cloud LNX |

### 2.3 Điểm nghẽn host (không chỉ GPU)

| Model | Nút thắt chính khi full tải camera |
|-------|-------------------------------------|
| **M1** | GPU chưa lắp → capacity = 0 cho đến khi gắn card; trần **2 GPU** |
| **M2** | VRAM 32GB · NIC **1GbE** khi nhiều RTSP |
| **M3a** | **RAM 64GB** + CPU Silver + SATA trước khi đầy 2× L40S |
| **M3b** | **1 GPU** · latency RTSP nếu không cùng DC |

**Khuyến nghị cứng khi prod hub:** RAM host **≥ 128 GB** · scratch **NVMe** · NIC **≥ 10GbE** nếu nhiều RTSP cùng rack/DC.

---

## 3. Chịu tải (capacity)

### 3.1 Bảng chịu tải camera AI 24/7 (Nhóm 2 · 1 FPS)

| Model | Khuyến nghị vận hành ổn định | Trần kỹ thuật (GPU) | Điều kiện đạt trần |
|-------|------------------------------|---------------------|--------------------|
| **M1** + 1× L40S-class | **~40–80** | ~50–80 / card | Card + RAM ≥128GB + NVDEC |
| **M1** + 2× L40S-class | **~80–100** | **~100–160** | Đủ 2 card · RAM/NVMe |
| **M2** (2× PRO 2000 16GB) | **~20–40** | ~40–50 (sát) | Đủ cho UAT/tuyến nhỏ |
| **M3a** (2× L40S, RAM 64GB) | **~60–90** | GPU cho phép cao hơn | RAM hạn chế trước |
| **M3a** sau nâng RAM ≥128GB | **~80–100** | **~100–160** | + NVMe scratch |
| **M3b** (1× A100) | **~60–100** | ~60–100 | Ưu tiên train hơn hub |

### 3.2 Chịu tải theo nghiệp vụ (không chỉ “số cam”)

| Workload | Đơn vị đo | M2 | M3a (RAM đủ) | M3b | Ghi chú |
|----------|-----------|----|--------------|-----|---------|
| CCTV/body RTSP → YOLO 24/7 | Luồng @ 1 FPS | 20–40 | 80–100+ | 60–100 | Nhóm 2 |
| Batch ảnh tuần đường / AiVision | Ảnh/phút (ước) | Trung bình | Cao (2 GPU) | Cao (1 GPU + HBM) | Không cần RTSP |
| `ai-asset-detect` (TS mới) | Cùng worker YOLO | Có | Có | Có | Confirm → Asset |
| Fine-tune YOLOv8-nano | Phút / đợt | Đủ nhẹ | Đủ | **Tốt nhất** | 20–40 phút điển hình |
| SAM segment (P2-C) | Job nặng | Hạn chế VRAM | Trung bình | **Tốt** | Nên tách / async |
| Nhóm 1 Edge ANPR event | Event/s | N/A trên GPU | N/A | N/A | App server thường |

### 3.3 Công thức mở rộng nhanh

```
Cam_AI_cần ≈ N_body_cctv_nhóm2   (không tính cam Edge ANPR)

Workers_cần ≈ ceil( Cam_AI_cần / Cam_per_worker )

Cam_per_worker (1 FPS):
  M2              ≈ 30   (lấy mid 20–40)
  M3a / M1+2×L40S ≈ 90   (lấy mid 80–100)
  M3b             ≈ 80   (lấy mid 60–100)
```

**Ví dụ:** 250 camera Nhóm 2 @ 1 FPS → `ceil(250/90) ≈ 3` worker kiểu M3a (hoặc M1 đủ 2× L40S).

---

## 4. Kịch bản mở rộng

### 4.1 Lộ trình theo phase dự án

| Phase | Nghiệp vụ | GPU? | Hành động hạ tầng |
|-------|-----------|------|-------------------|
| **P1.5** | Kết nối cam Edge · nhận event biển/tốc độ/đếm | **Không** | Chỉ API + notify |
| **P2 pilot** | YOLO local vài–vài chục nguồn (body/CCTV/ảnh) | **Có** | **M2** hoặc **M1** + 1 card |
| **P2.1 hub** | Nhiều CCTV/body 24/7 | **Có** | **M3a** hoặc **M1** đủ 2 card · nâng RAM |
| **MLOps** | Retrain định kỳ | **Có (burst)** | **M3b** hoặc A100 PAYG tách · tắt sau export |
| **Scale tỉnh / nhiều tuyến** | Hàng trăm cam AI | **Có** | **Thêm worker** (scale-out) |

### 4.2 Kịch bản A — Mở rộng bằng **lắp thêm card** (cùng máy)

| Bước | Việc | Model phù hợp |
|------|------|---------------|
| A0 | Chọn chassis còn slot + PSU dư | **M1** (khuyến nghị) hoặc R760 GPU-ready PSU 2400W còn slot |
| A1 | Gắn **1×** GPU (L40S / Ada / PRO 6000…) | Chạy ~40–80 cam |
| A2 | Gắn **card 2** | Nhân đôi pipeline → ~80–160 cam (band L40S) |
| A3 | Trần 1 máy | **Dừng** ở 2× DW (M1) — không gắn card 3 trên SYS-741A-T |

**Không dùng kịch bản A với M3a đã full 2× L40S + PSU 1400W** — không còn dư địa gắn thêm.

### 4.3 Kịch bản B — Mở rộng bằng **thêm máy worker** (khuyến nghị khi rất lớn)

```
API / Queue (1 cụm)
        │
        ├── Worker-1 (M3a hoặc M1+2GPU)  → ~80–100 cam
        ├── Worker-2                     → ~80–100 cam
        └── Worker-N                     → …
```

| Số cam AI (1 FPS) | Worker kiểu M3a / M1+2×L40S | Ghi chú |
|-------------------|----------------------------|---------|
| ≤ 40 | 1× M2 đủ | Develop / UAT |
| 40 – 100 | 1× M3a (nâng RAM) hoặc M1 2 card | 1 hub |
| 100 – 200 | **2** worker | Cùng DC / VPN |
| 200 – 400 | **3–5** worker | Giám sát util + queue depth |
| > 400 | N worker + object storage | Capacity plan quý |

### 4.4 Kịch bản C — Nâng cấp card trên M2 (PSU 2400W)

| Bước | Từ | Sang | Mục tiêu |
|------|----|------|----------|
| C1 | 2× RTX PRO 2000 16GB | Giữ 1 card + thêm/đổi 1× L40S (nếu slot/nguồn/riser cho phép) | Tăng capacity từng bước |
| C2 | Đổi cả 2 sang L40S | Tương đương band M3a | Cần xác nhận thermal + riser R760 GPU-ready |
| C3 | Giữ M2 nguyên | Thêm worker M3a riêng | An toàn hơn “đục” máy lab |

### 4.5 Kịch bản D — Train tách infer (bắt buộc khi ổn định prod)

| Vai trò | Máy | Ghi chú |
|---------|-----|---------|
| Infer 24/7 | M3a / M1+L40S / cluster worker | Không tắt |
| Train / retrain | **M3b** hoặc A100 PAYG | Chạy vài chục phút → export ONNX → **tắt** |
| Cùng 1 máy M1 | Card1 infer · Card2 train thỉnh thoảng | Được — tránh train làm nghẽn infer giờ cao điểm |

### 4.6 Ma trận chọn kịch bản mở rộng

| Câu hỏi | Chọn kịch bản |
|---------|----------------|
| Muốn 1 thùng, gắn card dần? | **A → M1** |
| Đã có M2 lab, tăng cam vừa? | **C** hoặc thêm worker nhỏ |
| Cần 80–100+ cam ngay? | **M3a** (+ nâng RAM) |
| Cần vài trăm cam? | **B** (nhiều worker) |
| Hay cập nhật model? | **D** (+ M3b / PAYG) |
| Chỉ cam Edge ANPR? | **Không mở GPU** |

---

## 5. Checklist triển khai kỹ thuật (GPU worker)

| # | Hạng mục | Tiêu chí đạt |
|---|----------|--------------|
| 1 | Tách process | API không block chờ GPU |
| 2 | Queue | Redis/Channel · backpressure khi GPU full |
| 3 | Decode | NVDEC bật · đo CPU < ngưỡng |
| 4 | Infer | 1 FPS + batch · TensorRT/ONNX-GPU |
| 5 | RAM | ≥ 64 GB (prod); **≥ 128 GB** dual L40S |
| 6 | Disk | NVMe model + scratch; object storage ảnh gốc |
| 7 | NIC | ≥ 10GbE khi nhiều RTSP cùng DC |
| 8 | Monitor | GPU util · VRAM · nhiệt · queue depth · số RTSP alive |
| 9 | Model registry | `modelVersion` + sha256 ONNX |
| 10 | Edge song song | Cam TCM403 vẫn chỉ gửi event — không đụng worker |

---

## 6. Tóm tắt một trang (gửi khách / nội bộ)

### GPU

| Model | GPU | VRAM tổng | Vai trò |
|-------|-----|-----------|---------|
| M1 | Tới 2× DW (lắp sau) | Theo card | Mở rộng card |
| M2 | 2× RTX PRO 2000 16GB | 32 GB | Develop / UAT |
| M3a | 2× L40S 48GB | 96 GB | Infer hub |
| M3b | 1× A100 80GB | 80 GB | Train |

### Chịu tải (1 FPS · Nhóm 2)

| Model | Cam AI 24/7 khuyến nghị |
|-------|-------------------------|
| M2 | **20–40** |
| M3a | **80–100** (nâng RAM nếu full) |
| M3b | **60–100** |
| M1 | Theo card: 1 card ~40–80 · 2 card ~80–160 |

### Mở rộng

| Cách | Khi nào | Thiết bị |
|------|---------|----------|
| Lắp thêm card | Scale vừa trên 1 máy | **M1** |
| Thêm worker | Scale lớn / vài trăm cam | Nhiều **M3a** hoặc M1 đủ card |
| Train tách | Retrain định kỳ | **M3b** / PAYG |
| Không cần GPU | Chỉ Edge ANPR + event | App server |

---

## Phụ lục — Tham chiếu

| File | Nội dung |
|------|----------|
| `camera-model.md` §1b | Độ chính xác Edge ANPR (LPR >98%, capture >99%…) |
| `10-YOLO-SERVER-REQUIREMENTS.md` | Required HW · tier |
| `16-ITS-TRAFFIC-OBJECT-DETECTION-DESIGN.md` | Worker · 1 FPS · asset detect |
| `17-GPU-VNSO-COST-STANDARD.md` | SKU vận hành (tham chiếu nội bộ) |
| `21-CAMERA-HLS-WEBRTC-GATEWAY.md` | Live ≠ đường AI |
