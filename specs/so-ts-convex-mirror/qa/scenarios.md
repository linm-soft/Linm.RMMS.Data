# QA — Scenarios — so-ts-convex-mirror

> Status: **PASS** · task `task_f6d43964` · `/agent-qa`  
> e2eQa=ON · runtime capture+assert · capturedAt `2026-09-01T15:59:45.256Z`

| | |
|--|--|
| Feature | `so-ts-convex-mirror` |
| Title | Sổ TS — Gương cầu / long môn |
| Role | `qa` |
| packKind | `list` |
| changeScope | `new_page` |
| typeCode | `CONVEX_MIRROR` |
| dump | `road_sphere_mirror` · GIS `guong-cau` · tile t31 |
| verdict | **PASS** |
| mfeStdUrl | `http://localhost:9301/so-ts?type=CONVEX_MIRROR` |
| aliasUrl | `http://localhost:9301/so-ts-convex-mirror` |
| formUrl | `http://localhost:9301/so-ts/tao-moi?type=CONVEX_MIRROR` |
| testid | `rmms-so-ts-convex-mirror-list-page` · form `rmms-asset-form-shell` · loc `asset-convex-mirror-loc` · attr `asset-convex-mirror-attr` |
| runtime | docker API `:5111` + BFF `:5201` + `yarn start:std` `:9301` |
| method | `_capture.mjs` + `_live-assert.mjs` · channel=`chrome` · headless |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/asset/road-assets` · **cấm ERP.*** |
| autoApprove | ON |
| contentHashPrior | `sha256:36242a5e7648360ecaa70554a44a6f2b782712d0d924a0f7121ab77e14ad558f` |
| prior · dev | **confirmed** · `implement/so-ts-convex-mirror.md` |
| skillVersion | `2026.08.19.04` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| updatedAt | `2026-09-01T16:05:00.000Z` |

**Cấm** `phase=done` — next = Review. **cấm** ERP.* · **cấm** invent `api/v1/so-ts/*` · **cấm** kill worker `:9301`.

---

## E2E runtime (e2eQa ON)

| Check | Result |
|-------|--------|
| `docker compose up -d --build` | **PASS** · api `:5111` · bff `:5201` · postgres healthy · init-data `assetTypeMsts=4` · `shapeCutPosts=5` · `materialPosts=5` · `locationPosts=6` |
| `yarn start:std` (`:9301`) | **PASS** · listen (reuse) · **không** kill (**GAP-QA-E2E-KILL-01**) |
| `yarn typecheck` | **PASS** (`tsc --noEmit`) |
| `LINM_RUN_DEV_LOCAL_BUNDLE=1 yarn build` | **PASS** (webpack · size warnings only · 0 errors) |
| Capture S0 / S1 / QA-20 → `qa/screens/{caseId}.png` | **PASS** · `manifest.json` `ok=true` |
| Live DOM assert + DTM 1280/768/375 | **PASS** · `live-assert.json` · 0 overflowX · form `kmToHiddenOk` |

> Note: `yarn e2e-qa` headed hang (**GAP-QA-E2E-PW-01**) — capture tương đương Playwright `channel=chrome` · `--skip-start` · API host map **5111**. Stale docker thiếu LOOKUP → rebuild fix (**GAP-QA-E2E-DOCKER-01**).

### Evidence table

| ID | Steps | Expected | Result | Evidence |
|----|-------|----------|--------|----------|
| S0 | Mở `mfeStdUrl` | List `rmms-so-ts-convex-mirror-list-page` · title «Sổ TS — Gương cầu / long môn» · filter-bar · cột Vị trí/MST/Hình cắt/VL/ĐK/cao/nhịp · ẩn type/kmTo grid | **PASS** | ![S0](screens/S0.png) |
| S1 | Alias `/so-ts-convex-mirror` | Navigate live cùng CONVEX_MIRROR list | **PASS** | ![S1](screens/S1.png) |
| QA-20 | `/so-ts/tao-moi?type=CONVEX_MIRROR` | Form shell · `data-form-cols=5` · S-ATTR 9 · loc/MST · S-LOC-POINT kmTo **ẩn** · «Tên / loại gương» | **PASS** | ![QA-20](screens/QA-20.png) |

`screens/manifest.json` · capturedAt `2026-09-01T15:59:45.256Z` · SHA256_16 S0=`c7e74c666206a7f4` · S1=`9d72029960f7728c` · QA-20=`29a4d1b73fcb3764`.

---

## T-QA-CRUD-01

| ID | Steps | Expected | Result |
|----|-------|----------|--------|
| QA-20 | Create deep-link / toolbar Tạo mới | Form create · type lock CONVEX_MIRROR · POST `road-assets` | **PASS** (runtime + code) |
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
| QA-F-02 | S-ATTR: loc/MST + shape/ĐK/mat/cao/nhịp/số biển/tổng trụ (9 attr dump) | **PASS** (live `asset-convex-mirror-loc`/`-attr`) |
| QA-F-03 | S-LOC-POINT: `kmTo` **ẩn** · **cấm** ép `"0"` | **PASS** (live `kmToVisible=false`) |
| QA-F-04 | Label «Tên / loại gương» · name ≠ đoạn tuyến · GAP-MIRROR-NAME-01 | **PASS** (live + code ResolveConvexMirrorName) |
| QA-F-05 | Dirty leave = `LeaveConfirmModal` · **0** native dialog Asset | **PASS** (code AssetFormPage) |
| QA-F-06 | qty ← `total_number_post` · dumpSpecs 1:1 | **PASS** (code + BE) |
| QA-F-07 | init-data LOOKUP: `assetTypeMsts` · `shapeCutPosts` · `materialPosts` · `locationPosts` | **PASS** (BFF counts 4/5/5/6) |

---

## T-QA-FILTER-01 / T-QA-FILTER-02

| ID | Check | Result |
|----|-------|--------|
| QA-FB-01 | Fields 1:1 filter-bar · search · route · kmFrom · kmTo · org · 🔍 · **type ẩn** deep-link | **PASS** (live) |
| QA-FB-02 | `LinErpListFilterBar` · V1–V5 · **0** export trên bar | **PASS** |
| QA-FB-03 | Title «Danh sách gương cầu» · type lock giữ khi clear | **PASS** |
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
| QA-CH-02 | Header «Sổ TS — Gương cầu / long môn» · list «Danh sách gương cầu» | **PASS** |
| QA-CH-03 | **0** `window.alert`/`confirm` trên AssetList/AssetForm | **PASS** |
| QA-CH-04 | **cấm** ERP.* · API `api/v1/asset/road-assets` | **PASS** |

---

## Grid profile (AC-G-05)

| Check | Result |
|-------|--------|
| Hide `type` / `kmTo` / `unitCode` | **PASS** (live headers) |
| Show location/MST/shape/ĐK/cao/nhịp/mat/số biển/tổng trụ | **PASS** (live headers) |
| **cấm** gantry field | **PASS** (live `noGantryField`) |

---

## Debt / GAP

| ID | Note |
|----|------|
| GAP-QA-E2E-PW-01 | `yarn e2e-qa` headed hang → chrome capture contract |
| GAP-QA-E2E-DOCKER-01 | Stale image thiếu LOOKUP → `docker compose up -d --build` |
| GAP-MIRROR-SCOPE-01 | flatten dumpSpecs DEFER |
| Auth | DEFER |
| P0 | **none** |

---

## Next

role: **review** · `/agent-review` · write `specs/so-ts-convex-mirror/review/findings.md`  
**Cấm** `phase=done` tại QA.
