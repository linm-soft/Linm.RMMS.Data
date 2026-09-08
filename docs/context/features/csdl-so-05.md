# Sổ 05 — TNGT + điểm đen

> **Slug:** `csdl-so-05` · parent [`csdl-cuc-2026.md`](csdl-cuc-2026.md) · hub [`csdl-so-sach.md`](csdl-so-sach.md)  
> **Status:** Dev **implemented** (typed) · Pipeline → QA queued  
> **packKind:** `list` · Kind B list + Kind D Slideout 2col · **3 tabs** C.1/C.2/BS  
> **resource:** `accident-summaries` · formNo `05` · IdCode `SO-`  
> **devSlash:** `/agent-dev`  
> **mfeStdUrl:** `http://localhost:9301/csdl-so-05`  
> **hub:** `/so-ts/csdl-so-sach?resource=accident-summaries`  
> **API:** `api/v1/asset/csdl-records?resource=accident-summaries` (+ BFF) · **cấm** invent `infra` / ERP.* / runtime `/api/v1/accident-summaries`

## 1. Tổng quan

NEW typed Sổ 05 · shell + `Schema_CsdlSo05` + 3 child collections. Peer so-04 `traffic-counts` ROW riêng · **cấm** merge · title so-04 không «(+ TNGT)».

## 2. Surfaces

| Surface | Path |
|---------|------|
| Alias list | `/csdl-so-05` |
| Hub card | `?resource=accident-summaries` |
| Form | Kind D Slideout · tabs C.1 / C.2 / BS add-row |
| Lookups | road-route |
| Report peer | `rpt-tngt` RO (không CRUD) |

## 3. DoD (đo được)

1. List + filter year/periodType/tableKind/road · empty «Chưa có sổ TNGT / điểm đen».
2. Create/Edit/View/Copy · LeaveConfirm · History · soft delete.
3. Typed header + 3 grids — **cấm** chỉ 3 ô `detail*` / col1–3 / 16 hạng.
4. `yarn build` + `dotnet build` PASS · e2e chỉ QA.

## 4. Persist

- Header: `rmms_csdl_so05` (Year · PeriodType · PeriodValue · TableKind · rollups)
- Children: `rmms_csdl_so05_c1` · `_c2` · `_bs`
- Migration: `Schema_CsdlSo05` (apply ops)

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `done` | `done` | `2026-09-05T23:36:29.335Z` |
| mobile | — | — | — |
