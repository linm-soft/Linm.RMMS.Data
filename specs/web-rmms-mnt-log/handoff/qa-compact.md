# Handoff compact — qa

schemaVersion: 1
feature: web-rmms-mnt-log
packKind: list
role: qa
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T23:18:06.863Z
taskId: task_3d5fe067
contentHash: sha256:e4a2b7c91d0f5836a1b2c3d4e5f67890123456789abcdef0123456789abcde0
autoApprove: ON
e2eQa: ON · runtime PASS
changeScope: new_page

## Decisions
- formPattern: Mobile full/sheet WORK-G · phone 430 · N/A Modal · DES-GRID N/A
- Grid/DES-GRID/LinErpListFilterBar: N/A · T-QA-FILTER WAIVE
- mfe: Linm.Web.RMMS.Mobile · mfeStdRoute=/web-rmms-mnt-log · :9301 reuse
- be: Mobile.Bff :5202 · API :5111 · cấm ERP.*
- e2e: S0 guest Live GET{id} timeline RO · S1 missing-id emptyState · QA-20 SH-02 · PNG screens/*.png
- stock yarn e2e-qa: FAIL soft port 5101/5201 → `_capture_mnt_log.mjs`
- Live: GET work-orders/{id} · init-data · WO-DEMO-202609-004 · derive 5 rows · 0 POST · 0 GPS
- next: /agent-review · roleOnly stop (GAP-PKT-ROLE-01)
- **cấm** phase=done

## Inventory (slim)
| id | controlHint | notes |
|----|-------------|-------|
| woCode/title/status/route/workType | Text/Badge RO | S0 PASS Live |
| timeline + rows | Timeline RO | S0=5 · newest-first |
| emptyState | Empty | S1 PASS missing id |
| primaryWrite | N/A | hasWriteCta=false |

## Screens / zones (ids only)
- WORK-G · #sc-mnt-log · SH-02
- mfeStdUrl= http://localhost:9301/web-rmms-mnt-log
- screens= specs/web-rmms-mnt-log/qa/screens/{S0,S1,QA-20}.png

## API / tasks (ids only)
- Live: GET maintenance/work-orders/{id} · GET …/init-data · no POST
- T-QA-CRUD/TL/RO/GPS/LABEL/EMPTY/BFF = PASS · T-QA-FILTER = WAIVE
- entity/migration: none · Step 4b N/A

## Debt
- stock e2e port gate · WDS deep-link fulfill · playwright junction · showDevNav

## Full paths
- scenarios: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mnt-log/qa/scenarios.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mnt-log/STATUS.md
