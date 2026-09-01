# Handoff compact — dev

schemaVersion: 1
feature: patrol-history-detail
packKind: sheet
role: dev
status: done
skillVersion: 2026.08.31.2
writtenAt: 2026-09-01T11:15:00.000Z
taskId: task_158bf625

## Decisions
- changeScope: edit_page (`/edit-mobile-feature`) — close GAP-MOB-PAT-HIST-DET-NAV-01
- formPattern: Full (`#sc-patrol-detail` · DES-MOB-PAT-DETAIL)
- FIX: PatrolHome.tapToday + PatrolHistory row → push detail + Id (supersede toast `patrol.toast.detail`)
- FIX: strip OfflineDemo → live-only GET · fail/404 → EmptyChrome + toast · 403 toast+back
- API-01: GET `mobile-bff/api/v1/patrol/sessions/{id}` · reuse · Step 4b N/A
- TIMELINE: demo SSOT 3 · ListRow substitute (Defer P2)
- END/Share: toast P1 · Map CTA patrol-map
- mfeStdUrl: N/A · **cấm**
- e2eQa: **cấm** role Dev
- autoApprove: ON · open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| tapToday | Hôm nay row | ListRow | **push** detail + Id |
| histRow | Lịch sử row | ListRow | push detail + Id |
| navBack…btnEnd | detail chrome | per prior | unchanged |

## Screens / zones (ids only)
- DES-MOB-PAT-DETAIL `#sc-patrol-detail`
- entry: `#sc-patrol-home` today · `#sc-patrol-history` row
- peerStdUrl / mfeStdUrl: N/A

## API / tasks (ids only)
- FormMode↔API: appear GET sessions/{id}
- OUT: OfflineDemo · invent API · PUT end
- T-IOS/T-AND edit: done · VERIFY PASS

## VERIFY
- iOS xcodegen + LinmRmms · iPhone 17 Pro: **PASS**
- Android assembleDebug: **PASS**
- BFF dotnet build: **PASS**
- debt: TimelineRow kit · map Id · checkin-detail (Defer)

## UNCLEAR
- none

## Full paths (Read only if needed)
- ios: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-history-detail/implement/ios.md
- android: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-history-detail/implement/android.md
- STATUS: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-history-detail/STATUS.md
