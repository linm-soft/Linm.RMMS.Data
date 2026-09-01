# Handoff compact — po

schemaVersion: 1
feature: patrol-history-detail
packKind: sheet
role: po
status: done
skillVersion: 2026.08.31.2
writtenAt: 2026-09-01T00:50:00.000Z
taskId: task_74ed698b

## Decisions
- changeScope: new_page
- formPattern: Full (`#sc-patrol-detail` · DES-MOB-PAT-DETAIL) — PACK-01: sheet meta · surface screen
- Grid AC: N/A · Report AC: N/A
- Leave-dirty: N/A (readonly)
- TIMELINE-01: demo SSOT 3 rows P1 · no GET check-ins
- END/Share: toast P1 · no PUT / share sheet
- mfe / be: native dual · GET `mobile-bff/api/v1/patrol/sessions/{id}` · Step 4b N/A · cấm ERP.* / mfeStdUrl
- parent: rewire list toast → push + Id
- open questions: none
- autoApprove: ON · e2eQa queued `/agent-qa*` only
- devSlash: /agent-dev-ios + /agent-dev-android

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| navBack | Lịch sử | BackButton | pop list · dual chrome |
| title | Chi tiết ca | TopBar title | fixed |
| navShare | Chia sẻ | IconButton | toast P1 |
| codeHero | PAT-* | Text display ≥26 | GET Code |
| badgeStatus | trạng thái | Badge | Status VN map |
| rowUser…Coverage | info | ListRow | GET bind §B |
| tlItem | Điểm tuần | TimelineRow | demo SSOT P1 |
| btnMap | Mở bản đồ ca | PrimaryButton | nav patrol-map + Id |
| btnEnd | Kết thúc ca | SecondaryButton | toast · no PUT |

## Screens / zones (ids only)
- DES-MOB-PAT-DETAIL `#sc-patrol-detail` Full — owner
- entry `#sc-patrol-history` row → push + Id
- reuse: patrol-map CTA · patrol-checkin timeline tap (≠ save)
- reviewUrl: (Design)
- peerStdUrl: N/A · cấm mfeStdUrl

## API / tasks (ids only)
- FormMode↔API: appear GET sessions/{id} · same-slug
- OUT: check-ins list/POST · session PUT · invent path
- T-*: (team-lead)

## UNCLEAR
- none

## Full paths (Read only if needed)
- control-hint: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/patrol-history-detail-control-hint.md
- real-data: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/patrol-history-detail-real-data.md
- action-tree: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/patrol-history-detail-action-tree.md
- po: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-history-detail/po/requirement.md
- STATUS: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-history-detail/STATUS.md
