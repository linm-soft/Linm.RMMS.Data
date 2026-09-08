# Biểu 03 — Hầm đường bộ

> **Slug:** `csdl-bieu-03` · parent [`csdl-cuc-2026.md`](csdl-cuc-2026.md) · hub [`csdl-so-sach.md`](csdl-so-sach.md)  
> **Status:** Context · Pipeline `dev` **done** → `qa` pending  
> **packKind:** `list` · Kind B list + Kind D Slideout  
> **resource:** `road-tunnels` · cột/layout: 42  
> **devSlash:** `/agent-dev`  
> **mfeStdUrl:** `http://localhost:9301/csdl-bieu-03`  
> **Analy:** [`ANALYSIS-AND-TASKS.md`](../../../specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md)  
> **PO:** [`requirement.md`](../../../specs/csdl-bieu-03/po/requirement.md) · compact `handoff/po-compact.md`  
> **SA:** [`solution-discovery.md`](../../../specs/csdl-bieu-03/be/solution-discovery.md) · compact `handoff/sa-compact.md`  
> **Implement:** [`implement/csdl-bieu-03.md`](../../../specs/csdl-bieu-03/implement/csdl-bieu-03.md) · compact `handoff/dev-compact.md`  
> **API:** `api/v1/asset/csdl-records?resource=road-tunnels` · Schema_CsdlBieu3 · **cấm** invent `infra` / ERP.*

## 1. Tổng quan

GPS 3 điểm · 2 ống = 2 bản ghi GPS · typed `CsdlBieu3Entity`.

Mở từ alias `/csdl-bieu-03` hoặc hub `/so-ts/csdl-so-sach?resource=road-tunnels`. **≠** Sổ TS merge (deep-link only).

## 2. DoD (đo được)

1. List + search/filter work · empty grid VN.
2. Create/Edit/View/Copy · LeaveConfirmModal · tube two_rows.
3. Cột form typed 42 — **cấm** chỉ 3 ô `detail*`.
4. `yarn build` / `dotnet build` PASS · e2e chỉ QA.

## 3. GAP

Schema deploy: `Schema_CsdlBieu3` · org P2 · XLS OUT · Auth wire DEFER.

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `done` | `done` | `2026-09-05T09:13:05.834Z` |
| mobile | — | — | — |
