# Handoff compact — dev → qa
schemaVersion: 1
feature: patrol-home
role: dev
taskId: task_523eaa0e
packKind: hub
changeScope: edit_page
stack: native_dual
status: PASS
generatedAt: 2026-09-12T15:20:00.000Z
skillVersion: 2026.08.19.23
contentHash: sha256:b5efb555e6c8195ccd93f60d983b57d6b0aa476a919b7f11700157c58241ae0a
bffContentHash: sha256:128461fdf9135cf8c168a1b05e92586465d1ef34c117b39bea7d2464a06f55c0

## Decisions
- changeScope: edit_page
- formPattern: N/A (hub · FormMode=none)
- packKind: hub
- mfeStdUrl: — (cấm · native_dual)
- build: iOS xcodegen+xcodebuild iPhone 17 Pro Max **PASS** · Android assembleDebug **PASS** · BFF dotnet build **PASS**
- Step 4b: N/A (POST/PUT Live · no BE write)
- open questions: none
- keep: segment/pin/kpi/quick/nav · sibling toast · offline badge · GET

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| heroActive | Ca đang chạy | LinmHeroCard | GET · empty=— |
| emptyActive | Chưa có ca | LinmHeroCard | no active |
| btn-open-session | Mở ca | LinmPrimaryButton | POST SESSION-01 |
| btnEndSession | Kết ca | detail CTA | PUT SESSION-02 |
| todayRows | Hôm nay | LinmListRow | GET |
| kpiStrip | KPI 3 | LinmKpiStrip | empty=— |

## Screens / zones (ids only)
- `#sc-patrol-home` DES-MOB-PAT-HOME · Pattern=Hub · FormMode=none
- zones: heroActive · emptyActive · btn-open-session · pinHere · todayRows · quickRows · btnEndSession(detail)
- peerStdUrl: cấm mfeStdUrl

## API / tasks (ids only)
- FormMode↔API: none↔GET/POST/PUT `patrol/sessions`
- T-*: T-IOS-PAT-HOME-SESSION · T-AND-PAT-HOME-SESSION **PASS** · T-BE n/a
- Gaps closed: SESSION-01/02 · HERO-01
- debt: route picker P2 · sibling pending_confirm
- Next: /agent-qa-mobile (e2eQa ON · queued)

## UNCLEAR
- none

## Full paths (Read only if needed)
- implement/ios: specs/patrol-home/implement/ios.md
- implement/android: specs/patrol-home/implement/android.md
- team_lead-compact: specs/patrol-home/handoff/team_lead-compact.md
- STATUS: specs/patrol-home/STATUS.md
