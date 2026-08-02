# RECAPTURE-GAPS — menu/action cần re-capture

> Review demo + context + tree `capture/` (2026-08-01 full · **25 leaves** · **4 form-samples**).  
> Schema: AI-AutoCode `product-analy-demo/example/demo-chrome-skip-and-recapture.md`  
> Skip inventory: chrome GOVOne (logo · hamburger · chuông · Ban.TK.user).

Capture tiles đã mở: **BẢN ĐỒ** · **DASHBOAD** · **GIÁM SÁT** · **VẤN ĐỀ** · **PHÂN QUYỀN** · **BÁO CÁO** · **SỔ TÀI SẢN** · **SỬA CHỮA ĐỊNH KỲ** (tile có trong menu, **chưa có** folder `capture/maintenance`).

---

## P0 — GOVOne có tile / menu, capture thiếu hoặc shallow (bắt buộc recapture)

| menuPath | action | slug | missing | demoStub | priority | status | notedAt |
|----------|--------|------|---------|----------|----------|--------|---------|
| SỬA CHỮA ĐỊNH KỲ (`/DuongBo/baotri`) | view root | `maintenance` | master tree trống · FEATURE-MAP 4 page text only · **không** `capture/maintenance/` · form WO create/view | `maintenance/maintenance.html` | P0 | open | 2026-08-02 |
| SỬA CHỮA ĐỊNH KỲ › Tổng hợp bảo trì | view+chart | `maintenance` | inventory · screenshot grid/KPI · chart series | same | P0 | open | 2026-08-02 |
| SỬA CHỮA ĐỊNH KỲ › Thêm / Sửa CV/WO | create · edit | `maintenance` | form-sample fields · tabs | same | P0 | open | 2026-08-02 |
| QUẢN TRỊ PHÂN QUYỀN | view list User/TC | `users` | chỉ capture root+password · **thiếu** grid user · cây tổ chức · form Thêm user · phân tuyến · phân quyền | `integration/users.html` | P0 | open | 2026-08-02 |
| QUẢN TRỊ PHÂN QUYỀN › Thêm user / TC | create | `users` | form-sample 0 | same | P0 | open | 2026-08-02 |
| SỔ TÀI SẢN | view list+map | `asset` | shallow 3 leaf · control-map chỉ tree filter + map chrome · **thiếu** form TS create/edit · grid cột business · import | `asset/asset.html` | P0 | open | 2026-08-02 |
| SỔ TÀI SẢN › Thêm / Sửa TS | create · edit | `asset` | form-sample (hiện 1 leaf nghi miscapture zoom) | same | P0 | open | 2026-08-02 |
| SỔ TÀI SẢN › Lớp dữ liệu · Tuyến đường | tab/layer | `asset` | left-rail chỉ 3 mục map · thiếu layer schema | same | P0 | open | 2026-08-02 |
| Phân loại mặt đường / Biểu 1 (trong SỔ TS hoặc BDTX) | list+form | `pavement-section` | raw **SYN** · không leaf capture · demo synthetic | `asset/pavement-section.html` | P0 | open | 2026-08-02 |
| DASHBOAD | view widgets | `dashboard` | only root · left-rail **rỗng** · KPI labels shallow · **không** demo HTML | *(chưa có demo)* | P0 | open | 2026-08-02 |
| DASHBOAD › drill KPI / link nhanh | click tiles | `dashboard` | form/screens sau click CÔNG TÁC… | — | P0 | open | 2026-08-02 |
| KHAI THÁC BÁO CÁO › left-rail chưa deep | view each | `reports` | captured: Bảng TH nhanh · Tuần kiểm · Tuần đường · BDTX · root · **thiếu** trong rail: Báo cáo tổng hợp · QUẢN LÝ BẢO TRÌ · Tổng hợp BH · Dự án BT · QUẢN LÝ BDTX · Số liệu · Tài liệu · QUẢN TRỊ ỨNG DỤNG · Phân quyền · TÀI SẢN ĐƯỜNG BỘ | `bao-cao/reports.html` | P0 | open | 2026-08-02 |
| KHAI THÁC BÁO CÁO › Xem / filter / Excel | run report | `reports` | form filter field thin (1 field root) · export payload sample | same | P0 | open | 2026-08-02 |
| QUẢN LÝ GIÁM SÁT › check-in / map track | view detail | `patrol` | capture thiên về shell (Xuất excel · Tải lại · ĐMK) · **thiếu** form check-in ≥3 điểm · track map · offline queue UI | `patrol/patrol.html` | P0 | open | 2026-08-02 |
| QUẢN LÝ GIÁM SÁT › list nhân viên + filter tuyến | filter | `patrol` | field inventory 2 (root) | same | P1 | open | 2026-08-02 |
| QUẢN LÝ VẤN ĐỀ › Edit / Xem chi tiết row | edit · view | `incident` | có create khá đủ · **thiếu** open row View/Edit không Thêm · workflow trạng thái | `incident/incident.html` (badge **mock** — demo mỏng) | P0 | open | 2026-08-02 |
| QUẢN LÝ VẤN ĐỀ › tab còn lại (sau Thông tin) | tab-* | `incident` | chỉ tab «Thông tin vấn đề» trong summary | same | P1 | open | 2026-08-02 |
| BẢN ĐỒ CÔNG TRÌNH GT › toolbars vẽ/edit | draw tools | `gis-draw-google` | 2 leaves · **0 form-sample** · thiếu tool Point/Line/Polygon · save layer · attribute form | `gis/gis-draw-live.html` | P0 | open | 2026-08-02 |
| BẢN ĐỒ › tab Lớp / Chú giải / Thuộc tính (GIS viewer) | tab | `gis` | raw **SYN** · demo `gis.html` parity control-map (Leaflet live · 20 actions · Twin P2) — leaf GOVOne tùy chọn | `gis/gis.html` | P1 | closed | 2026-08-02 |

---

## P1 — Demo/context có, nguồn synthetic (không leaf GOVOne) · recapture **nếu** màn tồn tại trên system

> Module product docs / P2–P3 — **không** có `capture/{slug}/`. Chỉ recapture khi tìm được tile/menu tương đương trên GOVOne; nếu không → giữ synthetic, **không** chặn Signed by GOVOne.

| menuPath (expected / product) | action | slug | missing | demoStub | priority | status | notedAt |
|-------------------------------|--------|------|---------|----------|----------|--------|---------|
| *(tìm trên GOVOne nếu có)* Hợp đồng / NS | list+form | `contract` | synthetic only | `contract/contract.html` | P1 | open | 2026-08-02 |
| Vật tư / thiết bị | list+form | `inventory` | synthetic | `contract/inventory.html` | P1 | open | 2026-08-02 |
| Drone / Reality | list | `drone` | synthetic | `drone/drone.html` | P2 | open | 2026-08-02 |
| Trung tâm ĐH GT / VMS | list | `toc` | synthetic | `toc/toc.html` | P2 | open | 2026-08-02 |
| Chỉ đạo / Inbox | list | `ops` | synthetic (≠ giamsat) | `ops/ops.html` | P1 | open | 2026-08-02 |
| Cổng người dân | form | `citizen` | synthetic · ≠ feedback | `integration/citizen.html` | P2 | open | 2026-08-02 |
| Góp ý phần mềm | form | `feedback` | synthetic | `integration/feedback.html` | P2 | open | 2026-08-02 |
| Open API / Integration | hub | `integration` | synthetic | `integration/integration.html` | P2 | open | 2026-08-02 |
| AI estimate / predict / vision | mock | `estimate`·`predict`·`ai-*` | **product AI** — không GOVOne UI | `ai-vision/*` | P2 | wontfix* | 2026-08-02 |

\*wontfix GOVOne — recapture N/A; enrich từ docs product, không crawl legacy skin.

---

## P1 — Context có, **chưa** demo HTML

| menuPath / slug | action | slug | missing | demoStub | priority | status | notedAt |
|-----------------|--------|------|---------|----------|----------|--------|---------|
| dashboard | — | `dashboard` | no demo · shallow capture | — | P0 | open | 2026-08-02 |
| attendance (chấm công) | — | `attendance` | demo HTML done · control-map synthetic | `patrol/attendance.html` | P1 | closed | 2026-08-02 |
| copilot | — | `copilot` | demo HTML done · synthetic product AI (no GOVOne) | `copilot/copilot.html` | P2 | closed | 2026-08-02 |
| csdl-so-sach (12 biểu+8 sổ) | multi | multi | doc context · **không** capture leaf từng biểu | — | P1 | open | 2026-08-02 |

---

## Đủ tạm (recapture optional · polish)

| slug | GOVOne | demo | Note |
|------|--------|------|------|
| `incident` | create form mạnh | mock demo | **Regen demo full** từ control-map + recapture View/Edit |
| `patrol` | partial | run | Recapture check-in map (P0) rồi polish |
| `reports` | 5/14 rail | run | Deep remaining rail (P0) |
| `gis-draw-google` | 2 leaves | live leaflet | Form tools |
| `users` | password only | run | List/form user P0 |

---

## Cách chạy recapture

### CI (whole crawl)

`Linm.RMMS.Data` → Actions → **`legacy-govone-capture`** → Run  
→ artifact → copy `_raw/legacy-govone/` → `npm run map:context && npm run map:demo`

### Local deep (ưu tiên gap P0)

```bash
cd D:/AI-QLBD/Linm.RMMS.Data/tools/legacy-govone-capture
# .env.local: GOVONE_USER / GOVONE_PASS
npm run pipeline:deep
# hoặc full (+ vision screenshots)
npm run pipeline:full
npm run map:context && npm run map:demo
```

### Ưu tiên thứ tự click (system demo)

1. **SỬA CHỮA ĐỊNH KỲ** — root · tổng hợp · Thêm WO  
2. **QUẢN TRỊ PHÂN QUYỀN** — list user/TC · Thêm · phân tuyến (**không** chỉ Đổi MK)  
3. **SỔ TÀI SẢN** — grid TS · Thêm/Sửa · layers · **Biểu 1 / mặt đường** nếu có menu  
4. **DASHBOAD** — toàn widget + click link nhanh  
5. **KHAI THÁC BÁO CÁO** — mọi left-rail còn thiếu + Xem/filter  
6. **GIÁM SÁT** — check-in · map track · filter NV  
7. **VẤN ĐỀ** — Xem/Sửa row (không chỉ Thêm)  
8. **BẢN ĐỒ** — tools vẽ + attribute form  

Sau mỗi batch: cập nhật `status=captured` hàng tương ứng · `yarn scan-qlbd-demo` · regen `/qlbd-analy-demo @{slug}`.
