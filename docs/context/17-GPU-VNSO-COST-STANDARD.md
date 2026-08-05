# RMMS — Chuẩn hóa GPU & chi phí thuê (VNSO · Cost-effective MLOps)

> **SSOT** cấu hình GPU + giá thuê VN cho **train burst** và **infer 24/7**.  
> **Khớp:** `10-YOLO-SERVER-REQUIREMENTS.md` · `12-AI-COST-PHASES.md` · `13-AI-SERVER-BY-PHASE.md` · `16-ITS-TRAFFIC-OBJECT-DETECTION-DESIGN.md` · `14-P2-AI-VISION-STANDARD.md`  
> **Nhà cung cấp tham chiếu:** VNSO (DC trong nước — RTSP latency thấp).  
> **Giá:** tham chiếu thị trường VN 2026-08 — **xác nhận báo giá mới** trước ký HĐ / PO.  
> **Canvas / báo giá:** dùng bảng SKU bên dưới — không dùng ceiling A100 capex `04-PROGRAMS.md` cho opex P2 ITS.

---

## 0. Nguyên tắc chiến lược (bắt buộc)

```
[Môi trường Dự án RMMS]
 ├── Train / fine-tune (thỉnh thoảng):  A100 PAYG → tắt VM ngay sau export
 └── Infer realtime CCTV/dashcam (24/7): L4 / V100 / A40 thuê tháng · Worker .NET tách DMS
```

| # | Rule | Lý do |
|---|------|-------|
| C1 | **Tách train ≠ infer** | Train cần Tensor Core mạnh theo giờ; infer cần NVDEC + SLA tháng |
| C2 | **Không** gắn GPU vào DMS 1U 350W | `10` §5 — PSU / nhiệt / downtime API |
| C3 | **Không** chạy infer prod 24/7 trên Vast / PAYG train | Không SLA · giá giờ × 720h đắt hơn thuê tháng |
| C4 | **Ưu tiên DC VN** (VNSO…) cho RTSP | Băng thông nội địa · giảm trễ luồng camera |
| C5 | Sau train: export `.onnx` / `.tflite` / `.mlmodel` → **tắt/xóa VM** | Ngừng tính tiền ngay |
| C6 | Frame skip **1 FPS** + **batching** | 1× V100/L4 ≈ 25–40 luồng CCTV (xem §3) |

**Phân biệt tài liệu cũ:**

| Nguồn | Vai trò sau chuẩn hóa này |
|-------|---------------------------|
| `04-PROGRAMS.md` A100 ×2 capex | **Ceiling** outsource lớn / LLM — **không** SKU mặc định P2 ITS |
| Vast.ai RTX 4090 (`12`/`13`) | Phương án **B** khi data được xuất nước ngoài / giá burst tốt hơn |
| **Doc này (`17`)** | **SKU mặc định** train + infer VN (VNSO) |

---

## 1. Plan triển khai (theo phase RMMS)

| Phase | Việc | GPU SKU (`17`) | Chi phí ước (VND) | Gate |
|-------|------|----------------|-------------------|------|
| **P0 / P1** | Online GPT · demo ITS | — | Token Azure (`08`/`12`) | UAT P/R |
| **P2-A Go local** | Dataset biển báo/cọc tiêu · fine-tune YOLOv8-nano | **GPU-TRAIN-A100-40** (PAYG) | ≤ **40.000đ / lần** train điển hình | Export 3 artifact + sha256 |
| **P2 edge** | Mobile TFLite/CoreML · OTA | — (edge) | — | `16` §9–10 |
| **P2.1 CCTV** | `Its.GpuWorker` / `CctvStreamWorker` 24/7 | **GPU-INF-V100** hoặc **GPU-INF-L4** (tháng) | **~19,5–22 tr / tháng** / card | Monitoring GPU + queue |
| **Scale >50 luồng** | Hub GIS / batch lớn | **GPU-INF-A40** (tháng · cam kết 12th) | **~12,2 tr / tháng** (ưu đãi) | Capacity plan |
| **Retrain định kỳ** | Học bổ sung từ thực địa | **GPU-TRAIN-A100-*** PAYG | ~20–40 phút / đợt | Tắt VM |

### Task plan (infra + Dev)

| # | Task | Owner | Depends |
|---|------|-------|---------|
| 1 | Chốt SKU mặc định: Train A100-40 · Infer V100/L4 | Infra + PM | Gate Go local |
| 2 | PO / HĐ VNSO (tháng infer + tài khoản PAYG train) | PM / Procurement | #1 |
| 3 | Provision infer host: Ubuntu · driver · CUDA · ONNX-GPU | Infra | #2 |
| 4 | Deploy `Its.GpuWorker` (.NET 8) · RTSP HW decode · batch 1 FPS | BE | #3 · `16` §5.4 |
| 5 | Pipeline train Docker: dataset → YOLOv8n freeze=10 → export 3 format | MLOps | #2 PAYG |
| 6 | Model registry + OTA (`ml_model_registry`) | BE | #5 |
| 7 | Runbook: bật A100 → train → export → **destroy VM** | Ops | #5 |
| 8 | Capacity: đo luồng thực tế / card · quyết định A40 nếu >50 | Infra | #4 ổn định 2 tuần |

---

## 2. Gói GPU TRAINING (Fine-tune / MLOps burst)

### 2.1 Mục đích

Chạy container Docker, nạp dataset ảnh **biển báo / cọc tiêu** (và defect mặt đường nếu cùng pipeline) từ thực địa → cập nhật trọng số **YOLOv8-nano** → xuất artifact edge/server.

### 2.2 SKU chuẩn hóa

| SKU | GPU | VRAM | Hình thức | Giá tham chiếu (VND/giờ) | Khi dùng |
|-----|-----|------|-----------|--------------------------|----------|
| **GPU-TRAIN-A100-40** | NVIDIA **A100** | **40 GB** | Pay-as-you-go | **29.000 – 59.000** | **Mặc định** fine-tune YOLOv8-nano |
| **GPU-TRAIN-A100-80** | NVIDIA **A100** | **80 GB** | Pay-as-you-go | **~49.000** (public) | Batch lớn / multi-job / SAM kèm — **không** mặc định nano |

**Hình thức:** thuê theo giờ · **cấm** always-on tháng cho train.

### 2.3 Thông số workload chuẩn (YOLOv8-nano)

| Tham số | Giá trị chuẩn | Ghi chú |
|---------|---------------|---------|
| Model | YOLOv8-nano | Align `16` §9 |
| Freeze backbone | **10** | User brief |
| Epochs fine-tune | **50** | Học bổ sung |
| Host | A100-40 | SKU `GPU-TRAIN-A100-40` |
| Thời gian train điển hình | **20 – 40 phút** | 1× A100 |
| **Chi phí / lần cập nhật (chỉ GPU)** | **vài chục nghìn đ** | @ ~50k/h × 0,25–1,5h — **không** gồm đội gán nhãn |
| **Chi phí đợt thực tế** | **Nhãn + AI lead ≫ GPU** | Xem page `chi-phi-gpu.html` · `14` §4 |
| Export bắt buộc | `.onnx` · `.tflite` · `.mlmodel` (+ sha256) | Tắt VM ngay sau export |
| Runtime train | Docker + PyTorch/CUDA | Không train trên máy API |

### 2.4 Công thức chi phí train

```
Cost_train ≈ ceil(Duration_hours × Rate_A100)
Duration_hours ≈ 0,33 – 0,67   # 20–40 phút
Budget_alert / lần = 40.000đ   # soft cap mặc định A100-40
```

| Kịch bản | Thời gian | Rate giả định | Chi phí |
|----------|-----------|---------------|---------|
| Fine-tune nhanh | 20 phút (0,33h) | 50.000đ/h | **~16.500đ** |
| Fine-tune điển hình | 40 phút (0,67h) | 50.000đ/h | **~33.500đ** |
| Worst A100-40 | 40 phút | 59.000đ/h | **~39.500đ** |
| A100-80 (không khuyến nghị nano) | 40 phút | 49.000đ/h | **~32.700đ** |

**Phương án B (giữ từ `12`/`13`):** Vast RTX 4090 ~$0,25–0,55/h — chỉ khi data **được** xuất nước ngoài và giá tốt hơn VNSO sau quy đổi.

### 2.5 Chuẩn dữ liệu nhà cung cấp — quota · memory · transfer (Cloud GPU VNSO)

> Nguồn public: [Thuê GPU theo giờ](https://vnso.vn/thue-gpu-theo-gio-dung-thu-mien-phi-chi-tai-vnso/) (cập nhật ~06/2026). **Không** có quota “N request API/tháng” — đây là **IaaS máy + GPU riêng**, billing theo giờ.

| Hạng mục | A100 40GB Cloud | A100 80GB Cloud | H100 80GB Cloud | Ý nghĩa RMMS |
|----------|-----------------|-----------------|-----------------|--------------|
| **GPU / VRAM** | 1× A100 SXM4 · **40 GB** | 1× A100 SXM4 · **80 GB** | H100 80GB SXM5 | Nano fine-tune: **40GB đủ** |
| **CPU** | 16 vCPU | 32 vCPU | 64C / 128T | Không phải bottleneck train |
| **RAM host** | **48 GB** | **96 GB** | **128 GB** | 40GB gói: RAM host **thấp hơn** khuyến nghị prod infer ≥64GB (`10`) — **chỉ dùng train burst** |
| **Disk** | **1 TB NVMe** | **2 TB NVMe** | 1 TB NVMe + 2 TB SAN | Dataset 20k ảnh + cache thường OK |
| **Network** | **500 Mbps ↓ / 15 Mbps ↑** · 1 IPv4 | cùng | **1 Gbps ↓ / 15 Mbps ↑** | **Uplink 15 Mbps = nút thắt transfer** |
| **GPU share** | Dedicated (không chia card) | cùng | cùng | Ổn định hơn shared cloud |
| **API request quota** | **Không áp dụng** | — | — | Tự chạy process trên VM |
| **Billing quota** | PAYG / giờ · nạp trước | cùng | liên hệ | Tắt VM sau export |
| **Giá public (tham chiếu)** | **29.000đ/giờ** | **49.000đ/giờ** | Liên hệ | Chốt PO — bài khác có thể ghi 39–59–80k |

**Transfer thực tế (ước):**

| Hướng | Bandwidth gói | Throughput ước | Ví dụ |
|-------|---------------|----------------|-------|
| **Upload** (dataset vào VM) | 15 Mbps | ~1,5–1,8 MB/s | 50 GB ≈ **8–10 giờ** |
| **Download** (checkpoint ra) | 500 Mbps (A100) | hàng chục MB/s | `.onnx` vài trăm MB ≈ vài phút |

**Quy tắc vận hành từ quota NCC:**

| # | Rule |
|---|------|
| Q1 | Upload / chuẩn bị dataset **trước** hoặc song song khi VM idle storage — **không** để GPU idle chờ transfer |
| Q2 | Ưu tiên image có CUDA/PyTorch **preloaded** (giảm tải model lớn qua uplink) |
| Q3 | **Cấm** dùng Cloud GPU 500/15 làm hub **nhiều RTSP** CCTV — chuyển **Server GPU tháng** (`§3`) |
| Q4 | Backup artifact ra kho ngoài DC trước khi destroy VM |
| Q5 | Xác nhận RAM/ổ **trên panel** khi mở máy — marketing có thể lệch 48 vs 64 GB |

**UI:** `Linm.RMMS.Page.Index/docs/chi-phi-gpu.html` (card phân tích NCC) · `cau-hinh-ky-thuat-gpu.html`.

---

## 3. Gói GPU REALTIME INFERENCE (CCTV / Dashcam 24/7)

### 3.1 Mục đích

Worker Service **.NET 8** chạy ngầm: giải mã RTSP bằng **NVDEC** (HW acceleration) + inference realtime (ONNX Runtime GPU / TensorRT). Tách process khỏi DMS API (`10` R6 · `16` GAP-ITS-06).

### 3.2 Tối ưu tải (bắt buộc trước khi scale card)

| Kỹ thuật | Tham số chuẩn | Hiệu quả |
|----------|---------------|----------|
| Frame skipping | **1 FPS** suy diễn | Giảm ~25–30× vs 25–30 FPS full |
| Batching inference | Gom frame multi-stream | Tăng throughput GPU |
| Queue | Redis / Channel | API không block GPU |
| Decode | NVDEC H.264 | CPU rảnh cho worker I/O |

**Capacity tham chiếu (sau tối ưu trên):**

| GPU | VRAM | Luồng CCTV đồng thời (ước) |
|-----|------|----------------------------|
| 1× V100 32GB **hoặc** 1× L4 | 24–32 GB | **25 – 40** luồng |
| 1× A40 48GB | 48 GB | **> 50** luồng / hub GIS lớn |

### 3.3 SKU chuẩn hóa (thuê tháng)

| SKU | GPU / cấu hình | Hình thức | Giá tham chiếu (VND/tháng) | Khi dùng |
|-----|----------------|-----------|----------------------------|----------|
| **GPU-INF-V100** | Server: **2× Xeon Platinum** · **64 GB RAM** · NVMe · **1× V100 32GB** | Thuê **tháng** (+ chiết khấu 15–25% dài hạn) | **19.500.000 – 22.000.000** | **Mặc định** P2.1 · 25–40 luồng |
| **GPU-INF-L4** | Cloud/Dedicated **L4** (parity `10` Prod chuẩn 24GB) | Thuê **tháng** | *Xác nhận báo giá VNSO* — cùng band opex với V100 nếu có | Thay thế V100 khi L4 sẵn · NVDEC tốt |
| **GPU-INF-A40** | **NVIDIA A40 48GB** (Server AI) | Tháng · **cam kết 12 tháng** ≈ **0,5 USD/giờ** | **~12.168.000** | **> 50 luồng** · hub Big Data GIS |

**Hình thức:** thuê cố định dài hạn — **không** PAYG giờ cho prod 24/7.

### 3.4 Spec host infer (khớp `10` §2–3)

| Hạng mục | Required tối thiểu | SKU V100 tham chiếu |
|----------|--------------------|---------------------|
| GPU | NVIDIA CUDA + NVDEC | 1× V100 32GB / L4 / A40 |
| RAM | **≥ 64 GB** | 64 GB (đủ Prod chuẩn) |
| CPU | 16–32 vCPU đời mới | 2× Xeon Platinum |
| Disk | NVMe ≥ 512 GB–1 TB | NVMe SSD |
| OS / runtime | Ubuntu 22.04 + driver + **ONNX Runtime GPU** | Worker Linux khuyến nghị |
| Process | `Its.GpuWorker` tách DMS | C# .NET 8 BackgroundService |

### 3.5 Ước opex infer (tháng)

| SKU | / tháng | / năm (×12, chưa VAT) | Ghi chú |
|-----|---------|------------------------|---------|
| GPU-INF-V100 (mid) | **~20.750.000đ** | **~249 tr** | 1 card · 25–40 stream |
| GPU-INF-A40 (12th) | **~12.168.000đ** | **~146 tr** | Ưu đãi cam kết · >50 stream |
| Sai lầm: A100 PAYG 24/7 | 50k×720 ≈ **36 tr/tháng** | — | **Cấm** — đắt hơn thuê tháng V100 |

---

## 4. Ma trận quyết định nhanh

| Câu hỏi | Chọn SKU |
|---------|----------|
| Fine-tune YOLOv8-nano 50 epoch? | **GPU-TRAIN-A100-40** PAYG → tắt |
| Dataset rất lớn / cần 80GB? | **GPU-TRAIN-A100-80** (hiếm) |
| 10–40 luồng CCTV 24/7? | **GPU-INF-V100** hoặc **GPU-INF-L4** tháng |
| > 50 luồng / hub GIS? | **GPU-INF-A40** (cam kết 12 tháng) |
| Data cấm ra nước ngoài? | Chỉ VNSO / lab VN — **không** Vast |
| P1 chưa Go local? | **Không** thuê GPU (`13` Phase 0) |

---

## 5. Mapping phase `13` → SKU `17`

| Phase `13` | Train | Infer |
|------------|-------|-------|
| 0–1 P1 / Gate | — | — |
| 2 Dataset + Train | **GPU-TRAIN-A100-40** (ưu tiên VN) *hoặc* Vast 4090 (B) | — |
| 3 Hybrid | Retrain A100 PAYG | **GPU-INF-V100/L4** + GPT fallback |
| 4 Prod | Retrain A100 PAYG | V100/L4 · scale **A40** nếu >50 stream |

---

## 6. Checklist vận hành (Ops)

### Train burst
- [ ] Tài khoản PAYG A100 (VNSO) + hạn mức / lần ≤ 40.000đ (alert)
- [ ] Dataset trên storage kiểm soát (MinIO/NAS VN)
- [ ] Docker train script pin version + freeze=10
- [ ] Export 3 format + ghi `ml_model_registry`
- [ ] **Destroy / stop VM** trong ≤ 5 phút sau export

### Infer 24/7
- [ ] HĐ thuê tháng V100/L4 (hoặc A40)
- [ ] Host tách DMS · VPN chỉ API → worker
- [ ] NVDEC + batch + 1 FPS bật
- [ ] Monitoring: GPU util · VRAM · nhiệt · queue depth · số RTSP alive
- [ ] GPT / online fallback còn bật (`14`)
- [ ] Capacity review mỗi quý (luồng thực vs 25–40)

---

## 7. Tóm tắt số (1 trang CFO / PM)

| Hạng mục | Hình thức | SKU | Chi phí tham chiếu |
|----------|-----------|-----|-------------------|
| Học bổ sung model | Theo giờ | A100 40GB | **29–59kđ/h** · **≤40kđ/lần** (20–40 phút) |
| Train nặng (hiếm) | Theo giờ | A100 80GB | **~80kđ/h** |
| Infer 25–40 CCTV | Theo tháng | V100 32GB server | **19,5–22 trđ/tháng** |
| Infer >50 / hub | Theo tháng (12th) | A40 48GB | **~12,2 trđ/tháng** |
| Chiến lược | — | Tách train PAYG ↔ infer tháng | Tối thiểu opex · RTSP nội địa |

---

## Liên kết

| File | Nội dung |
|------|----------|
| `10-YOLO-SERVER-REQUIREMENTS.md` | Required HW · cấm DMS+GPU · tier |
| `12-AI-COST-PHASES.md` | Chi phí AI theo phase (token + GPU) |
| `13-AI-SERVER-BY-PHASE.md` | Cloud / vật lý / marketplace |
| `14-P2-AI-VISION-STANDARD.md` | P2-A/B · ONNX · DoD |
| `16-ITS-TRAFFIC-OBJECT-DETECTION-DESIGN.md` | ITS CCTV worker · MLOps |
| `08-AI-TOKEN-COST-IMAGE-DIAGNOSIS.md` | P1 token (không GPU) |
| `04-PROGRAMS.md` | Capex ceiling cũ — không thay `17` |
