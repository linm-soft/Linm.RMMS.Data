# Biểu 09 — Mốc lộ giới / GPMB

> **Slug:** `csdl-bieu-09` · parent [`csdl-cuc-2026.md`](csdl-cuc-2026.md) · hub [`csdl-so-sach.md`](csdl-so-sach.md)  
> **Status:** Context (typed **chưa** implement) · Pipeline `data_analy` / `draft`  
> **packKind:** `list` · Kind B list + Kind D Slideout  
> **resource:** `boundary-markers` · cột/layout: 17  
> **devSlash:** `/agent-dev`  
> **Analy:** [`ANALYSIS-AND-TASKS.md`](../../../specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md)  
> **API:** `api/v1/asset/csdl-records?resource=boundary-markers` đến SA typed · **cấm** invent `infra` / ERP.*

## 1. Tổng quan

Live hub Biểu 8 — formNo=9

Mở từ hub `/so-ts/csdl-so-sach?resource=boundary-markers`. **≠** Sổ TS `so-ts-*` (deep-link).

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
| web | `done` | `done` | `2026-09-05T11:22:36.506Z` |
| mobile | — | — | — |
