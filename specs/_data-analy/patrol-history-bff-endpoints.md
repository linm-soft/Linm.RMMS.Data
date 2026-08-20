# BFF endpoints — patrol-history (mobile list)

| | |
|---|---|
| feature | `patrol-history` |
| bff | `Linm.RMMS.Mobile.Bff` · proxy catch-all |
| prefix | `mobile-bff/api/v1` |
| downstream | `PatrolSessionsController` |
| **cấm** | invent `api/v1/patrol-history` · ERP.* |

## Table — `#sc-patrol-history`

| Action | Method | Path | In slug? |
|--------|--------|------|----------|
| List lịch sử | GET | `patrol/sessions` | **yes** — query `search` · `status` · `route` · `page` · `pageSize` |
| Detail drill | GET | `patrol/sessions/{id}` | **no P1** — tap row toast |
| Filter sheet | — | — | **no** — toast P1 |

## Verify

| Check | Result |
|-------|--------|
| `PatrolSessionsController` | live · reuse |
| Step 4b | **N/A** |

## Version meta

| Field | Value |
|-------|-------|
| contentHash | sha256:patrol-history-mobile-bff-20260820 |
