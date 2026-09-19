# Handoff compact — team_lead

schemaVersion: 1
feature: mnt-log
packKind: sheet
role: team_lead
status: done
skillVersion: 2026.08.25.01
workflowVersion: 2026.09.19.2
rulesVersion: 2026.09.19.5
writtenAt: 2026-09-19T13:52:04.000Z
taskId: task_0501aefa
versionGate: recheck_new
dorGate: PASS

## Decisions
- changeScope: new_page (hash refresh · Must 0)
- formPattern: N/A · surface **Screen** `#sc-mnt-log` (meta sheet · cấm bottom-sheet)
- mfe / be: native · BFF GET `maintenance/work-orders/{id}` · opt init-data · **cấm** invent logs · cấm ERP.* / mfeStdUrl
- route_confirm: **route_a** — mnt-list `#i-list` (done) → push `#sc-mnt-log` · Back mnt-list · tabs none · tab **work**
- ios/android_repo: reuse dual · scaffold **không** `/mobile-app-architecture`
- kit_missing_confirm: N/A · T-KIT **n/a**
- T-BE-*/T-BFF: **n/a** P1 · HIST **DEFER** · Step 4b **N/A**
- autoApprove: ON · e2eQa ON queued `/agent-qa*` only
- open questions: none · HIST-01 CLOSED P1 · A11Y-01 Should
- chain: không (roleOnly=team_lead · GAP-PKT-ROLE-01)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| screenTitle | Nhật ký xử lý | TopBar | DES-MOB-MNT-LOG |
| woTitle/code/status | header WO | Text/Badge readonly | GET detail |
| timeline | Nhật ký | TimelineList | client derive · newest-first |
| empty | Chưa có nhật ký | EmptyChrome | |
| bannerMissing | Thiếu công việc | Banner | thiếu nav id |
| actLog | Nhật ký xử lý | IconButton | parent `#i-list` done |

## Screens / zones (ids only)
- `#sc-mnt-log` · `DES-MOB-MNT-LOG` · Screen · FormMode=view
- `#wo-header` · `#wo-title` · `#wo-code` · `#wo-status-badge` · `#section-log` · `#timeline` · `#empty` · `#banner-missing`
- entry: mnt-list `#i-list` (done) · peerStdUrl=—

## API / tasks (ids only)
- FormMode↔API: view→GET `maintenance/work-orders/{id}` · write none · derive timeline
- **T-IOS-MNT-LOG** · deps SA+route_a · **devSlash** `/agent-dev-ios` · `/ios-new-screen` · `/dev-ios-swiftui`
- **T-AND-MNT-LOG** · deps SA+route_a · **devSlash** `/agent-dev-android` · `/android-new-screen` · `/dev-android-compose`
- T-BE-API / T-BE-MIG / T-BFF / T-KIT: **n/a** · T-BE-MNT-LOG-HIST **DEFER**
- T-QA-MNT-LOG · T-QA-TAB-01 (cite) · next serial Dev iOS→Android
- enqueue sibling: none

## UNCLEAR
- none

## Full paths (Read only if needed)
- task: `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/mnt-log/task/mnt-log.md`
- sa compact: `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/mnt-log/handoff/sa-compact.md`
- design compact: `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/mnt-log/handoff/design-compact.md`
- STATUS: `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/mnt-log/STATUS.md`
