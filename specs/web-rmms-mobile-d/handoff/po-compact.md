# Handoff compact — po

schemaVersion: 1
feature: web-rmms-mobile-d
packKind: list
role: po
status: done
skillVersion: 2026.09.05.03
workflowVersion: 2026.09.19.02
rulesVersion: 2026.09.25.2
writtenAt: 2026-09-27T08:40:00.000Z
contentHash: sha256:5f81d29ed889b244e81f537e7e3f8e8d4033a5f3a2e8b37e000d83ad97784488
taskId: task_e3231d97
nextRole: design

## Decisions
- changeScope: edit_page · keep prior PO/Design/SA · § Delta SUBMIT-VALIDATE only
- packKind: list confirmed · DES-GRID/LinErpListFilterBar N/A phone · Report N/A · Excel N/A
- formPattern: Mobile full 430 · N/A ERP Modal/Slideout Kind B
- Pattern B: TD-06 + TK-06 Lưu always-on except saving · validate-on-click · banner+inline
- receiverName: SearchInput users via Mobile.Bff integration/users · miss `--` · cấm free-text · cấm ERP UserSearchInput
- route (TK-06): SearchInput road-routes · no ROAD_ROUTE_SEED / QL.22 · miss `--`
- BFF: forward GET integration/users · cấm new WS API · transport mobileApiBase only · cấm web-bff
- align: /align-mobile-to-mfe · 430 · no new tab/route/icon · no android/ios prototype
- mfeStdUrl: http://localhost:9301/kien-nghi/moi · route /kien-nghi/moi
- be: D:/AI-QLBD/Linm.RMMS.WebService · Patrol+Maintenance+Integration · cấm ERP.*
- demo: N/A · hash skip analy · cấm re-scan (GAP-PO-DEMO-RESCAN-01)
- keep baseline: TK-03 assign · TK-05 feedback · Schema-before-form · petition ≠ inbox
- GPS: TD-06 none · TK-06 deny after submit · no-face OK · cấm fake
- autoApprove: ON · e2eQa queued QA

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| receiverName | người nhận | SearchInput users | replace free · miss `--` |
| handoverNote | bàn giao | TextArea | required on-submit if ban-giao |
| pauseReason | tạm dừng | Dropdown | required on-submit if tam-dung |
| saveSession | Lưu | Button | disable only saving |
| route | tuyến | SearchInput road-routes | no seed · miss `--` |
| sender/km/content/kind | tạo KN | Text/TextArea/Dropdown | required on-submit |
| lat/lng · noFace | GPS TK-06 | GPS+Flag | deny after click |
| savePetition | Lưu | Button | disable only saving |

## Screens / zones (ids only)
- TD-06 CloseSessionPage · TK-06 PetitionFormPage (delta)
- TK-03 / TK-05 keep baseline · no submit-validate delta
- Grid AC: N/A · Report AC: N/A · Leave: TK-07/native/Excel/new_page
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-d/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/kien-nghi/moi
- Design: keep prototype · patch receiver + route SearchInput zones if lệch

## API / tasks (ids only)
- FormMode↔API: GET users · GET road-routes/search · PUT sessions · GET|POST petitions
- AC: S-08/09 Pattern B+users · P-02/07/08 Pattern B+route · B-01…03 BFF/seed/transport
- real-data §A+§B: PASS · controlHint delta cite DA
- T-*: TL mint edit delta (Pattern B · SearchInput · BFF users · no-seed)

## UNCLEAR
- UNCLEAR-USER-SEARCH-CTRL → Design/Dev Mobile SearchInput pattern (not ERP UserSearchInput)
- UNCLEAR-RECEIVER-MISS → `--` no free-text (PO chốt)
- GAP-DA-MOB-D-USERS-01 → BFF forward
- GAP-DA-MOB-D-SEED-01 → remove ROAD_ROUTE_SEED

## Full paths (Read only if needed)
- requirement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-d/po/requirement.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-mobile-d-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-mobile-d-real-data.md
- prior compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-d/handoff/data_analy-compact.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-d/STATUS.md
- delta: D:/AI-QLBD/Linm.RMMS.Data/docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md
