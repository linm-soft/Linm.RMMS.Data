# Biểu 07 — Lề / taluy / hàng rào

> **Slug:** `csdl-bieu-07` · parent [`csdl-cuc-2026.md`](csdl-cuc-2026.md) · hub [`csdl-so-sach.md`](csdl-so-sach.md)  
> **Status:** Context · Dev **confirmed** (typed Schema_CsdlBieu7 + `/csdl-bieu-07`) · Pipeline → `qa` pending  
> **packKind:** `list` · Kind B list + Kind D Slideout  
> **resource:** `shoulders-fences` · cột/layout: 20  
> **devSlash:** `/agent-dev`  
> **Analy:** [`ANALYSIS-AND-TASKS.md`](../../../specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md)  
> **API:** `api/v1/asset/csdl-records?resource=shoulders-fences` · typed child · **cấm** invent `infra` / ERP.*

## 1. Tổng quan

Alias `/csdl-bieu-07` + hub `?resource=shoulders-fences` · formNo **07** (renumber).

Mở từ hub `/so-ts/csdl-so-sach?resource=shoulders-fences`. **≠** Sổ TS `so-ts-*` (deep-link SHOULDER).

## 2. DoD (đo được)

1. List + search/filter work · empty grid VN.
2. Create/Edit/View/Copy · LeaveConfirmModal.
3. Cột form = Excel/Word (cite analy) — **cấm** chỉ 3 ô `detail*`.
4. `yarn build` / e2e chỉ Dev/QA.

## 3. GAP

Xem `GAP-CSDL-CUC-*` trên analy. Schema entity → `/database-migration` pair (**Schema_CsdlBieu7** added).

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `done` | `done` | `2026-09-05T09:57:18.639Z` |
| mobile | — | — | — |
