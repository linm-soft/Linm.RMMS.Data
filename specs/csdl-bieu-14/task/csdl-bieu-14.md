# Team lead — tasks — csdl-bieu-14 (XLS · edit_page)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-14` |
| title | CSDL Biểu 14 — Xuất Excel (T-XLS-S14) |
| this role | `team_lead` · `/agent-team-lead` |
| status | **confirmed** |
| changeScope | **`edit_page`** |
| packKind | **`list`** |
| formType | `list` |
| resource | `its-systems` |
| formNo | `14` |
| columns | `21` · keep typed · export 1 sheet flat |
| IdCode | `IT-` · keep |
| peerSoTs | `so-ts-its-camera` · **cấm** merge vào export |
| epic | `csdl-export-print` · Wave 1 `T-XLS-S14` |
| solution_confirm | **approve** (`task_5dc0c863`) |
| design_confirm | **approve** (`task_7d1a980f`) |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| route_confirm | **`route_a`** **keep** · `/csdl-bieu-14` + hub · **không** URL mới |
| team_lead_confirm | **approve** (autoApprove ON · XLS) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-14/ui/prototype/csdl-bieu-14-list-prototype.html` |
| prior · data_analy | **confirmed** · `handoff/data_analy-compact.md` · `task_b92db6a6` |
| prior · po | **confirmed** · `handoff/po-compact.md` · `task_23c0d73d` |
| prior · design | **confirmed** · `handoff/design-compact.md` · `task_7d1a980f` |
| prior · sa | **confirmed** · `handoff/sa-compact.md` · `task_5dc0c863` |
| priorTyped | `task_b21db737` · task pack typed **keep** · CRUD **done** |
| taskId | `task_bb5bd3be` |
| saTaskId | `task_5dc0c863` |
| contentHashPrior | `sha256:e9a062f1f9eecd6bf98748db0c3f839e2247a74ecb9bcd56273d4e48d729fa0a` |
| headerFingerprintPrior | `sha256:14cd156a898dcc971a072dd1cd1b92460a8b597558a90dc9854fead9d4c4de5c` |
| updatedAt | `2026-09-18T02:00:00.000Z` |
| TL SSOT | `form-type-task-pack` · `agent-dev-assign` · `list-form-quality-gates` · `filter-bar-layout-hard` · `/implement-export-import-excel` |
| `devSlash` (XLS) | **`/implement-export-import-excel`** · + `/agent-dev` verify |

**Cấm:** implement product code @ TL · e2e · `yarn build` / `start:std` · Step 4b/migration @ TL · ERP.* · toast-stub=done · filter-bar export (GAP-FILTER-BAR-08) · golden 12+8 · merge peer/road-assets/AiVision · reopen typed `new_page` CRUD · Import wire P0 · start role khác (**GAP-PKT-ROLE-01**).

---

## § Delta Current vs New (`edit_page` · T-XLS-S14)

| Area | Current (typed keep) | New (XLS P0) | Action |
|------|----------------------|--------------|--------|
| Typed CRUD / Schema | done · Schema_CsdlBieu14 | **keep** | **cấm** reopen · **T-KEEP-*** |
| Route / hub | `/csdl-bieu-14` + hub | **keep** | route_confirm=`route_a` · **no** `route_confirm` mới |
| Toolbar | peer cite / CRUD | **+Xuất Excel** catalogToolbar | **T-XLS-S14-FE-01** · DES-EXPORT |
| Filter bar | V1–V5 keep | **không** nút export | **GAP-FILTER-BAR-08** · **cấm** |
| Export API | missing / stub | GET `…/csdl-records/export?resource=its-systems` (+ filter QS · no page) | **T-XLS-S14-BE-01** · API-XLS-01 |
| BFF | CRUD proxy | binary proxy export | **T-XLS-S14-BFF-01** |
| File | — | `Bieu14_HeThongITS_{yyyyMMdd}.xls` · 1 sheet 21 · device+infra+GPS cùng hàng | Q-XLS-FILENAME/SHEET |
| Empty | — | file OK (headers only) | G-05 |
| Fail | — | toast error · **≠** stub success | G-06 · GAP-BIEU14-XLS-02 |
| Golden | — | Cục 16-sheet Biểu 14 · **cấm** 12+8 | G-07 · GAP-BIEU14-XLS-03 |
| Scope | — | filtered (QS = list filters · empty=all tenant) | G-08 · Q-XLS-SCOPE |
| Import | — | **DEFER P1** · nút ẩn | **T-XLS-S14-BE-02 OUT** · Q-XLS-IMPORT |
| Peer | cite only | **cấm** merge vào export rows | GAP-BIEU14-XLS-07 |
| Leave | dirty CRUD | export **không** dirty Leave | keep |

**Không đổi:** API prefix `api/v1/asset/csdl-records` · Schema_CsdlBieu14 · Kind B+D Slideout 21 · IdCode `IT-` · soft-delete · pageSize · filter layout · **cấm** ERP.*.

---

## Source assignment

| Field | Value |
|-------|-------|
| `source.mfe` | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| `source.routes` | **keep** `/csdl-bieu-14` · hub `?resource=its-systems` · mfeStd also `/so-ts/csdl-so-sach` |
| `mfeStdRoute` | `/so-ts/csdl-so-sach` · alias `/csdl-bieu-14` |
| `mfeStdUrl` | `http://localhost:9301/so-ts/csdl-so-sach` |
| `hubDeepLink` | `/so-ts/csdl-so-sach?resource=its-systems` |
| `source.backend` | `D:/AI-QLBD/Linm.RMMS.WebService` |
| `source.domain` | **Asset** |
| `source.api` | `CsdlCatalogRecordsController` · export action |
| `source.bff` | `bff/domains/asset/` · **binary proxy** |
| FE BASE | `/asset/csdl-records` |
| API export | **`GET api/v1/asset/csdl-records/export?resource=its-systems`** (+ filter QS) |
| entity | **keep** shell + `CsdlBieu14Entity` · **cấm** migration @ XLS |
| `devSlash` | **`/implement-export-import-excel`** |

### Route confirm

| Option | Path | Decision |
|--------|------|----------|
| A | `/csdl-bieu-14` + hub | **KEEP** — không URL mới |
| B/C | invent / change alias | **n/a** |

---

## DES-GRID → Lin* map (delta only)

| Zone | Component | XLS note |
|------|-----------|----------|
| DES-GRID-A/C/D/F/H/Z | keep typed | **cấm** reopen |
| DES-GRID-B | `catalogToolbar` / `buildCatalogListToolbarActions` | **+DES-EXPORT** Xuất Excel ToolbarButton |
| DES-GRID-B-FILTER | `LinErpListFilterBar` | **unchanged** · **cấm** export button |
| S-XLS-EXPORT | binary download | API-XLS-01 |
| S-XLS-IMPORT | hidden | DEFER P1 |

---

## API contract (XLS · cite SA)

| id | Method | Path | Notes |
|----|--------|------|-------|
| API-01..05 | * | `…/csdl-records` | **keep** typed CRUD |
| **API-XLS-01** | **GET** | `/api/v1/asset/csdl-records/export?resource=its-systems&…` | BFF binary · `.xls` · filter QS · **no** page/pageSize |
| API-XLS-02 | POST | `…/import` | **DEFER P1** · OUT |

BFF: `/web-bff/api/v1/asset/csdl-records/export` · stream/binary · **cấm** JSON toast-only.  
Gates keep: `tz_na` · `xco_get_only` · `share_tenant` (export inherit list XCO).

### Export query keys (align list filter)

`resource` · `search` · `province` · `operatingStatus` · `deviceType` · `side` · `roadCode` · `kmFrom`/`kmTo` · **cấm** `page`/`pageSize`

### Sheet / filename

- Filename: `Bieu14_HeThongITS_{yyyyMMdd}.xls`
- 1 sheet · 21 cột header SSOT (typed keep) · device+infra+GPS cùng hàng
- Golden: Cục 16-sheet Biểu 14 · **cấm** hồ sơ 12+8

---

## FormType pack — task matrix (`edit_page` · XLS)

### KEEP (typed prior · **done** · cấm reopen)

| Task id | Status | Notes |
|---------|--------|-------|
| T-DM-01 · T-CTX-01 · T-BE-01..06 · T-BFF-01 · T-PERM-01 · T-BE-UISCHEMA-01 | **done keep** | Schema_CsdlBieu14 · typed 21 |
| T-UI-LIST/FILTER/CFG/FORM/LEAVE/ACT/LKP/FIELD/PROD/UX/RESP | **done keep** | route_a · hub · Slideout |
| T-QA-CRUD/FORM/FILTER/DEV/INFRA/GPS/TYP/TAB/ROUTE | **done keep** | prior typed QA |
| T-OUT-02 | **OUT/P2** | org SearchInput keep defer |

### NEW — T-XLS-S14-*

| Task id | Role | Status | deps | `devSlash` | Notes |
|---------|------|--------|------|------------|-------|
| **T-XLS-S14-BE-01** | Dev | **pending** | typed keep | `/implement-export-import-excel` | GET export binary · 21 flat · filtered · filename `.xls` · empty OK · **cấm** ERP.* / merge peer |
| **T-XLS-S14-BFF-01** | Dev | **pending** | BE-01 | `/implement-export-import-excel` | BFF binary proxy · Content-Disposition · **cấm** buffer-to-JSON |
| **T-XLS-S14-FE-01** | Dev | **pending** | BFF-01 | `/implement-export-import-excel` | catalogToolbar **Xuất Excel** · wire GET + current filters · binary download · busy state |
| **T-XLS-S14-FE-02** | Dev | **pending** | FE-01 | `/implement-export-import-excel` | fail toast · **cấm** toast-stub success · **cấm** filter-bar export · Import ẩn · export ≠ Leave dirty |
| **T-XLS-S14-BE-02** | — | **OUT P1** | — | — | POST import · DEFER |
| **T-XLS-S14-QA-01** | QA | **pending** | FE-01/02 | `/agent-qa` | G-04..G-08 · golden 21 · filtered · empty · fail · **cấm** e2e @ Dev/TL |

**SA id map:** API-XLS-01→BE-01 · BFF→BFF-01 · FE toolbar→FE-01 · UX/guard→FE-02 · QA→QA-01 · BE-02 OUT.

---

### T-XLS-S14-BE-01 — Export service

- Implement `GET …/export?resource=its-systems` (+ filter QS · no paging).
- Build 1 sheet 21 cột flat (shell+typed join) · Content-Type Excel · filename `Bieu14_HeThongITS_{yyyyMMdd}.xls`.
- Empty result → file with headers only (OK).
- **Cấm:** ERP.* · invent infra · merge so-ts-its-camera/road-assets/AiVision · streaming P0 optional · change Schema_CsdlBieu14.
- DoD: binary bytes · checksum/header 21 · XCO/tenant same as list.

### T-XLS-S14-BFF-01 — BFF binary proxy

- Proxy export path · forward query · pass-through binary + disposition.
- DoD: FE downloads via BFF · no business reshape.

### T-XLS-S14-FE-01 — Toolbar Xuất

- Add ToolbarButton **Xuất Excel** on `catalogToolbar` (DES-EXPORT) · **not** on FilterBar.
- Call export with **current** list filter QS · trigger browser download.
- Busy/disabled while in-flight.
- DoD: button visible on list · binary file downloads · filename matches.

### T-XLS-S14-FE-02 — Guards / UX

- On HTTP error → error toast · **cấm** success stub/toast-only “done”.
- Import control **hidden** (export_only_p0).
- Export action **does not** set form dirty / LeaveConfirm.
- DoD: fail path toast · no filter-bar export · Import absent.

### T-XLS-S14-QA-01 — queued QA only

- G-04 toolbar Xuất · G-05 empty file OK · G-06 fail toast · G-07 golden 21 / Cục · G-08 filtered scope.
- Regression: typed CRUD keep · no peer merge · no filter export button.
- **Cấm** run e2e at TL/Dev.

---

## Inventory (slim · delta)

| id | controlHint | notes |
|----|-------------|-------|
| (form/list 21) | — | typed **keep** |
| exportExcel | ToolbarButton | catalogToolbar · binary |
| importExcel | — | DEFER P1 · ẩn |

---

## Screens / zones (ids)

- S-LIST DES-GRID keep · toolbar **+DES-EXPORT** · B-FILTER unchanged
- S-XLS-EXPORT · S-XLS-IMPORT hidden · S-SKIP-PEER/MAP
- mfeStdUrl=`http://localhost:9301/so-ts/csdl-so-sach` · alias `/csdl-bieu-14` · hub `?resource=its-systems`
- reviewUrl= prototype (Design +Xuất)

---

## Agent assign (`agent-dev-assign`)

| Lane | Slash | Scope |
|------|-------|-------|
| BE+BFF+FE (XLS) | **`/implement-export-import-excel`** | T-XLS-S14-BE-01 · BFF-01 · FE-01/02 |
| Verify shell | `/agent-dev` | ensure typed keep / no regression only if needed |
| QA | `/agent-qa` | T-XLS-S14-QA-01 · e2e **only here** |

**Parallel OK:** BE-01 first · BFF after BE contract · FE after BFF · QA after FE DoD.

---

## Quality gates (list · XLS delta)

| Gate | Expect |
|------|--------|
| Grid AC typed | KEEP |
| G-04..G-08 | Xuất toolbar · empty OK · fail toast · golden 21 · filtered |
| Leave | export **không** dirty |
| Filter HARD | V1–V5 keep · **cấm** export on bar |
| Import | hidden P0 |
| Persist | Schema keep · **cấm** migration XLS |
| API | GET export · **cấm** ERP.* |
| Peer | **cấm** merge export |

---

## GAP → task map

| GAP | Task |
|-----|------|
| GAP-BIEU14-XLS-01 | FE-01 + BE-01 |
| GAP-BIEU14-XLS-02 | FE-02 |
| GAP-BIEU14-XLS-03 | BE-01 + QA-01 |
| GAP-BIEU14-XLS-04 | FE-02 (filter ban) |
| GAP-BIEU14-XLS-05 | BE-01 + BFF-01 |
| GAP-BIEU14-XLS-06 | BE-01 |
| GAP-BIEU14-XLS-07 | BE-01 + FE-01 |

---

## Open questions

- **none** (Q-XLS-* chốt · design_confirm/solution_confirm approve · typed Q-* keep)

## Next

| Role | Need |
|------|------|
| **Dev** | `/implement-export-import-excel` · T-XLS-S14-BE/BFF/FE-* · write `implement/csdl-bieu-14.md` |
| QA | T-XLS-S14-QA-01 · e2e queued `/agent-qa*` |
| Review | after QA |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-team-lead |
| skillVersion | 2026.08.25.01 |
| workflowVersion | 2026.09.01.02 |
| rulesVersion | 2026.09.17.3 |
| packKind | list |
| changeScope | edit_page |
| route_confirm | route_a (keep) |
| team_lead_confirm | approve |
| writtenAt | 2026-09-18T02:00:00.000Z |
| contentHashPrior | sha256:e9a062f1f9eecd6bf98748db0c3f839e2247a74ecb9bcd56273d4e48d729fa0a |
| headerFingerprintPrior | sha256:14cd156a898dcc971a072dd1cd1b92460a8b597558a90dc9854fead9d4c4de5c |
| taskId | task_bb5bd3be |
| priorTypedTaskId | task_b21db737 |
| saTaskId | task_5dc0c863 |
| epicTask | T-XLS-S14 |
