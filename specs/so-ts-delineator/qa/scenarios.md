# QA — Scenarios — so-ts-delineator

> Status: **PASS** · task `task_e51817dc` · `/agent-qa`  
> e2eQa=ON · runtime capture+assert · capturedAt `2026-09-01T15:13:29.469Z`

| | |
|--|--|
| Feature | `so-ts-delineator` |
| Title | Sổ TS — Cọc tiêu / cọc H |
| Role | `qa` |
| packKind | `list` |
| changeScope | `new_page` |
| typeCode | `DELINEATOR` |
| dump | `tbl_guide_post` · GIS `coc-tieu` · tile t14 |
| verdict | **PASS** |
| mfeStdUrl | `http://localhost:9301/so-ts?type=DELINEATOR` |
| aliasUrl | `http://localhost:9301/so-ts-delineator` |
| formUrl | `http://localhost:9301/so-ts/tao-moi?type=DELINEATOR` |
| testid | `rmms-so-ts-delineator-list-page` · form `rmms-asset-form-shell` · meta `asset-delineator-meta` · tiêu `asset-delineator-tieu` · H `asset-delineator-h` |
| runtime | docker API `:5111` + BFF `:5201` + `yarn start:std` `:9301` |
| method | `_capture.mjs` + `_live-assert.mjs` · channel=`chrome` · headless |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/asset/road-assets` · **cấm ERP.*** |
| autoApprove | ON |
| contentHashPrior | `sha256:9a116268e7b5c333125d903498bf9135379c2f6a5863d309ff5f1d8055a397b9` |
| prior · dev | **confirmed** · `implement/so-ts-delineator.md` · `task_584278f1` |
| skillVersion | `2026.08.19.04` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| updatedAt | `2026-09-01T15:20:00.000Z` |

**Cấm** `phase=done` — next = Review. **cấm** ERP.* · **cấm** invent `api/v1/so-ts/*` · **cấm** kill worker `:9301`.

---

## E2E runtime (e2eQa ON)

| Check | Result |
|-------|--------|
| `docker compose up -d --build` | **PASS** · api `:5111` · bff `:5201` · postgres healthy · init-data `postTypes=5` · `guidePostMaterials=6` · `hGuidePostMaterials=6` · `installedLocations=6` |
| `yarn start:std` (`:9301`) | **PASS** · listen (reuse) · **không** kill (**GAP-QA-E2E-KILL-01**) |
| `yarn typecheck` | **PASS** (`tsc --noEmit`) |
| `LINM_RUN_DEV_LOCAL_BUNDLE=1 yarn build` | **PASS** (webpack · size warnings only · 0 errors) |
| Capture S0 / S1 / QA-20 → `qa/screens/{caseId}.png` | **PASS** · `manifest.json` `ok=true` |
| Live DOM assert + DTM 1280/768/375 | **PASS** · `live-assert.json` · 0 overflowX · form `kmToHiddenOk` |

> Note: `yarn e2e-qa` headed hang (**GAP-QA-E2E-PW-01**) — capture tương đương Playwright `channel=chrome` · `--skip-start` · API host map **5111**. Stale docker thiếu LOOKUP DELINEATOR → rebuild fix (**GAP-QA-E2E-DOCKER-01**).

### Evidence table

| ID | Steps | Expected | Result | Evidence |
|----|-------|----------|--------|----------|
| S0 | Mở `mfeStdUrl` | List `rmms-so-ts-delineator-list-page` · title «Sổ TS — Cọc tiêu / cọc H» · filter-bar · cột loại kiểu/Vị trí/VL tiêu+H · ẩn type/kmTo grid | **PASS** | ![S0](screens/S0.png) |
| S1 | Alias `/so-ts-delineator` | Navigate live cùng DELINEATOR list | **PASS** | ![S1](screens/S1.png) |
| QA-20 | `/so-ts/tao-moi?type=DELINEATOR` | Form shell · `data-form-cols=5` · S-ATTR 2 nhóm tiêu/H · S-LOC-POINT kmTo **ẩn** · «Tên cọc» | **PASS** | ![QA-20](screens/QA-20.png) |

`screens/manifest.json` · capturedAt `2026-09-01T15:13:29.469Z` · SHA256_16 S0=`454630671204e1ee` · S1=`454630671204e1ee` (alias=list) · QA-20=`2d336319a8e260ae`.

---

## T-QA-CRUD-01

| ID | Steps | Expected | Result |
|----|-------|----------|--------|
| QA-20 | Create deep-link / toolbar Tạo mới | Form create · type lock DELINEATOR · POST `road-assets` | **PASS** (runtime + code) |
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
| QA-F-02 | S-ATTR nhóm tiêu: VL/KC/DxRxC/SL · nhóm H: h_* · meta loại kiểu + vị trí đặt | **PASS** (live `asset-delineator-tieu`/`-h`/`-meta`) |
| QA-F-03 | S-LOC-POINT: `kmTo` **ẩn** · **cấm** ép `"0"` | **PASS** (live `kmToVisible=false`) |
| QA-F-04 | Label «Tên cọc» · name ≠ đoạn tuyến · GAP-DELIM-NAME-01 | **PASS** (live + code ResolveDelineatorName) |
| QA-F-05 | Dirty leave = `LeaveConfirmModal` · **0** native dialog Asset | **PASS** (code AssetFormPage) |
| QA-F-06 | qty ← `total_number_*` · dumpSpecs 1:1 | **PASS** (code + BE) |
| QA-F-07 | init-data LOOKUP: `postTypes` · `guidePostMaterials` · `hGuidePostMaterials` · `installedLocations` | **PASS** (BFF counts 5/6/6/6) |

---

## T-QA-FILTER-01 / T-QA-FILTER-02

| ID | Check | Result |
|----|-------|--------|
| QA-FB-01 | Fields 1:1 filter-bar · search · route · kmFrom · kmTo · org · 🔍 · **type ẩn** deep-link | **PASS** (live) |
| QA-FB-02 | `LinErpListFilterBar` · V1–V5 · **0** export trên bar | **PASS** |
| QA-FB-03 | Title «Danh sách cọc tiêu / cọc H» · type lock giữ khi clear | **PASS** |
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
| QA-CH-02 | Header «Sổ TS — Cọc tiêu / cọc H» · list «Danh sách cọc tiêu / cọc H» | **PASS** |
| QA-CH-03 | **0** `window.alert`/`confirm` trên AssetList/AssetForm | **PASS** |
| QA-CH-04 | **cấm** ERP.* · API `api/v1/asset/road-assets` | **PASS** |

---

## Grid profile (AC-G-05)

| Check | Result |
|-------|--------|
| Hide cols `type` / `kmTo` / `unitCode` khi DELINEATOR | **PASS** (code + live headers) |
| Show `h_post_type_id` · `installed_location_id` · tiêu+H dump cols · quantity | **PASS** (live: Loại kiểu / Vị trí / VL tiêu / SL / VL H …) |

---

## Debt / GAP

| ID | Severity | Note |
|----|----------|------|
| GAP-QA-E2E-PW-01 | P2 | `yarn e2e-qa` headed hang · contract chrome capture |
| GAP-QA-E2E-DOCKER-01 | P2 | Stale image thiếu LOOKUP → `docker compose up -d --build` |
| GAP-QA-E2E-KILL-01 | HARD | **cấm** kill `:9301` / worker |
| GAP-DELIM-FLAT-01 | DEFER | flatten dumpSpecs |
| Auth | DEFER | — |

**P0 blockers:** none

---

## Next

role: **review** · `/agent-review`  
write: `specs/so-ts-delineator/review/findings.md`  
compact: `handoff/qa-compact.md`
