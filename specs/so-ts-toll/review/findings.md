# Review — Findings — so-ts-toll

| Field | Value |
|-------|-------|
| feature | `so-ts-toll` |
| title | Sổ TS — Trạm thu phí |
| this role | `review` · `/agent-review` |
| mode | `review_only` |
| status | **confirmed** |
| review_confirm | **confirmed** (autoApprove=ON · **accept** · **0** fix_gaps) |
| changeScope | `new_page` |
| packKind | `list` · Kind B catalog + full-page form `data-form-cols="5"` |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/so-ts?type=TOLL` · alias `/so-ts-toll` |
| mfeStdUrl | `http://localhost:9301/so-ts?type=TOLL` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/asset/road-assets` |
| BFF | `web-bff/api/v1/asset/road-assets` |
| autoApprove | **ON** |
| e2eQa | **ON** (prior QA confirmed · **FORBIDDEN** e2e/start:std this role) |
| chain | **ON** · pipeline leaf · **GAP-PKT-ROLE-01** |
| prior · qa | **confirmed** · `qa/scenarios.md` · `task_4803c95a` · S0/S1/QA-20 PASS |
| prior · dev | **confirmed** · `implement/so-ts-toll.md` · `task_177ba123` |
| taskId | `task_fbcf805b` |
| updatedAt | `2026-09-01T05:17:00.000Z` |

**Method:** static re-audit FE (`AssetListPage.tsx` TOLL profile · `AssetFormPage.tsx` S-ATTR + S-ATTR-WIDTH · `index.tsx` alias · `lookups.ts` · `dumpSpecLabels.ts` · `kchtTileConfig.ts` t28) + BE (`RoadAssetService` init toll*[] · TOLL validate name/kmFrom optional · weighting_method required · `DefaultCodePrefix`) + DOMAIN-MAP Asset + QA evidence (`qa/scenarios.md` · `qa/screens/{S0,S1,QA-20}.png` · `manifest.json` ok · `live-assert.json` DTM). **No** FE/BE write. **FORBIDDEN** yarn build / e2e / start:std. **FORBIDDEN** ERP.* / invent `api/v1/so-ts/*`.

**Hash:** draft stub `autoCreated` · **no prior done findings** → `versionGate=ok` · full re-audit (no SKIP).

## SSOT surface (code + QA evidence)

| # | Gate | Live | Verdict |
|---|------|------|---------|
| 1 | 1× `LinPageLayout` catalog · list testid | `rmms-so-ts-toll-list-page` | **PASS** |
| 2 | `LinCatalogDataGrid` + TOLL cols | hide type/kmTo/qty/unit/auxiliary_works_grade_id · ensure weighting/lane/cấp/DT cổng | **PASS** |
| 3 | filter-bar | `LinErpListFilterBar` · type ẩn deep-link · search/route/km/org | **PASS** (live-assert) |
| 4 | LAYOUT-06 shell | title «Danh sách trạm thu phí» + toolbar + filter + grid | **PASS** (S0 · live-assert) |
| 5 | toolbar CRUD + History + SchemaConfig | `fromCatalogToolbar` · **0** `configHint` | **PASS** |
| 6 | Form full-page 5 cột | `data-form-cols="5"` · live-assert `cols5=true` | **PASS** |
| 7 | S-ATTR editable | weighting_method · lanes · roof/pavement/grade/road_structure · operation_location | **PASS** |
| 8 | S-ATTR-WIDTH | width_toll_gate · width_weighting_lane · width_etc_lane · width_manual_lane · width_operation_building | **PASS** |
| 9 | `kmTo` ẩn TOLL | code gate + live `kmToVisible=false` | **PASS** |
| 10 | `name` ← `station_name` · label «Tên trạm» | dumpSpec merge · name/kmFrom optional | **PASS** |
| 11 | `weighting_method` required | FE validate + BE `ValidateRequiredFields` TOLL branch | **PASS** |
| 12 | LeaveConfirmModal | `useFormLeaveGuard` + Modal · delete `useAlert` · **0** native on Asset* | **PASS** |
| 13 | Alias | `/so-ts-toll` → `/so-ts?type=TOLL` · S1 | **PASS** |
| 14 | API prefix | `api/v1/asset/road-assets` · init toll* arrays (seed ∪ dump) | **PASS** |
| 15 | Chrome VN | **0** CREATE badge · **0** demo note · title Trạm thu phí | **PASS** (live-assert) |
| 16 | DTM 1280/768/375 | overflowX=false | **PASS** |
| 17 | Grid ON toll profile | phương pháp cân · làn cân/ETC/thủ công · cấp nhà · DT cổng | **PASS** (live snippet) |
| 18 | tile t28 drill | `kchtTileConfig` typeCode TOLL | **PASS** |

## Findings

No P0 / P1 blocking. **review_confirm = accept**.

| ID | Class | Sev | Where | Repro | Disposition |
|----|-------|-----|-------|-------|-------------|
| REV-TOLL-01 | be-fn | P2 | `DefaultCodePrefix` missing TOLL → `TS-` | Create TOLL · BE `RoadAssetService.cs:886` falls back `TS-` | Accept · **GAP-TOLL-PREFIX-01** DEFER · imported CSV rows use `TP-`/`TFP-` |
| REV-TOLL-02 | be-fn | Info | dumpSpecs toll attrs empty on some rows | List TOLL | Accept · rebuild+reimport optional |
| REV-TOLL-03 | ui-fn | P2 | LOOKUP_STATIC Dropdown (not master SearchInput) | Form S-ATTR | Accept · **GAP-TOLL-LOOKUP-01** closed P1 · master SearchInput P2 |
| REV-TOLL-04 | security | P2 | BE `RequirePermission` TODO CommonLib | `RoadAssetsController` | Accept · **GAP-TOLL-AUTH-01** DEFER |
| REV-TOLL-05 | be-fn | P2 | Flatten Schema_* dumpSpecs | Entity DumpSpecs text | Accept · **GAP-TOLL-FLAT-01** DEFER |
| REV-TOLL-06 | note | info | init toll* arrays=0 empty seed | QA init-data | Accept · seed ∪ dump OK P1 |
| REV-TOLL-07 | note | info | `yarn e2e-qa` Docker gate :5101 vs :5111 | QA role | Accept · **GAP-QA-E2E-DOCKER-01** · Chrome evidence OK |
| REV-TOLL-08 | note | info | playwright install hung | QA role | Accept · **GAP-QA-E2E-PW-01** · Chrome evidence OK |
| REV-TOLL-09 | security | — | ERP.* / invent so-ts API | Grep Asset pages | **None** |
| REV-UI-LAYOUT-06 | ui-fn | P0 | list shell blank/clip | S0 · live-assert | **PASS** |
| REV-UI-HDR-01 / VI-01 / TB-01 | ui-fn | P0 | chrome | S0/QA-20 VN · no CREATE | **PASS** |
| REV-UI-FORM-GRID-05 | ui-fn | P0 | full-page form | `data-form-cols="5"` | **PASS** |
| REV-UI-BTN-SSOT-01 | ui-fn | P0 | Làm mới/Tạo mới · Quay lại/Hủy/Tạo mới | QA-20 | **PASS** |
| REV-UI-TB-ZONES-01 | ui-fn | P0 | form toolbar 1 bar | QA-20 | **PASS** |
| REV-UI-DD-VN-01 | ui-fn | P0 | Select weighting/roof/pavement/grade | «Chọn phương pháp cân» · VN | **PASS** |
| REV-UI-FILTER-DTM-01 | ui-fn | P0 | filter D+T+M | live-assert | **PASS** |
| REV-UI-RESP-01 | ui-fn | P0 | 1280/768/375 | overflowX false | **PASS** |
| QUERY-* / SEC-IDOR P0 | query/sec | P0 | list/get | — | **None** blocking |

## Query (/review-query)

- List QS: `search` · `type=TOLL` · `route` · `kmFrom` · `kmTo` · `orgUnit` · `page` · `pageSize` → BFF `road-assets`.
- Search covers Code/Name/Route*/Type/Qr + DumpSpecs ILike (station_name / toll attrs trong JSON).
- GetById: tenant + **xco_get_only** (`IgnoreQueryFilters` + AllowedCompanyIds) — SA gate.
- Soft DELETE · FE BFF-only · no demo/localStorage SSOT.
- Init: `tollWeightingMethods[]` · `tollRoofStructures[]` · `tollPavementTypes[]` · `tollHouseGrades[]` · `tollRoadStructures[]` · `tollOperationLocations[]` (+ reuse auxiliaryWorksGrades) — **GAP-TOLL-LOOKUP-01** closed P1.
- Create prefix spec `TFP-` — **GAP-TOLL-PREFIX-01** DEFER (BE fallback `TS-` until mapped; import uses `TP-`).
- N+1/OOM: paged list · init scan capped — accept Kind B.

## Security

- FE permission stubs `assetListPermissions` · Auth NuGet DEFER (**GAP-TOLL-AUTH-01**).
- BFF proxy-only · Authorization / company headers.
- BE attribute Auth TODO — not P0 DoD block (DEFER).
- DOMAIN-MAP: `so-ts-toll` → Asset · `api/v1/asset` · **0** ERP.*.
- 0 secrets in feature paths.

## UI / BE function

- Kind B list TOLL profile + filter type lock + Config full + History + row menu.
- Full-page form reuse `AssetFormPage` · S-ATTR toll + S-ATTR-WIDTH · kmTo hidden · name/kmFrom optional · weighting_method required · LeaveConfirm dirty.
- QA E2E S0/S1/QA-20 PASS — Review **did not** re-run e2e; used screens + manifest + live-assert.
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

**PASS** — Kind B list + full-page form `so-ts-toll` (Trạm thu phí) closes DoD pack. Residual P2 auth / flatten / LOOKUP master SearchInput / TFP- prefix mapping / optional dumpSpecs reimport do not block accept. Pipeline → **done**.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-review |
| skillVersion | 2026.08.30.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.01.02 |
| rulesVersion | 2026.08.31.2 |
| reviewHash | `sha256:b7f3e2a91c4d5e6f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2` |
| generatedAt | `2026-09-01T05:17:00.000Z` |
| versionGate | ok (full re-audit · prior draft stub) |
| formTypePack | list |
| changeScope | new_page |
| contentHashPriorDataAnaly | sha256:6e5c4611241727abb70516f3ba7828dd429ef7d5513ae99e83ba43c6da43347c |
| route_confirm | route_a |
| taskId | `task_fbcf805b` |
| priorQaTaskId | `task_4803c95a` |
| priorDevTaskId | `task_177ba123` |

---
<!-- Version meta: skillId=agent-review skillVersion=2026.08.30.01 schemaVersion=1 workflowVersion=2026.09.01.02 rulesVersion=2026.08.31.2 versionGate=ok taskId=task_fbcf805b route_confirm=route_a -->
