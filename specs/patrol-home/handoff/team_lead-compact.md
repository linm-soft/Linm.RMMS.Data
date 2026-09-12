# Handoff compact — team_lead → dev
schemaVersion: 1
feature: patrol-home
role: team_lead
taskId: task_ab790c73
packKind: hub
changeScope: edit_page
stack: native_dual
status: PASS
generatedAt: 2026-09-12T15:10:25.000Z
skillVersion: 2026.08.19.23
contentHash: sha256:b5efb555e6c8195ccd93f60d983b57d6b0aa476a919b7f11700157c58241ae0a
bffContentHash: sha256:128461fdf9135cf8c168a1b05e92586465d1ef34c117b39bea7d2464a06f55c0

## Decisions
- changeScope: edit_page
- formPattern: N/A (hub · FormMode=none)
- packKind: hub
- route_confirm: route_a (autoApprove ON)
- ios/android_repo: confirmed · scaffold N/A
- kit_missing: N/A — reuse map dual · no T-KIT-*
- Step 4b / T-BE-*: N/A (POST/PUT Live)
- open questions: none
- keep: segment/pin/kpi/quick/nav · sibling toast · offline badge · GET sessions

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| heroActive | Ca đang chạy | LinmHeroCard | GET · empty=— |
| emptyActive | Chưa có ca | LinmHeroCard | no active |
| btn-open-session | Mở ca | LinmPrimaryButton | POST SESSION-01 |
| btnEndSession | Kết ca | detail CTA | PUT SESSION-02 |
| todayRows | Hôm nay | LinmListRow | GET |
| kpiStrip | KPI 3 | LinmKpiStrip | GET |

## Screens / zones (ids only)
- `#sc-patrol-home` DES-MOB-PAT-HOME · Pattern=Hub · FormMode=none
- zones: heroActive · emptyActive · btn-open-session · pinHere · todayRows · quickRows · btnEndSession(detail)
- reviewUrl: prototype/{ios,android}/index.html#sc-patrol-home
- peerStdUrl: cấm mfeStdUrl

## API / tasks (ids only)
- FormMode↔API: none↔API-01 GET · API-02 POST · API-03 PUT `patrol/sessions`
- T-*: T-IOS-PAT-HOME-SESSION · T-AND-PAT-HOME-SESSION · T-BE n/a · T-KIT n/a
- Gaps → Dev: GAP-PAT-HOME-SESSION-01/02 · HERO-01
- devSlash: /agent-dev-ios · /agent-dev-android
- deps: SA confirmed · route_a
- Next: /agent-dev-ios + /agent-dev-android (role sau · không chain TL)

## UNCLEAR
- none

## Full paths (Read only if needed)
- task: specs/patrol-home/task/patrol-home.md
- sa-compact: specs/patrol-home/handoff/sa-compact.md
- design-compact: specs/patrol-home/handoff/design-compact.md
- STATUS: specs/patrol-home/STATUS.md
