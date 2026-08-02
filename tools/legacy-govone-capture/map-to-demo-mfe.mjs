/**
 * Map legacy capture (fields + actions) → demo control-map theo chuẩn
 * Linm erp-form-context (modern MFE controls) — cùng field, UI hiện đại.
 *
 * Output:
 *   docs/context/_raw/legacy-govone/demo-maps/{slug}-control-map.md
 *   docs/context/_raw/legacy-govone/demo-maps/{slug}-actions.md
 *   upsert section vào docs/context/features/{slug}.md
 */

import {
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  writeFileSync,
} from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA_ROOT = resolve(__dirname, "../..");
const OUT_DIR = resolve(
  DATA_ROOT,
  process.env.GOVONE_OUT_DIR || "docs/context/_raw/legacy-govone",
);
const PAGES = join(OUT_DIR, "pages");
const MAP_DIR = join(OUT_DIR, "demo-maps");
const FEATURES_CTX = join(DATA_ROOT, "docs/context/features");

const SECTION_START = "<!-- DEMO-MFE-MODERN:START -->";
const SECTION_END = "<!-- DEMO-MFE-MODERN:END -->";

/** Legacy label/input → Linm control (erp-form-context / common controls). */
function mapFieldToLinControl(f) {
  const hay = `${f.name} ${f.id} ${f.placeholder} ${f.ariaLabel} ${f.type}`.toLowerCase();
  const type = (f.type || "").toLowerCase();
  // Panel tuần kiểm — check-in status (trước checkbox heuristic — «check» trong check-in)
  if (/trạng thái check-in|trang thai check-in|checkin|chưa thực hiện checkin|check-in/.test(hay)) {
    return {
      control: "Status / badge",
      lin: "StatusBadge · check-in pending/done · erp-report-context · patrol",
    };
  }
  if (/công tác tuần kiểm|cong tac tuan kiem|paneltuankiemheader/.test(hay)) {
    return {
      control: "Collapsible panel header",
      lin: "Collapsible panel · route list · check-in status · erp-report-context",
    };
  }
  // Panel tuần đường — trước KPI heuristic («tuần đường» trong tên panel)
  if (/công tác tuần đường|cong tac tuan duong|paneltuanduongheader/.test(hay)) {
    return {
      control: "Collapsible panel header",
      lin: "Collapsible panel · tree Company→QL→Km chips · erp-report-context",
    };
  }
  if (/badge count|route badge|tuanDuongRouteBadge/i.test(hay)) {
    return {
      control: "Badge / count",
      lin: "Count badge trên node QL · erp-report-context · patrol",
    };
  }
  // Patrol export modal / filters (vision 008/009/011)
  if (/loainhanvien|loại nv|loai nv/.test(hay)) {
    return {
      control: "Select / Combo",
      lin: "SelectField · Loại NV · export modal filter (vision 008/009)",
    };
  }
  if (/doanduong|đoạn đường|doan duong|chọn đoạn đường/.test(hay)) {
    return {
      control: "Select / Combo",
      lin: "SelectField · filter Đoạn đường · patrol list+map (vision 004/005/010/011)",
    };
  }
  if (/treepickerex|chọn công ty\/nhân viên|cong ty\/nhan vien/.test(hay)) {
    return {
      control: "TreePicker / Lookup",
      lin: "TreePicker · filter Công ty/Nhân viên · patrol list+map (vision 004/005/010/011)",
    };
  }
  // Patrol monitor list+map (vision 004/005) — trước GIS/KPI heuristics
  if (/danh sách nhân viên|danh sach nhan vien|listnhanvien/.test(hay)) {
    return {
      control: "DataGrid / List",
      lin: "DataGrid · staff/location list · erp-form-context list shell · patrol monitor (vision 004/005)",
    };
  }
  if (/chưa checkin|chua checkin|badgechuacheckin/.test(hay)) {
    return {
      control: "Metric / badge count",
      lin: "Count badge · Chưa checkin · patrol monitor KPI nhẹ (vision 004/005)",
    };
  }
  if (/^tổng số$|^tong so$|statustongso/.test(hay)) {
    return {
      control: "Count status",
      lin: "Footer count · Tổng số · patrol list (vision 004/005)",
    };
  }
  if (/không có bản ghi|khong co ban ghi|emptylistpatrol/.test(hay)) {
    return {
      control: "Status / empty",
      lin: "EmptyState · Không có bản ghi nào · patrol list (vision 004/005)",
    };
  }
  if (
    /basemapswitcher|basemapsatellite|basemapgoogle|basemaptraffic|basemapadmin|basemapnone/.test(hay) ||
    /^(bản đồ nền|ban do nen|vệ tinh|ve tinh|giao thông|giao thong|hành chính|hanh chinh|không nền|khong nen|google)$/.test(
      `${f.name || ""}`.trim().toLowerCase(),
    )
  ) {
    return {
      control: "Basemap switcher",
      lin: "Map basemap switcher · GIS chrome · patrol map pane (vision 004/005/025)",
    };
  }
  if (/checkall|chọn tất cả|chon tat ca/.test(hay)) {
    return {
      control: "Checkbox / Switch",
      lin: "LinCheckbox · Chọn tất cả org tree · export modal (vision 008/009)",
    };
  }
  if (/xuất người không checkin|xuat nguoi khong checkin|checkbox-1064|checkbox-1065/.test(hay)) {
    return {
      control: "Checkbox / Switch",
      lin: "LinCheckbox · Xuất người không checkin · includeNonCheckin · export modal (vision 008/009)",
    };
  }
  if (type === "checkbox" || /checkbox|check all|chọn tất cả|active|is_/.test(hay)) {
    return { control: "Checkbox / Switch", lin: "LinCheckbox · form field" };
  }
  if (type === "date" || /date|ngày|ngay|ngày tổng hợp/.test(hay)) {
    return {
      control: "Date",
      lin: "utcToLocalInputValue · localInputToISOWithOffset (form-datetime-local-utc) · report period filter",
    };
  }
  // Dashboard drill modal (vision 015 TNGT · 016 · 020/023 Chấm công miscapture chrome)
  if (/tiêu đề modal|tieu de modal|modaltngttitle|modalmiscapturetitle|chấm công|cham cong/.test(hay)) {
    return {
      control: "DialogTitle",
      lin: "Modal title miscapture · Chấm công (vision 020/023) · TNGT (016) · erp-report-context · leave-confirm",
    };
  }
  if (/empty state modal|modalmiscaptureempty|modal.?body/.test(hay)) {
    return {
      control: "Status / empty",
      lin: "EmptyState · Modal body blank (vision 020/023) · erp-report-context",
    };
  }
  // Tree / route rows trước KPI (tên field có «tuần kiểm» nhưng không phải KPI card)
  if (/điểm km|diem km|lý trình|ly trinh|km chip/.test(hay)) {
    return {
      control: "Chip / tag (Km)",
      lin: "Chip list · Company→Route→Km · drill chi tiết",
    };
  }
  if (/đơn vị|don vi|công ty|cong ty|tuyến \(ql\)|tuyen \(ql\)|tuyến ql|tuankiemroute/.test(hay)) {
    return {
      control: "Tree node",
      lin: "Collapsible tree · report panel · expand/collapse",
    };
  }
  // Dashboard Bảng tổng hợp nhanh — KPI metric cards (vision 014)
  if (type === "metric" || /kpi|tuần đường|tuan duong|tuần kiểm|tuan kiem|bão lũ|bao lu|tai nạn|tai nan|vi phạm|vi pham|công việc|cong viec/.test(hay)) {
    return {
      control: "KPI metric card",
      lin: "erp-report-context · KPI strip · click → focus panel / filter",
    };
  }
  if (/đang xử lý|dang xu ly|empty state|chưa có dữ liệu|chua co du lieu/.test(hay)) {
    return {
      control: "Status / empty",
      lin: "Loading overlay · EmptyState alert · erp-report-context",
    };
  }
  if (type === "number" || /qty|sl|amount|tiền|tien|money|số/.test(hay)) {
    return { control: "Money/Qty", lin: "LabelMoney · INT_IN / form-field-format" };
  }
  if (/select|dropdown|combobox/.test(f.tag) || type === "select-one") {
    return { control: "Select", lin: "Select · useFormOptions (cấm hardcode VN)" };
  }
  if (/account|tk_|taikhoan|tài khoản/.test(hay)) {
    return { control: "Lookup TK", lin: "SearchInput catalog · form-catalog-lookup-input" };
  }
  if (/customer|partner|khách|doi tuong|đối tượng/.test(hay)) {
    return { control: "Lookup ĐT", lin: "SearchInput · form-catalog-lookup-input" };
  }
  if (/code|mã|ma_/.test(hay)) {
    return { control: "Code", lin: "form-code-field · uppercase" };
  }
  if (/inputdientichkhonggian/.test(hay)) {
    return {
      control: "Text readonly (measure)",
      lin: "TextField readOnly · common-field-control · diện tích không gian",
    };
  }
  if (/inputdientich/.test(hay)) {
    return {
      control: "Text readonly (measure)",
      lin: "TextField readOnly · common-field-control · kết quả Đo diện tích (m²/km²)",
    };
  }
  if (/inputchieudaikhonggian/.test(hay)) {
    return {
      control: "Text readonly (measure)",
      lin: "TextField readOnly · common-field-control · chiều dài không gian",
    };
  }
  if (/inputchieudai/.test(hay)) {
    return {
      control: "Text readonly (measure)",
      lin: "TextField readOnly · common-field-control · kết quả Đo chiều dài (m/km)",
    };
  }
  if (/gmapinputtextsearch|nhập thông tin đối tượng|nhap thong tin doi tuong/.test(hay)) {
    return { control: "Lookup ĐT", lin: "SearchInput · form-catalog-lookup-input" };
  }
  if (/ddllopdulieu/.test(hay)) {
    return { control: "Select", lin: "Select · useFormOptions (cấm hardcode VN)" };
  }
  // Asset sổ TS — filter tree / lý trình / pager
  if (/nhập và enter để lọc|nhap va enter de loc|textfield-1033/.test(hay)) {
    return {
      control: "Search (tree filter)",
      lin: "SearchInput · LinErpListFilterBar · lọc tree tuyến",
    };
  }
  if (/km1\+100|km5\+100|textfield-1079|textfield-1080|lý trình|ly trinh/.test(hay)) {
    return {
      control: "Text (lý trình)",
      lin: "TextField · common-field-control · filter lý trình từ/đến",
    };
  }
  if (/inputitem/.test(hay)) {
    return {
      control: "Number (pager)",
      lin: "Pagination current page · list shell",
    };
  }
  if (f.tag === "textarea" || /note|ghi chú|mô tả|desc/.test(hay)) {
    return { control: "TextArea", lin: "TextField multiline" };
  }
  return { control: "Text", lin: "TextField · common-field-control" };
}

function mapActionToLinToolbar(a) {
  const label = (a.label || "").trim();
  const hay = label.toLowerCase();
  const href = String(a.href || a.id || "");
  // Map zoom chrome — capture kind=create/nav sai (vision 007/009/011 form-sample `› +`)
  if (
    /^[＋+]$/.test(label) ||
    /#zoomin/i.test(href) ||
    /^zoomin$/i.test(href)
  ) {
    return {
      btn: "Zoom +",
      lin: "MapPane zoomIn (`#zoomIn`) · GIS chrome · ≠ Create catalog (vision 007/009/011 form-sample miscapture)",
      kind: "action",
      note: "zoomIn · ≠ Create (vision 007/009/011)",
    };
  }
  if (
    /^[−–—-]$/.test(label) ||
    /#zoomout/i.test(href) ||
    /^zoomout$/i.test(href)
  ) {
    return {
      btn: "Zoom −",
      lin: "MapPane zoomOut (`#zoomOut`) · GIS chrome",
      kind: "action",
      note: "zoomOut",
    };
  }
  // Patrol monitor toolbar — capture kind=nav sai (vision 008/010/011 Tải lại)
  if (/^tải lại$|^tai lai$/.test(hay)) {
    return {
      btn: "Tải lại",
      lin: "Reload / refetch list+map theo filter hiện tại · loading + toast «Đã tải lại» · ≠ navigate (vision 008/010/011)",
      kind: "action",
      note: "reload list+map · ≠ navigate (vision 008/010/011)",
    };
  }
  if (/^xuất excel$|^xuat excel$/.test(hay)) {
    return {
      btn: "Xuất Excel",
      lin: "export-excel · toolbar → mở Modal «Xuất dữ liệu Excel» (vision 008/009: from/to · org tree · includeNonCheckin · confirm)",
      kind: "export",
      note: "modal export Excel (vision 008/009)",
    };
  }
  // GIS tool overrides — capture kind heuristic hay sai (vd. «Lấy thông tin vị trí» = export)
  if (/đo diện tích|do dien tich/.test(hay)) {
    return {
      btn: "Tool Đo diện tích",
      lin: "GIS toolbar · polygon measure · bind `inputDienTich` / `inputDienTichKhongGian`",
    };
  }
  if (/đo chiều dài|do chieu dai/.test(hay)) {
    return {
      btn: "Tool Đo chiều dài",
      lin: "GIS toolbar · polyline measure · bind `inputChieuDai` / `inputChieuDaiKhongGian`",
    };
  }
  if (/lấy thông tin vị trí|lay thong tin vi tri|thông tin điểm|thong tin diem/.test(hay)) {
    return {
      btn: "Tool Lấy thông tin vị trí",
      lin: "GIS toolbar · click point · readout lng/lat (X/Y) · `btTienIchThongTinDiem`",
    };
  }
  if (/chụp màn hình|chup man hinh/.test(hay)) {
    return {
      btn: "Tool Chụp màn hình",
      lin: "GIS toolbar · `btnScreenMap` · map screenshot · download/png",
    };
  }
  if (/xuất bản đồ|xuat ban do/.test(hay)) {
    return { btn: "Xuất bản đồ", lin: "GIS toolbar · export map image/PDF" };
  }
  if (/in bản đồ|in ban do/.test(hay)) {
    return { btn: "In bản đồ", lin: "GIS toolbar · print map" };
  }
  if (/xem hướng đoạn đường|xem huong doan duong/.test(hay)) {
    return {
      btn: "Tool Xem hướng đoạn đường",
      lin: "GIS toolbar · `btXemHuongDoanDuong` · direction arrows on route polyline (view-only)",
    };
  }
  if (/gộp đoạn đường multiline|gop doan duong multiline|gộp đoạn multiline|gop doan multiline/.test(hay)) {
    return {
      btn: "Tool Gộp đoạn đường multiline",
      lin: "GIS toolbar · `btGopDoanDuong` · multi-select ≥2 route polylines · merge geometry · Lưu/Hủy biên tập",
    };
  }
  if (/tạo đoạn đánh giá 100m|tao doan danh gia 100m|đoạn đánh giá 100m|doan danh gia 100m/.test(hay)) {
    return {
      btn: "Tool Tạo đoạn đánh giá 100m",
      lin: "GIS toolbar · `btTaoDoan100m` · select route polyline · generate 100m evaluation segments · Lưu/Hủy biên tập",
    };
  }
  if (/gán mã đoạn đánh giá|gan ma doan danh gia/.test(hay)) {
    return {
      btn: "Tool Gán mã đoạn đánh giá",
      lin: "GIS toolbar · `btGanMaDoanDanhGia` · select collection point · assign evaluation segment code · Lưu/Hủy biên tập",
    };
  }
  if (/tự động đánh giá chất lượng mặt đường|tu dong danh gia chat luong mat duong|tính toán clmd|tinh toan clmd/.test(hay)) {
    return {
      btn: "Tool Tự động đánh giá CL mặt đường",
      lin: "GIS toolbar · `btTinhToanCLMD` · select evaluation segments · run CLMD/PCI compute · Lưu/Hủy biên tập",
    };
  }
  if (/^danh sách thiết bị$|^danh sach thiet bi$/.test(hay)) {
    return {
      btn: "Tool Danh sách thiết bị",
      lin: "GIS toolbar · `toolThietBi` · open device/asset list by layer/scope · row→map highlight + Thuộc tính (≠ inventory kho)",
    };
  }
  if (/^sao chép thiết bị$|^sao chep thiet bi$/.test(hay)) {
    return {
      btn: "Tool Sao chép thiết bị",
      lin: "GIS toolbar · `toolSaoChepThietBi` · select source device · copy geometry/attributes · place copy · Lưu/Hủy biên tập (≠ Sao chép tài sản · ≠ inventory kho)",
    };
  }
  // Patrol monitor sidebar (vision 004/005) — trước GIS «Tổng hợp» tool heuristic
  if (/giám sát nhân viên|giam sat nhan vien/.test(hay)) {
    return {
      btn: "Nav Giám sát nhân viên",
      lin: "MemoryRouter / sidebar · patrol monitor module · erp-form-context (vision 004/005)",
      kind: "nav",
    };
  }
  if (/giám sát tuyến đường|giam sat tuyen duong/.test(hay)) {
    return {
      btn: "Nav Giám sát tuyến đường",
      lin: "MemoryRouter / sidebar · patrol route monitor · erp-form-context (vision 004/005)",
      kind: "nav",
    };
  }
  if (/lịch sử checkin|lich su checkin/.test(hay)) {
    return {
      btn: "Nav Lịch sử checkin",
      lin: "MemoryRouter / sidebar · check-in history · erp-form-context (vision 004/005)",
      kind: "nav",
    };
  }
  if (/^tổng hợp 2$|^tong hop 2$/.test(hay)) {
    return {
      btn: "Nav Tổng hợp",
      lin: "MemoryRouter / sidebar · patrol summary · erp-report-context (vision 004/005) · ≠ GIS toolTongHopThietBi",
      kind: "nav",
    };
  }
  if (/thu\/mở panel|thu\/mo panel|splitter/.test(hay)) {
    return {
      btn: "Splitter list↔map",
      lin: "SplitPane collapse/expand list · maximize map · patrol monitor (vision 004/005)",
      kind: "action",
    };
  }
  if (/^tổng hợp$|^tong hop$/.test(hay)) {
    return {
      btn: "Tool Tổng hợp",
      lin: "GIS toolbar · `toolTongHopThietBi` · aggregate devices by layer/scope · Kết quả / Biểu đồ · drill-down map (≠ list `toolThietBi` · ≠ copy · ≠ reports Web tổng hợp)",
    };
  }
  if (/hủy biên tập|huy bien tap/.test(hay)) {
    return {
      btn: "Tool Hủy biên tập",
      lin: "GIS toolbar · `resetEditing` · discard unsaved edit session · Confirm modal · pair `saveEditing` (≠ Hủy bỏ dialog · ≠ delete object)",
    };
  }
  if (/lưu kết quả|luu ket qua|saveediting|ctrl\s*\+\s*s/.test(hay)) {
    return {
      btn: "Tool Lưu kết quả (Ctrl+S)",
      lin: "GIS toolbar · `saveEditing` · Ctrl+S · commit unsaved edit session · toast · form-api-error-handling · pair `resetEditing` (≠ FormActions Lưu catalog · ≠ export/print)",
    };
  }
  // GIS basemap radios / shortcut — capture kind=nav → MemoryRouter sai (vision 025 Vệ tinh)
  if (/^vệ tinh$|^ve tinh$/.test(hay)) {
    return {
      btn: "Basemap Vệ tinh",
      lin: "Map basemap switcher · `basemap=satellite` · GIS sidebar Lớp nền (≠ route navigate · ≠ overlay checkbox)",
    };
  }
  if (/^google$/.test(hay)) {
    return {
      btn: "Basemap Google",
      lin: "Map basemap switcher · `basemap=google` · GIS sidebar Lớp nền (default parity)",
    };
  }
  if (/^giao thông$|^giao thong$/.test(hay)) {
    return {
      btn: "Basemap Giao thông",
      lin: "Map basemap switcher · `basemap=traffic` · GIS sidebar Lớp nền",
    };
  }
  if (/^hành chính$|^hanh chinh$/.test(hay)) {
    return {
      btn: "Basemap Hành chính",
      lin: "Map basemap switcher · `basemap=admin` · GIS sidebar Lớp nền",
    };
  }
  if (/^không nền$|^khong nen$/.test(hay)) {
    return {
      btn: "Basemap Không nền",
      lin: "Map basemap switcher · `basemap=none` · GIS sidebar Lớp nền",
    };
  }
  if (/^bản đồ nền$|^ban do nen$/.test(hay)) {
    return {
      btn: "Bản đồ nền",
      lin: "Map basemap shortcut (map corner) · same switcher as Lớp nền radios · GIS chrome",
    };
  }
  if (/đăng xuất|dang xuat/.test(hay)) {
    return { btn: "Đăng xuất", lin: "Auth logout · mfe-run-modes" };
  }
  // Asset sổ TS / KCHT map+list — capture kind heuristic hay sai (nav/create)
  if (/lấy dữ liệu|lay du lieu/.test(hay)) {
    return {
      btn: "Lấy dữ liệu",
      lin: "LinErpListFilterBar · query map pins + grid · GAP-P2-87",
    };
  }
  if (/xóa điều kiện|xoa dieu kien/.test(hay)) {
    return {
      btn: "Xóa điều kiện",
      lin: "LinErpListFilterBar · clear filter lý trình / điều kiện",
    };
  }
  if (/lớp nền|lop nen/.test(hay)) {
    return { btn: "Lớp nền", lin: "Map basemap switcher · GIS toolbar" };
  }
  if (/lớp chuyên đề|lop chuyen de/.test(hay)) {
    return { btn: "Lớp chuyên đề", lin: "Map thematic layers · GIS toolbar / modal" };
  }
  if (/vị trí của tôi|vi tri cua toi/.test(hay)) {
    return { btn: "Vị trí của tôi", lin: "Map geolocate · GIS toolbar" };
  }
  if (/^tiện ích$|^tien ich$/.test(hay)) {
    return { btn: "Tiện ích", lin: "Overflow / utilities menu · toolbar" };
  }
  if (/^\d+$/.test(label)) {
    return { btn: "Thông báo", lin: "Notification badge · header · mfe-run-modes" };
  }
  if (/ban\.tk\.|hồ sơ|ho so|đổi mật khẩu|doi mat khau/.test(hay)) {
    return { btn: "User menu", lin: "Avatar dropdown · profile / logout · mfe-run-modes" };
  }
  // Dashboard Bảng tổng hợp nhanh (vision 014) — date + collapsible panels
  if (/dropdown trigger/.test(hay)) {
    return {
      btn: "Date filter",
      lin: "DatePicker · report period · reload KPI + panels",
    };
  }
  if (/công tác tuần đường|cong tac tuan duong/.test(hay)) {
    return {
      btn: "Panel Tuần đường",
      lin: "Collapsible panel · tree Company→QL→Km chips · erp-report-context",
    };
  }
  if (/công tác tuần kiểm|cong tac tuan kiem/.test(hay)) {
    return {
      btn: "Panel Tuần kiểm",
      lin: "Collapsible panel · route list · check-in status · erp-report-context",
    };
  }
  if (/^công việc$|^cong viec$/.test(hay)) {
    return {
      btn: "Panel Công việc",
      lin: "Collapsible panel · WO summary empty/list · erp-report-context",
    };
  }
  if (/thiết lập cỡ chữ|thiet lap co chu/.test(hay)) {
    return { btn: "Cỡ chữ", lin: "App shell · font-size preference" };
  }
  // Dashboard drill modal TNGT (vision 015)
  if (/^maximize$|pop-out|phóng to|phong to/.test(hay)) {
    return {
      btn: "Maximize",
      lin: "Modal maximize / pop-out · erp-report-context",
    };
  }

  const k = a.kind || "action";
  const map = {
    create: { btn: "Tạo mới / Thêm", lin: "Button primary · catalog/voucher toolbar" },
    edit: { btn: "Sửa", lin: "Button · row menu · erp-list-row-action-menu" },
    view: { btn: "Xem", lin: "Button/link · View mode · fieldLockProps" },
    submit: { btn: "Lưu", lin: "Button primary · form-api-error-handling toast" },
    destructive: { btn: "Xóa / Hủy", lin: "Button danger · Confirm modal" },
    filter: { btn: "Tìm / Làm mới", lin: "LinErpListFilterBar · GAP-P2-87" },
    export: { btn: "Xuất Excel", lin: "export-excel · toolbar" },
    import: { btn: "Import", lin: "implement-import-view wizard" },
    nav: { btn: "Điều hướng", lin: "MemoryRouter / navigate · mfe-run-modes" },
    close: { btn: "Đóng", lin: "Modal/Slideout close · leave-confirm" },
    action: { btn: a.label, lin: "Button · toolbar zone" },
  };
  return map[k] || map.action;
}

function inferKind(pageHints) {
  const t = pageHints.join(" ").toLowerCase();
  if (/báo cáo|bao cao|dashboard|biểu đồ/.test(t)) return "E (report) — erp-report-context";
  // Sổ tài sản KCHT = map + list (slug asset / pnltaisan) — trước heuristic «sổ » → Kind B
  if (/asset|sổ tài sản|so tai san|pnltaisan|kết cấu hạ tầng|ket cau ha tang/.test(t)) {
    return "F/custom map + list — erp-custom-manage + GIS · erp-list-page-shell";
  }
  if (/bản đồ|ban do|gis|map|geditor/.test(t)) return "F/custom map — erp-custom-manage + GIS";
  if (/danh mục|danh sach|sổ |so /.test(t)) return "B (catalog list+modal) — erp-form-context Kind B";
  if (/phiếu|chung tu|chứng từ|công việc|sự cố/.test(t)) {
    return "C (voucher/full page) — erp-form-context Kind C";
  }
  return "B/C — confirm Step 2a-K (erp-form-context)";
}

function loadSlugIndex() {
  const p = join(OUT_DIR, "feature-map.json");
  if (!existsSync(p)) return {};
  return JSON.parse(readFileSync(p, "utf8")).slugs || {};
}

function pagesForSlug(slug, slugIndex) {
  const ids = new Set(slugIndex[slug]?.ids || []);
  if (!existsSync(PAGES)) return [];
  return readdirSync(PAGES)
    .filter((f) => f.endsWith(".json"))
    .map((f) => JSON.parse(readFileSync(join(PAGES, f), "utf8")))
    .filter((p) => ids.has(p.id) || (slug === "unmapped" && !ids.size));
}

function upsertSection(body, sectionMd) {
  const block = `${SECTION_START}\n${sectionMd.trim()}\n${SECTION_END}`;
  if (body.includes(SECTION_START) && body.includes(SECTION_END)) {
    return body.replace(
      new RegExp(`${SECTION_START}[\\s\\S]*?${SECTION_END}`, "m"),
      block,
    );
  }
  return `${body.trimEnd()}\n\n${block}\n`;
}

function buildControlMap(slug, pages) {
  const fieldRows = [];
  const actionRows = [];
  const seenF = new Set();
  const seenA = new Set();
  for (const p of pages) {
    for (const f of p.fields || []) {
      const key = `${f.name}|${f.id}|${f.placeholder}`;
      if (seenF.has(key)) continue;
      seenF.add(key);
      const m = mapFieldToLinControl(f);
      fieldRows.push({
        legacy: f.name || f.id || f.placeholder || f.ariaLabel || "(unnamed)",
        type: f.type || f.tag,
        zone: f.zone || "—",
        ...m,
      });
    }
    const acts =
      p.actions?.length
        ? p.actions
        : (p.buttons || []).map((label) => ({
            label,
            kind: "action",
            zone: "content",
          }));
    for (const a of acts) {
      const key = `${a.zone}|${a.kind}|${a.label}`;
      if (seenA.has(key)) continue;
      seenA.add(key);
      const m = mapActionToLinToolbar(a);
      actionRows.push({
        legacy: a.label,
        kind: m.kind || a.kind,
        zone: a.zone,
        note: m.note || "—",
        btn: m.btn,
        lin: m.lin,
      });
    }
  }

  const kind = inferKind([
    slug,
    ...pages.map((p) => p.menuText || ""),
    ...pages.flatMap((p) => p.headings || []),
  ]);

  const md = [
    `# Demo control-map (modern MFE) — \`${slug}\``,
    ``,
    `> **Rule:** cùng field/action legacy · UI theo **\`/erp-form-context\`** (Linm.Development.Rules).`,
    `> Demo HTML mock \`Lin*\` look · **cấm** copy skin GOVOne cũ · **cấm** BE.`,
    ``,
    `## Kind hint`,
    ``,
    `- ${kind}`,
    `- Step 2a-K · 2d readonly · 2g control-map · 2g common controls mandatory`,
    ``,
    `## Fields (legacy → Linm)`,
    ``,
    `| Legacy | type | zone | Control | Linm SSOT |`,
    `|--------|------|------|---------|-----------|`,
    ...fieldRows
      .slice(0, 80)
      .map(
        (r) =>
          `| ${r.legacy} | ${r.type} | ${r.zone} | ${r.control} | ${r.lin} |`,
      ),
    fieldRows.length === 0 ? `| _(chưa capture field — bổ sung vision)_ | | | | |` : "",
    ``,
    `## Actions / buttons (legacy → toolbar MFE)`,
    ``,
    `| Legacy label | kind | zone | Demo button | Linm SSOT |`,
    `|--------------|------|------|-------------|-----------|`,
    ...actionRows
      .slice(0, 120)
      .map(
        (r) =>
          `| ${r.legacy} | ${r.kind} | ${r.zone} | ${r.btn} | ${r.lin} |`,
      ),
    actionRows.length === 0 ? `| _(chưa capture action)_ | | | | |` : "",
    ``,
    `## Demo page rules (bắt buộc)`,
    ``,
    `1. **Layout** — list: LinPageLayout zones A–F · form: Pattern A/B/C theo Kind`,
    `2. **Filter** — \`LinErpListFilterBar\` · Tìm trên filter · Làm mới toolbar`,
    `3. **Grid** — STT · sort/filter · row action menu · không header \`TT\``,
    `4. **Form** — validation banner · không disabled xám View · toast mock`,
    `5. **Labels** — \`useFormOptions\` pattern (hardcode VN chỉ trong demo HTML OK nếu gắn data-i18n key)`,
    `6. **Datetime** — hiển thị local · lưu ISO offset (mock)`,
    `7. Mọi **button** trong bảng Actions phải có trên demo (click → toast/modal mock)`,
    ``,
    `## Refs`,
    ``,
    `- \`web-app/skill/erp-form-context/erp-form-context.md\``,
    `- \`erp-common-controls-mandatory.md\` · \`erp-list-page-shell.md\``,
    `- Capture raw: \`_raw/legacy-govone/features/${slug}.md\``,
    ``,
  ]
    .filter((l) => l !== undefined)
    .join("\n");

  const actionsMd = [
    `# Actions inventory — \`${slug}\``,
    ``,
    `| label | kind | zone | tag | disabled |`,
    `|-------|------|------|-----|----------|`,
    ...actionRows.map(
      (r) => `| ${r.legacy} | ${r.kind} | ${r.zone} | — | ${r.note || "—"} |`,
    ),
    ``,
    `Count: ${actionRows.length}`,
    ``,
  ].join("\n");

  return { md, actionsMd, fieldCount: fieldRows.length, actionCount: actionRows.length, kind };
}

function main() {
  const slugIndex = loadSlugIndex();
  mkdirSync(MAP_DIR, { recursive: true });
  const slugs = Object.keys(slugIndex).length
    ? Object.keys(slugIndex)
    : ["unmapped"];

  let n = 0;
  for (const slug of slugs) {
    if (slug === "unmapped") continue;
    const pages = pagesForSlug(slug, slugIndex);
    if (!pages.length) continue;
    const { md, actionsMd, fieldCount, actionCount, kind } = buildControlMap(
      slug,
      pages,
    );
    writeFileSync(join(MAP_DIR, `${slug}-control-map.md`), md, "utf8");
    writeFileSync(join(MAP_DIR, `${slug}-actions.md`), actionsMd, "utf8");

    const ctxPath = join(FEATURES_CTX, `${slug}.md`);
    if (existsSync(ctxPath)) {
      let body = readFileSync(ctxPath, "utf8");
      const section = [
        `## Demo MFE modern (erp-form-context)`,
        ``,
        `> Same fields/actions từ GOVOne · UI chuẩn Linm — **không** clone skin legacy.`,
        ``,
        `- Control-map: [\`${slug}-control-map.md\`](../_raw/legacy-govone/demo-maps/${slug}-control-map.md)`,
        `- Actions: [\`${slug}-actions.md\`](../_raw/legacy-govone/demo-maps/${slug}-actions.md)`,
        `- Fields mapped: ${fieldCount} · Actions: ${actionCount}`,
        `- Kind hint: ${kind}`,
        ``,
        `Gen demo: \`/qlbd-analy-demo @${slug}\` — load control-map trên + \`/erp-form-context\` rules (2a-K · 2g · common controls).`,
        ``,
      ].join("\n");
      body = upsertSection(body, section);
      writeFileSync(ctxPath, body, "utf8");
    }

    n += 1;
    console.log(
      JSON.stringify({
        event: "demo_map",
        slug,
        fieldCount,
        actionCount,
        kind,
      }),
    );
  }

  writeFileSync(
    join(OUT_DIR, "DEMO-MFE-MAP.md"),
    [
      `# Demo MFE modern maps`,
      ``,
      `- Slugs: ${n}`,
      `- When: ${new Date().toISOString()}`,
      `- Dir: \`demo-maps/*-control-map.md\``,
      ``,
      `Next: \`/qlbd-analy-demo\` · parity field + Linm shell.`,
      ``,
    ].join("\n"),
    "utf8",
  );
  console.log(JSON.stringify({ event: "done", slugs: n }));
}

main();
