# Biểu 12 — Cây xanh, thảm cỏ

> **Slug:** `csdl-bieu-12` · parent [`csdl-cuc-2026.md`](csdl-cuc-2026.md) · hub [`csdl-so-sach.md`](csdl-so-sach.md)  
> **Status:** Context · typed CRUD **done** · Wave 1 export `T-XLS-S12` · `data_analy` PASS → `po` pending  
> **packKind:** `list` · Kind B list + Kind D Slideout · **changeScope:** `edit_page`  
> **resource:** `green-assets` · cột/layout: 15  
> **devSlash:** `/implement-export-import-excel` (XLS) · typed keep `/agent-dev`  
> **Analy:** [`ANALYSIS-AND-TASKS.md`](../../../specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md) · epic [`csdl-export-print.md`](csdl-export-print.md)  
> **API:** `api/v1/asset/csdl-records?resource=green-assets` · Schema_CsdlBieu12 · export/import binary · **cấm** invent `infra` / ERP.* / so-ts-green  
> **mfeStdUrl:** `http://localhost:9301/so-ts/csdl-so-sach` · alias `/csdl-bieu-12`

## 1. Tổng quan

Khóm + m² cỏ — typed FE alias `/csdl-bieu-12` + hub `?resource=green-assets`.

Mở từ hub `/so-ts/csdl-so-sach?resource=green-assets`. **≠** Sổ TS `so-ts-*` (deep-link) · **cấm** invent so-ts-green.

## 2. DoD (đo được)

1. List + search/filter work · empty «Chưa có cây xanh, thảm cỏ» — **typed done**.
2. Create/Edit/View/Copy · LeaveConfirmModal · 2 section khóm + thảm cỏ — **typed done**.
3. Cột form typed 15 — **cấm** chỉ 3 ô `detail*` — **typed done**.
4. **Xuất Excel** trên `catalogToolbar` · BFF binary · golden Cục 16-sheet sheet Biểu 12 · **cấm** filter-bar export · toast stub ≠ done (`T-XLS-S12`).
5. `yarn build` PASS (Dev) · e2e chỉ QA.

## 3. GAP

Typed CRUD closed. Open Wave 1: `GAP-BIEU12-XLS-*` / `GAP-FILTER-BAR-08` — xem analy control-hint. Migration `Schema_CsdlBieu12` shipped · **cấm** reopen new_page typed.

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `done` | `done` | `2026-09-18T00:52:51.734Z` |
| mobile | — | — | — |
