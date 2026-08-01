# Quản lý tài sản đường bộ — Feature Context

> **Slug:** `asset` · **Module:** `Asset` · **Phase:** P1  
> **Status:** Demo  
> **Sources:** guide Tài sản / Tài sản KCHT · `RMMS` §1 · `07` §1 · `09` · **`11-CSDL-SO-SACH`** · [`15-SCREEN-AI-MAP.md`](../15-SCREEN-AI-MAP.md)  
> **Demo HTML:** `Linm.RMMS.Demo/src/demo/features/asset-demo.html`

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | Quản lý toàn bộ TS (mặt đường, cầu, hầm, cống, taluy, hộ lan, biển báo, đèn, camera ITS, cột Km/H, sơn kẻ, lan can, hàng rào, cây xanh) + GPS/QR/ảnh/hồ sơ/tuổi thọ/giá trị/lịch sử SC |
| Persona | Tuần đường · Ban QLDA · Sở GTVT |
| App hiện có | Mobile **Tài sản** (thu thập/cập nhật/bản đồ) · Web **Tài sản KCHT** (QL TS · import · tuyến · đoạn · lý trình · địa bàn · loại) · **Giám sát tài sản** — giữ UX |
| DoD ngắn | API CRUD + nearby/bbox + media presign + QR + import + soft delete + tenant |

## 2. Design / UI

| Screen | Pattern | Zones | Map guide |
|--------|---------|-------|-----------|
| Thu thập / cập nhật Mobile | Full (giữ) | Loại TS · form · ảnh · GPS | Mobile a–b |
| Bản đồ TS Mobile | Full | Tuyến · loại · pin | Mobile c |
| QL tài sản KCHT | Full | List · import wizard | Web a |
| QL tuyến / đoạn / lý trình / địa bàn / loại | Full | CRUD master | Web b–f |
| Giám sát tài sản Web | Full | Map · filter tuyến | Web Giám sát TS |
| Chi tiết + media + QR | Slideout / Full | ≥10 field → Full | RMMS §1 |

**Mock data:** 5 tài sản (mặt đường, cầu, biển báo, hộ lan, cột Km).

## 3. API

Base: `api/v1/assets`

| Method | Path | Mô tả |
|--------|------|-------|
| GET/POST/PUT/DELETE | `/assets/{type}` | CRUD theo loại |
| GET | `/assets/nearby?lat=&lng=&radiusM=` | Gần vị trí |
| GET | `/assets/within-bbox?...` | Trong khung bản đồ |
| POST | `/assets/{id}/media` | Upload (presign) |
| POST | `/assets/{id}/qr` | Sinh QR |
| GET | `/assets/qr/{code}` | Lookup QR |
| POST | `/assets/import` | Import dữ liệu sẵn có |
| GET | `/assets/export` | Export |

Auth: JWT + tenant/`company_id`.

## 4. Database

| Entity | Key columns | Notes |
|--------|-------------|-------|
| RoadSection, Bridge, Tunnel, Culvert, Slope, Guardrail, TrafficSign, Lighting, KmPost | Id, Code, Name, Geom | PostGIS `GEOMETRY` |
| AssetMedia | AssetId, Url, Kind | MinIO |
| AssetHistory | AssetId, At, Note | Lịch sử sửa chữa |

Indexes: trigram/`code`+`name` · spatial GIST trên `Geom`.

## 5. Events / tích hợp

| Event | Publisher | Consumer |
|-------|-----------|----------|
| `asset.updated` | Asset | Gis (overlay) |

## 6. Gaps / quyết định

| ID | Question | Default |
|----|----------|---------|
| GAP-F-ASSET-01 | Một bảng polymorphic vs bảng theo type | Theo type (07) |
| GAP-F-ASSET-02 | Digital Twin 3D | OUT P1 → Gis P2 |

## 7. Demo checklist (chốt khách)

- [ ] List + filter loại tài sản khớp app Tài sản
- [ ] Chi tiết có GPS / ảnh / mã QR
- [ ] Map nearby hiểu được trên mock
- [ ] Không yêu cầu nhập lại toàn bộ dữ liệu (import/API)
