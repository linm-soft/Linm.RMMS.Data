# Handoff compact — design

schemaVersion: 1
feature: web-rmms-mobile-d
packKind: list
role: design
status: done
skillVersion: 2026.09.05.03
workflowVersion: 2026.09.19.02
rulesVersion: 2026.09.25.2
writtenAt: 2026-09-27T08:50:00.000Z
taskId: task_bf0f4ace
contentHash: sha256:5f81d29ed889b244e81f537e7e3f8e8d4033a5f3a2e8b37e000d83ad97784488
design_confirm: approve
autoApprove: ON
real_view_parity: v1
shared_grid_example: N/A
nextRole: sa

## Decisions
- changeScope: edit_page · keep baseline Design · overlay SUBMIT-VALIDATE only
- formPattern: Mobile full 430 · Pattern B always-on Lưu · N/A ERP Modal/Slideout
- Grid AC / DES-GRID / LinErpListFilterBar / Report: N/A phone · cấm Excel
- receiverName: SearchInput users · Mobile.Bff integration/users · map username|code + fullName · miss `--` · cấm free-text · cấm ERP UserSearchInput
- route (TK-06): SearchInput road-routes · no ROAD_ROUTE_SEED · miss `--`
- Pattern B: TD-06 + TK-06 · validationAttempted · banner string[] + inline · GPS deny after click
- mfeStdUrl: http://localhost:9301/kien-nghi/moi · route /kien-nghi/moi
- be: D:/AI-QLBD/Linm.RMMS.WebService · Patrol+Maintenance+Integration · cấm ERP.* · cấm new WS API
- demo: N/A · hash skip · cấm rescan (GAP-DES-DEMO-RESCAN-01)
- align: /align-mobile-to-mfe · no new tab/route/icon · no android/ios prototype
- UNCLEAR-USER-SEARCH-CTRL: Design chốt Mobile SearchInput = road-routes pattern
- next: /agent-sa · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| receiverName | người nhận | SearchInput users | replace free · miss `--` |
| handoverNote | bàn giao | TextArea | required on-submit if ban-giao |
| pauseReason | tạm dừng | Dropdown | required on-submit if tam-dung |
| saveSession | Lưu | Button | Pattern B · PUT sessions |
| route | tuyến | SearchInput road-routes | no seed · miss `--` |
| sender/km/content/kind | tạo KN | Text/TextArea/Dropdown | required on-submit |
| lat/lng · noFace | GPS TK-06 | GPS+Flag | deny after click · cấm fake |
| savePetition | Lưu | Button | Pattern B · POST petitions |

## Screens / zones (ids only)
- TD-06 CloseSession · receiver SearchInput + Pattern B (delta)
- TK-06 PetitionForm · route SearchInput + Pattern B · zone TK-06v validate
- TK-03 / TK-05 keep baseline · no submit-validate delta
- DES-LEAVE keep
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-d/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/kien-nghi/moi
- real_view_parity= v1
- DES-GRID / LinErpListFilterBar: N/A

## API / tasks (ids only)
- FormMode↔API: GET users · GET road-routes/search · PUT sessions · GET|POST petitions
- BFF: forward users · mobileApiBase only · cấm web-bff
- real-data §A+§B: PASS · controlHint delta cite DA
- T-*: TL mint edit delta (Pattern B · SearchInput · BFF · no-seed)

## UNCLEAR
- UNCLEAR-USER-SEARCH-CTRL → Design chốt Mobile SearchInput pattern → SA confirm DTO
- UNCLEAR-RECEIVER-MISS → `--` CLOSED (PO)
- GAP-DA-MOB-D-USERS-01 → SA/Dev BFF forward
- GAP-DA-MOB-D-SEED-01 → Dev remove ROAD_ROUTE_SEED

## Full paths (Read only if needed)
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-d/ui/design.md
- prototype: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-d/ui/prototype/index.html
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-mobile-d-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-mobile-d-real-data.md
- po-compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-d/handoff/po-compact.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-d/STATUS.md
