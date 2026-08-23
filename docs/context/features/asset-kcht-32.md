# Catalog 36 loại tài sản KCHT — Feature Context

> **Slug:** `asset-kcht-32` (giữ slug) · **Module:** Asset × Incident · **Phase:** P1  
> **Status:** Context · **catalog_36 confirmed** (2026-08-18) · **packKind:** `master` + mobile hub  
> **Kind:** **B** list loại · **D** hộ chiếu TS (thông số + sự cố) · Mobile wallet (layout VNeID)  
> **Không** thay list pack `asset` đã done · **mở rộng** seed `asset-type` (23 → **36**)  
> **Sources:** `11-CSDL-SO-SACH-DATABASE-API.md` (12 biểu + ATGT con) · `INVESTIGATE-CUC2.md` §4 · `docs/Mẫu import/*.xlsx` (18 file) · `asset.md` · `incident.md`  
> **Layout mock:** `docs/mobile-legacy/layout/` (VNeID — **khung** header + 3×2 + ví giấy tờ + FAB; **cấm** clone CCCD/đỏ Bộ CA)  
> **MFE:** `Linm.Web.RMMS.Asset` · `/so-ts` + Master `/mas/loai-ts`  
> **Mobile proto:** `specs/mobile-p1/ui/prototype/`  
> **Control-hint:** `specs/_data-analy/features/asset-kcht-32-control-hint.md`

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | 1 hồ sơ / loại TS: **thông số kỹ thuật** (biểu CSDL / Excel) + **sự cố gắn loại** (tuần đường / AI) |
| Persona | Tuần đường · Hạt · Văn phòng Khu IV |
| App hiện có | Mobile Tài sản (thu thập) · Web Sổ TS · 12 biểu CSDL · 23 mã CUC 2 |
| DoD P1 | Seed **36** mã · form thông số theo loại · tab Sự cố trên hộ chiếu · SearchInput type |

**Cách đếm 36:** 12 biểu + ATGT con + CUC 2 không trùng + **4 mã CUC 2** (EMS / TOLL / FERRY / REST) — confirm `expand_36`.

## 2. Catalog 36 (canonical)

| # | code | Tên VN | Nguồn | Import xlsx | Biểu |
|---|------|--------|-------|-------------|------|
| 1 | `PAVEMENT` | Mặt đường | CSDL | — | 1 |
| 2 | `BRIDGE` | Cầu | CSDL | — | 2 |
| 3 | `TUNNEL` | Hầm đường bộ | CUC2+CSDL | `temp_Ham.xlsx` | 3 |
| 4 | `CULVERT_X` | Cống thoát nước ngang | CUC2+CSDL | `temp_Cong_thoat_nuoc_ngang.xlsx` | 4 |
| 5 | `DITCH` | Rãnh / cống dọc | CSDL+CUC2 `CULVERT_L` | `temp_Cong_doc.xlsx` · `temp_ranh_doc.xlsx` | 5 |
| 6 | `UNDERPASS` | Hầm chui dân sinh | CUC2+CSDL | `temp_cong_chui_dan_sinh.xlsx` | 6 |
| 7 | `TRAFFIC_SIGN` | Biển báo | CSDL ATGT | (gộp long môn) | 7 |
| 8 | `DELINEATOR` | Cọc tiêu / cọc H | CUC2+CSDL | `temp_Coc_tieu.xlsx` | 7 |
| 9 | `KM_POST` | Cột Km | CUC2 | `temp_cot_km.xlsx` | 7 |
| 10 | `MEDIAN` | Dải phân cách giữa | CUC2+CSDL | `temp_Dai_phan_cach_giua.xlsx` | 7 |
| 11 | `ANTI_GLARE` | Tấm chống chói | CSDL ATGT | **thiếu** | 7 |
| 12 | `TRAFFIC_ISLAND` | Đảo giao thông | CSDL ATGT | **thiếu** | 7 |
| 13 | `ROAD_STUD` | Đinh phản quang | CSDL ATGT | **thiếu** | 7 |
| 14 | `GUARDRAIL` | Hộ lan / tôn sóng | CUC2+CSDL | `temp_Ho_lan_…xlsx` | 7 |
| 15 | `ROAD_MARKING` | Vạch sơn | CSDL ATGT | **thiếu** | 7 |
| 16 | `CRASH_CUSHION` | Thùng giảm chấn | CSDL ATGT | **thiếu** | 7 |
| 17 | `CONVEX_MIRROR` | Gương cầu | CSDL ATGT | **thiếu** | 7 |
| 18 | `TRAFFIC_SIGNAL` | Đèn tín hiệu | CSDL ATGT | **thiếu** | 7 |
| 19 | `BOUNDARY` | Mốc lộ giới / GPMB | CSDL | — | 8 |
| 20 | `RETAINING` | Kè / tường chắn | CUC2+CSDL | `temp_Ke_Tuong_Chan.xlsx` | 9 |
| 21 | `SHOULDER` | Lề đường / hàng rào | CSDL | — | 10 |
| 22 | `LIGHTING` | Chiếu sáng đường | CUC2+CSDL | `temp_He_thong_chieu_sang_duong.xlsx` | 11 |
| 23 | `GREEN` | Cây xanh / thảm cỏ | CSDL | — | 12 |
| 24 | `INTERCHANGE` | Nút giao đường bộ | CUC2 | `temp_Nut_giao_duong_bo.xlsx` | — |
| 25 | `SLOPE_PROTECT` | Bảo vệ mái dốc | CUC2 | `temp_Mai_doc.xlsx` | — |
| 26 | `GANTRY_SIGN` | Giá long môn / cột cần | CUC2 | `temp_Gia_long_mon_…xlsx` | 7 |
| 27 | `ROW_UTIL` | CT HTKT trong HLATĐB | CUC2 | `temp_Cac_cong_trinh_htkt_…xlsx` | — |
| 28 | `STATION_HOUSE` | Nhà hạt QLĐB | CUC2 | `temp_Nha_hat_quan_ly_duong_bo.xlsx` | — |
| 29 | `BUS_STATION` | Bến xe buýt / khách | CUC2 | `temp_Ben_xe_buyt_xe_khach.xlsx` | — |
| 30 | `BUS_STOP` | Điểm đỗ / dừng xe | CUC2 | `temp_Diem_dung_do_xe_buyt_…xlsx` | — |
| 31 | `RAIL_CROSS` | Giao bằng đường sắt | CUC2 | `temp_Diem_giao_duong_sat.xlsx` | — |
| 32 | `LAND_ROW` | Đất thuộc TS hạ tầng | CUC2 | — | — |
| 33 | `EMS_POST` | Trạm trực cấp cứu | CUC2 | — | — |
| 34 | `TOLL` | Trạm thu phí | CUC2 | — | — |
| 35 | `FERRY` | Bến phà | CUC2 | — | — |
| 36 | `REST_AREA` | Trạm dừng nghỉ | CUC2 | — | — |

## 3. Trường dùng chung (mọi loại)

| Field | controlHint | catalogKind |
|-------|-------------|-------------|
| code | Text IdCode `TS-yyyyMMdd-nnn` | — |
| name | Text | — |
| type | SearchInput | **asset-type** (36) |
| route | SearchInput | **road-route** |
| kmFrom / kmTo | Text chainage | — |
| side | Dropdown L/R/C/Both | LOOKUP_STATIC |
| status | Dropdown Tốt / Theo dõi / Cần BT | LOOKUP_STATIC |
| orgUnit | SearchInput tree | **org-unit** |
| lat / lng | Number | GPS ghim — cấm sửa sau Lưu |
| photos | Camera slots | — |
| note | Text | — |

## 4. Thông số kỹ thuật theo loại

Nguồn cột: `11` §1.2. Thiếu Excel → **GAP** ghi dưới.

| code | Thông số P1 (bắt buộc *) | Thiếu / UNCLEAR |
|------|--------------------------|-----------------|
| PAVEMENT | LengthKm* · BaseWidthM · SurfaceWidthM · StructureType* · SurfaceThicknessCm · RoadClass · YearsInService · LastSurfaceRepairYear | Handover flags — confirm có trên mobile? |
| BRIDGE | BridgeName* · CrossingType · LengthM* · WidthM · ClearanceM · SpanCount · DesignLoad · BuiltYear | Abutment/Pier jsonb — DEFER P2 |
| TUNNEL | TunnelName* · LengthM* · WidthM · TubeCount · LiningType · HasVentilation* · HasLighting · HasFireFighting · Cctv | ConditionDetail free text |
| CULVERT_X | CulvertCode · Aperture* · Shape* · BodyStructure · LengthM · DesignLoad · BuiltYear | Inlet/Outlet head |
| DITCH | DitchKind* (hở/kín) · Structure · Shape · ApertureSize · LengthM · DrainageCapacity | 2 file import — gộp 1 loại? **GAP-AK32-05** |
| UNDERPASS | ApertureM* · BodyStructure · LengthM · Lighting · Drainage · BuiltYear | PavementInside |
| TRAFFIC_SIGN | SignCode* · SignSize · PoleCount · PoleHeightM | vs GANTRY_SIGN — 1 hay 2 loại? **GAP-AK32-06** |
| DELINEATOR | Kind* · Qty · Structure · AreaM2 | Cọc H vs cọc tiêu cùng mã? |
| KM_POST | StationKm* · Kind (Km/H) · Structure | — |
| MEDIAN | Kind · Structure · LengthM* · HeightM | — |
| ANTI_GLARE | Kind · Structure · Qty · LengthM | **Không mẫu import** |
| TRAFFIC_ISLAND | IslandType · Structure · AreaM2 | **Không mẫu import** |
| ROAD_STUD | Size · Qty | **Không mẫu import** |
| GUARDRAIL | Kind* · Structure · LengthM* · Reflector | — |
| ROAD_MARKING | MarkCode · LengthM · WidthM · AreaM2 | **Không mẫu import** |
| CRASH_CUSHION | Qty · Kind | **Không mẫu import** |
| CONVEX_MIRROR | Qty · HeightM | **Không mẫu import** |
| TRAFFIC_SIGNAL | PoleKind · HeightM · LampKind · Qty | **Không mẫu import** |
| BOUNDARY | MarkerKind* (lộ giới/GPMB) · Structure · AreaM2 · CompletedYear | — |
| RETAINING | WallSide* · WallKind · Structure · LengthM* · HeightM · CrestDitch* | — |
| SHOULDER | ShoulderStructure · LengthM · WidthM · FenceKind · FenceLengthM | Phát quang taluy — có tách SLOPE? |
| LIGHTING | Grid vs Solar* · PoleCount · CabinetCount · LampWatt | Cột solar chi tiết — **GAP-AK32-07** |
| GREEN | Species clumps · GrassAreaM2 | Danh mục loài — **GAP-AK32-08** |
| INTERCHANGE | Name · Legs · Signalized | Không cột biểu 1–12 |
| SLOPE_PROTECT | Side · Structure · LengthM · HeightM | — |
| GANTRY_SIGN | GantryKind · SignCount · WidthM | Overlap TRAFFIC_SIGN |
| ROW_UTIL | UtilKind · Owner · LengthM | Chủ quản lý ngoài ngành |
| STATION_HOUSE | Name · AreaM2 · BuiltYear | — |
| BUS_STATION | Name · BayCount | — |
| BUS_STOP | Shelter · Pole | — |
| RAIL_CROSS | RailOwner · Barrier · Signal | — |
| LAND_ROW | AreaM2 · UseType | Demo từng map nhầm PAVEMENT |
| EMS_POST | Name · Staffed24h · Phone | Không cột biểu |
| TOLL | Operator · LaneCount · BuiltYear | BOT — partner-unit |
| FERRY | Name · Capacity · Hours | Khu có phà |
| REST_AREA | Name · ParkingSlots · Services | — |

## 5. Sự cố gắn loại (đề xuất — **chưa có SSOT official**)

Mọi hộ chiếu TS: tab **Sự cố** = list `incident` filter `assetId` + `assetType`.  
Tạo sự cố từ hiện trường: prefill type + Km + GPS.

| code | Loại sự cố điển hình (Dropdown đề xuất) | Nguồn |
|------|----------------------------------------|-------|
| PAVEMENT | Ổ gà · Nứt · Lún · Sóng · Bong tróc | TT 41 · PCI |
| BRIDGE | Khe co giãn · Lan can · Gối · Dầm · Thoát nước mặt cầu | Sổ KT cầu 20 bộ phận |
| TUNNEL | Đèn hỏng · Thông gió · Thấm · PCCC | Biểu 3 |
| CULVERT_X / DITCH / UNDERPASS | Tắc · Sập miệng · Xói · Ngập | Tuần đường |
| TRAFFIC_SIGN / GANTRY | Mất biển · Mờ · Nghiêng · Gãy cột | ATGT |
| DELINEATOR / KM_POST / ROAD_STUD | Mất · Gãy · Mờ phản quang | ATGT |
| GUARDRAIL / MEDIAN / ANTI_GLARE | Móp · Đứt · Thiếu tôn | ATGT |
| ROAD_MARKING | Mờ · Bong | ATGT |
| CRASH_CUSHION / CONVEX_MIRROR / TRAFFIC_SIGNAL | Hỏng · Mất | ATGT |
| RETAINING / SLOPE | Nứt · Sạt · Thấm | Thiên tai |
| LIGHTING | Đèn tắt · Tủ hỏng · Cột nghiêng | Vận hành |
| GREEN | Chết cây · Lấn hành lang | HLATĐB |
| BOUNDARY / LAND_ROW / ROW_UTIL | Lấn chiếm · Mất mốc | HLATĐB |
| RAIL_CROSS | Barrier hỏng · Tín hiệu | Đường sắt |
| INTERCHANGE / BUS_* / STATION / BRIDGE approach | Ùn tắc · Hư mặt · Thiếu ATGT | Tổng hợp |
| EMS_POST / TOLL / FERRY / REST_AREA | Hỏng thiết bị · Mất ATGT · Ngập bến | Vận hành |

**GAP-AK32-04:** **đã duyệt** bảng §5 (confirm `accept_defaults`).

## 6. UI / Design

| Screen | Pattern | Zone |
|--------|---------|------|
| Web loại TS | Kind B master | SearchInput 32 |
| Web hộ chiếu TS | Full page tab Thông số \| Sự cố \| Ảnh \| Map | form-full-page 5 cột |
| Mobile hub | VNeID: ví giấy tờ (thẻ hộ chiếu) + 2 ô Tích hợp | `DES-MOB-ASSET-HUB` |
| Mobile 36 loại | Lưới 3 cột pictogram | `DES-MOB-ASSET-32` |
| Mobile chi tiết loại | Thẻ hộ chiếu + thông số + list SC | `DES-MOB-ASSET-TYPE` |

Layout ref: `docs/mobile-legacy/layout/*.jpg` — header band + tên + 2 card + lưới 3×2 + FAB giữa. Brand **RMMS xanh Cục ĐB** — không đỏ VNeID.

## 7. API (đề xuất SA — chưa chốt)

Giữ `api/v1/so-ts/road-assets` + `type=` 32 mã.  
Thông số: cột phẳng theo type **hoặc** `specsJson` — **cấm** parent `*LinesJson` cho dòng sự cố (sự cố = `rmms_incidents.assetId`).  
Master: `api/v1/open-api/asset-types` seed **36**.  
**Cấm** `api/v1/infra/*` ngoài DOMAIN-MAP (đã chốt csdl-so-sach → `asset/csdl-records`).

## 8. Gaps — cần user confirm

| ID | Thiếu | Hỏi |
|----|-------|-----|
| GAP-AK32-01 | 4 mã CUC 2 | **Closed** — P1 mã 33–36 |
| GAP-AK32-02 | PAVEMENT / BRIDGE | **Closed** — vào master |
| GAP-AK32-03 | 7 ATGT không import | **Closed** — P1 form tay |
| GAP-AK32-04 | Map sự cố §5 | **Closed** — duyệt |
| GAP-AK32-05 | Rãnh + cống dọc | **Closed** — `DITCH` gộp |
| GAP-AK32-06 | Biển vs long môn | **Closed** — tách 2 loại |
| GAP-AK32-07 | Lưới vs solar | **Closed** — 1 form 2 block |
| GAP-AK32-08 | Loài cây | **Closed** — free text P1 |
| GAP-AK32-09 | Excel chưa parse máy | Giữ — rescan khi có Python |
| GAP-AK32-10 | Catalog 36 **chưa** = data real `Sau-sat-nhap` + hồ sơ 12 biểu | Xem §10 |

## 10. Đối chiếu nguồn thật (2026-08-18) — **chưa khớp 1:1**

| Nguồn | Thực tế | Catalog 36 |
|--------|---------|------------|
| `docs/Hồ sơ…/4.1. In_Mẫu biểu_Cơ sở dữ liệu.xlsx` | **12 biểu** (6 sheet: 1+2 … 10+11+12). Biểu 7 ATGT = **1 form nhiều nhóm cột** (biển · cọc/Km · phân cách · chống chói · đảo · …) | Đã **tách** ATGT thành nhiều `code` — đúng nghiệp vụ CUC 2, **sai hình hồ sơ in** |
| `3. Mẫu sổ.docx` | **8 sổ BDTX** (tuần đường · trực · cầu · HLATĐB · …) | Không phải loại TS — lớp vận hành (`csdl-so-sach`) |
| `data-import/Sau-sat-nhap/19. Khu QLĐB IV.xlsx` | 1 sheet chính **«Đoạn tuyến đường chưa tài sản»** · ~85 cột GIS/mặt đường/lề/vỉa hè/FWD/CBR + `lichsudungkhaithac-sucoxayra` · `nguyennhan` | **Không** có 36 loại. Đây là **Biểu 1 + đoạn tuyến** (gần `pavement-section` / `road-route`) |
| `Sau-sat-nhap/Sổ chi tiết… giải ngân.xlsx` | Vốn **SCĐK · SCTX · BC giải ngân** | Ngoài catalog TS |
| `data-import/RMMS CUC 2` | Folder loại ~23 (+ alias) | Khớp phần CUC 2; **không** có Cầu / Mặt đường / 7 ATGT con |
| `Hướng dẫn sử dụng phần mềm.docx` | Mobile **Tài sản**: chọn loại → thu thập (vd. **cột km**) → cập nhật → bản đồ. *«Danh mục TS thu thập khác nhau theo đợt / đơn vị»*. Vấn đề: chọn **loại sự cố** riêng app | Không liệt kê 36 loại. IA đúng: chọn loại + form theo loại — **không** cứng 36 trên launcher |

**Cột real Khu IV (đoạn tuyến) chưa có trên hộ chiếu PAVEMENT proto:** làn xe cơ giới / thô sơ / khẩn · lề trái/phải (gia cố / không) · vỉa hè · `design_speed` · FWD · CBR · `paint_line_area` · `nail_reflective` · `guide_reflective` · lịch sử khai thác **sự cố + nguyên nhân** trên **cùng hàng đoạn**.

**Kết luận:** Context 36 = **hợp** hồ sơ 12 biểu (tách ATGT) + folder CUC 2. **Chưa** map 1:1 file `Sau-sat-nhap`. P1 real Khu IV = **đoạn tuyến (Biểu 1)** trước; 36 loại = master thu thập / import CUC 2.

## 9. Demo / prototype

- Mobile: `specs/mobile-p1/ui/prototype/ios|android` · `asset-kcht-32.js`  
- **reviewUrl:** `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/mobile-p1/ui/prototype/index.html`
