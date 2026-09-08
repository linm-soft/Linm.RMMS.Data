# Biểu 04 — Cống các loại

> **Slug:** `csdl-bieu-04` · parent [`csdl-cuc-2026.md`](csdl-cuc-2026.md) · hub [`csdl-so-sach.md`](csdl-so-sach.md)  
> **Status:** Implemented (typed) · Pipeline `dev` **confirmed** · next `qa`  
> **packKind:** `list` · Kind B list + Kind D Slideout  
> **resource:** `culverts` · cột/layout: 17 · IdCode `CG-`  
> **devSlash:** `/agent-dev`  
> **mfeStdUrl:** `http://localhost:9301/csdl-bieu-04`  
> **Analy:** [`ANALYSIS-AND-TASKS.md`](../../../specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md)  
> **API:** `api/v1/asset/csdl-records?resource=culverts` · typed `CsdlBieu4Entity` · **cấm** invent `infra` / ERP.*

## 1. Tổng quan

≠ Sổ TS so-ts-culvert-x · deep-link only

Alias `/csdl-bieu-04` + hub `/so-ts/csdl-so-sach?resource=culverts`. **≠** Sổ TS `so-ts-*` (deep-link).

## 2. DoD (đo được)

1. List + search/filter work · empty grid VN.
2. Create/Edit/View/Copy · LeaveConfirmModal.
3. Cột form typed 17 (GPS four_xy · shape · load free_text) — **cấm** chỉ 3 ô `detail*`.
4. `yarn build` / `dotnet build` **PASS** (Dev) · e2e chỉ QA.

## 3. GAP

Xem `GAP-CSDL-CUC-*` trên analy. Migration `Schema_CsdlBieu4` apply at deploy.

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `done` | `done` | `2026-09-05T06:29:50.376Z` |
| mobile | — | — | — |
