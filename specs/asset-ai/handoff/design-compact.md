# Handoff compact — design

schemaVersion: 1
feature: asset-ai
packKind: sheet
role: design
status: done
skillVersion: 2026.08.25.01
writtenAt: 2026-09-01T17:10:00.000Z
taskId: task_a951f813
autoApprove: ON
slash: /agent-design-mobile

## Decisions
- changeScope: new_page
- formPattern: Full screen `#sc-asset-ai` · DES-MOB-ASSET-AI
- packKind: sheet (GAP-MOB-ASSET-AI-PACK-01 · **cấm** bottom-sheet)
- SCORE-01: **P1 show Score %** · không ẩn brand
- HITL-01: Confirm/Dismiss OUT · enqueue `det-hitl` + Id
- BFF: uploads + detect-assets + sessions/routes · **cấm invent** `api/v1/asset-ai`
- mfe / be: native · Step 4b N/A · ERP.* none · mfeStdUrl none
- real_view_parity: v1
- design_confirm: approve (autoApprove)
- open questions: none
- hash skip: DA control-hint/real-data · **cấm** re-scan demo

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| navBack | Tài sản | LinmTopBar | iOS text+chevron · Android icon |
| addPhoto | (camera) | CameraButton | `#i-camera` openCapture |
| rowPos | Vị trí đã chốt | LinmListRow | Route+GPS * · deny |
| rowClass | Loại đề xuất | LinmListRow | AssetClass |
| rowScore | Độ tin cậy | LinmListRow | Score % P1 |
| btnSend | Gửi nhận diện | PrimaryButton | POST → det-hitl |
| btnCancel | Hủy | SecondaryButton | hub |

## Screens / zones (ids only)
- entry `#sc-asset-hub` tileAI `#i-camera` · target `#sc-asset-ai` · DES-MOB-ASSET-AI
- reviewUrlIos=file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/asset-ai/ui/prototype/ios/index.html#sc-asset-ai
- reviewUrlAndroid=file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/asset-ai/ui/prototype/android/index.html#sc-asset-ai
- gpsDeny=?gpsdeny=1
- peerStdUrl= — (native · cấm mfeStdUrl)
- real_view_parity=v1
- board: ios/index.html · android/index.html

## API / tasks (ids only)
- POST `ai-vision/uploads/*` · POST `ai-vision/detect-assets`
- GET `patrol/sessions` · `integration/road-routes/search`
- OUT: invent path · confirm UI · Step 4b N/A
- T-*: pending SA/TL

## UNCLEAR
- none

## Full paths (Read only if needed)
- design: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/asset-ai/ui/design.md
- ux-analy: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/asset-ai/ui/ux-analy.md
- html-to-native-map: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/asset-ai/ui/html-to-native-map.md
- prototype ios: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/asset-ai/ui/prototype/ios/index.html
- prototype android: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/asset-ai/ui/prototype/android/index.html
- STATUS: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/asset-ai/STATUS.md

## Next
role: sa
artifact: specs/asset-ai/be/solution-discovery.md
slash: /agent-sa-mobile
