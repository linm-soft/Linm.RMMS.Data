# Handoff compact — dev

schemaVersion: 1
feature: patrol-history-detail
packKind: sheet
role: dev
status: done
skillVersion: 2026.08.31.2
writtenAt: 2026-09-12T14:10:00.000Z
taskId: task_4d0880f9

## Decisions
- changeScope: edit_page (GAP timeline live)
- formPattern: Full (`#sc-patrol-detail` · DES-MOB-PAT-DETAIL)
- route_a keep · dual native · Step 4b N/A · cấm ERP.* / mfeStdUrl / timelineDemo
- Appear: parallel API-01 + API-02
- TIMELINE-01: GET check-ins Live · empty OK · fail empty+toast
- TAP-01: done → `#sc-checkin-detail` + payload Id (≠ toast)
- MAP-01: nav patrol-map + session Id · no toast khi có Id
- END/Share: toast P1 · cấm PUT
- Offline: session fail EmptyChrome+toast · CI fail empty TL+toast
- verifyGate: iOS xcodegen+xcodebuild iPhone 17 Pro PASS · Android assembleDebug PASS · BFF dotnet build PASS
- e2eQa: queued `/agent-qa*` only · cấm e2e ở Dev
- hash: contentHash sha256:patrol-history-detail-control-hint-20260912-timeline-live · bffContentHash sha256:patrol-sessions-getbyid-plus-checkins

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| codeHero | PAT-* | Text | GET Code |
| badgeStatus | trạng thái | Badge | VN + OfflineQueued |
| rowUser…Coverage | info | ListRow | GET session |
| tlItem | Điểm tuần | TimelineRow→ListRow | GET check-ins Live |
| tlEmpty | empty | Empty | [] OK |
| tlTap | Xem | tap | → CI-DETAIL |
| btnMap | Mở bản đồ ca | PrimaryButton | map + Id |
| btnEnd | Kết thúc ca | SecondaryButton | toast |
| navShare | Chia sẻ | IconButton | toast |

## Screens / zones (ids only)
- DES-MOB-PAT-DETAIL `#sc-patrol-detail` Full
- DES-MOB-PAT-DETAIL-NAV · HERO · INFO · TL · TL-EMPTY · CTA
- peer `#sc-checkin-detail` (tap)
- entry list/today → push + Id
- mfeStdUrl: — · **cấm**

## API / tasks (ids only)
- API-01: GET mobile-bff/api/v1/patrol/sessions/{id}
- API-02: GET mobile-bff/api/v1/patrol/sessions/{id}/check-ins · Live
- T-IOS-PAT-DETAIL: done
- T-AND-PAT-DETAIL: done
- T-BE-API / T-BE-MIG: n/a
- Gaps closed: TIMELINE/TAP/MAP/END
- OUT: POST CI · PUT · invent · timelineDemo
- next: `/agent-qa-mobile` · T-QA-PAT-DETAIL

## Debt
- PatrolMap chưa consume session Id (P2)
- Kit thiếu LinmTimelineRow → ListRow

## UNCLEAR
- none

## Full paths (Read only if needed)
- ios: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-history-detail/implement/ios.md
- android: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-history-detail/implement/android.md
- STATUS: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-history-detail/STATUS.md
