# Biểu 14 — Hệ thống ITS (GTTM)

> **Slug:** `csdl-bieu-14` · parent [`csdl-cuc-2026.md`](csdl-cuc-2026.md) · hub [`csdl-so-sach.md`](csdl-so-sach.md)  
> **Status:** Context · Typed CRUD **done** · Wave 1 `T-XLS-S14` export · phase `po` **PASS** · next `design`  
> **packKind:** `list` · Kind B list + Kind D Slideout · **changeScope:** `edit_page`  
> **resource:** `its-systems` · cột/layout: 21  
> **devSlash:** `/implement-export-import-excel` (XLS) · prior `/agent-dev` typed  
> **mfeStdUrl:** `http://localhost:9301/so-ts/csdl-so-sach` · alias `/csdl-bieu-14`  
> **Analy:** [`ANALYSIS-AND-TASKS.md`](../../../specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md) · epic [`csdl-export-print.md`](csdl-export-print.md)  
> **API:** `api/v1/asset/csdl-records?resource=its-systems` · export `…/export?resource=` · typed `Schema_CsdlBieu14` · **cấm** invent `infra` / ERP.*

## 1. Tổng quan

NEW card hub · peer so-ts-its-camera (cite only · **cấm** merge)

Mở từ hub `/so-ts/csdl-so-sach?resource=its-systems` hoặc alias `/csdl-bieu-14`. **≠** Sổ TS `so-ts-*` (deep-link).

## 2. DoD (đo được)

1. List + search/filter work · empty grid VN.
2. Create/Edit/View/Copy · LeaveConfirmModal.
3. Cột form = Excel/Word (cite analy) — **cấm** chỉ 3 ô `detail*`.
4. `yarn build` PASS @ Dev · e2e chỉ `/agent-qa*`.

## 3. GAP

ORG P2 · Auth DEFER · peer merge none_p1 · **XLS in pipeline** (`T-XLS-S14` · GAP-BIEU14-XLS-*).

## 3b. Delta export (edit_page)

- Toolbar **Xuất Excel** trên `catalogToolbar` · BFF binary · golden Cục 16-sheet Biểu 14.
- **Cấm** filter-bar export · toast stub = done · golden hồ sơ 12+8 · reopen typed CRUD · merge `so-ts-its-camera` / ITS AiVision.

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `done` | `done` | `2026-09-18T02:07:14.239Z` |
| mobile | — | — | — |
