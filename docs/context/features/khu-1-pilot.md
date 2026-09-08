# Pilot dữ liệu Khu 1

> **Slug:** `khu-1-pilot` · **Module:** Data × Master × Filter  
> **Status:** Draft · họp 04/09/2026 hạng 3  
> **Kind:** list (filter/org) · **không** typed CSDL  
> **MFE:** `Linm.Web.RMMS.Asset` + Field + Gis (filter consume)  
> **BE:** `Linm.RMMS.WebService`  
> **Peer:** [`org-route-scope.md`](org-route-scope.md) · [`import-gov-ssot.md`](import-gov-ssot.md)

## 1. Mục tiêu

Dữ liệu thử nghiệm **Khu QLĐB I** (không nhầm Chi cục II.1 / QL.1 demo cũ). `ReImportSeed`/`ReInitData` scoped zone + filter list/map `/rmms-filter-org`.

## 2. Cấm

- Seed bịa · gộp zone vào `gov-vn` CSV · dataset khu-2/khu-4 riêng
- Enqueue lại 16 biểu + 10 sổ typed (đã pipeline done)
- Slug mobile riêng `khu-1-pilot` — native = **edit** filter trên `patrol-home` (cùng JWT org)

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `dev` | `pending` | `2026-09-06T15:45:49.211Z` |
| mobile | `scan` | `enqueue_later` | `2026-09-06` · `/scan-mobile-feature` · `patrol-home` |
