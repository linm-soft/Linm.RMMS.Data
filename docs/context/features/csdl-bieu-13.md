# Biểu 13 — Tường chống ồn

> **Slug:** `csdl-bieu-13` · parent [`csdl-cuc-2026.md`](csdl-cuc-2026.md) · hub [`csdl-so-sach.md`](csdl-so-sach.md)  
> **Status:** Context · Pipeline `dev` **confirmed** · next `qa`  
> **packKind:** `list` · Kind B list + Kind D Slideout  
> **resource:** `noise-barriers` · cột/layout: 13  
> **devSlash:** `/agent-dev`  
> **mfeStdUrl:** `http://localhost:9301/csdl-bieu-13`  
> **Analy:** [`ANALYSIS-AND-TASKS.md`](../../../specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md)  
> **API:** `api/v1/asset/csdl-records?resource=noise-barriers` · typed `Schema_CsdlBieu13` · **cấm** invent `infra` / ERP.*

## 1. Tổng quan

NEW card hub · peer so-ts-noise-barrier (cite only · **cấm** merge)

Mở từ hub `/so-ts/csdl-so-sach?resource=noise-barriers` hoặc alias `/csdl-bieu-13`. **≠** Sổ TS `so-ts-*`.

## 2. DoD (đo được)

1. List + search/filter work · empty «Chưa có tường chống ồn».
2. Create/Edit/View/Copy · LeaveConfirmModal · dim ≥0 · reject all-zero.
3. Cột form typed 13 — **cấm** chỉ 3 ô `detail*`.
4. `yarn build` PASS @ Dev · e2e chỉ `/agent-qa*`.

## 3. GAP

ORG P2 · XLS OUT · Auth DEFER · peer merge none_p1.

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `done` | `done` | `2026-09-05T14:26:35.073Z` |
| mobile | — | — | — |
