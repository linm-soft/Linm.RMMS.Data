# Handoff compact — dev

schemaVersion: 1
feature: asset-hub
packKind: hub
role: dev
status: done
skillVersion: 2026.08.29.1
writtenAt: 2026-09-01T04:00:00.000Z
taskId: task_9c9293d2
slash: /edit-mobile-feature
gap: cleanup_mock

## Decisions
- changeScope: edit_page
- formPattern: N/A (hub · tiles→sibling/toast · wallet display-only)
- mode: cleanup_mock · live-only (supervise/asset pattern)
- mfeStdUrl: **cấm** native
- wallet: count + route từ live GET · fail = empty + toast · **cấm** demoTitle/demoCount/patrolLine
- AI pending: ẩn khi empty (giữ)
- Step 4b: N/A · reuse integration/* + ai-vision

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| wallet-asset | Wallet hồ sơ TS | LinmWalletCard | live route title + types count |
| tile-* | Hub tiles ×6 | LinmHubTile | sibling nav/toast |
| row-map | Row bản đồ | LinmListRow | → gis-map |
| sec-ai / ai-pending | AI chờ xác nhận | section+row+btn | GET draft only |

## Screens / zones (ids only)
- `#sc-asset-hub` · DES-MOB-ASSET-HUB
- reviewUrlIos=file://…/prototype/ios/index.html#sc-asset-hub
- reviewUrlAndroid=file://…/prototype/android/index.html#sc-asset-hub

## API / tasks (ids only)
- GET `integration/asset-types` (count)
- GET `integration/road-routes/search`
- GET `ai-vision/asset-candidates?status=Draft`
- ACTION: hub tiles work · Create/Edit/View/Copy N/A hub · **không** GAP-P2-ACT

## VERIFY
- iOS xcodegen + iPhone 17 Pro: BUILD SUCCEEDED
- Android assembleDebug: BUILD SUCCESSFUL
- BFF dotnet build: PASS

## Debt
- GAP-F-AHUB-01 optional road-routes/search · Android demo route
- GAP-F-AHUB-02 tile «32 loại» marketing copy static · subtitle count live
- asset.patrol.demo key retained · unused post-cleanup

## UNCLEAR
- none
