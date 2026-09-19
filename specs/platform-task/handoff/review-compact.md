# Handoff compact — review

schemaVersion: 1
feature: platform-task
packKind: platform
role: review
status: done
skillVersion: 2026.09.19.01
writtenAt: 2026-09-18T19:15:00.000Z
taskId: task_2e60c5ca

## Decisions
- changeScope: new_page
- formPattern: platform hub (list+detail+parcel) · N/A DES-GRID · N/A form-cols 5
- mfe: D:\MFE-CORE\Linm.Web.Task · mfeStdUrl=`http://localhost:8608/platform-task`
- be: cite Medical `/tasks` · Step 4b N/A · **cấm ERP.***
- review_confirm: **done** (autoApprove ON)
- findings: P0=0 · P1=0 · P2=0 · P3=2 info + 1 sec standalone
- hashSkip: no (prior REVIEW-META draft)
- versionGate: keep_current (SSOT 2026.09.19.01 vs chain 2026.08.25.02)
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| list | Công việc | Tabs+filters | mine pageSize 20 · pool cite |
| detail | Chi tiết | lifecycle | /cv/:id · toolbar back |
| parcel | Chat/Comment | ChatSectionParcel | mode=both |
| create | Tạo công việc | Modal | QA-20 · INFO vs SA P1 OUT |

## Screens / zones (ids only)
- DES-PT-LIST / DES-PT-KPI / DES-PT-DETAIL-ACT / DES-MSG-SEC-*
- peerStdUrl=`http://localhost:8608/platform-task`
- PNG: qa/screens/S0.png · S1.png · QA-20.png (manifest ok)

## API / tasks (ids only)
- FormMode↔API: cite GET/PATCH/POST `/tasks` · GET `/tasks/pool` · sla/*
- T-QA-TASK-01…06 · T-QA-E2E-01 · T-QA-DEMO-01 **PASS**
- fix_gaps: none

## UNCLEAR
- none

## Full paths (Read only if needed)
- findings: D:/AI-QLBD/Linm.RMMS.Data/specs/platform-task/review/findings.md
- meta: D:/AI-QLBD/Linm.RMMS.Data/specs/platform-task/review/REVIEW-META.json
- qa: D:/AI-QLBD/Linm.RMMS.Data/specs/platform-task/qa/scenarios.md
- implement: D:/AI-QLBD/Linm.RMMS.Data/specs/platform-task/implement/platform-task.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/platform-task-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/platform-task-real-data.md
