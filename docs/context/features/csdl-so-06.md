# Sổ 06 — QL cầu / phiếu KT

> **Slug:** `csdl-so-06` · parent [`csdl-cuc-2026.md`](csdl-cuc-2026.md) · hub [`csdl-so-sach.md`](csdl-so-sach.md)  
> **Status:** Context · typed **implemented** (Dev confirmed) · Pipeline → `qa`  
> **packKind:** `list` · Kind B list + Kind D Slideout · entries **fixed-20**  
> **resource:** `bridge-inspections`  
> **devSlash:** `/agent-dev`  
> **Analy:** [`ANALYSIS-AND-TASKS.md`](../../../specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md)  
> **API:** `api/v1/asset/csdl-records?resource=bridge-inspections` · **cấm** invent `infra` / ERP.* / runtime `/api/v1/bridge-inspections`

## 1. Tổng quan

20 bộ phận cố định · link Biểu 2 · alias `/csdl-so-06` + hub `?resource=bridge-inspections`.

## 2. DoD (đo được)

1. List + search/filter work · empty grid VN.
2. Create/Edit/View/Copy · LeaveConfirmModal · fixed-20.
3. Cột form typed (cite analy) — **cấm** chỉ 3 ô `detail*`.
4. `yarn build` / e2e chỉ Dev/QA — Dev builds **PASS**.

## 3. GAP

Xem `GAP-CSDL-CUC-*` / `GAP-SO06-*` trên analy. Migration `Schema_CsdlSo06` — apply DB ops.

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `done` | `done` | `2026-09-05T21:05:15.428Z` |
| mobile | — | — | — |

## Live surfaces

| Surface | Path |
|---------|------|
| mfeStdUrl | `http://localhost:9301/csdl-so-06` |
| hub | `/so-ts/csdl-so-sach?resource=bridge-inspections` → redirect `/csdl-so-06` |
| FE | `Linm.Web.RMMS.Asset/src/pages/CsdlSo06Page/` |
| BE | `CsdlSo06Entity` · `rmms_csdl_so06` · `CsdlCatalogService` |
