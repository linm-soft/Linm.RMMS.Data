# Control map — `csdl-so-sach`

> **Slug:** `csdl-so-sach` · **sourceKind:** synthetic  
> **Kind:** G hub + B list + D slideout  
> **Demo:** `public/demo/asset/csdl-so-sach.html`  
> **Mirror:** `_raw/legacy-govone/demo-maps/csdl-so-sach-control-map.md`

## Fields (≥18)

| # | Field | Zone | Type | Notes |
|---|-------|------|------|-------|
| 1 | catalogTab | Hub | enum | `csdl` / `so` |
| 2 | resourceKey | List | select | 12 biểu + 8 sổ |
| 3 | searchText | List filter | text | Mã · đường · tên |
| 4 | province | List filter | select | Tỉnh/TP |
| 5 | roadName | List filter | text | Tên đường |
| 6 | status | List filter | select | Tình trạng |
| 7 | code | Form | text/readonly | IdCode `XX-YYYYMMDD-NNNN` |
| 8 | roadNameForm | Form | text | Bắt buộc |
| 9 | provinceForm | Form | select | Bắt buộc |
| 10 | kmFrom | Form | number | Lý trình từ |
| 11 | kmTo | Form | number | Lý trình đến |
| 12 | side | Form | enum | L/R/C/Both |
| 13 | statusForm | Form | select | Tình trạng |
| 14 | manageUnit | Form | text | ĐV quản lý |
| 15 | ownerUnit | Form | text | Chủ QLSD |
| 16 | detailPrimary | Form | text | Tên TS / sổ / hạng mục |
| 17 | detailSpec | Form | text/number | KC · Cdài · khẩu độ… (theo resource) |
| 18 | notes | Form | textarea | Ghi chú |
| 19 | updatedAt | Form | datetime ro | Audit |
| 20 | entryLines | Form (sổ) | inline_grid | Entries sổ |
| 21 | bookNo | Form (sổ) | text | Số sổ |
| 22 | contractor | Form (sổ) | text | Nhà thầu / trực |

## Actions (≥22 product · skip chrome user)

| # | Action | Control | Behavior demo |
|---|--------|---------|---------------|
| 1 | tab-csdl | Tab | Hiện 12 cards |
| 2 | tab-so | Tab | Hiện 8 cards |
| 3 | open-resource | Card | → list resource |
| 4 | back-hub | Button | ← catalog |
| 5 | search | Button/Enter | Filter list work |
| 6 | clear-filter | Button | Xóa ĐK |
| 7 | refresh | Button | Reload list toast |
| 8 | create | Button | Form Create |
| 9 | view | Row | Form View |
| 10 | edit | Row | Form Edit |
| 11 | copy | Row | Form Copy · reset code |
| 12 | delete | Row | Confirm soft-del local |
| 13 | save | Footer | Validate + localStorage |
| 14 | draft | Footer | Lưu nháp LS |
| 15 | close / back form | Header | Leave-confirm nếu dirty |
| 16 | cancel-changes | Footer | Restore snapshot |
| 17 | import | Toolbar | Toast stub Excel |
| 18 | export | Toolbar | Toast stub export |
| 19 | open-map | Toolbar | Deep-link gis-draw-live |
| 20 | open-p1 | Card Biểu1 | Deep-link pavement-section |
| 21 | add-entry | Lines (sổ) | Thêm dòng entry |
| 22 | remove-entry | Lines | Xóa dòng |
| 23 | print-book | Toolbar sổ | Toast PDF mẫu in |
| 24 | switch-page | Pager | pageSize 20 mock |

## Chrome skip (GOVOne)

logo · bell · user menu avatar — **không** bind action product.

## Action work gate

| Gate | Status |
|------|--------|
| List search | PASS |
| Create form | PASS |
| Edit form | PASS |
| View form | PASS |
| Copy form | PASS |
