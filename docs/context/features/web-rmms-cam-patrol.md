# Feature context — web-rmms-cam-patrol

> **Slug:** `web-rmms-cam-patrol` · **Title:** Camera tuần  
> **Status:** draft → data_analy · **packKind:** `list` · **changeScope:** `new_page`  
> **Demo:** N/A (field · **cấm** demo HTML / tọa độ mẫu SSOT trên MFE ship)  
> **MFE:** `Linm.Web.RMMS.Mobile` · khung phone `max-width` 430px · copy 1-1 UI Android · **cấm** nhét màn vào MFE desktop Asset  
> **BE:** `Linm.RMMS.WebService` · domain **Patrol** + **AiVision** + **Incident** · **cấm ERP.*** / Domains/Master  
> **BFF:** `Linm.RMMS.Mobile.Bff` · `mobile-bff/api/v1` `:5202` · **cấm** gọi web-bff · **cấm** Route `mobile-bff` trên controller web-bff  
> **mfeStdRoute:** `/web-rmms-cam-patrol` · **mfeStdUrl:** `http://localhost:9301/web-rmms-cam-patrol` · product route `/field/cam`  
> **Queue:** `/agent-qldb-workflow` · alias `web-rmms-cam-patrol` · **cấm** iOS/Android native

## 1. Mục tiêu

Trong ca Field đang mở: **finder camera + GPS chốt** → `POST ai-vision/detect` (frame + tọa độ) → card phát hiện → user **Xác nhận** tạo sự cố hoặc **Bỏ qua**. Entry từ hub Field (hai lối Tuần đường BDTX / Tuần kiểm Khu-VP) — **không** gộp nhật ký / kết ca / tồn tại / tần suất (giữ `web-rmms-mobile-b`…`e`).

## 2. Màn (SSOT screens)

| Id | Route | Việc |
|----|-------|------|
| CP-01 | `/field/cam` · alias std `/web-rmms-cam-patrol` | Full screen Camera tuần · finder + stamp · detect · confirm/skip |

**Out of scope:** tab Cá nhân (`/me` · me-profile · me-settings · feedback · `cam-view`) · `field-reflect` · `vis-capture` · `web-rmms-asset-ai` · web `camera-connect` · journal/kết ca/tần suất (waves B–E).

## 3. Nguồn SSOT (cite)

| Source | Path |
|--------|------|
| Screens | `docs/plan/web-rmms-mobile/SCREENS.md` · `/field/cam` Camera tuần |
| Plan / task | `docs/plan/web-rmms-mobile/PLAN.md` · `TASKS.md` T-W3-09 `CamPatrolView` |
| Peer CTX | `docs/context/features/cam-patrol.md` (DES-MOB-CAM-* · gaps FRAME) |
| Peers | `patrol-home` · `ai-vision` · `field-reflect` · `incident` · waves `web-rmms-mobile-a`…`e` |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` · Patrol · AiVision · Incident |
| Prototype cite | `specs/mobile-p1/ui/prototype/{android}/index.html` `#sc-cam-patrol` · **chỉ** Design 1-1 · **không** ship demo SSOT |

## 4. API (prefix)

| Surface | Path | Live? |
|---------|------|-------|
| Ca / tuyến stamp | `GET api/v1/patrol/sessions` · lọc `Đang tuần` | Live |
| Nhận diện | `POST api/v1/ai-vision/detect` · `Engine=P1` · `ImageBase64` + `Lat`/`Lng`/`AccuracyM` | Live (frame thật — GAP-MOB-CAM-FRAME-01) |
| Detection detail | `GET api/v1/ai-vision/detections/{id}` | Live |
| Xác nhận sự cố | `POST api/v1/incident/incidents` · `DetectionId` · `HasGps=true` | Live |
| Profile (optional stamp) | `GET auth/profile` | Live |
| Offline queue | local · peer `web-rmms-offline` | cite |
| Mobile BFF | `http://localhost:5202/mobile-bff/api/v1` · cùng `{resource}` | plan HARD |
| Web BFF | cite only · **cấm** MFE base | — |

**Cấm** invent `api/v1/cam-patrol` · **cấm** app `:5101` trực tiếp · **cấm** thêm Route `mobile-bff` trên WebService web-bff controllers.

## 5. HARD rules (product)

| Rule | |
|------|--|
| Nhãn | `useFormOptions()` / copy key · **cấm** hardcode tiếng Việt trên form |
| GPS | `navigator.geolocation` · deny **hoặc** accuracy > 30 m → **chặn** nút Nhận diện / Xác nhận cần tọa độ · **cấm** fake lat/lng |
| Frame | `ImageBase64` bắt buộc khi detect · fail = toast · **cấm** fallback class giả UI (GAP-MOB-CAM-FRAME-02) |
| Score chrome | **cấm** hiện % tin cậy trên ship UI (GAP-MOB-CAM-SCORE-01 · demo có 91% — Design ẩn) |
| Shell | Phone 430 · copy Android · **cấm** desktop MFE · **cấm** iOS/Android edit |
| BFF | ONLY `Linm.RMMS.Mobile.Bff` · `VITE_MOBILE_API_URL=http://localhost:5202/mobile-bff/api/v1` |
| BE | ONLY `Linm.RMMS.WebService` + DOMAIN-MAP domains |

## 6. Persona

| Màn | Ai |
|-----|-----|
| CP-01 | Nhân viên Field — Tuần đường (BDTX) hoặc Tuần kiểm (Khu/VP) trong ca `Đang tuần` |

## Version meta

| Field | Value |
|-------|-------|
| schemaVersion | `1` |
| packKind | `list` |
| changeScope | `new_page` |
| analyzedAt | `2026-09-25T18:05:00.000Z` |
| rulesVersion | `2026.09.25.2` |

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `done` | `done` | `2026-09-25T18:28:47.148Z` |
| mobile | — | — | — |
