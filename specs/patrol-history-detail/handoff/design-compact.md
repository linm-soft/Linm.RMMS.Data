# Handoff compact — design

schemaVersion: 1
feature: patrol-history-detail
packKind: sheet
role: design
status: confirmed
skillVersion: 2026.08.31.2
writtenAt: 2026-09-12T13:40:00.000Z
taskId: task_2b169a90

## Decisions
- changeScope: edit_page (GAP timeline live)
- formPattern: Full (`#sc-patrol-detail` · DES-MOB-PAT-DETAIL) — PACK-01 giữ
- real_view_parity: v1
- peerStdUrl: N/A · cấm mfeStdUrl
- TIMELINE-01: GET check-ins live · empty OK · **cấm** timelineDemo · proto 3-row = UI ref only
- TAP-01: done → nav checkin-detail + Id (≠ toast)
- MAP-01: nav patrol-map + session Id · no toast khi có Id
- END/Share: toast P1 · cấm PUT / share sheet
- fail: session EmptyChrome+toast · CI fail → tl empty+toast
- kit_missing: N/A
- design_confirm: approve (autoApprove ON)
- keep: dual proto layout · Delta runtime ≠ demo
- open questions: none
- autoApprove: ON · e2eQa queued `/agent-qa*` only
- hash skip: contentHash sha256:patrol-history-detail-control-hint-20260912-timeline-live · **no rescan**

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| navBack | Lịch sử | BackButton | iOS text · Android icon |
| title | Chi tiết ca | TopBar title | fixed |
| navShare | Chia sẻ | IconButton | `#i-ellipsis` toast |
| codeHero | PAT-* | Text ≥26/28 | GET Code |
| badgeStatus | trạng thái | Badge | VN map |
| rowUser…Coverage | info | ListRow | GET session |
| tlItem | Điểm tuần | TimelineRow | GET check-ins |
| tlEmpty | empty | Empty | [] OK |
| tlTap | Xem | tap | → CI-DETAIL |
| btnMap | Mở bản đồ ca | PrimaryButton | nav map + Id |
| btnEnd | Kết thúc ca | SecondaryButton | toast |

## Screens / zones (ids only)
- DES-MOB-PAT-DETAIL `#sc-patrol-detail` Full — owner
- DES-MOB-PAT-DETAIL-NAV · HERO · INFO · TL · TL-EMPTY · CTA
- DES-MOB-TABBAR Tuần đường on
- reviewUrlIos: `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-history-detail/ui/prototype/ios/index.html#sc-patrol-detail`
- reviewUrlAndroid: `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-history-detail/ui/prototype/android/index.html#sc-patrol-detail`
- peerStdUrl: N/A

## API / tasks (ids only)
- API-01 GET sessions/{id}
- API-02 GET sessions/{id}/check-ins · Live
- Gaps → Dev: TIMELINE-01 · TAP-01 · MAP-01 · END-01 keep
- OUT: POST CI · PUT · invent · timelineDemo

## UNCLEAR
- none

## Full paths (Read only if needed)
- design: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-history-detail/ui/design.md
- ux-analy: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-history-detail/ui/ux-analy.md
- html-map: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-history-detail/ui/html-to-native-map.md
- prototype ios: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-history-detail/ui/prototype/ios/index.html
- prototype android: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-history-detail/ui/prototype/android/index.html
- control-hint: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/patrol-history-detail-control-hint.md
- real-data: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/patrol-history-detail-real-data.md
- po: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-history-detail/po/requirement.md
- STATUS: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-history-detail/STATUS.md
