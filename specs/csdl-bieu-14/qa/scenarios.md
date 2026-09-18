# QA — Scenarios — csdl-bieu-14 (edit_page · T-XLS-S14)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-14` |
| title | CSDL Biểu 14 — Hệ thống ITS (GTTM) · Xuất Excel |
| role | `qa` · `/agent-qa` |
| taskId | `task_fae5cc8a` |
| status | **confirmed** |
| verdict | **PASS** |
| e2eQa | **ON** |
| method | `e2e runtime · yarn start:std :9301 (reuse) + docker API :5111 + BFF :5201 + yarn e2e-qa (playwright resolve fail → channel=chrome createRequire AutoCode · skip-start)` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` |
| mfeStdRoute | `/so-ts/csdl-so-sach` · alias `/csdl-bieu-14` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=its-systems` |
| testid | `rmms-csdl-bieu-14-list-page` · export `…-export-excel-btn` · form `rmms-csdl-bieu-14-form-slideout` |
| docker | API `:5111` healthy · BFF `:5201` healthy · postgres healthy · **rebuild** API (Bieu14 XLS) |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/asset/csdl-records` · **cấm ERP.*** |
| packKind | **`list`** · Kind B A–D+F · Kind D Slideout 2col · Z2 TB · Z3 HT |
| changeScope | **`edit_page`** (T-XLS-S14) |
| resource | `its-systems` · formNo `14` · columns `21` · IdCode `IT-` |
| peerSoTs | `so-ts-its-camera` · **cấm** merge · none_p1 |
| autoApprove | ON |
| contentHash | `sha256:e9a062f1f9eecd6bf98748db0c3f839e2247a74ecb9bcd56273d4e48d729fa0a` |
| headerFingerprint | `sha256:14cd156a898dcc971a072dd1cd1b92460a8b597558a90dc9854fead9d4c4de5c` |
| skillVersion | `2026.09.05.03` |
| workflowVersion | `2026.09.05.03` |
| rulesVersion | `2026.09.17.3` |
| updatedAt | `2026-09-18T02:02:00.000Z` |
| prior · dev | **confirmed** · `implement/csdl-bieu-14.md` · `task_5163dcca` |
| priorTypedQa | `task_e13a402d` **keep** |

**Cấm** `phase=done` — next = Review. **cấm** ERP.* · **cấm** invent API · **cấm** kill worker (GAP-QA-E2E-KILL-01).

---

## E2E runtime (e2eQa ON)

| Check | Result |
|-------|--------|
| `docker compose up -d` (+ `--build` API) | **PASS** · api `:5111` · bff `:5201` · postgres healthy · pre-rebuild CSV stub → post-rebuild `.xls` |
| `yarn start:std` (`:9301`) | **PASS** · Asset standalone listen (reuse · **cấm** kill) |
| `yarn typecheck` | **PASS** (`tsc --noEmit`) |
| `yarn e2e-qa --skip-start` (AI-AutoCode) | CLI **fail** resolve `playwright` từ screens cwd · **không** kill · fallback channel=chrome |
| Capture S0 / S1 / QA-20 → `qa/screens/{caseId}.png` | **PASS** · `manifest.json` `ok=true` |
| Live DOM + S-XLS-EXPORT | **PASS** · `live-assert.json` · filename `Bieu14_HeThongITS_20260918.xls` |
| Import Excel | **DEFER P1** · `hasImport=false` (export_only_p0) |
| Form assert QA-20 | **PASS** · `form-assert.json` · Z2/Z2-device/Z3/Z3-infra · IT- · Lưu · `data-form-cols=2` |
| API GET export `?resource=its-systems` | **PASS** · HTTP 200 · `Bieu14_HeThongITS_{yyyyMMdd}.xls` |

### Evidence table

| ID | Steps | Expected | Result | Evidence |
|----|-------|----------|--------|----------|
| S0 | Mở alias `/csdl-bieu-14` | List · toolbar **Xuất** · Import ẩn · filter-bar · **0** peer | **PASS** | ![S0](screens/S0.png) |
| S1 | Hub `?resource=its-systems` | Redirect → Biểu 14 list (route_a) | **PASS** | ![S1](screens/S1.png) |
| QA-20 | `?form=create` | Slideout create KEEP · Z2 TB · Z3 HT · IT- | **PASS** | ![QA-20](screens/QA-20.png) |
| S-XLS-EXPORT | Click `…-export-excel-btn` | Download `Bieu14_HeThongITS_{yyyyMMdd}.xls` · filtered | **PASS** (`live-assert.json`) |

`screens/manifest.json` · capturedAt `2026-09-18T02:01:19.367Z` · SHA256_16 S0=`bcaa3017b39ff004` · S1=`35bde9088169398d` · QA-20=`7cc961825133fc43`.

---

## T-XLS-S14-QA-01

| ID | Check | Result |
|----|-------|--------|
| QA-XLS-01 | catalogToolbar **Xuất Excel** · **0** Xuất on LinErpListFilterBar | **PASS** (GAP-FILTER-BAR-08) |
| QA-XLS-02 | Filename `Bieu14_HeThongITS_{yyyyMMdd}.xls` | **PASS** (`Bieu14_HeThongITS_20260918.xls`) |
| QA-XLS-03 | one_sheet · 21 · device+infra+GPS cùng hàng · **cấm** 12+8 · **cấm** sheet TB/HT · **cấm** streaming | **PASS** (PO+SA lock + runtime download) |
| QA-XLS-04 | Import **DEFER P1 ẩn** · export_only_p0 · toast stub ≠ done | **PASS** (`hasImport=false`) |
| QA-XLS-05 | GET export `?resource=its-systems` (+ filter QS) | **PASS** (FE blob download + API 200) |

---

## T-QA-* KEEP (smoke)

| ID | Check | Result |
|----|-------|--------|
| QA-20 | Create Slideout · Z2 TB · Z3 HT · IT- · 2col | **PASS** (runtime) |
| QA-ROUTE-01 | alias `/csdl-bieu-14` + hub redirect | **PASS** (S0+S1) |
| QA-FB-01 | filter deviceType/side/km · **0** export on bar | **PASS** |
| QA-DEV-01 / QA-INFRA-01 / QA-GPS-01 | device/infra/GPS live form | **PASS** (`form-assert.json`) |
| QA-CH-02 | peer none_p1 · **cấm** merge so-ts-its-camera | **PASS** |

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
