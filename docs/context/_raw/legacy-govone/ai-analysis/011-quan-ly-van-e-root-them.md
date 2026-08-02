# AI Vision — QUẢN LÝ VẤN ĐỀ › _root › Thêm

> Autogen. Agent **phải** mở ảnh + điền mục Analysis. Không chứa password.

| | |
|---|---|
| **id** | `011-quan-ly-van-e-root-them` |
| **slug** | `incident` |
| **url** | https://pmdb.govone.vn/dbv3baotri.aspx#panelVanDe |
| **screenshot** | `screenshots/011-quan-ly-van-e-root-them.png` |
| **DOM fields** | 144 |
| **DOM labels** | 141 |
| **DOM buttons** | 42 |

## DOM inventory (đã capture)

### Labels
- Đoạn đường:
- Đoạn đường:
- Loại vấn đề:
- Người ghi VĐ:
- Công ty:
- Tuần đường:
- Trạng thái:
- Trạng thái đọc:
- Tuần kiểm:
- Đơn vị BĐTX:
- Mức độ:
- Hướng xử lý:
- Tài sản:
- TT báo cáo:
- Định vị
- Đoạn đường(*):
- Loại vấn đề(*):
- Trạng thái(*):
- Người yêu cầu:
- Ngày yêu cầu(*):
- Tên tài sản:
- Lý trình:
- Lý trình cuối:
- Thời tiết:
- Vị trí:
- Phân loại điểm đen:
- Gây tắc đường:
- Thời gian tắc đường:
- Thời gian thông đường:
- Tình trạng thông đường:
- Thời điểm ngập úng:
- Sâu ngập trung bình(m):
- Bão số (Tên bão):
- Xã:
- Phân loại hư hỏng:
- Cống (Sơ bộ hư hỏng):
- Chiều dài (m):
- Chiều rộng (m):
- Chiều cao (m):
- Chiều sâu:

### Buttons / actions
- Ban.TK.Nguyễn Anh Phúc
- Tìm mới
- Tìm kiếm
- Thêm
- Thêm CV
- Xem CV
- Xem
- Xóa
- Phản hồi
- Xuất dữ liệu
- BC sở
- Vệ tinh
- Google
- Giao thông
- Hành chính
- Không nền
- Bản đồ nền
- +
- −
- Hủy
- Áp dụng
- Hồ sơ của tôi
- Đổi mật khẩu
- Đăng xuất
- Xuất NKTĐ Tổng hợp
- Xuất NKTĐ Tổng hợp 2
- Xuất NKTĐ Tổng Hợp (ĐTHP)
- Xuất sổ NKTĐ theo vấn đề
- Xuất sổ NK tuần đường
- Xuất NK tuần kiểm
- Xuất tất cả NK Tuần kiểm
- Xuất nhật ký tuần đèn
- Xuất nhật ký tuần đường đô thị
- Xuất bảng tổng hợp
- Lấy vị trí
- Tải ảnh lên
- Đóng vấn đề
- Công việc
- Hồ sơ vi phạm
- Báo cáo sở
- Ghi lại
- Đóng

### Inputs

| tag | type | name/id |
|-----|------|---------|
| input | text | treepickerex-1026-inputEl |
| input | text | doanduong |
| input | text | loaivande |
| input | text | treepickerex-1030-inputEl |
| input | text | congty |
| input | text | tuanduong |
| input | text | trangthaixuly |
| input | text | trangthaidoc |
| input | text | tuankiemchidao |
| input | text | hattruongchidao |
| input | text | mucdonghiemtrong |
| input | text | mota |
| input | text | huongxuly |
| input | text | loaiTaiSan |
| input | text | trangthaibaocao |
| input | text | textfield-1087-inputEl |
| input | text | textfield-1088-inputEl |
| input | text | textfield-1089-inputEl |
| input | checkbox | ckDinhVi |
| input | text | inputItem |
| input | text | combo-1290-inputEl |
| input | text | combo-1291-inputEl |
| input | text | combo-1292-inputEl |
| input | text | textfield-1293-inputEl |
| input | text | datefield-1294-inputEl |
| input | text | textfield-1295-inputEl |
| input | text | textfield-1297-inputEl |
| input | text | textfield-1299-inputEl |
| input | text | combo-1300-inputEl |
| input | text | combo-1301-inputEl |
| input | text | combo-1302-inputEl |
| input | text | combo-1303-inputEl |
| input | text | datefield-1304-inputEl |
| input | text | datefield-1305-inputEl |
| input | text | combo-1306-inputEl |
| input | text | datefield-1307-inputEl |
| input | text | textfield-1308-inputEl |
| input | text | textfield-1309-inputEl |
| input | text | combo-1310-inputEl |
| input | text | combo-1311-inputEl |

## Analysis (AI điền)

> Vision reviewed: 2026-08-02 · ai-autocode autopilot · screenshot `011-quan-ly-van-e-root-them.png`  
> Capture: `form-sample` · via **create** · trigger **Thêm** · path `capture/incident/root/create/`

### Màn hình / mục đích

Màn **QUẢN LÝ VẤN ĐỀ › _root › Thêm** — mở form **Create/Thêm vấn đề** trên shell root (`dbv3baotri.aspx#panelVanDe`) · app GOVOne gServer 2.1.  
Upstream: root view (`005`/`010`/`012`) → toolbar **Thêm**. Twin create: `013-them` · `014-them` · `016-them` · tab chi tiết `017`.  
**Mục đích:** (1) tạo mới **vấn đề / sự cố** · (2) form modal 3 cột trên nền list+map · (3) nhập thông tin VĐ + ảnh + chỉ đạo BĐTX/tuần kiểm · (4) submit **Ghi lại** / hủy **Đóng** · (5) phụ: **Lấy vị trí** · **Tải ảnh lên** · **Đóng vấn đề** · **Công việc** · **Hồ sơ vi phạm** · **Báo cáo sở**.

**Ảnh viewport:** modal trắng lớn **đã paint** title **Cập nhật thông tin vấn đề** · tab **Thông tin vấn đề** · layout 3 cột (trái form chính · giữa vùng ảnh · phải Đơn vị BDTX + Tuần kiểm) · footer form **Ghi lại** · **Đóng** (+ icon toolbar Đóng vấn đề / Công việc / Hồ sơ VP) · nền shell lộ header user **Ban.TK.Nguyễn Anh Phúc** · map scale **20 km / 10 mi** · **Bản đồ nền** · zoom **+** / **−**.  
**bodySample** khớp ảnh: required `Đoạn đường(*)` · `Loại vấn đề(*)` · `Trạng thái(*)` · `Ngày yêu cầu(*)` · Người yêu cầu = Ban.TK.… · Lý trình + **Lấy vị trí** · Thời tiết · Vị trí · Chiều rộng · Địa chỉ · Khối lượng · Đơn vị tính · Số vị trí · Mô tả · Gửi tới · **Tải ảnh lên** · khối BDTX/Tuần kiểm.

Kind: **B (form modal/slideout) trên F/custom map shell** → demo MFE `/erp-form-context` Pattern B/C + MapPane + UserMenu — **không** clone ExtJS GOVOne.  
Domain: Incident create · `POST /api/v1/incidents` · map pin + lý trình · attach ảnh.

### Vùng UI (layout zones)

| Zone | Mô tả | Controls thấy trên ảnh |
|------|-------|------------------------|
| **Z1 Header / app bar** | Thanh xanh full-width (trên modal) | Bell · avatar + **Ban.TK.Nguyễn Anh Phúc** · (DOM: logo GOVOne · hamburger · title **Vấn đề**) |
| **Z1b User dropdown (DOM)** | Menu user — không mở trên ảnh | **Hồ sơ của tôi** · **Đổi mật khẩu** · **Đăng xuất** |
| **Z2 Sidebar (DOM / bodySample)** | Nav module — một phần bị modal che | **Vấn đề** (active) · **Công việc** · **Công tác nghiệm thu** · **Kiểm tra** · **Lịch sử bảo trì** · **Tổng hợp vấn đề** · **Gửi thông báo** |
| **Z3 Parent toolbar (DOM — dưới modal)** | Toolbar list root | **Thêm** · **Thêm CV** (disabled) · **Xem CV** · **Xem** · **Xuất dữ liệu** · **Xóa** · **Phản hồi** · **BC sở** · filter **Tìm mới**/**Tìm kiếm** · export menu NKTĐ… |
| **Z4 List footer (DOM / bodySample)** | Status + pager dưới modal | pager **Trang … của 0** · empty **Không có bản ghi** |
| **Z5 Map chrome (ảnh — mép dưới/phải)** | Điều khiển map nền | Zoom **+** / **−** · **Bản đồ nền** → Vệ tinh · Google · Giao thông · Hành chính · Không nền · scale **20 km / 10 mi** |
| **Z6 Create modal header** | Tiêu đề form | **Cập nhật thông tin vấn đề** · tab **Thông tin vấn đề** · nút đóng/collapse góc |
| **Z7 Form col trái — Thông tin vấn đề** | Fields chính Create | **Đoạn đường(*)** · **Loại vấn đề(*)** · **Trạng thái(*)** (ảnh: **Chưa xử lý**) · **Người yêu cầu** (Ban.TK.Nguyễn Anh Phúc) · **Ngày yêu cầu(*)** · **Lý trình** + **Lấy vị trí** · **Thời tiết** · **Vị trí** · **Chiều rộng (m)** · **Địa chỉ** · **Khối lượng** · **Đơn vị tính** · **Số vị trí** · **Mô tả** · **Gửi tới** |
| **Z8 Form col giữa — Ảnh** | Vùng media | Empty preview · nút xanh **Tải ảnh lên** (DOM `disabled: true` khi chưa sẵn sàng) |
| **Z9 Form col phải A — Đơn vị BDTX** | Panel chỉ đạo BĐTX | **Hướng xử lý** · **Ý kiến** · **Dự kiến hoàn thành** · **Gửi tới** · **Người chỉ đạo** · **Ngày chỉ đạo** (2 field sau disabled/empty) |
| **Z10 Form col phải B — Tuần kiểm** | Panel tuần kiểm | **Ý kiến** · **TT tuần kiểm** · **Ước tính KL** · **Hạn hoàn thành** · **Gửi tới** · checkbox **Đưa vào sổ NK tuần kiểm** · **Người chỉ đạo** · **Ngày chỉ đạo** |
| **Z11 Form footer actions** | Submit / close / phụ | Icon toolbar (**Đóng vấn đề** · **Công việc** · **Hồ sơ vi phạm** · **Báo cáo sở**) · **Ghi lại** · **Đóng** |

### Field list (từ ảnh — bổ sung DOM)

> Ảnh paint đủ cột chính. DOM/`formSample` còn thêm field **conditional** theo loại VĐ (điểm đen / ngập / TNGT / VP…) — không hiện hết trên viewport mặc định.

| Nhãn VN | Control gợi ý | Bắt buộc? | Ghi chú |
|---------|---------------|-----------|---------|
| Đoạn đường(*) | Select / Combo | **Có** | Form `combo-1290` · placeholder **Chọn đoạn đường** · ≠ filter `doanduong` |
| Loại vấn đề(*) | Select / Combo | **Có** | Form `combo-1291` · đổi loại → hiện/ẩn nhóm field phụ |
| Trạng thái(*) | Select / Combo | **Có** | Form `combo-1292` · ảnh default **Chưa xử lý** |
| Người yêu cầu | Text (read-only) | — | Ảnh: **Ban.TK.Nguyễn Anh Phúc** · `textfield-1293` |
| Ngày yêu cầu(*) | Date | **Có** | `datefield-1294` · calendar icon |
| Tên tài sản | Text | — | DOM · không nổi trên viewport mặc định |
| Lý trình | Text + **Lấy vị trí** | — | `textfield-1297` · button **Lấy vị trí** → GPS/map pick |
| Lý trình cuối | Text | — | DOM · conditional/ẩn mặc định |
| Thời tiết | Select / Combo | — | `combo-1300` |
| Vị trí | Select / Combo | — | `combo-1301` |
| Chiều rộng (m) | Number stepper | — | ảnh · numberfield · placeholder **Chiều rộng (m)** |
| Chiều dài / cao / sâu (m) | Number | — | DOM conditional theo loại CT |
| Địa chỉ | Text | — | placeholder **Địa chỉ vi phạm** |
| Khối lượng | Number stepper | — | placeholder **Khối lượng** |
| Đơn vị tính | Select / Combo | — | placeholder **Đơn vị tính** |
| Số vị trí | Number stepper | — | placeholder **Số vị trí** |
| Mô tả | TextArea | — | form mô tả VĐ |
| Gửi tới (thông tin VĐ) | Tag / MultiSelect | — | ảnh/bodySample «No value selected» |
| Phân loại điểm đen · Gây tắc đường · … · TNGT/VP… | Select / Date / Number | — | DOM conditional — hiện khi chọn loại VĐ phù hợp |
| (Ảnh) Tải ảnh lên | Upload button | — | Z8 · DOM disabled empty |
| Hướng xử lý | Select | — | Z9 Đơn vị BDTX · placeholder **Chọn hướng xử lý** |
| Ý kiến (BDTX) | TextArea | — | placeholder **Ý kiến chỉ đạo** |
| Dự kiến hoàn thành | Date | — | placeholder **Ngày dự kiến hoàn thành** |
| Gửi tới (BDTX) | Tag / MultiSelect | — | «No value selected» |
| Người chỉ đạo / Ngày chỉ đạo (BDTX) | Text / Date | — | disabled/empty trên ảnh |
| Ý kiến (Tuần kiểm) | TextArea | — | Z10 |
| TT tuần kiểm | Select | — | placeholder **Chọn trạng thái tuần kiểm** |
| Ước tính KL | Text | — | placeholder **Ước tính khối lượng** |
| Hạn hoàn thành | Date | — | placeholder **Ngày phải hoàn thành** |
| Gửi tới (Tuần kiểm) | Select / Multi | — | Z10 |
| Đưa vào sổ NK tuần kiểm | Checkbox | — | `duaVaoSoTuanKiem` |
| Người chỉ đạo / Ngày chỉ đạo (Tuần kiểm) | Text / Date | — | disabled/empty |
| TT thanh tra · Ý kiến · Người/Ngày thanh tra | Select / Text / Date | — | DOM khối thanh tra — ngoài viewport mặc định |
| (Filter shell nền) Đoạn đường · Loại VĐ · … · Định vị | Combo / Checkbox | — (filter) | `doanduong`…`ckDinhVi` — list filter, không phải form Create |
| Trang (pager) | Number | — | `inputItem` · bodySample **Trang … của 0** |
| Ban.TK.Nguyễn Anh Phúc | UserMenu trigger | — | Z1 |
| Bản đồ nền / basemap 5 | Basemap switcher | — | Z5 · +/− = zoom ≠ Create |

**Grid columns:** ảnh không lộ cột (modal che · `tableHeaders: []`). Parity list khi đóng form: STT · loại VĐ · đoạn đường · mức độ · trạng thái · người ghi · ngày · vị trí — `/erp-form-context` list shell.

**Form semantics:** **Ghi lại** → `POST /api/v1/incidents` (mock toast) · **Đóng** → leave-confirm nếu dirty · **Lấy vị trí** → map pick / GPS · field (*) validate trước submit · loại VĐ đổi → hiện/ẩn nhóm field conditional · **Tải ảnh lên** → attach media · checkbox **Đưa vào sổ NK tuần kiểm** → flag sổ tuần kiểm.

### Tính năng / hành động

**Primary — Create Thêm VĐ (`011-root-them` · root shell)**
- Upstream: root view `005`/`010`/`012` → **Thêm**
- Form modal 3 cột: **Thông tin vấn đề** · media · Đơn vị BDTX · Tuần kiểm · required fields · conditional theo loại
- Form actions: **Ghi lại** · **Đóng** · **Lấy vị trí** · **Tải ảnh lên** · **Đóng vấn đề** · **Công việc** · **Hồ sơ vi phạm** · **Báo cáo sở**
- Background shell giữ list+map+user menu+basemap (parity view `005`/`010`)
- Downstream: list refresh sau save · optional assign CV (`014`/`015` Thêm CV) · tab `017`
- ≠ Thêm CV (work order) · ≠ GIS geditor · ≠ chỉ đổi MK
- Demo: same actions · UI modern `/erp-form-context` form modal + MapPane — **không** clone GOVOne

**Form footer / toolbar (ảnh + DOM)**
- **Ghi lại** → submit create
- **Đóng** → đóng form
- **Lấy vị trí** → pick tọa độ / lý trình từ map
- **Tải ảnh lên** → upload ảnh đính kèm (DOM disabled khi chưa sẵn sàng)
- **Đóng vấn đề** → close-incident flow (thường sau khi đã có bản ghi)
- **Công việc** → panel/WO liên quan
- **Hồ sơ vi phạm** → hồ sơ VP gắn VĐ
- **Báo cáo sở** → BC sở từ form

**Parent shell toolbar (DOM — dưới modal)**
- **Thêm** (trigger đã mở form) · **Thêm CV** / **Xem CV** / **Xem** (disabled empty) · **Xóa** · **Phản hồi** · **Xuất dữ liệu** · **BC sở**
- Filter: **Tìm mới** · **Tìm kiếm** · **Hủy** / **Áp dụng**
- Export menu: Xuất NKTĐ… / sổ NK tuần đường / tuần kiểm / bảng tổng hợp…

**Header / user (ảnh + DOM)**
- Bell · **Ban.TK.Nguyễn Anh Phúc** → **Hồ sơ của tôi** · **Đổi mật khẩu** · **Đăng xuất**

**Map chrome (ảnh + DOM)**
- **+** zoomIn (`#zoomIn` — **≠** Create) · **−** zoomOut · **Bản đồ nền** · Vệ tinh · Google · Giao thông · Hành chính · Không nền · scale 20 km / 10 mi

**Actions bổ sung từ sibling**  
Root view `005`/`010`/`012` · create twins `013`/`014`/`016`/`017` · Thêm CV `014`/`015` · export menu `incident-actions.md`.

### Map → step context

- Feature: `docs/context/features/incident.md`
- Section: `## Legacy GOVOne (auto-capture)` → capture id `011-quan-ly-van-e-root-them`
- Control-map: `docs/context/_raw/legacy-govone/demo-maps/incident-control-map.md`
- Actions: `docs/context/_raw/legacy-govone/demo-maps/incident-actions.md`
- Demo: parity UI trong `incident-demo.html` / MFE — same actions (**Ghi lại** · **Đóng** · **Lấy vị trí** · **Tải ảnh lên** · form fields (*) · BDTX/Tuần kiểm · map basemap/zoom · UserMenu · parent list toolbar), modern `/erp-form-context` form modal + MapPane (không clone GOVOne · **+** = zoomIn ≠ Create)
- **DOM / bind:** Create form Pattern B/C · required Select/Date · Map pick lý trình · upload media · submit toast · leave-confirm · conditional field groups theo `loaivande` · checkbox sổ NK tuần kiểm
- **Capture path:** `capture/incident/root/create/` (master/page/action)
- Sibling: root view `005`/`010`/`012` · `013`/`014`/`016`/`017` create · `014`/`015` Thêm CV

## Status

- [x] Vision reviewed
- [x] Mapped to step context
