# web-rmms-vis-capture — Feature Context (MFE Mobile)

> **Slug:** `web-rmms-vis-capture` · **Domain:** **AiVision** + **Incident** (+ Patrol cite)  
> **Phase:** P1 mobile web · **packKind:** `list` · **changeScope:** `new_page` · **demo:** **N/A**  
> **Status:** team_lead confirmed · task `task_45fa6cfc` · next `/agent-dev`  

> **MFE:** `Linm.Web.RMMS.Mobile` · std `/web-rmms-vis-capture` · phone `max-width: 430px`  
> **BFF HARD:** `Linm.RMMS.Mobile.Bff` · `VITE_MOBILE_API_URL=http://localhost:5202/mobile-bff/api/v1` · **cấm** web-bff client · **cấm** Route mobile-bff trên WebService web-bff controllers  
> **BE:** `Linm.RMMS.WebService` · DOMAIN-MAP · **cấm ERP.*** · **cấm** iOS/Android edit  
> **Peer native:** `vis-capture.md` · Android `#sc-vis-capture` · `DES-MOB-VIS-CAPTURE`

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | Màn **Nhận diện sự cố** (`/incident/vis`): chụp ảnh + GPS chốt → `POST ai-vision/detect` → hiện phân loại/mức → **Gắn sự cố** (`POST incident/incidents` + `DetectionId`) hoặc **Bỏ qua**. Copy 1-1 UI Android (icon/tab/layout). Nhãn `useFormOptions()` / copy key — **cấm** hardcode tiếng Việt trên form. |
| Persona | Tuần đường (BDTX) · Tuần kiểm (Khu/VP) — hai lối Field; màn này dưới tab Incident |
| Entry | Banner list Incident «Nhận diện» → `/incident/vis` · Home/AI hub peer · std `/web-rmms-vis-capture` |
| DoD P1 | PhotoRow + GPS · detect · result rows · attach incident · skip · GPS deny gate · accuracy ≤ 30 m · Mobile.Bff only · **cấm** fake GPS · **cấm** on-device detect |
| Out P1 | Me* · feedback · cam-view · journal/kết ca/tồn tại/tần suất (`web-rmms-mobile-b…e`) · cam-patrol finder · det-hitl · invent VisCaptureController · web AiVision Kind B |

## 2. Routes / screens

| id | productRoute | std mount | Surface |
|----|--------------|-----------|---------|
| VIS | `/incident/vis` | `/web-rmms-vis-capture` | Full screen capture + detect result + attach/skip |
| INC-L* | `/incident` | peer `web-rmms-incident` | Entry banner · back target |
| CAP* | `/capture` | peer photo-geo | `openCapture('vision')` overlay |

\* Peer: **không** invent controller riêng slug này.

## 3. API (Mobile.Bff cite Live)

| Method | Path | Dùng |
|--------|------|------|
| POST | `ai-vision/uploads/init` | Init upload ảnh |
| PUT | `ai-vision/uploads/{id}/object` | PUT object |
| POST | `ai-vision/uploads/complete` | Complete → ImageUrl |
| POST | `ai-vision/detect` | Detect · body Lat/Lng/AccuracyM · **chỉ** khi GPS + accuracy ≤ 30 m |
| GET | `ai-vision/detections/{id}` | Optional reload detection |
| GET | `patrol/sessions` | Stamp tuyến/Km (optional RO) |
| POST | `incident/incidents` | Gắn sự cố · `DetectionId` · `HasGps=true` · Title/Type từ DefectClass · Route từ session |

GPS: `navigator.geolocation` · deny → chặn Detect / Gắn / capture geo. Accuracy > 30 m → **không** POST detect.  
App base: `{BffBase}/mobile-bff/api/v1`. **Cấm** invent `api/v1/web-rmms-vis-capture` · **cấm** client web-bff.

## 4. Peers / sources

| Source | Note |
|--------|------|
| `SCREENS.md` `/incident/vis` | SSOT actions |
| `PLAN.md` · TASKS `T-W4-04` | `VisCaptureView` · `vis-capture` |
| `vis-capture.md` · `ai-vision.md` · `incident-list.md` | Peer native + domain |
| `web-rmms-incident` · `photo-geo-capture` · `web-rmms-offline` | Entry / capture / offline queue |
| DOMAIN-MAP | AiVision (+ Incident/Patrol cite) · **GAP** row `web-rmms-vis-capture` |
| Prototype | `specs/mobile-p1/ui/prototype/android/index.html` `#sc-vis-capture` |

## 5. Constraints HARD

- Phone frame 430 · Android 1-1 · **không** ERP Kind B desktop grid primary
- **Cấm** tab Cá nhân (`me`, `me-profile`, `me-settings`, `feedback`, `cam-view`)
- **Cấm** demo-json / itemsOrDemo / fake lat-lng / hardcode VN form labels
- BFF chỉ Mobile.Bff `:5202` · forms/init-data + domain routes trên Mobile.Bff
- Nhật ký / kết ca / tồn tại / tần suất giữ task `web-rmms-mobile-b…e`

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `done` | `done` | `2026-09-25T21:52:07.478Z` |
| mobile | — | — | — |
