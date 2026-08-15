# Data-analy — controlHint — citizen (Kind B catalog list + form)

| Field | Value |
|-------|-------|
| feature | `citizen` |
| packKind | `list` |
| mode | `cluster_import` feature-scoped (retry `roleOnly=data_analy` · **no Excel** in ProductRoot · demo + context + CUC2 catalogs) |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.08.20` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.14.5` |
| rulesVersion | `2026.08.14.9` |
| versionGate | `rechecked` |
| contentHash | `sha256:aed65b28a023535141cbe64a35d1089c5bfa537acd0d5191e64049f5f248e023` |
| headerFingerprint | `sha256:ae9e78603ac7fe6441133fb29fa5bc51bca1c750dd4813d6d0a8d2878e87ae31` |
| analyzedAt | `2026-08-14T16:45:00.000Z` |
| cluster | — (không Excel header · synthetic portal P3 + demo HTML) |
| taskId | `task_067181fe` |
| autoApprove | `OFF` |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** lookup API.  
> **Cấm** Dev đoán Text vs SearchInput khi đã có bảng này.  
> **Cấm ERP.*** · domain **Integration** · BE `D:/AI-QLBD/Linm.RMMS.WebService`.  
> **≠** Mobile **Góp ý** (`feedback`) — badge/copy luôn phân biệt.

## Sources

| Source | Path | sha256 |
|--------|------|--------|
| Context | `docs/context/features/citizen.md` | `aed65b28a023535141cbe64a35d1089c5bfa537acd0d5191e64049f5f248e023` |
| Control map | `docs/context/_raw/legacy-govone/demo-maps/citizen-control-map.md` | `bfb6439400cc5ae5dc83920eadab98ff24ead32e48493ed329d3d203802cb22b` |
| Actions | `docs/context/_raw/legacy-govone/demo-maps/citizen-actions.md` | `04f443f9ff7fb5b38184cea03f9f6e1d1784b8508a49601d6108ae18bd99a398` |
| Demo entry | `Linm.RMMS.Demo/src/demo/features/citizen-demo.html` | `2aed47eddbc948ed2d80bc4baf91ac1edeeb0a5307defd766b3edadce15cf0cf` |
| Demo page | `Linm.RMMS.Demo/src/demo/integration/citizen.html` | `1f56c0bcf2d85cce0ed2f5a62c10031184787f7f333858b3e1a8080fad4e8607` |
| Demo data | `Linm.RMMS.Demo/src/demo/integration/js/citizen-data.js` | `517d052b4c1091d1b7e0bc0694c795fc4b9493e66af6a317dc10511a1aaa454c` |
| Shared catalogs | `specs/_data-analy/shared-catalogs/INVESTIGATE-CUC2.md` · `road-route-seed.json` | APPROVED A · 38 tuyến |
| MFE live (read) | `Linm.Web.RMMS.Integration` · `/integration/citizen` · `CitizenListPage` + `CitizenFormPage` | list pack Kind B đã có |
| PO prior | `specs/citizen/po/requirement.md` | inventory 17 fields · controlHint synthetic |

Normalized header (no Excel):

`trackingCode|reporterName|phone|email|incidentType|description|address|lat|lng|road|chainage|photos|videos|reportedAt|otp|status|source|search`

## Kind / zones (handoff Design)

Pack **list** = Kind **B** catalog inbox (MFE Integration). Demo HTML = Kind **G** public host + Kind **D** slideout báo sự cố + Kind **F** map — **không** clone chrome/topnav/user menu vào MFE list pack.

| Zone | Pattern | DoD |
|------|---------|-----|
| A | Header | title «Cổng người dân» — **cấm** Thêm mới trên A |
| B | Toolbar + filter | SearchInput text · status SearchInput/Dropdown · Tạo mới primary · Refresh · config · History stub · **search must work** |
| C | `LinCatalogDataGrid` | kéo cột default ON · STT · Mã · Họ tên · SĐT · Loại · Tuyến · Thời gian · Trạng thái · Nguồn · GPS · row menu Xem/Sửa/Copy/Xóa |
| D | Footer | `LinCatalogListPagination` 50/100/200/500 — **cấm** footerPagination / pageSizeBar / raw table |
| Form | Kind B **full-page** (`CitizenFormPage`) | C/E/V/Copy · View=`<dl>` display (**cấm** Input readOnly xám · **cấm** Slideout/Resource) · footer-only Lưu/Hủy · leave-confirm dirty |
| Public host + track (demo) | Kind G | Landing CTAs · tra cứu mã · **P2** MFE public shell — out of list pack |
| Map pin (demo) | Kind F | Leaflet OSM · GPS — **P2** MFE map strip out of list pack |
| OTP / media upload | mock | OTP optional · mediaMeta string P1 · presign **MISSING** |

**Skip chrome:** logo · hamburger · user Hồ sơ/Đăng xuất demo · Ban.TK skin.

## Control hint — list filters (Zone B · list pack)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchInput` | text | mã · họ tên · SĐT · loại · tuyến · status |
| status | Trạng thái | `SearchInput` | enum 5 | Nháp · Đã gửi · Đã tiếp nhận · Đang xử lý · Hoàn thành · (trống = tất cả) · **cấm** native `<select>` · MFE đã SearchInput static |
| incidentType | Loại sự cố | `SearchInput` | enum 6 | closed demo 6 loại · **không** CUC2 master · SearchInput static OK (≤30) · filter P1 có thể gom trong search |
| road | Tuyến đường | `SearchInput` | **road-route** | Master 38 · **cấm** free-text · list P1 chưa filter riêng — đề xuất Zone B |

## Control hint — form fields (inbox sự cố · list pack)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| trackingCode | Mã theo dõi | `Text` | auto | IdCode `CIT-YYYYMMDD-NNNN` readonly |
| reporterName | Họ tên | `Text` | * | PII |
| phone | Số điện thoại | `Text` | * | tel · PII mask UI |
| email | Email | `Text` | | email · PII |
| incidentType | Loại sự cố | `SearchInput` | * | static 6 · **cấm** native Select · **không** asset-type master (khác sổ TS) |
| description | Mô tả / phản ánh hiện trường | `Text` | * | textarea |
| address | Địa chỉ vị trí | `Text` | | |
| lat | Vĩ độ | `Text` (number) | * | pair GPS |
| lng | Kinh độ | `Text` (number) | * | pair GPS |
| road | Tuyến đường | `SearchInput` | | `catalogKind=road-route` · **cấm** Input Text (MFE hiện Text — GAP) |
| chainage | Lý trình (Km) | `Text` | | vd Km 12+350 |
| status | Trạng thái xử lý | `SearchInput` | * | enum 5 · SearchInput static |
| source | Nguồn | `Text` | auto | readonly = `citizen` |
| reportedAt | Thời gian báo cáo | `Date` | * | datetime-local · ISO offset |
| mediaMeta | Ảnh/Video | `Text` | | filenames mock P1 · **không** Upload BE |
| otp | OTP | `Text` | | optional UX · **DEFER** public portal |

## Demo 6 loại sự cố (alias — **không** map 1:1 asset-type)

Closed demo `incidentTypes` **không** thay seed asset-type 23. Filter/form = SearchInput **static enum**.

| Demo value | Label | controlHint |
|------------|-------|-------------|
| `o-ga` | Ổ gà / mặt đường hư | SearchInput static |
| `sat-lo` | Sạt lở / taluy | SearchInput static |
| `bien-bao` | Biển báo / ATGT | SearchInput static |
| `ngap` | Ngập / thoát nước | SearchInput static |
| `vat-can` | Vật cản lòng đường | SearchInput static |
| `khac` | Khác / phản ánh hiện trường | SearchInput static |

## Demo route ↔ road-route

| Demo / context label | Proposed `road-route.code` | controlHint |
|----------------------|----------------------------|-------------|
| QL.1 · Chi cục QLĐB II.1 (`citizen-data.js`) | `QL.1` | SearchInput · khớp seed 38 |
| Form MFE `road` free text | — | **GAP** — bind SearchInput master · **cấm** giữ Text |

## Lookup APIs (đề xuất SA — **chưa chốt** trừ CRUD đã DONE)

Domain **Integration** · prefix `api/v1/integration` · BFF `web-bff/api/v1/integration` · repo `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** · **cấm** `api/v1/rmms/*` · **cấm** Finance.

| Lookup | API | controlHint consumer | BE |
|--------|-----|----------------------|-----|
| list | `GET /api/v1/integration/citizen-incidents?search=&status=&page=&pageSize=` | Zone B + grid | **DONE** |
| by id | `GET /api/v1/integration/citizen-incidents/{id}` | form View/Edit · XCO | **DONE** |
| create / update | `POST` / `PUT …/citizen-incidents` | form Create/Edit/Copy | **DONE** |
| soft delete | `DELETE …/citizen-incidents/{id}` | toolbar/row | **DONE** |
| public create | `POST /api/v1/public/incidents` | Kind G demo | **DONE** · MFE list pack **P2** |
| public track | `GET /api/v1/public/incidents/{trackingCode}` | Kind G track | **DONE** · MFE **P2** |
| alias | `POST /api/v1/citizen/incident` | rate-limit doc | **DONE** · cùng schema |
| road-route | Master `GET /api/v1/…/road-routes` (Integration) | SearchInput `road` | master pack |
| presign | `POST /api/v1/upload/presign` | media | **MISSING** P1 string stub |
| incident adapter | Incident `source=citizen` | GAP-F-CIT-01 | **OUT P1** |

Entity: `CitizenIncident` · table `rmms_citizen_incidents` · TenantEntity · SHARE=tenant_keep.  
Perms: `integration.citizen-incidents.read|create|update|delete`.  
PII enc-at-rest **DEFER**. Rate-limit 5 req/min/IP **DEFER** stub.

## Seed / mock

- Demo: QL.1 · Chi cục II.1 · sample `CIT-20260720-0002` · PII mask SĐT/email
- IdCode `CIT-YYYYMMDD-NNNN`
- Import Excel **out of scope**
- localStorage fallback khi BFF down (MFE)

## Actions (list pack P1 vs demo 17)

| id | label | list pack P1 | Notes |
|----|-------|--------------|-------|
| refresh | Làm mới | **IN** | toolbar |
| filter / search | Lọc / Tìm | **IN** | Zone B SearchInput |
| create | Tạo mới / Báo sự cố | **IN** | toolbar → `/integration/citizen/new` |
| view / edit / copy / delete | row + toolbar | **IN** | full-page form |
| history | Lịch sử | stub | |
| config | Cấu hình lưới | hint P1 | |
| save / cancel | Lưu / Hủy | **IN** | form footer only |
| track / tra cứu mã | Theo dõi xử lý | **P2** | Kind G |
| media choose/clear | Chọn/Xóa ảnh·video | **P1** string · **P2** file | |
| gps | Lấy vị trí GPS | **P2** | demo Leaflet |
| otp send/verify | OTP | **P2** | optional |
| close / back / discard | Đóng · Quay lại · Hủy thay đổi | **IN** | leave-confirm dirty |
| user-profile / logout | User | **SKIP** chrome | |

## GAP (data-analy → PO/Design/SA/TL)

| ID | Gap | Severity | Hướng |
|----|-----|----------|-------|
| GAP-DA-CIT-ROAD | Form MFE `road` = Text; SSOT = SearchInput road-route | P0 list | T-UI-LKP · T-UI-FIELD |
| GAP-DA-CIT-FILTER-ROAD | List filter chưa SearchInput tuyến | P1 | Design Zone B |
| GAP-DA-CIT-PUBLIC | Kind G public create/track chưa trên MFE list | P2 | không block inbox CRUD |
| GAP-DA-CIT-MAP | Leaflet pin demo · MFE map **OUT** list pack | P2 | |
| GAP-DA-CIT-MEDIA | presign MISSING · mediaMeta string | P2 | |
| GAP-F-CIT-01 | Adapter Incident source=`citizen` | OUT P1 | stub |
| GAP-F-CIT-04 | ≠ `feedback` | P0 copy | badge luôn |

## Handoff

→ **PO:** Kind B list+form inbox · inventory bảng trên · Q GAP `road` Text vs master · **không** mở Excel · **không** clone Kind G chrome  
→ **Design:** A–D + controlHint · **không** Text cho `road` · **không** native Select cho status/incidentType · prototype content-only + reviewUrl · `autoApprove=OFF` → **await_confirm**  
→ **SA:** Integration `citizen-incidents` (đã có) · Master road-route lookup · **cấm** `api/v1/rmms/*` · **cấm parent JSON** · **cấm ERP.***  
→ **TL:** T-CTX · T-PERM · T-UI-LIST (A–D) · T-UI-FORM · T-UI-ACT · **T-UI-LKP · T-UI-FIELD · T-UI-PROD · T-UI-UX** · T-BE/BFF  
→ **Dev:** sau `confirms.beRepo && uiRepo` · MFE `Linm.Web.RMMS.Integration` · `/integration/citizen`

Chain: role này **done**. Roles sau = **pending**. `autoApprove=OFF` → Design/SA/Review dừng `await_confirm` khi tới lượt. **roleOnly** — **cấm** enqueue PO trong task này.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.08.08.20 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.14.5 |
| rulesVersion | 2026.08.14.9 |
| generatedAt | `2026-08-14T16:45:00.000Z` |
| versionGate | rechecked |
| orchestratorSkillVersion | 2026.08.10.2 |
| orchestratorWorkflowVersion | 2026.08.10.2 |
| orchestratorRulesVersion | 2026.08.10.3 |

---
<!-- Version meta: skillVersion=2026.08.08.20 · schemaVersion=1 · workflowVersion=2026.08.14.5 · rulesVersion=2026.08.14.9 · versionGate=rechecked -->
