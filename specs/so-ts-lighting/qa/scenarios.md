# QA — Scenarios — so-ts-lighting

> Status: **PASS** · task `task_9519199c` · `/agent-qa`  
> e2eQa=ON · runtime capture+assert · capturedAt `2026-09-01T20:44:44.725Z`

| | |
|--|--|
| Feature | `so-ts-lighting` |
| Title | Sổ TS — Chiếu sáng đường |
| Role | `qa` |
| packKind | `list` |
| changeScope | `new_page` |
| typeCode | `LIGHTING` |
| dump | `tbl_street_lighting` · tile t18 |
| prefix | `CS-` · icon KCHT `CS` |
| verdict | **PASS** |
| mfeStdUrl | `http://localhost:9301/so-ts?type=LIGHTING` |
| aliasUrl | `http://localhost:9301/so-ts-lighting` |
| formUrl | `http://localhost:9301/so-ts/tao-moi?type=LIGHTING` |
| testid | `rmms-so-ts-lighting-list` · form `rmms-asset-form-shell` · attr `asset-lighting-attr` |
| runtime | docker API `:5111` + BFF `:5201` + `yarn start:std` `:9301` |
| method | `_capture.mjs` + `_live-assert.mjs` · channel=`chrome` · headless |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/asset/road-assets` · **cấm ERP.*** |
| autoApprove | ON |
| contentHashPrior | `sha256:d5601a5c6b83c29e68bbac0fe8ef8a880616a4fc5b053a6480fb82501e90a2aa` |
| prior · dev | **confirmed** · `implement/so-ts-lighting.md` |
| skillVersion | `2026.08.19.04` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| updatedAt | `2026-09-02T08:45:00.000Z` |

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
| Live DOM assert + DTM 1280/768/375 | **PASS** · `live-assert.json` · 0 overflowX · S-LOC-POINT kmFrom only · `asset-lighting-attr` |

> Note: `yarn e2e-qa --skip-start` headed hang sau login banner `:9100` (**GAP-QA-E2E-02**) — capture tương đương Playwright `channel=chrome` headless standalone `:9301` · **không** kill worker.

### Evidence table

| ID | Steps | Expected | Result | Evidence |
|----|-------|----------|--------|----------|
| S0 | Mở `mfeStdUrl` | List `rmms-so-ts-lighting-list-page` · title «Sổ TS — Chiếu sáng đường» · filter-bar · cột ĐV QL/số cột/đèn/MBA/vitri · ẩn type | **PASS** | ![S0](screens/S0.png) |
| S1 | Alias `/so-ts-lighting` | Navigate live cùng LIGHTING list | **PASS** | ![S1](screens/S1.png) |
| QA-20 | `/so-ts/tao-moi?type=LIGHTING` | Form shell · `data-form-cols=5` · S-ATTR lighting · S-LOC-POINT kmFrom only · ẩn kmTo | **PASS** | ![QA-20](screens/QA-20.png) |

`screens/manifest.json` · capturedAt `2026-09-01T20:44:44.725Z` · SHA256_16 S0=`b48f26bcdfb3d8d4` · S1=`b48f26bcdfb3d8d4` · QA-20=`166b623f27e0dbcd`.

---

## T-QA-CRUD-01

| ID | Steps | Expected | Result |
|----|-------|----------|--------|
| QA-20 | Create deep-link / toolbar Tạo mới | Form create · type lock LIGHTING · POST `road-assets` | **PASS** (runtime + code) |
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
| QA-F-02 | S-ATTR: management_id · number_pole_light_bulb · number_light · bulb_type_id · type_transforming_station_id · capacity_transformer · number_control_box · control_method_id · vitri | **PASS** (live `asset-lighting-attr`) |
| QA-F-03 | S-LOC-POINT: kmFrom **hiện** · kmTo **ẩn** · optional khi trống · **cấm** ép `"0"` | **PASS** (live `kmToForm=false`) |
| QA-F-04 | Label «Tên hệ thống» · name optional · trống OK | **PASS** (live + code) |
| QA-F-05 | Dirty leave = `LeaveConfirmModal` · **0** native dialog Asset | **PASS** (code AssetFormPage) |
| QA-F-06 | dumpSpecs 1:1 LIGHTING_ATTR_KEYS · dumpSpecLabels lighting keys | **PASS** (code + BE) |
| QA-F-07 | init-data LOOKUP: `lightingManagementUnits[]` · `bulbTypes[]` · `transformingStationTypes[]` · `controlMethods[]` · `vitriOptions` | **PASS** (BE docker healthy · live options) |
| QA-F-08 | DefaultCodePrefix **CS-** · GAP-LT-PREFIX-01 | **PASS** (BE `DefaultCodePrefix` · live CS-* data) |

---

## T-QA-FILTER-01 / T-QA-FILTER-02

| ID | Check | Result |
|----|-------|--------|
| QA-FB-01 | Fields: search · route · kmFrom · kmTo · org · 🔍 · **type ẩn** deep-link | **PASS** (live) |
| QA-FB-02 | `LinErpListFilterBar` · V1–V5 · **0** export trên bar | **PASS** |
| QA-FB-03 | Title «Danh sách hệ thống chiếu sáng» · type lock giữ khi clear | **PASS** |
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
| QA-CH-02 | Header «Sổ TS — Chiếu sáng đường» · list «Danh sách hệ thống chiếu sáng» | **PASS** |
| QA-CH-03 | **0** `window.alert`/`confirm` trên AssetList/AssetForm | **PASS** |
| QA-CH-04 | **cấm** ERP.* · API `api/v1/asset/road-assets` | **PASS** |

---

## Grid profile (AC-G-05)

| ID | Check | Result |
|----|-------|--------|
| QA-G-01 | ON: management_id · number_pole_light_bulb · number_light · bulb_type_id · type_transforming_station_id · capacity_transformer · number_control_box · control_method_id · vitri | **PASS** (live headers) |
| QA-G-02 | hide-empty: type · kmTo · SL · ĐVT | **PASS** (code LIGHTING_HIDE_COLS) |
| QA-G-03 | ẩn type filter · peer LIGHTING only | **PASS** (type lock) |
| QA-G-04 | Primary list = name + attr cols | **PASS** (live data CS-* lighting) |
| QA-G-05 | Label «Đơn vị QL sử dụng» grid + form | **PASS** (live) |

---

## Debt / GAP

| GAP | Status |
|-----|--------|
| GAP-QA-E2E-02 | `yarn e2e-qa` headed hang (:9100 login) · standalone headless capture PASS |
| GAP-LT-ROUTE-01 | alias redirect only (board) · live PASS |
| GAP-LT-FLAT-01 | flatten DEFER P2 |
| GAP-AK32-07 | Solar*/LampWatt out of scope |
| hide-empty grid runtime | DEFER · profile ENSURE only (peer parity) |
| Auth | DEFER |
| P0 | none |

---

## Next

| Role | Artifact |
|------|----------|
| review | `review/findings.md` · `/agent-review` |
