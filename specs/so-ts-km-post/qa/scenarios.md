# QA — Scenarios — so-ts-km-post

| Field | Value |
|-------|-------|
| feature | `so-ts-km-post` |
| title | Sổ TS — Cột Km |
| role | `qa` · `/agent-qa` |
| taskId | `task_2197869b` |
| status | **confirmed** |
| verdict | **PASS** |
| e2eQa | **ON** |
| method | `e2e runtime · yarn start:std :9301 + docker API :5111 + BFF :5201 + yarn e2e-qa contract (Chrome channel fallback)` |
| mfeStdUrl | `http://localhost:9301/so-ts?type=KM_POST` |
| mfeStdRoute | `/so-ts?type=KM_POST` · alias `/so-ts-km-post` |
| testid | `rmms-so-ts-km-post-list-page` · form `rmms-asset-form-shell` · attr `asset-km-post-attr` |
| docker | API `:5111` healthy · BFF `:5201` healthy · postgres healthy |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/asset/road-assets` · **cấm ERP.*** |
| packKind | **`list`** · Kind B · full-page `data-form-cols="5"` |
| changeScope | `edit_page` |
| autoApprove | ON |
| contentHashPriorDataAnaly | `sha256:3a11d776482d57eebc6be1ed1a101e42525ea576986a8e8f7a49ef00b542e9fc` |
| updatedAt | `2026-08-31T20:32:30.000Z` |
| prior · dev | **confirmed** · `implement/so-ts-km-post.md` · `task_86ca8f12` |

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

> Note: `yarn e2e-qa` hung on `playwright install chromium` (**GAP-QA-E2E-PW-01**) — capture tương đương Playwright 1.55 + `channel=chrome` · `--skip-start` (std+docker đã listen) · API host map **5111** (không 5101).

### Evidence table

| ID | Steps | Expected | Result | Evidence |
|----|-------|----------|--------|----------|
| S0 | Mở `mfeStdUrl` | List `rmms-so-ts-km-post-list-page` · title «Danh sách cột Km» · filter-bar · cột distance/materials · ẩn type/kmTo/qty/unit | **PASS** | ![S0](screens/S0.png) |
| S1 | Alias `/so-ts-km-post` | Redirect/live cùng KM_POST list · testid page | **PASS** | ![S1](screens/S1.png) |
| QA-20 | `/so-ts/tao-moi?type=KM_POST` | Form shell · `data-form-cols=5` · S-ATTR materials/distance · **kmTo ẩn** · «Tên cột Km» | **PASS** | ![QA-20](screens/QA-20.png) |

`screens/manifest.json` · capturedAt `2026-08-31T20:29:39.643Z` · SHA256_16 S0=`29d8505242e2e0e9` · S1=`29d8505242e2e0e9` (alias=list) · QA-20=`fc31c2a881237bc8`.

---

## T-QA-CRUD-01

| ID | Steps | Expected | Result |
|----|-------|----------|--------|
| QA-20 | Create deep-link / toolbar Tạo mới | Form create · type lock KM_POST · POST `road-assets` | **PASS** (runtime + code) |
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
| QA-F-02 | S-ATTR editable: distance Number · materials Dropdown init-data | **PASS** (live) |
| QA-F-03 | `kmTo` **ẩn** + không required khi KM_POST | **PASS** (live `kmToVisible=false`) |
| QA-F-04 | Label «Tên cột Km» · `name` ← `name_km_post` mirror | **PASS** (live + code) |
| QA-F-05 | Dirty leave = `LeaveConfirmModal` · **0** native dialog | **PASS** (code AssetFormPage) |
| QA-F-06 | UI → body dumpSpecs keys 1:1 materials/distance/name_km_post | **PASS** (code) |

---

## T-QA-FILTER-01 / T-QA-FILTER-02

| ID | Check | Result |
|----|-------|--------|
| QA-FB-01 | Fields 1:1 `so-ts-km-post-filter-bar.md` · search · route · kmFrom · kmTo · org · 🔍 · **type ẩn** deep-link | **PASS** (live) |
| QA-FB-02 | `LinErpListFilterBar` · V1–V5 · **0** `ErpListHeaderFilters` · **0** export trên bar | **PASS** |
| QA-FB-03 | Title «Danh sách cột Km» · type lock giữ khi clear | **PASS** |
| QA-FB-04 | DTM headed 1280 + 768 + 375 · 0 overflowX | **PASS** (`live-assert.json` · `filter-{D,T,M}.png`) |

---

## T-QA-TYP-01 / T-QA-TAB-01

| ID | Check | Result |
|----|-------|--------|
| QA-TYP-01 | Label/input qua Common Components (13 / D14·M16) | **PASS** (no local break) |
| QA-TAB-01 | Filter leading DOM = visual order · form sequential | **PASS** |
| QA-RESP-01 | List wrap · DTM 0 overflow | **PASS** |

---

## Chrome / end-user

| ID | Check | Result |
|----|-------|--------|
| QA-CH-01 | List/form **tiếng Việt** · **0** badge CREATE/EDIT/VIEW · **0** note demo/stub | **PASS** (live) |
| QA-CH-02 | Header «Sổ TS — Cột Km» · list «Danh sách cột Km» | **PASS** |
| QA-CH-03 | **0** `window.alert`/`confirm` trên AssetList/AssetForm | **PASS** |
| QA-CH-04 | **cấm** ERP.* · API `api/v1/asset/road-assets` | **PASS** |

---

## Grid profile (AC-G-05)

| Check | Result |
|-------|--------|
| Hide cols `type` / `kmTo` / `quantity` / `unitCode` khi KM_POST | **PASS** (code + live headers: distance · materials) |
| Show `distance_next_post` · `materials_id` | **PASS** (live snippet) |

---

## Gaps / debt

| ID | Status | Note |
|----|--------|------|
| GAP-QA-E2E-PW-01 | info | `yarn e2e-qa` hung playwright install — Chrome channel fallback · contract giữ |
| GAP-KM-FLAT-01 | DEFER | Flatten Schema_* P2 |
| GAP-KM-AUTH-01 | DEFER | Auth NuGet |
| Materials master SearchInput | P2 | LOOKUP_STATIC dump P1 |
| Rebuild+reimport DB | optional | populate dumpSpecs materials/distance |

**P0:** none — **cấm** handoff blocked / `qa_fail_rollback`.

---

## Verify gate

```
yarn typecheck → PASS
yarn build → PASS (webpack 5.109.2, size warnings, 0 errors)
docker compose ps → api:5111 / bff:5201 / postgres healthy
HTTP BFF GET …/road-assets?type=KM_POST → 200
Playwright S0/S1/QA-20 → PASS · screens/*.png · manifest ok
live-assert DTM → PASS
```

---

## Handoff → Review

| Field | Value |
|-------|--------|
| next | `/agent-review` |
| artifacts | `qa/scenarios.md` · `qa/screens/{S0,S1,QA-20}.png` · `manifest.json` · `live-assert.json` |
| mfeStdUrl | `http://localhost:9301/so-ts?type=KM_POST` |
| block | **cấm** `phase=done` · Review mới close |
| Focus Review | COL profile · S-ATTR · kmTo ẩn · materials Dropdown · LeaveConfirm · filter type lock · config full |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-qa |
| skillVersion | 2026.08.30.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.30.01 |
| rulesVersion | 2026.08.31.2 |
| generatedAt | 2026-08-31T20:32:30.000Z |
| versionGate | ok |
| formTypePack | list |
| changeScope | edit_page |
| contentHashPriorDataAnaly | sha256:3a11d776482d57eebc6be1ed1a101e42525ea576986a8e8f7a49ef00b542e9fc |
| route_confirm | route_a |
| taskId | task_2197869b |
| priorDevTaskId | task_86ca8f12 |

---
<!-- Version meta: skillId=agent-qa skillVersion=2026.08.30.01 schemaVersion=2 workflowVersion=2026.08.30.01 rulesVersion=2026.08.31.2 versionGate=ok taskId=task_2197869b route_confirm=route_a -->
