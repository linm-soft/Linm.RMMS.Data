# Handoff compact — po

schemaVersion: 1
feature: mnt-log
packKind: sheet
role: po
status: done
skillVersion: 2026.08.25.01
workflowVersion: 2026.09.19.2
rulesVersion: 2026.09.19.5
writtenAt: 2026-09-19T13:42:01.000Z
taskId: task_5751a874
versionGate: recheck_new
dorGate: PASS

## Decisions
- changeScope: new_page (shipped · hash refresh · Must 0)
- formPattern: N/A · surface **Screen** `#sc-mnt-log` (meta sheet · không Modal/Sheet chrome)
- Grid AC / Report AC: N/A (native sheet · cấm Lin* grid)
- Leave: readonly · back pop · no dirty modal · toast/empty only
- mfe / be: native · BFF GET `maintenance/work-orders/{id}` · cấm ERP.* / mfeStdUrl
- controlHint cite: `_data-analy/mnt-log-control-hint.md` + real-data §A+§B
- open questions: none · HIST-01 CLOSED P1 · A11Y-01 Should only
- hash skip: cấm re-scan demo (GAP-PO-DEMO-RESCAN-01)
- chain: không (roleOnly=po · GAP-PKT-ROLE-01)

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
- reviewUrl: Design dual `prototype/{ios,android}/index.html#sc-mnt-log`
- devSlash: `/agent-dev-ios` + `/agent-dev-android`

## API / tasks (ids only)
- GET `maintenance/work-orders/{id}` primary · init-data opt · cấm invent logs
- Device AC: offline toast/empty · GPS N/A · leave N/A · cấm native alert · typography 13/≥16/17
- HIST-01 CLOSED P1 · CMT OUT → mnt-chat
- enqueue sibling: none

## UNCLEAR
- none

## Full paths (Read only if needed)
- requirement: `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/mnt-log/po/requirement.md`
- control-hint: `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/mnt-log-control-hint.md`
- real-data: `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/mnt-log-real-data.md`
- prior compact: `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/mnt-log/handoff/data_analy-compact.md`
- STATUS: `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/mnt-log/STATUS.md`
