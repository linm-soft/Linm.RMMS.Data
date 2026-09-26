# Team lead — Task — web-rmms-incident-chat

> Status: **confirmed** · writtenAt `2026-09-26T09:50:00.000Z` · task `task_113464eb`  
> skillVersion: `2026.09.05.03` · packKind: `list` · autoApprove: ON  
> **Cấm** xóa file này · **cấm** implement trong role team_lead · **cấm** e2e / yarn build / start:std.

| | |
|--|--|
| Feature | `web-rmms-incident-chat` |
| Title | Chat sự cố — Live messages (CH-00…CH-04) |
| Role | `team_lead` |
| changeScope | `new_page` |
| formPattern | Mobile chat / full · phone ≤430 · LinmChatThread + LinmChatComposer · N/A ERP Modal/Slideout |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-incident-chat` |
| mfeStdUrl | `http://localhost:9301/web-rmms-incident-chat` |
| productRoute | `/incident/:id/chat` |
| nativeRouteCite | SCREENS incident-chat · peer web-rmms-incident `#i-chat` · **không** gộp mnt-chat |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Mobile.Bff `:5202` `mobile-bff/api/v1` · domain **Incident** · Live messages · **cấm ERP.*** |
| demo | N/A · hash skip · **cấm** rescan |
| DES-GRID / LinErpListFilterBar | **N/A** phone chat |
| Step 4b / migration | **skip** · API Mới / entity: **none** (SA) |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-incident-chat/ui/prototype/index.html` |
| zones | CH-00 · CH-01 · CH-02 · CH-03 · CH-04 · empty · error · `#sc-incident-chat` |
| cite | AC-C1…C10 Chat · Leave §5 · DoD §8 |
| nextSlash | `/agent-dev` · roleOnly stop (GAP-PKT-ROLE-01) |

## route_confirm

| Field | Value |
|-------|-------|
| action | **confirm** (new_page · URL chưa có trong MFE) |
| mfeStdRoute | `/web-rmms-incident-chat` |
| mfeStdUrl | `http://localhost:9301/web-rmms-incident-chat` |
| productRoute | `/incident/:id/chat` |
| note | Chat page · entry peer `#i-chat` từ `/web-rmms-incident` · **cấm** invent `api/v1/incident-chat` / ChatController · autoApprove=ON |

## Decisions (rolled from prior)

- Chat: TopBar incident header · thread GET · composer POST · entry peer `#i-chat`
- Thread P1 **flat** — POST `{ content, type:"message" }` · **no** parentId · reply UI P2
- Realtime: HTTP **re-GET after POST** · pull optional · **cấm** SignalR kit
- API Live: `GET/POST incident/incidents/{id}/messages` · `GET incident/incidents/{id}` header · init-data opt
- DOMAIN-MAP row `web-rmms-incident-chat` → Incident · applied (SA) · **cấm** invent path
- Labels: `useFormOptions()` / `incident.chat.*` · **cấm** hardcode VN · **cấm** Me*
- GPS: **none** on chat · Android icon/layout 1-1 · **cấm** sửa iOS/Android
- OUT: Me* / create/detail/vis/estimate / journal/kết ca · mnt-chat không gộp · toast-only · web-bff · ERP.*
- UNCLEAR-DOMAIN-MAP-CHAT / PARENT-ID / POLLING → **CLOSED** prior
- next: `/agent-dev` · e2eQa queued `/agent-qa*` · roleOnly stop

## FormMode ↔ API

| Mode | APIs |
|------|------|
| Header | `GET incident/incidents/{id}` · TopBar title/subtitle · back → `/incident` |
| Thread | `GET incident/incidents/{id}/messages?type=message` · bubbleMine/Theirs via isMine · empty state |
| Send | `POST incident/incidents/{id}/messages` · body `{ content, type:"message" }` · **no** parentId · then **re-GET** thread |
| Init | `init-data` optional (labels) |
| BFF | Mobile.Bff `:5202` `mobile-bff/api/v1` · **cấm** web-bff · **cấm** invent ChatController · Step 4b skip |

## Tasks

| id | page / slice | role | deps | status | DoD (slim) |
|----|--------------|------|------|--------|------------|
| T-01 | Route + shell `/web-rmms-incident-chat` · product `/incident/:id/chat` · CH-00 | FE | — | pending | Route registered · deep-link mfeStdUrl · param `:id` · no ERP.* · no invent chat path |
| T-02 | TopBar CH-01 · GET incident · back `/incident` | FE | T-01 | pending | Header bind live · back nav · useFormOptions · fail→error zone |
| T-03 | Thread CH-02/03 · GET messages · bubbles · empty | FE | T-01 | pending | LinmChatThread · isMine · empty `incident.chat.empty` · offline/error · AC-C1…C4 |
| T-04 | Composer CH-04 · POST + re-GET · no parentId | FE | T-03 | pending | LinmChatComposer · POST `{content,type:message}` · re-GET · disable empty · fail toast · AC-C5…C8 |
| T-05 | Peer entry `#i-chat` từ web-rmms-incident | FE | T-01 | pending | Nav → `/incident/:id/chat` · icon 1-1 Android · **không** gộp mnt-chat · AC-C9 |
| T-06 | Wire Mobile.Bff · labels · prototype parity | FE | T-01…T-05 | pending | All live via BFF · prototype `#sc-incident-chat` · **cấm** toast-only / itemsOrDemo · AC-C10 |
| T-BE | — | — | — | **N/A** | No new API / entity / migration (SA) · DOMAIN-MAP applied |
| T-QA | cite scenarios · e2e slug | QA | T-01…T-06 | pending | **chỉ** `/agent-qa*` · **cấm** e2e ở TL/Dev |

### Assignee

- Impl: `/agent-dev` · MFE cwd `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile`
- QA E2E: queued `/agent-qa*` · **cấm** e2e / `yarn start:std` ở team_lead
- Review: `/agent-review` after QA

## Acceptance map (PO → T-*)

| AC | Owner task |
|----|------------|
| AC-C1…C4 thread load / empty / bubbles / isMine | T-03 |
| AC-C5…C8 send / re-GET / no parentId / fail toast | T-04 |
| AC-C9 peer entry `#i-chat` | T-05 |
| AC-C10 BFF live · labels · parity · no toast-only | T-06 |
| Route `/web-rmms-incident-chat` · product `/incident/:id/chat` | T-01 |
| TopBar GET incident · back | T-02 |
| useFormOptions · no hardcode VN · no Me* | T-02…T-06 |
| Mobile.Bff only · no invent path · Step 4b skip | T-01 · T-06 · T-BE |
| P1 flat · HTTP re-GET · cấm SignalR | T-03 · T-04 |
| Android 1-1 · cấm native code change | T-05 · T-06 |

## Inventory → T-*

| id | controlHint | T-* |
|----|-------------|-----|
| topBarBack/Title/Subtitle | Button/Static/Text RO | T-02 |
| threadItems / bubbleMine\|Theirs | ChatThread/Bubble | T-03 |
| emptyThread | EmptyState | T-03 |
| composerInput/Send | TextArea/Button | T-04 |
| entry.chatIcon | Button/Nav | T-05 |

## Out of scope

- Me / me-profile / me-settings / feedback / cam-view
- Create / detail / vis / estimate (peers b–e)
- Journal / kết ca / tồn tại / tần suất
- Gộp mnt-chat
- Invent `api/v1/incident-chat` / ChatController / web-bff
- New BE controller · migration · Step 4b
- ERP.* namespaces
- SignalR / parentId reply P2
- GPS on chat
- iOS/Android native edits
- Toast-only / itemsOrDemo

## Prior artifacts

| Role | Compact | Full |
|------|---------|------|
| data_analy | `handoff/data_analy-compact.md` | `_data-analy/features/web-rmms-incident-chat-control-hint.md` · `…-real-data.md` |
| po | `handoff/po-compact.md` | `po/requirement.md` |
| design | `handoff/design-compact.md` | `ui/design.md` + prototype |
| sa | `handoff/sa-compact.md` | `be/solution-discovery.md` |

## UNCLEAR

- (none blocking TL) DOMAIN-MAP-CHAT · PARENT-ID · POLLING — closed prior
