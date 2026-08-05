# RMMS — Yêu cầu server chạy YOLOv8 (P2 local)

> **Mục đích:** Phân tích hạng mục phần cứng + **required** cho **GPU worker infer/train** (ONNX detector — P2-A/P2-B theo `14-P2-AI-VISION-STANDARD.md`).  
> **P1:** không cần GPU — AI online (GPT-4o…), xem `08-AI-TOKEN-COST-IMAGE-DIAGNOSIS.md` · `09-PLAN-P1-V2.md`.  
> **SKU + giá thuê VN (VNSO):** **`17-GPU-VNSO-COST-STANDARD.md`** — Train A100 PAYG · Infer V100/L4/A40 tháng.  
> **Tham chiếu case:** máy thuê VNPT Hà Nội (DMS 1U · Xeon E5-2620 · 16GB · 350W · **không GPU**).  
> **Tên “YOLO” trong file:** lịch sử — áp dụng mọi **detector xuất ONNX/TensorRT**, không chỉ Ultralytics.
---

## 1. Phân tích hạng mục server (DMS hiện có vs YOLO)

| Hạng mục | Máy DMS (VNPT — hiện trạng) | Required YOLO infer (prod) | Required YOLO train | Đánh giá |
|----------|----------------------------|----------------------------|---------------------|----------|
| **CPU** | 2× Xeon **E5-2620** (cũ) | 16–32 vCPU đời mới (khuyến nghị) | 16–32 vCPU | CPU cũ **đủ phụ** nếu có GPU; không đủ nếu chỉ CPU-infer volume lớn |
| **RAM** | **16 GB** DDR3 | **≥ 64 GB** | **≥ 64 GB** | **Thiếu** — dễ OOM khi batch / SAM / worker |
| **GPU** | **Không có** | **≥ 1× NVIDIA** (L4 24GB / T4 16GB tối thiểu prod nhẹ) | **≥ 1×** 24GB+ (4090 / A10 / L4) | **Thiếu then chốt** — P2 local bắt buộc GPU |
| **PCIe** | Thường PCIe 3.0 (đời E5) | Slot x16 + nhận GPU | Slot x16 | Gen 3 **chạy được** GPU mới (bandwidth thấp hơn một chút — OK infer) |
| **PSU** | **350 W** · 1U | **550–1000 W+** (tùy GPU) + cáp PCIe | Cao hơn nếu 4090 | **Không đủ** gắn GPU vào chassis hiện tại |
| **Form factor** | **1U** rack | 1U GPU low-profile **hoặc** 2U / GPU box riêng | Tower / 2U–4U / cloud | 1U DMS **khó/không** nhét GPU full-height |
| **Disk OS** | SSD 500 GB | NVMe **512 GB–1 TB** | NVMe **1–2 TB** | Tạm đủ OS; nên NVMe riêng cho model/log |
| **Disk data** | (NAS 4×4TB riêng) | NVMe/SSD **1–2 TB** + object storage ảnh | **≥ 2 TB** dataset | NAS = lưu trữ — **không** chạy YOLO |
| **Network** | 1 GbE dual | 1–10 GbE | 1–10 GbE | Đủ nếu queue/API cùng rack |
| **Nhiệt / quạt** | 1U chuẩn app | Chassis thiết kế GPU | Cao | Gắn GPU vào 1U app → rủi ro **throttle** |
| **OS / runtime** | (tuỳ thuê) | Ubuntu 22.04 + NVIDIA driver + CUDA · TensorRT / Triton / ONNX-GPU | PyTorch + CUDA | Worker GPU **tách** khỏi Windows API nếu có thể |
| **Vai trò đúng** | API / DB / app | **GPU Worker** infer | Máy train (tách) | DMS giữ **app**; YOLO trên **host GPU riêng** |

### Kết luận phân tích

| Câu hỏi | Trả lời |
|---------|---------|
| DMS chạy YOLO production? | **Không** |
| DMS CPU-only demo vài ảnh/phút? | Có thể (chậm) — **không** cam kết P2 |
| Server cũ + cắm GPU mới trên cùng 1U 350W? | **Gần như không** (PSU · chỗ · nhiệt) |
| Server cũ (API) + GPU server/PC mới cạnh rack? | **Được — khuyến nghị** |

---

## 2. Required — chạy model YOLO (checklist)

### 2.1 Bắt buộc (infer production)

| # | Required | Ghi chú |
|---|----------|---------|
| R1 | **GPU NVIDIA** CUDA-capable | Tối thiểu prod: **T4 16GB** / **L4 24GB**; chuẩn: **L4**; cao tải: **L40S** hoặc 2× L4 |
| R2 | Driver NVIDIA + **CUDA** phù hợp | Khớp bản TensorRT / PyTorch / ONNX Runtime GPU |
| R3 | Runtime infer | **TensorRT** hoặc **Triton** hoặc **ONNX Runtime GPU** |
| R4 | **RAM ≥ 64 GB** trên host GPU | 32 GB chỉ pilot nhẹ |
| R5 | NVMe đủ chỗ model + queue ảnh tạm | Model ONNX/engine + batch scratch |
| R6 | Queue / API tách process | Mono .NET **không** block request chờ GPU lâu — dùng queue |
| R7 | Model đã train/export | ONNX / TensorRT engine từ đội SV (P2) |
| R8 | Monitoring GPU | Utilization, VRAM, nhiệt, queue depth |

### 2.2 Bắt buộc (train — đội SV / MLOps)

| # | Required | Ghi chú |
|---|----------|---------|
| T1 | GPU Tensor Core mạnh · **PAYG** | **Mặc định VN:** A100 40GB (`17` SKU `GPU-TRAIN-A100-40`); phương án B: 4090 / A10 / L4 |
| T2 | Disk dataset **≥ 2 TB** NVMe/SSD | + backup |
| T3 | Tool gán nhãn | CVAT / Roboflow… |
| T4 | Xuất ONNX / TFLite / MLModel → bàn giao infer host | **Tắt VM ngay** sau export — không train trên máy API 24/7 |

### 2.3 Không bắt buộc cho YOLO infer

- A100 **always-on** cho infer (dùng V100/L4 tháng — `17`; A100 chỉ **burst train**)
- Self-host LLM trên cùng máy YOLO
- GPU trên máy Windows API (có thể remote worker Linux)

---

## 3. Bảng cấu hình đề xuất (tier)

| Tier | GPU | RAM | CPU | Disk | Phù hợp | SKU `17` |
|------|-----|-----|-----|------|---------|----------|
| **Pilot local** | RTX 4060 Ti 16GB / T4 16GB | 32–64 GB | 8–16 core | NVMe 1 TB | UAT P2, volume nhỏ | — |
| **Prod chuẩn** | **1× L4 24GB** / **1× V100 32GB** | **64 GB** | 16–32 vCPU / 2× Xeon Platinum | NVMe 1–2 TB | **25–40** CCTV (1 FPS + batch) | `GPU-INF-L4` / `GPU-INF-V100` |
| **Prod cao tải** | **1× A40 48GB** hoặc 1–2× L40S / 2× L4 | **128 GB** | 32–64 vCPU | NVMe 2–4 TB + object storage | **>50** luồng · hub GIS | `GPU-INF-A40` |
| **Train (tách · PAYG)** | **1× A100 40GB** (mặc định) · 80GB nếu cần | 64 GB+ | 16+ core | NVMe ≥ 2 TB dataset | Fine-tune YOLOv8n · tắt sau export | `GPU-TRAIN-A100-40` |

**Model gợi ý prod:** detector **n/s/m** @ 640 (YOLOv8-nano ITS · YOLOX/RTMDet/RT-DETR hoặc Ultralytics Enterprise). SAM: async hoặc host riêng nếu cần diện tích PCI.  
**Giá thuê:** xem bảng VNSO trong **`17-GPU-VNSO-COST-STANDARD.md`**.

---

## 4. Kiến trúc triển khai khuyến nghị

```
┌─────────────────────────────┐     queue      ┌──────────────────────────────┐
│  Server DMS / API (cũ OK)   │ ─────────────► │  GPU Worker (máy/host mới)   │
│  .NET mono · DB · Redis     │                │  YOLOv8 (+ optional SAM)     │
│  P1: GPT-4o online fallback │ ◄───────────── │  Triton / ONNX-GPU           │
└─────────────────────────────┘   detections   └──────────────────────────────┘
         │                                            │
         ▼                                            ▼
   Object storage / NAS                         Model registry (ONNX)
```

| Thành phần | Máy nào |
|------------|---------|
| Web/API/DB | DMS / Windows Server hiện có (nâng RAM nếu cần) |
| YOLO infer | **GPU server riêng** |
| Train | Máy/cloud thuê theo đợt |
| Ảnh gốc | NAS / object storage (không chạy model trên NAS) |

---

## 5. So sánh nhanh: gắn GPU vào máy cũ vs tách máy

| Tiêu chí | Gắn GPU vào DMS 1U 350W | Tách GPU host mới |
|----------|-------------------------|-------------------|
| PCIe gen cũ | Thường OK | N/A |
| PSU / chỗ / nhiệt | **Fail** | Pass |
| Nâng RAM DDR3 | Hạn chế slot/loại | Host mới dễ ≥64GB |
| Vận hành | Rủi ro downtime app khi sửa HW | API ổn định |
| Chi phí/công sức | Thường ≥ thuê 1 GPU box | Rõ ràng, đúng P2 |
| **Khuyến nghị** | Không | **Có** |

---

## 6. Checklist trước khi Go local (P2)

- [ ] UAT P1 online đạt P/R + quyết định Go local (`09-PLAN-P1-V2.md`)
- [ ] Có host GPU đạt tier **Prod chuẩn** trở lên (bảng §3)
- [ ] RAM ≥ 64 GB · NVMe · NVIDIA driver ổn định
- [ ] Pipeline: API → queue → worker → `detections` → Incident
- [ ] Model ONNX/TensorRT từ đội SV (≥20k ảnh nếu custom VN)
- [ ] Online GPT còn **fallback** case khó
- [ ] **Không** phụ thuộc máy DMS (không GPU) làm infer production

---

## Tài liệu liên quan

| File | Nội dung |
|------|----------|
| `09-PLAN-P1-V2.md` | P1 online ↔ P2 local |
| `08-AI-TOKEN-COST-IMAGE-DIAGNOSIS.md` | Chi phí online (không GPU) |
| `17-GPU-VNSO-COST-STANDARD.md` | **SSOT SKU + giá VNSO** train/infer |
| `04-PROGRAMS.md` | Capex ceiling cũ (A100×2) — không thay `17` |
| `07-TECHNICAL-IMPLEMENTATION.md` | Hạng mục AiVision / classes YOLO |
| `02-SYSTEM-ARCHITECTURE.md` | Mono + worker tách khi scale |
