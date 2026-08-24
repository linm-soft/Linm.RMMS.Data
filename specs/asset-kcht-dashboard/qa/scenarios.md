# QA — asset-kcht-dashboard

| Field | Value |
|-------|-------|
| feature | `asset-kcht-dashboard` |
| verdict | **pass** |
| updatedAt | `2026-08-23T11:30:00.000Z` |

## Scenarios

| ID | Scenario | Expected | Status |
|----|----------|----------|--------|
| QA-01 | Mở `/so-ts/hang-muc` standalone | 40 card · H1 title | pass |
| QA-02 | Count format vi-VN | `1.234` style | pass |
| QA-03 | Click loại TS (FERRY) | Navigate `/so-ts?type=FERRY` | pass |
| QA-04 | Click tuyến | Navigate `/master/road-route` | pass |
| QA-05 | Click GAP tile | Toast «chưa có danh mục» | pass |
| QA-06 | API summary-by-type | Aggregate không N+1 | pass |
| QA-07 | Widget bundle build | `linm-rmms-asset-kcht-widget.*.js` | pass |
| QA-08 | Dashboard registry | Entry `rmms-kcht-hang-muc` cols 3 | pass |

## Build gate

- FE build PASS · BE Asset API/BFF PASS
