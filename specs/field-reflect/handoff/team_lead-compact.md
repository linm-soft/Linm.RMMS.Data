# Handoff compact — team_lead

schemaVersion: 1
feature: field-reflect
packKind: screen
role: team_lead
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-12T10:52:00.000Z
taskId: task_1d0e4dfd
slash: /agent-tl-mobile
changeScope: edit_page
autoApprove: ON

## Decisions
- gap=`field_reflect_sessions_live_only` · **GAP-MOB-FIELD-SESS-01**
- Live-only GET `patrol/sessions` · empty/fail = empty locationRow + toastSessionsFail · **cấm** itemsOrDemo/demoToday
- tasks: `T-IOS-FIELD-SESS-LIVE` · `T-AND-FIELD-SESS-LIVE` · prior T-IOS/AND-FIELD-REF **giữ**
- T-BE / T-BFF / T-KIT: **n/a this edit** · Step 4b **N/A**
- route_confirm: **route_a giữ** · không URL mới
- ios/android_repo: **reuse** · kit_skip=yes
- FormMode↔API: sessions live-only · detect · incident · asset-types · uploads optional
- ERP.* / mfeStdUrl: none · e2e/build skipped (cấm TL) · e2eQa queued QA
- next: **dev-ios** (`T-IOS-FIELD-SESS-LIVE`) → **dev-android**
- UNCLEAR: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| locationRow | Vị trí đã chốt | ListRow | live+GPS · empty if fail |
| toastSessionsFail | Không tải được ca tuần | Toast | NEW · fail/empty |
| kindPills / photos / detect / severity / checklist | … | keep | unchanged |
| btnCreate / btnDraft | CTA | Primary/Secondary | keep |

## Screens / zones (ids only)
- `#sc-field-reflect` · `DES-MOB-FIELD-REFLECT` · `DES-MOB-FIELD-KIND` · `DES-MOB-GPS-DENY`
- pick `#sc-field-pick` · entry `#row-reflect`
- reviewUrlIos/Android: dual prototype file:// (Design)
- peerStdUrl: N/A

## API / tasks (ids only)
- GET `patrol/sessions` live-only · POST detect · POST incident · GET asset-types
- T-IOS-FIELD-SESS-LIVE: pending · `/agent-dev-ios`
- T-AND-FIELD-SESS-LIVE: pending · `/agent-dev-android`
- T-BE / T-BFF / T-KIT: n/a
- T-QA-TAB-01 · T-QA-FIELD-SESS-LIVE: pending · `/agent-qa-mobile`

## UNCLEAR
- none

## Full paths (Read only if needed)
- task: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/field-reflect/task/field-reflect.md
- solution: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/field-reflect/be/solution-discovery.md
- design compact: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/field-reflect/handoff/design-compact.md
- sa compact: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/field-reflect/handoff/sa-compact.md
- STATUS: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/field-reflect/STATUS.md

## Next
role: dev-ios
artifact: specs/field-reflect/implement/ios.md
slash: /agent-dev-ios
task: T-IOS-FIELD-SESS-LIVE
