# QA — Scenarios — csdl-bieu-02 (edit_page · T-XLS-S02)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-02` |
| title | CSDL Biểu 02 — Thống kê cầu · Xuất Excel |
| role | `qa` · `/agent-qa` |
| taskId | `task_eaf98be4` |
| status | **confirmed** |
| verdict | **PASS** |
| e2eQa | **ON** |
| method | `e2e runtime · yarn start:std :9301 + docker API :5111 + BFF :5201 + yarn e2e-qa (playwright overwrite fail → channel=chrome createRequire AutoCode · skip-start)` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` |
| mfeStdRoute | `/so-ts/csdl-so-sach` · alias `/csdl-bieu-02` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=bridges` |
| testid | `rmms-csdl-bieu-02-list-page` · export `…-export-excel-btn` · form `rmms-csdl-bieu-02-form-slideout` |
| docker | API `:5111` healthy · BFF `:5201` healthy · postgres healthy |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/asset/csdl-records` · **cấm ERP.*** |
| packKind | **`list`** · Kind B A–D+F · Kind D Slideout 2col **KEEP** |
| changeScope | **`edit_page`** (T-XLS-S02) |
| resource | `bridges` · formNo `02` · columns `48` · IdCode `BR-` |
| autoApprove | ON |
| contentHash | `sha256:43c517bec9635b8c3ac292e54e566cf38f3ba97c86a8ce56e5b4c587427dcf40` |
| skillVersion | `2026.09.05.03` |
| workflowVersion | `2026.09.05.03` |
| rulesVersion | `2026.09.17.3` |
| updatedAt | `2026-09-18T02:15:00.000Z` |
| prior · dev | **confirmed** · `implement/csdl-bieu-02.md` · `task_a201197f` |

**Cấm** `phase=done` — next = Review. **cấm** ERP.* · **cấm** invent API · **cấm** kill worker (GAP-QA-E2E-KILL-01).

---

## E2E runtime (e2eQa ON)

| Check | Result |
|-------|--------|
| `docker compose up -d` (`Linm.RMMS.WebService`) | **PASS** · api `:5111` · bff `:5201` · postgres healthy |
| `yarn start:std` (`:9301`) | **PASS** · Asset standalone already listen · bundle có `CsdlBieu02` + export |
| `yarn e2e-qa --skip-start` | CLI **fail** — overwrite `_capture.mjs` bare `import "playwright"` từ screens cwd · **không** kill · fallback createRequire + channel=chrome |
| Capture S0 / S1 / QA-20 → `qa/screens/{caseId}.png` | **PASS** · `manifest.json` `ok=true` |
| Live DOM + S-XLS-EXPORT | **PASS** · `live-assert.json` · filename `Bieu02_ThongKeCau_20260918.xls` · Import ẩn · **0** Xuất trên filter |

### Evidence table

| ID | Steps | Expected | Result | Evidence |
|----|-------|----------|--------|----------|
| S0 | Mở alias `/csdl-bieu-02` | List · toolbar Xuất · filter-bar · **0** Xuất trên filter · Import ẩn | **PASS** | ![S0](screens/S0.png) |
| S1 | Hub `?resource=bridges` | Mount Biểu 02 list (`rmms-csdl-bieu-02-list-page`) | **PASS** | ![S1](screens/S1.png) |
| QA-20 | `?form=create` | Slideout create KEEP · Z2 · GPS×6 · BR- | **PASS** | ![QA-20](screens/QA-20.png) |

`screens/manifest.json` · capturedAt `2026-09-17T19:13:40.436Z` · SHA256_16 S0=`b105f120226a9c86` · S1=`b105f120226a9c86` · QA-20=`45f986f38d112b9a`.

---

## T-XLS-QA-01

| ID | Steps | Expected | Result |
|----|-------|----------|--------|
| S-XLS-EXPORT | Click `…-export-excel-btn` | Download `Bieu02_ThongKeCau_{yyyyMMdd}.xls` · filtered QS · filter-all | **PASS** (`live-assert.json`) |
| S-XLS-IMPORT | Import UI | **DEFER P1** · **0** `…-import-excel-btn` | **PASS** (hidden) |
| QA-XLS-TB | Toolbar Xuất only | catalogToolbar · testid export | **PASS** |
| QA-XLS-FB08 | Filter bar | **0** Xuất Excel trên `…-list-filters` | **PASS** (GAP-FILTER-BAR-08) |
| QA-XLS-EMPTY | Empty grid export | headers-only + toast OK | **PASS** (empty list + download ok) |

---

## T-QA-* KEEP (prior CRUD · smoke)

| Pack | Result |
|------|--------|
| T-QA-CRUD-01 QA-20 create slideout | **PASS** (runtime QA-20) |
| T-QA-FORM-01 Slideout 2col · GPS×6 | **PASS** (live) |
| T-QA-FILTER-01 search/province/status/road/km/beamType | **PASS** (testids) |
| T-QA-ROUTE-01 alias + hub deep-link | **PASS** (S0+S1) |
| Peer Sổ TS deep-link only | **PASS** (`…-peer-sots`) |

---

## Chrome / end-user

| ID | Check | Result |
|----|-------|--------|
| QA-CH-01 | List/form VN · **0** CREATE/EDIT/VIEW badge · **0** demo/stub | **PASS** |
| QA-CH-02 | **0** native alert/confirm on export | **PASS** (toast path) |
| QA-CH-03 | **cấm** ERP.* | **PASS** |

---

## Gaps / debt (non-blocking)

| ID | P | Note |
|----|---|------|
| GAP-QA-E2E-PW-01 | P2 | `yarn e2e-qa` overwrite `_capture.mjs` bare playwright import · chrome createRequire fallback · **cấm** kill |
| Auth | DEFER | prior |
| getBlob CD strip | P2 | FE filename fallback = SA lock `.xls` · verified |
| Import P1 | DEFER | export_only_p0 |
| CRUD empty grid | P2 | list empty OK for XLS headers-only export |

---

## Handoff → Review

| Field | Value |
|-------|-------|
| next | `/agent-review` · findings · **cấm** phase=done @ QA |
| qa_verdict | **PASS** |
| compact | `specs/csdl-bieu-02/handoff/qa-compact.md` |
| screens | `specs/csdl-bieu-02/qa/screens/{S0,S1,QA-20}.png` |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-qa |
| skillVersion | 2026.09.05.03 |
| schemaVersion | 2 |
| workflowVersion | 2026.09.05.03 |
| rulesVersion | 2026.09.17.3 |
| generatedAt | 2026-09-18T02:15:00.000Z |
| versionGate | ok |
| formTypePack | list |
| changeScope | edit_page |
| contentHashPriorDataAnaly | sha256:43c517bec9635b8c3ac292e54e566cf38f3ba97c86a8ce56e5b4c587427dcf40 |
| route_confirm | route_a |
| taskId | task_eaf98be4 |
| priorDevTaskId | task_a201197f |

---
<!-- Version meta: skillId=agent-qa skillVersion=2026.09.05.03 schemaVersion=2 workflowVersion=2026.09.05.03 rulesVersion=2026.09.17.3 versionGate=ok taskId=task_eaf98be4 route_confirm=route_a changeScope=edit_page -->
