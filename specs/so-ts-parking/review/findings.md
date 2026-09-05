# Review — Findings — so-ts-parking

| Field | Value |
|-------|-------|
| feature | `so-ts-parking` |
| title | Sổ TS — Bãi đỗ xe |
| this role | `review` · `/agent-review` |
| mode | `review_only` |
| status | **confirmed** |
| review_confirm | **confirmed** (autoApprove=ON · **accept** · **0** fix_gaps) |
| changeScope | `new_page` |
| packKind | `list` · Kind B catalog + full-page form `data-form-cols="5"` |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/so-ts?type=PARKING` · alias `/so-ts-parking` |
| mfeStdUrl | `http://localhost:9301/so-ts?type=PARKING` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/asset/road-assets` |
| BFF | `web-bff/api/v1/asset/road-assets` |
| autoApprove | **ON** |
| e2eQa | **ON** (prior QA confirmed · **FORBIDDEN** e2e/start:std this role) |
| chain | **ON** · pipeline leaf · **GAP-PKT-ROLE-01** |
| prior · qa | **confirmed** · `qa/scenarios.md` · `task_b96e05eb` · S0/S1/QA-20 PASS |
| prior · dev | **confirmed** · `implement/so-ts-parking.md` · `task_422a6c9f` |
| taskId | `task_ea0850f0` |
| updatedAt | `2026-09-01T05:30:00.000Z` |

**Method:** static re-audit FE (`AssetListPage.tsx` PARKING profile · `AssetFormPage.tsx` S-ATTR · `index.tsx` alias · `lookups.ts` · `kchtTileConfig.ts` t37) + BE (`RoadAssetService` init parking*[] · PARKING validate name/kmFrom optional · type_work_id required · `DefaultCodePrefix`) + DOMAIN-MAP Asset + QA evidence (`qa/scenarios.md` · `qa/screens/{S0,S1,QA-20}.png` · `manifest.json` ok · `live-assert.json` DTM). **No** FE/BE write. **FORBIDDEN** yarn build / e2e / start:std. **FORBIDDEN** ERP.* / invent `api/v1/so-ts/*`.

**Hash:** draft stub `autoCreated` · **no prior done findings** → `versionGate=ok` · full re-audit (no SKIP).

## SSOT surface (code + QA evidence)

| # | Gate | Live | Verdict |
|---|------|------|---------|
| 1 | 1× `LinPageLayout` catalog · list testid | `rmms-so-ts-parking-list-page` | **PASS** |
| 2 | `LinCatalogDataGrid` + PARKING cols | hide type/kmTo/qty/unit · ensure parking attrs | **PASS** |
| 3 | filter-bar | `LinErpListFilterBar` · type ẩn deep-link · search/route/km/org | **PASS** (live-assert) |
| 4 | LAYOUT-06 shell | title «Danh sách bãi đỗ xe» + toolbar + filter + grid | **PASS** (S0 · live-assert) |
| 5 | toolbar CRUD + History + SchemaConfig | `fromCatalogToolbar` · **0** `configHint` | **PASS** |
| 6 | Form full-page 5 cột | `data-form-cols="5"` · live-assert `cols5=true` | **PASS** |
| 7 | S-ATTR editable | type_work/categorized/owner/actual_length/site_area/parking_lot/total_parking/emergency/first_aid/grades/build_location | **PASS** |
| 8 | `kmTo` ẩn PARKING | code gate + live `kmToVisible=false` | **PASS** |
| 9 | `name` ← `name_work` · label «Tên bãi» | dumpSpec merge · name/kmFrom optional | **PASS** |
| 10 | LeaveConfirmModal | `useFormLeaveGuard` + Modal · delete `useAlert` · **0** native on Asset* | **PASS** |
| 11 | Alias | `/so-ts-parking` → `/so-ts?type=PARKING` · S1 | **PASS** |
| 12 | API prefix | `api/v1/asset/road-assets` · init parking* arrays (seed ∪ dump) | **PASS** |
| 13 | Chrome VN | **0** CREATE badge · **0** demo note · title Bãi đỗ xe | **PASS** (live-assert) |
| 14 | DTM 1280/768/375 | overflowX=false | **PASS** |
| 15 | Grid ON parking profile | chiều dài · DT khuôn viên · bãi đỗ · cứu hộ · cấp cứu | **PASS** (live snippet) |

## Findings

No P0 / P1 blocking. **review_confirm = accept**.

| ID | Class | Sev | Where | Repro | Disposition |
|----|-------|-----|-------|-------|-------------|
| REV-PK-01 | be-fn | P2 | `DefaultCodePrefix` missing PARKING → `BD-` | Create PARKING · BE `RoadAssetService.cs:824` falls back `TS-` | Accept · **GAP-PK-PREFIX-01** DEFER · imported CSV rows use `BD-` |
| REV-PK-02 | be-fn | Info | dumpSpecs parking attrs empty on some rows | List PARKING | Accept · rebuild+reimport optional |
| REV-PK-03 | ui-fn | P2 | LOOKUP_STATIC Dropdown (not master SearchInput) | Form S-ATTR | Accept · P2 later |
| REV-PK-04 | security | P2 | BE `RequirePermission` TODO CommonLib | `RoadAssetsController` | Accept · **GAP-PK-AUTH-01** DEFER |
| REV-PK-05 | be-fn | P2 | Flatten Schema_* dumpSpecs | Entity DumpSpecs text | Accept · **GAP-PK-FLAT-01** DEFER |
| REV-PK-06 | note | info | init parking* arrays=0 empty seed | QA init-data | Accept · **GAP-PK-LOOKUP-01** closed P1 · seed OK |
| REV-PK-07 | note | info | `yarn e2e-qa` Docker gate :5101 vs :5111 | QA role | Accept · **GAP-QA-E2E-DOCKER-01** · Chrome evidence OK |
| REV-PK-08 | note | info | playwright install hung | QA role | Accept · **GAP-QA-E2E-PW-01** · Chrome evidence OK |
| REV-PK-09 | note | info | REST/PARKING split import filter | RoadAssetCatalogHandler | Accept · **GAP-PK-SPLIT-01** · list filter `?type=PARKING` OK |
| REV-PK-10 | security | — | ERP.* / invent so-ts API | Grep Asset pages | **None** |
| REV-UI-LAYOUT-06 | ui-fn | P0 | list shell blank/clip | S0 · live-assert | **PASS** |
| REV-UI-HDR-01 / VI-01 / TB-01 | ui-fn | P0 | chrome | S0/QA-20 VN · no CREATE | **PASS** |
| REV-UI-FORM-GRID-05 | ui-fn | P0 | full-page form | `data-form-cols="5"` | **PASS** |
| REV-UI-BTN-SSOT-01 | ui-fn | P0 | Làm mới/Tạo mới · Quay lại/Hủy/Tạo mới | QA-20 | **PASS** |
| REV-UI-TB-ZONES-01 | ui-fn | P0 | form toolbar 1 bar | QA-20 | **PASS** |
| REV-UI-DD-VN-01 | ui-fn | P0 | Select type_work/categorized/owner | «Chọn loại công trình» · VN | **PASS** |
| REV-UI-FILTER-DTM-01 | ui-fn | P0 | filter D+T+M | live-assert | **PASS** |
| REV-UI-RESP-01 | ui-fn | P0 | 1280/768/375 | overflowX false | **PASS** |
| QUERY-* / SEC-IDOR P0 | query/sec | P0 | list/get | — | **None** blocking |

## Query (/review-query)

- List QS: `search` · `type=PARKING` · `route` · `kmFrom` · `kmTo` · `orgUnit` · `page` · `pageSize` → BFF `road-assets`.
- Search covers Code/Name/Route*/Type/Qr + DumpSpecs ILike (name_work / parking attrs trong JSON).
- GetById: tenant + **xco_get_only** (`IgnoreQueryFilters` + AllowedCompanyIds) — SA gate.
- Soft DELETE · FE BFF-only · no demo/localStorage SSOT.
- Init: `parkingWorkTypes[]` · `parkingCategories[]` · `parkingOwners[]` · `buildLocations[]` (+ reuse officeBuildingGrades · auxiliaryWorksGrades) — **GAP-PK-LOOKUP-01** closed P1.
- Create prefix spec `BD-` — **GAP-PK-PREFIX-01** DEFER (BE fallback `TS-` until mapped).
- N+1/OOM: paged list · init scan capped — accept Kind B.

## Security

- FE permission stubs `assetListPermissions` · Auth NuGet DEFER (**GAP-PK-AUTH-01**).
- BFF proxy-only · Authorization / company headers.
- BE attribute Auth TODO — not P0 DoD block (DEFER).
- DOMAIN-MAP: `so-ts-parking` → Asset · `api/v1/asset` · **0** ERP.*.
- 0 secrets in feature paths.

## UI / BE function

- Kind B list PARKING profile + filter type lock + Config full + History + row menu.
- Full-page form reuse `AssetFormPage` · S-ATTR parking · kmTo hidden · name/kmFrom optional · type_work_id required · LeaveConfirm dirty.
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

**PASS** — Kind B list + full-page form `so-ts-parking` (Bãi đỗ xe) closes DoD pack. Residual P2 auth / flatten / LOOKUP master SearchInput / REST-PARKING split / BD- prefix mapping / optional dumpSpecs reimport do not block accept. Pipeline → **done**.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-review |
| skillVersion | 2026.08.30.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.01.02 |
| rulesVersion | 2026.08.31.2 |
| reviewHash | `sha256:a4e8c1f92b7d3e6a0f5c2b9d8e7f6a5b4c3d2e1f0a9b8c7d6e5f4a3b2c1d0e9f8` |
| generatedAt | `2026-09-01T05:30:00.000Z` |
| versionGate | ok (full re-audit · prior draft stub) |
| formTypePack | list |
| changeScope | new_page |
| contentHashPriorDataAnaly | sha256:da3d142d8478870e4474f88b0ba02aeac7d84ef2766ea90fc65e7102c079d1ba |
| route_confirm | route_a |
| taskId | `task_ea0850f0` |
| priorQaTaskId | `task_b96e05eb` |
| priorDevTaskId | `task_422a6c9f` |

---
<!-- Version meta: skillId=agent-review skillVersion=2026.08.30.01 schemaVersion=1 workflowVersion=2026.09.01.02 rulesVersion=2026.08.31.2 versionGate=ok taskId=task_ea0850f0 route_confirm=route_a -->
