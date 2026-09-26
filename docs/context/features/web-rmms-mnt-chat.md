# web-rmms-mnt-chat — Feature Context (MFE Mobile)

> **Slug:** `web-rmms-mnt-chat` · **Domain:** **Maintenance** (WorkOrder messages)  
> **Phase:** P1 mobile web · **packKind:** `list` · **changeScope:** `new_page` · **demo:** **N/A**  
> **Status:** data_analy · task `task_a2f6c6c0`

> **MFE:** `Linm.Web.RMMS.Mobile` · std `/web-rmms-mnt-chat` · phone `max-width: 430px`  
> **BFF HARD:** `Linm.RMMS.Mobile.Bff` · `VITE_MOBILE_API_URL=http://localhost:5202/mobile-bff/api/v1` · **cấm** web-bff client · **cấm** Route mobile-bff trên WebService web-bff controllers  
> **BE:** `Linm.RMMS.WebService` · DOMAIN-MAP Maintenance · **cấm ERP.*** · **cấm** iOS/Android edit

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | Tab Work peer — **Chat công việc** (`/work/chat`): thread bubble + composer paper-plane. Copy icon/tab/layout 1-1 Android. Nhãn `useFormOptions()` / copy key — **cấm** hardcode tiếng Việt trên form. |
| Persona | Tuần đường (BDTX) · Tuần kiểm (Khu/VP) — hai lối Field; Work chat dùng chung |
| Entry | Card action từ `web-rmms-work` (`#i-chat` / `btn-mnt-chat-{id}`) · product `/work/chat` |
| DoD P1 | WORK-C screen Live: GET/POST messages · kit `LinmChatThread` + `LinmChatComposer` · Mobile.Bff only · empty/error khi thiếu id / API fail |
| Out P1 | Me* · feedback · cam-view · list WO · progress write · nhật ký RO · estimate · journal/kết ca/tồn tại/tần suất (`web-rmms-mobile-b…e`) · invent `api/v1/mnt-chat` · kit SignalR |

## 2. Routes / screens

| id | productRoute | std mount | Surface |
|----|--------------|-----------|---------|
| WORK-C | `/work/chat` | `/web-rmms-mnt-chat` | Full screen chat · TopBar WO · bubbles · composer |
| WORK-L | `/work` | peer `web-rmms-work` | List entry `#i-chat` — **peer** |
| WORK-P* | `/work/progress` | peer `web-rmms-mnt-progress` | Tiến độ — **out** |
| WORK-G* | `/work/log` | peer `web-rmms-mnt-log` | Nhật ký — **out** |

## 3. API (Mobile.Bff cite Live)

| Method | Path | Dùng |
|--------|------|------|
| GET | `maintenance/work-orders/{id}/messages?type=message` | **Primary** — thread · `isMine` |
| POST | `maintenance/work-orders/{id}/messages` | Body `{ content, type: "message" }` |
| GET | `maintenance/work-orders/{id}` | Prefill TopBar subtitle (cite) |
| GET | `maintenance/work-orders/init-data` | Lookup status labels (display · opt) |

Domain: `api/v1/maintenance/work-orders/{id}/messages`. EntityType `work-order`. `parentId` = reply only (P1 optional).  
**Cấm** invent `api/v1/mnt-chat` · **cấm** toast-only thay screen.

### GPS

| Màn | Rule |
|-----|------|
| WORK-C chat | **không** bắt GPS (SCREENS) |
| Peer progress / photo-geo | peer · `navigator.geolocation` · deny → disable nút cần tọa độ |

### Realtime

P1 **HTTP only**. Hub = Notification peer — **cấm** kit start SignalR trên slug này.

## 4. Status VN map (header cite)

| API `status` | Chrome label key |
|--------------|------------------|
| `new` | work.status.new |
| `in_progress` | work.status.in_progress |
| `done` | work.status.done |
| `cancelled` | work.status.cancelled |

## 5. Peers / sources

| Source | Note |
|--------|------|
| `SCREENS.md` Tab Work `/work/chat` | SSOT GET/POST messages · GPS không |
| `PLAN.md` · TASKS chat | `MntChat` · peer `mnt-chat.md` |
| Peer CTX | `mnt-chat.md` · `web-rmms-work.md` · `web-rmms-mnt-log.md` · `web-rmms-mnt-progress.md` |
| Prototype | `#sc-mnt-chat` · android index (Design) |
| DOMAIN-MAP | Maintenance · Live messages peer `web-rmms-work` · **GAP** slug `web-rmms-mnt-chat` row |

## 6. Constraints HARD

- Phone frame 430 · Android 1-1 · **không** ERP Kind B desktop grid primary
- **Cấm** tab Cá nhân (`me`, `me-profile`, `me-settings`, `feedback`, `cam-view`)
- **Cấm** demo-json / fake lat-lng / toast-only chat
- BFF chỉ Mobile.Bff `:5202` · forms/init-data + domain routes trên Mobile.Bff
- **Cấm** invent path/controller theo slug `web-rmms-mnt-chat`
- Nhật ký tuần đường / kết ca / tồn tại / tần suất = `web-rmms-mobile-b…e` — **không** gộp
- **Cấm** sửa iOS/Android native

## 7. Queue / orchestrator

- Queue `qlbd` · slash `/agent-qldb-workflow` · **không** `/erp-feature`
- roleOnly pipeline: data_analy → po → design → sa → team_lead → dev → qa → review

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `done` | `done` | `2026-09-25T23:46:24.532Z` |
| mobile | — | — | — |
