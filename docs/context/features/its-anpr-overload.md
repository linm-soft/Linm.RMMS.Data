# ITS ANPR — Biển số · Cục Đăng kiểm · Xác nhận lỗi

> **Slug:** `its-anpr-overload` · **Module:** AiVision × Iot × Incident  
> **Phase:** P1 **Demo UI** · **P2 BE+MFE** (SSOT **[`../18-ITS-ANPR-OVERLOAD-SPEC.md`](../18-ITS-ANPR-OVERLOAD-SPEC.md)**)  
> **Status:** Demo · backlog **V2-C2** trong [`../09-PLAN-P1-V2.md`](../09-PLAN-P1-V2.md)  
> **Kind:** **B** list feed + **D** slideout Confirm  
> **Demo:** `Linm.RMMS.Demo/.../ai-vision/its-anpr-overload.html` · `/demo/p/its-anpr-overload`  
> **≠** `its-traffic-detect` (biển báo/cọc) · `toc` (ùn tắc) · `incident` (Vấn đề chung)

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | Camera gửi **biển số + tốc độ** (+ WIM) → gọi **Cục Đăng kiểm** (số trục · GVW · payload) → **HITL xác nhận lỗi** |
| Persona | ITS ops · tuần đường · thanh tra tải trọng |
| Outcome | Candidate vi phạm → Confirm / Dismiss (P1 mock · **P2 → Incident**) |
| Engine P1 | ANPR + WIM mock · registry local |
| Engine P2 | Registry API + rule SPEED / OVERLOAD_* — chi tiết **`18`** |
| IdCode | `ANPR-*` |

## 2. Flow UI (3 bước)

1. **Camera ANPR** — feed list: biển · tốc độ · WIM · camera Km · status Pending  
2. **Cục Đăng kiểm** — latency mock lookup: chủ xe · trục · GVW / payload · hạn kiểm  
3. **Xác nhận lỗi** — rule: `SPEED` · `OVERLOAD_GVW` · `OVERLOAD_PAYLOAD` · `NO_REGISTRY` → Confirm / Bỏ qua

## 3. P2 (giai đoạn 2)

> Spec đầy đủ: **[`18-ITS-ANPR-OVERLOAD-SPEC.md`](../18-ITS-ANPR-OVERLOAD-SPEC.md)**  
> Plan: `09` §3.2 (IN **ITS ANPR**) · §3.5 **V2-C2** · §4 hạng mục **3d** · Deliverable `04` Phase 2.

| Sprint gợi ý | Việc |
|--------------|------|
| P2-ANPR-A | Schema + ingest + list |
| P2-ANPR-B | Registry adapter + rule |
| P2-ANPR-C | MFE parity demo · Confirm → Incident |
| P2-ANPR-D | Live camera/WIM · UAT · Signed |

## 4. API (skeleton — demo không gọi)

| Method | Path |
|--------|------|
| POST | `/api/v1/its/anpr/events` |
| GET | `/api/v1/its/anpr/events` |
| GET | `/api/v1/registry/vehicles/{plate}` |
| POST | `/api/v1/its/anpr/events/{id}/confirm` · `/dismiss` |

## 5. Gaps

| ID | Notes |
|----|-------|
| GAP-ANPR-01 | BE MISSING — demo localStorage only → **P2** |
| GAP-ANPR-02 | Registry = mock; nối API Cục Đăng kiểm → **P2** |
| GAP-ANPR-03 | Confirm chưa tạo `incident` thật → **P2** |
| GAP-AI-HITL-01 | Slideout Confirm/Dismiss OK trên demo |

## 6. Signed checklist (demo)

- [ ] Camera gửi biển số + tốc độ (+ WIM)  
- [ ] Tra cứu Cục Đăng kiểm (trục · tải)  
- [ ] Hệ thống đề xuất lỗi tốc độ / quá tải  
- [ ] HITL xác nhận / bỏ qua  
