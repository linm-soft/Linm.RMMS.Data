# Handoff compact — qa

schemaVersion: 1
feature: nghiem-thu
packKind: list
role: qa
status: done
skillVersion: 2026.08.19.26
writtenAt: 2026-09-19T16:30:00.000Z
taskId: task_61e48f31
slash: /agent-qa-mobile
e2eQa: ON
autoApprove: ON
changeScope: edit_page
contentHash: sha256:a635f3f55a8bedd952c4449056cf072a8eda890eda2b30a45e84bda5d7bf3859

## Decisions
- changeScope: edit_page · native list `#sc-nghiem-thu` dual · keep web
- verdict: **PASS** · Must 0 · visual A3/P6/P6-2 **Aligned** vs `#sc-nghiem-thu`
- e2e: yarn e2e-qa-mobile · ok:true · phase1_iphone · Pro Max + Pixel_2
- login: guest→`btn-home-login`→seed · scroll hub `#row-nghiem-thu`
- body: EmptyChrome live-only (0 phiếu) · **cấm** demoItems
- P6-DUP fixed: P6-2 = search fold `NT` · hash distinct
- mfeStdUrl: — · **cấm** start:std
- A4-IPAD: DEFER
- align_confirm: **approve** (autoApprove ON)
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| sc-nghiem-thu | Công tác nghiệm thu | TopBar+Search+Empty | A3/P6 |
| row-nghiem-thu | hub | ListRow | scroll on patrol-home |
| nghiem-thu-search | Tìm mẫu… | SearchField | P6-2 |
| btn-nghiem-thu-create | Tạo | TextButton | toast pending |

## Screens / zones (ids only)
- `#sc-nghiem-thu` · DES-MOB-NGHIEM-THU · hub `#row-nghiem-thu`
- shots: `qa/screens/{A11,A9,A3,P6,P6-2}.png` · `qa/store/nghiem-thu/`
- reviewUrlIos=`…/prototype/ios/index.html#sc-nghiem-thu`
- reviewUrlAndroid=`…/prototype/android/index.html#sc-nghiem-thu`

## API / tasks (ids only)
- T-QA-NGHIEM-THU-* · T-QA-TAB-01 · T-QA-REAL-01 **PASS**
- List→API-01 live · EmptyChrome OK
- next: `/agent-review-mobile`

## UNCLEAR
- none

## Full paths (Read only if needed)
- scenarios: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu/qa/scenarios.md
- CAPTURE: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu/qa/store/nghiem-thu/CAPTURE.md
- STATUS: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu/STATUS.md
- prior: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu/handoff/dev-compact.md
