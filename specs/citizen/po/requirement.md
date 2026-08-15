# PO — citizen (Cổng người dân)

| Field | Value |
|-------|-------|
| feature | `citizen` |
| changeScope | `edit_page` |
| packKind | `list` |
| Feature Kind | **B** — Catalog list A–D + **full-page** form (`CitizenFormPage`) |
| status | `done` |
| requestSource | run packet `task_a77e191e` · `/agent-qldb-workflow` · roleOnly=`po` · `/agent-po` |
| autoApprove | **OFF** (Design gate → `await_confirm` khi tới lượt) |
| prior | data-analy `done` · controlHint `specs/_data-analy/features/citizen-control-hint.md` · hash `aed65b28a0…` · **no Excel cluster** |
| updatedAt | `2026-08-14T17:20:00.000Z` |
| taskId | `task_a77e191e` |

## 1. Goal

Chỉnh trang **Cổng người dân** (inbox sự cố công dân) Kind B catalog list + full-page form: shell A–D · toolbar · search work · row menu · View display · Create/Edit/Copy. Align demo → MFE `Linm.Web.RMMS.Integration` `/integration/citizen` · BE `Linm.RMMS.WebService` domain **Integration** · `api/v1/integration/citizen-incidents`. **Cấm ERP.*** · **cấm** `api/v1/rmms/*`.

Persona: Điều phối Integration · Hạt trưởng (inbox). Công dân public host = **P2** (giữ demo Kind G).

**≠** Mobile **Góp ý** (`feedback`) — badge/copy luôn phân biệt (GAP-F-CIT-04).

Pack này **không** clone Kind G public chrome · Leaflet Kind F · OTP từ demo. PO chốt **controlHint** sau data-analy: `road` = SearchInput `road-route` (38) — **cấm** Text.

## 2. Current → New (edit_page)

| Layer | Current | New (delta) |
|-------|---------|-------------|
| Demo | Kind G host + Kind D slideout + Kind F map · localStorage | Giữ visual SSOT demo; pack **không** clone chrome/map/OTP |
| MFE list | Kind B `/integration/citizen` (prior pack) | 1× `LinPageLayout` · Zone A–D · `LinCatalogDataGrid` kéo cột default ON · footer `LinCatalogListPagination` — **cấm** nested CatalogListShell · footerPagination · pageSizeBar · raw table |
| MFE form | `CitizenFormPage` full-page · `road` = **Text** | **Giữ full-page** · `road` = **SearchInput** `road-route` (38) · `incidentType`/`status` = SearchInput static · View = `<dl>` display **không** Input xám · **cấm** Slideout/Resource · footer-only Lưu/Hủy |
| Filter | Search + status SearchInput | + SearchInput tuyến `road-route` Zone B (GAP-DA-CIT-FILTER-ROAD) |
| Seed | Demo `QL.1` · Chi cục II.1 | Khớp CUC2 38 · **cấm** invent tuyến ngoài seed |
| API | `api/v1/integration/citizen-incidents` | Giữ CRUD · BFF `web-bff/api/v1/integration/citizen-incidents` · lookup Master `road-routes` · localStorage fallback khi BFF down |
| BE | `Linm.RMMS.WebService` · Integration | `CitizenIncident` · `rmms_citizen_incidents` · SHARE=`tenant_keep` · **cấm** parent JSON string |

## 3. DoD (đo được)

1. List load + **search work** (mã · họ tên · SĐT · loại · tuyến · status) — page=1 khi filter đổi.
2. Zone B: SearchInput search · SearchInput status (enum 5) · SearchInput **tuyến** `road-route` · Tạo mới **primary trên B** (**cấm** Thêm mới trên A) · Làm mới · config `fa-cog` · History stub.
3. Zone C: grid STT · Mã theo dõi · Họ tên · SĐT · Loại · Tuyến · Thời gian · Trạng thái · Nguồn · GPS · actions; row menu **Xem · Sửa · Sao chép · Xóa · Lịch sử** (history stub P1).
4. Zone D: `LinCatalogListPagination` pageSize **50 / 100 / 200 / 500**.
5. Form full-page: validate + save · leave-confirm dirty · Copy → POST new · IdCode `CIT-YYYYMMDD-NNNN` readonly · footer-only actions · source readonly=`citizen`.
6. View = `<dl>` / display (không disabled xám toàn form · **cấm** Input readOnly xám).
7. Lookup: `road` = SearchInput master 38 — **cấm** free-text. `incidentType` = SearchInput static 6 loại demo — **cấm** native `<select>` · **không** map asset-type. `status` = SearchInput static 5.
8. FE `yarn build` (+ typecheck nếu có) PASS · BE `dotnet build` PASS khi đụng API — Dev ghi implement § Build.
9. Live shell: title + toolbar + grid/empty **không** blank/title-clip (GAP-P2-LAYOUT-06).
10. Copy/badge **không** nhầm `feedback`.

## 4. CTX / DEM / DI inventory

| ID | Path | Loại |
|----|------|------|
| CTX-01 | `docs/context/features/citizen.md` | feature |
| CTX-02 | `docs/context/_raw/legacy-govone/demo-maps/citizen-control-map.md` | control-map |
| CTX-03 | `docs/context/_raw/legacy-govone/demo-maps/citizen-actions.md` | actions |
| DEM-01 | `Linm.RMMS.Demo/src/demo/features/citizen-demo.html` | demo entry |
| DEM-02 | `Linm.RMMS.Demo/src/demo/integration/citizen.html` | page |
| DEM-03 | `Linm.RMMS.Demo/src/demo/integration/js/citizen-data.js` | mock QL.1 |
| DI-01 | — | **no Excel cluster** (synthetic portal P3) |
| DI-02 | `specs/_data-analy/features/citizen-control-hint.md` | controlHint |
| DI-03 | `specs/_data-analy/shared-catalogs/road-route-seed.json` | 38 tuyến · có `QL.1` |
| MFE | `Linm.Web.RMMS.Integration` `/integration/citizen` | UI |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP Integration | API |

## 5. controlHint (PO chốt từ data-analy — Design map UI · SA map API)

### List filters (Zone B)

| Field key | Label | controlHint | catalogKind |
|-----------|-------|-------------|-------------|
| search | Tìm kiếm | `SearchInput` | text |
| status | Trạng thái | `SearchInput` | enum: Nháp · Đã gửi · Đã tiếp nhận · Đang xử lý · Hoàn thành · (trống = tất cả) |
| road | Tuyến đường | `SearchInput` | **road-route** (38) |
| incidentType | Loại sự cố | `SearchInput` | static 6 — **P1** có thể gom trong search; **không** bắt buộc filter riêng nếu Design gom |

### Form fields

| Field key | Label | controlHint | required |
|-----------|-------|-------------|----------|
| trackingCode | Mã theo dõi | `Text` readonly IdCode | auto |
| reporterName | Họ tên | `Text` | * |
| phone | Số điện thoại | `Text` tel | * |
| email | Email | `Text` email | |
| incidentType | Loại sự cố | `SearchInput` static 6 | * |
| description | Mô tả / phản ánh hiện trường | `Text` multiline | * |
| address | Địa chỉ vị trí | `Text` | |
| lat / lng | GPS | `Text` (number) pair | * |
| road | Tuyến đường | `SearchInput` `road-route` | |
| chainage | Lý trình (Km) | `Text` | |
| status | Trạng thái xử lý | `SearchInput` static 5 | * |
| source | Nguồn | `Text` readonly=`citizen` | auto |
| reportedAt | Thời gian báo cáo | `Date` datetime-local | * |
| mediaMeta | Ảnh/Video | `Text` filenames mock | |
| otp | OTP | — | **DEFER** list pack |

### Status values

draft · sent · received · processing · done

### Incident types (static — **không** CUC2 asset-type)

`o-ga` · `sat-lo` · `bien-bao` · `ngap` · `vat-can` · `khac`

## 6. Open questions — PO chốt (UNCLEAR data-analy)

| ID | Question | Decision (PO) |
|----|----------|----------------|
| GAP-PO-CIT-01 · GAP-DA-CIT-ROAD | Form `road` Text vs SearchInput `road-route` | **SearchInput** `catalogKind=road-route` trên form **và** filter Zone B. **Cấm** Input Text cho tuyến. Seed display `QL.1` (khớp demo + CUC2 38). |
| GAP-PO-CIT-02 · GAP-DA-CIT-FILTER-ROAD | List chưa filter tuyến | **IN P1** Zone B SearchInput `road`. |
| GAP-PO-CIT-03 | Form Slideout vs full-page | **Full-page** `CitizenFormPage` (đã có · data-analy). **Cấm** Resource/Slideout. View = display/`<dl>`. |
| GAP-PO-CIT-04 · GAP-DA-CIT-PUBLIC | Kind G public create/track trên MFE | **P2 / DEFER** — không block inbox CRUD. BE public endpoints **DONE** nhưng UI pack này = staff inbox only. |
| GAP-PO-CIT-05 · GAP-DA-CIT-MAP | Leaflet pin | **P2 / DEFER** — GPS lat/lng Text pair P1 · không map strip. |
| GAP-PO-CIT-06 · GAP-DA-CIT-MEDIA | Presign upload | **P1** `mediaMeta` string stub · presign **MISSING** không block. |
| GAP-PO-CIT-07 · GAP-F-CIT-01 | Adapter Incident `source=citizen` | **OUT P1** stub. |
| GAP-PO-CIT-08 | OTP / SMS / PII enc-at-rest | **DEFER**. Rate-limit 5/min/IP stub P2. |
| GAP-PO-CIT-09 | parent JSON / ERP path | **Cấm** parent JSON string. **Cấm** `ERP.*` · `api/v1/rmms/*`. |
| GAP-PO-CIT-10 · GAP-F-CIT-04 | Nhầm `feedback` | **P0 copy** — badge/title ≠ Góp ý nội bộ. |

## 7. Grid AC (REQUIRED · list)

| ID | AC |
|----|-----|
| AC-G-01 | Zones **A Header · B Toolbar · C Grid · D Pagination** |
| AC-G-02 | Search + status/road apply → page=1 |
| AC-G-03 | Row menu Xem / Sửa / Copy / Xóa / Lịch sử |
| AC-G-04 | `LinCatalogDataGrid` + kéo cột default ON |
| AC-G-05 | Footer `LinCatalogListPagination` 50/100/200/500 |
| AC-G-06 | 1× `LinPageLayout` — **cấm** nested CatalogListShell |
| AC-G-07 | Flex + skeleton load — **cấm** blank body |

## 8. Out of scope (this pack)

- Full Kind G public host + tra cứu mã trên MFE (giữ demo)
- Leaflet / Kind F map shell
- Real media upload / presign
- OTP / SMS notify
- PII field-level encryption at rest
- Incident adapter `source=citizen` (GAP-F-CIT-01)
- Import Excel wizard
- Clone demo chrome (logo · hamburger · user menu)

## 9. Handoff → Design

| Field | Value |
|-------|-------|
| Kind | B catalog list A–D + full-page form |
| Prototype | content-only zones A–D · `list-shell-prototype.md` · **skip** note/sidebar/menu/chrome demo |
| reviewUrl | bắt buộc · `autoApprove=OFF` → **await_confirm** (user Approve board) |
| controlHint | bảng §5 — **không** Text cho `road` · **không** native Select cho status/incidentType |
| Demo visual | `citizen-demo.html` → `integration/citizen.html` |
| BE | `api/v1/integration/citizen-incidents` · lookup master `road-routes` |
| Next roles | design → sa → team-lead → dev → qa → review = **pending** đến lượt |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po |
| skillVersion | 2026.08.14.5 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.14.5 |
| rulesVersion | 2026.08.14.9 |
| generatedAt | 2026-08-14T17:20:00.000Z |
| versionGate | rechecked |
| contentHashPriorDataAnaly | sha256:aed65b28a023535141cbe64a35d1089c5bfa537acd0d5191e64049f5f248e023 |
