# Design — contract (Hợp đồng và ngân sách)

| Field | Value |
|-------|-------|
| feature | `contract` |
| Feature Kind | **B+D** — Catalog list + **Slideout** form |
| status | `confirmed` |
| changeScope | `edit_page` |
| packKind | `list` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Contract` (`/contract`) |
| updatedAt | 2026-08-09T14:52:00.000Z |
| design_confirm | `approve` (autopilot · task_7e4ef9d4) |

## 0. Context & Demo (from PO)

| ID | Path | Notes |
|----|------|-------|
| CTX-CTR | `docs/context/features/contract.md` | API · entities · Kind B+D |
| DEM-CTR | `Linm.RMMS.Demo/.../contract-demo.html` | SSOT columns/fields · **không** clone chrome |
| DI-CTR | — | Excel **out of pack** |

## 1. Kind + UI pattern

| | |
|--|--|
| Feature Kind | **B+D** |
| List pattern | Catalog list — `LinPageLayout kind="catalog"` |
| Form pattern | **Slideout** (≥10 controls) |
| Routes | List `/contract` · form overlay · deep-link `/contract/new` · `/contract/:id` |
| Toolbar SSOT | `catalog-list-toolbar` + `erp-control-icon-map` (`editConfig`=`fa-cog`) |

## 2. Screens / zones

| Screen | FormMode | Zones | Controls |
|--------|----------|-------|----------|
| Hợp đồng & NS | list | **A Header · B Toolbar · C Grid · D Pagination** · KPI strip | SearchTextInput · type/status Select · row menu |
| Form HĐ | create/edit/view/copy | **Slideout** Z1 · Z1h · Z2a–d · Z3 | header + NS/KPI + payment lines · readOnly view |

## 3. Field inventory (cho SA)

| uiField | Label VN | Control | Required | FormMode lock |
|---------|----------|---------|----------|---------------|
| code | Mã HĐ | Text readonly | — | all RO · IdCode `CTR-yyyyMMdd-nnnn` |
| contractNo | Số HĐ | Text | * | view=RO |
| name | Tên HĐ | Text | * | view=RO |
| type | Loại HĐ | Select | * | view=RO |
| contractor | Nhà thầu | Select/Text | * | view=RO |
| amount | Giá trị HĐ | Money | * | view=RO |
| status | Trạng thái | Select | * | view=RO |
| signedAt | Ngày ký | Date | | view=RO |
| effectiveFrom | Ngày hiệu lực | Date | | view=RO |
| effectiveTo | Ngày hết hạn | Date | | view=RO |
| budgetAllocated | Ngân sách năm | Money | | view=RO |
| disbursed | Đã giải ngân | Money RO | | all RO |
| budgetYear | Năm NS | Number | | view=RO |
| kpiScore | Điểm KPI | Number | | view=RO |
| slaPct | SLA % | Number | | view=RO |
| warrantyMonths | Tháng BH | Number | | view=RO |
| warrantyExpires | Ngày hết BH | Date | | view=RO |
| orgUnit | Đơn vị QL | Text | | view=RO |
| routeSegment | Tuyến/đoạn | Text | | view=RO |
| workOrderLink | Liên kết WO | Text | | view=RO |
| note | Ghi chú | Textarea | | view=RO |
| payments[].period | Kỳ TT | Text | * | view=RO |
| payments[].amount | Số tiền TT | Money | * | view=RO |
| payments[].paidAt | Ngày TT | Date | | view=RO |
| payments[].status | TT dòng | Select | | view=RO |
| payments[].note | Ghi chú dòng | Text | | view=RO |

### List columns

STT · □ · Mã HĐ · Số HĐ · Tên HĐ · Loại · Nhà thầu · Giá trị · KPI · Trạng thái · Hết hạn · ⋯

### KPI strip (Zone A/B adjacent)

Tổng giá trị HĐ · Ngân sách còn · KPI TB · HĐ sắp hết hạn

## 4. Control map / hooks

- Shell: `LinPageLayout` · `ErpListHeaderFilters` · `SearchTextInput` · `useServerPagedListLoading`
- **A** `pageHeader`: title «Hợp đồng và ngân sách» — **cấm** Thêm mới trong header
- **B** `catalogToolbar`: refresh · history · config · **+ Tạo hợp đồng** (primary)
- Row menu: Xem · Sửa · Sao chép · Ký · Ghi nhận TT · Xem KPI · Xóa · Lịch sử
- View: `readOnly` — **cấm** disabled xám
- Search: card C · `?search=` · `?type=` · `?status=` · page/pageSize 50/100/200/500
- Payment lines: pattern_inline_grid + add/remove row (create/edit)

## Prototype (REQUIRED)

| | |
|--|--|
| Artifact | `ui/prototype/contract-list-prototype.html` |
| Zones | **A–D** list + Slideout Z1–Z3 sketch |
| Scope | content-only (no chrome / note / menu) |
| SSOT | `list-shell-prototype.md` · erp-form-context Kind B+D |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/contract/ui/prototype/contract-list-prototype.html` |

## Handoff → SA

- Route DOMAIN-MAP: `api/v1/contract/contracts`
- Child table payments — **cấm** parent `*Json`
- TZ: date fields on form (signed/effective/paid) · list filter không date P1 → `tz_na` list; form display local
- XCO GetById; SHARE tenant_keep

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-design |
| skillVersion | 2026.08.08.31 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.09.02 |
| generatedAt | 2026-08-09T14:52:00.000Z |
| versionGate | rechecked |
