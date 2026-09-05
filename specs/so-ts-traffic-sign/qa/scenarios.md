# QA — Scenarios — so-ts-traffic-sign

> Status: **PASS** · task `task_dd37e48e` · `/agent-qa`  
> e2eQa=ON · runtime capture+assert · capturedAt `2026-09-01T14:15:01.258Z`

| | |
|--|--|
| Feature | `so-ts-traffic-sign` |
| Title | Sổ TS — Biển báo |
| Role | `qa` |
| packKind | `list` |
| changeScope | `new_page` |
| typeCode | `TRAFFIC_SIGN` |
| prefix | `BB-` |
| verdict | **PASS** |
| mfeStdUrl | `http://localhost:9301/so-ts?type=TRAFFIC_SIGN` |
| aliasUrl | `http://localhost:9301/so-ts-traffic-sign` |
| formUrl | `http://localhost:9301/so-ts/tao-moi?type=TRAFFIC_SIGN` |
| testid | `rmms-so-ts-traffic-sign-list-page` · form `rmms-asset-form-shell` · attr `asset-traffic-sign-attr` |
| runtime | docker API `:5111` + BFF `:5201` + `yarn start:std` `:9301` |
| method | `_capture.mjs` + `_live-assert.mjs` · channel=`chrome` · headless |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/asset/road-assets` · **cấm ERP.*** |
| autoApprove | ON |
| contentHashPrior | `sha256:36d61492d82e2fbb37adf4b9935116f9ce71e357e336150de46e95049566de88` |
| prior · dev | **confirmed** · `implement/so-ts-traffic-sign.md` |
| skillVersion | `2026.08.19.04` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| updatedAt | `2026-09-01T14:20:00.000Z` |

**Cấm** `phase=done` — next = Review. **cấm** ERP.* · **cấm** invent `api/v1/so-ts/*` · **cấm** kill worker `:9301`.

---

## E2E runtime (e2eQa ON)

| Check | Result |
|-------|--------|
| `docker compose up -d --build` | **PASS** · api `:5111` · bff `:5201` · postgres healthy · init-data `materialsSign=6` · `shapesSign=7` |
| `yarn start:std` (`:9301`) | **PASS** · listen · **không** kill (**GAP-QA-E2E-KILL-01**) |
| `yarn typecheck` | **PASS** (`tsc --noEmit`) |
| `LINM_RUN_DEV_LOCAL_BUNDLE=1 yarn build` | **PASS** (webpack 5.109.2 · size warnings only · 0 errors) |
| Capture S0 / S1 / QA-20 → `qa/screens/{caseId}.png` | **PASS** · `manifest.json` `ok=true` |
| Live DOM assert + DTM 1280/768/375 | **PASS** · `live-assert.json` · 0 overflowX · form `kmToHiddenOk` |

> Note: `yarn e2e-qa` headed login hang (**GAP-QA-E2E-PW-01**) — capture tương đương Playwright `channel=chrome` · API host map **5111**. Stale docker thiếu `materialsSign`/`shapesSign` → rebuild fix (**GAP-QA-E2E-DOCKER-01**).

### Evidence table

| ID | Steps | Expected | Result | Evidence |
|----|-------|----------|--------|----------|
| S0 | Mở `mfeStdUrl` | List `rmms-so-ts-traffic-sign-list-page` · title «Sổ TS — Biển báo» · filter kmTo ± · ẩn type · grid nội dung/VL/hình dạng | **PASS** | ![S0](screens/S0.png) |
| S1 | Alias `/so-ts-traffic-sign` | Navigate live cùng TRAFFIC_SIGN list | **PASS** | ![S1](screens/S1.png) |
| QA-20 | `/so-ts/tao-moi?type=TRAFFIC_SIGN` | Form shell · `data-form-cols=5` · S-ATTR traffic-sign · S-LOC-POINT kmTo **ẩn** · Số hiệu QCVN · BB- | **PASS** | ![QA-20](screens/QA-20.png) |

`screens/manifest.json` · capturedAt `2026-09-01T14:15:01.258Z` · SHA256_16 S0=`cbf24868aadab5c0` · S1=`cbf24868aadab5c0` · QA-20=`165b3f68d5edd897`.

---

## T-QA-CRUD-01

| ID | Steps | Expected | Result |
|----|-------|----------|--------|
| QA-20 | Create deep-link / toolbar Tạo mới | Form create · type lock TRAFFIC_SIGN · POST `road-assets` · prefix `BB-` | **PASS** (runtime + BE `return "BB-"`) |
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
| QA-F-02 | S-ATTR: Nội dung · Rộng/Cao/DT · Vật liệu · Hình dạng · Vị trí đặt · Ngày lắp | **PASS** (live) |
| QA-F-03 | S-LOC-POINT: `kmTo` **ẩn** · **cấm** ép `"0"` | **PASS** (live `kmToVisible=false`) |
| QA-F-04 | primary name = `sign_code_number` · label «Số hiệu QCVN» · SearchInput | **PASS** (live form) |
| QA-F-05 | Dirty leave = `LeaveConfirmModal` · **0** native dialog | **PASS** (code AssetFormPage) |
| QA-F-06 | init-data materialsSign/shapesSign (after compose --build) | **PASS** (API 200 · counts 6/7) |
| QA-F-07 | Prefix create `BB-` (GAP-SIGN-PREFIX-01) | **PASS** (BE + form Mã) |

---

## T-QA-FILTER-01 / T-QA-FILTER-02

| ID | Check | Result |
|----|-------|--------|
| QA-FB-01 | Fields 1:1 filter-bar · search · route · kmFrom · kmTo ± · org · 🔍 · **type ẩn** deep-link | **PASS** (live) |
| QA-FB-02 | `LinErpListFilterBar` · V1–V5 · **0** nút Tìm riêng | **PASS** |
| QA-FB-03 | Title «Sổ TS — Biển báo» · «Danh sách biển báo» | **PASS** |
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
| QA-CH-02 | Header «Sổ TS — Biển báo» | **PASS** |
| QA-CH-03 | **0** `window.alert`/`confirm` trên AssetList/AssetForm | **PASS** |
| QA-CH-04 | **cấm** ERP.* · API `api/v1/asset/road-assets` | **PASS** |

---

## Grid profile (AC-G-05)

| Check | Result |
|-------|--------|
| Ensure: road_sign_content · width · height · area · material_sign_id · shape_sign_id · location_id · ngaylapdat | **PASS** (live headers) |
| Ẩn type / kmTo / SL / ĐVT | **PASS** (profile · live) |
| Peer CULVERT_X **không** lẫn list TRAFFIC_SIGN | **PASS** (type lock) |

---

## Debt / gaps (info · không P0 block)

| Gap | Note |
|-----|------|
| GAP-QA-E2E-PW-01 | `yarn e2e-qa` headed hang → chrome capture contract |
| GAP-QA-E2E-DOCKER-01 | compose maps `:5111` · pre-rebuild thiếu materialsSign/shapesSign → `--build` required |
| GAP-QA-E2E-KILL-01 | **cấm** kill `:9301` worker |
| GAP-SIGN-FLAT-01 | flatten Schema_* DEFER P2 (Dev debt) |
| Auth | DEFER |

## Next

role: **review** · `/agent-review`  
write: `specs/so-ts-traffic-sign/review/findings.md`
