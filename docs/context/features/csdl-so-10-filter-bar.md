# Filter bar — csdl-so-10

> **Slug:** `csdl-so-10` · resource `route-strip-maps`  
> **Load trước Write:** `/filter-bar-context` · `filter-bar-pipeline.md` · `filter-bar-layout-hard` V1–V10  
> **Component:** `LinErpListFilterBar` · **cấm** `ErpListHeaderFilters` · `LinListFilterField` · nút **Tìm**

## Fields (1 hàng · lấp rồi wrap · 🔍 mép phải)

| id | label | control | query key | source |
|----|-------|---------|-----------|--------|
| search | Tìm | SearchTextInput + 🔍 phải | `search` | mã · sổ · thầu · đường |
| province | Tỉnh | Dropdown | `province` | LOOKUP_STATIC PROVINCES P1 |
| status | TT | Dropdown | `status` | tot\|tb\|kem\|hong |
| roadCode | Đường | SearchInput | `roadCode` | API-LKP-01 road-route |
| fromDate | Từ kỳ | Date | `fromDate` | periodStart TZ |
| toDate | Đến kỳ | Date | `toDate` | periodEnd TZ |

**Const:** `resource=route-strip-maps` (QS/hub).  
**Pagination:** pageSize 50/100/200/500 · filter change → page=1.  
**Cấm:** action/export trên filter bar · 2 nút Tìm · wrap sớm (GAP-FILTER-WRAP-02).
