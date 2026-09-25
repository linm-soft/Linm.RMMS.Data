# RMMS — Feature tracking (demo · STATUS · implement · release)

> **SSOT theo dõi.** Backlog mô tả: [`features/README.md`](features/README.md). Pipeline scan: [`implement-status.json`](implement-status.json) (có thể lệch — **ưu tiên** `specs/{slug}/STATUS.md`).  
> **HĐ:** `37001-08/2026-LIC/LINM-JNET` · PL01 P1 CAPEX 900tr (A 450 + B 300 + C 150). Spec: [`Linm.RMMS.Contract/analy/PROMPT-SPEC-P1-P2-PHU-LUC-RELEASE.md`](../../../Linm.RMMS.Contract/analy/PROMPT-SPEC-P1-P2-PHU-LUC-RELEASE.md).  
> **Demo hub:** `Linm.RMMS.Demo` · `npm run start:std` → http://localhost:5180 · catalog [`demoCatalog.ts`](../../../Linm.RMMS.Demo/src/demoCatalog.ts).  
> **Cập nhật:** 2026-09-20 · `/add-task` plan `nghiem-thu-mau` TT 41 10 công việc BDTX + chỉ số · lane mobile+BFF+API · web later  
> **Prior:** 2026-09-19 · `/scan-mobile-feature` `run_selected` Công tác nghiệm thu · `nghiem-thu` + `nghiem-thu-create` + `nghiem-thu-detail` · queue `qlbd-mobile` `pending_confirm`  
> **Prior:** 2026-09-19 · OSRM client: MFE/Demo/specs **0** `project-osrm.org` (Asset `@rmms/gis-osrm` + Demo fail-closed) · extract Linux **còn** — [map-service](features/map-service.md)  
> **Prior:** 2026-09-19 · `/hey-linm` dashboard+map: mọi MFE map = GIS clip BFF (**cấm** OSM.org) — [dashboard](features/dashboard.md) · [map-service](features/map-service.md)  
> **Prior:** 2026-09-19 · seed SĐT VN rewrite `cuc01_staff.csv` + `app_users.csv` (59 hàng · `0976258792`) — **không** queue · [users](features/users.md) §4b  
> **Prior:** 2026-09-18 · `/add-task` `job-title` `/mas/chuc-vu` · prior /hey-linm `its-anco-signal`  
> **Prior:** 2026-09-18 · /hey-linm `feature_context` `camera-connect` G3 RTSP publish 5G (HLS fMP4 playback)  
> **Prior:** 2026-09-18 · /hey-linm `runbook`+`feature_context` `android-store-submit` (CH Play AAB runbook)  
> **Prior:** 2026-09-17 · /hey-linm `feature_context` `ios-store-submit` (Invalid Binary CA92.1 · 90717 RGB)  
> **Prior:** 2026-09-16 · queue `qlbd-mobile` `task_1f6d86c4` `/implement-gis-map` `ios_replace_all_maps` (`patrol-map` + HITL `photo-geo-capture`) · /hey-linm `autocode_hub` · skill **`/gen-feature-tracking`**.  
> **Prior:** 2026-09-12 · `photo-geo-capture` (chụp + key FileService + gim vật thể → lat/lng) · 2026-09-05 web map/camera/CSDL.  
> **Prior:** 2026-08-28 · skill **`/gen-feature-tracking`** — thêm feature / implement (queue + chat) **phải** upsert file này. Nguồn STATUS đọc cùng ngày.  
> **Tài liệu khách (đã/chưa phân tích) — SSOT duy nhất:** [`docs/data/SOURCE-TRACKING.md`](../data/SOURCE-TRACKING.md) · extract [`docs/data/analyzed/`](../data/analyzed/). **Cấm** đọc lại xlsx/docx/pdf khi dòng = `analyzed`.  
> **Changelog:** 19/09/2026 — `/hey-linm` Apply map prod: `/bao-cao/dashboard` + AiVision detect + CSDL sổ 10 reuse `{MfeGis}/shared/map` `attachVnClipBasemap` · webpack `gis-map-alias.js` · skill `mfe-map-gis-stack.md` · **cấm** OSM.org/Esri/Carto trên MFE — [dashboard](features/dashboard.md) · [map-service](features/map-service.md) · GAP-MAP-OSM-CDN-01 / GAP-MAP-GIS-COMMON-01. · 19/09/2026 — seed SĐT VN rewrite (không queue): Auth `cuc01_staff.csv` + Data/WebService `app_users.csv` 59/188 · generator `normalizeVnPhone` · Auth `UserCsvImporter` + RMMS `AppUserCatalogHandler` normalize + update existing — [users](features/users.md) §4b · GAP-F-USR-06 / GAP-LOGIN-06. · 18/09/2026 — `/hey-linm` Apply `feature_context` SĐT VN: persist bắt đầu `0` · bỏ `.` và ký tự lạ · `+84`→`0` (Chi tiết tài khoản `0976.258.792`) — [users](features/users.md) §4b · [login](features/login.md) GAP-LOGIN-06. · 18/09/2026 — `/hey-linm` Apply `feature_context` `job-title` consumer: staff `/admin/user` + switch user/ProfileTab SearchInput catalog · seed JSON 19 mã **chưa** import DB (GAP-JOB-05) — [ctx](features/job-title.md) · [users](features/users.md). · 18/09/2026 — `/add-task` enqueue `job-title` `new_page` packKind=master `/mas/chuc-vu` (Excel cuc-01 chức danh · seed `job-title-seed.json`) — [ctx](features/job-title.md). · 18/09/2026 — `/hey-linm` Apply `feature_context` `its-anco-signal`: neo nút đèn Anco (Login · Get_List · Get_Cycle_Now) · hiển thị Camera + chi tiết đếm xe peer `camera-connect` · **cấm** gộp `toc` / Config_* / bản đồ phân luồng Wave 1 — [ctx](features/its-anco-signal.md) · extract [SRC-ANCO-ITS](../data/analyzed/anco-its-integrate.md). · 18/09/2026 — `/hey-linm` Apply `feature_context` `camera-connect` **G3:** tủ 5G **RTSP publish** MTX `:8554` (H.264) · web **HLS fMP4 playback** · **cấm** pull RTSP tủ / ONVIF cho case này — [ctx](features/camera-connect.md) · [32](32-CAMERA-RTSP-PUBLISH-INGEST.md) · [plan](../plan/camera-live/PLAN-push-ingest.md). · 18/09/2026 — `/hey-linm` `android-store-submit` runbook CH Play [`ANDROID-SUBMIT-GUIDE.md`](../plan/release-mobile/store/ANDROID-SUBMIT-GUIDE.md). · 17/09/2026 — `/add-task` enqueue Wave 1 `csdl-bieu-01`…`16` `edit_page` `--force` `roleOnly=data_analy` (csdl-export-print Excel) · skill `/add-task` · CLI `yarn add-task`. · 17/09/2026 — `/agent-qldb-workflow` enqueue Wave A `csdl-so-02` `edit_page` `roleOnly=data_analy` (CR `nktd-pdf-20260917` · LocationText) · Wave B park — [CR](../../specs/_cr/nktd-pdf-20260917/workflow-run.md). · 17/09/2026 — `/hey-linm` Apply `feature_context` `csdl-export-print`: epic in/xuất PDF+Excel đúng mẫu · Pack A 16 biểu+10 sổ (QĐ 08/2026 · **cấm** golden 12+8) · Pack B `rpt-*` · Pack C SRC-KCT-GN03 · **cấm** coi typed done = export xong — [ctx](features/csdl-export-print.md). · 17/09/2026 — `/hey-linm` PDF **Nhật ký tuần đường** (`SRC-NKTD-PDF`) · Wave A `csdl-so-02` LocationText · Wave B report **cấm** seed/check-in làm SSOT — [CR](../../specs/_cr/nktd-pdf-20260917/README.md). · 17/09/2026 — `/hey-linm` `feature_context` `ios-store-submit` (Invalid Binary CA92.1 · 90717 RGB). · 16/09/2026 — `/implement-gis-map` `ios_replace_all_maps` (`patrol-map` + HITL `photo-geo-capture`) · Wave 4 ios+android **done**. · 12/09/2026 — `photo-geo-capture` (chụp + key FileService + gim vật thể). · 01/09/2026 — epic `mobile-cleanup-mock`. · 12/09/2026 — `/hey-linm` Apply `feature_context`: **map loại xe** Hikvision TCM403 datasheet **9 type** + ISAPI lab (`vehicle` / `twoWheelVehicle` / `SUVMPV` …) → nhãn RMMS · AID người đi bộ **không** thuộc Vehicle Type · **cấm** 1:1 TCVN 14182 / Sổ 04 `class01`…`16` — [ctx](features/camera-vehicle-type.md) · [camera-connect](features/camera-connect.md). · 10/09/2026 — `/hey-linm` Apply `feature_context`: lab TCM403 **V5.4.0** radar Vehicle List ≠ XML `<speed>` · Fused = Coordinate Calibration · tắt Multi-Way · rollback log `apiKey`/XML — [31](31-CAMERA-TCM403-LAB-RADAR.md) · [23](23-CAMERA-HOST-NOTIFY-CONFIG.md) · [ctx](features/camera-connect.md). · 09/09/2026 — `/hey-linm` Apply `feature_context`: ingest **API key = Tên** · Admin enable/disable · **cấm rotate** — [ctx](features/camera-connect.md) § API key ingest · [23](23-CAMERA-HOST-NOTIFY-CONFIG.md) · [06](06-SECURITY-RATELIMIT.md). · 06/09/2026 — họp 1–5 **mobile** vào `/scan-mobile-feature` (`MEETING-1-5.md` enqueue_later) · pack `nghiem-thu` · `nghiem-thu-create` · **chưa** gen queue `qlbd-mobile`. · 06/09/2026 — enqueue họp 1–5 **web** (`meeting-1-5-web`) · upload = `/init-bff-file` + `/integrate-file-upload-web` · slug mới `nghiem-thu` · `khu-1-pilot` · **cấm** typed 16+10 re-run. · 06/09/2026 — `/hey-linm` plan **Camera security**: AEAD 2 chiều + resign URL (`session` TTL · `dashboard` grant unlimit tường hình) · tách host `Linm.RMMS.Camera` S3 — [plan](../plan/camera-security/PLAN.md) · [28](28-CAMERA-SECURITY.md) · [ctx](features/camera-connect.md). · 05/09/2026 — `/implement-ai-vision-stack` Wave **1 done** (`api/v1/ai-vision/**` · `Schema_RmmsVision` pair · taxonomy catalog · Draft trên `linm_rmms_vision`) · next Wave 2 BFF — [plan](../plan/ai-vision-service/README.md) · [ST](../../specs/ai-vision-service/STATUS.md). · 05/09/2026 — `/implement-ai-vision-stack` Wave **0p done** (`Linm.RMMS.Vision` `:5311`) · hub README `docs/workflows/qlbd` slice `ai_vision_stack` — [plan](../plan/ai-vision-service/README.md) · [ST](../../specs/ai-vision-service/STATUS.md). · 05/09/2026 — retry `task_96940f90` `csdl-bieu-08` Dev · packet integrate hub card `traffic-safety` → typed `/csdl-bieu-08` (`CsdlBieu08Page` đã có) · **cấm** generic `CsdlFormSlideout` — [ctx](features/csdl-bieu-08.md) · [impl](../../specs/csdl-bieu-08/implement/csdl-bieu-08.md). · 05/09/2026 — `/hey-linm` Apply `feature_context`: **hai lớp chứng từ** Sổ TS/hang-muc ≠ biểu·sổ Cục — LOOKUP `road-route` chung · ROW riêng · **cấm** gộp form (`GAP-CSDL-CUC-11` · `Q-PEER` P1 deep-link) — [`csdl-cuc-2026.md`](features/csdl-cuc-2026.md) §1b · analy §1.4 · [`asset-kcht-dashboard.md`](features/asset-kcht-dashboard.md) · [`so-ts-type-grid.md`](features/so-ts-type-grid.md). · 05/09/2026 — `/hey-linm` Apply `feature_context`: TS↔tuyến join **slug dump/T6** (`NormCatalogCode`, không Guid/IdCode) · `partner-unit` T6 **91** · GAP-ORS-VP-01 schema closed / **data** đoạn chưa import — [`road-route.md`](features/road-route.md) · [`import-gov-asset-fields.md`](features/import-gov-asset-fields.md) · [`asset.md`](features/asset.md) · [`partner-unit.md`](features/partner-unit.md) · [`org-route-scope.md`](features/org-route-scope.md). · 05/09/2026 — `/hey-linm` Apply `feature_context`: **camera SDK Railway** Linux64 COPY `hikvision_linux/lib` + `LD_LIBRARY_PATH` · BFF `ApiBase` private `:8080` · **đã kết nối** (`GAP-CAM-SDK-OS` · `GAP-SDK-02`) — [`camera-connect.md`](features/camera-connect.md) · [`22-CAMERA-TCM403-SDK-RESEARCH.md`](22-CAMERA-TCM403-SDK-RESEARCH.md). · 05/09/2026 — `/hey-linm` Apply `feature_context`: CSDL Cục **16 biểu + 10 sổ** (QĐ 08/2026) · hub `csdl-so-sach` = Kind G shell **done** · typed = child `csdl-bieu-01`…`16` / `csdl-so-01`…`10` · epic [`csdl-cuc-2026.md`](features/csdl-cuc-2026.md) · analy `specs/_data-analy/csdl-cuc-2026/` · **cấm** coi 12+8 done = xong cột Cục. · 04/09/2026 — enqueue `traffic-sign-type` (`/mas/loai-bien-bao`) + `iot` (`/iot`) · **CSDL 12+8 ≠ hang-muc:** `csdl-so-sach` = `/so-ts/csdl-so-sach` (STATUS **done**) · `asset-kcht-dashboard` = `/so-ts/hang-muc` (QA paused). · 04/09/2026 — `/hey-linm` Apply `skill_rules`+`feature_context`: pin TS **ghim đúng mã tuyến** tài sản · ẩn raw khi chưa snap (`GAP-MAP-PIN-ROUTE-01`) — [`gis-draw-live.md`](features/gis-draw-live.md) · `/gis-tai-san-snap`. · 03/09/2026 — `/hey-linm` Apply `feature_context`: tile **Live/Cache** + empty zoom (`GAP-MAP-TILE-EMPTY-ZOOM`) · `padding: 0` (`GAP-MAP-PIN-ZOOM`) · +/- = wheel (`GAP-MAP-ZOOM-STEP`) · OSM miss z≤12 **200 no-store** · MBTiles `/cache` (`GAP-MAP-MVT-SIMP`) — [`gis-osm-clip.md`](features/gis-osm-clip.md) · [`map-service.md`](features/map-service.md) · [`gis-draw-live.md`](features/gis-draw-live.md) · [`gis.md`](features/gis.md). · 03/09/2026 — `/hey-linm` Apply `feature_context`: **clip-mask** invert dưới nhãn (`GAP-MAP-MASK-ALIGN` · `GAP-MAP-LABEL-CLIP` · crop đất không crop chữ · ocean=`theme.sea`) — [`gis-osm-clip.md`](features/gis-osm-clip.md) · [`map-service.md`](features/map-service.md) · [`gis.md`](features/gis.md). · 03/09/2026 — `/hey-linm` Apply `feature_context`+`feature_tracking`: overlay Tuyến **cấm dump GPS thưa** (`GAP-MAP-DRAW-STREET-01` · `isSparseGpsChord` · fail = nét đứt) + bake **mọi zoom** (`GAP-MAP-INDEX-PAINT`) — [`gis-draw-live.md`](features/gis-draw-live.md) · [`gis-osm-clip.md`](features/gis-osm-clip.md) · [`map-service.md`](features/map-service.md). · 01/09/2026 — tuần đường **`routeKmChainAlongHighway`** (cấm `/match` đường nhỏ) + pin SVG + animate arc-length — [`gis-patrol-map.md`](features/gis-patrol-map.md). · 01/09/2026 — `/map-inspect-popup` tuần đường pin `.ci-pin` + card Họ tên / Tên vị trí / Tọa độ — [`gis-patrol-map.md`](features/gis-patrol-map.md). · 01/09/2026 — `/edit-web-feature` **`/gis/tai-san`** (`?type=` auto-check lớp) + tuần đường **OSRM snap + pin check-in** — [`gis-draw-live.md`](features/gis-draw-live.md) · [`gis-patrol-map.md`](features/gis-patrol-map.md). · 01/09/2026 — `/edit-web-feature` GIS menu **Bản đồ tài sản** `/gis/live` + **Bản đồ Tuần đường** `/gis/tuan-duong` (bỏ ha-tang / list 2D / tạo mới) — [`gis-draw-live.md`](features/gis-draw-live.md) · [`gis-patrol-map.md`](features/gis-patrol-map.md). · 01/09/2026 — `/hey-linm` Apply `feature_context`: native map **copy web live** `/gis/live` (chip · locate card **Vị trí của bạn**+GPS · **cấm** proto Đường/Phố) — [`patrol-map.md`](features/patrol-map.md) · [`gis-draw-live.md`](features/gis-draw-live.md). · 01/09/2026 — `/hey-linm` Apply `feature_context`: `/gis/live` **maxZoom 16** + pin detail pad 0.02° (`GAP-MAP-ZOOM-MAX` · `GAP-MAP-PIN-DETAIL-BBOX`) — [`gis-draw-live.md`](features/gis-draw-live.md) · [`gis-osm-clip.md`](features/gis-osm-clip.md) · [`map-service.md`](features/map-service.md). · 01/09/2026 — `/hey-linm` Apply `skill_and_context`: `/map-inspect-popup` click pin → card · locate **Tên: Vị trí của bạn** + **GPS** (bar **Vị trí của tôi**) — [`patrol-map.md`](features/patrol-map.md) · [`gis-draw-live.md`](features/gis-draw-live.md). · 01/09/2026 — `/hey-linm` Apply `feature_context`: khóa sơn Carto live (`water` `#aad3df` · **cấm** mask fill MapLibre · nét OSM ≠ Lớp Tuyến) — [`gis-osm-clip.md`](features/gis-osm-clip.md) · [`gis-draw-live.md`](features/gis-draw-live.md) · [`map-service.md`](features/map-service.md). · 01/09/2026 — `/hey-linm` Apply `feature_context`: `/gis/live` đường **nền + biên** OSM Carto (`GAP-MAP-ROAD-CARTO-01` · overlay Tuyến pair primary · **cấm** nét `#2563eb`) — [`gis-draw-live.md`](features/gis-draw-live.md) · [`gis-osm-clip.md`](features/gis-osm-clip.md). · 01/09/2026 — `/edit-web-feature` `/gis/live` đường **nền + biên** OSM Carto (`GAP-MAP-ROAD-CARTO-01`) — [`gis-draw-live.md`](features/gis-draw-live.md) · [`gis-osm-clip.md`](features/gis-osm-clip.md). · 01/09/2026 — `/edit-web-feature` `/gis/live` map-bar **Vị trí của tôi** (cấm Fit) — [`gis-draw-live.md`](features/gis-draw-live.md). · 01/09/2026 — `/edit-web-feature` `/gis/live` map-bar **Tiêu chuẩn \| Vệ tinh** (cấm Default/Streets/Sat EN) — [`gis-draw-live.md`](features/gis-draw-live.md) · [`gis-osm-clip.md`](features/gis-osm-clip.md). · 01/09/2026 — `/edit-web-feature` revert sơn đất/biển về Carto (`water` `#aad3df` · bỏ mask đè) — [`gis-osm-clip.md`](features/gis-osm-clip.md). · 01/09/2026 — `/edit-web-feature` nền đất/biển: đại dương = `theme.sea` (cấm OSM water 2 tone · mép dọc) — [`gis-osm-clip.md`](features/gis-osm-clip.md) · [`gis-draw-live.md`](features/gis-draw-live.md). · 01/09/2026 — `/edit-web-feature` `/gis/live`: nét bake không chord biển (`GAP-MAP-BAKE-JUMP`) · canvas GL mép tây (`GAP-MAP-GL-LEFT`) — [`gis-draw-live.md`](features/gis-draw-live.md) · [`gis-osm-clip.md`](features/gis-osm-clip.md) · [`map-service.md`](features/map-service.md). · 01/09/2026 — `/hey-linm` Apply `feature_context`: Default/Streets **OSM Carto muted** (đất `#e8e4dc` · biển `#8eb8c8` · không OSM.org) — [`gis-osm-clip.md`](features/gis-osm-clip.md) · [`map-service.md`](features/map-service.md). · 01/09/2026 — `/gis/live` z≤8 paint **osrm-bake/index** đủ nét (bỏ geomKey sample-80 · không clip/`landReadyPath` ẩn QL Bắc) — [`gis-draw-live.md`](features/gis-draw-live.md) · [`map-service.md`](features/map-service.md). · 01/09/2026 — `/implement-map-stack` Wave 3 **web done** (mobile pending): BFF clusters 200 + tiles 200 + overlay 401 · `viewport_lod` — [`map-service.md`](features/map-service.md). · 01/09/2026 — `/implement-map-stack` Wave 4 web **mobile tab stack**: tab 44px + ẩn/hiện nội dung để full bản đồ — [`map-service.md`](features/map-service.md). · 01/09/2026 — `/implement-map-stack` Wave 4 web **GAP-MAP-ZOOM-FILL**: zoom min = fill clip VN (không letterbox z5) — [`map-service.md`](features/map-service.md). · 01/09/2026 — `/implement-map-stack` Wave 4 **web done**: `Linm.Web.RMMS.Gis` MapLibre clip BFF MVT · maxBounds 6.8–23.5 · 0 OSM.org trên Gis*Page — [`map-service.md`](features/map-service.md). · 01/09/2026 — `/implement-map-stack` Wave 2 **web BFF done** (mobile pending): NuGet `Linm.Platform.MapService.Bff` **1.1.0** · `web-bff/api/v1/gis/tiles/…` MVT 200 · guest overlay 401 — [`map-service.md`](features/map-service.md). · 01/09/2026 — `/implement-map-stack` Wave 1 **done**: MapService `:5021` guest 401 overlay + MVT + 34 tỉnh — [`map-service.md`](features/map-service.md). · 01/09/2026 — `/hey-linm` Apply `map-service`: host **`Linm.Platform.MapService`** (`:5021`) · 34 tỉnh ingest + mask · **chưa** BFF/MFE/OSM clip — [`map-service.md`](features/map-service.md). · 01/09/2026 — `/hey-linm` Apply: host **`Linm.RMMS.Vision`** (`:5311`) cho **cả** domain AiVision · P2 chỉ đổi engine trên service này · **cấm** reuse `:5301` — [`ai-vision-service.md`](features/ai-vision-service.md) · [`plan/ai-vision-service/README.md`](../plan/ai-vision-service/README.md). · 01/09/2026 — `/hey-linm` + `/set-up-ignore-cursorrules` `!docs/img/` · `/data-gov-integration` cluster sổ TS + enqueue `so-ts-type-grid` + 32 mã — [`so-ts-type-grid.md`](features/so-ts-type-grid.md). · 31/08/2026 — `/data-gov-integration` cọc H: dump đủ `h_*` · import `quantity=1` + FE đảo loại cọc/vật liệu · form tách Cọc tiêu / Cọc H — [`import-gov-asset-fields.md`](features/import-gov-asset-fields.md). · 31/08/2026 — `/data-gov-integration` + `/hey-linm` Apply: map 3 tầng tuyến + đủ cột dump mọi loại (tuyến/`tbl_rmd` · cọc/`tbl_guide_post` · biển · cột km) — [`import-gov-asset-fields.md`](features/import-gov-asset-fields.md) · GAP-GOV-ROUTE-3LVL / GAP-PAV-SPEC-01 / GAP-DELIM-SPEC-01 / GAP-SIGN-SPEC-01. · 30/08/2026 — `org-route-scope` doc 6 cấp Cục→Khu→VP→Đơn vị→tuyến→đoạn · GAP-ORS-CASCADE-01. · 30/08/2026 — `org-route-scope` edit: `vpOrgCode` + cascade · Schema_OrgRouteScopeVpOrgCode. · 30/08/2026 — `reports-filter-bar` `task_a5f134b0` `pending_confirm` (edit `/bao-cao` filter · hold đến `org-route-scope` done + user confirm) · hủy `task_aede4d75`. · 29/08/2026 — enqueue `kcht-cong-trinh` `task_399151e1` edit_page PH2–PH4 · extract wave + SRC-KCT-GN03. · 28/08/2026 — `incident` (`/su-co`) upsert Pipeline `data_analy` / `pending` + task **T-PILOT-01** (e2e + HDSD + guide). · 27/08/2026 — upsert `kcht-cong-trinh` (công văn KQLĐB IV · 5 phân hệ CT KCHT · ngoài PL01 900tr) · `/hey-linm` + plan.

## Chính sách (chốt user 2026-08-26)

| | |
|--|--|
| **Implement** | Làm **đủ phase** (P1 + P2 + P3 theo define) trong repo / demo / pipeline. |
| **Release khách** | Cắt **từng phần** theo HĐ (đợt PL01 P1 trong 900 · PL04 sau CR). |
| **Không conflict** | Demo hoặc STATUS có P2/P3 **không** = lệch HĐ. Đó là implement sớm; khách chưa nhận slice đó. |
| **Còn việc** | Chỉ pipeline **mở** (pending / in_progress / blocked / await_confirm / draft) hoặc **thiếu artifact** (không STATUS / không demo khi pack cần demo). |

**03c alias (không conflict):** HĐ slug `camera-gtvt` = Data/demo `camera-connect`. ITS (`its-traffic-detect` · `its-anpr-overload`) = implement P2, release PL04.

---

## Legend

| Cột | Ý nghĩa |
|-----|---------|
| **Release** | Slice khách hiện tại: `P1-900` · `P1.5` · `P2-CR` · `P3-CR` · `support` (không mã PL) |
| **Implement** | Phase đang build trong repo |
| **Pipeline** | `STATUS.md` `phase` / `status` |
| **Demo** | `catalog` = `demoCatalog.ts` · `hub` = HTML ngoài catalog · `none` · `proto` = specs prototype |
| **Next** | Việc pipeline còn (không phải “cấm P2”) |

Đường dẫn tương đối từ file này (`docs/context/`).

---

## Index

| Slug | Tên | PL | Release | Pipeline | Demo | Context | STATUS |
|------|-----|----|---------|----------|------|---------|--------|
| `master` | Hub Master | — | support | `done` / `done` | none | [ctx](features/master.md) | [ST](../../specs/master/STATUS.md) |
| `mobile-cleanup-mock` | Clean-up mock + seed CRUD | — | support | `dev` / `pending` | none | [ctx](features/mobile-cleanup-mock.md) | [ST](../../specs/mobile-cleanup-mock/STATUS.md) |
| `org-unit` | Cơ cấu TC DRVN | — | support | done | none | [ctx](features/org-unit.md) | [ST](../../specs/org-unit/STATUS.md) |
| `road-route` | Tuyến đường | — | support | done | none | [ctx](features/road-route.md) | [ST](../../specs/road-route/STATUS.md) |
| `asset-type` | Loại TS KCHT | — | support | done | none | [ctx](features/asset-type.md) | [ST](../../specs/asset-type/STATUS.md) |
| `partner-unit` | Sở / BOT / Cty | — | support | done | none | [ctx](features/partner-unit.md) | [ST](../../specs/partner-unit/STATUS.md) |
| `job-title` | Danh mục chức vụ `/mas/chuc-vu` | — | support | `qa` / `await_confirm` | none | [ctx](features/job-title.md) | [ST](../../specs/job-title/STATUS.md) |
| `org-route-scope` | Zone km Khu↔tuyến/đoạn | — | support | `done` / `done` | none | [ctx](features/org-route-scope.md) | [ST](../../specs/org-route-scope/STATUS.md) |
| `asset` | QL tài sản ĐB | 01 | P1-900 | `done` / `done` | catalog | [ctx](features/asset.md) | [ST](../../specs/asset/STATUS.md) |
| `asset-kcht-32` | 36 loại TS | 01 | P1-900 | `qa` / `await_confirm` | proto mobile-p1 | [ctx](features/asset-kcht-32.md) | [ST](../../specs/asset-kcht-32/STATUS.md) |
| `csdl-so-sach` | Hub CSDL · Kind G · `/so-ts/csdl-so-sach` · **≠** hang-muc | 01 | P1-900 | `done` / `done` (shell) | catalog | [ctx](features/csdl-so-sach.md) | [ST](../../specs/csdl-so-sach/STATUS.md) |
| `csdl-cuc-2026` | Epic typed 16 biểu + 10 sổ (Cục 08/2026) | 01 | P1-900 | `done` / `done` | none | [ctx](features/csdl-cuc-2026.md) | — |
| `csdl-bieu-01` | Biểu 1 mặt đường (38 cột) | 01 | P1-900 | `done` / `done` | none | [ctx](features/csdl-bieu-01.md) | — |
| `csdl-bieu-02` | Biểu 2 cầu | 01 | P1-900 | `done` / `done` | none | [ctx](features/csdl-bieu-02.md) | — |
| `csdl-bieu-03` | Biểu 3 hầm ĐB | 01 | P1-900 | `done` / `done` | none | [ctx](features/csdl-bieu-03.md) | — |
| `csdl-bieu-04` | Biểu 4 cống | 01 | P1-900 | `done` / `done` | none | [ctx](features/csdl-bieu-04.md) | — |
| `csdl-bieu-05` | Biểu 5 rãnh | 01 | P1-900 | `done` / `done` | none | [ctx](features/csdl-bieu-05.md) | — |
| `csdl-bieu-06` | Biểu 6 hầm chui + hộp KT | 01 | P1-900 | `sa` / `pending` | none | [ctx](features/csdl-bieu-06.md) | [ST](../../specs/csdl-bieu-06/STATUS.md) |
| `csdl-bieu-07` | Biểu 7 lề/taluy/rào (live #10) | 01 | P1-900 | `done` / `done` | none | [ctx](features/csdl-bieu-07.md) | — |
| `csdl-bieu-08` | Biểu 8 ATGT (live #7) | 01 | P1-900 | `done` / `done` | none | [ctx](features/csdl-bieu-08.md) | [ST](../../specs/csdl-bieu-08/STATUS.md) |
| `csdl-bieu-09` | Biểu 9 mốc LG/GPMB | 01 | P1-900 | `done` / `done` | none | [ctx](features/csdl-bieu-09.md) | — |
| `csdl-bieu-10` | Biểu 10 kè/tường chắn | 01 | P1-900 | `done` / `done` | none | [ctx](features/csdl-bieu-10.md) | — |
| `csdl-bieu-11` | Biểu 11 chiếu sáng | 01 | P1-900 | `done` / `done` | none | [ctx](features/csdl-bieu-11.md) | — |
| `csdl-bieu-12` | Biểu 12 cây xanh | 01 | P1-900 | `done` / `done` | none | [ctx](features/csdl-bieu-12.md) | — |
| `csdl-bieu-13` | Biểu 13 tường chống ồn **NEW** | 01 | P1-900 | `done` / `done` | none | [ctx](features/csdl-bieu-13.md) | — |
| `csdl-bieu-14` | Biểu 14 ITS **NEW** | 01 | P1-900 | `done` / `done` | none | [ctx](features/csdl-bieu-14.md) | — |
| `csdl-bieu-15` | Biểu 15 TMC/trạm/hạt **NEW** | 01 | P1-900 | `done` / `done` | none | [ctx](features/csdl-bieu-15.md) | — |
| `csdl-bieu-16` | Biểu 16 nút giao **NEW** | 01 | P1-900 | `done` / `done` | none | [ctx](features/csdl-bieu-16.md) | — |
| `csdl-so-01` | Sổ 1 tuần kiểm (live #8) | 01 | P1-900 | `done` / `done` | none | [ctx](features/csdl-so-01.md) | — |
| `csdl-so-02` | Sổ 2 tuần đường (live #1) | 01 | P1-900 | `done` / `done` | none | [ctx](features/csdl-so-02.md) | [CR](../../specs/_cr/nktd-pdf-20260917/task-csdl-so-02.md) |
| `csdl-so-03` | Sổ 3 trực BĐGT+chốt+SC | 01 | P1-900 | `done` / `done` | none | [ctx](features/csdl-so-03.md) | — |
| `csdl-so-04` | Sổ 4 đếm xe | 01 | P1-900 | `done` / `done` | none | [ctx](features/csdl-so-04.md) | — |
| `csdl-so-05` | Sổ 5 TNGT + điểm đen **NEW** | 01 | P1-900 | `done` / `done` | none | [ctx](features/csdl-so-05.md) | — |
| `csdl-so-06` | Sổ 6 QL cầu / phiếu KT | 01 | P1-900 | `done` / `done` | none | [ctx](features/csdl-so-06.md) | — |
| `csdl-so-07` | Sổ 7 HL + GPTC + Dự án | 01 | P1-900 | `done` / `done` | none | [ctx](features/csdl-so-07.md) | — |
| `csdl-so-08` | Sổ 8 kết quả BDTX | 01 | P1-900 | `done` / `done` | none | [ctx](features/csdl-so-08.md) | — |
| `csdl-so-09` | Sổ 9 ITS/ETC vận hành **NEW** | 01 | P1-900 | `done` / `done` | none | [ctx](features/csdl-so-09.md) | — |
| `csdl-so-10` | Sổ 10 bình đồ duỗi thẳng **NEW** | 01 | P1-900 | `done` / `done` | none | [ctx](features/csdl-so-10.md) | — |
| `csdl-export-print` | Epic in/xuất PDF+Excel đúng mẫu (16+10 · rpt-* · KCHT GN) | 01 / 17 | P1-900 · P2-CR · CR-Khu-IV | `data_analy` / `draft` | none | [ctx](features/csdl-export-print.md) | — |
| `pavement-section` | Biểu 1 mặt đường | 01 | P1-900 | done | catalog | [ctx](features/pavement-section.md) | [ST](../../specs/pavement-section/STATUS.md) |
| `import-gov-ssot` | Import dump moc → gov-vn | — | support | context / open GAP | none | [ctx](features/import-gov-ssot.md) · [fields](features/import-gov-asset-fields.md) | — |
| `traffic-sign-type` | Loại biển báo `/mas/loai-bien-bao` | — | support · ADMIN menu | `done` / `done` | catalog | [ctx](features/traffic-sign-type.md) | [ST](../../specs/traffic-sign-type/STATUS.md) |
| `asset-kcht-dashboard` | Hub 40 ô KCHT | 01 | P1-900 | qa paused | none | [ctx](features/asset-kcht-dashboard.md) | [ST](../../specs/asset-kcht-dashboard/STATUS.md) |
| `so-ts-type-grid` | Sổ TS grid/form theo loại | 01 | P1-900 | `qa` / `await_confirm` | none | [ctx](features/so-ts-type-grid.md) | [ST](../../specs/so-ts-type-grid/STATUS.md) |
| `asset-hub` | Hub TS mobile | 01 | P1-900 | done | none | [ctx](features/asset-hub.md) | [ST](../../specs/asset-hub/STATUS.md) |
| `gis` | GIS 2D (+ Twin P2) | 02 / 02-P2 | P1-900 · Twin P2-CR | `data_analy` / `draft` | catalog | [ctx](features/gis.md) | [ST](../../specs/gis/STATUS.md) |
| `gis-draw-live` | Bản đồ tài sản | 02 | P1-900 | `qa` / `await_confirm` | catalog | [ctx](features/gis-draw-live.md) | [ST](../../specs/gis-draw-live/STATUS.md) |
| `gis-patrol-map` | Bản đồ Tuần đường | 02 / 04 | P1-900 | `done` / `done` | proto | [ctx](features/gis-patrol-map.md) | [ST](../../specs/gis-patrol-map/STATUS.md) |
| `gis-camera-map` | Bản đồ camera | 02 / 03c | P1-900 | `dev` / `in_progress` | hub | [ctx](features/gis-camera-map.md) | [ST](../../specs/gis-camera-map/STATUS.md) |
| `gis-draw-google` | Vẽ Google proxy | 02 | P1-900 | done (JWT leftover) | catalog | [ctx](features/gis-draw-google.md) | [ST](../../specs/gis-draw-google/STATUS.md) |
| `gis-3d-twin` | Twin 3D Cesium | 02-P2 | P2-CR | no STATUS | catalog | — | — |
| `map-service` | gis.vn + clip OSM | — | support | `done` / `done` | none | [ctx](features/map-service.md) | [ST](../../specs/map-service/STATUS.md) |
| `gis-osm-clip` | OSM clip prod · Carto muted | — | support | no STATUS · GAP-MOB-IOS-MAP-HOST-01 closed | none | [ctx](features/gis-osm-clip.md) | — |
| `legal-tech-corridor` | Luật VN + Store | — | support | no STATUS | none | [ctx](features/legal-tech-corridor.md) | — |
| `ios-store-submit` | iOS ASC Invalid Binary / 90717 | — | support | context / live | none | [ctx](features/ios-store-submit.md) | — |
| `android-store-submit` | Android CH Play AAB / listing | — | support | context / lab (chưa AAB Store) | none | [ctx](features/android-store-submit.md) | — |
| `directions` | Chỉ đường guest | — | support | no STATUS | none | [ctx](features/directions.md) | — |
| `ai-vision-service` | Host `Linm.RMMS.Vision` | 03 / 03-P2 | support | `qa` / `await_confirm` | none | [ctx](features/ai-vision-service.md) · [plan](../plan/ai-vision-service/README.md) | [ST](../../specs/ai-vision-service/STATUS.md) |
| `ai-vision` | AI kiểm định MD | 03 / 03-P2 | P1-900 online · P2-CR local | `done` / `await_confirm` | catalog | [ctx](features/ai-vision.md) · [host](features/ai-vision-service.md) | [ST](../../specs/ai-vision/STATUS.md) |
| `ai-asset-detect` | AI phát hiện TS | 03b / 03b-P2 | P1-900 · edge P2-CR | `qa` / `await_confirm` | catalog | [ctx](features/ai-asset-detect.md) | [ST](../../specs/ai-asset-detect/STATUS.md) |
| `its-traffic-detect` | ITS biển/cọc | 03c-P2 | P2-CR | done | catalog | [ctx](features/its-traffic-detect.md) | [ST](../../specs/its-traffic-detect/STATUS.md) |
| `its-anpr-overload` | ITS ANPR/WIM | 03c-P2 | P2-CR | done | catalog | [ctx](features/its-anpr-overload.md) | [ST](../../specs/its-anpr-overload/STATUS.md) |
| `camera-connect` | Camera GTVT | **03c** | P1-900 gói C | `qa` / `await_confirm` | hub HTML | [ctx](features/camera-connect.md) · [map](features/camera-vehicle-type.md) | [ST](../../specs/camera-connect/STATUS.md) |
| `camera-vehicle-type` | Map loại xe Hikvision | **03c** | support | context / none | none | [ctx](features/camera-vehicle-type.md) | — |
| `its-anco-signal` | Nút đèn Anco + camera + đếm xe | — | support | context / none | none | [ctx](features/its-anco-signal.md) | — |
| `patrol` | Tuần đường web | 04 | P1-900 | `qa` / `await_confirm` | catalog | [ctx](features/patrol.md) | [ST](../../specs/patrol/STATUS.md) |
| `tuan-duong-web` | TT 04 web demo | 04 | P1-900 | (gắn patrol) | catalog | [24](24-TUAN-DUONG-DUONG-BO.md) | [patrol](../../specs/patrol/STATUS.md) |
| `tuan-duong-mobile` | TT 04 mobile demo | 04 | P1-900 | (gắn mobile-p1) | catalog | [24](24-TUAN-DUONG-DUONG-BO.md) | [mobile-p1](../../specs/mobile-p1/STATUS.md) |
| `platform-task` | Platform QLCV | — | support P1 | `done` / `done` | catalog | [ctx](features/platform-task.md) | [ST](../../specs/platform-task/STATUS.md) |
| `platform-message` | Chat parcel | — | support P1 | `dev` / `await_confirm` | none | [ctx](features/platform-message.md) | [ST](../../specs/platform-message/STATUS.md) |
| `rmms-task-integrate` | Task × tuần đường | — | P2 later | `data_analy` / `draft` | none | [plan](../plan/platform-task/RMMS-TUAN-DUONG.md) | [ST](../../specs/rmms-task-integrate/STATUS.md) |
| `attendance` | Chấm công GPS | 05 | P1-900 | done | catalog | [ctx](features/attendance.md) | [ST](../../specs/attendance/STATUS.md) |
| `incident` | Quản lý sự cố | 06 | P1-900 | `done` / `done` | catalog | [ctx](features/incident.md) | [ST](../../specs/incident/STATUS.md) |
| `maintenance` | Bảo trì khung + WO P2 | 07 / 07-P2 | P1-900 khung · P2-CR full | done | catalog | [ctx](features/maintenance.md) | [ST](../../specs/maintenance/STATUS.md) |
| `predict` | AI dự báo | 08 / 08-P2 | P1-900 · P2-CR | done | catalog | [ctx](features/predict.md) | [ST](../../specs/predict/STATUS.md) |
| `ops` | Điều hành | 09 / 09-P2 | P1-900 board · P2-CR full | `qa` / `idle_review` | catalog | [ctx](features/ops.md) | [ST](../../specs/ops/STATUS.md) |
| `estimate` | AI ước lượng | 10 / 10-P2 | P1-900 · P2-CR | `review` / `idle_review` | catalog | [ctx](features/estimate.md) | [ST](../../specs/estimate/STATUS.md) |
| `contract` | HĐ & ngân sách | 11 / 11-P2 | P1-900 thin · P2-CR | done | catalog | [ctx](features/contract.md) | [ST](../../specs/contract/STATUS.md) |
| `kcht-cong-trinh` | Công trình KCHT (Khu IV) | — | CR-Khu-IV | `qa` / `await_confirm` | none | [ctx](features/kcht-cong-trinh.md) | [ST](../../specs/kcht-cong-trinh/STATUS.md) |
| `inventory` | Vật tư | 12 | P3-CR | Dev pending | catalog | [ctx](features/inventory.md) | [ST](../../specs/inventory/STATUS.md) |
| `drone` | Drone RC | 13-P2 | P2-CR | done | catalog | [ctx](features/drone.md) | [ST](../../specs/drone/STATUS.md) |
| `iot` | Danh sách IoT `/iot` | 01-P2 | P2 extra ADMIN | `done` / `done` | none | [ctx](features/iot.md) | [ST](../../specs/iot/STATUS.md) |
| `toc` | TOC / VMS | 14 | P3-CR | no STATUS | catalog | [ctx](features/toc.md) | — |
| `citizen` | Cổng dân | 15 | P3-CR | done | catalog | [ctx](features/citizen.md) | [ST](../../specs/citizen/STATUS.md) |
| `copilot` | AI Copilot | 16 / 16-P2 | P1-900 · RAG P2-CR | done | catalog | [ctx](features/copilot.md) | [ST](../../specs/copilot/STATUS.md) |
| `dashboard` | Dashboard KPI | 17 / 17-P2 | P1-900 · P2-CR | `done` / `done` | catalog | [ctx](features/dashboard.md) | [ST](../../specs/dashboard/STATUS.md) |
| `reports` | Hub báo cáo | 17 | P1-900 | done | catalog | [ctx](features/reports.md) | [ST](../../specs/reports/STATUS.md) |
| `reports-filter-bar` | Edit filter `/bao-cao` | 17 | P1-900 | `done` / `done` | catalog | [ctx](features/reports-filter-bar.md) | [ST](../../specs/reports-filter-bar/STATUS.md) |
| `integration` | Open API | 18 / 18-P2 | P1-900 khung · P2-CR | done | catalog | [ctx](features/integration.md) | [ST](../../specs/integration/STATUS.md) |
| `feedback` | Góp ý nội bộ | — | support P1 | `done` / `done` | catalog | [ctx](features/feedback.md) | [ST](../../specs/feedback/STATUS.md) |
| `users` | QL user / TC | — | support P1 | `done` / `done` | catalog | [ctx](features/users.md) | [ST](../../specs/users/STATUS.md) |
| `login` | Login + HĐ TK | — | P1 / P1.5 | `data_analy` / `paused` | none | [ctx](features/login.md) | [ST](../../specs/login/STATUS.md) |
| `login-forgot` | Quên MK | — | P1-900 | done | none | [ctx](features/login-forgot.md) | [ST](../../specs/login-forgot/STATUS.md) |
| `home` | Home mobile | B | P1-900 | done | none | [ctx](features/home.md) | [ST](../../specs/home/STATUS.md) |
| `me` | Profile mobile | B | P1-900 | done | none | [ctx](features/me.md) | [ST](../../specs/me/STATUS.md) |
| `supervise` | Giám sát mobile | B | P1-900 | done | none | [ctx](features/supervise.md) | [ST](../../specs/supervise/STATUS.md) |
| `mobile-p1` | IA mobile P1 | B | P1-900 | design await_confirm | proto | [brief](../../map-feature/mobile-design-brief.md) | [ST](../../specs/mobile-p1/STATUS.md) |
| `patrol-home` | Patrol home | 04 | P1-900 | `qa` / `idle_review` | proto | [ctx](features/patrol-home.md) | [ST](../../specs/patrol-home/STATUS.md) |
| `patrol-history` | Lịch sử tuần | 04 | P1-900 | `qa` / `idle_review` | proto | [ctx](features/patrol-history.md) | [ST](../../specs/patrol-history/STATUS.md) |
| `patrol-offline` | Offline tuần | 04 | P1-900 | `review` / `idle_review` | proto | [ctx](features/patrol-offline.md) | [ST](../../specs/patrol-offline/STATUS.md) |
| `patrol-map` | Bản đồ tuần | 04 | P1-900 | `qa` / `idle_review` | proto | [ctx](features/patrol-map.md) | [ST](../../specs/patrol-map/STATUS.md) |
| `patrol-pin` | GPS pin sheet | 04 | P1-900 | `qa` / `idle_review` | proto | [ctx](features/patrol-pin.md) | [ST](../../specs/patrol-pin/STATUS.md) |
| `patrol-checkin` | Check-in | 05 | P1-900 | `qa` / `idle_review` | none | — | [ST](../../specs/patrol-checkin/STATUS.md) |

| `reports-filter-bar` | Edit /bao-cao filter bar | — | support | `data_analy` / `draft` | none | [ctx](features/reports-filter-bar.md) | [ST](../../specs/reports-filter-bar/STATUS.md) |
| `so-ts-km-post` | Sổ TS — Cột Km | — | support | `done` / `done` | none | [ctx](features/so-ts-km-post.md) | [ST](../../specs/so-ts-km-post/STATUS.md) |
| `so-ts-traffic-sign` | Sổ TS — Biển báo | — | support | `done` / `done` | none | [ctx](features/so-ts-traffic-sign.md) | [ST](../../specs/so-ts-traffic-sign/STATUS.md) |
| `so-ts-delineator` | Sổ TS — Cọc tiêu / cọc H | — | support | `done` / `done` | none | [ctx](features/so-ts-delineator.md) | [ST](../../specs/so-ts-delineator/STATUS.md) |
| `so-ts-convex-mirror` | Sổ TS — Gương cầu / long môn | — | support | `done` / `done` | none | [ctx](features/so-ts-convex-mirror.md) | [ST](../../specs/so-ts-convex-mirror/STATUS.md) |
| `so-ts-guardrail` | Sổ TS — Hộ lan / tôn sóng | — | support | `done` / `done` | none | [ctx](features/so-ts-guardrail.md) | [ST](../../specs/so-ts-guardrail/STATUS.md) |
| `so-ts-median` | Sổ TS — Dải phân cách | — | support | `done` / `done` | none | [ctx](features/so-ts-median.md) | [ST](../../specs/so-ts-median/STATUS.md) |
| `so-ts-retaining` | Sổ TS — Kè / tường chắn | — | support | `done` / `done` | none | [ctx](features/so-ts-retaining.md) | [ST](../../specs/so-ts-retaining/STATUS.md) |
| `so-ts-slope-protect` | Sổ TS — Bảo vệ mái dốc | — | support | `done` / `done` | none | [ctx](features/so-ts-slope-protect.md) | [ST](../../specs/so-ts-slope-protect/STATUS.md) |
| `so-ts-noise-barrier` | Sổ TS — Rào chắn ồn | — | support | `done` / `done` | none | [ctx](features/so-ts-noise-barrier.md) | [ST](../../specs/so-ts-noise-barrier/STATUS.md) |
| `so-ts-ditch` | Sổ TS — Cống / rãnh dọc | — | support | `done` / `done` | none | [ctx](features/so-ts-ditch.md) | [ST](../../specs/so-ts-ditch/STATUS.md) |
| `so-ts-underpass` | Sổ TS — Hầm chui dân sinh | — | support | `dev` / `await_confirm` | none | [ctx](features/so-ts-underpass.md) | [ST](../../specs/so-ts-underpass/STATUS.md) |
| `so-ts-culvert-x` | Sổ TS — Cống thoát nước ngang | — | support | `done` / `done` | none | [ctx](features/so-ts-culvert-x.md) | [ST](../../specs/so-ts-culvert-x/STATUS.md) |
| `so-ts-pontoon` | Sổ TS — Cầu phao | — | support | `done` / `done` | none | [ctx](features/so-ts-pontoon.md) | [ST](../../specs/so-ts-pontoon/STATUS.md) |
| `so-ts-spillway` | Sổ TS — Đường tràn | — | support | `done` / `done` | none | [ctx](features/so-ts-spillway.md) | [ST](../../specs/so-ts-spillway/STATUS.md) |
| `so-ts-rail-cross` | Sổ TS — Giao cắt đường sắt | — | support | `done` / `done` | none | [ctx](features/so-ts-rail-cross.md) | [ST](../../specs/so-ts-rail-cross/STATUS.md) |
| `so-ts-interchange` | Sổ TS — Nút giao | — | support | `done` / `done` | none | [ctx](features/so-ts-interchange.md) | [ST](../../specs/so-ts-interchange/STATUS.md) |
| `so-ts-ferry` | Sổ TS — Bến phà | — | support | `done` / `done` | none | [ctx](features/so-ts-ferry.md) | [ST](../../specs/so-ts-ferry/STATUS.md) |
| `so-ts-station-house` | Sổ TS — Nhà hạt QLĐB | — | support | `done` / `done` | none | [ctx](features/so-ts-station-house.md) | [ST](../../specs/so-ts-station-house/STATUS.md) |
| `so-ts-rescue-station` | Sổ TS — Công trình cứu hộ | — | support | `done` / `done` | none | [ctx](features/so-ts-rescue-station.md) | [ST](../../specs/so-ts-rescue-station/STATUS.md) |
| `so-ts-bus-station` | Sổ TS — Bến xe | — | support | `done` / `done` | none | [ctx](features/so-ts-bus-station.md) | [ST](../../specs/so-ts-bus-station/STATUS.md) |
| `so-ts-rest-area` | Sổ TS — Trạm dừng nghỉ | — | support | `done` / `done` | none | [ctx](features/so-ts-rest-area.md) | [ST](../../specs/so-ts-rest-area/STATUS.md) |
| `so-ts-parking` | Sổ TS — Bãi đỗ xe | — | support | `done` / `done` | none | [ctx](features/so-ts-parking.md) | [ST](../../specs/so-ts-parking/STATUS.md) |
| `so-ts-toll` | Sổ TS — Trạm thu phí | — | support | `done` / `done` | none | [ctx](features/so-ts-toll.md) | [ST](../../specs/so-ts-toll/STATUS.md) |
| `so-ts-ems-post` | Sổ TS — Trạm trực cấp cứu | — | support | `done` / `done` | none | [ctx](features/so-ts-ems-post.md) | [ST](../../specs/so-ts-ems-post/STATUS.md) |
| `so-ts-weigh-station` | Sổ TS — Trạm kiểm soát tải | — | support | `done` / `done` | none | [ctx](features/so-ts-weigh-station.md) | [ST](../../specs/so-ts-weigh-station/STATUS.md) |
| `so-ts-count-station` | Sổ TS — Trạm đếm | — | support | `done` / `done` | none | [ctx](features/so-ts-count-station.md) | [ST](../../specs/so-ts-count-station/STATUS.md) |
| `so-ts-bus-stop` | Sổ TS — Điểm dừng xe buýt | — | support | `done` / `done` | none | [ctx](features/so-ts-bus-stop.md) | [ST](../../specs/so-ts-bus-stop/STATUS.md) |
| `so-ts-land-row` | Sổ TS — Đất thuộc TS HT | — | support | `done` / `done` | none | [ctx](features/so-ts-land-row.md) | [ST](../../specs/so-ts-land-row/STATUS.md) |
| `so-ts-row-util` | Sổ TS — CT HTKT trong HL | — | support | `done` / `done` | none | [ctx](features/so-ts-row-util.md) | [ST](../../specs/so-ts-row-util/STATUS.md) |
| `so-ts-lighting` | Sổ TS — Chiếu sáng đường | — | support | `done` / `done` | none | [ctx](features/so-ts-lighting.md) | [ST](../../specs/so-ts-lighting/STATUS.md) |
| `so-ts-its-camera` | Sổ TS — Hệ thống ITS | — | support | `done` / `done` | none | [ctx](features/so-ts-its-camera.md) | [ST](../../specs/so-ts-its-camera/STATUS.md) |
| `so-ts-rescue-vehicle` | Sổ TS — Xe cứu hộ | — | support | `sa` / `pending` | none | [ctx](features/so-ts-rescue-vehicle.md) | [ST](../../specs/so-ts-rescue-vehicle/STATUS.md) |
| `field-reflect` | [Mobile] [Tuần đường] -> Ghi nhận hư hỏng | — | support | `qa` / `idle_review` | none | [ctx](features/field-reflect.md) | [ST](../../specs/field-reflect/STATUS.md) |
| `khu-1-pilot` | Pilot dữ liệu Khu I | — | support | `dev` / `pending` | none | [ctx](features/khu-1-pilot.md) | [ST](../../specs/khu-1-pilot/STATUS.md) |
| `nghiem-thu` | Công tác nghiệm thu — 10 công việc BDTX + chỉ số | — | support | `review` / `idle_review` | proto | [ctx](features/nghiem-thu.md) | [ST](../../specs/nghiem-thu/STATUS.md) |
| `nghiem-thu-mau` | Catalog mẫu NT TT 41 + criteria | — | support | `data_analy` / `pending_confirm` | none | [ctx](features/nghiem-thu-mau.md) | — |
| `nghiem-thu-create` | [Mobile] [Công tác nghiệm thu] -> Tạo nghiệm thu | — | support | `review` / `idle_review` | proto | [ctx](features/nghiem-thu-create.md) | [ST](../../specs/nghiem-thu-create/STATUS.md) |
| `nghiem-thu-detail` | [Mobile] [Công tác nghiệm thu] -> Chi tiết nghiệm thu | — | support | `dev` / `idle_review` | none | [ctx](features/nghiem-thu-detail.md) | [ST](../../specs/nghiem-thu-detail/STATUS.md) |
| `mnt-list` | [Mobile] Công việc | — | support | `qa` / `idle_review` | none | [ctx](features/mnt-list.md) | [ST](../../specs/mnt-list/STATUS.md) |
| `cam-view` | [Mobile] Camera xem | — | support | `qa` / `idle_review` | data_analy PASS · handoff PO | [ctx](features/cam-view.md) | [ST](../../specs/cam-view/STATUS.md) |
| `cam-patrol` | [Mobile] [Tuần đường] -> Thu thập camera | — | support | `qa` / `idle_review` | none | [ctx](features/cam-patrol.md) | [ST](../../specs/cam-patrol/STATUS.md) |
| `photo-geo-capture` | [Mobile] [Tuần đường] -> Chụp ảnh kèm tọa độ | — | support | `review` / `idle_review` | none | [ctx](features/photo-geo-capture.md) | [ST](../../specs/photo-geo-capture/STATUS.md) |
| `mnt-chat` | Trao đổi công việc | — | support | `qa` / `idle_review` | none | [ctx](features/mnt-chat.md) | [ST](../../specs/mnt-chat/STATUS.md) |
| `mnt-progress` | Cập nhật trạng thái | — | support | `qa` / `idle_review` | none | [ctx](features/mnt-progress.md) | [ST](../../specs/mnt-progress/STATUS.md) |
| `mnt-log` | Nhật ký xử lý | — | support | `qa` / `idle_review` | none | [ctx](features/mnt-log.md) | [ST](../../specs/mnt-log/STATUS.md) |
| `incident-create` | [Mobile] Ghi sự cố | — | support | `qa` / `idle_review` | none | [ctx](features/incident-create.md) | [ST](../../specs/incident-create/STATUS.md) |
| `incident-list` | [Mobile] Vấn đề | — | support | `qa` / `idle_review` | none | [ctx](features/incident-list.md) | [ST](../../specs/incident-list/STATUS.md) |
| `incident-chat` | Trao đổi sự cố | — | support | `dev` / `idle_review` | none | [ctx](features/incident-chat.md) | [ST](../../specs/incident-chat/STATUS.md) |
| `vis-capture` | Nhận diện mặt đường | — | support | `review` / `idle_review` | data_analy PASS · dual/pack GAP | [ctx](features/vis-capture.md) | [ST](../../specs/vis-capture/STATUS.md) |
| `incident-detail` | Chi tiết | — | support | `qa` / `idle_review` | none | [ctx](features/incident-detail.md) | [ST](../../specs/incident-detail/STATUS.md) |
| `me-profile` | Hồ sơ | — | support | `qa` / `idle_review` | data_analy PASS · handoff PO | [ctx](features/me-profile.md) | [ST](../../specs/me-profile/STATUS.md) |
| `me-settings` | Cài đặt | — | support | `qa` / `idle_review` | data_analy PASS · handoff PO | [ctx](features/me-settings.md) | [ST](../../specs/me-settings/STATUS.md) |
| `asset-detail` | Chi tiết tài sản | — | support | `dev` / `idle_review` | data_analy **PASS** | [ctx](features/asset-detail.md) | [ST](../../specs/asset-detail/STATUS.md) |
| `asset-collect` | Thủ công | — | support | `review` / `idle_review` | data_analy **PASS** · handoff PO | [ctx](features/asset-collect.md) | [ST](../../specs/asset-collect/STATUS.md) |
| `asset-adjust` | Cập nhật / bớt | — | support | `dev` / `idle_review` | none | [ctx](features/asset-adjust.md) | [ST](../../specs/asset-adjust/STATUS.md) |
| `gis-map` | Xem trên bản đồ | — | support | `qa` / `idle_review` | data_analy **PASS** · host `GisClipMapView` | [ctx](features/gis-map.md) | [ST](../../specs/gis-map/STATUS.md) |
| `asset-ai` | Camera AI | — | support | `review` / `idle_review` | none | [ctx](features/asset-ai.md) | [ST](../../specs/asset-ai/STATUS.md) |
| `supervise-detail` | Chi tiết check-in | — | support | `qa` / `idle_review` | none | [ctx](features/supervise-detail.md) | [ST](../../specs/supervise-detail/STATUS.md) |
| `attendance-report` | Báo cáo công | — | support | `dev` / `idle_review` | none | [ctx](features/attendance-report.md) | [ST](../../specs/attendance-report/STATUS.md) |
| `attendance-day` | Chi tiết ngày công | — | support | `review` / `idle_review` | data_analy **PASS** | [ctx](features/attendance-day.md) | [ST](../../specs/attendance-day/STATUS.md) |
| `attendance-log` | Chi tiết chấm công | — | support | `done` / `done` | `/edit-mobile-feature` 2026-09-16 | [ctx](features/attendance-log.md) | [ST](../../specs/attendance-log/STATUS.md) |
| `patrol-history-detail` | Chi tiết ca | — | support | `done` / `done` | none | [ctx](features/patrol-history-detail.md) | [ST](../../specs/patrol-history-detail/STATUS.md) |
| `mobile-bff-map` | [Mobile] Mobile.Bff MapService | — | support | `done` / `done` | none | [ctx](features/mobile-bff-map.md) | [ST](../../specs/mobile-bff-map/STATUS.md) |
| `mobile-bff-file` | [Mobile] Mobile.Bff FileService | — | support | `done` / `done` | none | [ctx](features/mobile-bff-file.md) | [ST](../../specs/mobile-bff-file/STATUS.md) |
| `rpt-nhat-ky-tuan-duong` | rpt-nhat-ky-tuan-duong | — | support | `dev` / `in_progress` | none | [ctx](features/rpt-nhat-ky-tuan-duong.md) | [ST](../../specs/rpt-nhat-ky-tuan-duong/STATUS.md) |
| `mobile-bff-task` | Mobile.Bff TaskService | — | support | `data_analy` / `draft` | none | [ctx](features/mobile-bff-task.md) | [ST](../../specs/mobile-bff-task/STATUS.md) |
| `home-faq` | home-faq | — | support | `data_analy` / `idle_review` | none | [ctx](features/home-faq.md) | [ST](../../specs/home-faq/STATUS.md) |
| `home-privacy` | home-privacy | — | support | `data_analy` / `idle_review` | none | [ctx](features/home-privacy.md) | [ST](../../specs/home-privacy/STATUS.md) |
| `login-logout` | login-logout | — | support | `data_analy` / `idle_review` | none | [ctx](features/login-logout.md) | [ST](../../specs/login-logout/STATUS.md) |
| `det-hitl` | det-hitl | — | support | `data_analy` / `idle_review` | none | [ctx](features/det-hitl.md) | [ST](../../specs/det-hitl/STATUS.md) |
| `asset-types` | asset-types | — | support | `data_analy` / `idle_review` | none | [ctx](features/asset-types.md) | [ST](../../specs/asset-types/STATUS.md) |
| `asset-list` | asset-list | — | support | `data_analy` / `idle_review` | none | [ctx](features/asset-list.md) | [ST](../../specs/asset-list/STATUS.md) |
| `attendance-day-detail` | attendance-day-detail | — | support | `data_analy` / `idle_review` | none | [ctx](features/attendance-day-detail.md) | [ST](../../specs/attendance-day-detail/STATUS.md) |
| `mnt-estimate` | mnt-estimate | — | support | `data_analy` / `idle_review` | none | [ctx](features/mnt-estimate.md) | [ST](../../specs/mnt-estimate/STATUS.md) |
| `checkin-detail` | checkin-detail | — | support | `data_analy` / `idle_review` | none | [ctx](features/checkin-detail.md) | [ST](../../specs/checkin-detail/STATUS.md) |
| `patrol-detail` | patrol-detail | — | support | `data_analy` / `idle_review` | none | [ctx](features/patrol-detail.md) | [ST](../../specs/patrol-detail/STATUS.md) |
| `open-session` | open-session | — | support | `data_analy` / `idle_review` | none | [ctx](features/open-session.md) | [ST](../../specs/open-session/STATUS.md) |
| `end-session` | end-session | — | support | `data_analy` / `idle_review` | none | [ctx](features/end-session.md) | [ST](../../specs/end-session/STATUS.md) |
**Báo cáo `rpt-*`:** xem [§ Reports](#17--dashboard--báo-cáo). Pipeline STATUS **done** hết (release: P1 / P1.5 / P2 / P3 theo từng slug).

**Draft mobile (CTX/analy):** `incident-list` — [STATUS](../../specs/). `cam-view` data_analy **PASS** → PO pending. `incident-create` · `field-reflect` · `cam-patrol` · `mnt-list` đã có CTX + data_analy (hoặc done).

---

## Pipeline còn mở (implement, không phải conflict)

| Ưu tiên | Slug | Việc |
|---------|------|------|
| Now | `platform-message` | SA → TL → Dev → QA → Review (`yarn run-implement`) |
| Next | `platform-task` | data_analy sau message sticky |
| Later | `rmms-task-integrate` | blocked đến message + task |
| P1-900 | `ai-vision` | Dev · analy paused · QA/Review |
| P1-900 | `patrol` | Dev leftover `crud_formtype` |
| P1-900 | `incident` | **T-PILOT-01** e2e+HDSD+guide · Dev → QA → Review |
| P1-900 | `users` | Dev (Review đã done) |
| P1-900 | `asset-kcht-dashboard` | `/so-ts/hang-muc` · **≠** `csdl-so-sach` · QA paused → Review |
| P1-900 | `asset-kcht-32` | design_confirm |
| P1-900 | `dashboard` | D3 KPI BDTX SA `task_78265452` · **≠** D4/D5 GN |
| P1-900 | `camera-connect` | đưa vào `demoCatalog.ts` (HTML đã có) |
| Gói B | `mobile-p1` | design_confirm |
| Gói B | `patrol-map` | Dev pending **`task_1f6d86c4`** · replace MapKit → `GisClipMapView` (`/implement-gis-map` `ios_replace_all_maps`) |
| Gói B | `photo-geo-capture` | done · live HUD + fullscreen · `task_b6a752b4` `/edit-mobile-feature` |
| Gói B | `patrol-pin` | Review findings |
| Gói B | `asset` mobile | TL · iOS/Android/BFF **BLOCKED** |
| P3-CR | `inventory` | Dev · be/ui repo confirm |
| CR-Khu-IV | `kcht-cong-trinh` | Wave 1 done · **edit_page PH2–PH4** queue data_analy · PH5 park |
| Now | `org-route-scope` | data_analy — tách zone REG config km–km |
| Now | `traffic-sign-type` | `task_6a62b9b6` data_analy · `/mas/loai-bien-bao` ADMIN |
| Now | `job-title` | `task_6ff91e27` `new_page` · `/mas/chuc-vu` · Excel cuc-01 |
| Now | `users` | `task_8c25b03b` `edit_page` · SearchInput chức vụ cite `job-title` |
| Now | `iot` | `task_2f176635` data_analy · `/iot` scaffold → real · ADMIN |
| Hold | `reports-filter-bar` | edit `/bao-cao` filter · `pending_confirm` sau `org-route-scope` done |
| support | `feedback` · `master` hub · `patrol-checkin` | draft |
| support | `map-service` · `gis-osm-clip` · `directions` · `legal-tech-corridor` · `ios-store-submit` · `android-store-submit` · `toc` | `map-service` Wave 1–4 **web done** · Wave 2–4 **mobile done** (ios+android gis-map clip) · `ios-store-submit` context/live · `android-store-submit` runbook (chưa AAB Store) |

---

## Chi tiết theo feature

### 0 — Master (support · no demo HTML)

Rule: `packKind=master` **không** gen demo — context + Design prototype.

#### `master`

| | |
|--|--|
| Release / implement | support P1 · hub không lock Dev |
| Child | `org-unit` P0 · `road-route` · `asset-type` · `partner-unit` · `traffic-sign-type` · `job-title` (enqueue) |
| MFE | `Linm.Web.RMMS.Master` · std `/mas/co-cau-tc` :9318 |
| Next | Hub draft — child 4 slug **done** |

#### `org-unit` · `road-route` · `asset-type` · `partner-unit`

| | |
|--|--|
| Release | support P1 (cần cho Asset/GIS) |
| Pipeline | **done** |
| Seed | [`seed/org-unit-seed.json`](seed/org-unit-seed.json) · `gov-vn` tuyến · `t6-org-scope` đối tác **91** · [`features/import-gov-ssot.md`](features/import-gov-ssot.md) |
| Ref | [`20-ORG-STRUCTURE-DRVN.md`](20-ORG-STRUCTURE-DRVN.md) · [`24-TUAN-DUONG-DUONG-BO.md`](24-TUAN-DUONG-DUONG-BO.md) (LRS) |

#### `org-route-scope`

| | |
|--|--|
| Release / implement | support P1 · tách zone REG-I…IV config km–km theo tuyến/đoạn |
| Demo | none (`packKind=master`) |
| Pipeline | **done** / **done** |
| Next | Restart API `ImportSets` gồm `t6-org-scope` (102 phân khu) · gán VP đoạn trên `/mas/phan-khu` (GAP-ORS-VP-01 **data**) · **cấm** invent VP · **cấm** dump moc |

#### `traffic-sign-type`

| | |
|--|--|
| Release / implement | support · menu **ADMIN only** (scaffold→real) |
| Live | `/mas/loai-bien-bao` :9318 · Master catalog QCVN |
| Demo | catalog · packKind=master |
| Pipeline | `data_analy` / `pending` (enqueue 2026-09-04) |
| Next | `/agent-data-analy` → full pipeline · **cấm** seed mã bịa |

#### `job-title`

| | |
|--|--|
| Release / implement | support · Master catalog chức vụ |
| Live | `/mas/chuc-vu` :9318 · seed Excel nhân sự cuc-01 |
| Demo | none (`packKind=master`) |
| Pipeline | `data_analy` / `pending` (enqueue 2026-09-18) |
| Next | `/agent-qldb-workflow` full_pipeline · AppUser.`jobTitleCode` · staff `/admin/user` + ProfileTab SearchInput · **cấm** invent package Cục/VP · GAP-JOB-05 seed JSON ≠ DB |

---

### 01 — Tài sản (PL01 P1-900)

#### `asset`

| | |
|--|--|
| Contract | 01 · gói A · Web+Mobile · KPI CRUD KCHT · map pin |
| Implement | P1 list Kind B + mobile list |
| Demo | catalog [`/demo/asset/asset.html`](../../../Linm.RMMS.Demo/src/demo/asset/asset.html) · std http://localhost:5180/demo/asset/asset.html |
| MFE / API | `Linm.Web.RMMS.Asset` · `/so-ts` · `api/v1/so-ts/road-assets` · std :9301 `/asset` |
| Pipeline | Web shipped · **mobile** QA `await_confirm` · iOS/Android list **done** · GAP-QA-STORE-03 |
| Next | Unblock native repo/build · TL task mobile |

#### `pavement-section`

| | |
|--|--|
| Contract | 01 · đoạn mặt đường |
| Demo | [`/demo/asset/pavement-section.html`](../../../Linm.RMMS.Demo/src/demo/asset/pavement-section.html) |
| Pipeline | **done** |
| Next | GAP-PAV-SPEC-01 — đủ cột `tbl_rmd` + 3 tầng tuyến (form mỏng 16 CSV) |
| Ref | [`11-CSDL-SO-SACH-DATABASE-API.md`](11-CSDL-SO-SACH-DATABASE-API.md) Biểu 1 · [`import-gov-asset-fields.md`](features/import-gov-asset-fields.md) §2.1 |

#### `csdl-so-sach`

| | |
|--|--|
| Contract | 01 · sổ sách · KPI NT |
| Live | `/so-ts/csdl-so-sach` :9301 · **không** phải `/so-ts/hang-muc` |
| Demo | [`/demo/asset/csdl-so-sach.html`](../../../Linm.RMMS.Demo/src/demo/asset/csdl-so-sach.html) |
| Pipeline | **done** / **done** (`task_915baff1` Review PASS 2026-08-29) — **shell Kind G only** |
| ≠ hang-muc | `asset-kcht-dashboard` = lưới 40 ô · **hai lớp:** count/Sổ TS ≠ biểu in Cục · LOOKUP chung / ROW riêng |
| Next | Wave 0 KPI **16+10** · typed = child `csdl-bieu-*` / `csdl-so-*` — **cấm** enqueue full pipeline typed trên slug hub |
| Ref | [`csdl-cuc-2026.md`](features/csdl-cuc-2026.md) · [`ANALYSIS-AND-TASKS.md`](../../specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md) |

#### `csdl-cuc-2026`

| | |
|--|--|
| Release / implement | P1-900 · typed 16+10 · **không** fake done |
| Demo | none (hub demo sẵn) |
| Pipeline | `data_analy` / `draft` |
| Next | `/agent-qldb-workflow` từng child · **cấm** gộp Sổ TS (`GAP-CSDL-CUC-11`) · in/xuất → [`csdl-export-print`](features/csdl-export-print.md) |
| Ref | analy `specs/_data-analy/csdl-cuc-2026/` §1.4 hai lớp |

#### `csdl-export-print`

| | |
|--|--|
| Release / implement | P1-900 CSDL in · P2-CR `rpt-*` · CR-Khu-IV PH4–PH5 |
| Demo | none (toolbar trên list/sổ/Kind E live) |
| Pipeline | `data_analy` / `draft` |
| Next | Wave 0 golden+engine · pilot Excel Biểu 1+8 · **cấm** golden 12+8 · Sổ 2 print **sau** CR `nktd-pdf-20260917` |
| Ref | [ctx](features/csdl-export-print.md) · analy Wave 3 `T-XLS-*` · SRC-KCT-GN03 · SRC-NKTD-PDF |

#### `asset-kcht-32`

| | |
|--|--|
| Implement | Catalog 36 loại + form sự cố mobile |
| Demo | proto [`mobile-p1`](../../specs/mobile-p1/ui/prototype/index.html) + `asset-kcht-32.js` |
| Pipeline | design **await_confirm** (revise lưới 36) |
| Peer | `asset` · `asset-type` · `mobile-p1` · `incident` · `import-gov-ssot` |
| Next | Thông số dump 36 loại — [`import-gov-asset-fields.md`](features/import-gov-asset-fields.md) · GAP-SIGN-SPEC-01 · GAP-DELIM-SPEC-01 · GAP-KMPOST-NAME-01 |

#### `import-gov-ssot`

| | |
|--|--|
| Release / implement | support · context GAP mở (rebuild ≠ DB) |
| Demo | none |
| Pipeline | context / open GAP |
| Next | `ReImportSeed`+`ReInitData` **gov-vn** v5 (3 tầng) + fingerprint **t6-org-scope** · **cấm** seed · **cấm** gộp zone vào gov-vn |
| Ref | [`import-gov-ssot.md`](features/import-gov-ssot.md) · [`import-gov-asset-fields.md`](features/import-gov-asset-fields.md) |

#### `asset-kcht-dashboard`

| | |
|--|--|
| Demo | none (dashboard widget) |
| Live | MFE Asset `/so-ts/hang-muc` :9301 · widget `@linm/rmms-asset-kcht-widget` |
| API | `api/v1/asset/road-assets/summary-by-type` |
| Pipeline | PO–Dev **confirmed** · QA **paused** · Review pending |
| ≠ CSDL Cục | Hub 16+10 `/so-ts/csdl-so-sach` · **hai lớp** LOOKUP chung / ROW riêng · không gộp `rmms_road_assets` |

#### `so-ts-type-grid`

| | |
|--|--|
| Release / implement | P1-900 · grid/form theo loại · reuse section |
| Demo | none · mẫu `docs/img/gov-mau-tai-san/` |
| Pipeline | `data_analy` / `draft` |
| Next | Shell hide-empty + section S-* · **≠** gộp `csdl-bieu-*` (`GAP-CSDL-CUC-11`) |
| Ref | [`so-ts-type-grid.md`](features/so-ts-type-grid.md) · `/data-gov-integration` · peer [`csdl-cuc-2026.md`](features/csdl-cuc-2026.md) §1b |

#### `asset-hub`

| | |
|--|--|
| Lane | mobile |
| Pipeline | **done** |
| Context | [asset-hub.md](features/asset-hub.md) |

---

### 02 — GIS (P1 2D release · Twin P2 implement)

#### `gis`

| | |
|--|--|
| Contract | 02 P1 map 2D · 02-P2 Twin (implement trong cùng MFE, release Twin sau) |
| Demo | [`/demo/gis/gis.html`](../../../Linm.RMMS.Demo/src/demo/gis/gis.html) |
| MFE | `Linm.Web.RMMS.Gis` · `/gis` :9302 |
| Pipeline | **done** |
| Pilot cam overlay | [`camera-ops-dashboard-demo.html`](../../../Linm.RMMS.Demo/src/demo/features/camera-ops-dashboard-demo.html) |
| Camera map | **`/gis/camera`** :9302 · [`gis-camera-map.md`](features/gis-camera-map.md) |

#### `gis-draw-live` · `gis-draw-google`

| | |
|--|--|
| Contract | 02 P1 vẽ cơ bản |
| Demo | [`gis-draw-live.html`](../../../Linm.RMMS.Demo/src/demo/gis/gis-draw-live.html) · [`gis-draw-google.html`](../../../Linm.RMMS.Demo/src/demo/gis/gis-draw-google.html) |
| Live | **`/gis/tai-san`** :9302 **Bản đồ tài sản** (`?type=`) · tuần **`/gis/tuan-duong`** · camera **`/gis/camera`** |
| Pipeline | live **done** · google **done** (header `in_progress` · JWT leftover) |
| Road paint | OSM Carto **nền + biên** (`GAP-MAP-ROAD-CARTO-01`) · overlay Tuyến `#2563EB`/`#1D4ED8` (`GAP-MAP-ROUTE-BLUE`) — **cấm** peach `#fcd6a4` overlay |
| Overlay snap | `{HighwayPath}` / bake dense (`GAP-MAP-DRAW-STREET-01`) · **cấm** dump GPS thưa · fail = **nét đứt** · mọi zoom bake `national` (`GAP-MAP-INDEX-PAINT`) |
| Pin route | `GAP-MAP-PIN-ROUTE-01`: ghim đúng `itemRouteKey` · ẩn nếu có route chưa snap · panel `snap tim đường` — [`gis-draw-live.md`](features/gis-draw-live.md) · `/gis-tai-san-snap` |
| Camera / pin | Leaflet **maxZoom 16** (`GAP-MAP-ZOOM-MAX`) · detail pad **0.02°** + cull snap\|dump (`GAP-MAP-PIN-DETAIL-BBOX`) |

#### `gis-camera-map`

| | |
|--|--|
| Contract | 02 map + 03c camera wall |
| Demo | MFE std [`http://localhost:9302/gis/camera`](http://localhost:9302/gis/camera) · peer HTML [`camera-ops-dashboard-demo.html`](../../../Linm.RMMS.Demo/src/demo/features/camera-ops-dashboard-demo.html) |
| Pipeline | `dev` / `in_progress` |
| Seed | 10 ANPR ngã tư Vinh · Nghệ An |
| Next | Auth menu seed · BE events P2 |

#### `gis-3d-twin`

| | |
|--|--|
| Contract | 02-P2 · release P2-CR |
| Demo | catalog [`gis-3d-twin.html`](../../../Linm.RMMS.Demo/src/demo/gis/gis-3d-twin.html) |
| STATUS | không có — implement demo only |

#### GIS platform (`map-service` Wave 1–4 web done · Wave 2–4 mobile done · P2 streets done · stack in_progress)

`map-service` · `gis-osm-clip` · `legal-tech-corridor` · `ios-store-submit` · `android-store-submit` · `directions` — skill `/implement-map-stack` · `/implement-map-service` · `/implement-gis-map` · `/review-app-vn-map-law` · `/fill-build-ios-info` · `/fill-build-android-info` · `/implement-directions-app`.

**`map-service` (2026-09-01):** host **`Linm.Platform.MapService`** (`API-CORE` · `:5021` · PostGIS `:5461` `linm_maps`). Confirm `new_svc` + `api` + `micro_src`. Wave 1 **done**: Schema `Schema_GisBoundary` pair · ingest **34** (HS Đà Nẵng · TS Khánh Hòa) · clip mask · `/clip/vietnam.poly` · tile MVT `basemap` 200 · guest overlay **401**. Wave 2 **web BFF done** (mobile pending): NuGet `Linm.Platform.MapService.Bff` **1.1.0** · `AddLinmMapServiceBff` · tiles `web-bff/api/v1/gis/tiles/…` 200 MVT · guest overlay **401**. Wave 3 **web done** (`viewport_lod`): MFE `VITE_API_URL` BFF `:5201` · clusters + bbox · tiles same-origin · guest overlay **401** · mobile blocked Wave 2. Wave 4 **web done**: MFE Gis*Page MapLibre + BFF clip · maxBounds 6.8–23.5 · **clip-mask** invert **dưới** nhãn (`GAP-MAP-MASK-ALIGN` · `GAP-MAP-LABEL-CLIP`) · 0 OSM.org (`GAP-MAP-OSM-CDN-01` web CLOSED). **Fix GAP-MAP-OSM-TONE-01:** chip **Tiêu chuẩn / Vệ tinh** OSM Carto muted (`vnClipBasemap.ts` · đất `#e8e4dc` · biển `#8eb8c8` · nước `#aad3df`) — **cấm** OSM.org CDN · **cấm** Default/Streets EN. **Fix GAP-MAP-ROAD-CARTO-01:** đường nền+biên class fill/casing · overlay Tuyến pair primary. **Fix GAP-MAP-ZOOM-FILL:** `vnClipFillZoom` + `zoomSnap: 0` — zoom min fill viewport (không letterbox z5). **Fix GAP-MAP-ZOOM-STEP (2026-09-03):** +/- và lăn chuột cùng `VN_CLIP_ZOOM_DELTA=1`. **Fix GAP-MAP-TILE-EMPTY-ZOOM / GAP-MAP-PIN-ZOOM:** Live `?v=` · `padding: 0` · OSM empty z≤12 **200 no-store**. **Fix GAP-MAP-ZOOM-MAX:** Leaflet `maxZoom` **16** (MBTiles 12 · **cấm** z18 dual QL). **Fix GAP-MAP-PIN-DETAIL-BBOX:** live detail pad 0.02°. **P2 streets done** (`MAP-P2-01`): Osmium + Planetiler OpenMapTiles z12 · `vietnam.mbtiles` · `streetTilesReady=true` · `basemap` layers `transportation`/`place`/`water`. Overlay `overlay_features` trống. STATUS [`../../specs/map-service/STATUS.md`](../../specs/map-service/STATUS.md). **Cấm** `VietnamBoundaries` trên WebService. · **cấm** `AddLinmMapServiceBffControllers` (trùng route GIS BFF).

gis.vn pack `docs/gis-vn-map/vietnam-provinces-34.geojson` (34 MultiPolygon · HS trong Đà Nẵng · TS trong Khánh Hòa · union bbox 102.144–117.393 / 6.931–23.393). maxBounds camera **6.8–23.5** — cấm Lat min 8.0.

#### `ios-store-submit`

| | |
|--|--|
| Release / implement | support · Archive Apple |
| Demo | none |
| Pipeline | context / live (RMMS 1.0.7) |
| Next | `/fill-build-ios-info` · UserDefaults **CA92.1** · AppIcon 1024 RGB · [`IOS-SUBMIT-GUIDE.md`](../plan/release-mobile/store/IOS-SUBMIT-GUIDE.md) |

#### `android-store-submit`

| | |
|--|--|
| Release / implement | support · AAB Play Console |
| Demo | none |
| Pipeline | context / lab — **chưa** AAB Store (`org.linmsoft.rmms` · `0.1.0`) |
| Next | `/fill-build-android-info` (dán package Play) · Play App Signing · `STORE_W1=false` W3 · [`ANDROID-SUBMIT-GUIDE.md`](../plan/release-mobile/store/ANDROID-SUBMIT-GUIDE.md) |

Plan slash BE→BFF→UI: [`../plan/map-service/README.md`](../plan/map-service/README.md) · entry `/implement-map-stack`.

**GAP-MOB-IOS-MAP-HOST-01:** iOS `#sc-gis-map` = SSOT host clip. `#sc-patrol-map` + sheet HITL `photo-geo-capture` **phải** reuse `GisClipMapView` (cùng tile BFF · HS/TS · pict QCVN). Slash: `/implement-gis-map` `ios_replace_all_maps`. Queue hub **đã ingest** `qlbd-mobile` **`task_1f6d86c4`**. Wave 4 **ios+android done** 2026-09-16.

Ref demo: `asset-icons-legend` · `gis-draw-live-ref` · `patrol-centerline-ref` — [`/demo/p/`](../../../Linm.RMMS.Demo/src/demo/p/README.md).

---

### 03 — AI + Camera

#### `ai-vision-service`

`ai-vision` · `ai-asset-detect` · `its-traffic-detect` · `its-anpr-overload` · `predict` · `estimate` — **một host** `Linm.RMMS.Vision` (`:5311`). **Wave 1 done** (`api/v1/ai-vision/**` · `Schema_RmmsVision`). P2 ONNX **chỉ** đổi adapter trên service này. Plan [`../plan/ai-vision-service/README.md`](../plan/ai-vision-service/README.md) · ctx [`features/ai-vision-service.md`](features/ai-vision-service.md) · STATUS [`../../specs/ai-vision-service/STATUS.md`](../../specs/ai-vision-service/STATUS.md). **Entry:** `/implement-ai-vision-stack`. **Cấm** SSOT AiVision trên WebService · **cấm** RMMS → `:5301`. Next Wave 2 BFF.

#### `ai-vision`

| | |
|--|--|
| Contract | 03 P1 cloud · 03-P2 ONNX (implement, release sau) |
| Demo | [`/demo/ai-vision/ai-vision.html`](../../../Linm.RMMS.Demo/src/demo/ai-vision/ai-vision.html) · std :9303 `/ai-vision` |
| Pipeline | analy paused · PO–TL done · **Dev in_progress** · QA/Review pending |
| Host | **`Linm.RMMS.Vision`** Wave **0p done** (`D:/AI-QLBD/Linm.RMMS.Vision` `:5311`). Detect WebService còn **stub** `mock://` tới Wave 3. |
| Next | `/implement-ai-vision-stack` **Wave 1** (`catalog_codes` + `Schema_RmmsVision` pair + detect-run P1-0…P1-2) |

#### `ai-asset-detect`

| | |
|--|--|
| Contract | 03b P1 HITL · 03b-P2 OTA |
| Demo | [`ai-asset-detect.html`](../../../Linm.RMMS.Demo/src/demo/ai-vision/ai-asset-detect.html) |
| Pipeline | **done** (runtime hiện `:5301` — cutover sang Vision) |
| Run | [`specs/ai-asset-detect/run/STATUS.md`](../../specs/ai-asset-detect/run/STATUS.md) |
| Host | cutover → `Linm.RMMS.Vision` (cùng plan) |

#### `its-traffic-detect` · `its-anpr-overload`

| | |
|--|--|
| Contract | 03c-P2 ITS (release P2-CR) · **không** NT 900 |
| Implement | full (demo + STATUS done) |
| Demo | [`its-traffic-detect.html`](../../../Linm.RMMS.Demo/src/demo/ai-vision/its-traffic-detect.html) · [`its-anpr-overload.html`](../../../Linm.RMMS.Demo/src/demo/ai-vision/its-anpr-overload.html) |
| Design | [`16-ITS-TRAFFIC-OBJECT-DETECTION-DESIGN.md`](16-ITS-TRAFFIC-OBJECT-DETECTION-DESIGN.md) · [`18-ITS-ANPR-OVERLOAD-SPEC.md`](18-ITS-ANPR-OVERLOAD-SPEC.md) |
| Host | cutover → `Linm.RMMS.Vision` |

#### `camera-connect` (HĐ `camera-gtvt`)

| | |
|--|--|
| Contract | **03c** gói **C** 150tr · 5 UC online · không HW |
| Alias | HĐ `camera-gtvt` = Data `camera-connect` |
| Demo | hub [`camera-connect-demo.html`](../../../Linm.RMMS.Demo/src/demo/features/camera-connect-demo.html) · wall [`camera-ops-dashboard-demo.html`](../../../Linm.RMMS.Demo/src/demo/features/camera-ops-dashboard-demo.html) · **chưa** `demoCatalog.ts` |
| MFE | `Linm.Web.RMMS.Camera` · `/camera` |
| Railway SDK | **2026-09-05 kết nối OK** — Linux64 in API image · TCM403 `sdkPort` 8100 |
| Pipeline | **qa / await_confirm** |
| Next | **G3 5G publish** — khách đẩy RTSP vào MTX (ops [32](32-CAMERA-RTSP-PUBLISH-INGEST.md)) · Lab radar **Fused** trước khi coi ingest speed bug · tắt Multi-Way · QA ingest 401/403/429 — [31](31-CAMERA-TCM403-LAB-RADAR.md) · [23](23-CAMERA-HOST-NOTIFY-CONFIG.md) |
| Ref | [`camera-model.md`](camera-model.md) · [`features/camera-vehicle-type.md`](features/camera-vehicle-type.md) · [`21-CAMERA-HLS-WEBRTC-GATEWAY.md`](21-CAMERA-HLS-WEBRTC-GATEWAY.md) · [`22-CAMERA-TCM403-SDK-RESEARCH.md`](22-CAMERA-TCM403-SDK-RESEARCH.md) · [`31-CAMERA-TCM403-LAB-RADAR.md`](31-CAMERA-TCM403-LAB-RADAR.md) · [`28-CAMERA-SECURITY.md`](28-CAMERA-SECURITY.md) · [`23-CAMERA-HOST-NOTIFY-CONFIG.md`](23-CAMERA-HOST-NOTIFY-CONFIG.md) · [`32-CAMERA-RTSP-PUBLISH-INGEST.md`](32-CAMERA-RTSP-PUBLISH-INGEST.md) · [`../plan/camera-live/PLAN-push-ingest.md`](../plan/camera-live/PLAN-push-ingest.md) |

#### `camera-vehicle-type`

| | |
|--|--|
| Peer | `camera-connect` · **không** route/page mới |
| SSOT | Datasheet TCM403 **9 Vehicle Type** + ISAPI raw → nhãn chip Events |
| Cấm | 1:1 TCVN 14182 · ghi `class01`…`16` từ ingest · invent API |
| Code | `CameraVehicleTypeCatalog` |
| Next | UAT Bus / Light Truck trên lab · counts API đọc `DisplayKey` khi ship `rpt-dem-xe` |

#### `its-anco-signal`

| | |
|--|--|
| Release / implement | support · Wave 1 display · implement đủ phase khi enqueue |
| Demo | none |
| Pipeline | context / none (chưa STATUS) |
| Next | `/agent-qldb-workflow` `data_analy` · **cấm** Config_* · **cấm** bản đồ phân luồng Wave 1 |
| Ref | [ctx](features/its-anco-signal.md) · [SRC-ANCO-ITS](../data/analyzed/anco-its-integrate.md) · peer `camera-connect` |

---

### 04–06 — Field P1-900

#### `patrol`

| | |
|--|--|
| Contract | 04 · A+B · check-in · lịch sử · giám sát |
| Demo | [`patrol.html`](../../../Linm.RMMS.Demo/src/demo/patrol/patrol.html) · std `/td-tk` :9304 |
| API | `api/v1/td-tk/sessions` |
| Pipeline | PO–TL + QA + Review **done** · **Dev leftover** `crud_formtype` |
| Next | đóng gap form |

#### `tuan-duong-web` · `tuan-duong-mobile`

Demo đề cương TT 04 — catalog [`tuan-duong-web.html`](../../../Linm.RMMS.Demo/src/demo/patrol/tuan-duong-web.html) · [`tuan-duong-mobile.html`](../../../Linm.RMMS.Demo/src/demo/patrol/tuan-duong-mobile.html). Tracking pipeline = `patrol` / `mobile-p1`. Hub [`24-TUAN-DUONG-DUONG-BO.md`](24-TUAN-DUONG-DUONG-BO.md).

#### `attendance`

| | |
|--|--|
| Contract | 05 · GPS rule · BC công |
| Demo | [`attendance.html`](../../../Linm.RMMS.Demo/src/demo/patrol/attendance.html) |
| Pipeline | **done** |

#### `incident`

| | |
|--|--|
| Contract | 06 · E2E + offline queue |
| Demo | [`incident.html`](../../../Linm.RMMS.Demo/src/demo/incident/incident.html) · std `/su-co` :9304 |
| API | `api/v1/su-co/incidents` |
| Pipeline | `data_analy` / `pending` · PO–TL **done** · Dev/QA/Review pending |
| Next | **T-PILOT-01** e2e + HDSD + guide (`task/pilot-su-co.md`) · rồi Dev implement |
| Draft tách | `incident-list` · `incident-create` — STATUS draft |

---

### 07–11 — Thin P1 + depth P2 (cùng slug)

Cùng feature vừa release P1 vừa implement P2 trong demo/STATUS — **đúng chính sách**.

| Slug | P1-900 | P2-CR implement | Demo | Pipeline |
|------|--------|-----------------|------|----------|
| `maintenance` | map SC→CV · list cơ bản | WO/SLA/NT full | [html](../../../Linm.RMMS.Demo/src/demo/maintenance/maintenance.html) | done |
| `predict` | priority list cloud | XGBoost local **trên Vision** | [html](../../../Linm.RMMS.Demo/src/demo/ai-vision/predict.html) | done |
| `ops` | board/notify tối thiểu | workflow full | [html](../../../Linm.RMMS.Demo/src/demo/ops/ops.html) | done |
| `estimate` | qty·đơn giá·HITL | model custom **trên Vision** | [html](../../../Linm.RMMS.Demo/src/demo/ai-vision/estimate.html) | done |
| `contract` | CRUD HĐ/NS tối thiểu | depth ERP | [html](../../../Linm.RMMS.Demo/src/demo/contract/contract.html) | done |
| `copilot` | NL query online | RAG on-prem | [html](../../../Linm.RMMS.Demo/src/demo/copilot/copilot.html) | done |

#### `kcht-cong-trinh`

| | |
|--|--|
| Release / implement | **CR-Khu-IV** — ngoài PL01 900tr · công văn KQLĐB IV `/KQLĐBIV-QLBT` 08/2026 |
| Demo | none |
| Context | [kcht-cong-trinh.md](features/kcht-cong-trinh.md) · [công văn](../tinh-nang/Cung-cap-thong-tin-phan-mem.md) · **sổ/BC giải ngân** [SRC-KCT-GN03](../data/analyzed/kcht-giai-ngan-03-sheet.md) |
| Plan | [PLAN.md](../plan/kcht-cong-trinh/PLAN.md) |
| Pipeline | STATUS **`done` / `done`** (Wave 1 PH1) · PH2–PH5 **defer** — **không** conflict |
| Nguồn khách | [SOURCE-TRACKING](../data/SOURCE-TRACKING.md) `SRC-KCT-CV` + `SRC-KCT-GN03` — **cấm** đọc lại .doc/.xlsx |
| Reuse | `contract` · `road-route` · `org-unit` `REG-IV*` · `partner-unit` · `users` · FileService |
| Next | QA lock `task_719914fb` · PH2–PH4 Dev **GAP** trên **cùng** slug (sổ GN = D4 `/:id/giai-ngan`) · PH5 dashboard login = D5 **park** · **cấm** slug `kcht-dashboard` · family [§17](#17--dashboard--báo-cáo) |

---

### 12–15 — PL04 (implement sớm · release CR)

| Slug | PL | Demo | Pipeline |
|------|-----|------|----------|
| `inventory` | 12 P3 | [html](../../../Linm.RMMS.Demo/src/demo/contract/inventory.html) · `/hd-ns/vttb` :9312 | Dev pending · be/ui confirm |
| `drone` | 13-P2 | [html](../../../Linm.RMMS.Demo/src/demo/drone/drone.html) | done |
| `iot` | 01-P2 extra ADMIN | none · `/iot` :9309 scaffold | `data_analy` / `pending` |
| `toc` | 14 P3 | [html](../../../Linm.RMMS.Demo/src/demo/toc/toc.html) | **no STATUS** |
| `citizen` | 15 P3 | [html](../../../Linm.RMMS.Demo/src/demo/integration/citizen.html) | done |

---

### 17 — Dashboard + báo cáo

#### Dashboard family (P1 tách implement) — 2026-09-17 `/hey-linm`

**Cấm** 1 slug / 1 PR nhồi mọi “dashboard”. PLAN `kcht-cong-trinh` **D1**: không fork slug `kcht-dashboard`. **Cấm** enqueue Kind E PH5 trước PH4. **Cấm** 8 tab `05-DASHBOARD.md` P1.

| ID | Màn | Slug / chỗ | Route | Data (SSOT) | Task implement |
|----|-----|------------|-------|-------------|----------------|
| D1 | Shell lối tắt + widget | CORE `@linm/dashboard` | `/dashboard` :8502 | Authen `menuType=widget` · parcel KCHT | **Không** queue QLBD |
| D2 | Hub 40 ô hạng mục | `asset-kcht-dashboard` | `/so-ts/hang-muc` :9301 | `GET asset/road-assets/summary-by-type` | QA **paused** `task_fc767efe` · **không** enqueue lại |
| D3 | KPI BDTX (GOVOne) | `dashboard` | `/bao-cao/dashboard` :9311 | `incident` · `patrol` · `maintenance` · `pavement-section` · **cấm** HĐ/GN | SA **in_progress** `task_78265452` (seed `task_4f5cdaa0`) |
| D4 | Sổ giải ngân (form nguồn) | `kcht-cong-trinh` **PH4** | `/:id/giai-ngan` :9312 | SRC-KCT-GN03 · widen `contract` + `capital-plans` / `disbursements` **NEW** | Cùng slug · T-UI-KCT-PH4-* · QA lock `task_719914fb` · Dev PH4 **GAP** — **không** task song song |
| D5 | Dashboard login toàn Khu (10 KPI vốn/GN) | `kcht-cong-trinh` **PH5** | hub KPI trên `/kcht-cong-trinh` | Aggregate PH1–4 (CT · TC · BH · KH vốn · đã GN · tỷ lệ) | **PARK** `sourceFormReady=no` · GAP-KCT-PH5-01 · **cấm** enqueue Kind E |
| D6 | Camera wall + map | `gis-camera-map` | `/gis/camera` :9302 | List `GET /cameras` + events + HLS | Dev STATUS · **không** enqueue lại |
| P2 | 8 tab Overview/Assets/Patrols/…/Copilot | `05-DASHBOARD.md` | `/dashboard/*` | SignalR · Contract budget · Copilot | **Không** P1 · sibling sau Approve riêng |

**Giải ngân ≠ D3.** Budget Tracker (`/dashboard/budget`) P2 map **D4/D5**, không `GET /api/v1/dashboard/kpis`.

#### `dashboard`

| | |
|--|--|
| Contract | 17 P1 3–5 KPI · 17-P2 advanced |
| Demo | [`dashboard.html`](../../../Linm.RMMS.Demo/src/demo/bao-cao/dashboard.html) |
| Pipeline | `sa` / `in_progress` · [STATUS](../../specs/dashboard/STATUS.md) · SA `task_78265452` |
| Next | SA → TL `T-*` chỉ D3 · count=DB · **cấm** gộp D2/D4/D5 |

#### `reports`

| | |
|--|--|
| Demo | [`reports.html`](../../../Linm.RMMS.Demo/src/demo/bao-cao/reports.html) |
| Pipeline | **done** |
| Hub | [reports.md](features/reports.md) |
| Filter sibling | [`reports-filter-bar`](features/reports-filter-bar.md) · `task_a5f134b0` `pending_confirm` |

#### `reports-filter-bar`

| | |
|--|--|
| Release / implement | P1-900 · edit hub filter `/bao-cao` |
| Demo | hub reports |
| Pipeline | `data_analy` / `await_confirm` |
| Next | Sau `org-route-scope` done → user confirm mới Start implement |

#### `rpt-*` (STATUS done hết)

Không có HTML riêng trong `demoCatalog` — nằm hub reports / GOVOne.

| Slug | Release | Context | STATUS |
|------|---------|---------|--------|
| `rpt-tai-san` | P1 | [ctx](features/rpt-tai-san.md) | [ST](../../specs/rpt-tai-san/STATUS.md) |
| `rpt-su-co` | P1 | [ctx](features/rpt-su-co.md) | [ST](../../specs/rpt-su-co/STATUS.md) |
| `rpt-checkin` | P1 | [ctx](features/rpt-checkin.md) | [ST](../../specs/rpt-checkin/STATUS.md) |
| `rpt-bao-cao-cong` | P1.5 | [ctx](features/rpt-bao-cao-cong.md) | [ST](../../specs/rpt-bao-cao-cong/STATUS.md) |
| `rpt-tuan-duong` | P1.5 | [ctx](features/rpt-tuan-duong.md) | [ST](../../specs/rpt-tuan-duong/STATUS.md) |
| `rpt-tuan-kiem` | P1.5 | [ctx](features/rpt-tuan-kiem.md) | [ST](../../specs/rpt-tuan-kiem/STATUS.md) |
| `rpt-tong-hop-bao-tri` | P2-CR | [ctx](features/rpt-tong-hop-bao-tri.md) | [ST](../../specs/rpt-tong-hop-bao-tri/STATUS.md) |
| `rpt-nhat-ky-tuan-duong` | P2-CR · **live sổ** [CR](../../specs/_cr/nktd-pdf-20260917/task-rpt-nhat-ky-tuan-duong.md) | [ctx](features/rpt-nhat-ky-tuan-duong.md) | [ST](../../specs/rpt-nhat-ky-tuan-duong/STATUS.md) |
| `rpt-nhat-ky-tuan-kiem` | P2-CR | [ctx](features/rpt-nhat-ky-tuan-kiem.md) | [ST](../../specs/rpt-nhat-ky-tuan-kiem/STATUS.md) |
| `rpt-nhat-ky-cong-viec` | P2-CR | [ctx](features/rpt-nhat-ky-cong-viec.md) | [ST](../../specs/rpt-nhat-ky-cong-viec/STATUS.md) |
| `rpt-thien-tai` | P2-CR | [ctx](features/rpt-thien-tai.md) | [ST](../../specs/rpt-thien-tai/STATUS.md) |
| `rpt-thiet-hai` | P2-CR | [ctx](features/rpt-thiet-hai.md) | [ST](../../specs/rpt-thiet-hai/STATUS.md) |
| `rpt-un-tac` | P2-CR | [ctx](features/rpt-un-tac.md) | [ST](../../specs/rpt-un-tac/STATUS.md) |
| `rpt-hang-muc-hu-hong` | P2-CR | [ctx](features/rpt-hang-muc-hu-hong.md) | [ST](../../specs/rpt-hang-muc-hu-hong/STATUS.md) |
| `rpt-tinh-trang-mat-duong` | P2-CR | [ctx](features/rpt-tinh-trang-mat-duong.md) | [ST](../../specs/rpt-tinh-trang-mat-duong/STATUS.md) |
| `rpt-kiem-tra-cau` | P2-CR | [ctx](features/rpt-kiem-tra-cau.md) | [ST](../../specs/rpt-kiem-tra-cau/STATUS.md) |
| `rpt-tngt` | P2-CR | [ctx](features/rpt-tngt.md) | [ST](../../specs/rpt-tngt/STATUS.md) |
| `rpt-vi-pham-hlatdb` | P2-CR | [ctx](features/rpt-vi-pham-hlatdb.md) | [ST](../../specs/rpt-vi-pham-hlatdb/STATUS.md) |
| `rpt-dem-xe` | P2-CR | [ctx](features/rpt-dem-xe.md) | [ST](../../specs/rpt-dem-xe/STATUS.md) |
| `rpt-giay-phep-thi-cong` | P3-CR | [ctx](features/rpt-giay-phep-thi-cong.md) | [ST](../../specs/rpt-giay-phep-thi-cong/STATUS.md) |
| `rpt-cong-van` | P3-CR | [ctx](features/rpt-cong-van.md) | [ST](../../specs/rpt-cong-van/STATUS.md) |

**≠ PHỤ LỤC 03 giải ngân Khu IV** — form nguồn [SRC-KCT-GN03](../data/analyzed/kcht-giai-ngan-03-sheet.md) thuộc `kcht-cong-trinh` PH5 (chưa tách slug `rpt-*`). Excel/In chuẩn mẫu → Pack B+C [`csdl-export-print`](features/csdl-export-print.md).

---

### 18 + Auth + Integration extras

#### `integration`

| | |
|--|--|
| Contract | 18 P1 OpenAPI + 1 adapter · 18-P2 nhiều adapter |
| Demo | [`integration.html`](../../../Linm.RMMS.Demo/src/demo/integration/integration.html) |
| Pipeline | **done** |

#### `feedback` ≠ `citizen`

| | |
|--|--|
| `feedback` | góp ý nội bộ P1 · catalog [html](../../../Linm.RMMS.Demo/src/demo/integration/feedback.html) · STATUS **draft** |
| `citizen` | cổng dân P3-CR · STATUS done |

#### `users`

| | |
|--|--|
| Demo | [`users.html`](../../../Linm.RMMS.Demo/src/demo/integration/users.html) · std `/admin/user` :9314 |
| API | `api/v1/admin/user` |
| Pipeline | PO–SA–TL–QA–Review done · **Dev in_progress** |

#### `login`

| | |
|--|--|
| Context | [login.md](features/login.md) · [SPEC](../plan/login-contract-lifecycle/SPEC.md) |
| STATUS | [login](../../specs/login/STATUS.md) **done** |
| Job | [run L0–L6](../../specs/login/run/STATUS.md) **done** (`Linm.RMMS.Permission.Job`) |
| Peer | `login-forgot` done |

---

### Platform (không mã PL01)

#### `platform-message` — **đang chạy**

| | |
|--|--|
| Hub | [`26-MESSAGE-PARCEL.md`](26-MESSAGE-PARCEL.md) · plan `{RulesRoot}/docs/plan/linm-message-service/README.md` |
| Demo | N/A packKind platform · live `Linm.Web.Message` · proto [`platform-message-prototype.html`](../../specs/platform-message/ui/prototype/platform-message-prototype.html) |
| std | http://localhost:9301/platform-message |
| Pipeline | analy+PO+Design **done** · **SA in_progress** · TL–Review pending |
| Next | SA `solution-discovery.md` → TL `route_confirm` → Dev GAP parcel |
| Queue | **first** — `platform-task` chờ |

#### `platform-task`

| | |
|--|--|
| Hub | [`25-PLATFORM-TASK.md`](25-PLATFORM-TASK.md) · [PLAN](../plan/platform-task/PLAN.md) |
| Demo | [`/demo/task/task.html`](../../../Linm.RMMS.Demo/src/demo/task/task.html) |
| Pipeline | data_analy **pending** · queue second |
| MFE | cite Medical đến khi `Linm.Web.Task` |

#### `rmms-task-integrate`

Blocked / later — [STATUS](../../specs/rmms-task-integrate/STATUS.md) · [RMMS-TUAN-DUONG.md](../plan/platform-task/RMMS-TUAN-DUONG.md).

---

### Gói B — Mobile

#### `mobile-p1`

| | |
|--|--|
| Pipeline | design **await_confirm** · IA v3.3 · kit patched |
| Proto | [`specs/mobile-p1/ui/prototype/`](../../specs/mobile-p1/ui/prototype/) |
| Skill | `/agent-qldb-workflow-mobile` · **cấm** `yarn run-implement` MAIN3 |

#### Patrol native

| Slug | Pipeline | Context |
|------|----------|---------|
| `patrol-home` · `patrol-history` · `patrol-offline` | done | [home](features/patrol-home.md) · [history](features/patrol-history.md) · [offline](features/patrol-offline.md) |
| `patrol-map` | `done` · reuse `GisClipMapView` · copy **web live** locked · họp 5 inspect ảnh **enqueue_later** | [patrol-map.md](features/patrol-map.md) |
| `patrol-pin` | Review in_progress | [patrol-pin.md](features/patrol-pin.md) |
| `patrol-checkin` | draft · họp 4 upload/AI **enqueue_later** | STATUS only |
| `nghiem-thu` · `nghiem-thu-create` · `nghiem-thu-detail` · `nghiem-thu-mau` | 20/09 TT 41 MAU-10 + scores · `/add-task` `qlbd-mobile` `edit_page` · web later | [nghiem-thu.md](features/nghiem-thu.md) · [mau](features/nghiem-thu-mau.md) · [plan](../plan/nghiem-thu-mau/README.md) |
| `photo-geo-capture` | done · live HUD + in-app fullscreen | [photo-geo-capture.md](features/photo-geo-capture.md) |

`home` · `me` · `login` · `login-forgot` · `supervise` · `asset-hub` · `attendance` (mobile lane) — STATUS **done**.

---

## Demo catalog vs hub

| Trong `demoCatalog.ts` | Ngoài catalog (hub `index.html` / `features/`) |
|------------------------|-----------------------------------------------|
| 01–18 slugs + ITS + Twin + task + tuan-duong + p/ refs | `camera-connect-demo.html` · `camera-ops-dashboard-demo.html` · nhiều `*-demo.html` redirect |

Pending domain folders (README only): `workflow`.

---

## Liên kết gốc

| Nguồn | Path |
|-------|------|
| Backlog mô tả | [features/README.md](features/README.md) |
| 18 phân hệ × màn | [15-SCREEN-AI-MAP.md](15-SCREEN-AI-MAP.md) |
| Plan P1 vs P2 | [09-PLAN-P1-V2.md](09-PLAN-P1-V2.md) |
| Kỹ thuật | [07-TECHNICAL-IMPLEMENTATION.md](07-TECHNICAL-IMPLEMENTATION.md) |
| Scan JSON | [implement-status.json](implement-status.json) |
| HĐ PL01/PL04 | [PROMPT-SPEC…](../../../Linm.RMMS.Contract/analy/PROMPT-SPEC-P1-P2-PHU-LUC-RELEASE.md) |
| Tài liệu khách (đã/chưa) | [SOURCE-TRACKING.md](../data/SOURCE-TRACKING.md) · [docs/data/](../data/README.md) |
| Công văn Khu IV (CT KCHT) | [Cung-cap-thong-tin-phan-mem.md](../tinh-nang/Cung-cap-thong-tin-phan-mem.md) |
| Sổ + PHỤ LỤC 03 giải ngân | [kcht-giai-ngan-03-sheet.md](../data/analyzed/kcht-giai-ngan-03-sheet.md) |
| Demo catalog | [demoCatalog.ts](../../../Linm.RMMS.Demo/src/demoCatalog.ts) |
| Demo DOMAIN | [DOMAIN.md](../../../Linm.RMMS.Demo/src/demo/DOMAIN.md) |
| Route VN | [route-vn-abbr-confirm.md](route-vn-abbr-confirm.md) |

### `mobile-cleanup-mock`

| Field | Value |
|-------|-------|
| Title | [Mobile] Clean-up mock data + seed CRUD per screen |
| Pipeline | `dev` / `pending` · epic · children P0/P1 fix_gaps |
| Context | [features/mobile-cleanup-mock.md](features/mobile-cleanup-mock.md) |
| STATUS | [specs/mobile-cleanup-mock/STATUS.md](../../specs/mobile-cleanup-mock/STATUS.md) |
| Next | Worker pick child tasks `roleOnly=dev` · `/edit-mobile-feature` · seed BFF |
| Updated | 2026-09-01 |

#### `photo-geo-capture`

| | |
|--|--|
| Release / implement | support · P1 native · implement đủ phase |
| Demo | none (proto sau Design) |
| Pipeline | `done` / `done` |
| Next | leaf `/edit-mobile-feature` live HUD + fullscreen **done** `task_b6a752b4` · **cấm** invent `api/v1/photo-geo` |
