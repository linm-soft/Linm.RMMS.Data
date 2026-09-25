# Handoff compact — team_lead

schemaVersion: 1
feature: nghiem-thu-create
packKind: sheet
role: team_lead
status: done
skillVersion: 2026.08.25.01
writtenAt: 2026-09-19T17:30:00.000Z
taskId: task_ce5b70e0
autoApprove: ON
e2eQa: ON
changeScope: new_page
contentHash: sha256:c2b17a793325c8eb40cc64a98b7775db138841107cd178cd6a6aa12ba8cfa66f
bffContentHash: sha256:nghiem-thu-create-mobile-bff-20260919
formPattern: sheet→screen
route_confirm: route_a
featureKind: sheet-create

## Decisions
- changeScope: new_page · packKind **sheet** · Create draft P1 `#sc-nghiem-thu-create`
- formPattern: sheet→screen · TopBar + 3 ListRows · leave-dirty Must
- route_a: list `#sc-nghiem-thu` **Tạo** → push create · Back list · tab patrol · **cấm** mfeStdUrl
- ios/android_repo: reuse dual · scaffold **không** `/mobile-app-architecture`
- kit_missing_confirm: N/A · T-KIT **n/a**
- T-BE-*/T-BFF: **n/a** · init+POST+files live · migration=none · Step 4b SKIP · **cấm ERP.***
- SA map: T-NTC-01→T-IOS · T-NTC-02→T-AND · 03/04 ∈ dual · 05 DOMAIN-MAP cite
- autoApprove ON · e2eQa ON queued `/agent-qa*` only
- open questions: none
- chain: không (roleOnly=team_lead · GAP-PKT-ROLE-01)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| navCancel | Hủy | BackButton | → list · leave-dirty |
| title | Tạo nghiệm thu | TopBar | fixed |
| navSave | Lưu | TextButton | POST draft |
| templateRow | Mẫu | Select LOOKUP_STATIC | init Label · `#sheet-mau` |
| locationRow | Vị trí | ListRow+GPS | Zone·Route·FieldInfo |
| attachRow | Đính kèm | PhotoRow/files | MediaIds max 10 |
| assignee/inspectedAt | (ẩn) | derived | Status=draft |
| toast/leave/gps | — | Toast/Modal | DES-MOB-LEAVE · GPS-DENY |

## Screens / zones (ids only)
- DES-MOB-NGHIEM-THU-CREATE · `#sc-nghiem-thu-create`
- DES-MOB-GPS-DENY · DES-MOB-LEAVE · `#sheet-mau`
- parent `#sc-nghiem-thu` · detail OUT
- reviewUrlIos=`file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu-create/ui/prototype/ios/index.html`
- reviewUrlAndroid=`file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu-create/ui/prototype/android/index.html`
- peerStdUrl=`http://localhost:9304/patrol`

## API / tasks (ids only)
- FormMode↔API: Create→GET init · files* · POST Status=draft
- **T-IOS-NGHIEM-THU-CREATE** · deps SA+route_a · **devSlash** `/agent-dev-ios` · `/ios-new-screen` · `/dev-ios-swiftui` · leave-confirm
- **T-AND-NGHIEM-THU-CREATE** · deps SA+route_a · **devSlash** `/agent-dev-android` · `/android-new-screen` · `/dev-android-compose`
- T-BE-API / T-BE-MIG / T-BFF / T-KIT: **n/a**
- T-QA-NGHIEM-THU-CREATE · T-QA-TAB-01 (cite) · serial Dev iOS→Android
- **cấm** enqueue Lưu/files · invent create/files path

## UNCLEAR
- none

## Full paths (Read only if needed)
- task: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu-create/task/nghiem-thu-create.md
- sa compact: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu-create/handoff/sa-compact.md
- design compact: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu-create/handoff/design-compact.md
- STATUS: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu-create/STATUS.md

## Next
| Role | Need |
|------|------|
| Dev | `/agent-dev-ios` · T-IOS-NGHIEM-THU-CREATE → `/agent-dev-android` · T-AND |
| QA | e2e queued `/agent-qa-mobile` |
