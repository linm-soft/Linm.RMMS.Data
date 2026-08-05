# Tuần đường / tuần kiểm — Feature Context

> **Slug:** `patrol` · **Module:** `Patrol` · **Phase:** P1  
> **Status:** Demo  
> **sourceKind:** legacy  
> **Sources:** guide Check-in/Giám sát/Lưu trữ · `RMMS` §4 · `07` §4 · [`15-SCREEN-AI-MAP.md`](../15-SCREEN-AI-MAP.md) · GOVOne capture + demo-maps  
> **Demo HTML:** `Linm.RMMS.Demo/src/demo/patrol/patrol.html` · catalog `slug=patrol` · `/demo/p/patrol`  
> **Kind:** E (report + map) · confirmed by: ai-autocode-autopilot  
> **AI support:** không (AI camera xe tuần đường → `ai-asset-detect`; chấm công rule → `attendance`)

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | Kế hoạch/tuyến tuần tra · Check-in ≥3 điểm/ngày/tuyến · GPS track · coverage · KPI · phát hiện bỏ sót |
| Persona | Tuần đường · Hạt trưởng giám sát |
| App hiện có | Mobile **Check-in** · **Giám sát** · **Lưu trữ** · Web **Giám sát hoạt động** · **BC checkin** — giữ UX |
| DoD | Check-in API · offline-batch · coverage · list+map giám sát |

## 2. Design / UI

| Screen | Pattern | Zones | Map guide |
|--------|---------|-------|-----------|
| Check-in online/offline | Mobile full (giữ) + Web modal create | + điểm · nội dung · sync Lưu trữ | § Check in |
| Giám sát list + lọc | Full List shell | Tuyến · ngày · company · loại NV · tìm · flags export | Mobile Giám sát a · control-map 37 fields |
| Giám sát bản đồ | Full · Leaflet live | Pin check-in · track · basemap switcher | Mobile b · Web hoạt động |
| KPI tuần tra | Card strip | Coverage % · offline · tuần kiểm/đường · tốc độ · điểm | RMMS §4 · Kind E |
| Báo cáo Tuần đường / Tuần kiểm | Collapsible panels + tree | Company→QL→Km · status CI | Dashboard tiles legacy |
| Offline queue | Grid + Sync | Lưu trữ batch mock | Guide Lưu trữ |

**Shell:** Linm modern (erp-form-context Kind E) — **skip** GOVOne chrome (logo/bell/user skin). User menu / theme là mock MFE không clone GOVOne.

## 3. API

| Method | Path |
|--------|------|
| POST | `/api/v1/patrols` |
| POST | `/api/v1/patrols/{id}/check-ins` |
| POST | `/api/v1/patrols/{id}/tracks` |
| GET | `/api/v1/patrols/{id}/coverage` |
| GET | `/api/v1/patrols/{id}/kpi` |
| GET | `/api/v1/patrols?routeId=&from=&to=` |

## 4. Database

| | |
|--|--|
| `patrol.gps_tracks` | TimescaleDB hypertable |
| Coverage | PostGIS `ST_Buffer` / `ST_Difference` |

## 5. Events

`patrol.started` · `patrol.completed`

## 6. Gaps

| ID | Default | Status |
|----|---------|--------|
| GAP-F-PAT-01 Offline conflict merge | Last-write + server review | Open (align) |
| GAP-REC-PAT capture shell shallow | Demo filled check-in/map/queue | Closed 2026-08-02 |

## 7. Demo checklist

- [x] Check-in ≥3 điểm mock rõ
- [x] Offline badge / queue
- [x] Giám sát list + track trên map **Leaflet live**
- [x] Control-map 37 fields · 46 actions (toast/modal)
- [x] Demo HTML: `src/demo/patrol/patrol.html` · redirect `features/patrol-demo.html`
- [x] Catalog `DEMO_FEATURES` · hub · `/dev` → `/demo/p/patrol`
- [x] sourceKind=legacy · no BE

<!-- LEGACY-GOVONE-CAPTURE:START -->
## Legacy GOVOne (auto-capture)

> Auto map từ `tools/legacy-govone-capture` · vision: `_raw/legacy-govone/ai-analysis/`.
> Dùng làm **step context** cho `/qlbd-analy-demo` · `yarn scan-qlbd-demo`.

### Nguồn

- Raw feature: `docs/context/_raw/legacy-govone/features/patrol.md`
- Vision packets: 17

### AI Vision summaries

- [`004-quan-ly-giam-sat`](../_raw/legacy-govone/ai-analysis/004-quan-ly-giam-sat.md) — QUẢN LÝ GIÁM SÁT
- [`005-quan-ly-giam-sat`](../_raw/legacy-govone/ai-analysis/005-quan-ly-giam-sat.md) — QUẢN LÝ GIÁM SÁT
- [`006-quan-ly-giam-sat-ban-tk-nguyen-anh-phuc`](../_raw/legacy-govone/ai-analysis/006-quan-ly-giam-sat-ban-tk-nguyen-anh-phuc.md) — QUẢN LÝ GIÁM SÁT › Ban.TK.Nguyễn Anh Phúc
- [`007-quan-ly-giam-sat-ban-tk-nguyen-anh-phuc`](../_raw/legacy-govone/ai-analysis/007-quan-ly-giam-sat-ban-tk-nguyen-anh-phuc.md) — QUẢN LÝ GIÁM SÁT › Ban.TK.Nguyễn Anh Phúc › +
- [`007-quan-ly-giam-sat-xuat-excel`](../_raw/legacy-govone/ai-analysis/007-quan-ly-giam-sat-xuat-excel.md) — QUẢN LÝ GIÁM SÁT › Xuất excel
- [`008-quan-ly-giam-sat-tai-lai`](../_raw/legacy-govone/ai-analysis/008-quan-ly-giam-sat-tai-lai.md) — QUẢN LÝ GIÁM SÁT › Tải lại
- [`008-quan-ly-giam-sat-xuat-excel`](../_raw/legacy-govone/ai-analysis/008-quan-ly-giam-sat-xuat-excel.md) — QUẢN LÝ GIÁM SÁT › Xuất excel
- [`009-quan-ly-giam-sat-oi-mat-khau`](../_raw/legacy-govone/ai-analysis/009-quan-ly-giam-sat-oi-mat-khau.md) — QUẢN LÝ GIÁM SÁT › Đổi mật khẩu
- [`009-quan-ly-giam-sat-xuat-excel`](../_raw/legacy-govone/ai-analysis/009-quan-ly-giam-sat-xuat-excel.md) — QUẢN LÝ GIÁM SÁT › Xuất excel › +
- [`010-quan-ly-giam-sat-tai-lai`](../_raw/legacy-govone/ai-analysis/010-quan-ly-giam-sat-tai-lai.md) — QUẢN LÝ GIÁM SÁT › Tải lại
- [`011-quan-ly-giam-sat-tai-lai`](../_raw/legacy-govone/ai-analysis/011-quan-ly-giam-sat-tai-lai.md) — QUẢN LÝ GIÁM SÁT › Tải lại › +
- [`016-sua-chua-inh-ky-tuan-kiem`](../_raw/legacy-govone/ai-analysis/016-sua-chua-inh-ky-tuan-kiem.md) — SỬA CHỮA ĐỊNH KỲ › Tuần kiểm
- [`017-sua-chua-inh-ky-tuan-uong`](../_raw/legacy-govone/ai-analysis/017-sua-chua-inh-ky-tuan-uong.md) — SỬA CHỮA ĐỊNH KỲ › Tuần đường
- [`020-khai-thac-bao-cao-tuan-kiem`](../_raw/legacy-govone/ai-analysis/020-khai-thac-bao-cao-tuan-kiem.md) — KHAI THÁC BÁO CÁO › Tuần kiểm
- [`021-khai-thac-bao-cao-tuan-uong`](../_raw/legacy-govone/ai-analysis/021-khai-thac-bao-cao-tuan-uong.md) — KHAI THÁC BÁO CÁO › Tuần đường
- [`023-khai-thac-bao-cao-tuan-kiem`](../_raw/legacy-govone/ai-analysis/023-khai-thac-bao-cao-tuan-kiem.md) — KHAI THÁC BÁO CÁO › Tuần kiểm
- [`024-khai-thac-bao-cao-tuan-uong`](../_raw/legacy-govone/ai-analysis/024-khai-thac-bao-cao-tuan-uong.md) — KHAI THÁC BÁO CÁO › Tuần đường

### Capture inventory

> Auto-generated by `tools/legacy-govone-capture`. Input cho `/product-analy-demo` · `/qlbd-analy-demo`.
> Source: https://pmdb.govone.vn — **không** chứa password.

## Pages (19)

### QUẢN LÝ GIÁM SÁT

- **id:** `004-quan-ly-giam-sat`
- **url:** https://pmdb.govone.vn/dbv3giamsat.aspx#pnlViTriHienThoi
- **title:** Giám sát - gServer Phiên bản 2.1
- **headings:** Vị trí hiện thời · Vệ tinh · Google · Giao thông · Hành chính · Không nền · Bản đồ nền · Bản đồ nền

#### Labels / field captions

- Danh sách nhân viên
- Chưa checkin: 0
- Tổng số : 0
- Tất cả
- Đoạn đường
- Không có bản ghi nào
- Vị trí hiện thời
- Giám sát nhân viên 2
- Giám sát tuyến đường 2
- Lịch sử checkin 2
- Tổng hợp 2

#### Inputs

| tag | type | name/id | placeholder |
|-----|------|---------|-------------|
| input | text | treepickerex-1025-inputEl | Chọn Công ty/Nhân viên |
| input | text | doanduong | Chọn đoạn đường |
| div | text | Danh sách nhân viên |  |
| div | metric | Chưa checkin | Chưa checkin: 0 |
| div | metric | Tổng số | Tổng số : 0 |
| div | text | Empty state | Không có bản ghi nào |
| button | text | Bản đồ nền |  |
| a | text | Vệ tinh | basemap=satellite |
| a | text | Google | basemap=google |
| a | text | Giao thông | basemap=traffic |
| a | text | Hành chính | basemap=admin |
| a | text | Không nền | basemap=none |

#### Actions / buttons (full)

| label | kind | zone | tag | disabled |
|-------|------|------|-----|----------|
| Ban.TK.Nguyễn Anh Phúc | nav | toolbar | a |  |
| Xuất excel | export | toolbar | a |  |
| Tải lại | nav | toolbar | a |  |
| Vệ tinh | nav | content | a |  |
| Google | nav | content | a |  |
| Giao thông | nav | content | a |  |
| Hành chính | nav | content | a |  |
| Không nền | nav | content | a |  |
| Bản đồ nền | nav | content | a |  |
| + | create | content | a |  |
| − | nav | content | a |  |
| Giám sát nhân viên 2 | nav | sidebar | a |  |
| Giám sát tuyến đường 2 | nav | sidebar | a |  |
| Lịch sử checkin 2 | nav | sidebar | a |  |
| Tổng hợp 2 | nav | sidebar | a |  |
| Thu/mở panel list | action | content | button |  |

- **actionCount:** 16

### SỬA CHỮA ĐỊNH KỲ › Tuần kiểm

- **id:** `004-sua-chua-inh-ky-tuan-kiem`
- **capture:** `capture/maintenance/tuan-kiem/view/` (master/page/action)
- **url:** https://pmdb.govone.vn/DuongBo/dashboard
- **title:** GOVONE - TỔNG HỢP CÔNG TÁC QUẢN LÝ VÀ BẢO DƯỠNG THƯỜNG XUYÊN
- **headings:** TỔNG HỢP CÔNG TÁC QUẢN LÝ VÀ BẢO DƯỠNG THƯỜNG XUYÊN · TỔNG HỢP CÔNG TÁC QUẢN LÝ VÀ BẢO DƯỠNG THƯỜNG XUYÊN · LIÊN KẾT TRUY CẬP NHANH · THIẾT LẬP CỠ CHỮ

#### Actions / buttons (full)

| label | kind | zone | tag | disabled |
|-------|------|------|-----|----------|
| dropdown trigger | action | header | div |  |
| Báo cáo tổng hợp | nav | footer | a |  |
| Phân quyền | nav | footer | a |  |
| Bản đồ | nav | footer | a |  |
| Vấn đề | nav | footer | a |  |
| Giám sát | nav | footer | a |  |
| Hồ sơ | nav | footer | a |  |
| govone.vn | nav | header | a |  |
| youtube | nav | header | a |  |
| facebook | nav | header | a |  |
| Thiết lập cỡ chữ | nav | header | a |  |
| Giao diện sáng | action | header | div |  |
| Giao diện tối | action | header | div |  |
| Ban.TK.Nguyễn Anh Phúc nguyenanhphuc.dbna@cloudgis.vn | action | header | div |  |
| Thông tin của tôi | export | header | div |  |
| Thông tin của tôi | export | header | a |  |
| Đổi mật khẩu | action | header | div |  |
| Đổi mật khẩu | nav | header | a |  |
| Đăng xuất | export | header | div |  |
| Đăng xuất | export | header | a |  |
| CÔNG TÁC TUẦN ĐƯỜNG | action | header | button |  |
| CÔNG TÁC TUẦN KIỂM | action | header | button |  |
| CÔNG VIỆC | action | header | button |  |
| Đóng | close | header | button |  |

- **actionCount:** 24

### QUẢN LÝ GIÁM SÁT

- **id:** `005-quan-ly-giam-sat`
- **capture:** `capture/patrol/root/view/` (master/page/action)
- **url:** https://pmdb.govone.vn/dbv3giamsat.aspx#pnlViTriHienThoi
- **title:** Giám sát - gServer Phiên bản 2.1
- **headings:** Vị trí hiện thời · Vệ tinh · Google · Giao thông · Hành chính · Không nền · Bản đồ nền · Bản đồ nền

#### Labels / field captions

- Danh sách nhân viên
- Chưa checkin: 0
- Tổng số : 0

#### Inputs

| tag | type | name/id | placeholder |
|-----|------|---------|-------------|
| input | text | treepickerex-1025-inputEl | Chọn Công ty/Nhân viên |
| input | text | doanduong | Chọn đoạn đường |

#### Actions / buttons (full)

| label | kind | zone | tag | disabled |
|-------|------|------|-----|----------|
| Ban.TK.Nguyễn Anh Phúc | nav | toolbar | a |  |
| Xuất excel | export | toolbar | a |  |
| Tải lại | nav | toolbar | a |  |
| Vệ tinh | nav | content | a |  |
| Google | nav | content | a |  |
| Giao thông | nav | content | a |  |
| Hành chính | nav | content | a |  |
| Không nền | nav | content | a |  |
| Bản đồ nền | nav | content | a |  |
| + | create | content | a |  |
| − | nav | content | a |  |

- **actionCount:** 11

### SỬA CHỮA ĐỊNH KỲ › Tuần đường

- **id:** `005-sua-chua-inh-ky-tuan-uong`
- **capture:** `capture/maintenance/tuan-uong/view/` (master/page/action)
- **url:** https://pmdb.govone.vn/DuongBo/dashboard
- **title:** GOVONE - TỔNG HỢP CÔNG TÁC QUẢN LÝ VÀ BẢO DƯỠNG THƯỜNG XUYÊN
- **headings:** TỔNG HỢP CÔNG TÁC QUẢN LÝ VÀ BẢO DƯỠNG THƯỜNG XUYÊN · TỔNG HỢP CÔNG TÁC QUẢN LÝ VÀ BẢO DƯỠNG THƯỜNG XUYÊN · LIÊN KẾT TRUY CẬP NHANH · THIẾT LẬP CỠ CHỮ

#### Actions / buttons (full)

| label | kind | zone | tag | disabled |
|-------|------|------|-----|----------|
| dropdown trigger | action | header | div |  |
| Báo cáo tổng hợp | nav | footer | a |  |
| Phân quyền | nav | footer | a |  |
| Bản đồ | nav | footer | a |  |
| Vấn đề | nav | footer | a |  |
| Giám sát | nav | footer | a |  |
| Hồ sơ | nav | footer | a |  |
| govone.vn | nav | header | a |  |
| youtube | nav | header | a |  |
| facebook | nav | header | a |  |
| Thiết lập cỡ chữ | nav | header | a |  |
| Giao diện sáng | action | header | div |  |
| Giao diện tối | action | header | div |  |
| Ban.TK.Nguyễn Anh Phúc nguyen

…_(truncated — xem raw)_

### Step context checklist

- [x] Design demo parity legacy zones
- [x] Control-map fields từ Labels/Inputs/Vision
- [ ] Status Demo → Signed → `/qlbd-align-mfe` (sau Signed — ngoài scope demo_scan)
<!-- LEGACY-GOVONE-CAPTURE:END -->

<!-- DEMO-MFE-MODERN:START -->
## Demo MFE modern (erp-form-context)

> Same fields/actions từ GOVOne · UI chuẩn Linm — **không** clone skin legacy.

- Control-map: [`patrol-control-map.md`](../_raw/legacy-govone/demo-maps/patrol-control-map.md)
- Actions: [`patrol-actions.md`](../_raw/legacy-govone/demo-maps/patrol-actions.md)
- Fields mapped: 37 · Actions: 46
- Kind hint: E (report) — erp-report-context
- Entry: `Linm.RMMS.Demo/src/demo/patrol/patrol.html` · catalog `slug=patrol` · `/demo/p/patrol` · `/dev`

Gen demo: `/qlbd-analy-demo @patrol` — load control-map trên + `/erp-form-context` rules (2a-K · 2g · common controls). Verified 2026-08-02 autopilot task_9a01bce6.
<!-- DEMO-MFE-MODERN:END -->
