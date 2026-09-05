# QA — Scenarios — so-ts-ditch

> Status: **PASS** · task `task_10b1c919` · `/agent-qa`  
> e2eQa=ON · runtime capture+assert · capturedAt `2026-09-01T10:58:24.319Z`

| | |
|--|--|
| Feature | `so-ts-ditch` |
| Title | Sổ TS — Cống / rãnh dọc |
| Role | `qa` |
| packKind | `list` |
| changeScope | `new_page` |
| typeCode | `DITCH` |
| prefix | `CD-` |
| verdict | **PASS** |
| mfeStdUrl | `http://localhost:9301/so-ts?type=DITCH` |
| aliasUrl | `http://localhost:9301/so-ts-ditch` |
| formUrl | `http://localhost:9301/so-ts/tao-moi?type=DITCH` |
| testid | `rmms-so-ts-ditch-list-page` · form `rmms-asset-form-shell` · attr `asset-ditch-attr` |
| runtime | docker API `:5111` + BFF `:5201` + `yarn start:std` `:9301` |
| method | `_capture.mjs` + `_live-assert.mjs` · channel=`chrome` · headless |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/asset/road-assets` · **cấm ERP.*** |
| autoApprove | ON |
| contentHashPrior | `sha256:8f37e4455aded2ca3a045f47a50916be0563e859af9b18bdcc59000ce4305854` |
| prior · dev | **confirmed** · `implement/so-ts-ditch.md` |
| skillVersion | `2026.08.19.04` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| updatedAt | `2026-09-01T11:00:00.000Z` |

**Cấm** `phase=done` — next = Review. **cấm** ERP.* · **cấm** invent `api/v1/so-ts/*` · **cấm** kill worker `:9301`.

---

## E2E runtime (e2eQa ON)

| Check | Result |
|-------|--------|
| `docker compose up -d --build` | **PASS** · api `:5111` · bff `:5201` · postgres healthy · init-data `ditchTypes=4` · `culvertShapes=4` · `ditchStructuralTypes=4` · `ditchWorkTypes=4` · `ditchMaterialsWork=5` · `ditchLocations=3` |
| `yarn start:std` (`:9301`) | **PASS** · already listen · **không** kill (**GAP-QA-E2E-KILL-01**) |
| `yarn typecheck` | **PASS** (`tsc --noEmit`) |
| `LINM_RUN_DEV_LOCAL_BUNDLE=1 yarn build` | **PASS** (webpack 5.109.2 · size warnings only · 0 errors) |
| Capture S0 / S1 / QA-20 → `qa/screens/{caseId}.png` | **PASS** · `manifest.json` `ok=true` |
| Live DOM assert + DTM 1280/768/375 | **PASS** · `live-assert.json` · 0 overflowX |

> Note: `yarn e2e-qa --skip-start` headed login hang (**GAP-QA-E2E-PW-01**) — capture tương đương Playwright `channel=chrome` · API host map **5111**. Stale docker (pre-rebuild) thiếu `ditchTypes` → rebuild fix (**GAP-QA-E2E-DOCKER-01**).

### Evidence table

| ID | Steps | Expected | Result | Evidence |
|----|-------|----------|--------|----------|
| S0 | Mở `mfeStdUrl` | List `rmms-so-ts-ditch-list-page` · title «Sổ TS — Cống / rãnh dọc» · filter kmTo · cột loại rãnh/hình dạng/dài · ẩn type | **PASS** | ![S0](screens/S0.png) |
| S1 | Alias `/so-ts-ditch` | Redirect/live cùng DITCH list | **PASS** | ![S1](screens/S1.png) |
| QA-20 | `/so-ts/tao-moi?type=DITCH` | Form shell · `data-form-cols=5` · S-ATTR ditch · S-LOC-RANGE kmTo **hiện** · Loại rãnh* | **PASS** | ![QA-20](screens/QA-20.png) |

`screens/manifest.json` · capturedAt `2026-09-01T10:58:24.319Z` · SHA256_16 S0=`80cd1472b1186859` · S1=`80cd1472b1186859` · QA-20=`5b82db2826bfaaa1`.

---

## T-QA-CRUD-01

| ID | Steps | Expected | Result |
|----|-------|----------|--------|
| QA-20 | Create deep-link / toolbar Tạo mới | Form create · type lock DITCH · POST `road-assets` · prefix `CD-` | **PASS** (runtime + code) |
| QA-21 | Edit | PUT + dumpSpecs merge · leave Modal | **PASS** (code · LeaveConfirm wired) |
| QA-22 | View | display/`dl` · **cấm** Input disabled xám | **PASS** (code) |
| QA-23 | Copy / Delete | soft DELETE · `useAlert` · **0** `window.confirm` Asset list/form | **PASS** (code) |
| QA-24 | Config | `LinCatalogUiSchemaEditorModal` kind=`road-assets` · **0** `configHint` | **PASS** |
| QA-25 | History | `LinCatalogHistoryModal` | **PASS** (code) |
| QA-26 | Row menu | Xem / Sửa / Sao chép / Lịch sử / Xóa | **PASS** (live hint + code) |

---

## T-QA-FORM-01

| ID | Check | Result |
|----|-------|--------|
| QA-F-01 | Full-page `data-form-cols="5"` | **PASS** (live) |
| QA-F-02 | S-ATTR: Loại rãnh* · Hình dạng · Dài/cao/rộng · kết cấu/CT/VL · hố ga · vị trí | **PASS** (live) |
| QA-F-03 | S-LOC-RANGE: `kmTo` **hiện** (RANGE) · 4 XY dumpSpecs | **PASS** (live `kmToVisible=true`) |
| QA-F-04 | `name` optional · list primary = `ditch_type_id` | **PASS** (live headers) |
| QA-F-05 | Dirty leave = `LeaveConfirmModal` · **0** native dialog | **PASS** (code AssetFormPage) |
| QA-F-06 | init-data ditch* lookups non-null (after compose --build) | **PASS** (BFF 200 · counts 4/4/4/4/5/3) |
| QA-F-07 | Prefix create `CD-` (GAP-DITCH-PREFIX-01) | **PASS** (live snippet `CD-` + code) |

---

## T-QA-FILTER-01 / T-QA-FILTER-02

| ID | Check | Result |
|----|-------|--------|
| QA-FB-01 | Fields 1:1 filter-bar · search · route · kmFrom · kmTo · org · 🔍 · **type ẩn** deep-link | **PASS** (live) |
| QA-FB-02 | `LinErpListFilterBar` · V1–V5 · **0** nút Tìm riêng | **PASS** |
| QA-FB-03 | Title «Sổ TS — Cống / rãnh dọc» · «Danh sách cống / rãnh dọc» | **PASS** |
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
| QA-CH-02 | Header «Sổ TS — Cống / rãnh dọc» | **PASS** |
| QA-CH-03 | **0** `window.alert`/`confirm` trên AssetList/AssetForm | **PASS** |
| QA-CH-04 | **cấm** ERP.* · API `api/v1/asset/road-assets` | **PASS** |

---

## Grid profile (AC-G-05)

| Check | Result |
|-------|--------|
| Show: loại rãnh · hình dạng · dài · cao · kmFrom · kmTo | **PASS** (live headers) |
| Hide-empty: rộng đáy/miệng · hố ga · địa danh khi empty | **PASS** (profile) |
| Ẩn type / SL / ĐVT / ảnh | **PASS** (live headers) |
| Peer CULVERT_L **không** lẫn list DITCH | **PASS** (type lock) |

---

## Debt / gaps (info · không P0 block)

| Gap | Note |
|-----|------|
| GAP-QA-E2E-PW-01 | `yarn e2e-qa` headed hang → chrome capture contract |
| GAP-QA-E2E-DOCKER-01 | compose maps `:5111` · pre-rebuild thiếu `ditchTypes` → `--build` required |
| GAP-QA-E2E-KILL-01 | **cấm** kill `:9301` worker |
| GAP-DITCH-FLAT-01 | flatten Schema_* DEFER P2 (Dev debt) |
| Auth / CULVERT_L peer | DEFER |

## Next

role: **review** · `/agent-review`  
write: `specs/so-ts-ditch/review/findings.md`
