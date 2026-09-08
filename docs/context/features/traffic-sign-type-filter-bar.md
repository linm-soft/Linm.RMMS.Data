# Loại biển báo (traffic-sign-type) — filter bar context

**Page:** traffic-sign-type list · **kind:** catalog (Kind B) · **packKind:** `master`  
**Route live:** `/mas/loai-bien-bao` · `mfeStdUrl` `http://localhost:9318/mas/loai-bien-bao`  
**testIdPrefix:** `rmms-master-traffic-sign-type-list`  
**Package:** `LinErpListFilterBar` · `data-lin-list-layout="erp-filter-bar"`  
**Context review version:** `2026.09.05.8`  
**Dev:** `/agent-dev` · **T-UI-FILTER-01** · load **trước Write**

## 1. Fields

| # | Label VN | Control | Slot | API / query |
|---|----------|---------|------|-------------|
| 1 | Tìm | `SearchTextInput` | `leading` | `search` (mã + nội dung) |
| 2 | Nhóm QCVN | `Dropdown` | `leading` | `groupCode` · options ← GET `/init-data` `groupCodes` (P/W/R/I/S/KHAC) |
| 3 | Tìm | bar 🔍 | search | apply · page=1 |

**Cấm:** nút Tìm riêng · `ErpListHeaderFilters` · `LinListFilterField` · filterMaxWidthPx · ERP.* · invent pict/mã · hardcode `KIND_LABEL` group

**List GET:** `web-bff/api/v1/integration/traffic-sign-types?search=&groupCode=&page=&pageSize=`

## V1–V5 + V10

| ID | Check |
|----|-------|
| V1 | Title trái · filter cụm phải |
| V2 | 🔍 mép phải bar · **0** nút Tìm riêng |
| V3 | Dropdown groupCode ← init-data only |
| V4 | SearchTextInput mã+nội dung |
| V5 | 0× ErpListHeaderFilters / LinListFilterField |
| V10 | lấp hàng rồi wrap · **GAP-FILTER-WRAP-02** |

## Peer

- peerStdUrl: `http://localhost:9318/mas/loai-tai-san` (asset-type)
- FE BASE: `/integration/traffic-sign-types`
