# QA — Scenarios — csdl-bieu-09

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-09` |
| title | CSDL Biểu 09 — Mốc lộ giới / GPMB |
| role | `qa` · `/agent-qa` |
| taskId | `task_54b4d1b6` |
| status | **confirmed** |
| verdict | **PASS** |
| e2eQa | **ON** |
| method | `e2e runtime · yarn start:std :9301 + docker API :5111 + BFF :5201 + playwright channel=chrome capture (yarn e2e-qa hang fallback)` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-09` |
| mfeStdRoute | `/csdl-bieu-09` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=boundary-markers` |
| testid | `rmms-csdl-bieu-09-list-page` · form `rmms-csdl-bieu-09-form-slideout` |
| docker | API `:5111` healthy · BFF `:5201` healthy · postgres healthy |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/asset/csdl-records` · **cấm ERP.*** |
| packKind | **`list`** · Kind B A–D+F · Kind D Slideout 2col · **2 section kind** |
| changeScope | `new_page` |
| resource | `boundary-markers` · formNo `09` · columns `17` · IdCode `MK-` |
| autoApprove | ON |
| contentHashPriorDataAnaly | `sha256:863490daf95d2c19ddad660fc05f901eaeb0248fb65961f9e96747ebcf5b04e4` |
| updatedAt | `2026-09-05T11:20:00.000Z` |
| prior · dev | **confirmed** · `implement/csdl-bieu-09.md` · `task_b449f5f6` |

**Cấm** `phase=done` — next = Review. **cấm** ERP.* · **cấm** invent API · **cấm** kill worker (GAP-QA-E2E-KILL-01).

---

## E2E runtime (e2eQa ON)

| Check | Result |
|-------|--------|
| `docker compose up -d` (`Linm.RMMS.WebService`) | **PASS** · api `:5111` · bff `:5201` · postgres healthy |
| `yarn start:std` (`:9301`) | **PASS** · Asset standalone listen (reuse · **cấm** kill) |
| `yarn typecheck` | **PASS** (`tsc --noEmit`) |
| Capture S0 / S1 / QA-20 → `qa/screens/{caseId}.png` | **PASS** · `manifest.json` `ok=true` |
| Live DOM assert | **PASS** · `live-assert.json` · title VN · filter markerKind/side/km · peer none |
| Form assert QA-20 | **PASS** · `form-assert.json` · Z2/Z3 · 2 section kind · MK- · Lưu · `data-form-cols=2` |
| API GET `?resource=boundary-markers` | **PASS** · HTTP 200 (`:5111` + BFF `web-bff/...`) |

> Note: `yarn e2e-qa` treo sau `e2e login source=e2e.local.json` (**GAP-QA-E2E-PW-01**) — **không** taskkill rộng node/yarn · capture tương đương Playwright + `channel=chrome` · `--skip-start` (std+docker đã listen). Wrapper e2e-qa dừng riêng · **giữ** :9301.

### Evidence table

| ID | Steps | Expected | Result | Evidence |
|----|-------|----------|--------|----------|
| S0 | Mở `mfeStdUrl` | List `rmms-csdl-bieu-09-list-page` · title Biểu 09 · filter-bar (side/markerKind/km) · empty/grid · peer **none** | **PASS** | ![S0](screens/S0.png) |
| S1 | Hub `?resource=boundary-markers` | Redirect → `/csdl-bieu-09` · list page (route_a) | **PASS** | ![S1](screens/S1.png) |
| QA-20 | `?form=create` | Slideout create · Z2/Z3 · 2 section kind · footer Lưu · MK- | **PASS** | ![QA-20](screens/QA-20.png) |

`screens/manifest.json` · capturedAt `2026-09-05T11:18:20.627Z` · SHA256_16 S0=`c29f1b4070c71b98` · S1=`c29f1b4070c71b98` · QA-20=`aff91b0ac11e1e28`.

---

## T-QA-CRUD-01

| ID | Steps | Expected | Result |
|----|-------|----------|--------|
| QA-20 | Create `?form=create` / toolbar Tạo mới | Slideout · POST `csdl-records` · resource=boundary-markers | **PASS** (runtime + code) |
| QA-21 | Edit | PUT + dirty → `LeaveConfirmModal` | **PASS** (code · LeaveConfirm wired) |
| QA-22 | View | readOnly · footer Sửa/Đóng | **PASS** (code) |
| QA-23 | Copy | POST new · MK- code | **PASS** (code) |
| QA-24 | Delete toolbar/row | soft DELETE · `useAlert` · **0** `window.confirm` | **PASS** (code) |
| QA-25 | Deep-link `?form=&id=` | Slideout · strip params | **PASS** (code) |
| QA-26 | Peer Sổ TS | **none** · **cấm** merge form | **PASS** (live peerNoneOk) |

---

## T-QA-FORM-01

| ID | Check | Result |
|----|-------|--------|
| QA-F-01 | Slideout fields `data-form-cols=2` · footer_actions_only · **cấm** Full-page | **PASS** (live QA-20 + code) |
| QA-F-02 | Required: road/province/km/status/side/markerKind/completedYear · Qty default 1 | **PASS** (validate) |
| QA-F-03 | road = `SearchInput` road-route · **cấm** Text free | **PASS** (code · create SearchInput; testid on readOnly Input only) |
| QA-F-04 | Q-KIND-LABEL code_en · Q-STRUCT excel_seed · Q-DIM full_dim · Q-QTY show_always | **PASS** |
| QA-F-05 | kmFrom/kmTo · markerKind filter live | **PASS** (filter + form live) |
| QA-F-06 | Dirty leave = `LeaveConfirmModal` · **0** native dialog | **PASS** (code) |
| QA-F-07 | Typed 17 · 2 section kind · **cấm** detail*-only · **cấm** 2 entity | **PASS** (code) |

---

## T-QA-FILTER-01 / T-QA-ROUTE-01 / T-QA-KIND-01

| ID | Check | Result |
|----|-------|--------|
| QA-FB-01 | search · province · status · side · markerKind · roadCode · kmFrom/kmTo · 🔍 | **PASS** (live S0 testids) |
| QA-FB-02 | `LinErpListFilterBar` · **0** nút Tìm riêng invent | **PASS** |
| QA-FB-03 | **0** export/print/CRUD trên bar | **PASS** |
| QA-ROUTE-01 | alias `/csdl-bieu-09` + hub redirect boundary-markers | **PASS** (S0+S1) |
| QA-KIND-01 | RoadLimit/GPMB · 2 section title switch | **PASS** (live create + code) |

---

## T-QA-TYP-01 / T-QA-TAB-01

| ID | Check | Result |
|----|-------|--------|
| QA-TYP-01 | Label/input Common Components · no local break | **PASS** |
| QA-TAB-01 | Filter leading DOM = visual · form sequential shared→kind | **PASS** |
| QA-RESP-01 | List wrap · live 1440 | **PASS** |

---

## Chrome / end-user

| ID | Check | Result |
|----|-------|--------|
| QA-CH-01 | List/form **tiếng Việt** · **0** badge CREATE/EDIT/VIEW · **0** demo/stub | **PASS** (`live-assert.json`) |
| QA-CH-02 | Peer **none** · **cấm** merge Sổ TS | **PASS** |
| QA-CH-03 | **0** `window.alert`/`confirm`/`prompt` (Asset page) | **PASS** (useAlert + LeaveConfirm) |
| QA-CH-04 | **cấm** ERP.* imports | **PASS** |
| QA-CH-05 | **0** webpack "Compiled with problems" overlay | **PASS** (screenshot sạch · size OK) |

---

## Gaps

| ID | Severity | Note |
|----|----------|------|
| GAP-QA-E2E-PW-01 | accepted P2 | `yarn e2e-qa` hang @ login · chrome channel fallback OK |
| GAP-QA-ROAD-TESTID | note P3 | create-mode `SearchInput` road thiếu `data-testid` (chỉ readOnly Input) · SearchInput vẫn live |
| Auth DEFER | debt | from Dev |
| DB migrate apply · org/XLS | debt | from Dev |

---

## Next

| Role | Need |
|------|------|
| **Review** | `/agent-review` · findings · **cấm** `phase=done` từ QA |
