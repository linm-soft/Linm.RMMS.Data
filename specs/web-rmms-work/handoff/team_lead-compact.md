# Handoff compact — team_lead

schemaVersion: 1
feature: web-rmms-work
packKind: list
role: team_lead
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T05:10:00.000Z
taskId: task_67584d10
contentHash: sha256:56146b96759461d425413e7e27e31fc1a5a4ed0a5f376f6a526959f62eb62770
team_lead_confirm: approve
autoApprove: ON
changeScope: new_page
route_confirm: confirm
e2eQa: ON (queued /agent-qa*)

## Decisions
- formPattern: Mobile list WORK-L · phone ≤430 · Android 1-1 #sc-mnt-list · N/A ERP Modal · useFormOptions
- mfe: Linm.Web.RMMS.Mobile · mfeStdRoute=/web-rmms-work · mfeStdUrl http://localhost:9301/web-rmms-work · product /work · peers /work/progress|log|chat?id= · /work/estimate/:id
- be: Mobile.Bff :5202 mobile-bff/api/v1 · Maintenance work-orders · cấm ERP.* · cấm invent WorkList · Step 4b skip
- T-01 route+shell · T-02 search+chips live · T-03 CardList · T-04 hub+peer nav no FAB · T-05 BFF+labels+parity · T-BE N/A · T-QA queued
- HARD: FILTER-P1 chips live · CREATE-FROM estimate · messages not comments · cấm fake GPS/Me*/web-bff
- DES-GRID: N/A phone · demo N/A · cite T-W5-01 · AC-L-01…12
- next: /agent-dev · roleOnly stop (GAP-PKT-ROLE-01) · e2eQa queued QA

## Inventory (slim)
| id | controlHint | T-* |
|----|-------------|-----|
| search | SearchInput | T-02 |
| filter.status | Chip | T-02 |
| filter.workType | Chip | T-02 |
| hub.estimate | HubRow | T-04 |
| list.card | CardList | T-03 |
| action.progress | IconButton | T-04 |
| action.log | IconButton | T-04 |
| action.chat | IconButton | T-04 |
| action.estimate | IconButton | T-04 |

## Screens / zones
- WORK-L · (peer WORK-P · WORK-G · WORK-C · WORK-E)
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-work/ui/prototype/index.html#sc-mnt-list
- peerStdUrl= http://localhost:9301/web-rmms-work
- DES-GRID / LinErpListFilterBar: N/A

## API / tasks
- FormMode↔API: GET work-orders · init-data · GET{id}/messages/progress cite peer
- T-01…T-05 pending · T-BE N/A · T-QA queued · devSlash=/agent-dev

## UNCLEAR
- (none blocking) · GAP-MOB-MNT-PROG-GPS-01 carry peer progress

## Full paths
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-work/task/web-rmms-work.md
- sa: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-work/be/solution-discovery.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-work/ui/design.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-work/STATUS.md
