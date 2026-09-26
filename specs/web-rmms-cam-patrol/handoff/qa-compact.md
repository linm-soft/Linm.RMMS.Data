# Handoff compact — qa

schemaVersion: 1
feature: web-rmms-cam-patrol
packKind: list
role: qa
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T01:25:00.000Z
taskId: task_14cd1dcc
contentHash: sha256:cd46c9486c0a3fe71165c27906508a1608ba46cca1351fe9df832ab7b2efa68c
autoApprove: ON
e2eQa: ON · runtime PASS
qa_confirm: approve

## Decisions
- changeScope: new_page
- formPattern: Mobile full CP-01 · phone 430 · N/A Modal · Kind B WAIVE
- mfe: Linm.Web.RMMS.Mobile · mfeStdRoute=/web-rmms-cam-patrol · :9301 reuse
- be: Mobile.Bff :5202 · API :5111 · cấm ERP.*
- e2e: S0 guest gate · S1 staff FINDER+GPS Acc12 · QA-20 SH-02 · PNG screens/*.png
- stock yarn e2e-qa: FAIL soft DUP S0=S1 → `_capture_cam.mjs` PASS
- HARD: GPS Acc≤30 · ẩn score · ImageBase64 · skip dismiss — smoke OK
- next: /agent-review · roleOnly stop (GAP-PKT-ROLE-01)
- **cấm** phase=done · **cấm** GAP-QA-E2E-KILL-01

## Inventory (slim)
| id | controlHint | notes |
|----|-------------|-------|
| cpGuestGate/Login | Button | S0 PASS |
| finder/stamp/gps | CameraViewfinder+GPS | S1 PASS Acc=12 |
| btnDetect | Button | S1 PASS enabled |
| loginUser/Pass/Submit | LoginSheet | QA-20 PASS |

## Screens / zones (ids only)
- CP-01 · DES-MOB-CAM-PATROL · DES-MOB-CAM-FINDER · SH-02
- mfeStdUrl= http://localhost:9301/web-rmms-cam-patrol
- screens= specs/web-rmms-cam-patrol/qa/screens/{S0,S1,QA-20}.png

## API / tasks (ids only)
- Live: GET patrol/sessions (S1 stamp) · LoginSheet auth
- T-QA-CRUD/GPS/SCORE=PASS · T-QA-FILTER=WAIVE · detect/confirm POST not forced
- entity/migration: none

## Debt
- stock DUP · historyApiFallback 404 · capture=file input soft
- UNCLEAR: none

## Full paths (Read only if needed)
- scenarios: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-patrol/qa/scenarios.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-patrol/STATUS.md
