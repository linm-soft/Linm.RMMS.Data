# Review — Findings — csdl-so-10

| Field | Value |
|-------|-------|
| feature | `csdl-so-10` |
| title | CSDL Sổ 10 — Bình đồ duỗi thẳng tuyến |
| this role | `review` · `/agent-review` |
| mode | `review_only` |
| status | **confirmed** |
| review_confirm | **done** (autoApprove=ON · accept · **0** fix_gaps) |
| changeScope | `new_page` |
| packKind | `map` · Kind B list + Kind D Slideout 2col + Kind F OMS map |
| resource | `route-strip-maps` · formNo `10` · IdCode `SO-` |
| MapGateSlash | `/agent-dev-oms-map` |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/csdl-so-10` |
| mfeStdUrl | `http://localhost:9301/csdl-so-10` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=route-strip-maps` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/asset/csdl-records` |
| BFF | `web-bff/api/v1/asset/csdl-records` |
| autoApprove | **ON** |
| e2eQa | prior QA **PASS** · **cấm** e2e/start:std this role |
| chain | **ON** · pipeline leaf · GAP-PKT-ROLE-01 |
| prior · qa | **confirmed** · `handoff/qa-compact.md` · `task_546e0234` |
| prior · dev | **confirmed** · `handoff/dev-compact.md` · `task_5b38ddba` |
| taskId | `task_d5e431db` |
| contentHashPrior | `sha256:e444b5c2b3c297fc9affd2c72aae7f06378eab566c213c88cbdc972a10fae30a` |
| reviewHash | `sha256:1f85d94b34140b86daad1275b1097719b2cdf6f090ac281a2c2f8ffcd31f7fed` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.05.03` |
| rulesVersion | `2026.09.05.8` |
| updatedAt | `2026-09-06T04:43:08.417Z` |

**Method:** static re-audit FE (`CsdlSo10Page` / `CsdlSo10FormSlideout` / `CsdlSo10MapPanel` / route `csdl-so-10` / `csdlSoSach` service) + BE (`CsdlCatalogService` typed `CsdlSo10` / `Schema_CsdlSo10` / DOMAIN-MAP) + prior compact chain (analy→qa) + QA evidence (scenarios + manifest `ok=true` · sha16 S0/S1/QA-20). **No** FE/BE write. **FORBIDDEN** yarn build / e2e / start:std / Step 4b / migration (VERIFY GATE roleOnly=review). **FORBIDDEN** ERP.*. Map pack gates R1–R11 via `/agent-dev-oms-map` checklist (code + QA).

**Hash:** contentHashPrior unchanged · REVIEW-META was `draft` → full audit (no SKIP).

## SSOT surface (live code + QA evidence)

| # | Gate | Live | Verdict |
|---|------|------|---------|
| 1 | Route alias `route_a` `/csdl-so-10` + hub | `index.tsx` Route · hub map `route-strip-maps`→`/csdl-so-10` | **PASS** |
| 2 | Kind B list · FilterBar | `LinPageLayout` · `LinErpListFilterBar` · `fromCatalogToolbar` | **PASS** |
| 3 | Dynamic grid + schema | catalogKind `route-strip-maps` | **PASS** |
| 4 | Kind D Slideout 2col · footer_only | `data-form-cols="2"` · `customFooter` · `data-form-footer=actions-only` · LeaveConfirmModal | **PASS** |
| 5 | Typed T-SO-10 · **cấm** detail*-only | So10 fields + entries strip · shell+typed | **PASS** |
| 6 | Kind F map host→bar · OMS | `data-map-chrome=host-bar` · canvas · fallback File | **PASS** |
| 7 | Map R1–R11 (pack) | Leaflet live · clip URL reserved · OSRM · Fit VN · dock/full · panes · **0** Cesium | **PASS** · GL clip debt P2 |
| 8 | API Asset csdl-records · **cấm** ERP.* | FE `/asset/csdl-records` · BE Asset · DOMAIN-MAP `csdl-so-10`→Asset | **PASS** |
| 9 | IdCode `SO-` · soft DELETE | shell SO- · `SoftDeleteAsync` | **PASS** |
| 10 | road-route SearchInput P1 | form LKP peer so-09 pattern | **PASS** |
| 11 | QA E2E S0/S1/QA-20 | manifest ok · sha16 `1ebab90a184fd85d` / `fce79dda6ea4f33c` | **PASS** (prior) |
| 12 | yarn/dotnet build | prior Dev/QA | **PASS** (not re-run) |

## Findings

No P0 / P1 blocking. **review_confirm = done** · accept.

| ID | Class | Sev | Where | Repro | Disposition |
|----|-------|-----|-------|-------|-------------|
| REV-SO10-01 | be-fn | Info | shell + `CsdlSo10Entity` 1:1 `rmms_csdl_so10` | Schema_CsdlSo10 | Accept · typed SSOT |
| REV-SO10-02 | query | — | List QS resource/search/province/status/road/period/page | BFF GET 200 (QA) | **PASS** |
| REV-SO10-03 | security | P2 | RequirePermission TODO CommonLib | Controller comments · T-PERM stub | Accept · Auth DEFER |
| REV-SO10-04 | security | — | ERP.* / invent infra | Grep FE page · DOMAIN-MAP Asset | **None** |
| REV-SO10-05 | security | — | Company claim get-by-id | `AllowedCompanyIdsClaim` | **PASS** (xco_get_only) |
| REV-SO10-06 | ui-fn | — | LeaveConfirm · **0** window.confirm | Form useLeaveConfirm | **PASS** |
| REV-SO10-07 | ui-fn | — | Slideout footer sticky · **0** `footer=` on Slideout | customFooter only | **PASS** |
| REV-SO10-08 | ui-fn | — | Map chrome host→bar · fallback strip image | testids map-host/bar/canvas/fallback | **PASS** |
| REV-SO10-09 | ui-fn | P2 | Basemap interim Carto CDN | MapPanel tileLayer cartocdn | Accept · debt GL clip wire (STATUS) · clipTileUrl reserved |
| REV-SO10-10 | be-fn | P2 | Migration apply runtime DB | Schema_CsdlSo10 exists · ops apply | Accept · deploy debt |
| REV-SO10-11 | note | P2 | GAP-QA-E2E-PW-01 chrome fallback | QA compact | Accept · non-blocking |
| REV-SO10-12 | note | P3 | GAP-QA-ROAD-TESTID | SearchInput testid DOM | Accept |
| REV-SO10-13 | note | P2 | PostGIS DEFER · GAP-SO10-POSTGIS-02 | jsonb P1 | Accept · SA decision |
| QUERY-* / SEC-IDOR P0 | query/sec | P0 | list/get | — | **None** blocking |
| REV-UI-LAYOUT-06 / HDR / SLIDE / FORM-GRID | ui-fn | P0 | list/form | QA PNG + code | **None** |

## Query (/review-query)

- List: `resource=route-strip-maps` + search/province/status/road/period/page · BFF proxy QS as-is.
- GetById: typed join `CsdlSo10` · company claim gate · 404 missing.
- Soft DELETE on API · FE live BFF only · **0** demo/localStorage SSOT.
- Create/Update: typed DTO → `CsdlSo10` · geometry jsonb + GeomType/Srid · entries strip required kmFrom/kmTo.
- N+1: list batch load So10 by CatalogRecordId · accept.

## Security

- FE permission: `rmms-asset:csdl-records:read|write`.
- BFF proxy-only · forwards auth headers.
- BE RequirePermission attribute debt (DEFER) — not P0 DoD block.
- DOMAIN-MAP: `csdl-so-10` → Asset.
- **0** ERP.* · **0** secrets in feature paths.

## UI / BE function + Map (R1–R11)

- Alias list Kind B + Slideout C/E/V/Copy/Delete · hub peer entry.
- Map: Leaflet live (R1) · VN labels / clip reserved no OSM.org chip (R2 debt interim Carto) · aria titles (R3) · dock/full icons (R4/R4d) · host→bar order (R4c) · **0** 3D placeholder (R4e) · zoom Leaflet (R5) · corridor/track panes (R7b) · click draw + OSRM (R8) · Fit VN bounds (R11) · File fallback empty geom (Q-SO10).
- QA E2E S0/S1/QA-20 PASS — Review did not re-run e2e; used manifest sha16 (+ PNG paths; binary Read blocked by ACL).
- Verify builds: PASS at Dev/QA — Review did not re-run yarn/dotnet.

## Gates

| Gate | Result |
|------|--------|
| Design prototype + reviewUrl | confirmed |
| SA solution · Schema_CsdlSo10 · jsonb P1 | confirmed |
| TL route_a · MapGateSlash · T-* | confirmed |
| Dev implement · yarn/dotnet · qaFix P0 | PASS (prior) |
| QA S0/S1/QA-20 · typecheck | PASS (prior) |
| review_confirm | **done** · accept · 0 fix_gaps |

## Version meta

| Field | Value |
|-------|-------|
| schemaVersion | `1` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.05.03` |
| rulesVersion | `2026.09.05.8` |
| contentHashPrior | `sha256:e444b5c2b3c297fc9affd2c72aae7f06378eab566c213c88cbdc972a10fae30a` |
| reviewHash | `sha256:1f85d94b34140b86daad1275b1097719b2cdf6f090ac281a2c2f8ffcd31f7fed` |
| status | `done` |

## Next

Pipeline review **confirmed** · phase=`done` · ops: migration apply · GL clip wire · Auth DEFER · **cấm** start role khác (GAP-PKT-ROLE-01).
