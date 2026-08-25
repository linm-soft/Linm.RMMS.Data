# Import data — SSOT `Sau-sat-nhap/gov`

> **Slug:** `import-gov-ssot` · **Module:** Data · **Phase:** P1  
> **Status:** Context · **2026-08-25** — rebuild skip banner Excel · `vidagis_id` + tên công trình · set **`gov-vn`** từ dump `moc_dbvn` **hiện tại**  
> **Review skill:** `/data-gov-integration` — đối chiếu 36 mã + ô KCHT vs CSV import (cấm seed riêng)

## SSOT

`Linm.RMMS.Data/data-import/Sau-sat-nhap/gov`

| Folder / file | Việc |
|---------------|------|
| `gov/*.xlsx` | Dump hiện tại (35 file `moc_dbvn.*`) |
| `gov/table-type-map.json` | Bảng → `route` / `asset` / `pavement` + `type` catalog |
| `gov/raw/*.csv` | Convert 1:1, mọi dòng (rebuild bỏ banner/header Excel) |
| `gov/sets/gov-vn/` | Runtime: **420** tuyến unique · **651.869** KCHT · **2.920** đoạn mặt đường |

Mirror: `Linm.RMMS.WebService/api/src/RMMS.Service.Api/data/import/sets/gov-vn/`.

`ImportSets` = `["gov-vn"]`. **Không** khu-2/khu-4. **Không** `_archive`.

Chạy:

1. `convert-xlsx-raw.ps1` → `gov/raw/*.csv`
2. `rebuild-gov-vn.ps1` (C# stream → Data + WebService mirror)

Rebuild CSV **không** ghi DB. Import (`ReImportSeed` + **`ReInitData`**) mới upsert — bật ReInit để gỡ mã rác cũ (`PN-Tên tài sản…`).

Đọc dump (mọi bảng):

1. Bỏ dòng banner/header Excel (`Tên tài sản:` · `Đơn vị cung cấp dữ liệu:` · `Thời gian cung cấp dữ liệu:` · `parentid` lặp · `(1)`).
2. Mã tài sản = prefix + **`vidagis_id`** — không `parentid`, không sinh mã từ số thứ tự.
3. Tên chính thức = cột loại (`name_pontoon_bridge`, `name_work`, `station_name`, …) — không lấy tên đoạn tuyến/`QL.*` khi có tên công trình.

Type ngoài catalog 36 seed trong `EnsureTypes`. Runtime lớn → [PLAN](../../plan/gov-vn-nationwide/PLAN.md) A.2 (RAM) · B.2 (paging) · C (GIS toàn quốc).

## SSOT import vs seed

- **Một** pipeline: xlsx dump → raw CSV → rebuild `gov-vn` → `ReImportSeed`.
- Count UI / GIS / ô KCHT = **DB sau import**, không `HasData` / JSON demo / INSERT tay.
- `EnsureTypes` chỉ **đăng ký mã** (kể cả type CSV ngoài catalog 36). **Không** sinh hàng tài sản giả.

## Thông tin data dự án (2026-08-25)

Count UI = DB sau import set **`gov-vn`**. Dump `moc_dbvn` **23/08** — nhỏ hơn live `kcht.drvn.gov.vn` ở vài ô. **Cấm** seed bù số.

| Catalog | CSV `gov-vn` | Live DRVN (dashboard) |
|---------|--------------|------------------------|
| `road_routes` | **420** (NHANH 226 · TRANH 40 · GOM 18 · unique 420) | 604 · 251 · 41 · 19 |
| `pavement_sections` | **2.920** (`tbl_rmd`) | 3.189 |
| `road_assets` | **651.869** | — (ô theo type) |

**Hub 40 ô** = live DRVN nhãn, không = catalog 36:

| Ô | Bind | CSV | Ghi |
|---|------|-----|-----|
| t05 | `PONTOON` | 2 | «Cầu phao» · `BRIDGE` list only |
| t16 | `SPILLWAY` | 128 | «Đường tràn…» · `TUNNEL` list only |
| t24 | `RESCUE_VEHICLE` | 8 | `RESCUE_STATION` 20 list only |
| t26 / t37 | `REST_AREA` / `PARKING` | 53 / 23 | Live gộp 76+0 — **không** gộp lại |
| t07 / t21 | `CULVERT_X` / gap `GAP-AKD-01` | 0 / 0 | Thiếu bảng dump · live 60.813 / 20 |

Ô trùng dump (cột km, hộ lan, cống dọc, gương cầu, …) = CSV = live. Recapture dump: § dưới. Coverage: `sets/gov-vn/COVERAGE-KCHT-40.md`. Review: `/data-gov-integration`.

## Catalog 36 vs dump hiện tại

- Master 36 mã: [`asset-kcht-32.md`](asset-kcht-32.md) (sổ TS / form).
- Hub KCHT **40 ô** (dashboard) ≠ 36 loại — ô bind `asset-type` / `gap` / `report` / tuyến.
- Dump `moc_dbvn` **không** cover đủ 36. Thiếu → count **0** + gap (**không** bịa row).
- **t21** Kho bãi (`GAP-AKD-01`): không có bảng kho trong 35 file — **cấm** invent `MATERIAL_YARD`.
- **t37** Bãi đỗ: cùng `tbl_rest_stops`; tách `PARKING` khi `type_work_id` (cột dump «Loại tài sản») = bãi đỗ / đậu xe — **không** heuristic tên `QL.*`; **không** gộp `REST_AREA` (t26).

## Review `/data-gov-integration` — 36 mã (2026-08-24)

Status: `imported` = type CSV count > 0 · `gap-no-source` = không bảng moc, count 0, **không** seed · `mapped-wrong` = ô/type lệch dump.

| # | code | Dump / CSV type | Ô KCHT | Status | Note |
|---|------|-----------------|--------|--------|------|
| 1 | PAVEMENT | `pavement_sections` (`tbl_rmd`) | t02 | imported | Không `road_assets.type` |
| 2 | BRIDGE | — | — (hub t05 = PONTOON) | gap-no-source | Catalog 36 Cầu · dump không bảng cầu · **không** bind ô live |
| 3 | TUNNEL | — | — (hub t16 = SPILLWAY) | gap-no-source | Catalog 36 Hầm · dump không bảng hầm |
| 4 | CULVERT_X | — | t07 | gap-no-source | |
| 5 | DITCH | `tbl_longitudinal` | t10 | imported | Alias count `CULVERT_L` (0) |
| 6 | UNDERPASS | `tbl_underpass_box` | t06 | imported | |
| 7 | TRAFFIC_SIGN | `tbl_road_sign` | t32 | imported | |
| 8 | DELINEATOR | `tbl_guide_post` | t14 | imported | |
| 9 | KM_POST | `tbl_km_post` | t09 | imported | |
| 10 | MEDIAN | `tbl_median_strip` | t11 | imported | |
| 11 | ANTI_GLARE | — | — | gap-no-source | Không ô riêng |
| 12 | TRAFFIC_ISLAND | — | — | gap-no-source | |
| 13 | ROAD_STUD | — | — | gap-no-source | |
| 14 | GUARDRAIL | `tbl_guardrail` | t17 | imported | |
| 15 | ROAD_MARKING | — | — | gap-no-source | |
| 16 | CRASH_CUSHION | — | — | gap-no-source | |
| 17 | CONVEX_MIRROR | `road_sphere_mirror` | t31 | imported | Screenshot gộp long môn · `GANTRY_SIGN` alias 0 |
| 18 | TRAFFIC_SIGNAL | — | — | gap-no-source | |
| 19 | BOUNDARY | — | — | gap-no-source | |
| 20 | RETAINING | `tbl_retaining_wall` | t20 | imported | |
| 21 | SHOULDER | — | — | gap-no-source | |
| 22 | LIGHTING | `tbl_street_lighting` | t18 | imported | |
| 23 | GREEN | — | — | gap-no-source | |
| 24 | INTERCHANGE | `tbl_intersection` | t23 | imported | |
| 25 | SLOPE_PROTECT | `tbl_slope` | t12 | imported | |
| 26 | GANTRY_SIGN | — | t31 alias | gap-no-source | Không bảng long môn |
| 27 | ROW_UTIL | `tbl_infrastructure_row` | t08 | imported | |
| 28 | STATION_HOUSE | `tbl_road_admin` | t22 | imported | |
| 29 | BUS_STATION | `tbl_bus_station` | t04 | imported | |
| 30 | BUS_STOP | `tbl_bus_stops` | t13 | imported | |
| 31 | RAIL_CROSS | `tbl_railway_crossing` | t15 | imported | |
| 32 | LAND_ROW | `tbl_land_btra` | t33 | imported | |
| 33 | EMS_POST | `tbl_first_aid` | t29 | imported | |
| 34 | TOLL | `tbl_toll_booth` | t28 | imported | |
| 35 | FERRY | `tbl_ferry_terminal` | t03 | imported | |
| 36 | REST_AREA | `tbl_rest_stops` (không bãi đỗ) | t26 | imported · **53** CSV | Tách PARKING |

### Type dump ngoài catalog 36 (EnsureTypes đăng ký mã — không bịa row)

| code | Dump | Ô | Status |
|------|------|---|--------|
| PARKING | `tbl_rest_stops` `type_work_id` bãi đỗ | t37 | imported · **23** CSV (rebuild 2026-08-24) |
| WEIGH_STATION | `weight_station` | t27 | imported |
| COUNT_STATION | `counting_station` | t30 | imported |
| RESCUE_STATION | `tbl_disaster_res` | — | imported · **20** CSV · list `/so-ts` only (ô t24 = xe) |
| ITS_CAMERA | `tbl_its` | t19 | imported |
| NOISE_BARRIER | `tbl_noise_barrier` | t25 | imported |
| PONTOON | `tbl_pontoon` | t05 | imported · **2** CSV · nhãn live «Cầu phao» |
| RESCUE_VEHICLE | `tbl_rescue_vehicle` | t24 | imported · **8** CSV · khớp count live DRVN |
| SPILLWAY | `tbl_spill_way` | t16 | imported · **128** CSV · nhãn live «Đường tràn…» |

### Ô KCHT không phải asset type

| Ô | Bind | Status |
|---|------|--------|
| t01 | `road-route` all | imported |
| t34 | `road-route` `NHANH` (`duongnhanh`) | imported (rebuild `route_kind`) |
| t35 | `road-route` `TRANH` | imported |
| t36 | `road-route` `GOM` | imported |
| t21 | `gap` GAP-AKD-01 | gap-no-source · **cấm** MATERIAL_YARD |
| t38–t40 | `report` `/bao-cao/tngt` | count 0 |

`invented-seed`: **không** — list/dashboard đọc BFF. `mapped-wrong` đã đóng: t05=`PONTOON` · t16=`SPILLWAY` · t24=`RESCUE_VEHICLE` (không `BRIDGE`/`TUNNEL`/`RESCUE_STATION`) · t37=`PARKING` · t34–t36=`routeKind`.

## Recapture dump (count còn lệch vs live DRVN)

Hub bind ô 5/16/24 **không** cần dump mới — CSV đã có. Số tuyến/biển/cống ngang/kho lệch vì dump 23/08 nhỏ hơn live hoặc **thiếu bảng**.

1. Export xlsx `moc_dbvn.*` vào `{ImportRoot}/` (cùng folder 35 file — **không** `_archive`).
2. `convert-xlsx-raw.ps1` → `gov/raw/*.csv`
3. Bảng mới → thêm `match` + `type` vào `table-type-map.json` (**cấm** invent type không có file).
4. `rebuild-gov-vn.ps1` → `sets/gov-vn/` + mirror WebService.
5. API `DataImport__ReImportSeed=true` (+ `ReInitData` nếu thay set).

| Cần dump lại | Live DRVN | CSV hiện | Ghi |
|--------------|-----------|----------|-----|
| Tuyến (QL/CT + nhánh/tránh/gom) | 604 · 251 · 41 · 19 | 429 · 222 · 38 · 18 | `duongnhanh` / `duongtranh` / `duonggom` + bảng tuyến nếu có |
| `tbl_rmd` đoạn | 3.189 | 2.920 | 1 file (bỏ file trùng) |
| `tbl_road_sign` | 223.799 | 213.031 | |
| `tbl_retaining_wall` | 9.869 | 9.859 | |
| Cống thoát nước ngang | 60.813 | **0** | **Thiếu bảng** — export từ Cây tài sản; map `CULVERT_X` khi biết tên `tbl_*` |
| Kho bãi vật tư | 20 | **0** | **GAP-AKD-01** — map type khi có file; **cấm** `MATERIAL_YARD` tay |
| Cầu / Hầm (catalog 36) | không trên hub live | 0 | Chỉ list `/so-ts` nếu sau này có bảng |

t26/t37: dump `tbl_rest_stops` tách `PARKING` — live gộp 76 vào trạm dừng, bãi đỗ 0. **Không** gộp lại (GOV-IMP-02).

## Rebuild ≠ DB

Rebuild CSV không ghi Postgres. Muốn t37 / type mới hiện: chạy lại import (`ReImportSeed`) trên CSV đã tách. Coverage: mirror `COVERAGE-KCHT-40.md` trong set `gov-vn`.
