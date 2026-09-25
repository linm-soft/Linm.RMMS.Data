# Handoff compact — dev

schemaVersion: 1
feature: mnt-log
packKind: sheet
role: dev
status: done
skillVersion: 2026.08.25.01
workflowVersion: 2026.09.19.2
rulesVersion: 2026.09.19.5
writtenAt: 2026-09-19T14:00:00.000Z
taskId: task_5e1ef0bb
versionGate: recheck_new
dorGate: PASS

## Decisions
- changeScope: new_page (hash refresh · Must 0)
- formPattern: N/A · surface **Screen** `#sc-mnt-log` (meta sheet · cấm bottom-sheet)
- mfe / be: native · BFF GET `maintenance/work-orders/{id}` · client derive timeline · **cấm** invent logs / ERP.* / mfeStdUrl
- FormMode↔API: view→GET `{id}` · write **none** · Step 4b **N/A**
- ios/android: dual ship · route_a mnt-list `#i-list` → push `#sc-mnt-log`
- A11Y-01: **CLOSED** · `mnt.log.a11y` on log glyph (iOS+Android)
- autoApprove: ON · e2eQa ON queued `/agent-qa*` only · **cấm** e2e/start:std this role
- open questions: none · HIST-01 CLOSED P1
- chain: không (roleOnly=dev · GAP-PKT-ROLE-01)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| screenTitle | Nhật ký xử lý | TopBar | DES-MOB-MNT-LOG |
| woTitle/code/status | header WO | Text/Badge readonly | GET detail |
| timeline | Nhật ký | TimelineList | client derive · newest-first |
| empty | Chưa có nhật ký | EmptyChrome | `#empty` |
| bannerMissing | Thiếu công việc | Banner | `#banner-missing` |
| actLog | Nhật ký xử lý | IconButton | `#i-list` · a11y |

## Screens / zones (ids only)
- `#sc-mnt-log` · `DES-MOB-MNT-LOG` · Screen · FormMode=view
- `#wo-header` · `#wo-title` · `#wo-code` · `#wo-status-badge` · `#section-log` · `#timeline` · `#empty` · `#banner-missing`
- entry: mnt-list `#i-list` (done) · tabs: none · peerStdUrl=— · mfeStdUrl=—

## API / tasks (ids only)
- FormMode↔API: view→GET `maintenance/work-orders/{id}` · write none · derive timeline
- T-IOS-MNT-LOG · T-AND-MNT-LOG · **PASS**
- T-BE/T-BFF/MIG: **n/a** · HIST **DEFER**
- VERIFY: iOS xcodegen+xcodebuild **PASS** · Android assembleDebug **PASS** · BFF dotnet **PASS**
- debt: none Must · next `/agent-qa-mobile` (queued)
- enqueue sibling: none

## UNCLEAR
- none

## Full paths (Read only if needed)
- implement iOS: `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/mnt-log/implement/ios.md`
- implement Android: `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/mnt-log/implement/android.md`
- team_lead compact: `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/mnt-log/handoff/team_lead-compact.md`
- STATUS: `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/mnt-log/STATUS.md`
