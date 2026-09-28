# Handoff compact — dev

schemaVersion: 1
feature: web-rmms-mobile-d
packKind: list
role: dev
status: done
skillVersion: 2026.09.05.03
workflowVersion: 2026.09.19.02
rulesVersion: 2026.09.25.2
writtenAt: 2026-09-27T09:00:00.000Z
taskId: task_5fffffd3
contentHash: sha256:5f81d29ed889b244e81f537e7e3f8e8d4033a5f3a2e8b37e000d83ad97784488
mfeStdRoute: /kien-nghi/moi
mfeStdUrl: http://localhost:9301/kien-nghi/moi
nextRole: qa
autoApprove: ON
e2eQa: queued

## Decisions
- changeScope: edit_page · delta SUBMIT-VALIDATE overlay
- Pattern B: TD-06 + TK-06 · Lưu always-on except saving · validationAttempted · banner+inline
- receiverName: SearchInput USER_LOOKUP_CONFIG → GET integration/users · map username|code + fullName · miss `--` · cấm free-text · cấm ERP UserSearchInput
- route TK-06: SearchInput ROAD_ROUTE_LOOKUP_CONFIG · no ROAD_ROUTE_SEED · miss `--`
- BFF: Mobile.Bff UsersMobileController forward keep · mobileApiBase only · cấm web-bff · cấm new WS API
- GPS TK-06: deny after click · idle until pin · noFace OK · cấm fake
- build: yarn PASS · WebService.sln PASS · Mobile.Bff PASS
- WAIVE: KindB · FILTER · CFG · UISCHEMA · HIST
- next: /agent-qa* · roleOnly stop (GAP-PKT-ROLE-01) · e2e queued QA

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| receiverName | người nhận | SearchInput users | BFF · miss `--` |
| handoverNote | bàn giao | TextArea | required on-submit if ban-giao |
| pauseReason | tạm dừng | Dropdown | required on-submit if tam-dung |
| saveSession | Lưu | Button Pattern B | PUT sessions |
| route | tuyến | SearchInput road-routes | no seed · miss `--` |
| sender/km/content/kind | tạo KN | Text/TextArea/Dropdown | required on-submit |
| lat/lng · noFace | GPS TK-06 | GPS+Flag | deny after click |
| savePetition | Lưu | Button Pattern B | POST petitions |

## Screens / zones (ids only)
- TD-06 CloseSession · receiver SearchInput + Pattern B (TD-06v)
- TK-06 PetitionForm · route SearchInput + Pattern B (TK-06v)
- TK-03 / TK-05 / LIST keep baseline
- DES-LEAVE dirty TD-06 / TK-06
- peerStdUrl= http://localhost:9301/kien-nghi/moi

## API / tasks (ids only)
- GET integration/users · GET road-routes/search · PUT sessions · GET|POST petitions
- T-* done: T-BE-BFF-01 · T-BE-CRUD-01 · T-UI-LKP-01 · T-UI-FORM-01/03 · T-UI-ACT-01 · T-UI-LEAVE-01 · T-UI-FIELD-01 · T-UI-PROD-01 · T-UI-UX-01 · T-UI-RESP-01 · keep SCHEMA/ACT-02/FORM-02/LIST
- debt: RequirePermission peer · e2e QA only

## UNCLEAR
- none

## Full paths
- implement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-d/implement/web-rmms-mobile-d.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-d/STATUS.md
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile
- be: D:/AI-QLBD/Linm.RMMS.WebService
- mobileBff: D:/AI-QLBD/Linm.RMMS.Mobile.Bff
