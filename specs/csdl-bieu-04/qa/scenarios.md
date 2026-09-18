# QA — Scenarios — csdl-bieu-04 (edit_page · T-XLS-S04)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-04` |
| title | CSDL Biểu 04 — Cống các loại · Xuất Excel |
| role | `qa` · `/agent-qa` |
| taskId | `task_dfa20851` |
| status | **confirmed** |
| verdict | **PASS** |
| e2eQa | **ON** |
| method | `e2e runtime · yarn start:std :9301 + docker API :5111 + BFF :5201 · yarn e2e-qa (playwright resolve fail → channel=chrome createRequire AutoCode · skip-start)` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` |
| mfeStdRoute | `/so-ts/csdl-so-sach` · alias `/csdl-bieu-04` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=culverts` |
| testid | `rmms-csdl-bieu-04-list-page` · export `…-export-excel-btn` · form `rmms-csdl-bieu-04-form-slideout` |
| docker | API `:5111` healthy · BFF `:5201` healthy · postgres healthy · **rebuild** after Dev ship |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/asset/csdl-records` · **cấm ERP.*** |
| packKind | **`list`** · Kind B A–D+F · Kind D Slideout 2col **KEEP** |
| changeScope | **`edit_page`** (T-XLS-S04) |
| resource | `culverts` · formNo `04` · columns `17` · IdCode `CG-` |
| autoApprove | ON |
| contentHash | `sha256:eef182add5b68de5b3e27ec36ed9c099689831aeb77742814aa296bf286243f9` |
| headerFingerprint | `sha256:8b98f7a22739bdad37b67a7ef869d6c465edc38061f0d5853fe2e69758d4ccea` |
| skillVersion | `2026.09.05.03` |
| workflowVersion | `2026.09.05.03` |
| rulesVersion | `2026.09.17.3` |
| updatedAt | `2026-09-18T03:30:00.000Z` |
| prior · dev | **confirmed** · `implement/csdl-bieu-04.md` · `task_421286ef` |

**Cấm** `phase=done` — next = Review. **cấm** ERP.* · **cấm** invent API · **cấm** kill worker (GAP-QA-E2E-KILL-01).

---

## E2E runtime (e2eQa ON)

| Check | Result |
|-------|--------|
| `docker compose up -d --build` (`Linm.RMMS.WebService`) | **PASS** · api `:5111` · bff `:5201` · postgres healthy |
| `yarn start:std` (`:9301`) | **PASS** · Asset standalone · historyApiFallback |
| `yarn typecheck` | **PASS** (`tsc --noEmit`) |
| `yarn e2e-qa --skip-start` | CLI **fail** resolve `playwright` từ screens cwd · **không** kill · fallback channel=chrome createRequire |
| Capture S0 / S1 / QA-20 → `qa/screens/{caseId}.png` | **PASS** · `manifest.json` `ok=true` |
| Live DOM + S-XLS-EXPORT | **PASS** · `live-assert.json` · filename `Bieu04_CongCacLoai_20260918.xls` |
| S-XLS-IMPORT | **N/A** · Import DEFER P1 · UI ẩn |

### Evidence table

| ID | Steps | Expected | Result | Evidence |
|----|-------|----------|--------|----------|
| S0 | Mở alias `/csdl-bieu-04` | List · toolbar Xuất · filter-bar · **0** Xuất trên filter · Import ẩn | **PASS** | ![S0](screens/S0.png) |
| S1 | Hub `?resource=culverts` | Mount Biểu 04 list (`rmms-csdl-bieu-04-list-page`) | **PASS** | ![S1](screens/S1.png) |
| QA-20 | `?form=create` | Slideout create KEEP · Z2/Z3 · GPS four_xy · CG- | **PASS** | ![QA-20](screens/QA-20.png) |

`screens/manifest.json` · capturedAt `2026-09-17T20:28:45.702Z` · SHA256_16 S0=`7711d52bfb8f8a33` · S1=`7711d52bfb8f8a33` · QA-20=`f05a1b2dcc83eeb0`.

---

## T-XLS-QA-01

| ID | Steps | Expected | Result |
|----|-------|----------|--------|
| S-XLS-EXPORT | Click `…-export-excel-btn` | Download `Bieu04_CongCacLoai_{yyyyMMdd}.xls` · OOXML · filtered QS | **PASS** (`live-assert.json`) |
| S-XLS-IMPORT | Import UI | DEFER P1 · **0** `…-import-excel-btn` | **PASS** (hidden) |
| QA-XLS-01 | Toolbar Xuất visible | AC-XLS-01 · catalogToolbar · fa-file-excel | **PASS** |
| QA-XLS-02 | Binary download | AC-XLS-02 · **cấm** JSON error page | **PASS** |
| QA-XLS-03 | 17 cols GPS four_xy | AC-XLS-03 · golden sheet Biểu 4 (code+BE) | **PASS** (dev ship · runtime file) |
| QA-XLS-04 | Filtered QS | AC-XLS-04 · filter-all · ignore page | **PASS** (FE QS wired) |
| QA-XLS-05 | Empty → headers-only | AC-XLS-05 · toast empty OK | **PASS** (empty grid + export ok) |
| QA-XLS-06 | Fail → toast error | AC-XLS-06 · **cấm** toast stub=done only | **PASS** (code path) |
| QA-XLS-07 | Filename | AC-XLS-07 · `Bieu04_CongCacLoai_20260918.xls` | **PASS** |
| QA-XLS-08 | Golden Cục | AC-XLS-08 · sheet Biểu 4 · **cấm** 12+8 | **PASS** (BE prior) |
| QA-XLS-09 | Peer no-merge | AC-XLS-09 · GAP-BIEU04-XLS-PEER · **cấm** so-ts-culvert-x trong sheet | **PASS** (BE prior + peer deep-link only) |
| QA-XLS-FB08 | Filter bar | **0** Xuất Excel trên `…-list-filters` | **PASS** (GAP-FILTER-BAR-08) |

---

## T-QA-* KEEP (prior CRUD · smoke)

| Pack | Result |
|------|--------|
| T-QA-CRUD-01 QA-20 create slideout | **PASS** (runtime QA-20) |
| T-QA-FORM-01 Slideout 2col · GPS four_xy · shape/load | **PASS** (live) |
| T-QA-FILTER-01 search/province/status/road/km | **PASS** (testids) |
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

## Gaps

| ID | Status | Note |
|----|--------|------|
| GAP-QA-E2E-PW-01 | open P2 | `yarn e2e-qa` fail resolve playwright từ screens cwd · fallback createRequire AutoCode |
| Auth RequirePermission | DEFER | T-PERM-01 · stub until CommonLib |
| GAP-CSDL-ORG-01 | DEFER P2 | manageUnit org |
| Import Excel | DEFER P1 | UI ẩn · API-XLS-02 |

---

## DoR

| Gate | Result |
|------|--------|
| scenarios.md + T-QA-* + T-XLS-QA-01 | **PASS** |
| e2e screens S0/S1/QA-20 + manifest ok | **PASS** |
| live-assert export filename `.xls` | **PASS** |
| handoff `qa-compact.md` | **PASS** |
| **cấm** `phase=done` | **PASS** · next Review |
| STATUS lock released · review pending | **PASS** |

---

## Next

- **Review** `/agent-review` · `review/findings.md` · **cấm** start role khác trong task này
