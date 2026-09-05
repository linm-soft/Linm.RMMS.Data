# QA — Scenarios — so-ts-row-util

> Status: **PASS** · task `task_45252518` · `/agent-qa`  
> e2eQa=ON · runtime capture+assert · capturedAt `2026-09-01T20:14:06.019Z`

| | |
|--|--|
| Feature | `so-ts-row-util` |
| Title | Sổ TS — CT HTKT trong HL |
| Role | `qa` |
| packKind | `list` |
| changeScope | `new_page` |
| typeCode | `ROW_UTIL` |
| dump | `tbl_infrastructure_row` · tile t08 |
| prefix | `HT-` · icon KCHT `HT` |
| verdict | **PASS** |
| mfeStdUrl | `http://localhost:9301/so-ts?type=ROW_UTIL` |
| aliasUrl | `http://localhost:9301/so-ts-row-util` |
| formUrl | `http://localhost:9301/so-ts/tao-moi?type=ROW_UTIL` |
| testid | `rmms-so-ts-row-util-list` · form `rmms-asset-form-shell` · attr `asset-row-util-attr` |
| runtime | docker API `:5111` + BFF `:5201` + `yarn start:std` `:9301` |
| method | `_capture.mjs` + `_live-assert.mjs` · channel=`chrome` · headless |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/asset/road-assets` · **cấm ERP.*** |
| autoApprove | ON |
| contentHashPrior | `sha256:87269e623cca6623a6c91b030aaf2c2cc6e3dd9c53134ee4d08a5d110f4e96da` |
| prior · dev | **confirmed** · `implement/so-ts-row-util.md` |
| skillVersion | `2026.08.19.04` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| updatedAt | `2026-09-02T08:20:00.000Z` |

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
| Live DOM assert + DTM 1280/768/375 | **PASS** · `live-assert.json` · 0 overflowX · S-LOC-RANGE kmTo · `asset-row-util-attr` |

> Note: `yarn e2e-qa --skip-start` hang sau login banner (**GAP-QA-E2E-PW-01**) — capture tương đương Playwright `channel=chrome` · API host map **5111** · **không** kill worker.

### Evidence table

| ID | Steps | Expected | Result | Evidence |
|----|-------|----------|--------|----------|
| S0 | Mở `mfeStdUrl` | List `rmms-so-ts-row-util-list-page` · title «Sổ TS — CT HTKT trong HL» · filter-bar · cột loại CT/dài/số trụ/chủ · ẩn type | **PASS** | ![S0](screens/S0.png) |
| S1 | Alias `/so-ts-row-util` | Navigate live cùng ROW_UTIL list | **PASS** | ![S1](screens/S1.png) |
| QA-20 | `/so-ts/tao-moi?type=ROW_UTIL` | Form shell · `data-form-cols=5` · S-ATTR row-util · S-LOC-RANGE kmFrom+kmTo · Dropdown type_work | **PASS** | ![QA-20](screens/QA-20.png) |

`screens/manifest.json` · capturedAt `2026-09-01T20:14:06.019Z` · SHA256_16 S0=`cbbf7d91035c7729` · S1=`cbbf7d91035c7729` · QA-20=`d9872d306e8d3e92`.

---

## T-QA-CRUD-01

| ID | Steps | Expected | Result |
|----|-------|----------|--------|
| QA-20 | Create deep-link / toolbar Tạo mới | Form create · type lock ROW_UTIL · POST `road-assets` | **PASS** (runtime + code) |
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
| QA-F-02 | S-ATTR: type_work_id · length · number_post · owner · located_within · protection · support · hiring · build_location | **PASS** (live `asset-row-util-attr`) |
| QA-F-03 | S-LOC-RANGE: kmFrom+kmTo **hiện** · optional khi trống · **cấm** ép `"0"` | **PASS** (live `kmToForm=true`) |
| QA-F-04 | Label «Công trình HTKT» · name ← tencongtrinh_htk · trống OK | **PASS** (live + code) |
| QA-F-05 | Dirty leave = `LeaveConfirmModal` · **0** native dialog Asset | **PASS** (code AssetFormPage) |
| QA-F-06 | dumpSpecs 1:1 ROW_UTIL_ATTR_KEYS · dumpSpecLabels HTKT keys (typo `protection_tructure` giữ) | **PASS** (code + BE) |
| QA-F-07 | init-data LOOKUP: `rowUtilWorkTypes[]` · `rowUtilLocatedWithin[]` · `rowUtilProtectionTypes[]` · `rowUtilSupportTypes[]` · `rowUtilHiringStatuses[]` · `rowUtilCrossSections[]` | **PASS** (BE docker healthy · live options) |
| QA-F-08 | DefaultCodePrefix **HT-** · GAP-ROWUTIL-PREFIX-01 | **PASS** (BE `DefaultCodePrefix` · live HT-infrastructure_row_*) |

---

## T-QA-FILTER-01 / T-QA-FILTER-02

| ID | Check | Result |
|----|-------|--------|
| QA-FB-01 | Fields: search · route · kmFrom · kmTo · org · 🔍 · **type ẩn** deep-link | **PASS** (live) |
| QA-FB-02 | `LinErpListFilterBar` · V1–V5 · **0** export trên bar | **PASS** |
| QA-FB-03 | Title «Danh sách công trình HTKT» · type lock giữ khi clear | **PASS** |
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
| QA-CH-02 | Header «Sổ TS — CT HTKT trong HL» · list «Danh sách công trình HTKT» | **PASS** |
| QA-CH-03 | **0** `window.alert`/`confirm` trên AssetList/AssetForm | **PASS** |
| QA-CH-04 | **cấm** ERP.* · API `api/v1/asset/road-assets` | **PASS** |

---

## Grid profile (AC-G-05)

| ID | Check | Result |
|----|-------|--------|
| QA-G-01 | ON: type_work_id · length · number_post · owner · route · kmFrom · kmTo | **PASS** (live headers) |
| QA-G-02 | hide-empty: type · SL · ĐVT · distance attrs | **PASS** (code ROW_UTIL_HIDE_COLS) |
| QA-G-03 | ẩn type filter · peer ROW_UTIL only | **PASS** (type lock) |
| QA-G-04 | Primary list = name/CT HTKT + attr cols | **PASS** (live data HT-infrastructure_row_*) |
| QA-G-05 | Label «Loại công trình» grid + form | **PASS** (live) |

---

## QA fixes during e2e (minimal)

| Fix | File | Reason |
|-----|------|--------|
| S-LOC-RANGE kmTo hiện trên form | `AssetFormPage.tsx` | GAP-ROWUTIL-RANGE-01 · bỏ ROW_UTIL khỏi kmTo exclusion |
| Grid cols `number_post` · `owner` | `AssetListPage.tsx` | GAP-ROWUTIL-GRID-01 · ENSURE_COLS thiếu column def |

---

## Debt / GAP

| GAP | Status |
|-----|--------|
| GAP-QA-E2E-PW-01 | `yarn e2e-qa` hang (:9100 down) · fallback `_capture.mjs` PASS |
| GAP-ROWUTIL-ROUTE-01 | alias redirect only (board) · live PASS |
| GAP-ROWUTIL-FLAT-01 | flatten DEFER P2 |
| hide-empty grid runtime | DEFER · profile ENSURE only (peer parity) |
| Auth | DEFER |
| P0 | none |

---

## Next

| Role | Artifact |
|------|----------|
| **review** | `/agent-review` · `review/findings.md` |
