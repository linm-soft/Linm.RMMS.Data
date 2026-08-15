# PO — attendance (Chấm công và định vị)

| Field | Value |
|-------|-------|
| feature | `attendance` |
| changeScope | `edit_page` |
| packKind | `list` |
| Feature Kind | **B** — Catalog list A–D + **Slideout** form (`AttendanceFormSlideout`) |
| status | `done` |
| requestSource | run packet `task_be41b753` · `/agent-qldb-workflow` · roleOnly=`po` · `/agent-po` |
| autoApprove | **OFF** (Design gate → `await_confirm` khi tới lượt) |
| prior | data-analy `done` · controlHint `specs/_data-analy/features/attendance-control-hint.md` · hash `1ec355a64b…` · **no Excel cluster** |
| updatedAt | `2026-08-14T16:45:00.000Z` |
| taskId | `task_be41b753` |

## 1. Goal

Chỉnh trang **Chấm công và định vị** Kind B catalog list + Slideout form: shell A–D · toolbar · search work · row menu · View `readOnly` · Create/Edit/Copy. Align demo → MFE `Linm.Web.RMMS.Field` `/patrol/attendance` · BE `Linm.RMMS.WebService` domain **Patrol** · `api/v1/patrol/attendance-logs`. **Cấm ERP.*** · **cấm** `api/v1/rmms/*` · **cấm** prefix `/api/v1/attendance/*` (GAP-F-ATT-04).

Persona: Tuần đường · Hạt trưởng · kế toán công.

Pack này **không** clone Kind E report / Leaflet / Kind D zone chrome từ demo. List CRUD đã có trên MFE — PO chốt **controlHint + seed alias** sau data-analy (GAP route SearchInput · QL.22).

## 2. Current → New (edit_page)

| Layer | Current | New (delta) |
|-------|---------|-------------|
| Demo | Kind E report + Leaflet + Kind D zone | Giữ visual SSOT demo; pack **không** clone chrome/map/KPI |
| MFE list | Kind B `/patrol/attendance` (prior pack) | 1× `LinPageLayout` · Zone A–D · `LinCatalogDataGrid` kéo cột default ON · footer `LinCatalogListPagination` — **cấm** nested CatalogListShell · footerPagination · pageSizeBar · raw table |
| MFE form | Slideout C/E/V/Copy · `route` = **Text** | **Giữ Slideout** · `route` = **SearchInput** `road-route` (38) · View = `readOnly` **không** disabled xám · footer-only Lưu/Hủy |
| Filter | Search + status | + SearchInput tuyến (road-route) · Checkbox «Chỉ lệch zone» |
| Seed | MFE `QL.22` (không có trong CUC2 38) | Alias **`QL.22` → `QL.1`** (demo HTML live + seed master) — **cấm** invent `QL.22` vào 38 |
| API | `api/v1/patrol/attendance-logs` | Giữ CRUD · BFF `web-bff/api/v1/patrol/attendance-logs` · lookup Master road-routes |
| BE | `Linm.RMMS.WebService` · Patrol | `AttendanceLog` · `rmms_attendance_logs` · SHARE=`tenant_keep` · **cấm** parent JSON string |

## 3. DoD (đo được)

1. List load + **search work** (mã · NV · tuyến · status · GPS) — page=1 khi filter đổi.
2. Zone B: SearchInput search · Dropdown status · SearchInput **tuyến** `road-route` · Checkbox lệch zone · Tạo mới **primary trên B** (**cấm** Thêm mới trên A) · Làm mới · config `fa-cog` · History stub.
3. Zone C: grid STT · Mã · Nhân viên · Tuyến · Thời điểm · Lý trình · InZone · Trạng thái · GPS · actions; row menu **Xem · Sửa · Sao chép · Xóa · Lịch sử** (history stub P1).
4. Zone D: `LinCatalogListPagination` pageSize **50 / 100 / 200 / 500**.
5. Form Slideout: validate + save · leave-confirm dirty · Copy → POST new · IdCode `CC-yyyyMMdd-nnn` readonly · footer-only actions.
6. View = `readOnly` (không disabled xám toàn form).
7. Lookup: `route` = SearchInput master 38 — **cấm** free-text. `userName` = Text P1.
8. FE `yarn build` (+ typecheck nếu có) PASS · BE `dotnet build` PASS khi đụng API — Dev ghi implement § Build.
9. Live shell: title + toolbar + grid/empty **không** blank/title-clip (GAP-P2-LAYOUT-06).

## 4. CTX / DEM / DI inventory

| ID | Path | Loại |
|----|------|------|
| CTX-01 | `docs/context/features/attendance.md` | feature |
| CTX-02 | `docs/context/_raw/legacy-govone/demo-maps/attendance-control-map.md` | control-map |
| CTX-03 | `docs/context/_raw/legacy-govone/demo-maps/attendance-actions.md` | actions |
| DEM-01 | `Linm.RMMS.Demo/src/demo/features/attendance-demo.html` | demo entry |
| DEM-02 | `Linm.RMMS.Demo/src/demo/patrol/attendance.html` | page (QL.1) |
| DI-01 | — | **no Excel cluster** (synthetic + demo + CUC2) |
| DI-02 | `specs/_data-analy/features/attendance-control-hint.md` | controlHint |
| DI-03 | `specs/_data-analy/shared-catalogs/road-route-seed.json` | 38 tuyến · có `QL.1` · **không** `QL.22` |
| MFE | `Linm.Web.RMMS.Field` `/patrol/attendance` | UI |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP Patrol | API |

## 5. controlHint (PO chốt từ data-analy — Design map UI · SA map API)

### List filters (Zone B)

| Field key | Label | controlHint | catalogKind |
|-----------|-------|-------------|-------------|
| search | Tìm kiếm | `SearchInput` | text |
| status | Trạng thái | `Dropdown` | enum: Đúng tuyến · Lệch zone · Thiếu điểm · (trống = tất cả) |
| route | Tuyến đường | `SearchInput` | **road-route** (38) |
| onlyOutZone | Chỉ lệch zone | `Checkbox` | bool |
| userName | Nhân viên | `Text` | P1 không master user |

### Form fields

| Field key | Label | controlHint | required |
|-----------|-------|-------------|----------|
| code | Mã chấm công | `Text` readonly IdCode | auto |
| userName | Nhân viên | `Text` | * |
| route | Tuyến đường | `SearchInput` `road-route` | * |
| checkInAt | Thời điểm | `Date` (datetime-local) | * |
| kmPoint | Lý trình | `Text` | |
| lat / lng | GPS | `Text` (number) pair | * |
| inZone | InZone | `Dropdown` Trong zone / Ngoài zone | |
| status | Trạng thái | `Dropdown` 3 enum | * |
| note | Ghi chú | `Text` multiline | |
| updatedAt | Cập nhật | `Date` readonly | |

## 6. Open questions — PO chốt (UNCLEAR data-analy)

| ID | Question | Decision (PO) |
|----|----------|----------------|
| GAP-PO-ATT-01 · GAP-DA-ATT-QL22 | Seed MFE/context `QL.22` không có trong 38 CUC2 | **Không** thêm `QL.22` vào master. Alias seed/demo narrative **`QL.22` → `QL.1`** (khớp demo HTML live + `road-route-seed.json`). Dev đổi `attendanceStore` / `patrolStore` mock `QL.22` → `QL.1`. Context «1 tuyến QL.22» = mock cũ, không phải mã production. |
| GAP-PO-ATT-02 · GAP-DA-ATT-ROUTE | Form `route` Text vs SearchInput | **SearchInput** `catalogKind=road-route` trên form **và** filter Zone B. **Cấm** Input Text cho tuyến. |
| GAP-PO-ATT-03 · GAP-DA-ATT-USER | userName Text vs SearchInput users | **Giữ Text P1.** Master `users` = P2 / UNCLEAR (không seed CUC2). Demo `<select>` NV = mock only. |
| GAP-PO-ATT-04 · GAP-DA-ATT-FILTER-ROUTE | Filter tuyến + lệch zone | **IN P1** Zone B: SearchInput route + Checkbox `onlyOutZone`. |
| GAP-PO-ATT-05 | Form Slideout vs full-page | **Slideout** (đã có · field count catalog log). **Cấm** Resource. View = `readOnly`. |
| GAP-PO-ATT-06 | Kind E report / Kind D zone / Face NFC | **P2 / DEFER** — không block list pack. Excel export **out of scope**. |
| GAP-PO-ATT-07 | parent JSON / ERP path | **Cấm** parent JSON string. **Cấm** `ERP.*` · `api/v1/rmms/*` · `api/v1/attendance/*`. |

## 7. Grid AC (REQUIRED · list)

| ID | AC |
|----|-----|
| AC-G-01 | Zones **A Header · B Toolbar · C Grid · D Pagination** |
| AC-G-02 | Search + status/route/onlyOutZone apply → page=1 |
| AC-G-03 | Row menu Xem / Sửa / Copy / Xóa / Lịch sử |
| AC-G-04 | `LinCatalogDataGrid` + kéo cột default ON |
| AC-G-05 | Footer `LinCatalogListPagination` 50/100/200/500 |
| AC-G-06 | 1× `LinPageLayout` — **cấm** nested CatalogListShell |
| AC-G-07 | Flex + skeleton load — **cấm** blank body |

## 8. Out of scope (this pack)

- Full Leaflet / Kind E report / KPI 4 (giữ demo; API report/summary **MISSING P2**)
- Kind D GeoFence zone form (`GET/POST /attendance/zones` MISSING)
- Face ID / NFC (GAP-F-ATT-01/02 DEFER)
- Live PostGIS `validate-checkin` (P2 stub InZone flag on form)
- Excel export wizard
- Master users SearchInput
- Invent route code `QL.22` vào CUC2 38

## 9. Handoff → Design

| Field | Value |
|-------|-------|
| Kind | B catalog list A–D + Slideout form |
| Prototype | content-only zones A–D · `list-shell-prototype.md` · **skip** note/sidebar/menu/chrome demo |
| reviewUrl | bắt buộc · `autoApprove=OFF` → **await_confirm** (user Approve board) |
| controlHint | bảng §5 — **không** Text cho `route` · seed display `QL.1` |
| Demo visual | `attendance-demo.html` → `patrol/attendance.html` |
| BE | `api/v1/patrol/attendance-logs` · lookup master `road-routes` |
| Next roles | design → sa → team-lead → dev → qa → review = **pending** đến lượt |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po |
| skillVersion | 2026.08.14.5 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.14.5 |
| rulesVersion | 2026.08.14.9 |
| generatedAt | 2026-08-14T16:45:00.000Z |
| versionGate | rechecked |
| contentHashPriorDataAnaly | sha256:1ec355a64b1bcdf471e211c98b74d77fbdca665bd23472f63456457aa538fba4 |
