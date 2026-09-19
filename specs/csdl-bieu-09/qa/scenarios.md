# QA — Scenarios — csdl-bieu-09 (edit_page · T-XLS-S09)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-09` |
| title | CSDL Biểu 09 — Mốc lộ giới / GPMB · Xuất/Nhập Excel |
| role | `qa` · `/agent-qa` |
| taskId | `task_a1a1c430` |
| status | **confirmed** |
| verdict | **PASS** |
| e2eQa | **ON** |
| method | `e2e runtime · yarn start:std :9301 + docker API :5111 + BFF :5201 + yarn e2e-qa (playwright resolve fail → channel=chrome createRequire AutoCode · skip-start)` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` |
| mfeStdRoute | `/so-ts/csdl-so-sach` · alias `/csdl-bieu-09` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=boundary-markers` |
| testid | `rmms-csdl-bieu-09-list-page` · export `…-export-excel-btn` · import `…-import-excel-btn` · form `rmms-csdl-bieu-09-form-slideout` |
| docker | API `:5111` healthy · BFF `:5201` healthy · postgres healthy |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/asset/csdl-records` · **cấm ERP.*** |
| packKind | **`list`** · Kind B A–D+F · Kind D Slideout 2col · **2 section kind** **KEEP** |
| changeScope | **`edit_page`** (T-XLS-S09) |
| resource | `boundary-markers` · formNo `09` · columns `17` · IdCode `MK-` |
| autoApprove | ON |
| contentHash | `sha256:58c012cef8ad07ae7a6d5e8ab513668c51dc0755d1f209783beb41ba1c4ccc01` |
| headerFingerprint | `sha256:765521dee151f2ded36c582ca1a0b7ec048237b88cfc5b27481f09e6787e9a77` |
| skillVersion | `2026.09.05.03` |
| workflowVersion | `2026.09.05.03` |
| rulesVersion | `2026.09.17.3` |
| updatedAt | `2026-09-18T06:05:00.000Z` |
| prior · dev | **confirmed** · `implement/csdl-bieu-09.md` · `task_6056af24` |

**Cấm** `phase=done` — next = Review. **cấm** ERP.* · **cấm** invent API · **cấm** kill worker (GAP-QA-E2E-KILL-01).

---

## E2E runtime (e2eQa ON)

| Check | Result |
|-------|--------|
| `docker compose up -d` (`Linm.RMMS.WebService`) | **PASS** · api `:5111` · bff `:5201` · postgres healthy |
| `yarn start:std` (`:9301`) | **PASS** · Asset standalone listen (reuse · **cấm** kill) |
| `yarn typecheck` | **PASS** (`tsc --noEmit`) |
| `yarn e2e-qa --skip-start` | CLI **fail** resolve `playwright` từ screens cwd · **không** kill · fallback channel=chrome |
| Capture S0 / S1 / QA-20 → `qa/screens/{caseId}.png` | **PASS** · `manifest.json` `ok=true` |
| Live DOM + S-XLS-EXPORT | **PASS** · `live-assert.json` · filename `Bieu09_MocLoGioiGPMB_20260918.xls` |
| S-XLS-IMPORT smoke | **PASS** · file input + roundtrip setInputFiles · **0** fail toast |

### Evidence table

| ID | Steps | Expected | Result | Evidence |
|----|-------|----------|--------|----------|
| S0 | Mở alias `/csdl-bieu-09` | List · toolbar Xuất/Nhập · filter-bar · **0** Xuất trên filter | **PASS** | ![S0](screens/S0.png) |
| S1 | Hub `?resource=boundary-markers` | Mount Biểu 09 list (`rmms-csdl-bieu-09-list-page`) | **PASS** | ![S1](screens/S1.png) |
| QA-20 | `?form=create` | Slideout create KEEP · Z2/Z3 · 2 section kind · MK- | **PASS** | ![QA-20](screens/QA-20.png) |

`screens/manifest.json` · capturedAt `2026-09-17T22:59:46.264Z` · SHA256_16 S0=`0523b566a450c15d` · S1=`0523b566a450c15d` · QA-20=`0e5b0fbe05710bbc`.

---

## T-XLS-QA-01

| ID | Steps | Expected | Result |
|----|-------|----------|--------|
| S-XLS-EXPORT | Click `…-export-excel-btn` | Download `Bieu09_MocLoGioiGPMB_{yyyyMMdd}.xls` · filtered QS | **PASS** (`live-assert.json`) |
| S-XLS-IMPORT | File input `…-import-file` · set exported xls | import_now path · **0** fail toast · skipBridge soft | **PASS** (`import-assert.json`) |
| QA-XLS-TB | Toolbar Xuất + Nhập | catalogToolbar · testids export/import | **PASS** |
| QA-XLS-FB08 | Filter bar | **0** Xuất Excel trên `…-list-filters` | **PASS** (GAP-FILTER-BAR-08) |

---

## T-QA-* KEEP (prior CRUD · smoke)

| Pack | Result |
|------|--------|
| T-QA-CRUD-01 QA-20 create slideout | **PASS** (runtime QA-20 · form-assert Z2/Z3 · `data-form-cols=2`) |
| T-QA-FORM-01 Slideout 2col · 2 section kind | **PASS** (live) |
| T-QA-FILTER-01 search/province/status/side/markerKind/road/km | **PASS** (testids) |
| T-QA-ROUTE-01 alias + hub deep-link | **PASS** (S0+S1) |
| Peer Sổ TS | **none** · **cấm** merge form | **PASS** (0 peer-sots testid) |

---

## Chrome / end-user

| ID | Check | Result |
|----|-------|--------|
| QA-CH-01 | List/form VN · **0** CREATE/EDIT/VIEW badge · **0** demo/stub | **PASS** |
| QA-CH-02 | **0** native alert/confirm on export/import | **PASS** (toast path) |
| QA-CH-03 | **cấm** ERP.* | **PASS** |

---

## Gaps / debt (non-blocking)

| ID | P | Note |
|----|---|------|
| GAP-QA-E2E-PW-01 | P2 | `yarn e2e-qa` overwrite `_capture.mjs` bare playwright · chrome createRequire fallback · **cấm** kill |
| Auth | DEFER | auth container restarting intermittently · list/export ok |
| getBlob CD strip | P2 | FE filename fallback = PO lock · verified `Bieu09_MocLoGioiGPMB_20260918.xls` |
| BIFF .xls read | N/A | OOXML OK |

---

## Handoff

- compact: `specs/csdl-bieu-09/handoff/qa-compact.md`
- next: `/agent-review` · **cấm** `phase=done` @ QA
- queue: `yarn queue -- status --id task_a1a1c430 --status completed`
