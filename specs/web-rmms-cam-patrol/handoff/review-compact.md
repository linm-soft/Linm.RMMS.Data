# Handoff compact — review

schemaVersion: 1
feature: web-rmms-cam-patrol
packKind: list
role: review
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-27T11:15:00.000Z
taskId: task_1224f6b9
contentHash: sha256:c46ae5660ccba1b8e64ce8e5294acef77ceb4e0a75474372f2a3d3901efb5796
review_confirm: approve
autoApprove: ON
verdict: PASS
fix_gaps: none
changeScope: edit_page

## Decisions
- changeScope: edit_page · DEC-PATTERN-B FE · cite SUBMIT-VALIDATE
- detect disabled={detecting} only · confirm/skip disabled={confirming} only · banner string[] on click
- keep: finder · stamp · GPS Acc≤30 · capture=environment · Live APIs · ẩn score · DEC-FRAME soft
- mfeStdRoute: /camera-tuan · mfeStdUrl http://localhost:9301/camera-tuan · product /field/cam
- BFF: Mobile.Bff :5202 · mobile-bff/api/v1 · cấm web-bff · cấm ERP.*
- QUERY/SEC/UI-FN/BE-FN: PASS · Step 4b N/A
- hash ≠ prior new_page → full rescan (c46ae566…)
- next: /agent-done · roleOnly stop (GAP-PKT-ROLE-01) · **cấm** e2e ở review

## Inventory (slim)
| id | controlHint | review |
|----|-------------|--------|
| finder | CameraViewfinder | PASS |
| stamp.* | Text RO | PASS soft km |
| lat/lng/accuracyM | GPS ≤30 | PASS |
| imageBase64 | CameraCapture | PASS |
| validationBanner | Banner string[] | PASS Pattern B |
| detect | Button lock detecting | PASS |
| detection.* | Text/Chip no % | PASS |
| confirm | Button lock confirming | PASS |
| skip | Button dismiss | PASS |

## Screens / zones
- CP-01 · DES-MOB-CAM-PATROL/FINDER/RESULT/VALIDATION · GPS-DENY · empty · offline · toast
- mfeStdUrl= http://localhost:9301/camera-tuan
- screens= specs/web-rmms-cam-patrol/qa/screens/{S0,S1,QA-20}.png
- DES-GRID / LinErpListFilterBar: N/A

## API / tasks
- Live: GET sessions · POST detect · POST incidents
- T-01…T-05 Pattern B · T-QA PASS · T-BE N/A
- debt soft: stock e2e · file-input capture · planPointLabel km

## UNCLEAR
- UNCLEAR-CAM-FRAME: soft keep DEC-FRAME (non-blocking)

## Full paths
- findings: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-patrol/review/findings.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-patrol/STATUS.md
- code: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile/src/pages/WebRmmsCamPatrol/CamPatrolPage.tsx
