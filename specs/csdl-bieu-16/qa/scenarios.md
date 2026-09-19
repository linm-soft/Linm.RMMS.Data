# QA — Scenarios — csdl-bieu-16 (edit_page · T-XLS-S16)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-16` |
| title | CSDL Biểu 16 — Nút giao · Xuất Excel |
| role | `qa` · `/agent-qa` |
| taskId | `task_3b290f2f` |
| status | **confirmed** |
| verdict | **PASS** |
| e2eQa | **ON** |
| method | `e2e runtime · yarn start:std :9301 (reuse) + docker API :5111 + BFF :5201 + yarn e2e-qa (playwright resolve fail → channel=chrome createRequire AutoCode · skip-start)` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` |
| mfeStdRoute | `/so-ts/csdl-so-sach` · alias `/csdl-bieu-16` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=interchanges` |
| testid | `rmms-csdl-bieu-16-list-page` · export `…-export-excel-btn` · form `rmms-csdl-bieu-16-form-slideout` |
| docker | API `:5111` healthy · BFF `:5201` healthy · postgres healthy · **rebuild** API (Bieu16 XLS) · BFF recreate |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/asset/csdl-records` · **cấm ERP.*** |
| packKind | **`list`** · Kind B A–D+F · Kind D Slideout 2col · BRANCH + ATGT |
| changeScope | **`edit_page`** (T-XLS-S16) |
| resource | `interchanges` · formNo `16` · columns `39` · IdCode `IX-` |
| peerSoTs | `so-ts-interchange` · **cấm** merge · none_p1 |
| autoApprove | ON |
| contentHash | `sha256:c71543b66c4f1d28f5dbae1743c1042e0bb9f12ab9c0efc55d9668af2a38e072` |
| headerFingerprint | `sha256:ec787bf2008ae89f1b6c085fe238f1b0d50b048f5c672b90b68d9ea102cf8fcc` |
| skillVersion | `2026.09.05.03` |
| workflowVersion | `2026.09.05.03` |
| rulesVersion | `2026.09.17.3` |
| updatedAt | `2026-09-18T03:22:00.000Z` |
| prior · dev | **confirmed** · `implement/csdl-bieu-16.md` · `task_ba6998df` |
| priorTypedQa | `task_944da438` **keep** |

**Cấm** `phase=done` — next = Review. **cấm** ERP.* · **cấm** invent API · **cấm** kill worker (GAP-QA-E2E-KILL-01).

---

## E2E runtime (e2eQa ON)

| Check | Result |
|-------|--------|
| `docker compose up -d` (+ `--build` API) | **PASS** · api `:5111` · bff `:5201` · postgres healthy · pre-rebuild CSV stub → post-rebuild `.xls` · BFF recreate mid-run |
| `yarn start:std` (`:9301`) | **PASS** · Asset standalone listen (reuse · **cấm** kill) |
| `yarn e2e-qa --skip-start` (AI-AutoCode) | CLI **fail** resolve `playwright` từ screens cwd · **không** kill · fallback channel=chrome |
| Capture S0 / S1 / QA-20 → `qa/screens/{caseId}.png` | **PASS** · `manifest.json` `ok=true` |
| Live DOM + S-XLS-EXPORT | **PASS** · `live-assert.json` · filename `Bieu16_NutGiao_20260918.xls` |
| Import Excel | **DEFER P1** · `hasImport=false` (export_only_p0) |
| Form assert QA-20 | **PASS** · `form-assert.json` · Z2/feature/BRANCH · Z3 ATGT+QL · IX- · Lưu · `data-form-cols=2` |
| API/BFF GET export `?resource=interchanges` | **PASS** · HTTP 200 · `Bieu16_NutGiao_{yyyyMMdd}.xls` |

### Evidence table

| ID | Steps | Expected | Result | Evidence |
|----|-------|----------|--------|----------|
| S0 | Mở alias `/csdl-bieu-16` | List · toolbar **Xuất** · Import ẩn · filter-bar · **0** peer | **PASS** | ![S0](screens/S0.png) |
| S1 | Hub `?resource=interchanges` | Redirect → Biểu 16 list (route_a) | **PASS** | ![S1](screens/S1.png) |
| QA-20 | `?form=create` | Slideout create KEEP · Z2 feature+BRANCH · Z3 ATGT+QL · IX- | **PASS** | ![QA-20](screens/QA-20.png) |
| S-XLS-EXPORT | Click `…-export-excel-btn` | Download `Bieu16_NutGiao_{yyyyMMdd}.xls` · filtered | **PASS** (`live-assert.json`) |

`screens/manifest.json` · capturedAt `2026-09-18T03:21:27.481Z` · SHA256_16 S0=`9ae53c5ad4af44ff` · S1=`45e48c481fb1d05d` · QA-20=`750db6e448c043ba`.

---

## T-XLS-S16-QA-01

| ID | Check | Result |
|----|-------|--------|
| QA-XLS-01 | catalogToolbar **Xuất Excel** · **0** Xuất on LinErpListFilterBar | **PASS** (GAP-FILTER-BAR-08) |
| QA-XLS-02 | Filename `Bieu16_NutGiao_{yyyyMMdd}.xls` | **PASS** (`Bieu16_NutGiao_20260918.xls`) |
| QA-XLS-03 | one_sheet · 39 · flatten 1 row/nhánh · header_blank · **cấm** 12+8 · **cấm** sheet Branch · **cấm** streaming | **PASS** (PO+SA lock + runtime download) |
| QA-XLS-04 | Import **DEFER P1 ẩn** · export_only_p0 · toast stub ≠ done | **PASS** (`hasImport=false`) |
| QA-XLS-05 | GET export `?resource=interchanges` (+ filter QS) | **PASS** (FE blob download + API/BFF 200) |

---

## T-QA-* KEEP (smoke)

| ID | Check | Result |
|----|-------|--------|
| QA-20 | Create Slideout · Z2 feature · BRANCH · Z3 ATGT+QL · IX- · 2col | **PASS** (runtime) |
| QA-ROUTE-01 | alias `/csdl-bieu-16` + hub redirect | **PASS** (S0+S1) |
| QA-FB-01 | filter interchangeType/kmMain · **0** export on bar | **PASS** |
| QA-BRANCH-01 / QA-MAIN-01 / QA-ATGT-01 | BRANCH + main + ATGT live form | **PASS** (`form-assert.json`) |
| QA-CH-02 | peer none_p1 · **cấm** merge so-ts-interchange | **PASS** |

---

## Debt / GAP

| ID | Sev | Note |
|----|-----|------|
| GAP-QA-E2E-PW-01 | P2 | `yarn e2e-qa` overwrite `_capture.mjs` bare playwright · chrome createRequire fallback |
| GAP-QA-ROAD-TESTID | P3 | SearchInput road testid may not surface (`hasRoad=false`) |
| Auth | DEFER | |
| Import | P1 | DEFER ẩn |

---

## Handoff

| Field | Value |
|-------|-------|
| next | **Review** · `/agent-review` · `review/findings.md` |
| compact | `handoff/qa-compact.md` |
| **cấm** | `phase=done` từ QA · start role khác cùng task |
