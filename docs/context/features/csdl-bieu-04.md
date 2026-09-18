# Biểu 04 — Cống các loại

> **Slug:** `csdl-bieu-04` · parent [`csdl-cuc-2026.md`](csdl-cuc-2026.md) · hub [`csdl-so-sach.md`](csdl-so-sach.md)  
> **Status:** Context · typed CRUD **done** · Wave 1 export `T-XLS-S04` · `data_analy` **PASS** → `po` pending  
> **packKind:** `list` · Kind B list + Kind D Slideout · **changeScope:** `edit_page` (Xuất Excel)  
> **resource:** `culverts` · cột/layout: 17 · IdCode `CG-`  
> **devSlash:** `/implement-export-import-excel` (export) · typed CRUD **cấm** reopen  
> **mfeStdUrl:** `http://localhost:9301/so-ts/csdl-so-sach` · alias `/csdl-bieu-04`  
> **Epic export:** [`csdl-export-print.md`](csdl-export-print.md) Wave 1 · `T-XLS-S04`  
> **Analy:** [`csdl-bieu-04-control-hint.md`](../../../specs/_data-analy/features/csdl-bieu-04-control-hint.md) · compact `handoff/data_analy-compact.md`  
> **API:** `api/v1/asset/csdl-records?resource=culverts` · export/import · Schema_CsdlBieu4 · **cấm** invent `infra` / ERP.*

## 1. Tổng quan

≠ Sổ TS so-ts-culvert-x · deep-link only · **cấm** gộp sheet export.

Alias `/csdl-bieu-04` + hub `/so-ts/csdl-so-sach?resource=culverts`. **≠** Sổ TS `so-ts-*` (deep-link).

## 2. DoD (đo được)

**Typed CRUD (done):** list/filter · C/E/V/Copy · 17 cột · GPS four_xy · build PASS.

**Export edit_page (T-XLS-S04):**
1. **Xuất Excel** trên `catalogToolbar` · binary BFF · sheet Biểu 4 · 17 cột.
2. Golden = Cục **16-sheet** xls · **cấm** hồ sơ 12+8.
3. **Cấm** Xuất trên filter bar · toast stub ≠ done · **cấm** gộp Sổ TS.
4. Import P1 (Q-XLS-IMPORT) · e2e chỉ QA.

## 3. GAP

Schema deploy: `Schema_CsdlBieu4` · org P2 · Auth DEFER · **GAP-BIEU04-XLS-*** open (export wave).

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `done` | `done` | `2026-09-17T20:35:38.683Z` |
| mobile | — | — | — |
