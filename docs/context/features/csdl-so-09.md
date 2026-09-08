# Sổ 09 — QL vận hành ITS/ETC/KSTTX

> **Slug:** `csdl-so-09` · parent [`csdl-cuc-2026.md`](csdl-cuc-2026.md) · hub [`csdl-so-sach.md`](csdl-so-sach.md)  
> **Status:** Context (typed **chưa** implement) · Pipeline `data_analy` / `draft`  
> **packKind:** `list` · Kind B list + Kind D Slideout  
> **resource:** `its-ops-logs` · cột/layout: typed lines  
> **devSlash:** `/agent-dev`  
> **Analy:** [`ANALYSIS-AND-TASKS.md`](../../../specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md)  
> **API:** `api/v1/asset/csdl-records?resource=its-ops-logs` đến SA typed · **cấm** invent `infra` / ERP.*

## 1. Tổng quan

NEW · ca trực thiết bị · link Biểu 14

Mở từ hub `/so-ts/csdl-so-sach?resource=its-ops-logs`. **≠** Sổ TS `so-ts-*` (deep-link).

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
| web | `done` | `done` | `2026-09-06T00:22:41.777Z` |
| mobile | — | — | — |
