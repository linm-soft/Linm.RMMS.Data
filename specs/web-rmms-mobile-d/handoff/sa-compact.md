# Handoff compact — sa

schemaVersion: 1
feature: web-rmms-mobile-d
packKind: list
role: sa
status: done
skillVersion: 2026.09.05.03
workflowVersion: 2026.09.19.02
rulesVersion: 2026.09.25.2
writtenAt: 2026-09-27T08:55:00.000Z
taskId: task_04d764a4
contentHash: sha256:5f81d29ed889b244e81f537e7e3f8e8d4033a5f3a2e8b37e000d83ad97784488
solution_confirm: approve
autoApprove: ON
be_repo_confirm: approve
ui_repo_confirm: approve
nextRole: team_lead

## Decisions
- changeScope: edit_page · delta SUBMIT-VALIDATE overlay · keep baseline entity/WO/feedback/petition
- formPattern: Mobile full 430 · Pattern B always-on Lưu · N/A ERP Modal/Slideout · DES-GRID N/A
- receiverName: SearchInput users · GET mobile-bff/…/integration/users · map username|code + fullName · miss `--` · cấm free-text · cấm ERP UserSearchInput · cấm new WS API
- route (TK-06): SearchInput road-routes/search · no ROAD_ROUTE_SEED · miss `--`
- BFF: forward-only users · mobileApiBase only · cấm web-bff
- mfeStdUrl: http://localhost:9301/kien-nghi/moi · route /kien-nghi/moi
- be: D:/AI-QLBD/Linm.RMMS.WebService · Patrol+Maintenance+Integration · cấm ERP.*
- keep: Schema_PatrolPetition · session handover/pause · feedback body · WO Live · Note tạm D1| · IsPaused flag
- GPS: TD-06 none · TK-06 deny after click · no-face OK · cấm fake
- UNCLEAR-USER-SEARCH-CTRL · RECEIVER-MISS · ROUTE-SEED CLOSED · RECEIVER-API superseded
- next: /agent-team-lead · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| receiverName | người nhận | SearchInput users | BFF forward · miss `--` |
| handoverNote | bàn giao | TextArea | required on-submit if ban-giao |
| pauseReason | tạm dừng | Dropdown | required on-submit if tam-dung |
| saveSession | Lưu | Button | Pattern B · PUT sessions |
| route | tuyến | SearchInput road-routes | no seed · miss `--` |
| sender/km/content/kind | tạo KN | Text/TextArea/Dropdown | required on-submit |
| lat/lng · noFace | GPS TK-06 | GPS+Flag | deny after click |
| savePetition | Lưu | Button | Pattern B · POST petitions |

## Screens / zones (ids only)
- TD-06 CloseSession · receiver SearchInput + Pattern B (delta)
- TK-06 PetitionForm · route SearchInput + Pattern B
- TK-03 / TK-05 keep baseline
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-d/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/kien-nghi/moi
- DES-GRID / LinErpListFilterBar: N/A

## API / tasks (ids only)
- FormMode↔API: GET users · GET road-routes/search · PUT sessions · GET|POST petitions · keep WO/feedback
- BFF: forward users · mobile-bff · cấm new WS
- entity: no new this delta · keep Schema_PatrolPetition + session cols
- UNCLEAR: all CLOSED
- T-*: TL mint edit delta (Pattern B · SearchInput · BFF · no-seed)

## UNCLEAR
- (none — USER-SEARCH-CTRL · RECEIVER-MISS · ROUTE-SEED closed · baseline keep)

## Full paths (Read only if needed)
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-d/be/solution-discovery.md
- design compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-d/handoff/design-compact.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-d/STATUS.md
