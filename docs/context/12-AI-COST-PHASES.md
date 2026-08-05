# RMMS — Chi phí AI theo giai đoạn (tối ưu vận hành)

> **SSOT chi tiết số:** `08-AI-TOKEN-COST-IMAGE-DIAGNOSIS.md` · `09-PLAN-P1-V2.md` · `10-YOLO-SERVER-REQUIREMENTS.md`  
> **SKU GPU + giá VNSO (train/infer):** **`17-GPU-VNSO-COST-STANDARD.md`**  
> **Server cloud/vật lý theo phase:** **`13-AI-SERVER-BY-PHASE.md`** (bắt buộc đọc khi mua/thuê máy)  
> **GPU burst quốc tế (phương án B):** [Vast.ai](https://cloud.vast.ai/) — giá marketplace động  
> **Canvas:** `rmms-ai-cost-phases` · `rmms-ai-server-phases`

---

## Nguyên tắc

1. **P1 online trước** — không GPU, alert token ~**$200/tháng**.  
2. **Gate go/no-go** trước khi mua/thuê GPU cố định.  
3. **Train theo đợt** — **ưu tiên VNSO A100 PAYG** (`17`) · phương án B: Vast 4090 / lab — **tắt máy sau export**.  
4. **Infer prod** trên host ổn định **thuê tháng** (V100/L4/A40 VN — `17`) — **không** 24/7 Vast/PAYG.  
5. **Hybrid:** YOLO lọc + GPT chỉ case khó → giảm 50–80% token khi volume lớn.
6. **DMS vật lý** luôn giữ API/DB — **không** gắn GPU vào chassis 1U 350W (`10` §5).
7. **Tách train ≠ infer** — Cost-effective MLOps (`17` §0).

---

## Server theo phase (tóm tắt)

| Phase | App/DB | Infer AI | Train |
|-------|--------|----------|-------|
| **0 P1** | Vật lý DMS | Cloud Azure GPT | — |
| **1 Gate** | Giữ 0 | Giữ 0 | — |
| **2 Train** | DMS | GPT (so sánh) | **A100 PAYG VNSO** (`17`) *hoặc* Vast/lab |
| **3 Hybrid** | DMS + queue | **GPU worker cố định V100/L4** + GPT fallback | Retrain A100 burst |
| **4 Prod** | DMS | V100/L4 · scale A40 nếu >50 stream | A100 PAYG khi cần |

→ Chi tiết bảng + checklist: **`13-AI-SERVER-BY-PHASE.md`** · SKU/giá: **`17`**.

---

## Chi phí nhanh

| Hạng mục | Ước lượng |
|----------|-----------|
| 1 ảnh GPT-4o high | ~**$0.01** |
| Triage low | ~**$0.005** |
| 20k ảnh + triage ~30% high | ~**$70** (thay vì ~$180) |
| 50k + triage | ~**$175** |
| **Train VNSO A100-40 · 20–40 phút** | **≤ ~40.000đ / lần** (`17`) |
| Train Vast 4090 · 40–80h (phương án B) | ~**$16–45** / chu kỳ (@ ~$0.25–0.55/h) |
| **Infer V100 server · tháng** | **~19,5–22 trđ / tháng** (`17`) |
| **Infer A40 · tháng (cam kết 12th)** | **~12,2 trđ / tháng** |
| 4090/A100 always-on 1 tháng | Đắt / không SLA đúng — **không khuyến nghị** prod |

---

## 5 giai đoạn

| # | Giai đoạn | Chi phí chính | Kết quả |
|---|-----------|---------------|---------|
| **0** | P1 online (8–12 tuần) | Token $50–200/tháng | Vận hành + UAT P/R |
| **1** | Gate | $0 | Giữ online **hoặc** Go local |
| **2** | Train burst (A100 VNSO) | **≤40kđ/lần** + đội gán nhãn | Model ONNX/TFLite/MLModel |
| **3** | Hybrid infer | Token giảm + GPU worker tháng | Bill ổn khi volume tăng |
| **4** | GPU prod cố định | V100/L4/A40 thuê tháng VN | SLA · RTSP nội địa |

---

## Checklist tối ưu

- [ ] Triage `detail: low` → chỉ ~20–40% gọi `high`  
- [ ] Resize ảnh ~1280 cạnh dài  
- [ ] Batch offline (không realtime từng frame)  
- [ ] Azure budget alert $200 (P1)  
- [ ] Train: A100 PAYG · tắt sau export (`17` checklist)  
- [ ] Prod: queue + worker tách DMS · 1 FPS + batch · GPT fallback  
- [ ] Không A100 always-on cho infer CCTV (dùng V100/L4 tháng)

---

## Liên kết

| File | Nội dung |
|------|----------|
| **`17-GPU-VNSO-COST-STANDARD.md`** | **SSOT SKU + giá GPU VN** |
| **`14-P2-AI-VISION-STANDARD.md`** | Chuẩn hóa P2 detect |
| `09-PLAN-P1-V2.md` | Gate + lịch V2 |
| `10-YOLO-SERVER-REQUIREMENTS.md` | Spec GPU (áp dụng mọi detector ONNX) |
| `13-AI-SERVER-BY-PHASE.md` | Cloud / vật lý / Vast |
| `08-AI-TOKEN-COST-IMAGE-DIAGNOSIS.md` | P1 + fallback GPT |
| `features/ai-vision.md` | Feature context UI/API |
