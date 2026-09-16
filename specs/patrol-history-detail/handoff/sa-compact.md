# Handoff compact — sa

schemaVersion: 1
feature: patrol-history-detail
packKind: sheet
role: sa
status: confirmed
skillVersion: 2026.08.31.2
writtenAt: 2026-09-12T13:45:00.000Z
taskId: task_9161b83a

## Decisions
- changeScope: edit_page (GAP timeline live)
- formPattern: Full (`#sc-patrol-detail` · DES-MOB-PAT-DETAIL) — PACK-01 giữ
- mfe / be: native dual · GET sessions/{id} + GET …/check-ins Live · Step 4b N/A · cấm ERP.* / invent / mfeStdUrl
- FormMode↔API: appear → API-01 + API-02 parallel
- entity/migration: none · no Schema_* / Seed_*
- TZ: PlannedDate dd/MM/yyyy · StartedAt/CreatedAt HH:mm local
- XCO: 403 → toast (+ pop session)
- SHARE: N/A P1 · trailing toast only
- TIMELINE-01: GET check-ins Live · empty OK · **cấm** timelineDemo
- TAP-01: done → nav checkin-detail + Id (≠ toast)
- MAP-01: nav patrol-map + session Id
- END/Share: toast P1 · cấm PUT / share sheet
- Offline: session fail EmptyChrome+toast · CI fail empty TL+toast · cấm fake 200
- GPS: display-only · no location request
- solution_confirm: approve (autoApprove ON)
- open questions: none
- autoApprove: ON · e2eQa queued `/agent-qa*` only
- devSlash: /agent-dev-ios + /agent-dev-android
- hash: contentHash sha256:patrol-history-detail-control-hint-20260912-timeline-live · bffContentHash sha256:patrol-sessions-getbyid-plus-checkins

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| codeHero | PAT-* | Text | GET Code |
| badgeStatus | trạng thái | Badge | Status + OfflineQueued |
| rowUser…Coverage | info | ListRow | GET session |
| tlItem | Điểm tuần | TimelineRow | GET check-ins Live |
| tlEmpty | empty | Empty | [] OK |
| tlTap | Xem | tap | → CI-DETAIL |
| btnMap | Mở bản đồ ca | PrimaryButton | nav + Id |
| btnEnd | Kết thúc ca | SecondaryButton | toast |
| navShare | Chia sẻ | IconButton | toast |

## Screens / zones (ids only)
- DES-MOB-PAT-DETAIL `#sc-patrol-detail` Full — owner
- DES-MOB-PAT-DETAIL-NAV · HERO · INFO · TL · TL-EMPTY · CTA
- entry `#sc-patrol-history` / today → push + Id
- reviewUrl: dual prototype `#sc-patrol-detail`
- peerStdUrl: N/A · cấm mfeStdUrl

## API / tasks (ids only)
- FormMode↔API: appear GET sessions/{id} + GET …/check-ins
- API-01: GET mobile-bff/api/v1/patrol/sessions/{id}
- API-02: GET mobile-bff/api/v1/patrol/sessions/{id}/check-ins · Live
- Gaps → Dev: TIMELINE-01 · TAP-01 · MAP-01 · END-01 keep
- OUT: POST CI · PUT · invent · timelineDemo
- T-*: (team-lead)

## UNCLEAR
- none

## Full paths (Read only if needed)
- solution: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-history-detail/be/solution-discovery.md
- control-hint: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/patrol-history-detail-control-hint.md
- real-data: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/patrol-history-detail-real-data.md
- bff: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/patrol-history-detail-bff-endpoints.md
- design: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-history-detail/ui/design.md
- po: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-history-detail/po/requirement.md
- STATUS: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-history-detail/STATUS.md
