# Handoff compact — qa

schemaVersion: 1
feature: web-rmms-nghiem-thu
packKind: list
role: qa
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-27T15:40:00.000Z
taskId: task_5ba3b008
contentHash: sha256:b8f3ce70ff3e80073c39d2dac6a01d2fed2e98232877ef6979881eef8e37acb4
autoApprove: ON
e2eQa: ON
changeScope: edit_page
mfeStdUrl: http://localhost:9301/nghiem-thu/moi
mfeStdRoute: /nghiem-thu/moi

## Decisions
- changeScope: edit_page · citeDelta SUBMIT-VALIDATE · Pattern B + SearchInput form
- formPattern: Mobile list+create/detail ≤430 · N/A ERP Modal · Android 1-1
- e2e: docker up + start:std :9301 (no kill) + capture_nghiemthu · cases S0,S1,QA-20
- stock yarn e2e-qa FAIL soft BLANK · workaround capture · PNG PASS
- visual: Aligned · Must 0 · P0 none · Pattern B CTA always-on · LKP route+assignee
- WAIVE smoke: CRUD write · media shutter · Leave click · filter-bar · DELETE OUT
- next: /agent-review · roleOnly stop (GAP-PKT-ROLE-01) · cấm phase=done

## Inventory (slim)
| id | controlHint | API / nav |
|----|-------------|-----------|
| form CTA NT-10 | Button Pattern B | always-on · POST/PUT |
| route/assignee | SearchInput | road-routes/search · users |
| list/search/empty | List/Search/Static | GET patrol/nghiem-thu |
| hub entry | Nav | /tuan-duong → /nghiem-thu |
| media/gps | PhotoRow/Action | WAIVE smoke click |

## Screens / zones
- S0 form NT-05…10 · NT-06/06b SearchInput · Pattern B
- S1 hub Tuần đường · Công tác nghiệm thu
- QA-20 list NT-00/01/02/04 · empty soft
- peerStdUrl= http://localhost:9301/nghiem-thu/moi
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-nghiem-thu/ui/prototype/index.html
- DES-GRID / LinErpListFilterBar: N/A phone

## API / tasks
- T-QA-FORM-01 **PASS** · T-QA-CRUD-01 WAIVE smoke · T-QA-VI-ENC PASS
- debt: STOCK-BLANK · CRUD-EMPTY soft · ZoneOrgCode
- next Review pending

## UNCLEAR
- (none blocking)

## Full paths
- scenarios: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-nghiem-thu/qa/scenarios.md
- screens: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-nghiem-thu/qa/screens/
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-nghiem-thu/STATUS.md
- implement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-nghiem-thu/implement/web-rmms-nghiem-thu.md
