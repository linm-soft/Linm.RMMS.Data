# Implement — web-rmms-mnt-chat

> Status: **done** · writtenAt `2026-09-26T07:05:00.000Z` · task `task_36dbee99`  
> skillVersion: `2026.09.05.03` · packKind: `list` · autoApprove: ON  
> role: `/agent-dev` · e2eQa: queued `/agent-qa*` · **cấm** e2e ở Dev

| | |
|--|--|
| Feature | `web-rmms-mnt-chat` |
| Title | Chat công việc (WORK-C) |
| changeScope | `new_page` |
| formPattern | Mobile chat/full · phone ≤430 · LinmChatThread + LinmChatComposer · `#sc-mnt-chat` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-mnt-chat` |
| mfeStdUrl | `http://localhost:9301/web-rmms-mnt-chat` |
| productRoute | `/work/chat?id=` → alias STD |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Mobile.Bff · Maintenance messages · **cấm ERP.*** |
| Step 4b / T-BE | **N/A** · reuse Live GET/POST messages · no new controller/migration |

## Done (T-*)

| id | DoD | status |
|----|-----|--------|
| T-01 | Route `/web-rmms-mnt-chat` · product `/work/chat` alias · CH-00 shell · entry WORK-L `data-des-id=i-chat` | **PASS** |
| T-02 | TopBar GET WO · title `work.chat.*` · subtitle code/title/status · back `/web-rmms-work` · missing id empty+back | **PASS** |
| T-03 | LinmChatThread · GET `…/messages?type=message` · isMine bubbles · empty `work.chat.empty` · no SignalR | **PASS** |
| T-04 | LinmChatComposer · POST `{content,type:"message"}` · no parentId · clear draft · disable empty/sending · re-GET | **PASS** |
| T-05 | Entry wire · error+retry banner · Mobile.Bff client · labels LOOKUP · phone≤430 · `#sc-mnt-chat` · no Me*/GPS/web-bff | **PASS** |
| T-BE | none | **N/A** |

## FE files

- `src/pages/WebRmmsMntChat/*` — layout · page · LinmChatThread · LinmChatComposer · alias · lookup · styles
- `src/services/patrol/endpoint.ts` — `getMessages` · `createMessage`
- `src/services/patrol/types.ts` — message DTOs
- `src/index.tsx` · `mfe.routes.json` · `src/dev/devRoutes.ts`
- `src/pages/WebRmmsWork/WorkListPage.tsx` — `data-des-id="i-chat"`

## APIs (Live · Mobile.Bff)

| Call | Path |
|------|------|
| Prefill | `GET maintenance/work-orders/{id}` |
| Init (opt) | `GET maintenance/work-orders/init-data` |
| Thread | `GET maintenance/work-orders/{id}/messages?type=message` |
| Send | `POST maintenance/work-orders/{id}/messages` body `{ content, type:"message" }` |
| Refresh | re-GET messages after POST OK |

## VERIFY GATE

| Gate | Result |
|------|--------|
| MFE `yarn build` | **PASS** (webpack warnings size only) |
| BE `dotnet build Linm.RMMS.WebService.sln` | **PASS** 0 error |
| e2e / start:std | **skipped** (queued QA) |

## Debt / note

- Kit `LinmChatThread` / `LinmChatComposer` implemented **in-feature** (common package có `ChatPanel` ERP · không match Android chat shell).
- Reply/`parentId` UI = P2 · SignalR = out.

## Handoff

- compact: `specs/web-rmms-mnt-chat/handoff/dev-compact.md`
- next: `/agent-qa*` · e2eQa ON
