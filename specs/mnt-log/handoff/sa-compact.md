# Handoff compact — sa

schemaVersion: 1
feature: mnt-log
packKind: sheet
role: sa
status: done
skillVersion: 2026.08.25.01
workflowVersion: 2026.09.19.2
rulesVersion: 2026.09.19.5
writtenAt: 2026-09-19T13:50:00.000Z
taskId: task_217b18b0
versionGate: recheck_new
dorGate: PASS
solution_confirm: approve

## Decisions
- changeScope: new_page (hash refresh · Must 0)
- formPattern: N/A · surface **Screen** `#sc-mnt-log` (meta sheet · cấm bottom-sheet)
- mfe / be: native · BFF GET `maintenance/work-orders/{id}` · opt init-data · **cấm** invent logs/history · cấm ERP.* / mfeStdUrl
- FormMode↔API: view → GET `{id}` primary · write **none** · timeline = client derive WorkOrderDto
- entity/migration: reuse `rmms_work_orders` · Step 4b **N/A** · T-BE-MIG n/a
- TZ/XCO/SHARE: tz_na · xco_na · share_na
- offline: toast+empty · GPS/camera n/a · store: no new claim
- solution_confirm: approve (autoApprove ON)
- open questions: none · HIST-01 CLOSED P1 · A11Y-01 Should only
- chain: không (roleOnly=sa · GAP-PKT-ROLE-01)

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
- reviewUrl: Design dual proto `#sc-mnt-log`

## API / tasks (ids only)
- FormMode↔API: view→GET `maintenance/work-orders/{id}` · opt init-data · write none · derive timeline
- API-01 GetById primary · API-02 init-data opt · **cấm** invent `…/logs`
- Tasks: `T-IOS-MNT-LOG` · `T-AND-MNT-LOG` · `T-BE-MNT-LOG-HIST` DEFER · T-BFF/MIG n/a
- next: `/agent-tl-mobile` · enqueue sibling: none

## UNCLEAR
- none

## Full paths (Read only if needed)
- solution: `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/mnt-log/be/solution-discovery.md`
- design compact: `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/mnt-log/handoff/design-compact.md`
- bff: `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/mnt-log-bff-endpoints.md`
- real-data: `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/mnt-log-real-data.md`
- STATUS: `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/mnt-log/STATUS.md`
