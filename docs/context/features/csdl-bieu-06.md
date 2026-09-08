# Biểu 06 — Hầm chui DS + hộp KT

> **Slug:** `csdl-bieu-06` · parent [`csdl-cuc-2026.md`](csdl-cuc-2026.md) · hub [`csdl-so-sach.md`](csdl-so-sach.md)  
> **Status:** Implemented (typed Schema_CsdlBieu6) · Pipeline `dev`  
> **packKind:** `list` · Kind B list + Kind D Slideout  
> **resource:** `underpasses` · cột/layout: 19  
> **mfeStdRoute:** `/csdl-bieu-06` · hub `?resource=underpasses`  
> **devSlash:** `/agent-dev`  
> **Analy:** [`ANALYSIS-AND-TASKS.md`](../../../specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md)  
> **API:** `api/v1/asset/csdl-records?resource=underpasses` · typed `CsdlBieu6Entity` · **cấm** invent `infra` / ERP.*

## 1. Tổng quan

Hầm chui dân sinh + hộp kỹ thuật — alias page `/csdl-bieu-06` + hub entry. Peer Sổ TS deep-link only.

Mở từ hub `/so-ts/csdl-so-sach?resource=underpasses`. **≠** Sổ TS `so-ts-*` (deep-link).

## 2. DoD (đo được)

1. List + search/filter work · empty grid VN.
2. Create/Edit/View/Copy · LeaveConfirmModal.
3. Cột form = Excel/Word (cite analy) — **cấm** chỉ 3 ô `detail*`.
4. `yarn build` / e2e chỉ Dev/QA.

## 3. GAP

Xem `GAP-CSDL-CUC-*` trên analy. Schema entity → `/database-migration` pair · **Schema_CsdlBieu6** done.

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `done` | `done` | `2026-09-05T07:53:28.691Z` |
| mobile | — | — | — |
