# Filter bar — csdl-so-02

> **Slug:** `csdl-so-02` · resource `patrol-logs`  
> **Load trước Write:** `/filter-bar-context` · `filter-bar-layout-hard` V1–V10  
> **Component:** `LinErpListFilterBar` · **cấm** `ErpListHeaderFilters` · `LinListFilterField` · nút **Tìm** riêng  
> **Live:** `CsdlSo02Page` · `testIdPrefix` `rmms-csdl-so-02-list` · mfeStdUrl `/csdl-so-02`

## Fields (1 hàng · lấp rồi wrap · 🔍 mép phải)

| id | label | control | query key | source |
|----|-------|---------|-----------|--------|
| search | Tìm | SearchTextInput + 🔍 phải | `search` | mã · sổ · thầu · đường · NV tuần |
| province | Tỉnh | Dropdown | `province` | LOOKUP_STATIC PROVINCES P1 + «Tất cả» |
| status | TT | Dropdown | `status` | tot\|tb\|kem\|hong + «Tất cả» |
| roadCode | Mã đường | SearchInput | `roadCode` | catalogKind `road-route` |
| fromDate | Từ ngày | Date (bar built-in) | `fromDate` | UpdatedAt / kỳ · TZ |
| toDate | Đến ngày | Date (bar built-in) | `toDate` | UpdatedAt / kỳ · TZ |

**Const:** `resource=patrol-logs` (QS/hub · không trên bar).  
**Pagination:** pageSize 50/100/200/500 · filter change → page=1.  
**Cấm:** action/export/config/CRUD trên filter bar · 2 nút Tìm · copy nguyên `csdl-so-sach-filter-bar`.

## Shell (live)

`data-lin-list-layout="erp-filter-bar"` · `LinErpListFilterBar` leading: search · province · status · roadCode · date pair via bar props.
