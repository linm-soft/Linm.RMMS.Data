# Handoff compact — qa

schemaVersion: 1
feature: ai-vision-service
packKind: ai
role: qa
status: blocked
skillVersion: 2026.09.05.03
rulesVersion: 2026.09.12.2
contentHash: sha256:90961d05e9d8c5fb4be3e151dc476d18c4c65e093aa0d9151d2a86ba6962702f
writtenAt: 2026-09-12T08:20:00.000Z
taskId: task_fe3ee27b
changeScope: edit_page
verdict: FAIL

## Decisions
- changeScope: edit_page · e2eQa ON runtime
- method: start:std AiVision :9301 + docker WS+Vision + e2e-qa
- mfeStdUrl: http://localhost:9301/ai-vision-service
- T-QA-AI/FILTER: PASS (shots) · T-QA-CRUD/FORM: FAIL
- gaps: GAP-QA-CRUD-EMPTY-01 · GAP-QA-DEMO-NOTE-01
- open questions: none
- next: qa_fail_rollback · cấm completed

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| hub | AI Vision | hub | S0/S1/QA-20 PASS |
| peer list | detections/AAD | filter+grid | empty CRUD |
| form | Tạo mới phát hiện | Full | badge Tạo mới FAIL |

## Screens / zones (ids only)
- S-HOST PASS · S-LIST-AAD/AIV shot · S-FORM-AIV FAIL chrome
- peerStdUrl=http://localhost:9301/ai-vision-service
- PNG: specs/ai-vision-service/qa/screens/{S0,S1,QA-20,T-QA-*}.png

## API / tasks (ids only)
- T-QA-AI-01 PASS · T-QA-FILTER-01/02 PASS · T-QA-CRUD-01 FAIL · T-QA-FORM-01 FAIL
- routes: /ai-kd · /ai-kd/phat-hien-ts · /ai-kd/tao-moi

## UNCLEAR
- none

## Full paths (Read only if needed)
- scenarios: D:/AI-QLBD/Linm.RMMS.Data/specs/ai-vision-service/qa/scenarios.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/ai-vision-service/STATUS.md
- implement: D:/AI-QLBD/Linm.RMMS.Data/specs/ai-vision-service/implement/ai-vision-service.md
