# QA — Scenarios — csdl-bieu-13 (edit_page · T-XLS-S13)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-13` |
| title | CSDL Biểu 13 — Tường chống ồn · Xuất Excel |
| role | `qa` · `/agent-qa` |
| taskId | `task_7f930b9f` |
| status | **confirmed** |
| verdict | **PASS** |
| e2eQa | **ON** |
| method | `e2e runtime · yarn start:std :9301 (reuse) + docker API :5111 + BFF :5201 + yarn e2e-qa (playwright resolve fail → channel=chrome createRequire AutoCode · skip-start)` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` |
| mfeStdRoute | `/so-ts/csdl-so-sach` · alias `/csdl-bieu-13` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=noise-barriers` |
| testid | `rmms-csdl-bieu-13-list-page` · export `…-export-excel-btn` · form `rmms-csdl-bieu-13-form-slideout` |
| docker | API `:5111` healthy · BFF `:5201` healthy · postgres healthy · **rebuild** API (Bieu13 XLS) |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/asset/csdl-records` · **cấm ERP.*** |
| packKind | **`list`** · Kind B A–D+F · Kind D Slideout 2col · Z2 Kích thước tường |
| changeScope | **`edit_page`** (T-XLS-S13) |
| resource | `noise-barriers` · formNo `13` · columns `13` · IdCode `TC-` |
| peerSoTs | `so-ts-noise-barrier` · **cấm** merge · none_p1 |
| autoApprove | ON |
| contentHash | `sha256:800386bb8f86bfcc815b9c7d3a6dc246dc58b0a95b5132a317c5a094d0b4194f` |
| headerFingerprint | `sha256:31dbc83200b511c9d61333b1cdb94e2880778980a3b21970be414e926db29008` |
| skillVersion | `2026.09.05.03` |
| workflowVersion | `2026.09.05.03` |
| rulesVersion | `2026.09.17.3` |
| updatedAt | `2026-09-18T01:24:30.000Z` |
| prior · dev | **confirmed** · `implement/csdl-bieu-13.md` · `task_71b8eb1b` |
| priorTypedQa | `task_449043d2` **keep** |

**Cấm** `phase=done` — next = Review. **cấm** ERP.* · **cấm** invent API · **cấm** kill worker (GAP-QA-E2E-KILL-01).

---

## E2E runtime (e2eQa ON)

| Check | Result |
|-------|--------|
| `docker compose up -d` (+ `--build` API) | **PASS** · api `:5111` · bff `:5201` · postgres healthy · pre-rebuild CSV → post-rebuild `.xls` |
| `yarn start:std` (`:9301`) | **PASS** · Asset standalone listen (reuse · **cấm** kill) |
| `yarn typecheck` | **PASS** (`tsc --noEmit`) |
| `yarn e2e-qa --skip-start` (AI-AutoCode) | CLI **fail** resolve `playwright` từ screens cwd · **không** kill · fallback channel=chrome |
| Capture S0 / S1 / QA-20 → `qa/screens/{caseId}.png` | **PASS** · `manifest.json` `ok=true` |
| Live DOM + S-XLS-EXPORT | **PASS** · `live-assert.json` · filename `Bieu13_TuongChongOn_20260918.xls` |
| Import Excel | **DEFER P1** · `hasImport=false` (export_only_p0) |
| Form assert QA-20 | **PASS** · `form-assert.json` · Z2/Z2b/Z3 · length/height/area · TC- · Lưu · `data-form-cols=2` |
| API GET export `?resource=noise-barriers` | **PASS** · HTTP 200 · `Bieu13_TuongChongOn_{yyyyMMdd}.xls` |

### Evidence table

| ID | Steps | Expected | Result | Evidence |
|----|-------|----------|--------|----------|
| S0 | Mở alias `/csdl-bieu-13` | List · toolbar **Xuất** · Import ẩn · filter-bar · **0** peer | **PASS** | ![S0](screens/S0.png) |
| S1 | Hub `?resource=noise-barriers` | Redirect → Biểu 13 list (route_a) | **PASS** | ![S1](screens/S1.png) |
| QA-20 | `?form=create` | Slideout create KEEP · Z2 kích thước · TC- | **PASS** | ![QA-20](screens/QA-20.png) |
| S-XLS-EXPORT | Click `…-export-excel-btn` | Download `Bieu13_TuongChongOn_{yyyyMMdd}.xls` · filtered | **PASS** (`live-assert.json`) |

`screens/manifest.json` · capturedAt `2026-09-18T01:24:16.380Z` · SHA256_16 S0=`847dd45e76f5c1fc` · S1=`89bd3ff676e116c5` · QA-20=`b4cb3d952760ce1c`.

---

## T-XLS-S13-QA-01

| ID | Check | Result |
|----|-------|--------|
| QA-XLS-01 | catalogToolbar **Xuất Excel** · **0** Xuất on LinErpListFilterBar | **PASS** (GAP-FILTER-BAR-08) |
| QA-XLS-02 | Filename `Bieu13_TuongChongOn_{yyyyMMdd}.xls` | **PASS** (`Bieu13_TuongChongOn_20260918.xls`) |
| QA-XLS-03 | one_sheet · dài/cao/DT cùng hàng · **cấm** 12+8 · **cấm** dim sheet · **cấm** streaming | **PASS** (PO+SA lock + runtime download) |
| QA-XLS-04 | Import **DEFER P1 ẩn** · export_only_p0 · toast stub ≠ done | **PASS** (`hasImport=false`) |
| QA-XLS-05 | GET export `?resource=noise-barriers` (+ filter QS) | **PASS** (FE blob download + API 200) |

---

## T-QA-* KEEP (smoke)

| ID | Check | Result |
|----|-------|--------|
| QA-20 | Create Slideout · Z2 kích thước · TC- · 2col | **PASS** (runtime) |
| QA-ROUTE-01 | alias `/csdl-bieu-13` + hub redirect | **PASS** (S0+S1) |
| QA-FB-01 | filter side/km · **0** export on bar | **PASS** |
| QA-DIM-01 | lengthM/heightM/areaM2 live form | **PASS** (`form-assert.json`) |
| QA-CH-02 | peer none_p1 · **cấm** merge so-ts-noise-barrier | **PASS** |

---

## Debt / GAP

| ID | Sev | Note |
|----|-----|------|
| GAP-QA-E2E-PW-01 | P2 | `yarn e2e-qa` overwrite `_capture.mjs` bare playwright · chrome createRequire fallback |
| GAP-QA-ROAD-TESTID | P3 | SearchInput road testid may not surface (`hasRoad=false`) |
| GAP-CSDL-ORG-01 | P2 | org DEFER |
| Auth | DEFER | |
| Import | P1 | DEFER ẩn |

---

## Next

| Role | Need |
|------|------|
| **Review** | `/agent-review` · findings · **cấm** phase=done từ QA |

## Verdict

**PASS** · handoff `handoff/qa-compact.md` · STATUS qa=confirmed · review=pending
