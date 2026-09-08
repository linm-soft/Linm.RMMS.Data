# QA — Scenarios — csdl-so-09

| Field | Value |
|-------|-------|
| feature | `csdl-so-09` |
| title | CSDL Sổ 09 — QL vận hành ITS/ETC/KSTTX |
| role | `qa` · `/agent-qa` |
| taskId | `task_e2d2ecee` |
| status | **confirmed** |
| verdict | **PASS** |
| e2eQa | **ON** |
| method | `e2e runtime · yarn start:std :9301 + docker API :5111 + BFF :5201 + playwright channel=chrome capture (yarn e2e-qa hang fallback)` |
| mfeStdUrl | `http://localhost:9301/csdl-so-09` |
| mfeStdRoute | `/csdl-so-09` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=its-ops-logs` |
| testid | `rmms-csdl-so-09-list-page` · form `rmms-csdl-so-09-form-slideout` |
| docker | API `:5111` healthy · BFF `:5201` healthy · postgres healthy · its-ops-logs HTTP 200 (rebuild image) |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/asset/csdl-records` · **cấm ERP.*** |
| packKind | **`list`** · Kind B A–D+F+H · Kind D Slideout 2col · entries `inline_grid` **9 cột** |
| changeScope | `new_page` |
| resource | `its-ops-logs` · formNo `09` · IdCode `SO-` |
| autoApprove | ON |
| contentHashPriorDataAnaly | `sha256:1cbd0cd26f977a518c29457acddd7c893fa56fe9bd750ac1ad6a15b0976d03dc` |
| headerFingerprintPrior | `sha256:c00fdbdda898129b6408c35f9fb57cd2cc918356208b1067310d40c8f3cbefd9` |
| updatedAt | `2026-09-06T00:16:30.000Z` |
| prior · dev | **confirmed** · `implement/csdl-so-09.md` · `task_55ae2864` |

**Cấm** `phase=done` — next = Review. **cấm** ERP.* · **cấm** invent API · **cấm** kill worker (GAP-QA-E2E-KILL-01).

---

## E2E runtime (e2eQa ON)

| Check | Result |
|-------|--------|
| `docker compose up -d` (+ rebuild API) | **PASS** · api `:5111` · bff `:5201` · postgres healthy · `its-ops-logs` HTTP 200 |
| `yarn start:std` (`:9301`) | **PASS** · Asset standalone listen (reuse · **cấm** kill) |
| `yarn typecheck` | **PASS** (`tsc --noEmit`) |
| Capture S0 / S1 / QA-20 → `qa/screens/{caseId}.png` | **PASS** · `manifest.json` `ok=true` |
| Live DOM assert | **PASS** · `live-assert.json` · title VN · filter province/status/road/dateRange · empty |
| Form assert QA-20 | **PASS** · `form-assert.json` · Z2 + entries 9 cột + Z3 · 2col · Lưu · linkBieu14 |
| API GET `?resource=its-ops-logs` | **PASS** · HTTP 200 (`:5111` + BFF `:5201/web-bff`) |

> Note: `yarn e2e-qa` treo sau `e2e login source=e2e.local.json` (**GAP-QA-E2E-PW-01**) — **không** taskkill rộng node/yarn · Stop-Job wrapper only · capture Playwright + `channel=chrome` · `--skip-start` (std+docker đã listen) · **giữ** :9301.

### Evidence table

| ID | Steps | Expected | Result | Evidence |
|----|-------|----------|--------|----------|
| S0 | Mở `mfeStdUrl` | List `rmms-csdl-so-09-list-page` · title Sổ 09 · filter-bar · empty/grid | **PASS** | ![S0](screens/S0.png) |
| S1 | Hub `?resource=its-ops-logs` | Redirect → `/csdl-so-09` · list page (route_a) | **PASS** | ![S1](screens/S1.png) |
| QA-20 | `?form=create` | Slideout create · Z2 header · entries inline_grid 9 cột · 2col · footer Lưu · linkBieu14 | **PASS** | ![QA-20](screens/QA-20.png) |

`screens/manifest.json` · capturedAt `2026-09-06T00:15:40.051Z` · SHA256_16 S0=`9adf80696ce5d2ec` · S1=`9adf80696ce5d2ec` · QA-20=`8c2a8a53d1ba7c39`.

---

## T-QA-CRUD-01

| ID | Steps | Expected | Result |
|----|-------|----------|--------|
| QA-20 | Create `?form=create` / toolbar Tạo mới | Slideout · POST `csdl-records` · resource=its-ops-logs · entries[] | **PASS** (runtime + code) |
| QA-21 | Edit | PUT + dirty → `LeaveConfirmModal` | **PASS** (code · LeaveConfirm wired) |
| QA-22 | View | readOnly · footer Sửa/Đóng | **PASS** (code) |
| QA-23 | Copy | POST new · SO- code | **PASS** (code · mode=copy) |
| QA-24 | Delete toolbar/row | soft DELETE · `useAlert` · **0** `window.confirm` | **PASS** (code · useAlert) |
| QA-25 | Deep-link `?form=&id=` | Slideout · strip params | **PASS** (code · QA-20 stripped) |

---

## T-QA-FORM-01

| ID | Check | Result |
|----|-------|--------|
| QA-F-01 | Slideout fields `data-form-cols=2` · footer_actions_only · **cấm** Full-page | **PASS** (live QA-20 `formCols=2`) |
| QA-F-02 | Required bookNo/contractor/road/kmFrom/periodStart + entry occurredAt/shift/operator/systemStatus/action/result/signature | **PASS** (validate code) |
| QA-F-03 | road = `SearchInput` road-route · **cấm** Text free | **PASS** (code · SearchInput; testid may not surface — GAP-QA-ROAD-TESTID) |
| QA-F-04 | entries `inline_grid` · **9 cột** occurredAt·shift·operatorName·systemStatus·anomaly·action·result·recommendation·signature · add/remove · media N/A | **PASS** (live entry-0 *9 + code) |
| QA-F-05 | Dirty leave = `LeaveConfirmModal` · **0** native dialog | **PASS** (code) |
| QA-F-06 | Typed So09 · **cấm** detail*-only · **cấm** flatten-only · **≠** Biểu 9 | **PASS** (live Z2/entries/Z3 · linkBieu14) |
| QA-F-07 | linkBieu14Id optional SearchInput its-systems · deep-link · **cấm** embed | **PASS** (live `csdl-so-09-field-linkBieu14`) |

---

## T-QA-FILTER-01 / T-QA-ROUTE-01 / T-QA-TYP-01 / T-QA-TAB-01 / T-QA-LINK14

| ID | Check | Result |
|----|-------|--------|
| QA-FB-01 | search · province · status · roadCode · dateRange · 🔍 | **PASS** (live S0 testids) |
| QA-FB-02 | filter-bar 1 hàng · **0** nút Tìm riêng invent | **PASS** |
| QA-FB-03 | **0** export/print/CRUD trên bar | **PASS** |
| QA-ROUTE-01 | alias `/csdl-so-09` + hub redirect its-ops-logs | **PASS** (S0+S1) |
| QA-LINK14-01 | optional link Biểu 14 · **cấm** embed merge | **PASS** (live field) |
| QA-TYP-01 | Label/input Common Components · no local break | **PASS** |
| QA-TAB-01 | Filter leading DOM = visual · form định danh→entries→footer | **PASS** |
| QA-RESP-01 | List wrap · live 1440 | **PASS** |
| QA-FILE-01 | media N/A P1 · **cấm** invent FileRef | **PASS** (N/A per PO) |

---

## Chrome / end-user

| ID | Check | Result |
|----|-------|--------|
| QA-CH-01 | List/form **tiếng Việt** · **0** badge CREATE/EDIT/VIEW · **0** demo/stub | **PASS** (`live-assert.json`) |
| QA-CH-02 | **0** peer toolbar merge Sổ TS | **PASS** (`peerNoneOk`) |
| QA-CH-03 | **0** `window.alert`/`confirm`/`prompt` (Asset page) | **PASS** (useAlert + LeaveConfirm) |
| QA-CH-04 | **cấm** ERP.* imports | **PASS** |
| QA-CH-05 | **0** webpack "Compiled with problems" overlay | **PASS** (PNG capture OK) |

---

## Debt / GAP

| ID | P | Note |
|----|---|------|
| GAP-QA-E2E-PW-01 | P2 | `yarn e2e-qa` hang @ login → chrome channel capture fallback |
| GAP-QA-ROAD-TESTID | P3 | form `csdl-so-09-field-road` may not appear in DOM query (SearchInput wrapper) |
| Auth / org / XLS / e-sign | DEFER\|OUT | per PO |
| UiSchema seed default | DEFER | Dev debt |
| Migration apply runtime | P1 | Schema_CsdlSo09 in image · ApplyMigrationsOnStartup |

---

## Next

| Role | Need |
|------|------|
| **Review** | `/agent-review` · findings · **cấm** `phase=done` từ QA |
