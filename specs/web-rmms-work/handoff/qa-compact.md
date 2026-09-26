# Handoff compact — qa

schemaVersion: 1
feature: web-rmms-work
packKind: list
role: qa
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T05:20:00.000Z
taskId: task_317d09e8
contentHash: sha256:56146b96759461d425413e7e27e31fc1a5a4ed0a5f376f6a526959f62eb62770
autoApprove: ON
e2eQa: ON · runtime PASS
changeScope: new_page

## Decisions
- formPattern: Mobile list WORK-L · phone 430 · N/A Modal · DES-GRID N/A
- Grid/DES-GRID/LinErpListFilterBar: N/A · T-QA-FILTER WAIVE · Chip FILTER-P1
- mfe: Linm.Web.RMMS.Mobile · mfeStdRoute=/web-rmms-work · :9301 reuse
- be: Mobile.Bff :5202 · API :5111 · cấm ERP.*
- e2e: S0 guest WORK-L Live · S1 staff+chip Đang thực hiện · QA-20 SH-02 · PNG screens/*.png
- stock yarn e2e-qa: FAIL soft port 5101/5201 → `_capture_work.mjs`
- Live: GET work-orders · init-data chips · hasFab=false · hub estimate
- next: /agent-review · roleOnly stop (GAP-PKT-ROLE-01)
- **cấm** phase=done

## Inventory (slim)
| id | controlHint | notes |
|----|-------------|-------|
| search | SearchInput | S0/S1 PASS |
| filter.status/workType | Chip | FILTER-P1 live PASS |
| hub.estimate | HubRow | S0/S1 PASS · no FAB |
| list.card | CardList | S0=7 · S1=3 filtered |
| action.* | IconButton | progress/log/chat/estimate present |

## Screens / zones (ids only)
- WORK-L · #sc-mnt-list · SH-02 · #WORK-ROOT
- mfeStdUrl= http://localhost:9301/web-rmms-work
- screens= specs/web-rmms-work/qa/screens/{S0,S1,QA-20}.png

## API / tasks (ids only)
- Live: GET maintenance/work-orders · init-data
- T-QA-CRUD-01 · T-QA-GRID-01 · T-QA-PEER-01 = PASS · T-QA-FILTER = WAIVE
- entity/migration: none · Step 4b N/A

## Debt
- stock e2e port gate · WDS deep-link fulfill · playwright junction · showDevNav
- GAP-MOB-MNT-PROG-GPS-01 carry peer · guestGate N/A list-open

## Full paths
- scenarios: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-work/qa/scenarios.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-work/STATUS.md
