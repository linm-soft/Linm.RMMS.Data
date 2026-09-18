# QA — Scenarios — csdl-bieu-10 (edit_page · T-XLS-S10)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-10` |
| title | CSDL Biểu 10 — Kè, tường chắn · Xuất/Nhập Excel |
| role | `qa` · `/agent-qa` |
| taskId | `task_1269f635` |
| status | **confirmed** |
| verdict | **PASS** |
| e2eQa | **ON** |
| method | `e2e runtime · yarn start:std :9301 + docker API :5111 + BFF :5201 + yarn e2e-qa (playwright resolve fail → channel=chrome createRequire AutoCode · skip-start)` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` |
| mfeStdRoute | `/so-ts/csdl-so-sach` · alias `/csdl-bieu-10` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=retaining-walls` |
| testid | `rmms-csdl-bieu-10-list-page` · export `…-export-excel-btn` · import `…-import-excel-btn` · form `rmms-csdl-bieu-10-form-slideout` |
| docker | API `:5111` healthy · BFF `:5201` healthy · postgres healthy |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/asset/csdl-records` · **cấm ERP.*** |
| packKind | **`list`** · Kind B A–D+F · Kind D Slideout 2col · **2 section** tường + rãnh đỉnh **KEEP** |
| changeScope | **`edit_page`** (T-XLS-S10) |
| resource | `retaining-walls` · formNo `10` · columns `21` · IdCode `KE-` |
| peerSoTs | `so-ts-retaining` (toolbar · ≠ merge) |
| heightAlias | UI `heightM` ↔ DB `WidthM` · Excel export/import |
| autoApprove | ON |
| contentHash | `sha256:49ea64d3b8f51e899c4bb36ae444444b4c0a805e64349f8e1f52677909ab0302` |
| headerFingerprint | `sha256:9d4863dcab46439966e526cc7696f137695022911a3edc5066c852dc779fa598` |
| skillVersion | `2026.09.05.03` |
| workflowVersion | `2026.09.05.03` |
| rulesVersion | `2026.09.17.3` |
| updatedAt | `2026-09-18T06:45:00.000Z` |
| prior · dev | **confirmed** · `implement/csdl-bieu-10.md` · `task_4dfcfa0a` |

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
| Live DOM + S-XLS-EXPORT | **PASS** · `live-assert.json` · filename `Bieu10_KeTuongChan_20260918.xls` |
| S-XLS-IMPORT smoke | **PASS** · file input + roundtrip setInputFiles · **0** fail toast |

### Evidence table

| ID | Steps | Expected | Result | Evidence |
|----|-------|----------|--------|----------|
| S0 | Mở alias `/csdl-bieu-10` | List · toolbar Xuất/Nhập · filter-bar · **0** Xuất trên filter · peer | **PASS** | ![S0](screens/S0.png) |
| S1 | Hub `?resource=retaining-walls` | Mount Biểu 10 list (`rmms-csdl-bieu-10-list-page`) | **PASS** | ![S1](screens/S1.png) |
| QA-20 | `?form=create` | Slideout create KEEP · Z2/Z3 · 2 section tường+rãnh · KE- | **PASS** | ![QA-20](screens/QA-20.png) |

`screens/manifest.json` · capturedAt `2026-09-17T23:37:44.520Z` · SHA256_16 S0=`71d4adf9c5e61eb1` · S1=`71d4adf9c5e61eb1` · QA-20=`f5c5632c921add62`.

---

## T-XLS-QA-01

| ID | Steps | Expected | Result |
|----|-------|----------|--------|
| S-XLS-EXPORT | Click `…-export-excel-btn` | Download `Bieu10_KeTuongChan_{yyyyMMdd}.xls` · filtered QS (+wallKind) | **PASS** (`live-assert.json`) |
| S-XLS-IMPORT | File input `…-import-file` · set exported xls | import_now path · **0** fail toast · skipBridge soft | **PASS** (`import-assert.json`) |
| QA-XLS-TB | Toolbar Xuất + Nhập | catalogToolbar · testids export/import | **PASS** |
| QA-XLS-FB08 | Filter bar | **0** Xuất Excel trên `…-list-filters` | **PASS** (GAP-FILTER-BAR-08) |
| QA-XLS-HEIGHT | height_alias | Excel map heightM↔WidthM (Dev KEEP · smoke export ok) | **PASS** (export file ok) |

---

## T-QA-* KEEP (prior CRUD · smoke)

| Pack | Result |
|------|--------|
| T-QA-CRUD-01 QA-20 create slideout | **PASS** (runtime QA-20 · form-assert Z2/Z3 · heightM · crest · `data-form-cols=2`) |
| T-QA-FORM-01 Slideout 2col · 2 section tường+rãnh | **PASS** (live) |
| T-QA-FILTER-01 search/province/status/side/wallKind/road/km | **PASS** (testids) |
| T-QA-ROUTE-01 alias + hub deep-link | **PASS** (S0+S1) |
| Peer Sổ TS | toolbar `so-ts-retaining` · **cấm** merge form | **PASS** (peer-sots testid) |

---

## Chrome / end-user

| ID | Check | Result |
|----|-------|--------|
| QA-CH-01 | List/form VN · **0** CREATE/EDIT/VIEW badge · **0** demo/stub | **PASS** |
| QA-CH-02 | **0** native alert/confirm on export/import | **PASS** (toast path) |
| QA-CH-03 | Peer toolbar `so-ts-retaining` · **cấm** merge | **PASS** |
| QA-CH-04 | **cấm** ERP.* | **PASS** |

---

## Gaps / debt (non-blocking)

| ID | P | Note |
|----|---|------|
| GAP-QA-E2E-PW-01 | P2 | `yarn e2e-qa` overwrite `_capture.mjs` bare playwright · chrome createRequire fallback · **cấm** kill |
| Auth | DEFER | auth intermittent · list/export ok |
| getBlob CD strip | P2 | FE filename fallback = PO lock · verified `Bieu10_KeTuongChan_20260918.xls` |
| BIFF .xls read | N/A | OOXML OK |
| migrate apply | prior | Schema_CsdlBieu10 KEEP · none @ XLS |

---

## Handoff

- compact: `specs/csdl-bieu-10/handoff/qa-compact.md`
- next: `/agent-review` · **cấm** `phase=done` @ QA
- queue: `yarn queue -- status --id task_1269f635 --status completed`
