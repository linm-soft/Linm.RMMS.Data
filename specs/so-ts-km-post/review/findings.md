# Review — Findings — so-ts-km-post

| Field | Value |
|-------|-------|
| feature | `so-ts-km-post` |
| title | Sổ TS — Cột Km |
| this role | `review` · `/agent-review` |
| mode | `review_only` |
| status | **confirmed** |
| review_confirm | **confirmed** (autoApprove=ON · **accept** · **0** fix_gaps) |
| changeScope | `edit_page` |
| packKind | `list` · Kind B catalog + full-page form `data-form-cols="5"` |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/so-ts?type=KM_POST` · alias `/so-ts-km-post` |
| mfeStdUrl | `http://localhost:9301/so-ts?type=KM_POST` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/asset/road-assets` |
| BFF | `web-bff/api/v1/asset/road-assets` |
| autoApprove | **ON** |
| e2eQa | **ON** (prior QA confirmed · **FORBIDDEN** e2e/start:std this role) |
| chain | **ON** · pipeline leaf · **GAP-PKT-ROLE-01** |
| prior · qa | **confirmed** · `qa/scenarios.md` · `task_2197869b` · S0/S1/QA-20 PASS |
| prior · dev | **confirmed** · `implement/so-ts-km-post.md` · `task_86ca8f12` |
| taskId | `task_26236089` |
| updatedAt | `2026-08-31T20:40:00.000Z` |

**Method:** static re-audit FE (`AssetListPage.tsx` · `AssetFormPage.tsx` · `index.tsx` alias · lookups) + BE (`RoadAssetsController` · `RoadAssetService.GetInitDataAsync` Materials · DTO) + DOMAIN-MAP Asset + QA evidence (`qa/scenarios.md` · `qa/screens/{S0,S1,QA-20}.png` · `manifest.json` ok · `live-assert.json` DTM). **No** FE/BE write. **FORBIDDEN** yarn build / e2e / start:std (VERIFY GATE roleOnly=review). **FORBIDDEN** ERP.* / invent `api/v1/so-ts/*`.

**Hash:** draft stub `autoCreated` · **no prior done findings** → `versionGate=ok` · full re-audit (no SKIP).

## SSOT surface (live code + QA evidence)

| # | Gate | Live | Verdict |
|---|------|------|---------|
| 1 | 1× `LinPageLayout` kind=catalog · `data-catalog-list-page` | `AssetListPage` · 0 nested CatalogListShell | **PASS** |
| 2 | `LinCatalogDataGrid` + schema columns | `buildDynamicGridColumns` + KM_POST profile | **PASS** |
| 3 | KM_POST COL profile | hide `type`/`kmTo`/`quantity`/`unitCode` · ensure `distance_next_post`/`materials_id` | **PASS** (code + S0 headers) |
| 4 | Footer `LinCatalogListPagination` | footer slot · Tổng 22043 | **PASS** |
| 5 | LAYOUT-06 shell | title+toolbar+filter+grid visible · S0 | **PASS** |
| 6 | toolbar CRUD + History + SchemaConfig | `fromCatalogToolbar` · `LinCatalogUiSchemaEditorModal` · **0** `configHint` | **PASS** |
| 7 | filter-bar 1:1 | `LinErpListFilterBar` · type **ẩn** khi deep-link KM_POST · search/route/org/kmFrom/kmTo | **PASS** |
| 8 | Form full-page 5 cột | `data-form-cols="5"` · QA-20 + live-assert `cols5=true` | **PASS** |
| 9 | S-ATTR editable | `asset-km-post-attr` · distance Number · materials Select · dumpSpecs merge | **PASS** |
| 10 | `kmTo` ẩn KM_POST | `form.type !== KM_POST` gate · live `kmToVisible=false` | **PASS** |
| 11 | Label «Tên cột Km» · `name_km_post` mirror | `updateKmPostName` | **PASS** |
| 12 | LeaveConfirmModal | `useFormLeaveGuard` + `LeaveConfirmModal` · delete `useAlert.confirm` · **0** native dialog | **PASS** |
| 13 | Route alias | `/so-ts-km-post` → `/so-ts?type=KM_POST` · S1 | **PASS** |
| 14 | API prefix | `api/v1/asset/road-assets` · init Materials · **0** ERP.* | **PASS** |
| 15 | Chrome VN | title «Sổ TS — Cột Km» · **0** CREATE badge · **0** demo note | **PASS** |
| 16 | DTM 1280/768/375 | `live-assert.json` overflowX=false | **PASS** |

## Findings

No P0 / P1 blocking. **review_confirm = accept**.

| ID | Class | Sev | Where | Repro | Disposition |
|----|-------|-----|-------|-------|-------------|
| REV-KM-01 | be-fn | Info | dumpSpecs materials/distance empty on many rows (S0 `—`) | List KM_POST | Accept · rebuild+reimport optional (Dev/QA debt) |
| REV-KM-02 | ui-fn | P2 | Materials LOOKUP_STATIC Dropdown (not master SearchInput) | Form S-ATTR | Accept · P2 master SearchInput later |
| REV-KM-03 | security | P2 | BE `RequirePermission` TODO CommonLib | `RoadAssetsController` | Accept · **GAP-KM-AUTH-01** DEFER |
| REV-KM-04 | be-fn | P2 | Flatten Schema_* dumpSpecs | Entity DumpSpecs text | Accept · **GAP-KM-FLAT-01** DEFER |
| REV-KM-05 | note | info | `yarn e2e-qa` playwright install hung | QA role | Accept · **GAP-QA-E2E-PW-01** · Chrome channel evidence OK |
| REV-KM-06 | security | — | ERP.* / invent so-ts API | Grep FE Asset pages | **None** |
| REV-UI-LAYOUT-06 | ui-fn | P0 | list shell blank/clip | S0 title+grid | **PASS** |
| REV-UI-HDR-01 / VI-01 / TB-01 | ui-fn | P0 | chrome | S0/QA-20 VN · no CREATE | **PASS** |
| REV-UI-FORM-GRID-05 | ui-fn | P0 | full-page form | `data-form-cols="5"` | **PASS** |
| REV-UI-BTN-SSOT-01 | ui-fn | P0 | Làm mới/Tạo mới · Quay lại/Hủy/Tạo mới | QA-20 toolbar | **PASS** |
| REV-UI-TB-ZONES-01 | ui-fn | P0 | form toolbar 1 bar | QA-20 Quay lại \| Hủy+Tạo mới | **PASS** |
| REV-UI-DD-VN-01 | ui-fn | P0 | Select materials/status | «Chọn vật liệu» · «Chọn tình trạng» | **PASS** |
| REV-UI-FILTER-DTM-01 | ui-fn | P0 | filter D+T+M | live-assert DTM | **PASS** |
| REV-UI-RESP-01 | ui-fn | P0 | 1280/768/375 | overflowX false | **PASS** |
| QUERY-* / SEC-IDOR P0 | query/sec | P0 | list/get | — | **None** blocking |

## Query (/review-query)

- List QS: `search` · `type` (lock KM_POST) · `route` · `kmFrom` · `kmTo` · `orgUnit` · `page` · `pageSize` → BFF `road-assets`.
- GetById: tenant filter + **xco_get_only** (`IgnoreQueryFilters` + AllowedCompanyIds) — SA gate.
- Soft DELETE on API. FE `assetService` BFF-only — no demo/localStorage fallback.
- Init: `GET …/init-data` returns `materials[]` (dump distinct ∪ seed) — **GAP-KM-MAT-01** closed P1.
- N+1/OOM: paged list · dumpSpecs parse capped Take(8000) on materials scan — accept Kind B.

## Security

- FE permission stubs via `assetListPermissions` · Auth NuGet DEFER (**GAP-KM-AUTH-01**).
- BFF proxy-only · forwards Authorization / company headers.
- BE attribute Auth TODO — not P0 DoD block (DEFER).
- DOMAIN-MAP: parent `asset` → Asset · prefix `api/v1/asset` · feature inherits (optional slug row later).
- 0 secrets in feature paths · 0 ERP.* on Asset list/form.

## UI / BE function

- Kind B list KM_POST profile + filter type lock + Config full schema editor + History modal + row menu C/E/V/Copy/Delete/History.
- Full-page form reuse `AssetFormPage` · S-ATTR materials/distance · kmTo hidden · LeaveConfirm dirty.
- QA E2E S0/S1/QA-20 PASS (prior role) — Review did **not** re-run e2e; used screens + manifest + live-assert.
- Verify typecheck/build: PASS at QA (`task_2197869b`) — Review did **not** re-run yarn build.

## Gates

| Gate | Result |
|------|--------|
| Design prototype + reviewUrl | confirmed |
| SA solution | confirmed · `api/v1/asset/road-assets` · tz_na · xco_get_only · share_tenant |
| be_repo / ui_repo | `Linm.RMMS.WebService` / `Linm.Web.RMMS.Asset` |
| FormType ACT / T-BE-CRUD / T-QA-* | **PASS** (QA confirmed) |
| SSOT list shell / LAYOUT-06 | **PASS** |
| VERIFY yarn build this role | n/a · FORBIDDEN (roleOnly=review) · prior QA PASS |
| BE write this role | n/a — review_only |
| review_confirm | **confirmed** · accept |

## Confirm

review_confirm = **confirmed** — autoApprove=ON · **accept** (no fix_gaps / no abort).

## Verdict

**PASS** — Kind B list + full-page form `so-ts-km-post` (Cột Km) closes DoD pack. Residual P2 auth / flatten / materials master SearchInput / optional dumpSpecs reimport do not block accept. Pipeline → **done**.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-review |
| skillVersion | 2026.08.30.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.30.01 |
| rulesVersion | 2026.08.31.2 |
| reviewHash | `sha256:27b13ec0f638d569eba2e68d2827ae13657a6c4e7c08bbc057e08f83d653cd1e` |
| generatedAt | `2026-08-31T20:40:00.000Z` |
| versionGate | ok (full re-audit · prior draft stub) |
| formTypePack | list |
| changeScope | edit_page |
| contentHashPriorDataAnaly | sha256:3a11d776482d57eebc6be1ed1a101e42525ea576986a8e8f7a49ef00b542e9fc |
| route_confirm | route_a |
| taskId | `task_26236089` |
| priorQaTaskId | `task_2197869b` |
| priorDevTaskId | `task_86ca8f12` |

---
<!-- Version meta: skillId=agent-review skillVersion=2026.08.30.01 schemaVersion=1 workflowVersion=2026.08.30.01 rulesVersion=2026.08.31.2 versionGate=ok taskId=task_26236089 route_confirm=route_a -->
