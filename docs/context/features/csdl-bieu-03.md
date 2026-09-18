# Biểu 03 — Hầm đường bộ

> **Slug:** `csdl-bieu-03` · parent [`csdl-cuc-2026.md`](csdl-cuc-2026.md) · hub [`csdl-so-sach.md`](csdl-so-sach.md)  
> **Status:** Context · typed CRUD **done** · Wave 1 export `T-XLS-S03` · `po` **confirmed** → `design` pending  
> **packKind:** `list` · Kind B list + Kind D Slideout · **changeScope:** `edit_page` (Xuất Excel)  
> **resource:** `road-tunnels` · cột/layout: 42  
> **devSlash:** `/implement-export-import-excel` (export) · typed CRUD **cấm** reopen  
> **mfeStdUrl:** `http://localhost:9301/so-ts/csdl-so-sach` · alias `/csdl-bieu-03`  
> **Epic export:** [`csdl-export-print.md`](csdl-export-print.md) Wave 1 · `T-XLS-S03`  
> **Analy:** [`csdl-bieu-03-control-hint.md`](../../../specs/_data-analy/features/csdl-bieu-03-control-hint.md) · compact `handoff/data_analy-compact.md`  
> **PO:** [`requirement.md`](../../../specs/csdl-bieu-03/po/requirement.md) · compact `handoff/po-compact.md` (edit_page · Q-XLS chốt)  
> **SA:** [`solution-discovery.md`](../../../specs/csdl-bieu-03/be/solution-discovery.md) · compact `handoff/sa-compact.md`  
> **Implement:** [`implement/csdl-bieu-03.md`](../../../specs/csdl-bieu-03/implement/csdl-bieu-03.md) · compact `handoff/dev-compact.md`  
> **API:** `api/v1/asset/csdl-records?resource=road-tunnels` · export/import · Schema_CsdlBieu3 · **cấm** invent `infra` / ERP.*

## 1. Tổng quan

GPS 3 điểm · 2 ống = 2 bản ghi GPS · typed `CsdlBieu3Entity`.

Mở từ alias `/csdl-bieu-03` hoặc hub `/so-ts/csdl-so-sach?resource=road-tunnels`. **≠** Sổ TS merge (deep-link only).

## 2. DoD (đo được)

**Typed CRUD (done):** list/filter · C/E/V/Copy · 42 cột · tube two_rows · build PASS.

**Export edit_page (T-XLS-S03):**
1. **Xuất Excel** trên `catalogToolbar` · binary BFF · sheet Biểu 3 · 42 cột · 1 row/ống.
2. Golden = Cục **16-sheet** xls · **cấm** hồ sơ 12+8.
3. **Cấm** Xuất trên filter bar · toast stub ≠ done.
4. Import P1 (Q-XLS-IMPORT) · e2e chỉ QA.

## 3. GAP

Schema deploy: `Schema_CsdlBieu3` · org P2 · Auth DEFER · **GAP-BIEU03-XLS-*** open (export wave).

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `done` | `done` | `2026-09-17T19:55:57.387Z` |
| mobile | — | — | — |
