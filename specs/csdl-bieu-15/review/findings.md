# Review — Findings — csdl-bieu-15

| | |
|--|--|
| Feature | `csdl-bieu-15` |
| Title | CSDL Biểu 15 — TMC / thu phí / hạt / kho · **T-XLS-S15** |
| Role | `review` · `/agent-review` |
| packKind | `list` |
| changeScope | `edit_page` |
| resource | `ops-facilities` |
| formNo | `15` |
| IdCode | `OF-` |
| taskId | `task_9dc96940` |
| priorQa | `task_2d0725d3` · verdict **PASS** |
| priorDev | `task_88a1f9c1` · yarn/dotnet **PASS** |
| priorTypedReview | `task_0c28671f` · **keep** PASS |
| contentHash | `sha256:8a85d68eaef24cf98c312f83a3a100de25b1212e8a751d6f1f42005d38dd0fc8` |
| headerFingerprint | `sha256:0064a4903777f7ea8d51c7423d8451a20daf77a5934929001905edaa380f4fe4` |
| hashGate | **SKIP** (unchanged vs data_analy → qa XLS chain) |
| review_confirm | **approve** (autoApprove ON) |
| verdict | **PASS** |
| skillVersion | `2026.08.29.03` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.17.3` |
| reviewedAt | `2026-09-18T02:50:00.000Z` |

## Scope checked

| Layer | Evidence |
|-------|----------|
| Compact chain | data_analy → po → design → sa → team_lead → dev → qa (all **confirmed** · XLS) |
| Delta | Toolbar **Xuất Excel** · Import **ẩn** · typed 20 KEEP · Schema_CsdlBieu15 KEEP |
| FE | `CsdlBieu15Page.tsx` · `canExportExcel` + `handleExportExcel` · filter QS · **0** export trên `LinErpListFilterBar` |
| FE svc | `endpoint.ts` `exportExcel` · fallback `Bieu15_TMC_Tram_Hat_{yyyyMMdd}.xls` · BASE `/asset/csdl-records` |
| BE | `CsdlCatalogExcelService` ops-facilities · sheet `Biểu 15` · `Bieu15ExportHeaders` **20** · one_sheet flat |
| BFF | `CsdlCatalogRecordsBffController` → `api/v1/asset/csdl-records/export` binary |
| QA | S0/S1/QA-20 + S-XLS-EXPORT PASS · `Bieu15_TMC_Tram_Hat_20260918.xls` · hasImport=false · filterBarHasExport=false |

## Hash gate

- contentHash / headerFingerprint **match** prior compact chain → **không** re-scan demo / data-analy.
- 20 cột header ổn định: `code|roadCode|roadName|province|kmFrom|kmTo|facilityKind|facilityName|courtyardAreaM2|buildingQty|buildingAreaM2|otherStructQty|otherStructAreaM2|status|yearBuilt|equipmentKind|equipmentQty|equipmentStatus|manageUnit|notes`

---

## QUERY

| ID | Sev | Finding | Verdict |
|----|-----|---------|---------|
| Q-01 | — | List filter keep · export QS forward search/province/status/facilityKind/roadCode/kmFrom–kmTo/from–to · **không** page | **PASS** |
| Q-02 | — | Export GET `…/csdl-records/export?resource=ops-facilities` · BFF proxy · **không** ERP.* / invent infra | **PASS** |
| Q-03 | — | Empty filter = all tenant resource · filtered scope Q-XLS-SCOPE | **PASS** |
| Q-04 | — | CRUD typed keep · export không dirty Leave | **PASS** (reuse) |
| Q-05 | info | Auth `RequirePermission` wire **DEFER** (carry typed) | **ACCEPT** debt |

**QUERY summary:** 0 blocker · 0 major.

---

## SEC

| ID | Sev | Finding | Verdict |
|----|-----|---------|---------|
| S-01 | — | Domain Asset only · **cấm** ERP.* (FE + Asset path sạch) | **PASS** |
| S-02 | — | Gates tz_na · xco_get_only · share_tenant — export inherit list XCO | **PASS** |
| S-03 | — | **Không** merge so-ts-toll/rest/station/road-assets | **PASS** |
| S-04 | info | Permission reuse `asset.csdl-records.*` · wire DEFER | **ACCEPT** debt |
| S-05 | — | Import POST **OUT P1** · không mở write surface mới @ P0 | **PASS** |

**SEC summary:** 0 blocker · 0 major.

---

## UI-FN

| ID | Sev | Finding | Verdict |
|----|-----|---------|---------|
| U-01 | — | Kind B+D keep · Slideout 20 · typed CRUD **không** reopen | **PASS** |
| U-02 | — | G-04 catalogToolbar `canExportExcel` / `onExportExcel` · binary download | **PASS** |
| U-03 | — | GAP-FILTER-BAR-08 · **0** Xuất trên `LinErpListFilterBar` (QA assert) | **PASS** |
| U-04 | — | Import **ẩn** · export_only_p0 · S-XLS-IMPORT hidden | **PASS** |
| U-05 | — | Toast sau blob download · empty copy OK · fail toast · **≠** stub-done trước response | **PASS** |
| U-06 | — | Filename `Bieu15_TMC_Tram_Hat_{yyyyMMdd}.xls` (QA live-assert) | **PASS** |
| U-07 | — | route_a / hub alias keep · peer/map none_p1 | **PASS** |
| U-08 | P3 | GAP-QA-ROAD-TESTID (carry typed) | **ACCEPT** P3 |

**UI-FN summary:** 0 blocker · 0 major · 1 P3 debt.

---

## BE-FN

| ID | Sev | Finding | Verdict |
|----|-----|---------|---------|
| B-01 | — | `Bieu15ExportHeaders` = 20 · facility+area+equipment **cùng hàng** · **cấm** 12+8 / sheet CT/TB | **PASS** |
| B-02 | — | Sheet name `Biểu 15` · `BuildXlsx` · filename `Bieu15_TMC_Tram_Hat_{yyyyMMdd}.xls` | **PASS** |
| B-03 | — | Schema_CsdlBieu15 **KEEP** · **không** migration/entity change @ XLS | **PASS** |
| B-04 | — | BFF binary proxy QS forward · ExportPageSizeCap | **PASS** |
| B-05 | — | API-XLS-02 import **OUT P1** · BE-02 DEFER | **PASS** (by design) |
| B-06 | — | Streaming **không** @ P0 | **PASS** |

**BE-FN summary:** 0 blocker · 0 major.

---

## GAP matrix (XLS) — closed

| ID | Status |
|----|--------|
| GAP-BIEU15-XLS-01 | **CLOSED** Toolbar Xuất binary |
| GAP-BIEU15-XLS-02 | **CLOSED** Toast stub ≠ done |
| GAP-BIEU15-XLS-03 | **CLOSED** Golden 20 · cấm 12+8 |
| GAP-BIEU15-XLS-04 | **CLOSED** Cấm filter-bar export |
| GAP-BIEU15-XLS-05 | **CLOSED** GET export (+ QS) |
| GAP-BIEU15-XLS-06 | **CLOSED** 1 sheet 20 flat |
| GAP-BIEU15-XLS-07 | **CLOSED** Cấm merge peer |

---

## QA evidence (cite · không re-run e2e)

| Case | Result | sha16 | Note |
|------|--------|-------|------|
| S0 | PASS | `889e611b9d7ddb8d` | list |
| S1 | PASS | `47b664218df534e0` | hub redirect |
| QA-20 | PASS | `4d5914adbda87210` | Slideout Z2/Z3 · OF- |
| S-XLS-EXPORT | PASS | — | `Bieu15_TMC_Tram_Hat_20260918.xls` · hasImport=false · filterBarHasExport=false |

- yarnBuild **PASS** · dotnetBuild **PASS** · e2eQa **PASS** (`task_2d0725d3`)
- **Cấm** re-run e2e / yarn build / start:std @ Review

---

## Debt carry-forward (không block)

| ID | Pri | Note |
|----|-----|------|
| Auth wire | DEFER | RequirePermission |
| GAP-CSDL-ORG-01 | P2 | manageUnit → org SearchInput |
| GAP-CSDL-XLS-01 / T-XLS-S15-BE-02 | OUT P1 | Import sheet Biểu 15 |
| GAP-QA-E2E-PW-01 | P2 | yarn e2e-qa → chrome createRequire |
| GAP-QA-ROAD-TESTID | P3 | duplicate road testid |
| Peer/map | none_p1 | by PO/SA |

## review_confirm

- autoApprove=ON → **approve**
- fix_gaps: **none**
- phase: review **confirmed** · pipeline feature **done** (Review last role · XLS Wave 1 T-XLS-S15)

## Verdict

**PASS** — QUERY/SEC/UI-FN/BE-FN sạch blocker; XLS GAPs CLOSED; QA + Dev builds PASS; hash unchanged; Import/Auth debt deferred P1.
