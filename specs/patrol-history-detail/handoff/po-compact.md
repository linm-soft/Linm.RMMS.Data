# Handoff compact — po

schemaVersion: 1
feature: patrol-history-detail
packKind: sheet
role: po
status: done
skillVersion: 2026.08.31.2
writtenAt: 2026-09-12T13:45:00.000Z
taskId: task_eef3894e

## Decisions
- changeScope: edit_page (GAP review timeline)
- formPattern: Full (`#sc-patrol-detail` · DES-MOB-PAT-DETAIL) — PACK-01 giữ
- Grid AC: N/A · Report AC: N/A · Leave-dirty: N/A
- TIMELINE-01: GET check-ins live · empty OK · **cấm** timelineDemo
- TAP-01: done → nav checkin-detail + Id (≠ toast)
- MAP-01: nav patrol-map + session Id · no toast khi có Id
- END/Share: toast P1 · **cấm** PUT / share sheet
- mfe / be: native dual · GET sessions/{id} + GET …/check-ins Live · Step 4b N/A · cấm ERP.* / mfeStdUrl
- keep: prior Design dual proto · PO § Delta only
- open questions: none
- autoApprove: ON · e2eQa queued `/agent-qa*` only
- devSlash: /agent-dev-ios + /agent-dev-android

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| navBack | Lịch sử | BackButton | pop list |
| title | Chi tiết ca | TopBar title | fixed |
| navShare | Chia sẻ | IconButton | toast P1 |
| codeHero | PAT-* | Text ≥26 | GET Code |
| badgeStatus | trạng thái | Badge | Status VN |
| rowUser…Coverage | info | ListRow | GET session |
| tlItem | Điểm tuần | TimelineRow | GET check-ins |
| tlEmpty | empty | Empty | [] OK |
| tlTap | Xem | tap | → CI-DETAIL |
| btnMap | Mở bản đồ ca | Primary | nav map + Id |
| btnEnd | Kết thúc ca | Secondary | toast · no PUT |

## Screens / zones (ids only)
- DES-MOB-PAT-DETAIL `#sc-patrol-detail` Full — owner
- entry `#sc-patrol-history` / today → push + Id
- reuse: patrol-map CTA · patrol-checkin tap (≠ save)
- reviewUrl: dual prototype `#sc-patrol-detail`
- peerStdUrl: N/A · cấm mfeStdUrl

## API / tasks (ids only)
- API-01 GET sessions/{id}
- API-02 GET sessions/{id}/check-ins · Live
- Gaps: TIMELINE-01 · TAP-01 · MAP-01 · END-01 keep
- OUT: POST CI · PUT · invent · timelineDemo

## UNCLEAR
- none

## Full paths (Read only if needed)
- requirement: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-history-detail/po/requirement.md
- control-hint: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/patrol-history-detail-control-hint.md
- real-data: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/patrol-history-detail-real-data.md
- STATUS: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-history-detail/STATUS.md
