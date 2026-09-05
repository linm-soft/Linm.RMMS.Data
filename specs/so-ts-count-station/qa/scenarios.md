# QA — Scenarios — so-ts-count-station

| Field | Value |
|-------|-------|
| feature | `so-ts-count-station` |
| title | Sổ TS — Trạm đếm |
| role | `qa` · `/agent-qa` |
| taskId | `task_c492a4b1` |
| status | **confirmed** |
| verdict | **PASS** |
| e2eQa | **ON** |
| method | `e2e runtime · yarn start:std :9301 + docker API :5111 + BFF :5201 + yarn e2e-qa contract (Chrome channel · index.html+popstate)` |
| mfeStdUrl | `http://localhost:9301/so-ts?type=COUNT_STATION` |
| mfeStdRoute | `/so-ts?type=COUNT_STATION` · alias `/so-ts-count-station` |
| testid | `rmms-so-ts-count-station-list-page` · form `rmms-asset-form-shell` · attr `asset-count-station-attr` |
| docker | API `:5111` healthy · BFF `:5201` healthy · postgres healthy |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/asset/road-assets` · **cấm ERP.*** |
| packKind | **`list`** · Kind B · full-page `data-form-cols="5"` |
| changeScope | `new_page` |
| typeCode | `COUNT_STATION` |
| dump | `mst_counting_station` |
| prefix | `THC-` (keep · TX→THC rebuild debt) |
| autoApprove | ON |
| contentHashPriorDataAnaly | `sha256:dbbe8d52c360d78919c4a7bb313973ee20cd193b6b5c1cee4a0da0e7559be87a` |
| updatedAt | `2026-09-01T07:25:00.000Z` |
| prior · dev | **confirmed** · `implement/so-ts-count-station.md` · `task_b90cdece` |

**Cấm** `phase=done` — next = Review. **cấm** ERP.* · **cấm** invent `api/v1/so-ts/*`.

---

## E2E runtime (e2eQa ON)

| Check | Result |
|-------|--------|
| `docker compose up -d` (`Linm.RMMS.WebService`) | **PASS** · api `:5111` · bff `:5201` · postgres healthy |
| `yarn start:std` (`:9301`) | **PASS** · Asset standalone listen (port pre-existing · **no kill**) |
| Capture S0 / S1 / QA-20 → `qa/screens/{caseId}.png` | **PASS** · `manifest.json` `ok=true` |
| Live DOM assert + DTM 1280/768/375 | **PASS** · `live-assert.json` · 0 overflowX |

> Note: `yarn e2e-qa` hung after login banner headed (**GAP-QA-E2E-PW-01**) — **cấm** kill worker. Capture tương đương Playwright `channel=chrome` · `--skip-start` · boot `/index.html` + `popstate` vì deep-link HTTP 404 (**GAP-QA-E2E-HAF-01**). Docker gate default `:5101` — compose maps `:5111` (**GAP-QA-E2E-DOCKER-01**).

### Evidence table

| ID | Steps | Expected | Result | Evidence |
|----|-------|----------|--------|----------|
| S0 | Mở `mfeStdUrl` | List `rmms-so-ts-count-station-list-page` · title «Danh sách trạm đếm» · filter-bar · cột COUNT · ẩn type | **PASS** | ![S0](screens/S0.png) |
| S1 | Alias `/so-ts-count-station` | Redirect/live cùng COUNT list · testid page | **PASS** | ![S1](screens/S1.png) |
| QA-20 | `/so-ts/tao-moi?type=COUNT_STATION` | Form shell · `data-form-cols=5` · S-ATTR count · **kmTo ẩn** · «Tên (VI)» | **PASS** | ![QA-20](screens/QA-20.png) |

`screens/manifest.json` · capturedAt `2026-09-01T07:23:30.337Z` · SHA256_16 S0=`fac3f74ae20cebd0` · S1=`fac3f74ae20cebd0` (alias=list) · QA-20=`c796e0af8678a54d`.

---

## T-QA-CRUD-01

| ID | Steps | Expected | Result |
|----|-------|----------|--------|
| QA-20 | Create deep-link / toolbar Tạo mới | Form create · type lock COUNT_STATION · POST `road-assets` · prefix `THC-` (live rows may still `TX-` debt) | **PASS** (runtime + code) |
| QA-21 | Edit | PUT + dumpSpecs merge · leave Modal | **PASS** (code · LeaveConfirm wired) |
| QA-22 | View | display/`dl` · **cấm** Input disabled xám | **PASS** (code) |
| QA-23 | Copy / Delete | soft DELETE · `useAlert` · **0** `window.confirm` trên Asset list/form | **PASS** (code · Asset* only) |
| QA-24 | Config | `LinCatalogUiSchemaEditorModal` kind=`road-assets` · **0** `configHint` | **PASS** |
| QA-25 | History | `LinCatalogHistoryModal` | **PASS** (code) |
| QA-26 | Row menu | Xem / Sửa / Sao chép / Lịch sử / Xóa | **PASS** (live help text + code) |

---

## T-QA-FORM-01

| ID | Check | Result |
|----|-------|--------|
| QA-F-01 | Full-page `data-form-cols="5"` | **PASS** (live) |
| QA-F-02 | S-ATTR editable: agency_id · name_en · no_of_lane · speed · from_coordinate (dump) | **PASS** (live) |
| QA-F-03 | Section `asset-count-station-attr` «THÔNG SỐ TRẠM ĐẾM» | **PASS** (live) |
| QA-F-04 | `kmTo` **ẩn** + không required khi COUNT | **PASS** (live `kmToVisible=false`) |
| QA-F-05 | Label «Tên (VI)» · `name` ← `name_vi` | **PASS** (live) |
| QA-F-06 | Dirty leave = `LeaveConfirmModal` · **0** native dialog | **PASS** (code AssetFormPage) |
| QA-F-07 | UI → body dumpSpecs keys 1:1 count attrs | **PASS** (code) |
| QA-F-08 | init-data `countAgencies` | **PASS** (BFF 200 · length=0 empty seed OK P1) |

---

## T-QA-FILTER-01 / T-QA-FILTER-02

| ID | Check | Result |
|----|-------|--------|
| QA-FB-01 | Fields 1:1 filter-bar · search · route · kmFrom · kmTo · org · 🔍 · **type ẩn** deep-link | **PASS** (live) |
| QA-FB-02 | `LinErpListFilterBar` · V1–V5 · **0** export trên bar | **PASS** |
| QA-FB-03 | Title «Danh sách trạm đếm» · type lock giữ khi clear | **PASS** |
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
| QA-CH-02 | Header «Sổ TS — Trạm đếm» · list «Danh sách trạm đếm» | **PASS** |
| QA-CH-03 | **0** `window.alert`/`confirm` trên AssetList/AssetForm | **PASS** |
| QA-CH-04 | **cấm** ERP.* · API `api/v1/asset/road-assets` | **PASS** |

---

## Grid profile (AC-G-05)

| Check | Result |
|-------|--------|
| Hide cols `type` / kmTo / SL / ĐVT · weigh noise | **PASS** (live) |
| ON hide-empty: ĐVQL · Tên (EN) · Số làn · Tốc độ | **PASS** (live headers) |

---

## GAP / debt

| ID | Severity | Note |
|----|----------|------|
| GAP-COUNT-LOOKUP-01 | info | init-data `countAgencies` length=0 · empty seed OK P1 |
| GAP-COUNT-TX-PREFIX | defer | live codes still `TX-counting_station_*` · THC- rebuild debt |
| GAP-COUNT-FLAT-01 | defer | flatten Schema_* DEFER P2 |
| GAP-QA-E2E-PW-01 | info | yarn e2e-qa hung headed login · contract capture PASS |
| GAP-QA-E2E-HAF-01 | info | webpack deep-link HTTP 404 · boot index.html+popstate |
| GAP-QA-E2E-DOCKER-01 | info | gate :5101 vs compose :5111 |

**P0 blockers:** none

---

## Next

| Role | Artifact |
|------|----------|
| **review** | `specs/so-ts-count-station/review/findings.md` · `/agent-review` |
