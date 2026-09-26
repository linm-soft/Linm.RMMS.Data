# web-rmms-work — Feature Context (MFE Mobile)

> **Slug:** `web-rmms-work` · **Domain:** **Maintenance** (WorkOrder)  
> **Phase:** P1 mobile web · **packKind:** `list` · **changeScope:** `new_page` · **demo:** **N/A**  
> **Status:** sa confirmed · task `task_f0f9668d` · next team_lead  


> **MFE:** `Linm.Web.RMMS.Mobile` · std `/web-rmms-work` · phone `max-width: 430px`  
> **BFF HARD:** `Linm.RMMS.Mobile.Bff` · `VITE_MOBILE_API_URL=http://localhost:5202/mobile-bff/api/v1` · **cấm** web-bff client · **cấm** Route mobile-bff trên WebService web-bff controllers  
> **BE:** `Linm.RMMS.WebService` · DOMAIN-MAP Maintenance · **cấm ERP.*** · **cấm** iOS/Android edit

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | Tab **Work** — **Danh sách công việc**: list search/filter + rich cards + nav peer (tiến độ / nhật ký / chat / estimate). Copy icon/tab/layout 1-1 Android. Nhãn `useFormOptions()` / copy key — **cấm** hardcode tiếng Việt trên form. |
| Persona | Tuần đường (BDTX) · Tuần kiểm (Khu/VP) — hai lối Field; Work tab dùng chung list |
| Entry | Tab Work · Home tile «Công việc» |
| DoD P1 | WORK-L list live `GET maintenance/work-orders` · search/status/workType · cards · hub estimate · nav peer · Mobile.Bff only |
| Out P1 | Me* · feedback · cam-view · journal/kết ca/tồn tại/tần suất (`web-rmms-mobile-b…e`) · create WO form trên list · invent WorkListController |

## 2. Routes / screens

| id | productRoute | std mount | Surface |
|----|--------------|-----------|---------|
| WORK-L | `/work` | `/web-rmms-work` | List search · status/workType · cards · hub «Giao việc» → estimate · action icons |
| WORK-P* | `/work/progress` | peer `web-rmms-mnt-progress` | Cập nhật tiến độ — **peer** |
| WORK-G* | `/work/log` | peer `web-rmms-mnt-log` | Nhật ký RO — **peer** |
| WORK-C* | `/work/chat` | peer `web-rmms-mnt-chat` | Chat messages — **peer** |
| WORK-E* | `/work/estimate/:id` | peer estimate | Ước lượng / tạo WO — **peer** |

\* Peer: nav từ card; **không** gộp CRUD progress/log/chat vào DoD primary slug này. Không form tạo trên list (tạo từ estimate).

## 3. API (Mobile.Bff cite Live)

| Method | Path | Dùng |
|--------|------|------|
| GET | `maintenance/work-orders` | List · `search` · `status` · `workType` · `page=1` · `pageSize=50` |
| GET | `maintenance/work-orders/init-data` | Lookup status / workType (filter chips) |
| GET | `maintenance/work-orders/{id}` | Prefill header khi nav peer (cite) |

GPS: **không** bắt buộc trên list. Peer progress: `navigator.geolocation` → nhúng `Note` (GAP-MOB-MNT-PROG-GPS-01 — chưa cột GPS riêng).

## 4. Peers / sources

| Source | Note |
|--------|------|
| `SCREENS.md` Tab Work `/work` | SSOT list actions |
| `PLAN.md` Tab work · TASKS T-W5-01 | `MntListView` |
| `mnt-list.md` · `maintenance.md` | Peer CTX native / web Maintenance |
| `web-rmms-mnt-progress` · `web-rmms-mnt-log` · `web-rmms-mnt-chat` | Peer progress/log/chat |
| Prototype | `#sc-mnt-list` · `specs/mobile-p1/ui/prototype/android/index.html` |
| DOMAIN-MAP | row `web-rmms-work` → Maintenance · Live `work-orders` · MFE `/web-rmms-work` · **cấm** invent WorkListController |

## 5. Constraints HARD

- Phone frame 430 · Android 1-1 · **không** ERP Kind B desktop grid làm primary
- **Cấm** tab Cá nhân (`me`, `me-profile`, `me-settings`, `feedback`, `cam-view`)
- **Cấm** demo-json / itemsOrDemo / fake lat-lng
- BFF chỉ Mobile.Bff `:5202` · forms/init-data + domain routes trên Mobile.Bff
- **Cấm** invent path/controller theo slug `web-rmms-work`

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `done` | `done` | `2026-09-25T22:22:09.431Z` |
| mobile | — | — | — |
