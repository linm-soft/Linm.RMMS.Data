# Handoff compact — qa

schemaVersion: 1
feature: asset-ai
packKind: sheet
role: qa
status: done
skillVersion: 2026.08.25.01
writtenAt: 2026-09-01T17:25:00.000Z
taskId: task_d1226fec
slash: /agent-qa-mobile
e2eQa: ON
autoApprove: ON
changeScope: new_page

## Decisions
- e2e: yarn e2e-qa-mobile · **ok:true** · cases A11,A10,A9,A3,P6,P6-2
- dest: iPhone 17 Pro Max · Pixel 2 · API :5101 · BFF :5202
- Maestro: hub `#tile-ai` → `#sc-asset-ai` · MEDIA camera DEFER (chrome empty)
- visual: Read A3↔P6↔demo **Aligned** · Must **0**
- HITL Confirm OUT · SCORE empty pre-detect OK
- soft: iOS sim GPS banner/toast (env) · Android live GPS
- mfeStdUrl: none · cấm start:std
- A4-IPAD: DEFER
- next: **review** (`/agent-review-mobile`)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| sc-asset-ai | Camera AI | TopBar+Photo+rows+CTA | DES-MOB-ASSET-AI |
| photo-row / i-camera | Chụp | CameraButton | empty CORE |
| row-pos | Vị trí đã chốt | LinmListRow | QL.1 (+GPS And) |
| row-class | Loại đề xuất | LinmListRow | — |
| row-score | Độ tin cậy | LinmListRow | — |
| btn-send | Gửi nhận diện | PrimaryButton | disabled |
| btn-cancel | Hủy | SecondaryButton | hub |

## Screens / zones (ids only)
- entry `#sc-asset-hub` `#tile-ai` → `#sc-asset-ai`
- shots: qa/screens + qa/store/asset-ai/
- reviewUrlIos=`…/prototype/ios/index.html#sc-asset-ai`
- reviewUrlAndroid=`…/prototype/android/index.html#sc-asset-ai`

## API / tasks (ids only)
- A10-BFF :5202 PASS
- uploads · detect-assets LIVE (not exercised MEDIA in CORE)
- T-QA-ASSET-AI: **done**

## VERIFY
- yarn e2e-qa-mobile ok:true · manifest ok:true
- visual Read A3↔P6↔demo Aligned · Must 0
- next: /agent-review-mobile (roleOnly stop)

## UNCLEAR
- none

## Full paths (Read only if needed)
- scenarios: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/asset-ai/qa/scenarios.md
- store: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/asset-ai/qa/store/asset-ai/
- STATUS: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/asset-ai/STATUS.md
