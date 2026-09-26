# web-rmms-incident — Feature Context (MFE Mobile)

> **Slug:** `web-rmms-incident` · **Domain:** **Incident** (+ Patrol · Integration · AiVision · FileService · Maintenance cite)  
> **Phase:** P1 mobile web · **packKind:** `list` · **changeScope:** `new_page` · **demo:** **N/A**  
> **Status:** sa confirmed · task `task_b1cd136a` · next team_lead  

> **MFE:** `Linm.Web.RMMS.Mobile` · std `/web-rmms-incident` · phone `max-width: 430px`  
> **BFF HARD:** `Linm.RMMS.Mobile.Bff` · `VITE_MOBILE_API_URL=http://localhost:5202/mobile-bff/api/v1` · **cấm** web-bff client · **cấm** Route mobile-bff trên WebService web-bff controllers  
> **BE:** `Linm.RMMS.WebService` · DOMAIN-MAP · **cấm ERP.*** · **cấm** iOS/Android edit

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | Tab **Vấn đề / Sự cố**: **list** → **tạo** → **chi tiết** (1-1 Android). Copy icon/tab/layout. Nhãn `useFormOptions()` / copy key — **cấm** hardcode tiếng Việt trên form. |
| Persona | Tuần đường (BDTX) · Tuần kiểm (Khu/VP) — hai lối Field; Incident tab dùng chung list/create/detail |
| Entry | Tab Incident · Home «Ghi sự cố» / «Vấn đề» · FAB list |
| DoD P1 | INC-L list filter+cards · INC-N create (pick+form+GPS) · INC-D detail close · GPS deny gate · Mobile.Bff only · **cấm** fake GPS |
| Out P1 | Me* · feedback · cam-view · journal/kết ca/tồn tại/tần suất (`web-rmms-mobile-b…e`) · invent IncidentListController |

## 2. Routes / screens

| id | productRoute | std mount | Surface |
|----|--------------|-----------|---------|
| INC-L | `/incident` | `/web-rmms-incident` (list default) | List search/severity/status · FAB · cards · banner vis · map/chat nav |
| INC-N | `/incident/new` | deep `/web-rmms-incident/new` | Pick asset → form Ghi sự cố · GPS · create/draft offline |
| INC-D | `/incident/:id` | deep `/web-rmms-incident/:id` | Detail RO + close · nav estimate/map |
| INC-V* | `/incident/vis` | peer | Nhận diện — **peer** `vis-capture` (nav từ banner) |
| INC-C* | `/incident/:id/chat` | peer | Chat — **peer** |
| INC-E* | `/incident/estimate/:id` | peer | Estimate/WO — **peer** Maintenance/AiVision |

\* Peer routes: Design/PO có thể deep-link; **không** invent controller riêng slug này.

## 3. API (Mobile.Bff cite Live)

| Method | Path | Dùng |
|--------|------|------|
| GET | `incident/incidents` | List · `search` · `status` · `severity` · `page` · `pageSize=50` |
| POST | `incident/incidents` | Create · required `Title` · `RouteName` · `IncidentType` · `Status` · `RequestedAt` · `HasGps` khi có fix · **không** cột Lat trên Create |
| GET | `incident/incidents/{id}` | Detail |
| POST | `incident/incidents/{id}/close` | Đóng · `Note` optional |
| GET | `integration/asset-types` | Pick loại TS (create) |
| GET | `patrol/sessions` | Ca/tuyến/km (create) |
| POST | `ai-vision/uploads` (+ PUT) · `ai-vision/detect` | Ảnh / nhận diện optional |
| POST | `files/init` · PUT object · `files/commit` | Photo-geo overlay peer |

GPS: `navigator.geolocation` · deny → chặn nút cần tọa độ (Create / Detect / capture geo). Accuracy > 30 m → **không** POST detect.

## 4. Peers / sources

| Source | Note |
|--------|------|
| `SCREENS.md` Tab Incident | SSOT actions |
| `PLAN.md` Tab incident · TASKS T-W4-01/02/03 | List/Create/Detail views |
| `incident-list.md` · `incident-create.md` · `incident-detail.md` | Peer CTX native |
| `web-rmms-field-reflect` · `web-rmms-offline` · `web-rmms-home` | Reflect/offline/home entry |
| DOMAIN-MAP | **GAP** row `web-rmms-incident` → Incident · MFE `/web-rmms-incident` |

## 5. Constraints HARD

- Phone frame 430 · Android 1-1 · **không** ERP Kind B desktop grid làm primary
- **Cấm** tab Cá nhân (`me`, `me-profile`, `me-settings`, `feedback`, `cam-view`)
- **Cấm** demo-json / itemsOrDemo / fake lat-lng
- BFF chỉ Mobile.Bff `:5202` · forms/init-data + domain routes trên Mobile.Bff

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `done` | `done` | `2026-09-25T21:23:17.970Z` |
| mobile | — | — | — |
