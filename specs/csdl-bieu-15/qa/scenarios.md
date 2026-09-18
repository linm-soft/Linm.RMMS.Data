# QA — Scenarios — csdl-bieu-15 (edit_page · T-XLS-S15)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-15` |
| title | CSDL Biểu 15 — TMC / thu phí / hạt / kho · Xuất Excel |
| role | `qa` · `/agent-qa` |
| taskId | `task_2d0725d3` |
| status | **confirmed** |
| verdict | **PASS** |
| e2eQa | **ON** |
| method | `e2e runtime · yarn start:std :9301 (reuse) + docker API :5111 + BFF :5201 + yarn e2e-qa (playwright resolve fail → channel=chrome createRequire AutoCode · skip-start)` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` |
| mfeStdRoute | `/so-ts/csdl-so-sach` · alias `/csdl-bieu-15` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=ops-facilities` |
| testid | `rmms-csdl-bieu-15-list-page` · export `…-export-excel-btn` · form `rmms-csdl-bieu-15-form-slideout` |
| docker | API `:5111` healthy · BFF `:5201` healthy · postgres healthy · **rebuild** API+BFF (Bieu15 XLS) |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/asset/csdl-records` · **cấm ERP.*** |
| packKind | **`list`** · Kind B A–D+F · Kind D Slideout 2col · Z2 công trình · Z3 TB+QL |
| changeScope | **`edit_page`** (T-XLS-S15) |
| resource | `ops-facilities` · formNo `15` · columns `20` · IdCode `OF-` |
| peerSoTs | `so-ts-toll` · `so-ts-rest-area` · `so-ts-station-house` · **cấm** merge · none_p1 |
| autoApprove | ON |
| contentHash | `sha256:8a85d68eaef24cf98c312f83a3a100de25b1212e8a751d6f1f42005d38dd0fc8` |
| headerFingerprint | `sha256:0064a4903777f7ea8d51c7423d8451a20daf77a5934929001905edaa380f4fe4` |
| skillVersion | `2026.09.05.03` |
| workflowVersion | `2026.09.05.03` |
| rulesVersion | `2026.09.17.3` |
| updatedAt | `2026-09-18T02:41:00.000Z` |
| prior · dev | **confirmed** · `implement/csdl-bieu-15.md` · `task_88a1f9c1` |
| priorTypedQa | `task_cb969365` **keep** |

**Cấm** `phase=done` — next = Review. **cấm** ERP.* · **cấm** invent API · **cấm** kill worker (GAP-QA-E2E-KILL-01).

---

## E2E runtime (e2eQa ON)

| Check | Result |
|-------|--------|
| `docker compose up -d` (+ `--build` API/BFF) | **PASS** · api `:5111` · bff `:5201` · postgres healthy · pre-rebuild CSV stub → post-rebuild `.xls` · BFF recreate (web-bff 404 mid-restart → healthy) |
| `yarn start:std` (`:9301`) | **PASS** · Asset standalone listen (reuse · **cấm** kill) |
| `yarn e2e-qa --skip-start` (AI-AutoCode) | CLI **fail** resolve `playwright` từ screens cwd · **không** kill · fallback channel=chrome |
| Capture S0 / S1 / QA-20 → `qa/screens/{caseId}.png` | **PASS** · `manifest.json` `ok=true` |
| Live DOM + S-XLS-EXPORT | **PASS** · `live-assert.json` · filename `Bieu15_TMC_Tram_Hat_20260918.xls` |
| Import Excel | **DEFER P1** · `hasImport=false` (export_only_p0) |
| Form assert QA-20 | **PASS** · `form-assert.json` · Z2/Z2-facility/Z3/Z3-equipment/Z3-manage · OF- · Lưu · `data-form-cols=2` |
| API/BFF GET export `?resource=ops-facilities` | **PASS** · HTTP 200 · `Bieu15_TMC_Tram_Hat_{yyyyMMdd}.xls` |

### Evidence table

| ID | Steps | Expected | Result | Evidence |
|----|-------|----------|--------|----------|
| S0 | Mở alias `/csdl-bieu-15` | List · toolbar **Xuất** · Import ẩn · filter-bar · **0** peer | **PASS** | ![S0](screens/S0.png) |
| S1 | Hub `?resource=ops-facilities` | Redirect → Biểu 15 list (route_a) | **PASS** | ![S1](screens/S1.png) |
| QA-20 | `?form=create` | Slideout create KEEP · Z2 facility · Z3 TB+QL · OF- | **PASS** | ![QA-20](screens/QA-20.png) |
| S-XLS-EXPORT | Click `…-export-excel-btn` | Download `Bieu15_TMC_Tram_Hat_{yyyyMMdd}.xls` · filtered | **PASS** (`live-assert.json`) |

`screens/manifest.json` · capturedAt `2026-09-18T02:40:28.576Z` · SHA256_16 S0=`889e611b9d7ddb8d` · S1=`47b664218df534e0` · QA-20=`4d5914adbda87210`.

---

## T-XLS-S15-QA-01

| ID | Check | Result |
|----|-------|--------|
| QA-XLS-01 | catalogToolbar **Xuất Excel** · **0** Xuất on LinErpListFilterBar | **PASS** (GAP-FILTER-BAR-08) |
| QA-XLS-02 | Filename `Bieu15_TMC_Tram_Hat_{yyyyMMdd}.xls` | **PASS** (`Bieu15_TMC_Tram_Hat_20260918.xls`) |
| QA-XLS-03 | one_sheet · 20 · facility+area+equipment cùng hàng · **cấm** 12+8 · **cấm** sheet CT/TB · **cấm** streaming | **PASS** (PO+SA lock + runtime download) |
| QA-XLS-04 | Import **DEFER P1 ẩn** · export_only_p0 · toast stub ≠ done | **PASS** (`hasImport=false`) |
| QA-XLS-05 | GET export `?resource=ops-facilities` (+ filter QS) | **PASS** (FE blob download + API/BFF 200) |

---

## T-QA-* KEEP (smoke)

| ID | Check | Result |
|----|-------|--------|
| QA-20 | Create Slideout · Z2 facility · Z3 TB+QL · OF- · 2col | **PASS** (runtime) |
| QA-ROUTE-01 | alias `/csdl-bieu-15` + hub redirect | **PASS** (S0+S1) |
| QA-FB-01 | filter facilityKind/km · **0** export on bar | **PASS** |
| QA-FAC-01 / QA-AREA-01 / QA-EQ-01 | facility/area/equipment live form | **PASS** (`form-assert.json`) |
| QA-CH-02 | peer none_p1 · **cấm** merge so-ts-toll/rest/station | **PASS** |

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

## Handoff

| Field | Value |
|-------|-------|
| next | **Review** · `/agent-review` · `review/findings.md` |
| compact | `handoff/qa-compact.md` |
| **cấm** | `phase=done` từ QA · start role khác cùng task |
