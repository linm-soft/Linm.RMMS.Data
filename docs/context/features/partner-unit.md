# Đơn vị đối tác (Sở / BOT / Cty) — Feature Context (Master)

> **Slug:** `partner-unit` · **Module:** Master · **Phase:** P1  
> **Status:** Context · **data-analy confirmed A** (2026-08-08)  
> **Feature Kind:** **B** — Catalog list + form  
> **packKind:** `master` — **không demo** · UI confirm Design  
> **Data-analy:** [`../../specs/_data-analy/shared-catalogs/INVESTIGATE-CUC2.md`](../../specs/_data-analy/shared-catalogs/INVESTIGATE-CUC2.md) §2  
> **MFE:** `Linm.Web.RMMS.Master` · `/mas/doi-tac`  
> **Hub:** [`master.md`](master.md) · khác [`org-unit.md`](org-unit.md) (cây DRVN) · form org [`partner-unit-form-org.md`](partner-unit-form-org.md)

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | Đơn vị **ngoài** cơ cấu Cục — Sở GTVT · BOT · DN bảo trì — filter/import ownership |
| Nguồn | Seed DRVN / partner catalog. Top-level `RMMS CUC 2` = **demo / archive** — không import production. |
| Count | **13** partners (tên demo archive — không import) |
| DoD | CRUD · SearchInput · kind SO_GTVT/BOT/DOANH_NGHIEP · map folder name |

## 2. Design / UI

Kind B list — Mã · Tên · Loại · Tỉnh? · Active.

## 3. API

`api/v1/integration/partner-units` · `GET ?search=&partnerKind=` · `/search` · `/init-data` · BFF `web-bff/api/v1/integration/partner-units` (DOMAIN-MAP **Integration** · **cấm** `open-api` SSOT · **cấm** `api/v1/rmms/*`). Code scheme **GAP-PARTNER-01:** `SO-*` / `BOT-*` / `DN-*`.

## 4. Fields

| Field | Control | Notes |
|-------|---------|-------|
| code | Text code | `SO-HATINH`, `BOT-TRUNGPHUONG`… |
| name | Text | Đúng tên folder / chuẩn hóa |
| partnerKind | LOOKUP | `SO_GTVT` · `BOT` · `DOANH_NGHIEP` |
| provinceCode | Text optional | |
| legacyFolderName | Text | path import |
| isActive | Switch | |

## 5. Seed (tên demo CUC 2 — archive)

Danh sách tên dưới đây **không** phải nguồn import hiện tại. Import: [`import-gov-ssot.md`](import-gov-ssot.md).

**Sở GTVT (6):** Hà Tĩnh · Nghệ An · Quảng Bình · Quảng Trị · Thanh Hóa · Thừa Thiên Huế  

**BOT / DN (7):** BOT Trùng Phương · BOT PPP · BOT QL.1A Cienco4-TCT319 · BOT tránh Vinh (Cienco4) · Cty 495 · Phước Tượng-Phú Gia · Tập đoàn Trường Thịnh

## 6. Gaps

| ID | |
|----|--|
| GAP-PARTNER-01 | Code scheme Ask SA (slug vs IdCode) |
| GAP-PARTNER-02 | Quan hệ partner ↔ org — form gắn Khu/VP/Tuyến **closed** `/rmms-form-input-org-tree` 2026-08-31 · đoạn giao still later |
