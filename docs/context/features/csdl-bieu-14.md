# Biểu 14 — Hệ thống ITS (GTTM)

> **Slug:** `csdl-bieu-14` · parent [`csdl-cuc-2026.md`](csdl-cuc-2026.md) · hub [`csdl-so-sach.md`](csdl-so-sach.md)  
> **Status:** Implemented (typed) · Pipeline **done** · review_confirm approve · QA/Review PASS  
> **packKind:** `list` · Kind B list + Kind D Slideout  
> **resource:** `its-systems` · cột/layout: 21  
> **devSlash:** `/agent-dev`  
> **Analy:** [`ANALYSIS-AND-TASKS.md`](../../../specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md)  
> **API:** `api/v1/asset/csdl-records?resource=its-systems` · Schema_CsdlBieu14 · **cấm** invent `infra` / ERP.*

## 1. Tổng quan

NEW · peer so-ts-its-camera (cite only)

Mở từ hub `/so-ts/csdl-so-sach?resource=its-systems` hoặc alias `/csdl-bieu-14`. **≠** Sổ TS `so-ts-*` (deep-link).

## 2. DoD (đo được)

1. List + search/filter work · empty grid VN.
2. Create/Edit/View/Copy · LeaveConfirmModal.
3. Cột form = Excel/Word (cite analy) — **cấm** chỉ 3 ô `detail*`.
4. `yarn build` / e2e chỉ Dev/QA — **yarn/dotnet build PASS** @ Dev.

## 3. GAP

Xem `GAP-CSDL-CUC-*` trên analy. Schema entity → migration `Schema_CsdlBieu14` (Dev).

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `done` | `done` | `2026-09-05T15:16:16.915Z` |
| mobile | — | — | — |
