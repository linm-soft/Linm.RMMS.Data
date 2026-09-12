# Handoff compact — data_analy

schemaVersion: 1
feature: patrol-history-detail
packKind: sheet
role: data_analy
status: confirmed
skillVersion: 2026.08.31.2
writtenAt: 2026-09-12T13:26:27.000Z
taskId: task_dc906824

## Decisions
- changeScope: edit_page (GAP review timeline)
- formPattern: Full `#sc-patrol-detail` · DES-MOB-PAT-DETAIL
- DoD: GET `patrol/sessions/{id}/check-ins` live · empty OK · **cấm** timelineDemo
- TAP: done → nav checkin-detail (not toast)
- MAP: nav patrol-map + session Id
- END: toast P1 · cấm PUT
- BE: GetCheckIns **Live** · Step 4b N/A · cấm invent / ERP.*
- keep: existing PO/Design artifacts · PO § Delta only
- open questions: none
- autoApprove: ON

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| hero | Code+badge | Text/Badge | GET session |
| info | 6 rows | ListRow | GET session |
| tl | Điểm tuần | TimelineRow | GET check-ins |
| tlEmpty | empty OK | Empty | [] |
| map | Mở bản đồ ca | Primary | nav |
| end | Kết thúc ca | Secondary | toast |
| tap | Xem điểm | tap | → CI-DETAIL |

## Screens / zones (ids only)
- DES-MOB-PAT-DETAIL `#sc-patrol-detail`
- entry: `#sc-patrol-history` / today
- reviewUrl: dual prototype `#sc-patrol-detail`

## API / tasks (ids only)
- API-01 GET sessions/{id}
- API-02 GET sessions/{id}/check-ins · Live
- Gaps: TIMELINE-01 · TAP-01 · MAP-01 · END-01 keep
- OUT: POST CI · PUT · invent · timelineDemo

## UNCLEAR
- none

## Full paths (Read only if needed)
- control-hint: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/patrol-history-detail-control-hint.md
- real-data: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/patrol-history-detail-real-data.md
- bff: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/patrol-history-detail-bff-endpoints.md
- action-tree: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/patrol-history-detail-action-tree.md
- STATUS: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-history-detail/STATUS.md
