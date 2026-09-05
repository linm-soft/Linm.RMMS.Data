# QA — Scenarios — so-ts-median

> Status: **PASS** · task `task_3a7a52b1` · `/agent-qa`  
> e2eQa=ON · runtime capture+assert · capturedAt `2026-09-01T17:36:50.831Z`

| | |
|--|--|
| Feature | `so-ts-median` |
| Title | Sổ TS — Dải phân cách |
| Role | `qa` |
| packKind | `list` |
| changeScope | `new_page` |
| typeCode | `MEDIAN` |
| dump | `tbl_median_strip` · GIS `dai-phan-cach` · tile t11 |
| prefix | `PC-` (GIS `GPC`) |
| verdict | **PASS** |
| mfeStdUrl | `http://localhost:9301/so-ts?type=MEDIAN` |
| aliasUrl | `http://localhost:9301/so-ts-median` |
| formUrl | `http://localhost:9301/so-ts/tao-moi?type=MEDIAN` |
| testid | `rmms-so-ts-median-list` · form `rmms-asset-form-shell` · attr `asset-median-attr` |
| runtime | docker API `:5111` + BFF `:5201` + `yarn start:std` `:9301` |
| method | `_capture.mjs` + `_live-assert.mjs` · channel=`chrome` · headless |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/asset/road-assets` · **cấm ERP.*** |
| autoApprove | ON |
| contentHashPrior | `sha256:19145538a01ec132f8d5ebead0c9111d621746cb789c26bf1f6819c5c932c5e5` |
| prior · dev | **confirmed** · `implement/so-ts-median.md` |
| skillVersion | `2026.08.19.04` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| updatedAt | `2026-09-02T00:40:00.000Z` |

**Cấm** `phase=done` — next = Review. **cấm** ERP.* · **cấm** invent `api/v1/so-ts/*` · **cấm** kill worker `:9301`.

---

## E2E runtime (e2eQa ON)

| Check | Result |
|-------|--------|
| `docker compose up -d` | **PASS** · api `:5111` · bff `:5201` · postgres healthy |
| `yarn start:std` (`:9301`) | **PASS** · already listen · **không** kill (**GAP-QA-E2E-KILL-01**) |
| `yarn typecheck` | **PASS** (`tsc --noEmit`) |
| `LINM_RUN_DEV_LOCAL_BUNDLE=1 yarn build` | **PASS** (webpack · size warnings only · 0 errors) |
| Capture S0 / S1 / QA-20 → `qa/screens/{caseId}.png` | **PASS** · `manifest.json` `ok=true` |
| Live DOM assert + DTM 1280/768/375 | **PASS** · `live-assert.json` · 0 overflowX · form `kmToVisible` · `asset-median-attr` |

> Note: `yarn e2e-qa --skip-start` hang vì Pages `:9100` down (**GAP-QA-E2E-PW-01**) — capture tương đương Playwright `channel=chrome` · API host map **5111** · **không** kill worker.

### Evidence table

| ID | Steps | Expected | Result | Evidence |
|----|-------|----------|--------|----------|
| S0 | Mở `mfeStdUrl` | List `rmms-so-ts-median-list-page` · title «Sổ TS — Dải phân cách» · filter-bar · cột loại dải/dài/rộng/cỏ/cây/cao hàng rào/VL · ẩn type | **PASS** | ![S0](screens/S0.png) |
| S1 | Alias `/so-ts-median` | Navigate live cùng MEDIAN list | **PASS** | ![S1](screens/S1.png) |
| QA-20 | `/so-ts/tao-moi?type=MEDIAN` | Form shell · `data-form-cols=5` · S-ATTR median · S-LOC-RANGE kmTo **hiện** · Loại dải* · Select bool cỏ/cây | **PASS** | ![QA-20](screens/QA-20.png) |

`screens/manifest.json` · capturedAt `2026-09-01T17:36:50.831Z` · SHA256_16 S0=`9ed73220e2e6bbf1` · S1=`9ed73220e2e6bbf1` · QA-20=`d63c9ff608376dbc`.

---

## T-QA-CRUD-01

| ID | Steps | Expected | Result |
|----|-------|----------|--------|
| QA-20 | Create deep-link / toolbar Tạo mới | Form create · type lock MEDIAN · POST `road-assets` | **PASS** (runtime + code) |
| QA-21 | Edit | PUT + dumpSpecs merge · leave Modal | **PASS** (code · LeaveConfirmModal wired) |
| QA-22 | View | display/`dl` · **cấm** Input disabled xám | **PASS** (code CatalogFormShell) |
| QA-23 | Copy / Delete | soft DELETE · `useAlert` · **0** `window.confirm` Asset list/form | **PASS** (code · Asset* only) |
| QA-24 | Config | `LinCatalogUiSchemaEditorModal` kind=`road-assets` · **0** `configHint` | **PASS** |
| QA-25 | History | `LinCatalogHistoryModal` | **PASS** (code) |
| QA-26 | Row menu | Xem / Sửa / Sao chép / Lịch sử / Xóa | **PASS** (live hint + code) |

---

## T-QA-FORM-01

| ID | Check | Result |
|----|-------|--------|
| QA-F-01 | Full-page `data-form-cols="5"` | **PASS** (live) |
| QA-F-02 | S-ATTR: type_median_strip_id* · length/width · planting_grass/tree Select bool · height_fence · material_type_fence_id · location_median_strip_id | **PASS** (live `asset-median-attr`) |
| QA-F-03 | S-LOC-RANGE: `kmTo` **hiện** · 4 XY dumpSpecs · **cấm** ép `"0"` | **PASS** (live `kmToVisible=true`) |
| QA-F-04 | Label «Loại dải phân cách»* · name optional · GAP-MEDIAN-NAME-01 | **PASS** (live + code) |
| QA-F-05 | Dirty leave = `LeaveConfirmModal` · **0** native dialog Asset | **PASS** (code AssetFormPage) |
| QA-F-06 | dumpSpecs 1:1 MEDIAN_ATTR_KEYS · dumpSpecLabels 10 key | **PASS** (code + BE) |
| QA-F-07 | init-data LOOKUP: `medianStripTypes[]` · `fenceMaterials[]` · `medianLocations[]` | **PASS** (BE docker healthy · live options) |
| QA-F-08 | DefaultCodePrefix **PC-** · GAP-MEDIAN-PREFIX-01 | **PASS** (BE `DefaultCodePrefix` · create code after save) |

---

## T-QA-FILTER-01 / T-QA-FILTER-02

| ID | Check | Result |
|----|-------|--------|
| QA-FB-01 | Fields 1:1 filter-bar · search · route · kmFrom · kmTo · org · 🔍 · **type ẩn** deep-link | **PASS** (live) |
| QA-FB-02 | `LinErpListFilterBar` · V1–V5 · **0** export trên bar | **PASS** |
| QA-FB-03 | Title «Danh sách dải phân cách» · type lock giữ khi clear | **PASS** |
| QA-FB-04 | DTM headed 1280 + 768 + 375 · 0 overflowX | **PASS** (`live-assert.json` · `filter-{D,T,M}.png`) |

---

## T-QA-TYP-01 / T-QA-TAB-01

| ID | Check | Result |
|----|-------|--------|
| QA-TYP-01 | Label/input qua Common Components | **PASS** (no local break) |
| QA-TAB-01 | Filter leading DOM = visual order · form sequential | **PASS** |
| QA-RESP-01 | List wrap · DTM 0 overflow | **PASS** |

---

## Chrome / end-user

| ID | Check | Result |
|----|-------|--------|
| QA-CH-01 | List/form **tiếng Việt** · **0** badge CREATE/EDIT/VIEW · **0** note demo/stub | **PASS** (live) |
| QA-CH-02 | Header «Sổ TS — Dải phân cách» · list «Danh sách dải phân cách» | **PASS** |
| QA-CH-03 | **0** `window.alert`/`confirm` trên AssetList/AssetForm | **PASS** |
| QA-CH-04 | **cấm** ERP.* · API `api/v1/asset/road-assets` | **PASS** |

---

## Grid profile (AC-G-05)

| ID | Check | Result |
|----|-------|--------|
| QA-G-01 | ON: type_median_strip_id · route 3 tầng · kmFrom/kmTo · length/width · planting_grass/tree · height_fence · material_type_fence_id | **PASS** (live headers) |
| QA-G-02 | hide-empty: location_median_strip_id · province/commune · planting_grass_area · number_tree | **PASS** (code MEDIAN_HIDE_COLS) |
| QA-G-03 | ẩn type · ảnh | **PASS** (code) |
| QA-G-04 | Peer MEDIAN only · linear_protect packs riêng | **PASS** (type lock) |
| QA-G-05 | primary list = type_median_strip_id · GAP-MEDIAN-NAME-01 | **PASS** (code) |

---

## Debt / GAP

| GAP | Status |
|-----|--------|
| GAP-QA-E2E-PW-01 | `yarn e2e-qa` hang (:9100 down) · fallback `_capture.mjs` PASS |
| GAP-MEDIAN-FLAT-01 | flatten DEFER P2 |
| Auth | DEFER |
| P0 | none |

---

## Next

| Role | Artifact |
|------|----------|
| **review** | `/agent-review` · `review/findings.md` |
