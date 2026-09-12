# Handoff compact — team_lead

schemaVersion: 1
feature: asset-ai
packKind: sheet
role: team_lead
status: done
skillVersion: 2026.08.25.01
writtenAt: 2026-09-01T17:25:00.000Z
taskId: task_e9f98e82
slash: /agent-tl-mobile
autoApprove: ON
changeScope: new_page

## Decisions
- surface: sheet `#sc-asset-ai` · `DES-MOB-ASSET-AI` · packKind **sheet** (PACK-01)
- route_confirm: **route_a** — hub `#i-camera` toast→**push** AssetAi · back hub · tabs:none · tab home
- ios/android_repo_confirm: ON · reuse dual repos
- T-BE-* / T-BFF-* / T-KIT-*: **n/a** · detect+uploads LIVE · PhotoRow compose
- SCORE-01 P1 show% · HITL Confirm OUT · enqueue `det-hitl`+Id
- BFF: uploads init/object · detect-assets · optional sessions/routes · **cấm** invent `api/v1/asset-ai`
- Step 4b N/A · ERP.* none · mfeStdUrl none · e2e queued QA only
- kit_skip=yes · open questions: none
- next: **dev-ios** (`T-IOS-ASSET-AI`) → **dev-android** (`T-AND-ASSET-AI`)

## Artifacts
- `task/asset-ai.md` · hash `asset-ai-tl-task-20260901`
- prior compact: data_analy · po · design · sa
- prior SA: `be/solution-discovery.md` · `asset-ai-sa-solution-20260901`

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
- reviewUrlIos=`…/prototype/ios/index.html#sc-asset-ai`
- reviewUrlAndroid=`…/prototype/android/index.html#sc-asset-ai`
- gpsDeny=`?gpsdeny=1`
- peerStdUrl= — (native · cấm mfeStdUrl)

## API / tasks (ids only)
- POST `ai-vision/uploads/init` · PUT `…/uploads/{id}/object`
- POST `ai-vision/detect-assets`
- GET optional `patrol/sessions` · `integration/road-routes/search` · nearby
- OUT: invent path · Confirm UI · Step4b
- T-IOS-ASSET-AI: pending · `/agent-dev-ios`
- T-AND-ASSET-AI: pending · `/agent-dev-android`
- T-BE / T-BFF / T-KIT: n/a
- T-QA-TAB-01 · T-QA-ASSET-AI: pending · `/agent-qa-mobile`

## UNCLEAR
- none

## Full paths (Read only if needed)
- task: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/asset-ai/task/asset-ai.md
- solution: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/asset-ai/be/solution-discovery.md
- design: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/asset-ai/ui/design.md
- STATUS: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/asset-ai/STATUS.md

## Next
role: dev-ios
artifact: specs/asset-ai/implement/ios.md
slash: /agent-dev-ios
