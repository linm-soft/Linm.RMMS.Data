# PO — contract (Hợp đồng)

| Field | Value |
|-------|-------|
| feature | `contract` |
| this role | `po` · `/agent-po` |
| changeScope | `edit_page` |
| packKind | `list` |
| Feature Kind | **B** catalog list A–D + **full-page** form (`ContractFormPage`) — **cấm** Kind D Slideout / Resource |
| status | `done` |
| requestSource | run packet `task_08b3dd0a` · `/agent-qldb-workflow` · roleOnly=`po` · autoApprove=**ON** |
| prior · data_analy | `confirmed` · `specs/_data-analy/features/contract-control-hint.md` · contentHash `sha256:0f942023667b8cc7e10d626ce5aa10117700feac901284cecbf6038788284b73` · cluster `specs/contract/specs/_data-analy/clusters/contract.md` **không tồn tại** — SSOT = feature controlHint · **no Excel** · sourceKind=`synthetic` |
| taskId | `task_08b3dd0a` |
| autoApprove | **ON** |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Contract` · `/contract` · `http://localhost:9312/contract` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · **`api/v1/contract/contracts`** (**cấm ERP.***) |
| domain | **Contract** |
| updatedAt | `2026-08-16T04:22:00.000Z` |

## 1. Goal

Chốt yêu cầu Kind **B** list Hợp đồng và ngân sách + form Kind **B** full-page theo data-analy `feature_context` / `edit_page`. Persona: Ban QLDA · Finance · Hạt trưởng.

**Delta pack (SSOT lock):** list filter nhà thầu `contractor` · form **full-page** `/contract/new` · `/contract/:id` · View=`<dl>` · lookup **SearchInput** (cấm native Select catalog) · Zone F `LinCatalogUiSchemaEditorModal` kind catalog HĐ. Align demo → MFE Contract `/contract` · BE domain **Contract**.

Live MFE (read 2026-08-16): `ContractListPage` + `ContractFormPage` (**không** `ContractFormSlideout`) · filter nhà thầu · schema editor · View `<dl>`. Data-analy GAP slideout/filter/View **CLOSED live**. PO **không** invent field mới. Design **phải** rà prototype content-only A–D (filter nhà thầu · full-page form · schema cog · **không** `configHint`). Dev = **verify / no-op** nếu parity giữ.

**≠** Inventory (`inventory`) — sub-route `/contract/inventory` · **OUT** this pack.

**Cấm ERP.*** · **cấm** `api/v1/rmms/*` · **cấm** `Domains/Master` · **cấm** parent JSON string.

## 2. Current → New (`edit_page`)

Nguồn SSOT: control-hint `2026-08-16T04:20:00.000Z` + live MFE `ContractListPage.tsx` / `ContractFormPage.tsx`.

| Layer | Current (live 2026-08-16) | New (delta this pack) |
|-------|---------------------------|------------------------|
| Kind / shell | 1× `LinPageLayout` A–D · `LinCatalogDataGrid` kéo cột ON · `LinCatalogListPagination` | **keep** — **cấm** nested CatalogListShell · footerPagination · pageSizeBar · raw table |
| Zone B filter | SearchTextInput · SearchInput loại / TT / **nhà thầu** | **keep** — GET `?search=&type=&status=&contractor=` |
| Zone B config | `LinCatalogUiSchemaEditorModal` title «Cấu hình hiển thị danh mục» · `useCatalogUiSchema` · `buildDynamicGridColumns` | **keep** — **cấm** `configHint` · **cấm** `LinListTableConfigModal` editor cột |
| Grid cols | Mã · Số HĐ · Tên · Loại · Nhà thầu · Giá trị · KPI · TT · Hết hạn · actions | **keep** |
| KPI strip | 4 ô beforeToolbar | **keep** |
| Form | Full-page C/E/V/Copy · payment lines inline · View `<dl>` | **keep** — **cấm** Resource / Slideout / View=`readOnly` Input xám toàn form |
| Lookups | SearchInput type/status/contractor/org/payStatus | **keep** — **cấm** native `<select>` catalog |
| Prototype | `specs/contract/ui/prototype/contract-list-prototype.html` | **IN P1 Design:** content-only A–D + form full-page · filter nhà thầu · Zone F schema mock · skip chrome |
| Demo HTML | `contract-demo.html` | Giữ visual SSOT — **không** clone chrome · **không** regen demo |
| API / BE | CRUD `api/v1/contract/contracts` + payments nested · BFF querystring | **keep** · list query `contractor` **keep** · **cấm ERP.*** |
| Stale PO (2026-08-09) | Kind D Slideout · View=readOnly · MFE scaffold | **SUPERSEDED** |
| Inventory / Excel / quyết toán / sign API | P2 stub / other slug | **OUT pack** |

## 3. Personas / DoD (đo được)

1. List load + **search work** (mã · số HĐ · tên · nhà thầu) — page=1 khi filter đổi.
2. Zone A: title «Hợp đồng và ngân sách» — **cấm** Thêm mới trên A.
3. Zone B: Tạo mới primary · Làm mới · Delete · History stub · config `fa-cog` · SearchTextInput · SearchInput loại / TT / **nhà thầu** — **không** nút Tìm.
4. Zone C: `LinCatalogDataGrid` + kéo cột default ON · row menu Xem · Sửa · Sao chép · Xóa · Lịch sử (Ký / Ghi nhận TT / KPI = **P2 stub** OK).
5. Zone D: `LinCatalogListPagination` pageSize **50 / 100 / 200 / 500**.
6. Zone F: `LinCatalogUiSchemaEditorModal` — bảng cột List/width/filter/sort/Thêm cột.
7. Form full-page `/contract/new` · `/contract/:id`: validate + save · leave-confirm dirty · Copy → POST new · IdCode `CTR-yyyyMMdd-nnnn` readonly display.
8. Required: contractNo · name · type · contractor · amount · status. Payment line: period · amount.
9. View = `<dl>` display — **cấm** Input disabled xám toàn form. `disbursed` = computed RO display (không View-as-edit).
10. Lookup type/status/contractor/orgUnit/payStatus = **SearchInput** — **cấm** Dev đoán Text vs SearchInput khi đã có controlHint.
11. KPI 4 ô (tổng giá trị · NS còn · KPI TB · sắp hết hạn).
12. FE `yarn build` (+ typecheck nếu có) PASS · BE `dotnet build` PASS khi đụng API — Dev ghi implement § Build. **This PO role: no FE/BE write → build n/a.**

## 4. CTX / DEM / DI inventory

| ID | Path | Loại |
|----|------|------|
| CTX-01 | `docs/context/features/contract.md` | feature Kind B + form (context còn ghi D slideout — **SUPERSEDED** bởi pack này) |
| DEM-01 | `Linm.RMMS.Demo/src/demo/features/contract-demo.html` | visual SSOT |
| DI-01 | — | **no Excel cluster** |
| DA-01 | `specs/_data-analy/features/contract-control-hint.md` | controlHint SSOT |
| MFE | `Linm.Web.RMMS.Contract` `/contract` | UI |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP Contract · `api/v1/contract/contracts` | API |

### List columns (bootstrap)

STT · Mã HĐ · Số HĐ · Tên HĐ · Loại · Nhà thầu · Giá trị · KPI · Trạng thái · Hết hạn · actions

### List filters (Zone B)

| Field key | Label | controlHint | Notes |
|-----------|-------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | mã · số HĐ · tên · nhà thầu |
| type | Loại hợp đồng | `SearchInput` | enum |
| status | Trạng thái | `SearchInput` | enum |
| contractor | Nhà thầu | `SearchInput` | P1 enum 3 · partner master **UNCLEAR** P2 |

### Form fields (controlHint — Design chốt UI · SA chốt API)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| code | Mã HĐ | `Text` | auto | IdCode readonly display |
| contractNo | Số HĐ | `Text` | * | |
| name | Tên HĐ | `Text` | * | |
| type | Loại HĐ | `SearchInput` | * | **cấm** Select |
| contractor | Nhà thầu | `SearchInput` | * | P1 enum · **UNCLEAR** partner-unit P2 |
| amount | Giá trị HĐ | `Money` | * | max-width 200px |
| status | Trạng thái | `SearchInput` | * | **cấm** Select |
| signedAt | Ngày ký | `Date` | | |
| effectiveFrom | Ngày hiệu lực | `Date` | | |
| effectiveTo | Ngày hết hạn | `Date` | | |
| budgetAllocated | Ngân sách năm | `Money` | | |
| disbursed | Đã giải ngân | `Money` | | computed RO |
| budgetYear | Năm NS | `Integer` | | |
| kpiScore | Điểm KPI | `Number` | | 0–100 |
| slaPct | SLA % | `Number` | | 0–100 |
| warrantyMonths | Tháng BH | `Integer` | | |
| warrantyExpires | Ngày hết BH | `Date` | | |
| orgUnit | Đơn vị QL | `SearchInput` | | P1 enum hạt · **UNCLEAR** org-unit CUC2 |
| routeSegment | Tuyến/đoạn | `Text` | | P1 · **UNCLEAR** road-route P2 |
| workOrderLink | Liên kết WO | `Text` | | |
| note | Ghi chú | `Text` | | textarea |
| payments[].period | Kỳ TT | `Text` | * | inline grid |
| payments[].amount | Số tiền TT | `Money` | * | |
| payments[].paidAt | Ngày TT | `Date` | | |
| payments[].status | TT dòng | `SearchInput` | | **cấm** Select |
| payments[].note | Ghi chú dòng | `Text` | | |

### Lookup APIs (SA)

| catalogKind | API | Notes |
|-------------|-----|-------|
| contracts list | `GET /api/v1/contract/contracts?search=&type=&status=&contractor=&page=&pageSize=` | **DONE** + query `contractor` |
| by id | `GET /api/v1/contract/contracts/{id}` | XCO get-only |
| create / update | `POST` / `PUT` | |
| soft delete | `DELETE` | |
| payments | nested DTO | `rmms_contract_payments` |
| ui-schema | CatalogUiSchemaRegistry seed HĐ | **cấm ERP** |
| partner-unit / org-unit / road-route | master | **UNCLEAR** P2 |
| kpi / sign / settlement dedicated | — | **DEFER** |

Perms: `contract.contracts.read|create|update|delete`. SHARE=`tenant` (`ContractEntity`).

## 5. Grid AC (REQUIRED · list)

| ID | AC |
|----|-----|
| AC-G-01 | Zones **A Header · B Toolbar · C Grid · D Pagination** |
| AC-G-02 | Search + type/status/**contractor** → page=1 |
| AC-G-03 | Row menu Xem / Sửa / Copy / Lịch sử / Xóa |
| AC-G-04 | `LinCatalogDataGrid` + kéo cột default ON · schema-driven columns |
| AC-G-05 | Footer `LinCatalogListPagination` 50/100/200/500 |
| AC-G-06 | 1× `LinPageLayout` — **cấm** nested CatalogListShell |
| AC-G-07 | Flex + skeleton — **cấm** blank body |
| AC-G-08 | Zone F `LinCatalogUiSchemaEditorModal` — **cấm** `configHint` / `LinListTableConfigModal` cột |

## 6. Open questions — PO chốt

| ID | Question | Decision (PO) |
|----|----------|----------------|
| GAP-DA-CTR-SLIDEOUT | Live Slideout | **CLOSED live** (`ContractFormPage`). Keep DoD full-page. Design proto **IN**. |
| GAP-DA-CTR-VIEW-RO | View=`readOnly` Input | **CLOSED live** (`<dl>`). Keep. |
| GAP-DA-CTR-SELECT | Form native Select | **CLOSED live** SearchInput. Keep. |
| GAP-DA-CTR-FILTER-NT | Filter nhà thầu | **CLOSED live**. Keep query `contractor`. |
| GAP-DA-CTR-DESIGN-STALE | design.md B+D Slideout | Design **re-audit** prototype vs lock này (file design đã bắt đầu full-page — Design role chốt reviewUrl). |
| GAP-P2-CC-06 / CONFIG / BOOTSTRAP | list schema | **CLOSED live**. Keep editor. |
| GAP-F-CTR-04 | Quyết toán full | **DEFER P3** stub. |
| GAP-F-CTR-03 | dedicated kpi/sign/budgets | **DEFER** — fields on Contract. |
| Kind D / Resource | — | **Cấm**. Full-page only. |
| parent JSON / ERP | — | **Cấm**. BE = `Linm.RMMS.WebService` Contract. |

## 7. Out of scope (this pack)

- Quyết toán UI full (P3)
- Inventory sub-route CRUD (slug `inventory`)
- Excel export runtime
- Platform events `contract.signed` / `payment.posted`
- CommonLib `[RequirePermission]` live NuGet
- Partner-unit / org-unit CUC2 / road-route master SearchInput
- Clone chrome demo · Resource · Kind D Slideout
- Regen demo HTML

## 8. Handoff → Design

| Field | Value |
|-------|-------|
| Kind | B list A–D + full-page form (+ payment lines) — **không** Slideout / Modal form |
| Prototype | content-only · zones A–D · `list-shell-prototype.md` · **skip** note/sidebar/menu/chrome · Zone F schema editor |
| reviewUrl | bắt buộc · proto file + `http://localhost:9312/contract` · `autoApprove=ON` → agent tự confirm **khi tới role Design** |
| controlHint | bảng §4 — **cấm** native Select lookup |
| Demo visual | `contract-demo.html` — không regen |
| BE | `api/v1/contract/contracts` · **cấm** `api/v1/rmms/*` |
| Next roles | design → sa → team-lead → dev → qa → review = **pending** đến lượt |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po |
| skillVersion | 2026.08.15.19 |
| schemaVersion | qldb-workflow-skill-v1 |
| workflowVersion | 2026.08.15.19 |
| generatedAt | 2026-08-16T04:22:00.000Z |
| versionGate | rechecked |
| version_mismatch_action | recheck_new (STATUS · data-analy stamped 2026.08.15.1 / skill 2026.08.08.20 → recheck_new to 2026.08.15.19) |
| contentHashPriorDataAnaly | sha256:0f942023667b8cc7e10d626ce5aa10117700feac901284cecbf6038788284b73 |
| orchestratorSkillVersion | 2026.08.15.19 |
| orchestratorWorkflowVersion | 2026.08.15.19 |
| orchestratorSchemaVersion | qldb-workflow-skill-v1 |
| dataAnalySkillVersion | 2026.08.08.20 |
| dataAnalyWorkflowVersion | 2026.08.15.1 |

---
<!-- Version meta: skillVersion=2026.08.15.19 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.08.15.19 · versionGate=rechecked -->
