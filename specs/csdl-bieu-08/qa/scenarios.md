# QA — Scenarios — csdl-bieu-08 (edit_page · T-XLS-S08)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-08` |
| title | CSDL Biểu 08 — Hệ thống ATGT · Xuất/Nhập Excel |
| role | `qa` · `/agent-qa` |
| taskId | `task_0bd98d56` |
| status | **confirmed** |
| verdict | **PASS** |
| e2eQa | **ON** |
| method | `e2e runtime · yarn start:std :9301 + docker API :5111 + BFF :5201 + yarn e2e-qa (playwright resolve fail → channel=chrome createRequire AutoCode · skip-start)` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` |
| mfeStdRoute | `/so-ts/csdl-so-sach` · alias `/csdl-bieu-08` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=traffic-safety` |
| testid | `rmms-csdl-bieu-08-list-page` · export `…-export-excel-btn` · import `…-import-excel-btn` · form `rmms-csdl-bieu-08-form-slideout` |
| docker | API `:5111` healthy · BFF `:5201` healthy · postgres healthy |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/asset/csdl-records` · **cấm ERP.*** |
| packKind | **`list`** · Kind B A–D+F · Kind D Slideout 2col · **shared+1 child** **KEEP** |
| changeScope | **`edit_page`** (T-XLS-S08) |
| resource | `traffic-safety` · formNo `08` · columns `45` · **11 nhóm** · IdCode `AT-` |
| autoApprove | ON |
| contentHash | `sha256:639566df4ddccc3927311d5618bf4e7c1dbad0dac80962c414f861dacc9d5e9c` |
| headerFingerprint | `sha256:ba8b8db4f7637ee32cfd4a882b6abdc774c538f6c9812c3ecd1d13f6151cdd6f` |
| skillVersion | `2026.09.05.03` |
| workflowVersion | `2026.09.05.03` |
| rulesVersion | `2026.09.17.3` |
| updatedAt | `2026-09-18T05:45:00.000Z` |
| prior · dev | **confirmed** · `implement/csdl-bieu-08.md` · `task_ed6e77ce` |

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
| Live DOM + S-XLS-EXPORT | **PASS** · `live-assert.json` · filename `Bieu08_HeThongATGT_20260918.xls` |
| S-XLS-IMPORT smoke | **PASS** · file input + roundtrip setInputFiles · **0** fail toast |

### Evidence table

| ID | Steps | Expected | Result | Evidence |
|----|-------|----------|--------|----------|
| S0 | Mở alias `/csdl-bieu-08` | List · toolbar Xuất/Nhập · filter-bar · **0** Xuất trên filter | **PASS** | ![S0](screens/S0.png) |
| S1 | Hub `?resource=traffic-safety` | Mount Biểu 08 list (`rmms-csdl-bieu-08-list-page`) | **PASS** | ![S1](screens/S1.png) |
| QA-20 | `?form=create` | Slideout create KEEP · Z2 · shared+1 child · AT- | **PASS** | ![QA-20](screens/QA-20.png) |

`screens/manifest.json` · capturedAt `2026-09-17T22:24:11.656Z` · SHA256_16 S0=`138dfa0deb89fe7c` · S1=`138dfa0deb89fe7c` · QA-20=`d94fdfd692e4c929`.

---

## T-XLS-QA-01

| ID | Steps | Expected | Result |
|----|-------|----------|--------|
| S-XLS-EXPORT | Click `…-export-excel-btn` | Download `Bieu08_HeThongATGT_{yyyyMMdd}.xls` · OOXML · filtered QS | **PASS** (`live-assert.json`) |
| S-XLS-IMPORT | File input `…-import-file` · set exported xls | import_now path · **0** fail toast · skipBridge soft | **PASS** (`import-assert.json`) |
| QA-XLS-TB | Toolbar Xuất + Nhập | catalogToolbar · testids export/import | **PASS** |
| QA-XLS-FB08 | Filter bar | **0** Xuất Excel trên `…-list-filters` | **PASS** (GAP-FILTER-BAR-08) |

---

## T-QA-* KEEP (prior CRUD · smoke)

| Pack | Result |
|------|--------|
| T-QA-CRUD-01 QA-20 create slideout | **PASS** (runtime QA-20) |
| T-QA-FORM-01 Slideout 2col · shared+1 child | **PASS** (live) |
| T-QA-FILTER-01 search/province/status/side/assetType/road/km | **PASS** (testids) |
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
| GAP-QA-E2E-PW-01 | P2 | `yarn e2e-qa` overwrite `_capture.mjs` bare playwright · chrome createRequire fallback · **cấm** kill |
| Auth | DEFER | prior |
| getBlob CD strip | P2 | FE filename fallback = PO lock · verified `Bieu08_HeThongATGT_20260918.xls` |
| BIFF .xls read | N/A | OOXML OK |
| CRUD empty grid | P2 | list empty OK for XLS headers-only export |

---

## Handoff

- compact: `handoff/qa-compact.md`
- next: `/agent-review` · **cấm** `phase=done` từ QA
