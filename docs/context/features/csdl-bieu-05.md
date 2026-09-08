# Biểu 05 — Rãnh các loại

> **Slug:** `csdl-bieu-05` · parent [`csdl-cuc-2026.md`](csdl-cuc-2026.md) · hub [`csdl-so-sach.md`](csdl-so-sach.md)  
> **Status:** Implemented (web) · Pipeline → QA  
> **packKind:** `list` · Kind B list + Kind D Slideout  
> **resource:** `ditches` · cột/layout: 18  
> **devSlash:** `/agent-dev`  
> **Analy:** [`ANALYSIS-AND-TASKS.md`](../../../specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md)  
> **API:** `api/v1/asset/csdl-records?resource=ditches` · typed `Schema_CsdlBieu5` · **cấm** invent `infra` / ERP.*  
> **mfeStdUrl:** `http://localhost:9301/csdl-bieu-05`

## 1. Tổng quan

≠ so-ts-ditch

Alias `/csdl-bieu-05` + hub `/so-ts/csdl-so-sach?resource=ditches`. Peer Sổ TS deep-link only.

## 2. DoD (đo được)

1. List + search/filter work · empty grid VN. ✅
2. Create/Edit/View/Copy · LeaveConfirmModal. ✅
3. Cột form typed 18 (không chỉ `detail*`). ✅
4. `yarn build` PASS · e2e → QA. ✅ (build)

## 3. GAP

ORG P2 · XLS OUT · Auth permission stub shared.

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `done` | `done` | `2026-09-05T07:11:48.926Z` |
| mobile | — | — | — |
