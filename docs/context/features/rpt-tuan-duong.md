# Báo cáo tuần đường — Feature Context

> **Slug:** `rpt-tuan-duong` · **Module:** `Report` · **Phase:** P1.5 · **Wave:** B  
> **Status:** Context  
> **Kind:** **E** (report) — `/erp-report-context` · AnalyticsReportShell  
> **Sources:** patrol.md · GOVOne 021/024-khai-thac-bao-cao-tuan-uong · hub [reports.md](reports.md) · [15-SCREEN-AI-MAP.md](../15-SCREEN-AI-MAP.md) · trụ C đề cương [`../24-TUAN-DUONG-DUONG-BO.md`](../24-TUAN-DUONG-DUONG-BO.md)  
> **Parent / list pack:** `patrol` — **cấm** copy CRUD vào trang này  
> **MFE:** `Linm.Web.RMMS.Report` · route `/bao-cao/tuan-duong` · mfeStdUrl `http://localhost:9311/bao-cao/tuan-duong`  
> **Demo HTML:** chưa (hub demo `bao-cao/reports.html` · leaf khi Design)  
> **Chrome:** skip GOVOne logo/bell/Hồ sơ/Đổi MK · **cấm** `window.alert`/`confirm`

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | Trang báo cáo Kind E: filter kỳ · Xem · lưới · drill · xuất |
| Persona | Hạt trưởng · Khu QLĐB · lãnh đạo |
| App hiện có | GOVOne KHAI THÁC BÁO CÁO / guide Web Báo cáo — tách leaf khỏi hub `reports` |
| DoD | Filter work · Xem ra lưới · drill đúng MFE nguồn · Excel theo cột · không CRUD |
| Align MFE | http://localhost:9311/bao-cao/tuan-duong |

## 2. Design / UI

| Screen | Pattern | Zones |
|--------|---------|-------|
| Báo cáo | Kind E Full | Title · toolbar (Xem · Làm mới · In · Config FULL) · `LinErpListFilterBar` · grid · pager · chart SoCai nếu KPI |

**Filter:** công ty → QL → Km · kỳ · trạng thái CI  
**Grid:** cây Company→QL→Km · coverage · điểm · offline  
**Export:** Excel P2  
**Config:** `LinReportTableConfigModal` FULL — cấm stub/configHint.  
**Filter layout:** title trái · input + tìm cụm phải — GAP-FILTER-BAR-*.  
**Mock:** 8–15 dòng mẫu từ domain PatrolSession loại tuần đường.

Kind E + tree. List `/td-tk` giữ CRUD session.

## 3. API

Base Report domain · BFF `web-bff/api/v1/...` · **cấm ERP.***

| Method | Path | Mô tả |
|--------|------|-------|
| GET | /api/v1/reports/patrol-road?from=&to=&routeId=&q= | Xem báo cáo (paged) |
| GET | /api/v1/reports/patrol-road/export | Excel |

Query đọc PatrolSession loại tuần đường — không bảng báo cáo riêng bắt buộc P1 (read-model P2 nếu nặng).

Auth: JWT · tenant · perm `report.tuan-duong.read`.

## 4. Database

Read-model / view trên entity nguồn (PatrolSession loại tuần đường). Index theo filter UI (tuyến · ngày · tenant).

## 5. Events / tích hợp

Không publish. Subscribe tùy domain nguồn (P2 push). Dashboard KPI không gộp vào slug này.

## 6. Gaps / quyết định

| ID | Default |
|----|---------|
| GAP-F-RPT-LEAF-01 Tách khỏi hub `reports` | Leaf slug + route /bao-cao/tuan-duong |
| GAP-P2-REPORT-API-01 | Endpoint stub tới Dev BE |
| GAP-FILTER-BAR | LinErpListFilterBar 1 hàng wrap |
| Demo HTML leaf | Design prototype — không bắt demo trước data-analy |

## 7. Demo checklist (chốt khách)

- [ ] Filter + Xem ra lưới
- [ ] Drill dòng về MFE nguồn
- [ ] Excel cột đúng (nếu P1 export)
- [ ] Config cột FULL
- [ ] Không chrome GOVOne · không alert native
