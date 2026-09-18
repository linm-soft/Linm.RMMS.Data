# Biểu 13 — Tường chống ồn

> **Slug:** `csdl-bieu-13` · parent [`csdl-cuc-2026.md`](csdl-cuc-2026.md) · hub [`csdl-so-sach.md`](csdl-so-sach.md)  
> **Status:** Context · Typed CRUD **done** · Wave 1 `T-XLS-S13` export · phase `data_analy` **PASS** · next `po`  
> **packKind:** `list` · Kind B list + Kind D Slideout · **changeScope:** `edit_page`  
> **resource:** `noise-barriers` · cột/layout: 13  
> **devSlash:** `/implement-export-import-excel` (XLS) · prior `/agent-dev` typed  
> **mfeStdUrl:** `http://localhost:9301/so-ts/csdl-so-sach` · alias `/csdl-bieu-13`  
> **Analy:** [`ANALYSIS-AND-TASKS.md`](../../../specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md) · epic [`csdl-export-print.md`](csdl-export-print.md)  
> **API:** `api/v1/asset/csdl-records?resource=noise-barriers` · export `…/export?resource=` · typed `Schema_CsdlBieu13` · **cấm** invent `infra` / ERP.*

## 1. Tổng quan

NEW card hub · peer so-ts-noise-barrier (cite only · **cấm** merge)

Mở từ hub `/so-ts/csdl-so-sach?resource=noise-barriers` hoặc alias `/csdl-bieu-13`. **≠** Sổ TS `so-ts-*`.

## 2. DoD (đo được)

1. List + search/filter work · empty «Chưa có tường chống ồn».
2. Create/Edit/View/Copy · LeaveConfirmModal · dim ≥0 · reject all-zero.
3. Cột form typed 13 — **cấm** chỉ 3 ô `detail*`.
4. `yarn build` PASS @ Dev · e2e chỉ `/agent-qa*`.

## 3. GAP

ORG P2 · Auth DEFER · peer merge none_p1 · **XLS in pipeline** (`T-XLS-S13` · GAP-BIEU13-XLS-*).

## 3b. Delta export (edit_page)

- Toolbar **Xuất Excel** trên `catalogToolbar` · BFF binary · golden Cục 16-sheet Biểu 13.
- **Cấm** filter-bar export · toast stub = done · golden hồ sơ 12+8 · reopen typed CRUD · merge `so-ts-noise-barrier`.

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `done` | `done` | `2026-09-18T01:31:37.085Z` |
| mobile | — | — | — |
