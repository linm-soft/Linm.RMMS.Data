# Handoff compact — sa

schemaVersion: 1
feature: web-rmms-mnt-log
packKind: list
role: sa
status: confirmed
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T06:10:00.000Z
taskId: task_591b3de1
contentHash: sha256:c1d8e4f2a90b6c3d5e7f8192a3b4c5d6e7f8091a2b3c4d5e6f708192a3b4c5d6
solution_confirm: approve
autoApprove: ON

## Decisions
- changeScope: new_page · formPattern: Mobile full/sheet · phone ≤430 · N/A ERP Modal · DES-GRID N/A
- domain: Maintenance (`maintenance`) · Live work-orders · DOMAIN-MAP row `web-rmms-mnt-log` applied
- mfeStdRoute: /web-rmms-mnt-log · mfeStdUrl http://localhost:9301/web-rmms-mnt-log · productRoute /work/log?id=
- BFF: Mobile.Bff :5202 · mobile-bff/api/v1 · **cấm** web-bff · **cấm** ERP.* · **cấm** invent `/logs`/LogController
- FormMode↔API: GET {id} · GET init-data · derive client · **no write**
- HIST P1: client-derive Signed DTO (CreatedAt/DueAt/Description/ProgressPercent/Note/UpdatedAt/Status) · newest-first
- GPS: không trên WORK-G · **cấm** fake
- API Mới / entity / migration / Step 4b: **none** at SA
- labels: useFormOptions · init-data · demo N/A · **cấm** Me*
- Out: progress/chat · Me* · invent path · web-bff · POST · native edits
- next: /agent-team-lead · roleOnly stop (GAP-PKT-ROLE-01)

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
- peerStdUrl= http://localhost:9301/web-rmms-work
- prototype zone: #sc-mnt-log · DES-MOB-MNT-LOG
- DES-GRID / LinErpListFilterBar: N/A

## API / tasks (ids only)
- FormMode↔API: GET/{id}+init-data maintenance/work-orders · derive client · no POST
- DOMAIN-MAP: applied · HIST/DMAP GAPs CLOSED
- T-*: T-W5-03 · devSlash=/agent-dev

## UNCLEAR
- (none open — HIST/DMAP/ENTRY/SORT/LABEL closed · LABEL-01 Dev map)

## Full paths (Read only if needed)
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mnt-log/be/solution-discovery.md
- design compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mnt-log/handoff/design-compact.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-mnt-log-real-data.md
- DOMAIN-MAP: D:/AI-QLBD/Linm.RMMS.WebService/docs/DOMAIN-MAP.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mnt-log/STATUS.md
