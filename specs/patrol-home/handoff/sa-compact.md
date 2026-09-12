# Handoff compact — sa → team_lead
schemaVersion: 1
feature: patrol-home
role: sa
taskId: task_57e24d09
packKind: hub
changeScope: edit_page
stack: native_dual
status: PASS
generatedAt: 2026-09-12T15:07:09.000Z
skillVersion: 2026.08.19.23
contentHash: sha256:b5efb555e6c8195ccd93f60d983b57d6b0aa476a919b7f11700157c58241ae0a
bffContentHash: sha256:128461fdf9135cf8c168a1b05e92586465d1ef34c117b39bea7d2464a06f55c0

## Decisions
- changeScope: edit_page
- formPattern: N/A (hub · FormMode=none)
- packKind: hub
- solution_confirm: approve (autoApprove ON)
- be_repo: Linm.RMMS.WebService · cấm ERP.*
- bff: Mobile.Bff proxy catch-all · cấm PatrolHomeController
- entity/migration: existing PatrolSessions · none · Step4b N/A
- TZ/XCO/SHARE: tz_na · xco_na · share_na
- offline: toast + empty/`—` · cấm demo hero sample
- GPS: N/A mở-ca · pin toast P1
- open questions: none
- keep: segment/pin/kpi/quick/nav · sibling toast · offline badge local

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| heroActive | Ca đang chạy | LinmHeroCard | GET active · empty=— |
| emptyActive | Chưa có ca | LinmHeroCard | no active |
| btn-open-session | Mở ca | LinmPrimaryButton | POST API-02 |
| btnEndSession | Kết ca | detail CTA | PUT API-03 |
| todayRows | Hôm nay | LinmListRow | GET |
| kpiStrip | KPI 3 | LinmKpiStrip | GET |

## Screens / zones (ids only)
- `#sc-patrol-home` DES-MOB-PAT-HOME · Pattern=Hub · FormMode=none
- zones: heroActive · emptyActive · btn-open-session · pinHere · todayRows · quickRows · btnEndSession(detail)
- reviewUrl: prototype/{ios,android}/index.html#sc-patrol-home
- peerStdUrl: cấm mfeStdUrl

## API / tasks (ids only)
- FormMode↔API: none↔API-01 GET · API-02 POST · API-03 PUT `patrol/sessions`
- API-04 GET by id keep
- T-*: T-IOS-PAT-HOME-SESSION · T-AND-PAT-HOME-SESSION · T-BE n/a
- Gaps → Dev: GAP-PAT-HOME-SESSION-01/02 · HERO-01
- Next: /agent-tl-mobile

## UNCLEAR
- none

## Full paths (Read only if needed)
- solution: specs/patrol-home/be/solution-discovery.md
- design-compact: specs/patrol-home/handoff/design-compact.md
- bff: specs/_data-analy/patrol-home-bff-endpoints.md
- STATUS: specs/patrol-home/STATUS.md
