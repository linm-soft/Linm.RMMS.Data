# Handoff compact — sa

schemaVersion: 1
feature: patrol-pin
packKind: sheet
role: sa
status: confirmed
skillVersion: 2026.08.20.03
writtenAt: 2026-09-12T12:01:30.000Z
taskId: task_44e11065
slash: /agent-sa-mobile
gap: GAP-MOB-PIN-PERSIST-01
changeScope: edit_page

## Decisions
- formPattern: Sheet handoff (payload) · FormMode **none**
- solution_confirm: **approve** · autoApprove=ON
- be_repo_confirm: Linm.RMMS.WebService · **cấm ERP.***
- FormMode↔API: none → **GET** `patrol/sessions` (in-slug) · POST `…/check-ins` = **sibling** `patrol-checkin` only
- pin **không** auto-POST · **cấm** invent `/pins` · **cấm** form trên pack
- entity/migration: **none** · Step 4b **N/A**
- TZ: tz_na · XCO: xco_na · SHARE: share_na
- Persist DoD: real `#sheet-handoff-checkin` · sessionId+LocationFix → sibling POST Live
- open questions: none
- next: `/agent-tl-mobile` · roleOnly stop (GAP-PKT-ROLE-01)

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
- API-02 POST …/check-ins (sibling ref · Live · **không** gọi từ pin)
- T-IOS-PAT-PIN · T-AND-PAT-PIN · T-BE-* n/a
- contentHash: sha256:patrol-pin-control-hint-20260912-persist
- bffContentHash: sha256:patrol-pin-mobile-bff-20260912-persist

## UNCLEAR
- none

## Full paths (Read only if needed)
- solution: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-pin/be/solution-discovery.md
- bff: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/patrol-pin-bff-endpoints.md
- design-compact: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-pin/handoff/design-compact.md
- po-compact: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-pin/handoff/po-compact.md
