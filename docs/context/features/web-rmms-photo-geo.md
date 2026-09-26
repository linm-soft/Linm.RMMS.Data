# Overlay chụp ảnh có tọa độ — Feature Context (Web Mobile)

> **Slug:** `web-rmms-photo-geo` · **Module:** File + AiVision (+ Incident/Patrol consumers) · **Phase:** Web P1  
> **Status:** Context · **packKind:** `list` · **changeScope:** `new_page`  
> **Entry:** overlay / sheet từ `incident-create` · `vis-capture` · `field-reflect` (`openCapture('photo-geo')`) — **không** row hub Field riêng  
> **MFE:** `Linm.Web.RMMS.Mobile` · phone `max-width: 430px` · std `/web-rmms-photo-geo` · `http://localhost:9301/web-rmms-photo-geo`  
> **BE:** `Linm.RMMS.WebService` · FileService `api/v1/files/*` · detect `api/v1/ai-vision/detect` · **cấm ERP.***  
> **BFF:** `Linm.RMMS.Mobile.Bff` · `VITE_MOBILE_API_URL=http://localhost:5202/mobile-bff/api/v1` · **cấm** web-bff client · **cấm** Route `mobile-bff` trên controller web-bff  
> **Peer native:** `photo-geo-capture.md` (mobile done) · Android proto `#sheet-pgc` · `DES-MOB-PGC`  
> **Queue:** `qlbd` · `/agent-qldb-workflow` · **cấm** sửa iOS/Android · **cấm** `/erp-feature`

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | Web Mobile: chụp still → FileService key → GPS **người đứng** + gim 1 điểm trên ảnh → tính distanceM + lat/lng **vật thể** on-device → HITL kéo pin map → trả `attachmentId` (+ object coords sidecar) cho consumer |
| Persona | Tuần đường / tuần kiểm hiện trường (Field BDTX · Khu/VP) |
| Khác GPS chỗ đứng | Consumers ghi chỗ đứng; pack này = tọa độ **vật thể** sau HITL |
| DoD P1 | Android 1-1 overlay · live camera/file · GPS deny block · HITL map · useFormOptions · **cấm** fake lat/lng · **cấm** persist presign URL |
| Design rule | Nhãn kit `useFormOptions()` — «Vị trí đã chốt» / «Khoảng cách ước lượng» / sai số — **không** tên thuật toán trên chrome |

## 2. Design / UI (zones)

| Zone id | Pattern | Notes |
|---------|---------|--------|
| `#sheet-pgc` · `DES-MOB-PGC` | Sheet overlay | Full-height khi capture · **ẩn** tab footer |
| `#capture-preview` | Camera still | Live in-app · **cấm** `<input type=file>` làm primary · **cấm** dialog máy ảnh hệ thống làm UX chính |
| `#btn-shutter` | Button | Chụp freeze still |
| `#gim-pin` | Tap 1 điểm | 1 pin · kéo lại · **cấm** multi-pin P1 |
| `#meta-card` · `#row-key` · `#row-photog` · `#row-distance` · `#row-object` | List rows | Key · GPS người · khoảng cách · tọa độ vật thể |
| `#map-confirm` · `MAP-HITL` · `#map-pin` | Map HITL | Reuse GIS clip / peer map host · kéo pin · `#btn-confirm-map` |
| `#btn-use` · `#btn-cancel` | CTA | Dùng ảnh / Hủy · enable sau confirm |
| `#sheet-pgc-review` | Review (optional) | Thumb host · không re-upload |
| `#modal-gps` · `DES-MOB-GPS-DENY` | Modal | Deny GPS → không mở capture geo |
| `#pgc-fullscreen` | HUD | Overlay capture fullscreen peer native |

**Out of scope:** tab Cá nhân (`me` · `me-profile` · `me-settings` · `feedback` · `cam-view`) · journal / kết ca / tồn tại / tần suất (tasks B–E) · invent `api/v1/photo-geo*` · edit native.

## 3. API (Live — cấm invent path riêng)

App base: `{VITE_MOBILE_API_URL}` = `http://localhost:5202/mobile-bff/api/v1`.

| Method | Path | Note |
|--------|------|------|
| POST | `files/init` | `purpose=photo-geo-capture` · `product=rmms` · JPEG |
| PUT | `files/{uploadId}/object` | bytes |
| POST | `files/commit` | → `attachmentId` |
| GET | `files/{id}/object` | preview JWT · **cấm** img src = resign URL |
| POST | `ai-vision/detect` | Lat/Lng = **vật thể HITL** · accuracy > 30 m → **không** detect · **cấm** gửi GPS người chụp |
| GET | `patrol/sessions` | optional Route/Km toast · **cấm** fake |
| POST | `incident/incidents` | consumer: `MediaIds` · `HasGps=true` · object lat **chưa** cột (GAP-PGC-BE-01) |

Object key SSOT: `{tmp\|data}/{appId}/{yyyy}/{companyId}/{featureId}/{uploadId}.{ext}` — client **không** tự đặt `objectKey` (FILE-ATT-08).

## 4. GPS / on-device (HARD)

| Rule | |
|------|--|
| Source | `navigator.geolocation` (+ heading/IMU khi browser cho phép) |
| Deny | Block shutter / Dùng ảnh / detect / mọi nút cần tọa độ · modal `DES-MOB-GPS-DENY` |
| Fake | **Cấm** tọa độ demo / fallback |
| Detect | Object lat/lng sau HITL · accuracy ≤ 30 m |
| Persist object coord | GAP-PGC-BE-01 — SA; P1 sidecar on-device + HasGps + MediaIds |

## 5. Gaps / UNCLEAR

| ID | Nội dung | Default |
|----|----------|---------|
| **GAP-PGC-BE-01** | Incident không cột object lat/lng | MediaIds + HasGps; SA nếu Schema_* |
| **GAP-PGC-DOMAIN-01** | DOMAIN-MAP thiếu slug `web-rmms-photo-geo` / `photo-geo-capture` | SA add row · File + AiVision cite Incident |
| **GAP-PGC-COMPASS-01** | La bàn lệch | Banner + HITL bắt buộc |
| **GAP-PGC-PLANE-01** | Giả định mặt đường | User kéo pin |
| FILE-ATT-08/09 | objectKey client / resign img | **cấm** |

## 6. Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `dev` | `confirmed` | `2026-09-26T00:45:00.000Z` |
| mobile | peer `photo-geo-capture` | `done` | `2026-09-13T03:20:00.000Z` |

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `done` | `done` | `2026-09-26T00:20:11.754Z` |
| mobile | — | — | — |
