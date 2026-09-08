# QA — Scenarios — csdl-bieu-01

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-01` |
| title | CSDL Biểu 01 — Phân loại mặt đường |
| role | `qa` · `/agent-qa` |
| taskId | `task_79534771` |
| status | **confirmed** |
| verdict | **PASS** |
| e2eQa | **ON** |
| method | `e2e runtime · yarn start:std :9301 + docker API :5111 + BFF :5201 + playwright channel=chrome capture (yarn e2e-qa install hang fallback)` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-01` |
| mfeStdRoute | `/csdl-bieu-01` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=pavement-sections` |
| testid | `rmms-csdl-bieu-01-list-page` · form `rmms-csdl-bieu-01-form-slideout` |
| docker | API `:5111` healthy · BFF `:5201` healthy · postgres healthy |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/asset/csdl-records` · **cấm ERP.*** |
| packKind | **`list`** · Kind B A–D+F · Kind D Slideout 2col |
| changeScope | `new_page` |
| resource | `pavement-sections` · formNo `01` · columns `38` · IdCode `MD-` |
| autoApprove | ON |
| contentHashPriorDataAnaly | `sha256:3545960f4006740c9dfe57b5f004fa4a1cd1b7befbcd51e35e2168e16821b65e` |
| updatedAt | `2026-09-05T05:46:00.000Z` |
| prior · dev | **confirmed** · `implement/csdl-bieu-01.md` · `task_aefea7f3` |

**Cấm** `phase=done` — next = Review. **cấm** ERP.* · **cấm** invent API · **cấm** kill worker (GAP-QA-E2E-KILL-01).

---

## E2E runtime (e2eQa ON)

| Check | Result |
|-------|--------|
| `docker compose up -d` (`Linm.RMMS.WebService`) | **PASS** · api `:5111` · bff `:5201` · postgres healthy |
| `yarn start:std` (`:9301`) | **PASS** · Asset standalone listen · webpack compiled |
| `yarn typecheck` | **PASS** (`tsc --noEmit`) |
| Capture S0 / S1 / QA-20 → `qa/screens/{caseId}.png` | **PASS** · `manifest.json` `ok=true` |
| Live DOM assert | **PASS** · `live-assert.json` · title VN · filter · peer-sots · empty |
| BFF GET `?resource=pavement-sections` | **PASS** · HTTP 200 |

> Note: `yarn e2e-qa` treo `npx playwright@1.55.0 install chromium` (**GAP-QA-E2E-PW-01**) — **không** kill worker · capture tương đương Playwright + `channel=chrome` · `--skip-start` (std+docker đã listen).

### Evidence table

| ID | Steps | Expected | Result | Evidence |
|----|-------|----------|--------|----------|
| S0 | Mở `mfeStdUrl` | List `rmms-csdl-bieu-01-list-page` · title Biểu 01 · filter-bar · empty/grid · peer Sổ TS | **PASS** | ![S0](screens/S0.png) |
| S1 | Hub `?resource=pavement-sections` | CSDL list `rmms-csdl-so-sach-list-page` (deep-link) | **PASS** | ![S1](screens/S1.png) |
| QA-20 | `?form=create` | Slideout create · Z2/Z3 · footer Hủy/Lưu · road SearchInput | **PASS** | ![QA-20](screens/QA-20.png) |

`screens/manifest.json` · capturedAt `2026-09-05T05:45:19.866Z` · SHA256_16 S0=`0e69a1084c62256e` · S1=`ea6d34ac329f895c` · QA-20=`96c481886e15540e`.

---

## T-QA-CRUD-01

| ID | Steps | Expected | Result |
|----|-------|----------|--------|
| QA-20 | Create `?form=create` / toolbar Tạo mới | Slideout · POST `csdl-records` · resource=pavement-sections | **PASS** (runtime + code) |
| QA-21 | Edit | PUT + dirty → `LeaveConfirmModal` | **PASS** (code · LeaveConfirm wired) |
| QA-22 | View | readOnly · footer Sửa/Đóng | **PASS** (code) |
| QA-23 | Copy | POST new · MD- code | **PASS** (code) |
| QA-24 | Delete toolbar/row | soft DELETE · `useAlert` · **0** `window.confirm` | **PASS** (code) |
| QA-25 | Deep-link `?form=&id=` | Slideout · strip params | **PASS** (code) |
| QA-26 | Peer Sổ TS | deep-link only · **cấm** merge form | **PASS** (live peer-sots) |

---

## T-QA-FORM-01

| ID | Check | Result |
|----|-------|--------|
| QA-F-01 | Slideout `data-form-cols=2` · footer_actions_only · **cấm** Full-page | **PASS** (live QA-20) |
| QA-F-02 | Required: road/province/km/status/structureType/lengthKm | **PASS** (validate) |
| QA-F-03 | road = `SearchInput` road-route · **cấm** Text free | **PASS** (live + code) |
| QA-F-04 | Q-WIDTH four_buckets `surfW*` ×4 | **PASS** (form fields) |
| QA-F-05 | Q-STRUCT `structureType` one_enum | **PASS** |
| QA-F-06 | Dirty leave = `LeaveConfirmModal` · **0** native dialog | **PASS** (code) |
| QA-F-07 | Typed 38 · **cấm** detail*-only | **PASS** (code) |

---

## T-QA-FILTER-01 / T-QA-ROUTE-01

| ID | Check | Result |
|----|-------|--------|
| QA-FB-01 | search · province · status · roadCode · kmFrom/kmTo · 🔍 | **PASS** (live S0 testids) |
| QA-FB-02 | `LinErpListFilterBar` · **0** nút Tìm riêng invent | **PASS** |
| QA-FB-03 | **0** export/print/CRUD trên bar | **PASS** |
| QA-ROUTE-01 | alias `/csdl-bieu-01` + hub deep-link | **PASS** (S0+S1) |

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
| GAP-QA-E2E-PW-01 | **open P2** | `yarn e2e-qa` hang `playwright install chromium` · chrome channel fallback PASS · **cấm** kill |
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
HTTP std GET /csdl-bieu-01 → 200
HTTP BFF GET …/csdl-records?resource=pavement-sections → 200
Playwright S0/S1/QA-20 → PASS · screens/*.png · manifest ok=true
live-assert → PASS
```

## Handoff → Review

| Field | Value |
|-------|--------|
| next | `/agent-review` |
| artifacts | `qa/scenarios.md` · `qa/screens/{S0,S1,QA-20}.png` · `manifest.json` · `handoff/qa-compact.md` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-01` |
| block | **cấm** `phase=done` · Review mới close |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-qa |
| skillVersion | 2026.08.29.03 |
| schemaVersion | 2 |
| workflowVersion | 2026.09.01.02 |
| rulesVersion | 2026.08.31.2 |
| generatedAt | 2026-09-05T05:46:00.000Z |
| versionGate | ok |
| formTypePack | list |
| changeScope | new_page |
| contentHashPriorDataAnaly | sha256:3545960f4006740c9dfe57b5f004fa4a1cd1b7befbcd51e35e2168e16821b65e |
| route_confirm | route_a |
| taskId | task_79534771 |
| priorDevTaskId | task_aefea7f3 |

---
<!-- Version meta: skillId=agent-qa skillVersion=2026.08.29.03 schemaVersion=2 workflowVersion=2026.09.01.02 rulesVersion=2026.08.31.2 versionGate=ok taskId=task_79534771 route_confirm=route_a -->
