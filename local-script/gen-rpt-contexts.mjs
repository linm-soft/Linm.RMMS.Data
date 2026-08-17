import { writeFileSync } from "node:fs";
import { join } from "node:path";

const dir = "D:/AI-QLBD/Linm.RMMS.Data/docs/context/features";

const items = [
  {
    slug: "rpt-tai-san",
    title: "BC Tài sản",
    wave: "A",
    phase: "P1",
    api: "/api/v1/reports/assets",
    filters: "loại BC · tuyến · kỳ · search",
    grid: "STT · tuyến · hạng mục · SL · ĐVT · trạng thái · cập nhật",
    export: "Excel P2",
    source: "reports.md tab Tài sản · guide Web Báo cáo · 15-SCREEN #17",
    parent: "reports",
    query: "Asset / CSDL hạng mục",
    extra:
      "Hub `reports` giữ menu. Leaf này = trang Kind E riêng.",
  },
  {
    slug: "rpt-su-co",
    title: "BC Sự cố",
    wave: "A",
    phase: "P1",
    api: "/api/v1/reports/incidents",
    filters: "loại · tuyến · từ/đến · search",
    grid: "STT · mã · tuyến · loại · mức · trạng thái · thời gian",
    export: "Excel P2",
    source: "reports.md tab Sự cố · guide Web Báo cáo",
    parent: "reports",
    query: "Incident",
    extra:
      "Drill dòng → MFE Field `/incident/:id`. Không CRUD sự cố trên trang này.",
  },
  {
    slug: "rpt-checkin",
    title: "BC Check-in",
    wave: "A",
    phase: "P1",
    api: "/api/v1/reports/checkins",
    filters: "loại · tuyến · từ/đến · search",
    grid: "STT · cán bộ · tuyến · ngày · điểm · coverage · first→last",
    export: "Excel (P1)",
    source: "reports.md tab Check-in · guide Web BC checkin",
    parent: "reports",
    query: "Patrol check-in",
    extra:
      "Khác `rpt-bao-cao-cong`: đây là lưới xuất Excel; Báo cáo công = KPI + map + InZone.",
  },
  {
    slug: "rpt-bao-cao-cong",
    title: "Báo cáo công",
    wave: "B",
    phase: "P1.5",
    api: "/api/v1/attendance/report",
    filters: "kỳ tuần/tháng · tuyến · user · zone",
    grid: "summary + detail điểm · InZone % · first→last",
    export: "Excel",
    source: "attendance.md Kind E · GET /attendance/report MISSING",
    parent: "attendance",
    query: "AttendanceLog · Check-in",
    extra:
      "Map Leaflet + KPI 4. List pack `attendance` giữ CRUD; trang này chỉ report.",
  },
  {
    slug: "rpt-tuan-duong",
    title: "Báo cáo tuần đường",
    wave: "B",
    phase: "P1.5",
    api: "/api/v1/reports/patrol-road",
    filters: "công ty → QL → Km · kỳ · trạng thái CI",
    grid: "cây Company→QL→Km · coverage · điểm · offline",
    export: "Excel P2",
    source: "patrol.md · GOVOne 021/024-khai-thac-bao-cao-tuan-uong",
    parent: "patrol",
    query: "PatrolSession loại tuần đường",
    extra: "Kind E + tree. List `/patrol` giữ CRUD session.",
  },
  {
    slug: "rpt-tuan-kiem",
    title: "Báo cáo tuần kiểm",
    wave: "B",
    phase: "P1.5",
    api: "/api/v1/reports/patrol-inspect",
    filters: "công ty → QL → Km · kỳ · trạng thái CI",
    grid: "cây Company→QL→Km · hạng mục kiểm · coverage",
    export: "Excel P2",
    source: "patrol.md · GOVOne 020/023-khai-thac-bao-cao-tuan-kiem",
    parent: "patrol",
    query: "PatrolSession loại tuần kiểm",
    extra:
      "Tách khỏi tuần đường. Cùng MFE Report route `/bao-cao/tuan-kiem`.",
  },
  {
    slug: "rpt-tong-hop-bao-tri",
    title: "Tổng hợp bảo trì",
    wave: "B",
    phase: "P2",
    api: "/api/v1/reports/maintenance-summary",
    filters: "kỳ · đơn vị · loại CV",
    grid: "KPI 6 thẻ · series dự án · list WO tóm tắt",
    export: "Excel P2",
    source: "maintenance.md Kind E · GOVOne Tổng hợp bảo trì",
    parent: "maintenance",
    query: "WorkOrder aggregation",
    extra:
      "Chart SoCai-style. List `/maintenance` giữ CRUD công việc.",
  },
  {
    slug: "rpt-nhat-ky-tuan-duong",
    title: "Nhật ký tuần đường",
    wave: "C",
    phase: "P2",
    api: "/api/v1/reports/patrol-log-road",
    filters: "tuyến · kỳ · cán bộ",
    grid: "ngày · tuyến · nội dung nhật ký · km · trạng thái",
    export: "Excel biểu",
    source: "GOVOne › Nhật ký tuần đường · csdl sổ 1",
    parent: "csdl-so-sach",
    query: "PatrolLogBook entries",
    extra: "Read-model sổ BDTX mẫu 1. Không form nhập trên trang report.",
  },
  {
    slug: "rpt-nhat-ky-tuan-kiem",
    title: "Nhật ký tuần kiểm",
    wave: "C",
    phase: "P2",
    api: "/api/v1/reports/patrol-log-inspect",
    filters: "tuyến · kỳ · cán bộ",
    grid: "ngày · tuyến · hạng mục · kết quả · ghi chú",
    export: "Excel biểu",
    source: "GOVOne › Nhật ký tuần kiểm · csdl sổ 8",
    parent: "csdl-so-sach",
    query: "InspectionLogBook entries",
    extra: "Read-model sổ kiểm. Nhập liệu ở `csdl-so-sach` / patrol.",
  },
  {
    slug: "rpt-nhat-ky-cong-viec",
    title: "Nhật ký công việc",
    wave: "C",
    phase: "P2",
    api: "/api/v1/reports/work-logs",
    filters: "tuyến · kỳ · đội · loại việc",
    grid: "ngày · WO · hạng mục · KL · ĐVT · trạng thái",
    export: "Excel",
    source: "GOVOne › Nhật ký công việc · csdl sổ 7",
    parent: "maintenance",
    query: "MaintenanceWorkLog",
    extra: "Khác tổng hợp bảo trì (KPI). Đây là nhật ký dòng việc.",
  },
  {
    slug: "rpt-thien-tai",
    title: "Thiên tai, bão lũ",
    wave: "C",
    phase: "P2",
    api: "/api/v1/reports/disasters",
    filters: "tuyến · từ/đến · loại sự kiện",
    grid: "ngày · tuyến · loại · phạm vi km · mức · thiệt hại tóm tắt",
    export: "Excel",
    source: "GOVOne Số liệu › Thiên tai, bão lũ",
    parent: "incident",
    query: "Incident type=disaster",
    extra: "Chỉ sự kiện thiên tai. Drill → incident.",
  },
  {
    slug: "rpt-thiet-hai",
    title: "Khối lượng thiệt hại",
    wave: "C",
    phase: "P2",
    api: "/api/v1/reports/damage-qty",
    filters: "tuyến · kỳ · hạng mục",
    grid: "tuyến · hạng mục · KL · ĐVT · ước giá · nguồn",
    export: "Excel",
    source: "GOVOne › Khối lượng thiệt hại",
    parent: "incident",
    query: "Incident damage lines",
    extra: "Bảng KL — không phải form ghi nhận hiện trường.",
  },
  {
    slug: "rpt-un-tac",
    title: "Ùn tắc / ngập úng",
    wave: "C",
    phase: "P2",
    api: "/api/v1/reports/congestion",
    filters: "tuyến · từ/đến · loại (ùn tắc|ngập)",
    grid: "thời điểm · tuyến · km · loại · thời lượng · trạng thái",
    export: "Excel",
    source: "GOVOne › Ùn tắc giao thông / ngập úng",
    parent: "incident",
    query: "Incident type=congestion|flood",
    extra: "P2 = lưới kỳ. ITS/TOC overlay DEFER P3.",
  },
  {
    slug: "rpt-hang-muc-hu-hong",
    title: "Hạng mục hư hỏng",
    wave: "C",
    phase: "P2",
    api: "/api/v1/reports/defects",
    filters: "tuyến · kỳ · loại hạng mục · mức",
    grid: "tuyến · km · hạng mục · mức · nguồn (tuần/AI) · TT",
    export: "Excel",
    source: "GOVOne › Hạng mục hư hỏng",
    parent: "ai-vision",
    query: "Defect / Incident",
    extra:
      "Không badge P1/P2/score trên chrome. Drill detection → ai-vision.",
  },
  {
    slug: "rpt-tinh-trang-mat-duong",
    title: "Tình trạng mặt đường",
    wave: "C",
    phase: "P2",
    api: "/api/v1/reports/pavement-condition",
    filters: "tuyến · kỳ · PCI band",
    grid: "đoạn · kmFrom–To · PCI · lớp · ngày đo",
    export: "Excel",
    source: "GOVOne › Tình trạng mặt đường · pavement-section",
    parent: "pavement-section",
    query: "PavementSection + PCI history",
    extra: "Không form Biểu 1. Chart PCI optional P2.",
  },
  {
    slug: "rpt-kiem-tra-cau",
    title: "Kiểm tra cầu",
    wave: "C",
    phase: "P2",
    api: "/api/v1/reports/bridge-inspections",
    filters: "tuyến · cầu · kỳ · loại phiếu",
    grid: "3 tab: tổng hợp · kết quả · phiếu",
    export: "Excel / phiếu",
    source: "GOVOne › Kiểm tra cầu (3 leaf) · csdl sổ 5",
    parent: "csdl-so-sach",
    query: "BridgePassport / Inspection",
    extra: "Một slug · 3 tab. Không tách 3 feature.",
  },
  {
    slug: "rpt-tngt",
    title: "Tai nạn giao thông",
    wave: "C",
    phase: "P2",
    api: "/api/v1/reports/traffic-accidents",
    filters: "tuyến · kỳ · mức · loại thống kê",
    grid: "6 tab: tháng · 6 tháng · nghiêm trọng · so sánh · tổng hợp · thống kê",
    export: "Excel",
    source: "GOVOne › Tai nạn giao thông",
    parent: "incident",
    query: "Incident type=tngt",
    extra: "Một slug · 6 tab. Cấm 6 feature trùng filter.",
  },
  {
    slug: "rpt-vi-pham-hlatdb",
    title: "Vi phạm HLATĐB",
    wave: "C",
    phase: "P2",
    api: "/api/v1/reports/row-violations",
    filters: "tuyến · kỳ · loại vi phạm",
    grid: "2 tab: tổng hợp theo tuyến · thống kê chi tiết",
    export: "Excel",
    source: "GOVOne › Vi phạm hành lang / HLATĐB · csdl sổ 6",
    parent: "csdl-so-sach",
    query: "RowViolation",
    extra: "Nhập liệu ở catalog. Trang này chỉ tổng hợp.",
  },
  {
    slug: "rpt-dem-xe",
    title: "Đếm xe",
    wave: "C",
    phase: "P2",
    api: "/api/v1/reports/traffic-counts",
    filters: "tuyến · điểm đếm · kỳ",
    grid: "3 tab: KQ đếm xe · bảng B.1 · tổng hợp B.2",
    export: "Excel B.1/B.2",
    source: "GOVOne › Đếm xe · csdl sổ 4",
    parent: "csdl-so-sach",
    query: "TrafficCountSummary",
    extra: "Layout cột Excel đúng mẫu B.1/B.2.",
  },
  {
    slug: "rpt-giay-phep-thi-cong",
    title: "Giấy phép thi công",
    wave: "D",
    phase: "P3",
    api: "/api/v1/reports/construction-permits",
    filters: "tuyến · kỳ · trạng thái GP",
    grid: "số GP · tuyến · km · chủ đầu tư · hiệu lực · TT",
    export: "Excel",
    source: "GOVOne Tài liệu › Giấy phép thi công · csdl sổ 6",
    parent: "csdl-so-sach",
    query: "ConstructionPermit",
    extra: "P3. Không form cấp phép trên report.",
  },
  {
    slug: "rpt-cong-van",
    title: "Công văn đi — đến",
    wave: "D",
    phase: "P3",
    api: "/api/v1/reports/official-docs",
    filters: "kỳ · chiều (đi|đến) · đơn vị",
    grid: "số CV · ngày · trích yếu · chiều · đơn vị",
    export: "Excel",
    source: "GOVOne Tài liệu › Công văn đi - đến",
    parent: "ops",
    query: "OfficialDocument (P3)",
    extra: "P3. Entity mới nếu chưa có — SA chốt khi implement.",
  },
];

function md(it) {
  const leaf = it.slug.slice(4);
  const url = `http://localhost:9311/bao-cao/${leaf}`;
  return `# ${it.title} — Feature Context

> **Slug:** \`${it.slug}\` · **Module:** \`Report\` · **Phase:** ${it.phase} · **Wave:** ${it.wave}  
> **Status:** Context  
> **Kind:** **E** (report) — \`/erp-report-context\` · AnalyticsReportShell  
> **Sources:** ${it.source} · hub [reports.md](reports.md) · [15-SCREEN-AI-MAP.md](../15-SCREEN-AI-MAP.md)  
> **Parent / list pack:** \`${it.parent}\` — **cấm** copy CRUD vào trang này  
> **MFE:** \`Linm.Web.RMMS.Report\` · route \`/bao-cao/${leaf}\` · mfeStdUrl \`${url}\`  
> **Demo HTML:** chưa (hub demo \`bao-cao/reports.html\` · leaf khi Design)  
> **Chrome:** skip GOVOne logo/bell/Hồ sơ/Đổi MK · **cấm** \`window.alert\`/\`confirm\`

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | Trang báo cáo Kind E: filter kỳ · Xem · lưới · drill · xuất |
| Persona | Hạt trưởng · Khu QLĐB · lãnh đạo |
| App hiện có | GOVOne KHAI THÁC BÁO CÁO / guide Web Báo cáo — tách leaf khỏi hub \`reports\` |
| DoD | Filter work · Xem ra lưới · drill đúng MFE nguồn · Excel theo cột · không CRUD |
| Align MFE | ${url} |

## 2. Design / UI

| Screen | Pattern | Zones |
|--------|---------|-------|
| Báo cáo | Kind E Full | Title · toolbar (Xem · Làm mới · In · Config FULL) · \`LinErpListFilterBar\` · grid · pager · chart SoCai nếu KPI |

**Filter:** ${it.filters}  
**Grid:** ${it.grid}  
**Export:** ${it.export}  
**Config:** \`LinReportTableConfigModal\` FULL — cấm stub/configHint.  
**Filter layout:** title trái · input + tìm cụm phải — GAP-FILTER-BAR-*.  
**Mock:** 8–15 dòng mẫu từ domain ${it.query}.

${it.extra}

## 3. API

Base Report domain · BFF \`web-bff/api/v1/...\` · **cấm ERP.***

| Method | Path | Mô tả |
|--------|------|-------|
| GET | ${it.api}?from=&to=&routeId=&q= | Xem báo cáo (paged) |
| GET | ${it.api}/export | Excel |

Query đọc ${it.query} — không bảng báo cáo riêng bắt buộc P1 (read-model P2 nếu nặng).

Auth: JWT · tenant · perm \`report.${leaf}.read\`.

## 4. Database

Read-model / view trên entity nguồn (${it.query}). Index theo filter UI (tuyến · ngày · tenant).

## 5. Events / tích hợp

Không publish. Subscribe tùy domain nguồn (P2 push). Dashboard KPI không gộp vào slug này.

## 6. Gaps / quyết định

| ID | Default |
|----|---------|
| GAP-F-RPT-LEAF-01 Tách khỏi hub \`reports\` | Leaf slug + route /bao-cao/${leaf} |
| GAP-P2-REPORT-API-01 | Endpoint stub tới Dev BE |
| GAP-FILTER-BAR | LinErpListFilterBar 1 hàng wrap |
| Demo HTML leaf | Design prototype — không bắt demo trước data-analy |

## 7. Demo checklist (chốt khách)

- [ ] Filter + Xem ra lưới
- [ ] Drill dòng về MFE nguồn
- [ ] Excel cột đúng (nếu P1 export)
- [ ] Config cột FULL
- [ ] Không chrome GOVOne · không alert native
`;
}

for (const it of items) {
  writeFileSync(join(dir, `${it.slug}.md`), md(it), "utf8");
}
console.log(`wrote ${items.length}`);
