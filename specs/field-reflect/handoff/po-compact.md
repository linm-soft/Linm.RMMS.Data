# Handoff compact — po

schemaVersion: 1
feature: field-reflect
packKind: screen
role: po
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-12T10:39:31.000Z
taskId: task_72e56250
slash: /agent-po-mobile
changeScope: edit_page
Pattern: Screen (full · không Modal/Sheet)

## Decisions
- gap=`field_reflect_sessions_live_only` · **GAP-MOB-FIELD-SESS-01** DoD
- Live-only GET `patrol/sessions` · empty/fail = empty locationRow + toastSessionsFail · **cấm** itemsOrDemo/demoToday
- Keep: controlHint inventory · BFF · pick→form · Create/Draft · MEDIA Accept · CHK local
- Grid/Report AC: **N/A** · Leave: in-app kit · **cấm** native alert
- packKind: **screen** · Step 4b: N/A · mfeStdUrl: none · ERP.*: none
- autoApprove ON · next: **design** (`/agent-design-mobile`) · e2e queued QA
- UNCLEAR: none · hash skip · **cấm** re-scan demo

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| locationRow | Vị trí đã chốt | ListRow | live+GPS · empty if fail |
| toastSessionsFail | Không tải được ca tuần | Toast | NEW · fail/empty |
| kindPills | Hư/Mất/Hỏng | PillSelect | keep |
| photos / detect / severity | … | PhotoRow / ListRow | keep |
| checklist | CHK by asset | CheckboxList | keep |
| btnCreate / btnDraft | CTA | Primary/Secondary | keep |

## Screens / zones (ids only)
- `#sc-field-reflect` · `DES-MOB-FIELD-REFLECT` · `DES-MOB-FIELD-KIND`
- pick `#sc-field-pick` · entry `#row-reflect`
- reviewUrl= Design dual file:// prototype (keep)
- Grid AC: N/A · Leave: kit confirm

## API / tasks (ids only)
- GET `patrol/sessions` live-only · POST detect · POST incident · GET asset-types
- Dev dual: remove itemsOrDemo on FieldReflect

## UNCLEAR
- none

## Full paths (Read only if needed)
- requirement: `specs/field-reflect/po/requirement.md`
- control-hint: `specs/_data-analy/field-reflect-control-hint.md`
- real-data: `specs/_data-analy/field-reflect-real-data.md`
- prior compact: `specs/field-reflect/handoff/data_analy-compact.md`
- STATUS: `specs/field-reflect/STATUS.md`
