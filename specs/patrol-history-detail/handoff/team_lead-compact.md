# Handoff compact — team_lead

schemaVersion: 1
feature: patrol-history-detail
packKind: sheet
role: team_lead
status: done
skillVersion: 2026.08.31.2
writtenAt: 2026-09-01T01:07:48.000Z
taskId: task_edc8421b

## Decisions
- changeScope: new_page
- formPattern: Full (`#sc-patrol-detail` · DES-MOB-PAT-DETAIL) — sheet meta · surface screen
- route_confirm: route_a (autoApprove ON) — list row → push + Id · back pop list
- ios_repo_confirm / android_repo_confirm: ON
- mfe / be: native dual · GET `mobile-bff/api/v1/patrol/sessions/{id}` · Step 4b N/A · cấm ERP.* / invent path / mfeStdUrl
- T-BE-API / T-BE-MIG: n/a (GetById live)
- TIMELINE: demo SSOT 3 · no GET check-ins P1
- END/Share: toast P1 · no PUT / share sheet
- Map CTA: nav patrol-map + Id · cấm start sibling
- Parent: rewire toast → push + Id
- kit_missing: N/A · T-KIT n/a
- open questions: none
- autoApprove: ON · e2eQa queued `/agent-qa*` only
- devSlash: T-IOS → /agent-dev-ios · T-AND → /agent-dev-android

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| navBack | Lịch sử | BackButton | pop list |
| title | Chi tiết ca | TopBar title | fixed |
| navShare | Chia sẻ | IconButton | toast |
| codeHero | PAT-* | Text ≥26 | GET Code |
| badgeStatus | trạng thái | Badge | VN + OfflineQueued |
| rowUser…Coverage | info | ListRow | GET §B |
| tlItem | Điểm tuần | TimelineRow | demo 3 |
| btnMap | Mở bản đồ ca | PrimaryButton | patrol-map |
| btnEnd | Kết thúc ca | SecondaryButton | toast |

## Screens / zones (ids only)
- DES-MOB-PAT-DETAIL `#sc-patrol-detail` Full — owner
- DES-MOB-PAT-DETAIL-NAV · HERO · INFO · TL · CTA
- DES-MOB-TABBAR Tuần đường on · tabs: none
- entry `#sc-patrol-history` row → push + Id
- reviewUrl: dual prototype `#sc-patrol-detail`
- peerStdUrl: N/A · cấm mfeStdUrl

## API / tasks (ids only)
- FormMode↔API: appear GET sessions/{id}
- API-01: GET mobile-bff/api/v1/patrol/sessions/{id}
- OUT: check-ins · session PUT · invent path
- T-KIT-PAT-DETAIL: n/a
- T-IOS-PAT-DETAIL: pending · /agent-dev-ios
- T-AND-PAT-DETAIL: pending · /agent-dev-android
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
