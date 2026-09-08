# RMMS — Feature backlog (gen-tinh-nang-demo + analy-requirement)

> **Command:** `/gen-tinh-nang-demo` · `/analy-requirement`  
> **DocsRoot:** `docs/` · **DemoRoot (std):** `Linm.RMMS.Demo/src/demo/`  
> **SSOT kỹ thuật:** [`../07-TECHNICAL-IMPLEMENTATION.md`](../07-TECHNICAL-IMPLEMENTATION.md) · Phase: [`../09-PLAN-P1-V2.md`](../09-PLAN-P1-V2.md)  
> **SSOT màn hình ↔ AI:** [`../15-SCREEN-AI-MAP.md`](../15-SCREEN-AI-MAP.md)  
> **Nguồn:** `Hướng dẫn sử dụng phần mềm.docx` (Web/Mobile) · `RMMS_Giaiphap_tinhnang.docx` (18 phân hệ + AI)

## Status legend

| Status | Ý nghĩa |
|--------|---------|
| Draft | Chỉ backlog / stub P2–P3 |
| Context | Đủ `{slug}.md` §1–§7 |
| Demo | Đã có HTML mock |
| Signed | Khách chốt checklist trên demo |

**Implement + demo + STATUS + release slice:** [`FEATURE-TRACKING.md`](../FEATURE-TRACKING.md) — **SSOT theo dõi.** Implement đủ phase; khách nhận từng đợt (P2 trong demo/STATUS **không** conflict). Scan JSON: [`implement-status.json`](../implement-status.json) (có thể lệch STATUS.md).

## Backlog — app hiện có + AI + nền tảng

| # | Slug | Tên | Module | Phase | App hiện có (guide) | Status | Context |
|---|------|-----|--------|-------|---------------------|--------|---------|
| 0 | `master` | Danh mục Master (hub) | Master | P1 | — | Context | [master.md](master.md) · [import SSOT](import-gov-ssot.md) |
| 0a | `org-unit` | Cơ cấu tổ chức DRVN | Master | P1 | — (**no demo**) | Context | [org-unit.md](org-unit.md) |
| 0b | `road-route` | Tuyến đường | Master | P1 | `Sau-sat-nhap/gov` raw tuyến | Context | [road-route.md](road-route.md) · [đề cương LRS](../24-TUAN-DUONG-DUONG-BO.md) |
| 0c | `asset-type` | Loại tài sản KCHT | Master | P1 | `Sau-sat-nhap/gov` (catalog) | Context | [asset-type.md](asset-type.md) |
| 0c2 | `traffic-sign-type` | Loại biển báo (mã QCVN) | Master | P1 | Excel số hiệu biển + dump `gov-vn` | Context | [traffic-sign-type.md](traffic-sign-type.md) |
| 0d | `partner-unit` | Sở / BOT / Cty | Master | P1 | Seed 13 + Excel T6 `t6-org-scope` · CUC 2 = demo | Context | [partner-unit.md](partner-unit.md) |
| 0e | `org-route-scope` | Zone km Khu ↔ tuyến / đoạn | Master | P1 | Cây DRVN + Excel T6 `t6-org-scope` · **không** dump moc gán | Context | [org-route-scope.md](org-route-scope.md) |
| 0f | `khu-1-pilot` | Pilot dữ liệu Khu I | Data | P1 | Họp 04/09 hạng 3 | Draft | [khu-1-pilot.md](khu-1-pilot.md) · [org-route-scope.md](org-route-scope.md) |
| 1 | `asset` | Quản lý tài sản đường bộ | Asset | P1 | Mobile Tài sản · Web KCHT · Giám sát TS | Demo | [asset.md](asset.md) |
| 1a | `asset-kcht-32` | 36 loại TS (thông số + sự cố) | Asset×Incident | P1 | CSDL 12 biểu · `Sau-sat-nhap/gov` | Context | [asset-kcht-32.md](asset-kcht-32.md) |
| 1b | `csdl-so-sach` | Hub CSDL Kind G `/so-ts/csdl-so-sach` (shell 12+8 **done**) · **≠** hang-muc / Sổ TS | Asset·Patrol·Maint | P1 | Hub live | Demo | [csdl-so-sach.md](csdl-so-sach.md) |
| 1b2 | `csdl-cuc-2026` | Epic typed **16 biểu + 10 sổ** · hai lớp LOOKUP chung / ROW riêng | Asset·Patrol·Maint | P1 | Excel+Word trình LĐ Cục | Context | [csdl-cuc-2026.md](csdl-cuc-2026.md) · [analy](../../../specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md) |
| 1b3 | `csdl-bieu-01`…`16` | Từng biểu CSDL (1 nút=1 feature) | Asset | P1 | sheet 01–16 `.xls` | Context | [csdl-bieu-01.md](csdl-bieu-01.md) … [csdl-bieu-16.md](csdl-bieu-16.md) |
| 1b4 | `csdl-so-01`…`10` | Từng sổ BDTX (Sổ 10 = map) | Patrol·Maint | P1 | Word mẫu 1–10 | Context | [csdl-so-01.md](csdl-so-01.md) … [csdl-so-10.md](csdl-so-10.md) |
| 1c | `pavement-section` | Phân loại mặt đường (Biểu 1) | Asset | P1 | Hồ sơ CSDL biểu 1 | Demo | [pavement-section.md](pavement-section.md) |
| 1d | `asset-kcht-dashboard` | Hub Hạng mục KCHT (40 ô) · `/so-ts/hang-muc` · **≠** `csdl-so-sach` | Asset | P1 | GOVOne lưới hạng mục | Context | [asset-kcht-dashboard.md](asset-kcht-dashboard.md) |
| 1e | `so-ts-type-grid` | Sổ TS grid/form theo loại (reuse section) | Asset | P1 | DRVN `docs/img/gov-mau-tai-san` | Context | [so-ts-type-grid.md](so-ts-type-grid.md) · `/data-gov-integration` |
| 2 | `gis` | GIS và Digital Twin | Gis | P1–P2 | Bản đồ Giám sát / TS / SC | Demo | [gis.md](gis.md) · **pilot camera overlay** [camera-ops-dashboard-demo.html](../../../Linm.RMMS.Demo/src/demo/features/camera-ops-dashboard-demo.html) |
| 2s | `map-service` | MapService — gis.vn + clip OSM | Platform | P1 | Host `Linm.Platform.MapService` `:5021` · Wave 1–4 web **done** · OSM Carto muted | Context | [map-service.md](map-service.md) · skill `/implement-map-stack` |
| 2t | `gis-osm-clip` | GIS prod: OSM clip + overlay MapService | Gis | P1 | MFE clip BFF · chip **Tiêu chuẩn / Vệ tinh** · mobile copy web live [`patrol-map.md`](patrol-map.md) | Context | [gis-osm-clip.md](gis-osm-clip.md) · `/implement-gis-map` |
| 2u | `legal-tech-corridor` | Luật VN + Store (GPS/vẽ TS/guest) | Compliance | P1 | — | Context | [legal-tech-corridor.md](legal-tech-corridor.md) · `/review-app-vn-map-law` |
| 2v | `directions` | Chỉ đường / HD điện tử guest | Integration | P1 | — (chưa OSRM Signed) | Context | [directions.md](directions.md) · `/implement-directions-app` |
| 2a | `gis-draw-google` | Vẽ tài sản trên Google Map | Gis+Asset | P1 | GOVOne `1-ban-do.png` | Demo | [gis-draw-google.md](gis-draw-google.md) |
| 2b | `gis-draw-live` | Vẽ tài sản live (Leaflet rút gọn) | Gis+Asset | P1 | HĐ PL01 mã 02 | Demo | [gis-draw-live.md](gis-draw-live.md) |
| 2c | `gis-camera-map` | Bản đồ camera (wall + clip ANPR) | Gis×Camera | P1 mock | `/gis/camera` · seed Vinh | Dev | [gis-camera-map.md](gis-camera-map.md) |
| 3s | `ai-vision-service` | Host `Linm.RMMS.Vision` (mọi slug AiVision) | Vision | V1 P1 GPT / P2 ONNX **cùng host** | Wave **0p done** · next Wave 1 | Context | [ai-vision-service.md](ai-vision-service.md) · plan [ai-vision-service](../../plan/ai-vision-service/README.md) · skill `/implement-ai-vision-stack` |
| 3 | `ai-vision` | AI kiểm định mặt đường | AiVision | P1 online / P2 local | Overlay **Vấn đề** / Sự cố | Demo | [ai-vision.md](ai-vision.md) · host [ai-vision-service](ai-vision-service.md) |
| 3b | `ai-asset-detect` | AI phát hiện TS/thiết bị mới (camera tuần đường) | AiVision×Asset×Patrol | P1 online / P2 local | Camera xe → loại TS · tọa độ · tuyến → bản ghi Asset | Demo | [ai-asset-detect.md](ai-asset-detect.md) |
| 3c | `its-traffic-detect` | ITS object detect (biển báo · cọc tiêu · cam IP · gim · sự cố mất · **OTA mobile**) | AiVision×Iot×Asset×Gis×Camera×Incident | P1 design / P2-A train+ONNX · P2 OTA TFLite/CoreML · P2.1 CCTV 1 FPS | Dedupe 10 m · user/auto gim · mất = reconcile · mobile `modelVersion` §14 | Context | [its-traffic-detect.md](its-traffic-detect.md) · [../16-…](../16-ITS-TRAFFIC-OBJECT-DETECTION-DESIGN.md) · §8–§14 |
| 3d | `its-anpr-overload` | ITS ANPR biển số · Cục Đăng kiểm · xác nhận lỗi tốc độ/quá tải | AiVision×Iot×Incident | **P2 core** (demo P1) | Camera+WIM → registry trục·GVW → HITL Confirm | Demo | [its-anpr-overload.md](its-anpr-overload.md) · [../18-…](../18-ITS-ANPR-OVERLOAD-SPEC.md) |
| 3e | `camera-connect` | Kết nối camera ITS / **HĐ `camera-gtvt`** (PL01 03c · gói C) | **Camera** | P1 Demo / P2 BE | Seed **iDS-TCM403-GIR** · BE defer | Demo | [camera-connect.md](camera-connect.md) · [../camera-model.md](../camera-model.md) · alias HĐ=`camera-gtvt` · **pilot wall+map** [camera-ops-dashboard-demo.html](../../../Linm.RMMS.Demo/src/demo/features/camera-ops-dashboard-demo.html) |
| 4 | `patrol` | Tuần đường / tuần kiểm | Field | P1 | Check-in · Giám sát · Lưu trữ | Demo | [patrol.md](patrol.md) · [đề cương 24](../24-TUAN-DUONG-DUONG-BO.md) · demo web/mobile mới |
| 4n | `nghiem-thu` | Công tác nghiệm thu (clone tuần kiểm + 10 mẫu) | Field | P1 | Họp 04/09 hạng 1 | Draft | [nghiem-thu.md](nghiem-thu.md) |
| 4t | `platform-task` | Công việc (platform) | Platform | P1 demo | Medical QLCV | Demo · **queue pending** | [platform-task.md](platform-task.md) · [25](../25-PLATFORM-TASK.md) · [PLAN](../../plan/platform-task/PLAN.md) · [RMMS](../../plan/platform-task/RMMS-TUAN-DUONG.md) |
| 4m | `platform-message` | Chat / inbox parcel | Platform | P1 SSOT | `@linm/message` | Context · **queue pending first** | [platform-message.md](platform-message.md) · [26](../26-MESSAGE-PARCEL.md) |
| 4r | `rmms-task-integrate` | Gắn Task vào tuần đường/sự cố | Platform×Field | P2 later | — | **blocked** | [RMMS-TUAN-DUONG.md](../../plan/platform-task/RMMS-TUAN-DUONG.md) |
| 5 | `attendance` | Chấm công và định vị | Field | P1 | Check-in · BC checkin | Context | [attendance.md](attendance.md) |
| 6 | `incident` | Quản lý sự cố | Field | P1 | Vấn đề · Sự cố · Giám sát SC | Demo | [incident.md](incident.md) |
| 7 | `maintenance` | Lập lịch SC / bảo trì | Field | P2 (khung P1) | **Công việc** Mobile/Web | Context | [maintenance.md](maintenance.md) |
| 8 | `predict` | AI dự báo bảo trì | AiVision+ML | P1 online / P2 | Dashboard / Báo cáo | Demo | [predict.md](predict.md) |
| 9 | `ops` | Chỉ đạo điều hành | Field | P2 (nhẹ P1) | Giám sát · notify | Demo | [ops.md](ops.md) |
| 10 | `estimate` | AI ước lượng sửa chữa | ML | P1 online / P2 | Panel trên Công việc / SC | Demo | [estimate.md](estimate.md) |
| 11 | `contract` | Hợp đồng và ngân sách | Contract | P2–P3 | — | Demo | [contract.md](contract.md) |
| 11k | `kcht-cong-trinh` | Công trình KCHT (Khu QLĐB IV) | Contract×QLDA | CR-Khu-IV | Công văn 08/2026 · 5 phân hệ | Context | [kcht-cong-trinh.md](kcht-cong-trinh.md) · [PLAN](../../plan/kcht-cong-trinh/PLAN.md) |
| 12 | `inventory` | Vật tư và thiết bị | Inventory | P3 | — | Demo | [inventory.md](inventory.md) |
| 13 | `drone` | Drone / Reality Capture | Drone | P2–P3 | — | Demo | [drone.md](drone.md) |
| 13i | `iot` | Danh sách IoT (`/iot`) · P2 extra ADMIN | Iot | P2 | MFE scaffold | Context | [iot.md](iot.md) |
| 14 | `toc` | Trung tâm ĐH GT | Traffic | P3 | — | Demo | [toc.md](toc.md) |
| 15 | `citizen` | Cổng người dân | Integration | P3 | — (≠ Góp ý nội bộ) | Demo | [citizen.md](citizen.md) |
| 16 | `copilot` | AI Copilot | Copilot | P1 online / P2 RAG | Web drawer (mới) | Demo | [copilot.md](copilot.md) |
| 17 | `dashboard` | Dashboard điều hành | Report | P1 KPI / P2 full | Giám sát + KPI | Context | [dashboard.md](dashboard.md) |
| 17b | `reports` | Báo cáo Web (hub) | Report | P1 | BC tài sản · SC · checkin | Context | [reports.md](reports.md) |
| 17c | `rpt-tai-san` | BC Tài sản | Report | P1 | Web Báo cáo | Context | [rpt-tai-san.md](rpt-tai-san.md) |
| 17d | `rpt-su-co` | BC Sự cố | Report | P1 | Web Báo cáo | Context | [rpt-su-co.md](rpt-su-co.md) |
| 17e | `rpt-checkin` | BC Check-in | Report | P1 | Web BC checkin | Context | [rpt-checkin.md](rpt-checkin.md) |
| 17f | `rpt-bao-cao-cong` | Báo cáo công | Report | P1.5 | attendance Kind E | Context | [rpt-bao-cao-cong.md](rpt-bao-cao-cong.md) |
| 17g | `rpt-tuan-duong` | Báo cáo tuần đường | Report | P1.5 | patrol · GOVOne | Context | [rpt-tuan-duong.md](rpt-tuan-duong.md) |
| 17h | `rpt-tuan-kiem` | Báo cáo tuần kiểm | Report | P1.5 | patrol · GOVOne | Context | [rpt-tuan-kiem.md](rpt-tuan-kiem.md) |
| 17i | `rpt-tong-hop-bao-tri` | Tổng hợp bảo trì | Report | P2 | maintenance Kind E | Context | [rpt-tong-hop-bao-tri.md](rpt-tong-hop-bao-tri.md) |
| 17j | `rpt-nhat-ky-tuan-duong` | Nhật ký tuần đường | Report | P2 | GOVOne BDTX | Context | [rpt-nhat-ky-tuan-duong.md](rpt-nhat-ky-tuan-duong.md) |
| 17k | `rpt-nhat-ky-tuan-kiem` | Nhật ký tuần kiểm | Report | P2 | GOVOne BDTX | Context | [rpt-nhat-ky-tuan-kiem.md](rpt-nhat-ky-tuan-kiem.md) |
| 17l | `rpt-nhat-ky-cong-viec` | Nhật ký công việc | Report | P2 | GOVOne BDTX | Context | [rpt-nhat-ky-cong-viec.md](rpt-nhat-ky-cong-viec.md) |
| 17m | `rpt-thien-tai` | Thiên tai, bão lũ | Report | P2 | GOVOne Số liệu | Context | [rpt-thien-tai.md](rpt-thien-tai.md) |
| 17n | `rpt-thiet-hai` | Khối lượng thiệt hại | Report | P2 | GOVOne Số liệu | Context | [rpt-thiet-hai.md](rpt-thiet-hai.md) |
| 17o | `rpt-un-tac` | Ùn tắc / ngập úng | Report | P2 | GOVOne Số liệu | Context | [rpt-un-tac.md](rpt-un-tac.md) |
| 17p | `rpt-hang-muc-hu-hong` | Hạng mục hư hỏng | Report | P2 | GOVOne | Context | [rpt-hang-muc-hu-hong.md](rpt-hang-muc-hu-hong.md) |
| 17q | `rpt-tinh-trang-mat-duong` | Tình trạng mặt đường | Report | P2 | GOVOne · PCI | Context | [rpt-tinh-trang-mat-duong.md](rpt-tinh-trang-mat-duong.md) |
| 17r | `rpt-kiem-tra-cau` | Kiểm tra cầu | Report | P2 | GOVOne 3 tab | Context | [rpt-kiem-tra-cau.md](rpt-kiem-tra-cau.md) |
| 17s | `rpt-tngt` | Tai nạn giao thông | Report | P2 | GOVOne 6 tab | Context | [rpt-tngt.md](rpt-tngt.md) |
| 17t | `rpt-vi-pham-hlatdb` | Vi phạm HLATĐB | Report | P2 | GOVOne | Context | [rpt-vi-pham-hlatdb.md](rpt-vi-pham-hlatdb.md) |
| 17u | `rpt-dem-xe` | Đếm xe | Report | P2 | GOVOne B.1/B.2 | Context | [rpt-dem-xe.md](rpt-dem-xe.md) |
| 17v | `rpt-giay-phep-thi-cong` | Giấy phép thi công | Report | P3 | GOVOne Tài liệu | Context | [rpt-giay-phep-thi-cong.md](rpt-giay-phep-thi-cong.md) |
| 17w | `rpt-cong-van` | Công văn đi — đến | Report | P3 | GOVOne Tài liệu | Context | [rpt-cong-van.md](rpt-cong-van.md) |
| 18 | `integration` | Open API và tích hợp | Integration | P1–P3 | Import TS · offline sync | Demo | [integration.md](integration.md) |
| — | `feedback` | Góp ý phần mềm | Integration | P1 | Mobile **Góp ý** | Demo | [feedback.md](feedback.md) |
| — | `users` | QL người dùng / tổ chức | Auth / Integration | P1 | Web QL Cơ quan/User · profile | Demo | [users.md](users.md) |
| — | `login` | Login platform + TK theo HĐ | Auth × Contract | P1 / P1.5 | — (platform login) | Context · await_approve | [login.md](login.md) · [SPEC](../../plan/login-contract-lifecycle/SPEC.md) |

## Nguyên tắc P1 (từ 09 + map)

1. AI #3+#8+#10+#16 + **`ai-asset-detect`** = **online** (GPT-4o / 4o-mini) — không YOLO/XGBoost local trong P1  
2. Giữ UX Mobile/Web guide — bổ sung API consumer + AI overlay  
3. SSOT màn ↔ AI: [`15-SCREEN-AI-MAP.md`](../15-SCREEN-AI-MAP.md)  
4. Demo HTML chỉ mock UI + tóm tắt API/DB — không thay production  
5. **Analy + gen demo:** mọi feature có AI → badge/icon **AI support** + engine P1/P2 trên hub và page (`/qlbd-analy-demo`)
6. **Master catalogs (`packKind=master`):** **không** gen demo HTML — context + Design prototype confirm — MFE `Linm.Web.RMMS.Master`  
7. **Import CSV:** SSOT [`import-gov-ssot.md`](import-gov-ssot.md) § **Thông tin data dự án** — set `gov-vn` (429 tuyến · 642.193 KCHT · 2.920 đoạn). `docs/Mẫu import` và `RMMS CUC 2` = **demo / archive**. **Cấm** seed bù ô KCHT.

## Hub demo

```bash
cd Linm.RMMS.Demo/src/demo && npm run start:std
# → http://localhost:5180
```

## Next

```
/gen-tinh-nang-demo @maintenance   # HTML demo khi cần
/erp-form-context @pavement-section # nếu deepen ERP form
/analy-requirement                  # Step 7 → /gen-bao-gia (khi chốt HĐ)
```
