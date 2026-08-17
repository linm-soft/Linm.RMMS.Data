# QA scenarios — camera-connect

| Field | Value |
|-------|-------|
| feature | `camera-connect` |
| this role | `qa` · `/agent-qa` |
| status | **pass** (static + build gates · Autopilot) |
| pack | T-QA-CRUD-01 · QA-40/41 · View `<dl>` · LKP Select · UX filterMax |
| mfeStdUrl | `http://localhost:9316/camera` |
| taskId | `task_03f79795` |
| prior · dev | `confirmed` · `implement/camera-connect.md` (`task_ba4221ae`) |
| autoApprove | ON |
| updatedAt | `2026-08-16T04:00:00.000Z` |
| method | code audit live Camera MFE + `yarn typecheck` + `yarn build` · runtime browser smoke **optional** (start:std not required for gate) |

## Delta this turn (Dev GAP-DES-VIEW-DL + LKP + UX)

| # | Scenario | Expect | Result |
|---|----------|--------|--------|
| QA-42 | View Z1–Z2 | `?mode=view` → `<dl data-testid=rmms-camera-form-view-dl>` · Pass mask · **cấm** Input readOnly xám | **PASS** (code) |
| QA-43 | Form lookups | Model + Protocol = Lin `Select` · **cấm** native `<select>` | **PASS** (code) |
| QA-44 | List UX | **cấm** `filterMaxWidthPx` trên `LinPageLayout` + `ErpListHeaderFilters` | **PASS** (code) |
| QA-45 | View actions | Footer Đóng / Sao chép / Sửa · «Tải events» enabled (Z3/Z4 keep) | **PASS** (code) |
| QA-46 | Build | `yarn typecheck` + `yarn build` 0 errors | **PASS** `2026-08-16T04:00:00.000Z` |

## Smoke — Final MFE

| # | Step | Expect | Result |
|---|------|--------|--------|
| QA-01 | Open `/camera` | 1× `LinPageLayout` kind=catalog · grid · footer pager · **cấm** nested CatalogListShell | **PASS** (code) |
| QA-02 | Search | Type mã/IP · `SearchTextInput` · page reset 1 | **PASS** (code) |
| QA-03 | Online filter | Lin `Select` Online/Offline · page=1 | **PASS** (code) |
| QA-10 | Create | +Thêm → `/camera/new` · fill · footer Lưu → list | **PASS** (code) |
| QA-11 | Edit | Row menu Sửa → form · Lưu PUT | **PASS** (code) |
| QA-12 | View | Row menu Xem · `?mode=view` · `<dl>` · Đóng/Sửa/Sao chép footer | **PASS** (code) |
| QA-13 | Copy | Row menu Sao chép → `/camera/new?copyFrom=` | **PASS** (code) |
| QA-14 | Delete toolbar | Select row → Delete confirm → soft delete | **PASS** (code) |
| QA-15 | Delete row menu | case `delete` | **PASS** (code) |
| QA-20 | FormType ACT | T-UI-ACT-01 inventory · all actions wired | **PASS** |
| QA-21 | BE CRUD | list/get/create/update/delete + BFF · **cấm ERP.*** · **cấm** `api/v1/rmms/*` | **PASS** (prior Dev) |
| QA-30 | Connect (prior) | Test kết nối · snapshot JPEG | **PASS** (lab prior · OUT live gateway) |
| QA-40 | Schema config | Cog → `LinCatalogUiSchemaEditorModal` kind=`camera-devices` · title «Cấu hình hiển thị danh mục» | **PASS** (code) |
| QA-41 | Dynamic columns | `columns={buildDynamicGridColumns}` · **cấm** leftover grid `const columns` / `configHint` / `LinListTableConfigModal` | **PASS** (code) |

## List A–D + F

| Zone | Scenario | Result |
|------|----------|--------|
| A | Title «Kết nối camera ITS» · `fa-video` · **cấm** Thêm trên A | **PASS** |
| B | catalogToolbar refresh · history stub · schema config · create · delete (perm) · SearchTextInput + Select Online | **PASS** |
| C | `LinCatalogDataGrid` · `buildDynamicGridColumns` · `tableConfig` resize | **PASS** |
| D | `LinCatalogListPagination` · **cấm** footerPagination / pageSizeBar | **PASS** |
| F | `LinCatalogUiSchemaEditorModal` · **cấm** `configHint` | **PASS** |

## T-QA-CRUD-01

| ID | Scenario | Expect | Result |
|----|----------|--------|--------|
| QA-20 | FormType ACT | T-UI-ACT-01 · row menu view/edit/copy/delete/history | **PASS** |
| QA-21 | Create | `/camera/new` → POST `/cameras` | **PASS** |
| QA-22 | Edit | `/camera/:id` → PUT | **PASS** |
| QA-23 | View | `/:id?mode=view` · `<dl>` · Sửa / Sao chép / Đóng | **PASS** |
| QA-24 | Delete row menu | confirm → DELETE | **PASS** |
| QA-25 | Delete toolbar | activeRow → Delete | **PASS** |
| QA-27 | T-UI-LKP-01 | Lin `Select` model (`GET /cameras/models`) + protocol enum + list online | **PASS** |
| QA-28 | T-UI-PROD-01 | no Resource/Slideout/View=readOnly Input | **PASS** |
| QA-29 | T-UI-UX-01 | no `filterMaxWidthPx` | **PASS** |
| QA-30 | T-UI-CONFIG-01 | schema editor + `useCatalogUiSchema('camera-devices')` | **PASS** |
| QA-32 | T-PERM-01 | FE `camera.devices.*` · BE stub OUT | **PASS** (FE) |
| QA-33 | Route BASE | FE BFF `api/v1/cameras` · **cấm** `/rmms/` · **cấm ERP.*** | **PASS** |
| QA-35 | Build | FE `yarn build` webpack 5.109.2 · 3 size warnings | **PASS** |

## Negative

| # | Case | Expect | Result |
|---|------|--------|--------|
| N1 | Delete không perm | toast / button ẩn | **PASS** (gate) |
| N2 | View Test/Live | disabled (`busy \|\| readOnly`) | **PASS** (code) |
| N3 | View Tải events | enabled | **PASS** (code) |

## SSOT re-audit (QA)

| # | Check | Verdict |
|---|-------|---------|
| 1 | 1× LinPageLayout catalog | **PASS** |
| 2 | LinCatalogDataGrid + resize ON | **PASS** |
| 3 | Footer LinCatalogListPagination | **PASS** |
| 4 | Flex + skeleton 8 | **PASS** |
| 5 | Grid schema-driven · leftover `const columns` / `LinCatalogDataColumn[]` on page | **PASS** (none; helper in `bootstrapCatalogUiSchema`) |
| 6 | View `<dl>` | **PASS** `rmms-camera-form-view-dl` |
| 7 | Lin Select lookups | **PASS** |
| 8 | cấm `filterMaxWidthPx` | **PASS** |

## Gaps / debt (không block QA)

| ID | Severity | Note |
|----|----------|------|
| GAP-DES-VIEW-DL | — | **CLOSED** Dev `task_ba4221ae` |
| GAP-TL-LKP-SELECT-01 | — | **CLOSED** |
| GAP-TL-UX-FILTER-MAX-01 | — | **CLOSED** |
| GAP-P2-CC-06 / CONFIG-PLACEHOLDER / GRID-SCHEMA-BOOTSTRAP | — | **CLOSED** prior |
| P2 live gateway | OUT pack | MediaMTX · `live_gateway_confirm` pending |
| SD-AUTH | OUT pack | `[RequirePermission]` CommonLib chưa mount |
| History API | OUT pack | client stub |

## Build gate

```
yarn typecheck (Linm.Web.RMMS.Camera) → PASS
yarn build → PASS (webpack 5.109.2 compiled with 3 size warnings)
BE this role: no API write → dotnet n/a (Dev verify PASS keep)
ERP.* → none
```

## Handoff → Review (`/agent-review`)

| Field | Value |
|-------|-------|
| Next | Review **pending** chain · autoApprove ON · roleOnly=`review` |
| Verdict | **pass** · T-QA-CRUD-01 |
| Artifact | `specs/camera-connect/qa/scenarios.md` |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-qa |
| skillVersion | 2026.08.15.19 |
| schemaVersion | qldb-workflow-skill-v1 |
| workflowVersion | 2026.08.15.19 |
| rulesVersion | 2026.08.15.19 |
| generatedAt | 2026-08-16T04:00:00.000Z |
| versionGate | rechecked |
| version_mismatch_action | recheck_new |
| orchestratorSkillVersion | 2026.08.15.19 |
| devSkillVersion | 2026.08.15.19 |
| teamLeadSkillVersion | 2026.08.15.19 |
| saSkillVersion | 2026.08.15.19 |
| designSkillVersion | 2026.08.15.19 |
| poSkillVersion | 2026.08.15.19 |
| dataAnalySkillVersion | 2026.08.15.19 |
| contentHashPriorDataAnaly | sha256:e76fd3d510a81dbad3ce8b7513652bb48d47eb2933520d75ef953acd1084681a |

---
<!-- Version meta: skillVersion=2026.08.15.19 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.08.15.19 · versionGate=rechecked · skillId=agent-qa -->
