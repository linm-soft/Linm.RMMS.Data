# Review -- csdl-so-sach

| Field | Value |
|-------|-------|
| feature | `csdl-so-sach` |
| this role | `review` / `/agent-review` |
| mode | `review_only` |
| status | **confirmed** |
| review_confirm | **confirmed** (autoApprove=ON / accept / **0** fix_gaps) |
| changeScope | `edit_page` |
| packKind | `list` / Kind B catalog + Kind G hub |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/so-ts/csdl-so-sach` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` / `api/v1/asset/csdl-records` |
| BFF | `web-bff/api/v1/asset/csdl-records` |
| autoApprove | **ON** |
| e2eQa | **ON** (prior QA confirmed / FORBIDDEN e2e/start:std this role) |
| chain | **ON** / pipeline leaf / GAP-PKT-ROLE-01 |
| prior / qa | **confirmed** / `qa/scenarios.md` / `task_dc38e4de` / screens S0,S1,QA-20 PASS |
| prior / dev | **confirmed** / `implement/csdl-so-sach.md` / `task_92b7fce4` |
| taskId | `task_915baff1` |
| updatedAt | `2026-08-29T12:25:00.000Z` |

**Method:** static re-audit FE (`CsdlSoSachPage.tsx` / `CsdlFormSlideout.tsx` / `csdlService` / route `so-ts/csdl-so-sach`) + BE (`CsdlCatalogRecordsController` / BFF proxy) + DOMAIN-MAP + QA evidence (`qa/scenarios.md` / `qa/screens/{S0,S1,QA-20}.png` / `manifest.json` ok=true). **No** FE/BE write. **FORBIDDEN** yarn build / e2e / start:std (VERIFY GATE roleOnly=review). **FORBIDDEN** ERP.* / invent `so-ts` API prefix.

**Hash:** prior findings `task_f3691e8e` / route `/asset/...` / skill 2026.08.08 -- **stale** -> `version_mismatch_action=recheck_new` / full re-audit (no SKIP).

## SSOT surface (live code + QA evidence)

| # | Gate | Live | Verdict |
|---|------|------|---------|
| 1 | 1x `LinPageLayout` kind=catalog / no nested `CatalogListShell` | List: 1x kind=catalog / 0 CatalogListShell | **PASS** |
| 2 | `LinCatalogDataGrid` + schema columns | `buildDynamicGridColumns` + `catalogListTableConfigFromSchema` | **PASS** |
| 3 | Footer always `LinCatalogListPagination` | Footer slot / no footerPagination/pageSizeBar | **PASS** |
| 4 | LAYOUT-06 shell | `data-catalog-list-page` / flex page / skeletonRows=8 / QA S1 list visible | **PASS** |
| 5 | toolbar CRUD + History + SchemaConfig | `fromCatalogToolbar` Add/Edit/View/Delete/History/Config | **PASS** |
| 6 | filter-bar 1:1 | `LinErpListFilterBar` / SearchText + province/status/date + road `SearchInput` | **PASS** |
| Form | Slideout Z1-Z3 footer-only / data-form-cols=2 / View readOnly / LeaveConfirm | `CsdlFormSlideout` / MODE_TITLE VN / customFooter Huy/Luu | **PASS** |
| Hub | 12 bieu + 8 so / KPI / title VN / 0 slug-only meta | CSDL_RESOURCES/SO_RESOURCES / titleOf / cardMeta count | **PASS** |
| Prefix | `api/v1/asset/csdl-records` / no api/v1/rmms/* / no ERP.* | Controller + BFF + FE /asset/csdl-records | **PASS** |
| Lookup | road SearchInput / enum PROVINCES/STATUSES/SIDES | ROAD_ROUTE_LOOKUP_CONFIG / store enums | **PASS** |
| Deep-link | ?resource=&form= strip form/id | useSearchParams | **PASS** |
| FormType ACT | Toolbar + row menu C/E/V/Copy/Delete | buildCatalogRowMenuItems + deleteRow/useAlert | **PASS** |
| Chrome | VN UI / 0 CREATE badge / 0 window.alert/confirm / 0 demo note | QA-CH-* + code | **PASS** |
| Route | /so-ts/csdl-so-sach (route_a) | index.tsx Route + devRoutes | **PASS** |

## Findings

No P0 / P1 blocking. **review_confirm = accept**.

| ID | Class | Sev | Where | Repro | Disposition |
|----|-------|-----|-------|-------|-------------|
| REV-CSDL-01 | be-fn | Info | Polymorphic CsdlCatalogRecord + child CsdlBookEntry | Schema pack | Accept P1 / split tables later |
| REV-CSDL-02 | ui-fn | P1 debt | History LinCatalogHistoryModal / API real optional | Open modal | Accept / GAP-CSDL-HIST-01 open optional |
| REV-CSDL-03 | security | P2 | BE RequirePermission TODO CommonLib | Controller comments | Accept / GAP-CSDL-AUTH-01 DEFER |
| REV-CSDL-04 | ui-fn | -- | Hub slug meta | Prior REV | **CLOSED** (QA GAP-QA-HUB-SLUG / title VN) |
| REV-CSDL-05 | note | note | So Col1-Col3 report | Out of pack | GAP-RPT-SRC-CSDL-01 DEFER |
| REV-CSDL-06 | ui-fn | -- | Delete window.confirm | Prior finding | **CLOSED** / live useAlert.confirm / 0 native dialog |
| REV-CSDL-07 | security | -- | ERP.* / parent JSON / Domains/Master | Grep FE/BE | **None** |
| REV-UI-LAYOUT-06 | ui-fn | P0 | list shell blank/clip | QA S1 + code shell | **PASS** |
| REV-UI-HDR-01 / VI-01 / TB-01 / SLIDE-01 | ui-fn | P0 | chrome | QA-20 + code | **PASS** |
| REV-UI-LKP-01 | ui-fn | P0 | road SearchInput | filter+form | **PASS** (GAP-CSDL-ROAD-01 CLOSED) |
| REV-UI-FORM-GRID-05 | ui-fn | P0 | slideout cols | data-form-cols=2 | **PASS** (slideout / not full-page 5) |
| REV-UI-BTN-SSOT-01 | ui-fn | P0 | Huy/Luu icon+title | footer buttons | **PASS** |
| QUERY-* / SEC-IDOR P0 | query/sec | P0 | list/get | -- | **None** blocking |

## Query (/review-query)

- List QS: resource,search,province,status,fromDate,toDate,roadName,page,pageSize / 422 when missing resource.
- GetById: 404 missing / 403 ForbiddenAccessException.
- Soft DELETE on API. FE service live BFF only -- no demo/localStorage fallback.
- N+1/OOM: paged list + entries embed on get -- accept Kind B catalog.

## Security

- FE permission: rmms-asset:csdl-records:read|write (permissions.ts).
- BFF forwards X-Company-Id + Authorization / proxy-only.
- BE attribute Auth debt (GAP-CSDL-AUTH-01) -- not P0 DoD block (DEFER SA/QA).
- DOMAIN-MAP: csdl-so-sach -> Asset / asset.
- 0 secrets in feature paths / 0 ERP.* imports on CSDL page/service.

## UI / BE function

- Hub Kind G + list Kind B / filter 1 row / slideout create/edit/view/copy / LeaveConfirm dirty / Config full schema editor / History modal wired.
- QA E2E S0/S1/QA-20 PASS (prior role) -- Review did not re-run e2e; used screens + manifest.
- Verify typecheck/build: PASS at QA (task_dc38e4de) -- Review did not re-run yarn build.

## Gates

| Gate | Result |
|------|--------|
| Design prototype + reviewUrl | confirmed |
| SA solution | confirmed / api/v1/asset/csdl-records |
| be_repo / ui_repo | Linm.RMMS.WebService / Linm.Web.RMMS.Asset |
| FormType ACT / T-BE-CRUD / T-QA-* | **PASS** (QA confirmed) |
| SSOT list shell / LAYOUT-06 | **PASS** |
| VERIFY yarn build this role | n/a / FORBIDDEN (roleOnly=review) / prior QA PASS |
| BE write this role | n/a -- review_only |
| review_confirm | **confirmed** / accept |

## Confirm

review_confirm = **confirmed** -- autoApprove=ON / **accept** (no fix_gaps / no abort).

## Verdict

**PASS** -- Kind G hub + Kind B list csdl-so-sach closes DoD pack. Residual P2 auth / optional history API / report Col1-Col3 do not block accept. Pipeline -> **done**.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-review |
| skillVersion | 2026.08.29.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.29.03 |
| rulesVersion | 2026.08.29.31 |
| reviewHash | `sha256:5fab4c5f2fd8c3ae1f675183eed79022` |
| generatedAt | 2026-08-29T12:25:00.000Z |
| versionGate | ok (recheck_new / prior findings stale) |
| formTypePack | list |
| changeScope | edit_page |
| contentHashPriorDataAnaly | sha256:e13a39df3b06c9b08f1ef4f197b6b0e76e3d7863b1e6fffe42a196a22bb1faad |
| route_confirm | route_a |
| taskId | `task_915baff1` |
| priorQaTaskId | `task_dc38e4de` |
| priorDevTaskId | `task_92b7fce4` |

---
<!-- Version meta: skillId=agent-review skillVersion=2026.08.29.03 schemaVersion=1 workflowVersion=2026.08.29.03 rulesVersion=2026.08.29.31 versionGate=ok taskId=task_915baff1 route_confirm=route_a -->
