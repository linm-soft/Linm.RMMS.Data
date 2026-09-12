# Handoff compact — qa

schemaVersion: 1
feature: supervise
packKind: list
role: qa
status: done
skillVersion: 2026.08.19.26
writtenAt: 2026-09-12T10:26:49.000Z
taskId: task_cf8f4bfe
slash: /agent-qa-mobile
e2eQa: ON
autoApprove: ON
changeScope: edit_page

## Decisions
- changeScope: edit_page · filter sheet live + map sibling push
- verdict: **PASS** · Must 0 · visual A3/P6/P6-2 **Aligned** vs `#sc-supervise` / `#filter-sheet`
- e2e: yarn e2e-qa-mobile · ok:true · `2026-09-12T10:24:06.642Z` · cases A11,A10,A9,A3,P6,P6-2
- login AND: IME Enter · **cấm** eraseText (field-swap flake)
- filter: assert text Áp dụng/Xóa lọc (sheet testTag opaque Maestro)
- map: push `#sc-patrol-map` · **cấm** toast fake
- body: EmptyChrome live-only · tenant rỗng OK
- mfeStdUrl: — · **cấm** start:std
- A4-IPAD: DEFER
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| sc-supervise | Giám sát tuần đường | TopBar+Segment+empty | A3/P6 |
| btn-sup-filter | Lọc | → sheet | P6-2 |
| filterApply | Áp dụng | Primary | sheet |
| filterClear | Xóa lọc | Ghost | sheet |
| segMap | Bản đồ | push map | sc-patrol-map |

## Screens / zones (ids only)
- `#sc-supervise` · `#filter-sheet` · navigate `#sc-patrol-map`
- shots: `qa/screens/{A11,A9,A3,P6,P6-2}.png` · `qa/store/supervise/`
- reviewUrlIos=`file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/supervise/ui/prototype/ios/index.html#sc-supervise`
- reviewUrlAndroid=`file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/supervise/ui/prototype/android/index.html#sc-supervise`

## API / tasks (ids only)
- A10-BFF :5202 PASS · API :5101/:5111
- T-QA filter sheet · map nav **PASS**
- debt: GAP-QA-SUP-TAB-01 · GAP-QA-SUP-EMPTY-AND-01 Defer · GAP-MOB-SUP-04 P2

## UNCLEAR
- none

## Full paths (Read only if needed)
- scenarios: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/supervise/qa/scenarios.md
- store: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/supervise/qa/store/supervise/
- STATUS: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/supervise/STATUS.md
