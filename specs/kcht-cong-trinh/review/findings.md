# Review findings — kcht-cong-trinh

> Status: **done**  
> Mode: `review_only` (autopilot · roleOnly=`review`)  
> reviewHash: `sha256:kcht-rev-task_10be583d-20260827` · rulesVersion: `2026.08.25.4`

| Field | Value |
|-------|-------|
| feature | `kcht-cong-trinh` |
| this role | `review` · `/agent-review` |
| status | **done** · **approve** |
| review_confirm | **approve** (autoApprove=ON · `task_10be583d`) |
| taskId | `task_10be583d` |
| autoApprove | ON → agent tự confirm gate |
| packKind | `list` · Kind B A–D+F + full-page 4 tab · Config **FULL** |
| prior · qa | **`done`/`PASS`** · `qa/scenarios.md` · S0/S1/QA-20 · `task_d1044158` |
| prior · dev | `done`/`confirmed` · `implement/kcht-cong-trinh.md` · ssot_rereview PASS · `task_40fed195` |
| prior · team_lead | `done` · `task/kcht-cong-trinh.md` · `task_ed77c1b0` |
| prior · sa | `done` · `be/solution-discovery.md` · `task_dd7ab2e1` |
| prior · design | `done` · `ui/design.md` · `task_64fb2fd7` |
| prior · po | `done` · `po/requirement.md` · `task_3b4ed0d9` |
| prior · data_analy | `done` · `specs/_data-analy/features/kcht-cong-trinh-control-hint.md` · `kcht-cong-trinh-real-data.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Contract` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · Contract widen · `api/v1/kcht-ct/projects` · ui-schema `kcht-projects` · **cấm ERP.*** |
| mfeStdRoute | `/kcht-cong-trinh` |
| mfeStdUrl | `http://localhost:9312/kcht-cong-trinh` (runtime · QA-STD-01) |
| reviewedAt | `2026-08-27T01:45:00.000Z` |
| method | live code SSOT re-review + prior QA screens/manifest · **no** yarn build/e2e/start:std (roleOnly=review) |
| skillVersion | `2026.08.21.01` |
| schemaVersion | `qldb-workflow-skill-v1` |
| workflowVersion | `2026.08.21.01` |
| rulesVersion | `2026.08.25.4` |
| versionGate | `ok` · keep_current (autopilot · no AskQuestion) |

## Scope

| Surface | Repo / path |
|---------|-------------|
| List Kind B | `KchtProjectListPage.tsx` · `mfeStdUrl` |
| Form full-page 4 tab | `KchtProjectFormPage.tsx` · `/tao-moi` · `/:id` |
| Handoff HĐ | `ContractFormPage.tsx` · `from=kcht&projectId=` |
| Config FULL | `LinCatalogUiSchemaEditorModal` · kind `kcht-projects` |
| BE / BFF | `KchtProjectsController` · `KchtProjectsBffController` proxy-only |
| QA evidence | `specs/kcht-cong-trinh/qa/screens/` · `S0`/`S1`/`QA-20` · `manifest.json` `ok:true` |

## Verdict

**APPROVE** · `review_confirm=approve` · pipeline **closed**.

Không P0. Dev Wave 1 PH1 shipped + QA e2e PASS. Chỉ còn P1/P2 accept/defer đã ghi STATUS/QA.

## Live SSOT re-review

| # | Check | Live | Verdict |
|---|-------|------|---------|
| 1 | 1× `LinPageLayout` kind=catalog · **cấm** nested `CatalogListShell` | 1× layout · title «Công trình KCHT» · `data-testid=kcht-project-list-page` | **PASS** |
| 2 | `LinCatalogDataGrid` + `buildDynamicGridColumns` | grid + schema-driven columns | **PASS** |
| 3 | Footer `LinCatalogListPagination` only · pageSize 50/100/200/500 | pager only · no footerPagination/pageSizeBar | **PASS** |
| 4 | Flex + skeleton / `useServerPagedListLoading` | present | **PASS** |
| 5 | Zone F **`LinCatalogUiSchemaEditorModal`** · **cấm** `configHint` / `LinListTableConfigModal` | modal wired · **0** `configHint` / `LinListTableConfigModal` in KCHT pages | **PASS** |
| 6 | `useCatalogUiSchema('kcht-projects')` · `CATALOG_KIND` | `kcht-projects` | **PASS** |
| 7 | BE `CatalogUiSchemaRegistry` + Seed `KchtProjects()` | Registry + seed present | **PASS** |
| 8 | Zone B 8 filter · SearchText + SearchInput · **cấm** KPI strip PH1 | search + loại · tuyến · tỉnh · ĐV · Ban · NT · TT · **0** KPI | **PASS** |
| 9 | Routes `/kcht-cong-trinh` · `/tao-moi` · `/:id` | `index.tsx` + `devRoutes.ts` | **PASS** |
| 10 | Form 4 tab index 0–3 · `data-testid=kcht-form-tabs` | Chung · Quyết định · Hợp đồng · Hồ sơ file | **PASS** |
| 11 | View `<dl>` · `LeaveConfirmModal` · Lin `Modal` confirm · **cấm** `window.confirm` | ViewItem `<dl>` · leave · delete Modal · **0** window.confirm on KCHT pages | **PASS** |
| 12 | `LinCatalogHistoryModal` · HISTORY_DOC_TYPE `kcht-project` | wired | **PASS** |
| 13 | FE BASE `/kcht-ct/projects` · BE `api/v1/kcht-ct/projects` · BFF proxy QueryString · **cấm ERP.*** · **cấm** `api/v1/rmms/*` | endpoint + BFF forward · **0** ERP.*/rmms | **PASS** |
| 14 | Handoff `/hd-ns/:id?from=kcht&projectId=` read-only | ContractFormPage `fromKcht` → view · back to CT | **PASS** |
| 15 | Soft-delete + XCO get_only on GET by id | `IsActive=false` · `ForbiddenAccessException` path | **PASS** |
| 16 | Prior QA e2e | `qa/scenarios.md` **PASS** · manifest `ok:true` · S0/S1/QA-20 | **PASS gate** |
| 17 | End-user chrome · **cấm** GOVOne / Kind/GAP labels on list | Title «Công trình KCHT» · empty «Chưa có công trình» | **PASS** (QA-CHROME/DEMO) |

## Findings

| ID | Class | Sev | Status | Where | Note / Fix |
|----|-------|-----|--------|-------|------------|
| R-CFG-01 | ui-fn | P0 | **closed** | Zone F | Config FULL · `LinCatalogUiSchemaEditorModal` · kind `kcht-projects` |
| R-CFG-02 | ui-fn | P0 | **closed** | columns | `buildDynamicGridColumns` + `useCatalogUiSchema` |
| R-CFG-03 | be-fn | P0 | **closed** | CatalogUiSchema | seed/registry `kcht-projects` |
| R-QA-01 | process | P0 | **closed** | QA gate | `task_d1044158` PASS · S0/S1/QA-20 · manifest ok |
| R-LIST-01 | ui-fn | P0 | **closed** | list shell | A–D+F · 8 filter · pager · no KPI |
| R-FORM-01 | ui-fn | P0 | **closed** | form | 4 tab · view `<dl>` · leave · Lin confirm |
| R-PATH-01 | be-fn | — | **closed** | domain | Contract · `kcht-ct/projects` · no ERP.* |
| R-BFF-01 | be-fn | — | **closed** | BFF | proxy-only · QueryString forward |
| R-HANDOFF-01 | ui-fn | — | **closed** | `/hd-ns` | `from=kcht` read-only |
| R-STD-PORT | process | P1 | **accept** | STATUS/docs | Claim `:9301` stale · runtime **9312** (QA-STD-01) — STATUS corrected this role |
| R-FILE-01 | ui-fn | P1 | **accept** | Tab File | Presign UI stub · button copy còn «stub» · API bind ready · GAP-KCT-FILE-P1 |
| R-HD-01 | ui-fn | P1 | **accept** | Tab HĐ | list/unlink/open · create+link UI minimal · GAP-KCT-HD-UI-P1 |
| R-CTX-01 | docs | P1 | **accept** | DOMAIN-MAP | Feature slug `kcht-cong-trinh` chưa có row (Contract widen) — docs follow-up |
| R-S-01 | security | P2 | **accept** | Controller | `[RequirePermission]` TODO when CommonLib ready |
| R-OWNER-01 | product | P2 | **defer** | ownerUserId | Integration users picker · GAP-KCT-OWNER-P2 |
| R-PH2 | product | P2 | **defer** | PH2–PH5 | đoạn tuyến · tiến độ · giải ngân · BC — out of wave 1 |

**P0 open:** 0.

## Query (`/review-query`)

- List: server page via `kchtProjectService.getList` · 8 filters + page/pageSize — no FE N+1 on grid.
- Lookups: enum in-memory + Integration SearchInput (road/org/partner) · province FE static P1 — aligned SA.
- Detail GET: include decisions/contracts/attachments · XCO get_only — live.
- Child HĐ: junction API link/unlink · **cấm** delete contract on unlink — live.
- Attachments: metadata bind API · presign UI partial P1 — accepted.
- **cấm ERP.*** / `api/v1/rmms/*` — verified FE+BE KCHT surfaces.

## Security

- FE: no secrets/token in `kchtProject` services · shared `apiClient`.
- BE: tenant `KchtProjectEntity` · soft-delete · GET-by-id XCO claim path.
- `[RequirePermission]` still TODO comments — **P2 accept** (OUT pack / STATUS known).
- Permissions FE stub `kcht.projects.*` — local gate OK P1.
- **cấm ERP.*** paths — verified.

## UI / BE function

- CRUD list + create/edit/view + delete + history + schema config — QA **PASS**.
- Form 4 tab: Chung save · QĐ inline grid · HĐ list/unlink/handoff · File metadata — wave 1 DoD.
- Leave dirty confirm · no `window.confirm` on KCHT pages.
- Build cite prior: MFE `yarn build` PASS (Dev/QA) · BE `dotnet build` PASS (Dev) — **not re-run** this role (VERIFY GATE review).

## Task gate

| Task | Result |
|------|--------|
| T-CTX-01 | **PARTIAL** — context ok · DOMAIN-MAP row missing → R-CTX-01 accept |
| T-PERM-KCT-01 | **PASS** (FE stub · BE RequirePermission OUT) |
| T-UI-LIST-01 A–D+F | **PASS** |
| T-UI-CFG-01 / Config FULL | **PASS** |
| T-UI-FORM-01 / tabs 0–3 | **PASS** |
| T-UI-TAB-DECISION / CONTRACT / FILE | **PASS** / **PARTIAL P1** / **PARTIAL P1** |
| T-UI-HANDOFF-01 | **PASS** |
| T-UI-ACT / LEAVE / HIST | **PASS** |
| T-BE-KCT-01… / T-BFF / T-MIG | **PASS** · no ERP |
| T-BE-SCHEMA-KCT-01 | **PASS** |
| T-QA e2e S0/S1/QA-20 | **PASS** |

## VERIFY GATE (roleOnly=review)

| Check | Result |
|-------|--------|
| Artifact `review/findings.md` | **PASS** · done · approve |
| STATUS review step | **PASS** (updated) |
| `yarn build` / e2e / `start:std` | **skipped** (cấm role này) |
| Step 4b / migration | **skipped** |
| ERP.* | **none** |

## Confirm (autoApprove=ON)

| Gate | Decision |
|------|----------|
| review | **approve** · pipeline **closed** · no Dev retry |

## Handoff

| Field | Value |
|-------|-------|
| next | **none** · feature `kcht-cong-trinh` review done · phase **done** |
| review_confirm | **approve** |
| open P1/P2 | File presign UI · Tab HĐ create UI · DOMAIN-MAP row · RequirePermission · ownerUserId · PH2–PH5 |
| evidence | `qa/screens/S0.png` · `S1.png` · `QA-20.png` · live `KchtProjectListPage.tsx` / `KchtProjectFormPage.tsx` |
| BE | `Linm.RMMS.WebService` · Contract · **cấm ERP.*** |
| taskId | `task_10be583d` |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-review |
| skillVersion | 2026.08.21.01 |
| schemaVersion | qldb-workflow-skill-v1 |
| workflowVersion | 2026.08.21.01 |
| rulesVersion | 2026.08.25.4 |
| generatedAt | 2026-08-27T01:45:00.000Z |
| versionGate | ok |
| taskId | `task_10be583d` |
| contentHashPrior | sha256:77c91b35d170a15297c00fd9219f11fbe1f9e51bcab589c0c9b1d7283c702bbe |

---
<!-- Version meta: skillId=agent-review skillVersion=2026.08.21.01 schemaVersion=qldb-workflow-skill-v1 workflowVersion=2026.08.21.01 rulesVersion=2026.08.25.4 versionGate=ok -->
