# Biểu 15 — TMC / thu phí / hạt / kho

> **Slug:** `csdl-bieu-15` · parent [`csdl-cuc-2026.md`](csdl-cuc-2026.md) · hub [`csdl-so-sach.md`](csdl-so-sach.md)  
> **Status:** Context (typed **implemented**) · Wave 1 export `T-XLS-S15` · phase `data_analy` **PASS** (`task_4b6f0c6e`)  
> **packKind:** `list` · Kind B list + Kind D Slideout  
> **resource:** `ops-facilities` · cột/layout: 20  
> **changeScope:** `edit_page` · **cấm** new_page typed CRUD re-open  
> **devSlash:** `/implement-export-import-excel` (export) · prior typed `/agent-dev`  
> **Analy:** [`ANALYSIS-AND-TASKS.md`](../../../specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md) · epic [`csdl-export-print.md`](csdl-export-print.md)  
> **API:** CRUD `api/v1/asset/csdl-records?resource=ops-facilities` · export `…/export?resource=` · **cấm** invent `infra` / ERP.*

## 1. Tổng quan

Typed **shipped** · facilityKind 5 loại · Wave 1 thêm **Xuất Excel** đúng sheet Cục.

Mở từ hub `/so-ts/csdl-so-sach?resource=ops-facilities`. **≠** Sổ TS `so-ts-*` (deep-link).

## 2. DoD (đo được)

1. List + search/filter work · empty grid VN. *(typed — keep)*
2. Create/Edit/View/Copy · LeaveConfirmModal. *(typed — keep)*
3. Cột form = Excel/Word (cite analy) — **cấm** chỉ 3 ô `detail*`. *(typed — keep)*
4. **Xuất Excel** trên `catalogToolbar` · BFF binary · golden Cục 16-sheet · **cấm** toast stub · **cấm** filter-bar export (**GAP-FILTER-BAR-08**).
5. `yarn build` / e2e chỉ Dev/QA.
6. Live title/nav **UTF-8** «Biểu 15 — TMC / thu phí / hạt / kho» — **cấm** mojibake `Biá»ƒu` (**GAP-DEV-VI-ENC-01**).

## 3. GAP

Xem `GAP-BIEU15-XLS-*` trên control-hint (export). Prior typed GAP closed. Schema entity typed — **cấm** re-migrate trừ SA gap.

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `done` | `done` | `2026-09-18T02:46:07.740Z` |
| mobile | — | — | — |
