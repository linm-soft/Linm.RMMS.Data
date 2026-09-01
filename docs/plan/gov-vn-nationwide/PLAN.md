# PLAN — gov-vn nationwide import (DB · feature · UI)

> **Chốt** 2026-08-24 · CSV set `gov-vn` từ dump `moc_dbvn` **hiện tại** (không giữ khu-2/khu-4).  
> **Data CSV: đã gen.** Schema `type` string — **không** cần EF migration để import.  
> Phần runtime/UI/GIS dưới **chưa implement**.

## Số liệu dump hiện tại (2026-08-23)

| Catalog | File | Rows |
|---------|------|------|
| `road_routes` | `road_routes.csv` | **429** unique (gom+nhánh+tránh + tên đoạn mặt đường) |
| `road_assets` | `road_assets.csv` | **652.967** (mọi dòng, type theo `table-type-map.json`) |
| `pavement_sections` | `pavement_sections.csv` | **2.920** (`tbl_rmd` file đầu; file 14.18 trùng dump → bỏ) |

CSV ~91 MB assets. `EnsureTypes` đã seed đủ mã GOV (kể cả `UNDERPASS`). Default `manage_unit` mặt đường = **Chưa rõ** (bỏ hardcode Khu 2).

## Vì sao còn plan

Import CSV **không** đổi shape DB. GIS + list UI đang giả định volume nhỏ / corridor Khu II — **không** chịu 650k pin / 650k dòng grid.

## Phase A — DB / import runtime (P0)

| # | Việc | Status | DoD |
|---|------|--------|-----|
| A.1 | `EnsureTypes` khớp type CSV | **Code sẵn** | Import không drop type lạ |
| A.2 | Docker RAM / batch `SaveChanges` (~6.5×10⁵ assets) | **TODO** | `docker-compose` API không OOM; lần đầu `ReImportSeed` |
| A.3 | Index GIS map bbox + type/route | **Code** | `IX_rmms_road_assets_GisMapBbox` · `GisMapTypeRoute` · `Schema_GisMapQueryIndex` |
| A.4 | Fingerprint `importVersion` = `1` | **CSV sẵn** | Đổi CSV → re-import, không sửa tay DB |

**Không** migration entity trừ A.3 có số đo.

## Phase B — Master / catalog UI (P1)

| # | Việc | Status | DoD |
|---|------|--------|-----|
| B.1 | List **asset-type** = catalog + extra GOV | **TODO** | `/mas/loai-ts` SearchInput đủ type CSV |
| B.2 | List tài sản filter `type` + `route` + **paging** | **TODO** | Không load 650k biển một grid |
| B.3 | Form hộ chiếu theo type | **DEFER** | P1: fields chung đã có trên CSV |

## Phase C — GIS (P1)

| # | Việc | Status | DoD |
|---|------|--------|-----|
| C.1 | Overlay **không** kẹp corridor Khu II | **Code** | Fit VN; layer theo type; bbox; **GeoJSON page take=100 + FE cache**; detail cap 2000 |
| C.2 | Bỏ giả định `khu-2-gov` / pin 16,110 | **Code** | Skip 16,110; swap X/Y; source `gov-vn` |
| C.3 | Cluster bbox LOD0–2 (không 650k GeoJSON) | **P1 / Code** · SSOT gộp [`../map-service/README.md`](../map-service/README.md) § Pin | `GET /gis/clusters` **RMMS.WebService**; z≤8 bubble+count; z9–13 tuyến; z≥14 detail bbox; `total` = totalRaw. MVT `assets` MapService = **P2 trống** — **không** pin SSOT |

## Phase D — Pavement / tuyến (data)

| # | Việc | Status |
|---|------|--------|
| D.1 | `road_routes` unique dump hiện tại | **Xong CSV** (429) |
| D.2 | `pavement_sections` mọi dòng `tbl_rmd` (1 file nếu trùng) | **Xong CSV** (2.920) |

Master list tuyến/mặt đường (paging, filter) = theo Phase B.

## Ngoài scope

- Không merge Vidagis `_archive`.
- Không giữ unique-5 tuyến / unique-127 cầu / set khu-2/khu-4.
- Không sửa demo CUC 2.
- Không invent kho bãi vật tư (t21 / GAP-AKD-01) — dump không có bảng kho.
- t37 Bãi đỗ: tách `PARKING` từ `tbl_rest_stops.name_work` (không gộp REST_AREA).
