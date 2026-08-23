# Phân loại mặt đường (Biểu 1) — ERP Form Context

> **Slug:** `pavement-section` · **Module:** `Asset` / infra  
> **sourceKind:** **synthetic** (product docs Biểu 1 · CSDL BDTX · **không** GOVOne vision packet · **cấm** RECAPTURE vì thiếu GOVOne)  
> **Kind:** **B (Catalog list)** + **Full page form** (≥10 field — không Modal)  
> **Status:** Demo HTML · **run** · task_12c100cf  
> **Sources:** `11-CSDL-SO-SACH-DATABASE-API.md` § Biểu 1 · `features/pavement-section.md` · hồ sơ chuẩn hóa sổ sách · guide/giaiphap  
> **API:** `api/v1/so-ts/pl-mat-duongs` (DOMAIN-MAP Asset · **không** dùng skeleton `/api/v1/infra`)  
> **IdCode:** `MD-YYYYMMDD-NNNN` (vd. `MD-20260731-0001`)  
> **Demo:** `Linm.RMMS.Demo/public/demo/so-ts/pl-mat-duong.html` (+ mirror `src/demo/asset/`)  
> **Control map:** [`pavement-section-control-map.md`](pavement-section-control-map.md)  
> **Readonly lock:** [`pavement-section-readonly-lock.md`](pavement-section-readonly-lock.md)  
> **Demo-maps:** `_raw/legacy-govone/demo-maps/pavement-section-control-map.md` · `-actions.md`  
> **AI (15-map):** Tài sản KCHT § QR/media/PostGIS — **không** engine detect trên Biểu 1 · **no** `aiSupport` badge; AI candidate pin thuộc slug `asset`

## 0. Kind gate (Step 2a-K)

| | |
|--|--|
| **Kind** | **B** — Danh mục / master inventory list + form |
| **UI pattern** | List shell (filter · grid · toolbar) · Form **Full page** (không Modal — >10 input) |
| **Confirm** | **Confirmed by: ai-autocode-autopilot** (docs hồ sơ Biểu 1) |

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | CRUD đoạn mặt đường theo Biểu mẫu số 1 (thống kê phân loại mặt đường) |
| Persona | Khu QLĐB · Văn phòng · Nhà thầu BDTX |
| Map app | Link bản đồ live / GIS draw (`layerCode=mat-duong`) |
| DoD | List + filter · form full · IdCode · import/export Excel cột biểu 1 |

## 2. Design / UI (erp-form-context §8.4 / list §8.7)

### List (Step 2h parity catalog)

| Zone | Control |
|------|---------|
| Header | Title «Phân loại mặt đường» · help · thông báo · user |
| Toolbar | Tạo mới · Import · Export · Làm mới · Cấu hình cột |
| Filter | SearchText · Tỉnh · Tên đường · Từ Km–Đến Km · Tình trạng · Tìm · Xóa điều kiện |
| Grid | STT · Mã · Đường · Tỉnh · KmFrom–To · Kết cấu · Cấp · Tình trạng · ĐV QL · Xem/Sửa/Xóa |
| Pagination | pageSize 20/50 · prev/next |

### Form Full page

| Section | Fields |
|---------|--------|
| Header compact (mặc định full) | Mã · Tên đường · Tỉnh · KmFrom · KmTo · lengthKm |
| Kết cấu | B nền · B mặt · Loại KC · Dày mặt · Cấp đường |
| Khai thác | Số năm · Bàn giao BT/XDCB · Năm đại tu · Năm SC · Tình trạng |
| Đơn vị | ĐV thi công · ĐV quản lý · Chủ QLSD |
| Audit | Ngày cập nhật · Người cập nhật · Ghi chú (readonly sau save một phần) |

### Form toolbar

| Mode | Buttons |
|------|---------|
| Create | Lưu · Huỷ · Mở bản đồ live |
| Edit | Lưu · Huỷ · Xóa · Mở bản đồ live |
| View | Sửa · Đóng · Mở bản đồ live |

### MFE routes (SSOT)

| Mode | Path |
|------|------|
| List | `/so-ts/pl-mat-duong` |
| Create | `/so-ts/pl-mat-duong/tao-moi` |
| View | `/so-ts/pl-mat-duong/:id` |
| Edit | `/so-ts/pl-mat-duong/:id/edit` |
| Copy | `/so-ts/pl-mat-duong/:id/copy` |
| Alias | `?mode=edit` · `?mode=copy` · `?copyFrom=` (deep-link cũ) |

## 3. API (Step §5)

| Action | Method | Path |
|--------|--------|------|
| List | GET | `/api/v1/asset/pavement-sections?search=&province=&road=&kmFrom=&kmTo=&status=&page=` |
| Get | GET | `/api/v1/asset/pavement-sections/{id}` |
| Create | POST | `/api/v1/asset/pavement-sections` |
| Update | PUT | `/api/v1/asset/pavement-sections/{id}` |
| Delete | DELETE | `/api/v1/asset/pavement-sections/{id}` |
| Export | GET | `/api/v1/asset/pavement-sections/export` (OUT pack stub) |
| Import | POST | `/api/v1/asset/pavement-sections/import` (OUT pack stub) |
| Init | GET | `/api/v1/asset/pavement-sections/form-init-data` (OUT pack stub) |

Toast: success hardcode VI · error từ BE (form-api-error-handling).

> **BE status (task_94b861f5):** implemented trên `Linm.RMMS.WebService` Asset · `api/v1/so-ts/pl-mat-duongs` (+ BFF) · migration `rmms_pavement_sections` · **GAP-F-PVT-01 closed** (cấm ERP.*).

## 4. Database

Entity `PavementSection` — xem `11-CSDL-SO-SACH-DATABASE-API.md` §1.2 Biểu 1.  
Index: `(CompanyCode, Code)` unique · `(RoadName, KmFrom, KmTo)` · GIST optional nếu có Geom.

## 5. IdCode (Step 2e)

| | |
|--|--|
| Prefix | `MD` |
| Format | `MD-YYYYMMDD-NNNN` |
| Generate | BE `IIdCodeService.GenerateAsync()` on create · Copy → reset |
| Demo | mock `genCode()` localStorage |

## 6. Permissions (Step 2p)

| Action | Permission gợi ý |
|--------|------------------|
| View list/form | `infra.pavement.view` |
| Create/Edit | `infra.pavement.edit` |
| Delete | `infra.pavement.delete` |
| Import/Export | `infra.pavement.import` / `.export` |

## 7. Gaps §9

| ID | Severity | Note |
|----|----------|------|
| GAP-P2-KIND-RMMS | Info | Không phải voucher ERP KT — Kind B catalog adapted |
| GAP-P1-CC | P1 | Demo HTML chưa wire `@linm-soft-org/linm-web-common-components` — parity visual only |
| GAP-P2-LKP | — | **Closed** — SearchInput master tỉnh/kết cấu/cấp/tình trạng (task_e95b3b89) |
| GAP-P2-DT | P1 | `UpdatedAt` UTC ↔ local khi implement MFE thật |
| GAP-RPT-SRC-PAV-01 | — | **Closed** — Pci · LayerCode · MeasuredAt (task_6a731526) |
| GAP-F-PVT-01 | — | **Closed** — BE `api/v1/so-ts/pl-mat-duongs` (task_94b861f5) |
| GAP-P2-ACT-DELETE | — | **Closed** — toolbar/row Delete → soft DELETE (task_d0fcb3d7) |
| GAP-TL-FORMTYPE-01 | — | **Closed** — stamped T-UI-ACT-01 · T-BE-CRUD-01 · T-QA-CRUD-01 |
| GAP-LKP-SELECT | — | **Closed** — native `<select>` / `Select` → SearchInput (task_e95b3b89) |
| GAP-PROD-VIEW-RO | — | **Closed** — View = `<dl>` display · form page riêng (task_e95b3b89) |
| GAP-TL-ROUTE-01 | — | **Closed** — dedicated `/:id/edit` · `/:id/copy` (task_96b1864b) |

## 8. Demo checklist

- [x] List filter + grid cột Biểu 1
- [x] Form full đủ field bắt buộc
- [x] Mã MD-* hiển thị (mock generate)
- [x] Lưu local / mock API payload JSON
- [x] Link mở bản đồ live vẽ đoạn
- [x] Mọi action control-map (23) có trên demo
- [x] Cấu hình cột · Xóa điều kiện · pager 20/50
- [x] View: Sửa · Đóng · không disabled xám
- [ ] Wire common-components (align-mfe sau Signed)

<!-- LEGACY-GOVONE-CAPTURE:START -->
## Legacy GOVOne (auto-capture)

> Auto map từ `tools/legacy-govone-capture` · vision: `_raw/legacy-govone/ai-analysis/`.
> Dùng làm **step context** cho `/qlbd-analy-demo` · `yarn scan-qlbd-demo`.

### Nguồn

- Raw feature: `docs/context/_raw/legacy-govone/features/pavement-section.md`
- Vision packets: 0

### Capture inventory

> **Không có màn GOVOne vision** riêng «Biểu 1 / Phân loại mặt đường».  
> GOVOne **SỔ TÀI SẢN** (`ketcauhatang.aspx`) đã map slug **`asset`** — không clone skin làm SSOT của `pavement-section`.  
> Capture synthetized từ `features/pavement-section.md` · hồ sơ CSDL Biểu 1 · `11-CSDL-SO-SACH-DATABASE-API.md` § Biểu 1.  
> Source: product docs — **không** password · **không** clone skin GOVOne.

## Pages (2)

### DANH SÁCH PHÂN LOẠI MẶT ĐƯỜNG (list)

- **id:** `pavement-section-list`
- **url:** (planned) `/so-ts/pl-mat-duongs`
- **title:** Phân loại mặt đường (Biểu 1)
- **headings:** Tiêu đề · Toolbar · Bộ lọc · Lưới dữ liệu · Phân trang

#### Labels / field captions

- Tìm (Mã / tên đường):
- Tỉnh / TP:
- Tên đường:
- Từ Km:
- Đến Km:
- Tình trạng:
- STT · Mã · Tên đường · Tỉnh · Từ Km · Đến Km · Kết cấu · Cấp · Tình trạng · ĐV quản lý

#### Inputs (filter)

| tag | type | name/id | placeholder |
|-----|------|---------|-------------|
| input | search | fSearch | Mã / đường |
| select | select-one | fProvince | Tất cả |
| input | text | fRoad | QL.1 |
| input | number | fKmFrom | 0 |
| input | number | fKmTo | 10 |
| select | select-one | fStatus | Tất cả |
| select | select-one | fPageSize | 20 |

#### Actions / buttons (full)

| label | kind | zone | tag | disabled |
|-------|------|------|-----|----------|
| Tạo mới | create | toolbar | button | |
| Import | import | toolbar | button | |
| Export | export | toolbar | button | |
| Làm mới | action | toolbar | button | |
| Cấu hình cột | action | toolbar | button | |
| Tìm | filter | filter | button | |
| Xóa điều kiện | filter | filter | button | |
| Xem | view | grid | button | |
| Sửa | edit | grid | button | |
| Xóa | destructive | grid | button | |
| Vẽ trên bản đồ live | nav | header | a | |
| Trợ giúp | nav | header | button | |
| Thông báo | nav | header | button | |
| User menu | nav | header | button | |
| Trang trước | nav | pager | button | |
| Trang sau | nav | pager | button | |

### FORM ĐOẠN MẶT ĐƯỜNG (Kind B full page)

- **id:** `pavement-section-form`
- **url:** (planned) `/so-ts/pl-mat-duongs/new` · `/so-ts/pl-mat-duongs/:id`
- **title:** Tạo / Sửa / Xem — Phân loại mặt đường

#### Inputs

| tag | type | name/id | placeholder |
|-----|------|---------|-------------|
| input | text | code | MD-YYYYMMDD-NNNN |
| input | text | roadName | QL.1 |
| select | select-one | provinceName | Lạng Sơn |
| input | number | kmFrom | 0 |
| input | number | kmTo | 1 |
| input | number | lengthKm | 1 |
| input | number | baseWidthM | 23 |
| input | number | surfaceWidthM | 21 |
| select | select-one | structureType | BTN |
| input | number | surfaceThicknessCm | 12 |
| select | select-one | roadClass | I |
| input | text | yearsInService | 6 |
| input | checkbox | handoverMaintenance | |
| input | checkbox | handoverConstruction | |
| input | number | lastMajorRehabYear | 2020 |
| input | number | lastSurfaceRepairYear | 2022 |
| select | select-one | status | Tốt |
| input | text | constructionUnit | Công ty XD … |
| input | text | manageUnit | Khu QLĐB I |
| input | text | ownerUnit | Công ty … |
| textarea | text | notes | |
| input | text | updatedAt | (readonly) |
| input | text | updatedBy | (readonly) |

#### Actions / buttons (full)

| label | kind | zone | tag | disabled |
|-------|------|------|-----|----------|
| ← Danh sách | nav | header | button | |
| Lưu | create/save | toolbar | button | view hidden |
| Huỷ | close | toolbar | button | |
| Xóa | destructive | toolbar | button | create/view hidden |
| Sửa | edit | toolbar | button | create/edit hidden |
| Đóng | close | toolbar | button | create/edit hidden |
| Mở bản đồ live | nav | toolbar | a | |

## Related (không remap)

- GOVOne Sổ tài sản → slug **`asset`**
- Bản đồ vẽ đoạn → `gis-draw-live` (`layerCode=mat-duong`)

### Step context checklist

- [x] Design demo parity synthetic zones (docs Biểu 1 · erp-form-context Kind B)
- [x] Control-map fields từ Labels/Inputs (product docs · 22 fields · 23 actions)
- [ ] Status Demo → Signed → `/qlbd-align-mfe` + BE Step 4b
<!-- LEGACY-GOVONE-CAPTURE:END -->
