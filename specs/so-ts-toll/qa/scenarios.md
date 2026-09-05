# QA — Scenarios — so-ts-toll

| Field | Value |
|-------|-------|
| feature | `so-ts-toll` |
| title | Sổ TS — Trạm thu phí |
| role | `qa` · `/agent-qa` |
| taskId | `task_4803c95a` |
| status | **confirmed** |
| verdict | **PASS** |
| e2eQa | **ON** |
| method | `e2e runtime · yarn start:std :9301 + docker API :5111 + BFF :5201 + yarn e2e-qa contract (Chrome channel fallback)` |
| mfeStdUrl | `http://localhost:9301/so-ts?type=TOLL` |
| mfeStdRoute | `/so-ts?type=TOLL` · alias `/so-ts-toll` |
| testid | `rmms-so-ts-toll-list-page` · form `rmms-asset-form-shell` · attr `asset-toll-attr` |
| docker | API `:5111` healthy · BFF `:5201` healthy · postgres healthy |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/asset/road-assets` · **cấm ERP.*** |
| packKind | **`list`** · Kind B · full-page `data-form-cols="5"` |
| changeScope | `new_page` |
| autoApprove | ON |
| contentHashPriorDataAnaly | `sha256:6e5c4611241727abb70516f3ba7828dd429ef7d5513ae99e83ba43c6da43347c` |
| updatedAt | `2026-09-01T05:16:00.000Z` |
| prior · dev | **confirmed** · `implement/so-ts-toll.md` · `task_177ba123` |

**Cấm** `phase=done` — next = Review. **cấm** ERP.* · **cấm** invent `api/v1/so-ts/*`.

---

## E2E runtime (e2eQa ON)

| Check | Result |
|-------|--------|
| `docker compose up -d` (`Linm.RMMS.WebService`) | **PASS** · api `:5111` · bff `:5201` · postgres healthy |
| `yarn start:std` (`:9301`) | **PASS** · Asset standalone listen (port pre-existing) |
| `yarn typecheck` | **PASS** (`tsc --noEmit`) |
| `LINM_RUN_DEV_LOCAL_BUNDLE=1 yarn build` | **PASS** (webpack 5.109.2 · size warnings only · 0 errors) |
| Capture S0 / S1 / QA-20 → `qa/screens/{caseId}.png` | **PASS** · `manifest.json` `ok=true` |
| Live DOM assert + DTM 1280/768/375 | **PASS** · `live-assert.json` · 0 overflow |

> Note: `yarn e2e-qa` hung after login banner (**GAP-QA-E2E-PW-01**) — capture tương đương Playwright + `channel=chrome` · `--skip-start` (std+docker đã listen). Docker gate expects API `:5101` — compose maps `:5111` (**GAP-QA-E2E-DOCKER-01**).

### Evidence table

| ID | Steps | Expected | Result | Evidence |
|----|-------|----------|--------|----------|
| S0 | Mở `mfeStdUrl` | List `rmms-so-ts-toll-list-page` · title «Danh sách trạm thu phí» · filter-bar · cột toll · ẩn type | **PASS** | ![S0](screens/S0.png) |
| S1 | Alias `/so-ts-toll` | Redirect/live cùng TOLL list · testid page | **PASS** | ![S1](screens/S1.png) |
| QA-20 | `/so-ts/tao-moi?type=TOLL` | Form shell · `data-form-cols=5` · S-ATTR toll · **kmTo ẩn** · «Tên trạm» | **PASS** | ![QA-20](screens/QA-20.png) |

`screens/manifest.json` · capturedAt `2026-09-01T05:15:44.946Z` · SHA256_16 S0=`3e2c16f09af6b968` · S1=`3e2c16f09af6b968` (alias=list) · QA-20=`2f53830096d92820`.

---

## T-QA-CRUD-01

| ID | Steps | Expected | Result |
|----|-------|----------|--------|
| QA-20 | Create deep-link / toolbar Tạo mới | Form create · type lock TOLL · POST `road-assets` · prefix `TFP-` | **PASS** (runtime + code) |
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
| QA-F-02 | S-ATTR editable: weighting_method / number_weighting_lane / number_etc_lane / number_manual_lane / house_grade_id / area_yoll_gate_pavement / roof_structures_gate_id / pavement_type_id / road_structure_id / operation_building_location_id | **PASS** (live) |
| QA-F-03 | S-ATTR-WIDTH: width_toll_gate / width_weighting_lane / width_etc_lane / width_manual_lane / width_operation_building | **PASS** (code) |
| QA-F-04 | `kmTo` **ẩn** + không required khi TOLL | **PASS** (live `kmToVisible=false`) |
| QA-F-05 | Label «Tên trạm» · `name` ← `station_name` | **PASS** (live) |
| QA-F-06 | Dirty leave = `LeaveConfirmModal` · **0** native dialog | **PASS** (code AssetFormPage) |
| QA-F-07 | UI → body dumpSpecs keys 1:1 toll attrs | **PASS** (code) |
| QA-F-08 | init-data `tollWeightingMethods` + `tollRoofStructures` + `tollPavementTypes` + `tollHouseGrades` + `tollRoadStructures` + `tollOperationLocations` | **PASS** (BFF 200 · empty seed OK P1) |

---

## T-QA-FILTER-01 / T-QA-FILTER-02

| ID | Check | Result |
|----|-------|--------|
| QA-FB-01 | Fields 1:1 `so-ts-toll-filter-bar.md` · search · route · kmFrom · kmTo · org · 🔍 · **type ẩn** deep-link | **PASS** (live) |
| QA-FB-02 | `LinErpListFilterBar` · V1–V5 · **0** `ErpListHeaderFilters` · **0** export trên bar | **PASS** |
| QA-FB-03 | Title «Danh sách trạm thu phí» · type lock giữ khi clear | **PASS** |
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
| QA-CH-02 | Header «Sổ TS — Trạm thu phí» · list «Danh sách trạm thu phí» | **PASS** |
| QA-CH-03 | **0** `window.alert`/`confirm` trên AssetList/AssetForm | **PASS** |
| QA-CH-04 | **cấm** ERP.* · API `api/v1/asset/road-assets` | **PASS** |

---

## Grid profile (AC-G-05)

| Check | Result |
|-------|--------|
| Hide cols `type` / low-fill khi TOLL | **PASS** (live headers: Phương pháp cân · Số làn cân · Số làn ETC · Số làn thủ công · Cấp nhà · DT mặt cổng) |
| Show toll attrs ON+hide-empty | **PASS** (live snippet) |
| auxiliary_works_grade_id OFF default | **PASS** (code) |
| LAYOUT-06 shell | **PASS** (S0) |

---

## Debt / GAP

| ID | sev | note |
|----|-----|------|
| GAP-TOLL-FLAT-01 | defer | flatten dumpSpecs (prior Dev) |
| GAP-TOLL-LOOKUP-01 | info | init LOOKUP arrays empty — seed data deferred |
| GAP-QA-E2E-DOCKER-01 | info | `yarn e2e-qa` expects API :5101 · compose maps :5111 |
| GAP-QA-E2E-PW-01 | info | `yarn e2e-qa` hung after login — Chrome channel fallback · contract giữ |

P0 blockers: **none**.

---

## DoR

| Gate | Result |
|------|--------|
| e2e S0/S1/QA-20 + screens | **PASS** |
| live-assert DTM | **PASS** |
| typecheck + build | **PASS** |
| init LOOKUP TOLL | **PASS** (empty seed OK P1) |
| compact handoff | `handoff/qa-compact.md` |
| `phase=done` | **CẤM** — next Review |

## Next

| Role | Need |
|------|------|
| **Review** | `/agent-review` · `review/findings.md` |
