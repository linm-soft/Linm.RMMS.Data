# Ứng dụng chỉ đường (guest)

> **Slug:** `directions` · **Module:** Integration × Gis · **Phase:** P1 UI / P1.5 OSRM clip  
> **Status:** Context  
> **Skills:** `/implement-directions-app` · `/implement-gis-map` · `/review-app-vn-map-law`  
> **Peers:** [`citizen.md`](citizen.md) · [`gis-osm-clip.md`](gis-osm-clip.md) · [`legal-tech-corridor.md`](legal-tech-corridor.md)  
> **≠** [`patrol-map.md`](patrol-map.md) (cán bộ)

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | Người dân **không login** xem hướng dẫn điện tử + chỉ đường trên **cùng nền đã cắt** |
| Persona | Khách Store |
| App hiện có | Citizen = báo sự cố / tracking · **chưa** engine chỉ đường Signed |
| DoD P1 | Màn Khách + map clip · gõ/chạm điểm · **không** xin location lúc launch · **không** overlay TS nội bộ |

## 2. Design / UI

Kind G guest: HD ATGT · chỉ đường · (optional) báo sự cố → [`citizen.md`](citizen.md).  
**Cấm** clone chrome tuần tra. **Cấm** Always location.

P1: pick 2 điểm trên map / search text. Location «từ đây» = **opt-in** sau, không P1 bắt buộc.

## 3. API

**Cấm invent** `api/v1/directions`.

P1: OSRM **self-host** (cùng PBF clip) gọi từ app/BFF **khi** Signed; trước đó polyline mock **cấm** ghi prod.

Citizen public incidents: paths trong `citizen.md` only.

## 4. Database

Không bảng directions. Graph = file OSRM từ clip MapService.

## 5. Events

Không.

## 6. Gaps

| ID | Default |
|----|---------|
| GAP-DIR-OSRM-01 | Chưa OSRM clip self-host |
| GAP-DIR-API-01 | Chưa Signed route API — **cấm** bịa |
| GAP-MAP-OSM-CDN-01 | Nền guest vẫn OSM.org thì **cấm** release |

## 7. Demo checklist

- [ ] Guest không login xem HD  
- [ ] Map clip (sau MapService)  
- [ ] Không request GIS geojson  
- [ ] Store screenshot màn này
