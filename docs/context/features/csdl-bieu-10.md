# Biểu 10 — Kè, tường chắn

> **Slug:** `csdl-bieu-10` · parent [`csdl-cuc-2026.md`](csdl-cuc-2026.md) · hub [`csdl-so-sach.md`](csdl-so-sach.md)  
> **Status:** Typed CRUD **done** · Wave 1 export `edit_page` · `T-XLS-S10` · SA **PASS** · next **Team Lead**  
> **packKind:** `list` · Kind B list + Kind D Slideout  
> **resource:** `retaining-walls` · cột/layout: 21  
> **changeScope:** `edit_page` · **cấm** new_page typed re-CRUD  
> **devSlash:** `/implement-export-import-excel` (export) · typed prior `/agent-dev`  
> **Epic:** [`csdl-export-print.md`](csdl-export-print.md) Wave 1  
> **Analy:** [`ANALYSIS-AND-TASKS.md`](../../../specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md)  
> **API:** `api/v1/asset/csdl-records?resource=retaining-walls` · export `…/export?resource=` · import `…/import?resource=` · **cấm** invent `infra` / ERP.*

## 1. Tổng quan

Live hub Biểu 9 — formNo=10 · ≠ so-ts-retaining

Mở từ hub `/so-ts/csdl-so-sach?resource=retaining-walls`. **≠** Sổ TS `so-ts-*` (deep-link).

## 2. DoD (đo được)

### Typed CRUD (prior — done)
1. List + search/filter work · empty grid VN.
2. Create/Edit/View/Copy · LeaveConfirmModal.
3. Cột form = Excel/Word (cite analy) — **cấm** chỉ 3 ô `detail*`.
4. `yarn build` / e2e chỉ Dev/QA.

### Export Wave 1 (`T-XLS-S10` · edit_page)
1. **Xuất Excel** trên `catalogToolbar` · binary BFF · **cấm** toast stub = done.
2. Golden = Cục **16-sheet** xls sheet Biểu 10 · **cấm** hồ sơ 12+8.
3. **Cấm** export trên filter bar (**GAP-FILTER-BAR-08**).
4. Typed STATUS done **≠** export xong.

## 3. GAP

Xem `GAP-BIEU10-XLS-*` trên analy edit_page. Schema typed **keep** · **cấm** reopen new_page.

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `done` | `done` | `2026-09-17T23:42:59.663Z` |
| mobile | — | — | — |
