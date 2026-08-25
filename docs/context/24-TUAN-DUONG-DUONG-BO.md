# Tuần đường × Đường bộ — SSOT đề cương Web-App

> **Nguồn:** `docs/tinh-nang/Dự thảo Đề cương Thiết kế Web-App Tuần Đường.pdf` (12 trang · 2026-08-25)  
> **Phạm vi pháp lý:** Hệ thống đường quốc lộ do **Cục Đường bộ Việt Nam** quản lý · **Thông tư 04/2019/TT-BGTVT** (tuần đường / tuần kiểm bảo vệ KCHT GTVT đường bộ)  
> **Feature context:** [`features/patrol.md`](features/patrol.md) · [`features/road-route.md`](features/road-route.md) · tree đơn vị [`20-ORG-STRUCTURE-DRVN.md`](20-ORG-STRUCTURE-DRVN.md)  
> **Sổ nguồn:** [`11-CSDL-SO-SACH-DATABASE-API.md`](11-CSDL-SO-SACH-DATABASE-API.md) §3.1 Mẫu 1 Nhật ký tuần đường  
> **Pipeline:** `/agent-qldb-workflow` · start `/agent-data-analy` `mode=feature_context` slug `patrol`  
> **Quản lý sau ca:** [`25-PLATFORM-TASK.md`](25-PLATFORM-TASK.md) · chat [`26-MESSAGE-PARCEL.md`](26-MESSAGE-PARCEL.md) · [PLAN](../plan/platform-task/PLAN.md) · [RMMS integrate](../plan/platform-task/RMMS-TUAN-DUONG.md) · **cấm** nhúng TaskService vào RMMS.WebService  
> **Cấm invent API.** Endpoint chỉ cite từ feature md / `11-CSDL` / DOMAIN-MAP đã Signed.

Tài liệu khách = **đầu bài thiết kế** (yêu cầu nghiệp vụ + khung kỹ thuật). Không thay STATUS pack đã Signed. Lệch sản phẩm Linm → **GAP** dưới đây.

---

## 1. Tách 2 lớp (HARD)

| Lớp | Ý nghĩa đề cương | Slug RMMS (đã có) | Không gộp |
|-----|------------------|-------------------|-----------|
| **Đường bộ** | Nền tảng định danh tuyến · LRS (Km+m) · GIS toàn quốc · cây Cục→Khu→VP→BDTX | `road-route` · `org-unit` · `pavement-section` · `asset` · `gis` · `map-service` | Không nhét CRUD tuyến vào ca tuần |
| **Tuần đường** | Ca hiện trường · nhật ký TT 04 PL01 · sự cố/vi phạm/TNGT · duyệt sau ca · BC tháng | `patrol` · `patrol-home` · `patrol-map` · `patrol-pin` · `supervise` · `incident` · `rpt-tuan-duong` · `rpt-nhat-ky-tuan-duong` | Report Kind E **cấm** copy CRUD session |

**Tuần kiểm** (cán bộ QLĐB đối soát nhật ký) = sibling `rpt-tuan-kiem` + sổ mẫu 8 — **không** gộp vào slug `patrol`.

---

## 2. Bốn nhóm nhiệm vụ tuần đường (TT 04)

| # | Nhóm | Hiện trường ghi | Feature đích |
|---|------|-----------------|--------------|
| 1 | Kiểm tra tình trạng kỹ thuật công trình đường bộ | Mặt đường / lề / thoát nước · báo hiệu (vạch, biển, rào, hộ lan, cột Km, cọc tiêu) · cầu / hầm / cống | `patrol` entry + `incident` + `asset` (loại TS) |
| 2 | Vi phạm bảo vệ công trình + HLATĐB | Lấn chiếm lòng/lề · san lấp / đường nhánh trái phép · nhà/lều/công trình trong hành lang | `incident` · sổ 6 · `rpt-vi-pham-hlatdb` |
| 3 | Trật tự ATGT | Ùn tắc · điểm đen mới · TNGT + thiệt hại KCHT · công trình đang thi công trên đường khai thác | `incident` · `rpt-tngt` · `rpt-un-tac` · `rpt-giay-phep-thi-cong` |
| 4 | Ghi chép · báo cáo · phối hợp | Sổ nhật ký · báo khẩn điện thoại · biên bản với Thanh tra / chính quyền / tuần kiểm | `rpt-nhat-ky-tuan-duong` · `csdl-so-sach` mẫu 1 · `ops` (P2) |

---

## 3. Ba trụ cột Web-App (đề cương §II.3)

| Trụ | Việc | Map RMMS |
|-----|------|----------|
| **A. Luồng báo cáo sau ca** | Kết ca → tổng hợp điểm + ảnh + GPS → gửi duyệt online | `patrol` session + `supervise` · **Giao việc** → `platform-task` |
| **B. Bộ lọc & phân loại tính chất** | Cấp bách vs kế hoạch năm · màu ưu tiên | `incident` severity + dashboard KPI — **chưa** field riêng trên list pack Signed |
| **C. Tự động lập Báo cáo tháng** | Quét sổ ~ngày 20–25 · Excel/PDF/Word mẫu Cục | `rpt-tuan-duong` · `rpt-nhat-ky-tuan-duong` Kind E |

---

## 4. Quy trình chuẩn (field → quản lý → Cục)

```
[NV tuần đường · ca]
  GPS + ảnh watermark · form dropdown (cấm free-text tối đa)
  offline queue khi mất sóng → auto sync
        │  Kết ca
        ▼
[Báo cáo ca · TT 04 PL01] ──notify──► [Lãnh đạo BDTX]
                                         duyệt / yêu cầu kiểm lại / chỉ đạo khẩn
                                         chữ ký số / OTP (P2)
        │
        ▼
[Cán bộ tuần kiểm]  đối soát nhật ký theo chu kỳ nghiệm thu tháng
        │
        ▼
[Platform.Task]  Giao việc Cấp bách / kế hoạch năm · chat · comment · SLA
        ▼
[VP QLĐB → Khu → Cục]  map GIS + dashboard RHI / heatmap · BC ngày/tuần/tháng
```

**RBAC đề cương** (khớp cây [`20-ORG-STRUCTURE-DRVN.md`](20-ORG-STRUCTURE-DRVN.md)):

| Cấp | Việc |
|-----|------|
| Doanh nghiệp BDTX | Nhập nhật ký · phạm vi đoạn HĐ |
| Văn phòng QLĐB | Duyệt · giám sát sửa chữa · kiểm nhật ký đơn vị |
| Khu QLĐB I–IV | Tổng hợp / map mọi QL + CT thuộc Khu |
| Cục ĐBVN | Toàn quốc · cảnh báo trọng điểm |

Nhà thầu BDTX **không** nằm trên cây DRVN — catalog `partner-unit`.

---

## 5. Bản ghi ca + điểm hiện trường (field contract)

Không endpoint mới. Bind vào entity đã có khi SA chốt.

### 5.1 Thông tin chung ca

| Field đề cương | Ghi chú | Bind hiện có |
|----------------|---------|--------------|
| Người thực hiện | Từ tài khoản login | JWT / session staff |
| Tuyến + đoạn Km từ–đến | SearchInput `road-route` | `PatrolSession` · `road-route` |
| Giờ bắt đầu / kết thúc | UTC store · local input | session times |
| Thời tiết | Dropdown (nắng / mưa / sương…) | **GAP-TD-WEATHER-01** |
| Thủy văn | Mực nước tại vị trí có thước (bến cạn, trụ cầu mùa lũ) | **GAP-TD-HYDRO-01** |

### 5.2 Điểm ghi nhận

| Field đề cương | Ghi chú |
|----------------|---------|
| Lý trình Km + m | Auto từ GPS → LRS (backend/GIS) — `GAP-TD-LRS-01` |
| Vị trí tương đối | Trái / Phải / Giữa / Hành lang / Mố |
| Nhóm đối tượng | Hư hỏng KCHT · Vi phạm HLATĐB · TNGT/sự cố |
| Mô tả kích thước | Diện tích · dài/rộng/sâu · mức độ |
| Ảnh | Chụp in-app · watermark GPS + lý trình + thời gian · nén trước upload |
| Xử lý tại chỗ | Đã dọn / đặt biển / lập biên bản / … |

**Ưu tiên màu (đề cương §3 + §7):**

| Màu | Ý | Ví dụ |
|-----|---|--------|
| Đỏ | Khẩn | Sạt cắt đường · ngập sâu · hư kết cấu cầu/hầm · ổ gà sâu nguy hiểm ATGT |
| Cam | Trọng điểm | Hư nặng quá hạn HĐ · vi phạm hành lang phức tạp |
| Vàng | Trong tuần/tháng | Nứt rộng · thoát nước tắc · biển mờ/hỏng |
| Xanh | Đã xử lý | Sửa xong / đã giải tỏa |

**Hai nhóm phân loại (§10):**

| Nhóm | Hành động |
|------|-----------|
| **Cấp bách** | Xử trong ca hoặc 24–48h · nguồn BDTX hoặc PCTT&TKCN |
| **Kế hoạch năm** | Đưa đề xuất duy tu năm · số liệu lập dự toán / thiết kế |

---

## 6. Đường bộ — RADS / LRS / GIS (đề cương §6)

| Yêu cầu đề cương | SSOT RMMS | Ghi chú |
|------------------|-----------|---------|
| Unique Asset ID tuyến + đoạn HĐ | `road-route.code` · `asset` | Không invent id mới |
| VN-2000 ↔ WGS-84 | [`map-service.md`](features/map-service.md) — SRID 4326 runtime | Transform VN-2000 khi nộp hồ sơ |
| LRS `RouteID + Km + m` | **GAP-TD-LRS-01** · `patrol-pin` toast lý trình P1 | Snap GPS → lý trình = BE/GIS P2 |
| Lớp GIS: Khu I–IV · QL trực tiếp · cao tốc · BOT/PPP | `org-unit` · `partner-unit` · `gis` | Layer toggle Kind F |
| Heatmap / cluster điểm hư | `gis` heatmap stub · `dashboard` | Tile + cluster quốc gia = P2 |

---

## 7. Map slug đầy đủ

| Đề cương | Slug | Kind / pack | Ghi chú |
|----------|------|-------------|--------|
| App hiện trường + offline | `patrol-home` · `patrol-map` · `patrol-pin` | Mobile Signed | Native Linm — xem GAP-TD-CHANNEL-01 |
| List ca web | `patrol` | Kind B Signed · `/td-tk` | `api/v1/td-tk/sessions` live |
| Giám sát | `supervise` | Mobile list | Check-in logs |
| Nhật ký sổ 1 | `csdl-so-sach` + `rpt-nhat-ky-tuan-duong` | Hub + Kind E | `11-CSDL` `POST /api/v1/patrol-logs/*` = outline |
| BC tuần đường | `rpt-tuan-duong` | Kind E | Filter kỳ · Xem · export — **cấm** CRUD |
| Sự cố / hư hỏng | `incident` | Kind B `/su-co` | Multi-source gồm tuần tra |
| Tuyến | `road-route` | Master Kind B | `/mas/tuyen-duong` |
| Tổ chức | `org-unit` | Master | Cây DRVN 60 nodes |
| TS đường bộ | `asset` · `pavement-section` | Kind B | Nền KCHT cho nhóm nhiệm vụ 1 |
| Bản đồ | `gis` · `map-service` | Kind F | Cluster / tile P2 |
| Công việc sau ca | `platform-task` | Platform demo | [`25`](25-PLATFORM-TASK.md) · chat [`26`](26-MESSAGE-PARCEL.md) · `Linm.Platform.TaskService` (chưa repo) |
| Camera xe tuần | `ai-asset-detect` · `camera-connect` | P1/P2 | Ngoài phạm vi đề cương giấy — giữ overlay |
| Tích hợp RAMS / CSDL cầu / ITS | `integration` · `its-*` | P2 | Đề cương §8 API — **cấm** bịa path |

---

## 8. Yêu cầu kỹ thuật đề cương (không chốt schema)

| § | Yêu cầu | Xử lý Linm |
|---|---------|------------|
| II.1 | Điện thoại · ảnh · GPS · biểu đồ/bản đồ | Mobile kit + MFE map OMS |
| II.4 | **Web-App trình duyệt** — không App Store / Play | **GAP-TD-CHANNEL-01** — Linm đã có native iOS/Android Signed; giữ native + web; đề cương = hợp đồng field |
| II.5 / §13–15 | Backup 3-2-1 · RPO ≤15 phút · RTO 2h mobile / 4h báo cáo quốc gia | Infra P2 — không ghi vào feature API |
| §1 | Offline IndexedDB + auto sync | Native offline queue P1 · web IndexedDB = P2 |
| §1b | Geotag + timestamp + nén ảnh | FileService / EXIF — `/integrate-file-upload-*` |
| §8 | Chữ ký số · immutable sau duyệt · audit | P2 · hash SHA-256 đề cương §14 |
| §14 | Export JSON/CSV/GeoJSON/KML/SHP · ảnh gốc EXIF | Export report P2 · **cấm** invent `/export` mới trên pack Signed |
| §17 | `schema_version` · JSONB dynamic form · Admin form builder | **GAP-TD-SCHEMA-01** — SA; **cấm** hard-code form nếu chọn dynamic |
| §16 | SLA 2–4h / 12–24h · Prometheus/Grafana/Sentry | Ops — ngoài feature slug |

---

## 9. Gaps (mở — SA/PO)

| ID | Nội dung | Default |
|----|----------|---------|
| GAP-TD-CHANNEL-01 | Đề cương cấm native store; Linm đã ship native patrol | Giữ dual channel: native field + MFE web quản lý |
| GAP-TD-LRS-01 | GPS → Km+m trên tuyến | P2 BE/GIS; P1 toast lý trình từ session (`patrol-pin`) |
| GAP-TD-WEATHER-01 | Thời tiết / thủy văn trên ca | Lookup dropdown — chưa trên list pack |
| GAP-TD-SHIFT-REPORT-01 | Nút Kết ca → gói PL01 + duyệt online | P2; list pack hiện CRUD session |
| GAP-TD-PRIORITY-01 | Nhãn Cấp bách / Kế hoạch năm + màu | Bind `incident` severity hoặc field SA |
| GAP-TD-MONTHLY-01 | Job ngày 20–25 xuất BC tháng mẫu Cục | Kind E `rpt-tuan-duong` + FileService |
| GAP-TD-SIGN-01 | Chữ ký số / OTP duyệt nhật ký | P2 Auth |
| GAP-TD-SCHEMA-01 | Dynamic form + `schema_version` | SA; không hard-code catalog hư hỏng |
| GAP-TD-HYDRO-01 | Mực nước vị trí thước | P2 · optional trên form ca |
| GAP-F-PAT-01 | Offline conflict merge (đã mở trên `patrol.md`) | Last-write + server review |

---

## 10. Pipeline (không enqueue tuần đường CRUD từ file này)

1. Context lock = file này + `patrol.md` + `road-route.md`.  
2. **Platform first:** scan `implement-status.json` slug `platform-message` rồi `platform-task` — xem [`../plan/platform-task/RMMS-TUAN-DUONG.md`](../plan/platform-task/RMMS-TUAN-DUONG.md).  
3. `/agent-data-analy` `feature_context` @`patrol` (và master `road-route` nếu LRS).  
4. Report leaf: form nguồn `patrol` / `csdl-so-sach` trước — `data-analy-report-source-form`.  
5. Map: `/agent-dev-oms-map` khi màn GIS tuần đường.  
6. **Cấm** `yarn run-implement` MAIN3 cho native; mobile = queue `qlbd-mobile`.  
7. **Cấm** enqueue `rmms-task-integrate` đến khi platform Task+Message xanh.

---

## 11. Cấm

| ❌ | ✅ |
|---|---|
| Invent `api/v1/patrol-home` / `api/v1/tuan-duong-*` | Cite `api/v1/td-tk/sessions` · BFF patrol · `11-CSDL` outline `patrol-logs` |
| Gộp tuần đường + tuần kiểm + HLATĐB vào 1 slug | Sibling table §7 |
| Copy CRUD vào Kind E | `rpt-*` chỉ đọc |
| Sửa STATUS `completed` vì đọc PDF | Pack Signed giữ nguyên; gap = P2/edit_page mới |
| Coi IndexedDB đề cương = bỏ native | GAP-TD-CHANNEL-01 |
