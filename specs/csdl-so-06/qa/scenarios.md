# QA — Scenarios — csdl-so-06

| Field | Value |
|-------|-------|
| feature | `csdl-so-06` |
| title | CSDL Sổ 06 — QL cầu / phiếu KT |
| role | `qa` · `/agent-qa` |
| taskId | `task_81900df5` |
| status | **confirmed** |
| verdict | **PASS** |
| e2eQa | **ON** |
| method | `e2e runtime · yarn start:std :9301 + docker API :5111 + BFF :5201 + playwright channel=chrome capture (yarn e2e-qa hang fallback)` |
| mfeStdUrl | `http://localhost:9301/csdl-so-06` |
| mfeStdRoute | `/csdl-so-06` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=bridge-inspections` |
| testid | `rmms-csdl-so-06-list-page` · form `rmms-csdl-so-06-form-slideout` |
| docker | API `:5111` healthy · BFF `:5201` healthy · postgres healthy · bridge-inspections HTTP 200 |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/asset/csdl-records` · **cấm ERP.*** |
| packKind | **`list`** · Kind B A–D+F+H · Kind D Slideout 2col · entries `inline_grid` **fixed-20** |
| changeScope | `new_page` |
| resource | `bridge-inspections` · formNo `06` · IdCode `SO-` |
| autoApprove | ON |
| contentHashPriorDataAnaly | `sha256:efbccc4800d45e5dfe2b30b8b35773d127554eb6912be14729c0da066e214d8a` |
| headerFingerprintPrior | `sha256:f87218b875c86a0a438994d8dd3abf30f59757fe4f85ddc4e9af0893efb9422f` |
| updatedAt | `2026-09-06T04:00:00.000Z` |
| prior · dev | **confirmed** · `implement/csdl-so-06.md` · `task_e9296e25` |

**Cấm** `phase=done` — next = Review. **cấm** ERP.* · **cấm** invent API · **cấm** kill worker (GAP-QA-E2E-KILL-01).

---

## E2E runtime (e2eQa ON)

| Check | Result |
|-------|--------|
| `docker compose up -d` | **PASS** · api `:5111` · bff `:5201` · postgres healthy · `bridge-inspections` HTTP 200 |
| `yarn start:std` (`:9301`) | **PASS** · Asset standalone listen (reuse · **cấm** kill) |
| `yarn typecheck` | **PASS** (`tsc --noEmit`) |
| Capture S0 / S1 / QA-20 → `qa/screens/{caseId}.png` | **PASS** · `manifest.json` `ok=true` |
| Live DOM assert | **PASS** · `live-assert.json` · title VN · filter province/status/road/bridge/dateRange · empty |
| Form assert QA-20 | **PASS** · `form-assert.json` · Z2 + fixed-20 entries + Z3 · 2col · Lưu · entry-0..19 · **0** add-entry |
| API GET `?resource=bridge-inspections` | **PASS** · HTTP 200 (`:5111` + BFF `:5201/web-bff`) |

> Note: `yarn e2e-qa` treo sau `e2e login source=e2e.local.json` (**GAP-QA-E2E-PW-01**) — **không** taskkill rộng node/yarn · Stop-Process wrapper PID only · capture Playwright + `channel=chrome` · `--skip-start` (std+docker đã listen) · **giữ** :9301.

### Evidence table

| ID | Steps | Expected | Result | Evidence |
|----|-------|----------|--------|----------|
| S0 | Mở `mfeStdUrl` | List `rmms-csdl-so-06-list-page` · title Sổ 06 · filter-bar · empty/grid | **PASS** | ![S0](screens/S0.png) |
| S1 | Hub `?resource=bridge-inspections` | Redirect → `/csdl-so-06` · list page (route_a) | **PASS** | ![S1](screens/S1.png) |
| QA-20 | `?form=create` | Slideout create · Z2 header · fixed-20 inline_grid · 2col · footer Lưu | **PASS** | ![QA-20](screens/QA-20.png) |

`screens/manifest.json` · capturedAt `2026-09-05T20:59:51.704Z` · SHA256_16 S0=`bd06b17fe835b37b` · S1=`bd06b17fe835b37b` · QA-20=`858eb97d3763a616`.

---

## T-QA-CRUD-01

| ID | Steps | Expected | Result |
|----|-------|----------|--------|
| QA-20 | Create `?form=create` / toolbar Tạo mới | Slideout · POST `csdl-records` · resource=bridge-inspections · entries[20] | **PASS** (runtime + code) |
| QA-21 | Edit | PUT + dirty → `LeaveConfirmModal` | **PASS** (code · LeaveConfirm wired) |
| QA-22 | View | readOnly · footer Sửa/Đóng | **PASS** (code · btn-to-edit) |
| QA-23 | Copy | POST new · SO- code | **PASS** (code · mode=copy) |
| QA-24 | Delete toolbar/row | soft DELETE · `useAlert` · **0** `window.confirm` | **PASS** (code · useAlert) |
| QA-25 | Deep-link `?form=&id=` | Slideout · strip params | **PASS** (runtime · QA-20 stripped URL) |

---

## T-QA-FORM-01 / T-QA-FIXED20-01 / T-QA-MEDIA-01

| ID | Check | Result |
|----|-------|--------|
| QA-F-01 | Slideout fields `data-form-cols=2` · footer_actions_only · **cấm** Full-page | **PASS** (live QA-20 `formCols=2`) |
| QA-F-02 | Required bridge*/road/kmStation/inspectedAt/inspector + priority* nếu damageDesc | **PASS** (validate code) |
| QA-F-03 | road = `SearchInput` road-route · **cấm** Text free (edit) | **PASS** (code · SearchInput; testid may not surface — GAP-QA-ROAD-TESTID) |
| QA-F-04 | entries `inline_grid` **fixed-20** · partCode/Name ro · damage/priority/photo/note · **0** add/remove | **PASS** (live entryCount=20 · hasEntry19 · hasAddEntry=false) |
| QA-F-05 | Dirty leave = `LeaveConfirmModal` · **0** native dialog | **PASS** (code) |
| QA-F-06 | Typed So06 · **cấm** detail*-only · **cấm** đổi partCode seed | **PASS** (live Z2/entries/Z3 · seed ro) |
| QA-FX-01 | 20 dòng seed SSOT · partCode cố định | **PASS** (live entry-0..19) |
| QA-MED-01 | photoIds CSV max 5 / dòng · FileMulti DEFER | **PASS** (live photoIds field · code max5) |

---

## T-QA-FILTER-01 / T-QA-ROUTE-01 / T-QA-TYP-01 / T-QA-TAB-01

| ID | Check | Result |
|----|-------|--------|
| QA-FB-01 | search · province · status · roadCode · bridgeId · dateRange · 🔍 | **PASS** (live S0 testids) |
| QA-FB-02 | filter-bar 1 hàng · **0** nút Tìm riêng invent | **PASS** |
| QA-FB-03 | **0** export/print/CRUD trên bar | **PASS** |
| QA-ROUTE-01 | alias `/csdl-so-06` + hub redirect bridge-inspections | **PASS** (S0+S1) |
| QA-TYP-01 | Label/input Common Components · no local break | **PASS** |
| QA-TAB-01 | Filter leading DOM = visual · form định danh→entries→footer | **PASS** |
| QA-RESP-01 | List wrap · live 1440 | **PASS** |
| QA-PEER-01 | passportRef deep-link Biểu 2 · **cấm** merge form | **PASS** (code · btn-passport-link) |

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
| GAP-QA-ROAD-TESTID | P3 | form `csdl-so-06-field-road` may not appear in DOM query (SearchInput wrapper) |
| FileMulti UI · bridges SearchInput | DEFER | Dev debt · photoIds CSV bind P1 |
| Auth / org / XLS / hub rename T-REN-01 | DEFER\|OUT | per PO |
| UiSchema seed default · DB migrate apply | DEFER | Dev/ops |

---

## Next

| Role | Need |
|------|------|
| **Review** | `/agent-review` · findings · **cấm** phase=done từ QA |
