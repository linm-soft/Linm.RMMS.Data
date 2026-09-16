# Handoff compact — design

schemaVersion: 1
feature: field-reflect
packKind: screen
role: design
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-12T10:50:00.000Z
taskId: task_91131e02
slash: /agent-design-mobile
changeScope: edit_page
formPattern: Full (`#sc-field-reflect` · DES-MOB-FIELD-REFLECT)
real_view_parity: v1
peerStdUrl: N/A

## Decisions
- gap=`field_reflect_sessions_live_only` · **GAP-MOB-FIELD-SESS-01**
- Live-only GET `patrol/sessions` · empty/fail → empty locationRow + toastSessionsFail · **cấm** itemsOrDemo/demoToday
- Keep: Kind/Photo/Detect/Severity/CHK/Create/Draft/GPS deny · packKind screen
- Proto query: `?empty=1` · `?fail=1` · `?deny=1`
- kit_missing: PhotoRow · CheckboxList **approve**
- design_confirm: **approve** (autoApprove ON)
- hash skip: contentHash sha256:43744be6c3dc+field-reflect-sess-live-20260912 · **no rescan**
- next: **sa** (`/agent-sa-mobile`) · e2e queued QA
- UNCLEAR: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| locationRow | Vị trí đã chốt | ListRow | live+GPS · empty `—` if fail |
| toastSessionsFail | Không tải được ca tuần | Toast | NEW · fail/empty |
| kindPills | Hư/Mất/Hỏng | PillSelect | keep |
| photos / detect / severity | … | PhotoRow / ListRow | keep |
| checklist | CHK by asset | CheckboxList | keep |
| btnCreate / btnDraft | CTA | Primary/Secondary | keep |

## Screens / zones (ids only)
- `#sc-field-reflect` · `DES-MOB-FIELD-REFLECT` · `DES-MOB-FIELD-KIND` · `DES-MOB-GPS-DENY`
- pick `#sc-field-pick` · entry `#row-reflect`
- reviewUrlIos: `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/field-reflect/ui/prototype/ios/index.html`
- reviewUrlAndroid: `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/field-reflect/ui/prototype/android/index.html`
- peerStdUrl: N/A · real_view_parity: v1

## API / tasks (ids only)
- GET `patrol/sessions` live-only · POST detect · POST incident · GET asset-types
- Dev dual: remove itemsOrDemo on FieldReflect

## UNCLEAR
- none

## Full paths (Read only if needed)
- design: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/field-reflect/ui/design.md
- ux-analy: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/field-reflect/ui/ux-analy.md
- html-map: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/field-reflect/ui/html-to-native-map.md
- demo-parity: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/field-reflect/ui/review/demo-parity.md
- prototype ios: …/ui/prototype/ios/index.html
- prototype android: …/ui/prototype/android/index.html
- control-hint: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/field-reflect-control-hint.md
- real-data: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/field-reflect-real-data.md
- po: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/field-reflect/po/requirement.md
- STATUS: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/field-reflect/STATUS.md
