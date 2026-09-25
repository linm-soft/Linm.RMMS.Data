# Handoff compact — dev

schemaVersion: 1
feature: nghiem-thu-create
packKind: sheet
role: dev
status: done
skillVersion: 2026.08.25.01
writtenAt: 2026-09-19T17:00:00.000Z
taskId: task_d5b0819a
autoApprove: ON
e2eQa: ON
changeScope: new_page
formPattern: sheet→screen
route_confirm: route_a
contentHash: sha256:c2b17a793325c8eb40cc64a98b7775db138841107cd178cd6a6aa12ba8cfa66f
bffContentHash: sha256:nghiem-thu-create-mobile-bff-20260919

## Decisions
- Dual native Create `#sc-nghiem-thu-create` · list **Tạo** → push · Back list · leave-dirty Must
- API reuse: GET `patrol/nghiem-thu/init-data` · POST `patrol/nghiem-thu` Status=draft · `files/*` MediaIds ≤10
- AssigneeCode=auth lastUser · InspectedAt=UTC · Route from active session · FieldInfo=GPS stamp
- **cấm** enqueue Lưu/files · invent path · mfeStdUrl · ERP.* · demoItems
- T-BE/T-BFF n/a · Step 4b SKIP · BFF verify-only PASS
- VERIFY: iOS xcodegen+xcodebuild iPhone 17 Pro PASS · Android assembleDebug PASS · BFF dotnet build PASS
- open questions: none
- chain: không (roleOnly=dev · GAP-PKT-ROLE-01) · QA e2e queued

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| navCancel | Hủy | BackButton | leave-dirty |
| title | Tạo nghiệm thu | TopBar | fixed |
| navSave | Lưu | TextButton | POST draft |
| templateRow | Mẫu | Select LOOKUP_STATIC | `#sheet-mau` |
| locationRow | Vị trí | ListRow+GPS | Zone·Route·FieldInfo |
| attachRow | Đính kèm | PhotoRow/files | MediaIds max 10 |
| toast/leave/gps | — | Toast/Modal | DES-MOB-LEAVE · GPS-DENY |

## Screens / zones (ids only)
- DES-MOB-NGHIEM-THU-CREATE · `#sc-nghiem-thu-create`
- DES-MOB-GPS-DENY · DES-MOB-LEAVE · `#sheet-mau`
- parent `#sc-nghiem-thu` · detail OUT
- mfeStdUrl=— (native)
- reviewUrlIos/Android=file:// prototype (Design)

## API / tasks (ids only)
- FormMode↔API: Create→GET init · files* · POST draft
- T-IOS-NGHIEM-THU-CREATE **done** · T-AND-NGHIEM-THU-CREATE **done**
- T-BE/T-BFF/T-KIT **n/a**
- debt: none ship · detail sibling still pending toast (OUT)

## UNCLEAR
- none

## Full paths (Read only if needed)
- ios: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu-create/implement/ios.md
- android: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu-create/implement/android.md
- STATUS: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu-create/STATUS.md

## Next
| Role | Need |
|------|------|
| QA | `/agent-qa-mobile` · e2e-qa-mobile · leave/GPS/toast · store `qa/store/nghiem-thu-create` |
| Review | after QA |
