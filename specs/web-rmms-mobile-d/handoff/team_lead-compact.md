# Handoff compact — team_lead

schemaVersion: 1
feature: web-rmms-mobile-d
packKind: list
role: team_lead
status: done
skillVersion: 2026.09.05.03
workflowVersion: 2026.09.19.02
rulesVersion: 2026.09.25.2
writtenAt: 2026-09-27T08:56:00.000Z
taskId: task_db778375
contentHash: sha256:5f81d29ed889b244e81f537e7e3f8e8d4033a5f3a2e8b37e000d83ad97784488
route_confirm: approve
autoApprove: ON
mfeStdRoute: /kien-nghi/moi
mfeStdUrl: http://localhost:9301/kien-nghi/moi
nextRole: dev

## Decisions
- changeScope: edit_page · keep baseline · overlay SUBMIT-VALIDATE only
- formPattern: Full TD-06+TK-06 · phone 430 · Pattern B always-on Lưu · LeaveConfirmModal
- packKind list = phone Field list+form ≠ Kind B · DES-GRID/FILTER/CFG/UISCHEMA/HIST **WAIVE** · **T-UI-LKP-01 KEEP**
- receiverName: SearchInput users via Mobile.Bff integration/users · miss `--` · cấm free-text · cấm ERP UserSearchInput
- route TK-06: SearchInput road-routes/search · remove ROAD_ROUTE_SEED · miss `--`
- Pattern B: TD-06 + TK-06 · validationAttempted · banner string[] + inline
- BFF: forward-only users · mobileApiBase · cấm web-bff · cấm new WS API
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · be: D:/AI-QLBD/Linm.RMMS.WebService · cấm ERP.*
- keep: Schema_PatrolPetition · TK-03/TK-05 · Note D1| · IsPaused · GPS deny+no-face
- align: 430 · no new tab/route/icon · demo N/A
- next: /agent-dev · roleOnly stop (GAP-PKT-ROLE-01) · e2eQa queued QA

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| receiverName | người nhận | SearchInput users | BFF · miss `--` |
| handoverNote | bàn giao | TextArea | required on-submit if ban-giao |
| pauseReason | tạm dừng | Dropdown | required on-submit if tam-dung |
| saveSession | Lưu | Button Pattern B | PUT sessions |
| route | tuyến | SearchInput road-routes | no seed · miss `--` |
| sender/km/content/kind | tạo KN | Text/TextArea/Dropdown | required on-submit |
| lat/lng · noFace | GPS TK-06 | GPS+Flag | deny after click · cấm fake |
| savePetition | Lưu | Button Pattern B | POST petitions |

## Screens / zones (ids only)
- TD-06 CloseSession · receiver SearchInput + Pattern B
- TK-06 PetitionForm · route SearchInput + Pattern B
- TK-03 / TK-05 / LIST keep baseline
- DES-LEAVE dirty TD-06 / TK-06 create · Back→hub A
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-d/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/kien-nghi/moi
- DES-GRID / LinErpListFilterBar: N/A WAIVE

## API / tasks (ids only)
- FormMode↔API: GET users · GET road-routes/search · PUT sessions · GET|POST petitions
- T-*: T-BE-SCHEMA-01(keep) · T-BE-BFF-01 · T-BE-CRUD-01 · T-BE-INIT-01 · T-PERM-01 · T-UI-LKP-01 · T-UI-FORM-01 · T-UI-FORM-03 · T-UI-ACT-01 · T-UI-LEAVE-01 · T-UI-FIELD-01 · T-UI-PROD-01 · T-UI-UX-01 · T-UI-RESP-01 · T-UI-ACT-02/FORM-02/LIST-01(keep) · T-QA-CRUD-01 · T-QA-FORM-01
- WAIVE: KindB · FILTER · CFG · UISCHEMA · HIST · QA-FILTER
- deps: BFF+CRUD → LKP → FORM Pattern B → QA
- AC: S-08/09 · P-02/07/08 · B-01…03
- devSlash: /agent-dev · T-UI-RESP-01=/dev-web-responsive

## UNCLEAR
- none (SA closed all · GAP-DA-MOB-D-USERS-01/SEED-01 → Dev T-BE-BFF-01 / T-BE-CRUD-01)

## Full paths (Read only if needed)
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-d/task/web-rmms-mobile-d.md
- sa-compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-d/handoff/sa-compact.md
- design-compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-d/handoff/design-compact.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-d/STATUS.md
- delta: D:/AI-QLBD/Linm.RMMS.Data/docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md
