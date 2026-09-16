# Handoff compact — design

schemaVersion: 1
feature: patrol-pin
packKind: sheet
role: design
status: confirmed
skillVersion: 2026.08.20
writtenAt: 2026-09-12T12:10:00.000Z
taskId: task_4e8a5d46
slash: /agent-design-mobile
gap: GAP-MOB-PIN-PERSIST-01
changeScope: edit_page

## Decisions
- formPattern: Sheet handoff (payload only) · FormMode none trên pack
- GPS+toast pin **giữ** · stub handoff → **real** `#sheet-handoff-checkin`
- pin **không** auto-POST · persist = sibling POST check-ins
- **cấm** form / invent `/pins` / fake GPS / re-scan demo (hash skip)
- design_confirm: **approve** · autoApprove=ON
- peerStdUrl: — (native · cấm mfeStdUrl)
- real_view_parity: v1
- open questions: none
- next: `/agent-solution-mobile` · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| DES-MOB-CI-PIN-HERE | Ghim vị trí hiện tại | Primary+mappin | hub+map |
| DES-MOB-GPS-DENY | Định vị bị tắt | Modal | no handoff |
| DES-MOB-HANDOFF-CHECKIN | Ghi điểm tuần | Sheet | sessionId+LocationFix |
| toast-pin-ok | Pin success | LinmToast | trước handoff |

## Screens / zones (ids only)
- #sc-patrol-home · #sc-patrol-map · #btn-pin-here · #modal-gps · #sheet-handoff-checkin
- DES-MOB-CI-PIN-HERE · DES-MOB-GPS-DENY · DES-MOB-HANDOFF-CHECKIN
- reviewUrlIos: file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-pin/ui/prototype/ios/index.html
- reviewUrlAndroid: file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-pin/ui/prototype/android/index.html
- demo states: ?surface=map · ?deny=1 · ?timeout=1 · ?offline=1

## API / tasks (ids only)
- GET mobile-bff/api/v1/patrol/sessions
- POST …/check-ins = sibling (handoff only)
- contentHash: sha256:patrol-pin-control-hint-20260912-persist
- bffContentHash: sha256:patrol-pin-mobile-bff-20260912-persist

## UNCLEAR
- none

## Full paths (Read only if needed)
- design: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-pin/ui/design.md
- ux-analy: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-pin/ui/ux-analy.md
- map: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-pin/ui/html-to-native-map.md
- demo-parity: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-pin/ui/review/demo-parity.md
- control-hint: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/patrol-pin-control-hint.md
- real-data: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/patrol-pin-real-data.md
- po-compact: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-pin/handoff/po-compact.md
