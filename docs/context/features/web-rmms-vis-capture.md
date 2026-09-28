# web-rmms-vis-capture — Feature Context (MFE Mobile)

> **Slug:** `web-rmms-vis-capture` · **Domain:** **AiVision** + **Incident** (+ Patrol cite)  
> **Phase:** P1 mobile web · **packKind:** `list` · **changeScope:** `edit_page` · **demo:** **N/A**  
> **Status:** data_analy PASS · task `task_0527afc8` · next `/agent-po` (delta Pattern B)  

> **MFE:** `Linm.Web.RMMS.Mobile` · std `/chup-hien-truong` · phone `max-width: 430px`  
> **BFF HARD:** `Linm.RMMS.Mobile.Bff` · `VITE_MOBILE_API_URL=http://localhost:5202/mobile-bff/api/v1` · **cấm** web-bff client · **cấm** Route mobile-bff trên WebService web-bff controllers  
> **BE:** `Linm.RMMS.WebService` · DOMAIN-MAP · **cấm ERP.*** · **cấm** iOS/Android edit  
> **Edit cite:** `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` · Pattern B · `VisCapturePage.tsx`  
> **Peer native:** `vis-capture.md` · Android `#sc-vis-capture` · `DES-MOB-VIS-CAPTURE` (align = MFE page · **cấm** mở proto android/ios)

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | Màn **Nhận diện sự cố** đã ship: chụp ảnh + GPS → `POST ai-vision/detect` → gắn/bỏ qua. **Edit:** Pattern B — Detect/Attach luôn bật khi idle; thiếu GPS/ảnh → bấm mới banner; chỉ `disabled` lúc `detecting`/`attaching`. Copy key `useFormOptions()` — **cấm** hardcode VN. |
| Persona | Tuần đường (BDTX) · Tuần kiểm (Khu/VP) — hai lối Field; màn này dưới tab Incident |
| Entry | Banner list Incident «Nhận diện» → `/incident/vis` · std `/chup-hien-truong` |
| DoD edit | Pattern B CTA · GPS on-click gate · Acc≤30 vẫn chặn POST trong handler · Mobile.Bff only · align MFE 430 · **cấm** fake GPS · **cấm** new tab/route |
| Out | Me* · feedback · cam-view · journal/kết ca/tồn tại/tần suất · Excel · invent VisCaptureController · web AiVision Kind B · typed `new_page` |

## 2. Routes / screens

| id | productRoute | std mount | Surface |
|----|--------------|-----------|---------|
| VIS | `/incident/vis` | `/chup-hien-truong` | Full screen capture + detect result + attach/skip |
| INC-L* | `/incident` | peer `web-rmms-incident` | Entry banner · back target |
| CAP* | `/capture` | peer photo-geo | `openCapture('vision')` overlay |

\* Peer: **không** invent controller riêng slug này. **Cấm** std path `/web-rmms-vis-capture`.

## 3. API (Mobile.Bff cite Live)

| Method | Path | Dùng |
|--------|------|------|
| POST | `ai-vision/uploads/init` | Init upload ảnh |
| PUT | `ai-vision/uploads/{id}/object` | PUT object |
| POST | `ai-vision/uploads/complete` | Complete → ImageUrl |
| POST | `ai-vision/detect` | Detect · Lat/Lng/AccuracyM · handler chỉ khi GPS + Acc ≤ 30 m |
| GET | `ai-vision/detections/{id}` | Optional reload detection |
| GET | `patrol/sessions` | Stamp tuyến/Km (optional RO) |
| POST | `incident/incidents` | Gắn sự cố · `DetectionId` · `HasGps=true` |
| GET | `integration/users` | Peer BFF forward nếu thiếu · VIS không picker |
| GET | `integration/road-routes/search` | Đã có · shared lookups · VIS RO |

GPS: `navigator.geolocation` · deny → banner on Detect/Attach click (Pattern B) · **không** khóa nút trước. Acc > 30 m → **không** POST detect.  
App base: `{BffBase}/mobile-bff/api/v1`. **Cấm** invent `api/v1/web-rmms-vis-capture` · **cấm** client web-bff.

## 4. Peers / sources

| Source | Note |
|--------|------|
| `SUBMIT-VALIDATE.md` | Pattern B · VisCapturePage row |
| `SCREENS.md` `/incident/vis` | SSOT actions |
| `PLAN.md` · TASKS `T-W4-04` | `VisCaptureView` · `vis-capture` |
| `vis-capture.md` · `ai-vision.md` · `incident-list.md` | Peer native + domain |
| `web-rmms-incident` · `photo-geo-capture` · `web-rmms-offline` | Entry / capture / offline queue |
| DOMAIN-MAP | AiVision (+ Incident/Patrol cite) |
| Code | `src/pages/WebRmmsVisCapture/VisCapturePage.tsx` · `paths.ts` |

## 5. Constraints HARD

- Phone frame 430 · **không** ERP Kind B desktop grid primary
- **Cấm** tab Cá nhân (`me`, `me-profile`, `me-settings`, `feedback`, `cam-view`)
- **Cấm** demo-json / itemsOrDemo / fake lat-lng / hardcode VN form labels
- BFF chỉ Mobile.Bff `:5202` · **cấm** web-bff client
- **Cấm** toolbar/export Excel · **cấm** typed CRUD `new_page`
- Align cuối: SSOT = page MFE · **cấm** mở prototype android/ios · **cấm** icon path mới
- Nhật ký / kết ca / tồn tại / tần suất giữ task khác

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `done` | `done` | `2026-09-27T11:40:35.047Z` |
| mobile | — | — | — |
