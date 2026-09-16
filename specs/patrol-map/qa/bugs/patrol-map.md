# QA bugs — patrol-map

| Gap | OS | Notes | Status |
|-----|----|-------|--------|
| GAP-MOB-AND-MAP-LOAD-01 | Android | osmdroid `XYTileSource` decode BFF `.pbf` MVT as raster → map blank · fix `GisClipMapView` MapLibre | **fixed** 2026-09-16 |
| GAP-MOB-AND-CHIP-01 | Android | Chip Tiêu chuẩn/Vệ tinh (`mb-clip`/`mb-sat`) · Wave 4 MapLibre | **fixed** 2026-09-16 |
| GAP-MOB-IOS-FIRST-OVERLAY-01 | iOS | First open `#sc-patrol-map` style ready before delegate → corridor/pins not painted · seed overlay before OSRM + re-apply in `didFinishLoading` | **fixed** 2026-09-16 |
| GAP-MOB-AND-STOP-PIN-01 | Android | Stop points no number + not clickable (glyph/text + `onSelectPin={}`) · local numbered bitmap + popup `patrol-pin-popup` (dual iOS) | **fixed** 2026-09-16 |
| GAP-MOB-PIN-OVER-LINE-01 | both | Stop pins under corridor line (iOS annotation / Android line after pins) · GeoJSON corridor **below** pin layers | **fixed** 2026-09-16 |
| GAP-MOB-PAT-MAP-LIVE-01 | both | Overlay mock `PatrolMapOverlay` · bind GET plan-points + check-ins · seed demo-seed để điểm next chưa ghi | **fixed** 2026-09-16 |
| GAP-MAP-OSRM-CONFIG-01 | both | Toast `OSRM lỗi — nét thẳng tạm` vì `OSRM_BASE` empty + `net.osrmPublic=false` (không gọi HTTP) · Debug `OsrmBase` public · router dùng base khi set | **fixed** 2026-09-16 |
| GAP-QA-E2E-HARVEST | both | CLI harvest once mapped wrong screens → replaced CORE with Maestro `A3-CORE-MAP` | **fixed** this run |

No blocking Must for `#sc-patrol-map` iOS. Sibling check-in sheet still out of scope.
