# Handoff compact — dev

schemaVersion: 1
feature: estimate
packKind: sheet
role: dev
status: done
skillVersion: 2026.08.29.1
writtenAt: 2026-09-01T08:57:37.000Z
taskId: task_8ab3d7ec
slash: /agent-dev-ios + /agent-dev-android
gap: qaFailFix · GAP-QA-E2E-AND-01 · GAP-QA-STORE-03 · GAP-QA-P6-DUP-01
qaFixPhase: implement

## Decisions
- changeScope: edit_page
- formPattern: sheet→screen `#sc-estimate` · DES-MOB-EST
- mfeStdUrl: none (native · **cấm**)
- qa_fix_plan: **approved** (board enqueue implement `task_8ab3d7ec`)
- fix: harden `qa/e2e/android.yaml` login → `id: sc-home` PRIMARY · CTA before/after Enter · **cấm** hideKeyboard
- native iOS/Android Estimate: **no code change** this turn (tags/nav PRESENT)
- Step 4b: N/A Signed · **cấm** invent ERP.* / new estimate API
- e2e: **skipped** · next `/agent-qa-mobile`
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| sc-estimate | Giao việc xử lý | TopBar+fields+CTA | sheet→screen |
| row-from-incident | Từ sự cố | LinmListRow | seed |
| input-assignee | Giao cho * | LinmTextField | required |
| btn-assign | Giao việc | Primary | blocked if missing incident |
| btn-draft | Lưu nháp | Secondary | |

## Screens / zones (ids only)
- DES-MOB-EST / #sc-estimate
- reviewUrlIos=file://…/prototype/ios/index.html#sc-estimate
- reviewUrlAndroid=file://…/prototype/android/index.html#sc-estimate
- peerStdUrl=—

## API / tasks (ids only)
- PUT/POST `ai-vision/estimates/*`
- POST `maintenance/work-orders` · WorkType=`repair` · Status=`new` · SLA 24h · DueAt UTC
- POST `incident/incidents/{id}/assign`
- T-BE: N/A (catch-all BFF)

## VERIFY GATE
- iOS: xcodegen + xcodebuild `-scheme LinmRmms` dest iPhone 17 Pro → **PASS**
- Android: `./gradlew :app:assembleDebug` → **PASS**
- BFF: `dotnet build` Linm.RMMS.Mobile.Bff → **PASS**

## Debt
- GAP-QA-E2E-AND-01 / STORE-03 / P6-DUP → close on re-QA Maestro PASS
- GAP-MOB-UX-COMP-03 → QA visual after Maestro PASS
- Prior CLOSED: GAP-MOB-EST-NAV/SIMP/ASSIGNEE/WO/SLA/PACK · **cấm** reopen

## UNCLEAR
- none

## Full paths (Read only if needed)
- plan: specs/estimate/implement/estimate-qa-fix-plan.md
- implement: specs/estimate/implement/ios.md · android.md
- STATUS: specs/estimate/STATUS.md
- e2e: specs/estimate/qa/e2e/{ios,android}.yaml
- task: specs/estimate/task/estimate.md
