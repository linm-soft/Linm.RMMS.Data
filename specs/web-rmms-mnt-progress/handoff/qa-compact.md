# Handoff compact — qa

schemaVersion: 1
feature: web-rmms-mnt-progress
packKind: list
role: qa
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T22:50:00.000Z
taskId: task_ae9d702f
contentHash: sha256:a7e3c91b4d2f6801e5a9b0c3d8f1472e6b5a0d9c4e1f2837a6b5c4d3e2f1098a
autoApprove: ON
e2eQa: ON · runtime PASS
changeScope: new_page

## Decisions
- formPattern: Mobile full/sheet WORK-P · phone 430 · N/A Modal · DES-GRID N/A
- Grid/DES-GRID/LinErpListFilterBar: N/A · T-QA-FILTER WAIVE
- mfe: Linm.Web.RMMS.Mobile · mfeStdRoute=/web-rmms-mnt-progress · :9301 reuse
- be: Mobile.Bff :5202 · API :5111 · cấm ERP.*
- e2e: S0 guest Live GET{id}+GPS OK CTAs on · S1 staff deny=1 CTAs off · QA-20 SH-02 · PNG screens/*.png
- stock yarn e2e-qa: FAIL soft port 5101/5201 → `_capture_mnt_progress.mjs`
- Live: GET work-orders/{id} · WO-DEMO-202609-004 · GPS→Note · no MediaUrl body
- next: /agent-review · roleOnly stop (GAP-PKT-ROLE-01)
- **cấm** phase=done

## Inventory (slim)
| id | controlHint | notes |
|----|-------------|-------|
| woCode/title/status/route/workType | Text/Badge RO | S0 PASS Live |
| progressPercent | Number/Slider | S0=60 · PASS |
| note / lat/lng/accuracyM | Text / GPS | GPS→Note · S0 OK · S1 deny |
| photoLocalIds | FileMulti | local P1 · PASS |
| submitProgress / submitComplete | Button | S0 enabled · S1 disabled |

## Screens / zones (ids only)
- WORK-P · WORK-P-GPS · #sc-mnt-progress · SH-02
- mfeStdUrl= http://localhost:9301/web-rmms-mnt-progress
- screens= specs/web-rmms-mnt-progress/qa/screens/{S0,S1,QA-20}.png

## API / tasks (ids only)
- Live: GET/POST maintenance/work-orders/{id}[/progress|/complete]
- T-QA-CRUD-01 · T-QA-GPS-01 · T-QA-MEDIA-01 · T-QA-LABEL-01 = PASS · T-QA-FILTER = WAIVE
- entity/migration: none · Step 4b N/A

## Debt
- stock e2e port gate · WDS deep-link fulfill · playwright junction · showDevNav
- GAP-MEDIA Signed defer P2

## Full paths
- scenarios: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mnt-progress/qa/scenarios.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mnt-progress/STATUS.md
