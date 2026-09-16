# Handoff compact — dev

schemaVersion: 1
feature: patrol-pin
packKind: sheet
role: dev
status: confirmed
skillVersion: 2026.08.20.03
writtenAt: 2026-09-12T12:20:00.000Z
taskId: task_f90e803b
slash: /agent-dev-ios + /agent-dev-android
gap: GAP-MOB-PIN-PERSIST-01
changeScope: edit_page

## Decisions
- formPattern: Sheet handoff (payload) · FormMode none trên pack
- Persist: pin OK → real `#sheet-handoff-checkin` · Tiếp tục → sibling check-in `openWithHandoff(sessionId, LocationFix)`
- pin **không** auto-POST · **cấm** invent `/pins` · form check-in = sibling only
- Offline: toast queued · không mở handoff sheet
- Deny/timeout: không handoff
- Step 4b **N/A** · T-BE n/a · **cấm ERP.*** · **cấm** mfeStdUrl
- Build: iOS xcodegen+xcodebuild iPhone 17 Pro Max **PASS** · Android assembleDebug **PASS** · BFF dotnet build **PASS**
- open questions: none
- next: `/agent-qa-mobile` · roleOnly stop (GAP-PKT-ROLE-01) · e2eQa queued

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| DES-MOB-CI-PIN-HERE | Ghim vị trí hiện tại | Primary+mappin | GET+GPS |
| DES-MOB-GPS-DENY | Định vị bị tắt | Modal | no handoff |
| DES-MOB-HANDOFF-CHECKIN | Ghi điểm tuần | Sheet | sessionId+LocationFix |
| toast-pin-ok | Pin success | LinmToast | trước handoff |

## Screens / zones (ids only)
- #sc-patrol-home · #sc-patrol-map · #btn-pin-here · #modal-gps · #sheet-handoff-checkin
- peerStdUrl / mfeStdUrl: — (native)

## API / tasks (ids only)
- API-01 GET mobile-bff/api/v1/patrol/sessions (this pack)
- API-02 POST …/check-ins (sibling · **không** từ pin)
- T-IOS-PAT-PIN · T-AND-PAT-PIN · **PASS**
- contentHash: sha256:patrol-pin-control-hint-20260912-persist
- bffContentHash: sha256:patrol-pin-mobile-bff-20260912-persist

## Debt / next
- debt: none for Dev DoR
- next: QA scenarios + e2e-qa-mobile · review after

## Full paths (Read only if needed)
- ios: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-pin/implement/ios.md
- android: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-pin/implement/android.md
- team_lead-compact: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-pin/handoff/team_lead-compact.md
