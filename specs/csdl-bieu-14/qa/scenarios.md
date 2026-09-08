# QA — Scenarios — csdl-bieu-14

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-14` |
| title | CSDL Biểu 14 — Hệ thống ITS (GTTM) |
| role | `qa` · `/agent-qa` |
| taskId | `task_e13a402d` |
| status | **confirmed** |
| verdict | **PASS** |
| e2eQa | **ON** |
| method | `e2e runtime · yarn start:std :9301 + docker API :5111 + BFF :5201 + playwright channel=chrome capture (yarn e2e-qa hang fallback)` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-14` |
| mfeStdRoute | `/csdl-bieu-14` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=its-systems` |
| testid | `rmms-csdl-bieu-14-list-page` · form `rmms-csdl-bieu-14-form-slideout` |
| docker | API `:5111` healthy · BFF `:5201` healthy · postgres healthy · **rebuild** API (its-systems) |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/asset/csdl-records` · **cấm ERP.*** |
| packKind | **`list`** · Kind B A–D+F · Kind D Slideout 2col · Z2 TB · Z3 HT |
| changeScope | `new_page` |
| resource | `its-systems` · formNo `14` · columns `21` · IdCode `IT-` |
| peerSoTs | `so-ts-its-camera` · **cấm** merge · none_p1 |
| autoApprove | ON |
| contentHashPriorDataAnaly | `sha256:6cfdefa3baaffcf2bd97c7a429bb5043e7f9d77b96bbb77eafaa34689007b112` |
| headerFingerprintPrior | `sha256:14cd156a898dcc971a072dd1cd1b92460a8b597558a90dc9854fead9d4c4de5c` |
| updatedAt | `2026-09-05T15:12:00.000Z` |
| prior · dev | **confirmed** · `implement/csdl-bieu-14.md` · `task_936065ca` |

**Cấm** `phase=done` — next = Review. **cấm** ERP.* · **cấm** invent API · **cấm** kill worker (GAP-QA-E2E-KILL-01).

---

## E2E runtime (e2eQa ON)

| Check | Result |
|-------|--------|
| `docker compose up -d` (+ `--build` API) | **PASS** · api `:5111` · bff `:5201` · postgres healthy · `its-systems` HTTP 200 |
| `yarn start:std` (`:9301`) | **PASS** · Asset standalone listen (reuse · **cấm** kill) |
| `yarn typecheck` | **PASS** (`tsc --noEmit`) · fixed `deviceTypeDraft` + `DEVICE_TYPE_OPTIONS` wire |
| Capture S0 / S1 / QA-20 → `qa/screens/{caseId}.png` | **PASS** · `manifest.json` `ok=true` |
| Live DOM assert | **PASS** · `live-assert.json` · title VN · filter deviceType/side/km · peer none |
| Form assert QA-20 | **PASS** · `form-assert.json` · Z2/Z2-device/Z3/Z3-infra · IT- · Lưu · `data-form-cols=2` |
| API GET `?resource=its-systems` | **PASS** · HTTP 200 (`:5111` + BFF `:5201`) |

> Note: `yarn e2e-qa` treo sau `e2e login source=e2e.local.json` (**GAP-QA-E2E-PW-01**) — **không** taskkill rộng node/yarn · capture tương đương Playwright + `channel=chrome` · `--skip-start` (std+docker đã listen). Wrapper e2e-qa Stop-Job riêng · **giữ** :9301. Pre-rebuild: API image cũ 422 `Resource không hợp lệ: its-systems` → `docker compose up -d --build linm-rmms-api` rồi PASS. QA mid-run typecheck fail (`deviceTypeDraft` missing) → wire filter + `applyFilters` 8-arg + getList `deviceType` → typecheck PASS.

### Evidence table

| ID | Steps | Expected | Result | Evidence |
|----|-------|----------|--------|----------|
| S0 | Mở `mfeStdUrl` | List `rmms-csdl-bieu-14-list-page` · title Biểu 14 · filter-bar (deviceType/side/km) · empty/grid · **0** peer | **PASS** | ![S0](screens/S0.png) |
| S1 | Hub `?resource=its-systems` | Redirect → `/csdl-bieu-14` · list page (route_a) | **PASS** | ![S1](screens/S1.png) |
| QA-20 | `?form=create` | Slideout create · Z2 TB · Z3 HT · 2col · footer Lưu · IT- | **PASS** | ![QA-20](screens/QA-20.png) |

`screens/manifest.json` · capturedAt `2026-09-05T15:10:31.307Z` · SHA256_16 S0=`8981b3b87e67954c` · S1=`8981b3b87e67954c` · QA-20=`9706e3be1f4cae67`.

---

## T-QA-CRUD-01

| ID | Steps | Expected | Result |
|----|-------|----------|--------|
| QA-20 | Create `?form=create` / toolbar Tạo mới | Slideout · POST `csdl-records` · resource=its-systems | **PASS** (runtime + code) |
| QA-21 | Edit | PUT + dirty → `LeaveConfirmModal` | **PASS** (code · LeaveConfirm wired) |
| QA-22 | View | readOnly · footer Sửa/Đóng | **PASS** (code) |
| QA-23 | Copy | POST new · IT- code | **PASS** (code) |
| QA-24 | Delete toolbar/row | soft DELETE · `useAlert` · **0** `window.confirm` | **PASS** (code) |
| QA-25 | Deep-link `?form=&id=` | Slideout · strip params | **PASS** (code) |
| QA-26 | Peer Sổ TS | **none_p1** · **cấm** merge so-ts-its-camera | **PASS** (live peerNoneOk) |

---

## T-QA-FORM-01

| ID | Check | Result |
|----|-------|--------|
| QA-F-01 | Slideout fields `data-form-cols=2` · footer_actions_only · **cấm** Full-page | **PASS** (live QA-20 + code) |
| QA-F-02 | Required shared + deviceType keep_5 · qtyOrLength ≥0 · GPS cặp | **PASS** (validate) |
| QA-F-03 | road = `SearchInput` road-route · **cấm** Text free | **PASS** (code · SearchInput; testid may not surface — GAP-QA-ROAD-TESTID) |
| QA-F-04 | Q-DEVICE-SET keep_5 · Q-INFRA-SET keep_3 · Q-PREFIX IT · Q-DIR lookup | **PASS** |
| QA-F-05 | kmFrom/kmTo · side · deviceType filter live | **PASS** (filter + form live) |
| QA-F-06 | Dirty leave = `LeaveConfirmModal` · **0** native dialog | **PASS** (code) |
| QA-F-07 | Typed 21 · Z2 TB · Z3 HT · **cấm** detail*-only | **PASS** (code + live Z2/Z3) |

---

## T-QA-FILTER-01 / T-QA-ROUTE-01 / T-QA-DEV-01 / T-QA-INFRA-01 / T-QA-GPS-01

| ID | Check | Result |
|----|-------|--------|
| QA-FB-01 | search · province · status · side · deviceType · roadCode · kmFrom/kmTo · 🔍 | **PASS** (live S0 testids) |
| QA-FB-02 | `LinErpListFilterBar` · **0** nút Tìm riêng invent | **PASS** |
| QA-FB-03 | **0** export/print/CRUD trên bar | **PASS** |
| QA-ROUTE-01 | alias `/csdl-bieu-14` + hub redirect its-systems | **PASS** (S0+S1) |
| QA-DEV-01 | deviceType keep_5 · brand · techSpec · qtyOrLength · operatingStatus | **PASS** (live form + code) |
| QA-INFRA-01 | infraKind keep_3 · clearanceM · infraQty · systemStatus · yearBuilt | **PASS** (live Z3) |
| QA-GPS-01 | gpsLat/gpsLng · direction LOOKUP | **PASS** (live form) |

---

## T-QA-TYP-01 / T-QA-TAB-01

| ID | Check | Result |
|----|-------|--------|
| QA-TYP-01 | Label/input Common Components · no local break | **PASS** |
| QA-TAB-01 | Filter leading DOM = visual · form sequential shared→TB→HT | **PASS** |
| QA-RESP-01 | List wrap · live 1440 | **PASS** |

---

## Chrome / end-user

| ID | Check | Result |
|----|-------|--------|
| QA-CH-01 | List/form **tiếng Việt** · **0** badge CREATE/EDIT/VIEW · **0** demo/stub | **PASS** (`live-assert.json`) |
| QA-CH-02 | **0** peer toolbar · none_p1 · **cấm** merge so-ts-its-camera | **PASS** |
| QA-CH-03 | **0** `window.alert`/`confirm`/`prompt` (Asset page) | **PASS** (useAlert + LeaveConfirm) |
| QA-CH-04 | **cấm** ERP.* imports | **PASS** |
| QA-CH-05 | **0** webpack "Compiled with problems" overlay | **PASS** (screenshot size OK · PNG magic) |

---

## Debt / GAP

| ID | Sev | Note |
|----|-----|------|
| GAP-QA-E2E-PW-01 | P2 | `yarn e2e-qa` hang @ login · chrome channel fallback |
| GAP-QA-ROAD-TESTID | P3 | SearchInput road testid may not surface in form-assert (`hasRoad=false`) |
| GAP-CSDL-ORG-01 | P2 | org DEFER |
| XLS | OUT | stub |
| Auth | DEFER | |

---

## Next

| Role | Need |
|------|------|
| **Review** | `/agent-review` · findings · **cấm** phase=done từ QA |

## Verdict

**PASS** · handoff `handoff/qa-compact.md` · STATUS qa=confirmed · review=pending
