# Biểu 07 — Lề / taluy / hàng rào

> **Slug:** `csdl-bieu-07` · parent [`csdl-cuc-2026.md`](csdl-cuc-2026.md) · hub [`csdl-so-sach.md`](csdl-so-sach.md)  
> **Status:** Context · Dev **confirmed** (typed Schema_CsdlBieu7 + `/csdl-bieu-07`) · Wave 1 export `T-XLS-S07` → `data_analy`  
> **packKind:** `list` · Kind B list + Kind D Slideout  
> **resource:** `shoulders-fences` · cột/layout: 20  
> **devSlash:** `/agent-dev` · export `/implement-export-import-excel`  
> **Analy:** [`ANALYSIS-AND-TASKS.md`](../../../specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md)  
> **API:** `api/v1/asset/csdl-records?resource=shoulders-fences` · typed child · **cấm** invent `infra` / ERP.*  
> **Export epic:** [`csdl-export-print.md`](csdl-export-print.md) Wave 1 · `T-XLS-S07`

## 1. Tổng quan

Alias `/csdl-bieu-07` + hub `?resource=shoulders-fences` · formNo **07** (renumber).

Mở từ hub `/so-ts/csdl-so-sach?resource=shoulders-fences`. **≠** Sổ TS `so-ts-*` (deep-link SHOULDER).

## 2. DoD (đo được)

1. List + search/filter work · empty grid VN.
2. Create/Edit/View/Copy · LeaveConfirmModal.
3. Cột form = Excel/Word (cite analy) — **cấm** chỉ 3 ô `detail*`.
4. **Xuất Excel** trên `catalogToolbar` · binary BFF · sheet Biểu 7 Cục 16-sheet · **20 cột** · **cấm** filter bar · toast stub ≠ done. **(T-XLS-S07 · data_analy)**
5. `yarn build` / e2e chỉ Dev/QA.

## 3. GAP

Typed CRUD closed. Export: `GAP-BIEU07-XLS-*` · `GAP-FILTER-BAR-08` · Q-XLS-* open PO — xem analy control-hint `task_9ab3979a`. Schema entity → `/database-migration` pair (**Schema_CsdlBieu7** added).

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `done` | `done` | `2026-09-17T21:52:54.275Z` |
| mobile | — | — | — |
