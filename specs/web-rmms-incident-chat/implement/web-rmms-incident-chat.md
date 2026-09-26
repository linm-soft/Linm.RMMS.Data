# Implement — web-rmms-incident-chat

> Status: **done** · writtenAt `2026-09-26T10:05:00.000Z` · task `task_ae3eb9e3`  
> skillVersion: `2026.09.05.03` · packKind: `list` · autoApprove: ON  
> role: `/agent-dev` · e2eQa: queued `/agent-qa*` · **cấm** e2e ở Dev

| | |
|--|--|
| Feature | `web-rmms-incident-chat` |
| Title | Chat sự cố (INC-CHAT) |
| changeScope | `new_page` |
| formPattern | Mobile chat/full · phone ≤430 · LinmChatThread + LinmChatComposer · `#sc-incident-chat` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-incident-chat` |
| mfeStdUrl | `http://localhost:9301/web-rmms-incident-chat` |
| productRoute | `/incident/:id/chat` → alias STD `?id=` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Mobile.Bff · Incident messages · **cấm ERP.*** |
| Step 4b / T-BE | **N/A** · reuse Live GET/POST messages · no new controller/migration · DOMAIN-MAP applied |

## Done (T-*)

| id | DoD | status |
|----|-----|--------|
| T-01 | Route `/web-rmms-incident-chat` · product `/incident/:id/chat` alias · CH-00 shell `#sc-incident-chat` | **PASS** |
| T-02 | TopBar GET incident · `incident.chat.*` · subtitle code/title/status · back `/web-rmms-incident` · missing id empty+back | **PASS** |
| T-03 | LinmChatThread · GET `…/messages?type=message` · isMine bubbles · empty · no SignalR | **PASS** |
| T-04 | LinmChatComposer · POST `{content,type:"message"}` · no parentId · clear draft · re-GET | **PASS** |
| T-05 | Peer `#i-chat` / `btn-inc-chat-{id}` · `data-entry=i-chat` · nav STD chat · detail `?peer=chat` redirect | **PASS** |
| T-06 | Mobile.Bff proxy · LOOKUP labels · phone≤430 · no Me*/GPS/web-bff/toast-only · no gộp mnt-chat | **PASS** |
| T-BE | none | **N/A** |

## FE files

- `src/pages/WebRmmsIncidentChat/*` — layout · page · LinmChatThread · LinmChatComposer · alias · lookup · styles
- `src/services/incident/endpoint.ts` — `getMessages` · `createMessage`
- `src/services/incident/types.ts` — message DTOs
- `src/index.tsx` · `src/dev/devRoutes.ts`
- `src/pages/WebRmmsIncident/paths.ts` — `peerChat` → STD chat
- `src/pages/WebRmmsIncident/IncidentListPage.tsx` · `IncidentDetailPage.tsx` — entry CH-04

## APIs (Live · Mobile.Bff)

| Call | Path |
|------|------|
| Prefill | `GET incident/incidents/{id}` |
| Thread | `GET incident/incidents/{id}/messages?type=message` |
| Send | `POST incident/incidents/{id}/messages` body `{ content, type:"message" }` |
| Refresh | re-GET messages after POST OK |

## VERIFY GATE

| Gate | Result |
|------|--------|
| MFE `yarn build` | **PASS** (webpack warnings size only · chunk `web-rmms-incident-chat`) |
| BE `dotnet build Linm.RMMS.WebService.sln` | **PASS** 0 error |
| e2e / start:std | **skipped** (queued QA) |

## Debt / note

- Kit `LinmChatThread` / `LinmChatComposer` **in-feature** (parity mnt-chat · không gộp slug).
- Reply/`parentId` = P2 · SignalR = out · GPS none on chat.

## Handoff

- compact: `specs/web-rmms-incident-chat/handoff/dev-compact.md`
- next: `/agent-qa*` · e2eQa ON
