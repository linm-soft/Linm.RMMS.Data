# Sổ 03 — Trực BĐGT + chốt + sự cố

> **Slug:** `csdl-so-03` · parent [`csdl-cuc-2026.md`](csdl-cuc-2026.md) · hub [`csdl-so-sach.md`](csdl-so-sach.md)  
> **Status:** Dev **PASS** · typed implement · Pipeline next `qa`  
> **packKind:** `list` · Kind B list + Kind D Slideout  
> **resource:** `duty-incident-logs` · retire `duty-logs` + `checkpoint-duties`  
> **devSlash:** `/agent-dev`  
> **Analy:** [`ANALYSIS-AND-TASKS.md`](../../../specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md)  
> **API:** `api/v1/asset/csdl-records?resource=duty-incident-logs` · Schema_CsdlSo03 · **cấm** invent `infra` / ERP.*

## 1. Tổng quan

Gộp duty-logs + checkpoint-duties → 1 resource `duty-incident-logs`.

Entry: alias `/csdl-so-03` · hub `/so-ts/csdl-so-sach?resource=duty-incident-logs`. **≠** Sổ TS `so-ts-*`.

## 2. DoD (đo được)

1. List + search/filter work · empty grid VN.
2. Create/Edit/View/Copy · LeaveConfirmModal.
3. Cột form typed T-SO-03 + entries — **cấm** chỉ 3 ô `detail*`.
4. `yarn build` / e2e chỉ Dev/QA — Dev build **PASS**.

## 3. GAP

Merge/typed/route/formNo P1 closed @ Dev. Auth/org/XLS DEFER|OUT. Schema migration apply @ deploy.

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `done` | `done` | `2026-09-05T20:11:14.255Z` |
| mobile | — | — | — |
