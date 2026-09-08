# Biểu 02 — Thống kê cầu

> **Slug:** `csdl-bieu-02` · parent [`csdl-cuc-2026.md`](csdl-cuc-2026.md) · hub [`csdl-so-sach.md`](csdl-so-sach.md)  
> **Status:** Implemented (typed) · Pipeline `qa` / `pending` · next `/agent-qa*`  
> **packKind:** `list` · Kind B list + Kind D Slideout  
> **resource:** `bridges` · cột/layout: 48  
> **devSlash:** `/agent-dev`  
> **Analy:** [`ANALYSIS-AND-TASKS.md`](../../../specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md)  
> **API:** `api/v1/asset/csdl-records?resource=bridges` · typed `CsdlBieu2Entity` · **cấm** invent `infra` / ERP.*

## 1. Tổng quan

GPS 3 điểm · dầm + phần dưới + gối/lan can · alias `/csdl-bieu-02` + hub.

Mở từ hub `/so-ts/csdl-so-sach?resource=bridges`. **≠** Sổ TS `so-ts-*` (deep-link).

## 2. DoD (đo được)

1. List + search/filter work · empty grid VN.
2. Create/Edit/View/Copy · LeaveConfirmModal.
3. Cột form typed 48 — **cấm** chỉ 3 ô `detail*`.
4. `yarn build` PASS · e2e chỉ QA.

## 3. Persist

- Table `rmms_csdl_bieu2` · migration `Schema_CsdlBieu2` · IdCode `BR-`

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `done` | `done` | `2026-09-05T08:33:57.416Z` |
| mobile | — | — | — |
