# Sổ 10 — Bình đồ duỗi thẳng tuyến

> **Slug:** `csdl-so-10` · parent [`csdl-cuc-2026.md`](csdl-cuc-2026.md) · hub [`csdl-so-sach.md`](csdl-so-sach.md)  
> **Status:** Context (typed **chưa** implement) · Pipeline `data_analy` / `draft`  
> **packKind:** `map` · Kind B list + Kind F map  
> **resource:** `route-strip-maps` · cột/layout: typed lines  
> **devSlash:** `/agent-dev-oms-map`  
> **Analy:** [`ANALYSIS-AND-TASKS.md`](../../../specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md)  
> **API:** `api/v1/asset/csdl-records?resource=route-strip-maps` đến SA typed · **cấm** invent `infra` / ERP.*

## 1. Tổng quan

NEW · Kind F · /agent-dev-oms-map

Mở từ hub `/so-ts/csdl-so-sach?resource=route-strip-maps`. **≠** Sổ TS `so-ts-*` (deep-link).

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
| web | `done` | `done` | `2026-09-06T04:45:24.955Z` |
| mobile | — | — | — |
