# Handoff compact — qa

schemaVersion: 1
feature: nghiem-thu
packKind: list
role: qa
status: done
skillVersion: 2026.08.25.01
writtenAt: 2026-09-19T18:42:00.000Z
taskId: task_4b20206f
slash: /agent-qa-mobile
e2eQa: ON
autoApprove: ON
changeScope: edit_page
contentHash: sha256:1044ba719edda88d256d5c2a780cd2293f2fab87e2a39acdbb86001fad6ff659

## Decisions
- changeScope: edit_page · native list `#sc-nghiem-thu` dual · MAU-10+Result · keep web
- verdict: **PASS** · Must 0 · visual A3/P6/P6-2 **Aligned** vs `#sc-nghiem-thu`
- e2e: yarn e2e-qa-mobile · ok:true · phase1_iphone · iPhone 17 Pro Max + emulator 1080×1920
- login: guest→`btn-home-login`→seed · Android land `sc-asset-hub` rồi `tab-field` · scroll hub `#row-nghiem-thu`
- body: EmptyChrome live (0 phiếu) · badge ResultCode ẩn vì không có dòng · **cấm** demoItems
- P6-2: search `NT` · hash ≠ P6-CORE · IME che tab
- bundle: `com.drvn.rmms.store` · BFF dotnet **PASS** · xcodegen+assembleW3Debug **PASS**
- mfeStdUrl: — · **cấm** start:std · **cấm** kill worker
- A4-IPAD: DEFER
- align_confirm: **approve** (autoApprove ON)
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| sc-nghiem-thu | Công tác nghiệm thu | TopBar+Search+Empty | A3/P6 |
| row-nghiem-thu | hub | ListRow | scroll patrol-home |
| nghiem-thu-search | Tìm mẫu… | SearchField | P6-2 `NT` |
| btn-nghiem-thu-create | Tạo | TextButton | sibling pending |

## Screens / zones (ids only)
- `#sc-nghiem-thu` · DES-MOB-NGHIEM-THU · DES-MOB-NT-SEARCH · DES-MOB-NT-RESULT · hub `#row-nghiem-thu`
- shots: `qa/screens/{A11,A9,A3,P6,P6-2}.png` · `qa/store/nghiem-thu/`
- reviewUrlIos=`…/prototype/ios/index.html#sc-nghiem-thu`
- reviewUrlAndroid=`…/prototype/android/index.html#sc-nghiem-thu`

## API / tasks (ids only)
- T-QA-NGHIEM-THU-* · T-QA-TAB-01 · T-QA-REAL-01 **PASS**
- List→API-01 live · EmptyChrome OK · ResultCode chờ dòng
- next: `/agent-review-mobile`

## UNCLEAR
- none

## Full paths (Read only if needed)
- scenarios: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu/qa/scenarios.md
- CAPTURE: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu/qa/store/nghiem-thu/CAPTURE.md
- STATUS: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu/STATUS.md
- prior: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu/handoff/dev-compact.md
