# Sổ 08 — Kết quả BDTX

> **Slug:** `csdl-so-08` · parent [`csdl-cuc-2026.md`](csdl-cuc-2026.md) · hub [`csdl-so-sach.md`](csdl-so-sach.md)  
> **Status:** Context · pipeline **dev confirmed** → QA pending  
> **packKind:** `list` · Kind B list + Kind D Slideout  
> **resource:** `maintenance-work-logs` · typed header + entries 5 cột  
> **devSlash:** `/agent-dev`  
> **mfeStdUrl:** `http://localhost:9301/csdl-so-08`  
> **hubEntry:** `/so-ts/csdl-so-sach?resource=maintenance-work-logs`  
> **Analy:** [`ANALYSIS-AND-TASKS.md`](../../../specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md)  
> **API:** `api/v1/asset/csdl-records?resource=maintenance-work-logs` · **cấm** invent `infra` / ERP.*

## 1. Tổng quan

TT 41 PL IV Mẫu 2 · typed T-SO-08 (thầu · VP · Khu · tuyến Km · kỳ) + entries workItem·kmFrom/To·solution·mainResult·note.

Alias `/csdl-so-08` + hub `?resource=maintenance-work-logs` → cùng resource. **≠** Sổ TS `so-ts-*`.

## 2. DoD (đo được)

1. List + search/filter work · empty grid VN.
2. Create/Edit/View/Copy · LeaveConfirmModal.
3. Form typed — **cấm** chỉ 3 ô `detail*` / col1–3 · **cấm** kmAt.
4. `yarn build` PASS (Dev) · e2e chỉ QA.

## 3. GAP

GAP-CSDL-ORG-01 DEFER · GAP-CSDL-XLS-01 OUT · Schema_CsdlSo08 migration apply ops.

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `done` | `done` | `2026-09-05T19:22:08.827Z` |
| mobile | — | — | — |
