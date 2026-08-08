# Review — asset

| Field | Value |
|-------|-------|
| feature | `asset` |
| status | `confirmed` (autopilot · review_confirm=approve) |
| updatedAt | 2026-08-08T19:20:00.000Z |
| skillVersion | 2026.08.08.17 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.08.17 |

## Scope reviewed

- FE Kind B catalog list A–D + Slideout form Z1–Z3 (`AssetListPage` / `AssetFormSlideout`)
- BE `RoadAssetsController` · `RoadAssetEntity` · route `api/v1/asset/road-assets`
- BFF `RoadAssetsBffController` proxy
- **Cấm** ERP.* / `api/v1/rmms/*` / Domains/Master

## Query / data

| Check | Result |
|-------|--------|
| List filter search + type | OK |
| Soft delete IsActive=false | OK |
| XCO GetById AllowedCompanyIds | OK (prior T-BE-01) |
| SHARE tenant_keep | OK |
| No parent JSON | OK |
| Collision Finance `/assets` | Avoided |

## Security

| Check | Result |
|-------|--------|
| Tenant `CompanyCode` | OK |
| Perm codes documented | OK · Auth stub |
| No secrets in FE | OK |

## UI / BE fn

| Check | Result |
|-------|--------|
| Zones A–D + pageSize 50/100/200/500 | OK |
| Search UI → `?search=` + `?type=` | OK |
| Slideout Create/Edit/View/Copy | OK |
| View readOnly | OK |
| FE BASE `/asset/road-assets` | OK |
| Deep-link → Slideout | OK |

## Findings

| id | Severity | Finding | Action |
|----|----------|---------|--------|
| RV-01 | P3 | BE search chưa Unaccent | P2 backlog |
| RV-02 | Info | Prod webpack cần non-localhost `VITE_API_URL` | Deploy env |
| RV-03 | P2 | Auth `[RequirePermission]` stub | `/upgrade-common-lib` |

**P0 security:** none
