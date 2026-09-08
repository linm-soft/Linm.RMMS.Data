# Biểu 12 — Cây xanh, thảm cỏ

> **Slug:** `csdl-bieu-12` · parent [`csdl-cuc-2026.md`](csdl-cuc-2026.md) · hub [`csdl-so-sach.md`](csdl-so-sach.md)  
> **Status:** Context · Pipeline `dev` **confirmed** → `qa` pending  
> **packKind:** `list` · Kind B list + Kind D Slideout  
> **resource:** `green-assets` · cột/layout: 15  
> **devSlash:** `/agent-dev`  
> **Analy:** [`ANALYSIS-AND-TASKS.md`](../../../specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md)  
> **API:** `api/v1/asset/csdl-records?resource=green-assets` · Schema_CsdlBieu12 · **cấm** invent `infra` / ERP.* / so-ts-green  
> **mfeStdUrl:** `http://localhost:9301/csdl-bieu-12`

## 1. Tổng quan

Khóm + m² cỏ — typed FE alias `/csdl-bieu-12` + hub `?resource=green-assets`.

Mở từ hub `/so-ts/csdl-so-sach?resource=green-assets`. **≠** Sổ TS `so-ts-*` (deep-link) · **cấm** invent so-ts-green.

## 2. DoD (đo được)

1. List + search/filter work · empty «Chưa có cây xanh, thảm cỏ».
2. Create/Edit/View/Copy · LeaveConfirmModal · 2 section khóm + thảm cỏ.
3. Cột form typed 15 — **cấm** chỉ 3 ô `detail*`.
4. `yarn build` PASS (Dev) · e2e chỉ QA.

## 3. GAP

Xem `GAP-CSDL-CUC-*` / Biểu12 trên analy. Migration `Schema_CsdlBieu12` shipped · apply DB runtime.

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `done` | `done` | `2026-09-05T13:39:44.845Z` |
| mobile | — | — | — |
