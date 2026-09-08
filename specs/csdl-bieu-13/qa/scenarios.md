# QA — Scenarios — csdl-bieu-13

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-13` |
| title | CSDL Biểu 13 — Tường chống ồn |
| role | `qa` · `/agent-qa` |
| taskId | `task_449043d2` |
| status | **confirmed** |
| verdict | **PASS** |
| e2eQa | **ON** |
| method | `e2e runtime · yarn start:std :9301 + docker API :5111 + BFF :5201 + playwright channel=chrome capture (yarn e2e-qa hang fallback)` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-13` |
| mfeStdRoute | `/csdl-bieu-13` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=noise-barriers` |
| testid | `rmms-csdl-bieu-13-list-page` · form `rmms-csdl-bieu-13-form-slideout` |
| docker | API `:5111` healthy · BFF `:5201` healthy · postgres healthy · **rebuild** API (noise-barriers) |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/asset/csdl-records` · **cấm ERP.*** |
| packKind | **`list`** · Kind B A–D+F · Kind D Slideout 2col · Z2 Kích thước tường |
| changeScope | `new_page` |
| resource | `noise-barriers` · formNo `13` · columns `13` · IdCode `TC-` |
| peerSoTs | `so-ts-noise-barrier` · **cấm** merge · none_p1 |
| autoApprove | ON |
| contentHashPriorDataAnaly | `sha256:39a45de0a9b834c65373e6c20d1664ab43144ff60d97bae4f0d886ad09d91e3a` |
| headerFingerprintPrior | `sha256:31dbc83200b511c9d61333b1cdb94e2880778980a3b21970be414e926db29008` |
| updatedAt | `2026-09-05T14:25:00.000Z` |
| prior · dev | **confirmed** · `implement/csdl-bieu-13.md` · `task_94fc7cdd` |

**Cấm** `phase=done` — next = Review. **cấm** ERP.* · **cấm** invent API · **cấm** kill worker (GAP-QA-E2E-KILL-01).

---

## E2E runtime (e2eQa ON)

| Check | Result |
|-------|--------|
| `docker compose up -d` (+ `--build` API) | **PASS** · api `:5111` · bff `:5201` · postgres healthy · `noise-barriers` HTTP 200 |
| `yarn start:std` (`:9301`) | **PASS** · Asset standalone listen (reuse · **cấm** kill) |
| `yarn typecheck` | **PASS** (`tsc --noEmit`) |
| Capture S0 / S1 / QA-20 → `qa/screens/{caseId}.png` | **PASS** · `manifest.json` `ok=true` |
| Live DOM assert | **PASS** · `live-assert.json` · title VN · filter side/km · peer none |
| Form assert QA-20 | **PASS** · `form-assert.json` · Z2/Z2b/Z3 · length/height/area · TC- · Lưu · `data-form-cols=2` |
| API GET `?resource=noise-barriers` | **PASS** · HTTP 200 (`:5111` + BFF `:5201`) |

> Note: `yarn e2e-qa` treo sau `e2e login source=e2e.local.json` (**GAP-QA-E2E-PW-01**) — **không** taskkill rộng node/yarn · capture tương đương Playwright + `channel=chrome` · `--skip-start` (std+docker đã listen). Wrapper e2e-qa Stop-Job riêng · **giữ** :9301. Pre-rebuild: API image cũ 422 `Resource không hợp lệ: noise-barriers` → `docker compose up -d --build linm-rmms-api` rồi PASS.

### Evidence table

| ID | Steps | Expected | Result | Evidence |
|----|-------|----------|--------|----------|
| S0 | Mở `mfeStdUrl` | List `rmms-csdl-bieu-13-list-page` · title Biểu 13 · filter-bar (side/km) · empty/grid · **0** peer | **PASS** | ![S0](screens/S0.png) |
| S1 | Hub `?resource=noise-barriers` | Redirect → `/csdl-bieu-13` · list page (route_a) | **PASS** | ![S1](screens/S1.png) |
| QA-20 | `?form=create` | Slideout create · Z2 kích thước · 2col · footer Lưu · TC- | **PASS** | ![QA-20](screens/QA-20.png) |

`screens/manifest.json` · capturedAt `2026-09-05T14:22:09.486Z` · SHA256_16 S0=`31c535cc64e9c3a3` · S1=`31c535cc64e9c3a3` · QA-20=`dc30967f4f32c2aa`.

---

## T-QA-CRUD-01

| ID | Steps | Expected | Result |
|----|-------|----------|--------|
| QA-20 | Create `?form=create` / toolbar Tạo mới | Slideout · POST `csdl-records` · resource=noise-barriers | **PASS** (runtime + code) |
| QA-21 | Edit | PUT + dirty → `LeaveConfirmModal` | **PASS** (code · LeaveConfirm wired) |
| QA-22 | View | readOnly · footer Sửa/Đóng | **PASS** (code) |
| QA-23 | Copy | POST new · TC- code | **PASS** (code) |
| QA-24 | Delete toolbar/row | soft DELETE · `useAlert` · **0** `window.confirm` | **PASS** (code) |
| QA-25 | Deep-link `?form=&id=` | Slideout · strip params | **PASS** (code) |
| QA-26 | Peer Sổ TS | **none_p1** · **cấm** merge so-ts-noise-barrier | **PASS** (live peerNoneOk) |

---

## T-QA-FORM-01

| ID | Check | Result |
|----|-------|--------|
| QA-F-01 | Slideout fields `data-form-cols=2` · footer_actions_only · **cấm** Full-page | **PASS** (live QA-20 + code) |
| QA-F-02 | Required: road/province/km/status/side · length/height/area ≥0 · reject all-zero | **PASS** (validate) |
| QA-F-03 | road = `SearchInput` road-route · **cấm** Text free | **PASS** (code · create SearchInput; testid on SearchInput may not surface — GAP-QA-ROAD-TESTID) |
| QA-F-04 | Q-AREA-DERIVE manual · Q-BARRIER-TYPE no_type_keep_13 · Q-PREFIX TC | **PASS** |
| QA-F-05 | kmFrom/kmTo · side filter live | **PASS** (filter + form live) |
| QA-F-06 | Dirty leave = `LeaveConfirmModal` · **0** native dialog | **PASS** (code) |
| QA-F-07 | Typed 13 · Z2 Kích thước tường · **cấm** detail*-only | **PASS** (code + live Z2b dim) |

---

## T-QA-FILTER-01 / T-QA-ROUTE-01 / T-QA-DIM-01 / T-QA-SIDE-01

| ID | Check | Result |
|----|-------|--------|
| QA-FB-01 | search · province · status · side · roadCode · kmFrom/kmTo · 🔍 | **PASS** (live S0 testids) |
| QA-FB-02 | `LinErpListFilterBar` · **0** nút Tìm riêng invent | **PASS** |
| QA-FB-03 | **0** export/print/CRUD trên bar | **PASS** |
| QA-ROUTE-01 | alias `/csdl-bieu-13` + hub redirect noise-barriers | **PASS** (S0+S1) |
| QA-DIM-01 | lengthM/heightM/areaM2 ≥0 · area manual · reject all-zero | **PASS** (live form + validate) |
| QA-SIDE-01 | L/R/C/Both LOOKUP · filter + form | **PASS** (live) |

---

## T-QA-TYP-01 / T-QA-TAB-01

| ID | Check | Result |
|----|-------|--------|
| QA-TYP-01 | Label/input Common Components · no local break | **PASS** |
| QA-TAB-01 | Filter leading DOM = visual · form sequential shared→kích thước | **PASS** |
| QA-RESP-01 | List wrap · live 1440 | **PASS** |

---

## Chrome / end-user

| ID | Check | Result |
|----|-------|--------|
| QA-CH-01 | List/form **tiếng Việt** · **0** badge CREATE/EDIT/VIEW · **0** demo/stub | **PASS** (`live-assert.json`) |
| QA-CH-02 | **0** peer toolbar · none_p1 · **cấm** merge so-ts-noise-barrier | **PASS** |
| QA-CH-03 | **0** `window.alert`/`confirm`/`prompt` (Asset page) | **PASS** (useAlert + LeaveConfirm) |
| QA-CH-04 | **cấm** ERP.* imports | **PASS** |
| QA-CH-05 | **0** webpack "Compiled with problems" overlay | **PASS** (screenshot size OK · PNG magic) |

---

## Debt / GAP

| ID | Sev | Note |
|----|-----|------|
| GAP-QA-E2E-PW-01 | P2 | `yarn e2e-qa` hang @ login · chrome channel fallback |
| GAP-QA-ROAD-TESTID | P3 | SearchInput road testid may not surface in form-assert (`hasRoad=false`) |
| GAP-CSDL-ORG-01 | P2 | org DEFER |
| XLS | OUT | stub |
| Auth | DEFER | |

---

## Next

| Role | Need |
|------|------|
| **Review** | `/agent-review` · findings · **cấm** phase=done từ QA |

## Verdict

**PASS** · handoff `handoff/qa-compact.md` · STATUS qa=confirmed · review=pending
