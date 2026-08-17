# Design — integration (Open API và tích hợp)

| Field | Value |
|-------|-------|
| feature | `integration` |
| this role | `design` · `/agent-design` |
| Feature Kind | **G** hub + **B** Endpoints/Sync/Partners catalogs A–D + Zone F schema + **full-page** Import/Job/Partner |
| status | `confirmed` (autopilot) |
| design_confirm | **approve** (`autoApprove=ON` · `task_2581b59b`) |
| changeScope | `edit_page` |
| packKind | `list` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Integration` (`/integration`) |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/integration/*` |
| domain | **Integration** |
| prior | PO `confirmed` · `po/requirement.md` · data-analy `sha256:integration-delta-schema-fullpage-20260816` |
| autoApprove | **ON** (`task_2581b59b`) → agent confirm Design |
| updatedAt | `2026-08-16T06:00:00.000+07:00` |
| taskId | `task_2581b59b` |

## 0. Context & Demo (from PO)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/integration.md` | Kind G + Import Kind D **stale** vs PO full-page — Design supersede |
| DEM-01 | `Linm.RMMS.Demo/src/demo/features/integration-demo.html` | Visual SSOT fields — **skip** chrome / note / localStorage-only |
| DI-02 | `specs/_data-analy/features/integration-control-hint.md` | controlHint SSOT |
| PO-01 | `specs/integration/po/requirement.md` | Screens Full page · Grid AC · GAP-F-SLIDE-01 |

Persona: Dev tích hợp · IT khách. **≠** `feedback` · **≠** `citizen` · **≠** partner-unit master. Pack **không** clone chrome demo.

## 1. Kind + UI pattern

| | |
|--|--|
| Feature Kind | **G** host + **B** lists |
| List pattern | **1×** `LinPageLayout` — **cấm** nested `CatalogListShell` |
| Grid | `LinCatalogDataGrid` · kéo cột **default ON** · `columns={buildDynamicGridColumns(schema, uiColumns)}` |
| Footer | `LinCatalogListPagination` 50/100/200/500 — **cấm** footerPagination / pageSizeBar / raw table production |
| Form pattern | **Full-page** `ImportAssetFormPage` · `SyncJobFormPage` · `PartnerFormPage` — **cấm** Resource · **cấm** Slideout · **cấm** View Input `readOnly` |
| Routes | Hub `/integration` · Import `/integration/import` · `/integration/import/:id` · Job `/integration/jobs/new` · `/integration/jobs/:id` · Partner `/integration/partners/:id` |
| Toolbar SSOT | Hub OpenAPI + `editConfig`=`fa-cog` · **cấm** Thêm mới trên Zone A |
| View | **`<dl>` / display** — trừ mã IdCode `SYNC-*` readonly |
| Config | `LinCatalogUiSchemaEditorModal` title «Cấu hình hiển thị danh mục» — **cấm** `LinListTableConfigModal` · **cấm** `configHint` |

## 2. Screens / zones

| Screen | FormMode | Zones | Controls |
|--------|----------|-------|----------|
| S-HUB | — | A header · B hub toolbar · tabs | Swagger · Copy OpenAPI · Health · Xuất catalog · Refresh · Offline-batch Modal · Webhook stub P2 · Import · Thêm job |
| S-LIST-EP | list | B filter + C grid (+ D nếu paged) | SearchTextInput path · SearchInput phase · schema `integration-endpoints` |
| S-LIST-SYNC | list | **A–D + F** | SearchTextInput · SearchInput type/status · row menu · schema `integration-sync-jobs` |
| S-LIST-PARTNER | list | **A–D + F** | SearchTextInput · toggle · schema `integration-partners` |
| S-FORM-IMPORT | C/E/V | Full-page Z1–Z3 `data-form-cols="5"` | SearchInput asset/region/route · File · leave-confirm |
| S-FORM-JOB | C/E/V | Full-page Z1–Z3 | status SearchInput · View=`<dl>` |
| S-FORM-PARTNER | View | Full-page | View=`<dl>` · Bật/Tắt |
| S-MODAL-OFFLINE | View | overlay | JSON contract mock |
| S-MODAL-CONFIG | — | overlay | ui-schema editor |

**Cấm** Kind D slideout trên Import/Job/Partner (**GAP-F-SLIDE-01** / **GAP-PO-SCREEN-01**).

### Zone A — Header

- Icon `fa-plug` + title **Open API và tích hợp** (22px)
- Badge **Kind G hub** + **P1 baseline**
- **Cấm** nút Thêm mới / Import / Save trên A

### Zone B — Toolbar + filter

**Hub (trái):** Mở Swagger (`fa-book`) · Copy OpenAPI URL · Làm mới health (`fa-heartbeat`) · Xuất catalog · Làm mới (`fa-sync-alt`) · Offline-batch · Webhook stub P2 disabled · Sửa config (`fa-cog`).

**Hub (phải):** **Import tài sản** (`fa-file-import`) · **Thêm job** (`fa-plus`) — **chỉ trên B**.

**Tab Endpoints:** `epSearch` SearchTextInput · `epPhase` SearchInput enum `integration-phase`.

**Tab Sync:** `jobSearch` SearchTextInput · `jobType` SearchInput `integration-sync-type` · `jobStatus` SearchInput `integration-job-status`.

**Tab Partners:** `partnerSearch` SearchTextInput.

Filter đổi → **page=1**. **Cấm** native `<select>` (**GAP-LIST-FILTER-SELECT**). **Cấm** nút Tìm trùng toolbar.

### Zone C — Grid

| Tab | Title | Columns (seed) | Row menu |
|-----|-------|----------------|----------|
| Endpoints | Catalog endpoint P1 | Method · Path · Mô tả · Phase · Auth · Trạng thái | — |
| Sync | Danh sách sync jobs | STT · □ · Mã job · Loại · Partner · Trạng thái · Số bản ghi · Bắt đầu · Kết thúc · Lỗi · ⋯ | Xem · Sửa · Xem log · Retry · Lịch sử · Xóa |
| Partners | Partner adapters | STT · Partner · Loại hệ thống · Auth · Health · Phase · Enabled · ⋯ | Xem · Bật/Tắt |

Help Sync: «nhấn đúp / Ctrl+chuột phải». Click mã → View full-page `<dl>`. Flex + skeleton — **cấm** blank body. Production: **cấm** leftover `const columns` / `LinCatalogDataColumn` (**GAP-DEV-GRID-SCHEMA-BOOTSTRAP-01**).

### Zone D — Pagination

`LinCatalogListPagination` trên Sync & Partners: `Tổng: N · Trang x/y` · Hiển thị **50 / 100 / 200 / 500** · FA pager 32×32. Endpoints: D nếu paged.

### Zone F — Schema editor (HARD)

- Modal title **«Cấu hình hiển thị danh mục»**
- `useCatalogUiSchema` · catalogKind theo tab: `integration-endpoints` · `integration-sync-jobs` · `integration-partners`
- Bảng cột: List / width / filter / sort / Thêm cột
- BE `CatalogUiSchemaRegistry` seed 3 kinds (SA/Dev)
- **Cấm** `configHint` · **cấm** `LinListTableConfigModal` (**GAP-DEV-CONFIG-PLACEHOLDER-01**)

## 3. Field inventory — Design chốt controlHint

### List filters (Zone B)

| uiField | Label VN | Control | catalogKind | Notes |
|---------|----------|---------|-------------|-------|
| epSearch | Lọc path / mô tả | `SearchTextInput` | text | method · path · mô tả |
| epPhase | Phase | `SearchInput` | enum `integration-phase` | P1/P2/P3 · trống = tất cả |
| jobSearch | Tìm kiếm | `SearchTextInput` | text | mã · partner |
| jobType | Loại sync | `SearchInput` | enum `integration-sync-type` | import · offline-batch · webhook |
| jobStatus | Trạng thái | `SearchInput` | enum `integration-job-status` | draft/running/done/failed |
| partnerSearch | Tìm partner | `SearchTextInput` | text | name · systemType |

### Form — Import (`/integration/import`)

| uiField | Label VN | Control | Required | FormMode lock | Notes |
|---------|----------|---------|----------|---------------|-------|
| code | Mã job | `Text` readonly IdCode | auto | all readonly | `SYNC-YYYYMMDD-NNNN` |
| assetType | Loại tài sản | `SearchInput` | * | view=`<dl>` | static FE |
| region | Địa bàn | `SearchInput` | * | view=`<dl>` | static FE |
| route | Tuyến đường | `SearchInput` | * | view=`<dl>` | static FE |
| section | Đoạn đường | `Text` | | view=`<dl>` | |
| fileName | File nguồn | `File` | * | view display | xlsx/xls/csv |
| note | Ghi chú | `Text` (textarea) | | view=`<dl>` | |

### Form — Sync job

| uiField | Label VN | Control | Required | FormMode lock | Notes |
|---------|----------|---------|----------|---------------|-------|
| code | Mã job | `Text` readonly | auto | all readonly | |
| syncType | Loại sync | `Text` | | view=`<dl>` | display |
| partner | Partner | `Text` | * | view=`<dl>` | |
| status | Trạng thái | `SearchInput` | * | view=`<dl>` | enum job-status |
| note | Ghi chú | `Text` | | view=`<dl>` | |
| logText | Log | `Text` | | view=`<dl>` | view/display |

### Form — Partner

View-only `<dl>`: Partner · Loại hệ thống · Auth · Health · Phase · Enabled. Action Bật/Tắt (list hoặc footer).

### Enum values (P1)

**integration-phase:** `` Tất cả · `p1` P1 · `p2` P2 · `p3` P3

**integration-sync-type:** `` Tất cả · `import` · `offline-batch` · `webhook`

**integration-job-status:** `` Tất cả · `draft` · `running` · `done` · `failed`

**integration-asset-type:** `mat-duong` Mặt đường · `cau` Cầu · `cong` Cống · `bien-bao` Biển báo · `den` Đèn

**integration-region:** `hn` Hà Nội · `hcm` TP.HCM · `dn` Đà Nẵng

**integration-route:** `QL1A` · `QL18` · `CT01`

Không CUC2 master. Lookup = static FE (SA xác nhận không cần API catalog master).

### CSS / layout gates

| Rule | Gap |
|------|-----|
| Full-page form · **cấm** Slideout / Resource | GAP-F-SLIDE-01 |
| View `<dl>` — **cấm** Input `readOnly` xám (trừ code) | GAP-F-SLIDE-01 |
| SearchInput enum — **cấm** native Select | GAP-LIST-FILTER-SELECT · GAP-FORM-LKP-01 |
| Schema editor FULL · **cấm** `configHint` / leftover columns | GAP-DEV-CONFIG-PLACEHOLDER-01 · GAP-DEV-GRID-SCHEMA-BOOTSTRAP-01 |
| 1× LinPageLayout · **cấm** nested CatalogListShell | AC-G-06 |
| Skip chrome demo | PO §9 |
| Input pad 6×10 · min-height 32 · focus shadow | T-UI-UX |
| Spacing 4/8/16 · form 5 cột `data-form-cols="5"` | T-UI-UX |
| Checkbox grid 24×24 · cột STT/□ 48px | T-UI-UX |
| Leave-confirm dirty — **cấm** `window.confirm` | GAP-PO-LEAVE-01 |

## 4. Form full-page wire

```
[Z1] [← Quay lại]  Title Import|Sync job|Partner · badge Tạo mới|Sửa|Xem
     [✏ Sửa] khi job view — không Save trên A
[Z2 C/E] fields §3 · SearchInput · 5 cột
[Z2 View] <dl> — không Input xám (trừ code IdCode)
[Z3 Import] [Hủy thay đổi] [Tải mẫu Excel] [Chạy import]
[Z3 Job] [Hủy] [Retry] [Lưu] khi edit
[Z3 Partner] [Đóng] [Bật/Tắt]
```

- Dirty leave-confirm khi Hủy / Quay lại (`LeaveConfirmModal` + `useFormLeaveGuard`)
- History job: `LinCatalogHistoryModal`
- Xóa job: `useAlert` / Modal — **cấm** `alert` / `prompt`

### List wire

```
[A] fa-plug + «Open API và tích hợp» + P1
[B] OpenAPI actions · fa-cog · Import · Thêm job (không Thêm trên A)
[tabs] Endpoints · Sync · Partners · Guide
[C] LinCatalogDataGrid mock theo tab
[D] Tổng · Hiển thị [50|100|200|500]
[F] LinCatalogUiSchemaEditorModal 3 catalogKind
```

## Prototype (REQUIRED)

| | |
|--|--|
| Artifact | `ui/prototype/integration-hub-prototype.html` |
| Zones | **A–D** content-only — skip note/sidebar/menu/chrome |
| Form | **Full-page** Z1–Z3 Import/Job/Partner (không Slideout) · View = `<dl>` · `data-form-cols="5"` |
| Lookups | SearchInput combo mock phase/type/status/asset/region/route |
| Zone F | Cog → modal «Cấu hình hiển thị danh mục» |
| Offline | Modal JSON contract |
| SSOT | `list-shell-prototype.md` · `shared-grid-example` · `po-design-grid-standard` |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/integration/ui/prototype/integration-hub-prototype.html` |
| peerStdUrl | `http://localhost:9314/integration` |

## 5. Map / AI / report (out of pack)

- Public citizen API P3
- Real SAP/ETC webhook runtime
- Full Swagger UI host
- Clone demo chrome / localStorage-only product UX
- Kind D Slideout form
- Invent CUC2 master lookup
- ERP.* / `api/v1/rmms/*`

## 6. Open questions (PO closed — Design không re-open)

GAP-F-SLIDE-01 · GAP-DEV-CONFIG-PLACEHOLDER-01 · GAP-DEV-GRID-SCHEMA-BOOTSTRAP-01 · GAP-LIST-FILTER-SELECT · GAP-FORM-LKP-01 · Screens Full page. **Cấm ERP.*** · **cấm** `api/v1/rmms/*`.

## Confirm

`design_confirm` = **approve** — `autoApprove=ON` (`task_2581b59b`) · agent tự confirm · chain SA.

## Handoff → SA

| Field | Value |
|-------|-------|
| Kind / pattern | G hub + B catalog A–D + F schema + **full-page** forms |
| Field inventory | §3 · SearchInput enums · SearchTextInput search |
| Filters | epSearch/epPhase · jobSearch/jobType/jobStatus · partnerSearch → page=1 |
| Prototype · reviewUrl | § Prototype |
| API prefer | `api/v1/integration/*` health/endpoints/sync-jobs/partners/import/offline-batch · BFF `web-bff/api/v1/integration/*` |
| Lookups (SA chốt) | static FE 6 enums · schema 3 catalogKind |
| Entity | `SyncJob` · `PartnerAdapter` · **cấm ERP.*** |
| Seed | IdCode `SYNC-YYYYMMDD-NNNN` · CatalogUiSchema 3 kinds |
| Next | SA **pending** đến lượt · `be/solution-discovery.md` |

## DES-GRID map → Lin\*

| Zone | DES-GRID | Component |
|------|----------|-----------|
| A | DES-GRID-A | `LinPageLayout` header |
| B | DES-GRID-B | hub toolbar + SearchTextInput + SearchInput |
| C | DES-GRID-C | `LinCatalogDataGrid` + resize ON |
| D | DES-GRID-D | `LinCatalogListPagination` |
| F | DES-GRID-F | `LinCatalogUiSchemaEditorModal` 3 kinds |
| Form | DES-FORM-Z1–Z3 | Import/Job/Partner full-page 5 cột |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design |
| skillVersion | 2026.08.15.19 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.15.19 |
| rulesVersion | 2026.08.16.02 |
| generatedAt | 2026-08-16T06:00:00.000+07:00 |
| versionGate | rechecked |
| version_mismatch_action | recheck_new (STATUS) |
| contentHashPriorPo | sha256:task_23f4a691 |
| contentHashPriorDataAnaly | sha256:integration-delta-schema-fullpage-20260816 |
| orchestratorSkillVersion | 2026.08.15.19 |
| orchestratorWorkflowVersion | 2026.08.15.19 |
| orchestratorRulesVersion | 2026.08.16.02 |
| dataAnalySkillVersion | 2026.08.15.5 |
| poSkillVersion | 2026.08.15.17 |
| taskId | `task_2581b59b` |

---
<!-- Version meta: skillVersion=2026.08.15.19 · schemaVersion=2 · workflowVersion=2026.08.15.19 · rulesVersion=2026.08.16.02 · versionGate=rechecked -->
