# Review — Findings — so-ts-bus-station

| Field | Value |
|-------|-------|
| feature | `so-ts-bus-station` |
| title | Sổ TS — Bến xe |
| this role | `review` · `/agent-review` |
| mode | `review_only` |
| status | **confirmed** |
| review_confirm | **confirmed** (autoApprove=ON · **accept** · **0** fix_gaps) |
| changeScope | `new_page` |
| packKind | `list` · Kind B catalog + full-page form `data-form-cols="5"` |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/so-ts?type=BUS_STATION` · alias `/so-ts-bus-station` |
| mfeStdUrl | `http://localhost:9301/so-ts?type=BUS_STATION` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/asset/road-assets` |
| BFF | `web-bff/api/v1/asset/road-assets` |
| autoApprove | **ON** |
| e2eQa | **ON** (prior QA confirmed · **FORBIDDEN** e2e/start:std this role) |
| chain | **ON** · pipeline leaf · **GAP-PKT-ROLE-01** |
| prior · qa | **confirmed** · `qa/scenarios.md` · `task_1e5afef0` · S0/S1/QA-20 PASS |
| prior · dev | **confirmed** · `implement/so-ts-bus-station.md` · `task_adc64d49` |
| taskId | `task_bc87303f` |
| updatedAt | `2026-09-01T04:05:00.000Z` |

**Method:** static re-audit FE (`AssetListPage.tsx` BUS_STATION profile · `AssetFormPage.tsx` S-ATTR · `index.tsx` alias · dumpSpecLabels) + BE (`RoadAssetService` init busStation*[] · BX- prefix · BUS_STATION validate name/kmFrom optional · type_work_id required) + DOMAIN-MAP Asset + QA evidence (`qa/scenarios.md` · `qa/screens/{S0,S1,QA-20}.png` · `manifest.json` ok · `live-assert.json` DTM). **No** FE/BE write. **FORBIDDEN** yarn build / e2e / start:std. **FORBIDDEN** ERP.* / invent `api/v1/so-ts/*`.

**Hash:** draft stub `autoCreated` · **no prior done findings** → `versionGate=ok` · full re-audit (no SKIP).

## SSOT surface (code + QA evidence)

| # | Gate | Live | Verdict |
|---|------|------|---------|
| 1 | 1× `LinPageLayout` catalog · list testid | `rmms-so-ts-bus-station-list-page` | **PASS** |
| 2 | `LinCatalogDataGrid` + BUS_STATION cols | hide type/kmTo/qty/unit · ensure bus-station attrs | **PASS** |
| 3 | filter-bar | `LinErpListFilterBar` · type ẩn deep-link · search/route/km/org | **PASS** (live-assert) |
| 4 | LAYOUT-06 shell | title «Danh sách bến xe» + toolbar + filter + grid | **PASS** (S0 · live-assert) |
| 5 | toolbar CRUD + History + SchemaConfig | `fromCatalogToolbar` · **0** `configHint` | **PASS** |
| 6 | Form full-page 5 cột | `data-form-cols="5"` · live-assert `cols5=true` | **PASS** |
| 7 | S-ATTR editable | type_work/owner/site_area/main_route/total_floors/building_grade/build_location/classification | **PASS** |
| 8 | `kmTo` ẩn BUS_STATION | code gate + live `kmToVisible=false` | **PASS** |
| 9 | `name` ← `name_terminal` · label «Tên bến» | `nameKmOptional` · dumpSpec merge | **PASS** |
| 10 | LeaveConfirmModal | `useFormLeaveGuard` + Modal · delete `useAlert` · **0** native on Asset* | **PASS** |
| 11 | Alias | `/so-ts-bus-station` → `/so-ts?type=BUS_STATION` · S1 | **PASS** |
| 12 | API prefix | `api/v1/asset/road-assets` · init busStation* arrays (seed ∪ dump) | **PASS** |
| 13 | Chrome VN | **0** CREATE badge · **0** demo note · title Bến xe | **PASS** (live-assert) |
| 14 | DTM 1280/768/375 | overflowX=false | **PASS** |

## Findings

No P0 / P1 blocking. **review_confirm = accept**.

| ID | Class | Sev | Where | Repro | Disposition |
|----|-------|-----|-------|-------|-------------|
| REV-BX-01 | be-fn | Info | dumpSpecs bus-station attrs empty on some rows | List BUS_STATION | Accept · rebuild+reimport optional |
| REV-BX-02 | ui-fn | P2 | LOOKUP_STATIC Dropdown (not master SearchInput) | Form S-ATTR | Accept · P2 later |
| REV-BX-03 | security | P2 | BE `RequirePermission` TODO CommonLib | `RoadAssetsController` | Accept · **GAP-BX-AUTH-01** DEFER |
| REV-BX-04 | be-fn | P2 | Flatten Schema_* dumpSpecs | Entity DumpSpecs text | Accept · **GAP-BX-FLAT-01** DEFER |
| REV-BX-05 | note | info | init busStation* arrays=0 empty seed | QA init-data | Accept · **GAP-BX-LOOKUP-01** closed P1 · seed OK |
| REV-BX-06 | note | info | `yarn e2e-qa` Docker gate :5101 vs :5111 | QA role | Accept · **GAP-QA-E2E-DOCKER-01** · Chrome evidence OK |
| REV-BX-07 | note | info | playwright install hung | QA role | Accept · **GAP-QA-E2E-PW-01** · Chrome evidence OK |
| REV-BX-08 | security | — | ERP.* / invent so-ts API | Grep Asset pages | **None** |
| REV-UI-LAYOUT-06 | ui-fn | P0 | list shell blank/clip | S0 · live-assert | **PASS** |
| REV-UI-HDR-01 / VI-01 / TB-01 | ui-fn | P0 | chrome | S0/QA-20 VN · no CREATE | **PASS** |
| REV-UI-FORM-GRID-05 | ui-fn | P0 | full-page form | `data-form-cols="5"` | **PASS** |
| REV-UI-BTN-SSOT-01 | ui-fn | P0 | Làm mới/Tạo mới · Quay lại/Hủy/Tạo mới | QA-20 | **PASS** |
| REV-UI-TB-ZONES-01 | ui-fn | P0 | form toolbar 1 bar | QA-20 | **PASS** |
| REV-UI-DD-VN-01 | ui-fn | P0 | Select type_work/owner/building_grade | «Chọn loại tài sản» · VN | **PASS** |
| REV-UI-FILTER-DTM-01 | ui-fn | P0 | filter D+T+M | live-assert | **PASS** |
| REV-UI-RESP-01 | ui-fn | P0 | 1280/768/375 | overflowX false | **PASS** |
| QUERY-* / SEC-IDOR P0 | query/sec | P0 | list/get | — | **None** blocking |

## Query (/review-query)

- List QS: `search` · `type=BUS_STATION` · `route` · `kmFrom` · `kmTo` · `orgUnit` · `page` · `pageSize` → BFF `road-assets`.
- Search covers Code/Name/Route*/Type/Qr + DumpSpecs ILike (name_terminal / bus-station attrs trong JSON).
- GetById: tenant + **xco_get_only** (`IgnoreQueryFilters` + AllowedCompanyIds) — SA gate.
- Soft DELETE · FE BFF-only · no demo/localStorage SSOT.
- Init: `busStationWorkTypes[]` · `busStationOwners[]` · `busStationBuildingGrades[]` · `busStationBuildLocations[]` · `busStationClassifications[]` (dump distinct ∪ seed · Take 8000) — **GAP-BX-LOOKUP-01** closed P1.
- Create prefix `BX-` when type=BUS_STATION.
- N+1/OOM: paged list · init scan capped — accept Kind B.

## Security

- FE permission stubs `assetListPermissions` · Auth NuGet DEFER (**GAP-BX-AUTH-01**).
- BFF proxy-only · Authorization / company headers.
- BE attribute Auth TODO — not P0 DoD block (DEFER).
- DOMAIN-MAP: `so-ts-bus-station` → Asset · `api/v1/asset` · **0** ERP.*.
- 0 secrets in feature paths.

## UI / BE function

- Kind B list BUS_STATION profile + filter type lock + Config full + History + row menu.
- Full-page form reuse `AssetFormPage` · S-ATTR bus-station · kmTo hidden · name/kmFrom optional · type_work_id required · LeaveConfirm dirty.
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

**PASS** — Kind B list + full-page form `so-ts-bus-station` (Bến xe) closes DoD pack. Residual P2 auth / flatten / LOOKUP master SearchInput / optional dumpSpecs reimport do not block accept. Pipeline → **done**.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-review |
| skillVersion | 2026.08.30.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.01.02 |
| rulesVersion | 2026.08.31.2 |
| reviewHash | `sha256:a643e78b2dce67a47099b74549459c9952699dcbd101a7eefeba891de9643fc0` |
| generatedAt | `2026-09-01T04:05:00.000Z` |
| versionGate | ok (full re-audit · prior draft stub) |
| formTypePack | list |
| changeScope | new_page |
| contentHashPriorDataAnaly | sha256:e163077d4f1e16605d699be6e6c518273e794d50ffa7c0ce79379e92c70d98dd |
| route_confirm | route_a |
| taskId | `task_bc87303f` |
| priorQaTaskId | `task_1e5afef0` |
| priorDevTaskId | `task_adc64d49` |

---
<!-- Version meta: skillId=agent-review skillVersion=2026.08.30.01 schemaVersion=1 workflowVersion=2026.09.01.02 rulesVersion=2026.08.31.2 versionGate=ok taskId=task_bc87303f route_confirm=route_a -->
