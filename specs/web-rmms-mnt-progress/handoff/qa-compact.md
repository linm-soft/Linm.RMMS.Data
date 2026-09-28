# Handoff compact — qa

schemaVersion: 1
feature: web-rmms-mnt-progress
packKind: list
role: qa
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-27T14:08:01.258Z
taskId: task_32c507a0
contentHash: sha256:544d007b5b40b3f3b71bb94aa78e804b2342af0c6eb7ec1edcea4b76b1b28080
autoApprove: ON
e2eQa: ON · runtime PASS
changeScope: edit_page

## Decisions
- formPattern: Mobile full/sheet WORK-P · phone 430 · N/A Modal · DES-GRID N/A
- Grid/DES-GRID/LinErpListFilterBar: N/A · T-QA-FILTER WAIVE
- mfe: Linm.Web.RMMS.Mobile · mfeStdRoute=/cong-viec/tien-do · url http://localhost:9301/m/cong-viec/tien-do · :9301 reuse
- be: Mobile.Bff :5202 · API :5111 · cấm ERP.*
- Pattern B: CTA disabled=saving only · GPS deny → banner on click · capture=environment
- e2e: S0 staff Live+GPS CTAs on · S1 deny=1 banner+CTAs on · QA-20 LG-00 · PNG screens/*.png
- stock yarn e2e-qa: FAIL soft port 5101/5201 → `_capture_mnt_progress.mjs` + BFF proxy
- Live: GET work-orders/{id} · WO-DEMO-202609-004 · GPS→Note · no MediaUrl body
- next: /agent-review · roleOnly stop (GAP-PKT-ROLE-01)
- **cấm** phase=done

## Inventory (slim)
| id | controlHint | notes |
|----|-------------|-------|
| woCode/title/status/route/workType | Text/Badge RO | S0 PASS Live |
| progressPercent | Number/Slider | S0=60 · PASS |
| note / lat/lng/accuracyM | Text / GPS | GPS→Note · S0 OK · S1 deny |
| validationBanner | Banner | S1 on click · PASS |
| photoLocalIds | FileMulti | capture=environment · PASS |
| submitProgress / submitComplete | Button | S0/S1 enabled (saving only) |

## Screens / zones (ids only)
- WORK-P · WORK-P-GPS · #sc-mnt-progress · LG-00
- mfeStdUrl= http://localhost:9301/m/cong-viec/tien-do
- screens= specs/web-rmms-mnt-progress/qa/screens/{S0,S1,QA-20}.png

## API / tasks (ids only)
- Live: GET/POST maintenance/work-orders/{id}[/progress|/complete]
- T-QA-CRUD/GPS/EDIT-01..03/MEDIA/LABEL = PASS · T-QA-FILTER = WAIVE
- entity/migration: none · Step 4b N/A

## Debt
- stock e2e port gate · cloud BFF proxy · WDS deep-link fulfill
- GAP-MEDIA Signed defer P2

## Full paths
- scenarios: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mnt-progress/qa/scenarios.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mnt-progress/STATUS.md
