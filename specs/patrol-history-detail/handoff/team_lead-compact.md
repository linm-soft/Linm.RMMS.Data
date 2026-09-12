# Handoff compact — team_lead

schemaVersion: 1
feature: patrol-history-detail
packKind: sheet
role: team_lead
status: done
skillVersion: 2026.08.31.2
writtenAt: 2026-09-12T13:50:00.000Z
taskId: task_cacd86c6

## Decisions
- changeScope: edit_page (GAP timeline live)
- formPattern: Full (`#sc-patrol-detail` · DES-MOB-PAT-DETAIL) — PACK-01 giữ
- route_confirm: route_a keep (autoApprove ON) — list/today → push + Id · no new URL
- ios_repo_confirm / android_repo_confirm: ON
- mfe / be: native dual · GET sessions/{id} + GET …/check-ins Live · Step 4b N/A · cấm ERP.* / invent / mfeStdUrl
- T-BE-API / T-BE-MIG: n/a (both Live)
- TIMELINE-01: strip timelineDemo · GET check-ins Live · empty OK
- TAP-01: done → nav checkin-detail + Id (≠ toast)
- MAP-01: nav patrol-map + Id · no toast khi có Id
- END/Share: toast P1 · cấm PUT / share sheet
- Appear: parallel API-01 + API-02
- Offline: session fail EmptyChrome+toast · CI fail empty TL+toast · cấm fake 200 / timelineDemo
- kit_missing: N/A · T-KIT n/a
- open questions: none
- autoApprove: ON · e2eQa queued `/agent-qa*` only
- devSlash: T-IOS → /agent-dev-ios · T-AND → /agent-dev-android
- hash: contentHash sha256:patrol-history-detail-control-hint-20260912-timeline-live · bffContentHash sha256:patrol-sessions-getbyid-plus-checkins

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| navBack | Lịch sử | BackButton | pop list |
| title | Chi tiết ca | TopBar title | fixed |
| navShare | Chia sẻ | IconButton | toast |
| codeHero | PAT-* | Text ≥26 | GET Code |
| badgeStatus | trạng thái | Badge | VN + OfflineQueued |
| rowUser…Coverage | info | ListRow | GET session |
| tlItem | Điểm tuần | TimelineRow | GET check-ins Live |
| tlEmpty | empty | Empty | [] OK |
| tlTap | Xem | tap | → CI-DETAIL + Id |
| btnMap | Mở bản đồ ca | PrimaryButton | map + Id |
| btnEnd | Kết thúc ca | SecondaryButton | toast |

## Screens / zones (ids only)
- DES-MOB-PAT-DETAIL `#sc-patrol-detail` Full — owner
- DES-MOB-PAT-DETAIL-NAV · HERO · INFO · TL · TL-EMPTY · CTA
- DES-MOB-TABBAR Tuần đường on · tabs: none
- entry `#sc-patrol-history` / today → push + Id
- reviewUrl: dual prototype `#sc-patrol-detail`
- peerStdUrl: N/A · cấm mfeStdUrl

## API / tasks (ids only)
- FormMode↔API: appear GET sessions/{id} + GET …/check-ins parallel
- API-01: GET mobile-bff/api/v1/patrol/sessions/{id}
- API-02: GET mobile-bff/api/v1/patrol/sessions/{id}/check-ins · Live
- Gaps → Dev: TIMELINE-01 · TAP-01 · MAP-01 · END-01
- OUT: POST CI · PUT · invent · timelineDemo
- T-KIT-PAT-DETAIL: n/a
- T-IOS-PAT-DETAIL: pending · /agent-dev-ios · edit
- T-AND-PAT-DETAIL: pending · /agent-dev-android · edit
- T-BE-API / T-BE-MIG: n/a
- T-QA-TAB-01 · T-QA-PAT-DETAIL: pending · /agent-qa-mobile
- deps: SA · route_a → T-IOS/T-AND → T-QA

## UNCLEAR
- none

## Full paths (Read only if needed)
- task: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-history-detail/task/patrol-history-detail.md
- solution: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-history-detail/be/solution-discovery.md
- design: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-history-detail/ui/design.md
- po: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-history-detail/po/requirement.md
- control-hint: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/patrol-history-detail-control-hint.md
- real-data: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/patrol-history-detail-real-data.md
- STATUS: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-history-detail/STATUS.md
