# Team lead — tasks — csdl-bieu-12 (edit_page · T-XLS-S12)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-12` |
| title | CSDL Biểu 12 — Xuất Excel (Wave 1 T-XLS-S12) |
| this role | `team_lead` · `/agent-team-lead` |
| status | **confirmed** |
| changeScope | **`edit_page`** |
| packKind | **`list`** (Kind **B** A–D+F keep · Kind **D** Slideout keep) |
| formType | `list` |
| resource | `green-assets` |
| formNo | `12` |
| columns | `15` · **2 section** khóm + thảm cỏ (**keep typed** · **cấm** reopen CRUD) |
| IdCode | `CX-yyyyMMdd-nnnn` (**keep**) |
| peerSoTs | — (**cấm** invent/merge so-ts-green · GAP-BIEU12-XLS-07) |
| epic | `csdl-export-print` · Wave 1 **`T-XLS-S12`** |
| solution_confirm | **approve** (`task_b183ffe0`) |
| design_confirm | **approve** (`task_5391dd50`) |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| route_confirm | **`route_a`** (keep · hub + alias `/csdl-bieu-12`) |
| team_lead_confirm | **approve** (autoApprove ON · XLS) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-12/ui/prototype/csdl-bieu-12-list-prototype.html` |
| prior · data_analy | **confirmed** · `handoff/data_analy-compact.md` · `task_619ea74c` |
| prior · po | **confirmed** · `po/requirement.md` · `handoff/po-compact.md` · `task_3c0db9bf` |
| prior · design | **confirmed** · `ui/design.md` · `handoff/design-compact.md` · `task_5391dd50` |
| prior · sa | **confirmed** · `be/solution-discovery.md` · `handoff/sa-compact.md` · `task_b183ffe0` |
| taskId | `task_f750c146` |
| saTaskId | `task_b183ffe0` |
| contentHashPrior | `sha256:f42502cee520105fb0a7f618c17b8b0f582884d7f779f638ec7310c26346e77a` |
| headerFingerprintPrior | `sha256:b6a541f8adc60a5badc72fc92c606631e5a1457fc119b9a6a546eb1f0acc437a` |
| updatedAt | `2026-09-18T00:45:00.000Z` |
| TL SSOT | `form-type-task-pack` · `agent-dev-assign` · `handoff-compact` · `list-form-quality-gates` · `filter-bar-layout-hard` · `po-design-grid-standard` · `/implement-export-import-excel` |

**Cấm:** implement product code (trừ template task) · e2e · `yarn build` / `start:std` · Step 4b/migration · ERP.* · invent `api/v1/so-ts/*` / `infra/*` · invent so-ts-green · start role khác (**GAP-PKT-ROLE-01**) · reopen typed new_page CRUD · toast stub = done · Xuất trên LinErpListFilterBar · 2-sheet invent · HTTP streaming P0 · Import wire P0 · golden hồ sơ 12+8.

---

## § Delta Current vs New (`edit_page` · T-XLS-S12)

| Area | Current (typed CRUD done) | New (Xuất Excel P0) | Action |
|------|---------------------------|---------------------|--------|
| Typed CRUD | shell + `Schema_CsdlBieu12` · 15/2 · Slideout · alias+hub | **keep** · **cấm** reopen | baseline done |
| Toolbar | Refresh/Add/History/Schema/CRUD · no peer | **+Xuất Excel** · Import **ẩn P1** | **T-XLS-S12-FE-01** · GAP-BIEU12-XLS-01 |
| Filter bar | LinErpListFilterBar | Unchanged · **cấm** nút Xuất | GAP-FILTER-BAR-08 / GAP-BIEU12-XLS-04 |
| Export | toast stub / missing | `GET …/export?resource=green-assets` binary `.xls` | **T-XLS-S12-BE-01** · GAP-BIEU12-XLS-05 |
| Filename | — | `Bieu12_CayXanh_{yyyyMMdd}.xls` | **T-XLS-S12-FE-02** · Q-XLS-FILENAME (SA `.xls`) |
| Scope | — | **filtered** QS · empty = all tenant resource | Q-XLS-SCOPE |
| Mode | — | **filter-all** · ignore `page`/`pageSize` · **cấm** streaming | GAP-BIEU12-XLS-08 |
| Layout | — | **1 sheet** 15 cols · khóm+cỏ cùng hàng | GAP-BIEU12-XLS-06 · **cấm** 2 sheet |
| Golden | — | Cục 16-sheet · sheet Biểu 12 · checksum **15** | GAP-BIEU12-XLS-03 · **cấm** 12+8 |
| Done gate | Typed CRUD | File mở được · **≠** toast stub | GAP-BIEU12-XLS-02 |
| Import | — | **DEFER P1** · export_only_p0 | **T-XLS-S12-BE-02 OUT** · Q-XLS-IMPORT |
| Peer | none | **cấm** invent/merge so-ts-green | GAP-BIEU12-XLS-07 |
| Entity/migration | Schema_CsdlBieu12 | **none** · keep | **cấm** migration @ XLS |
| BFF | proxy CRUD | proxy export binary | **T-XLS-S12-BFF-01** |

**Không đổi:** API prefix `api/v1/asset/csdl-records` · BFF proxy · soft-delete · pageSize · LeaveConfirm · filter-bar-layout-hard · IdCode `CX-` · route_a · Schema_CsdlBieu12 · **cấm** ERP.*.

---

## Source assignment

| Field | Value |
|-------|-------|
| `source.mfe` | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · `ui_repo_confirm` |
| `source.routes` | **`route_a` keep** — `/csdl-bieu-12` + hub `/so-ts/csdl-so-sach?resource=green-assets` |
| `mfeStdRoute` | `/so-ts/csdl-so-sach` · alias `/csdl-bieu-12` |
| `mfeStdUrl` | `http://localhost:9301/so-ts/csdl-so-sach` |
| `hubDeepLink` | `/so-ts/csdl-so-sach?resource=green-assets` |
| `peerStdUrl` | — (**cấm** invent) |
| `source.backend` | `D:/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` |
| `source.domain` | **Asset** (`asset`) · DOMAIN-MAP |
| `source.api` | `api/src/RMMS.Service.Api/Domains/Asset/` · `CsdlCatalogRecordsController` |
| `source.bff` | `bff/domains/asset/` · **proxy only** · stream binary |
| `source.layout` | `micro-src` |
| FE BASE | `/asset/csdl-records` (apiClient → BFF) |
| API prefix | **`api/v1/asset/csdl-records`** · **cấm** invent |
| catalogKind | `green-assets` (typed UiSchema keep) |
| entity | shell + `CsdlBieu12Entity` · **keep** · **no new migration** |
| `devSlash` (XLS) | **`/implement-export-import-excel`** · + `/agent-dev` · `/dev-ui-review` |
| `devSlash` (typed keep) | n/a — CRUD **done** · **cấm** reopen |

### Route confirm (keep · autoApprove)

| Option | Path | Decision |
|--------|------|----------|
| A | `/csdl-bieu-12` (+ hub) | **SELECTED keep** — `route_confirm=route_a` |
| B | hub-only | rejected (prior) |
| C | invent so-ts / infra | **cấm** |

---

## DES-GRID → Lin* map (XLS delta)

| Zone | Component / change |
|------|-------------------|
| DES-GRID-A | `LinPageLayout` keep |
| DES-GRID-B | `catalogToolbar` · **+Xuất Excel** (`exportExcel` · `fa-file-excel`) · Import **ẩn P1** · **no peer** |
| DES-GRID-C0/C1/FILTER | keep · **cấm** Xuất trên FilterBar |
| DES-GRID-C2/C2a/C3/D/F/H | keep typed |
| DES-GRID-Z | Slideout keep · **cấm** reopen form fields |
| S-XLS-EXPORT | toolbar action → GET export binary |
| S-XLS-IMPORT | hidden P1 |

---

## API contract (cite SA · XLS)

| id | Method | Path | Notes |
|----|--------|------|-------|
| API-01..05 | * | `/api/v1/asset/csdl-records…` | **keep** CRUD typed |
| API-XLS-01 | GET | `/api/v1/asset/csdl-records/export?resource=green-assets` + filter QS (**no page**) | binary `application/vnd.ms-excel` · Content-Disposition · filter-all |
| API-XLS-02 | POST | `/api/v1/asset/csdl-records/import?resource=green-assets` | **DEFER P1** · **cấm** P0 |

BFF mirror: `/web-bff/api/v1/asset/…` · **proxy only** · stream binary. Permissions: reuse `asset.csdl-records.read` (+ XCO list).

Gates (keep): `sa_tz_gate=tz_na` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant`.

### FormMode ↔ API (XLS)

| FormMode / action | Load | Save / export |
|-------------------|------|---------------|
| list / CRUD | keep | keep |
| **exportExcel** | filter QS hiện tại | GET export · download `.xls` · **≠** toast stub |

### Export filter query keys (ignore page)

`resource` · `search` · `province` · `status` · `roadCode` · `kmFrom`/`kmTo` · `side` · (**cấm** `page`/`pageSize` trên export)

### Header (15) SSOT export sheet

`code|roadCode|roadName|province|kmFrom|kmTo|side|oleanderClumps|ngauClumps|palmClumps|otherClumps|grassAreaM2|status|manageUnit|notes`

---

## System design checklist (XLS)

| ID | Value |
|----|-------|
| SD-JOB | n/a P0 |
| SD-BFF | **required** · proxy binary |
| SD-AUTH | reuse read · wire DEFER |
| SD-TOKEN | required (BFF) |
| SD-HEADER | required · X-Company-Id |
| SD-SPLIT | Asset ownership |
| SD-NO-JSON | **keep** shell+typed 1:1 · **cấm** invent parent JSON |
| SD-LIB-UI | Common.Components only |
| SD-LIB-BE | CommonLib envelope · **cấm** streaming P0 |
| SD-XLS | `/implement-export-import-excel` · golden Cục sheet Biểu 12 · checksum 15 |

---

## FormType pack — task matrix (`list` · edit_page XLS)

| Task id | Role | Status | deps | `devSlash` | Notes |
|---------|------|--------|------|------------|-------|
| T-XLS-S12-BE-01 | Dev | **pending** | — | `/implement-export-import-excel` | GET export binary · filter-all · 15 cols · 1 sheet · khóm+cỏ cùng hàng · `.xls` |
| T-XLS-S12-BFF-01 | Dev | **pending** | T-XLS-S12-BE-01 | `/implement-export-import-excel` | proxy export binary · no logic |
| T-XLS-S12-FE-01 | Dev | **pending** | T-XLS-S12-BFF-01 | `/implement-export-import-excel` | catalogToolbar Xuất · wire filter QS · **cấm** filter-bar · Import ẩn |
| T-XLS-S12-FE-02 | Dev | **pending** | T-XLS-S12-FE-01 | `/implement-export-import-excel` | download `Bieu12_CayXanh_{yyyyMMdd}.xls` · empty/fail toast · **cấm** stub done |
| T-XLS-S12-QA-01 | QA | **pending** | T-XLS-S12-FE-02 | `/agent-qa` | golden checksum 15 · filtered · 0-row · **cấm** import P0 |
| T-XLS-S12-BE-02 | — | **OUT / DEFER P1** | — | — | POST import · **cấm** P0 DoD |
| T-DM-01 … T-QA-* (typed) | — | **done** (prior) | — | — | **cấm** reopen new_page CRUD · keep baseline |

**SA id map:** T-XLS-S12-BE-01 · BFF-01 · FE-01/02 · QA-01 · BE-02 OUT P1 · GAP-BIEU12-XLS-01…08.

---

### T-XLS-S12-BE-01 — Export service

- `GET …/csdl-records/export?resource=green-assets` + filter QS · **ignore** page/pageSize.
- Binary `.xls` · 1 sheet · 15 header SSOT · khóm+cỏ cùng hàng · **cấm** 2 sheet · **cấm** hồ sơ 12+8.
- filter-all · tenant · soft-delete respect · service row cap · **cấm** HTTP streaming P0.
- Filename hint Content-Disposition `Bieu12_CayXanh_{yyyyMMdd}.xls`.
- DoD: file mở được · golden checksum 15 · **≠** toast stub · **cấm** ERP.* · **cấm** new entity/migration.

### T-XLS-S12-BFF-01 — BFF proxy binary

- Forward only · stream binary · path parity `/web-bff/api/v1/asset/csdl-records/export`.
- DoD: Content-Type / Disposition passthrough · no transform.

### T-XLS-S12-FE-01 — Toolbar Xuất

- `catalogToolbar` button Xuất Excel · `fa-file-excel` · zone DES-GRID-B / S-XLS-EXPORT.
- Pass current filter QS · **cấm** Xuất trên `LinErpListFilterBar`.
- Import button **ẩn** P1.
- DoD: click → GET export · **cấm** peer invent · **cấm** reopen typed form.

### T-XLS-S12-FE-02 — Download + errors

- Browser download `Bieu12_CayXanh_{yyyyMMdd}.xls`.
- Empty / fail → toast error/info · **cấm** toast stub = done (GAP-BIEU12-XLS-02).
- DoD: success = file saved/openable · fail ≠ silent success.

### T-XLS-S12-BE-02 — Import OUT P1

- `POST …/import` · **DEFER P1** · **cấm** P0 DoD / wire.

### T-XLS-S12-QA-01 (queued `/agent-qa*` only)

- Golden Cục sheet Biểu 12 · checksum 15 · filtered scope · 0-row file · **cấm** import P0.
- **Cấm** e2e ở TL/Dev.

---

## Inventory (slim · XLS)

| id | controlHint | notes |
|----|-------------|-------|
| exportExcel | ToolbarButton | catalogToolbar · P0 DoD |
| importExcel | ToolbarButton+file | DEFER P1 · ẩn |
| (form 15/2) | typed prior | **keep** · **cấm** reopen |

---

## Screens / zones (ids)

- S-LIST · S-XLS-EXPORT · S-XLS-IMPORT (hidden) · S-FORM-* keep · S-HUB-ENTRY · S-SKIP-PEER
- reviewUrl prototype · mfeStdUrl hub · alias `/csdl-bieu-12`

---

## Agent assign (`agent-dev-assign`)

| Lane | Slash | Scope |
|------|-------|-------|
| BE+XLS | `/implement-export-import-excel` | T-XLS-S12-BE-01 · BFF-01 |
| FE+XLS | `/implement-export-import-excel` | T-XLS-S12-FE-01 · FE-02 |
| UI review | `/dev-ui-review` | after FE DoD |
| QA | `/agent-qa` | T-XLS-S12-QA-01 · e2e only here |

**Parallel OK:** none required — BE → BFF → FE → QA.

---

## Quality gates (list-form · XLS)

| Gate | Expect |
|------|--------|
| Grid AC | YES keep |
| Leave | YES keep |
| Report AC | N/A |
| Filter HARD | V1–V5 keep · **cấm** export on filter bar |
| Form | Slideout keep · **cấm** reopen typed |
| Route | route_a keep · **no peer invent** |
| Persist | Schema_CsdlBieu12 keep · **no migration XLS** |
| Export | binary `.xls` · filter-all · 1 sheet 15 · **≠** toast stub |
| Import | DEFER P1 |
| API | keep `asset/csdl-records` · **cấm** ERP.* |

---

## Open questions

- **none** (Q-XLS-SCOPE filtered · Q-XLS-IMPORT export_only_p0 · Q-XLS-FILENAME `.xls` · Q-XLS-SHEET one_sheet · SA open Q closed · autoApprove)

## Next

| Role | Need |
|------|------|
| **Dev** | implement/csdl-bieu-12.md § XLS · T-XLS-S12-* · `/implement-export-import-excel` · **cấm** reopen typed CRUD |
| QA | scenarios + e2e T-XLS-S12-QA-01 queued `/agent-qa*` |
| Review | findings after QA XLS |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-team-lead |
| skillVersion | 2026.09.05.03 |
| workflowVersion | 2026.09.05.03 |
| rulesVersion | 2026.09.17.3 |
| packKind | list |
| changeScope | edit_page |
| route_confirm | route_a |
| team_lead_confirm | approve |
| writtenAt | 2026-09-18T00:45:00.000Z |
| contentHashPrior | sha256:f42502cee520105fb0a7f618c17b8b0f582884d7f779f638ec7310c26346e77a |
| headerFingerprintPrior | sha256:b6a541f8adc60a5badc72fc92c606631e5a1457fc119b9a6a546eb1f0acc437a |
| taskId | task_f750c146 |
| saTaskId | task_b183ffe0 |
| epic | T-XLS-S12 |
