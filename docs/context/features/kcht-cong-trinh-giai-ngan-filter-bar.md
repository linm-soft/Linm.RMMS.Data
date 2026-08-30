# Sổ giải ngân KCHT — filter bar context (PH4)

**Page:** `KchtDisburseBookPage` · **kind:** catalog sổ (Kind B nested)  
**Route:** `/kcht-cong-trinh/:id/giai-ngan` · **testIdPrefix:** `rmms-kcht-disburse-book`  
**Package:** `LinErpListFilterBar` · `data-lin-list-layout="erp-filter-bar"`  
**Context review version:** `2026.08.29.1`  
**Skills:** `/filter-bar-context` · `filter-bar-layout-hard`  
**Dev:** `/agent-dev` · **T-UI-FILTER-DISB-01** — load **trước Write**  
**SA:** API-D01 · `GET …/projects/{id}/disbursements`

---

## 1. Fields

| # | Label VN | Control | Slot | API / query |
|---|----------|---------|------|-------------|
| 1 | Tìm kiếm | `SearchTextInput` | `leading` | `search` |
| 2 | Nhóm chi phí | `SearchInput` · `kcht-cost-group` | `leading` | `costGroup` |
| 3 | Đơn vị / đối tượng | `SearchInput` · partner/org | `leading` | `partyCode` |
| 4 | Loại chứng từ | `SearchInput` · `kcht-voucher-kind` | `leading` | `voucherKind` |
| 5 | Quý (SCTX) | `SearchInput` / Select · khi layout SCTX | `leading` | `quarterCode` |
| 6 | Tìm | bar `onSearch` 🔍 | search | apply → page=1 |

**Cấm:** export trên bar · `ErpListHeaderFilters` · `LinListFilterField` · giả API KBNN.  
**Toolbar:** Refresh · Config · **Thêm giao dịch** · tab/segment **Đối chiếu KBNN** — không trên filter.
