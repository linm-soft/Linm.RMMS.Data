# Biểu 06 — Hầm chui DS + hộp KT

> **Slug:** `csdl-bieu-06` · parent [`csdl-cuc-2026.md`](csdl-cuc-2026.md) · hub [`csdl-so-sach.md`](csdl-so-sach.md)  
> **Status:** Typed Schema_CsdlBieu6 **done** · Wave 1 export `T-XLS-S06` · Pipeline `po` **confirmed** → Design  
> **packKind:** `list` · Kind B list + Kind D Slideout · **changeScope:** `edit_page`  
> **resource:** `underpasses` · cột/layout: 19  
> **mfeStdRoute:** `/csdl-bieu-06` · hub `?resource=underpasses`  
> **devSlash:** `/implement-export-import-excel` (export) · typed CRUD **cấm** reopen  
> **Epic:** [`csdl-export-print.md`](csdl-export-print.md) Wave 1 · `T-XLS-S06`  
> **Analy:** [`ANALYSIS-AND-TASKS.md`](../../../specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md)  
> **API:** `api/v1/asset/csdl-records?resource=underpasses` · export `/export?resource=underpasses` · typed `CsdlBieu6Entity` · **cấm** invent `infra` / ERP.*

## 1. Tổng quan

Hầm chui dân sinh + hộp kỹ thuật — alias page `/csdl-bieu-06` + hub entry. Peer Sổ TS deep-link only.

Mở từ hub `/so-ts/csdl-so-sach?resource=underpasses`. **≠** Sổ TS `so-ts-*` (deep-link).

## 2. DoD (đo được)

1. List + search/filter work · empty grid VN. **(typed done)**
2. Create/Edit/View/Copy · LeaveConfirmModal. **(typed done)**
3. Cột form = Excel/Word (cite analy) — **cấm** chỉ 3 ô `detail*`. **(typed done)**
4. **Xuất Excel** trên `catalogToolbar` · binary BFF · sheet Biểu 6 Cục 16-sheet · **cấm** filter bar · **cấm** toast stub = done. **(T-XLS-S06 · PO confirmed · Design next)**
5. `yarn build` / e2e chỉ Dev/QA.

## 3. GAP

Typed CRUD closed. Export: `GAP-BIEU06-XLS-*` · `GAP-FILTER-BAR-08` · Q-XLS-* closed PO (`filtered` · `export_only_p0` · filename) — xem `po/requirement.md` `task_fec070f9`.

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `sa` | `pending` | `2026-09-18T14:57:01.145Z` |
| mobile | — | — | — |
