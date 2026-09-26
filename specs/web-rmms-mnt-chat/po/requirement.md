# PO — Requirement — web-rmms-mnt-chat

| Field | Value |
|-------|-------|
| feature | `web-rmms-mnt-chat` |
| title | Chat công việc — thread + composer |
| role | `po` |
| status | `done` |
| packKind | `list` |
| changeScope | `new_page` |
| lane | `web` |
| demo | **N/A** |
| skillId | `agent-po` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| writtenAt | `2026-09-26T06:30:00.000Z` |
| taskId | `task_56709d71` |
| prior | data_analy `confirmed` · compact + control-hint + real-data |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-mnt-chat` |
| mfeStdUrl | `http://localhost:9301/web-rmms-mnt-chat` |
| productRoute | `/work/chat` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Maintenance · Mobile.Bff `:5202` · **cấm ERP.*** |
| formPattern | Mobile chat / full · phone `max-width: 430px` · kit `LinmChatThread` + `LinmChatComposer` · **không** ERP Modal/Slideout Kind B · **không** master form |
| DES-GRID / LinErpListFilterBar | **N/A** — phone chat |

> Labels: `useFormOptions()` / LinmCopy `work.chat.*` — **cấm** hardcode tiếng Việt trên form.  
> **Cấm** toast-only · invent `api/v1/mnt-chat` · demo-json · SignalR kit · sửa iOS/Android · tab `me*`.

## 1. Goal

Tuần đường / Tuần kiểm mở **Chat công việc** từ card Work (`#i-chat`): TopBar WO + thread bubble + composer send. P1 Live GET/POST messages qua Mobile.Bff only.

## 2. changeScope

`changeScope=new_page` — màn chat mới trên Mobile MFE; entry wire từ peer `web-rmms-work`.

## 3. Screens (zones)

| id | zone | Surface / AC |
|----|------|----------------|
| CH-00 | phone | Frame ≤430 · center desktop review · Android layout 1-1 |
| CH-01 | TopBar | `LinmTopBar` · back → `/work` · title `work.chat.title` · subtitle WO từ `GET …/work-orders/{id}` · **cấm** 2 header |
| CH-02 | thread | `LinmChatThread` · bubbles `isMine` · empty `work.chat.empty` · load `GET …/messages?type=message` |
| CH-03 | composer | `LinmChatComposer` · TextArea non-empty · Send paper-plane · `POST { content, type:"message" }` · disable empty/sending |
| CH-04 | entry | Peer list `#i-chat` / `btn-mnt-chat-{id}` · nav chat + `workOrderId` |

Missing `workOrderId` → empty state + CTA back list (không crash / toast-only).

## 4. Chat AC (HARD) — DES-GRID N/A

| # | Criterion | Pass |
|---|-----------|------|
| AC-C1 | Mount std `/web-rmms-mnt-chat` · product `/work/chat` | Screen full chat · phone 430 |
| AC-C2 | Thread Live | GET messages · bind `content` / `isMine` / `createdAt` · empty copy |
| AC-C3 | Send Live | POST body `{ content, type:"message" }` · **không** `parentId` P1 · clear draft sau OK |
| AC-C4 | Refresh | Sau POST OK → re-GET messages (hoặc append nếu response đủ) · pull-to-refresh optional · **cấm** SignalR kit |
| AC-C5 | Header | GET WO `{id}` → subtitle/code · status label via copy key `work.status.*` |
| AC-C6 | Error | API fail → error + retry · **cấm** `window.alert` · **cấm** toast-only thay screen |
| AC-C7 | Entry | Từ work list `#i-chat` truyền `id` · thiếu id → empty+back |
| AC-C8 | Labels | Copy keys / `useFormOptions` · **cấm** hardcode VN |
| AC-C9 | Out | Không `me*` · GPS · progress write · nhật ký · estimate · Field deep · invent mnt-chat path |
| AC-C10 | Kit | `LinmChatThread` + `LinmChatComposer` · Android icon/layout 1-1 |

## 5. Leave / Out P1

| Out | Owner peer |
|-----|------------|
| `me` / `me-profile` / `me-settings` / `feedback` / `cam-view` | REMOVED |
| Progress write / photo-geo GPS | `web-rmms-mnt-progress` |
| Nhật ký RO | `web-rmms-mnt-log` |
| Estimate · Field 2 cửa | peers |
| Journal / kết ca / tồn tại / tần suất | `web-rmms-mobile-b…e` |
| Reply thread UI / `parentId` | **P2** — P1 flat |
| SignalR realtime kit | **cấm** trên slug này |
| DEMO / demo-json SSOT | N/A |
| ERP.* / web-bff client / invent `api/v1/mnt-chat` | **cấm** |

## 6. API bind (cite Live — real-data §A+§B)

| uiField | GET / write | note |
|---------|-------------|------|
| topBar.subtitle | `GET maintenance/work-orders/{id}` | RO |
| thread.items | `GET …/messages?type=message` | `isMine` server |
| composer.send | `POST …/messages` `{ content, type:"message" }` | no parentId P1 |
| init-data | `GET …/init-data` | opt labels |
| BFF | `http://localhost:5202/mobile-bff/api/v1` | **cấm** web-bff base |

GPS: **none** trên chat. Map: **none**.

## 7. Decisions (PO)

| id | Decision |
|----|----------|
| UNCLEAR-PARENT-ID | **P1 flat** — POST không gửi `parentId` · UI reply deferred P2 |
| UNCLEAR-POLLING | **HTTP only** — re-GET sau POST OK · pull-to-refresh optional · **cấm** kit SignalR (Design/Dev wire) |
| UNCLEAR-DOMAIN-MAP-CHAT | **SA** thêm DOMAIN-MAP row `web-rmms-mnt-chat` · Maintenance · cite peer messages · **cấm invent** controller |
| packKind | `list` confirm · Chat AC · DES-GRID **N/A** |
| changeScope | `new_page` |

## 8. DoD P1

- [ ] Screen Live GET/POST messages · kit chat · phone 430
- [ ] Entry từ `#i-chat` · empty/error khi thiếu id / API fail
- [ ] Labels copy keys · no hardcode VN · no toast-only · no me · no GPS · no SignalR
- [ ] Mobile.Bff only · no ERP.* · no invent mnt-chat path
- [ ] Design: prototype + `reviewUrl` `#sc-mnt-chat` · zones CH-*
- [ ] SA: DOMAIN-MAP row · confirm Live paths
- [ ] QA (queued): thread load/send · empty/error · phone · no me/GPS

## 9. Handoff Design

| Need | Value |
|------|-------|
| Zones | CH-00…04 |
| Frame | phone 430 · Android 1-1 |
| Kit | LinmChatThread · LinmChatComposer · LinmTopBar |
| Prototype | `#sc-mnt-chat` + reviewUrl |
| Flat thread | no reply indent P1 |
| Refresh UX | re-GET after send · optional pull |
| Cấm | ERP grid/filter bar · me chrome · SignalR · invent API UI |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` · `rulesVersion=2026.09.25.2` · `writtenAt=2026-09-26T06:30:00.000Z`
