# web-rmms-mnt-progress — Feature Context (MFE Mobile)

> **Slug:** `web-rmms-mnt-progress` · **Domain:** **Maintenance** (WorkOrder)  
> **Phase:** P1 mobile web · **packKind:** `list` · **changeScope:** `edit_page` · **demo:** **N/A**  
> **Status:** dev confirmed · task `task_48aba3d5` · next `/agent-qa*`  
> **Cite Delta HARD:** `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` · Pattern B · **cấm** typed CRUD `new_page`

> **MFE:** `Linm.Web.RMMS.Mobile` · std `/cong-viec/tien-do` · phone `max-width: 430px`  
> **mfeStdUrl:** `http://localhost:9301/cong-viec/tien-do` · **cấm** mount `/web-rmms-mnt-progress`  
> **BFF HARD:** `Linm.RMMS.Mobile.Bff` · `VITE_MOBILE_API_URL=http://localhost:5202/mobile-bff/api/v1` · **cấm** web-bff client · **cấm** Route mobile-bff trên WebService web-bff controllers  
> **BE:** `Linm.RMMS.WebService` · DOMAIN-MAP Maintenance · **cấm ERP.*** · **cấm** iOS/Android edit

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | Tab Work peer — **Tiến độ công việc** (`/work/progress`): cập nhật % · ghi chú · GPS nhúng Note · hoàn thành. Copy icon/tab/layout 1-1 Android. Nhãn `useFormOptions()` / copy key — **cấm** hardcode tiếng Việt trên form. |
| Persona | Tuần đường (BDTX) · Tuần kiểm (Khu/VP) — hai lối Field; Work tab dùng chung |
| Entry | Card action từ `web-rmms-work` (`#i-sync` / nav tiến độ) · route product `/work/progress` |
| DoD P1+edit | WORK-P Live giữ · **+ Pattern B validate** (SUBMIT-VALIDATE) · GPS deny báo lúc bấm · `capture="environment"` · Mobile.Bff only |
| Out P1 | Me* · feedback · cam-view · list WO · nhật ký · chat · estimate · journal/kết ca/tồn tại/tần suất (`web-rmms-mobile-b…e`) · invent ProgressController · Excel/toolbar export |

## 2. Routes / screens

| id | productRoute | std mount | Surface |
|----|--------------|-----------|---------|
| WORK-P | `/work/progress` | `/cong-viec/tien-do` | Form/sheet cập nhật tiến độ |
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
| Device | `navigator.geolocation` · camera | GPS → nhúng `Note` · deny → báo lúc bấm (Pattern B) · **cấm** fake |
| Optional | `ai-vision/uploads` / `files/*` | Media — GAP-MOB-MNT-PROG-MEDIA-01 (Progress DTO chưa MediaUrl) |

Live body: `ProgressWorkOrderRequest` = `{ ProgressPercent, Note? }` · `CompleteWorkOrderRequest` = `{ Note? }` · **không** lat/lng/media trên body.

**Toolbar/export:** N/A — SUBMIT-VALIDATE override · **không** Excel · **không** pack toolbar export.

## 4. Status VN map

| API `status` | List chrome (mnt-list) | init-data Label |
|--------------|------------------------|-----------------|
| `new` | Chờ xử lý | Mới |
| `in_progress` | Đang xử lý | Đang thực hiện |
| `done` | Đã hoàn thành | Hoàn thành |
| `cancelled` | Đã hủy | Hủy |

Badge SSOT (PO CLOSED): list chrome map.

## 5. Peers / sources

| Source | Note |
|--------|------|
| `SCREENS.md` Tab Work `/work/progress` | SSOT actions |
| `SUBMIT-VALIDATE.md` | **edit_page** Pattern B · slug row `MntProgressPage.tsx` |
| Peer CTX | `mnt-progress.md` · `web-rmms-work.md` · `maintenance.md` |
| Prototype | `#sc-mnt-progress` · keep existing Design artifact |
| DOMAIN-MAP | Maintenance · Live work-orders progress/complete |
| Code SSOT | `src/pages/WebRmmsMntProgress/MntProgressPage.tsx` |

## 6. Constraints HARD

- Phone frame 430 · Android 1-1 · **không** ERP Kind B desktop grid primary
- **Cấm** tab Cá nhân (`me`, `me-profile`, `me-settings`, `feedback`, `cam-view`)
- **Cấm** demo-json / fake lat-lng
- BFF chỉ Mobile.Bff `:5202` · mọi call `mobileApiBase()` / `VITE_MOBILE_API_URL`
- **Cấm** invent path/controller theo slug `web-rmms-mnt-progress`
- **Cấm** `new_page` typed CRUD trên task này · **cấm** thêm tab/route · **cấm** vẽ icon mới
- Align cuối: `/align-mobile-to-mfe` · SSOT = page MFE đã có · **không** mở prototype android/ios

## 7. § Delta Current vs New (edit_page · task_f99adc72)

Cite: `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` · erp-form-context Pattern B.

| Zone / field | Current (Live code) | New (this task) |
|--------------|---------------------|-----------------|
| `submitProgress` / `submitComplete` | `disabled={ctasDisabled}` · `ctasDisabled = !gpsReady \|\| saving \|\| !wo` | **Chỉ** `disabled={saving}` (hoặc `!wo` khi chưa load) · **cấm** khóa vì thiếu GPS |
| GPS gate | Pattern B shipped (`disabled={saving}` · banner on click) | Bấm → `validationAttempted` · banner `string[]` (GPS deny / thiếu) · **cấm** fake coords |
| Pattern B validate | Không banner client · early return im | Banner + inline + scroll lỗi đầu · API 4xx/5xx = toast only |
| `input[type=file]` photos | `accept="image/*"` · **không** `capture` | Thêm `capture="environment"` |
| Route / mfeStdUrl | Code: `/cong-viec/tien-do` | Giữ · CTX/STATUS align · **cấm** `/web-rmms-mnt-progress` |
| API / DTO / BFF | Live progress/complete · Mobile.Bff | **Không đổi** · **cấm** invent MediaUrl / lat body |
| Toolbar/export | N/A | N/A · **không** Excel |
| User/route SearchInput | N/A trên WORK-P | N/A (SUBMIT-VALIDATE row chỉ CTA + capture) |
| PO/Design artifacts | Existing confirmed | **Keep** · pipeline re-confirm trên edit |

## Gaps

| ID | Default |
|----|---------|
| GAP-MOB-MNT-PROG-GPS-01 | Không lat/lng trên progress body — GPS embed `Note` · deny → báo lúc bấm (Pattern B) · **cấm** fake · **cấm** pre-disable CTA |
| GAP-MOB-MNT-PROG-MEDIA-01 | Progress DTO không MediaUrl — camera local + `capture` · SA Signed nếu persist |
| GAP-MOB-MNT-PROG-LABEL-01 | init-data ≠ list chrome — PO CLOSED list chrome |
| GAP-MOB-MNT-PROG-PACK-01 | packKind=`list` · surface form/sheet |
| GAP-MEDIA Signed | defer P2 |

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `done` | `done` | `2026-09-27T14:14:01.067Z` |
| mobile | — | — | — |
