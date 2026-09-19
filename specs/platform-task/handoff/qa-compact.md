# Handoff compact — qa

schemaVersion: 1
feature: platform-task
packKind: platform
role: qa
status: done
skillVersion: 2026.08.25.02
writtenAt: 2026-09-18T18:58:30.000Z
taskId: task_de5e3170

## Decisions
- changeScope: new_page
- formPattern: platform hub (list+detail+parcel) · N/A DES-GRID
- mfe: D:\MFE-CORE\Linm.Web.Task · live mfeStdUrl=`http://localhost:8608/platform-task`
- be: cite Medical P1 · Step 4b N/A
- e2eQa: ON · method=`e2e runtime · start:std + docker + yarn e2e-qa`
- verdict: **PASS** → phase=review (cấm phase=done)
- open questions: none (legacy STATUS :9301 noted)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| list | Công việc | Tabs+filters | mine/pool/sla |
| detail | Chi tiết | lifecycle | /cv/:id |
| parcel | Chat/Comment | ChatSectionParcel | mode=both |

## Screens / zones (ids only)
- DES-PT-LIST / DES-PT-KPI / DES-PT-DETAIL-ACT / DES-MSG-SEC-*
- peerStdUrl=`http://localhost:8608/platform-task`
- PNG: qa/screens/S0.png · S1.png · QA-20.png

## API / tasks (ids only)
- FormMode↔API: cite Medical `/tasks` · sla/*
- T-QA-TASK-01…06 · T-QA-E2E-01 · T-QA-DEMO-01 · T-QA-VI-ENC-01 **PASS**
- AC-T-01…10 covered

## UNCLEAR
- none

## Full paths (Read only if needed)
- qa: D:/AI-QLBD/Linm.RMMS.Data/specs/platform-task/qa/scenarios.md
- implement: D:/AI-QLBD/Linm.RMMS.Data/specs/platform-task/implement/platform-task.md
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/platform-task/task/platform-task.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/platform-task/STATUS.md
