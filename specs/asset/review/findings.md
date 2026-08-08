# Review — asset

| Field | Value |
|-------|-------|
| feature | `asset` |
| status | `confirmed` (autopilot · review_confirm=approve) |
| updatedAt | 2026-08-08T08:32:00.000Z |

## Scope reviewed

- FE Kind B list/form (`AssetListPage` / `AssetFormPage`)
- BE `RoadAssetService` query + CRUD
- Route isolation vs Finance FixedAsset

## Query / data

| Check | Result |
|-------|--------|
| List filter search Contains on indexed Code | OK (unique CompanyCode+Code) |
| Type filter equality | OK |
| Soft delete IsActive=false | OK |
| N+1 | None (single table) |
| Collision with `api/v1/assets` | Avoided · uses `rmms/road-assets` |

## Security

| Check | Result |
|-------|--------|
| `[Authorize]` on API + BFF | OK |
| Tenant `CompanyCode` on create | OK |
| No secrets in FE | OK |

## UI / BE fn

| Check | Result |
|-------|--------|
| Search UI → `?search=` | OK |
| View readOnly | OK |
| Create/Edit/Copy | OK |
| DTO field parity list/form | OK |

## Findings

| id | Severity | Finding | Action |
|----|----------|---------|--------|
| RV-01 | P3 | BE search chưa Unaccent | P2 · GAP-P1-SEARCH |
| RV-02 | Info | Prod webpack cần non-localhost `VITE_API_URL` | Deploy env |

**P0 security:** none
