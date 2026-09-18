# Biểu 05 — Rãnh các loại

> **Slug:** `csdl-bieu-05` · parent [`csdl-cuc-2026.md`](csdl-cuc-2026.md) · hub [`csdl-so-sach.md`](csdl-so-sach.md)  
> **Status:** Implemented (typed CRUD) · **edit_page** Wave 1 `T-XLS-S05` export — PO confirmed  

> **packKind:** `list` · Kind B list + Kind D Slideout  
> **changeScope:** `edit_page` · **cấm** new_page typed CRUD re-open  
> **resource:** `ditches` · cột/layout: 18  
> **devSlash:** `/implement-export-import-excel` (export) · prior `/agent-dev` typed done  
> **Epic:** [`csdl-export-print.md`](csdl-export-print.md) Wave 1 · `T-XLS-S05`  
> **Analy:** [`ANALYSIS-AND-TASKS.md`](../../../specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md)  
> **API:** `api/v1/asset/csdl-records?resource=ditches` · export `…/export?resource=ditches` · typed `Schema_CsdlBieu5` · **cấm** invent `infra` / ERP.*  
> **mfeStdUrl:** `http://localhost:9301/so-ts/csdl-so-sach` · alias `/csdl-bieu-05` · hub `?resource=ditches`

## 1. Tổng quan

≠ so-ts-ditch

Alias `/csdl-bieu-05` + hub `/so-ts/csdl-so-sach?resource=ditches`. Peer Sổ TS deep-link only.

## 2. DoD (đo được)

1. List + search/filter work · empty grid VN. ✅
2. Create/Edit/View/Copy · LeaveConfirmModal. ✅
3. Cột form typed 18 (không chỉ `detail*`). ✅
4. `yarn build` PASS · e2e → QA. ✅ (typed)
5. **Xuất Excel** trên `catalogToolbar` · binary BFF · sheet Biểu 5 Cục 16-sheet · **18 cột** · **cấm** filter bar · toast stub ≠ done. 🔲 `T-XLS-S05`

## 3. GAP

ORG P2 · Auth permission stub shared · **GAP-BIEU05-XLS-*** (export) · prior XLS OUT superseded.

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `done` | `done` | `2026-09-17T21:12:51.056Z` |
| mobile | — | — | — |
