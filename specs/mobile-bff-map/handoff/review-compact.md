# Handoff compact — review

schemaVersion: 1
feature: mobile-bff-map
packKind: map
role: review
status: done
skillVersion: 2026.08.31.2
rulesVersion: 2026.09.12.1
writtenAt: 2026-09-12T09:43:20.000Z
contentHash: sha256:b04a50005f77e99fc2c564e39ac3a438cce8742996899ef2aaa47b698f7e0131
taskId: task_35db1343
slash: /agent-review-mobile
autoApprove: ON
e2eQa: ON
review_confirm: approve

## Decisions
- changeScope: edit_page
- formPattern: N/A (TileUrl + peer map · no #sc-* mới)
- review_confirm: **approve** (autoApprove)
- align_confirm: **approve** · Must align **0** · demo-parity Must **0**
- mfeStdUrl: n/a · **cấm** start:std / build / e2e ở role này
- findings: P0/P1 **0** · open Must **0** · debt Wave4 Accept
- open questions: none (MapService `:5021` + MVT paint = debt)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| tileUrl | TileUrl | Text | BFF MVT path dual |
| tileBasemap | Basemap | MapTile | guest · debt live clip |
| tileOverlay | Overlay | MapTile | JWT · Wave4 |
| mapHostPeer | Peer map | Map | #sc-gis-map Aligned |

## Screens / zones (ids only)
- DES-MOB-TILEURL-NOTE `#zone-tileurl-note`
- peer `#sc-gis-map` · `#zone-tile-url`
- PNG Read: qa/screens/{A3-CORE,P6-CORE,P6-CORE-2}.png
- store: qa/store/mobile-bff-map/

## API / tasks (ids only)
- findings counts: OK=11 · P0=0 · Must open=0 · Accept debt=2
- T-REVIEW-SEC/DTO/ALIGN/REAL **PASS**
- T-BE/T-IOS/T-AND/T-QA **PASS** (prior)
- Next: phase **done** · no role after review

## UNCLEAR
- none

## Full paths (Read only if needed)
- findings: specs/mobile-bff-map/review/findings.md
- demo-parity: specs/mobile-bff-map/ui/review/demo-parity.md
- qa: specs/mobile-bff-map/qa/scenarios.md
- STATUS: specs/mobile-bff-map/STATUS.md
