# Handoff compact — qa

schemaVersion: 1
feature: web-rmms-nghiem-thu
packKind: list
role: qa
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T15:42:00.000Z
taskId: task_5602c6c5
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e
autoApprove: ON
e2eQa: ON
changeScope: new_page
mfeStdUrl: http://localhost:9301/web-rmms-nghiem-thu
mfeStdRoute: /web-rmms-nghiem-thu

## Decisions
- formPattern: Mobile list + full create/detail ≤430 · N/A ERP Modal/Slideout · Android 1-1
- e2e: docker up + start:std :9301 (no kill) + capture_nghiemthu · cases S0,S1,QA-20
- stock yarn e2e-qa FAIL soft (API probe :5101 vs :5111) · workaround capture
- visual: Aligned · Must 0 · P0 none
- WAIVE smoke: create form · GPS · media · Leave click · POST/PUT · filter-bar · DELETE OUT
- next: /agent-review · roleOnly stop (GAP-PKT-ROLE-01) · cấm phase=done

## Inventory (slim)
| id | controlHint | API / nav |
|----|-------------|-----------|
| list/search/empty | List/Search/Static | GET patrol/nghiem-thu |
| row Check/status/result | Icon/Badge | Status · ResultCode |
| btnCreate | Button/Nav | → /moi |
| hubDoor NT-00 | Button/Nav | Field hub → list |
| templateType…media | Select/Photo | WAIVE smoke |

## Screens / zones
- NT-00…NT-04 (S0/QA-20) · Field hub NT-00 (S1) · PNG PASS
- peerStdUrl= http://localhost:9301/web-rmms-nghiem-thu
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-nghiem-thu/ui/prototype/index.html
- DES-GRID / LinErpListFilterBar: N/A phone

## API / tasks
- Live list 200 · S0 row NT-20260912-0002
- T-06 qa **done** · T-07 review pending
- debt: STOCK-PORT · ZoneOrgCode

## UNCLEAR
- (none blocking)

## Full paths
- scenarios: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-nghiem-thu/qa/scenarios.md
- screens: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-nghiem-thu/qa/screens/
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-nghiem-thu/STATUS.md
