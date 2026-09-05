# QA — Scenarios — so-ts-retaining

> Status: **PASS** · task `task_5418c3bd` · `/agent-qa`  
> e2eQa=ON · runtime capture+assert · capturedAt `2026-09-01T18:21:09.789Z`

| | |
|--|--|
| Feature | `so-ts-retaining` |
| Title | Sổ TS — Kè / tường chắn |
| Role | `qa` |
| packKind | `list` |
| changeScope | `new_page` |
| typeCode | `RETAINING` |
| dump | `tbl_retaining_wall` · GIS `tuong-chan` · tile t20 |
| prefix | `KE-` (GIS `KE`) |
| verdict | **PASS** |
| mfeStdUrl | `http://localhost:9301/so-ts?type=RETAINING` |
| aliasUrl | `http://localhost:9301/so-ts-retaining` |
| formUrl | `http://localhost:9301/so-ts/tao-moi?type=RETAINING` |
| testid | `rmms-so-ts-retaining-list` · form `rmms-asset-form-shell` · attr `asset-retaining-attr` |
| runtime | docker API `:5111` + BFF `:5201` + `yarn start:std` `:9301` |
| method | `_capture.mjs` + `_live-assert.mjs` · channel=`chrome` · headless |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/asset/road-assets` · **cấm ERP.*** |
| autoApprove | ON |
| contentHashPrior | `sha256:81662f66f48ea982b12b06d93e0716f7449b1356d169541e62a40b377178c061` |
| prior · dev | **confirmed** · `implement/so-ts-retaining.md` |
| skillVersion | `2026.08.19.04` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| updatedAt | `2026-09-02T01:25:00.000Z` |

**Cấm** `phase=done` — next = Review. **cấm** ERP.* · **cấm** invent `api/v1/so-ts/*` · **cấm** kill worker `:9301`.

---

## E2E runtime (e2eQa ON)

| Check | Result |
|-------|--------|
| `docker compose up -d` | **PASS** · api `:5111` · bff `:5201` · postgres healthy · **rebuild** api (LOOKUP RETAINING) |
| init-data LOOKUP | **PASS** · retainingWallTypes=5 · materialTypes=5 · foundationTypes=4 · locationOptions=3 · dumpAssetTypes=3 |
| `yarn start:std` (`:9301`) | **PASS** · already listen · **không** kill (**GAP-QA-E2E-KILL-01**) |
| `yarn typecheck` | **PASS** (`tsc --noEmit`) |
| `LINM_RUN_DEV_LOCAL_BUNDLE=1 yarn build` | **PASS** (webpack · size warnings only · 0 errors) |
| Capture S0 / S1 / QA-20 → `qa/screens/{caseId}.png` | **PASS** · `manifest.json` `ok=true` |
| Live DOM assert + DTM 1280/768/375 | **PASS** · `live-assert.json` · 0 overflowX · form `kmToVisible` · `asset-retaining-attr` |

> Note: `yarn e2e-qa --skip-start` hang 90s (**GAP-QA-E2E-PW-01**) — capture tương đương Playwright `channel=chrome` · API host map **5111** · **không** kill worker.

### Evidence table

| ID | Steps | Expected | Result | Evidence |
|----|-------|----------|--------|----------|
| S0 | Mở `mfeStdUrl` | List `rmms-so-ts-retaining-list-page` · title «Sổ TS — Kè / tường chắn» · filter-bar · cột loại tường/VL/dài/cao/phân đoạn/móng · ẩn type · KE- | **PASS** | ![S0](screens/S0.png) |
| S1 | Alias `/so-ts-retaining` | Navigate live cùng RETAINING list | **PASS** | ![S1](screens/S1.png) |
| QA-20 | `/so-ts/tao-moi?type=RETAINING` | Form shell · `data-form-cols=5` · S-ATTR retaining · S-LOC-RANGE kmTo **hiện** · Loại tường chắn* | **PASS** | ![QA-20](screens/QA-20.png) |

`screens/manifest.json` · capturedAt `2026-09-01T18:21:09.789Z` · SHA256_16 S0=`b28f3a3a14aceafd` · S1=`b28f3a3a14aceafd` · QA-20=`0b8b93586e7511ae`.

---

## T-QA-CRUD-01

| ID | Steps | Expected | Result |
|----|-------|----------|--------|
| QA-20 | Create deep-link / toolbar Tạo mới | Form create · type lock RETAINING · POST `road-assets` | **PASS** (runtime + code) |
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
| QA-F-02 | S-ATTR: retaining_wall_type_id* · material_type_id · actual_protected · average_height · number · foundation_type_id · location_id · asset_type | **PASS** (live `asset-retaining-attr`) |
| QA-F-03 | S-LOC-RANGE: `kmTo` **hiện** · 4 XY dumpSpecs · **cấm** ép `"0"` | **PASS** (live `kmToVisible=true`) |
| QA-F-04 | Label «Loại tường chắn»* · name optional · GAP-RETAINING-NAME-01 | **PASS** (live + code) |
| QA-F-05 | Dirty leave = `LeaveConfirmModal` · **0** native dialog Asset | **PASS** (code AssetFormPage) |
| QA-F-06 | dumpSpecs 1:1 RETAINING_ATTR_KEYS | **PASS** (code + BE) |
| QA-F-07 | init-data LOOKUP: `retainingWallTypes[]` · `materialTypes[]` · `foundationTypes[]` · `locationOptions[]` · `dumpAssetTypes[]` | **PASS** (BE docker healthy) |
| QA-F-08 | DefaultCodePrefix **KE-** · GAP-RETAINING-PREFIX-01 · list codes `KE-*` · form «(tự sinh)» | **PASS** (BE + list live) |

---

## T-QA-FILTER-01 / T-QA-FILTER-02

| ID | Check | Result |
|----|-------|--------|
| QA-FB-01 | Fields 1:1 filter-bar · search · route · kmFrom · kmTo · org · 🔍 · **type ẩn** deep-link | **PASS** (live) |
| QA-FB-02 | `LinErpListFilterBar` · V1–V5 · **0** export trên bar | **PASS** |
| QA-FB-03 | Title «Danh sách kè / tường chắn» · type lock giữ khi clear | **PASS** |
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
| QA-CH-02 | Header «Sổ TS — Kè / tường chắn» · list «Danh sách kè / tường chắn» | **PASS** |
| QA-CH-03 | **0** `window.alert`/`confirm` trên AssetList/AssetForm | **PASS** |
| QA-CH-04 | **cấm** ERP.* · API `api/v1/asset/road-assets` | **PASS** |

---

## Debt / notes

- GAP-QA-E2E-PW-01 · yarn e2e-qa hang · chrome capture fallback
- Docker API **rebuild** required trước E2E (image cũ thiếu LOOKUP RETAINING)
- flatten Schema_* DEFER · Auth DEFER · migration none
- P0 blockers: **none**

## Next

role: **review** · `/agent-review` · write `specs/so-ts-retaining/review/findings.md`
