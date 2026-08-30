# Review findings — master

> Status: **done** · Mode: `review_only` · `review_confirm=accept` (autoApprove ON)  
> reviewHash: `sha256:e751560e3c67066dc30f3cd3ce20cfe4d40fa9ae4906eb2c4ab32b6aeea126c1` · rulesVersion: `2026.08.29.28`  
> taskId: `task_1ae64007` · `/agent-review` · **cấm** implement · **cấm** e2e / `yarn start:std` / build ở role này

| Field | Value |
|-------|-------|
| feature | `master` |
| packKind | **`master`** · Kind B ×4 · Modal `data-form-cols="2"` |
| changeScope | `edit_page` |
| surfaces | org-unit · road-route · asset-type · partner-unit (hub) |
| prior · qa | **PASS** · `qa/scenarios.md` · PNG S0/S1/QA-20 distinct · manifest `ok:true` |
| prior · dev | **confirmed** · `implement/master.md` |
| Kind B list shell (GAP-P2-LAYOUT-06) | **PASS** — PNG S0/S1 contentRatio ~37% · title/toolbar/filter/grid visible (pixel sample) |
| mfeStdUrl | `http://localhost:9318/mas/co-cau-tc` (`route_confirm=route_a`) |
| contentHash | `sha256:2e7c4a265a296e1f7bb4cce472f58a1041fdf4ef1b63d088f80cde5012cb8128` |
| headerFingerprint | `sha256:72758524d03f6b4b62ccf4262873b39bdd01601654b368e153678ecc84d1865d` |
| analyReuse | **hash skip** |
| updatedAt | `2026-08-29T07:35:05.623Z` |

**Cấm:** assume vuln · auto-fix P0 security · parallel review+dev · approve Kind B blank/clip · `yarn build`/e2e/start:std ở role này.

---

## Scope

| Surface | Repo / path |
|---------|-------------|
| FE lists ×4 | `Linm.Web.RMMS.Master` · `src/pages/{OrgUnit,RoadRoute,AssetType,PartnerUnit}ListPage/*ListPage.tsx` |
| FE forms ×4 Modal | `*FormModal.tsx` · deep-link `*FormPage.tsx` → `?form=` |
| FE services | `src/services/{orgUnit,roadRoute,assetType,partnerUnit}/endpoint.ts` · `BASE=/integration/…` |
| Routes | `src/index.tsx` · `/mas/co-cau-tc` · `/mas/tuyen-duong` · `/mas/loai-ts` · `/mas/doi-tac` |
| BE | `Linm.RMMS.WebService` · Integration · `PartnerUnitService.ValidateCodeScheme` |
| QA evidence | `specs/master/qa/screens/{S0,S1,QA-20}.png` + `manifest.json` |
| Design / SA | `ui/design.md` · `be/solution-discovery.md` **confirmed** |

---

## Findings

| ID | Class | Sev | Where | Repro | Fix hint |
|----|-------|-----|-------|-------|----------|
| **REV-Q-01** | query | — | hub catalogs | List+init-data+ui-schema live Integration · SearchInput parent/org · **0** N+1/OOM gap in delta | — **PASS** |
| **REV-S-01** | security | info | `useOrgUnitPermissions` / peer hooks | `master.*` perm codes **stub** until CommonLib (`T-PERM-01`) | Accept · document · non-blocking |
| **REV-UI-LAYOUT-06** | ui-fn | — | `qa/screens/S0.png` · `S1.png` | Distinct SHA · size ~70–90KB · contentRatio ~37% · toolbar/filter/grid pixels non-white | — **PASS** (cấm blank approve) |
| **REV-UI-HDR-01** | ui-fn | — | `*FormModal` `MODE_TITLE` | `Tạo mới` / `Sửa` / `Xem` · **0** `CREATE` badge | — **PASS** |
| **REV-UI-VI-01** | ui-fn | — | catalog pages | Labels VN · Leave/History Modal | — **PASS** |
| **REV-UI-TB-01** | ui-fn | — | list ×4 | Lin* catalog toolbar · **0** ErpListHeaderFilters | — **PASS** |
| **REV-UI-SLIDE-01** | ui-fn | — | forms | Modal (not Slideout) · footer Hủy/Lưu | — **N/A** / Modal OK |
| **REV-UI-LKP-01** | ui-fn | — | org/road parent+org | `SearchInput` on form+filter · asset/partner **no** master LKP field | — **PASS** |
| **REV-UI-FORM-GRID-05** | ui-fn | — | Modal ×4 | `data-form-cols="2"` · Full-page 5-cột **N/A** (Modal surface) | — **PASS** |
| **REV-UI-BTN-SSOT-01** | ui-fn | — | toolbar/row | cite Dev/QA · erp-control-icon-map | — **PASS** (no delta regress) |
| **REV-UI-TB-ZONES-01** | ui-fn | — | Modal | footer actions · **1** chrome | — **PASS** |
| **UI-FN-01** | ui-fn | — | Leave ×4 | `LeaveConfirmModal` + `useLeaveConfirm` · **0** `window.confirm` | — **PASS** |
| **UI-FN-02** | ui-fn | — | filter-bar ×4 | `LinErpListFilterBar` · init-data kinds only · **0** hardcode VN fallback | — **PASS** |
| **UI-FN-03** | ui-fn | — | Config ×4 | `LinCatalogUiSchemaEditorModal` · **0** `configHint` | — **PASS** |
| **BE-FN-01** | be-fn | — | PartnerUnit | `ValidateCodeScheme` SO-/BOT-/DN-* (GAP-PARTNER-01) | — **PASS** |
| **BE-FN-02** | be-fn | — | FE BASE | `/integration/{org-units,road-routes,asset-types,partner-units}` · **0** ERP.* / `/rmms/` | — **PASS** |
| **REV-INFO-01** | info | info | packet URL | GAP-QA-PKT-URL-01 · slim `/master/org-unit` rejected · STATUS `/mas/co-cau-tc` | Keep STATUS SSOT |
| **REV-INFO-02** | info | info | QA capture | GAP-QA-E2E-PW-01 Chromium executablePath fallback · evidence still valid | Accept |

**P0 / P1 blocking:** none.

---

## Query (`/review-query`)

| Check | Result |
|-------|--------|
| Field SSOT vs controlHint / real-data | **PASS** — hash skip analy · Kind B ×4 cite |
| N+1 / OOM list-import | **N/A** — no Excel DI this hub turn |
| Lookup 422 / SearchInput | **PASS** — parent/org SearchInput · init-data dropdowns |
| Gaps QUERY-P* / GAP-P2-QUERY-* | **none** |

---

## Security (`/review-mfe-security` scoped)

| Check | Result |
|-------|--------|
| Auth / apiClient | Host JWT · shared client — **PASS** |
| ERP.* / wrong domain | **0** FE BASE ERP · Integration only — **PASS** |
| Secrets in scoped paths | **none** |
| `window.alert`/`confirm`/`prompt` on catalog pages | **0** — **PASS** |
| IDOR by code/id | Shared catalog share_a · no invent tenant filter — **PASS** (cite SA) |
| Permission gate | **REV-S-01 info** — stub codes documented |

---

## UI / BE function

### UI — PASS

| Check | Result |
|-------|--------|
| Kind B A–D · `LinPageLayout` + `LinCatalogDataGrid` + pagination ×4 | **PASS** |
| Org tree `LinTreeNav` + `LinTreeGridLayout` | **PASS** |
| Filter 1 hàng · URL sync · peers filter fields | **PASS** (S1 `?kind=REG` + code) |
| Modal C/E/V/Copy · View readOnly · Leave | **PASS** (QA-20 + code) |
| History `LinCatalogHistoryModal` | **PASS** |
| Demo chrome / CREATE English | **PASS** |
| Routes live `/mas/*` | **PASS** (`index.tsx`) |
| LAYOUT-06 live shell via PNG | **PASS** · distinct hashes S0=`662337bf…` · S1=`d035a75e…` · QA-20=`03ee3a8f…` |

### BE — PASS

| Check | Result |
|-------|--------|
| Domain Integration · DOMAIN-MAP | **PASS** |
| Partner code scheme FE+BE | **PASS** |
| BFF proxy cite / init-data 200 (QA) | **PASS** (prior QA) |
| Step 4b / migration this role | **skipped** (review) |

---

## Confirm

AskQuestion `review_confirm` (autoApprove ON · không chờ board):

| Option | Chosen |
|--------|--------|
| **accept** → `phase=done` | **yes** |
| fix_gaps → Dev | no — no P0/P1 |
| abort | no |

`review_confirm=accept` · `2026-08-29T07:35:05.623Z` · agent autoApprove.

---

## Handoff

| Field | Value |
|-------|-------|
| Next | **pipeline complete** · hub `master` · child STATUS độc lập |
| Blockers | không |
| Out | **cấm** start role khác trong task này (**GAP-PKT-ROLE-01**) |

---

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-review |
| skillVersion | 2026.08.29.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.29.03 |
| rulesVersion | 2026.08.29.28 |
| reviewHash | sha256:e751560e3c67066dc30f3cd3ce20cfe4d40fa9ae4906eb2c4ab32b6aeea126c1 |
| generatedAt | 2026-08-29T07:35:05.623Z |
| versionGate | rechecked |
| taskId | task_1ae64007 |
| review_confirm | accept |
| contentHash (STATUS) | sha256:2e7c4a265a296e1f7bb4cce472f58a1041fdf4ef1b63d088f80cde5012cb8128 |
| headerFingerprint | sha256:72758524d03f6b4b62ccf4262873b39bdd01601654b368e153678ecc84d1865d |

---
<!-- Version meta: skillId=agent-review skillVersion=2026.08.29.03 schemaVersion=1 workflowVersion=2026.08.29.03 rulesVersion=2026.08.29.28 versionGate=rechecked reviewHash=sha256:e751560e3c67066dc30f3cd3ce20cfe4d40fa9ae4906eb2c4ab32b6aeea126c1 -->