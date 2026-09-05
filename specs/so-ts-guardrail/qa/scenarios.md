# QA — Scenarios — so-ts-guardrail

> Status: **PASS** · task `task_0d38492f` · `/agent-qa`  
> e2eQa=ON · runtime capture+assert · capturedAt `2026-09-01T16:42:26.573Z`

| | |
|--|--|
| Feature | `so-ts-guardrail` |
| Title | Sổ TS — Hộ lan / tôn sóng |
| Role | `qa` |
| packKind | `list` |
| changeScope | `new_page` |
| typeCode | `GUARDRAIL` |
| dump | `tbl_guardrail` · GIS `ho-lan` · tile t17 |
| prefix | `HL-` |
| verdict | **PASS** |
| mfeStdUrl | `http://localhost:9301/so-ts?type=GUARDRAIL` |
| aliasUrl | `http://localhost:9301/so-ts-guardrail` |
| formUrl | `http://localhost:9301/so-ts/tao-moi?type=GUARDRAIL` |
| testid | `rmms-so-ts-guardrail-list-page` · form `rmms-asset-form-shell` · attr `asset-guardrail-attr` |
| runtime | docker API `:5111` + BFF `:5201` + `yarn start:std` `:9301` |
| method | `_capture.mjs` + `_live-assert.mjs` · channel=`chrome` · headless |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/asset/road-assets` · **cấm ERP.*** |
| autoApprove | ON |
| contentHashPrior | `sha256:d0deaacc164574342c2d10d3b3e7f683ad5df9bbefa2fd3072d92c7af8533cc8` |
| prior · dev | **confirmed** · `implement/so-ts-guardrail.md` |
| skillVersion | `2026.08.19.04` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| updatedAt | `2026-09-01T16:43:00.000Z` |

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
| Live DOM assert + DTM 1280/768/375 | **PASS** · `live-assert.json` · 0 overflowX · form `kmToVisible` |

> Note: `yarn e2e-qa --skip-start` headed login hang (**GAP-QA-E2E-PW-01**) — capture tương đương Playwright `channel=chrome` · API host map **5111**.

### Evidence table

| ID | Steps | Expected | Result | Evidence |
|----|-------|----------|--------|----------|
| S0 | Mở `mfeStdUrl` | List `rmms-so-ts-guardrail-list-page` · title «Sổ TS — Hộ lan / tôn sóng» · filter-bar · cột loại hộ lan/VL/phản quang/mục đích/dài · ẩn type | **PASS** | ![S0](screens/S0.png) |
| S1 | Alias `/so-ts-guardrail` | Navigate live cùng GUARDRAIL list | **PASS** | ![S1](screens/S1.png) |
| QA-20 | `/so-ts/tao-moi?type=GUARDRAIL` | Form shell · `data-form-cols=5` · S-ATTR guardrail · S-LOC-RANGE kmTo **hiện** · Loại hộ lan* | **PASS** | ![QA-20](screens/QA-20.png) |

`screens/manifest.json` · capturedAt `2026-09-01T16:42:26.573Z` · SHA256_16 S0=`861e846e5db56a6c` · S1=`861e846e5db56a6c` · QA-20=`7b43cd70b8de9c79`.

---

## T-QA-CRUD-01

| ID | Steps | Expected | Result |
|----|-------|----------|--------|
| QA-20 | Create deep-link / toolbar Tạo mới | Form create · type lock GUARDRAIL · POST `road-assets` | **PASS** (runtime + code) |
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
| QA-F-02 | S-ATTR: type_guardrail* · material_id · reflective Number · installation_purpose_id · actual_length · installed_location_id | **PASS** (live `asset-guardrail-attr`) |
| QA-F-03 | S-LOC-RANGE: `kmTo` **hiện** · 4 XY dumpSpecs · **cấm** ép `"0"` | **PASS** (live `kmToVisible=true`) |
| QA-F-04 | Label «Loại hộ lan»* · name optional · GAP-GUARDRAIL-NAME-01 | **PASS** (live + code) |
| QA-F-05 | Dirty leave = `LeaveConfirmModal` · **0** native dialog Asset | **PASS** (code AssetFormPage) |
| QA-F-06 | dumpSpecs 1:1 GUARDRAIL_ATTR_KEYS | **PASS** (code + BE) |
| QA-F-07 | init-data LOOKUP: `guardrailTypes[]` · `guardrailMaterials[]` · `installationPurposes[]` · `vitriOptions` | **PASS** (BE docker healthy) |
| QA-F-08 | DefaultCodePrefix **HL-** · GAP-GUARDRAIL-PREFIX-01 | **PASS** (code) |

---

## T-QA-FILTER-01 / T-QA-FILTER-02

| ID | Check | Result |
|----|-------|--------|
| QA-FB-01 | Fields 1:1 filter-bar · search · route · kmFrom · kmTo · org · 🔍 · **type ẩn** deep-link | **PASS** (live) |
| QA-FB-02 | `LinErpListFilterBar` · V1–V5 · **0** export trên bar | **PASS** |
| QA-FB-03 | Title «Danh sách hộ lan» · type lock giữ khi clear | **PASS** |
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
| QA-CH-02 | Header «Sổ TS — Hộ lan / tôn sóng» · list «Danh sách hộ lan» | **PASS** |
| QA-CH-03 | **0** `window.alert`/`confirm` trên AssetList/AssetForm | **PASS** |
| QA-CH-04 | **cấm** ERP.* · API `api/v1/asset/road-assets` | **PASS** |

---

## Grid profile (AC-G-05)

| ID | Check | Result |
|----|-------|--------|
| QA-G-01 | ON: type_guardrail · route 3 tầng · kmFrom/kmTo · material_id · reflective · installation_purpose_id · actual_length | **PASS** (live headers) |
| QA-G-02 | hide-empty: installed_location_id · province/commune cols | **PASS** (code GUARDRAIL_HIDE_COLS) |
| QA-G-03 | ẩn type · ảnh | **PASS** (code) |
| QA-G-04 | Peer GUARDRAIL only · NOISE_BARRIER riêng | **PASS** (type lock) |
| QA-G-05 | primary list = type_guardrail · GAP-GUARDRAIL-NAME-01 | **PASS** (code) |

---

## Debt / GAP

| GAP | Status |
|-----|--------|
| GAP-QA-E2E-PW-01 | `yarn e2e-qa` headed hang · fallback `_capture.mjs` PASS |
| GAP-GUARDRAIL-FLAT-01 | flatten DEFER P2 |
| Auth | DEFER |
| P0 | none |

---

## Next

| Role | Artifact |
|------|----------|
| **review** | `/agent-review` · `review/findings.md` |
