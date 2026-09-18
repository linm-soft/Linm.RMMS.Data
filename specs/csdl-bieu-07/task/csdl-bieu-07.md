# Team lead — tasks — csdl-bieu-07 (edit_page · T-XLS-S07)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-07` |
| title | CSDL Biểu 07 — Xuất Excel (Import DEFER P1) |
| this role | `team_lead` · `/agent-team-lead` |
| status | **confirmed** |
| team_lead_confirm | **approve** (autoApprove=ON) |
| changeScope | **`edit_page`** (T-XLS-S07 · Wave 1) |
| packKind | **`list`** (Kind **B** A–D+F · Kind **D** Slideout **KEEP**) |
| formType | `list` |
| resource | `shoulders-fences` |
| formNo | `07` (**KEEP**) |
| columns | `20` (**KEEP** · **cấm** reopen typed) |
| IdCode | `LE-` (**KEEP**) |
| peerSoTs | `SHOULDER` · deep-link only · **cấm** merge sheet |
| solution_confirm | **approve** (`task_8aedafae`) |
| design_confirm | **approve** (`task_a41905a5`) |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| route_confirm | **`route_a` KEEP** — alias `/csdl-bieu-07` + hub · **không** URL mới |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-07/ui/prototype/csdl-bieu-07-list-prototype.html` |
| prior · data_analy | **confirmed** · contentHash `sha256:1250b5799e9174b21429e60e57abef17cb7d6c568ae417840c57b598f204a69a` |
| prior · po | **confirmed** · `po/requirement.md` · `handoff/po-compact.md` |
| prior · design | **confirmed** · `ui/design.md` · `handoff/design-compact.md` |
| prior · sa | **confirmed** · `be/solution-discovery.md` · `handoff/sa-compact.md` |
| taskId | `task_f95a30db` |
| saTaskId | `task_8aedafae` |
| priorTlTyped | `task_02e3c2e7` (typed CRUD · **KEEP**) |
| contentHashPrior | `sha256:1250b5799e9174b21429e60e57abef17cb7d6c568ae417840c57b598f204a69a` |
| headerFingerprintPrior | `sha256:ba33856d00d23440b05be8c78c8b8a5462662c96a1067e702b791eb5020d64cf` |
| updatedAt | `2026-09-18T04:40:00.000Z` |
| TL SSOT | `form-type-task-pack` · `agent-dev-assign` · `list-form-quality-gates` · `filter-bar-layout-hard` · `/implement-export-import-excel` |

**Cấm:** implement product code · e2e · `yarn build` / `start:std` · Step 4b/migration · ERP.* · invent API · start role khác (**GAP-PKT-ROLE-01**) · reopen typed 20-col · Xuất trên LinErpListFilterBar (**GAP-FILTER-BAR-08**) · merge SHOULDER sheet · golden hồ sơ 12+8 · Import wire P0 · streaming export P0.

---

## § Delta Current vs Target (`edit_page` · export P0)

| Area | Current (typed live) | Target (T-XLS-S07) | Action |
|------|----------------------|--------------------|--------|
| CRUD typed 20 · Slideout 3 khối | Schema_CsdlBieu7 · FenceLengthM↔km · SlopeClearingM | **KEEP** | **T-KEEP** · **cấm** reopen |
| Route | `route_a` alias + hub | **KEEP** | **không** `route_confirm` mới |
| Filter bar | LinErpListFilterBar | **KEEP** · **cấm** nút Xuất trên filter | GAP-FILTER-BAR-08 |
| Toolbar | CRUD | **+Xuất Excel** · Import **ẩn** P1 | **T-XLS-FE-01** · GAP-BIEU07-XLS-01 |
| Export API | stub / weak | filtered · golden Cục Biểu 7 · `.xls` · filter-all · binary | **T-XLS-BE-01/02** · GAP-BIEU07-XLS-02/04/05 |
| Import | may exist | **DEFER P1** · UI ẩn | **T-XLS-FE-02** · GAP-BIEU07-XLS-03 |
| BFF | proxy | binary passthrough · no remap | **T-XLS-BFF-01** |
| Peer Sổ TS | deep-link SHOULDER | deep-link **KEEP** · **cấm** merge sheet | GAP-BIEU07-XLS-PEER |
| Migration | Schema_CsdlBieu7 | **none mới** @ XLS | — |

**Không đổi:** API prefix `api/v1/asset/csdl-records` · BFF proxy · soft-delete · pageSize list · LeaveConfirm · typed entity · DOMAIN-MAP · **cấm** ERP.*.

---

## Source assignment

| Field | Value |
|-------|-------|
| `source.mfe` | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · `ui_repo_confirm` |
| `source.routes` | **KEEP** `/csdl-bieu-07` + hub `?resource=shoulders-fences` · `route_confirm=route_a` |
| `mfeStdRoute` | `/so-ts/csdl-so-sach` · alias `/csdl-bieu-07` |
| `mfeStdUrl` | `http://localhost:9301/so-ts/csdl-so-sach` |
| `hubDeepLink` | `/so-ts/csdl-so-sach?resource=shoulders-fences` |
| `peerStdUrl` | `http://localhost:9301/so-ts/csdl-so-sach?resource=shoulders-fences` |
| `source.backend` | `D:/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` |
| `source.domain` | **Asset** (`asset`) · DOMAIN-MAP **KEEP** |
| `source.api` | `CsdlCatalogRecordsController` · `CsdlCatalogExcelService` |
| `source.bff` | `bff/domains/asset/` · **proxy only** · binary |
| FE BASE | `/asset/csdl-records` |
| API prefix | **`api/v1/asset/csdl-records`** |
| catalogKind | `shoulders-fences` |
| entity | shell + typed `CsdlBieu7Entity` · **KEEP** · **no new migration** |
| `devSlash` | **`/agent-dev`** · + `/dev-web-responsive` · `/dev-ui-review` |

### Route confirm

| Option | Path | Decision |
|--------|------|----------|
| A | `/csdl-bieu-07` + hub | **KEEP** — không URL mới @ edit_page XLS |
| B / C | hub-only / invent | n/a |

---

## DES-GRID → Lin* map (KEEP + export)

| Zone | Component | Delta |
|------|-----------|-------|
| DES-GRID-A/C/D/F/H/Z | prior typed | **KEEP** |
| DES-GRID-B | `catalogToolbar` / `buildCatalogListToolbarActions` | **+Xuất Excel** · Import **ẩn** |
| DES-GRID-C1 FILTER | `LinErpListFilterBar` | **KEEP** · **cấm** Xuất trên filter |
| S-XLS-EXPORT | ToolbarButton `exportExcel` | **P0** |
| S-XLS-IMPORT | ToolbarButton+file | **DEFER P1 · ẩn** |

---

## API contract (cite SA · XLS P0)

| id | Method | Path | Notes |
|----|--------|------|-------|
| API-01..05 | CRUD | `…/csdl-records?resource=shoulders-fences` | **KEEP** |
| **API-XLS-01** | GET | `/api/v1/asset/csdl-records/export?resource=shoulders-fences&…` | filtered · filter-all · binary · `.xls` |
| API-XLS-02/03 | POST | `…/import[/preview]` | **DEFER P1** · **cấm** FE wire |

BFF: `GET /web-bff/api/v1/asset/csdl-records/export` · proxy only · binary passthrough.

### Export QS (= list filters · ignore page)

`resource` (required) · `search` · `province` · `status` · `side` · `fenceKind` · `roadCode` · `kmFrom`/`kmTo` · **ignore** `page`/`pageSize`

### Filename / golden (SA locked)

| Item | Value |
|------|-------|
| Filename | `Bieu07_LeTaluyHangRao_{yyyyMMdd}.xls` (**SA chốt `.xls`** · override PO `.xlsx`) |
| Mode | **filter-all** · service row cap · **cấm** HTTP streaming P0 |
| Golden | Cục 16-sheet · sheet **Biểu 7** · **20 cột** · **cấm** 12+8 |
| Units | fence length **km** (FenceLengthM/1000) · slopeLengthM↔SlopeClearingM |
| Scope | **filtered** · empty QS = all visible tenant · empty result OK |

### FormMode ↔ API

| FormMode | Action |
|----------|--------|
| list/C/E/V/Copy/Delete | **KEEP** prior |
| **export** | GET API-XLS-01 + filter QS |
| import | **DEFER P1** |

Gates (SA): `tz_na` · `xco_get_only` · `share_tenant`.

---

## System design checklist

| ID | Value |
|----|-------|
| SD-JOB | n/a |
| SD-BFF | **required** · proxy only · binary |
| SD-AUTH | reuse `asset.csdl-records.read` (export) · wire DEFER |
| SD-TOKEN | required (BFF) |
| SD-HEADER | required · X-Company-Id |
| SD-SPLIT | Asset ownership |
| SD-NO-JSON | **required** · export from typed · **cấm** DetailJson dump |
| SD-LIB-UI | Common.Components only |
| SD-LIB-BE | CommonLib envelope |
| SD-XLS | `/implement-export-import-excel` · golden Cục Biểu 7 |

---

## FormType pack — task matrix (`list` · edit_page XLS)

| Task id | Role | Status | deps | `devSlash` | Notes |
|---------|------|--------|------|------------|-------|
| T-KEEP | Dev | **pending** | — | `/agent-dev` | typed CRUD / 3 khối / units / Slideout / Schema_CsdlBieu7 · **cấm** reopen |
| T-XLS-BE-01 | Dev | **pending** | — | `/agent-dev` | Widen `CsdlCatalogExcelService` Export `shoulders-fences` · golden Biểu 7 · 20 cols · filter-all · unit map |
| T-XLS-BE-02 | Dev | **pending** | T-XLS-BE-01 | `/agent-dev` | Filename `Bieu07_LeTaluyHangRao_{yyyyMMdd}.xls` · Content-Disposition · empty OK |
| T-XLS-BFF-01 | Dev | **pending** | T-XLS-BE-01 | `/agent-dev` | BFF export binary proxy · no remap |
| T-XLS-FE-01 | Dev | **pending** | T-XLS-BFF-01 | `/agent-dev` | catalogToolbar Xuất Excel · blob · toast · **cấm** filter-bar export |
| T-XLS-FE-02 | Dev | **pending** | T-XLS-FE-01 | `/agent-dev` | Pass list filter QS · ignore page · Import UI ẩn P1 |
| T-XLS-QA-01 | QA | **pending** | T-XLS-FE-* | `/agent-qa` | AC-XLS-01..09 · GAP-BIEU07-XLS-01..05 · GAP-BIEU07-XLS-PEER |
| T-OUT-IMPORT | — | **OUT/P1** | — | — | Import DEFER · GAP-BIEU07-XLS-03 |
| T-DM-01 / T-REN-01 / T-BE-* typed / T-UI-* typed | — | **done prior** | — | — | **KEEP** · **cấm** reopen @ XLS |

**SA id map:** T-XLS-BE-01/02 · T-XLS-BFF-01 · T-XLS-FE-01/02 · T-XLS-QA-01 · T-KEEP — direct.

---

### T-KEEP — Typed regression lock

- **Không** đổi Schema_CsdlBieu7 · Slideout 3 khối · FenceLengthM↔km · SlopeClearingM · IdCode `LE-` · route_a.
- DoD: CRUD regression không regress · **cấm** reopen 20-col / detail*-only.

### T-XLS-BE-01 — Export service widen

- Widen `CsdlCatalogExcelService` Export for `resource=shoulders-fences`.
- Golden Cục sheet **Biểu 7** · **20 cột** typed · unit map FenceLengthM→km · SlopeClearingM↔slopeLengthM.
- Mode **filter-all** · ignore page/pageSize · service row cap · **cấm** streaming P0 · **cấm** DetailJson · **cấm** merge SHOULDER.
- DoD: binary file · filtered rows · GAP-BIEU07-XLS-02/04/PEER.

### T-XLS-BE-02 — Filename + empty

- `Content-Disposition` filename=`Bieu07_LeTaluyHangRao_{yyyyMMdd}.xls` (**ext `.xls`**).
- Empty filtered set → headers-only file **hoặc** FE toast “không có dữ liệu” (Dev chốt 1 · AC-XLS empty OK).
- DoD: GAP-BIEU07-XLS-05 · **cấm** 12+8 hồ sơ golden.

### T-XLS-BFF-01 — BFF binary proxy

- Forward QS · binary passthrough · **không** remap filename/cols · **không** unit convert.
- DoD: path parity `/web-bff/api/v1/asset/csdl-records/export`.

### T-XLS-FE-01 — Toolbar Xuất Excel

- `catalogToolbar` button **Xuất Excel** (`fa-file-excel`) · blob download · toast fail · LeaveConfirm N/A for export.
- **Cấm** đặt Xuất trên `LinErpListFilterBar` (GAP-FILTER-BAR-08).
- Import button **ẩn** P1.
- DoD: GAP-BIEU07-XLS-01 · AC-XLS-01/02/06.

### T-XLS-FE-02 — Filter QS pass-through

- Pass current list filter QS to export · **ignore** page/pageSize.
- Empty filters = all visible tenant.
- DoD: AC-XLS-04/05 · Q-XLS-SCOPE=filtered.

### T-XLS-QA-01 — E2E / scenarios (queued QA only)

- AC-XLS-01..09 · GAP-BIEU07-XLS-01..05 · GAP-BIEU07-XLS-PEER.
- **Cấm** e2e / `start:std` ở TL/Dev.

### T-OUT-IMPORT — DEFER P1

- Import UI + `ImportAsync` widen Biểu 7 · **không block** P0 export.

---

## Inventory (slim · XLS delta)

| id | controlHint | notes |
|----|-------------|-------|
| (form 20) | typed prior | **KEEP** · 3 khối · **cấm** reopen |
| exportExcel | ToolbarButton | catalogToolbar · P0 |
| importExcel | ToolbarButton+file | DEFER P1 · ẩn |

---

## Gaps → tasks

| Gap | Task | Sev |
|-----|------|-----|
| GAP-BIEU07-XLS-01 | T-XLS-FE-01 | P0 |
| GAP-BIEU07-XLS-02 | T-XLS-BE-01 | P0 |
| GAP-BIEU07-XLS-03 | T-OUT-IMPORT | P1 DEFER |
| GAP-BIEU07-XLS-04 | T-XLS-BE-01 | P0 |
| GAP-BIEU07-XLS-05 | T-XLS-BE-02 | P0 |
| GAP-BIEU07-XLS-PEER | T-XLS-BE-01 · T-XLS-QA-01 | P0 |
| GAP-FILTER-BAR-08 | T-XLS-FE-01 | P0 |

---

## AC cite (PO · ids only)

- Keep: AC-GRID-01..05 (typed regression · T-KEEP)
- Delta: AC-XLS-01..09 (toolbar · binary · 20 cols · filtered · empty OK · toast fail · filename · golden · peer no-merge)

---

## DoR — team_lead PASS

| Check | Result |
|-------|--------|
| changeScope=edit_page · prior analy/po/design/sa confirmed | PASS |
| T-* matrix đủ · SA ids mapped | PASS |
| route_confirm KEEP route_a · no new URL | PASS |
| Filename `.xls` · filter-all · Import DEFER | PASS |
| compact ≤5KB · STATUS patch | PASS |
| **Cấm** implement / e2e / migration @ TL | PASS |

**team_lead_confirm=approve** · handoff → Dev (`/agent-dev`).

## Full paths

- task: `D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-07/task/csdl-bieu-07.md`
- compact: `D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-07/handoff/team_lead-compact.md`
- SA: `D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-07/be/solution-discovery.md`
- STATUS: `D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-07/STATUS.md`
