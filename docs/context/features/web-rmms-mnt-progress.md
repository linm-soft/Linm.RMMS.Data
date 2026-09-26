# web-rmms-mnt-progress — Feature Context (MFE Mobile)

> **Slug:** `web-rmms-mnt-progress` · **Domain:** **Maintenance** (WorkOrder)  
> **Phase:** P1 mobile web · **packKind:** `list` · **changeScope:** `new_page` · **demo:** **N/A**  
> **Status:** data_analy · task `task_d447ee27`

> **MFE:** `Linm.Web.RMMS.Mobile` · std `/web-rmms-mnt-progress` · phone `max-width: 430px`  
> **BFF HARD:** `Linm.RMMS.Mobile.Bff` · `VITE_MOBILE_API_URL=http://localhost:5202/mobile-bff/api/v1` · **cấm** web-bff client · **cấm** Route mobile-bff trên WebService web-bff controllers  
> **BE:** `Linm.RMMS.WebService` · DOMAIN-MAP Maintenance · **cấm ERP.*** · **cấm** iOS/Android edit

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | Tab Work peer — **Tiến độ công việc** (`/work/progress`): cập nhật % · ghi chú · GPS nhúng Note · hoàn thành. Copy icon/tab/layout 1-1 Android. Nhãn `useFormOptions()` / copy key — **cấm** hardcode tiếng Việt trên form. |
| Persona | Tuần đường (BDTX) · Tuần kiểm (Khu/VP) — hai lối Field; Work tab dùng chung |
| Entry | Card action từ `web-rmms-work` (`#i-sync` / nav tiến độ) · route product `/work/progress` |
| DoD P1 | WORK-P form Live: GET WO detail · POST progress · POST complete · GPS device → Note · Mobile.Bff only |
| Out P1 | Me* · feedback · cam-view · list WO · nhật ký · chat · estimate · journal/kết ca/tồn tại/tần suất (`web-rmms-mobile-b…e`) · invent ProgressController |

## 2. Routes / screens

| id | productRoute | std mount | Surface |
|----|--------------|-----------|---------|
| WORK-P | `/work/progress` | `/web-rmms-mnt-progress` | Form/sheet cập nhật tiến độ |
| WORK-L | `/work` | peer `web-rmms-work` | List entry — **peer** |
| WORK-G* | `/work/log` | peer `web-rmms-mnt-log` | Nhật ký RO — **out** |
| WORK-C* | `/work/chat` | peer `web-rmms-mnt-chat` | Chat — **out** |

## 3. API (Mobile.Bff cite Live)

| Method | Path | Dùng |
|--------|------|------|
| GET | `maintenance/work-orders/{id}` | Prefill header WO |
| GET | `maintenance/work-orders/init-data` | Lookup status/workType (display map) |
| POST | `maintenance/work-orders/{id}/progress` | Primary — `ProgressPercent` · `Note?` · auto `new`→`in_progress` |
| POST | `maintenance/work-orders/{id}/complete` | Hoàn thành / 100% — `Note?` · server 100% + `done` |
| Device | `navigator.geolocation` · camera | GPS → nhúng `Note` (GAP-MOB-MNT-PROG-GPS-01) · deny chặn nút cần tọa độ |
| Optional | `ai-vision/uploads` / `files/*` | Media — GAP-MOB-MNT-PROG-MEDIA-01 (Progress DTO chưa MediaUrl) |

Live body: `ProgressWorkOrderRequest` = `{ ProgressPercent, Note? }` · `CompleteWorkOrderRequest` = `{ Note? }` · **không** lat/lng/media trên body.

## 4. Status VN map

| API `status` | List chrome (mnt-list) | init-data Label |
|--------------|------------------------|-----------------|
| `new` | Chờ xử lý | Mới |
| `in_progress` | Đang xử lý | Đang thực hiện |
| `done` | Đã hoàn thành | Hoàn thành |
| `cancelled` | Đã hủy | Hủy |

## 5. Peers / sources

| Source | Note |
|--------|------|
| `SCREENS.md` Tab Work `/work/progress` | SSOT actions |
| `PLAN.md` · TASKS T-W5-02 | `MntProgressView` · `mnt-progress.md` |
| Peer CTX | `mnt-progress.md` · `web-rmms-work.md` · `maintenance.md` |
| Prototype | `#sc-mnt-progress` · android `index.html` (Design) |
| DOMAIN-MAP | Maintenance · Live work-orders progress/complete |

## 6. Constraints HARD

- Phone frame 430 · Android 1-1 · **không** ERP Kind B desktop grid primary
- **Cấm** tab Cá nhân (`me`, `me-profile`, `me-settings`, `feedback`, `cam-view`)
- **Cấm** demo-json / fake lat-lng
- BFF chỉ Mobile.Bff `:5202`
- **Cấm** invent path/controller theo slug `web-rmms-mnt-progress`

## Gaps

| ID | Default |
|----|---------|
| GAP-MOB-MNT-PROG-GPS-01 | Không lat/lng trên progress body — GPS embed `Note` · deny → chặn nút cần tọa độ · **cấm** fake |
| GAP-MOB-MNT-PROG-MEDIA-01 | Progress DTO không MediaUrl — camera UX optional · SA mở rộng nếu Signed |
| GAP-MOB-MNT-PROG-LABEL-01 | init-data «Đang thực hiện» ≠ list «Đang xử lý» — PO/Design chốt 1 map |
| GAP-MOB-MNT-PROG-PACK-01 | packKind STATUS=`list` · surface form/sheet — Design chốt |

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `done` | `done` | `2026-09-25T22:53:34.265Z` |
| mobile | — | — | — |
