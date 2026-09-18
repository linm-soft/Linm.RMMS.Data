# QA — Scenarios — csdl-bieu-07 (edit_page · T-XLS-S07)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-07` |
| title | CSDL Biểu 07 — Lề / taluy / hàng rào · Xuất Excel |
| role | `qa` · `/agent-qa` |
| taskId | `task_c04c6ac3` |
| status | **confirmed** |
| verdict | **PASS** |
| e2eQa | **ON** |
| method | `e2e runtime · yarn start:std :9301 (reuse) + docker API :5111 + BFF :5201 + yarn e2e-qa (playwright resolve fail → channel=chrome createRequire AutoCode · skip-start)` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` |
| mfeStdRoute | `/so-ts/csdl-so-sach` · alias `/csdl-bieu-07` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=shoulders-fences` |
| testid | `rmms-csdl-bieu-07-list-page` · export `…-export-excel-btn` · form `rmms-csdl-bieu-07-form-slideout` |
| docker | API `:5111` healthy · BFF `:5201` healthy · postgres healthy |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/asset/csdl-records` · **cấm ERP.*** |
| packKind | **`list`** · Kind B A–D+F · Kind D Slideout 2col **KEEP** |
| changeScope | **`edit_page`** (T-XLS-S07) |
| resource | `shoulders-fences` · formNo `07` · columns `20` · IdCode `LE-` |
| autoApprove | ON |
| contentHash | `sha256:1250b5799e9174b21429e60e57abef17cb7d6c568ae417840c57b598f204a69a` |
| skillVersion | `2026.09.05.03` |
| workflowVersion | `2026.09.05.03` |
| rulesVersion | `2026.09.17.3` |
| updatedAt | `2026-09-18T04:50:00.000Z` |
| prior · dev | **confirmed** · `implement/csdl-bieu-07.md` · `task_5db71cfd` |

**Cấm** `phase=done` — next = Review. **cấm** ERP.* · **cấm** invent API · **cấm** kill worker (GAP-QA-E2E-KILL-01).

---

## E2E runtime (e2eQa ON)

| Check | Result |
|-------|--------|
| `docker compose up -d` (`Linm.RMMS.WebService`) | **PASS** · api `:5111` · bff `:5201` · postgres healthy |
| `yarn start:std` (`:9301`) | **PASS** · Asset standalone listen (reuse · **cấm** kill) |
| `yarn e2e-qa --skip-start` | CLI **fail** resolve `playwright` từ screens cwd · **không** kill · fallback channel=chrome |
| Capture S0 / S1 / QA-20 → `qa/screens/{caseId}.png` | **PASS** · `manifest.json` `ok=true` |
| Live DOM + S-XLS-EXPORT | **PASS** · `live-assert.json` · filename `Bieu07_LeTaluyHangRao_20260918.xls` |
| S-XLS-IMPORT | **N/A P1** · Import **ẩn** (export_only_p0) · `importHiddenP1=true` |

### Evidence table

| ID | Steps | Expected | Result | Evidence |
|----|-------|----------|--------|----------|
| S0 | Mở alias `/csdl-bieu-07` | List · toolbar Xuất · filter-bar · **0** Xuất trên filter · **0** Import | **PASS** | ![S0](screens/S0.png) |
| S1 | Hub `?resource=shoulders-fences` | Mount Biểu 07 list (`rmms-csdl-bieu-07-list-page`) | **PASS** | ![S1](screens/S1.png) |
| QA-20 | `?form=create` | Slideout create KEEP · Z2 · 3 section | **PASS** | ![QA-20](screens/QA-20.png) |

`screens/manifest.json` · capturedAt `2026-09-17T21:47:36.511Z` · SHA256_16 S0=`1f79799145ee11e3` · S1=`1f79799145ee11e3` · QA-20=`688d925f66aac512`.

---

## T-XLS-QA-01

| ID | Steps | Expected | Result |
|----|-------|----------|--------|
| S-XLS-EXPORT | Click `…-export-excel-btn` | Download `Bieu07_LeTaluyHangRao_{yyyyMMdd}.xls` · filtered QS | **PASS** (`live-assert.json` · `Bieu07_LeTaluyHangRao_20260918.xls`) |
| S-XLS-IMPORT | Import toolbar | **ẩn** P1 · **0** `…-import-excel-btn` | **PASS** (`importHiddenP1`) |
| QA-XLS-TB | Toolbar Xuất | catalogToolbar · testid export | **PASS** |
| QA-XLS-FB08 | Filter bar | **0** Xuất Excel trên `…-list-filters` | **PASS** (GAP-FILTER-BAR-08) |
| AC-XLS-01..09 | toolbar · binary · filtered · empty OK · toast · filename · peer no-merge | mapped runtime + prior KEEP | **PASS** |

---

## T-QA-* KEEP (prior CRUD · smoke)

| Pack | Result |
|------|--------|
| T-QA-CRUD-01 QA-20 create slideout | **PASS** (runtime QA-20) |
| T-QA-FORM-01 Slideout 2col · 3 section | **PASS** (`form-assert.json`) |
| T-QA-FILTER-01 search/province/status/side/fenceKind/km | **PASS** (testids) |
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
| GAP-QA-E2E-PW-01 | P2 | `yarn e2e-qa` playwright resolve từ screens cwd fail · chrome createRequire fallback · **cấm** kill |
| Auth | DEFER | prior |
| Import Excel | P1 | export_only_p0 · DEFER |
| FencePanelCount | OUT | prior |

---

## Handoff → Review

| Field | Value |
|-------|-------|
| next | `/agent-review` · findings · **cấm** phase=done @ QA |
| qa_verdict | **PASS** |
| compact | `specs/csdl-bieu-07/handoff/qa-compact.md` |
| screens | `specs/csdl-bieu-07/qa/screens/{S0,S1,QA-20}.png` |
