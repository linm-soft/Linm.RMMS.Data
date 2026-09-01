# Handoff compact — qa

schemaVersion: 1
feature: asset-hub
packKind: hub
role: qa
status: done
skillVersion: 2026.08.19.26
writtenAt: 2026-09-01T04:08:00.000Z
taskId: task_4e062d1e
slash: /agent-qa-mobile
e2eQa: ON

## Decisions
- changeScope: edit_page · recheck post cleanup_mock (dev task_9c9293d2)
- e2e: yarn e2e-qa-mobile · ok:true · cases A11,A10,A9,A3,P6,P6-2
- login: guest sc-home → btn-home-login → eraseText (fix Maestro flake · yaml updated)
- wallet: live-only route+count · toast on fail · **cấm** demoTitle/demoCount
- visual: Read A3↔P6↔demo **Aligned** · Must 0 · hub-tile glyphs + row-map icon present
- mfeStdUrl: none · cấm start:std
- A4-IPAD: DEFER
- apiPort: compose :5111 (macOS) · --skip-start when pre-up

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| wallet-asset | Wallet hồ sơ TS | LinmWalletCard | live QL.1 · 46 loại KCHT |
| tile-* | Hub tiles ×6 | LinmHubTile | sibling toast · glyphs aligned |
| row-map | Row bản đồ | LinmListRow | P6-2 scroll |
| sec-ai | AI chờ xác nhận | section | empty → hidden |

## Screens / zones (ids only)
- `#sc-asset-hub` · DES-MOB-ASSET-HUB
- shots: qa/screens + qa/store/asset-hub/
- reviewUrlIos=file://…/prototype/ios/index.html#sc-asset-hub
- reviewUrlAndroid=file://…/prototype/android/index.html#sc-asset-hub

## API / tasks (ids only)
- A10-BFF :5202 PASS
- GET integration/asset-types · road-routes/search · ai-vision/asset-candidates
- debt: GAP-F-AHUB-01/02 P2 · không block hub

## VERIFY
- yarn e2e-qa-mobile ok:true · manifest ok:true
- visual Read A3↔P6↔demo Aligned · Must 0
- next: /agent-review-mobile (roleOnly stop)

## UNCLEAR
- none
