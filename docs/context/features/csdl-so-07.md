# Sổ 07 — HL + GPTC + Dự án

> **Slug:** `csdl-so-07` · parent [`csdl-cuc-2026.md`](csdl-cuc-2026.md) · hub [`csdl-so-sach.md`](csdl-so-sach.md)  
> **Status:** Typed **implemented** (Dev confirmed) · Pipeline `qa` pending  
> **packKind:** `list` · Kind B list + Kind D Slideout · 2 tab nested  
> **resource:** `row-violations` · cột/layout: typed header + `violations[]` / `permits[]`  
> **devSlash:** `/agent-dev` (done) · next `/agent-qa*`  
> **Analy:** [`ANALYSIS-AND-TASKS.md`](../../../specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md)  
> **API:** `api/v1/asset/csdl-records?resource=row-violations` · `Schema_CsdlSo07` · **cấm** invent `infra` / ERP.*

## 1. Tổng quan

Sổ 07 — hành lang ATĐB + GP thi công + khối QLDA (P1 Text).

Entry: alias `/csdl-so-07` + hub `/so-ts/csdl-so-sach?resource=row-violations`. **≠** Sổ TS `so-ts-*` (deep-link).

## 2. DoD (đo được)

1. List + search/filter work · empty grid VN.
2. Create/Edit/View/Copy · LeaveConfirmModal · 2 tab add/remove.
3. Cột form typed — **cấm** chỉ 3 ô `detail*`.
4. `yarn build` PASS (Dev) · e2e chỉ QA.

## 3. GAP

Xem `GAP-SO07-*` / `GAP-CSDL-*` trên analy. Migration `Schema_CsdlSo07` — apply ops.

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `done` | `done` | `2026-09-05T22:04:01.751Z` |
| mobile | — | — | — |
