# Implement — csdl-bieu-14

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-14` |
| title | CSDL Biểu 14 — Hệ thống ITS (GTTM) |
| this role | `dev` · `/agent-dev` |
| status | **done** |
| changeScope | `new_page` |
| packKind | `list` |
| resource | `its-systems` |
| formNo | `14` |
| IdCode | `IT-` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-14` |
| hub | `/so-ts/csdl-so-sach?resource=its-systems` |
| taskId | `task_936065ca` |
| contentHashPrior | `sha256:6cfdefa3baaffcf2bd97c7a429bb5043e7f9d77b96bbb77eafaa34689007b112` |
| headerFingerprintPrior | `sha256:14cd156a898dcc971a072dd1cd1b92460a8b597558a90dc9854fead9d4c4de5c` |
| updatedAt | `2026-09-05T15:00:00.000Z` |
| yarnBuild | **PASS** |
| dotnetBuild | **PASS** |

## Done (T-*)

| id | Result |
|----|--------|
| T-DM-01 | DOMAIN-MAP `csdl-bieu-14` → Asset |
| T-CTX-01 | context sync (lane web · phase implement) |
| T-BE-01 | `CsdlBieu14Entity` + EF 1:1 |
| T-BE-02 | Migration `Schema_CsdlBieu14` (`rmms_csdl_bieu14`) |
| T-BE-03..06 | Service branch `its-systems` · DTO typed · IdCode `IT-` · filters · soft-delete reuse · UiSchema seed |
| T-BFF-01 | proxy only (no change) |
| T-PERM-01 | reuse `asset.csdl-records.*` |
| T-UI-* | Kind B list + Kind D Slideout Z1–Z3 · FilterBar · buildDynamicGridColumns · LeaveConfirm · hub NEW |

## APIs

- `GET/POST/PUT/DELETE` `/api/v1/asset/csdl-records` · `resource=its-systems`
- BFF `/web-bff/api/v1/asset/csdl-records` proxy
- LKP `GET /api/v1/integration/road-routes/search`

## Debt / defer

- Auth RequirePermission wire DEFER
- org SearchInput manageUnit P2
- XLS OUT · peer toolbar none_p1 · map none
- Snapshot EF full regen optional (hand migration present)

## Verify

- MFE `yarn build` PASS · chunk `csdl-bieu-14`
- BE `dotnet build` PASS · 0 errors
- **cấm** e2e / start:std @ Dev (queued QA)
