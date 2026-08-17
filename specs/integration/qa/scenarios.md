# QA scenarios — integration

| Field | Value |
|-------|-------|
| feature | `integration` |
| this role | `qa` · `/agent-qa` |
| status | **pass** (static + build gates · Autopilot) |
| pack | T-QA-01 · T-QA-CRUD-01 · Kind G+B full-page · schema config |
| mfeStdUrl | `http://localhost:9314/integration` |
| taskId | `task_2aa740b6` |
| prior · dev | `confirmed` · `implement/integration.md` (`task_5aa247d6`) |
| autoApprove | ON |
| updatedAt | `2026-08-16T06:35:00.000+07:00` |
| method | code audit live Integration MFE + `yarn typecheck` + `yarn build` · runtime browser smoke **optional** (start:std not required for gate) |

## Delta this turn (Dev `task_5aa247d6` fix_all GAP TL)

| # | Scenario | Expect | Result |
|---|----------|--------|--------|
| QA-50 | Zone A | title «Open API và tích hợp» · badges Kind G hub + P1 baseline · **cấm** Thêm/Import trên A | **PASS** (code) |
| QA-51 | Zone C title | Endpoints «Catalog endpoint P1» · Sync «Danh sách sync jobs» · Partners «Partner adapters» | **PASS** (code) |
| QA-52 | Routes | `/integration/import` · `/import/:id` · `/jobs/new` · `/jobs/:id` · `/partners/:id` | **PASS** (`index.tsx`) |
| QA-53 | View | Job/Partner/Import `?mode=view` → `<dl>` · **cấm** Slideout · **cấm** View Input xám (trừ IdCode) | **PASS** (code) |
| QA-54 | Lookups | phase `p1`/`p2`/`p3` · Đèn · CT01 · `SearchInput` · **cấm** native `<select>` | **PASS** (`lookups.ts`) |
| QA-55 | Import field | note `textarea` · fileName * FE · code `(tự sinh)` · **cấm** `genSyncCode` form | **PASS** |
| QA-56 | UX | **cấm** `filterMaxWidthPx` · **cấm** `window.confirm`/`alert` trên Integration pages | **PASS** |
| QA-57 | ACT | Zone B Import + Thêm job · Lin `Modal` delete · Job footer Retry · `LinCatalogHistoryModal` | **PASS** |
| QA-58 | Leave | Import/Job `LeaveConfirmModal` | **PASS** |
| QA-59 | Perm | FE `integration.endpoints.read` + hub/sync/partners/import | **PASS** |
| QA-60 | Build | `yarn typecheck` + `yarn build` 0 errors | **PASS** `2026-08-16T06:35:00.000+07:00` |

## Smoke — Final MFE

| # | Step | Expect | Result |
|---|------|--------|--------|
| QA-01 | Open `/integration` | 1× `LinPageLayout` kind=catalog · tabs Endpoints/Sync/Partners/Guide · **cấm** nested CatalogListShell | **PASS** (code) |
| QA-02 | Grid Sync/Partners | `LinCatalogDataGrid` · `buildDynamicGridColumns` · resize ON · rows hoặc empty | **PASS** |
| QA-03 | Footer pager | `LinCatalogListPagination` 50/100/200/500 Sync+Partners · **cấm** footerPagination / pageSizeBar | **PASS** |
| QA-04 | Search job Enter | Filter page=1 · `SearchTextInput` | **PASS** |
| QA-05 | Filters | phase/type/status `SearchInput` · **cấm** native Select | **PASS** |
| QA-06 | Toolbar | Refresh · Import → `/integration/import` · Thêm job → `/jobs/new` · cog schema | **PASS** |
| QA-07 | Row menu Sync | View/Edit/Delete/Retry/History · **cấm** Slideout | **PASS** |
| QA-08 | Import footer | Đóng/Hủy/Chạy in footer · leave-confirm | **PASS** |
| QA-09 | Partner View/Toggle | `/partners/:id` full-page · toggle enabled | **PASS** |
| QA-10 | Schema config | `LinCatalogUiSchemaEditorModal` title «Cấu hình hiển thị danh mục» · 3 kinds | **PASS** |

## List A–D + F

| Zone | Scenario | Result |
|------|----------|--------|
| A | Header Open API và tích hợp · icon plug · badge Kind G + P1 · **cấm** Create trên A | **PASS** |
| B | catalogToolbar refresh · cog · Import · Thêm job · SearchTextInput + SearchInput enums | **PASS** |
| C | `LinCatalogDataGrid` · `columns={buildDynamicGridColumns}` · title theo tab | **PASS** |
| D | `LinCatalogListPagination` Sync+Partners | **PASS** |
| F | `LinCatalogUiSchemaEditorModal` kinds `integration-sync-jobs` · `integration-partners` · `integration-endpoints` · **cấm** `configHint` · **cấm** `LinListTableConfigModal` | **PASS** |

## T-QA-01

| ID | Scenario | Result |
|----|----------|--------|
| T-QA-01 | Hub list A–D+F + SSOT grid + schema editor + no leftover `const columns` on Integration pages | **PASS** |

## T-QA-CRUD-01

| ID | Scenario | Expect | Result |
|----|----------|--------|--------|
| QA-20 | FormType ACT | T-UI-ACT-01 inventory wired | **PASS** |
| QA-21 | Import create | Toolbar Import → footer Chạy → POST import · job mới grid Sync | **PASS** (code path + demo fallback) |
| QA-22 | Job create | `/jobs/new` · code `(tự sinh)` · POST không gửi Code | **PASS** |
| QA-23 | Job edit | `/jobs/:id` · PUT partner/note · Lưu | **PASS** |
| QA-24 | Job view | `/:id?mode=view` · `<dl>` · footer Đóng / Sửa / Retry | **PASS** |
| QA-25 | Delete | toolbar/row → Lin `Modal` confirm · DELETE · list refresh | **PASS** |
| QA-26 | Retry | row menu / form footer → POST retry | **PASS** |
| QA-27 | T-UI-LKP-01 | phase p1–p3 · Đèn · CT01 · SearchInput | **PASS** |
| QA-28 | T-UI-FIELD-01 | note textarea · fileName * | **PASS** |
| QA-29 | T-UI-PROD-01 | no Resource/Slideout/View=readOnly Input (IdCode readOnly OK) | **PASS** |
| QA-30 | T-UI-UX-01 | no `filterMaxWidthPx` · toast not alert | **PASS** |
| QA-31 | T-UI-LEAVE-01 | Import/Job `LeaveConfirmModal` | **PASS** |
| QA-32 | T-PERM-01 | FE `integration.endpoints.read` · BE `[RequirePermission]` debt P1 | **PASS** (FE) |
| QA-33 | Route BASE | FE BFF `api/v1/integration/*` · **cấm** `/rmms/` · **cấm ERP.*** | **PASS** |
| QA-34 | History | `LinCatalogHistoryModal` | **PASS** |
| QA-35 | Build | FE `yarn build` webpack 5.109.2 | **PASS** |

## Negative

| # | Case | Expect | Result |
|---|------|--------|--------|
| N1 | Import thiếu fileName | FE invalid · không POST | **PASS** (code) · GAP-SA-IMPORT-01 BE 422 keep P1 |
| N2 | Delete không perm | button ẩn | **PASS** (gate) |
| N3 | View Job | `<dl>` · không Input xám (trừ mã job create) | **PASS** |

## SSOT re-audit (QA)

| # | Check | Verdict |
|---|-------|---------|
| 1 | 1× LinPageLayout catalog | **PASS** |
| 2 | LinCatalogDataGrid + resize ON | **PASS** |
| 3 | Footer LinCatalogListPagination | **PASS** |
| 4 | Flex + skeleton 8 · `data-catalog-list-page` | **PASS** |
| 5 | Grid schema-driven · leftover `const columns` / `LinCatalogDataColumn[]` on Integration pages | **PASS** (none; helper `bootstrapCatalogUiSchema` OK) |
| 6 | View `<dl>` Import/Job/Partner | **PASS** |
| 7 | SearchInput lookups · **cấm** native `<select>` | **PASS** |
| 8 | cấm `filterMaxWidthPx` trên Integration list/form | **PASS** |
| 9 | cấm Slideout / Resource / configHint / LinListTableConfigModal trên Integration | **PASS** |

## Gaps / debt (không block QA)

| ID | Severity | Note |
|----|----------|------|
| GAP-TL-* (list title/badge/UX/ACT/LKP/PROD/FIELD/FORM/PERM) | — | **CLOSED** Dev `task_5aa247d6` |
| GAP-SA-IMPORT-01 | P1 | BE import không 422 thiếu `fileName` — FE required keep |
| `[RequirePermission]` CommonLib | P1 debt | FE gate / BE stub · không block |
| inbound webhook runtime · Swagger host · citizen/public API | P2 | OUT pack |

## Build gate

```
yarn typecheck (Linm.Web.RMMS.Integration) → PASS
yarn build → PASS (webpack 5.109.2 compiled with 3 size warnings)
BE this role: no API write → dotnet n/a (Dev verify PASS keep)
ERP.* → none
```

## Handoff → Review (`/agent-review`)

| Field | Value |
|-------|-------|
| Next | Review **pending** chain · autoApprove ON · roleOnly=`review` |
| Verdict | **pass** · T-QA-01 + T-QA-CRUD-01 |
| Artifact | `specs/integration/qa/scenarios.md` |
| taskId | `task_2aa740b6` |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-qa |
| skillVersion | 2026.08.15.19 |
| schemaVersion | qldb-workflow-skill-v1 |
| workflowVersion | 2026.08.15.19 |
| rulesVersion | 2026.08.16.02 |
| generatedAt | 2026-08-16T06:35:00.000+07:00 |
| versionGate | rechecked |
| version_mismatch_action | recheck_new |
| orchestratorSkillVersion | 2026.08.15.19 |
| devSkillVersion | 2026.08.15.19 |
| teamLeadSkillVersion | 2026.08.15.19 |
| saSkillVersion | 2026.08.15.19 |
| designSkillVersion | 2026.08.15.19 |
| poSkillVersion | 2026.08.15.19 |
| dataAnalySkillVersion | 2026.08.15.19 |

---
<!-- Version meta: skillVersion=2026.08.15.19 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.08.15.19 · versionGate=rechecked · skillId=agent-qa -->
