# handoff-compact — qa · cam-patrol

| | |
|---|---|
| schemaVersion | 1 |
| feature | `cam-patrol` |
| role | `qa` |
| slash | `/agent-qa-mobile` |
| mode | `feature_context` |
| packKind | `screen` |
| changeScope | `edit_page` |
| taskId | `task_8051fbb6` |
| status | **PASS** |
| autoApprove | ON |
| e2eQa | ON |
| generatedAt | `2026-09-12T11:45:15.411Z` |

## DoR

| Gate | Result |
|------|--------|
| yarn e2e-qa-mobile | **PASS** · `ok:true` |
| cases | A11,A10,A9,A3,P6,P6-2 **PASS** |
| store PNG | `qa/screens` + `qa/store/cam-patrol` |
| visual Read CORE↔demo | **Aligned** · Must **0** |
| scenarios / CAPTURE / manifest | PASS |
| UNCLEAR | none |

## Decisions

- changeScope=`edit_page` · FRAME recheck post dev `task_2122aa0b`
- e2e: Maestro sim 6.9" + emulator · **cấm** start:std / mfeStdUrl
- visual: A3↔P6↔demo · TopBar+finder+Confirm/Skip · live route · score ẩn
- Android login: IME Enter (cấm eraseText) · GAP-QA-STORE-03 **closed**
- open Should: GAP-QA-CAM-GPS-TIMING-01 non-block
- next: **review** · `/agent-review-mobile` · roleOnly stop

## Inventory (slim)

| id | label | notes |
|----|-------|-------|
| sc-cam-patrol | Thu thập camera | TopBar+finder |
| finder | Camera FOV | AVCapture/CameraX |
| btn-confirm | Xác nhận | Primary · GPS gate |
| btn-skip | Bỏ qua | Secondary |

## Screens / zones

- DES-MOB-CAM-PATROL / `#sc-cam-patrol` · DES-MOB-CAM-FINDER
- shots: `qa/screens` + `qa/store/cam-patrol/` · CAPTURE.md · manifest `ok:true`
- reviewUrlIos=`…/prototype/ios/index.html#sc-cam-patrol`
- reviewUrlAndroid=`…/prototype/android/index.html#sc-cam-patrol`

## API / VERIFY

- A10-BFF :5202 PASS · GET patrol/sessions · POST ai-vision/detect · POST incident
- VERIFY: e2e ok:true · visual Aligned · Must 0
- debt: GAP-QA-CAM-GPS-TIMING-01 Should

## Next

| Field | Value |
|-------|-------|
| nextRole | `review` · `/agent-review-mobile` |
| note | FRAME QA PASS · handoff Review |

## Version meta

| skillId | skillVersion | schemaVersion |
|---------|--------------|---------------|
| agent-qa-mobile | 2026.08.20.03 | 1 |
