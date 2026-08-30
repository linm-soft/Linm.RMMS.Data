# QA — Scenarios — incident

| Field | Value |
|-------|-------|
| feature | `incident` |
| role | `qa` · `/agent-qa` |
| taskId | `task_c7ae2881` |
| status | **fail** |
| verdict | **FAIL** |
| e2eQa | **ON** |
| method | `e2e runtime · Field yarn start:std :9304 + docker compose + Playwright` |
| mfeStdUrl | `http://localhost:9304/su-co` (SSOT · STATUS `route_keep` · **cấm** packet `/incident`) |
| testid | `rmms-incident-list-page` |
| docker | API `:5111` · BFF `:5201` · rebuilt 2026-08-29 |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Field` |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/incident/incidents` |
| packKind | **`list`** · Kind B A–D+F · fill_gaps P1 |
| autoApprove | ON |
| updatedAt | `2026-08-29T03:58:00.000Z` |
| skillVersion | `2026.08.25.02` |
| schemaVersion | `qldb-workflow-skill-v1` |
| workflowVersion | `2026.08.25.02` |
| versionGate | `recheck_new` |

**Cấm** `phase=done` · Fail → `qa_fail_rollback` · **không** completed.

---

## Runtime evidence (e2eQa ON)

| # | Check | Result | Evidence |
|---|-------|--------|----------|
| S0 | Route `mfeStdUrl` + `[data-testid=rmms-incident-list-page]` | **PASS** | ![S0](screens/S0.png) |
| S1 | Filter bar apply status «Mới» · list refresh | **PASS** | ![S1](screens/S1.png) |
| QA-20 | Create slideout `?form=create` + `[data-testid=incident-form-z2]` | **PASS** | ![QA-20](screens/QA-20.png) |

`screens/manifest.json` · `ok: true` · capturedAt `2026-08-29T03:47:22.789Z` · PNG SHA256 **distinct** (S0≠S1≠QA-20).

Entry: standalone `:9304` · route **`/su-co`** · title «Danh sách sự cố».

---

## Static / DoD (source + runtime)

| Id | Check | Result |
|----|-------|--------|
| QA-STD-01 | Packet URL `/incident` vs STATUS/`route_keep` **`/su-co`** | **recorded** — E2E on **`/su-co`** |
| QA-E2E-01 | PNG `qa/screens/{caseId}.png` · embed scenarios · distinct hash | **PASS** |
| QA-E2E-02 | docker API+BFF + `yarn start:std` listen `:9304` | **PASS** |
| QA-LIST-01 | Kind B A–D · `LinPageLayout` + grid + pagination | **PASS** (runtime S0/S1) |
| QA-FILTER-01 | `LinErpListFilterBar` · 5 fields 1:1 `incident-filter-bar.md` · **0** ErpListHeaderFilters / LinListFilterField | **PASS** |
| QA-CFG-01 | `LinCatalogUiSchemaEditorModal` kind=`incidents` · **0** `configHint` | **PASS** (code) |
| QA-FORM-01 | Slideout footer-only · `data-form-cols=2` · View readOnly display | **PASS** (runtime QA-20 + code) |
| QA-LKP-01 | SearchInput road-route · Dropdown 6 types | **PASS** (UI) · **PARTIAL** live catalog — see GAP |
| QA-VIEW-01 | View mode readOnly · badge VN (Thêm/Sửa/Xem) · **0** CREATE/EDIT chrome | **PASS** (code) |
| QA-LEAVE-01 | `LeaveConfirmModal` · **0** `window.alert`/`confirm`/`prompt` on Incident pages | **PASS** |
| QA-HIST-01 | `LinCatalogHistoryModal` + `useCatalogHistoryModal` | **PASS** (code) |
| QA-ACT-01 | Delete confirm + assign/close + GiaoViecModal | **PASS** (code · FormType CLOSED) |
| QA-API-01 | FE BASE `/incident/incidents` via BFF · list **200** | **PASS** |
| QA-BE-01 | API `GET …/incidents/init-data` after docker rebuild | **PASS** HTTP 200 |
| QA-BFF-01 | BFF `GET web-bff/…/incidents/init-data` | **FAIL** HTTP **404** · not in swagger · **GAP-QA-BFF-INIT-01** |
| QA-DEMO-01 | **0** demo-json SSOT chrome · badge ≠ `CREATE` | **PASS** (runtime) |
| QA-BUILD-01 | MFE `yarn build` (Dev prior `task_3ad0be44`) | **PASS** (cite implement) |

---

## T-QA-* scenarios

### T-QA-FILTER-01

| ID | Scenario | Expect | Result |
|----|----------|--------|--------|
| QA-F-01 | Zone B `LinErpListFilterBar` | search · status · severity · routeName · incidentType + 🔍 | **PASS** (S0/S1) |
| QA-F-02 | Layout V1–V5 | title trái · inputs cụm phải · **0** stack ErpListHeaderFilters | **PASS** |
| QA-F-03 | Apply filter → page=1 | status «Mới» refresh | **PASS** (S1) |
| QA-F-04 | Types from init-data | 6 options (Ổ gà…Khác) | **PASS** UI (fallback when BFF init 404) |

### T-QA-FORM-01

| ID | Scenario | Expect | Result |
|----|----------|--------|--------|
| QA-FM-01 | `?form=create` | Slideout · z2 2-col · footer Hủy/Lưu | **PASS** (QA-20) |
| QA-FM-02 | Required fields | title · route · type · status · requestedAt * | **PASS** (code + UI) |
| QA-FM-03 | LKP route | SearchInput road-route | **PASS** (code) |
| QA-FM-04 | Leave dirty | `LeaveConfirmModal` | **PASS** (code) |

### T-QA-CRUD-01 (re-smoke)

| ID | Scenario | Expect | Result |
|----|----------|--------|--------|
| QA-20 | FormType ACT inventory | toolbar + row menu wired | **PASS** (code + QA-20 shot) |
| QA-21…28 | Create/Edit/View/Delete/Assign/Close/deep-link | prior FormType CLOSED | **PASS** (code re-smoke · **cấm** re-open gaps) |

---

## Gaps

| ID | Severity | Note | Block complete? |
|----|----------|------|-----------------|
| **GAP-QA-BFF-INIT-01** | **P1** | Source `IncidentsBffController.GetInitData` + DLL strings present · live BFF **404** · swagger **missing** `/incidents/init-data` (Asset sibling `init-data` **200**) · FE falls back `FALLBACK_INIT_DATA` | **YES** — T-BFF-01δ / T-BE-INIT live via BFF |
| GAP-QA-PKT-URL-01 | info | Packet `--url=…/incident` rejected · STATUS `route_keep` `/su-co` | No |
| GAP-QA-E2E-PW-01 | info | Playwright headless_shell install hung · capture used Chromium `executablePath` fallback · same contract as `yarn e2e-qa` | No |
| GAP-INC-ORG-01 | defer | org-unit filter P2 | No |
| GAP-INC-MAP-01 | defer | Kind F map P2 | No |

---

## Build / VERIFY GATE

| Layer | Command | Result |
|-------|---------|--------|
| MFE build | `yarn build` @ Field (Dev prior) | **PASS** |
| BE API | `dotnet build` + docker rebuild `linm-rmms-api` | **PASS** · init-data **200** |
| BE BFF | docker rebuild `--no-cache` `linm-rmms-bff` + hot-swap Release DLL | **FAIL** init-data **404** |
| `yarn start:std` | port **9304** | **PASS** |
| E2E PNG | S0 · S1 · QA-20 distinct | **PASS** · manifest `ok:true` |

---

## Verdict

| Area | Result |
|------|--------|
| UI list/filter/form e2e | **PASS** |
| API init-data | **PASS** |
| BFF init-data (FE path) | **FAIL** · **GAP-QA-BFF-INIT-01** |
| **Overall** | **FAIL** |

---

## Handoff → Dev (`qa_fail_rollback`)

| Field | Value |
|-------|-------|
| verdict | **FAIL** |
| Next | board **`qa_fail_rollback`** · Dev plan + `qa_fix_plan` · fix BFF `init-data` registration / route discovery |
| phase | **`qa`** · status **`blocked`** · **cấm** `completed` / `phase=done` |
| Evidence | PNG + manifest under `qa/screens/` · API 200 vs BFF 404 |
| Reproduce | `curl http://localhost:5201/web-bff/api/v1/incident/incidents/init-data` → 404 · compare Asset init-data 200 |

### Suggested Dev fix plan (không auto-fix)

1. Confirm `IncidentsBffController` action `GetInitData` appears in swagger after host restart.
2. Align naming with Asset (`InitData`) if convention strips `Get*` (hypothesis).
3. Clear BuildKit msbuild cache `linm-rmms-msbuild` if stale Release DLL suspected.
4. Re-run `/agent-qa` e2e after BFF **200**.

---

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-qa |
| skillVersion | 2026.08.25.02 |
| schemaVersion | qldb-workflow-skill-v1 |
| workflowVersion | 2026.08.25.02 |
| rulesVersion | 2026.08.28.4 |
| generatedAt | 2026-08-29T03:58:00.000Z |
| versionGate | recheck_new |
| taskId | `task_c7ae2881` |
| contentHashPriorDataAnaly | sha256:adf95ccc3f97b05abb02eb1332959aa4525025c55d876bac9ce18f1a4b003577 |

---
<!-- Version meta: skillId=agent-qa skillVersion=2026.08.25.02 schemaVersion=qldb-workflow-skill-v1 workflowVersion=2026.08.25.02 rulesVersion=2026.08.28.4 versionGate=recheck_new taskId=task_c7ae2881 -->
