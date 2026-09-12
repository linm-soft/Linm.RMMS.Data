# Handoff compact — dev

schemaVersion: 1
feature: asset-ai
packKind: sheet
role: dev
status: done
skillVersion: 2026.08.25.01
writtenAt: 2026-09-01T17:20:00.000Z
taskId: task_5bdb7bcf
slash: /agent-dev-ios + /agent-dev-android
autoApprove: ON
changeScope: new_page
e2eQa: ON (queued — `/agent-qa*` only)

## Decisions
- surface: sheet `#sc-asset-ai` · `DES-MOB-ASSET-AI` · dual native
- route_a: hub tile Camera AI → push AssetAi · back hub · tabs:none · tab home
- APIs LIVE: uploads init/object/complete · detect-assets · sessions/routes prefill
- SCORE-01 show% · HITL Confirm OUT · enqueue `det-hitl`+Id (handoff surface only)
- Step 4b N/A · ERP.* none · mfeStdUrl none · **cấm** invent `api/v1/asset-ai`
- VERIFY: iOS xcodegen+iPhone 17 Pro build · Android assembleDebug · BFF dotnet build — **PASS**
- next: **qa** (`T-QA-ASSET-AI` · `yarn e2e-qa-mobile`)

## Artifacts
- `implement/ios.md` · `implement/android.md`
- prior compact: data_analy · po · design · sa · team_lead

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| sc-asset-ai | Camera AI | TopBar+Photo+rows+CTA | DES-MOB-ASSET-AI |
| addPhoto | (camera) | CameraButton | uploads→ImageUrl |
| rowPos | Vị trí đã chốt | LinmListRow | Route+GPS * |
| rowClass | Loại đề xuất | LinmListRow | AssetClass |
| rowScore | Độ tin cậy | LinmListRow | Score % |
| btnSend | Gửi nhận diện | PrimaryButton | POST→det-hitl |
| btnCancel | Hủy | SecondaryButton | hub |

## Screens / zones (ids only)
- entry `#sc-asset-hub` tileAI → `#sc-asset-ai`
- handoff `#sc-det-hitl` enqueue Id only
- peerStdUrl= — (native · cấm mfeStdUrl)

## API / tasks (ids only)
- POST `ai-vision/uploads/init` · PUT `…/object` · POST `…/complete`
- POST `ai-vision/detect-assets`
- GET optional `patrol/sessions` · `integration/road-routes/search`
- T-IOS-ASSET-AI · T-AND-ASSET-AI: **done**
- T-BE / T-BFF: n/a
- T-QA-ASSET-AI: pending

## Debt
- full Confirm/Dismiss UI = sibling det-hitl
- nearby soft-warn optional

## UNCLEAR
- none

## Full paths (Read only if needed)
- ios: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/asset-ai/implement/ios.md
- android: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/asset-ai/implement/android.md
- STATUS: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/asset-ai/STATUS.md

## Next
role: qa
artifact: specs/asset-ai/qa/scenarios.md
slash: /agent-qa-mobile
