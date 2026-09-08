# Camera security — vault, service tách, resign URL

> **Đối tượng:** Architect · BE · FE Camera · TOC  
> **Ngày:** 2026-09-06  
> **Plan SSOT:** [`../plan/camera-security/PLAN.md`](../plan/camera-security/PLAN.md)  
> **Nguồn:** `features/camera-connect.md` · `21-CAMERA-HLS-WEBRTC-GATEWAY.md` · FileService resign · `06-SECURITY-RATELIMIT.md`  
> **ATTT VN:** AEAD at rest = bằng chứng **cấp 2** Phụ lục II 1.4.1 (bảo mật dữ liệu) — review `/review-data-security-l1-l2`. **Không** nhầm P1/P2 live với cấp độ 1/2 luật.

---

**Chốt:** Password thiết bị **mã hóa 2 chiều (AES-GCM + kid)** trong Camera Service. Hikvision **không** cấp token bền thay password. Event inbound dùng **API-key + IP camera** (`POST /api/v1/camera-events/ingest`) — không JWT. Browser chỉ nhận **resign URL** (TTL) hoặc **grant dashboard** cho tường hình.

| Wave | Việc |
|------|------|
| S1 | Encrypt at rest ngay WebService · không trả pass API · snapshot sau Lưu |
| S2 | Grant `session` + resign snapshot |
| S3 | Host `Linm.RMMS.Camera` (tách SDK + vault) |
| S4 | Grant `dashboard` unlimit cho màn hình |
| S5 | Cùng token với live HLS/WebRTC (plan 21) |

Entry: `/agent-dev-camera-connect` (S1–S2) · `/new-service` (S3).  
**Ingest inbound:** `X-Api-Key` validate **Auth + bind camera IP** + rate limit — task [`camera-ingest-apikey.md`](../../specs/camera-connect/task/camera-ingest-apikey.md) (`task_c8a1e4b2`). **Cấm** JWT từ cam.
