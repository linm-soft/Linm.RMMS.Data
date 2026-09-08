# PO — Requirement — traffic-sign-type (Loại biển báo · QCVN 41)

| Field | Value |
|-------|-------|
| feature | `traffic-sign-type` |
| this role | `po` · `/agent-po` |
| changeScope | `new_page` (pipeline docs · live Master+Integration scaffold — bind SSOT) |
| packKind | **`master`** (`master_catalog`) — PO confirm |
| Feature Kind | **B** — Catalog flat list + form (C/E/V/Copy) |
| demo | **N/A** (`master-catalog-no-demo`) — **cấm** DEM-* · **cấm** GOVOne chrome |
| status | `done` |
| requestSource | run packet `task_431c0ff8` · `/agent-qldb-workflow` · roleOnly=`po` · `/agent-po` |
| autoApprove | **ON** — Design/SA/Review khi tới lượt → agent tự confirm · enqueue role kế. Role PO **không** gate confirm. |
| e2eQa | **ON** — queued tới `/agent-qa*` · **cấm** e2e / `yarn start:std` / `yarn build` ở role PO |
| prior · data_analy | status=`confirmed` · compact=`handoff/data_analy-compact.md` · control-hint + real-data · contentHash `sha256:e3aada6d5b40ee2b06635701491bbf3cca71444f95c42b42bbc1bc9d0f03ddbb` · **cấm** re-scan demo (**GAP-PO-DEMO-RESCAN-01**) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Master` · `/mas/loai-bien-bao` |
| mfeStdUrl | `http://localhost:9318/mas/loai-bien-bao` |
| mfeStdRoute | `/mas/loai-bien-bao` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Integration** · `api/v1/integration/traffic-sign-types` · **cấm ERP.*** · **cấm** `api/v1/rmms/*` |
| be_repo_confirm | `approve` (`Linm.RMMS.WebService`) |
| ui_repo_confirm | `approve` (`Linm.Web.RMMS.Master`) |
| formPattern | **Slideout** (live · Autopilot chốt · <10 fields — peer Modal OOS) |
| grid_standard | `po-design-grid-standard` |
| slideout_layout | `footer_actions_only` |
| updatedAt | `2026-09-06T02:30:00.000Z` |
| taskId | `task_431c0ff8` · analy `task_6a62b9b6` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.05.03` |
| rulesVersion | `2026.09.05.8` |

## 1. Goal

Chốt **danh mục dùng chung** loại biển báo QCVN 41 (1 dòng / mã biển `I.414b`, `P.102`, …) trên MFE Master: Kind B list + Slideout CRUD + seed Excel/CSV `gov-vn` + SearchInput consumer Sổ TS `TRAFFIC_SIGN` — **trước** hồ sơ asset dùng `trafficSignTypeCode`.

Persona: Admin Master · Import ops · Kỹ thuật viên Sổ TS biển báo.

**packKind confirm:** `master` · DEM **N/A** · UI chốt Design prototype + `design_confirm`.  
**devSlash:** `/agent-dev` (list + Slideout form · **không** oms-map / ai-detect / camera).

**Cấm ERP.*** · **cấm** `api/v1/rmms/*` · **cấm** invent mã / pict icon · **cấm** demo-json SSOT · **cấm** re-scan demo (**GAP-PO-DEMO-RESCAN-01**).

## 2. Current → New (`new_page` · REQUIRED)

Nguồn SSOT: control-hint + real-data §A+§B · contentHash khớp · **không** crawl demo/CTX lại.

| Layer | Current (live 2026-09-06) | New (PO chốt) |
|-------|---------------------------|---------------|
| Docs pipeline | stubs / draft PO | Full requirement + Grid AC + Screens + Leave |
| MFE | `/mas/loai-bien-bao` Kind B + Slideout scaffold | Bind controlHint · filter-bar HARD · leave-confirm |
| BE | Integration `traffic-sign-types` live | Giữ path · **cấm** invent ERP |
| DOMAIN-MAP | **0** slug `traffic-sign-type` | SA thêm → Integration (**GAP-TST-DM-01**) |
| Seed | CSV ~380 + Excel QCVN · icon NULL | EnsureFromImportedAssets **chỉ thêm** mã dump thiếu — **không** ghi đè tên official (**GAP-TST-SEED-01**) |
| Icon | NULL default | Form Text URL/path · user config · **cấm** seed pict (**GAP-TST-ICON-01**) |
| Form shell | Live **Slideout** (file `*FormModal*`) | **Slideout** footer actions only (**GAP-TST-FORM-01** chốt) |
| Consumer | SearchInput `traffic-sign-type` | Wire 2li · derived `roadSignContent` readonly |

**Không đổi:** Kind B CatalogListShell · ADMIN menu `rmms-master-loai-bien-bao` · Integration prefix · pagination 50/100/200/500 · toast not alert · DEM skip.

## 3. Personas / DoD

DoD P1 (đo được):

1. List Kind B load + **search work** (mã biển · nội dung CI)
2. Filter Zone B: `SearchTextInput` + `Dropdown` nhóm P/W/R/I/S(+KHAC) · **`LinErpListFilterBar`** · 🔍 mép phải · **không** nút Tìm
3. Toolbar FULL: Làm mới · Lịch sử · Sửa config (`fa-cog`) · **+ Tạo mới** — **cấm** Thêm mới trên Zone A
4. Grid cột: mã · nội dung · rộng · dài · nhóm · hình dạng · icon · hiệu lực · row menu Xem/Sửa/Copy/Lịch sử
5. View = `readOnly` (không disabled xám)
6. Slideout C/E/V/Copy: validate + save · leave-confirm dirty · footer Lưu/Hủy
7. `code` lock khi edit · giữ case · = Excel **Mã biển báo**
8. `name` = Excel **Tên tiếng việt** SSOT · `nameEn` = Excel **Tên tiếng anh** — **cấm** dịch thêm
9. Seed chỉ từ Excel/CSV/dump thật · icon NULL tới user config
10. Consumer Sổ TS: `trafficSignTypeCode` = **SearchInput** catalogKind=`traffic-sign-type` · nội dung derived — **cấm** free-text khi đã có master
11. FE/BE build PASS khi Dev chạy · **cấm ERP.*** — **không** build ở role PO

## 4. CTX / DEM / DI inventory

| ID | Path | Loại | Bắt buộc |
|----|------|------|----------|
| CTX-01 | `docs/context/features/traffic-sign-type.md` | feature P0 | ✅ |
| CTX-02 | `docs/context/features/master.md` | hub Master | ✅ |
| CTX-03 | `docs/context/features/so-ts-traffic-sign.md` | consumer TRAFFIC_SIGN | ✅ |
| CTX-04 | `docs/context/features/import-gov-ssot.md` | seed gov-vn | P1 |
| DEM-* | — | — | **skip** (`packKind=master`) |
| DI-01 | `data-import/so-hieu-bien-bao/traffic_sign_types.csv` | seed ~380 | P0 |
| DI-02 | `data-import/so-hieu-bien-bao/Số hiệu biển báo.xlsx` | official names SSOT | P0 |
| DA-HINT | `specs/_data-analy/features/traffic-sign-type-control-hint.md` | controlHint | P0 |
| DA-REAL | `specs/_data-analy/features/traffic-sign-type-real-data.md` | §A+§B PASS | P0 |
| PROT-01 | `specs/traffic-sign-type/ui/prototype/` | Design gen | P0 từ Design |

headerFingerprint: `sha256:csv:code,name,name_en,group_code,shape,width,height,sort_order`

## 5. Control hints (copy data-analy · **cấm** đoán)

### List filters (Zone B)

| Field key | Label | controlHint | Notes |
|-----------|-------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | mã biển · nội dung CI |
| groupCode | Nhóm QCVN | `Dropdown` | P · W · R · I · S · KHAC · init-data |

### Form fields (P0)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| code | Mã biển | `Text` code | * | lock edit · giữ case |
| name | Nội dung biển báo | `Text` | * | VN SSOT |
| nameEn | Tên tiếng Anh | `Text` | | **cấm** dịch thêm |
| groupCode | Nhóm QCVN 41 | `Dropdown` | * | P/W/R/I/S · fallback prefix mã |
| shape | Hình dạng | `Text` | | |
| width | Chiều rộng | `Text` / Number | | khổ danh mục ≠ kích thước lắp đặt asset |
| height | Chiều dài | `Text` / Number | | |
| icon | Icon | `Text` URL/path | | default NULL · **cấm** seed pict |
| isActive | Hiệu lực | `Switch` | | |

### Consumer (Sổ TS · 2li)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| trafficSignTypeCode | Mã biển báo | `SearchInput` | **traffic-sign-type** | mã + nội dung |
| roadSignContent | Nội dung | derived / readonly | — | từ catalog `name` |

### API bind (real-data §B)

| Operation | Path |
|-----------|------|
| List | `GET /web-bff/api/v1/integration/traffic-sign-types` |
| Search | `GET …/traffic-sign-types/search` |
| Init | `GET …/traffic-sign-types/init-data` |
| Detail / By code | `GET …/{id}` · `…/by-code/{code}` |
| Create / Update / Delete | `POST` · `PUT …/{id}` · `DELETE …/{id}` |

FE endpoint: `Linm.Web.RMMS.Master/src/services/trafficSignType/endpoint.ts` · BASE=`/integration/traffic-sign-types`.

## 6. Grid list AC (REQUIRED · Kind B / list)

> Paste `po-design-grid-standard.md` · filter HARD — **GAP-PO-GRID-01** · **GAP-FILTER-WRAP-02**.

| Area | Acceptance (Design phải prototype / parity) |
|------|---------------------------------------------|
| **Shell A–D** | Header · Toolbar · Grid card · Pagination footer |
| **Toolbar FULL** | Làm mới · Lịch sử · Sửa config (`fa-cog`) · **+ Tạo mới** — **cấm** Thêm mới trên Zone A |
| **Grid menu** | Row menu: Xem/Sửa/Sao chép/Lịch sử · help «nhấn đúp / Ctrl+chuột phải» |
| **Config** | Sửa cấu hình lưới · kéo cột default ON |
| **Grid flow** | Sort cột · filter cột · chọn dòng |
| **Filter Zone B** | **`LinErpListFilterBar`** · 1 hàng wrap · field **lấp hàng rồi wrap** · 🔍 mép phải — SearchText + Dropdown nhóm — **không** nút Tìm · **cấm** `ErpListHeaderFilters` / stack · filter đổi → page=1 |
| **Form pair** | C/E/V/Copy → **Slideout** · footer Lưu/Hủy · Design clone `form-surface-prototype` |
| **Empty/fail** | empty copy VN · toast — **cấm** fake row / invent-seed |
| **SSOT Design** | `shared-grid-example` · `list-shell-prototype` · `po-design-grid-standard` |
| **SSOT TL/Dev** | `tl-design-grid-component-map` · `tl-grid-full-flow` · `tl-filter-bar-task` (T-UI-FILTER-01) |
| **Skip chrome** | GOVOne · Signed demo · hub nav skin demo |

### Report AC

**N/A** — packKind `master` catalog · **không** report/dashboard.

## 7. Screens (REQUIRED)

| Surface | Pattern | FormMode | URL / open | Actions | `devSlash` |
|---------|---------|----------|------------|---------|------------|
| S-LIST | Kind **B** catalog A–D | filter | `/mas/loai-bien-bao` | search · group filter · Tạo mới · Refresh · config · History | `/agent-dev` |
| S-FORM-CREATE | **Slideout** | create | list + open | Lưu · Hủy · leave-confirm | `/agent-dev` |
| S-FORM-EDIT | **Slideout** | edit | row | Lưu · Hủy · leave-confirm · `code` lock | `/agent-dev` |
| S-FORM-VIEW | **Slideout** | view | row | readOnly · Đóng/Sửa/Sao chép | `/agent-dev` |
| S-FORM-COPY | **Slideout** | create (copy) | row | POST new · clear id · keep fields | `/agent-dev` |
| S-HIST | `LinCatalogHistoryModal` | — | — | stub OK nếu API chưa · **cấm** invent History path | `/agent-dev` |
| S-CONSUMER | peer Sổ TS | SearchInput | so-ts TRAFFIC_SIGN | catalogKind=`traffic-sign-type` | `/agent-dev` |

**Cấm** Full-page form catalog (<10 fields) · **cấm** map canvas · **cấm** GOVOne chrome · **cấm** Modal form khi đã chốt Slideout.

## 8. Leave / alert (REQUIRED)

| Case | Behavior | Cấm |
|------|----------|-----|
| Form dirty → Esc / Hủy / X / navigate | **`LeaveConfirmModal`** | `window.confirm` / native |
| Xóa / chặn nguy hiểm | **`useAlert` / `Modal`** | `window.alert` |
| API fail / lookup fail | toast · empty | alert blocking |
| Empty list / seed 0 | empty grid + toast | invent-seed / mock rows |
| Validation 422 | toast business | silent fail |
| History | `LinCatalogHistoryModal` | invent API |
| Consumer no match | SearchInput empty · save 422 | free-text substitute master |

Thiếu → **GAP-PO-LEAVE-01**.

## 9. Open questions — Autopilot chốt

| ID | Severity | PO decision (autoApprove) |
|----|----------|---------------------------|
| GAP-TST-DM-01 | P0 | SA thêm DOMAIN-MAP slug `traffic-sign-type` → Integration `traffic-sign-types` — **không** block PO→Design |
| GAP-TST-FORM-01 | P1 | **Chốt Slideout** (live) · peer Modal OOS this pack |
| GAP-TST-ICON-01 | P0 | Icon Text URL/path · default NULL · **cấm** invent pict / seed icon |
| GAP-TST-SEED-01 | P0 | Seed chỉ Excel/CSV/dump · EnsureFromImportedAssets chỉ **thêm** mã thiếu |
| packKind | — | **Confirm `master`** |
| changeScope | — | **Confirm `new_page`** |
| formPattern | — | **Slideout** · footer_actions_only |
| Typography | P1 | label **13** · input D14/M16 (**GAP-TYP-01** Design) |

UNCLEAR field path/version = **none** — không AskQuestion (autoApprove=ON).

## 10. Out of scope (this pack)

- Gen Signed `*-demo.html` / GOVOne chrome
- Invent mã biển / pict icon / ERP.* / `api/v1/rmms/*`
- Modal form (đã chốt Slideout)
- Map canvas / Kind F
- Flatten width/height sang kích thước lắp đặt asset
- Auth NuGet permission wire full (giữ ADMIN menu hiện có)
- `yarn build` / e2e / `start:std` ở role PO
- Start role Design/SA/Dev trong cùng task (**GAP-PKT-ROLE-01**)
- Re-scan demo / crawl DemoRoot (**GAP-PO-DEMO-RESCAN-01**)

## 11. Handoff → Design (`/agent-design`)

| Field | Value |
|-------|-------|
| feature | `traffic-sign-type` |
| phase_from / phase_to | po → design |
| packKind confirm | **`master`** |
| changeScope | `new_page` |
| Kind / surfaces | B catalog A–D + **Slideout** form C/E/V/Copy |
| Context | CTX-01…04 · DI-01/02 · DA-HINT · DA-REAL |
| Demo | **N/A** |
| controlHint | §5 — **cấm** đoán Text vs SearchInput |
| realData | DA-REAL §A+§B PASS |
| Grid AC | §6 · DES-GRID-A/B/C/D · filter-bar HARD |
| Form | Slideout · footer Lưu/Hủy · `code` lock edit |
| Leave | §8 LeaveConfirmModal · useAlert |
| Decisions | §9 Slideout · icon NULL · seed no invent · DOMAIN-MAP → SA |
| reviewUrl | (Design fill) |
| peerStdUrl | `http://localhost:9318/mas/loai-tai-san` (peer master Kind B) |
| mfeStdUrl | `http://localhost:9318/mas/loai-bien-bao` |
| compact | `specs/traffic-sign-type/handoff/po-compact.md` |
| next | `/agent-design` · autoApprove ON · e2eQa queued QA |

## 12. Version meta

| | |
|--|--|
| skillId | `agent-po` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.05.03` |
| rulesVersion | `2026.09.05.8` |
| contentHash | `sha256:e3aada6d5b40ee2b06635701491bbf3cca71444f95c42b42bbc1bc9d0f03ddbb` |
| headerFingerprint | `sha256:csv:code,name,name_en,group_code,shape,width,height,sort_order` |
| analyzedAt | `2026-09-06T02:20:00.000Z` |
| writtenAt | `2026-09-06T02:30:00.000Z` |
| taskId | `task_431c0ff8` |
| status | `confirmed` |
| versionGate | `ok` |
