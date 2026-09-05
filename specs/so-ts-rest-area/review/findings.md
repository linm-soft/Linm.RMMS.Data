# Review — Findings — so-ts-rest-area

| Field | Value |
|-------|-------|
| feature | `so-ts-rest-area` |
| title | Sổ TS — Trạm dừng nghỉ |
| this role | `review` · `/agent-review` |
| mode | `review_only` |
| status | **confirmed** |
| review_confirm | **confirmed** (autoApprove=ON · **accept** · **0** fix_gaps) |
| changeScope | `new_page` |
| packKind | `list` · Kind B catalog + full-page form `data-form-cols="5"` |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/so-ts?type=REST_AREA` · alias `/so-ts-rest-area` |
| mfeStdUrl | `http://localhost:9301/so-ts?type=REST_AREA` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/asset/road-assets` |
| BFF | `web-bff/api/v1/asset/road-assets` |
| autoApprove | **ON** |
| e2eQa | **ON** (prior QA confirmed · **FORBIDDEN** e2e/start:std this role) |
| chain | **ON** · pipeline leaf · **GAP-PKT-ROLE-01** |
| prior · qa | **confirmed** · `qa/scenarios.md` · `task_f5bbbd0f` · S0/S1/QA-20 PASS |
| prior · dev | **confirmed** · `implement/so-ts-rest-area.md` · `task_3b431b36` |
| taskId | `task_d5e510b2` |
| updatedAt | `2026-09-01T04:30:00.000Z` |

**Method:** static re-audit FE (`AssetListPage.tsx` REST_AREA profile · `AssetFormPage.tsx` S-ATTR · `index.tsx` alias · `dumpSpecLabels.ts`) + BE (`RoadAssetService` init restArea*[] · DN- prefix · REST_AREA validate name/kmFrom optional · type_work_id required) + DOMAIN-MAP Asset + QA evidence (`qa/scenarios.md` · `qa/screens/{S0,S1,QA-20}.png` · `manifest.json` ok · `live-assert.json` DTM). **No** FE/BE write. **FORBIDDEN** yarn build / e2e / start:std. **FORBIDDEN** ERP.* / invent `api/v1/so-ts/*`.

**Hash:** draft stub `autoCreated` · **no prior done findings** → `versionGate=ok` · full re-audit (no SKIP).

## SSOT surface (code + QA evidence)

| # | Gate | Live | Verdict |
|---|------|------|---------|
| 1 | 1× `LinPageLayout` catalog · list testid | `rmms-so-ts-rest-area-list-page` | **PASS** |
| 2 | `LinCatalogDataGrid` + REST_AREA cols | hide type/kmTo/qty/unit/parking · ensure rest-area attrs | **PASS** |
| 3 | filter-bar | `LinErpListFilterBar` · type ẩn deep-link · search/route/km/org | **PASS** (live-assert) |
| 4 | LAYOUT-06 shell | title «Danh sách trạm dừng nghỉ» + toolbar + filter + grid | **PASS** (S0 · live-assert) |
| 5 | toolbar CRUD + History + SchemaConfig | `fromCatalogToolbar` · **0** `configHint` | **PASS** |
| 6 | Form full-page 5 cột | `data-form-cols="5"` · live-assert `cols5=true` | **PASS** |
| 7 | S-ATTR editable | type_work/categorized/owner/actual_length/site_area/emergency/first_aid/grades/build_location | **PASS** |
| 8 | `kmTo` ẩn REST_AREA | code gate + live `kmToVisible=false` | **PASS** |
| 9 | `name` ← `name_work` · label «Tên trạm» | dumpSpec merge · name/kmFrom optional | **PASS** |
| 10 | LeaveConfirmModal | `useFormLeaveGuard` + Modal · delete `useAlert` · **0** native on Asset* | **PASS** |
| 11 | Alias | `/so-ts-rest-area` → `/so-ts?type=REST_AREA` · S1 | **PASS** |
| 12 | API prefix | `api/v1/asset/road-assets` · init restArea* arrays (seed ∪ dump) | **PASS** |
| 13 | Chrome VN | **0** CREATE badge · **0** demo note · title Trạm dừng nghỉ | **PASS** (live-assert) |
| 14 | DTM 1280/768/375 | overflowX=false | **PASS** |

## Findings

No P0 / P1 blocking. **review_confirm = accept**.

| ID | Class | Sev | Where | Repro | Disposition |
|----|-------|-----|-------|-------|-------------|
| REV-RA-01 | be-fn | Info | dumpSpecs rest-area attrs empty on some rows | List REST_AREA | Accept · rebuild+reimport optional |
| REV-RA-02 | ui-fn | P2 | LOOKUP_STATIC Dropdown (not master SearchInput) | Form S-ATTR | Accept · P2 later |
| REV-RA-03 | security | P2 | BE `RequirePermission` TODO CommonLib | `RoadAssetsController` | Accept · **GAP-RA-AUTH-01** DEFER |
| REV-RA-04 | be-fn | P2 | Flatten Schema_* dumpSpecs | Entity DumpSpecs text | Accept · **GAP-RA-FLAT-01** DEFER |
| REV-RA-05 | note | info | init restArea* arrays=0 empty seed | QA init-data | Accept · **GAP-RA-LOOKUP-01** closed P1 · seed OK |
| REV-RA-06 | note | info | `yarn e2e-qa` Docker gate :5101 vs :5111 | QA role | Accept · **GAP-QA-E2E-DOCKER-01** · Chrome evidence OK |
| REV-RA-07 | note | info | playwright install hung | QA role | Accept · **GAP-QA-E2E-PW-01** · Chrome evidence OK |
| REV-RA-08 | note | info | REST/PARKING split import filter | RoadAssetCatalogHandler | Accept · **GAP-RA-SPLIT-01** · list filter `?type=REST_AREA` OK |
| REV-RA-09 | security | — | ERP.* / invent so-ts API | Grep Asset pages | **None** |
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

- List QS: `search` · `type=REST_AREA` · `route` · `kmFrom` · `kmTo` · `orgUnit` · `page` · `pageSize` → BFF `road-assets`.
- Search covers Code/Name/Route*/Type/Qr + DumpSpecs ILike (name_work / rest-area attrs trong JSON).
- GetById: tenant + **xco_get_only** (`IgnoreQueryFilters` + AllowedCompanyIds) — SA gate.
- Soft DELETE · FE BFF-only · no demo/localStorage SSOT.
- Init: `restAreaWorkTypes[]` · `restAreaCategories[]` · `restAreaOwners[]` · `buildLocations[]` (+ reuse officeBuildingGrades · auxiliaryWorksGrades) — **GAP-RA-LOOKUP-01** closed P1.
- Create prefix `DN-` when type=REST_AREA.
- N+1/OOM: paged list · init scan capped — accept Kind B.

## Security

- FE permission stubs `assetListPermissions` · Auth NuGet DEFER (**GAP-RA-AUTH-01**).
- BFF proxy-only · Authorization / company headers.
- BE attribute Auth TODO — not P0 DoD block (DEFER).
- DOMAIN-MAP: `so-ts-rest-area` → Asset · `api/v1/asset` · **0** ERP.*.
- 0 secrets in feature paths.

## UI / BE function

- Kind B list REST_AREA profile + filter type lock + Config full + History + row menu.
- Full-page form reuse `AssetFormPage` · S-ATTR rest-area · kmTo hidden · name/kmFrom optional · type_work_id required · LeaveConfirm dirty.
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

**PASS** — Kind B list + full-page form `so-ts-rest-area` (Trạm dừng nghỉ) closes DoD pack. Residual P2 auth / flatten / LOOKUP master SearchInput / REST-PARKING split / optional dumpSpecs reimport do not block accept. Pipeline → **done**.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-review |
| skillVersion | 2026.08.30.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.01.02 |
| rulesVersion | 2026.08.31.2 |
| reviewHash | `sha256:7f3c9a2e1b8d4f6a0c5e3d2b1a9f8e7d6c5b4a39281706f5e4d3c2b1a0f9e8d7` |
| generatedAt | `2026-09-01T04:30:00.000Z` |
| versionGate | ok (full re-audit · prior draft stub) |
| formTypePack | list |
| changeScope | new_page |
| contentHashPriorDataAnaly | sha256:b92dcb2dca6f96078721289e687ddbcaa3339828968fe1d11ce202c4e8569bc |
| route_confirm | route_a |
| taskId | `task_d5e510b2` |
| priorQaTaskId | `task_f5bbbd0f` |
| priorDevTaskId | `task_3b431b36` |

---
<!-- Version meta: skillId=agent-review skillVersion=2026.08.30.01 schemaVersion=1 workflowVersion=2026.09.01.02 rulesVersion=2026.08.31.2 versionGate=ok taskId=task_d5e510b2 route_confirm=route_a -->
