# QA — Scenarios — so-ts-rest-area

| Field | Value |
|-------|-------|
| feature | `so-ts-rest-area` |
| title | Sổ TS — Trạm dừng nghỉ |
| role | `qa` · `/agent-qa` |
| taskId | `task_f5bbbd0f` |
| status | **confirmed** |
| verdict | **PASS** |
| e2eQa | **ON** |
| method | `e2e runtime · yarn start:std :9301 + docker API :5111 + BFF :5201 + yarn e2e-qa contract (Chrome channel fallback)` |
| mfeStdUrl | `http://localhost:9301/so-ts?type=REST_AREA` |
| mfeStdRoute | `/so-ts?type=REST_AREA` · alias `/so-ts-rest-area` |
| testid | `rmms-so-ts-rest-area-list-page` · form `rmms-asset-form-shell` · attr `asset-rest-area-attr` |
| docker | API `:5111` healthy · BFF `:5201` healthy · postgres healthy |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/asset/road-assets` · **cấm ERP.*** |
| packKind | **`list`** · Kind B · full-page `data-form-cols="5"` |
| changeScope | `new_page` |
| autoApprove | ON |
| contentHashPriorDataAnaly | `sha256:b92dcb2dca6f96078721289e687ddbcaa3339828968fe1d11ce202c4e8569bc` |
| updatedAt | `2026-09-01T04:27:00.000Z` |
| prior · dev | **confirmed** · `implement/so-ts-rest-area.md` · `task_3b431b36` |

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

> Note: `yarn e2e-qa` Docker gate expects API `:5101` — compose maps `:5111` (**GAP-QA-E2E-DOCKER-01**) — capture tương đương Playwright + `channel=chrome` · `--skip-start` (std+docker đã listen).

### Evidence table

| ID | Steps | Expected | Result | Evidence |
|----|-------|----------|--------|----------|
| S0 | Mở `mfeStdUrl` | List `rmms-so-ts-rest-area-list-page` · title «Danh sách trạm dừng nghỉ» · filter-bar · cột rest-area · ẩn type | **PASS** | ![S0](screens/S0.png) |
| S1 | Alias `/so-ts-rest-area` | Redirect/live cùng REST_AREA list · testid page | **PASS** | ![S1](screens/S1.png) |
| QA-20 | `/so-ts/tao-moi?type=REST_AREA` | Form shell · `data-form-cols=5` · S-ATTR rest-area · **kmTo ẩn** · «Tên trạm» | **PASS** | ![QA-20](screens/QA-20.png) |

`screens/manifest.json` · capturedAt `2026-09-01T04:26:40.025Z` · SHA256_16 S0=`466c7eb1d44a0da7` · S1=`466c7eb1d44a0da7` (alias=list) · QA-20=`1d768102a2b14638`.

---

## T-QA-CRUD-01

| ID | Steps | Expected | Result |
|----|-------|----------|--------|
| QA-20 | Create deep-link / toolbar Tạo mới | Form create · type lock REST_AREA · POST `road-assets` · prefix `DN-` | **PASS** (runtime + code) |
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
| QA-F-02 | S-ATTR editable: type_work_id / categorized_id / owner_id / actual_length / site_area_using_land / traffic_emergency_service / first_aid_service / office_building_grade_id / auxiliary_works_grade_id / build_location_id | **PASS** (live) |
| QA-F-03 | `kmTo` **ẩn** + không required khi REST_AREA | **PASS** (live `kmToVisible=false`) |
| QA-F-04 | Label «Tên trạm» · `name` ← `name_work` | **PASS** (live) |
| QA-F-05 | Dirty leave = `LeaveConfirmModal` · **0** native dialog | **PASS** (code AssetFormPage) |
| QA-F-06 | UI → body dumpSpecs keys 1:1 rest-area attrs | **PASS** (code) |
| QA-F-07 | init-data `restAreaWorkTypes` + `restAreaCategories` + `restAreaOwners` + `buildLocations` (+ reuse officeBuildingGrades · auxiliaryWorksGrades) | **PASS** (BFF 200 · empty seed OK P1) |

---

## T-QA-FILTER-01 / T-QA-FILTER-02

| ID | Check | Result |
|----|-------|--------|
| QA-FB-01 | Fields 1:1 `so-ts-rest-area-filter-bar.md` · search · route · kmFrom · kmTo · org · 🔍 · **type ẩn** deep-link | **PASS** (live) |
| QA-FB-02 | `LinErpListFilterBar` · V1–V5 · **0** `ErpListHeaderFilters` · **0** export trên bar | **PASS** |
| QA-FB-03 | Title «Danh sách trạm dừng nghỉ» · type lock giữ khi clear | **PASS** |
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
| QA-CH-02 | Header «Sổ TS — Trạm dừng nghỉ» · list «Danh sách trạm dừng nghỉ» | **PASS** |
| QA-CH-03 | **0** `window.alert`/`confirm` trên AssetList/AssetForm | **PASS** |
| QA-CH-04 | **cấm** ERP.* · API `api/v1/asset/road-assets` | **PASS** |

---

## Grid profile (AC-G-05)

| Check | Result |
|-------|--------|
| Hide cols `type` / low-fill khi REST_AREA | **PASS** (live headers: Loại công trình · Xếp loại · Chủ sở hữu · Chiều dài · DT khuôn viên · Cứu hộ GT · Cấp cứu) |
| Show rest-area attrs ON+hide-empty | **PASS** (live snippet) |
| LAYOUT-06 shell | **PASS** (S0) |

---

## Debt / GAP

| ID | sev | note |
|----|-----|------|
| GAP-RA-FLAT-01 | defer | flatten dumpSpecs (prior Dev) |
| GAP-RA-LOOKUP-01 | info | init LOOKUP arrays empty — seed data deferred |
| GAP-RA-SPLIT-01 | info | filter/import tách REST_AREA vs PARKING |
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
| init LOOKUP REST_AREA | **PASS** (empty seed OK P1) |
| compact handoff | `handoff/qa-compact.md` |
| `phase=done` | **CẤM** — next Review |

## Next

role: **review** · `/agent-review`  
write: `specs/so-ts-rest-area/review/findings.md`
