# Biểu 02 — Thống kê cầu

> **Slug:** `csdl-bieu-02` · parent [`csdl-cuc-2026.md`](csdl-cuc-2026.md) · hub [`csdl-so-sach.md`](csdl-so-sach.md)  
> **Status:** Typed CRUD done · Wave 1 export `edit_page` · TL **confirmed** · next `/agent-dev`  
> **packKind:** `list` · Kind B list + Kind D Slideout  
> **resource:** `bridges` · cột/layout: 48  
> **changeScope:** `edit_page` · `T-XLS-S02` · epic [`csdl-export-print.md`](csdl-export-print.md)  
> **devSlash:** `/implement-export-import-excel` (export) · typed CRUD **cấm** reopen  
> **Analy:** [`ANALYSIS-AND-TASKS.md`](../../../specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md) · control-hint/real-data `edit_page`  
> **PO:** [`requirement.md`](../../../specs/csdl-bieu-02/po/requirement.md) · Q-XLS SCOPE=filtered · IMPORT=export_only_p0  
> **TL:** [`task/csdl-bieu-02.md`](../../../specs/csdl-bieu-02/task/csdl-bieu-02.md) · T-XLS-BE/BFF/FE/QA · Import OUT  
> **API:** `api/v1/asset/csdl-records?resource=bridges` · export `/export?resource=bridges` · typed `CsdlBieu2Entity` · **cấm** invent `infra` / ERP.*

## 1. Tổng quan

GPS 3 điểm · dầm + phần dưới + gối/lan can · alias `/csdl-bieu-02` + hub · **Xuất Excel** toolbar (Wave 1).

Mở từ hub `/so-ts/csdl-so-sach?resource=bridges`. **≠** Sổ TS `so-ts-*` (deep-link).

## 2. DoD (đo được)

1. List + search/filter work · empty grid VN (typed keep).
2. Create/Edit/View/Copy · LeaveConfirmModal (typed keep).
3. Cột form typed 48 — **cấm** chỉ 3 ô `detail*` (typed keep).
4. **Xuất Excel** binary sheet Biểu 2 · filtered · **cấm** toast stub · **cấm** filter-bar export.
5. `yarn build` PASS · e2e chỉ QA (Dev/QA).

## 3. Persist

- Table `rmms_csdl_bieu2` · migration `Schema_CsdlBieu2` · IdCode `BR-`
- Export: `GET …/csdl-records/export?resource=bridges` · Import P1 DEFER

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `done` | `done` | `2026-09-17T19:20:32.998Z` |
| mobile | — | — | — |
