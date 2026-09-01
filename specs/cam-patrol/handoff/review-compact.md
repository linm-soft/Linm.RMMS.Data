# Handoff compact — review

schemaVersion: 1
feature: cam-patrol
packKind: screen
role: review
status: done
skillVersion: 2026.08.20.01
writtenAt: 2026-09-01T06:17:31.000Z
taskId: task_20cf4fcb
slash: /agent-review-mobile
review_confirm: done
autoApprove: ON

## Decisions
- changeScope: edit_page · re-review post cleanup_mock
- review_confirm: done · align Must 0 · post_review skip
- cleanup_mock: CamPatrol dual live-only · cấm demoRouteStamp/itemsOrDemo · empty/fail copy OK
- security/DTO: PASS (prior unchanged)
- align: QA A3↔P6↔demo Aligned · score ẩn · GAP-MOB-EDIT-DEMO-01 CLOSED
- mfeStdUrl: none · cấm start:std / e2e ở role này
- open: GAP-QA-CAM-GPS-TIMING-01 Should non-block
- phase_to: done · pipeline complete

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| sc-cam-patrol | Thu thập camera | TopBar+finder | live-only stamp |
| finder | Camera FOV | AVCapture/CameraX | live |
| detect-card | Phát hiện | LinmListRow no-icon | live detect |
| btn-confirm | Xác nhận | Primary | GPS gate |
| btn-skip | Bỏ qua | Secondary | local clear |

## Screens / zones (ids only)
- DES-MOB-CAM-PATROL / #sc-cam-patrol · DES-MOB-CAM-FINDER
- findings: review/findings.md · REVIEW-META.json
- shots: qa/store/cam-patrol/ · CAPTURE.md · manifest ok:true

## API / tasks (ids only)
- GET patrol/sessions · POST ai-vision/detect · POST incident/incidents
- T-IOS/AND-CAM-PAT-CLEAN PASS · T-QA PASS · T-REVIEW PASS
- debt: GAP-QA-CAM-GPS-TIMING-01 Should · frame media P2

## VERIFY
- findings + META PASS · review_confirm=done
- prior QA ok:true · Dev builds evidence-only · cấm re-run build/e2e
- Step 4b SKIP · next: none (child DONE)

## UNCLEAR
- none
