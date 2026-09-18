# Team lead — tasks — csdl-bieu-15 (edit_page · T-XLS-S15)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-15` |
| title | CSDL Biểu 15 — TMC / thu phí / hạt / kho · Xuất Excel |
| this role | `team_lead` · `/agent-team-lead` |
| status | **confirmed** |
| changeScope | **`edit_page`** |
| packKind | **`list`** (Kind **B** keep · toolbar **+DES-EXPORT** · Kind **D** Slideout keep) |
| formType | `list` |
| resource | `ops-facilities` |
| formNo | `15` |
| columns | `20` · facility+area+equipment **cùng hàng** (export sheet) |
| IdCode | `OF-` (keep) |
| peerSoTs | `so-ts-toll` · `so-ts-rest-area` · `so-ts-station-house` · **cấm** merge vào export |
| epic | `csdl-export-print` · Wave 1 **`T-XLS-S15`** |
| solution_confirm | **approve** (`task_a5aa9767`) |
| design_confirm | **approve** (`task_c0f936f4`) |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| route_confirm | **`route_a`** (**keep**) — alias `/csdl-bieu-15` + hub `?resource=ops-facilities` |
| team_lead_confirm | **approve** (autoApprove ON · `task_ad295ce2`) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-15/ui/prototype/csdl-bieu-15-list-prototype.html` |
| prior · data_analy | **confirmed** · `handoff/data_analy-compact.md` · contentHash `sha256:8a85d68eaef24cf98c312f83a3a100de25b1212e8a751d6f1f42005d38dd0fc8` |
| prior · po | **confirmed** · `po/requirement.md` · `handoff/po-compact.md` |
| prior · design | **confirmed** · `ui/design.md` · `handoff/design-compact.md` |
| prior · sa | **confirmed** · `be/solution-discovery.md` · `handoff/sa-compact.md` |
| priorTyped | `task_94727a59` · typed CRUD **keep** · **cấm** reopen new_page |
| taskId | `task_ad295ce2` |
| saTaskId | `task_a5aa9767` |
| contentHashPrior | `sha256:8a85d68eaef24cf98c312f83a3a100de25b1212e8a751d6f1f42005d38dd0fc8` |
| headerFingerprintPrior | `sha256:0064a4903777f7ea8d51c7423d8451a20daf77a5934929001905edaa380f4fe4` |
| updatedAt | `2026-09-18T02:30:00.000Z` |
| TL SSOT | `form-type-task-pack` · `agent-dev-assign` · `handoff-compact` · `/implement-export-import-excel` · `filter-bar-layout-hard` · `list-form-quality-gates` · `po-design-grid-standard` |

**Cấm:** implement product code (trừ template task) · e2e · `yarn build` / `start:std` · Step 4b/migration @ TL · ERP.* · invent `infra` API · toast stub=done · filter-bar export · golden 12+8 · merge `so-ts-toll` / `so-ts-rest-area` / `so-ts-station-house` / `road-assets` · reopen typed new_page CRUD · Import wire P0 · start role khác (**GAP-PKT-ROLE-01**).

---

## § Delta Current vs New (`edit_page` · T-XLS-S15)

| Area | Current (typed keep) | New (XLS P0) | Action |
|------|----------------------|--------------|--------|
| CRUD / entity | Schema_CsdlBieu15 · shell+typed 1:1 · 20 · Slideout | **keep** · **cấm** reopen | — · typed T-* **DONE** |
| Export | Missing / toast stub / OUT | `GET …/export?resource=ops-facilities` binary · 1 sheet 20 | **T-XLS-S15-BE-01** · **GAP-BIEU15-XLS-01/05** |
| Import | stub / OUT | **DEFER P1** · nút ẩn · **cấm** wire P0 | **T-XLS-S15-BE-02 OUT** · Q-XLS-IMPORT=`export_only_p0` |
| Toolbar | catalogToolbar CRUD | **+Xuất Excel** · DES-EXPORT | **T-XLS-S15-FE-01** |
| Filter bar | HARD keep | **cấm** nút export trên filter (GAP-FILTER-BAR-08) | **GAP-BIEU15-XLS-04** |
| Filename | — | `Bieu15_TMC_Tram_Hat_{yyyyMMdd}.xls` | **T-XLS-S15-FE-02** · Q-XLS-FILENAME |
| Sheet | — | **one_sheet** · 20 · facility+area+equipment cùng hàng · golden Cục 16-sheet · **cấm** 12+8 | **GAP-BIEU15-XLS-03/06** |
| Scope | — | **filtered** · filter-all (no page) · empty=all tenant resource | Q-XLS-SCOPE · **T-XLS-S15-BE-01** |
| Peer | cite so-ts-toll/rest/station | **cấm** merge peer / road-assets vào export | **GAP-BIEU15-XLS-07** |
| Toast | stub | binary download ≠ toast-stub done · empty OK · fail toast | **T-XLS-S15-FE-02** · **GAP-BIEU15-XLS-02** |
| BFF | proxy CRUD | proxy export **binary** · QS forward · **không** JSON wrap | **T-XLS-S15-BFF-01** |
| Route / hub | route_a live | **keep** · **cấm** invent URL | **route_confirm=route_a** |
| QA | typed PASS | golden 20 · filtered · 0-row · **cấm** import P0 | **T-XLS-S15-QA-01** (queued `/agent-qa*`) |

**Không đổi:** API prefix `api/v1/asset/csdl-records` · BFF proxy pattern · soft-delete · pageSize 50/100/200/500 · LeaveConfirm · filter-bar-layout-hard · IdCode `OF-` · typed entity/migration · FormMode CRUD · **cấm** ERP.*.

---

## Source assignment

| Field | Value |
|-------|-------|
| `source.mfe` | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · `ui_repo_confirm` |
| `source.routes` | **keep** `/csdl-bieu-15` + hub · `route_confirm=route_a` |
| `mfeStdRoute` | `/so-ts/csdl-so-sach` · alias `/csdl-bieu-15` |
| `mfeStdUrl` | `http://localhost:9301/so-ts/csdl-so-sach` |
| `hubDeepLink` | `/so-ts/csdl-so-sach?resource=ops-facilities` |
| `peerStdUrl` | cite only so-ts-toll/rest-area/station-house · **cấm** merge toolbar/export |
| `source.backend` | `D:/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` |
| `source.domain` | **Asset** (`asset`) · DOMAIN-MAP keep |
| `source.api` | `api/src/RMMS.Service.Api/Domains/Asset/` · `CsdlCatalogRecordsController` · **widen** export |
| `source.bff` | `bff/domains/asset/` · **proxy binary** export |
| `source.layout` | `micro-src` |
| FE BASE | `/asset/csdl-records` (apiClient → BFF) |
| API prefix | **`api/v1/asset/csdl-records`** · **cấm** invent |
| catalogKind | `ops-facilities` (typed UiSchema keep) |
| entity | shell + `CsdlBieu15Entity` · **`Schema_CsdlBieu15` keep** · **cấm** migration @ XLS |
| `devSlash` | **`/implement-export-import-excel`** · + `/agent-dev` · `/dev-web-responsive` · `/dev-ui-review` · **cấm** OMS |

### Route confirm (keep · autoApprove)

| Option | Path | Decision |
|--------|------|----------|
| A | `/csdl-bieu-15` (+ hub card) | **SELECTED keep** — **cấm** invent URL mới |
| B | hub-only | rejected prior |
| C | invent so-ts / infra API | n/a · **cấm** |

---

## DES-GRID → Lin* map (delta XLS · PASS)

| Zone | Component | XLS delta |
|------|-----------|-----------|
| DES-GRID-A | `LinPageLayout` header | keep |
| DES-GRID-B | `catalogToolbar` / `buildCatalogListToolbarActions` | **+DES-EXPORT** Xuất Excel · Import **ẩn** · peer cite only |
| DES-GRID-C1 / FILTER | `LinErpListFilterBar` | **cấm** export button (GAP-FILTER-BAR-08) · filter QS → export |
| DES-GRID-C2 | `LinCatalogDataGrid` | keep typed subset |
| DES-GRID-D | `LinCatalogListPagination` | export = **filter-all** (no page) |
| DES-GRID-F | `LinCatalogUiSchemaEditorModal` | keep |
| DES-GRID-Z | Slideout Kind D | keep · export **không** dirty Leave |
| Tree / Map | n/a | keep |

---

## API contract (cite SA)

| id | Method | Path | Notes |
|----|--------|------|-------|
| API-XLS-01 | GET | `/api/v1/asset/csdl-records/export?resource=ops-facilities` + filter QS | binary `.xls` · Content-Disposition `Bieu15_TMC_Tram_Hat_{yyyyMMdd}.xls` · filter-all |
| API-XLS-02 | POST | `/api/v1/asset/csdl-records/import?resource=ops-facilities` | **DEFER P1** · **cấm** P0 |
| API-01..05 | keep | CRUD typed | keep |

**BFF:** `GET web-bff/api/v1/asset/csdl-records/export` · proxy binary · **không** JSON wrap · forward QS.

**MFE:** blob download · `a[download]` · filename từ header hoặc fallback · **cấm** toast stub=done · **cấm** filter-bar export.

---

## Q-XLS decisions (locked · PO)

| Q | Decision |
|---|----------|
| Q-XLS-SCOPE | `filtered` |
| Q-XLS-IMPORT | `export_only_p0` (Import DEFER) |
| Q-XLS-FILENAME | `Bieu15_TMC_Tram_Hat_{yyyyMMdd}.xls` |
| Q-XLS-SHEET | `one_sheet` · 20 cột · facility+area+equipment cùng hàng |

---

## Task matrix (T-XLS-S15 · assign Dev)

| ID | Owner | Priority | Slash / notes | Deps | AC (slim) |
|----|-------|----------|---------------|------|-----------|
| T-XLS-S15-BE-01 | BE | P0 | `/implement-export-import-excel` · GET export binary · join Schema_CsdlBieu15 · 20 cols · 1 sheet · filtered filter-all · filename `.xls` | SA PASS | binary · 20 checksum · empty file OK · **cấm** 12+8 · **cấm** ERP.* |
| T-XLS-S15-BFF-01 | BFF | P0 | same slash · proxy binary · QS forward · no JSON wrap | BE-01 | Content-Disposition pass-through |
| T-XLS-S15-FE-01 | FE | P0 | same slash · catalogToolbar Xuất · wire filter QS · Import ẩn · **cấm** filter-bar | Design · BFF | DES-EXPORT visible · GAP-FILTER-BAR-08 |
| T-XLS-S15-FE-02 | FE | P0 | blob download · filename `.xls` · empty OK · fail toast · **cấm** stub done | FE-01 | GAP-BIEU15-XLS-02 |
| T-XLS-S15-QA-01 | QA | P0 | queued `/agent-qa*` only · golden 20 · filtered · 0-row · **cấm** import P0 | FE+BE done | e2e @ QA only |
| T-XLS-S15-BE-02 | BE | **OUT P1** | POST import — **DEFER** | — | **cấm** P0 wire |

### Typed prior (keep · DONE — **cấm** reopen)

| ID | Status | Notes |
|----|--------|-------|
| T-FE-* / T-BE-* / T-UI-* / T-DM-01 | **DONE** (`task_e6ad9bf7`+) | Schema_CsdlBieu15 · CsdlBieu15Page · route_a · hub · **cấm** re-CRUD |

---

## GAP close map

| ID | Owner task | One-liner |
|----|------------|-----------|
| GAP-BIEU15-XLS-01 | FE-01 + BE-01 | Toolbar Xuất binary sheet Biểu 15 |
| GAP-BIEU15-XLS-02 | FE-02 | Toast stub ≠ done |
| GAP-BIEU15-XLS-03 | BE-01 + QA-01 | Golden Cục 16-sheet · cấm 12+8 |
| GAP-BIEU15-XLS-04 | FE-01 | Cấm filter-bar export |
| GAP-BIEU15-XLS-05 | BE-01 + BFF-01 | GET export path (+ QS) |
| GAP-BIEU15-XLS-06 | BE-01 | 1 sheet 20 · facility+area+equipment |
| GAP-BIEU15-XLS-07 | BE-01 + FE-01 | Cấm merge so-ts-toll/rest/station/road-assets |

---

## Gates (cite SA · keep)

| Gate | Value |
|------|-------|
| sa_tz_gate | `tz_na` |
| sa_xco_gate | `xco_get_only` |
| sa_shared_table | `share_tenant` |
| Grid AC | G keep typed · G-04 Xuất · G-05 empty OK · G-06 fail · G-07 golden 20 · G-08 filtered |
| Leave | YES · export không dirty |
| Report | N/A |

---

## Out of pack

- Import wire P0 · HTTP streaming export · org SearchInput · map canvas · peer toolbar merge · Step 4b / entity change · typed new_page reopen

## Open questions

- **none** — team_lead_confirm=approve (autoApprove ON)

---

## DoR Team lead — PASS

- [x] Prior data_analy / po / design / sa **confirmed** + compact
- [x] changeScope=`edit_page` · control-hint + real-data present
- [x] route_confirm=`route_a` keep · **cấm** invent URL
- [x] T-XLS-S15-* matrix đủ · BE-02 OUT P1
- [x] `devSlash`=`/implement-export-import-excel`
- [x] team_lead_confirm=approve
- [x] **cấm** implement code · e2e · yarn build/start:std · Step 4b @ TL
- [x] handoff compact `handoff/team_lead-compact.md`

## UI notes Dev (2026-09-18)

Chrome standalone: label VN **UTF-8** trong `devRoutes.ts` · topbar **không** copy chuỗi (đọc `DEV_MODULES`) · **cấm** PowerShell `Out-File` · live `/csdl-bieu-15` title **Biểu 15 — TMC / thu phí / hạt / kho** (**GAP-DEV-VI-ENC-01**).

## Next

| Role | Need |
|------|------|
| **Dev** | `/implement-export-import-excel` · T-XLS-S15-BE/BFF/FE · **cấm** filter-bar export · Import ẩn |
| QA | queued `/agent-qa*` · T-XLS-S15-QA-01 · **T-QA-VI-ENC-01** live UTF-8 |
| Review | after QA · **REV-UI-VI-ENC-01** |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-team-lead |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.01.02 |
| rulesVersion | 2026.09.17.3 |
| contentHashPrior | `sha256:8a85d68eaef24cf98c312f83a3a100de25b1212e8a751d6f1f42005d38dd0fc8` |
| headerFingerprintPrior | `sha256:0064a4903777f7ea8d51c7423d8451a20daf77a5934929001905edaa380f4fe4` |
| generatedAt | 2026-09-18T02:30:00.000Z |
| versionGate | aligned |
| taskId | task_ad295ce2 |
| packKind | list |
| changeScope | edit_page |
| epic | T-XLS-S15 |
