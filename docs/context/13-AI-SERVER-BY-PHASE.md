# RMMS — Server theo giai đoạn (Cloud vs Vật lý)

> **SSOT Phase AI Vision local:** `14-P2-AI-VISION-STANDARD.md`  
> **SSOT:** `09-PLAN-P1-V2.md` · `10-YOLO-SERVER-REQUIREMENTS.md` · `12-AI-COST-PHASES.md` · `08`  
> **SKU + giá GPU VN (VNSO):** **`17-GPU-VNSO-COST-STANDARD.md`**  
> **Canvas:** `rmms-ai-server-phases.canvas.tsx`

---

## 0. Quy ước

| Loại | Nghĩa trong RMMS |
|------|------------------|
| **Vật lý / on-prem** | Máy trong rack đơn vị hoặc DC thuê cố định (VD: VNPT DMS 1U hiện có) |
| **Cloud managed** | Azure OpenAI, object storage, **cloud GPU VN có SLA** (VNSO…) |
| **Cloud marketplace** | [Vast.ai](https://cloud.vast.ai/) — GPU thuê theo giờ, P2P, **không** SLA prod — **phương án B** |
| **Cấm** | Gắn GPU vào DMS 1U 350W · chạy YOLO 24/7 trên Vast/PAYG train làm endpoint app |

---

## 1. Ma trận phase → server (đọc một lần)

| Phase | Tên | App / API / DB | AI Vision | Train YOLO | Object ảnh | Ghi chú |
|-------|-----|----------------|-----------|------------|------------|---------|
| **0** | P1 online | **Vật lý** DMS Windows (hoặc VM cố định) | **Cloud** Azure OpenAI GPT-4o | — | Cloud/NAS | **Không GPU** |
| **1** | Gate | Giữ Phase 0 | Giữ Phase 0 | — | — | Chỉ quyết định go/no-go |
| **2** | Dataset + Train | Giữ DMS | Vẫn GPT (baseline) | **VNSO A100 PAYG** (`17`) *hoặc* Vast 4090 / lab | NAS / MinIO | Burst · tắt sau export |
| **3** | Hybrid infer | DMS + **queue** (Redis trên DMS hoặc VM) | **Worker GPU V100/L4 tháng** + GPT fallback | Retrain A100 PAYG | MinIO/NAS | Worker ≠ DMS |
| **4** | Prod local ổn định | DMS | **GPU cố định** V100/L4 · scale **A40** nếu >50 stream | A100 PAYG khi retrain | Object storage | Online = fallback · RTSP DC VN |

---

## 2. Chi tiết từng phase

### Phase 0 — P1 online (8–12 tuần)

| Vai trò | Server | Cloud / Vật lý | Spec tối thiểu |
|---------|--------|----------------|----------------|
| API · DB · Redis | **DMS hiện có** (Xeon, 16GB+) | **Vật lý** (hoặc VM DC) | Không cần GPU; nên nâng RAM nếu tải lớn |
| AI Vision #3 | Azure OpenAI | **Cloud managed** | GPT-4o / 4o-mini · alert ~$200/tháng |
| Ảnh gốc | MinIO / S3 / NAS | Cloud **hoặc** NAS vật lý | Không chạy model trên NAS |
| GPU | — | — | **Không thuê / không mua** |

**Không dùng:** Vast.ai, L4, A100 always-on, máy YOLO prod.

---

### Phase 1 — Gate

| Vai trò | Server |
|---------|--------|
| Tất cả | **Giữ nguyên Phase 0** |

Quyết định: **Giữ online** (dừng ở đây) · **Go local** (sang Phase 2) · Pivot prompt.

---

### Phase 2 — Gán nhãn + Train (sau Go local)

| Vai trò | Server | Cloud / Vật lý | Khuyến nghị |
|---------|--------|----------------|-------------|
| App / API | DMS | Vật lý | Không đụng |
| Gán nhãn (CVAT/Roboflow) | Laptop SV + **server nhẹ** hoặc SaaS | Vật lý workstation **hoặc** cloud tool | Data ảnh nên ở storage kiểm soát được |
| **Train detector** | **A100 40GB** · Docker · YOLOv8-nano | **Ưu tiên VNSO PAYG** (`17` `GPU-TRAIN-A100-40`) | **≤40kđ/lần** · 20–40 phút · tắt ngay sau export |
| Train (phương án B) | RTX 4090 Vast **hoặc** lab trường | Marketplace / vật lý | Chỉ khi data được xuất nước ngoài / giá tốt hơn |
| Baseline so sánh | Azure OpenAI | Cloud | Giữ GPT để so P/R vs YOLO |

**Cấm Phase 2:** Infer production 24/7 trên cùng máy đang train PAYG.

---

### Phase 3 — Hybrid (YOLO lọc + GPT khó)

| Vai trò | Server | Cloud / Vật lý | Spec |
|---------|--------|----------------|------|
| API · DB | DMS | Vật lý | Queue job (Redis) |
| **GPU Worker infer** | Máy **mới tách** | **Cloud VN SLA (VNSO)** *hoặc* GPU box vật lý | **V100 32GB / L4** · RAM ≥64 · NVMe · NVDEC (`17` · `10` §3) |
| GPT fallback | Azure OpenAI | Cloud | Chỉ low-confidence / class khó |
| Retrain | A100 PAYG VNSO / Vast / lab | Burst | Định kỳ · tắt sau export |

**Kiến trúc:**

```
[DMS vật lý — API/DB] --queue--> [GPU Worker cố định V100/L4] --detections--> DMS
         |                              ^
         +---- fallback ----> [Azure OpenAI cloud]
```

**Tối ưu CCTV:** Frame skip **1 FPS** + batching → **25–40** luồng / card (`17` §3).

---

### Phase 4 — Prod local ổn định

| Vai trò | Server | Cloud / Vật lý | Tier `10` / SKU `17` |
|---------|--------|----------------|----------------------|
| API | DMS | Vật lý | App only |
| Infer chính | **1× V100 32GB** hoặc **1× L4 24GB** | **Cloud managed VN (VNSO)** / vật lý | Prod chuẩn · `GPU-INF-V100` / `GPU-INF-L4` |
| Cao tải (>50 stream) | **1× A40 48GB** (hoặc 2× L4) | VNSO cam kết 12 tháng / cloud SLA | `GPU-INF-A40` · ~12,2 trđ/tháng |
| Train / retrain | A100 40GB PAYG | VNSO burst | Không phục vụ API |
| GPT | Azure | Cloud | Fallback |

---

## 3. Quyết định nhanh: Cloud hay Vật lý?

| Câu hỏi | → Chọn |
|---------|--------|
| Mới bắt đầu / UAT AI? | **Vật lý DMS** + **Cloud GPT** (Phase 0) |
| Train fine-tune nano, data ở VN? | **VNSO A100 PAYG** (`17`) |
| Train 1–2 tuần, data được xuất? | Vast cloud (phương án B) |
| Data đường bộ **cấm** ra nước ngoài? | Train **VNSO/lab VN** · Infer **DC VN** |
| Infer CCTV/dashcam 24/7? | **GPU cố định thuê tháng** V100/L4/A40 — **không Vast** |
| Tiết kiệm capex trước khi chốt P2? | Giữ Phase 0 online lâu hơn |

---

## 4. Checklist mua / thuê

### Phase 0
- [ ] DMS chạy API ổn (không gắn GPU)
- [ ] Azure OpenAI key + budget alert
- [ ] Object storage ảnh

### Phase 2
- [ ] Tài khoản VNSO PAYG A100-40 (hoặc Vast/lab B)
- [ ] Soft cap **≤40.000đ / lần** train · tắt sau export
- [ ] Pipeline export ONNX + TFLite + MLModel → registry

### Phase 3–4
- [ ] HĐ thuê tháng **GPU-INF-V100** / L4 (hoặc A40 nếu >50)
- [ ] Host GPU **tách** DMS (PSU/chỗ/nhiệt OK — `10` §5)
- [ ] Queue + worker + monitoring GPU · 1 FPS + batch
- [ ] VPN/firewall chỉ DMS → worker
- [ ] GPT vẫn bật fallback
- [ ] Chi tiết SKU/giá: **`17-GPU-VNSO-COST-STANDARD.md`**

---

## Liên kết

| File | Nội dung |
|------|----------|
| `17-GPU-VNSO-COST-STANDARD.md` | **SSOT SKU + giá VNSO** |
| `10-YOLO-SERVER-REQUIREMENTS.md` | Spec GPU / cấm DMS+GPU |
| `12-AI-COST-PHASES.md` | Chi phí theo phase |
| `09-PLAN-P1-V2.md` | Lịch P1 / V2 |
