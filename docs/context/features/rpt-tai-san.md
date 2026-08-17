# BC Tài sản — Feature Context

> **Slug:** `rpt-tai-san` · **Module:** `Report` · **Phase:** P1 · **Wave:** A  
> **Status:** Context  
> **Kind:** **E** (report) — `/erp-report-context` · AnalyticsReportShell  
> **Sources:** reports.md tab Tài sản · guide Web Báo cáo · 15-SCREEN #17 · hub [reports.md](reports.md) · [15-SCREEN-AI-MAP.md](../15-SCREEN-AI-MAP.md)  
> **Parent / list pack:** `reports` — **cấm** copy CRUD vào trang này  
> **MFE:** `Linm.Web.RMMS.Report` · route `/bao-cao/tai-san` · mfeStdUrl `http://localhost:9311/bao-cao/tai-san`  
> **Demo HTML:** chưa (hub demo `bao-cao/reports.html` · leaf khi Design)  
> **Chrome:** skip GOVOne logo/bell/Hồ sơ/Đổi MK · **cấm** `window.alert`/`confirm`

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | Trang báo cáo Kind E: filter kỳ · Xem · lưới · drill · xuất |
| Persona | Hạt trưởng · Khu QLĐB · lãnh đạo |
| App hiện có | GOVOne KHAI THÁC BÁO CÁO / guide Web Báo cáo — tách leaf khỏi hub `reports` |
| DoD | Filter work · Xem ra lưới · drill đúng MFE nguồn · Excel theo cột · không CRUD |
| Align MFE | http://localhost:9311/bao-cao/tai-san |

## 2. Design / UI

| Screen | Pattern | Zones |
|--------|---------|-------|
| Báo cáo | Kind E Full | Title · toolbar (Xem · Làm mới · In · Config FULL) · `LinErpListFilterBar` · grid · pager · chart SoCai nếu KPI |

**Filter:** loại BC · tuyến · kỳ · search  
**Grid:** STT · tuyến · hạng mục · SL · ĐVT · trạng thái · cập nhật  
**Export:** Excel P2  
**Config:** `LinReportTableConfigModal` FULL — cấm stub/configHint.  
**Filter layout:** title trái · input + tìm cụm phải — GAP-FILTER-BAR-*.  
**Mock:** 8–15 dòng mẫu từ domain Asset / CSDL hạng mục.

Hub `reports` giữ menu. Leaf này = trang Kind E riêng.

## 3. API

Base Report domain · BFF `web-bff/api/v1/...` · **cấm ERP.***

| Method | Path | Mô tả |
|--------|------|-------|
| GET | /api/v1/reports/assets?from=&to=&routeId=&q= | Xem báo cáo (paged) |
| GET | /api/v1/reports/assets/export | Excel |

Query đọc Asset / CSDL hạng mục — không bảng báo cáo riêng bắt buộc P1 (read-model P2 nếu nặng).

Auth: JWT · tenant · perm `report.tai-san.read`.

## 4. Database

Read-model / view trên entity nguồn (Asset / CSDL hạng mục). Index theo filter UI (tuyến · ngày · tenant).

## 5. Events / tích hợp

Không publish. Subscribe tùy domain nguồn (P2 push). Dashboard KPI không gộp vào slug này.

## 6. Gaps / quyết định

| ID | Default |
|----|---------|
| GAP-F-RPT-LEAF-01 Tách khỏi hub `reports` | Leaf slug + route /bao-cao/tai-san |
| GAP-P2-REPORT-API-01 | Endpoint stub tới Dev BE |
| GAP-FILTER-BAR | LinErpListFilterBar 1 hàng wrap |
| Demo HTML leaf | Design prototype — không bắt demo trước data-analy |

## 7. Demo checklist (chốt khách)

- [ ] Filter + Xem ra lưới
- [ ] Drill dòng về MFE nguồn
- [ ] Excel cột đúng (nếu P1 export)
- [ ] Config cột FULL
- [ ] Không chrome GOVOne · không alert native
