# Biểu 01 — Phân loại mặt đường

> **Slug:** `csdl-bieu-01` · parent [`csdl-cuc-2026.md`](csdl-cuc-2026.md) · hub [`csdl-so-sach.md`](csdl-so-sach.md)  
> **Status:** Implemented (Dev) · Pipeline `qa` / `pending`  
> **packKind:** `list` · Kind B list + Kind D Slideout  
> **resource:** `pavement-sections` · cột/layout: 38  
> **devSlash:** `/agent-dev`  
> **Analy:** [`ANALYSIS-AND-TASKS.md`](../../../specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md)  
> **API:** `api/v1/asset/csdl-records?resource=pavement-sections` · typed `CsdlBieu1Entity` · **cấm** invent `infra` / ERP.*

## 1. Tổng quan

Typed 38 cột · alias `/csdl-bieu-01` · hub `?resource=pavement-sections` · peer Sổ TS deep-link `/so-ts/pl-mat-duong` (không merge form).

## 2. DoD (đo được)

1. List + search/filter work · empty grid VN.
2. Create/Edit/View/Copy · LeaveConfirmModal.
3. Cột form typed (four_buckets + structureType) — **cấm** chỉ 3 ô `detail*`.
4. `yarn build` / `dotnet build` **PASS** (Dev) · e2e → QA.

## 3. Live bind

| Layer | Path |
|-------|------|
| FE | `Linm.Web.RMMS.Asset/src/pages/CsdlBieu01Page/` · route `/csdl-bieu-01` |
| BE | `CsdlCatalogService` + `rmms_csdl_bieu1` · migration `Schema_CsdlBieu1` |
| BFF | `web-bff/api/v1/asset/csdl-records` proxy |
| UiSchema | catalogKind `pavement-sections` |

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `done` | `done` | `2026-09-05T05:51:30.340Z` |
| mobile | — | — | — |
