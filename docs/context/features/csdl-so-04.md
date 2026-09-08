# Sổ 04 — Tổng hợp đếm xe

> **Slug:** `csdl-so-04` · parent [`csdl-cuc-2026.md`](csdl-cuc-2026.md) · hub [`csdl-so-sach.md`](csdl-so-sach.md)  
> **Status:** Context (typed **chưa** implement) · Pipeline `po` **confirmed** · next `design`  
> **packKind:** `list` · Kind B list + Kind D Slideout  
> **resource:** `traffic-counts` · cột/layout: typed lines  
> **devSlash:** `/agent-dev`  
> **Analy:** [`ANALYSIS-AND-TASKS.md`](../../../specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md)  
> **PO:** [`po/requirement.md`](../../../specs/csdl-so-04/po/requirement.md)  
> **API:** `api/v1/asset/csdl-records?resource=traffic-counts` đến SA typed · **cấm** invent `infra` / ERP.*

## 1. Tổng quan

16 hạng xe TCVN · tách TNGT

Mở từ hub `/so-ts/csdl-so-sach?resource=traffic-counts` · alias `/csdl-so-04`. **≠** Sổ TS `so-ts-*` (deep-link).

## 2. DoD (đo được)

1. List + search/filter work · empty grid VN.
2. Create/Edit/View/Copy · LeaveConfirmModal.
3. Cột form = Excel/Word (cite analy) — **cấm** chỉ 3 ô `detail*`.
4. `yarn build` / e2e chỉ Dev/QA.

## 3. GAP

Xem `GAP-CSDL-CUC-*` / `GAP-SO04-*` trên analy + PO. Schema entity → `/database-migration` pair.

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `done` | `done` | `2026-09-05T22:42:42.855Z` |
| mobile | — | — | — |
