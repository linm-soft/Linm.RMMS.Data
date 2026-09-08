# Biểu 16 — Nút giao

> **Slug:** `csdl-bieu-16` · parent [`csdl-cuc-2026.md`](csdl-cuc-2026.md) · hub [`csdl-so-sach.md`](csdl-so-sach.md)  
> **Status:** Implemented (typed) · Pipeline `dev` **confirmed** · next `qa`  
> **packKind:** `list` · Kind B list + Kind D Slideout  
> **resource:** `interchanges` · cột/layout: 39 · child `branches[]` min_1  
> **devSlash:** `/agent-dev`  
> **Analy:** [`ANALYSIS-AND-TASKS.md`](../../../specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md)  
> **API:** `api/v1/asset/csdl-records?resource=interchanges` · **cấm** invent `infra` / ERP.*

## 1. Tổng quan

Typed Biểu 16 · Schema_CsdlBieu16 + Branch · IdCode `IX-` · alias `/csdl-bieu-16`.

Mở từ hub `/so-ts/csdl-so-sach?resource=interchanges`. **≠** Sổ TS `so-ts-interchange` (cite only · **cấm** merge).

## 2. DoD (đo được)

1. List + search/filter work · empty «Chưa có nút giao».
2. Create/Edit/View/Copy · LeaveConfirmModal · branches min_1.
3. Cột form typed 39 — **cấm** chỉ 3 ô `detail*`.
4. `yarn build` PASS · e2e chỉ QA.

## 3. GAP

Hub/typed/branch/route đóng ở Dev. Apply migration runtime · e2e → QA. Auth/org/XLS DEFER.

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `done` | `done` | `2026-09-05T17:02:51.197Z` |
| mobile | — | — | — |
