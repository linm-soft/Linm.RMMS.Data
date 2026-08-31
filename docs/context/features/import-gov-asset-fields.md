# Import gov — map cột dump → hiển thị (mọi loại)

> **Slug peer:** [`import-gov-ssot.md`](import-gov-ssot.md) · [`road-route.md`](road-route.md) · [`asset-kcht-32.md`](asset-kcht-32.md) · [`pavement-section.md`](pavement-section.md)  
> **Review:** `/data-gov-integration` · 2026-08-31  
> **Nguồn:** `data-import/Sau-sat-nhap/gov/raw/moc_dbvn.*.csv` (header dòng 1) + live DRVN hộ chiếu + chứng từ RMMS hiện có  
> **Cấm** seed / invent cột không có trong dump · **cấm** pick một vài field rồi coi là đủ

Rebuild `gov-vn` **không** ghi JSON `dump_specs` trên CSV — chỉ cột dữ liệu: `route_named` · `route_segment` + scalar. `DumpSpecs` giữ trong DB (import không xóa khi CSV thiếu cột). Form sổ TS: 3 tầng tuyến + thông số đã import. Pavement Biểu 1 **chưa** map đủ (GAP-PAV-SPEC-01).

## 1. Ba tầng tuyến — mọi bảng moc (trừ `tbl_rmd` thiếu `name_of_route_asset`)

| Tầng | Cột dump | Live DRVN | CSV `gov-vn` / DB | Chứng từ RMMS |
|------|----------|-----------|-------------------|---------------|
| Tuyến chính (Cao tốc/QL) | `road_name` | «Cao tốc/quốc lộ: QL.1» | `route` / `RoadName` = `QL.1` | 1 ô «Tuyến đường» |
| Tuyến (named / BOT) | `long_route_name` | «Tuyến: QL.1 - Lạng Sơn (BOT): Km 0 + 000 - Km 1 + 800» | `route_named` + catalog `KHAC` `parent_code=QL.1` | Form «Tuyến» |
| Đoạn tuyến | `name_of_route_asset` | «Đoạn tuyến: Km 0 + 000 - Km 1 + 800» | hay bị nhét vào `name` tài sản | Không cột |

`tbl_rmd`: có `road_name` + `long_route_name`; đoạn = `vitridiemdau-kmlytrinh`–`vitridiemcuoi-kmlytrinh` (không cột `name_of_route_asset`).

**Hiển thị chuẩn (mọi list/form tài sản + Biểu 1 + `/mas/tuyen-duong`):** 3 field tách — **cấm** gộp 1 ô text.

### Root cause rebuild (`RebuildGovVn.cs`)

| Bug | Hậu quả |
|-----|---------|
| `WriteAsset` chỉ `route = road_name` | Mất tầng 2–3 |
| `IsWeakAssetName`: `len≤8` và không space | `name_km_post`=`Km2` / `Km1+800` bị loại → fallback `name_of_route_asset` (range đoạn) |
| `FindOfficialName` không có `sign_code_number` | Biển: `name` = nội dung, mất số hiệu |
| Cọc (`tbl_guide_post`) không cột `name_*` official | `name` = đoạn tuyến |
| CSV không cột spec | Hình dạng / vật liệu / kích thước / vị trí cắt ngang… không vào DB |

## 2. Ví dụ chứng từ live vs import (user 2026-08-31)

### 2.1 Tuyến / đoạn mặt đường — `tbl_rmd` · slug `pavement-section`

Live hộ chiếu (QL.1 Lạng Sơn BOT · `rmd_177`):

| Nhóm live | Field live | Cột dump | CSV / `PavementSection` |
|-----------|------------|----------|-------------------------|
| Tuyến | Cao tốc/QL | `road_name` | `RoadName` = QL.1 |
| Tuyến | Tuyến named+km | `long_route_name` | **thiếu** |
| Vị trí | Lý trình đầu/cuối | `vitridiemdau-kmlytrinh` · `vitridiemcuoi-kmlytrinh` | `KmFrom`/`KmTo` (có) |
| Vị trí | Tỉnh đầu/cuối | `province_from_id` · `province_to_id` | 1 `ProvinceName` (thường tỉnh đầu) |
| Vị trí | XY đầu + XY cuối | `from_coordinatex/y` · `to_coordinatex/y` | **thiếu** (4 số; live lặp nhãn X/Y) |
| Chung | Ghi chú | `note` | `Notes` = `rmd_177` |
| Thống kê | Cấp đường | `road_class_id` | `RoadClass` (có nếu rebuild map) |
| Thống kê | Loại CT đường bộ | `roadtype` | **thiếu** (entity dùng `StructureType` = kết cấu mặt) |
| Thống kê | Loại nền | `embankment_type_id` | **thiếu** |
| Thống kê | Chiều xe chạy | `traffic_flow_direction_id` | **thiếu** |
| Thống kê | Dài thực tế | `actual_length` | `LengthKm` |
| Bảo trì | Năm SC/nâng cấp | `latest_repair_update_year` | `LastSurfaceRepairYear` (CSV hay trống) |
| Bảo trì | Tháng HTXD | `construction_month` | **thiếu** |

Dump `tbl_rmd` **còn** (chứng từ Biểu 1 + live, CSV bỏ hết): làn CX/thô sơ/khẩn · bề dày · lề L/R gia cố · vỉa hè · `design_speed` · `max/min_service_speed` · `right_way_marking` · `terrain_classification_id` · tải trọng / cầu hạn chế · `repairinfomation-*` · `overlaproad_*` · `foreign_road_*`. Khớp ghi chú asset-kcht-32 «cột real Khu IV chưa có trên hộ chiếu PAVEMENT».

Form RMMS `/so-ts/pl-mat-duong` = Biểu 1 mỏng (mã · đường · tỉnh · km · KC · cấp · ĐV) — **không** 3 tầng tuyến · **không** nền/chiều xe · **không** 4 tọa độ.

### 2.2 Cọc tiêu / cọc H — `tbl_guide_post` · `DELINEATOR`

Dump **có đủ** 2 bộ (cọc tiêu + cọc H). Review 2026-08-31: `dump_specs` đã giữ `h_*` nhưng **map/hiển thị sai**.

Dòng label VN trong xlsx (không đoán English key):

| Key dump | Label VN dump | Nhóm |
|----------|---------------|------|
| `h_post_type_id` | Loại kiểu cọc | chung / H |
| `guide_post_type_id` | Loại vật liệu | cọc tiêu |
| `h_guide_post_type_id` | Loại vật liệu | cọc H |
| `length` · `width` · `height` | Chiều dài/rộng/cao (m) | cọc tiêu |
| `h_length` · `h_width` · `h_height` | cùng nhãn (m) | **cọc H / cột H** |
| `average_installation_interval` | Khoảng cách LĐ TB | cọc tiêu |
| `h_average_installation_interval` | Khoảng cách LĐ TB (m) | cọc H |
| `total_number_within_section` | Tổng số cọc trong đoạn | cọc tiêu |
| `h_total_number_within_section` | Tổng số cọc trong đoạn | cọc H |

Cột Excel **H** = `km_to-kmlytrinh`. Fill dump `tbl_guide_post` ≈ **0%** (G/H trống trên 37k dòng). Live hộ chiếu «Km 2 + 000 – Km 3 + 000» **không có** trong moc export — **cấm** bịa lý trình.

Ví dụ dump đã có (QL.1 · Khu I · «Ngoài cùng bên phải» · LĐ TB 14): tiêu 15×15×60 sl=71 · **H 20×20×60 sl=5**. Rebuild cũ ghi `quantity=1` vì tìm `soluong`/`quantity` — **mapped-wrong**.

| Lỗi import (mọi loại, không chỉ cọc) | Sửa |
|--------------------------------------|-----|
| `quantity` mặc định `1` | đọc `total_number_*` / `number` · import backfill từ `dump_specs` |
| `km_from` ép `"0"` khi dump trống | để trống — không invent |
| `SkipSpecKey` bỏ `to_coordinate*` | giữ 4 XY trong `dump_specs` |
| FE gán `guide_post_type_id` = «Loại kiểu cọc» | đúng dump: **vật liệu** · loại cọc = `h_post_type_id` |
| 1 khối kích thước | form tách **Cọc tiêu** / **Cọc H** |

### 2.3 Cột Km — `tbl_km_post` · `KM_POST`

| Field | Dump | CSV / DB |
|-------|------|----------|
| Tên cột | `name_km_post` (`Km0+0`, `Km2`) | `name` = `name_of_route_asset` (**IsWeak**) |
| Lý trình | `lytrinh-kmlytrinh` (hay trống) → parse từ tên cột | handler `"0"` |
| Vật liệu | `materials_id` | **bỏ** |
| Cách cột kế (m) | `distance_next_post` | **bỏ** |

### 2.4 Biển báo — `tbl_road_sign` · `TRAFFIC_SIGN`

| Nhóm live | Field | Dump | CSV / DB |
|-----------|-------|------|----------|
| Tuyến | 3 tầng + dòng long môn (UI ghép) | 3 cột tuyến · **không** cột gantry trên row | chỉ `QL.1` |
| Định danh | Số hiệu | `sign_code_number` (`I.414b`) | code = `BB-vidagis` |
| Thông số | Nội dung | `road_sign_content` | `name` |
| Thông số | Rộng / cao / diện tích | `width` · `height` · `area` | **bỏ** |
| Thông số | Vật liệu | `material_sign_id` (text: Thép sơn phản quang) | **bỏ** |
| Thông số | **Hình dạng** | `shape_sign_id` (Biển chữ nhật / tam giác / tròn) | **bỏ** |
| Vị trí | Lý trình | `lytrinh-kmlytrinh` | `km_from` (đúng hơn KM_POST) |
| Vị trí | Đặt biển | `location_id` | **bỏ** |
| Vị trí | XY | `from_coordinatex/y` | lat/lng |

Catalog 36 cũ (`SignCode · SignSize · PoleCount · PoleHeightM`) **lệch dump** — dump không `PoleCount`/`PoleHeightM`. SSOT thông số biển = bảng dump trên.

## 3. Cột chung mọi tài sản (giữ đủ — không pick)

Luôn có trên dump asset (ngoài 3 tầng tuyến):

`parentid` · `vidagis_id` · `donvinhaplieu` · lý trình (`lytrinh-kmlytrinh` **hoặc** `km_from`/`km_to`) · `from_coordinatex/y` (+ `to_*` nếu đoạn) · `giatritaisan-construction_month` · `giatritaisan-construction_completion_year` · `giatritaisan-design_life` · `giatritaisan-initial_construction_icost` · `lichsudungkhaithac-ngaythangnam` · `lichsudungkhaithac-sucoxayra` · `lichsudungkhaithac-nguyennhan` · thường `construction_month`/`year` · `initial_construction_cost` · `design_life` · đôi khi `tinhthanhpho`/`xaphuong`.

**Tên official theo loại** (ưu tiên hơn đoạn/`QL.*`):

| Type | Cột tên dump |
|------|----------------|
| KM_POST | `name_km_post` — **cấm** `IsWeak` |
| TRAFFIC_SIGN | `sign_code_number` (hiển thị) + `road_sign_content` (nội dung) |
| DELINEATOR | không tên riêng — `name` = loại+km hoặc `vidagis_id`, **không** đoạn |
| INTERCHANGE | `name_intersection` |
| BUS_STATION | `name_terminal` |
| BUS_STOP | `station_name` |
| FERRY | `name_ferry_terminal` |
| TOLL / WEIGH / COUNT | `station_name` / `name_vi` |
| EMS_POST | `name_station` |
| STATION_HOUSE / RESCUE_STATION | `name_building` |
| PONTOON | `name_pontoon_bridge` |
| SPILLWAY | `name_work` + `name_river` |
| UNDERPASS | `name_underpass` / `tencongchui` |
| ROW_UTIL | `tencongtrinh_htk` |
| REST/PARKING | `name_work` + `type_work_id` |
| RAIL_CROSS | `name_crossing` |
| RESCUE_VEHICLE | `parking_location_name` + `vehicle_type_id` |
| ITS | `location_name_its_ccroom` |

## 4. Thông số theo loại — đủ cột dump (rebuild phải giữ)

Không liệt kê lại 3 tầng + giá trị TS + lịch sử (mục 3). Chỉ cột **thuộc tính loại**.

| Type | Dump | Cột thuộc tính (hết header) |
|------|------|------------------------------|
| TRAFFIC_SIGN | `tbl_road_sign` | `location_id` · `sign_code_number` · `road_sign_content` · `width` · `height` · `ngaylapdat` · `material_sign_id` · `shape_sign_id` · `area` |
| KM_POST | `tbl_km_post` | `name_km_post` · `distance_next_post` · `materials_id` |
| DELINEATOR | `tbl_guide_post` | `h_post_type_id` · `installed_location_id` · `guide_post_type_id` · `average_installation_interval` · `length` · `width` · `height` · `total_number_within_section` · `h_average_installation_interval` · `h_total_number_within_section` · `h_length` · `h_width` · `h_height` · `h_guide_post_type_id` |
| GUARDRAIL | `tbl_guardrail` | `type_guardrail` · `material_id` · `reflective` · `installation_purpose_id` · `actual_length` · `installed_location_id` |
| CONVEX_MIRROR | `road_sphere_mirror` | `total_number_post` · `asset_type_mst_id` · `shape_cut_post_id` · `diameter_post` · `material_post_id` · `height_post` · `span_length` · `location_post_id` · `number_sign` |
| DITCH | `tbl_longitudinal` | `ditch_type_id` · `structural_type_id` · `work_type_id` · `culvert_shape_id` · `actual_length` · `number` · `height_culvert` · `width_bottom` · `width_top` · `number_work_within_section` · `materials_work_id` · `length_manhole` · `width_manhole` · `height_manhole` · `location_id` |
| MEDIAN | `tbl_median_strip` | `type_median_strip_id` · `length_median_strip` · `width_median_strip` · `planting_grass` · `planting_grass_area` · `planting_tree` · `number_tree` · `height_fence` · `material_type_fence_id` · `location_median_strip_id` |
| RETAINING | `tbl_retaining_wall` | `retaining_wall_type_id` · `material_type_id` · `actual_protected` · `location_id` · `average_height` · `number` · `foundation_type_id` · `asset_type` |
| SLOPE_PROTECT | `tbl_slope` | `protection_type_id` · `slope_classification_id` · `actual_protected` · `location_id` · `average_height` |
| LIGHTING | `tbl_street_lighting` | `management_id` · `number_pole_light_bulb` · `number_light` · `bulb_type_id` · `type_transforming_station_id` · `capacity_transformer` · `number_control_box` · `control_method_id` · `vitri` |
| INTERCHANGE | `tbl_intersection` | `name_intersection` · `intersection_type_id` · `intersect_with_id` · `intersection_shape_id` · `ketcau` · `traffic_signal_lights` · `median_strip` · `khoangcachvoinuttruoc` · `phuongthucdieukhien` · `differential_island_height` |
| UNDERPASS | `tbl_underpass_box` | `tencongchui` · `culvert_type_id` · `name_underpass` · `construction_id` · `weight` · `number` · `width` · `height` · `crossing_length_culvert` · `structure_type_id` · `number_wingwall` · `material_wingwall_id` · `pavement_type_inside_underpass_id` · `area_pavement_inside_underpass` · `number_lighting` · `number_signboard` · `number_barrier` |
| ROW_UTIL | `tbl_infrastructure_row` | `tencongtrinh_htk` · `type_work_id` · `length` · `number_post` · `owner` · `located_within_id` · `protection_tructure` · `type_protection_structure_id` · `support_type_id` · `distance_road_center` · `distance_between_supports` · `status_hiring_is_within_row` · `build_location` |
| LAND_ROW | `tbl_land_btra` | `construction` · `status_land_lot_id` · `under_managemen` · `under_operation` · `exploited_id` · `length` · `width` · `total_area` · `width_access_road` · `pavement_type_access_road_id` · `distance_road_center` · `access_road` · `location_id` · `lengthiness_access_road` |
| STATION_HOUSE | `tbl_road_admin_office` | `name_building` · `total_area_auxiliary_works` · `auxiliary_works_grade_id` · `total_area_office_building` · `materials_in_office` · `build_location` · `type_work_id` · `office_building_grade_id` · `site_area_using_land` |
| BUS_STATION | `tbl_bus_station` | `name_terminal` · `type_work_id` · `owner_id` · `site_area_using_land` · `main_transportation_route` · `total_area_floors` · `building_grade_id` · `build_location` · `classification` |
| BUS_STOP | `tbl_bus_stops` | `type_work_id` · `management_id` · `stop_bay` · `pavement_type_bus_stop_bay_id` · `length_bus_stop_bay` · `station_name` · `width_bus_stop_bay` · `seated_waiting_bus` · `bus_shelter` · `structure_bus_shelter_id` · `material_road_refuge` · `length_road_refuge` · `width_road_refuge` · `max_slope` · `vitri` · `escape_route_*` |
| RAIL_CROSS | `tbl_railway_crossing` | `name_crossing` · `protection_type_id` · `traffic_control_method_id` · `shortest_waiting_time` |
| EMS_POST | `tbl_first_aid_station` | `name_station` · `owner_id` · `station_type_id` · `distance_nearest_major_road` |
| TOLL | `tbl_toll_booth` | `station_name` · `weighting_method` · `number_weighting_lane` · `roof_structures_gate_id` · `number_one_stop_lane` · `number_manual_lane` · `number_etc_lane` · `length_reinforcement` · `pavement_type_id` · `area_yoll_gate_pavement` · `width_*` · `operation_building_location_id` · `house_grade_id` · `auxiliary_works_grade_id` · `land_area_*` · `solanETC` · `solancantaitrong` · `road_structure_id` |
| FERRY | `tbl_ferry_terminal` | `name_ferry_terminal` · `loaibenpha` · `level_worlk_id` · `river_channel_name_id` · `number_of_ferries_at_terminal` · `operation_time` · `is_project_replacement` · `chieurongben` · `chieudailuoiben` |
| REST_AREA / PARKING | `tbl_rest_stops` | `type_work_id` · `name_work` · `categorized_id` · `owner_id` · `actual_length` · `site_area_using_land` · `office_building_grade_id` · `total_area_floors` · `service_area` · `total_area_office_building` · `auxiliary_works_grade_id` · `parking_lot` · `total_parking_lot` · `traffic_emergency_service` · `first_aid_service` · `build_location_id` · `total_area_auxiliary_works` |
| WEIGH_STATION | `weight_station` | `station_name` · `site_area_installed_equipment` · `management_unit_id` · `building_area` · `includes_load_reduction_area` · `light` · `camera_observation` · `equipment_measurement_vehicle_size` · `type_weighting_equipment_id` · `origin_manufacturing` · `year_manufacturing` · `max_axle_load_limit` · `approval_code_number` · `inspection_date_weight_station` · `length_approaching_road` · `width_approaching_road` · `pavement_type_id` · `location` |
| COUNT_STATION | `mst_counting_station` | `agency_id` · `name_vi` · `name_en` · `from_coordinate` · `to_coordinate` · `no_of_lane` · `speed` |
| RESCUE_STATION | `tbl_disaster_res_facility` | `name_building` · `materials_in_store` · `site_area_using_land` · `office_building_grade_id` · `total_area_auxiliary_works` · `auxiliary_works_grade_id` · `total_area_stored_building` · `stored_building_grade_id` · `total_area_office_building` · `vitri` |
| RESCUE_VEHICLE | `tbl_rescue_vehicle` | `vehicle_type_id` · `parking_location_name` · `purchased_by` · `under_operation_by` |
| ITS_CAMERA | `tbl_its` | `tn_*` (CCTV, VMS, server, cáp, trụ…) · `type_management_center_id` · `location_name_its_ccroom` · `location_its_central_control_id` |
| NOISE_BARRIER | `tbl_noise_barrier` | `type_noise_barrier_id` · `average_height` · `actual_length` · `vitri` |
| PONTOON | `tbl_pontoon_bridge` | `name_pontoon_bridge` · `name_river` · `level_work_id` · `width_pontoon_bridge` · `length_pontoon_bridge` · `pontoon_bridge_type_id` · `operational_load` |
| SPILLWAY | `tbl_spill_way` | `spillway_type_id` · `name_work` · `name_river` · `width_spillway` · `length_spillway` · `no_span` · `span_length` · `structure_type_spillway_id` · `with_water_level_measuring_pole` · `location_where_water_level_id` · `Floods_usually_duration_year` · `average_number_flood_day` · `average_number_flooded_day` · `operational_load` |
| PAVEMENT | `tbl_rmd` | **Toàn bộ** header Biểu 1+mở rộng (làn · lề · vỉa · tốc độ · tải · overlap · foreign · repair) — xem mục 2.1 · **không** rút còn 16 cột CSV |
| NHANH/TRANH/GOM | `duongnhanh` / `duongtranh` / `duonggom` | `ten` · `ten_en` · `km_from`/`km_to` · tỉnh/xã đầu-cuối · `chieudaithucte` · `roadtype` · `capduong` · `duanbot` · `tendonvivanhanh` · `thoigianbatdau`/`ketthuc` · `weight` · `ghichu` — `parent_code` = parse `road_name` / `long_route_name` |

## 5. Catalog tuyến — chuẩn hóa

| Row | `route_kind` | `code` | `name` | `parent_code` |
|-----|--------------|--------|--------|---------------|
| Tuyến chính | `QUOC_LO` / `CAO_TOC` / `HCM` | `QL.1` | `QL.1` | trống |
| Tuyến named | *SA: kind mới hoặc `KHAC`* | ổn định từ `long_route_name` | `QL.1 - Lạng Sơn (BOT)` | `QL.1` |
| Nhánh/tránh/gom | `NHANH` / `TRANH` / `GOM` | không lấy `KM0+000-*` làm tuyến chính | tên dump `ten` | tuyến chính / named |

Grid `/mas/tuyen-duong`: thêm Tuyến chính · Tuyến named · Km từ–đến · BOT (`duanbot`).

## 6. Grid / form hiển thị (không invent path)

Cluster + section reuse + enqueue theo mã: [`so-ts-type-grid.md`](so-ts-type-grid.md) · mẫu `docs/img/gov-mau-tai-san/`.

| Màn | Cột / section bắt buộc |
|-----|------------------------|
| Mọi sổ TS | Tách: Tuyến chính · Tuyến · Đoạn · Lý trình · tên official |
| Cột Km | Tên cột · vật liệu · cách cột kế |
| Biển báo | Số hiệu · nội dung · hình dạng · vật liệu · R/C/DT · vị trí đặt |
| Cọc | 3 tầng · km+XY đầu/cuối · vị trí mặt cắt · loại cọc (để trống nếu dump null) · 2 bộ kích thước tiêu/H · khoảng cách LĐ |
| Biểu 1 | 3 tầng · tỉnh đầu/cuối · 4 tọa độ · loại đường · loại nền · chiều xe · cấp · dài thực tế · năm SC · **cột dump còn lại** trên tab/chi tiết — không chỉ 16 CSV |
| Filter | Tuyến = chính + named — **không** `KM0+000-*` |

Schema cột spec + import: SA chốt (cột phẳng theo loại vs bảng con). Entity hiện **cấm** JSON parent. **Cấm** API mới trước DOMAIN-MAP.

## 7. GAP

| ID | P | Việc |
|----|---|------|
| GAP-GOV-ROUTE-3LVL | P0 | Rebuild + catalog: `road_name` / `long_route_name` / `name_of_route_asset` tách |
| GAP-KMPOST-NAME-01 | P0 | `name` = `name_km_post` — sửa `IsWeakAssetName` |
| GAP-KMPOST-KM-01 | P0 | Parse lý trình từ tên cột khi `lytrinh` trống |
| GAP-SIGN-SPEC-01 | P0 | Giữ đủ cột `tbl_road_sign` · grid/form hình dạng + số hiệu |
| GAP-DELIM-SPEC-01 | P0 | Cọc: đủ cột `tbl_guide_post` (2 bộ H + vị trí cắt) · `name` ≠ đoạn |
| GAP-PAV-SPEC-01 | P0 | `tbl_rmd` đủ cột dump → CSV/entity/form Biểu 1 · 3 tầng tuyến |
| GAP-GOV-SPEC-ALL | P1 | Mọi type mục 4 — rebuild giữ cột · form hộ chiếu theo loại |
| GAP-ROUTE-NAMED-01 | P0 | Row named/BOT + `parent_code` |
| GAP-ROUTE-05 | P1 | Dropdown tuyến = chính + named |
