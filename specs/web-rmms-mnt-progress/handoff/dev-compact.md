# Handoff compact — dev

schemaVersion: 1
feature: web-rmms-mnt-progress
packKind: list
role: dev
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-27T13:55:00.000Z
taskId: task_48aba3d5
contentHash: sha256:544d007b5b40b3f3b71bb94aa78e804b2342af0c6eb7ec1edcea4b76b1b28080
autoApprove: ON
changeScope: edit_page
e2eQa: ON (queued /agent-qa* · cấm e2e ở Dev)

## Decisions
- changeScope: edit_page · Pattern B · cite SUBMIT-VALIDATE
- formPattern: Mobile full/sheet WORK-P · phone ≤430 · #sc-mnt-progress · N/A ERP Modal · N/A DES-GRID
- mfe: Linm.Web.RMMS.Mobile · mfeStdRoute=/cong-viec/tien-do · mfeStdUrl http://localhost:9301/cong-viec/tien-do · product /work/progress?id= · cấm /web-rmms-mnt-progress
- be: Mobile.Bff :5202 · GET {id}/init-data · POST progress/complete · cấm ERP.* · Step 4b skip · T-BE N/A
- T-EDIT-01: disabled={saving} only · bỏ ctasDisabled GPS pre-lock
- T-EDIT-02: validationBanner on click · keys mnt.progress.gps.* (deny/required/unavailable) · dismiss
- T-EDIT-03: capture=environment · GPS→Note · cấm fake · cấm lat body
- verify: yarn build PASS · e2e skipped (Dev)
- next: /agent-qa* · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | controlHint | note |
|----|-------------|------|
| woCode/title/status/route/workType | Text/Badge RO | GET {id} keep |
| progressPercent | Number/Slider | POST progress keep |
| note | Text | + GPS suffix keep |
| lat/lng/accuracyM | GPS | Note only · Pattern B |
| validationBanner | Banner | NEW · on click |
| photoLocalIds | FileMulti | +capture=environment |
| submitProgress | Button | disabled=saving only |
| submitComplete | Button | disabled=saving only |

## Screens / zones
- WORK-P · WORK-P-GPS · (peer WORK-L)
- mfeStdUrl= http://localhost:9301/cong-viec/tien-do
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mnt-progress/ui/prototype/index.html
- reviewUrl deny= …/index.html?deny=1
- prototype zone: #sc-mnt-progress
- DES-GRID / LinErpListFilterBar: N/A

## API / tasks
- FormMode↔API: GET {id} · POST progress · POST complete · GET init-data · unchanged
- Body: Progress {progressPercent,note?} · Complete {note?} · GPS→Note
- T-EDIT-01…03 done · T-BE N/A · T-QA pending
- APIs: mobile-bff/api/v1/maintenance/work-orders/{id}[/progress|/complete] · init-data

## Debt
- GAP-MEDIA Signed defer P2

## Full paths
- implement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mnt-progress/implement/web-rmms-mnt-progress.md
- code: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile/src/pages/WebRmmsMntProgress/MntProgressPage.tsx
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mnt-progress/STATUS.md
