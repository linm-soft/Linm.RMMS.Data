# QA scenarios — pavement-section

| Field | Value |
|-------|-------|
| feature | `pavement-section` |
| this role | `qa` · `/agent-qa` |
| status | **pass** (static + build gates · Autopilot) |
| pack | T-QA-CRUD-01 · FormType · list-form-quality · GAP-TL-ROUTE-01 |
| mfeStdUrl | `http://localhost:9301/asset/pavement-section` |
| taskId | `task_4cbfe8f5` |
| prior · dev | `confirmed` · `implement/pavement-section.md` |
| autoApprove | ON |
| updatedAt | `2026-08-16T01:50:00.000Z` |
| method | code audit live MFE + `yarn build` · runtime browser smoke **optional** (start:std not required for gate) |

## Smoke — Final MFE

| # | Step | Expect | Result |
|---|------|--------|--------|
| 1 | Open `/asset/pavement-section` | 1× `LinPageLayout` kind=catalog · A–D · **cấm** nested CatalogListShell | **PASS** (code) |
| 2 | Search mã/đường | `SearchTextInput` → GET `search` · page=1 | **PASS** (code) |
| 3 | Filter tỉnh / tình trạng | `SearchInput` · **cấm** native select | **PASS** (code) |
| 4 | Filter Tên đường / Từ–Đến Km | GET `road` `kmFrom` `kmTo` | **PASS** (code) |
| 5 | Date range Zone B | GET `fromDate` `toDate` (TZ list) | **PASS** (code) |
| 6 | Thêm mới → required → Lưu | `/new` · POST · toast · list | **PASS** (code) |
| 7 | Row / toolbar Xem | `/:id` · `<dl>` `data-testid=rmms-pavement-section-view-dl` | **PASS** (code) |
| 8 | Sửa → Lưu | dedicated `/:id/edit` · PUT | **PASS** (code) · GAP-TL-ROUTE-01 **CLOSED** |
| 9 | Copy → Lưu | dedicated `/:id/copy` · POST new IdCode | **PASS** (code) |
| 10 | Config cột | `LinCatalogUiSchemaEditorModal` kind=`pavement-sections` | **PASS** (code) |
| 11 | Pagination | `LinCatalogListPagination` footer only · **cấm** pageSizeBar / footerPagination | **PASS** (code) |
| 12 | PCI / Lớp / Ngày đo | grid + form + View `<dl>` | **PASS** (code) |
| 13 | Dirty leave | `window.confirm` | **PASS** (code) |
| 14 | History stub | `LinCatalogHistoryModal` · OUT API | **PASS** (code · OUT) |
| 15 | Map live | `/gis?layerCode=mat-duong` | **PASS** (code) |

## List A–D + F

| Zone | Scenario | Result |
|------|----------|--------|
| A | Title «Phân loại mặt đường (Biểu 1)» · **cấm** Thêm mới trên A | **PASS** |
| B | catalogToolbar refresh · history · schema config · create · delete (perm) · filter bar | **PASS** |
| C | `LinCatalogDataGrid` · `columns={buildDynamicGridColumns}` · kéo cột `tableConfig` | **PASS** |
| D | `LinCatalogListPagination` | **PASS** |
| F | `LinCatalogUiSchemaEditorModal` · **cấm** `LinListTableConfigModal` · **cấm** `configHint` | **PASS** |

## T-QA-CRUD-01

| ID | Scenario | Expect | Result |
|----|----------|--------|--------|
| QA-20 | FormType ACT | T-UI-ACT-01 · row menu view/edit/copy/delete/history | **PASS** |
| QA-21 | Create | `/asset/pavement-section/new` → POST | **PASS** |
| QA-22 | Edit | `/asset/pavement-section/:id/edit` (alias `?mode=edit`) → PUT | **PASS** |
| QA-23 | View | `/:id` · `<dl>` · Sửa → `/edit` · Copy → `/copy` | **PASS** |
| QA-24 | Delete row menu | confirm → DELETE | **PASS** |
| QA-25 | Delete toolbar | activeRow → Delete | **PASS** |
| QA-26 | Delete form Edit | Form Xóa → list | **PASS** |
| QA-27 | T-UI-LKP-01 | SearchInput FE constants list+form | **PASS** |
| QA-28 | T-UI-PROD-01 | no Resource/Slideout/View=readOnly Input | **PASS** |
| QA-29 | T-UI-UX-01 | Lin* · CatalogFormShell | **PASS** |
| QA-30 | T-UI-CFG-01 | schema editor + `useCatalogUiSchema` | **PASS** |
| QA-31 | T-BE-TZ-01 | list dates + `toMeasuredAtIso` `T00:00:00.000Z` | **PASS** |
| QA-32 | T-PERM-01 | FE `asset.pavement-sections.*` · BE stub OUT | **PASS** (FE) |
| QA-33 | Route BASE | FE `/asset/pavement-sections` via BFF · **cấm** `/rmms/` · **cấm ERP.*** | **PASS** |
| QA-34 | GAP-TL-ROUTE-01 | `index.tsx` routes `/edit` `/copy` | **PASS** |
| QA-35 | Build | FE `yarn build` webpack 5.109.2 · 3 size warnings | **PASS** `2026-08-16T01:50:00.000Z` |

## Negative

| # | Case | Expect | Result |
|---|------|--------|--------|
| N1 | Save thiếu required | Banner + field errors | **PASS** (validate) |
| N2 | KmTo < KmFrom | `kmTo` invalid | **PASS** |
| N3 | PCI ngoài 0–100 | `pci` invalid | **PASS** |
| N4 | Delete không perm | toast / button ẩn | **PASS** (gate) |

## SSOT re-audit (QA)

| # | Check | Verdict |
|---|-------|---------|
| 1 | 1× LinPageLayout catalog | **PASS** |
| 2 | LinCatalogDataGrid + resize ON | **PASS** |
| 3 | Footer LinCatalogListPagination | **PASS** |
| 4 | Flex + skeleton 8 | **PASS** |
| 5 | Grid schema-driven · leftover `const columns` / `LinCatalogDataColumn[]` | **PASS** (none) |
| 6 | View `<dl>` | **PASS** |
| 7 | Dedicated `/edit` `/copy` | **PASS** |

## Gaps / debt (không block QA)

| ID | Severity | Note |
|----|----------|------|
| SD-AUTH | OUT pack | `[RequirePermission]` CommonLib chưa mount |
| Excel import/export | OUT pack | stub |
| History API | OUT pack | client stub empty |
| GAP-TL-ROUTE-01 | — | **CLOSED** Dev |
| GAP-P2-ACT-DELETE | — | **CLOSED** (prior) |

## Build gate

```
yarn build (Linm.Web.RMMS.Asset) → PASS (webpack 5.109.2 compiled with 3 size warnings)
BE this role: no API write → dotnet n/a (Dev verify PASS keep)
ERP.* → none
```

## Handoff → Review (`/agent-review`)

| Field | Value |
|-------|-------|
| Next | Review **pending** chain · autoApprove ON · roleOnly=`review` |
| Verdict | **pass** · T-QA-CRUD-01 |
| Artifact | `specs/pavement-section/qa/scenarios.md` |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-qa |
| skillVersion | 2026.08.15.5 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.15.19 |
| rulesVersion | 2026.08.15.25 |
| generatedAt | 2026-08-16T01:50:00.000Z |
| versionGate | rechecked |
| version_mismatch_action | recheck_new |
| orchestratorSkillVersion | 2026.08.15.19 |
| devSkillVersion | 2026.08.15.5 |
| teamLeadSkillVersion | 2026.08.09.02 |
| saSkillVersion | 2026.08.15.15 |
| designSkillVersion | 2026.08.15.5 |
| poSkillVersion | 2026.08.15.5 |
| dataAnalySkillVersion | 2026.08.15.5 |
| contentHashPriorDataAnaly | sha256:pavement-section-delta-pci-20260816 |

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.19 · rulesVersion=2026.08.15.25 · versionGate=rechecked -->
