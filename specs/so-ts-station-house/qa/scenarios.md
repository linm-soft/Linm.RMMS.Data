# QA — Scenarios — so-ts-station-house

| Field | Value |
|-------|-------|
| feature | `so-ts-station-house` |
| title | Sổ TS — Nhà hạt QLĐB |
| role | `qa` · `/agent-qa` |
| taskId | `task_64a740cf` |
| status | **confirmed** |
| verdict | **PASS** |
| e2eQa | **ON** |
| method | `e2e runtime · yarn start:std :9301 + docker API :5111 + BFF :5201 + yarn e2e-qa contract (Chrome channel fallback)` |
| mfeStdUrl | `http://localhost:9301/so-ts?type=STATION_HOUSE` |
| mfeStdRoute | `/so-ts?type=STATION_HOUSE` · alias `/so-ts-station-house` |
| testid | `rmms-so-ts-station-house-list-page` · form `rmms-asset-form-shell` · attr `asset-station-house-attr` |
| docker | API `:5111` healthy · BFF `:5201` healthy · postgres healthy |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/asset/road-assets` · **cấm ERP.*** |
| packKind | **`list`** · Kind B · full-page `data-form-cols="5"` |
| changeScope | `new_page` |
| autoApprove | ON |
| contentHashPriorDataAnaly | `sha256:3d78ed6a2ee20b192926ba4ab625d1af20e67dcb78d7035e543c976b364e7a45` |
| updatedAt | `2026-09-01T01:46:00.000Z` |
| prior · dev | **confirmed** · `implement/so-ts-station-house.md` · `task_44057caa` |

**Cấm** `phase=done` — next = Review. **cấm** ERP.* · **cấm** invent `api/v1/so-ts/*`.

---

## E2E runtime (e2eQa ON)

| Check | Result |
|-------|--------|
| `docker compose up -d --build` (`Linm.RMMS.WebService`) | **PASS** · api `:5111` · bff `:5201` · postgres healthy · init-data `stationWorkTypes=2` · `stationBuildLocations=3` · `officeBuildingGrades=3` · `auxiliaryWorksGrades=3` |
| `yarn start:std` (`:9301`) | **PASS** · Asset standalone listen (pre-running) |
| `yarn typecheck` | **PASS** (`tsc --noEmit`) |
| Capture S0 / S1 / QA-20 → `qa/screens/{caseId}.png` | **PASS** · `manifest.json` `ok=true` |
| Live DOM assert + DTM 1280/768/375 | **PASS** · `live-assert.json` · 0 overflow |

> Note: `yarn e2e-qa` hung after login banner (**GAP-QA-E2E-PW-01**) — capture tương đương Playwright + `channel=chrome` · `--skip-start` (std+docker đã listen) · API host map **5111**.

### Evidence table

| ID | Steps | Expected | Result | Evidence |
|----|-------|----------|--------|----------|
| S0 | Mở `mfeStdUrl` | List `rmms-so-ts-station-house-list-page` · title «Danh sách nhà hạt QLĐB» · filter-bar · cột type_work · ẩn type | **PASS** | ![S0](screens/S0.png) |
| S1 | Alias `/so-ts-station-house` | Redirect/live cùng STATION_HOUSE list · testid page | **PASS** | ![S1](screens/S1.png) |
| QA-20 | `/so-ts/tao-moi?type=STATION_HOUSE` | Form shell · `data-form-cols=5` · S-ATTR station · **kmTo ẩn** · «Tên công trình» | **PASS** | ![QA-20](screens/QA-20.png) |

`screens/manifest.json` · capturedAt `2026-09-01T01:44:49.029Z` · SHA256_16 S0=`26a8618a1bf1ba9c` · S1=`26a8618a1bf1ba9c` (alias=list) · QA-20=`fbadea9ffa498aed`.

---

## T-QA-CRUD-01

| ID | Steps | Expected | Result |
|----|-------|----------|--------|
| QA-20 | Create deep-link / toolbar Tạo mới | Form create · type lock STATION_HOUSE · POST `road-assets` · prefix `NH-` | **PASS** (runtime + code · list row `NH-road_admin_office_*`) |
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
| QA-F-02 | S-ATTR editable: type_work_id · build_location · office_building_grade_id · total_area · site_area · auxiliary · materials | **PASS** (live) |
| QA-F-03 | `kmTo` **ẩn** + không required khi STATION_HOUSE | **PASS** (live `kmToVisible=false`) |
| QA-F-04 | Label «Tên công trình» · `name` ← `name_building` | **PASS** (live) |
| QA-F-05 | Dirty leave = `LeaveConfirmModal` · **0** native dialog | **PASS** (code AssetFormPage) |
| QA-F-06 | UI → body dumpSpecs keys 1:1 station attrs | **PASS** (code) |
| QA-F-07 | init-data stationWorkTypes + stationBuildLocations + officeBuildingGrades + auxiliaryWorksGrades non-null | **PASS** (BFF 200 · count=2/3/3/3) |

---

## T-QA-FILTER-01 / T-QA-FILTER-02

| ID | Check | Result |
|----|-------|--------|
| QA-FB-01 | Fields 1:1 `so-ts-station-house-filter-bar.md` · search · route · kmFrom · kmTo · org · 🔍 · **type ẩn** deep-link | **PASS** (live) |
| QA-FB-02 | `LinErpListFilterBar` · V1–V5 · **0** `ErpListHeaderFilters` · **0** export trên bar | **PASS** |
| QA-FB-03 | Title «Danh sách nhà hạt QLĐB» · type lock giữ khi clear | **PASS** |
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
| QA-CH-02 | Header «Sổ TS — Nhà hạt QLĐB» · list «Danh sách nhà hạt QLĐB» | **PASS** |
| QA-CH-03 | **0** `window.alert`/`confirm` trên AssetList/AssetForm | **PASS** |
| QA-CH-04 | **cấm** ERP.* · API `api/v1/asset/road-assets` | **PASS** |

---

## Grid profile (AC-G-05)

| Check | Result |
|-------|--------|
| Hide cols `type` / low-fill khi STATION_HOUSE | **PASS** (live headers: Loại công trình · mã NH- · ẩn type filter) |
| Ensure `type_work_id` | **PASS** (live col) |
| LAYOUT-06 shell | **PASS** (S0) |

---

## Debt / GAP

| ID | sev | note |
|----|-----|------|
| GAP-SH-FLAT-01 | defer | flatten dumpSpecs (prior Dev) |
| GAP-SH-AUTH-01 | defer | auth fine-grain (prior) |
| GAP-QA-E2E-PW-01 | info | `yarn e2e-qa` hung after login — Chrome channel fallback · contract giữ |

P0 blockers: **none**.

---

## DoR

| Gate | Result |
|------|--------|
| e2e S0/S1/QA-20 + screens | **PASS** |
| live-assert DTM | **PASS** |
| typecheck | **PASS** |
| init LOOKUP STATION_HOUSE | **PASS** |
| compact handoff | `handoff/qa-compact.md` |
| `phase=done` | **CẤM** — next Review |

## Next

role: **review** · `/agent-review`  
write: `specs/so-ts-station-house/review/findings.md`
