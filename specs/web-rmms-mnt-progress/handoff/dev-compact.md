# Handoff compact — dev

schemaVersion: 1
feature: web-rmms-mnt-progress
packKind: list
role: dev
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T05:50:00.000Z
taskId: task_b4b8ae89
contentHash: sha256:a7e3c91b4d2f6801e5a9b0c3d8f1472e6b5a0d9c4e1f2837a6b5c4d3e2f1098a
autoApprove: ON
changeScope: new_page
e2eQa: ON (queued /agent-qa* · cấm e2e ở Dev)

## Decisions
- formPattern: Mobile full/sheet WORK-P · phone ≤430 · #sc-mnt-progress · N/A ERP Modal · useFormOptions
- mfe: Linm.Web.RMMS.Mobile · mfeStdRoute=/web-rmms-mnt-progress · mfeStdUrl http://localhost:9301/web-rmms-mnt-progress · product /work/progress?id= → alias STD · entry peer WORK-L
- be: Mobile.Bff :5202 mobile-bff/api/v1 · GET {id}/init-data · POST progress/complete · **cấm** ERP.* · invent Progress · Step 4b skip
- GPS: both CTAs · deny disable · cấm fake · GPS→Note only · cấm lat body
- MEDIA P1 local · GAP-MEDIA Signed defer P2 · LABEL list chrome · cấm Me*/web-bff
- T-01…T-05 done · T-BE N/A · T-QA queued
- verify: yarn build PASS · dotnet build sln PASS · e2e skipped (Dev)
- next: /agent-qa* · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | controlHint | note |
|----|-------------|------|
| woCode/title/status/route/workType | Text/Badge RO | GET {id} · chrome badge |
| progressPercent | Number/Slider | POST progress 0–100 |
| note | Text | + GPS suffix on submit |
| lat/lng/accuracyM | GPS | Note only · gate both CTAs |
| photoLocalIds | FileMulti | local preview · no MediaUrl body |
| submitProgress | Button | POST …/progress · GPS * |
| submitComplete | Button | POST …/complete · GPS * |

## Screens / zones
- WORK-P · WORK-P-GPS · (peer WORK-L entry)
- mfeStdUrl= http://localhost:9301/web-rmms-mnt-progress
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mnt-progress/ui/prototype/index.html
- prototype zone: #sc-mnt-progress
- DES-GRID / LinErpListFilterBar: N/A

## API / tasks
- FormMode↔API: GET {id} · POST progress · POST complete · GET init-data
- Body: Progress {progressPercent,note?} · Complete {note?} · GPS→Note
- T-01…T-05 done · T-BE N/A · T-QA pending
- APIs: mobile-bff/api/v1/maintenance/work-orders/{id}[/progress|/complete] · init-data

## Debt
- GAP-MEDIA Signed defer P2
- WORK-G/C/E peer stubs out of scope

## Full paths
- implement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mnt-progress/implement/web-rmms-mnt-progress.md
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mnt-progress/task/web-rmms-mnt-progress.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mnt-progress/STATUS.md
