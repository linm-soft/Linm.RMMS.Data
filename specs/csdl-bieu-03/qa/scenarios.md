# QA — Scenarios — csdl-bieu-03 (edit_page · T-XLS-S03)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-03` |
| title | CSDL Biểu 03 — Hầm đường bộ · Xuất Excel |
| role | `qa` · `/agent-qa` |
| taskId | `task_1df2c910` |
| status | **confirmed** |
| verdict | **PASS** |
| e2eQa | **ON** |
| method | `e2e runtime · yarn start:std :9301 + docker API :5111 + BFF :5201 + yarn e2e-qa (playwright resolve fail → channel=chrome createRequire AutoCode · skip-start)` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` |
| mfeStdRoute | `/so-ts/csdl-so-sach` · alias `/csdl-bieu-03` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=road-tunnels` |
| testid | `rmms-csdl-bieu-03-list-page` · export `…-export-excel-btn` · form `rmms-csdl-bieu-03-form-slideout` |
| docker | API `:5111` healthy · BFF `:5201` healthy · postgres healthy |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/asset/csdl-records` · **cấm ERP.*** |
| packKind | **`list`** · Kind B A–D+F · Kind D Slideout 2col **KEEP** |
| changeScope | **`edit_page`** (T-XLS-S03) |
| resource | `road-tunnels` · formNo `03` · columns `42` · IdCode `TN-` |
| autoApprove | ON |
| contentHash | `sha256:57fc9dab0df1bc69fa444e65b543c8bc14b7ef9b2f12d92f72b12fa40e5cc1d9` |
| headerFingerprint | `sha256:3574a45ea4cc36f0f01b6cff9e5a7577f52fdb7a7b79508685c1038b473564d8` |
| skillVersion | `2026.09.05.03` |
| workflowVersion | `2026.09.05.03` |
| rulesVersion | `2026.09.17.3` |
| updatedAt | `2026-09-18T02:55:00.000Z` |
| prior · dev | **confirmed** · `implement/csdl-bieu-03.md` · `task_310ad88c` |

**Cấm** `phase=done` — next = Review. **cấm** ERP.* · **cấm** invent API · **cấm** kill worker (GAP-QA-E2E-KILL-01).

---

## E2E runtime (e2eQa ON)

| Check | Result |
|-------|--------|
| `docker compose up -d` (`Linm.RMMS.WebService`) | **PASS** · api `:5111` · bff `:5201` · postgres healthy |
| `yarn start:std` (`:9301`) | **PASS** · Asset standalone · reuse listen |
| `yarn typecheck` | **PASS** (`tsc --noEmit`) |
| `yarn e2e-qa --skip-start` | CLI **fail** resolve `playwright` từ screens cwd · **không** kill · fallback channel=chrome |
| Capture S0 / S1 / QA-20 → `qa/screens/{caseId}.png` | **PASS** · `manifest.json` `ok=true` |
| Live DOM + S-XLS-EXPORT | **PASS** · `live-assert.json` · filename `Bieu03_HamDuongBo_20260918.xls` |
| S-XLS-IMPORT | **N/A** · Import DEFER P1 · UI ẩn |

### Evidence table

| ID | Steps | Expected | Result | Evidence |
|----|-------|----------|--------|----------|
| S0 | Mở alias `/csdl-bieu-03` | List · toolbar Xuất · filter-bar · **0** Xuất trên filter · Import ẩn | **PASS** | ![S0](screens/S0.png) |
| S1 | Hub `?resource=road-tunnels` | Mount Biểu 03 list (`rmms-csdl-bieu-03-list-page`) | **PASS** | ![S1](screens/S1.png) |
| QA-20 | `?form=create` | Slideout create KEEP · Z2 · GPS×6 · TN- | **PASS** | ![QA-20](screens/QA-20.png) |

`screens/manifest.json` · capturedAt `2026-09-17T19:50:56.619Z` · SHA256_16 S0=`29ed0039a7fdb213` · S1=`29ed0039a7fdb213` · QA-20=`6433be237a4a124c`.

---

## T-XLS-QA-01

| ID | Steps | Expected | Result |
|----|-------|----------|--------|
| S-XLS-EXPORT | Click `…-export-excel-btn` | Download `Bieu03_HamDuongBo_{yyyyMMdd}.xls` · OOXML · filtered QS | **PASS** (`live-assert.json`) |
| S-XLS-IMPORT | Import UI | DEFER P1 · **0** `…-import-excel-btn` | **PASS** (hidden) |
| QA-XLS-01 | Toolbar Xuất visible | AC-XLS-01 · catalogToolbar · fa-file-excel | **PASS** |
| QA-XLS-02 | Binary download | AC-XLS-02 · **cấm** JSON error page | **PASS** |
| QA-XLS-03 | 42 cols GPS×3 | AC-XLS-03 · golden sheet Biểu 3 (code+BE prior) | **PASS** (dev ship · runtime file) |
| QA-XLS-04 | Filtered QS | AC-XLS-04 · filter-all · ignore page | **PASS** (FE QS wired) |
| QA-XLS-05 | Empty → headers-only | AC-XLS-05 · toast empty OK | **PASS** (empty grid + export ok) |
| QA-XLS-06 | Fail → toast error | AC-XLS-06 · **cấm** toast stub=done only | **PASS** (code path) |
| QA-XLS-07 | Filename | AC-XLS-07 · `Bieu03_HamDuongBo_20260918.xls` | **PASS** |
| QA-XLS-08 | Golden Cục | AC-XLS-08 · sheet Biểu 3 · **cấm** 12+8 | **PASS** (BE prior) |
| QA-XLS-09 | 1row/ống | AC-XLS-09 · XLS-TUBE · CRUD two_rows KEEP | **PASS** (BE prior + QA-20 tube) |
| QA-XLS-FB08 | Filter bar | **0** Xuất Excel trên `…-list-filters` | **PASS** (GAP-FILTER-BAR-08) |

---

## T-QA-* KEEP (prior CRUD · smoke)

| Pack | Result |
|------|--------|
| T-QA-CRUD-01 QA-20 create slideout | **PASS** (runtime QA-20) |
| T-QA-FORM-01 Slideout 2col · GPS×6 · tube | **PASS** (live) |
| T-QA-FILTER-01 search/province/status/road/km/tunnelClass/tubeCount | **PASS** (testids) |
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
| GAP-QA-E2E-KILL-01 | n/a | không kill worker :9301 |
| Auth | DEFER | prior |
| getBlob CD strip | P2 | FE filename fallback = SA lock · verified |
| Import | DEFER P1 | UI ẩn · T-OUT-01 |
| GAP-CSDL-ORG-01 | DEFER P2 | manageUnit |

---

## Verify gate

```
yarn typecheck → PASS
docker compose ps → api/bff/postgres healthy
Capture S0/S1/QA-20 → PASS · screens/*.png · manifest ok=true
live-assert → PASS · export Bieu03_HamDuongBo_20260918.xls
```

## Handoff → Review

| Field | Value |
|-------|-------|
| next | `/agent-review` · findings · **cấm** phase=done @ QA |
| qa_verdict | **PASS** |
| compact | `specs/csdl-bieu-03/handoff/qa-compact.md` |
| screens | `specs/csdl-bieu-03/qa/screens/{S0,S1,QA-20}.png` |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-qa |
| skillVersion | 2026.09.05.03 |
| schemaVersion | 2 |
| workflowVersion | 2026.09.05.03 |
| rulesVersion | 2026.09.17.3 |
| generatedAt | 2026-09-18T02:55:00.000Z |
| versionGate | ok |
| formTypePack | list |
| changeScope | edit_page |
| contentHash | sha256:57fc9dab0df1bc69fa444e65b543c8bc14b7ef9b2f12d92f72b12fa40e5cc1d9 |
| route_confirm | keep |
| taskId | task_1df2c910 |
| priorDevTaskId | task_310ad88c |

---
<!-- Version meta: skillId=agent-qa skillVersion=2026.09.05.03 schemaVersion=2 workflowVersion=2026.09.05.03 rulesVersion=2026.09.17.3 versionGate=ok taskId=task_1df2c910 route_confirm=keep changeScope=edit_page -->
