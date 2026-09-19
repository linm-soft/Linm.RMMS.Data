# QA — Scenarios — csdl-bieu-11 (edit_page · T-XLS-S11)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-11` |
| title | CSDL Biểu 11 — Hệ thống chiếu sáng · Xuất/Nhập Excel |
| role | `qa` · `/agent-qa` |
| taskId | `task_735d8dfc` |
| status | **confirmed** |
| verdict | **PASS** |
| e2eQa | **ON** |
| method | `e2e runtime · yarn start:std :9301 (reuse) + docker API :5111 + BFF :5201 + yarn e2e-qa (playwright resolve fail → channel=chrome createRequire AutoCode · skip-start)` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` |
| mfeStdRoute | `/so-ts/csdl-so-sach` · alias `/csdl-bieu-11` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=lighting-systems` |
| testid | `rmms-csdl-bieu-11-list-page` · export `…-export-excel-btn` · import `…-import-excel-btn` · form `rmms-csdl-bieu-11-form-slideout` |
| docker | API `:5111` healthy · BFF `:5201` healthy · postgres healthy |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/asset/csdl-records` · **cấm ERP.*** |
| packKind | **`list`** · Kind B A–D+F · Kind D Slideout 2col · **2 section** lưới + NLMT **KEEP** |
| changeScope | **`edit_page`** (T-XLS-S11) |
| resource | `lighting-systems` · formNo `11` · columns `24` · IdCode `LT-` |
| peerSoTs | `so-ts-lighting` (toolbar · ≠ merge) |
| autoApprove | ON |
| contentHash | `sha256:7f64b8dcea4265af23b9f2e5e1dae3ab1c933b0a4404b0f872d39029716b4d62` |
| headerFingerprint | `sha256:b37759a9224c09c7c63bc81583b4a9bcbca02e74cba8b63579819e90d57f1d1a` |
| skillVersion | `2026.09.05.03` |
| workflowVersion | `2026.09.05.03` |
| rulesVersion | `2026.09.17.3` |
| updatedAt | `2026-09-18T07:20:00.000Z` |
| prior · dev | **confirmed** · `implement/csdl-bieu-11.md` · `task_e7125d74` |

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
| Live DOM + S-XLS-EXPORT | **PASS** · `live-assert.json` · filename `Bieu11_ChieuSang_20260918.xls` |
| S-XLS-IMPORT | **PASS** · `import-assert.json` · import_now path · toastOk |
| Form assert QA-20 | **PASS** · `form-assert.json` · Z2/Z2b/Z3 · LED · solar · LT- · Lưu · `data-form-cols=2` |

### Evidence table

| ID | Steps | Expected | Result | Evidence |
|----|-------|----------|--------|----------|
| S0 | Mở alias `/csdl-bieu-11` | List · toolbar Xuất/Nhập · filter-bar · peer | **PASS** | ![S0](screens/S0.png) |
| S1 | Hub `?resource=lighting-systems` | Redirect → Biểu 11 list (route_a) | **PASS** | ![S1](screens/S1.png) |
| QA-20 | `?form=create` | Slideout create KEEP · lưới+NLMT · LT- | **PASS** | ![QA-20](screens/QA-20.png) |
| S-XLS-EXPORT | Click `…-export-excel-btn` | Download `Bieu11_ChieuSang_{yyyyMMdd}.xls` · filtered QS (+gridStatus/side) | **PASS** (`live-assert.json`) |
| S-XLS-IMPORT | File input `…-import-file` · set exported xls | import_now · **0** fail toast | **PASS** (`import-assert.json`) |

`screens/manifest.json` · capturedAt `2026-09-18T00:13:08.528Z` · SHA256_16 S0=`eb9095e8f2a9561a` · S1=`eb9095e8f2a9561a` · QA-20=`36c894b5eb9d6271`.

---

## T-XLS-QA-01

| ID | Check | Result |
|----|-------|--------|
| QA-XLS-01 | catalogToolbar Xuất/Nhập · **0** Xuất on LinErpListFilterBar | **PASS** (GAP-FILTER-BAR-08) |
| QA-XLS-02 | Filename `Bieu11_ChieuSang_{yyyyMMdd}.xls` | **PASS** (FE fallback) |
| QA-XLS-03 | one_sheet · LED+NLMT cùng hàng · **cấm** 12+8 · **cấm** 2-sheet | **PASS** (code + PO lock) |
| QA-XLS-04 | import_now · hidden `…-import-file` | **PASS** |

---

## T-QA-* KEEP (smoke)

| ID | Check | Result |
|----|-------|--------|
| QA-20 | Create Slideout | **PASS** (runtime) |
| QA-ROUTE-01 | alias + hub redirect | **PASS** (S0+S1) |
| QA-FB-01 | filter side/gridStatus/km | **PASS** |
| QA-CH-01 | VN · **0** CREATE/EDIT/VIEW badge | **PASS** |
| QA-CH-02 | Peer `so-ts-lighting` | **PASS** |

---

## Gaps

| ID | Severity | Note |
|----|----------|------|
| GAP-QA-E2E-PW-01 | P2 | `yarn e2e-qa` overwrite `_capture.mjs` bare playwright · chrome createRequire fallback · **cấm** kill |
| getBlob CD strip | P2 | FE filename fallback = PO lock · verified `Bieu11_ChieuSang_20260918.xls` · docker runtime may still emit CSV CD (redeploy debt) |
| Debt | P2 | Auth DEFER · migrate apply prior |

## Next

| Role | Need |
|------|------|
| **Review** | `/agent-review` · findings · **cấm** phase=done từ QA |
