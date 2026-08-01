# Báo cáo (Web guide) — Feature Context

> **Slug:** `reports` · **Module:** `Report` · **Phase:** P1  
> **Status:** Context  
> **Sources:** guide **Quản lý báo cáo** · `15-SCREEN-AI-MAP.md` · liên quan `dashboard`

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | Giữ 3 báo cáo Web: Tài sản · Sự cố · Checkin (+ xuất Excel checkin) |
| Persona | Hạt trưởng · quản lý |
| App hiện có | Web **Báo cáo *** — giữ UX |
| DoD | API filter tuyến/thời gian · Xem · Excel checkin |

## 2. Design / UI

| Screen | Pattern | Zones |
|--------|---------|-------|
| BC tài sản | Full | Loại BC · tuyến · Xem |
| BC sự cố | Full | Loại · tuyến · thời gian · Xem |
| BC checkin | Full | Loại · tuyến · thời gian · Xem · Xuất Excel |

## 3. API

| Method | Path |
|--------|------|
| GET | `/api/v1/reports/assets?type=&routeId=` |
| GET | `/api/v1/reports/incidents?type=&routeId=&from=&to=` |
| GET | `/api/v1/reports/checkins?type=&routeId=&from=&to=` |
| GET | `/api/v1/reports/checkins/export` | Excel |

## 4. Database

Query Asset / Incident / Patrol — không schema riêng bắt buộc.

## 5. Events / tích hợp

Không.

## 6. Gaps / quyết định

| ID | Default |
|----|---------|
| GAP-F-RPT-01 Gộp vào `dashboard`? | Tách slug `reports` (parity guide) · Dashboard = KPI tổng |

## 7. Demo checklist (chốt khách)

- [ ] 3 loại BC trên mock
- [ ] Nút Xuất Excel checkin
