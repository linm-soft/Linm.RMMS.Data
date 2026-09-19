# Biểu 16 — Nút giao

> **Slug:** `csdl-bieu-16` · parent [`csdl-cuc-2026.md`](csdl-cuc-2026.md) · hub [`csdl-so-sach.md`](csdl-so-sach.md)  
> **Status:** Implemented (typed) · Wave 1 export `T-XLS-S16` · pipeline `data_analy` **done** · next `po`  
> **packKind:** `list` · Kind B list + Kind D Slideout  
> **resource:** `interchanges` · cột/layout: 39 · child `branches[]` min_1  
> **changeScope:** `edit_page` · **cấm** new_page typed CRUD  
> **devSlash:** `/implement-export-import-excel` (export) · typed CRUD keep  
> **Analy:** [`ANALYSIS-AND-TASKS.md`](../../../specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md) · epic [`csdl-export-print.md`](csdl-export-print.md)  
> **API:** `api/v1/asset/csdl-records?resource=interchanges` · export `…/export?resource=` · **cấm** invent `infra` / ERP.*

## 1. Tổng quan

Typed Biểu 16 · Schema_CsdlBieu16 + Branch · IdCode `IX-` · alias `/csdl-bieu-16`.

Mở từ hub `/so-ts/csdl-so-sach?resource=interchanges`. **≠** Sổ TS `so-ts-interchange` (cite only · **cấm** merge).

**Edit (Wave 1):** Xuất Excel trên `catalogToolbar` · golden Cục 16-sheet · flatten `branches[]` → 1 row/nhánh · **cấm** filter-bar export · toast stub ≠ done.

## 2. DoD (đo được)

1. List + search/filter work · empty «Chưa có nút giao». *(typed — keep)*
2. Create/Edit/View/Copy · LeaveConfirmModal · branches min_1. *(typed — keep)*
3. Cột form typed 39 — **cấm** chỉ 3 ô `detail*`. *(typed — keep)*
4. **Xuất Excel** binary đúng sheet Biểu 16 · mở cạnh mẫu Cục · Import P1 theo Q-XLS-IMPORT.
5. `yarn build` PASS · e2e chỉ QA/Dev.

## 3. GAP

Typed hub/branch/route **closed**. Open: GAP-BIEU16-XLS-01..07 · GAP-FILTER-BAR-08 · GAP-EXP-STUB-01 · GAP-CSDL-CUC-04. Auth/org P2 debt giữ.

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `done` | `done` | `2026-09-18T03:27:59.232Z` |
| mobile | — | — | — |
