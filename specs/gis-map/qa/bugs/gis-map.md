# QA bugs — gis-map

> Must mở = **0**. Should-only notes từ e2e `task_9d4480e2`.

| ID | Severity | OS | Summary | Evidence |
|----|----------|----|---------|----------|
| GAP-QA-GIS-EMPTY | Should | dual | BFF `GET gis/geojson/*` 200 · `features:[]` → demo OMS (PO fail-open + Android toast) · seed GIS nếu cần pin live | A3 demo-shaped pins · P6 toast |
| GAP-QA-A11Y-CHIP | Should | iOS | `LinmChip` / TopBar accessibilityIdentifier không expose Maestro (`mb-*` · `btn-gis-*` · `gis-search`) — assert text PASS | maestro WARN optional |

**Cấm** QA tự Dev fix. Should không block `phase=review`.
