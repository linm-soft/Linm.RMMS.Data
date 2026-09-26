# Handoff compact — review

schemaVersion: 1
feature: web-rmms-work
packKind: list
role: review
status: confirmed
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T05:25:00.000Z
taskId: task_632e4943
contentHash: sha256:56146b96759461d425413e7e27e31fc1a5a4ed0a5f376f6a526959f62eb62770
review_confirm: done
autoApprove: ON
changeScope: new_page
hashSkip: unchanged

## Decisions
- formPattern: Mobile list WORK-L · phone ≤430 · N/A ERP Modal · DES-GRID WAIVE
- Verdict: **PASS** · P0 none · QUERY/SEC/UI-FN/BE-FN PASS
- mfe: Linm.Web.RMMS.Mobile · mfeStdRoute=/web-rmms-work · product /work · peers /work/*
- be: Mobile.Bff :5202 · GET work-orders + init-data · cấm ERP.* · Step 4b N/A
- HARD: FILTER-P1 live · no FAB · CREATE-FROM estimate · messages not comments · no fake GPS/Me*
- QA cite: S0/S1/QA-20 PASS · stock e2e port soft
- next: pipeline done · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | controlHint | review |
|----|-------------|--------|
| search | SearchInput | PASS |
| filter.status/workType | Chip | PASS live |
| hub.estimate | HubRow | PASS · no FAB |
| list.card | CardList | PASS fields |
| action.* | IconButton | PASS nav-only |

## Screens / zones (ids only)
- WORK-L · #sc-mnt-list · peers WORK-P/G/C/E nav-only
- mfeStdUrl= http://localhost:9301/web-rmms-work
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-work/ui/prototype/index.html#sc-mnt-list
- screens= specs/web-rmms-work/qa/screens/{S0,S1,QA-20}.png

## API / tasks (ids only)
- Live: GET maintenance/work-orders · init-data
- T-01…T-05 done · T-BE N/A · T-QA PASS · review_confirm=done
- entity/migration: none

## Debt
- GAP-QA-E2E-STOCK-PORT soft · WDS/playwright soft
- GAP-MOB-MNT-PROG-GPS-01 carry peer · peer shells nav-only

## Full paths
- findings: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-work/review/findings.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-work/STATUS.md
