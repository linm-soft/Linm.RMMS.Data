# Handoff compact — po

schemaVersion: 1
feature: patrol-pin
packKind: sheet
role: po
status: confirmed
skillVersion: 2026.08.20.03
writtenAt: 2026-09-12T12:00:00.000Z
taskId: task_cf3ce7eb
slash: /agent-po-mobile
gap: GAP-MOB-PIN-PERSIST-01
changeScope: edit_page

## Decisions
- Pattern: Primary CTA + toast + deny modal + **real handoff** (sheet flow · no full page)
- FormMode: none · Leave: N/A · Grid/Report AC: N/A
- DoD: GPS+toast **giữ** · persist via handoff `patrol-checkin` + sibling POST `patrol/sessions/{id}/check-ins`
- pin **không** auto-POST · **cấm** form · **cấm** invent `/pins` · **cấm** fake GPS
- Design: **keep** dual proto unless micro-copy handoff · designConfirm prior keep
- open questions: none
- next: `/agent-design-mobile` · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| DES-MOB-CI-PIN-HERE | Ghim vị trí | Primary+mappin | hub+map |
| DES-MOB-GPS-DENY | GPS deny | Modal | no handoff |
| toast-pin-ok | Pin success | LinmToast | trước handoff |
| handoff-checkin | → patrol-checkin | Route/Sheet | sessionId+LocationFix |

## Screens / zones (ids only)
- #sc-patrol-home · #sc-patrol-map · #btn-pin-here · DES-MOB-CI-PIN-HERE · DES-MOB-GPS-DENY
- Pattern: Primary CTA + toast + deny + real handoff
- Device AC: GPS allow/deny/timeout · offline queue · AC-PERSIST-01 · dual parity
- demo: specs/patrol-pin/ui/prototype/{ios,android}/index.html
- reviewUrl (Design): file://…/prototype/{ios,android}/index.html

## API / tasks (ids only)
- GET mobile-bff/api/v1/patrol/sessions (in-slug)
- POST …/check-ins = sibling owner (handoff only)
- contentHash: sha256:patrol-pin-control-hint-20260912-persist
- bffContentHash: sha256:patrol-pin-mobile-bff-20260912-persist
- Step 4b: N/A · e2eQa ON when QA

## UNCLEAR
- none

## Full paths (Read only if needed)
- control-hint: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/patrol-pin-control-hint.md
- real-data: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/patrol-pin-real-data.md
- po: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-pin/po/requirement.md
- prior compact: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-pin/handoff/data_analy-compact.md
