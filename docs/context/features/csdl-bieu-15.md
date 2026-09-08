# Biểu 15 — TMC / thu phí / hạt / kho

> **Slug:** `csdl-bieu-15` · parent [`csdl-cuc-2026.md`](csdl-cuc-2026.md) · hub [`csdl-so-sach.md`](csdl-so-sach.md)  
> **Status:** Context (typed **implemented**) · Pipeline `review` **confirmed** · phase **done**  

 
> **packKind:** `list` · Kind B list + Kind D Slideout  
> **resource:** `ops-facilities` · cột/layout: 20  
> **devSlash:** `/agent-dev`  
> **Analy:** [`ANALYSIS-AND-TASKS.md`](../../../specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md)  
> **API:** `api/v1/asset/csdl-records?resource=ops-facilities` đến SA typed · **cấm** invent `infra` / ERP.*

## 1. Tổng quan

NEW · facilityKind 5 loại

Mở từ hub `/so-ts/csdl-so-sach?resource=ops-facilities`. **≠** Sổ TS `so-ts-*` (deep-link).

## 2. DoD (đo được)

1. List + search/filter work · empty grid VN.
2. Create/Edit/View/Copy · LeaveConfirmModal.
3. Cột form = Excel/Word (cite analy) — **cấm** chỉ 3 ô `detail*`.
4. `yarn build` / e2e chỉ Dev/QA.

## 3. GAP

Xem `GAP-CSDL-CUC-*` trên analy. Schema entity → `/database-migration` pair.

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `done` | `done` | `2026-09-05T16:00:11.191Z` |
| mobile | — | — | — |
