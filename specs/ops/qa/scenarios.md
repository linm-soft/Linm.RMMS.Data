# QA scenarios — ops

| Field | Value |
|-------|-------|
| feature | `ops` |
| this role | `qa` · `/agent-qa` |
| status | **pass** (static + build gates · Autopilot) |
| pack | T-QA-CRUD-01 · FormType · list-form-quality · GAP-SA-OPS-SCHEMA |
| mfeStdUrl | `http://localhost:9304/ops` |
| reviewUrl (design only) | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/ops/ui/prototype/ops-list-prototype.html` |
| taskId | `task_e125476d` |
| prior · dev | `confirmed` · `implement/ops.md` |
| autoApprove | ON |
| updatedAt | `2026-08-16T02:28:00.000Z` |
| method | code audit live Field `/ops` + `yarn typecheck` + `yarn build` · runtime browser smoke **optional** (start:std not required for gate) |

## Delta this turn (Dev GAP-SA-OPS-SCHEMA)

| # | Scenario | Expect | Result |
|---|----------|--------|--------|
| S-14 | Form Số CV · Chiều · Trích yếu · Đơn vị | SearchInput chiều/đơn vị · Text số CV · textarea trích yếu | **PASS** (code) |
| S-15 | Default list order | `code` · `documentNumber` · `direction` · `summary` · `orgUnitName` · `title` · `sender` · `recipient` · `priority` · `type` · `status` · `sentAt` | **PASS** FE `uiColumns` + BE `Field.List.Order` |
| S-16 | Filter chiều / đơn vị | SearchInput → GET `?direction=&orgUnitCode=` · page=1 | **PASS** |
| S-17 | Config toolbar | `LinCatalogUiSchemaEditorModal` kind=`ops-inbox` · **cấm** `configHint` · **cấm** `LinListTableConfigModal` | **PASS** |
| S-18 | yarn typecheck + yarn build | 0 errors | **PASS** `2026-08-16T02:28:00.000Z` |

## Smoke — Final MFE

| # | Step | Expect | Result |
|---|------|--------|--------|
| S-01 | Open `/ops` | 1× `LinPageLayout` kind=catalog · title «Chỉ đạo điều hành» · A–D · **cấm** nested CatalogListShell · **cấm** Thêm mới trên A | **PASS** (code) |
| S-02 | Search text apply | `SearchTextInput` → GET `search` · page=1 | **PASS** (code) |
| S-03 | Status / priority / type | `SearchInput` · **cấm** native `<select>` | **PASS** (code) |
| S-04 | Unread toggle | extra bar → `unreadOnly` | **PASS** (code) |
| S-05 | Pagination | `LinCatalogListPagination` footer · 50/100/200/500 · **cấm** footerPagination / pageSizeBar | **PASS** (code) |
| S-06 | Row menu View/Edit/Copy/MarkRead/Assign P2 | `/ops/:id` · `?mode=edit` · copy `/ops/new?copyFrom=` · POST mark-read · assign stub | **PASS** (code) |
| S-07 | Create send / draft | `/ops/new` · POST `/inbox` · IdCode `OPS-*` | **PASS** (code) |
| S-08 | View display | `<dl data-testid=rmms-ops-form-view>` · **cấm** Input readOnly xám | **PASS** (code) |
| S-09 | Dirty leave-confirm | `window.confirm` | **PASS** (code) |
| S-10 | KPI overview | 4 ô `GET /overview` | **PASS** (code) |
| S-11 | Command / nav stubs | alert · **cấm** embed map | **PASS** (code) |
| S-12 | History stub | `LinCatalogHistoryModal` · OUT API | **PASS** (code · OUT) |
| S-13 | No Slideout / Kind D / Resource | `NotificationFormPage` full-page only | **PASS** (code) |

## List A–D + F

| Zone | Scenario | Result |
|------|----------|--------|
| A | Title «Chỉ đạo điều hành» · **cấm** Thêm mới trên A | **PASS** |
| B | catalogToolbar refresh · history · schema config · create · delete (perm) · extra: unread · mark-all-read · export stub · nav Patrol/Gis/Incident · Command P2 | **PASS** |
| B-filter | search · status · priority · type · direction · orgUnitCode | **PASS** |
| C | `LinCatalogDataGrid` · `columns={buildDynamicGridColumns}` · `resizable: true` · unread title class | **PASS** |
| D | `LinCatalogListPagination` | **PASS** |
| F | `LinCatalogUiSchemaEditorModal` · kind=`ops-inbox` · HintText «Cấu hình hiển thị danh mục» · **cấm** leftover `const columns` / `LinCatalogDataColumn` | **PASS** |
| KPI | overview strip 4 ô | **PASS** |

## T-QA-CRUD-01

| ID | Scenario | Expect | Result |
|----|----------|--------|--------|
| QA-20 | FormType ACT | T-UI-ACT-01 inventory wired | **PASS** |
| QA-21 | Create | Toolbar +Tạo → `/ops/new` → POST `/inbox` | **PASS** |
| QA-22 | Edit | `/:id?mode=edit` → GET + PUT | **PASS** |
| QA-23 | View | `/:id` · `<dl>` · Sửa → edit · Copy → `/new?copyFrom=` | **PASS** |
| QA-24 | Delete row menu | confirm → soft DELETE | **PASS** |
| QA-25 | Delete toolbar | `canDelete`/`onDelete` activeRow | **PASS** |
| QA-26 | Mark-read | row → POST `/{id}/mark-read` | **PASS** |
| QA-27 | Mark-all-read | extra bar → POST `/inbox/mark-all-read` | **PASS** |
| QA-28 | T-UI-LKP-01 | SearchInput FE lookups · **cấm** ERP catalog GET | **PASS** |
| QA-29 | T-UI-FIELD-01 | controlHint ↔ DTO OfficialDoc scalars | **PASS** |
| QA-30 | T-UI-PROD-01 | no Resource/Slideout/View=readOnly Input | **PASS** |
| QA-31 | T-UI-UX-01 | Lin* · spacing · **cấm** `filterMaxWidthPx` | **PASS** |
| QA-32 | T-UI-LIST-02 | default column order = Design bootstrap | **PASS** |
| QA-33 | T-PERM-01 | FE `notification.inbox.*` · BE `[RequirePermission]` OUT CommonLib | **PASS** (FE) |
| QA-34 | Route BASE | `/ops` · BFF `api/v1/notification/inbox` · **cấm** `/rmms/` · **cấm ERP.*** · **cấm** domain `Ops` | **PASS** |
| QA-35 | Build | FE `yarn typecheck` + `yarn build` webpack 5.109.2 | **PASS** |

## Negative

| # | Case | Expect | Result |
|---|------|--------|--------|
| N1 | Save thiếu title/body/recipient | Banner + field invalid | **PASS** (validate) |
| N2 | Delete không perm | alert / button ẩn | **PASS** (gate) |
| N3 | API unreachable | `opsStore` fallback (Dev keep) | **PASS** (prior) |

## SSOT re-audit (QA)

| # | Check | Verdict |
|---|-------|---------|
| 1 | 1× LinPageLayout catalog — **cấm** nested CatalogListShell | **PASS** |
| 2 | LinCatalogDataGrid + resize ON | **PASS** |
| 3 | Footer LinCatalogListPagination | **PASS** |
| 4 | Flex + skeleton 8 | **PASS** |
| 5 | Grid schema-driven · leftover static columns | **PASS** (none) |
| 6 | View `<dl>` | **PASS** |
| 7 | GAP-SA-OPS-SCHEMA title sau direction/summary/orgUnitName | **PASS** |

## Gaps / debt (không block QA)

| ID | Severity | Note |
|----|----------|------|
| SD-AUTH | OUT pack | `[RequirePermission]` CommonLib chưa mount |
| GAP-F-OPS-01 | P2 | Command center stub |
| History API | OUT | client stub |
| Export / cross-MFE nav | P1 stub | alert |
| GAP-SA-OPS-SCHEMA | — | **CLOSED** Dev this chain |
| GAP-DEV-CONFIG-PLACEHOLDER-01 | — | **CLOSED** |
| GAP-DEV-GRID-SCHEMA-BOOTSTRAP-01 | — | **CLOSED** |

## Build gate

```
yarn typecheck (Linm.Web.RMMS.Field) → PASS (tsc --noEmit)
yarn build (Linm.Web.RMMS.Field) → PASS (webpack 5.109.2 compiled with 3 size warnings)
BE this role: no API write → dotnet n/a (Dev Release PASS keep)
ERP.* → none
```

## Handoff → Review (`/agent-review`)

| Field | Value |
|-------|-------|
| Next | Review **pending** chain · autoApprove ON · roleOnly=`review` |
| Verdict | **pass** · T-QA-CRUD-01 · GAP-SA-OPS-SCHEMA closed |
| Artifact | `specs/ops/qa/scenarios.md` |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-qa |
| skillVersion | 2026.08.15.5 |
| schemaVersion | qldb-workflow-skill-v1 |
| workflowVersion | 2026.08.15.5 |
| rulesVersion | 2026.08.15.5 |
| generatedAt | 2026-08-16T02:28:00.000Z |
| versionGate | rechecked |
| version_mismatch_action | recheck_new |
| orchestratorSkillVersion | 2026.08.15.5 |
| devSkillVersion | 2026.08.15.5 |
| teamLeadSkillVersion | 2026.08.15.5 |
| saSkillVersion | 2026.08.15.5 |
| designSkillVersion | 2026.08.15.5 |
| poSkillVersion | 2026.08.15.5 |
| dataAnalySkillVersion | 2026.08.15.5 |

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.5 · versionGate=rechecked · skillId=agent-qa -->
