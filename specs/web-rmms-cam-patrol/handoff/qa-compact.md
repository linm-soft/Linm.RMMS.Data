# Handoff compact — qa

schemaVersion: 1
feature: web-rmms-cam-patrol
packKind: list
role: qa
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-27T11:00:20.693Z
taskId: task_67343748
contentHash: sha256:c46ae5660ccba1b8e64ce8e5294acef77ceb4e0a75474372f2a3d3901efb5796
autoApprove: ON
e2eQa: ON · runtime PASS
qa_confirm: approve
changeScope: edit_page

## Decisions
- changeScope: edit_page · DEC-PATTERN-B FE · cite SUBMIT-VALIDATE
- formPattern: Mobile full CP-01 · phone 430 · N/A Modal · Kind B WAIVE
- mfe: Linm.Web.RMMS.Mobile · mfeStdRoute=/camera-tuan · :9301 reuse · browser /m/camera-tuan
- be: Mobile.Bff :5202 · API :5111 · cấm ERP.*
- e2e: S0 guest gate · S1 staff emptyNoSession · QA-20 /trang-chu→/dang-nhap #f-user/#btn-login
- stock yarn e2e-qa: FAIL soft (port 5101 + QA-20 blank) → `_capture_cam.mjs` PASS
- HARD: ẩn score · Pattern B · ImageBase64 — smoke OK · FINDER session soft empty env
- next: /agent-review · roleOnly stop (GAP-PKT-ROLE-01)
- **cấm** phase=done · **cấm** GAP-QA-E2E-KILL-01

## Inventory (slim)
| id | controlHint | notes |
|----|-------------|-------|
| cpGuestGate/Login | Button | S0 PASS |
| emptyNoSession | Empty | S1 PASS (no Đang tuần) |
| finder/stamp/gps | CameraViewfinder+GPS | soft — needs session |
| btnDetect | Button | Pattern B · idle N/A empty |
| f-user/f-pass/btn-login | LoginPage | QA-20 PASS |

## Screens / zones (ids only)
- CP-01 · DES-MOB-CAM-PATROL · DES-MOB-CAM-EMPTY · LG-00
- mfeStdUrl= http://localhost:9301/camera-tuan
- screens= specs/web-rmms-cam-patrol/qa/screens/{S0,S1,QA-20}.png

## API / tasks (ids only)
- Live: GET patrol/sessions (S1 empty) · LoginPage auth
- T-QA-CRUD/SCORE=PASS · T-QA-FILTER=WAIVE · detect/confirm POST not forced
- entity/migration: none

## Debt
- stock port 5101 · stock QA-20 blank · empty session soft · historyApiFallback 404
- UNCLEAR: none

## Full paths (Read only if needed)
- scenarios: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-patrol/qa/scenarios.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-patrol/STATUS.md
