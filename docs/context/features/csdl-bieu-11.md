# Biểu 11 — Chiếu sáng lưới + NLMT

> **Slug:** `csdl-bieu-11` · parent [`csdl-cuc-2026.md`](csdl-cuc-2026.md) · hub [`csdl-so-sach.md`](csdl-so-sach.md)  
> **Status:** Implemented (typed) · Pipeline `dev` **confirmed** · next QA  
> **packKind:** `list` · Kind B list + Kind D Slideout  
> **resource:** `lighting-systems` · cột/layout: 24 · **2 section** lưới + NLMT  
> **devSlash:** `/agent-dev`  
> **mfeStdRoute:** `/csdl-bieu-11` · hub `?resource=lighting-systems` · peer `/so-ts-lighting`  
> **Analy:** [`ANALYSIS-AND-TASKS.md`](../../../specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md)  
> **API:** `api/v1/asset/csdl-records?resource=lighting-systems` · entity `CsdlBieu11Entity` · **cấm** invent `infra` / ERP.*

## 1. Tổng quan

Qty LED + solar flat · ≠ so-ts-lighting (toolbar deep-link only · qty ≠ điểm)

Entry: alias `/csdl-bieu-11` + hub redirect.

## 2. DoD (đo được)

1. List + search/filter work · empty «Chưa có hệ thống chiếu sáng».
2. Create/Edit/View/Copy · LeaveConfirmModal · IdCode `LT-`.
3. Typed 24 cột · LED allow_zero · gridStatus align_status · cabinet split · solar optional.
4. `yarn build` / `dotnet build` PASS @ Dev · e2e @ QA only.

## 3. GAP / debt

- DB migrate apply · Auth wire DEFER · org SearchInput P2 · XLS OUT

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `done` | `done` | `2026-09-05T12:54:56.094Z` |
| mobile | — | — | — |
