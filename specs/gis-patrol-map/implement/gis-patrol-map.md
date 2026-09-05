# Implement — gis-patrol-map

| Field | Value |
|-------|-------|
| feature | `gis-patrol-map` |
| status | `done` |
| mfeStdRoute | `/gis/tuan-duong` |
| mfeStdUrl | `http://localhost:9302/gis/tuan-duong` |
| updatedAt | `2026-09-01T22:00:00.000Z` |

## Dest

- MFE: `pages/GisPatrolMapPage/` · `services/patrol/` · nav `devRoutes.ts` · `index.tsx`
- Removed: `GisListPage` · `GisFormPage` · `GisDrawGoogleDemoPage.tsx` (giữ `gisDrawHelpers.ts` cho live)
- API: `GET api/v1/patrol/sessions/{id}/check-ins` · BFF proxy
- Seed: check-in GPS QL.1 Vinh + phiên `TK-20260821-001` Lê Minh Tuấn

## Notes

Cùng clip map với `/gis/tai-san`. Không fetch `summary-by-type` / geojson tài sản. Fallback `FALLBACK_SESSIONS` khi patrol BFF 503.

Paint: `routeDrivingTrack` (`/gis-tai-san-snap`) — highway `ref` rồi `{OsrmRoute}` driving · bake `{LineIndex}` nếu đã có. **Cấm** `routeAlongStreets` `/match`. Pin DivIcon teardrop + chip **Đã check-in** `#3CB448` + `HH:mm` · **Chưa** `#DC2626`. Ghim `projectToPath`. Rider interpolate **km dọc nét**. Fallback nét đứt + overlay — **cấm** chord = xong.
