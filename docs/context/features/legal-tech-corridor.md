# Hành lang pháp lý + Store — map GPS / vẽ TS / guest

> **Slug:** `legal-tech-corridor` · **Module:** Compliance × Gis × Auth  
> **Status:** Context (chốt product)  
> **Skills:** `/review-app-vn-map-law` · `/review-map-release` · `/review-app-submit`  
> **Peers:** [`map-service.md`](map-service.md) · [`gis-osm-clip.md`](gis-osm-clip.md) · [`login.md`](login.md) · [`citizen.md`](citizen.md) · [`directions.md`](directions.md)  
> **Nguồn khách:** [`../../tai-lieu/all-info-app-map.md`](../../tai-lieu/all-info-app-map.md)

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | App Store **iOS+Android** + web: dân **không login** xem HD/chỉ đường; cán bộ JWT Platform + GPS **WhenInUse**; tọa độ TS/tuần **nội bộ** |
| Persona | Pháp chế khách · PM Store · Dev |
| App hiện có | Login Platform + HĐ · citizen public incidents · GIS CDN lệch luật |
| DoD | Hồ sơ A1–A3 khách · clip map · **cấm** geo-block reviewer · `/review-app-submit` |

**Bác Mục V.3** tài liệu khách (chặn IP nước ngoài khi review) → `GAP-LAW-GEO-BLOCK-01`.

## 2. Design / UI

Mở app = **Khách** (HD + map clip + optional chỉ đường).  
«Dành cho cán bộ» → [`login.md`](login.md) Platform — **cấm** role Identity `Citizen` bắt buộc.

## 3. API

Reuse only:

- Auth BFF Platform login/refresh  
- `POST/GET /api/v1/public/incidents*`  
- GIS staff `api/v1/gis/*` JWT  

**Cấm invent** API DPIA/geofence. Geofence QP = **GAP** đến khi khách giao polygon.

## 4. Database

PII: `06-SECURITY` · citizen encrypt. Patrol GPS = operational, department-only.

## 5. Events

N/A.

## 6. Gaps (luật × code)

| ID | Ý |
|----|---|
| GAP-LAW-MOT-01 | Chưa văn bản GTVT — **cấm** GPS hiện trường hàng loạt |
| GAP-LAW-GISVN-01 | **CLOSED file** — `docs/gis-vn-map/vietnam-provinces-34.geojson` · ingest/clip vẫn `GAP-MAP-SVC-01` |
| GAP-LAW-OSM-CDN-01 | MFE/mobile CDN |
| GAP-LAW-GUEST-COORD-01 | Form citizen demo còn lat/lng — public GET phải strip |
| GAP-LAW-BG-LOC-01 | Always P1 **cấm** |
| GAP-LAW-DPIA-01 | Cam AI vận hành chưa A05 |

## 7. Khách chuẩn bị (Store 1.0)

1. Tài khoản Organization Apple+Play  
2. Landing Privacy/Support HTTPS  
3. File gis.vn 34 tỉnh — **đã giao** `docs/gis-vn-map/`  
4. Demo Inspector (notes Store — không chat)  
5. Văn bản logo/tên Bộ (nếu listing)  
6. **Không** yêu cầu chặn IP reviewer  

Hiện trường GPS/vẽ: thêm văn bản giao nhiệm vụ + DPIA + nội quy ca.
