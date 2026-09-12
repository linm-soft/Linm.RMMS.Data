# Handoff compact — sa

schemaVersion: 1
feature: field-reflect
packKind: screen
role: sa
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-12T11:05:00.000Z
taskId: task_a2fe10c3
slash: /agent-sa-mobile
changeScope: edit_page
solution_confirm: approve

## Decisions
- gap=`field_reflect_sessions_live_only` · **GAP-MOB-FIELD-SESS-01**
- Live-only GET `patrol/sessions` · empty/fail = empty locationRow + toastSessionsFail · **cấm** itemsOrDemo/demoToday
- FormMode↔API: sessions · detect · incident · asset-types · uploads optional — **reuse** BFF · **cấm** invent field-reflect API
- TZ=`tz_na` · XCO=`xco_na` · SHARE=`share_na` · entity/migration=**none** · Step 4b=**N/A**
- MEDIA Accept · CHK local keep · be_repo=RMMS.WebService · ERP.*=none · mfeStdUrl=none
- autoApprove ON · solution_confirm **approve** · next: **team_lead** (`/agent-tl-mobile`)
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

## API / tasks (ids only)
- FormMode↔API: GET `patrol/sessions` live-only · POST `ai-vision/detect` · POST `incident/incidents` · GET `integration/asset-types` · uploads optional
- T-IOS-FIELD-SESS-LIVE · T-AND-FIELD-SESS-LIVE · T-BE/BFF **n/a this edit**

## UNCLEAR
- none

## Full paths (Read only if needed)
- solution: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/field-reflect/be/solution-discovery.md
- design compact: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/field-reflect/handoff/design-compact.md
- bff: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/field-reflect-bff-endpoints.md
- STATUS: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/field-reflect/STATUS.md
