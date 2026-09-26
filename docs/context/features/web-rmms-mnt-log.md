# web-rmms-mnt-log — Feature Context (MFE Mobile)

> **Slug:** `web-rmms-mnt-log` · **Domain:** **Maintenance** (WorkOrder)  
> **Phase:** P1 mobile web · **packKind:** `list` · **changeScope:** `new_page` · **demo:** **N/A**  
> **Status:** team_lead **confirmed** · next `dev` · task `task_9337e60f`

> **MFE:** `Linm.Web.RMMS.Mobile` · std `/web-rmms-mnt-log` · phone `max-width: 430px`  
> **BFF HARD:** `Linm.RMMS.Mobile.Bff` · `VITE_MOBILE_API_URL=http://localhost:5202/mobile-bff/api/v1` · **cấm** web-bff client · **cấm** Route mobile-bff trên WebService web-bff controllers  
> **BE:** `Linm.RMMS.WebService` · DOMAIN-MAP Maintenance · **cấm ERP.*** · **cấm** iOS/Android edit

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | Tab Work peer — **Nhật ký công việc** (`/work/log`): màn **readonly** timeline xử lý WO. Copy icon/tab/layout 1-1 Android. Nhãn `useFormOptions()` / copy key — **cấm** hardcode tiếng Việt trên form. |
| Persona | Tuần đường (BDTX) · Tuần kiểm (Khu/VP) — hai lối Field; Work tab dùng chung |
| Entry | Card action từ `web-rmms-work` (`#i-list` / nav nhật ký) · route product `/work/log` |
| DoD P1 | WORK-G screen Live: GET WO detail · client-derive timeline · Mobile.Bff only · empty khi thiếu id / API fail |
| Out P1 | Me* · feedback · cam-view · list WO · progress write · chat composer · estimate · journal/kết ca/tồn tại/tần suất (`web-rmms-mobile-b…e`) · invent `…/logs` history API |

## 2. Routes / screens

| id | productRoute | std mount | Surface |
|----|--------------|-----------|---------|
| WORK-G | `/work/log` | `/web-rmms-mnt-log` | Screen/sheet nhật ký **readonly** |
| WORK-L | `/work` | peer `web-rmms-work` | List entry — **peer** |
| WORK-P* | `/work/progress` | peer `web-rmms-mnt-progress` | Tiến độ write — **out** |
| WORK-C* | `/work/chat` | peer `web-rmms-mnt-chat` | Chat — **out** |

## 3. API (Mobile.Bff cite Live)

| Method | Path | Dùng |
|--------|------|------|
| GET | `maintenance/work-orders/{id}` | **Primary** — prefill header + derive timeline |
| GET | `maintenance/work-orders/init-data` | Lookup status labels (display map · opt) |
| Device | — | **không** camera/GPS trên slug nhật ký (SCREENS) |

Live: `WorkOrdersController` **không** có `GET …/logs` · `GET …/progress-history` · `GET/POST …/comments`.  
P1: **client derive** timeline từ field Signed trên `WorkOrderDto` — **cấm** invent `api/v1/mnt-log` / `…/logs`.

### Derive timeline P1 (SSOT)

| Order | Condition | Row title key / copy | At |
|-------|-----------|----------------------|----|
| 1 | always | Tạo công việc | `CreatedAt` |
| 2 | `DueAt` set | Hạn: {fmt} | `DueAt` |
| 3 | `Description` non-empty | Mô tả: {Description} | `CreatedAt` |
| 4 | `ProgressPercent` > 0 **hoặc** status `in_progress`/`done` | Tiến độ hiện tại {n}% | `UpdatedAt` |
| 5 | `Note` non-empty | {Note} | `UpdatedAt` |
| 6 | status `done` | Hoàn thành | `UpdatedAt` |

Sort default **newest-first** (Design chốt).

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
| `SCREENS.md` Tab Work `/work/log` | SSOT readonly |
| `PLAN.md` · TASKS T-W5-03 | `MntLogView` · `mnt-log.md` |
| Peer CTX | `mnt-log.md` · `web-rmms-work.md` · `web-rmms-mnt-progress.md` · `maintenance.md` |
| Prototype | `#sc-mnt-log` · android `index.html` (Design) |
| DOMAIN-MAP | Maintenance · Live work-orders GET/{id} · peer progress |

## 6. Constraints HARD

- Phone frame 430 · Android 1-1 · **không** ERP Kind B desktop grid primary
- **Cấm** tab Cá nhân (`me`, `me-profile`, `me-settings`, `feedback`, `cam-view`)
- **Cấm** demo-json / fake lat-lng / Primary write CTA trên slug này
- BFF chỉ Mobile.Bff `:5202`
- **Cấm** invent path/controller theo slug `web-rmms-mnt-log`
- Nhật ký tuần đường / kết ca / tồn tại / tần suất = `web-rmms-mobile-b…e` — **không** gộp

## Gaps

| ID | Default |
|----|---------|
| GAP-MOB-MNT-LOG-HIST-01 | Không GET history / `WorkOrderProgress` live — P1 derive GetById · SA mở rộng nếu Signed |
| GAP-MOB-MNT-LOG-SCR-01 | Demo native = toast only → Design tạo `#sc-mnt-log` · `DES-MOB-MNT-LOG` / reviewUrl |
| GAP-MOB-MNT-LOG-LABEL-01 | init-data ≠ list chrome status VN — PO/Design 1 map · `useFormOptions` |
| GAP-MOB-MNT-LOG-ENTRY-01 | Peer native `#i-list` trên card `done` — PO chốt entry mọi status hay chỉ done |
| GAP-MOB-MNT-LOG-CMT-01 | Comments = `mnt-chat` / `web-rmms-mnt-chat` — **cấm** gộp composer |
| GAP-MOB-MNT-LOG-PACK-01 | packKind STATUS=`list` · surface screen/sheet — Design chốt |
| GAP-MOB-MNT-LOG-DMAP-01 | DOMAIN-MAP chưa có row slug riêng — SA cite `web-rmms-work` / thêm row khi Signed |

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `done` | `done` | `2026-09-25T23:21:41.855Z` |
| mobile | — | — | — |
