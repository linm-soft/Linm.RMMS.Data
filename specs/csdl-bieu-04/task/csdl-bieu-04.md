# Team lead — tasks — csdl-bieu-04

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-04` |
| title | CSDL Biểu 04 — Xuất Excel (T-XLS-S04) |
| this role | `team_lead` · `/agent-team-lead` |
| status | **confirmed** |
| changeScope | **`edit_page`** · epic Wave 1 · **T-XLS-S04** |
| packKind | **`list`** (Kind **B** A–D+F · Kind **D** Slideout keep) |
| formType | `list` |
| resource | `culverts` |
| formNo | `04` |
| columns | `17` |
| IdCode | `CG-yyyyMMdd-nnnn` |
| peerSoTs | `so-ts-culvert-x` · deep-link only · **cấm** merge sheet Biểu 4 |
| solution_confirm | **approve** (`task_2c8beb5b`) |
| design_confirm | **approve** (`task_394a88a3`) |
| team_lead_confirm | **approve** (autoApprove ON) |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| route_confirm | **`keep`** — alias `/csdl-bieu-04` + hub (typed prior `route_a`) · **cấm** invent URL mới |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-04/ui/prototype/csdl-bieu-04-list-prototype.html` |
| prior · data_analy | **confirmed** · `handoff/data_analy-compact.md` · task `task_584ba7e8` |
| prior · po | **confirmed** · `po/requirement.md` · `handoff/po-compact.md` · task `task_5062adbc` |
| prior · design | **confirmed** · `ui/design.md` · `handoff/design-compact.md` · task `task_394a88a3` |
| prior · sa | **confirmed** · `be/solution-discovery.md` · `handoff/sa-compact.md` · task `task_2c8beb5b` |
| taskId | `task_7925d902` |
| saTaskId | `task_2c8beb5b` |
| contentHash | `sha256:eef182add5b68de5b3e27ec36ed9c099689831aeb77742814aa296bf286243f9` |
| headerFingerprint | `sha256:8b98f7a22739bdad37b67a7ef869d6c465edc38061f0d5853fe2e69758d4ccea` |
| updatedAt | `2026-09-18T03:30:00.000Z` |
| TL SSOT | `form-type-task-pack` · `agent-dev-assign` · `list-form-quality-gates` · `filter-bar-layout-hard` · `po-design-grid-standard` · `/implement-export-import-excel` |

**Cấm:** implement product code (trừ template task) · e2e · `yarn build` / `start:std` · Step 4b/migration · ERP.* · invent API prefix · start role khác (**GAP-PKT-ROLE-01**) · reopen typed 17-col CRUD · toast stub = export done · Xuất trên `LinErpListFilterBar` (**GAP-FILTER-BAR-08**) · Import P0 · streaming P0 · hồ sơ 12+8 sheet · gộp `so-ts-culvert-x` vào sheet Biểu 4 (**GAP-BIEU04-XLS-PEER**).

---

## § Delta Current vs New (`edit_page` · T-XLS-S04)

| Area | Current (typed PASS) | New (Xuất Excel) | Action |
|------|----------------------|------------------|--------|
| Typed CRUD | 17 cột · GPS four_xy · Slideout | **KEEP** · **cấm** reopen | regression **AC-GRID-01..05** |
| Route | `route_a` `/csdl-bieu-04` + hub | **KEEP** | `route_confirm=keep` |
| Toolbar | CRUD actions | **+Xuất Excel** (fa-file-excel) | **T-XLS-FE-01** · **AC-XLS-01** |
| Import | prior T-OUT-01 OUT | **DEFER P1** · UI ẩn | **T-OUT-01** · **GAP-BIEU04-XLS-03** |
| Export API | stub / OUT pack | GET export · binary · filter-all | **T-XLS-BE-01..02** · **T-XLS-BFF-01** |
| Scope | — | **filtered** QS · empty=all visible · **ignore page** | **AC-XLS-04** · Q-XLS-SCOPE |
| Filename | — | `Bieu04_CongCacLoai_{yyyyMMdd}.xls` | **AC-XLS-07** · SA chốt `.xls` (override PO `.xlsx`) |
| Golden | — | Cục 16-sheet · sheet Biểu 4 · 17 cols · GPS four_xy | **AC-XLS-08** · **T-XLS-BE-02** |
| Peer Sổ TS | deep-link only | **cấm** merge rows vào sheet Biểu 4 | **AC-XLS-09** · **GAP-BIEU04-XLS-PEER** · **T-REG-PEER-01** |
| Filter bar | LinErpListFilterBar | **cấm** nút Xuất trên filter | **GAP-FILTER-BAR-08** |
| Migration | Schema_CsdlBieu4 deployed | **none mới** @ XLS | **KEEP** |
| DOMAIN-MAP | slug ok | **KEEP** | no T-DM |

**Không đổi:** API prefix `api/v1/asset/csdl-records` · BFF proxy · soft-delete · pageSize 50/100/200/500 · LeaveConfirm · filter-bar-layout-hard · gates tz_na / xco_get_only / share_tenant · **cấm** ERP.*.

---

## Source assignment

| Field | Value |
|-------|-------|
| `source.mfe` | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · `ui_repo_confirm` |
| `source.routes` | **KEEP** `/csdl-bieu-04` · hub `?resource=culverts` |
| `mfeStdRoute` | `/so-ts/csdl-so-sach` (hub std) · alias `/csdl-bieu-04` |
| `mfeStdUrl` | `http://localhost:9301/so-ts/csdl-so-sach` |
| `hubDeepLink` | `/so-ts/csdl-so-sach?resource=culverts` |
| `peerStdUrl` | `http://localhost:9301/so-ts/csdl-so-sach?resource=culverts` |
| `source.backend` | `D:/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` |
| `source.domain` | **Asset** (`asset`) · DOMAIN-MAP |
| `source.api` | `api/src/RMMS.Service.Api/Domains/Asset/` · `CsdlCatalogRecordsController` (+ export) |
| `source.bff` | `bff/domains/asset/` · **proxy binary** · `/implement-export-import-excel` |
| `source.layout` | `micro-src` |
| FE BASE | `/asset/csdl-records` (apiClient → BFF) |
| API prefix | **`api/v1/asset/csdl-records`** · **cấm** invent |
| catalogKind | `culverts` |
| entity | shell + typed `CsdlBieu4Entity` · **KEEP** · **no new migration** |
| `devSlash` (default UI) | **`/agent-dev`** · + `/implement-export-import-excel` · **cấm** OMS/ai-detect |

### Route confirm

| Option | Path | Decision |
|--------|------|----------|
| keep | `/csdl-bieu-04` + hub | **SELECTED** — edit_page · no new URL |
| invent | new so-ts path | **cấm** |

---

## DES-GRID → Lin* map (KEEP + export delta)

| Zone | Component | XLS note |
|------|-----------|----------|
| DES-GRID-A | `LinPageLayout` | KEEP |
| DES-GRID-B | `catalogToolbar` / `buildCatalogListToolbarActions` | **+exportExcel** · **T-XLS-FE-01** |
| DES-GRID-C1 / FILTER | `LinErpListFilterBar` | filters feed export QS · **cấm** Xuất trên bar |
| DES-GRID-C2 | `LinCatalogDataGrid` | KEEP |
| DES-GRID-D | `LinCatalogListPagination` | export **ignore** page/pageSize |
| DES-GRID-F | `LinCatalogUiSchemaEditorModal` | KEEP |
| DES-GRID-Z | Slideout | KEEP typed form · 17 col · four_xy |
| S-XLS-EXPORT | download binary | **T-XLS-FE-02** |
| S-XLS-IMPORT | hidden P1 | **T-OUT-01** |

---

## API contract (cite SA)

| id | Method | Path | Notes |
|----|--------|------|-------|
| API-01..05 | — | `…/csdl-records?resource=culverts` | CRUD **KEEP** |
| API-XLS-01 | GET | `/api/v1/asset/csdl-records/export?resource=culverts&…` | binary · filter QS · **filter-all** · ignore page |
| API-XLS-02 | POST | `/api/v1/asset/csdl-records/import?resource=culverts` | **DEFER P1** · không implement P0 |

Filename response: `Bieu04_CongCacLoai_{yyyyMMdd}.xls` · Content-Disposition · MIME Excel legacy/.xls per SA.

---

## Task matrix (T-*)

### Domain / context

| id | Owner | Title | DoD / AC | deps |
|----|-------|-------|----------|------|
| T-CTX-XLS-01 | Dev | CTX epic Wave 1 · T-XLS-S04 scope note | changeScope=edit_page · typed KEEP | — |
| T-OUT-01 | Dev | Import UI/API **DEFER P1** | button ẩn · no POST import · supersede prior XLS-OUT | — |

### BE

| id | Owner | Title | DoD / AC | deps |
|----|-------|-------|----------|------|
| T-XLS-BE-01 | Dev | Export endpoint GET filter-all | API-XLS-01 · QS=list filters · ignore page · empty→valid file · fail toastable | T-CTX-XLS-01 |
| T-XLS-BE-02 | Dev | Golden sheet Biểu 4 · 17 cols · GPS four_xy | AC-XLS-08 · Cục 16-sheet · **cấm** 12+8 · filename `.xls` · **cấm** peer-merge | T-XLS-BE-01 |

### BFF

| id | Owner | Title | DoD / AC | deps |
|----|-------|-------|----------|------|
| T-XLS-BFF-01 | Dev | BFF binary proxy export | stream/blob · Content-Disposition pass-through · **cấm** JSON wrap | T-XLS-BE-01 |

### FE

| id | Owner | Title | DoD / AC | deps |
|----|-------|-------|----------|------|
| T-XLS-FE-01 | Dev | Toolbar **Xuất Excel** | AC-XLS-01 · catalogToolbar · fa-file-excel · **cấm** filter-bar | T-XLS-BFF-01 |
| T-XLS-FE-02 | Dev | Download binary + filtered QS + UX | AC-XLS-02..07 · busy state · toast **fail only** · **cấm** toast stub=done · empty OK | T-XLS-FE-01 |

### QA (queued `/agent-qa*` only)

| id | Owner | Title | DoD / AC | deps |
|----|-------|-------|----------|------|
| T-XLS-QA-01 | QA | E2E export S0/S1 + AC-XLS-01..09 | scenarios + screens · typecheck · **cấm** TL chạy e2e | T-XLS-FE-02 |

### Regression (typed KEEP — verify only)

| id | Owner | Title | DoD |
|----|-------|-------|-----|
| T-REG-GRID-01 | Dev/QA | AC-GRID-01..05 | list/filter/CRUD/slideout unchanged · 17-col · four_xy |
| T-REG-PEER-01 | Dev/QA | peer no-merge | sheet Biểu 4 **không** chứa rows Sổ TS `so-ts-culvert-x` · deep-link only |

---

## SA → TL map

| SA id | TL id |
|-------|-------|
| T-XLS-BE-01..02 | T-XLS-BE-01..02 |
| T-XLS-BFF-01 | T-XLS-BFF-01 |
| T-XLS-FE-01..02 | T-XLS-FE-01..02 |
| T-XLS-QA-01 | T-XLS-QA-01 |
| GAP-BIEU04-XLS-01 | T-XLS-FE-01 (UI toolbar) |
| GAP-BIEU04-XLS-02 | T-XLS-BE-01 (export) |
| GAP-BIEU04-XLS-03 | T-OUT-01 (import-defer) |
| GAP-BIEU04-XLS-04 | T-XLS-BE-01 (filter-all) |
| GAP-BIEU04-XLS-05 | T-XLS-BE-02 (golden 17-col / four_xy) |
| GAP-BIEU04-XLS-PEER | T-REG-PEER-01 · T-XLS-BE-02 (no-merge) |

---

## Acceptance (delta)

| id | Criterion |
|----|-----------|
| AC-XLS-01 | Nút Xuất Excel trên catalogToolbar · visible P0 |
| AC-XLS-02 | Click → binary download (không JSON error page) |
| AC-XLS-03 | File có đủ **17** cột typed (GPS four_xy) |
| AC-XLS-04 | Export theo **filter QS** · empty filter = all visible tenant rows |
| AC-XLS-05 | Empty result → file hợp lệ (0 data rows) · không crash |
| AC-XLS-06 | Fail network/API → toast lỗi · **cấm** toast success stub |
| AC-XLS-07 | Filename `Bieu04_CongCacLoai_{yyyyMMdd}.xls` |
| AC-XLS-08 | Golden Cục 16-sheet · sheet Biểu 4 · **cấm** hồ sơ 12+8 |
| AC-XLS-09 | **cấm** gộp `so-ts-culvert-x` vào sheet · peer deep-link only |
| AC-GRID-01..05 | Typed regression PASS |

---

## Gates / non-goals

| Gate | Value |
|------|-------|
| sa_tz_gate | `tz_na` |
| sa_xco_gate | `xco_get_only` |
| sa_shared_table | `share_tenant` |
| migration @ XLS | **none** |
| Import P0 | **DEFER** |
| streaming | **cấm** P0 |
| ERP.* | **cấm** |
| T-PERM-01 Auth | **DEFER** (prior debt) |
| GAP-CSDL-ORG-01 | **P2** keep |

---

## Dev assign (agent-dev-assign)

1. Order: **T-XLS-BE-01 → T-XLS-BE-02 → T-XLS-BFF-01 → T-XLS-FE-01 → T-XLS-FE-02** · T-OUT-01 parallel.
2. Slash: `/agent-dev` + `/implement-export-import-excel`.
3. Verify (Dev only): `yarn` typecheck/build per Dev DoR · **cấm** TL chạy.
4. QA: queue `/agent-qa*` · T-XLS-QA-01.
5. Write: `implement/csdl-bieu-04.md` · `handoff/dev-compact.md`.

---

## team_lead_confirm

| Field | Value |
|-------|-------|
| team_lead_confirm | **approve** |
| autoApprove | ON |
| rationale | Prior data_analy/po/design/sa **confirmed** · hashes match · T-XLS-* matrix complete · route keep · Import DEFER · peer no-merge · no open Q |

---

## Next

| Role | Need |
|------|------|
| **Dev** | implement T-XLS-* · binary export · toolbar · golden Biểu 4 |
| QA | e2e queued `/agent-qa*` · T-XLS-QA-01 |
| Review | after QA |

## UNCLEAR

- none

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-team-lead |
| skillVersion | 2026.09.05.03 |
| workflowVersion | 2026.09.05.03 |
| rulesVersion | 2026.09.17.3 |
| packKind | list |
| changeScope | edit_page |
| route_confirm | keep |
| team_lead_confirm | approve |
| writtenAt | 2026-09-18T03:30:00.000Z |
| contentHash | sha256:eef182add5b68de5b3e27ec36ed9c099689831aeb77742814aa296bf286243f9 |
| headerFingerprint | sha256:8b98f7a22739bdad37b67a7ef869d6c465edc38061f0d5853fe2e69758d4ccea |
| taskId | task_7925d902 |
