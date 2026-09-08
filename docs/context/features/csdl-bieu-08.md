# Biểu 08 — Hệ thống ATGT

> **Slug:** `csdl-bieu-08` · parent [`csdl-cuc-2026.md`](csdl-cuc-2026.md) · hub [`csdl-so-sach.md`](csdl-so-sach.md)  
> **Status:** Typed **done** (Dev) · Pipeline `qa` / `pending`  
> **packKind:** `list` · Kind B list + Kind D Slideout **shared + 1 child**  
> **resource:** `traffic-safety` · cột/layout: 45 · **11 nhóm** `assetType`  
> **devSlash:** `/agent-dev`  
> **Analy:** [`ANALYSIS-AND-TASKS.md`](../../../specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md) §1.4  
> **API:** `api/v1/asset/csdl-records?resource=traffic-safety` · typed `CsdlBieu8*` · **cấm** invent `infra` / ERP.*  
> **Hai lớp:** LOOKUP `road-route` chung · ROW riêng vs Sổ TS ATGT (`GAP-CSDL-CUC-11`)

## 1. Tổng quan

Cục **Biểu 08** ATGT. Alias `/csdl-bieu-08`. **≠** hub generic 3 ô `detail*` · **≠** merge Sổ TS.

**Live (Dev PASS):** `CsdlBieu08Page` + Slideout · `CsdlBieu8Entity` + 11 child · `Schema_CsdlBieu8` (`20260905102400`) · hub/QS → alias · formNo ATGT=08.

## 2. DoD (đo được)

1. Click hub ATGT mở `/csdl-bieu-08` · list + filter `assetType` · **subset_by_type**.
2. Create/Edit/View/Copy Slideout · LeaveConfirm · đổi type → confirm clear child.
3. Form = shared + 1 child theo `assetType` — **cấm** chỉ 3 ô `detail*`.
4. `yarn build` / `dotnet build` **PASS** · e2e chỉ QA.

## 3. GAP

`GAP-CSDL-CUC-08` / `GAP-CSDL-CUC-11` · `GAP-BIEU08-*` — closed @ Dev (apply migration @ deploy).

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `done` | `done` | `2026-09-05T10:41:25.171Z` |
| mobile | — | — | — |
