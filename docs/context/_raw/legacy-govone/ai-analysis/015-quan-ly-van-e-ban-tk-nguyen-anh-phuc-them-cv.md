# AI Vision — QUẢN LÝ VẤN ĐỀ › Ban.TK.Nguyễn Anh Phúc › Thêm CV

> Autogen. Agent **phải** mở ảnh + điền mục Analysis. Không chứa password.

| | |
|---|---|
| **id** | `015-quan-ly-van-e-ban-tk-nguyen-anh-phuc-them-cv` |
| **slug** | `incident` |
| **url** | https://pmdb.govone.vn/dbv3baotri.aspx#panelVanDe |
| **screenshot** | `screenshots/015-quan-ly-van-e-ban-tk-nguyen-anh-phuc-them-cv.png` |
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

> Vision reviewed: 2026-08-02 · ai-autocode autopilot · screenshot `015-quan-ly-van-e-ban-tk-nguyen-anh-phuc-them-cv.png`  
> Capture: `form-sample` · via **create** · trigger **Thêm CV** · path `capture/incident/ban-tk-nguyen-anh-phuc/them-cv/`

### Màn hình / mục đích

Màn **QUẢN LÝ VẤN ĐỀ › Ban.TK.Nguyễn Anh Phúc › Thêm CV** — drill **giao / tạo công việc (CV)** gắn vấn đề trên shell Ban.TK (`dbv3baotri.aspx#panelVanDe`) · app GOVOne gServer 2.1.  
Upstream: Ban.TK list view (`012`/`013`/`015-ban-tk`) → chọn 1 VĐ → toolbar **Thêm CV**. Twin capture: `014-them-cv`.  
**Mục đích:** (1) tạo **Assignment / công việc** từ bản ghi VĐ đã chọn · (2) modal/form trên nền list+map Ban.TK · (3) submit giao việc · (4) đối chiếu vị trí map · (5) shell auth + basemap parity.  
API demo: `POST /api/v1/incidents/{id}/assign` (feature `incident.md` · Design «Giao việc | Modal | Form CV»).

**Ảnh viewport:** modal trắng lớn (viền xanh nhạt · icon collapse TL) **che gần hết** list trái — body form **không paint** trên PNG (capture timing, giống twin `014-them` / `014-them-cv`) · nền map phải lộ (QL.217 · Quan Sơn · Quan Hóa · Ngọc Lặc · Vĩnh Lộc · …) · header user **Ban.TK.Nguyễn Anh Phúc** · footer list **0/0/0** · **Trang 0 của 0** · **Không có bản ghi**.  
**DOM/`bodySample` (SSOT khi ảnh blank):** title **Cập nhật thông tin vấn đề** · tab **Thông tin vấn đề** · fields `Đoạn đường(*)` · `Loại vấn đề(*)` · `Trạng thái(*)` · `Ngày yêu cầu(*)` · + Lý trình · **Lấy vị trí** · Thời tiết · Vị trí · khối lượng · Mô tả · Gửi tới · **Tải ảnh lên** · Đơn vị BĐTX / chỉ đạo / Tuần kiểm · footer **Ghi lại** · **Đóng**.  
> Ghi chú capture: empty list → **Thêm CV** thường **disabled**; form-sample trigger `Thêm CV` vẫn lấy được panel form trong DOM (có thể overlap form VĐ / panel Công việc). Demo MFE map theo **intent assign/giao CV**, không clone ExtJS blank modal.

Kind: **B (form modal) trên F/custom map shell** → demo `/erp-form-context` Pattern B/C + MapPane + UserMenu — **không** clone GOVOne.  
Domain: Incident **assign** · ≠ Create VĐ thuần (`014-them` / `013-them`) · ≠ GIS geditor · ≠ chỉ Đổi MK.

### Vùng UI (layout zones)

| Zone | Mô tả | Controls thấy trên ảnh |
|------|-------|------------------------|
| **Z1 Header / app bar** | Thanh xanh full-width | Bell · avatar + **Ban.TK.Nguyễn Anh Phúc** (menu đóng) · (DOM: logo · hamburger · title **Vấn đề**) |
| **Z1b User dropdown (DOM)** | Menu user — không mở trên ảnh | **Hồ sơ của tôi** · **Đổi mật khẩu** · **Đăng xuất** |
| **Z2 Sidebar (DOM / bodySample)** | Nav module — bị modal che | **Vấn đề** (active) · **Công việc** · **Công tác nghiệm thu** · **Kiểm tra** · **Lịch sử bảo trì** · **Tổng hợp vấn đề** · **Gửi thông báo** |
| **Z3 Parent toolbar (DOM — dưới modal)** | Toolbar list Ban.TK | **Thêm** · **Thêm CV** (trigger · thường disabled empty) · **Xem CV** · **Xem** · **Xuất dữ liệu** · **Xóa** · **Phản hồi** · **BC sở** · filter **Tìm mới**/**Tìm kiếm** |
| **Z4 List footer (ảnh)** | Status + pager dưới modal | 3 ô đếm **0** (xanh / nâu / đỏ) · pager `<<` `<` **Trang 0 của 0** `>` `>>` · empty **Không có bản ghi** |
| **Z5 Map canvas (ảnh — nền phải)** | Bản đồ tuyến lộ | Polyline xanh · nhãn QL.217 · địa danh Quan Sơn / Quan Hóa / Ngọc Lặc / Vĩnh Lộc · vùng Nghệ An–Thanh Hóa |
| **Z6 Map chrome (ảnh)** | Điều khiển map | Zoom **+** / **−** · **Bản đồ nền** → Vệ tinh · Google · Giao thông · Hành chính · Không nền · scale **20 km / 10 mi** |
| **Z7 Assign/Thêm CV modal (ảnh = blank white)** | Form giao CV — paint trắng trên PNG | Viền xanh nhạt · icon collapse TL · **không** thấy label/button trên ảnh |
| **Z7b Form body (DOM / bodySample — SSOT)** | Nội dung panel sau trigger Thêm CV | Title **Cập nhật thông tin vấn đề** · tab **Thông tin vấn đề** · fields (*) + conditional · **Lấy vị trí** · **Tải ảnh lên** · sections Đơn vị BĐTX / chỉ đạo / Tuần kiểm · (parity WO: xem panel **Công việc** sibling) |
| **Z8 Form footer actions (DOM)** | Submit / close / liên quan | **Ghi lại** · **Đóng** · **Đóng vấn đề** · **Công việc** · **Hồ sơ vi phạm** · **Báo cáo sở** |

### Field list (từ ảnh — bổ sung DOM)

> Ảnh: **không lộ field** (modal blank). Bảng = form-sample `them-cv` + `bodySample` + filter shell + WO filters từ panel Công việc (sibling).

| Nhãn VN | Control gợi ý | Bắt buộc? | Ghi chú |
|---------|---------------|-----------|---------|
| Đoạn đường(*) | Select / Combo | **Có** | Form `combo-*` · placeholder Chọn đoạn đường · ≠ filter `doanduong` |
| Loại vấn đề(*) | Select / Combo | **Có** | Điều kiện hiện field phụ theo loại |
| Trạng thái(*) | Select / Combo | **Có** | Trạng thái xử lý VĐ |
| Người yêu cầu | Text | — | |
| Ngày yêu cầu(*) | Date | **Có** | local display / ISO offset lưu |
| Tên tài sản | Text | — | |
| Lý trình | Text + **Lấy vị trí** | — | button **Lấy vị trí** → GPS/map pick |
| Lý trình cuối | Text | — | |
| Thời tiết | Select / Combo | — | |
| Vị trí | Select / Combo | — | |
| Phân loại điểm đen · Gây tắc đường · … | Select / DateTime | — | conditional theo loại VĐ |
| Chiều dài / rộng / cao / sâu · địa chỉ · KL | Number / Text | — | damage / quantity block |
| Mô tả | TextArea | — | |
| Gửi tới | Tag / MultiSelect | — | «No value selected» empty |
| Hướng xử lý · Ý kiến · Dự kiến hoàn thành | Select / TextArea / Date | — | khối Đơn vị BĐTX |
| Người chỉ đạo · Ngày · Ý kiến · Hạn HT | Text / Date / TextArea | — | khối chỉ đạo |
| TT tuần kiểm · Ước tính KL · Đưa vào sổ NK | Select / Text / Checkbox | — | `duaVaoSoTuanKiem` |
| (WO parity — panel Công việc) Loại CV · Nhóm CV · Trạng thái CV · Người giao · Người/PB thực hiện | Select / Tree | — | filter/form giao việc · sibling tab capture |
| (Filter shell nền) Đoạn đường · Loại VĐ · … · Định vị | Combo / Checkbox | — (filter) | `doanduong`…`ckDinhVi` |
| Trang (pager) | Number | — | `inputItem` · ảnh **Trang 0 của 0** |
| Status chips 0/0/0 | Metric chips | — | footer Z4 |
| Ban.TK.Nguyễn Anh Phúc | UserMenu trigger | — | Z1 |
| Bản đồ nền / basemap 5 | Basemap switcher | — | Z6 · +/− = zoom ≠ Create |

**Grid columns (list VĐ dưới modal):** ảnh không lộ (`tableHeaders: []` · empty). Parity khi đóng form: STT · loại VĐ · đoạn đường · mức độ · trạng thái · người ghi · ngày · vị trí — `/erp-form-context` list shell.  
**Grid columns (panel Công việc — sibling parity):** `#` · Loại công việc · Hình ảnh · Tên đoạn · Địa điểm · Người giao việc · Người thực hiện · Phòng ban · Thời gian · Trạng thái · Ngày hoàn thành · Nghiệm thu.

**Form semantics:** **Ghi lại** / giao → `POST /api/v1/incidents/{id}/assign` (mock toast) · **Đóng** → leave-confirm nếu dirty · **Thêm CV** disabled khi chưa chọn VĐ · **Lấy vị trí** → map pick · field (*) validate trước submit.

### Tính năng / hành động

**Primary — Thêm CV / Assign (`015-them-cv` · Ban.TK shell)**
- Upstream: Ban.TK view → chọn VĐ → **Thêm CV** (disabled empty)
- Form/modal: giao công việc gắn VĐ · required fields · conditional theo loại
- Form actions: **Ghi lại** · **Đóng** · **Lấy vị trí** · **Tải ảnh lên** · **Đóng vấn đề** · **Công việc** · **Hồ sơ vi phạm** · **Báo cáo sở**
- Background shell giữ list+map+user menu+basemap (parity view `012`/`013`/`015`)
- Downstream: list/WO refresh · **Xem CV** · panel **Công việc** (Giao việc · Tải lại · Xuất excel · Tổng hợp loại CV)
- ≠ Create VĐ **Thêm** (`013-them`/`014-them`) · ≠ GIS · ≠ chỉ đổi MK
- Demo: same actions · UI modern `/erp-form-context` assign modal + MapPane — **không** clone GOVOne · ảnh blank → bind DOM/`bodySample` + WO filters sibling

**Form footer / toolbar (DOM — không thấy trên ảnh blank)**
- **Ghi lại** → submit assign / save
- **Đóng** → đóng form
- **Lấy vị trí** → pick tọa độ / lý trình từ map
- **Tải ảnh lên** → upload (disabled khi chưa sẵn sàng)
- **Đóng vấn đề** · **Công việc** · **Hồ sơ vi phạm** · **Báo cáo sở**

**Parent shell toolbar (DOM — dưới modal)**
- **Thêm** · **Thêm CV** (trigger) · **Xem CV** / **Xem** (disabled empty) · **Xóa** · **Phản hồi** · **Xuất dữ liệu** · **BC sở**
- Filter: **Tìm mới** · **Tìm kiếm** · **Hủy** / **Áp dụng**

**Panel Công việc (sibling — parity actions)**
- **Tải lại** · **Giao việc** · **Tổng hợp loại CV** · **Tổng hợp theo HD** · **Xuất excel**

**Header / user (ảnh + DOM)**
- Bell · **Ban.TK.Nguyễn Anh Phúc** → **Hồ sơ của tôi** · **Đổi mật khẩu** · **Đăng xuất**

**Map chrome (ảnh + DOM)**
- **+** zoomIn (`#zoomIn` — **≠** Create) · **−** zoomOut · **Bản đồ nền** · Vệ tinh · Google · Giao thông · Hành chính · Không nền · scale 20 km / 10 mi

**Actions bổ sung từ sibling**  
View Ban.TK `012`/`013`/`015` · create **Thêm** `011`/`013-them`/`014-them`/`016`/`017` · twin Thêm CV `014-them-cv` · export menu `incident-actions.md`.

### Map → step context

- Feature: `docs/context/features/incident.md`
- Section: `## Legacy GOVOne (auto-capture)` → capture id `015-quan-ly-van-e-ban-tk-nguyen-anh-phuc-them-cv`
- Control-map: `docs/context/_raw/legacy-govone/demo-maps/incident-control-map.md`
- Actions: `docs/context/_raw/legacy-govone/demo-maps/incident-actions.md`
- Demo: parity UI trong `incident-demo.html` / MFE — same actions (**Thêm CV** · **Xem CV** · **Ghi lại** · **Đóng** · **Lấy vị trí** · **Tải ảnh lên** · **Giao việc** · parent list toolbar · map basemap/zoom · UserMenu), modern `/erp-form-context` assign modal + MapPane (không clone GOVOne · ảnh blank → DOM/`bodySample` SSOT · **+** = zoomIn ≠ Create)
- **DOM / bind:** Assign Pattern B · `POST …/assign` · required Select/Date · Map pick lý trình · toast · leave-confirm · disable Thêm CV khi chưa chọn row
- **Capture path:** `capture/incident/ban-tk-nguyen-anh-phuc/them-cv/` (master/page/action)
- Sibling: Ban.TK view `012`/`013`/`015` · create `011`/`013-them`/`014-them`/`016`/`017` · twin `014-them-cv`

## Status

- [x] Vision reviewed
- [x] Mapped to step context
