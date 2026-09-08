# QA — Scenarios — csdl-bieu-04

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-04` |
| title | CSDL Biểu 04 — Cống các loại |
| role | `qa` · `/agent-qa` |
| taskId | `task_4ed5aef9` |
| status | **confirmed** |
| verdict | **PASS** |
| e2eQa | **ON** |
| method | `e2e runtime · yarn start:std :9301 + docker API :5111 + BFF :5201 + playwright channel=chrome capture (yarn e2e-qa install hang fallback)` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-04` |
| mfeStdRoute | `/csdl-bieu-04` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=culverts` |
| testid | `rmms-csdl-bieu-04-list-page` · form `rmms-csdl-bieu-04-form-slideout` |
| docker | API `:5111` healthy · BFF `:5201` healthy · postgres healthy |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/asset/csdl-records` · **cấm ERP.*** |
| packKind | **`list`** · Kind B A–D+F · Kind D Slideout 2col |
| changeScope | `new_page` |
| resource | `culverts` · formNo `04` · columns `17` · IdCode `CG-` |
| autoApprove | ON |
| contentHashPriorDataAnaly | `sha256:7498ad6644d0e599bc40afb7589db5335c18adb4b92f1573de3c1fae2e17d3d6` |
| updatedAt | `2026-09-05T06:26:00.000Z` |
| prior · dev | **confirmed** · `implement/csdl-bieu-04.md` · `task_cd72c67e` |

**Cấm** `phase=done` — next = Review. **cấm** ERP.* · **cấm** invent API · **cấm** kill worker (GAP-QA-E2E-KILL-01).

---

## E2E runtime (e2eQa ON)

| Check | Result |
|-------|--------|
| `docker compose up -d` (`Linm.RMMS.WebService`) | **PASS** · api `:5111` · bff `:5201` · postgres healthy |
| `yarn start:std` (`:9301`) | **PASS** · Asset standalone listen · bundle có `csdl-bieu-04` |
| `yarn typecheck` | **PASS** (`tsc --noEmit`) |
| Capture S0 / S1 / QA-20 → `qa/screens/{caseId}.png` | **PASS** · `manifest.json` `ok=true` |
| Live DOM assert | **PASS** · `live-assert.json` · title VN · filter · peer-sots |
| API GET `?resource=culverts` | **PASS** · HTTP 200 (`:5111` + BFF `web-bff/...`) |

> Note: `yarn e2e-qa` treo `npx playwright@1.55.0 install chromium` ~45s (**GAP-QA-E2E-PW-01**) — **không** kill worker · Stop-Job chỉ PS job wrapper · capture tương đương Playwright + `channel=chrome` · `--skip-start` (std+docker đã listen).

### Evidence table

| ID | Steps | Expected | Result | Evidence |
|----|-------|----------|--------|----------|
| S0 | Mở `mfeStdUrl` | List `rmms-csdl-bieu-04-list-page` · title Biểu 04 · filter-bar · empty/grid · peer Sổ TS | **PASS** | ![S0](screens/S0.png) |
| S1 | Hub `?resource=culverts` | CSDL list `rmms-csdl-so-sach-list-page` (deep-link) | **PASS** | ![S1](screens/S1.png) |
| QA-20 | `?form=create` | Slideout create · Z2/Z3 · footer Hủy/Lưu · road SearchInput | **PASS** | ![QA-20](screens/QA-20.png) |

`screens/manifest.json` · capturedAt `2026-09-05T06:23:42.475Z` · SHA256_16 S0=`d6e9f19589ae80d0` · S1=`63c4bf383d9c23ad` · QA-20=`1640ba4607f56a43`.

---

## T-QA-CRUD-01

| ID | Steps | Expected | Result |
|----|-------|----------|--------|
| QA-20 | Create `?form=create` / toolbar Tạo mới | Slideout · POST `csdl-records` · resource=culverts | **PASS** (runtime + code) |
| QA-21 | Edit | PUT + dirty → `LeaveConfirmModal` | **PASS** (code · LeaveConfirm wired) |
| QA-22 | View | readOnly · footer Sửa/Đóng | **PASS** (code) |
| QA-23 | Copy | POST new · CG- code | **PASS** (code) |
| QA-24 | Delete toolbar/row | soft DELETE · `useAlert` · **0** `window.confirm` | **PASS** (code) |
| QA-25 | Deep-link `?form=&id=` | Slideout · strip params | **PASS** (code) |
| QA-26 | Peer Sổ TS | deep-link only · **cấm** merge form | **PASS** (live peer-sots) |

---

## T-QA-FORM-01

| ID | Check | Result |
|----|-------|--------|
| QA-F-01 | Slideout `data-form-cols=2` · footer_actions_only · **cấm** Full-page | **PASS** (live QA-20) |
| QA-F-02 | Required: road/province/km/status/aperture/shape/length | **PASS** (validate) |
| QA-F-03 | road = `SearchInput` road-route · **cấm** Text free | **PASS** (live + code) |
| QA-F-04 | Q-GPS `gpsCulvertX/Y` · `gpsRoadX/Y` four_xy | **PASS** (form fields) |
| QA-F-05 | Q-SHAPE Dropdown hộp/tròn · Q-LOAD `loadClass` free_text | **PASS** |
| QA-F-06 | Dirty leave = `LeaveConfirmModal` · **0** native dialog | **PASS** (code) |
| QA-F-07 | Typed 17 · **cấm** detail*-only | **PASS** (code) |

---

## T-QA-FILTER-01 / T-QA-ROUTE-01

| ID | Check | Result |
|----|-------|--------|
| QA-FB-01 | search · province · status · roadCode · kmPoint · 🔍 | **PASS** (live S0 testids) |
| QA-FB-02 | `LinErpListFilterBar` · **0** nút Tìm riêng invent | **PASS** |
| QA-FB-03 | **0** export/print/CRUD trên bar | **PASS** |
| QA-ROUTE-01 | alias `/csdl-bieu-04` + hub deep-link | **PASS** (S0+S1) |

---

## T-QA-TYP-01 / T-QA-TAB-01

| ID | Check | Result |
|----|-------|--------|
| QA-TYP-01 | Label/input Common Components · no local break | **PASS** |
| QA-TAB-01 | Filter leading DOM = visual · form sequential | **PASS** |
| QA-RESP-01 | List wrap · live 1440 | **PASS** |

---

## Chrome / end-user

| ID | Check | Result |
|----|-------|--------|
| QA-CH-01 | List/form **tiếng Việt** · **0** badge CREATE/EDIT/VIEW · **0** demo/stub | **PASS** (`live-assert.json`) |
| QA-CH-02 | Peer deep-link Sổ TS · **cấm** merge | **PASS** |
| QA-CH-03 | **0** `window.alert`/`confirm`/`prompt` (Asset page) | **PASS** (useAlert + LeaveConfirm) |
| QA-CH-04 | **cấm** ERP.* imports | **PASS** |

---

## Gaps

| ID | Status | Note |
|----|--------|------|
| GAP-QA-E2E-PW-01 | open P2 | `yarn e2e-qa` hang `playwright install chromium` · fallback channel=chrome |
| Auth RequirePermission | DEFER | stub until CommonLib |
| GAP-CSDL-ORG-01 / XLS | OUT/DEFER | manageUnit org P2 · export stub OK |

---

## DoR

| Gate | Result |
|------|--------|
| scenarios.md + T-QA-* | **PASS** |
| e2e screens S0/S1/QA-20 + manifest ok | **PASS** |
| handoff `qa-compact.md` | **PASS** |
| **cấm** `phase=done` | **PASS** · next Review |
| STATUS lock released · review pending | **PASS** |

---

## Next

- **Review** `/agent-review` · `review/findings.md` · **cấm** start role khác trong task này
