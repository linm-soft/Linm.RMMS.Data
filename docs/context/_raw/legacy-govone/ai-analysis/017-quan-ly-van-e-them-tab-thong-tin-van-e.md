# AI Vision — QUẢN LÝ VẤN ĐỀ › Thêm › tab:Thông tin vấn đề

> Autogen. Agent **phải** mở ảnh + điền mục Analysis. Không chứa password.

| | |
|---|---|
| **id** | `017-quan-ly-van-e-them-tab-thong-tin-van-e` |
| **slug** | `incident` |
| **url** | https://pmdb.govone.vn/dbv3baotri.aspx#quanLyCongViec |
| **screenshot** | `screenshots/017-quan-ly-van-e-them-tab-thong-tin-van-e.png` |
| **DOM fields** | 28 |
| **DOM labels** | 15 |
| **DOM buttons** | 39 |

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
- Tải lại
- Giao việc
- Tổng hợp loại CV
- Tổng hợp theo HD
- Xuất excel
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
| input | text | combo-1667-inputEl |
| input | text | combo-1668-inputEl |
| input | text | combo-1669-inputEl |
| input | text | combo-1670-inputEl |
| input | text | combo-1673-inputEl |
| input | text | treepickerex-1674-inputEl |
| input | text | treepickerex-1675-inputEl |
| input | text | inputItem |

## Analysis (AI điền)

> Vision reviewed: 2026-08-02 · ai-autocode autopilot · screenshot `017-quan-ly-van-e-them-tab-thong-tin-van-e.png`  
> Capture: `tab` · via **tab** · pageTitle **Thêm** · path `capture/incident/them/tab-thong-tin-van-e/` · `formSample: null`  
> **Miscapture note:** hash `#quanLyCongViec` · headings **Công việc** · bodySample = list CV — **không** paint tab **Thông tin vấn đề**. SSOT form tab = sibling create `011`/`013`/`014-them`/`016` (title **Cập nhật thông tin vấn đề** · tab **Thông tin vấn đề**).

### Màn hình / mục đích

Màn **QUẢN LÝ VẤN ĐỀ › Thêm › tab:Thông tin vấn đề** — intended focus = **tab chính** của form Create/Thêm vấn đề trên shell `#panelVanDe` · app GOVOne gServer 2.1.  
Upstream: root view (`005`/`010`/`012`) → toolbar **Thêm** (`011`/`013`/`014-them`/`016`) → tab **Thông tin vấn đề**. Twin create cùng tab: `011` (paint đủ) · `013`/`014-them`/`016` (blank modal + DOM SSOT).  
**Mục đích (intended):** (1) nhập thông tin VĐ trên tab **Thông tin vấn đề** · (2) form 3 cột (fields (*) · media · Đơn vị BDTX / Tuần kiểm) · (3) submit **Ghi lại** / hủy **Đóng** · (4) phụ **Lấy vị trí** · **Tải ảnh lên** · **Đóng vấn đề** · **Công việc** · **Hồ sơ vi phạm** · **Báo cáo sở**.

**Ảnh viewport (actual capture):** shell blank trắng · sidebar **Công việc** active (highlight) · header title **Công việc** · user **Ban.TK.Nguyễn Anh Phúc** · logo GOVOne · hamburger · bell · **không** lộ modal Create / tab Thông tin vấn đề / map / grid (content white empty).  
**DOM/`bodySample` (actual — misroute `#quanLyCongViec`):** shell **Công việc** · date range `01/08/2026 - 31/08/2026` · grid headers `# · Loại công việc · Hình ảnh · Tên đoạn · Địa điểm · Người giao việc · Người thực hiện · Phòng ban · Thời gian · Trạng thái · Ngày hoàn thành · Nghiệm thu` · toolbar **Tải lại** · **Giao việc** · **Tổng hợp loại CV** · **Xuất excel** · empty **Không có bản ghi nào** · pager **Trang … của 0** · map scale **10 km / 5 mi**.  
**Sibling SSOT form tab (ưu tiên cho demo parity tab):** title **Cập nhật thông tin vấn đề** · tab **Thông tin vấn đề** · required `Đoạn đường(*)` · `Loại vấn đề(*)` · `Trạng thái(*)` · `Ngày yêu cầu(*)` · + Người yêu cầu · Lý trình · **Lấy vị trí** · Thời tiết · Vị trí · Chiều rộng · Địa chỉ · Khối lượng · Đơn vị tính · Số vị trí · Mô tả · Gửi tới · **Tải ảnh lên** · khối **Đơn vị BDTX** / **Tuần kiểm** · footer form **Ghi lại** · **Đóng** (`011` paint · `016` bodySample).

Kind: **B (form modal tab) trên F/custom map shell** — actual PNG = WO list shell misroute → demo MFE `/erp-form-context` Pattern B/C + MapPane + UserMenu — **không** clone ExtJS GOVOne.  
Domain: Incident create tab · `POST /api/v1/incidents` · map pin + lý trình · attach ảnh · (captured shell = WO list parity sibling `014`/`015` Thêm CV).

### Vùng UI (layout zones)

| Zone | Mô tả | Controls thấy trên ảnh |
|------|-------|------------------------|
| **Z1 Header / app bar** | Thanh xanh full-width | Logo GOVOne · hamburger · title **Công việc** · bell · avatar + **Ban.TK.Nguyễn Anh Phúc** |
| **Z1b User dropdown (DOM)** | Menu user — không mở trên ảnh | **Hồ sơ của tôi** · **Đổi mật khẩu** · **Đăng xuất** |
| **Z2 Sidebar (ảnh)** | Nav module — **Công việc** selected | **Vấn đề** · **Công việc** (active) · **Công tác nghiệm thu** · **Kiểm tra** · **Lịch sử bảo trì** · **Tổng hợp vấn đề** · **Gửi thông báo** |
| **Z3 Main content (ảnh)** | Body trắng trống | Không field / grid / button · không modal Create |
| **Z4 Công việc shell (DOM / bodySample — actual capture)** | List CV sau misroute | Date range · grid WO columns · **Tải lại** · **Giao việc** · **Tổng hợp loại CV** · **Tổng hợp theo HD** · **Xuất excel** · empty + pager |
| **Z5 Map chrome (DOM / bodySample)** | Basemap dưới shell CV | Zoom **+** / **−** · **Bản đồ nền** → Vệ tinh · Google · Giao thông · Hành chính · Không nền · scale **10 km / 5 mi** |
| **Z6 Parent Vấn đề filter (DOM — ẩn trên ảnh)** | Filter labels còn trong DOM | Đoạn đường · Loại vấn đề · Người ghi VĐ · Công ty · Tuần đường · Trạng thái · … · Định vị (`doanduong`…`ckDinhVi`) |
| **Z7 Intended Create modal header (sibling SSOT)** | Tiêu đề form Thêm VĐ | **Cập nhật thông tin vấn đề** · tab **Thông tin vấn đề** · collapse/đóng |
| **Z7b Intended Form body (sibling `011`/`016` SSOT)** | Tab Thông tin vấn đề | Col trái fields (*) · col giữa **Tải ảnh lên** · col phải Đơn vị BDTX + Tuần kiểm · conditional theo loại VĐ |
| **Z8 Intended Form footer (sibling SSOT)** | Submit / close / phụ | **Đóng vấn đề** · **Công việc** · **Hồ sơ vi phạm** · **Báo cáo sở** · **Ghi lại** · **Đóng** |

### Field list (từ ảnh — bổ sung DOM)

> Ảnh: **không lộ field** (body blank). Bảng = (A) sibling SSOT tab **Thông tin vấn đề** · (B) actual Công việc shell từ bodySample/DOM.

#### A — Tab Thông tin vấn đề (sibling SSOT — demo bind)

| Nhãn VN | Control gợi ý | Bắt buộc? | Ghi chú |
|---------|---------------|-----------|---------|
| Đoạn đường(*) | Select / Combo | **Có** | Form create · placeholder **Chọn đoạn đường** · ≠ filter `doanduong` |
| Loại vấn đề(*) | Select / Combo | **Có** | Đổi loại → hiện/ẩn nhóm field phụ |
| Trạng thái(*) | Select / Combo | **Có** | Sibling `011` default **Chưa xử lý** |
| Người yêu cầu | Text | — | Sibling: Ban.TK.Nguyễn Anh Phúc |
| Ngày yêu cầu(*) | Date | **Có** | Calendar icon |
| Tên tài sản | Text | — | Conditional / ngoài viewport mặc định |
| Lý trình | Text + **Lấy vị trí** | — | Button **Lấy vị trí** → GPS/map pick |
| Lý trình cuối | Text | — | Conditional |
| Thời tiết | Select / Combo | — | Sibling bodySample |
| Vị trí | Select / Combo | — | Sibling |
| Chiều rộng / dài / cao / sâu (m) | Number | — | Conditional theo loại CT |
| Địa chỉ | Text | — | Placeholder **Địa chỉ vi phạm** |
| Khối lượng | Number | — | |
| Đơn vị tính | Select / Combo | — | |
| Số vị trí | Number | — | |
| Mô tả | TextArea | — | |
| Gửi tới (thông tin VĐ) | Tag / MultiSelect | — | «No value selected» |
| Phân loại điểm đen · Gây tắc đường · Ngập / Bão / Xã / Hư hỏng… | Select / Date / Number | — | Conditional theo loại VĐ |
| (Ảnh) Tải ảnh lên | Upload button | — | Z7b · disabled empty trên sibling DOM |
| Hướng xử lý | Select | — | Đơn vị BDTX |
| Ý kiến (BDTX) · Dự kiến hoàn thành · Gửi tới · Người/Ngày chỉ đạo | TextArea / Date / Tag / Text | — | Z7b phải |
| Ý kiến (Tuần kiểm) · TT tuần kiểm · Ước tính KL · Hạn hoàn thành · Gửi tới | TextArea / Select / Text / Date | — | Z7b |
| Đưa vào sổ NK tuần kiểm | Checkbox | — | `duaVaoSoTuanKiem` |
| TT thanh tra · Ý kiến · Người/Ngày thanh tra | Select / Text / Date | — | Ngoài viewport mặc định |

#### B — Actual capture Công việc shell (DOM / bodySample)

| Nhãn VN | Control gợi ý | Bắt buộc? | Ghi chú |
|---------|---------------|-----------|---------|
| Phân loại | Select / Combo | — | `combo-1667` · placeholder **Phân loại** |
| Trạng thái công việc | Select / Combo | — | `combo-1668` |
| Loại công việc | Select / Combo | — | `combo-1669` |
| Nhóm công việc | Select / Combo | — | `combo-1670` |
| Người giao việc | Select / Combo | — | `combo-1673` |
| Người/Phòng ban thực hiện | TreePicker | — | `treepickerex-1674` |
| (Filter VĐ nền) Đoạn đường · Loại VĐ · … · Định vị | Combo / Checkbox | — (filter) | `doanduong`…`ckDinhVi` — filter Vấn đề còn trong DOM |
| Trang (pager) | Number | — | `inputItem` · bodySample **Trang … của 0** |
| Date range | Date range | — | bodySample `01/08/2026 - 31/08/2026` |
| Ban.TK.Nguyễn Anh Phúc | UserMenu trigger | — | Z1 · ảnh |
| Bản đồ nền / basemap 5 | Basemap switcher | — | Z5 · +/− = zoom ≠ Create |

**Grid columns (bodySample — Công việc list):** `#` · `Loại công việc` · `Hình ảnh` · `Tên đoạn` · `Địa điểm` · `Người giao việc` · `Người thực hiện` · `Phòng ban` · `Thời gian` · `Trạng thái` · `Ngày hoàn thành` · `Nghiệm thu`.  
`tableHeaders: []` trên inventory · empty **Không có bản ghi nào**.  
**Grid columns (intended list VĐ khi đóng form — sibling):** STT · loại VĐ · đoạn đường · mức độ · trạng thái · người ghi · ngày · vị trí — `/erp-form-context` list shell.

**Form semantics (intended tab):** **Ghi lại** → `POST /api/v1/incidents` (mock toast) · **Đóng** → leave-confirm nếu dirty · **Lấy vị trí** → map pick / GPS · field (*) validate trước submit · loại VĐ đổi → hiện/ẩn nhóm field conditional · **Tải ảnh lên** → attach media · checkbox **Đưa vào sổ NK tuần kiểm** → flag sổ tuần kiểm.  
**WO shell semantics (actual):** **Tải lại** → refresh list · **Giao việc** → assign WO · **Tổng hợp loại CV** / **Tổng hợp theo HD** → aggregate · **Xuất excel** → export.

### Tính năng / hành động

**Primary — Tab Thông tin vấn đề trên Create Thêm VĐ (`017` · intended · sibling SSOT)**
- Upstream: root view `005`/`010`/`012` → **Thêm** (`011`/`013`/`014-them`/`016`) → tab **Thông tin vấn đề**
- Form modal 3 cột: **Thông tin vấn đề** · media · Đơn vị BDTX · Tuần kiểm · required fields · conditional theo loại
- Form actions: **Ghi lại** · **Đóng** · **Lấy vị trí** · **Tải ảnh lên** · **Đóng vấn đề** · **Công việc** · **Hồ sơ vi phạm** · **Báo cáo sở**
- Actual PNG/bodySample = misroute `#quanLyCongViec` (list CV) — **không** dùng làm SSOT form tab
- Downstream: list refresh sau save · optional assign CV (`014`/`015` Thêm CV)
- ≠ Thêm CV (work order create) · ≠ chỉ đổi MK · ≠ GIS geditor
- Demo: same actions · UI modern `/erp-form-context` form modal + MapPane — **không** clone GOVOne · bind tab theo sibling `011`/`016` SSOT

**Form footer / toolbar (sibling SSOT — không thấy trên ảnh blank)**
- **Ghi lại** → submit create
- **Đóng** → đóng form
- **Lấy vị trí** → pick tọa độ / lý trình từ map
- **Tải ảnh lên** → upload ảnh đính kèm
- **Đóng vấn đề** · **Công việc** · **Hồ sơ vi phạm** · **Báo cáo sở**

**Actual Công việc toolbar (DOM / bodySample)**
- **Tải lại** · **Giao việc** · **Tổng hợp loại CV** · **Tổng hợp theo HD** · **Xuất excel**
- Parent Vấn đề toolbar còn trong DOM: **Thêm** · **Thêm CV** / **Xem CV** / **Xem** (disabled) · **Xóa** · **Phản hồi** · **Xuất dữ liệu** · **BC sở**
- Filter: **Tìm mới** · **Tìm kiếm** · **Hủy** / **Áp dụng**
- Export menu: Xuất NKTĐ… / sổ NK tuần đường / tuần kiểm / bảng tổng hợp…

**Header / user (ảnh + DOM)**
- Bell · **Ban.TK.Nguyễn Anh Phúc** → **Hồ sơ của tôi** · **Đổi mật khẩu** · **Đăng xuất**

**Map chrome (DOM / bodySample — không lộ trên ảnh blank)**
- **+** zoomIn (`#zoomIn` — **≠** Create) · **−** zoomOut · **Bản đồ nền** · Vệ tinh · Google · Giao thông · Hành chính · Không nền · scale **10 km / 5 mi**

**Actions bổ sung từ sibling**  
Root view `005`/`010`/`012` · create twins `011`/`013`/`014-them`/`016` · Thêm CV `014`/`015` · export menu `incident-actions.md`.

### Map → step context

- Feature: `docs/context/features/incident.md`
- Section: `## Legacy GOVOne (auto-capture)` → capture id `017-quan-ly-van-e-them-tab-thong-tin-van-e`
- Control-map: `docs/context/_raw/legacy-govone/demo-maps/incident-control-map.md`
- Actions: `docs/context/_raw/legacy-govone/demo-maps/incident-actions.md`
- Demo: parity UI trong `incident-demo.html` / MFE — same actions (**Ghi lại** · **Đóng** · **Lấy vị trí** · **Tải ảnh lên** · form fields (*) · BDTX/Tuần kiểm · map basemap/zoom · UserMenu), modern `/erp-form-context` form modal + MapPane (không clone GOVOne · PNG misroute → sibling `011`/`016` SSOT cho tab · actual bodySample = WO list parity · **+** = zoomIn ≠ Create)
- **DOM / bind:** Create form Pattern B/C · tab **Thông tin vấn đề** · required Select/Date · Map pick lý trình · upload media · submit toast · leave-confirm · conditional field groups theo `loaivande` · checkbox sổ NK tuần kiểm
- **Capture path:** `capture/incident/them/tab-thong-tin-van-e/` (master/page/action)
- Sibling: root view `005`/`010`/`012` · `011`/`013`/`014-them`/`016` create · `014`/`015` Thêm CV

## Status

- [x] Vision reviewed
- [x] Mapped to step context
