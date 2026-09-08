# Sổ 01 — Nhật ký tuần kiểm

> **Slug:** `csdl-so-01` · parent [`csdl-cuc-2026.md`](csdl-cuc-2026.md) · hub [`csdl-so-sach.md`](csdl-so-sach.md)  
> **Status:** Context (Typed **implemented** · Pipeline `dev` **confirmed** → `qa` pending  
> **packKind:** `list` · Kind B list + Kind D Slideout  
> **resource:** `inspection-logs` · cột/layout: typed lines  
> **devSlash:** `/agent-dev`  
> **Analy:** [`ANALYSIS-AND-TASKS.md`](../../../specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md)  
> **PO:** [`po/requirement.md`](../../../specs/csdl-so-01/po/requirement.md)  
> **API:** `api/v1/asset/csdl-records?resource=inspection-logs` đến SA typed · **cấm** invent `infra` / ERP.*

## 1. Tổng quan

Live Sổ 8 — formNo=1 · media sau SC

Mở từ hub `/so-ts/csdl-so-sach?resource=inspection-logs`. **≠** Sổ TS `so-ts-*` (deep-link).

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
| web | `done` | `done` | `2026-09-05T18:34:57.360Z` |
| mobile | — | — | — |
