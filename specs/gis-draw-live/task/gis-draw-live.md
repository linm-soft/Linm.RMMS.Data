# Team lead — tasks — gis-draw-live

| Field | Value |
|-------|-------|
| feature | `gis-draw-live` |
| status | `confirmed` |
| mfeStdRoute | `/gis/draw` (route_confirm) |
| skillVersion | `2026.08.10.3` |
| schemaVersion | `qldb-workflow-skill-v1` |
| workflowVersion | `2026.08.10.3` |
| versionGate | `ok` |
| updatedAt | `2026-09-01T01:18:00.000Z` |

## Source assignment

| Layer | Source |
|-------|--------|
| UI | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Gis` |
| BE API/BFF | `D:/AI-QLBD/Linm.RMMS.WebService` · domain `Gis` |
| Demo SSOT | `Linm.RMMS.Demo/src/demo/gis/gis-draw-live.html` |
| Context | `Linm.RMMS.Data/docs/context/features/gis-draw-live.md` |
| Design zones | A sidebar · C map chrome (host→bar, **không** legend isolate) · D props/results · **không** header/toolbar B |

**Cấm:** `Linm.Web.ERP.WebService` · `Domains/Master` · `api/v1/rmms/*` ERP.

## UI notes (2026-09-01 `/edit-web-feature`)

**Cấm revert:** không header `← Dev ← GIS` + title · không toolbar seed/export · không bottom isolate legend. Dock map **flex fill** remaining. Click cụm/pin **không** `setView` / auto zoom (popup only). List Kết quả vẫn Fit.

Lớp lazy default off + count. Paint nét overlayPane raw trước OSRM. Snap `projectToPath` đúng `props.route` — cấm nearest inventory.

## Platform SSOT / permissions

| id | DoD |
|----|-----|
| T-CTX | Context + demo wired in implement MD |
| T-PERM | Local-mode OK · JWT TODO when platform auth lands |

## Tasks

| id | page | layer | role | deps | skills | DoD |
|----|------|-------|------|------|--------|-----|
| T-CTX | gis-draw-live | docs | dev | — | — | Stamp implement paths |
| T-PERM | gis-draw-live | perm | dev | — | — | Local mode note |
| T-BE-01 | map | api | dev | — | new-endpoint | purpose=live layers + live basemap · reuse drawings · build PASS |
| T-BE-02 | map | bff | dev | T-BE-01 | create-bff-api-feature | BFF forward purpose · build PASS |
| T-UI-MAP | /gis/draw | ui-map | dev | — | agent-dev-oms-map | Kind F A–D rút gọn · OMS R1–R11 · build PASS |
| T-FE-CLIENT | client | ui-api | dev | T-BE-01,T-UI-MAP | — | wire drawings + local fallback |
| T-QA-01 | gis-draw-live | qa | qa | T-UI-MAP,T-BE-02 | — | scenarios.md |
| T-RV-01 | gis-draw-live | review | review | T-QA-01 | review-query | findings.md |

## retry.ssot_rereview (HARD)

Live page `/gis/draw` audit before Write:

| Check | Result |
|-------|--------|
| 1 LinPageLayout nested CatalogListShell | N/A — Kind F map (not Kind B list) |
| footer CatalogListPagination | N/A |
| flex+skeleton | map-host flex fill · loading state |
| toolbar config | map-bar only (Fit · clip · toggle) — **cấm** zone B seed toolbar |
| list_parity | N/A packKind=map |
| tree_master | layer tree sidebar (not catalog tree_master) |
| form checklist | props panel after draw (not Slideout form) |
| OMS R1–R11 | required on T-UI-MAP |

## Deps order

T-BE-01 → T-BE-02 · T-UI-MAP → T-FE-CLIENT → verify builds → T-QA-01 → T-RV-01

---
<!-- Version meta: skillVersion=2026.08.10.3 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.08.10.3 · versionGate=ok -->
