# Handoff compact — dev

schemaVersion: 1
feature: web-rmms-mnt-log
packKind: list
role: dev
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T06:30:00.000Z
taskId: task_4d6046f4
contentHash: sha256:e4a2b7c91d0f5836a1b2c3d4e5f67890123456789abcdef0123456789abcde0
autoApprove: ON
changeScope: new_page
e2eQa: ON (queued /agent-qa*)

## Decisions
- formPattern: Mobile full/sheet WORK-G · phone ≤430 · #sc-mnt-log · N/A ERP Modal
- mfe: Linm.Web.RMMS.Mobile · mfeStdRoute=/web-rmms-mnt-log · mfeStdUrl http://localhost:9301/web-rmms-mnt-log
- productRoute: /work/log?id= → alias STD · entry peer WORK-L
- be: Mobile.Bff :5202 mobile-bff/api/v1 · Maintenance work-orders · cấm ERP.* · Step 4b skip
- Timeline P1: deriveTimelineRows Signed DTO · newest-first · RO · cấm POST · cấm GPS · cấm invent /logs
- labels: useFormOptions('web-rmms-mnt-log') + init-data · LOOKUP_STATIC fallback · LABEL-01 closed
- build: yarn build PASS · BE N/A (no write)
- T-01…T-04 done · T-BE N/A · T-QA queued
- next: /agent-qa · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | controlHint | T-* |
|----|-------------|-----|
| woCode/title/status/route/workType | Text/Badge RO | T-02 done |
| timeline + rows | Timeline RO | T-03 done |
| emptyState | Empty | T-04 done |
| primaryWrite | N/A | T-04 deny |

## Screens / zones
- WORK-G · peer WORK-L entry
- mfeStdUrl= http://localhost:9301/web-rmms-mnt-log
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mnt-log/ui/prototype/index.html
- prototype zone: #sc-mnt-log · DES-MOB-MNT-LOG
- DES-GRID / LinErpListFilterBar: N/A

## API / tasks
- FormMode↔API: GET {id} · GET init-data · derive client · no POST
- APIs: GET maintenance/work-orders/{id} · GET …/init-data
- T-01…T-04 done · T-BE N/A · T-QA queued

## Debt
- (none blocking) · e2e queued QA · chat/estimate peer out of scope

## Full paths
- implement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mnt-log/implement/web-rmms-mnt-log.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mnt-log/STATUS.md
