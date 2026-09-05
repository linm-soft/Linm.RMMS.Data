# Review — Findings — so-ts-bus-stop

| | |
|--|--|
| Feature | `so-ts-bus-stop` |
| Title | Sổ TS — Điểm dừng xe buýt |
| Role | `review` · `/agent-review` |
| Status | **confirmed** |
| verdict | **PASS** |
| review_confirm | **done** (autoApprove ON) |
| packKind | `list` |
| changeScope | `new_page` |
| typeCode | `BUS_STOP` |
| dump | `tbl_bus_stops` |
| prefix | `DX-` |
| API | `api/v1/asset/road-assets` · **cấm ERP.*** |
| mfeStdRoute | `/so-ts?type=BUS_STOP` |
| mfeStdUrl | `http://localhost:9301/so-ts?type=BUS_STOP` |
| alias | `/so-ts-bus-stop` → Navigate |
| contentHash | `sha256:c1af893aa22666c6c7941b086d81a47824dda068262aa58824b3657b7f2a4f0f` (**unchanged** · hash skip) |
| taskId | `task_b80ff717` |
| prior · qa | **confirmed** · verdict PASS · `handoff/qa-compact.md` |
| prior · dev | **confirmed** · `handoff/dev-compact.md` |
| writtenAt | `2026-09-01T08:20:00.000Z` |
| skillVersion | `2026.08.19.04` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |

**Cấm** implement · e2e / yarn build / start:std ở role này · Step 4b / migration · GAP-PKT-ROLE-01.

---

## Gate summary

| Gate | Result | Notes |
|------|--------|-------|
| QUERY | **PASS** | path `asset/road-assets` · dumpSpecs P1 · **0** ERP.* · **0** invent `api/v1/so-ts/*` |
| SEC | **PASS** | Auth DEFER documented · soft DELETE · **0** secret/credential in delta |
| UI-FN | **PASS** | BUS_STOP profile · kmTo ẩn · LeaveConfirm · DX- · bool bay/ghế/nhà chờ ON · alias |
| BE-FN | **PASS** | DefaultCodePrefix `DX-` · busStop* init LOOKUP · name←station_name · type_work_id required |
| QA prior | **PASS** | S0/S1/QA-20 · T-QA-* · DTM 0 overflowX |
| Hash | **skip** | contentHash unchanged vs data_analy |

---

## QUERY

| ID | Check | Result |
|----|-------|--------|
| Q-01 | Domain Asset · `api/v1/asset/road-assets` (+ BFF proxy) | **PASS** · SA/Dev/QA compact + endpoint |
| Q-02 | **Cấm** ERP.* / invent `api/v1/so-ts/*` | **PASS** · FE route alias only · API giữ road-assets |
| Q-03 | Persist dumpSpecs JSON · **no** Schema_* flatten P1 | **PASS** · GAP-DD-FLAT-01 defer P2 |
| Q-04 | dump keys §4: station_name · type_work_id · management_id · stop_bay · seated_waiting_bus · bus_shelter · pavement/shelter/vitri/escape | **PASS** · BUS_STOP_ATTR_KEYS + BE validate |
| Q-05 | FormMode C/E/V/Copy ↔ POST/PUT/GET · soft DELETE · `?type=BUS_STOP` | **PASS** · QA T-QA-CRUD-01 |

---

## SEC

| ID | Check | Result |
|----|-------|--------|
| S-01 | Auth / permission align | **DEFER** (documented · not blocker) |
| S-02 | No credentials / tokens in feature artifacts | **PASS** |
| S-03 | Soft delete · useAlert / Modal · **0** native confirm on Asset surfaces | **PASS** · QA QA-23/QA-F-06 |
| S-04 | Tenant / share gates `tz_na` · `xco_get_only` · `share_tenant` | **PASS** · SA compact |

---

## UI-FN

| ID | Check | Result |
|----|-------|--------|
| U-01 | Live `/so-ts?type=BUS_STOP` · alias `/so-ts-bus-stop` Navigate | **PASS** · `index.tsx` + QA S1 |
| U-02 | List profile: ENSURE type_work/management/bay/ghế/nhà chờ · HIDE type/kmTo/qty | **PASS** · AssetListPage BUS_STOP_* |
| U-03 | Filter-bar V1–V5 · LAYOUT-06 · DTM 0 overflowX | **PASS** · QA T-QA-FILTER-01/02 |
| U-04 | Form Full page 5col · S-* reuse · **cấm** fork/tab legacy | **PASS** · QA-F-01 · implement |
| U-05 | kmTo **ẩn** · name←station_name «Tên điểm» · prefix DX- | **PASS** · QA-20 / QA-F-04/05 |
| U-06 | S-ATTR LOOKUP_STATIC busStop* + bool | **PASS** · AssetFormPage init wiring |
| U-07 | LeaveConfirmModal · History Modal reuse | **PASS** · T-UI-LEAVE/HIST · QA |
| U-08 | Boolean grid cols luôn ON (no hide-empty) | **PASS** · BUS_STOP_ENSURE_COLS + QA live |

---

## BE-FN

| ID | Check | Result |
|----|-------|--------|
| B-01 | `DefaultCodePrefix(BUS_STOP)=DX-` | **PASS** · RoadAssetService GAP-DD-PREFIX-01 |
| B-02 | Validate: name/kmFrom optional · type_work_id required · **cấm** IsWeak→đoạn | **PASS** · GAP-DD-NAME/POINT |
| B-03 | Init-data busStopWorkTypes / ManagementUnits / PavementTypes / ShelterStructures / CrossSections / BoolOptions | **PASS** · RoadAssetService + FE setState |
| B-04 | Import ResolveBusStopName ← station_name | **PASS** · RoadAssetCatalogHandler |
| B-05 | Migration | **none** (P1 dumpSpecs) · **PASS** |
| B-06 | DOMAIN-MAP Asset row | **PASS** · Dev implement cite |

---

## P0 / fix_gaps

| Severity | Count | Action |
|----------|-------|--------|
| P0 | **0** | — |
| P1 info | 3 | GAP-QA-E2E-PW-01 · HAF-01 · DOCKER-01 (tooling · không block product) |
| Debt | 2 | Auth DEFER · Schema_* flatten P2 |

**review_confirm = done** — không `fix_gaps`.

---

## Debt carry-forward

- Auth permission align DEFER
- Schema_* flatten DEFER P2
- GAP-QA-E2E-* info (PW hang · HAF deep-link 404 · Docker :5101 vs :5111)

---

## Evidence cited (no re-run e2e)

- `handoff/qa-compact.md` · `qa/scenarios.md` · screens S0/S1/QA-20
- `handoff/dev-compact.md` · `implement/so-ts-bus-stop.md`
- Spot-check: `AssetListPage.tsx` · `AssetFormPage.tsx` · `index.tsx` · `RoadAssetService.cs` · `RoadAssetCatalogHandler.cs`

---

## Next

| Role | Need |
|------|------|
| *(pipeline review complete)* | chain theo orchestrator · **cấm** start role khác trong task này (GAP-PKT-ROLE-01) |

## Cấm (role)

implement · yarn build/e2e/start:std · Step 4b · migration · ERP.* · invent so-ts API
