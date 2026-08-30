# Team-lead — ops (Chỉ đạo điều hành / công văn)

| Field | Value |
|-------|-------|
| feature | `ops` |
| this role | `team_lead` · `/agent-team-lead` |
| status | `confirmed` (autopilot) |
| packKind | `list` |
| changeScope | `edit_page` · gap=`crud_formtype` · Kind **B** + full-page form |
| Feature Kind | **B** catalog list A–D + **full-page** form — **cấm** Kind D Slideout |
| autoApprove | **ON** |
| chain | **ON** |
| taskId | `task_a6769ee4` |
| prior · data_analy | **confirmed** · `specs/_data-analy/features/ops-control-hint.md` · contentHash `sha256:ops-delta-official-doc-20260816` |
| prior · po | **confirmed** · `po/requirement.md` |
| prior · design | **confirmed** · `ui/design.md` + `ui/prototype/ops-list-prototype.html` |
| prior · sa | **confirmed** · `be/solution-discovery.md` · solution_confirm **approve** |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Field` · `/ops` |
| mfeStdUrl | `http://localhost:9304/ops` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · **`api/v1/notification/inbox`** (**cấm ERP.***) |
| domain | **Notification** |
| updatedAt | `2026-08-16T03:00:00.000Z` |

> TL **chốt** task pack. Dev **implement / verify**. **Cấm** assume — live audit 2026-08-16.  
> **Supersedes** TL `task_47576cf0` (stamp `2026.08.09.02`) — pack này re-audit Design/SA 2026-08-16 + GAP-SA-OPS-SCHEMA.  
> Live sau `task_31a9bbd8` **đã ship** OfficialDoc + schema editor + filter CV. Dev = **verify / no-op** trừ delta schema order.  
> **Cấm** `ERP.Service.*` · `Domains/Master` · `api/v1/rmms/*` · **cấm** domain `Ops`.

## Source assignment

| Layer | Path | Confirm |
|-------|------|---------|
| UI | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Field` | STATUS `ui_repo_confirm=approve` |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Notification** | STATUS `be_repo_confirm=approve` |
| API | `api/src/RMMS.Service.Api/Domains/Notification/` | **cấm** ERP.* |
| BFF | `bff/domains/notification/LINM.RMMS.Notification.Bff/` | proxy-only |
| Schema seed | Integration `CatalogUiSchemaRegistry.OpsInbox` = `ops-inbox` | **không** Notification folder |
| Routes | `mfeStdRoute=/ops` | `mfeStdUrl=http://localhost:9304/ops` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/ops/ui/prototype/ops-list-prototype.html` | Design confirmed |

## retry.ssot_rereview (HARD — live Field `/ops`)

Audit **trước Write** Dev. Surface: `NotificationListPage` + `NotificationFormPage`. **Cấm** chỉ patch 1 chỗ nếu còn GAP cùng surface.

| Check | Live | Verdict |
|-------|------|---------|
| 1× `LinPageLayout` — **cấm** nested CatalogListShell | `NotificationListPage.tsx` 1× `LinPageLayout` | **PASS** |
| `LinCatalogDataGrid` + kéo cột default ON | `resizable: true` + `buildDynamicGridColumns` | **PASS** |
| Footer `LinCatalogListPagination` — **cấm** footerPagination / pageSizeBar / raw table | `LinCatalogListPagination` in layout | **PASS** |
| flex + skeleton | list loading skeleton (prior PASS) | **PASS** — Dev re-verify blank body |
| toolbar config FULL | `LinCatalogUiSchemaEditorModal` title «Cấu hình hiển thị danh mục» · `useCatalogUiSchema` · kind=`ops-inbox` | **PASS** |
| **cấm** `LinListTableConfigModal` editor cột | không import editor cột | **PASS** |
| **cấm** leftover `const columns` / `LinCatalogDataColumn` product | `uiColumns` bootstrap + dynamic grid | **PASS** |
| **cấm** `configHint` | không dùng | **PASS** (GAP-DEV-CONFIG-PLACEHOLDER-01 CLOSED) |
| list_parity Kind B A–D | A header · B toolbar+filter · C grid · D pagination · F modal | **PASS** |
| tree_master | n/a | **n/a** |
| form checklist Z1–Z3 full-page | `NotificationFormPage` C/E/V/Copy · View `<dl>` | **PASS** — **cấm** Resource / Slideout / View=`readOnly` Input |
| OfficialDoc columns on grid | `documentNumber` · `direction` · `summary` · `orgUnitName` present | **PASS keys** · **FAIL default order** → GAP-SA-OPS-SCHEMA |
| Zone B filter direction / org-unit | SearchInput + query passthrough | **PASS** |

### GAP-SA-OPS-SCHEMA (OPEN — TL verify)

Design/PO bootstrap default list (STT = grid chrome, không seed):

`code` · `documentNumber` · **`direction`** · **`summary`** · **`orgUnitName`** · **`title`** · `sender` · `recipient` · `priority` · `type` · `status` · `sentAt` · actions

Live seed `CatalogUiSchemaSeed.OpsInbox()` `Field.List.Order` **và** FE `uiColumns` fallback:

`code` · `documentNumber` · **`title`** · `direction` · `summary` · `orgUnitName` · `sender` · `recipient` · `priority` · `type` · `status` · `sentAt`

**Delta Dev:** reorder `List.Order` + `uiColumns` array cho khớp Design. Fields set **đủ** — không thiếu cột. SearchFieldKeys seed thiếu `summary` (PO search trích yếu = BE Contains; optional add `summary` vào Lookup/List search keys).

## T-CTX-01

| | |
|--|--|
| layer | docs |
| status | **pending** (Dev) |
| deps | — |
| DoD | Sync `docs/context/features/ops.md`: **LinPageLayout** (không CatalogListShell wording) · API **Signed** · OfficialDoc scalars · Zone F schema editor · **bỏ** «Mock no BE» nếu còn. STATUS `backend` = `D:/AI-QLBD/Linm.RMMS.WebService` + `api/v1/notification/inbox`. |

## T-PERM-01

| | |
|--|--|
| layer | ui+api |
| status | **verify** (live done) |
| codes | `notification.inbox.read` · `create` · `update` · `delete` |
| DoD | FE `permissions.ts` · BE `[RequirePermission]` **TODO** CommonLib ≥1.4.0 — **không** block P1 (SA SD-AUTH). **Cấm** invent `ops.*` codes. |

## T-UI-LIST-01 (A–D)

| Zone | Component | DoD |
|------|-----------|-----|
| A | `LinPageLayout` header | Title «Chỉ đạo điều hành» — **cấm** Thêm mới trên A · 1 shell |
| B | `catalogToolbar` | Tạo mới **primary** · Làm mới · history stub · config `fa-cog` · Delete nếu `canDelete` · extras: mark-all-read · export stub · nav Patrol/Gis/Incident · Command P2 stub |
| B-filter | SearchText + SearchInput | search · status · priority · type · **direction** · **orgUnitCode** · unread → page=1 |
| C | `LinCatalogDataGrid` | resize default ON · unread emphasis · row menu Xem · Sửa · Sao chép · Mark-read · Giao việc P2 · **cấm** leftover static columns |
| D | `LinCatalogListPagination` | 50/100/200/500 — **cấm** footerPagination / pageSizeBar |
| F | `LinCatalogUiSchemaEditorModal` | title «Cấu hình hiển thị danh mục» · `useCatalogUiSchema` · `columns={buildDynamicGridColumns(schema, uiColumns)}` · **cấm** `LinListTableConfigModal` cột · **cấm** `configHint` |
| KPI | overview strip | 4 ô `GET /api/v1/notification/overview` |

**status:** **verify** shell/config **PASS** live · **pending** column order (T-UI-LIST-02).

## T-UI-LIST-02 — default column order

| | |
|--|--|
| layer | ui |
| status | **pending** |
| deps | T-BE-SCHEMA-01 (cùng order) |
| DoD | `uiColumns` thứ tự = Design bootstrap (title **sau** direction/summary/orgUnitName). STT không thêm field schema. |

## T-UI-FORM-01

| | |
|--|--|
| layer | ui |
| status | **verify** (live done) |
| Routes | `/ops/new` · `/ops/:id` · `?mode=edit` · `?mode=copy` |
| DoD | Full-page Z1–Z3 · **5 cột** `data-form-cols="5"` · medium 3 · small 2 · C/E/V/Copy · View=`<dl>` · leave-confirm dirty · Copy → POST new · IdCode `OPS-*` readonly · **cấm** Slideout / Resource / Modal form · **cấm** grid 2-cột (**GAP-P2-FORM-GRID-05**). |

## T-UI-ACT-01 — action inventory

| Action | Surface | Handler | API |
|--------|---------|---------|-----|
| Search | S-LIST filter | SearchText → apply | GET `/inbox?search=` |
| Status / Priority / Type | S-LIST | SearchInput | GET `?status=&priority=&type=` |
| Direction / Org-unit | S-LIST | SearchInput | GET `?direction=&orgUnitCode=` |
| Unread toggle | extra bar | | GET `?unreadOnly=true` |
| Refresh | toolbar | reloadAll | GET `/inbox` · GET `/overview` |
| +Tạo | toolbar | `/ops/new` | POST `/inbox` |
| Edit / View / Delete | toolbar | `/:id` | GET/PUT/DELETE |
| History | toolbar | stub | DEFER |
| Config `fa-cog` | toolbar | schema modal | Integration catalogs |
| Mark all read | extra bar | | POST `/inbox/mark-all-read` |
| Xuất / Nav / Command P2 | extra bar | stub / cross-MFE | DEFER |
| Row View/Edit/Copy/Delete | row menu | | same |
| Row Mark-read | row menu | | POST `/{id}/mark-read` |
| Row Assign P2 | row menu | stub | DEFER GAP-F-OPS-01 |
| Form Gửi / Nháp / Clear / Hủy | Z3 | handleSave | POST/PUT |

**status:** **verify** (live done) — không invent API mới.

## T-UI-LKP-01

| catalogKind | Source P1 | API P1 |
|-------------|-----------|--------|
| ops-status | FE `lookups.ts` `moi` · `dang-xu-ly` · `da-gui` · `nhap` | **không** |
| ops-priority | `thap` · `trung-binh` · `cao` · `khan` | **không** |
| ops-type | `tuan-tra` · `su-co` · `sua-chua` · `khac` | **không** |
| ops-channel | `inbox` · `push` · `email` | **không** |
| recipient | FE master đội | **không** |
| cv-direction | `DIRECTION_LOOKUP` `di`/`den` | **không** |
| org-unit | FE Chi cục II · persist **code + name** | **không** P1 · Integration **P2** |

**status:** **verify** · **cấm** native `<select>` · **cấm** invent ERP catalog GET.

## T-UI-FIELD-01

Map controlHint ↔ DTO (SA lock). **cấm** Dev đổi SearchInput → select.

| uiField | Control | Required | BE |
|---------|---------|----------|-----|
| code | Text IdCode `OPS-*` readonly | auto | server IdCode · Create **không** nhận Code |
| documentNumber | Text | | `DocumentNumber` varchar(64) |
| direction | SearchInput cv-direction | | `Direction` `di`\|`den` |
| summary | Text textarea | | `Summary` varchar(1024) |
| orgUnitCode | SearchInput org-unit | | `OrgUnitCode` + `OrgUnitName` |
| sender | Text | | `Sender` |
| sentAt | Date datetime | | `SentAt` UTC · display `vi-VN` |
| status | SearchInput ops-status | * | `Status` · Create draft `nhap` else `da-gui` |
| title | Text | * | `Title` |
| body | Text textarea | * | `Body` |
| recipient | SearchInput | * | `Recipient` |
| priority | SearchInput ops-priority | | `Priority` |
| type | SearchInput ops-type | | `Type` |
| channel | SearchInput ops-channel | | `Channel` |
| linkRef | Text | | `LinkRef` |
| reply | Text textarea | P2 | `Reply` |

**status:** **verify** (live done) — không field mới.

## T-UI-PROD-01

**status:** **verify**  
**cấm** Resource · Slideout · View=`readOnly` Input xám · Kind D. Form = `NotificationFormPage`. View = `<dl>`.

## T-UI-UX-01

**status:** **verify**  
Spacing 4/8/16 · `LinPageLayout` list · `LinPageHeader` form · form grid **5 cột** `data-form-cols="5"` (`form-field-grid.md`) · `LinCatalogDataGrid` · `LinCatalogListPagination` · **cấm** `filterMaxWidthPx` · **cấm** 2-cột full page. LAYOUT-06 list shell height **PASS** prior — Dev re-check.

## T-BE-CRUD-01 (= T-BE-01)

| | |
|--|--|
| layer | api |
| status | **verify keep** (SA GAP-SA-OPS-* keep) |
| prefix | `api/v1/notification/inbox` · overview `api/v1/notification/overview` |
| DoD | API-01 list/search (search Contains Code/Title/Body/Recipient/Sender/Status/Type/Priority/DocumentNumber/Summary/OrgUnitName · query `direction`/`orgUnitCode` · pageSize 50/100/200/500) · API-02 GetById XCO · API-03 Create · API-04 Update · API-05 soft delete · API-06 mark-read · API-07 mark-all-read · API-08 overview. Envelope `ApiResponse`. **Cấm** parent JSON · **cấm** bảng OfficialDocument riêng · **cấm** `api/v1/ops`. |

## T-BE-02

**status:** **verify** — `Schema_RmmsNotifications` + `Schema_RmmsNotificationsOfficialDoc` live. **không** migration mới trừ schema seed order.

## T-BE-SCHEMA-01

| | |
|--|--|
| layer | Integration seed |
| status | **pending** |
| deps | — |
| DoD | `CatalogUiSchemaSeed.OpsInbox()` `Field.List.Order` = Design bootstrap (title sau direction/summary/orgUnitName). kind=`ops-inbox` giữ. **Cấm** `configHint`. Optional: List/Lookup `SearchFieldKeys` gồm `summary`. **Cấm** sửa ERP.* |

## T-BFF-01

**status:** **verify keep**  
Proxy-only `NotificationInboxBffController` · `NotificationOverviewBffController` · `BuildListPath` query passthrough · **cấm** BFF map/filter.

## T-QA-CRUD-01

**status:** **pending** (QA role sau Dev)  
Smoke: list filters direction/org · default column order · Create→Edit→View `<dl>`→Delete · mark-read · schema modal · pageSize 50/100/200/500.

## FormType pack (canonical)

| Task id | Role | Status | Notes |
|---------|------|--------|-------|
| T-CTX-01 | Dev | **pending** | stale context wording |
| T-PERM-01 | Dev | **verify** | `notification.inbox.*` |
| T-UI-LIST-01 | Dev | **verify** | A–D + Zone F PASS |
| T-UI-LIST-02 | Dev | **pending** | column order |
| T-UI-FORM-01 | Dev | **verify** | full-page **5 cột** |
| T-UI-ACT-01 | Dev | **verify** | inventory |
| T-UI-LKP-01 | Dev | **verify** | FE constants |
| T-UI-FIELD-01 | Dev | **verify** | control-map |
| T-UI-PROD-01 | Dev | **verify** | cấm Resource/Slideout |
| T-UI-UX-01 | Dev | **verify** | constitution · **5 cột** |
| T-BE-CRUD-01 | Dev | **verify** | keep contract |
| T-BE-02 | Dev | **verify** | migrations exist |
| T-BE-SCHEMA-01 | Dev | **pending** | GAP-SA-OPS-SCHEMA |
| T-BFF-01 | Dev | **verify** | proxy |
| T-UI-MAP-FORM | — | **n/a** | packKind=`list` |
| T-QA-CRUD-01 | QA | **pending** | sau Dev |

**GAP-TL-FORMTYPE-01:** closed this pack — ACT/CRUD/LKP/FIELD/PROD/UX stamped.

## API contract (lock)

| id | Method | Path |
|----|--------|------|
| API-01 | GET | `/api/v1/notification/inbox` |
| API-02 | GET | `/api/v1/notification/inbox/{id}` |
| API-03 | POST | `/api/v1/notification/inbox` |
| API-04 | PUT | `/api/v1/notification/inbox/{id}` |
| API-05 | DELETE | `/api/v1/notification/inbox/{id}` |
| API-06 | POST | `/api/v1/notification/inbox/{id}/mark-read` |
| API-07 | POST | `/api/v1/notification/inbox/mark-all-read` |
| API-08 | GET | `/api/v1/notification/overview` |

FE BASE: Field `/ops`. BFF: `web-bff/api/v1/notification/inbox` · `.../overview`.

## Deps

```
T-BE-SCHEMA-01 → T-UI-LIST-02
T-CTX-01 parallel
T-BE-CRUD-01 / T-BFF-01 / T-PERM-01 / T-UI-* verify (no-op nếu parity)
T-UI-LIST-02 + T-UI-FORM-01 → T-QA-CRUD-01
```

## SD flags

| Flag | Value |
|------|-------|
| SD-AUTH | stub `[RequirePermission]` TODO |
| SD-BFF | proxy-only |
| SD-JOB | n/a |
| SD-MAP | realtime map **cấm** trong MFE · nav Patrol/Gis |
| SD-SIGNALR | OpsHub DEFER P2 |
| SD-COMMAND | Command center P2 stub |
| SD-TZ | persist UTC · display local FE |
| SD-XCO | GetById get_only |
| SD-LOOKUP | share_na P1 FE constants |

## list_parity / form

- list_parity Kind B — **PASS** live (order GAP riêng)
- form checklist Z1–Z3 — **PASS** full-page
- tree_master — n/a
- tl-list-shell-height (LAYOUT-06) — **PASS** prior
- Zone F config FULL — **PASS** live

## Build

TL **không** sửa FE/BE code → `yarn build` / `dotnet build` **n/a** this role. Dev **HARD** PASS trước `completed` + handoff QA.

## Handoff → Dev

| Field | Value |
|-------|-------|
| Next | Dev `implement/ops.md` · **pending** đến lượt · chain enqueue (autoApprove ON) |
| Write | T-BE-SCHEMA-01 + T-UI-LIST-02 + T-CTX-01 · còn lại **verify / no-op** |
| Anti-dup | reuse inbox CRUD · **cấm** domain mới · **cấm** ERP.* |
| UI SSOT | `NotificationListPage` · `NotificationFormPage` |
| BE SSOT | `D:/AI-QLBD/Linm.RMMS.WebService` · Notification + Integration seed |
| HARD | `tl-retry-ssot-rereview` · fix_all cùng surface · **cấm** `completed` nếu build fail |
| Roles sau | qa · review = **pending** |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-team-lead |
| skillVersion | 2026.08.15.5 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.15.5 |
| rulesVersion | 2026.08.15.8 |
| generatedAt | 2026-08-16T03:00:00.000Z |
| versionGate | recheck_new |
| version_mismatch_action | recheck_new (STATUS) |
| contentHashPriorDataAnaly | sha256:ops-delta-official-doc-20260816 |
| orchestratorSkillVersion | 2026.08.15.5 |
| orchestratorWorkflowVersion | 2026.08.15.5 |
| orchestratorSchemaVersion | qldb-workflow-skill-v1 |

<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=recheck_new -->
