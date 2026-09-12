# Handoff compact — qa

schemaVersion: 1
feature: mobile-bff-map
packKind: map
role: qa
status: done
skillVersion: 2026.09.05.03
rulesVersion: 2026.09.12.1
writtenAt: 2026-09-12T09:39:54.000Z
contentHash: sha256:b04a50005f77e99fc2c564e39ac3a438cce8742996899ef2aaa47b698f7e0131
taskId: task_00f2df80
slash: /agent-qa-mobile
autoApprove: ON
e2eQa: ON

## Decisions
- changeScope: edit_page
- formPattern: N/A (TileUrl + peer map · no #sc-* mới)
- e2eQa: ON · yarn e2e-qa-mobile · ios_test_phase=phase1_iphone · A4 DEFER
- store_qa: run_store
- verdict: **pass** · visual **Aligned** (peer chrome) · Must 0
- mfeStdUrl: n/a · **cấm** start:std
- API :5101 · BFF :5202 · --skip-start
- MapService :5021 **DOWN** · tile curl 404 · debt Wave4
- open questions: none (debt only)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| tileUrl | TileUrl | Text | BFF MVT path |
| tileBasemap | Basemap | MapTile | guest · debt live clip |
| tileOverlay | Overlay | MapTile | JWT · Wave4 |
| mapHostPeer | Peer map | Map | #sc-gis-map E2E |

## Screens / zones (ids only)
- DES-MOB-TILEURL-NOTE `#zone-tileurl-note`
- peer `#sc-gis-map` · `#zone-tile-url`
- PNG: qa/screens/{A11-LAUNCH,A9-LOGIN,A3-CORE,P6-CORE,P6-CORE-2}.png
- store: qa/store/mobile-bff-map/

## API / tasks (ids only)
- T-QA-MAP-01 · A11,A10,A9,A3,P6,P6-2 **PASS**
- A10-BFF :5202 · API :5101
- Next: /agent-review-mobile (roleOnly gate — not this task)

## UNCLEAR
- none

## Full paths (Read only if needed)
- scenarios: specs/mobile-bff-map/qa/scenarios.md
- CAPTURE: specs/mobile-bff-map/qa/store/mobile-bff-map/CAPTURE.md
- STATUS: specs/mobile-bff-map/STATUS.md
