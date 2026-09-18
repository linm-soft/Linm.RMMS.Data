# QA — Scenarios — csdl-bieu-01 (edit_page · T-XLS-S01)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-01` |
| title | CSDL Biểu 01 — Phân loại mặt đường · Xuất/Nhập Excel |
| role | `qa` · `/agent-qa` |
| taskId | `task_795fd15b` |
| status | **confirmed** |
| verdict | **PASS** |
| e2eQa | **ON** |
| method | `e2e runtime · yarn start:std :9301 + docker API :5111 + BFF :5201 + yarn e2e-qa (playwright resolve fail → channel=chrome createRequire AutoCode · skip-start)` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` |
| mfeStdRoute | `/so-ts/csdl-so-sach` · alias `/csdl-bieu-01` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=pavement-sections` |
| testid | `rmms-csdl-bieu-01-list-page` · export `…-export-excel-btn` · import `…-import-excel-btn` · form `rmms-csdl-bieu-01-form-slideout` |
| docker | API `:5111` healthy · BFF `:5201` healthy · postgres healthy |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/asset/csdl-records` · **cấm ERP.*** |
| packKind | **`list`** · Kind B A–D+F · Kind D Slideout 2col **KEEP** |
| changeScope | **`edit_page`** (T-XLS-S01) |
| resource | `pavement-sections` · formNo `01` · columns `38` · IdCode `MD-` |
| autoApprove | ON |
| contentHash | `sha256:b48e58e637a1dd4fc9e14298a0063d34c89eadb1ea02ba756b561b4648d4b085` |
| skillVersion | `2026.09.05.03` |
| workflowVersion | `2026.09.05.03` |
| rulesVersion | `2026.09.17.3` |
| updatedAt | `2026-09-17T18:40:00.000Z` |
| prior · dev | **confirmed** · `implement/csdl-bieu-01.md` · `task_742f5820` |

**Cấm** `phase=done` — next = Review. **cấm** ERP.* · **cấm** invent API · **cấm** kill worker (GAP-QA-E2E-KILL-01).

---

## E2E runtime (e2eQa ON)

| Check | Result |
|-------|--------|
| `docker compose up -d` (`Linm.RMMS.WebService`) | **PASS** · api `:5111` · bff `:5201` · postgres healthy |
| `yarn start:std` (`:9301`) | **PASS** · Asset standalone · webpack compiled · `csdl-bieu-01` chunk |
| `yarn e2e-qa --skip-start` | CLI **fail** resolve `playwright` từ screens cwd · **không** kill · fallback channel=chrome |
| Capture S0 / S1 / QA-20 → `qa/screens/{caseId}.png` | **PASS** · `manifest.json` `ok=true` |
| Live DOM + S-XLS-EXPORT | **PASS** · `live-assert.json` · filename `Bieu01_PhanLoaiMatDuong_20260918.xls` |
| S-XLS-IMPORT smoke | **PASS** · file input + roundtrip setInputFiles · **0** fail toast |

### Evidence table

| ID | Steps | Expected | Result | Evidence |
|----|-------|----------|--------|----------|
| S0 | Mở alias `/csdl-bieu-01` | List · toolbar Xuất/Nhập · filter-bar · **0** Xuất trên filter | **PASS** | ![S0](screens/S0.png) |
| S1 | Hub `?resource=pavement-sections` | Mount Biểu 01 list (`rmms-csdl-bieu-01-list-page`) | **PASS** | ![S1](screens/S1.png) |
| QA-20 | `?form=create` | Slideout create KEEP · Z2 | **PASS** | ![QA-20](screens/QA-20.png) |

`screens/manifest.json` · capturedAt `2026-09-17T18:36:41.819Z` · SHA256_16 S0=`71467080520a8a78` · S1=`71467080520a8a78` · QA-20=`fb8cfa7afc10a991`.

---

## T-XLS-QA-01

| ID | Steps | Expected | Result |
|----|-------|----------|--------|
| S-XLS-EXPORT | Click `…-export-excel-btn` | Download `Bieu01_PhanLoaiMatDuong_{yyyyMMdd}.xls` · OOXML · filtered QS | **PASS** (`live-assert.json`) |
| S-XLS-IMPORT | File input `…-import-file` · set exported xls | import_now path · **0** fail toast · skipBridge soft | **PASS** (`import-assert.json`) |
| QA-XLS-TB | Toolbar Xuất + Nhập | catalogToolbar · testids export/import | **PASS** |
| QA-XLS-FB08 | Filter bar | **0** Xuất Excel trên `…-list-filters` | **PASS** (GAP-FILTER-BAR-08) |

---

## T-QA-* KEEP (prior CRUD · smoke)

| Pack | Result |
|------|--------|
| T-QA-CRUD-01 QA-20 create slideout | **PASS** (runtime QA-20) |
| T-QA-FORM-01 Slideout 2col | **PASS** (live) |
| T-QA-FILTER-01 search/province/status/road/km | **PASS** (testids) |
| T-QA-ROUTE-01 alias + hub deep-link | **PASS** (S0+S1) |
| Peer Sổ TS deep-link only | **PASS** (`…-peer-sots`) |

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
| GAP-QA-E2E-PW-01 | P2 | `yarn e2e-qa` playwright resolve từ screens cwd fail · chrome createRequire fallback · **cấm** kill |
| Auth | DEFER | prior |
| getBlob CD strip | P2 | FE filename fallback = PO lock · verified |
| BIFF .xls read | N/A | OOXML OK |
| CRUD empty grid | P2 | list empty OK for XLS headers-only export |

---

## Handoff → Review

| Field | Value |
|-------|-------|
| next | `/agent-review` · findings · **cấm** phase=done @ QA |
| qa_verdict | **PASS** |
| compact | `specs/csdl-bieu-01/handoff/qa-compact.md` |
| screens | `specs/csdl-bieu-01/qa/screens/{S0,S1,QA-20}.png` |
