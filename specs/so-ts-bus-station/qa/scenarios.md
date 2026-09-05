# QA — Scenarios — so-ts-bus-station

| Field | Value |
|-------|-------|
| feature | `so-ts-bus-station` |
| title | Sổ TS — Bến xe |
| role | `qa` · `/agent-qa` |
| taskId | `task_1e5afef0` |
| status | **confirmed** |
| verdict | **PASS** |
| e2eQa | **ON** |
| method | `e2e runtime · yarn start:std :9301 + docker API :5111 + BFF :5201 + yarn e2e-qa contract (Chrome channel fallback)` |
| mfeStdUrl | `http://localhost:9301/so-ts?type=BUS_STATION` |
| mfeStdRoute | `/so-ts?type=BUS_STATION` · alias `/so-ts-bus-station` |
| testid | `rmms-so-ts-bus-station-list-page` · form `rmms-asset-form-shell` · attr `asset-bus-station-attr` |
| docker | API `:5111` healthy · BFF `:5201` healthy · postgres healthy |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/asset/road-assets` · **cấm ERP.*** |
| packKind | **`list`** · Kind B · full-page `data-form-cols="5"` |
| changeScope | `new_page` |
| autoApprove | ON |
| contentHashPriorDataAnaly | `sha256:e163077d4f1e16605d699be6e6c518273e794d50ffa7c0ce79379e92c70d98dd` |
| updatedAt | `2026-09-01T03:58:31.000Z` |
| prior · dev | **confirmed** · `implement/so-ts-bus-station.md` · `task_adc64d49` |

**Cấm** `phase=done` — next = Review. **cấm** ERP.* · **cấm** invent `api/v1/so-ts/*`.

---

## E2E runtime (e2eQa ON)

| Check | Result |
|-------|--------|
| `docker compose up -d` (`Linm.RMMS.WebService`) | **PASS** · api `:5111` · bff `:5201` · postgres healthy |
| `yarn start:std` (`:9301`) | **PASS** · Asset standalone listen |
| `yarn typecheck` | **PASS** (`tsc --noEmit`) |
| `LINM_RUN_DEV_LOCAL_BUNDLE=1 yarn build` | **PASS** (webpack 5.109.2 · size warnings only · 0 errors) |
| Capture S0 / S1 / QA-20 → `qa/screens/{caseId}.png` | **PASS** · `manifest.json` `ok=true` |
| Live DOM assert + DTM 1280/768/375 | **PASS** · `live-assert.json` · 0 overflow |

> Note: `yarn e2e-qa` Docker gate expects API `:5101` — compose maps `:5111` (**GAP-QA-E2E-DOCKER-01**) — capture tương đương Playwright + `channel=chrome` · `--skip-start` (std+docker đã listen).

### Evidence table

| ID | Steps | Expected | Result | Evidence |
|----|-------|----------|--------|----------|
| S0 | Mở `mfeStdUrl` | List `rmms-so-ts-bus-station-list-page` · title «Danh sách bến xe» · filter-bar · cột bus-station · ẩn type | **PASS** | ![S0](screens/S0.png) |
| S1 | Alias `/so-ts-bus-station` | Redirect/live cùng BUS_STATION list · testid page | **PASS** | ![S1](screens/S1.png) |
| QA-20 | `/so-ts/tao-moi?type=BUS_STATION` | Form shell · `data-form-cols=5` · S-ATTR bus-station · **kmTo ẩn** · «Tên bến» | **PASS** | ![QA-20](screens/QA-20.png) |

`screens/manifest.json` · capturedAt `2026-09-01T03:58:16.392Z` · SHA256_16 S0=`94cb9e4c1238a927` · S1=`94cb9e4c1238a927` (alias=list) · QA-20=`4edaced5c85451d9`.

---

## T-QA-CRUD-01

| ID | Steps | Expected | Result |
|----|-------|----------|--------|
| QA-20 | Create deep-link / toolbar Tạo mới | Form create · type lock BUS_STATION · POST `road-assets` · prefix `BX-` | **PASS** (runtime + code · list row `BX-bus_station_52`) |
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
| QA-F-02 | S-ATTR editable: type_work_id / owner_id / site_area / main_transportation_route / total_area_floors / building_grade_id / build_location / classification | **PASS** (live) |
| QA-F-03 | `kmTo` **ẩn** + không required khi BUS_STATION | **PASS** (live `kmToVisible=false`) |
| QA-F-04 | Label «Tên bến» · `name` ← `name_terminal` | **PASS** (live) |
| QA-F-05 | Dirty leave = `LeaveConfirmModal` · **0** native dialog | **PASS** (code AssetFormPage) |
| QA-F-06 | UI → body dumpSpecs keys 1:1 bus-station attrs | **PASS** (code) |
| QA-F-07 | init-data `busStationWorkTypes` + `busStationOwners` + `busStationBuildingGrades` + `busStationBuildLocations` + `busStationClassifications` | **PASS** (BFF 200 · count=0/0/0/0/0 — empty seed OK P1) |

---

## T-QA-FILTER-01 / T-QA-FILTER-02

| ID | Check | Result |
|----|-------|--------|
| QA-FB-01 | Fields 1:1 `so-ts-bus-station-filter-bar.md` · search · route · kmFrom · kmTo · org · 🔍 · **type ẩn** deep-link | **PASS** (live) |
| QA-FB-02 | `LinErpListFilterBar` · V1–V5 · **0** `ErpListHeaderFilters` · **0** export trên bar | **PASS** |
| QA-FB-03 | Title «Danh sách bến xe» · type lock giữ khi clear | **PASS** |
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
| QA-CH-02 | Header «Sổ TS — Bến xe» · list «Danh sách bến xe» | **PASS** |
| QA-CH-03 | **0** `window.alert`/`confirm` trên AssetList/AssetForm | **PASS** |
| QA-CH-04 | **cấm** ERP.* · API `api/v1/asset/road-assets` | **PASS** |

---

## Grid profile (AC-G-05)

| Check | Result |
|-------|--------|
| Hide cols `type` / low-fill khi BUS_STATION | **PASS** (live headers: Loại công trình · Chủ sở hữu · DT khuôn viên · Tuyến VT chính · DT sàn · Cấp nhà) |
| Show bus-station attrs ON+hide-empty | **PASS** (live snippet) |
| LAYOUT-06 shell | **PASS** (S0) |

---

## Debt / GAP

| ID | sev | note |
|----|-----|------|
| GAP-BX-FLAT-01 | defer | flatten dumpSpecs (prior Dev) |
| GAP-BX-AUTH-01 | defer | auth fine-grain (prior) |
| GAP-BX-LOOKUP-01 | info | init LOOKUP arrays empty (0 items) — seed data deferred |
| GAP-QA-E2E-DOCKER-01 | info | `yarn e2e-qa` expects API :5101 · compose maps :5111 |
| GAP-QA-E2E-PW-01 | info | capture used Chrome channel fallback · contract giữ |

P0 blockers: **none**.

---

## DoR

| Gate | Result |
|------|--------|
| e2e S0/S1/QA-20 + screens | **PASS** |
| live-assert DTM | **PASS** |
| typecheck + build | **PASS** |
| init LOOKUP BUS_STATION | **PASS** (empty seed OK P1) |
| compact handoff | `handoff/qa-compact.md` |
| `phase=done` | **CẤM** — next Review |

## Next

role: **review** · `/agent-review`  
write: `specs/so-ts-bus-station/review/findings.md`
