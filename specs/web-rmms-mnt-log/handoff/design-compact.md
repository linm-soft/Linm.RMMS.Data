# Handoff compact — design

schemaVersion: 1
feature: web-rmms-mnt-log
packKind: list
role: design
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T06:05:00.000Z
taskId: task_a02de17b
contentHash: sha256:b8f4e2a19c7d5036e0a1b2c3d4e5f67890123456789abcdef0123456789abcd
design_confirm: approve
autoApprove: ON
real_view_parity: v1
shared_grid_example: N/A

## Decisions
- changeScope: new_page
- formPattern: Mobile full/sheet · phone 430 · N/A ERP Modal/Slideout
- Grid AC Kind B / DES-GRID / LinErpListFilterBar: N/A phone timeline
- Report AC / DES-RPT: N/A
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-mnt-log · productRoute /work/log?id=
- be: D:/AI-QLBD/Linm.RMMS.WebService · Maintenance · Mobile.Bff :5202 · cấm ERP.*
- demo: N/A · hash skip · cấm rescan (GAP-DES-DEMO-RESCAN-01)
- WORK-G primary · entry peer WORK-L (web-rmms-work)
- timeline: client-derive Signed DTO · newest-first · cấm invent /logs · cấm POST
- GPS: không capture trên WORK-G · cấm fake
- LABEL: init-data + useFormOptions · cấm hardcode · cấm Me*
- primaryWrite: N/A · cấm write CTA
- open: UNCLEAR-HIST-API · GAP-HIST/DMAP → SA
- next: /agent-sa · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| woCode/title/status/route/workType | header WO | Text/Badge RO | GET {id} |
| timeline + rows | nhật ký | Timeline RO | derive · newest-first |
| emptyState | trống | Empty | thiếu id / GET fail |
| primaryWrite | — | N/A | cấm write CTA |

## Screens / zones (ids only)
- WORK-G · (peer WORK-L entry)
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mnt-log/ui/prototype/index.html
- reviewUrl empty= …/index.html?empty=1
- reviewUrl fail= …/index.html?fail=1
- peerStdUrl= http://localhost:9301/web-rmms-work
- prototype zone: #sc-mnt-log · DES-MOB-MNT-LOG
- real_view_parity= v1
- DES-GRID / LinErpListFilterBar: N/A phone

## API / tasks (ids only)
- FormMode↔API: GET {id} · derive client · GET init-data · no write
- AC: AC-TL-01..03 · AC-HDR-01 · AC-RO-01 · AC-BFF-01 · AC-GPS-01 · AC-LBL-01
- real-data §A+§B: PASS · T-*: T-W5-03 · devSlash=/agent-dev

## UNCLEAR
- UNCLEAR-HIST-API: OPEN→SA — P1 derive · cấm invent /logs
- GAP-MOB-MNT-LOG-HIST-01 · GAP-MOB-MNT-LOG-DMAP-01 → SA
- GAP-MOB-MNT-LOG-SCR-01 · GAP-MOB-MNT-LOG-PACK-01: CLOSED Design PASS

## Full paths (Read only if needed)
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mnt-log/ui/design.md
- prototype: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mnt-log/ui/prototype/index.html
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-mnt-log-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-mnt-log-real-data.md
- po: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mnt-log/po/requirement.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mnt-log/STATUS.md
