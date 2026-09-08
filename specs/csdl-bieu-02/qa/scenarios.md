# QA — Scenarios — csdl-bieu-02

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-02` |
| title | CSDL Biểu 02 — Thống kê cầu |
| role | `qa` · `/agent-qa` |
| taskId | `task_ac771056` |
| status | **confirmed** |
| verdict | **PASS** |
| e2eQa | **ON** |
| method | `e2e runtime · yarn start:std :9301 + docker API :5111 + BFF :5201 + playwright channel=chrome capture (yarn e2e-qa hang fallback)` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-02` |
| mfeStdRoute | `/csdl-bieu-02` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=bridges` |
| testid | `rmms-csdl-bieu-02-list-page` · form `rmms-csdl-bieu-02-form-slideout` |
| docker | API `:5111` healthy · BFF `:5201` healthy · postgres healthy |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/asset/csdl-records` · **cấm ERP.*** |
| packKind | **`list`** · Kind B A–D+F · Kind D Slideout 2col |
| changeScope | `new_page` |
| resource | `bridges` · formNo `02` · columns `48` · IdCode `BR-` |
| autoApprove | ON |
| contentHashPriorDataAnaly | `sha256:bd73974e607f886dd38736015cb5a6a3fb82aff9d6a63328963ceb5c4be436a2` |
| updatedAt | `2026-09-05T08:30:00.000Z` |
| prior · dev | **confirmed** · `implement/csdl-bieu-02.md` · `task_f8854c01` |

**Cấm** `phase=done` — next = Review. **cấm** ERP.* · **cấm** invent API · **cấm** kill worker (GAP-QA-E2E-KILL-01).

---

## E2E runtime (e2eQa ON)

| Check | Result |
|-------|--------|
| `docker compose up -d` (`Linm.RMMS.WebService`) | **PASS** · api `:5111` · bff `:5201` · postgres healthy |
| `yarn start:std` (`:9301`) | **PASS** · Asset standalone listen · bundle có `CsdlBieu02` |
| `yarn typecheck` | **PASS** (`tsc --noEmit`) |
| Capture S0 / S1 / QA-20 → `qa/screens/{caseId}.png` | **PASS** · `manifest.json` `ok=true` |
| Live DOM assert | **PASS** · `live-assert.json` · title VN · filter beamType/kmFrom · peer-sots · empty |
| BFF GET `?resource=bridges` | **PASS** · HTTP 200 |

> Note: `yarn e2e-qa` treo sau `e2e login source=e2e.local.json` ~100s (**GAP-QA-E2E-PW-01**) — **không** taskkill rộng node/yarn · Stop-Job chỉ PS job wrapper · capture tương đương Playwright + `channel=chrome` · `--skip-start` (std+docker đã listen).

### Evidence table

| ID | Steps | Expected | Result | Evidence |
|----|-------|----------|--------|----------|
| S0 | Mở `mfeStdUrl` | List `rmms-csdl-bieu-02-list-page` · title Biểu 02 · filter-bar · empty/grid · peer Sổ TS | **PASS** | ![S0](screens/S0.png) |
| S1 | Hub `?resource=bridges` | CSDL list `rmms-csdl-so-sach-list-page` (deep-link) | **PASS** | ![S1](screens/S1.png) |
| QA-20 | `?form=create` | Slideout create · Z2/Z3 · footer Hủy/Lưu · road SearchInput · BR- · GPS×6 | **PASS** | ![QA-20](screens/QA-20.png) |

`screens/manifest.json` · capturedAt `2026-09-05T08:29:25.358Z` · SHA256_16 S0=`2f3ef226e8b4373c` · S1=`f3d1b7450445adf9` · QA-20=`18da741efe42ab96`.

---

## T-QA-CRUD-01

| ID | Steps | Expected | Result |
|----|-------|----------|--------|
| QA-20 | Create `?form=create` / toolbar Tạo mới | Slideout · POST `csdl-records` · resource=bridges | **PASS** (runtime + code) |
| QA-21 | Edit | PUT + dirty → `LeaveConfirmModal` | **PASS** (code · LeaveConfirm wired) |
| QA-22 | View | readOnly · footer Sửa/Đóng | **PASS** (code) |
| QA-23 | Copy | POST new · BR- code | **PASS** (code) |
| QA-24 | Delete toolbar/row | soft DELETE · `useAlert` · **0** `window.confirm` | **PASS** (code) |
| QA-25 | Deep-link `?form=&id=` | Slideout · strip params | **PASS** (code) |
| QA-26 | Peer Sổ TS cầu | deep-link only · **cấm** merge form | **PASS** (live peer-sots) |

---

## T-QA-FORM-01

| ID | Check | Result |
|----|-------|--------|
| QA-F-01 | Slideout `data-form-cols=2` · footer_actions_only · **cấm** Full-page | **PASS** (live QA-20) |
| QA-F-02 | Required: bridgeName/road/province/km/status/lengthM/carriageWidthM | **PASS** (validate) |
| QA-F-03 | road = `SearchInput` road-route · **cấm** Text free | **PASS** (live + code) |
| QA-F-04 | Q-GPS `six_numbers` gps* ×6 | **PASS** (form fields) |
| QA-F-05 | Q-LOAD text design/actualLoad | **PASS** |
| QA-F-06 | Q-LEGACY keep_hidden legacyCol64/69 | **PASS** (code) |
| QA-F-07 | Dirty leave = `LeaveConfirmModal` · **0** native dialog | **PASS** (code) |
| QA-F-08 | Typed 48 · **cấm** detail*-only · sectioned | **PASS** (code) |

---

## T-QA-FILTER-01 / T-QA-ROUTE-01

| ID | Check | Result |
|----|-------|--------|
| QA-FB-01 | search · province · status · roadCode · kmFrom/kmTo · beamType · 🔍 | **PASS** (live S0 testids) |
| QA-FB-02 | `LinErpListFilterBar` · **0** nút Tìm riêng invent | **PASS** |
| QA-FB-03 | **0** export/print/CRUD trên bar | **PASS** |
| QA-ROUTE-01 | alias `/csdl-bieu-02` + hub deep-link | **PASS** (S0+S1) |

---

## T-QA-TYP-01 / T-QA-TAB-01

| ID | Check | Result |
|----|-------|--------|
| QA-TYP-01 | Label/input Common Components · no local break | **PASS** |
| QA-TAB-01 | Filter leading DOM = visual · form sequential | **PASS** |
| QA-RESP-01 | List wrap · live 1440 | **PASS** |

---

## Chrome / end-user

| ID | Check | Result |
|----|-------|--------|
| QA-CH-01 | List/form **tiếng Việt** · **0** badge CREATE/EDIT/VIEW · **0** demo/stub | **PASS** (`live-assert.json`) |
| QA-CH-02 | Peer deep-link Sổ TS · **cấm** merge | **PASS** |
| QA-CH-03 | **0** `window.alert`/`confirm`/`prompt` (Asset page) | **PASS** (useAlert + LeaveConfirm) |
| QA-CH-04 | **cấm** ERP.* imports | **PASS** |

---

## Gaps

| ID | Status | Note |
|----|--------|------|
| GAP-QA-E2E-PW-01 | **open P2** | `yarn e2e-qa` hang after login · chrome channel fallback PASS · **cấm** kill |
| GAP-CSDL-AUTH-01 | **DEFER** | RequirePermission |
| GAP-CSDL-ORG-01 | **DEFER P2** | manageUnit SearchInput |
| GAP-CSDL-XLS-01 | **OUT** | Excel |
| GAP-CSDL-PROV-01 | **keep_static P1** | |
| GAP-QA-E2E-KILL-01 | **n/a** | không kill worker |

---

## Verify gate

```
yarn typecheck → PASS
docker compose ps → api/bff/postgres healthy
HTTP std GET /csdl-bieu-02 → 200 (Accept: text/html)
HTTP BFF GET …/csdl-records?resource=bridges → 200
Playwright S0/S1/QA-20 → PASS · screens/*.png · manifest ok=true
live-assert → PASS
```

## Handoff → Review

| Field | Value |
|-------|--------|
| next | `/agent-review` |
| artifacts | `qa/scenarios.md` · `qa/screens/{S0,S1,QA-20}.png` · `manifest.json` · `handoff/qa-compact.md` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-02` |
| block | **cấm** `phase=done` · Review mới close |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-qa |
| skillVersion | 2026.08.29.03 |
| schemaVersion | 2 |
| workflowVersion | 2026.09.01.02 |
| rulesVersion | 2026.08.31.2 |
| generatedAt | 2026-09-05T08:30:00.000Z |
| versionGate | ok |
| formTypePack | list |
| changeScope | new_page |
| contentHashPriorDataAnaly | sha256:bd73974e607f886dd38736015cb5a6a3fb82aff9d6a63328963ceb5c4be436a2 |
| route_confirm | route_a |
| taskId | task_ac771056 |
| priorDevTaskId | task_f8854c01 |

---
<!-- Version meta: skillId=agent-qa skillVersion=2026.08.29.03 schemaVersion=2 workflowVersion=2026.09.01.02 rulesVersion=2026.08.31.2 versionGate=ok taskId=task_ac771056 route_confirm=route_a -->
