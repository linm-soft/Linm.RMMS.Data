# Handoff compact — dev

schemaVersion: 1
feature: web-rmms-vis-capture
packKind: list
role: dev
status: done
changeScope: edit_page
taskId: task_46a9e73a
skillVersion: 2026.09.05.03
writtenAt: 2026-09-27T18:25:00.000Z
contentHash: sha256:f749bc65f84b7bde51beeebaa85e5db22dacc8e8a040a53de30af834fa55c8cd
autoApprove: ON
e2eQa: ON queued

## Decisions
- changeScope: edit_page · Pattern B Detect/Attach idle-on · disabled chỉ detecting/attaching
- #validationBanner string[] on click · Acc>30 no POST handler · ?banner=1
- ROUTE-01: /chup-hien-truong · cấm /web-rmms-vis-capture
- Align: SCREENS SSOT=VisCapturePage · cấm tab/route/icon mới · cấm android/ios edit
- BFF: users forward cite (UsersMobileController) · T-BE=N/A invent · Step 4b skip
- Build: MFE yarn build PASS · WebService + Mobile.Bff PASS
- next: /agent-qa · roleOnly stop · e2eQa queued

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| photos | ảnh | PhotoRow | uploads* |
| rowLoc | vị trí | ListRow RO | GPS + optional sessions |
| rowAcc | sai số | ListRow RO | Acc>30 handler |
| detect | nhận diện | Button | disabled={detecting} |
| rowClass | phân loại | ListRow RO | DefectClass |
| rowSev | mức | ListRow+Badge | Severity |
| btnAttach | gắn sự cố | Button | disabled={attaching} |
| btnSkip | bỏ qua | Button | disabled={attaching} |
| gpsLock | GPS | GPS | deny→banner/modal on click |
| validationBanner | lỗi client | Banner | Pattern B string[] |

## Screens / zones (ids only)
- VIS · #sc-vis-capture · DES-MOB-VIS-CAPTURE · #validationBanner
- mfeStdUrl= http://localhost:9301/chup-hien-truong
- peerStdUrl= http://localhost:9301/chup-hien-truong
- DES-GRID: N/A

## API / tasks (ids only)
- uploads* · detect · detections/{id} · sessions · incidents · users forward
- T-01…T-06 PASS · T-BE=N/A · T-QA queued
- debt: UNCLEAR-SESS → QA

## UNCLEAR
- UNCLEAR-SESS → QA GPS-only empty sessions toast
- (closed Dev) UNCLEAR-VALIDATE-B · UNCLEAR-ALIGN-01

## Full paths (Read only if needed)
- implement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-vis-capture/implement/web-rmms-vis-capture.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-vis-capture/STATUS.md
