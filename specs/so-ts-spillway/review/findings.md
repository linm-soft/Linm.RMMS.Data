# Review — Findings — so-ts-spillway

| Field | Value |
|-------|-------|
| feature | `so-ts-spillway` |
| title | Sổ TS — Đường tràn |
| this role | `review` · `/agent-review` |
| mode | `review_only` |
| status | **confirmed** |
| review_confirm | **confirmed** (autoApprove=ON · **accept** · **0** fix_gaps) |
| changeScope | `new_page` |
| packKind | `list` · Kind B catalog + full-page form `data-form-cols="5"` |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/so-ts?type=SPILLWAY` · alias `/so-ts-spillway` |
| mfeStdUrl | `http://localhost:9301/so-ts?type=SPILLWAY` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/asset/road-assets` |
| BFF | `web-bff/api/v1/asset/road-assets` |
| autoApprove | **ON** |
| e2eQa | **ON** (prior QA confirmed · **FORBIDDEN** e2e/start:std this role) |
| chain | **ON** · pipeline leaf · **GAP-PKT-ROLE-01** |
| prior · qa | **confirmed** · `qa/scenarios.md` · `task_ca4d36f3` · S0/S1/QA-20 PASS |
| prior · dev | **confirmed** · `implement/so-ts-spillway.md` · `task_330799f3` |
| taskId | `task_3545d552` |
| updatedAt | `2026-08-31T22:33:10.000Z` |

**Method:** static re-audit FE (`AssetListPage.tsx` SPILLWAY profile · `AssetFormPage.tsx` S-ATTR · `index.tsx` alias · dumpSpecLabels) + BE (`RoadAssetsController` · `RoadAssetService` init spillwayTypes/structureTypeSpillways · TR- prefix · RebuildGovVn IsWeak allowlist) + DOMAIN-MAP Asset + QA evidence (`qa/scenarios.md` · `qa/screens/{S0,S1,QA-20,filter-*}.png` · `manifest.json` ok · `live-assert.json` DTM). **No** FE/BE write. **FORBIDDEN** yarn build / e2e / start:std. **FORBIDDEN** ERP.* / invent `api/v1/so-ts/*`.

**Hash:** draft stub `autoCreated` · **no prior done findings** → `versionGate=ok` · full re-audit (no SKIP).

## SSOT surface (code + QA evidence)

| # | Gate | Live | Verdict |
|---|------|------|---------|
| 1 | 1× `LinPageLayout` catalog · list testid | `rmms-so-ts-spillway-list-page` | **PASS** |
| 2 | `LinCatalogDataGrid` + SPILLWAY cols | hide type/kmTo/qty/unit/KM_POST-only · ensure spillway attrs | **PASS** |
| 3 | filter-bar | `LinErpListFilterBar` · type ẩn deep-link · search/route/km/org | **PASS** (live-assert) |
| 4 | LAYOUT-06 shell | title «Danh sách đường tràn» + toolbar + filter + grid | **PASS** (S0 · live-assert) |
| 5 | toolbar CRUD + History + SchemaConfig | `fromCatalogToolbar` · **0** `configHint` | **PASS** |
| 6 | Form full-page 5 cột | `data-form-cols="5"` · live-assert `cols5=true` | **PASS** |
| 7 | S-ATTR editable | spillwayTypes/structure Dropdown · width/length Number · name_river | **PASS** |
| 8 | `kmTo` ẩn SPILLWAY | code gate + live `kmToVisible=false` | **PASS** |
| 9 | `name` ← `name_work` · label «Tên công trình» | `updateSpillwayName` · RebuildGovVn allowlist | **PASS** |
| 10 | LeaveConfirmModal | `useFormLeaveGuard` + Modal · delete `useAlert` · **0** native on Asset* | **PASS** |
| 11 | Alias | `/so-ts-spillway` → `/so-ts?type=SPILLWAY` · S1 | **PASS** |
| 12 | API prefix | `api/v1/asset/road-assets` · init spillwayTypes=4 · structureTypeSpillways=4 | **PASS** |
| 13 | Chrome VN | **0** CREATE badge · **0** demo note · title spillway | **PASS** (live-assert) |
| 14 | DTM 1280/768/375 | overflowX=false | **PASS** |

## Findings

No P0 / P1 blocking. **review_confirm = accept**.

| ID | Class | Sev | Where | Repro | Disposition |
|----|-------|-----|-------|-------|-------------|
| REV-SPW-01 | be-fn | Info | dumpSpecs spillway attrs empty on some rows | List SPILLWAY | Accept · rebuild+reimport optional |
| REV-SPW-02 | ui-fn | P2 | spillway/structure LOOKUP_STATIC Dropdown (not master SearchInput) | Form S-ATTR | Accept · P2 later |
| REV-SPW-03 | security | P2 | BE `RequirePermission` TODO CommonLib | `RoadAssetsController` | Accept · **GAP-SPW-AUTH-01** DEFER |
| REV-SPW-04 | be-fn | P2 | Flatten Schema_* dumpSpecs | Entity DumpSpecs text | Accept · **GAP-SPW-FLAT-01** DEFER |
| REV-SPW-05 | note | info | `yarn e2e-qa` playwright install hung | QA role | Accept · **GAP-QA-E2E-PW-01** · Chrome evidence OK |
| REV-SPW-06 | security | — | ERP.* / invent so-ts API | Grep Asset pages | **None** |
| REV-UI-LAYOUT-06 | ui-fn | P0 | list shell blank/clip | S0 · live-assert | **PASS** |
| REV-UI-HDR-01 / VI-01 / TB-01 | ui-fn | P0 | chrome | S0/QA-20 VN · no CREATE | **PASS** |
| REV-UI-FORM-GRID-05 | ui-fn | P0 | full-page form | `data-form-cols="5"` | **PASS** |
| REV-UI-BTN-SSOT-01 | ui-fn | P0 | Làm mới/Tạo mới · Quay lại/Hủy/Tạo mới | QA-20 | **PASS** |
| REV-UI-TB-ZONES-01 | ui-fn | P0 | form toolbar 1 bar | QA-20 | **PASS** |
| REV-UI-DD-VN-01 | ui-fn | P0 | Select spillway/status | «Chọn loại công trình» · VN | **PASS** |
| REV-UI-FILTER-DTM-01 | ui-fn | P0 | filter D+T+M | live-assert | **PASS** |
| REV-UI-RESP-01 | ui-fn | P0 | 1280/768/375 | overflowX false | **PASS** |
| QUERY-* / SEC-IDOR P0 | query/sec | P0 | list/get | — | **None** blocking |

## Query (/review-query)

- List QS: `search` · `type=SPILLWAY` · `route` · `kmFrom` · `kmTo` · `orgUnit` · `page` · `pageSize` → BFF `road-assets`.
- Search covers Code/Name/Route*/Type/Qr + DumpSpecs ILike (sông / name_work trong JSON).
- GetById: tenant + **xco_get_only** (`IgnoreQueryFilters` + AllowedCompanyIds) — SA gate.
- Soft DELETE · FE BFF-only · no demo/localStorage SSOT.
- Init: `spillwayTypes[]` · `structureTypeSpillways[]` (dump distinct ∪ seed · Take 8000) — **GAP-SPW-LOOKUP-01** closed P1.
- Create prefix `TR-` when type=SPILLWAY.
- N+1/OOM: paged list · init scan capped — accept Kind B.

## Security

- FE permission stubs `assetListPermissions` · Auth NuGet DEFER (**GAP-SPW-AUTH-01**).
- BFF proxy-only · Authorization / company headers.
- BE attribute Auth TODO — not P0 DoD block (DEFER).
- DOMAIN-MAP: `so-ts-spillway` → Asset · `api/v1/asset` · **0** ERP.*.
- 0 secrets in feature paths.

## UI / BE function

- Kind B list SPILLWAY profile + filter type lock + Config full + History + row menu.
- Full-page form reuse `AssetFormPage` · S-ATTR spillway · kmTo hidden · LeaveConfirm dirty.
- QA E2E S0/S1/QA-20 PASS — Review **did not** re-run e2e; used screens + manifest + live-assert.
- Review-time HTTP GET `/so-ts?type=SPILLWAY` on `:9301` may 404 without SPA fallback (root HTML 200) — **not** P0; QA runtime PASS with same URL.
- Verify typecheck/build: PASS at QA — Review **did not** re-run yarn build.

## Gates

| Gate | Result |
|------|--------|
| Design prototype + reviewUrl | confirmed |
| SA solution | confirmed · tz_na · xco_get_only · share_tenant |
| be_repo / ui_repo | `Linm.RMMS.WebService` / `Linm.Web.RMMS.Asset` |
| FormType ACT / T-BE-CRUD / T-QA-* | **PASS** (QA confirmed) |
| SSOT list shell / LAYOUT-06 | **PASS** |
| VERIFY yarn build this role | n/a · FORBIDDEN · prior QA PASS |
| BE write this role | n/a — review_only |
| review_confirm | **confirmed** · accept |

## Confirm

review_confirm = **confirmed** — autoApprove=ON · **accept** (no fix_gaps / no abort).

## Verdict

**PASS** — Kind B list + full-page form `so-ts-spillway` (Đường tràn) closes DoD pack. Residual P2 auth / flatten / LOOKUP master SearchInput / optional dumpSpecs reimport do not block accept. Pipeline → **done**.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-review |
| skillVersion | 2026.08.30.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.01.02 |
| rulesVersion | 2026.08.31.2 |
| reviewHash | `sha256:b22131cd8b478e49544fa7450e7a987bed51737e519b0be78e80dd8135394eec` |
| generatedAt | `2026-08-31T22:33:10.000Z` |
| versionGate | ok (full re-audit · prior draft stub) |
| formTypePack | list |
| changeScope | new_page |
| contentHashPriorDataAnaly | sha256:508eb2426b263e800949a533e300220f75a65b128771f77baf52d3e0d567517f |
| route_confirm | route_a |
| taskId | `task_3545d552` |
| priorQaTaskId | `task_ca4d36f3` |
| priorDevTaskId | `task_330799f3` |

---
<!-- Version meta: skillId=agent-review skillVersion=2026.08.30.01 schemaVersion=1 workflowVersion=2026.09.01.02 rulesVersion=2026.08.31.2 versionGate=ok taskId=task_3545d552 route_confirm=route_a -->
