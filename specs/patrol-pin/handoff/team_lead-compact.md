# Handoff compact — team_lead

schemaVersion: 1
feature: patrol-pin
packKind: sheet
role: team_lead
status: confirmed
skillVersion: 2026.08.20.03
writtenAt: 2026-09-12T12:04:56.000Z
taskId: task_181e8784
slash: /agent-tl-mobile
gap: GAP-MOB-PIN-PERSIST-01
changeScope: edit_page

## Decisions
- formPattern: Sheet handoff (payload) · FormMode none
- route_confirm: **route_a** · autoApprove=ON · no new tab/deep-link
- ios_repo_confirm / android_repo_confirm: reuse both · kit_skip=yes
- T-BE-PAT-PIN: **n/a** · Step 4b N/A · **cấm ERP.***
- pin **không** auto-POST · POST check-ins = sibling only · **cấm** invent `/pins`
- Persist DoD: real `#sheet-handoff-checkin` · sessionId+LocationFix
- open questions: none
- next: `/agent-dev-ios` → `/agent-dev-android` · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| DES-MOB-CI-PIN-HERE | Ghim vị trí hiện tại | Primary+mappin | GET+GPS |
| DES-MOB-GPS-DENY | Định vị bị tắt | Modal | no handoff |
| DES-MOB-HANDOFF-CHECKIN | Ghi điểm tuần | Sheet | payload only |
| toast-pin-ok | Pin success | LinmToast | trước handoff |

## Screens / zones (ids only)
- #sc-patrol-home · #sc-patrol-map · #btn-pin-here · #modal-gps · #sheet-handoff-checkin
- reviewUrlIos/Android: file://…/prototype/{ios,android}/index.html
- peerStdUrl: — (native · cấm mfeStdUrl)

## API / tasks (ids only)
- API-01 GET mobile-bff/api/v1/patrol/sessions (this pack)
- API-02 POST …/check-ins (sibling · **không** từ pin)
- T-IOS-PAT-PIN · devSlash `/agent-dev-ios` · `/dev-ios-swiftui`
- T-AND-PAT-PIN · devSlash `/agent-dev-android` · `/dev-android-compose` · deps: after iOS preferred
- T-BE-PAT-PIN · n/a
- T-QA-TAB-01 · cite tab-index · tabs none
- contentHash: sha256:patrol-pin-control-hint-20260912-persist
- bffContentHash: sha256:patrol-pin-mobile-bff-20260912-persist

## UNCLEAR
- none

## Full paths (Read only if needed)
- task: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-pin/task/patrol-pin.md
- sa-compact: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-pin/handoff/sa-compact.md
- design-compact: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-pin/handoff/design-compact.md
