# Sổ TS — grid + form theo loại (gov mẫu)

> **Slug:** `so-ts-type-grid` · **Module:** Asset · **Phase:** P1  
> **Status:** Context · **2026-09-01** — mẫu DRVN `docs/img/gov-mau-tai-san/` + `/data-gov-integration`  
> **Kind:** **B** list `/so-ts?type=` + **D** form Create/Edit (`AssetFormPage`)  
> **Peer:** [`asset.md`](asset.md) · [`asset-kcht-32.md`](asset-kcht-32.md) · [`import-gov-ssot.md`](import-gov-ssot.md) · [`import-gov-asset-fields.md`](import-gov-asset-fields.md) · [`asset-kcht-dashboard.md`](asset-kcht-dashboard.md) · [`csdl-cuc-2026.md`](csdl-cuc-2026.md) (biểu Cục — **ROW riêng**)  
> **MFE:** `Linm.Web.RMMS.Asset` · `/so-ts` · `LinCatalogDataGrid` + `CatalogFormShell` **5 cột**  
> **Ảnh mẫu:** `Linm.RMMS.Data/docs/img/gov-mau-tai-san/{n}-{dump}-list.png` + `-detail.png`  
> **Cấm** seed/invent row (**GOV-IMP-01/03**) · **cấm** clone tab legacy DRVN

## 1. Mục tiêu

| | |
|--|--|
| List | Khi filter `type=` — cột **đúng loại** (dump + mẫu list). **Ẩn** cột không có thông tin trên loại đó |
| Form | Create/Edit: **cùng số field** tab **Thông tin chung** trên mẫu detail · controlHint Linm (`SearchInput` / `Select` / `Input` / `Number`) · **không** tab Chi tiết dữ liệu / Dữ liệu tài sản / Bảo trì / Tệp / Ghi chú / Lịch sử |
| UI | Tách route/page theo mã **được** — **bắt buộc reuse** section dưới. Cấm copy-paste form 32 lần |
| Data | Count / ô = CSV `gov-vn` sau import. Type `gap-no-source` → grid 0 + toast, **không** enqueue form giả |

**Hiện trạng (GAP):** `AssetListPage` luôn cùng 12 cột (mã · tên · loại · 3 tầng tuyến · km từ/đến · SL · ĐVT · KT · GPS). Form luôn «Thông tin tài sản» + `dumpSpecs` readonly `<dl>` + GPS — **không** field-per-type như mẫu.

**≠ biểu Cục:** form Sổ TS = hộ chiếu từng `type`. Biểu `csdl-bieu-*` = thống kê in. Deep-link được · **cấm** một form hai chuẩn · LOOKUP `road-route` 3 tầng dùng chung.

## 2. Section reuse (SSOT form)

Mọi loại **asset** dùng `CatalogFormShell` + `data-form-cols="5"`. Chỉ tab/body **Thông tin chung**.

| id | Section | Fields | Control |
|----|---------|--------|---------|
| `S-META` | Định danh | `code` IdCode · `type` · `status` · `source` | Input readonly · SearchInput **asset-type** · Select · Select |
| `S-ROUTE` | Thông tin tuyến đường | `route` · `routeNamed` · `routeSegment` | SearchInput **road-route** ×3 (`/mas/tuyen-duong`) · cascade `parentCode` |
| `S-LOC-POINT` | Vị trí (điểm) | `kmFrom` · lat/lng (X/Y) · tỉnh · `side` (mặt cắt) | Input chainage · Number · SearchInput/Select · Select L/R/C |
| `S-LOC-RANGE` | Vị trí (đoạn) | `kmFrom` · `kmTo` · 4 XY đầu/cuối | Input ×2 · Number ×4 |
| `S-NAME` | Tên official | theo dump §3 `import-gov-asset-fields` | Input **hoặc** SearchInput (biển = QCVN) |
| `S-ATTR` | Thuộc tính loại | cột dump mục 4 — **đủ field mẫu Thông tin chung** | map dưới |
| `S-GPS` | GPS / hồ sơ | lat · lng · QR · value · note | Number · Input · MoneyInput · TextArea |

**Không** mount section trống. Point type **cấm** bắt buộc `kmTo`. Range type hiện `S-LOC-RANGE` thay `S-LOC-POINT`.

### Control map (không bịa)

| Dump / mẫu | Control Linm |
|------------|----------------|
| Tuyến chính / named | `SearchInput` catalog **road-route** |
| Loại TS / loại công trình / vật liệu / hình dạng / vị trí mặt cắt | `Select` lookup **hoặc** `SearchInput` nếu master |
| Tên · số hiệu · nội dung | `Input` (biển: `SearchInput` **traffic-sign-type**) |
| Km+ | `Input` chainage (`utc` n/a) |
| Dài / rộng / cao / DT / SL | `Input type=number` |
| Có/không (cứu hộ, cấp cứu) | `Select` boolean / checkbox kit |
| Ngày lắp | date local `utcToLocalInputValue` |
| Label VN | `useFormOptions()` — **cấm** hardcode |

`dumpSpecs` JSON = nguồn giá trị cho `S-ATTR` đến khi SA chốt cột phẳng. Form **phải** render field (không chỉ `<dl>`).

## 3. Cluster (cùng section)

| Cluster | Mã | Grid ẩn mặc định | Form sections |
|---------|-----|------------------|---------------|
| `atgt_point` | `KM_POST` · `TRAFFIC_SIGN` · `DELINEATOR` · `CONVEX_MIRROR` | `kmTo` · SL/ĐVT nếu dump không có | S-META S-ROUTE S-LOC-POINT S-NAME S-ATTR S-GPS |
| `linear_protect` | `GUARDRAIL` · `MEDIAN` · `RETAINING` · `SLOPE_PROTECT` · `NOISE_BARRIER` · `DITCH` | cột loại khi `?type=` | S-META S-ROUTE S-LOC-RANGE S-NAME S-ATTR S-GPS |
| `crossing` | `UNDERPASS` · `CULVERT_X` · `PONTOON` · `SPILLWAY` · `RAIL_CROSS` · `INTERCHANGE` · `FERRY` | theo fill dump | S-META S-ROUTE S-LOC-POINT (hoặc RANGE nếu dump có km cuối) S-NAME S-ATTR S-GPS |
| `station` | `STATION_HOUSE` · `RESCUE_STATION` · `BUS_STATION` · `REST_AREA` · `PARKING` · `TOLL` · `EMS_POST` · `WEIGH_STATION` · `COUNT_STATION` | DT / cấp / CT phụ nếu fill 0 | S-META S-ROUTE S-LOC-POINT S-NAME S-ATTR S-GPS |
| `stop` | `BUS_STOP` | — | như `atgt_point` + S-ATTR bay/nhà chờ |
| `land` | `LAND_ROW` · `ROW_UTIL` | — | S-META S-ROUTE S-LOC-RANGE S-NAME S-ATTR S-GPS |
| `ops` | `LIGHTING` · `ITS_CAMERA` · `RESCUE_VEHICLE` | — | S-META S-ROUTE S-LOC-POINT S-NAME S-ATTR S-GPS |
| `route_master` | tuyến chính · `NHANH` · `TRANH` · `GOM` | **không** `/so-ts` | `road-route` `/mas/tuyen-duong` |
| `pavement` | `PAVEMENT` | **không** `/so-ts` generic | `pavement-section` `/so-ts/pl-mat-duong` |

`REST_AREA` ≠ `PARKING` (**GOV-IMP-02**) — cùng dump `tbl_rest_stops`, **tách** type + cột «Loại tài sản».

## 4. Grid theo loại

**Cột luôn (mọi `/so-ts?type=`):** tên official (link) · 3 tầng tuyến **tách cột** (cấm gộp 1 ô như DRVN) · lý trình phù hợp cluster.

**Ẩn cột (GOV):**

1. Filter `type=` → ẩn cột «Loại tài sản» (đã biết).
2. Cột dump/CSV fill **0%** trên loại đó → ẩn (vd. Nhà hạt: DT sử dụng · CT phụ · vật tư · cấp nhà · DT khuôn viên trống trên mẫu list).
3. Point → ẩn «Lý trình kết thúc» nếu dump không có `km_to`.
4. Không invent cột không có trong dump / mẫu Thông tin chung.

**Không** ẩn cột đang có giá trị trên trang hiện tại chỉ vì vài row «—».

## 5. Map mẫu → mã (35 cặp list/detail)

| # | File dump | Type / bind | Cluster | Ô | Import |
|---|-----------|-------------|---------|---|--------|
| 1 | `tbl_rmd` tuyến chính | `road-route` | `route_master` | t01 | imported |
| 11 | `tbl_rmd` đoạn | `PAVEMENT` | `pavement` | t02 | imported · GAP-PAV-SPEC-01 |
| 19 | `duongnhanh` | `NHANH` | `route_master` | t34 | imported |
| 29 | `duongtranh` | `TRANH` | `route_master` | t35 | imported |
| 39 | `duonggom` | `GOM` | `route_master` | t36 | imported |
| 3 | `tbl_km_post` | `KM_POST` | `atgt_point` | t09 | imported |
| 38 | `tbl_road_sign` | `TRAFFIC_SIGN` | `atgt_point` | t32 | imported |
| 14 | `tbl_guide_post` | `DELINEATOR` | `atgt_point` | t14 | imported |
| 28 | `road_sphere_mirror` | `CONVEX_MIRROR` | `atgt_point` | t31 | imported |
| 5 | `tbl_guardrail` | `GUARDRAIL` | `linear_protect` | t17 | imported |
| 23 | `tbl_median_strip` | `MEDIAN` | `linear_protect` | t11 | imported |
| 35 | `tbl_retaining_wall` | `RETAINING` | `linear_protect` | t20 | imported |
| 33 | `tbl_slope` | `SLOPE_PROTECT` | `linear_protect` | t12 | imported |
| 7 | `tbl_noise_barrier` | `NOISE_BARRIER` | `linear_protect` | t25 | imported |
| 13 | `tbl_longitudinal` | `DITCH` | `linear_protect` | t10 | imported |
| 12 | `tbl_underpass_box` | `UNDERPASS` | `crossing` | t06 | imported |
| 22 | cong-ngang | `CULVERT_X` | `crossing` | t07 | **gap-no-source** CSV 0 — UI từ mẫu, **cấm** seed |
| 2 | `tbl_pontoon_bridge` | `PONTOON` | `crossing` | t05 | imported |
| 34 | `tbl_spill_way` | `SPILLWAY` | `crossing` | t16 | imported |
| 24 | `tbl_railway_crossing` | `RAIL_CROSS` | `crossing` | t15 | imported |
| 26 | `tbl_intersection` | `INTERCHANGE` | `crossing` | t23 | imported |
| 21 | `tbl_ferry_terminal` | `FERRY` | `crossing` | t03 | imported |
| 16 | `tbl_road_admin_office` | `STATION_HOUSE` | `station` | t22 | imported |
| 6 | `tbl_disaster_res_facility` | `RESCUE_STATION` | `station` | — | imported · list only |
| 31 | `tbl_bus_station` | `BUS_STATION` | `station` | t04 | imported |
| 17 | `tbl_rest_stops` | `REST_AREA` | `station` | t26 | imported |
| 17 | cùng file | `PARKING` | `station` | t37 | imported · tách |
| 37 | `tbl_toll_booth` | `TOLL` | `station` | t28 | imported |
| 8 | `tbl_first_aid_station` | `EMS_POST` | `station` | t29 | imported |
| 27 | `weight_station` | `WEIGH_STATION` | `station` | t27 | imported |
| 18 | `mst_counting_station` | `COUNT_STATION` | `station` | t30 | imported |
| 4 | `tbl_bus_stops` | `BUS_STOP` | `stop` | t13 | imported |
| 9 | `tbl_land_btra` | `LAND_ROW` | `land` | t33 | imported |
| 32 | `tbl_infrastructure_row` | `ROW_UTIL` | `land` | t08 | imported |
| 15 | `tbl_street_lighting` | `LIGHTING` | `ops` | t18 | imported |
| 25 | `tbl_its` | `ITS_CAMERA` | `ops` | t19 | imported |
| 36 | `tbl_rescue_vehicle` | `RESCUE_VEHICLE` | `ops` | t24 | imported |

**Không enqueue:** `BRIDGE` · `TUNNEL` · `ANTI_GLARE` · `TRAFFIC_ISLAND` · `ROAD_STUD` · `ROAD_MARKING` · `CRASH_CUSHION` · `TRAFFIC_SIGNAL` · `BOUNDARY` · `SHOULDER` · `GREEN` · `GANTRY_SIGN` · `LAND` kho t21 (`GAP-AKD-01`) · t38–t40 report.

Thiếu file ảnh `#10 #20 #30` trong folder — không bịa loại.

## 6. Field Thông tin chung (mẫu đã đọc)

Chỉ field **có trên tab Thông tin chung** + cột list có data. Đủ cột dump: [`import-gov-asset-fields.md`](import-gov-asset-fields.md) §4.

| Type | Grid (mẫu) | Form S-ATTR (mẫu chung) |
|------|------------|-------------------------|
| `STATION_HOUSE` | Tên CT · tuyến · lý trình · loại CT. **Ẩn** DT / CT phụ / vật tư / cấp / khuôn viên (trống) | Tên công trình · Loại công trình (`Nhà hạt`) |
| `KM_POST` | Tên cột · tuyến · lý trình · khoảng cách cột kế · vật liệu. Ẩn cột rỗng cuối | `name_km_post` · `distance_next_post` · `materials_id` |
| `TRAFFIC_SIGN` | Số hiệu · tuyến · lý trình · vị trí đặt · nội dung · R · C · vật liệu · hình dạng · DT | dump biển §2.4 — **không** PoleCount |
| `GUARDRAIL` | Loại · tuyến · km đầu/cuối · vật liệu · SL phản quang · mục đích · chiều dài | `type_guardrail` · `material_id` · `reflective` · `installation_purpose_id` · `actual_length` |
| `REST_AREA` / `PARKING` | Tên trạm · tuyến · lý trình · loại · xếp loại · chủ SH · dài · DT · cứu hộ · cấp cứu | dump `tbl_rest_stops` · tách `type_work_id` |
| `PAVEMENT` | km đầu/cuối · tuyến · tỉnh/xã đầu-cuối · dài thực tế. **Ẩn** tên đối ngoại / đi trùng nếu trống | Biểu 1 — slug `pavement-section` |
| Route | Tên VN/EN · km · tỉnh/xã · dài | slug `road-route` |

## 7. API / entity

Giữ `api/v1/so-ts/road-assets?type=`. **Cấm** API mới ngoài DOMAIN-MAP.  
List: query `type` + hide-empty từ **type column profile** (SSOT dump fill), không hardcode 12 cột.  
Form: bind `dumpSpecs` + scalar đã có (`routeNamed` …). Cột phẳng mới → `/database-migration` `Schema_*` pair.

## 8. Queue

| Slug | Việc |
|------|------|
| `so-ts-type-grid` | Shell: column profile + section components + hide-empty |
| `so-ts-{kebab(type)}` | Bind 1 mã · reuse section · ảnh `{n}-*-list/detail.png` |
| `road-route` | Align grid tuyến + NHANH/TRANH/GOM (edit_page) |
| `pavement-section` | Align đoạn `tbl_rmd` (edit_page · GAP-PAV-SPEC-01) |

**Start:** `/agent-data-analy` `feature_context` · parent trước children.  
Lock 1 feature / page `/so-ts` — children **reuse** component parent, không fork `AssetFormPage` 32 file.

## 9. GAP

| ID | P | Việc |
|----|---|------|
| GAP-SOTS-COL-01 | P0 | Grid 1 schema mọi type — ẩn cột trống theo loại |
| GAP-SOTS-FORM-01 | P0 | Form field = mẫu Thông tin chung · không chỉ `<dl>` dumpSpecs |
| GAP-SOTS-REUSE-01 | P0 | Section S-* shared — cấm form rời không import section |
| GAP-SOTS-TAB-01 | P0 | Không port tab legacy DRVN |
| GAP-CULVERT-X-01 | P1 | `CULVERT_X` UI từ mẫu · CSV 0 đến khi có dump |
