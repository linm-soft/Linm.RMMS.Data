# Handoff compact — sa

schemaVersion: 1
feature: patrol-history-detail
packKind: sheet
role: sa
status: done
skillVersion: 2026.08.31.2
writtenAt: 2026-09-01T01:03:39.000Z
taskId: task_47202291

## Decisions
- changeScope: new_page
- formPattern: Full (`#sc-patrol-detail` · DES-MOB-PAT-DETAIL) — sheet meta · surface screen
- mfe / be: native dual · GET `mobile-bff/api/v1/patrol/sessions/{id}` · Step 4b N/A · cấm ERP.* / invent path / mfeStdUrl
- FormMode↔API: appear → API-01 GET sessions/{id} · same-slug
- entity/migration: none · no Schema_* / Seed_*
- TZ: PlannedDate dd/MM/yyyy · StartedAt HH:mm local + (UTC+7) label
- XCO: GetById 403 → toast + pop list
- SHARE: N/A P1 · trailing toast only
- TIMELINE: demo SSOT 3 rows · no GET check-ins P1
- END/Share: toast P1 · no PUT / share sheet
- Map CTA: nav patrol-map + Id
- Offline: GET fail → toast + demo SSOT · cấm fake 200
- GPS: display-only timeline · no location request
- solution_confirm: approve (autoApprove ON)
- open questions: none
- autoApprove: ON · e2eQa queued `/agent-qa*` only
- devSlash: /agent-dev-ios + /agent-dev-android

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| codeHero | PAT-* | Text display | GET Code |
| badgeStatus | trạng thái | Badge | Status + OfflineQueued |
| rowUser…Coverage | info | ListRow | GET §B |
| tlItem | Điểm tuần | TimelineRow | demo SSOT |
| btnMap | Mở bản đồ ca | PrimaryButton | nav + Id |
| btnEnd | Kết thúc ca | SecondaryButton | toast |
| navShare | Chia sẻ | IconButton | toast |

## Screens / zones (ids only)
- DES-MOB-PAT-DETAIL `#sc-patrol-detail` Full — owner
- DES-MOB-PAT-DETAIL-NAV · HERO · INFO · TL · CTA
- entry `#sc-patrol-history` row → push + Id
- reviewUrl: dual prototype `#sc-patrol-detail`
- peerStdUrl: N/A · cấm mfeStdUrl

## API / tasks (ids only)
- FormMode↔API: appear GET sessions/{id}
- API-01: GET mobile-bff/api/v1/patrol/sessions/{id}
- OUT: check-ins · session PUT · invent path
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
