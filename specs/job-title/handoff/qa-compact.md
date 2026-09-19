# Handoff compact — qa

schemaVersion: 1
feature: job-title
packKind: master
role: qa
status: blocked
changeScope: new_page
taskId: task_bd915c30
skillVersion: 2026.09.05.03
workflowVersion: 2026.09.19.01
rulesVersion: 2026.09.19.2
versionGate: ok
writtenAt: 2026-09-18T20:20:00.000Z
handoffTo: qa_fail_rollback
autoApprove: ON (không bỏ gate rollback)
e2eQa: ON
verdict: FAIL
mfeStdUrl: http://localhost:9318/mas/chuc-vu
method: e2e runtime · start:std + docker + yarn e2e-qa

## Decisions
- changeScope: new_page · Slideout data-form-cols=2 · DEM N/A
- S0/S1: page :9318 mở · testid rmms-job-title-list · UTF-8 OK
- Live API :5111 + BFF :5201 `job-titles` / init-data / ui-schema = 404 (image cũ)
- Grid empty «Không có dữ liệu chức vụ» · không Create được
- 🔍 right 1002 vs filter card right 1232 (gap 230) · Nhóm nằm phải nút Tìm
- Title computed 20px ≠ 22px · input 14px
- open questions: none · cấm phase=done · cấm Review

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | nút không mép phải |
| titleGroup | Nhóm | Dropdown | init-data 404 |
| name | Tên | Text | required chặn POST |
| packageHint | Package | Dropdown | required · không option |
| code | Mã | Text | không happy-submit |

## Screens / zones (ids only)
- S-LIST opened · DES-GRID empty · S-FORM slideout opened
- PNG: specs/job-title/qa/screens/S0.png · S1.png · QA-20.png · T-QA-FORM-01.png · QA-FILTER-1280.png · QA-FILTER-768.png · QA-FILTER-375.png

## API / tasks (ids only)
- T-QA-CRUD-01 FAIL · GAP-QA-CRUD-EMPTY-01
- T-QA-FORM-01 FAIL · GAP-QA-FORM-BODY-01
- T-QA-FILTER-01 FAIL · GAP-FILTER-BAR-16
- T-QA-FILTER-02 FAIL · GAP-QA-FILTER-DTM-01
- T-QA-TYP-01 FAIL · GAP-TYP-02
- T-QA-TAB-01 BLOCKED
- Next: queue failed · qa_fail_rollback · không chain Review

## UNCLEAR
- none

## Full paths (Read only if needed)
- scenarios: D:/AI-QLBD/Linm.RMMS.Data/specs/job-title/qa/scenarios.md
- manifest: D:/AI-QLBD/Linm.RMMS.Data/specs/job-title/qa/screens/manifest.json
- implement: D:/AI-QLBD/Linm.RMMS.Data/specs/job-title/implement/job-title.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/job-title/STATUS.md
