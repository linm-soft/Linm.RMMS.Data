# Tuần đường / tuần kiểm — Feature Context

> **Slug:** `patrol` · **Module:** `Patrol` · **Phase:** P1  
> **Status:** Demo  
> **Sources:** guide Check-in/Giám sát/Lưu trữ · `RMMS` §4 · `07` §4 · [`15-SCREEN-AI-MAP.md`](../15-SCREEN-AI-MAP.md)  
> **Demo HTML:** `Linm.RMMS.Demo/src/demo/features/patrol-demo.html`

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | Kế hoạch/tuyến tuần tra · Check-in ≥3 điểm/ngày/tuyến · GPS track · coverage · KPI · phát hiện bỏ sót |
| Persona | Tuần đường · Hạt trưởng giám sát |
| App hiện có | Mobile **Check-in** · **Giám sát** · **Lưu trữ** · Web **Giám sát hoạt động** · **BC checkin** — giữ UX |
| DoD | Check-in API · offline-batch · coverage · list+map giám sát |

## 2. Design / UI

| Screen | Pattern | Zones | Map guide |
|--------|---------|-------|-----------|
| Check-in online/offline | Mobile full (giữ) | + điểm · nội dung · sync Lưu trữ | § Check in |
| Giám sát list + lọc | Full | Tuyến · ngày · tìm | Mobile Giám sát a |
| Giám sát bản đồ | Full | Pin check-in · khu vực | Mobile b · Web hoạt động |
| KPI tuần tra | Card / Full | Coverage % · tốc độ · số điểm | RMMS §4 |

## 3. API

| Method | Path |
|--------|------|
| POST | `/api/v1/patrols` |
| POST | `/api/v1/patrols/{id}/check-ins` |
| POST | `/api/v1/patrols/{id}/tracks` |
| GET | `/api/v1/patrols/{id}/coverage` |
| GET | `/api/v1/patrols/{id}/kpi` |
| GET | `/api/v1/patrols?routeId=&from=&to=` |

## 4. Database

| | |
|--|--|
| `patrol.gps_tracks` | TimescaleDB hypertable |
| Coverage | PostGIS `ST_Buffer` / `ST_Difference` |

## 5. Events

`patrol.started` · `patrol.completed`

## 6. Gaps

| ID | Default |
|----|---------|
| GAP-F-PAT-01 Offline conflict merge | Last-write + server review |

## 7. Demo checklist

- [ ] Check-in ≥3 điểm mock rõ
- [ ] Offline badge / queue
- [ ] Giám sát list + track trên map mock
