# Handoff compact — review

schemaVersion: 1
feature: asset-hub
packKind: hub
role: review
status: done
skillVersion: 2026.08.19.22
writtenAt: 2026-09-01T04:15:00.000Z
taskId: task_042eeb65
slash: /agent-review-mobile
review_confirm: approve
post_review: skip
autoApprove: ON

## Decisions
- changeScope: edit_page · recheck post cleanup_mock
- formPattern: N/A (hub · tiles→sibling/toast · wallet display-only)
- mfeStdUrl: none (native)
- verdict: approve · Must align 0 · live-only wallet PASS
- cleanup: GAP-MOB-AHUB-CLEANUP-01 Closed · **cấm** demoTitle/demoCount/patrolLine
- real-data: GAP-MOB-REAL-02 Closed · GAP-QA-REAL-01 PASS
- store: PrivacyInfo.xcprivacy Accept P2 → post_review
- open questions: sibling 8 × pending_confirm · A4-IPAD DEFER

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| wallet-asset | Wallet hồ sơ TS | LinmWalletCard | live route + count · fail toast |
| tile-* | Hub tiles ×6 | LinmHubTile | sibling nav/toast |
| row-map | Row bản đồ | LinmListRow | → gis-map |
| sec-ai / ai-pending | AI chờ xác nhận | section+row+btn | empty → hidden |

## Screens / zones (ids only)
- `#sc-asset-hub` · DES-MOB-ASSET-HUB
- shots: qa/store/asset-hub/ · manifest ok:true
- reviewUrlIos=file://…/prototype/ios/index.html#sc-asset-hub
- reviewUrlAndroid=file://…/prototype/android/index.html#sc-asset-hub

## API / tasks (ids only)
- GET integration/asset-types · road-routes/search · ai-vision/asset-candidates
- T-IOS/AND-ASSET-HUB PASS · T-BE n/a · T-REVIEW-SEC/DTO/ALIGN/CLEANUP PASS
- debt: GAP-F-AHUB-01/02 P2 · không block hub

## VERIFY
- prior Dev iOS/Android/BFF PASS (task_9c9293d2 cleanup_mock)
- prior QA e2e-qa-mobile ok:true · Aligned Must 0 (task_4e062d1e)
- Review: no re-run build/e2e · approve · phase done

## Findings counts
- P0: 0 · Must align: 0 · P2 Accept: 1 (PrivacyInfo)
- review_confirm: approve · post_review: skip

## UNCLEAR
- none
