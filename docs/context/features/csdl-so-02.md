# Sổ 02 — Nhật ký tuần đường

> **Slug:** `csdl-so-02` · parent [`csdl-cuc-2026.md`](csdl-cuc-2026.md) · hub [`csdl-so-sach.md`](csdl-so-sach.md)  
> **Status:** Dev **confirmed** · Pipeline → QA · alias `/csdl-so-02`  
> **packKind:** `list` · Kind B list + Kind D Slideout · typed T-SO-02  
> **resource:** `patrol-logs` · formNo **02** · IdCode `SO-`  
> **mfeStdUrl:** `http://localhost:9301/csdl-so-02`  
> **devSlash:** `/agent-dev` (done) · next `/agent-qa*`  
> **Analy:** [`ANALYSIS-AND-TASKS.md`](../../../specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md)  
> **API:** `api/v1/asset/csdl-records?resource=patrol-logs` · Schema_CsdlSo02 · **cấm** invent `infra` / ERP.*

## 1. Tổng quan

Sổ 02 — Nhật ký tuần đường · typed header + entries · FileService ids P1.

Entry: `/csdl-so-02` · hub `/so-ts/csdl-so-sach?resource=patrol-logs`. **≠** Sổ TS `so-ts-*`.

## 2. DoD (đo được)

1. List + search/filter work · empty grid VN.
2. Create/Edit/View/Copy · LeaveConfirmModal.
3. Cột form = typed T-SO-02 — **cấm** chỉ 3 ô `detail*`.
4. `yarn build` PASS (Dev) · e2e chỉ QA.

## 3. GAP

Xem analy · residual: FileRef UI · duty-logs formNo display · Auth/org/XLS DEFER|OUT.

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `done` | `done` | `2026-09-05T17:49:29.240Z` |
| mobile | — | — | — |
