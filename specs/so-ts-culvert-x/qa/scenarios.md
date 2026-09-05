# QA — Scenarios — so-ts-culvert-x

> Status: **PASS** · task `task_b78a67f3` · `/agent-qa`  
> e2eQa=ON · runtime capture+assert · capturedAt `2026-09-01T13:07:54.465Z`

| | |
|--|--|
| Feature | `so-ts-culvert-x` |
| Title | Sổ TS — Cống thoát nước ngang |
| Role | `qa` |
| packKind | `list` |
| changeScope | `new_page` |
| typeCode | `CULVERT_X` |
| prefix | `CN-` |
| verdict | **PASS** |
| mfeStdUrl | `http://localhost:9301/so-ts?type=CULVERT_X` |
| aliasUrl | `http://localhost:9301/so-ts-culvert-x` |
| formUrl | `http://localhost:9301/so-ts/tao-moi?type=CULVERT_X` |
| testid | `rmms-so-ts-culvert-x-list-page` · form `rmms-asset-form-shell` · attr `asset-culvert-x-attr` |
| runtime | docker API `:5111` + BFF `:5201` + `yarn start:std` `:9301` |
| method | `_capture.mjs` + `_live-assert.mjs` · channel=`chrome` · headless |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/asset/road-assets` · **cấm ERP.*** |
| autoApprove | ON |
| contentHashPrior | `sha256:baf73523f54f4452cfe4c8eaef3f1a5cd333c56f48f44933027a34a417d49b1b` |
| prior · dev | **confirmed** · `implement/so-ts-culvert-x.md` |
| skillVersion | `2026.08.19.04` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| updatedAt | `2026-09-01T13:12:00.000Z` |

**Cấm** `phase=done` — next = Review. **cấm** ERP.* · **cấm** invent `api/v1/so-ts/*` · **cấm** kill worker `:9301`.

---

## E2E runtime (e2eQa ON)

| Check | Result |
|-------|--------|
| `docker compose up -d --build` | **PASS** · api `:5111` · bff `:5201` · postgres healthy · init-data `typeWork=3` · `culvertShapes=6` · `materialBody=6` · `structures=5` |
| `yarn start:std` (`:9301`) | **PASS** · listen · **không** kill (**GAP-QA-E2E-KILL-01**) |
| `yarn typecheck` | **PASS** (`tsc --noEmit`) |
| `LINM_RUN_DEV_LOCAL_BUNDLE=1 yarn build` | **PASS** (webpack 5.109.2 · size warnings only · 0 errors) |
| Capture S0 / S1 / QA-20 → `qa/screens/{caseId}.png` | **PASS** · `manifest.json` `ok=true` |
| Live DOM assert + DTM 1280/768/375 | **PASS** · `live-assert.json` · 0 overflowX · form `kmToHiddenOk` |

> Note: `yarn e2e-qa` headed login hang (**GAP-QA-E2E-PW-01**) — capture tương đương Playwright `channel=chrome` · API host map **5111**. Stale docker thiếu `typeWork` → rebuild fix (**GAP-QA-E2E-DOCKER-01**). Empty list OK (GAP-CULVERT-X-01 dump CSV 0 · cấm seed).

### Evidence table

| ID | Steps | Expected | Result | Evidence |
|----|-------|----------|--------|----------|
| S0 | Mở `mfeStdUrl` | List `rmms-so-ts-culvert-x-list-page` · title «Sổ TS — Cống thoát nước ngang» · filter kmTo ± · ẩn type · empty OK | **PASS** | ![S0](screens/S0.png) |
| S1 | Alias `/so-ts-culvert-x` | Navigate live cùng CULVERT_X list | **PASS** | ![S1](screens/S1.png) |
| QA-20 | `/so-ts/tao-moi?type=CULVERT_X` | Form shell · `data-form-cols=5` · S-ATTR culvert-x · S-LOC-POINT kmTo **ẩn** · Loại CT* · CN- | **PASS** | ![QA-20](screens/QA-20.png) |

`screens/manifest.json` · capturedAt `2026-09-01T13:07:54.465Z` · SHA256_16 S0=`b8ee8c853fcc111e` · S1=`b8ee8c853fcc111e` · QA-20=`f6185ad8db7f79e1`.

---

## T-QA-CRUD-01

| ID | Steps | Expected | Result |
|----|-------|----------|--------|
| QA-20 | Create deep-link / toolbar Tạo mới | Form create · type lock CULVERT_X · POST `road-assets` · prefix `CN-` | **PASS** (runtime + BE `return "CN-"`) |
| QA-21 | Edit | PUT + dumpSpecs merge · leave Modal | **PASS** (code · LeaveConfirmModal wired) |
| QA-22 | View | display/`dl` · **cấm** Input disabled xám | **PASS** (code CatalogFormShell) |
| QA-23 | Copy / Delete | soft DELETE · `useAlert` · **0** `window.confirm` Asset list/form | **PASS** (code) |
| QA-24 | Config | `LinCatalogUiSchemaEditorModal` kind=`road-assets` · **0** `configHint` | **PASS** |
| QA-25 | History | `LinCatalogHistoryModal` | **PASS** (code) |
| QA-26 | Row menu | Xem / Sửa / Sao chép / Lịch sử / Xóa | **PASS** (live hint + code) |

---

## T-QA-FORM-01

| ID | Check | Result |
|----|-------|--------|
| QA-F-01 | Full-page `data-form-cols="5"` | **PASS** (live) |
| QA-F-02 | S-ATTR: Loại CT* · Hình dạng · Tải/Số ngăn · Rộng/Cao/Dài · VL thân · thượng/hạ lưu | **PASS** (live) |
| QA-F-03 | S-LOC-POINT: `kmTo` **ẩn** · **cấm** ép `"0"` | **PASS** (live `kmToVisible=false`) |
| QA-F-04 | `name` optional · list OFF · primary = `type_work_id` | **PASS** (profile + live form) |
| QA-F-05 | Dirty leave = `LeaveConfirmModal` · **0** native dialog | **PASS** (code AssetFormPage) |
| QA-F-06 | init-data typeWork/culvertShapes/materialBody/structures (after compose --build) | **PASS** (API 200 · counts 3/6/6/5) |
| QA-F-07 | Prefix create `CN-` (GAP-CN-PREFIX-01) | **PASS** (BE + form Mã) |

---

## T-QA-FILTER-01 / T-QA-FILTER-02

| ID | Check | Result |
|----|-------|--------|
| QA-FB-01 | Fields 1:1 filter-bar · search · route · kmFrom · kmTo ± · org · 🔍 · **type ẩn** deep-link | **PASS** (live) |
| QA-FB-02 | `LinErpListFilterBar` · V1–V5 · **0** nút Tìm riêng | **PASS** |
| QA-FB-03 | Title «Sổ TS — Cống thoát nước ngang» · «Danh sách cống thoát nước ngang» | **PASS** |
| QA-FB-04 | DTM headed 1280 + 768 + 375 · 0 overflowX | **PASS** (`live-assert.json` · `filter-{D,T,M}.png`) |

---

## T-QA-TYP-01 / T-QA-TAB-01

| ID | Check | Result |
|----|-------|--------|
| QA-TYP-01 | Label/input qua Common Components | **PASS** |
| QA-TAB-01 | Filter leading DOM = visual order · form sequential | **PASS** |
| QA-RESP-01 | List wrap · DTM 0 overflow | **PASS** |

---

## Chrome / end-user

| ID | Check | Result |
|----|-------|--------|
| QA-CH-01 | List/form **tiếng Việt** · **0** badge CREATE/EDIT/VIEW | **PASS** (live) |
| QA-CH-02 | Header «Sổ TS — Cống thoát nước ngang» | **PASS** |
| QA-CH-03 | **0** `window.alert`/`confirm` trên AssetList/AssetForm | **PASS** |
| QA-CH-04 | **cấm** ERP.* · API `api/v1/asset/road-assets` | **PASS** |

---

## Grid profile (AC-G-05)

| Check | Result |
|-------|--------|
| Ensure: type_work · culvert_shape · weight · number · height · crossing_length | **PASS** (profile code · empty list → no th) |
| Hide-empty: width · material_body_id | **PASS** (profile) |
| Ẩn type / kmTo / SL / ĐVT / name | **PASS** (profile · live empty) |
| Peer UNDERPASS **không** lẫn list CULVERT_X | **PASS** (type lock) |

---

## Debt / gaps (info · không P0 block)

| Gap | Note |
|-----|------|
| GAP-QA-E2E-PW-01 | `yarn e2e-qa` headed hang → chrome capture contract |
| GAP-QA-E2E-DOCKER-01 | compose maps `:5111` · pre-rebuild thiếu `typeWork` → `--build` required |
| GAP-QA-E2E-KILL-01 | **cấm** kill `:9301` worker |
| GAP-CULVERT-X-01 | dump CSV 0 · empty OK · cấm seed |
| GAP-CN-FLAT-01 | flatten Schema_* DEFER P2 (Dev debt) |
| Auth | DEFER |

## Next

role: **review** · `/agent-review`  
write: `specs/so-ts-culvert-x/review/findings.md`
