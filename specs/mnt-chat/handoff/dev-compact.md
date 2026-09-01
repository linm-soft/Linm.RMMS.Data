# handoff-compact · dev · mnt-chat
schemaVersion: 1
role: dev
feature: mnt-chat
taskId: task_e0e94a4c
slash: /agent-dev-ios + /agent-dev-android
mode: qaFixPhase=implement
updatedAt: 2026-09-01T09:30:11.000Z
status: confirmed
packKind: sheet→screen
changeScope: edit_page · qaFailFix
mfeStdUrl: — (cấm)

## DoR
- analy: control-hint · real-data · bff-endpoints · action-tree → **confirmed** (GAP-SA-ANALY-EMPTY-01 · GAP-SA-BFF-MISS-01 CLOSED)
- dual OS: `#sc-mnt-chat` · kit LinmChatThread + LinmChatComposer · copy `mnt.chat.*`
- entry: `#i-chat` / `btn-mnt-chat-{id}` → navigate · **0** `mnt.list.toast.chat` (GAP-MOB-EDIT-01)
- APIs: GET/POST `maintenance/work-orders/{id}/messages` · body `{ content, type:"message" }` · **cấm** invent `api/v1/mnt-chat` · **cấm** ERP.*
- BE/BFF: WorkOrdersController + Mobile.Bff catch-all · Step 4b N/A (Signed)

## VERIFY GATE
| gate | result |
|------|--------|
| iOS xcodegen + xcodebuild iPhone 17 Pro | PASS |
| Android assembleDebug | PASS |
| BFF dotnet build | PASS |

## Debt
- GAP-QA-E2E-* / STORE A3/P6 → next `/agent-qa-mobile` (e2eQa ON) · **cấm** Dev e2e
- GAP-MSG-HUB-01 SignalR DEFER · Notification
- R-QA-01 open until re-QA PASS

## Artifacts
- implement/ios.md · android.md · mnt-chat-qa-fix-plan.md
- _data-analy/mnt-chat-{control-hint,real-data,bff-endpoints,action-tree}.md
- STATUS.md pipeline Dev **done** · QA **pending**
