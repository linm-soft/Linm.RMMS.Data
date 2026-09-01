# Handoff compact — qa

schemaVersion: 1
feature: gis-map
packKind: map
role: qa
status: done
skillVersion: 2026.08.29.1
writtenAt: 2026-09-01T07:58:09.000Z
taskId: task_337999db
slash: /agent-qa-mobile

## Decisions
- changeScope: edit_page
- formPattern: N/A (map shell)
- e2eQa: ON · yarn e2e-qa-mobile · ios_test_phase=phase1_iphone · A4 DEFER
- store_qa: run_store
- verdict: **pass** · visual **Aligned** · Must 0
- cleanup_mock: verified live-only · no GisMapDemoOverlay on CORE
- empty GIS: map trống OK
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| sc-gis-map | Bản đồ tài sản | Map OMS | A3+P6-2 live |
| search (iOS) | Tìm… | SearchInput | A3 match |
| mb-* | basemap | Chip | dual |
| lg-* | isolate | Chip | corridor iOS only |

## Screens / zones (ids only)
- DES-MOB-GIS / #sc-gis-map
- PNG: qa/screens/{A11-LAUNCH,A9-LOGIN,A3-CORE,P6-CORE,P6-CORE-2}.png
- store: qa/store/gis-map/

## API / tasks (ids only)
- T-QA-E2E · A11,A10,A9,A3,P6,P6-2 **PASS**
- A10-BFF :5202 · API :5111 (--skip-start)

## UNCLEAR
- none

## Full paths (Read only if needed)
- scenarios: specs/gis-map/qa/scenarios.md
- CAPTURE: specs/gis-map/qa/store/gis-map/CAPTURE.md
- align: specs/gis-map/ui/review/align-ux.md
- STATUS: specs/gis-map/STATUS.md
