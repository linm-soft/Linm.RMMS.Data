# QA — Scenarios — csdl-bieu-12 (edit_page · T-XLS-S12)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-12` |
| title | CSDL Biểu 12 — Cây xanh, thảm cỏ · Xuất Excel |
| role | `qa` · `/agent-qa` |
| taskId | `task_96b70a9a` |
| status | **confirmed** |
| verdict | **PASS** |
| e2eQa | **ON** |
| method | `e2e runtime · yarn start:std :9301 (reuse) + docker API :5111 + BFF :5201 + yarn e2e-qa (playwright resolve fail → channel=chrome createRequire AutoCode · skip-start)` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` |
| mfeStdRoute | `/so-ts/csdl-so-sach` · alias `/csdl-bieu-12` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=green-assets` |
| testid | `rmms-csdl-bieu-12-list-page` · export `…-export-excel-btn` · form `rmms-csdl-bieu-12-form-slideout` |
| docker | API `:5111` healthy · BFF `:5201` healthy · postgres healthy |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/asset/csdl-records` · **cấm ERP.*** |
| packKind | **`list`** · Kind B A–D+F · Kind D Slideout 2col · **2 section** khóm + thảm cỏ **KEEP** |
| changeScope | **`edit_page`** (T-XLS-S12) |
| resource | `green-assets` · formNo `12` · columns `15` · IdCode `CX-` |
| peerSoTs | — (**cấm** invent so-ts-green) |
| autoApprove | ON |
| contentHash | `sha256:f42502cee520105fb0a7f618c17b8b0f582884d7f779f638ec7310c26346e77a` |
| headerFingerprint | `sha256:b6a541f8adc60a5badc72fc92c606631e5a1457fc119b9a6a546eb1f0acc437a` |
| skillVersion | `2026.09.05.03` |
| workflowVersion | `2026.09.05.03` |
| rulesVersion | `2026.09.17.3` |
| updatedAt | `2026-09-18T00:47:30.000Z` |
| prior · dev | **confirmed** · `implement/csdl-bieu-12.md` · `task_051369c1` |

**Cấm** `phase=done` — next = Review. **cấm** ERP.* · **cấm** invent API · **cấm** kill worker (GAP-QA-E2E-KILL-01).

---

## E2E runtime (e2eQa ON)

| Check | Result |
|-------|--------|
| `docker compose up -d` (`Linm.RMMS.WebService`) | **PASS** · api `:5111` · bff `:5201` · postgres healthy |
| `yarn start:std` (`:9301`) | **PASS** · Asset standalone listen (reuse · **cấm** kill) |
| `yarn e2e-qa --skip-start` (AI-AutoCode) | CLI **fail** resolve `playwright` từ screens cwd · **không** kill · fallback channel=chrome |
| Capture S0 / S1 / QA-20 → `qa/screens/{caseId}.png` | **PASS** · `manifest.json` `ok=true` |
| Live DOM + S-XLS-EXPORT | **PASS** · `live-assert.json` · filename `Bieu12_CayXanh_20260918.xls` |
| Import Excel | **DEFER P1** · `hasImport=false` (export_only_p0) |
| Form assert QA-20 | **PASS** · `form-assert.json` · Z2/Z2b/Z3 · clumps · grass · CX- · Lưu · `data-form-cols=2` |

### Evidence table

| ID | Steps | Expected | Result | Evidence |
|----|-------|----------|--------|----------|
| S0 | Mở alias `/csdl-bieu-12` | List · toolbar **Xuất** · Import ẩn · filter-bar · **0** peer | **PASS** | ![S0](screens/S0.png) |
| S1 | Hub `?resource=green-assets` | Redirect → Biểu 12 list (route_a) | **PASS** | ![S1](screens/S1.png) |
| QA-20 | `?form=create` | Slideout create KEEP · khóm+thảm cỏ · CX- | **PASS** | ![QA-20](screens/QA-20.png) |
| S-XLS-EXPORT | Click `…-export-excel-btn` | Download `Bieu12_CayXanh_{yyyyMMdd}.xls` · filtered | **PASS** (`live-assert.json`) |

`screens/manifest.json` · capturedAt `2026-09-18T00:47:21.684Z` · SHA256_16 S0=`18767d8e8e7ee899` · S1=`88f10ceeaf59cdd7` · QA-20=`692baca13e55ae1d`.

---

## T-XLS-S12-QA-01

| ID | Check | Result |
|----|-------|--------|
| QA-XLS-01 | catalogToolbar **Xuất Excel** · **0** Xuất on LinErpListFilterBar | **PASS** (GAP-FILTER-BAR-08) |
| QA-XLS-02 | Filename `Bieu12_CayXanh_{yyyyMMdd}.xls` | **PASS** (`Bieu12_CayXanh_20260918.xls`) |
| QA-XLS-03 | one_sheet · khóm+cỏ cùng hàng · **cấm** 12+8 · **cấm** 2-sheet · **cấm** streaming | **PASS** (PO+SA lock + runtime download) |
| QA-XLS-04 | Import **DEFER P1 ẩn** · export_only_p0 · toast stub ≠ done | **PASS** (`hasImport=false`) |
| QA-XLS-05 | GET export `?resource=green-assets` (+ filter QS) | **PASS** (FE blob download) |

---

## T-QA-* KEEP (smoke)

| ID | Check | Result |
|----|-------|--------|
| QA-20 | Create Slideout · 2 section · CX- | **PASS** (runtime) |
| QA-ROUTE-01 | alias `/csdl-bieu-12` + hub redirect | **PASS** (S0+S1) |
| QA-FB-01 | filter side/km · **0** export on bar | **PASS** |
| QA-CH-01 | VN · **0** CREATE/EDIT/VIEW badge · **0** demo/stub | **PASS** |
| QA-CH-02 | Peer **none** · **cấm** invent so-ts-green | **PASS** |
| QA-CLUMP-01 / QA-GRASS-01 | clumps ≥0 · grass Z2b | **PASS** (form-assert) |

---

## Gaps

| ID | Severity | Note |
|----|----------|------|
| GAP-QA-E2E-PW-01 | P2 | `yarn e2e-qa` overwrite `_capture.mjs` bare playwright · chrome createRequire fallback · **cấm** kill |
| GAP-QA-ROAD-TESTID | P3 | SearchInput may not forward `data-testid` (`hasRoad=false`; code uses SearchInput) |
| Import Excel | DEFER P1 | export_only_p0 |
| Auth wire | DEFER | — |

## Next

| Role | Need |
|------|------|
| **Review** | `/agent-review` · findings · **cấm** phase=done từ QA |
