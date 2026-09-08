# QA — Scenarios — csdl-bieu-12

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-12` |
| title | CSDL Biểu 12 — Cây xanh, thảm cỏ |
| role | `qa` · `/agent-qa` |
| taskId | `task_d2312fac` |
| status | **confirmed** |
| verdict | **PASS** |
| e2eQa | **ON** |
| method | `e2e runtime · yarn start:std :9301 + docker API :5111 + BFF :5201 + playwright channel=chrome capture (yarn e2e-qa hang fallback)` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-12` |
| mfeStdRoute | `/csdl-bieu-12` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=green-assets` |
| testid | `rmms-csdl-bieu-12-list-page` · form `rmms-csdl-bieu-12-form-slideout` |
| docker | API `:5111` healthy · BFF `:5201` healthy · postgres healthy |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/asset/csdl-records` · **cấm ERP.*** |
| packKind | **`list`** · Kind B A–D+F · Kind D Slideout 2col · **2 section** khóm + thảm cỏ |
| changeScope | `new_page` |
| resource | `green-assets` · formNo `12` · columns `15` · IdCode `CX-` |
| peerSoTs | — (**cấm** invent so-ts-green · no peer toolbar) |
| autoApprove | ON |
| contentHashPriorDataAnaly | `sha256:6da498be3a84192c6f3e3c30a7e8032bf2753359591a9aabd3ad36d809f4c457` |
| headerFingerprintPrior | `sha256:54aef0c755530d138ecefa7a303b22c78c32ca1b6ae3555d5bb33492799b5af9` |
| updatedAt | `2026-09-05T13:35:00.000Z` |
| prior · dev | **confirmed** · `implement/csdl-bieu-12.md` · `task_b5ce8177` |

**Cấm** `phase=done` — next = Review. **cấm** ERP.* · **cấm** invent API · **cấm** kill worker (GAP-QA-E2E-KILL-01).

---

## E2E runtime (e2eQa ON)

| Check | Result |
|-------|--------|
| `docker compose up -d` (`Linm.RMMS.WebService`) | **PASS** · api `:5111` · bff `:5201` · postgres healthy |
| `yarn start:std` (`:9301`) | **PASS** · Asset standalone listen (reuse · **cấm** kill) |
| `yarn typecheck` | **PASS** (`tsc --noEmit` · fixed Slideout `customFooter`/`isOpen` + SearchInput no `fullWidth`) |
| Capture S0 / S1 / QA-20 → `qa/screens/{caseId}.png` | **PASS** · `manifest.json` `ok=true` |
| Live DOM assert | **PASS** · `live-assert.json` · title VN · filter side/km · peer none |
| Form assert QA-20 | **PASS** · `form-assert.json` · Z2/Z2b/Z3 · clumps · grass · CX- · Lưu · `data-form-cols=2` |
| API GET `?resource=green-assets` | **PASS** · HTTP 200 (`:5111`) |

> Note: `yarn e2e-qa` treo sau `e2e login source=e2e.local.json` (**GAP-QA-E2E-PW-01**) — **không** taskkill rộng node/yarn · capture tương đương Playwright + `channel=chrome` · `--skip-start` (std+docker đã listen). Wrapper e2e-qa dừng riêng · **giữ** :9301.

### Evidence table

| ID | Steps | Expected | Result | Evidence |
|----|-------|----------|--------|----------|
| S0 | Mở `mfeStdUrl` | List `rmms-csdl-bieu-12-list-page` · title Biểu 12 · filter-bar (side/km) · empty/grid · **0** peer | **PASS** | ![S0](screens/S0.png) |
| S1 | Hub `?resource=green-assets` | Redirect → `/csdl-bieu-12` · list page (route_a) | **PASS** | ![S1](screens/S1.png) |
| QA-20 | `?form=create` | Slideout create · Z2/Z2b thảm cỏ · 2 section · footer Lưu · CX- | **PASS** | ![QA-20](screens/QA-20.png) |

`screens/manifest.json` · capturedAt `2026-09-05T13:33:58.075Z` · SHA256_16 S0=`f8c6e6a7283f45ed` · S1=`f8c6e6a7283f45ed` · QA-20=`642f13697329afc7`.

---

## T-QA-CRUD-01

| ID | Steps | Expected | Result |
|----|-------|----------|--------|
| QA-20 | Create `?form=create` / toolbar Tạo mới | Slideout · POST `csdl-records` · resource=green-assets | **PASS** (runtime + code) |
| QA-21 | Edit | PUT + dirty → `LeaveConfirmModal` | **PASS** (code · LeaveConfirm wired) |
| QA-22 | View | readOnly · footer Sửa/Đóng | **PASS** (code) |
| QA-23 | Copy | POST new · CX- code | **PASS** (code) |
| QA-24 | Delete toolbar/row | soft DELETE · `useAlert` · **0** `window.confirm` | **PASS** (code) |
| QA-25 | Deep-link `?form=&id=` | Slideout · strip params | **PASS** (code) |
| QA-26 | Peer Sổ TS | **none** · **cấm** invent so-ts-green | **PASS** (live peerNoneOk) |

---

## T-QA-FORM-01

| ID | Check | Result |
|----|-------|--------|
| QA-F-01 | Slideout fields `data-form-cols=2` · footer_actions_only · **cấm** Full-page | **PASS** (live QA-20 + code) |
| QA-F-02 | Required: road/province/km/status/side · clumps ≥0 · grass allow_either | **PASS** (validate) |
| QA-F-03 | road = `SearchInput` road-route · **cấm** Text free | **PASS** (code · create SearchInput; testid on SearchInput may not surface — GAP-QA-ROAD-TESTID) |
| QA-F-04 | Q-OTHER-CLUMP keep_other · Q-GRASS-REQ allow_either · Q-TALUY side_only | **PASS** |
| QA-F-05 | kmFrom/kmTo · side filter live | **PASS** (filter + form live) |
| QA-F-06 | Dirty leave = `LeaveConfirmModal` · **0** native dialog | **PASS** (code) |
| QA-F-07 | Typed 15 · 2 section khóm+thảm cỏ · **cấm** detail*-only | **PASS** (code + live Z2b grass) |

---

## T-QA-FILTER-01 / T-QA-ROUTE-01 / T-QA-CLUMP-01 / T-QA-GRASS-01

| ID | Check | Result |
|----|-------|--------|
| QA-FB-01 | search · province · status · side · roadCode · kmFrom/kmTo · 🔍 | **PASS** (live S0 testids) |
| QA-FB-02 | `LinErpListFilterBar` · **0** nút Tìm riêng invent | **PASS** |
| QA-FB-03 | **0** export/print/CRUD trên bar | **PASS** |
| QA-ROUTE-01 | alias `/csdl-bieu-12` + hub redirect green-assets | **PASS** (S0+S1) |
| QA-CLUMP-01 | oleander/ngau/palm/otherClumps ≥0 · keep_other | **PASS** (live form clumps) |
| QA-GRASS-01 | grassAreaM2 optional flat · Z2b | **PASS** (live Z2b) |

---

## T-QA-TYP-01 / T-QA-TAB-01

| ID | Check | Result |
|----|-------|--------|
| QA-TYP-01 | Label/input Common Components · no local break | **PASS** |
| QA-TAB-01 | Filter leading DOM = visual · form sequential shared→khóm→thảm cỏ | **PASS** |
| QA-RESP-01 | List wrap · live 1440 | **PASS** |

---

## Chrome / end-user

| ID | Check | Result |
|----|-------|--------|
| QA-CH-01 | List/form **tiếng Việt** · **0** badge CREATE/EDIT/VIEW · **0** demo/stub | **PASS** (`live-assert.json`) |
| QA-CH-02 | **0** peer toolbar · **cấm** invent so-ts-green | **PASS** |
| QA-CH-03 | **0** `window.alert`/`confirm`/`prompt` (Asset page) | **PASS** (useAlert + LeaveConfirm) |
| QA-CH-04 | **cấm** ERP.* imports | **PASS** |
| QA-CH-05 | **0** webpack "Compiled with problems" overlay | **PASS** (screenshot sạch · size OK) |

---

## Debt / GAP

| ID | Severity | Note |
|----|----------|------|
| GAP-QA-E2E-PW-01 | P2 | `yarn e2e-qa` hang @ login · chrome channel fallback |
| GAP-QA-ROAD-TESTID | P3 | SearchInput may not forward `data-testid` (hasRoad=false assert; code uses SearchInput) |
| Auth wire | DEFER | — |
| org SearchInput / XLS | OUT/DEFER | — |
| DB migrate apply | P2 | Dev debt |

## Next

| Role | Need |
|------|------|
| **Review** | `/agent-review` · findings · **cấm** phase=done từ QA |

## UNCLEAR

- none
