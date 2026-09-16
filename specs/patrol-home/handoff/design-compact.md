# Handoff compact — design → sa
schemaVersion: 1
feature: patrol-home
role: design
taskId: task_77ea403c
packKind: hub
changeScope: edit_page
stack: native_dual
status: PASS
generatedAt: 2026-09-12T15:15:00.000Z
skillVersion: 2026.08.25.01
contentHash: sha256:b5efb555e6c8195ccd93f60d983b57d6b0aa476a919b7f11700157c58241ae0a
bffContentHash: sha256:128461fdf9135cf8c168a1b05e92586465d1ef34c117b39bea7d2464a06f55c0

## Decisions
- changeScope: edit_page
- formPattern: N/A (hub · FormMode=none)
- packKind: hub
- real_view_parity: v1
- kit_missing: N/A — reuse map dual
- design_confirm: approve (autoApprove ON)
- Step 4b: N/A
- open questions: none
- keep: segment/pin/kpi/quick/nav · sibling toast · offline badge

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| heroActive | Ca đang chạy | LinmHeroCard | live · empty=— |
| emptyActive | Chưa có ca | LinmHeroCard | show when no active |
| btn-open-session | Mở ca | LinmPrimaryButton | POST |
| btnEndSession | Kết ca | detail CTA | PUT |
| todayRows | Hôm nay | LinmListRow | route trống=— |
| kpiStrip | KPI 3 | LinmKpiStrip | empty=— |
| pinHere | Ghim | LinmPrimaryButton | keep |
| segPatrol | Tuần đường | LinmSegment idx0 | owner |

## Screens / zones (ids only)
- `#sc-patrol-home` DES-MOB-PAT-HOME · Pattern=Hub · FormMode=none
- zones: heroActive · emptyActive · btn-open-session · pinHere · todayRows · quickRows · btnEndSession(detail)
- reviewUrl: file://…/prototype/ios/index.html#sc-patrol-home
- reviewUrlAndroid: file://…/prototype/android/index.html#sc-patrol-home
- peerStdUrl: cấm mfeStdUrl

## API / tasks
- GET/POST/PUT patrol/sessions (BFF proxy)
- Gaps → Dev: GAP-PAT-HOME-SESSION-01/02 · HERO-01
- Next: /agent-sa-mobile

## UNCLEAR
- none

## Full paths (Read only if needed)
- design: specs/patrol-home/ui/design.md
- ux-analy: specs/patrol-home/ui/ux-analy.md
- html-map: specs/patrol-home/ui/html-to-native-map.md
- demo-parity: specs/patrol-home/ui/review/demo-parity.md
- proto: specs/patrol-home/ui/prototype/{ios,android}/index.html
- control-hint: specs/_data-analy/patrol-home-control-hint.md
- real-data: specs/_data-analy/patrol-home-real-data.md
- STATUS: specs/patrol-home/STATUS.md
