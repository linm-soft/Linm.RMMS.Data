# SA — Solution — web-rmms-incident-chat

> Status: **confirmed** · autoApprove ON · task `task_1f5c3a22` · 2026-09-26T02:55:00.000Z  
> **Cấm** ERP.* · **cấm** invent `api/v1/incident-chat` / ChatController · **cấm** Step 4b / migration ở role SA · **cấm** Write MFE/native · **cấm** web-bff client base · **cấm** e2e / start:std · **cấm** SignalR kit · **cấm** parentId P1 · **cấm** Me* · **cấm** toast-only · **cấm** hardcode VN · **cấm** gộp mnt-chat.

| | |
|--|--|
| Feature | `web-rmms-incident-chat` |
| Title | Chat sự cố — thread + composer |
| Role | `sa` |
| packKind | `list` |
| changeScope | `new_page` |
| formPattern | Mobile chat/full · phone max-width 430 · LinmChatThread + LinmChatComposer · N/A ERP Modal/Slideout · N/A DES-GRID / LinErpListFilterBar |
| domain | **Incident** (`incident`) · resource `incidents/{id}/messages` · peer `web-rmms-incident` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` · mfeStdRoute `/web-rmms-incident-chat` |
| mfeStdUrl | `http://localhost:9301/web-rmms-incident-chat` |
| productRoute | `/incident/:id/chat` · entry peer `#i-chat` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` |
| BFF | `Linm.RMMS.Mobile.Bff` `:5202` · prefix `mobile-bff/api/v1` · `VITE_MOBILE_API_URL` |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| skillVersion | `2026.09.05.03` |
| solution_confirm | **approve** (autoApprove) |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-incident-chat/ui/prototype/index.html` |
| peer | `web-rmms-incident` · `#i-chat` · cite messages Live · **không** gộp `web-rmms-mnt-chat` |

## 1. Domain / ownership

| Item | Decision |
|------|----------|
| DOMAIN-MAP slug | `web-rmms-incident-chat` → **Incident** / `incident` |
| Rationale | Live surface = `incident/incidents/{id}/messages` GET/POST + incident GET header · reuse Incident messages · no new domain |
| Cite peers | SCREENS `/incident/:id/chat` · `web-rmms-incident` · real-data §A+§B · PO P1 flat · Design `#sc-incident-chat` · peer pattern `web-rmms-mnt-chat` (Maintenance — separate slug) |
| API folder | **reuse** Incident messages endpoints · Mobile.Bff catch-all — **no new** controller/entity/DTO fork |
| **Cấm** | invent `incident-chat/*` · ChatController · SignalR kit · parentId P1 · ERP.* · web-bff client · Me* · toast-only · gộp mnt-chat |

**DOMAIN-MAP row (applied):**

| Feature slug | Domain Pascal | kebab |
|--------------|---------------|-------|
| `web-rmms-incident-chat` | Incident | `incident` · Live `incidents/{id}/messages` GET/POST · GET `{id}` header · init-data opt · MFE `Linm.Web.RMMS.Mobile` `/web-rmms-incident-chat` · **cấm** invent ChatController / `incident-chat` · **cấm** SignalR |

## 2. FormMode ↔ API

Form **không** Modal ERP. Modes = CH load thread · send · header chrome · empty/error.

| Mode / zone | UI | API | Write | Notes |
|-------------|----|-----|-------|-------|
| view/load | CH-01 TopBar + CH-02 thread | `GET …/incidents/{id}` + `GET …/{id}/messages?type=message` | — | subtitle incident · bubbles `content`/`isMine`/`createdAt` |
| send | CH-03 composer | `POST …/{id}/messages` | `{ content, type:"message" }` | **no** `parentId` P1 · clear draft on OK |
| refresh | after POST OK | re-GET `…/messages?type=message` | — | P1 HTTP only · pull optional · **cấm** SignalR |
| empty | CH-02 empty | — | — | `incident.chat.empty` via useFormOptions |
| lookup (opt) | labels | `GET …/incidents/init-data` | — | optional chrome labels |
| entry | peer incident list `#i-chat` | — | nav `/incident/:id/chat` | productRoute + std `/web-rmms-incident-chat` |

### Live endpoints (HARD — from real-data §B)

| Method | BFF path (client) | Downstream | Request / bind | Status |
|--------|-------------------|------------|----------------|--------|
| GET | `mobile-bff/api/v1/incident/incidents/{id}` | Incident detail | TopBar subtitle / chrome | **Live** |
| GET | `mobile-bff/api/v1/incident/incidents/{id}/messages?type=message` | Incident messages | thread items · `isMine` | **Live** |
| POST | `mobile-bff/api/v1/incident/incidents/{id}/messages` | Incident messages | `{ content, type:"message" }` | **Live** |
| GET | `mobile-bff/api/v1/incident/incidents/init-data` | Incident init | labels opt | **Live** (opt) |

- Client base: `http://localhost:5202` + `mobile-bff/api/v1` — **không** gọi `web-bff` từ Mobile MFE.
- Table cite: `rmms_incident_messages` · **reuse** — **no** new entity.
- Thread P1: flat list · reply/`parentId` = **P2 defer**.
- Realtime: re-GET sau POST · optional pull · **cấm** kit SignalR.
- Labels: `useFormOptions()` / LinmCopy `incident.chat.*` · **cấm** hardcode VN.
- Fail: missing `id` → empty+back · GET error retry · BFF 503 retry · **cấm** `window.alert` · **cấm** demo-json · **cấm** toast-only screen.
- GPS: **none** on chat.
- **API Mới:** none · **migration:** none · **entity mới:** none · **Step 4b:** skip at SA.

## 3. BFF vs API

| Layer | Role |
|-------|------|
| Mobile.Bff `:5202` | sole FE entry · proxy `incident/incidents*` messages · auth rewrite |
| RMMS.Service.Api | existing Incident messages — **no new** Chat controller |
| web-bff | cite only · **not** Mobile client base |

## 4. Entity / migration

| Item | Decision |
|------|----------|
| Tables | none new (reuse `rmms_incident_messages`) |
| EF migration | **skip** |
| Step 4b | **skip** at SA · Dev only if Live gap (not expected) |
| Local | ComposerDraft local only · clear after OK POST · no offline queue P1 |

## 5. FE surface (SA contract — Dev implements)

| Zone | Contract |
|------|----------|
| CH-00…04 · `#sc-incident-chat` | phone 430 · prototype 1-1 · **cấm** sửa iOS/Android |
| TopBar | GET incident · back `/incident` |
| Thread | GET messages · bubbleMine/Theirs · empty `incident.chat.empty` |
| Composer | POST `{content,type:message}` · no parentId · re-GET |
| Entry | peer `#i-chat` · std `/web-rmms-incident-chat` · product `/incident/:id/chat` |
| DES-GRID / LinErpListFilterBar | **N/A** phone chat |
| Out | Me* · create/detail/vis/estimate · journal/kết ca · mnt-chat · invent path · web-bff · ERP · SignalR |

## 6. Risks / open

| ID | Status |
|----|--------|
| UNCLEAR-DOMAIN-MAP-CHAT | **CLOSED** — DOMAIN-MAP row `web-rmms-incident-chat` → Incident applied |
| UNCLEAR-PARENT-ID | **CLOSED** (PO) — P1 flat · no parentId · reply P2 |
| UNCLEAR-POLLING | **CLOSED** (PO/Design) — re-GET after POST · no SignalR |
| GAP-BFF-MOBILE | **HARD** — Mobile.Bff only · **cấm** Route trên web-bff |

## 7. Handoff

| Next | Need |
|------|------|
| team_lead | Tasks: CH Live GET messages/POST/GET incident · flat thread · re-GET · entry `#i-chat` · phone 430 · no invent · no SignalR |
| devSlash | `/agent-dev` |
| qa | Thread load/send · empty/error · no parentId · no Me* · no GPS · no web-bff · E2E queued `/agent-qa*` |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` · `rulesVersion=2026.09.25.2` · `confirmedAt=2026-09-26T02:55:00.000Z` · `solution_confirm=approve`
