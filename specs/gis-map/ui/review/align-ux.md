# Align UX — gis-map (live vs demo)

| Field | Value |
|-------|-------|
| feature | `gis-map` |
| rule | `/review-align-ux-ios-android` |
| taskId | `task_337999db` |
| method | Read CORE PNG vs `#sc-gis-map` dual proto |
| verdict | **Aligned** · Must **0** |
| updatedAt | `2026-09-01T07:58:09.000Z` |

## CORE Read

| Shot | Device | Observation |
|------|--------|-------------|
| A3-CORE | iPhone 17 Pro Max | Live MapKit Phan Rang · title/search/basemap/legend(+Hành lang)/Lớp · no watermark · no demo overlay |
| P6-CORE | Pixel 2 | Chrome match (Danh sách · chips · tab5) · first-frame gray grid (tile race) |
| P6-CORE-2 | Pixel 2 | Live Esri Cam Ranh/Phan Rang · Phố + Tài sản isolate · proves map live |

## Must gaps

none

## Should (non-blocking)

- GAP-QA-GIS-EMPTY · GAP-QA-AND-TILE-RACE · GAP-QA-A11Y-CHIP — see `qa/scenarios.md`
