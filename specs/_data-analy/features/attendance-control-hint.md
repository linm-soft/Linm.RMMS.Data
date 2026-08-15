# Data-analy — controlHint — attendance (Kind B catalog list + form)

| Field | Value |
|-------|-------|
| feature | `attendance` |
| packKind | `list` |
| mode | `cluster_import` feature-scoped (retry `roleOnly=data_analy` · **no Excel** in ProductRoot · demo + context + CUC2 catalogs) |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.08.20` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.14.5` |
| rulesVersion | `2026.08.14.9` |
| versionGate | `rechecked` |
| contentHash | `sha256:1ec355a64b1bcdf471e211c98b74d77fbdca665bd23472f63456457aa538fba4` |
| headerFingerprint | `sha256:e25a40747a23e7fc2f50abd7928b8554bb1157e30a72fbd7ab8221a49c7f5630` |
| analyzedAt | `2026-08-14T16:40:00.000Z` |
| cluster | — (không Excel header · synthetic + demo HTML) |
| taskId | `task_66bae191` |
| autoApprove | `OFF` |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** lookup API.  
> **Cấm** Dev đoán Text vs SearchInput khi đã có bảng này.  
> **Cấm ERP.*** · domain **Patrol** · BE `D:/AI-QLBD/Linm.RMMS.WebService`.

## Sources

| Source | Path | sha256 |
|--------|------|--------|
| Context | `docs/context/features/attendance.md` | `1ec355a64b1bcdf471e211c98b74d77fbdca665bd23472f63456457aa538fba4` |
| Control map | `docs/context/_raw/legacy-govone/demo-maps/attendance-control-map.md` | `273568824d9682df4b3795e6e84430bea2b796065bb6abb005786545eeca3bea` |
| Actions | `docs/context/_raw/legacy-govone/demo-maps/attendance-actions.md` | `505211d191adf6e602c6d3a7be0e06e260900c602745c3f793dc0fea1b66070b` |
| Demo entry | `Linm.RMMS.Demo/src/demo/features/attendance-demo.html` | `6b2c62787af0c073dce495dc26be15ac2637d280277cc9e5bcd39ec246c2cae9` |
| Demo page | `Linm.RMMS.Demo/src/demo/patrol/attendance.html` | `e25a40747a23e7fc2f50abd7928b8554bb1157e30a72fbd7ab8221a49c7f5630` |
| Shared catalogs | `specs/_data-analy/shared-catalogs/INVESTIGATE-CUC2.md` · `road-route-seed.json` | APPROVED A · 38 tuyến |
| MFE live (read) | `Linm.Web.RMMS.Field` · `/patrol/attendance` · `AttendanceListPage` + `AttendanceFormSlideout` | list pack Kind B đã có |

## Kind / zones (handoff Design)

Pack **list** = Kind **B** catalog (MFE Field). Demo HTML = Kind **E** report + Kind **F** map + Kind **D** zone — **không** clone chrome/topnav/user menu vào MFE.

| Zone | Pattern | DoD |
|------|---------|-----|
| A | Header | title «Chấm công và định vị» — **cấm** Thêm mới trên A |
| B | Toolbar + filter | SearchInput · status Dropdown · Tạo mới primary · Refresh · config · History stub · **search must work** |
| C | `LinCatalogDataGrid` | kéo cột default ON · row menu Xem/Sửa/Copy/Xóa/Lịch sử |
| D | Footer | `LinCatalogListPagination` 50/100/200/500 — **cấm** footerPagination / pageSizeBar / raw table |
| Form | Kind B **Slideout** (existing MFE) | C/E/V/Copy · View=`readOnly` (**cấm** disabled xám) · footer-only Lưu/Hủy · leave-confirm dirty |
| Map / KPI / report (demo) | Kind E+F | Leaflet + KPI 4 + summary/detail grid — **P2** trên MFE list pack (API report MISSING) |
| Zone config (demo) | Kind D Slideout | GeoFence 8 field · leave-confirm — **P2** (`GET/POST /attendance/zones` MISSING) |

**Skip chrome:** logo · hamburger · user Hồ sơ/Đăng xuất demo · Ban.TK skin.

## Control hint — list filters (Zone B · list pack)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchInput` | text | mã · NV · tuyến · status · GPS |
| status | Trạng thái | `Dropdown` | enum | Đúng tuyến · Lệch zone · Thiếu điểm · (trống = tất cả) |
| route | Tuyến đường | `SearchInput` | **road-route** | Master 38 · **cấm** free-text form; filter P1 có thể gom trong search nếu chưa bind lookup |
| userName | Nhân viên | `Text` | text | **P1** không master user CUC2 · demo select NV = mock |
| inZone / onlyOutZone | Chỉ lệch zone | `Checkbox` | bool | demo `onlyOut` · MFE list P1 chưa có — đề xuất filter bổ sung |

## Control hint — form fields (log chấm công · list pack)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| code | Mã chấm công | `Text` | auto | IdCode `CC-yyyyMMdd-nnn` readonly |
| userName | Nhân viên | `Text` | * | P1 free text · **UNCLEAR** P2 `SearchInput` `users` (Integration) |
| route | Tuyến đường | `SearchInput` | * | `catalogKind=road-route` · **cấm** Input Text (MFE hiện Text — GAP) |
| checkInAt | Thời điểm | `Date` | * | datetime-local |
| kmPoint | Lý trình | `Text` | | vd km12+000 |
| lat | Vĩ độ | `Text` (number) | * | pair GPS |
| lng | Kinh độ | `Text` (number) | * | pair GPS |
| inZone | InZone | `Dropdown` | | true/false · nhãn Trong zone / Ngoài zone |
| status | Trạng thái | `Dropdown` | * | 3 enum trên |
| note | Ghi chú | `Text` | | multiline |
| updatedAt | Cập nhật | `Date` | | readonly display |

## Control hint — demo report filters (Kind E · **out of list-pack P1** / P2)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| period | Kỳ | `Dropdown` | enum | tuần · tháng |
| fromDate | Từ ngày | `Date` | | |
| toDate | Đến ngày | `Date` | | |
| routeId | Tuyến | `SearchInput` | **road-route** | demo `<select id="fRoute">` |
| userId | Nhân viên | `Dropdown` | mock enum | demo `<select id="fUser">` · không seed CUC2 |
| onlyOutZone | Chỉ lệch zone | `Checkbox` | | |

## Control hint — zone form (Kind D · **P2**)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| zoneCode | Mã zone | `Text` | auto | IdCode `ZN-*-###` readonly |
| zoneName | Tên zone | `Text` | * | |
| route | Tuyến | `SearchInput` | * | road-route |
| radiusM | Bán kính (m) | `Text` (number) | * | |
| bufferM | Buffer (m) | `Text` (number) | * | |
| enabled | Bật geo-fence | `Checkbox` | | Switch OK Design |
| zoneNote | Mô tả rule | `Text` | | textarea |
| polygonJson | Polygon JSON | `Text` | | textarea mock [[lat,lng],…] |

## Demo route ↔ road-route (alias — Design/SA/PO)

Closed demo / MFE seed dùng **QL.22** (context mock) và demo HTML **QL.1**. Seed CUC2 **không** có `QL.22`.

| Demo / MFE label | Proposed `road-route.code` | controlHint |
|------------------|----------------------------|-------------|
| QL.1 (demo HTML live) | `QL.1` | SearchInput · khớp seed |
| QL.22 (context + MFE `attendanceStore`) | — | **UNCLEAR** — không mã 1:1 trong 38 · PO chốt alias hoặc thêm route · **cấm** giữ Text vì thiếu mã |

Face/NFC: **DEFER** — không control P1.

## Lookup APIs (đề xuất SA — **chưa chốt** trừ CRUD đã DONE)

Domain **Patrol** · prefix `api/v1/patrol` · BFF `web-bff/api/v1/patrol` · repo `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** · **cấm** `api/v1/rmms/*` · **cấm** `/api/v1/attendance/*` (GAP-F-ATT-04).

| Lookup | API | controlHint consumer | BE |
|--------|-----|----------------------|-----|
| list | `GET /api/v1/patrol/attendance-logs?search=&status=&page=&pageSize=` | Zone B + grid | **DONE** |
| by id | `GET /api/v1/patrol/attendance-logs/{id}` | form View/Edit · XCO | **DONE** |
| create / update | `POST` / `PUT …/attendance-logs` | form Create/Edit/Copy | **DONE** |
| soft delete | `DELETE …/attendance-logs/{id}` | toolbar/row | **DONE** |
| road-route | Master `GET /api/v1/…/road-routes` (Integration) | SearchInput route | master pack |
| users | Master Integration `users` | SearchInput userName P2 | **UNCLEAR** P1 Text |
| report | `GET /api/v1/patrol/attendance/report?from=&to=&routeId=&userId=` | Kind E | **MISSING P2** |
| summary | `GET /api/v1/patrol/attendance/summary?period=` | KPI | **MISSING P2** |
| validate | `POST /api/v1/patrol/attendance/validate-checkin` | InZone server | **MISSING P2** |
| zones | `GET /api/v1/patrol/attendance/zones?routeId=` | Kind D | **MISSING P2** |

Entity: `AttendanceLog` · table `rmms_attendance_logs` · TenantEntity · SHARE=tenant_keep.  
GeoFence P2. Perms: `patrol.attendance-logs.read|create|update|delete`.

## Seed / mock

- Context: 1 tuyến QL.22 · 2 NV · 3 điểm/ngày · 5 ngày · % InZone · 2 điểm lệch
- MFE store: `CC-20260808-001…` · Nguyễn Văn A / Trần Thị B · QL.22
- Demo HTML: QL.1 · Chi cục QLĐB II.1 · sourceKind=real-seed
- Import Excel **out of scope**
- Check-in ≥3/ngày = tenant config (GAP-F-ATT-03)

## Actions (list pack P1 vs demo)

| id | label | list pack P1 | Notes |
|----|-------|--------------|-------|
| refresh | Làm mới | **IN** | toolbar |
| filter / search | Lọc / Tìm | **IN** | Zone B SearchInput |
| create | Tạo mới | **IN** | toolbar primary |
| view / edit / copy / delete | row + toolbar | **IN** | |
| history | Lịch sử | stub | |
| config | Cấu hình lưới | hint P1 | |
| export / export-detail | Excel/CSV | **P2** | demo a04 a25 |
| period-week/month | Kỳ | **P2** Kind E | |
| open-rule | Rule đúng tuyến | **P2** modal | |
| open-zone / save-zone | Zone | **P2** Kind D | |
| nav-checkin / nav-reports | Cross-nav | optional | Patrol / BC |
| map-* / basemap-* | Map | **P2** | skip chrome |
| user-profile / logout | User | **SKIP** chrome | |

## GAP (data-analy → PO/Design/SA/TL)

| ID | Gap | Severity | Hướng |
|----|-----|----------|-------|
| GAP-DA-ATT-ROUTE | Form MFE `route` = Text; SSOT = SearchInput road-route | P0 list | T-UI-LKP · T-UI-FIELD |
| GAP-DA-ATT-QL22 | Seed MFE `QL.22` không có trong 38 CUC2 | P1 | PO chốt alias vs QL.1 |
| GAP-DA-ATT-USER | userName Text; demo select NV không master | P2 | giữ Text P1 |
| GAP-DA-ATT-FILTER-ROUTE | List filter chưa SearchInput tuyến / Checkbox lệch zone | P1 | Design Zone B |
| GAP-DA-ATT-REPORT | Kind E API MISSING | P2 | không block list CRUD |
| GAP-DA-ATT-ZONE | Kind D API MISSING | P2 | |
| GAP-F-ATT-01/02 | Face/NFC | DEFER | không control |

## Handoff

→ **PO:** Kind B list+form · inventory bảng trên · Q UNCLEAR QL.22 vs CUC2 · **không** mở Excel  
→ **Design:** A–D + controlHint · **không** Text cho `route` · prototype content-only + reviewUrl · `autoApprove=OFF` → **await_confirm**  
→ **SA:** Patrol `attendance-logs` (đã có) · Master road-route lookup · **cấm** `api/v1/attendance/*` ERP-style · **cấm parent JSON**  
→ **TL:** T-CTX · T-PERM · T-UI-LIST (A–D) · T-UI-FORM · T-UI-ACT · **T-UI-LKP · T-UI-FIELD · T-UI-PROD · T-UI-UX** · T-BE/BFF  
→ **Dev:** sau `confirms.beRepo && uiRepo` · MFE `Linm.Web.RMMS.Field` · `/patrol/attendance`

Chain: role này **done**. Roles sau = **pending**. `autoApprove=OFF` → Design/SA/Review dừng `await_confirm` khi tới lượt.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.08.08.20 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.14.5 |
| rulesVersion | 2026.08.14.9 |
| generatedAt | 2026-08-14T16:40:00.000Z |
| versionGate | rechecked |
| orchestratorSkillVersion | 2026.08.10.2 |
| orchestratorWorkflowVersion | 2026.08.10.2 |
| orchestratorRulesVersion | 2026.08.10.3 |

---
<!-- Version meta: skillVersion=2026.08.08.20 · schemaVersion=1 · workflowVersion=2026.08.14.5 · rulesVersion=2026.08.14.9 · versionGate=rechecked -->
