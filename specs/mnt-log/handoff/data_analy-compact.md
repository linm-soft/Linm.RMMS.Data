# Handoff compact — data_analy

schemaVersion: 1
feature: mnt-log
packKind: sheet
role: data_analy
status: done
skillVersion: 2026.08.31.2
workflowVersion: 2026.09.19.2
rulesVersion: 2026.09.19.5
writtenAt: 2026-09-19T13:38:11.000Z
taskId: task_6e7aa15d
versionGate: recheck_new

## Decisions
- changeScope: new_page (shipped · this turn hash refresh · Must 0)
- formPattern: N/A (readonly screen `#sc-mnt-log`)
- mfe / be: native · BFF `mobile-bff/api/v1/maintenance/work-orders/{id}` · cấm ERP.* / mfeStdUrl
- real-data §A/B: yes · map: none · progress: readonly derive
- open questions: none · GAP-MOB-A11Y-01 Should only

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| screenTitle | Nhật ký xử lý | TopBar | DES-MOB-MNT-LOG |
| woTitle/code/status | header WO | Text/Badge readonly | GET detail |
| timeline | Nhật ký | TimelineList | client derive GetById |
| empty | Chưa có nhật ký | EmptyChrome | |
| actLog | Nhật ký xử lý | IconButton | parent `#i-list` |

## Screens / zones (ids only)
- `#sc-mnt-log` · `DES-MOB-MNT-LOG` · `#wo-header` · `#wo-title` · `#wo-code` · `#wo-status-badge` · `#section-log` · `#timeline` · `#empty` · `#banner-missing`
- entry: mnt-list `#i-list` (done card)
- tabs: none · peerStdUrl=—

## API / tasks (ids only)
- GET `maintenance/work-orders/{id}` primary · init-data opt · **cấm** invent logs
- HIST-01 CLOSED P1 · CMT OUT → mnt-chat
- enqueue sibling: none · GAP-PKT-ROLE-01

## UNCLEAR
- none

## Full paths (Read only if needed)
- control-hint: `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/mnt-log-control-hint.md`
- real-data: `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/mnt-log-real-data.md`
- bff: `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/mnt-log-bff-endpoints.md`
- action-tree: `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/mnt-log-action-tree.md`
- bugs: `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/mnt-log/qa/bugs/mnt-log.md`
- STATUS: `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/mnt-log/STATUS.md`
