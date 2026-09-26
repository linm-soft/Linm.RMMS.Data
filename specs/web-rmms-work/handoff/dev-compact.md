# Handoff compact — dev

schemaVersion: 1
feature: web-rmms-work
packKind: list
role: dev
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T05:20:00.000Z
taskId: task_576843e7
contentHash: sha256:56146b96759461d425413e7e27e31fc1a5a4ed0a5f376f6a526959f62eb62770
autoApprove: ON
changeScope: new_page
e2eQa: ON (queued /agent-qa* · cấm e2e ở Dev)

## Decisions
- formPattern: Mobile list WORK-L · phone ≤430 · #sc-mnt-list · N/A ERP Modal · useFormOptions
- mfe: Linm.Web.RMMS.Mobile · mfeStdRoute=/web-rmms-work · mfeStdUrl http://localhost:9301/web-rmms-work · product /work · peers /work/progress|log|chat?id= · /work/estimate/:id
- be: Mobile.Bff :5202 mobile-bff/api/v1 · GET maintenance/work-orders · init-data · **cấm** ERP.* · **cấm** invent WorkList · Step 4b skip
- T-01…T-05 done · T-BE N/A · T-QA queued
- HARD: FILTER-P1 chips live · CREATE-FROM estimate hub · no FAB · messages not comments · no fake GPS/Me*/web-bff
- verify: yarn build PASS · dotnet build Api PASS · e2e skipped (Dev)
- next: /agent-qa* · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | controlHint | note |
|----|-------------|------|
| search | SearchInput | debounce 320ms · GET ?search |
| filter.status | Chip | init-data live |
| filter.workType | Chip | init-data live |
| hub.estimate | HubRow | → /work/estimate |
| list.card | CardList | Title/Code/Assignee/Due/Route/Status/% |
| action.progress | IconButton | /work/progress?id= |
| action.log | IconButton | /work/log?id= |
| action.chat | IconButton | /work/chat?id= |
| action.estimate | IconButton | /work/estimate/:id |

## Screens / zones
- WORK-L · peer WORK-P · WORK-G · WORK-C · WORK-E (nav-only)
- mfeStdUrl= http://localhost:9301/web-rmms-work
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-work/ui/prototype/index.html#sc-mnt-list
- DES-GRID / LinErpListFilterBar: N/A

## API / tasks
- FormMode↔API: GET work-orders · init-data · peer messages/progress cite
- T-01…T-05 done · T-BE N/A · T-QA pending
- APIs: GET /maintenance/work-orders · GET …/init-data · (peer) GET/POST …/{id}/messages · POST …/{id}/progress

## Debt
- GAP-MOB-MNT-PROG-GPS-01 carry peer progress
- Peer shells nav-only (full CRUD later)

## Full paths
- implement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-work/implement/web-rmms-work.md
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-work/task/web-rmms-work.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-work/STATUS.md
