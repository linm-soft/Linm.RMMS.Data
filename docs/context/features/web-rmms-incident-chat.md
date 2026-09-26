# web-rmms-incident-chat — Feature Context (MFE Mobile)

> **Slug:** `web-rmms-incident-chat` · **Domain:** **Incident** (Incident messages)  
> **Phase:** P1 mobile web · **packKind:** `list` · **changeScope:** `new_page` · **demo:** **N/A**  
> **Status:** data_analy · task `task_2307d3a0`

> **MFE:** `Linm.Web.RMMS.Mobile` · std `/web-rmms-incident-chat` · phone `max-width: 430px`  
> **BFF HARD:** `Linm.RMMS.Mobile.Bff` · `VITE_MOBILE_API_URL=http://localhost:5202/mobile-bff/api/v1` · **cấm** web-bff client  
> **BE:** `Linm.RMMS.WebService` · DOMAIN-MAP Incident · **cấm ERP.*** · **cấm** iOS/Android edit

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | Peer Incident — **Chat sự cố** (`/incident/:id/chat`): thread bubble + composer paper-plane. Copy icon/layout 1-1 Android. Nhãn `useFormOptions()` / copy key — **cấm** hardcode tiếng Việt trên form. |
| Persona | Tuần đường · tuần kiểm · điều phối hiện trường |
| Entry | Card action từ `web-rmms-incident` list (`#i-chat` / `btn-inc-chat-{id}`) · product `/incident/{id}/chat` |
| DoD P1 | INC-C screen Live: GET/POST messages · kit `LinmChatThread` + `LinmChatComposer` · Mobile.Bff only · empty/error khi thiếu id / API fail |
| Out P1 | Me* · feedback · cam-view · create/detail deep · vis-capture · estimate · journal/kết ca/tồn tại/tần suất (`web-rmms-mobile-b…e`) · invent `api/v1/incident-chat` · kit SignalR · toast-only |

## 2. Routes / screens

| id | productRoute | std mount | Surface |
|----|--------------|-----------|---------|
| INC-C | `/incident/:id/chat` | `/web-rmms-incident-chat` | Full screen chat · TopBar incident · bubbles · composer |
| INC-L | `/incident` | peer `web-rmms-incident` | List entry `#i-chat` — **peer** |
| INC-D* | `/incident/:id` | peer | Detail — **out** chat |
| INC-N* | `/incident/new` | peer | Create — **out** |

## 3. API (Mobile.Bff cite Live)

| Method | Path | Dùng |
|--------|------|------|
| GET | `incident/incidents/{id}/messages?type=message` | **Primary** — thread · `isMine` |
| POST | `incident/incidents/{id}/messages` | Body `{ content, type: "message" }` |
| GET | `incident/incidents/{id}` | Prefill TopBar subtitle (cite) |
| GET | `incident/incidents/init-data` | Lookup status labels (display · opt) |

Domain: `api/v1/incident/incidents/{id}/messages`. EntityType `incident`. `parentId` = reply only (P1 optional).  
Controller live: `IncidentsController` GET/POST `{id}/messages`.  
**Cấm** invent `api/v1/incident-chat` / `…/comments` · **cấm** toast-only thay screen.

### GPS

| Màn | Rule |
|-----|------|
| INC-C chat | **không** bắt GPS (SCREENS) |
| Peer create / photo-geo / vis | peer · `navigator.geolocation` · deny → disable nút cần tọa độ |

### Realtime

P1 **HTTP only**. Hub = Notification peer — **cấm** kit start SignalR trên slug này.

## 4. Status VN map (header cite)

| API `status` | Chrome label key |
|--------------|------------------|
| `new` | incident.status.new |
| `in_progress` | incident.status.in_progress |
| `closed` | incident.status.closed |
| `cancelled` | incident.status.cancelled |

## 5. Peers / sources

| Source | Note |
|--------|------|
| `SCREENS.md` `/incident/:id/chat` | SSOT GET/POST messages · GPS không |
| Peer CTX | `incident-chat.md` · `web-rmms-incident.md` · `incident-list.md` |
| Prototype | `#sc-incident-chat` · android index (Design) |
| DOMAIN-MAP | Incident · Live messages peer `web-rmms-incident` · **GAP** slug `web-rmms-incident-chat` row |

## 6. Constraints HARD

- Phone frame 430 · Android 1-1 · **không** ERP Kind B desktop grid primary
- **Cấm** tab Cá nhân (`me`, `me-profile`, `me-settings`, `feedback`, `cam-view`)
- **Cấm** demo-json / fake lat-lng / toast-only chat
- BFF chỉ Mobile.Bff `:5202`
- **Cấm** invent path/controller theo slug `web-rmms-incident-chat`
- Nhật ký tuần đường / kết ca / tồn tại / tần suất = `web-rmms-mobile-b…e` — **không** gộp
- **Cấm** sửa iOS/Android native
- Parallel `web-rmms-mnt-chat` / `mnt-chat` — **không** gộp slug

## 7. Gaps

| ID | Default |
|----|---------|
| UNCLEAR-DOMAIN-MAP-CHAT | SA thêm DOMAIN-MAP row `web-rmms-incident-chat` · Incident · Live messages |
| UNCLEAR-PARENT-ID | PO/Design: P1 flat thread vs reply `parentId` |
| UNCLEAR-POLLING | Design/Dev: re-GET sau POST · **cấm** kit SignalR |
| GAP-MOB-EDIT-01 | Lock — **cấm** worker revert `#i-chat` về toast (peer CLOSED) |

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `done` | `done` | `2026-09-26T03:03:30.413Z` |
| mobile | — | — | — |
