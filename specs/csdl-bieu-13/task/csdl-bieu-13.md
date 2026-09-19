# Team lead — tasks — csdl-bieu-13 (edit_page · T-XLS-S13)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-13` |
| title | CSDL Biểu 13 — Xuất Excel (Wave 1 T-XLS-S13) |
| this role | `team_lead` · `/agent-team-lead` |
| status | **confirmed** |
| changeScope | **`edit_page`** |
| packKind | **`list`** (Kind **B** A–D+F keep · Kind **D** Slideout keep · section kích thước) |
| formType | `list` |
| resource | `noise-barriers` |
| formNo | `13` |
| columns | `13` · section vị trí + kích thước (**keep typed** · **cấm** reopen CRUD) |
| IdCode | `TC-yyyyMMdd-nnnn` (**keep**) |
| peerSoTs | `so-ts-noise-barrier` · cite only · **cấm** merge · GAP-BIEU13-XLS-07 |
| dim | lengthM/heightM/areaM2 flat · **cùng hàng** export · **cấm** dim sheet |
| epic | `csdl-export-print` · Wave 1 **`T-XLS-S13`** |
| solution_confirm | **approve** (`task_51c2f1f4`) |
| design_confirm | **approve** (`task_82008258`) |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| route_confirm | **`route_a`** (keep · hub + alias `/csdl-bieu-13`) |
| team_lead_confirm | **approve** (autoApprove ON · XLS) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-13/ui/prototype/csdl-bieu-13-list-prototype.html` |
| prior · data_analy | **confirmed** · `handoff/data_analy-compact.md` · `task_4fec1f3f` |
| prior · po | **confirmed** · `po/requirement.md` · `handoff/po-compact.md` · `task_0a8bfa5d` |
| prior · design | **confirmed** · `ui/design.md` · `handoff/design-compact.md` · `task_82008258` |
| prior · sa | **confirmed** · `be/solution-discovery.md` · `handoff/sa-compact.md` · `task_51c2f1f4` |
| priorTyped TL | `task_a0486d94` · **keep** baseline · **cấm** reopen |
| taskId | `task_6af52a22` |
| saTaskId | `task_51c2f1f4` |
| contentHashPrior | `sha256:800386bb8f86bfcc815b9c7d3a6dc246dc58b0a95b5132a317c5a094d0b4194f` |
| headerFingerprintPrior | `sha256:31dbc83200b511c9d61333b1cdb94e2880778980a3b21970be414e926db29008` |
| updatedAt | `2026-09-18T01:35:00.000Z` |
| TL SSOT | `form-type-task-pack` · `agent-dev-assign` · `handoff-compact` · `list-form-quality-gates` · `filter-bar-layout-hard` · `po-design-grid-standard` · `/implement-export-import-excel` |

**Cấm:** implement product code (trừ template task) · e2e · `yarn build` / `start:std` · Step 4b/migration · ERP.* · invent `api/v1/so-ts/*` / `infra/*` · merge `so-ts-noise-barrier` / `road-assets` · start role khác (**GAP-PKT-ROLE-01**) · reopen typed new_page CRUD · toast stub = done · Xuất trên LinErpListFilterBar · invent dim sheet · HTTP streaming P0 · Import wire P0 · golden hồ sơ 12+8.

---

## § Delta Current vs New (`edit_page` · T-XLS-S13)

| Area | Current (typed CRUD done) | New (Xuất Excel P0) | Action |
|------|---------------------------|---------------------|--------|
| Typed CRUD | shell + `Schema_CsdlBieu13` · 13 · Slideout · alias+hub | **keep** · **cấm** reopen | baseline done |
| Toolbar | Refresh/Add/History/Schema/CRUD · peer cite | **+Xuất Excel** · Import **ẩn P1** | **T-XLS-S13-FE-01** · GAP-BIEU13-XLS-01 |
| Filter bar | LinErpListFilterBar | Unchanged · **cấm** nút Xuất | GAP-FILTER-BAR-08 / GAP-BIEU13-XLS-04 |
| Export | toast stub / missing | `GET …/export?resource=noise-barriers` binary `.xls` | **T-XLS-S13-BE-01** · GAP-BIEU13-XLS-05 |
| Filename | — | `Bieu13_TuongChongOn_{yyyyMMdd}.xls` | **T-XLS-S13-FE-02** · Q-XLS-FILENAME (SA `.xls`) |
| Scope | — | **filtered** QS · empty = all tenant resource | Q-XLS-SCOPE |
| Mode | — | **filter-all** · ignore `page`/`pageSize` · **cấm** streaming | GAP-BIEU13-XLS-08 |
| Layout | — | **1 sheet** 13 cols · dài/cao/DT cùng hàng | GAP-BIEU13-XLS-06 · **cấm** dim sheet |
| Golden | — | Cục 16-sheet · sheet Biểu 13 · checksum **13** | GAP-BIEU13-XLS-03 · **cấm** 12+8 |
| Done gate | Typed CRUD | File mở được · **≠** toast stub | GAP-BIEU13-XLS-02 |
| Import | — | **DEFER P1** · export_only_p0 | **T-XLS-S13-BE-02 OUT** · Q-XLS-IMPORT |
| Peer | so-ts-noise-barrier cite | **cấm** merge vào export / toolbar P0 | GAP-BIEU13-XLS-07 |
| Entity/migration | Schema_CsdlBieu13 | **none** · keep | **cấm** migration @ XLS |
| BFF | proxy CRUD | proxy export binary | **T-XLS-S13-BFF-01** |

**Không đổi:** API prefix `api/v1/asset/csdl-records` · BFF proxy · soft-delete · pageSize · LeaveConfirm · filter-bar-layout-hard · IdCode `TC-` · route_a · Schema_CsdlBieu13 · **cấm** ERP.*.

---

## Source assignment

| Field | Value |
|-------|-------|
| `source.mfe` | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · `ui_repo_confirm` |
| `source.routes` | **`route_a` keep** — `/csdl-bieu-13` + hub `/so-ts/csdl-so-sach?resource=noise-barriers` |
| `mfeStdRoute` | `/so-ts/csdl-so-sach` · alias `/csdl-bieu-13` |
| `mfeStdUrl` | `http://localhost:9301/so-ts/csdl-so-sach` |
| `hubDeepLink` | `/so-ts/csdl-so-sach?resource=noise-barriers` |
| `peerStdUrl` | cite only `so-ts-noise-barrier` · **cấm** merge |
| `source.backend` | `D:/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` |
| `source.domain` | **Asset** (`asset`) · DOMAIN-MAP |
| `source.api` | `api/src/RMMS.Service.Api/Domains/Asset/` · `CsdlCatalogRecordsController` |
| `source.bff` | `bff/domains/asset/` · **proxy only** · stream binary |
| `source.layout` | `micro-src` |
| FE BASE | `/asset/csdl-records` (apiClient → BFF) |
| API prefix | **`api/v1/asset/csdl-records`** · **cấm** invent |
| catalogKind | `noise-barriers` (typed UiSchema keep) |
| entity | shell + `CsdlBieu13Entity` · **keep** · **no new migration** |
| `devSlash` (XLS) | **`/implement-export-import-excel`** · + `/agent-dev` · `/dev-ui-review` |
| `devSlash` (typed keep) | n/a — CRUD **done** · **cấm** reopen |

### Route confirm (keep · autoApprove)

| Option | Path | Decision |
|--------|------|----------|
| A | `/csdl-bieu-13` (+ hub) | **SELECTED keep** — `route_confirm=route_a` |
| B | hub-only | rejected (prior) |
| C | invent so-ts / infra / merge peer | **cấm** |

---

## DES-GRID → Lin* map (XLS delta)

| Zone | Component / change |
|------|-------------------|
| DES-GRID-A | `LinPageLayout` keep · title «Biểu 13 — Tường chống ồn» |
| DES-GRID-B | `catalogToolbar` · **+Xuất Excel** (`exportExcel` · `fa-file-excel`) · Import **ẩn P1** · peer cite only · **cấm** merge |
| DES-GRID-C0/C1/FILTER | keep · **cấm** Xuất trên FilterBar |
| DES-GRID-C2/C2a/C3/D/F/H | keep typed |
| DES-GRID-Z | Slideout keep · section kích thước · **cấm** reopen form fields |
| S-XLS-EXPORT | toolbar action → GET export binary |
| S-XLS-IMPORT | hidden P1 |

---

## API contract (cite SA · XLS)

| id | Method | Path | Notes |
|----|--------|------|-------|
| API-01..05 | * | `/api/v1/asset/csdl-records…` | **keep** CRUD typed |
| API-XLS-01 | GET | `/api/v1/asset/csdl-records/export?resource=noise-barriers` + filter QS (**no page**) | binary `application/vnd.ms-excel` · Content-Disposition · filter-all |
| API-XLS-02 | POST | `/api/v1/asset/csdl-records/import?resource=noise-barriers` | **DEFER P1** · **cấm** P0 |

BFF mirror: `/web-bff/api/v1/asset/…` · **proxy only** · stream binary. Permissions: reuse `asset.csdl-records.read` (+ XCO list).

Gates (keep): `sa_tz_gate=tz_na` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant`.

### FormMode ↔ API (XLS)

| FormMode / action | Load | Save / export |
|-------------------|------|---------------|
| list / CRUD | keep | keep |
| **exportExcel** | filter QS hiện tại | GET export · download `.xls` · **≠** toast stub |

### Export filter query keys (ignore page)

`resource` · `search` · `province` · `status` · `roadCode` · `kmFrom`/`kmTo` · `side` · (**cấm** `page`/`pageSize` trên export)

### Header (13) SSOT export sheet

`code|roadCode|roadName|province|kmFrom|kmTo|side|lengthM|heightM|areaM2|status|manageUnit|notes`

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
| SD-XLS | `/implement-export-import-excel` · golden Cục sheet Biểu 13 · checksum 13 |

---

## FormType pack — task matrix (`list` · edit_page XLS)

| Task id | Role | Status | deps | `devSlash` | Notes |
|---------|------|--------|------|------------|-------|
| T-XLS-S13-BE-01 | Dev | **done** | — | `/implement-export-import-excel` | GET export binary · filter-all · 13 cols · 1 sheet · dài/cao/DT cùng hàng · `.xls` |
| T-XLS-S13-BFF-01 | Dev | **done** | T-XLS-S13-BE-01 | `/implement-export-import-excel` | proxy export binary · no logic |
| T-XLS-S13-FE-01 | Dev | **done** | T-XLS-S13-BFF-01 | `/implement-export-import-excel` | catalogToolbar Xuất · wire filter QS · **cấm** filter-bar · Import ẩn · **cấm** merge peer |
| T-XLS-S13-FE-02 | Dev | **done** | T-XLS-S13-FE-01 | `/implement-export-import-excel` | download `Bieu13_TuongChongOn_{yyyyMMdd}.xls` · empty/fail toast · **cấm** stub done |
| T-XLS-S13-QA-01 | QA | **pending** | T-XLS-S13-FE-02 | `/agent-qa` | golden checksum 13 · filtered · 0-row · **cấm** import P0 |
| T-XLS-S13-BE-02 | — | **OUT / DEFER P1** | — | — | POST import · **cấm** P0 DoD |
| T-DM-01 … T-QA-* (typed) | — | **done** (prior) | — | — | **cấm** reopen new_page CRUD · keep baseline |

**SA id map:** T-XLS-S13-BE-01 · BFF-01 · FE-01/02 · QA-01 · BE-02 OUT P1 · GAP-BIEU13-XLS-01…08.

---

### T-XLS-S13-BE-01 — Export service

- `GET …/csdl-records/export?resource=noise-barriers` + filter QS · **ignore** page/pageSize.
- Binary `.xls` · 1 sheet · 13 header SSOT · lengthM/heightM/areaM2 cùng hàng · **cấm** dim sheet · **cấm** hồ sơ 12+8.
- filter-all · tenant · soft-delete respect · service row cap · **cấm** HTTP streaming P0.
- Filename hint Content-Disposition `Bieu13_TuongChongOn_{yyyyMMdd}.xls`.
- **Cấm** merge `so-ts-noise-barrier` / `road-assets` vào export rows.
- DoD: file mở được · golden checksum 13 · **≠** toast stub · **cấm** ERP.* · **cấm** new entity/migration.

### T-XLS-S13-BFF-01 — BFF proxy binary

- Forward only · stream binary · path parity `/web-bff/api/v1/asset/csdl-records/export`.
- DoD: Content-Type / Disposition passthrough · no transform.

### T-XLS-S13-FE-01 — Toolbar Xuất

- `catalogToolbar` button Xuất Excel · `fa-file-excel` · zone DES-GRID-B / S-XLS-EXPORT.
- Pass current filter QS · **cấm** Xuất trên `LinErpListFilterBar`.
- Import button **ẩn** P1 · peer cite only · **cấm** merge toolbar.
- DoD: click → GET export · **cấm** reopen typed form.

### T-XLS-S13-FE-02 — Download + errors

- Browser download `Bieu13_TuongChongOn_{yyyyMMdd}.xls`.
- Empty / fail → toast error/info · **cấm** toast stub = done (GAP-BIEU13-XLS-02).
- DoD: success = file saved/openable · fail ≠ silent success.

### T-XLS-S13-BE-02 — Import OUT P1

- `POST …/import` · **DEFER P1** · **cấm** P0 DoD / wire.

### T-XLS-S13-QA-01 (queued `/agent-qa*` only)

- Golden Cục sheet Biểu 13 · checksum 13 · filtered scope · 0-row file · **cấm** import P0.
- **Cấm** e2e ở TL/Dev.

---

## Inventory (slim · XLS)

| id | controlHint | notes |
|----|-------------|-------|
| exportExcel | ToolbarButton | catalogToolbar · P0 DoD |
| importExcel | ToolbarButton+file | DEFER P1 · ẩn |
| (form 13) | typed prior | **keep** · **cấm** reopen |

---

## Screens / zones (ids)

- S-LIST · S-XLS-EXPORT · S-XLS-IMPORT (hidden) · S-FORM-* keep · S-HUB-ENTRY · S-SKIP-PEER (cite only)
- reviewUrl prototype · mfeStdUrl hub · alias `/csdl-bieu-13`

---

## Agent assign (`agent-dev-assign`)

| Lane | Slash | Scope |
|------|-------|-------|
| BE+XLS | `/implement-export-import-excel` | T-XLS-S13-BE-01 · BFF-01 |
| FE+XLS | `/implement-export-import-excel` | T-XLS-S13-FE-01 · FE-02 |
| UI review | `/dev-ui-review` | after FE DoD |
| QA | `/agent-qa` | T-XLS-S13-QA-01 · e2e only here |

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
| Route | route_a keep · peer cite only · **cấm** merge |
| Persist | Schema_CsdlBieu13 keep · **no migration XLS** |
| Export | binary `.xls` · filter-all · 1 sheet 13 · **≠** toast stub |
| Import | DEFER P1 |
| API | keep `asset/csdl-records` · **cấm** ERP.* |

---

## Open questions

- **none** (Q-XLS-SCOPE filtered · Q-XLS-IMPORT export_only_p0 · Q-XLS-FILENAME `.xls` · Q-XLS-SHEET one_sheet · SA open Q closed · autoApprove)

## Next

| Role | Need |
|------|------|
| **Dev** | implement/csdl-bieu-13.md § XLS · T-XLS-S13-* · `/implement-export-import-excel` · **cấm** reopen typed CRUD |
| QA | scenarios + e2e T-XLS-S13-QA-01 queued `/agent-qa*` |
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
| writtenAt | 2026-09-18T01:35:00.000Z |
| contentHashPrior | sha256:800386bb8f86bfcc815b9c7d3a6dc246dc58b0a95b5132a317c5a094d0b4194f |
| headerFingerprintPrior | sha256:31dbc83200b511c9d61333b1cdb94e2880778980a3b21970be414e926db29008 |
| taskId | task_6af52a22 |
| saTaskId | task_51c2f1f4 |
| epic | T-XLS-S13 |
