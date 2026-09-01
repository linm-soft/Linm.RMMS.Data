# Handoff compact — design

schemaVersion: 1
feature: patrol-history-detail
packKind: sheet
role: design
status: done
skillVersion: 2026.08.31.2
writtenAt: 2026-09-01T00:56:01.000Z
taskId: task_5777786c

## Decisions
- changeScope: new_page
- formPattern: Full (`#sc-patrol-detail` · DES-MOB-PAT-DETAIL) — sheet meta · surface screen
- real_view_parity: v1
- peerStdUrl: N/A · cấm mfeStdUrl
- TIMELINE: demo SSOT 3 rows P1 · no GET check-ins
- END/Share: toast P1 · no PUT / share sheet
- Map CTA: nav patrol-map + Id
- Parent: list row → push + Id (Dev)
- kit_missing: N/A
- design_confirm: approve (autoApprove ON)
- open questions: none
- autoApprove: ON · e2eQa queued `/agent-qa*` only
- hash skip: contentHash sha256:patrol-history-detail-control-hint-20260831 · **no rescan**

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| navBack | Lịch sử | BackButton | iOS text · Android icon |
| title | Chi tiết ca | TopBar title | fixed |
| navShare | Chia sẻ | IconButton | `#i-ellipsis` toast |
| codeHero | PAT-* | Text ≥26/28 | GET Code |
| badgeStatus | trạng thái | Badge | VN map |
| rowUser…Coverage | info | ListRow | GET §B |
| tlItem | Điểm tuần | TimelineRow | demo 3 |
| btnMap | Mở bản đồ ca | PrimaryButton | patrol-map |
| btnEnd | Kết thúc ca | SecondaryButton | toast |

## Screens / zones (ids only)
- DES-MOB-PAT-DETAIL `#sc-patrol-detail` Full — owner
- DES-MOB-PAT-DETAIL-NAV · HERO · INFO · TL · CTA
- DES-MOB-TABBAR Tuần đường on
- reviewUrlIos: `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-history-detail/ui/prototype/ios/index.html#sc-patrol-detail`
- reviewUrlAndroid: `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-history-detail/ui/prototype/android/index.html#sc-patrol-detail`
- peerStdUrl: N/A

## API / tasks (ids only)
- FormMode↔API: appear GET sessions/{id} · same-slug
- OUT: check-ins · session PUT
- T-*: (team-lead)

## UNCLEAR
- none

## Full paths (Read only if needed)
- design: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-history-detail/ui/design.md
- ux-analy: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-history-detail/ui/ux-analy.md
- html-map: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-history-detail/ui/html-to-native-map.md
- demo-parity: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-history-detail/ui/review/demo-parity.md
- prototype ios: …/ui/prototype/ios/index.html
- prototype android: …/ui/prototype/android/index.html
- control-hint: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/patrol-history-detail-control-hint.md
- real-data: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/patrol-history-detail-real-data.md
- po: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-history-detail/po/requirement.md
- STATUS: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-history-detail/STATUS.md
