# AI Vision — QUẢN LÝ VẤN ĐỀ › Ban.TK.Nguyễn Anh Phúc › Thêm

> Autogen. Agent **phải** mở ảnh + điền mục Analysis. Không chứa password.

| | |
|---|---|
| **id** | `014-quan-ly-van-e-ban-tk-nguyen-anh-phuc-them` |
| **slug** | `incident` |
| **url** | https://pmdb.govone.vn/dbv3baotri.aspx#panelVanDe |
| **screenshot** | `screenshots/014-quan-ly-van-e-ban-tk-nguyen-anh-phuc-them.png` |
| **DOM fields** | 144 |
| **DOM labels** | 141 |
| **DOM buttons** | 32 |

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
| input | text | combo-1120-inputEl |
| input | text | combo-1121-inputEl |
| input | text | combo-1122-inputEl |
| input | text | textfield-1123-inputEl |
| input | text | datefield-1124-inputEl |
| input | text | textfield-1125-inputEl |
| input | text | textfield-1127-inputEl |
| input | text | textfield-1129-inputEl |
| input | text | combo-1130-inputEl |
| input | text | combo-1131-inputEl |
| input | text | combo-1132-inputEl |
| input | text | combo-1133-inputEl |
| input | text | datefield-1134-inputEl |
| input | text | datefield-1135-inputEl |
| input | text | combo-1136-inputEl |
| input | text | datefield-1137-inputEl |
| input | text | textfield-1138-inputEl |
| input | text | textfield-1139-inputEl |
| input | text | combo-1140-inputEl |
| input | text | combo-1141-inputEl |

## Analysis (AI điền)

> Vision reviewed: 2026-08-02 · ai-autocode autopilot · screenshot `014-quan-ly-van-e-ban-tk-nguyen-anh-phuc-them.png`  
> Capture: `form-sample` · via **create** · trigger **Thêm** · path `capture/incident/ban-tk-nguyen-anh-phuc/them/`

### Màn hình / mục đích

Màn **QUẢN LÝ VẤN ĐỀ › Ban.TK.Nguyễn Anh Phúc › Thêm** — mở form **Create/Thêm vấn đề** trên shell Ban.TK (`dbv3baotri.aspx#panelVanDe`) · app GOVOne gServer 2.1.  
Upstream: Ban.TK view (`012`/`013`) → toolbar **Thêm**. Twin create: `011-root-them` · `013-them` · `016-them` · tab chi tiết `017`.  
**Mục đích:** (1) tạo mới **vấn đề / sự cố** gắn user shell Ban.TK · (2) form modal/slideout trên nền list+map · (3) nhập thông tin VĐ + vị trí map · (4) submit **Ghi lại** / hủy **Đóng** · (5) phụ: **Lấy vị trí** · **Tải ảnh lên** · panel chỉ đạo / tuần kiểm / đóng VĐ / hồ sơ VP / BC sở (DOM form toolbar).

**Ảnh viewport:** modal trắng lớn che gần hết list trái (capture timing — body form **không paint** trên PNG) · nền map phải lộ (QL.48 · DT 544C · Anh Sơn · Quan Sơn · Con Cuông · …) · header user **Ban.TK.Nguyễn Anh Phúc** · footer list **0/0/0** · **Trang 0 của 0** · **Không có bản ghi**. Icon góc TL modal = collapse/chevron panel.  
**DOM/`bodySample` (SSOT form — ưu tiên khi ảnh blank):** title **Cập nhật thông tin vấn đề** · tab **Thông tin vấn đề** · fields bắt buộc `Đoạn đường(*)` · `Loại vấn đề(*)` · `Trạng thái(*)` · `Ngày yêu cầu(*)` · + Lý trình · Lấy vị trí · Thời tiết · Vị trí · kích thước · Địa chỉ · Khối lượng · Đơn vị tính · Số vị trí · Mô tả · Gửi tới · Tải ảnh lên · Đơn vị BĐTX · Hướng xử lý · Ý kiến · Dự kiến hoàn thành · khối Tuần kiểm / chỉ đạo · footer form **Ghi lại** · **Đóng**.

Kind: **B (form modal/slideout) trên F/custom map shell** → demo MFE `/erp-form-context` Pattern B/C + MapPane + UserMenu — **không** clone ExtJS GOVOne.  
Domain: Incident create · `POST /api/v1/incidents` · map pin + lý trình.

### Vùng UI (layout zones)

| Zone | Mô tả | Controls thấy trên ảnh |
|------|-------|------------------------|
| **Z1 Header / app bar** | Thanh xanh full-width | Bell · avatar + **Ban.TK.Nguyễn Anh Phúc** (menu đóng) · (DOM: logo GOVOne · hamburger · title **Vấn đề**) |
| **Z1b User dropdown (DOM)** | Menu user — không mở trên ảnh | **Hồ sơ của tôi** · **Đổi mật khẩu** · **Đăng xuất** |
| **Z2 Sidebar (DOM / bodySample)** | Nav module — bị modal che trên ảnh | **Vấn đề** (active) · **Công việc** · **Công tác nghiệm thu** · **Kiểm tra** · **Lịch sử bảo trì** · **Tổng hợp vấn đề** · **Gửi thông báo** |
| **Z3 Parent toolbar (DOM — dưới modal)** | Toolbar list Ban.TK | **Thêm** · **Thêm CV** (disabled) · **Xem CV** · **Xem** · **Xuất dữ liệu** · **Xóa** · **Phản hồi** · **BC sở** · filter **Tìm mới**/**Tìm kiếm** |
| **Z4 List footer (ảnh)** | Status + pager dưới modal | 3 ô đếm **0** (xanh / nâu / đỏ) · pager `<<` `<` **Trang 0 của 0** `>` `>>` · refresh · empty **Không có bản ghi** |
| **Z5 Map canvas (ảnh — nền phải)** | Bản đồ tuyến lộ | Polyline xanh · nhãn QL.48 / DT 544C · địa danh Quan Sơn / Anh Sơn / Con Cuông · vùng Nghệ An–Thanh Hóa |
| **Z6 Map chrome (ảnh)** | Điều khiển map | Zoom **+** / **−** · **Bản đồ nền** → Vệ tinh · Google · Giao thông · Hành chính · Không nền · scale **20 km / 10 mi** |
| **Z7 Create modal (ảnh = blank white)** | Form Thêm VĐ — paint trắng trên PNG | Viền xanh nhạt · icon collapse TL · **không** thấy label/button trên ảnh |
| **Z7b Form body (DOM / bodySample — SSOT)** | Nội dung form Create | Title **Cập nhật thông tin vấn đề** · tab **Thông tin vấn đề** · fields (*) + conditional theo loại VĐ · **Lấy vị trí** · **Tải ảnh lên** (disabled empty) · sections Đơn vị BĐTX / chỉ đạo / Tuần kiểm |
| **Z8 Form footer actions (DOM)** | Submit / close form | **Ghi lại** (submit) · **Đóng** · **Đóng vấn đề** · **Công việc** · **Hồ sơ vi phạm** · **Báo cáo sở** |

### Field list (từ ảnh — bổ sung DOM)

> Ảnh: **không lộ field** (modal blank). Bảng dưới = form-sample + `bodySample` + filter shell nền.

| Nhãn VN | Control gợi ý | Bắt buộc? | Ghi chú |
|---------|---------------|-----------|---------|
| Đoạn đường(*) | Select / Combo | **Có** | Form `combo-1120` · placeholder Chọn đoạn đường · ≠ filter `doanduong` |
| Loại vấn đề(*) | Select / Combo | **Có** | Form `combo-1121` · điều kiện hiện field phụ theo loại |
| Trạng thái(*) | Select / Combo | **Có** | Form `combo-1122` · trạng thái xử lý |
| Người yêu cầu | Text | — | `textfield-1123` |
| Ngày yêu cầu(*) | Date | **Có** | `datefield-1124` · local display / ISO offset lưu |
| Tên tài sản | Text | — | `textfield-1125` · placeholder Tên tài sản |
| Lý trình | Text + **Lấy vị trí** | — | `textfield-1127` · button **Lấy vị trí** → GPS/map pick |
| Lý trình cuối | Text | — | `textfield-1129` |
| Thời tiết | Select / Combo | — | `combo-1130` |
| Vị trí | Select / Combo | — | `combo-1131` |
| Phân loại điểm đen | Select | — | `combo-1132` · conditional |
| Gây tắc đường | Select / Combo | — | `combo-1133` |
| Thời gian tắc đường | DateTime | — | `datefield-1134` |
| Thời gian thông đường | DateTime | — | `datefield-1135` |
| Tình trạng thông đường | Select | — | `combo-1136` |
| Thời điểm ngập úng | DateTime | — | `datefield-1137` |
| Sâu ngập / Biện pháp | Text | — | `textfield-1138` · placeholder Biện pháp |
| Bão số (Tên bão) | Text | — | `textfield-1139` |
| Xã | Select | — | `combo-1140` · Tên xã |
| Phân loại hư hỏng | Select | — | `combo-1141` (+ variants theo loại CT) |
| Cống (Sơ bộ hư hỏng) | Text | — | `textfield-1142` |
| Chiều dài / rộng / cao / sâu (m) | Number | — | `numberfield-1143…1146` |
| Xói trôi / bùn tràn… | Text / Number | — | damage metrics conditional |
| Địa chỉ | Text | — | `textfield-1150` · Địa chỉ vi phạm |
| Khối lượng · Đơn vị tính · Số vị trí · Diện tích | Number / Select | — | quantity block · bodySample |
| Mô tả | TextArea | — | form mô tả VĐ |
| Gửi tới | Tag / MultiSelect | — | «No value selected» empty |
| Hướng xử lý · Ý kiến · Dự kiến hoàn thành | Select / TextArea / Date | — | khối Đơn vị BĐTX / chỉ đạo |
| Người chỉ đạo · Ngày chỉ đạo · Ý kiến chỉ đạo · Hạn HT | Text / Date / TextArea | — | khối chỉ đạo |
| TT tuần kiểm · Ước tính KL · Đưa vào sổ NK tuần kiểm | Select / Text / Checkbox | — | `duaVaoSoTuanKiem` |
| TT thanh tra · Ý kiến · Người/Ngày thanh tra | Select / Text / Date | — | khối thanh tra |
| (Filter shell nền) Đoạn đường · Loại VĐ · … · Định vị | Combo / Checkbox | — (filter) | `doanduong`…`ckDinhVi` — list filter, không phải form Create |
| Trang (pager) | Number | — | `inputItem` · ảnh **Trang 0 của 0** |
| Status chips 0/0/0 | Metric chips | — | footer Z4 |
| Ban.TK.Nguyễn Anh Phúc | UserMenu trigger | — | Z1 |
| Bản đồ nền / basemap 5 | Basemap switcher | — | Z6 · +/− = zoom ≠ Create |

**Grid columns:** ảnh không lộ cột (empty + modal che · `tableHeaders: []`). Parity list khi đóng form: STT · loại VĐ · đoạn đường · mức độ · trạng thái · người ghi · ngày · vị trí — `/erp-form-context` list shell.

**Form semantics:** **Ghi lại** → `POST /api/v1/incidents` (mock toast) · **Đóng** → leave-confirm nếu dirty · **Lấy vị trí** → map pick / GPS · field (*) validate trước submit · loại VĐ đổi → hiện/ẩn nhóm field conditional (điểm đen / ngập / TNGT / VP…).

### Tính năng / hành động

**Primary — Create Thêm VĐ (`014-them` · Ban.TK shell)**
- Upstream: Ban.TK view → **Thêm**
- Form modal: **Thông tin vấn đề** · required fields · conditional theo loại
- Form actions: **Ghi lại** · **Đóng** · **Lấy vị trí** · **Tải ảnh lên** · **Đóng vấn đề** · **Công việc** · **Hồ sơ vi phạm** · **Báo cáo sở**
- Background shell giữ list+map+user menu+basemap (parity view `012`/`013`)
- Downstream: list refresh sau save · optional assign CV (`014`/`015` Thêm CV) · tab `017`
- ≠ Thêm CV (work order) · ≠ GIS geditor · ≠ chỉ đổi MK
- Demo: same actions · UI modern `/erp-form-context` form modal + MapPane — **không** clone GOVOne · ảnh blank → bind theo DOM/`bodySample`

**Form footer / toolbar (DOM — không thấy trên ảnh blank)**
- **Ghi lại** → submit create
- **Đóng** → đóng form
- **Lấy vị trí** → pick tọa độ / lý trình từ map
- **Tải ảnh lên** → upload ảnh đính kèm (disabled khi chưa sẵn sàng)
- **Đóng vấn đề** → close-incident flow (thường sau khi đã có bản ghi)
- **Công việc** → panel/WO liên quan
- **Hồ sơ vi phạm** → hồ sơ VP gắn VĐ
- **Báo cáo sở** → BC sở từ form

**Parent shell toolbar (DOM — dưới modal)**
- **Thêm** (trigger đã mở form) · **Thêm CV** / **Xem CV** / **Xem** (disabled empty) · **Xóa** · **Phản hồi** · **Xuất dữ liệu** · **BC sở**
- Filter: **Tìm mới** · **Tìm kiếm** · **Hủy** / **Áp dụng**

**Header / user (ảnh + DOM)**
- Bell · **Ban.TK.Nguyễn Anh Phúc** → **Hồ sơ của tôi** · **Đổi mật khẩu** · **Đăng xuất**

**Map chrome (ảnh + DOM)**
- **+** zoomIn (`#zoomIn` — **≠** Create) · **−** zoomOut · **Bản đồ nền** · Vệ tinh · Google · Giao thông · Hành chính · Không nền · scale 20 km / 10 mi

**Actions bổ sung từ sibling**  
View Ban.TK `012`/`013` · create twins `011`/`013-them`/`016`/`017` · Thêm CV `014`/`015` · export menu `incident-actions.md`.

### Map → step context

- Feature: `docs/context/features/incident.md`
- Section: `## Legacy GOVOne (auto-capture)` → capture id `014-quan-ly-van-e-ban-tk-nguyen-anh-phuc-them`
- Control-map: `docs/context/_raw/legacy-govone/demo-maps/incident-control-map.md`
- Actions: `docs/context/_raw/legacy-govone/demo-maps/incident-actions.md`
- Demo: parity UI trong `incident-demo.html` / MFE — same actions (**Ghi lại** · **Đóng** · **Lấy vị trí** · **Tải ảnh lên** · form fields (*) · map basemap/zoom · UserMenu · parent list toolbar), modern `/erp-form-context` form modal + MapPane (không clone GOVOne · ảnh blank → DOM/`bodySample` SSOT · **+** = zoomIn ≠ Create)
- **DOM / bind:** Create form Pattern B/C · required Select/Date · Map pick lý trình · submit toast · leave-confirm · conditional field groups theo `loaivande`
- **Capture path:** `capture/incident/ban-tk-nguyen-anh-phuc/them/` (master/page/action)
- Sibling: Ban.TK view `012`/`013` · `011`/`013-them`/`016`/`017` create · `014`/`015` Thêm CV

## Status

- [x] Vision reviewed
- [x] Mapped to step context
