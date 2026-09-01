# Team lead — tasks — gis-draw-google

| Field | Value |
|-------|-------|
| feature | `gis-draw-google` |
| status | `confirmed` |
| mfeStdRoute | `/gis/draw-google` (route_confirm) |
| skillVersion | `2026.08.10.3` |
| schemaVersion | `qldb-workflow-skill-v1` |
| workflowVersion | `2026.08.10.3` |
| versionGate | `ok` |
| updatedAt | `2026-08-11T15:06:00.000Z` |

## Source assignment

| Layer | Source |
|-------|--------|
| UI | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Gis` |
| BE API/BFF | `D:/AI-QLBD/Linm.RMMS.WebService` · domain `Gis` |
| Demo SSOT | `Linm.RMMS.Demo/src/demo/gis/gis-draw-google.html` |
| Context | `Linm.RMMS.Data/docs/context/features/gis-draw-google.md` |
| Design zones | A sidebar · B *(removed seed toolbar)* · C map chrome host→bar · D props/results |

**Cấm:** `Linm.Web.ERP.WebService` · `Domains/Master` · `api/v1/rmms/*` ERP.

## Platform SSOT / permissions

| id | DoD |
|----|-----|
| T-CTX | Context + demo + control-map wired in implement MD |
| T-PERM | Local-mode OK · JWT TODO when platform auth lands |

## Tasks

| id | page | layer | role | deps | skills | DoD |
|----|------|-------|------|------|--------|-----|
| T-CTX | gis-draw-google | docs | dev | — | — | Stamp implement paths |
| T-PERM | gis-draw-google | perm | dev | — | — | Local mode note |
| T-BE-01 | map | api | dev | — | new-endpoint | basemap + layers?purpose=draw + drawings CRUD · build PASS |
| T-BE-02 | map | bff | dev | T-BE-01 | create-bff-api-feature | BFF proxy · build PASS |
| T-UI-MAP | /gis/draw-google | ui-map | dev | — | agent-dev-oms-map | Kind F A–D · OMS R1–R11 · pin QCVN = legend (cấm vòng trắng) · build PASS |
| T-FE-CLIENT | client | ui-api | dev | T-BE-01,T-UI-MAP | — | wire drawings + **geojson khu-2-gov trên corridor Nghệ An** + **OSRM R8** tuyến + pin `projectToPath` |
| T-QA-01 | gis-draw-google | qa | qa | T-UI-MAP,T-BE-02 | — | scenarios.md |
| T-RV-01 | gis-draw-google | review | review | T-QA-01 | review-query | findings.md |

## retry.ssot_rereview (HARD)

Live page `/gis/draw-google` audit before Write:

| Check | Result |
|-------|--------|
| 1 LinPageLayout nested CatalogListShell | N/A — Kind F map (not Kind B list) |
| footer CatalogListPagination | N/A |
| flex+skeleton | map-host flex fill · loading state |
| toolbar config | zone B + map-bar |
| list_parity | N/A packKind=map |
| tree_master | layer tree sidebar (not catalog tree_master) |
| form checklist | props panel after draw (not Slideout form) |
| OMS R1–R11 | required on T-UI-MAP |

## Deps order

T-BE-01 → T-BE-02 · T-UI-MAP → T-FE-CLIENT → verify builds → T-QA-01 → T-RV-01

---
<!-- Version meta: skillVersion=2026.08.10.3 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.08.10.3 · versionGate=ok -->
