# Open API và tích hợp — Feature Context

> **Slug:** `integration` · **Module:** `Integration` · **Phase:** P1–P3  
> **Status:** Signed (hub API) · MFE align `edit_page`  
> **Kind:** **G** hub + **B** catalogs Endpoints/Sync/Partners + **full-page** Import/Job/Partner — Confirmed by: ai-autocode-autopilot · TL `task_4d837bc9`  
> **Sources:** `RMMS` §18 · `07` §18 · `09` · `15-SCREEN-AI-MAP.md` · guide Import tài sản  
> **Demo HTML:** `Linm.RMMS.Demo/public/demo/integration/integration.html`  
> **MFE:** `Linm.Web.RMMS.Integration` · `/open-api`  
> **BE:** `Linm.RMMS.WebService` · `api/v1/open-api/*` · **cấm ERP.***  
> **Sibling:** `feedback` (Góp ý) · `citizen` — cùng MFE, slug riêng — **không** gộp  
> **SUPERSEDE:** Kind D slideout Import — Design/SA 2026-08-16 full-page

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | OpenAPI baseline · sync dữ liệu sẵn có · adapter ERP/CMMS/PMIS/ITS/ETC/Camera/SAP/GIS/IoT/Cổng DVC |
| Persona | Dev tích hợp · IT khách |
| App hiện có | Import tài sản Web · offline sync Mobile |
| DoD P1 | Swagger stub · import/export Asset · offline-batch contract · endpoint catalog |
| DoD P2+ | Webhook partner · citizen API |

## 2. Design / UI

| Screen | Pattern | Zones | Ghi chú |
|--------|---------|-------|---------|
| Open API hub | Kind G | A–B tabs · 1× `LinPageLayout` | `/open-api` |
| Endpoints / Sync / Partners | Kind B list A–D + F | SearchTextInput · SearchInput · schema editor | **cấm** nested CatalogListShell |
| Import tài sản | Kind B **full-page** | Z1–Z3 · View=`<dl>` | `/open-api/import` · **cấm** Slideout |
| Sync job | Kind B **full-page** | C/E/V | `/open-api/jobs/tao-moi` · `/:id` |
| Partner | Kind B View | `<dl>` · Bật/Tắt | `/open-api/doi-tac/:id` |
| Offline-batch | Modal | JSON mock | 1 trang mô tả |

**Kind G + B layout (erp-form-context · task_4d837bc9):**

- **Hub A** — `fa-plug` · title «Open API và tích hợp» · badge Kind G + P1 · **cấm** Thêm/Import trên A  
- **Hub B** — OpenAPI · cog schema · Import · Thêm job **chỉ B**  
- **Tab Endpoints** — Method/Path · SearchTextInput · SearchInput phase · schema `integration-endpoints`  
- **Tab Sync** — `LinCatalogDataGrid` · row Xem/Sửa/Retry/Log/Xóa · schema `integration-sync-jobs`  
- **Tab Partners** — health · Bật/Tắt · schema `integration-partners`  
- **Form full-page** — Import/Job/Partner · leave-confirm · **cấm** Resource/Slideout/View Input xám (trừ IdCode)  

**IdCode:** `SYNC-YYYYMMDD-NNNN` (server-gen · FE không gửi Code). Fallback local khi API down — **không** product UX localStorage-only.

**2d readonly:** rule_defaults · Confirmed by: ai-autocode-autopilot  
**2e IdCode:** `SYNC-YYYYMMDD-NNNN`  
**2k:** leave-confirm khi import dirty  
**2h:** Kind B `LinCatalogDataGrid` + `LinCatalogListPagination` sync + partners

## 3. API

| Method | Path | Mô tả | BE status |
|--------|------|-------|-----------|
| GET | `/api/v1/integration/health` | Health adapters | **Signed** |
| GET | `/api/v1/integration/endpoints` | Catalog OpenAPI | **Signed** |
| GET | `/api/v1/integration/sync-jobs` | Sync jobs paged | **Signed** |
| GET | `/api/v1/integration/sync-jobs/{id}` | GetById | **Signed** |
| PUT | `/api/v1/integration/sync-jobs/{id}` | Update job | **Signed** |
| DELETE | `/api/v1/integration/sync-jobs/{id}` | Soft-delete | **Signed** |
| POST | `/api/v1/integration/sync-jobs/{id}/retry` | Retry job | **Signed** |
| GET | `/api/v1/integration/partners` | Partner adapters | **Signed** |
| GET | `/api/v1/integration/partners/{id}` | Partner getById | **Signed** |
| POST | `/api/v1/integration/partners/{id}/toggle` | Bật/Tắt | **Signed** |
| POST | `/api/v1/integration/assets/import` | Đồng bộ TS | **Signed** |
| POST | `/api/v1/integration/sync/offline-batch` | Mobile Lưu trữ | **Signed** |
| POST | `/api/v1/integration/webhooks/{partner}` | Inbound webhook | **MISSING** · P2+ |

> Domain **Integration** only · BFF `web-bff/api/v1/integration/*` · **cấm** ERP.*.

## 4. Database

| Entity | Key columns | Notes |
|--------|-------------|-------|
| SyncJob (`rmms_sync_jobs`) | Id, Code, SyncType, Partner, Status, RecordCount, StartedAt, FinishedAt, Error, FileName, Note, LogJson, AssetType, Region, Route, Section, CompanyCode, IsActive | unique `(CompanyCode, Code)` |
| PartnerAdapter (`rmms_partner_adapters`) | Id, Name, SystemType, Auth, Health, Enabled, Phase, CompanyCode, IsActive | catalog |

## 5. Events / tích hợp

| Event / pattern | Publisher | Consumer |
|-----------------|-----------|----------|
| Partner catalog | Integration | ERP/CMMS/PMIS/ITS/ETC/Camera/SAP/GIS/IoT/DVC |
| `{OrgB}` kỹ thuật · `{OrgA}` quyền/data | — | P2+ |

## 6. Gaps / quyết định

| ID | Question | Default |
|----|----------|---------|
| GAP-F-INT-01 | Public citizen API | P3 `citizen` |
| GAP-F-INT-02 | SAP/ETC | DEFER theo HĐ |
| GAP-F-INT-03 | BE endpoints swagger/import/offline-batch/webhooks | MISSING · be_align khi Signed |
| GAP-F-INT-04 | Admin UI adapter full | P1 catalog mock · P2 webhook |

## 7. Demo checklist (chốt khách)

- [x] Bảng endpoint P1 ưu tiên
- [x] Swagger stub / panel
- [x] Offline-batch mô tả 1 trang (modal)
- [x] Import wizard đủ field guide (loại TS · địa bàn · tuyến · đoạn · file)
- [x] Đủ 19 actions từ control-map
- [x] Leave-confirm khi import dirty
- [x] Không gọi BE

<!-- LEGACY-GOVONE-CAPTURE:START -->
## Legacy GOVOne (auto-capture)

> Auto map từ `tools/legacy-govone-capture` · vision: `_raw/legacy-govone/ai-analysis/`.
> Dùng làm **step context** cho `/qlbd-analy-demo` · `yarn scan-qlbd-demo`.

### Nguồn

- Raw feature: `docs/context/_raw/legacy-govone/features/integration.md`
- Vision packets: 0

### Capture inventory

> **Không có màn GOVOne vision** riêng cho Open API hub.  
> **sourceKind=synthetic** — suy luận module từ product docs (không đợi GOVOne).  
> Docs: `RMMS` §18 · `07` Hạng mục 18 · `09` Integration OpenAPI baseline · guide **Import tài sản** · `15-SCREEN-AI-MAP.md` screen 18.  
> **Cấm** RECAPTURE-GAPS open chỉ vì không có vision GOVOne · **cấm** password · **cấm** clone skin GOVOne.  
> Sibling domain page: `feedback` (Góp ý) — **không** gộp vào slug này.

## Pages (3)

### OPEN API HUB (system)

- **id:** `integration-openapi-hub`
- **url:** (planned) `/open-api`
- **title:** Open API và tích hợp
- **headings:** Endpoint P1 · Swagger stub · Health partner · Sync jobs

#### Labels / field captions

- Method · Path · Mô tả · Phase · Auth · Trạng thái endpoint · OpenAPI URL · Health tổng

#### Inputs

| tag | type | name/id | placeholder |
|-----|------|---------|-------------|
| input | search | endpointSearch | Lọc path / mô tả… |
| select | select-one | phaseFilter | p1 |
| input | text | openApiUrl | /swagger/v1/swagger.json |

#### Actions / buttons (full)

| label | kind | zone | tag | disabled |
|-------|------|------|-----|----------|
| Mở Swagger | nav | toolbar | button | |
| Copy OpenAPI URL | action | toolbar | button | |
| Làm mới health | action | toolbar | button | |
| Xuất catalog endpoint | export | toolbar | button | |
| Làm mới danh sách | action | toolbar | button | |
| Lọc / Tìm | action | filter | button | |
| Xem offline-batch contract | nav | toolbar | button | |
| Đăng ký webhook | create | toolbar | button | P2 stub |
| Quay lại | nav | header | button | |

### IMPORT TÀI SẢN (wizard)

- **id:** `integration-asset-import`
- **url:** (planned) `/open-api/import`
- **title:** Import tài sản KCHT
- **headings:** Chọn nguồn · Mapping · Chạy import

#### Labels / field captions

- Mã job · Loại tài sản · Địa bàn · Tuyến đường · Đoạn đường · File nguồn · Ghi chú · Trạng thái job

#### Inputs

| tag | type | name/id | placeholder |
|-----|------|---------|-------------|
| input | text | jobCode | SYNC-20260801-0001 |
| select | select-one | assetType | mat-duong |
| select | select-one | region | hn |
| select | select-one | route | QL1A |
| input | text | section | Km 12+000 – 14+500 |
| input | file | importFile | Chọn file Excel/CSV |
| textarea | text | note | Ghi chú batch… |
| select | select-one | jobStatus | draft |

#### Actions / buttons (full)

| label | kind | zone | tag | disabled |
|-------|------|------|-----|----------|
| Import tài sản | create | host | button | |
| Chọn file | action | form | button | |
| Tải mẫu Excel | export | form | button | |
| Chạy import | create | footer | button | |
| Hủy import | close | footer | button | |
| Hủy thay đổi | close | footer | button | |
| Đóng | close | header | button | |

### SYNC JOBS + PARTNERS (list)

- **id:** `integration-sync-partners`
- **url:** (planned) `/open-api/sync`
- **title:** Sync jobs & adapters
- **headings:** Jobs · Partners ERP/CMMS/… · Log

#### Labels / field captions

- Mã job · Loại sync · Partner · Trạng thái · Số bản ghi · Bắt đầu · Kết thúc · Lỗi · Partner name · Loại hệ thống · Auth · Health · Phase adapter

#### Inputs

| tag | type | name/id | placeholder |
|-----|------|---------|-------------|
| input | search | jobSearch | Mã / partner… |
| select | select-one | syncTypeFilter | all |
| select | select-one | jobStatusFilter | all |

#### Actions / buttons (full)

| label | kind | zone | tag | disabled |
|-------|------|------|-----|----------|
| Xem log sync | action | row | button | |
| Retry job | action | row | button | |
| Bật/Tắt adapter | action | row | button | |

- **actionCount:** 19 (hub 9 + import 7 + sync/partners 3)
- **fieldCount:** 22 (hub 8 · import 8 · sync/partner 14 unique labels; mapped 22 in control-map)

### Step context checklist

- [ ] Design demo parity legacy zones
- [ ] Control-map fields từ Labels/Inputs/Vision
- [ ] Status Demo → Signed → `/qlbd-align-mfe`
<!-- LEGACY-GOVONE-CAPTURE:END -->

<!-- DEMO-MFE-MODERN:START -->
## Demo MFE modern (erp-form-context)

> Same fields/actions từ capture · UI chuẩn Linm — **không** clone skin legacy.

- Control-map: [`integration-control-map.md`](../_raw/legacy-govone/demo-maps/integration-control-map.md)
- Actions: [`integration-actions.md`](../_raw/legacy-govone/demo-maps/integration-actions.md)
- Fields mapped: 28 · Actions: 19
- Kind hint: **G** hub + **B** catalogs + **full-page** form — leave-confirm · **cấm** Slideout / CatalogListShell nested

Gen demo: `/qlbd-analy-demo @integration` — load control-map trên + `/erp-form-context` rules (2a-K · 2g · common controls · list shell).
<!-- DEMO-MFE-MODERN:END -->

## 8. Tracking (autopilot)

| | |
|--|--|
| Task | `task_5aa247d6` (Dev) · pipeline integration · prior TL `task_4d837bc9` |
| Skill | `/qlbd-analy-demo @integration` |
| sourceKind | **synthetic** (suy luận từ product docs · không màn GOVOne vision · cấm RECAPTURE-GAPS open) |
| Files | `integration.md` · `demo-maps/integration-*.md` · `src/demo/integration/integration.html` · `js/integration-*.js` · `demoCatalog.ts` · `features/integration-demo.html` |
| BE align | OFF (demo) · GAP-F-INT-03 documented · no P0 open gap · Step 4b khi Signed |
| Confirmed by | ai-autocode-autopilot |
