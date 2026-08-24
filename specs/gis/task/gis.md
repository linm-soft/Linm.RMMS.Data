# Team lead — tasks — gis

| Field | Value |
|-------|-------|
| feature | `gis` |
| status | `confirmed` |
| mfeStdRoute | `/gis` (route_confirm) |
| skillVersion | `2026.08.08.31` |
| schemaVersion | `qldb-workflow-skill-v1` |
| workflowVersion | `2026.08.08.31` |
| versionGate | `ok` |
| updatedAt | `2026-08-08T16:28:00.000Z` |

## Source assignment

| Layer | Source |
|-------|--------|
| UI | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Gis` |
| BE API/BFF | `D:/AI-QLBD/Linm.RMMS.WebService` · domain `Gis` |
| Demo SSOT | `Linm.RMMS.Demo/src/demo/gis/` |
| Context | `Linm.RMMS.Data/docs/context/features/gis.md` |
| Design zones | A sidebar · B toolbar · C map chrome · D results |

**Cấm:** `Linm.Web.ERP.WebService` · `Domains/Master` · `api/v1/rmms/*` ERP.

## Platform SSOT / permissions

| id | DoD |
|----|-----|
| T-CTX | Context + demo + controlHint wired in implement MD |
| T-PERM | Local-mode OK · JWT TODO when platform auth lands (match health controller) |

## Tasks

| id | page | layer | role | deps | skills | DoD |
|----|------|-------|------|------|--------|-----|
| T-CTX | gis | docs | dev | — | — | Stamp implement paths |
| T-PERM | gis | perm | dev | — | — | Local mode note |
| T-BE-01 | map | api | dev | — | create-bff-api-feature | layers+geojson+heatmap · build PASS |
| T-BE-02 | map | bff | dev | T-BE-01 | create-bff-api-feature | BFF proxy · build PASS |
| T-UI-MAP | /gis | ui-map | dev | — | agent-dev-oms-map · shared/map REF | Kind F A–D · legend đủ loại TS/đoạn trên map · table dock không max-height · build PASS |
| T-FE-CLIENT | client | ui-api | dev | T-BE-01,T-UI-MAP | — | wire geojson/heatmap + seed fallback |
| T-UI-FORM | /gis/new | ui-form | — | — | — | **skip** P1 (scaffold kept) |
| T-QA-01 | gis | qa | qa | T-UI-MAP,T-BE-02 | — | scenarios.md |
| T-RV-01 | gis | review | review | T-QA-01 | review-query | findings.md |

## retry.ssot_rereview (HARD)

Live page `/gis` audit before Write:

| Check | Result |
|-------|--------|
| 1 LinPageLayout nested CatalogListShell | N/A — Kind F map (not Kind B list) |
| footer CatalogListPagination | N/A |
| flex+skeleton | map-host flex fill · loading state |
| toolbar config | toolbar actions from design zone B |
| list_parity | N/A packKind=map |
| tree_master | no |
| form checklist | skip form P1 |
| OMS R1–R11 | required on T-UI-MAP |

## Deps order

T-BE-01 → T-BE-02 · T-UI-MAP → T-FE-CLIENT → verify builds → T-QA-01 → T-RV-01

---
<!-- Version meta: skillVersion=2026.08.08.31 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.08.08.31 · versionGate=ok -->
