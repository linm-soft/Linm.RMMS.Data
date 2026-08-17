# Data-analy — controlHint — contract (Kind B catalog list + form)

| Field | Value |
|-------|-------|
| feature | `contract` |
| packKind | `list` |
| mode | `feature_context` (NEW AutocodeTask `task_6174c202` · **no Excel** · demo + context + live MFE) |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.08.20` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.1` |
| rulesVersion | `2026.08.15.2` |
| versionGate | `rechecked` |
| contentHash | `sha256:0f942023667b8cc7e10d626ce5aa10117700feac901284cecbf6038788284b73` |
| headerFingerprint | `sha256:5f1b05d803a43d5e49914bb6765b48c396620423b7b9416f17785e80395b9632` |
| analyzedAt | `2026-08-16T04:20:00.000Z` |
| cluster | — (không Excel · synthetic P2–P3) |
| taskId | `task_6174c202` |
| changeScope | `edit_page` |
| autoApprove | `ON` (run packet Autopilot) |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** lookup API.  
> **Cấm** Dev đoán Text vs SearchInput khi đã có bảng này.  
> **Cấm ERP.*** · domain **Contract** · BE `D:/AI-QLBD/Linm.RMMS.WebService` · prefix `api/v1/contract`.  
> **≠** Inventory (`inventory`) — sub-route `/contract/inventory`.

## Sources

| Source | Path | sha256 |
|--------|------|--------|
| Context | `docs/context/features/contract.md` | `0f942023667b8cc7e10d626ce5aa10117700feac901284cecbf6038788284b73` |
| Control map | `docs/context/_raw/legacy-govone/demo-maps/contract-control-map.md` | `4e095a7bf6e4378c61192e047e081c45f1e2cb6cb57e5ed0be526a769b4aa3da` |
| Demo entry | `Linm.RMMS.Demo/src/demo/features/contract-demo.html` | `5f1b05d803a43d5e49914bb6765b48c396620423b7b9416f17785e80395b9632` |
| MFE live (read) | `Linm.Web.RMMS.Contract` · `/contract` · `ContractListPage` + `ContractFormSlideout` + `ContractFormPage` (Navigate bridge) | Kind B list + **Slideout** form |
| Prior design.md | `specs/contract/ui/design.md` | Kind **B+D** Slideout · view=`readOnly` · filter thiếu nhà thầu |
| Prior PO/SA/TL | `specs/contract/po` · `be/solution-discovery.md` · `task/contract.md` | **keep** artifacts · § Delta only |

Normalized header (no Excel):

`code|contractNo|name|type|contractor|amount|status|signedAt|effectiveFrom|effectiveTo|budgetAllocated|disbursed|budgetYear|kpiScore|slaPct|warrantyMonths|warrantyExpires|orgUnit|routeSegment|workOrderLink|note|payments.period|payments.amount|payments.paidAt|payments.status|payments.note|search`

## § Delta Current vs New (`edit_page`)

| Surface | Current (live MFE + prior Design) | New (SSOT list pack 2026.08.15) |
|---------|-----------------------------------|----------------------------------|
| Form shell | `ContractFormSlideout` overlay · `/contract/new` Navigate `?form=` | Kind B **full-page** `/contract/new` · `/contract/:id` · **cấm** Slideout / Resource |
| View | Input/`readOnly` (cùng form) | View=`<dl>` display · **cấm** View=`readOnly` Input |
| List filter | SearchTextInput + SearchInput type/status (**thiếu** nhà thầu) | + SearchInput **nhà thầu** (demo `fContractor`) |
| Form lookup | Select loại/TT/payStatus · SearchInput nhà thầu/đơn vị | **SearchInput** mọi enum/lookup · **cấm** native Select catalog |
| List config | `LinCatalogUiSchemaEditorModal` + `buildDynamicGridColumns` | **giữ** (PASS) |
| List shell | 1× `LinPageLayout` + `LinCatalogDataGrid` + `LinCatalogListPagination` | **giữ** |
| KPI strip | 4 ô `beforeToolbar` | **giữ** |
| Payment lines | inline grid trên Slideout | **giữ** trên full-page form |
| Excel / quyết toán / sign API | out of pack | **DEFER** (không mở rộng P1) |
| PO/Design files | confirmed prior task | **keep** · Design re-chốt Kind B form từ Delta này |

## Kind / zones (handoff Design)

Pack **list** = Kind **B** catalog (MFE Contract). Demo HTML = Kind **B+D** slideout + KPI — **không** clone chrome/topnav/user menu vào MFE.

List-form quality / Dev constitution: **cấm** Resource / **Slideout** / View=`readOnly` Input trên UI list pack. Live MFE **đang** Slideout + View `readOnly` — **GAP**.

| Zone | Pattern | DoD |
|------|---------|-----|
| A | Header | title «Hợp đồng và ngân sách» — **cấm** Thêm mới trên A |
| B | Toolbar + filter | SearchTextInput · SearchInput loại / TT / **nhà thầu** · Tạo mới primary · Refresh · Delete · config · History · **search must work** |
| C | `LinCatalogDataGrid` | kéo cột default ON · Mã · Số HĐ · Tên · Loại · Nhà thầu · Giá trị · KPI · TT · Hết hạn · row menu Xem/Sửa/Copy/Xóa/Lịch sử |
| D | Footer | `LinCatalogListPagination` 50/100/200/500 — **cấm** footerPagination / pageSizeBar / raw table |
| Form | Kind B **full-page** | C/E/V/Copy · View=`<dl>` · footer-only Lưu/Hủy · leave-confirm dirty · deep-link thật |
| KPI strip | metric cards | Tổng giá trị · NS còn · KPI TB · sắp hết hạn — **IN** list |
| Payment lines | `pattern_inline_grid` | kỳ · tiền · ngày · TT · ghi chú — **IN** P1 |
| Excel / quyết toán / KPI modal / WO nav | Kind F / stub | **P2 / DEFER** — không clone demo modal vào P1 CRUD |

**Skip chrome:** hub · user menu · badge skin demo.

## Control hint — list filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · số HĐ · tên · nhà thầu |
| type | Loại hợp đồng | `SearchInput` | enum | bảo trì · nâng cấp · khác — live **PASS** |
| status | Trạng thái | `SearchInput` | enum | nháp · đã ký · đang TH · thanh toán · quyết toán · đóng — live **PASS** |
| contractor | Nhà thầu | `SearchInput` | enum / **UNCLEAR** partner master | live **MISSING** filter — GAP · demo select |

## Control hint — form fields

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| code | Mã HĐ | `Text` | auto | IdCode `CTR-yyyyMMdd-nnnn` readonly display |
| contractNo | Số HĐ | `Text` | * | |
| name | Tên HĐ | `Text` | * | |
| type | Loại HĐ | `SearchInput` | * | enum 3 · **cấm** Select |
| contractor | Nhà thầu | `SearchInput` | * | P1 enum 3 · **UNCLEAR** partner-unit P2 |
| amount | Giá trị HĐ | `Money` | * | MoneyInput max-width 200px |
| status | Trạng thái | `SearchInput` | * | enum 6 · **cấm** Select |
| signedAt | Ngày ký | `Date` | | `type=date` |
| effectiveFrom | Ngày hiệu lực | `Date` | | cùng hàng với effectiveTo khi 2-col |
| effectiveTo | Ngày hết hạn | `Date` | | |
| budgetAllocated | Ngân sách năm | `Money` | | |
| disbursed | Đã giải ngân | `Money` | | **readonly display** (computed/sum lines) — View `<dl>` |
| budgetYear | Năm NS | `Integer` | | |
| kpiScore | Điểm KPI | `Number` | | 0–100 |
| slaPct | SLA % | `Number` | | 0–100 |
| warrantyMonths | Tháng BH | `Integer` | | |
| warrantyExpires | Ngày hết BH | `Date` | | |
| orgUnit | Đơn vị QL | `SearchInput` | | P1 enum hạt · **UNCLEAR** org-unit CUC2 |
| routeSegment | Tuyến/đoạn | `Text` | | P1 · **UNCLEAR** road-route SearchInput P2 |
| workOrderLink | Liên kết WO | `Text` | | P1 free code |
| note | Ghi chú | `Text` | | textarea |
| payments[].period | Kỳ TT | `Text` | * | inline grid |
| payments[].amount | Số tiền TT | `Money` | * | |
| payments[].paidAt | Ngày TT | `Date` | | |
| payments[].status | TT dòng | `SearchInput` | | chờ / đã chi / hủy · **cấm** Select |
| payments[].note | Ghi chú dòng | `Text` | | |

## Lookup APIs (đề xuất SA)

Domain **Contract** · prefix `api/v1/contract` · BFF `web-bff/api/v1/contract` · **cấm ERP.*** · **cấm** parent JSON.

| Lookup | API | controlHint consumer | BE |
|--------|-----|----------------------|-----|
| list | `GET /api/v1/contract/contracts?search=&type=&status=&contractor=&page=&pageSize=` | Zone B + grid | **DONE** + **delta** `contractor` |
| by id | `GET /api/v1/contract/contracts/{id}` | form View/Edit · XCO | **DONE** |
| create / update | `POST` / `PUT` | form C/E/Copy | **DONE** |
| soft delete | `DELETE` | toolbar/row | **DONE** |
| payments | nested DTO | inline grid | **DONE** `rmms_contract_payments` |
| type/status/contractor/org | P1 in-memory enum SearchInput | filters + form | **không** dedicated master P1 |
| partner-unit / org-unit / road-route | Master integration | P2 **UNCLEAR** | master pack |
| kpi / sign / settlement dedicated | — | | **DEFER** |

Entity: `ContractEntity` · table `rmms_contracts` · SHARE=tenant.  
Perms: `contract.contracts.read|create|update|delete`.

## Actions (list pack P1 vs demo)

| id | label | list pack P1 | Notes |
|----|-------|--------------|-------|
| refresh | Làm mới | **IN** | toolbar |
| filter / search | Lọc | **IN** | Zone B debounce · **không** nút Tìm |
| create | Tạo hợp đồng | **IN** | `/contract/new` full-page |
| view / edit / copy / delete | row + toolbar | **IN** | |
| history | Lịch sử | **IN** | stub modal |
| config | Cấu hình hiển thị danh mục | **IN** | `LinCatalogUiSchemaEditorModal` |
| add-line / remove-line | Dòng TT | **IN** | form |
| save / cancel | Lưu / Hủy | **IN** | footer-only |
| save-draft / approve / pay-record | Lưu nháp / Phê duyệt / Ghi nhận TT | **P2** | demo footer |
| export / settlement / nav-wo / refresh-kpi | Excel / quyết toán / WO | **P2** | demo toolbar |
| user-menu | User | **SKIP** | chrome |

## GAP (data-analy → Design/SA/TL/Dev)

| ID | Gap | Severity | Hướng |
|----|-----|----------|-------|
| GAP-DA-CTR-SLIDEOUT | Live = `ContractFormSlideout` + Navigate-bridge; SSOT = full-page · **cấm** Slideout | P0 | T-UI-FORM · T-UI-UX |
| GAP-DA-CTR-VIEW-RO | View = Input `readOnly`; SSOT View=`<dl>` | P0 | T-UI-FORM · T-UI-FIELD |
| GAP-DA-CTR-SELECT | Form Select loại/TT/payStatus | P0 | T-UI-LKP · T-UI-FIELD |
| GAP-DA-CTR-FILTER-NT | List thiếu filter nhà thầu (demo có) | P0 | T-UI-LIST · T-BE list query |
| GAP-DA-CTR-DESIGN-STALE | `ui/design.md` B+D Slideout + view=RO + Select | P0 docs | Design re-chốt |
| GAP-F-CTR-04 | Quyết toán full | DEFER P3 | stub |
| GAP-F-CTR-03 | dedicated kpi/sign/budgets | DEFER | fields on Contract |

## Handoff

→ **Design:** A–D + controlHint · **không** Select lookup · **không** Slideout / View=`readOnly` · keep prototype reviewUrl · Autopilot **ON** → self-confirm  
→ **SA:** thêm query `contractor` trên GET list · **cấm** ERP.* · không migration mới  
→ **TL:** T-UI-LIST (contractor) · T-UI-FORM full-page · T-UI-LKP/FIELD/PROD/UX · T-BE list filter  
→ **Dev:** sau `confirms.beRepo && uiRepo` (đã tick) · MFE `Linm.Web.RMMS.Contract` · `/contract`

Chain: role này **done**. Roles sau enqueue (Autopilot ON).

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.08.08.20 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.15.1 |
| rulesVersion | 2026.08.15.2 |
| generatedAt | 2026-08-16T04:20:00.000Z |
| versionGate | rechecked |
| orchestratorSkillVersion | 2026.08.15.1 |
| orchestratorWorkflowVersion | 2026.08.15.1 |

---
<!-- Version meta: skillVersion=2026.08.08.20 · schemaVersion=1 · workflowVersion=2026.08.15.1 · rulesVersion=2026.08.15.2 · versionGate=rechecked -->
