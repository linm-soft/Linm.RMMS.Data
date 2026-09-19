# Handoff compact — design

schemaVersion: 1
feature: mnt-log
packKind: sheet
role: design
status: done
skillVersion: 2026.08.25.01
workflowVersion: 2026.09.19.2
rulesVersion: 2026.09.19.5
writtenAt: 2026-09-19T13:45:28.000Z
taskId: task_7451543a
versionGate: recheck_new
dorGate: PASS

## Decisions
- changeScope: new_page (hash refresh · Must 0)
- formPattern: N/A · surface **Screen** `#sc-mnt-log` (meta sheet · cấm bottom-sheet)
- real_view_parity: dual proto khớp DA/PO · native kit map · peerStdUrl=—
- mfe / be: native · BFF GET `maintenance/work-orders/{id}` · cấm ERP.* / mfeStdUrl
- design_confirm: approve (autoApprove ON)
- hash skip: cấm re-scan demo (GAP-DES-DEMO-RESCAN-01)
- open questions: none · HIST-01 CLOSED P1 · A11Y-01 Should only
- chain: không (roleOnly=design · GAP-PKT-ROLE-01)

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
- entry: mnt-list `#i-list` (done) · tabs: none · peerStdUrl=—
- reviewUrl iOS: `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/mnt-log/ui/prototype/ios/index.html`
- reviewUrl Android: `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/mnt-log/ui/prototype/android/index.html`
- demoContentHash: sha256:d3ecd6203f20b49c25a282887298b7cf657385f1d610b3304da5a5bb393323d0

## API / tasks (ids only)
- GET `maintenance/work-orders/{id}` primary · init-data opt · cấm invent logs
- HIST-01 CLOSED P1 · CMT OUT → mnt-chat
- next: `/agent-sa-mobile` · enqueue sibling: none

## UNCLEAR
- none

## Full paths (Read only if needed)
- design: `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/mnt-log/ui/design.md`
- ux-analy: `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/mnt-log/ui/ux-analy.md`
- html-to-native-map: `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/mnt-log/ui/html-to-native-map.md`
- demo-parity: `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/mnt-log/ui/review/demo-parity.md`
- proto iOS: `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/mnt-log/ui/prototype/ios/index.html`
- proto Android: `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/mnt-log/ui/prototype/android/index.html`
- control-hint: `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/mnt-log-control-hint.md`
- real-data: `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/mnt-log-real-data.md`
- STATUS: `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/mnt-log/STATUS.md`
