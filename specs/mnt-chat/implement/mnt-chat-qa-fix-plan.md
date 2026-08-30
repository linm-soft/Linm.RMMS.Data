# QA fix plan — mnt-chat

> Status: **await_confirm** · **cấm** Write iOS/Android/BFF/BE trước board Approve `qa_fix_plan`  
> Nguồn: `qa/scenarios.md` · `qa/bugs/mnt-chat.md` · `qa/store/mnt-chat/CAPTURE.md` · STATUS blockers  
> Phase: `qaFixPhase=plan` · taskId=`task_af84c290` · qaFailFrom=`task_81d1652d`  
> lane: **mobile** · packKind: **sheet** → screen chat · **cấm** mfeStdUrl / yarn start:std / e2e ở phase plan

## Gaps (từ QA `task_81d1652d`)

| ID | Severity | Repro | Surface |
|----|----------|-------|---------|
| **GAP-QA-PRIOR-BLOCKED-01** | **P0** | Handoff claimed analy→dev `confirmed` · disk lúc QA = `draft`/`blocked` stub | `_data-analy/mnt-chat-*.md` · prior PO/Design/SA/TL/Dev |
| **GAP-QA-NO-IMPLEMENT-01** | **P0** | Không màn `#sc-mnt-chat` · Dev DoR FAIL · **0** SwiftUI/Compose feature screen | iOS Sources · Android `app/src` |
| **GAP-QA-E2E-SKIP-UPSTREAM-01** | **P0** | e2eQa=ON · runtime **không** chạy (thiếu screen) · **cấm** fake PNG | `qa/scenarios.md` · Maestro |
| **GAP-QA-STORE-01** / **03** | **P0** | Không A3-CORE / P6-CORE live shot | `qa/screens/` · CAPTURE |
| **GAP-MOB-UX-01** | **P0** (lúc QA) | `ui/ux-analy.md` / proto stub | Design |
| **GAP-SA-ANALY-EMPTY-01** | **P0** | control-hint + real-data auto stub ~309B · `status: draft` | `specs/_data-analy/mnt-chat-control-hint.md` · `mnt-chat-real-data.md` |
| **GAP-SA-BFF-MISS-01** | **P0** | thiếu `mnt-chat-bff-endpoints.md` · `mnt-chat-action-tree.md` | `_data-analy/` |
| **GAP-SA-CTX-01** | **P0** (lúc QA) | CTX feature MISSING | `docs/context/features/mnt-chat.md` |
| **R-QA-01** | **P0** gate | QA verdict **FAIL** · queue `failed` · board `qa_fail_rollback` | Workflow |

## Disk audit (plan turn · 2026-08-29) — verify only · **không** Write code

| Check | Result | Note |
|-------|--------|------|
| iOS `#sc-mnt-chat` `MntChatView` | **PRESENT** | `Presentation/Features/MntChat/` · a11y `sc-mnt-chat` · kit thread+composer |
| Android `#sc-mnt-chat` `MntChatScreen` | **PRESENT** | `…/feature/mntchat/` · testTag `sc-mnt-chat` · route `mnt-chat/{id}` |
| Entry `#i-chat` → open chat (**cấm** toast) | **WIRED** | iOS/Android `Chat` → `onOpenChat` · btn `btn-mnt-chat-{id}` · filter toast only |
| BE GET/POST `…/work-orders/{id}/messages` | **PRESENT** | WebService domain + BFF forward · `Schema_WorkOrderMessages` |
| CTX `docs/context/features/mnt-chat.md` | **PRESENT** | Live · Message contract documented |
| PO / Design / SA / TL artifacts | **confirmed** meta | Updated post `/edit-mobile-feature` lock |
| `implement/ios.md` · `android.md` | claim **done** | Edit-path implement — **chưa** re-QA e2e |
| `_data-analy/mnt-chat-control-hint.md` | **STILL stub** draft ~309B | **OPEN** GAP-SA-ANALY-EMPTY-01 |
| `_data-analy/mnt-chat-real-data.md` | **STILL stub** draft ~309B | **OPEN** |
| `mnt-chat-bff-endpoints.md` · `action-tree.md` | **MISSING** | **OPEN** GAP-SA-BFF-MISS-01 |
| `qa/screens/*.png` A3/P6 | **MISSING** | Re-QA only after implement Approve |
| STATUS blockers table | **STALE** | Vẫn claim «không screen» / CTX MISSING — sync ở implement |

**Đã đóng bởi lock `/edit-mobile-feature` + `/integrate-message-service` (không re-open toast):** GAP-QA-NO-IMPLEMENT-01 (code) · GAP-SA-CTX-01 · GAP-MOB-UX-01 (ux-analy/proto filled) · GAP-MOB-EDIT-01 lock.

## Plan (sau board Approve `qa_fix_plan` · `qaFixPhase=implement`)

| # | Việc | Repo | Files | DoD |
|---|------|------|-------|-----|
| 1 | Backfill analy SSOT (controlHint + §A+§B real-data) từ CTX/SA/live Message contract — **cấm** giữ stub `draft` | Data `Linm.RMMS.Data` | `_data-analy/mnt-chat-control-hint.md` · `mnt-chat-real-data.md` | status=`confirmed` · controlHint + contentHash · **đóng** GAP-SA-ANALY-EMPTY-01 |
| 2 | Author missing analy packs | Data | `_data-analy/mnt-chat-bff-endpoints.md` · `mnt-chat-action-tree.md` | endpoints GET/POST messages · action tree entry→send→back · **đóng** GAP-SA-BFF-MISS-01 |
| 3 | Verify dual OS entry + screen · **cấm** revert toast-only `#i-chat` | iOS + Android | `MntChat*` · `MntList*` · router/nav | Tap chat → `#sc-mnt-chat` · **0** `mnt.list.toast.chat` |
| 4 | Verify kit + copy | iOS + Android | kit `LinmChatThread`/`LinmChatComposer` · `LinmCopy` `mnt.chat.*` | empty/placeholder/send · **cấm** watermark |
| 5 | Verify BE/BFF Message path (no invent `api/v1/mnt-chat`) | WebService + Mobile.Bff | existing controllers / catch-all | GET list + POST `{ content, type:"message" }` · **cấm** ERP.* · **cấm** DbContext Mobile.Bff |
| 6 | VERIFY GATE builds | iOS · Android · BFF | — | `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** · `assembleDebug` · `dotnet build` Mobile.Bff **PASS** |
| 7 | Sync STATUS + implement notes | Data | `STATUS.md` · `implement/ios.md` · `android.md` | blockers stale closed · pipeline Dev done · QA pending |
| 8 | Re-QA (role `/agent-qa-mobile` · **không** chạy ở Dev) | QA | `qa/scenarios.md` · store · screens | e2eQa ON · `yarn e2e-qa-mobile` · A3/P6 PNG · verdict **PASS** · **đóng** GAP-QA-E2E-* / STORE |

## Peer reference

| Piece | Peer |
|-------|------|
| Chat screen + Message contract | `incident-chat` · `#sc-incident-chat` |
| Kit | `LinmChatThread` · `LinmChatComposer` |
| Entry pattern | `btn-*-chat-{id}` · **cấm** toast |
| CTX Message | `docs/context/features/mnt-chat.md` · `incident-chat.md` |

## Out of scope / Cấm

- Write iOS/Android/BFF/BE **trong** `qaFixPhase=plan` (task này)
- `autoApprove` bỏ `qa_fix_plan` / `qa_fail_rollback`
- `mfeStdUrl` · `yarn start:std` · `yarn e2e-qa` web · GenerateImage / fake CORE PNG
- SignalR kit hub (GAP-MSG-HUB-01 DEFER — Notification owns hub)
- Revert toast-only entry (`GAP-MOB-EDIT-01`)
- Invent `api/v1/mnt-chat` · ERP.* namespaces
- Re-run full PO→Design→SA→TL chain nếu disk already confirmed + code present — chỉ backfill analy stubs + verify + re-QA

## Evidence

- Prior FAIL: `qa/scenarios.md` · `qa/bugs/mnt-chat.md` · CAPTURE · task `task_81d1652d`
- Lock: STATUS note `/edit-mobile-feature` + `/integrate-message-service`
- iOS: `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS`
- Android: `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android`
- BFF: `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff`
- BE: `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.***
- Product: `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data`

## Handoff

| Field | Value |
|-------|-------|
| this role | `dev` · `qaFixPhase=plan` · **done** |
| next gate | board **`qa_fix_plan`** Approve |
| after Approve | enqueue Dev `qaFixPhase=implement` · follow Plan §1–7 · **cấm** e2e ở Dev |
| after implement PASS | `/agent-qa-mobile` · e2eQa ON · Plan §8 |
| STATUS | Dev plan **await_confirm** · QA vẫn **pending** (prior fail) |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev-ios + agent-dev-android |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | `2026-08-29T18:26:47.000Z` |
| versionGate | ok |
| qaFixPhase | plan |
| taskId | task_af84c290 |
| dorGate | PASS (plan-only) |
| contentHash | — |

---
<!-- Version meta: skillVersion=2026.08.25.01 · schemaVersion=1 · workflowVersion=2026.08.25.01 · versionGate=ok · skillId=agent-dev-ios · qaFixPhase=plan · taskId=task_af84c290 -->
