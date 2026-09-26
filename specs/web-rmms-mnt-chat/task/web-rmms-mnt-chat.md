# Team lead — Task — web-rmms-mnt-chat

> Status: **confirmed** · writtenAt `2026-09-26T06:45:00.000Z` · task `task_039efacf`  
> skillVersion: `2026.09.05.03` · packKind: `list` · autoApprove: ON  
> **Cấm** xóa file này · **cấm** implement trong role team_lead · **cấm** e2e / yarn build / start:std.

| | |
|--|--|
| Feature | `web-rmms-mnt-chat` |
| Title | Chat công việc (WORK-C) |
| Role | `team_lead` |
| changeScope | `new_page` |
| formPattern | Mobile chat/full · phone ≤430 · LinmChatThread + LinmChatComposer · Android 1-1 `#sc-mnt-chat` · N/A ERP Modal/Slideout |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-mnt-chat` |
| mfeStdUrl | `http://localhost:9301/web-rmms-mnt-chat` |
| productRoute | `/work/chat?id=` · entry peer WORK-L (`web-rmms-work`) `#i-chat` |
| nativeRouteCite | Android `#sc-mnt-chat` · SCREENS WORK-C · cite T-W5-04 |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Mobile.Bff `:5202` `mobile-bff/api/v1` · domain **Maintenance** (`maintenance` / `work-orders`) · **cấm ERP.*** |
| demo | N/A · hash skip · **cấm** rescan |
| DES-GRID / LinErpListFilterBar | N/A phone chat |
| Step 4b / migration | **skip** · API Mới / entity: **none** (SA) |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mnt-chat/ui/prototype/index.html` |
| zones | CH-00 · CH-01 · CH-02 · CH-03 · CH-04 · peer WORK-L entry |
| cite | T-W5-04 · peer list T-W5-01 · progress T-W5-02 · log T-W5-03 |
| nextSlash | `/agent-dev` · roleOnly stop (GAP-PKT-ROLE-01) |

## route_confirm

| Field | Value |
|-------|-------|
| action | **confirm** (new_page · URL chưa có trong MFE) |
| mfeStdRoute | `/web-rmms-mnt-chat` |
| mfeStdUrl | `http://localhost:9301/web-rmms-mnt-chat` |
| productRoute | `/work/chat?id=` (WORK-C only on std) · entry from WORK-L `#i-chat` |
| note | STD-NEST Design-closed · **cấm** invent ChatController / `api/v1/mnt-chat` / web-bff · autoApprove=ON |

## Decisions (rolled from prior)

- WORK-C primary DoD · entry peer WORK-L (`web-rmms-work`) `#i-chat` · product `/work/chat?id=`
- Kit: `LinmChatThread` + `LinmChatComposer` · **1** TopBar · **cấm** 2 header · phone ≤430 · Android 1-1 `#sc-mnt-chat`
- Thread P1 flat · **no** `parentId` · reply UI **P2**
- Realtime: re-GET messages sau POST OK · pull optional · **cấm** SignalR kit
- Body POST: `{ content, type:"message" }` · clear draft sau OK · disable empty/sending
- Live: `GET work-orders/{id}` · `GET …/messages?type=message` · `POST …/messages` · init-data opt
- DOMAIN-MAP: `web-rmms-mnt-chat` → Maintenance · reuse WorkOrders messages · **no new** controller
- HARD: Mobile.Bff only · **cấm** web-bff · **cấm** ERP.* · **cấm** Me* · **cấm** invent path · **cấm** toast-only
- Labels: `useFormOptions()` / `work.chat.*` · **cấm** hardcode VN
- GPS: **none** on chat · **cấm** fake
- BFF: Mobile.Bff `:5202` · Step 4b **none** · migration **none**
- OUT: Me* · progress/log/estimate · Field/journal-b…e · invent mnt-chat · SignalR · native edits
- demo N/A · **cấm** itemsOrDemo / demo-json
- UNCLEAR DOMAIN-MAP / PARENT-ID / POLLING: **CLOSED** prior

## FormMode ↔ API

| Mode | APIs |
|------|------|
| Prefill header | `GET maintenance/work-orders/{id}` |
| Thread load | `GET maintenance/work-orders/{id}/messages?type=message` |
| Send | `POST maintenance/work-orders/{id}/messages` · body `{ content, type:"message" }` · **no** parentId |
| Refresh | re-GET messages after POST OK (or append if response đủ) |
| Init | `GET maintenance/work-orders/init-data` (opt LOOKUP status labels) |
| GPS | **N/A** · **cấm** capture |
| BFF | Mobile.Bff `:5202` `mobile-bff/api/v1` · no new controller · Step 4b skip |

## Tasks

| id | page / slice | role | deps | status | DoD (slim) |
|----|--------------|------|------|--------|------------|
| T-01 | Route + shell `/web-rmms-mnt-chat` · product `/work/chat?id=` · CH-00 chrome | FE | — | **PASS** | Route registered · deep-link mfeStdUrl · `?id=` · entry WORK-L `#i-chat` · no ERP.* · no invent mnt-chat · AC-C1 · AC-C7 |
| T-02 | TopBar WO RO · back `/work` · prefill GET {id} · CH-01 | FE | T-01 | **PASS** | 1 header LinmTopBar · title `work.chat.title` · subtitle/code from WO · status via copy · empty/fail if missing id · AC-C5 · AC-C8 |
| T-03 | Thread LinmChatThread · GET messages · bubbles isMine · empty · CH-02 | FE | T-02 | **PASS** | Bind content/isMine/createdAt · empty `work.chat.empty` · **cấm** SignalR · AC-C2 · AC-C10 |
| T-04 | Composer LinmChatComposer · POST · re-GET · no parentId · CH-03 | FE | T-03 | **PASS** | Body `{content,type:"message"}` · clear draft · disable empty/sending · re-GET after OK · AC-C3 · AC-C4 · AC-C10 |
| T-05 | Entry wire · error/retry · Mobile.Bff · labels · prototype parity · CH-04 | FE | T-01…T-04 | **PASS** | `#i-chat` + id · fail+retry no alert/toast-only · phone≤430 · `#sc-mnt-chat` 1-1 · **cấm** web-bff/Me*/GPS · AC-C6…C9 |
| T-BE | — | — | — | **N/A** | No new API / entity / migration (SA) · DOMAIN-MAP applied · PARENT-ID/POLLING CLOSED |
| T-QA | cite scenarios · e2e slug | QA | T-01…T-05 | pending | **chỉ** `/agent-qa*` · **cấm** e2e ở TL/Dev |

### Assignee

- Impl: `/agent-dev` · MFE cwd `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile`
- QA E2E: queued `/agent-qa*` · **cấm** e2e / `yarn start:std` ở team_lead
- Review: `/agent-review` after QA

## Acceptance map (PO → T-*)

| AC | Owner task |
|----|------------|
| AC-C1 mount std `/web-rmms-mnt-chat` · product `/work/chat` · phone 430 | T-01 · T-05 |
| AC-C2 thread Live GET messages · bind · empty copy | T-03 |
| AC-C3 send Live POST `{content,type:"message"}` · no parentId · clear draft | T-04 |
| AC-C4 re-GET after POST · pull optional · **cấm** SignalR | T-04 |
| AC-C5 header GET WO · subtitle/code · status copy | T-02 |
| AC-C6 API fail → error+retry · **cấm** alert / toast-only | T-05 |
| AC-C7 entry `#i-chat` + id · thiếu id → empty+back | T-01 · T-05 |
| AC-C8 useFormOptions / `work.chat.*` · **cấm** hardcode VN | T-02 · T-05 |
| AC-C9 out Me* / GPS / progress / log / invent path | T-05 · Out |
| AC-C10 LinmChatThread + Composer · Android 1-1 | T-03 · T-04 · T-05 |
| Step 4b skip · no invent controller | T-01 · T-BE |

## Inventory → T-*

| id | controlHint | T-* |
|----|-------------|-----|
| topBarBack/Title/Subtitle | Button/Static/Text RO | T-02 |
| threadItems / bubbleMine\|Theirs | ChatThread/Bubble | T-03 |
| emptyThread | EmptyState | T-03 · T-05 |
| composerInput/Send | TextArea/Button | T-04 |
| entry.chatIcon | Button/Nav peer | T-01 · T-05 |

## Out of scope

- Me / me-profile / me-settings / feedback / cam-view
- Progress write / GPS (`web-rmms-mnt-progress`)
- Nhật ký RO (`web-rmms-mnt-log`)
- Estimate · Field doors · journal / kết ca / tồn tại / tần suất (`web-rmms-mobile-b…e`)
- Reply thread UI / `parentId` (P2)
- SignalR realtime kit
- Invent ChatController / `api/v1/mnt-chat` / web-bff
- New BE controller · migration · Step 4b
- ERP.* namespaces
- Toast-only entry · itemsOrDemo / demo-json
- iOS/Android native edits

## Prior artifacts

| Role | Compact | Full |
|------|---------|------|
| data_analy | `handoff/data_analy-compact.md` | `_data-analy/features/web-rmms-mnt-chat-control-hint.md` · `…-real-data.md` |
| po | `handoff/po-compact.md` | `po/requirement.md` |
| design | `handoff/design-compact.md` | `ui/design.md` + prototype |
| sa | `handoff/sa-compact.md` | `be/solution-discovery.md` |

## UNCLEAR

- (none blocking TL) · DOMAIN-MAP / PARENT-ID / POLLING CLOSED prior
