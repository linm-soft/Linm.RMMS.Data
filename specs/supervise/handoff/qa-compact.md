# Handoff compact — qa

schemaVersion: 1
feature: supervise
packKind: list
role: qa
status: done
skillVersion: 2026.08.19.26
writtenAt: 2026-09-01T02:55:00.000Z
taskId: task_16b5d063
slash: /agent-qa-mobile
e2eQa: ON

## Decisions
- changeScope: edit_page · post cleanup_mock live-only
- e2e: yarn e2e-qa-mobile · ok:true · cases A11,A10,A9,A3,P6,P6-2
- login: guest sc-home → btn-home-login → eraseText (fix optional-tap flake)
- body: EmptyChrome sup-empty (tenant rỗng) · **Aligned** vs demo chrome
- Must: 0 · cấm mock banner «Đang dùng dữ liệu mẫu»
- harvest: prefer _maestro_*/{ios,android}-N over ~/.maestro/tests (GAP-QA-HARVEST-01 fixed)
- mfeStdUrl: none · cấm start:std
- A4-IPAD: DEFER

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| sc-supervise | Giám sát tuần đường | TopBar+Segment+empty/cards | live GET |
| sup-empty | Chưa có check-in | EmptyChrome | A3/P6 PASS |
| btn-sup-filter | Lọc | toast | P6-2 |
| sup-segment | Danh sách / Bản đồ | Segment | toast map |

## Screens / zones (ids only)
- DES-MOB-SUPERVISE / #sc-supervise
- shots: qa/screens + qa/store/supervise/
- reviewUrlIos=file://…/prototype/ios/index.html#sc-supervise
- reviewUrlAndroid=file://…/prototype/android/index.html#sc-supervise

## API / tasks (ids only)
- A10-BFF :5202 PASS · API compose :5111
- FormMode↔API: N/A list
- debt: GAP-QA-A11Y-SUP-FILTER-01 · GAP-QA-SUP-TAB-01 Defer

## VERIFY
- yarn e2e-qa-mobile ok:true
- visual Read A3↔P6↔demo **Aligned** · Must 0
- next: /agent-review-mobile (roleOnly stop)
