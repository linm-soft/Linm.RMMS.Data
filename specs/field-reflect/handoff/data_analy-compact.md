# Handoff compact — data_analy

schemaVersion: 1
feature: field-reflect
packKind: screen
role: data_analy
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-12T10:33:53.000Z
taskId: task_d6e72d87
slash: /agent-data-analy-mobile
mode: feature_context
changeScope: edit_page

## Decisions
- gap=`field_reflect_sessions_live_only` · **GAP-MOB-FIELD-SESS-01**
- Current: iOS/Android `FieldReflectViewModel` dùng `(fetchSessions).itemsOrDemo` → demo tuyến khi GET fail
- New DoD: **live-only** · `.loaded` bind · empty/no-active = empty + toast · `.loadFailed` = empty + toast · **cấm** `itemsOrDemo` / `demoToday`
- Keep: PO/Design/SA artifacts · BFF paths · controlHint inventory (add toastSessionsFail)
- packKind: **screen** (PACK-01 CLOSED) · Step 4b: N/A · mfeStdUrl: none · ERP.*: none
- real-data §A/§B: **PASS** · UNCLEAR: none
- next: **po** (`/agent-po-mobile`) · autoApprove ON

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| locationRow | Vị trí đã chốt | ListRow | live sessions+GPS · empty if fail |
| toastSessionsFail | Không tải được ca tuần | Toast | NEW · GET fail/empty |
| kindPills | Hư/Mất/Hỏng | PillSelect | keep |
| photos / detect / severity | … | PhotoRow / ListRow | keep |
| checklist | CHK by asset | CheckboxList | keep |
| btnCreate / btnDraft | CTA | Primary/Secondary | keep |

## Screens / zones (ids only)
- `#sc-field-reflect` · `DES-MOB-FIELD-REFLECT` · `DES-MOB-FIELD-KIND`
- pick `#sc-field-pick` · entry `#row-reflect`
- reviewUrl= (existing Design keep)

## API / tasks (ids only)
- GET `patrol/sessions` · live-only client outcome
- POST `ai-vision/detect` · POST `incident/incidents` · GET `integration/asset-types` (unchanged)
- Dev: remove itemsOrDemo on FieldReflect dual

## UNCLEAR
- none

## Full paths (Read only if needed)
- control-hint: `specs/_data-analy/field-reflect-control-hint.md`
- real-data: `specs/_data-analy/field-reflect-real-data.md`
- bff: `specs/_data-analy/field-reflect-bff-endpoints.md`
- action-tree: `specs/_data-analy/field-reflect-action-tree.md`
- ctx: `docs/context/features/field-reflect.md`
- STATUS: `specs/field-reflect/STATUS.md`
