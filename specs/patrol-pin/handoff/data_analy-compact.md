# Handoff compact — data_analy

schemaVersion: 1
feature: patrol-pin
packKind: sheet
role: data_analy
status: confirmed
skillVersion: 2026.08.19.23
writtenAt: 2026-09-12T11:55:00.000Z
taskId: task_48f136ed
slash: /agent-data-analy-mobile
gap: GAP-MOB-PIN-PERSIST-01

## Decisions
- changeScope: edit_page (NEW AutocodeTask · keep PO/Design)
- mode: feature_context
- DoD: persist pin → ca Đang tuần via **real** handoff `patrol-checkin` + POST `patrol/sessions/{id}/check-ins` (BE Live)
- pin pack: GPS+toast+deny/timeout · **cấm** form · **cấm** invent `/pins` · **cấm** fake GPS
- pin **không** auto-POST (BE yêu cầu PlanPointLabel+MatchOk)
- Step 4b: N/A · roles sau = pending
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| DES-MOB-CI-PIN-HERE | Ghim vị trí | Primary+mappin | hub+map |
| DES-MOB-GPS-DENY | GPS deny | Modal | in-app |
| toast-pin-ok | Pin success | LinmToast | Route±m |
| handoff-checkin | → patrol-checkin | Route/Sheet | sessionId+LocationFix |

## Screens / zones (ids only)
- #sc-patrol-home · #sc-patrol-map · #btn-pin-here · DES-MOB-CI-PIN-HERE
- demo: specs/patrol-pin/ui/prototype/{ios,android}/index.html
- artifacts: specs/_data-analy/patrol-pin-{control-hint,real-data,bff-endpoints,action-tree}.md

## API / tasks (ids only)
- GET mobile-bff/api/v1/patrol/sessions
- POST mobile-bff/api/v1/patrol/sessions/{id}/check-ins (sibling owner)
- contentHash: sha256:patrol-pin-control-hint-20260912-persist
- bffContentHash: sha256:patrol-pin-mobile-bff-20260912-persist

## Debt / next
- Next: po (edit_page · § Delta) · keep design unless PO asks
- debt: none for data_analy DoR
- verify: control-hint+real-data+BFF+action-tree+compact PASS · yarn build/e2e SKIP
