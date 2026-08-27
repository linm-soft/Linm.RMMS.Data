# PO — Requirement — kcht-cong-trinh (Công trình KCHT · Khu QLĐB IV)

| Field | Value |
|-------|-------|
| feature | `kcht-cong-trinh` |
| this role | `po` · `/agent-po` |
| changeScope | `new_page` |
| packKind | **`list`** (Kind **B** catalog list A–D + **full-page** form 4 tab) — PO confirm |
| Feature Kind | **B** catalog list + full-page form — **cấm** Slideout / Kind D Resource |
| gap | `crud_formtype` · GAP-KCT-01…09 |
| mode | `feature_context` · **no Excel** · **no GOVOne demo** · sourceKind=`synthetic` |
| status | `done` |
| requestSource | run packet `task_3b4ed0d9` · `/agent-qldb-workflow` · roleOnly=`po` · `/agent-po` · autoApprove **ON** |
| autoApprove | **ON** — Design/SA/Review khi tới lượt → agent tự confirm · enqueue role kế. Role PO **không** gate confirm. |
| e2eQa | **ON** — queued tới `/agent-qa*` · **cấm** e2e / `yarn start:std` ở role PO |
| prior · data_analy | status=`confirmed` · `specs/_data-analy/features/kcht-cong-trinh-control-hint.md` · `kcht-cong-trinh-real-data.md` · contentHash `sha256:77c91b35d170a15297c00fd9219f11fbe1f9e51bcab589c0c9b1d7283c702bbe` · **cấm** re-scan demo (**GAP-PO-DEMO-RESCAN-01**) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Contract` (ứng viên — **chưa** `ui_repo_confirm`) |
| mfeStdUrl | `http://localhost:9301/kcht-cong-trinh` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Contract** widen × **KchtProject** NEW · **cấm ERP.*** |
| domain | **Contract** (widen) × **KchtProject** NEW |
| sourceDoc | `D:/AI-QLBD/Linm.RMMS.Data/docs/tinh-nang/Cung-cap-thong-tin-phan-mem.md` |
| plan | `D:/AI-QLBD/Linm.RMMS.Data/docs/plan/kcht-cong-trinh/PLAN.md` |
| updatedAt | `2026-08-27T00:00:00.000Z` |
| taskId | `task_3b4ed0d9` · analy `task_e3745f39` |

## 1. Goal

Chốt yêu cầu **Wave 1 PH1** — phân hệ **Hồ sơ công trình KCHT** Khu QLĐB IV: Kind **B** list catalog + form **full-page 4 tab** (Chung · Quyết định · Hợp đồng · Hồ sơ file). Persona: Lãnh đạo Khu · Phòng QLBT / QL-TCGT / KHTC · VP IV.1–IV.4 · Ban QLDA miền Nam · Cục ĐBVN (xem) · Cán bộ CĐS (admin).

**packKind confirm:** `list` (data-analy đề xuất · PO chốt). Kind B catalog A–D + full-page form — **không** dashboard KPI strip wave 1 · **không** báo cáo PH5.

**Delta pack (SSOT lock):** entity parent `KchtProject` NEW · 1 CT : n HĐ (junction `contract`) · tab Quyết định child · tab File FileService · filter công văn Zone B · route `/kcht-cong-trinh`. Align cite → MFE Contract Kind B stack · BE domain Contract widen · prefix **đề xuất** `api/v1/kcht-ct` — SA confirm.

**≠** `asset` / `csdl-so-sach` (danh mục TS) · `maintenance` (WO BDTX) · `feedback` · `asset-kcht-dashboard` (hub 40 ô count). **Cấm** nhồi CT vào `contract` parent-less.

**Cấm ERP.*** · **cấm** `api/v1/rmms/*` · **cấm** Slideout form CT · **cấm** hardcode label VN — `useFormOptions()` · **cấm** PH2–PH5 trong wave 1.

## 2. Current → New (`new_page` · REQUIRED)

Nguồn SSOT: control-hint `2026-08-26T23:50:00.000Z` + real-data §A–§F · cite MFE `ContractListPage` / `ContractFormPage` (shell only — form hiện **không** tab).

| Layer | Current (live inventory 2026-08-27) | New (delta PO chốt · copy analy) |
|-------|-------------------------------------|----------------------------------|
| Entity BE | Không `KchtProject` · HĐ mỏng 1:1 `ContractEntity` | `KchtProject` NEW · `KchtProjectDecision` · junction `KchtProjectContract` → `contract` |
| MFE route | Chỉ `/hd-ns` HĐ · form không tab | `/kcht-cong-trinh` list · `/kcht-cong-trinh/tao-moi` · `/kcht-cong-trinh/:id` · **full-page 4 tab** |
| List filter | Contract list 4 filter (search/type/status/contractor) | + quốc lộ · tỉnh · loại CT · Ban QLDA · người PT · nhà thầu |
| Lookups | `orgUnit`/`contractor` demo seed local | `SearchInput` → `org-unit` · `partner-unit` · `road-route` Integration |
| Tab QĐ | **none** | Tab Quyết định · child `KchtProjectDecision` inline grid |
| Tab HĐ | HĐ độc lập không `ProjectId` | Tab Hợp đồng · 1–n HĐ · link/create · handoff `/hd-ns/:id` |
| Tab File | FileService platform READY · chưa bind CT | Tab Hồ sơ file · `attachmentId` presign |
| API | Chỉ `api/v1/contract/contracts` | **GAP** `api/v1/kcht-ct/projects` — SA scaffold |
| Demo | **N/A** synthetic công văn | **cấm** demo-json / GOVOne chrome SSOT |
| PH2–PH5 | — | đoạn tuyến/BH · tiến độ tuần · giải ngân · BC — **DEFER** wave 2–5 |

**Không đổi:** Kind B `LinPageLayout` + `LinCatalogDataGrid` + `LinCatalogListPagination` · `useCatalogUiSchema` · leave-guard · toast not alert · IdCode `CT-yyyyMMdd-nnnn`.

### GAP IDs (PO bắt buộc Design/Dev đóng P1 trừ DEFER)

| ID | New |
|----|-----|
| GAP-KCT-01 | Entity `KchtProject` parent · 1 CT : n HĐ |
| GAP-KCT-UI-01 | Route `/kcht-cong-trinh` · Kind B list + full-page 4 tab |
| GAP-KCT-FILTER-01 | Filter công văn Zone B (8 filter + search) |
| GAP-KCT-LOOKUP-01 | Integration SearchInput thay demo seed |
| GAP-KCT-DECISION-01 | Tab Quyết định child grid |
| GAP-KCT-CHILD-HD-01 | Tab Hợp đồng junction + reuse `ContractEntity` |
| GAP-KCT-FILE-01 | Tab Hồ sơ FileService presign |
| GAP-KCT-ROUTE-01 | `roadRouteCode` SearchInput PH1 · multi-segment PH2 **DEFER** |
| GAP-KCT-API-01 | `api/v1/kcht-ct/projects` — SA confirm prefix |
| GAP-KCT-02…04 | Tiến độ · giải ngân · BC — **DEFER** wave 2–5 |

## 3. DoD (đo được · Wave 1 PH1)

1. List load `GET …/kcht-ct/projects` — empty state «Chưa có công trình» · **cấm** fake row.
2. Zone A: title «Công trình KCHT» — **cấm** Thêm mới trên A.
3. Zone B: SearchTextInput + 7 SearchInput filter (loại CT · QL/tuyến · tỉnh · ĐV QL · Ban QLDA · người PT · nhà thầu · TT) · Tạo mới primary · Refresh · Delete · config · History — filter đổi → page=1.
4. Zone C: `LinCatalogDataGrid` — Mã CT · Tên · Loại · Tuyến · Tỉnh · ĐV QL · Ban QLDA · Nhà thầu chính · KH vốn · TT · row menu Xem/Sửa/Xóa/Lịch sử.
5. Zone D: `LinCatalogListPagination` pageSize **50 / 100 / 200 / 500**.
6. Zone F: `LinCatalogUiSchemaEditorModal` — **cấm** `configHint` / `LinListTableConfigModal` cột.
7. Form full-page `/kcht-cong-trinh/tao-moi` · `/kcht-cong-trinh/:id`: 4 tab index **0 Chung · 1 Quyết định · 2 Hợp đồng · 3 Hồ sơ file** — **cấm** reorder (**GAP-TAB-01**).
8. Tab 0 required: name · projectType · roadRouteCode · provinceCode · orgUnitCode · status. `code` IdCode readonly `CT-yyyyMMdd-nnnn`.
9. Tab 1: inline grid QĐ — decisionKind · decisionNo · decisionDate required · add/remove với confirm.
10. Tab 2: 1–n HĐ — link existing hoặc create child · open `/hd-ns/:id?from=kcht&projectId={id}` read-only handoff.
11. Tab 3: upload/download/delete file qua FileService presign — **cấm** byte trên DB nghiệp vụ.
12. View mode = `<dl>` display — **cấm** Input disabled xám toàn form.
13. Lookup catalog = **SearchInput** — **cấm** Dev đoán Text vs SearchInput khi đã có controlHint.
14. Leave-confirm dirty form · toast 4xx/5xx — **cấm** `window.alert`.
15. Typography: label **13** · input D14/M16 (**GAP-TYP-01**).
16. `yarn build` PASS **ở role Dev** (PO **cấm** build/e2e/start:std).
17. KPI strip metric cards (tổng CT · đang TC · chậm TT · sắp hết BH) — **DEFER** dashboard wave 5.

## 4. CTX / DEM / DI inventory (hash skip — đọc analy · **không** re-crawl)

| ID | Path | Loại |
|----|------|------|
| CTX-01 | `docs/context/features/kcht-cong-trinh.md` | feature PH1–5 waves · GAP-KCT-01…09 |
| CTX-02 | `docs/tinh-nang/Cung-cap-thong-tin-phan-mem.md` | công văn KQLĐB IV 5 phân hệ |
| PLAN-01 | `docs/plan/kcht-cong-trinh/PLAN.md` | D1–D8 · wave 1 = PH1 |
| DEM-01 | — | **N/A** — sourceKind=synthetic · **cấm** GOVOne chrome |
| DI-01 | — | **no Excel** |
| DA-01 | `specs/_data-analy/features/kcht-cong-trinh-control-hint.md` | controlHint SSOT · **confirmed** |
| DA-02 | `specs/_data-analy/features/kcht-cong-trinh-real-data.md` | real-data bind §A–§F |
| MFE cite list | `Linm.Web.RMMS.Contract/src/pages/ContractListPage/ContractListPage.tsx` | Kind B stack reuse |
| MFE cite form | `Linm.Web.RMMS.Contract/src/pages/ContractFormPage/ContractFormPage.tsx` | full-page shell · add tabs |
| MFE cite lookup | `src/services/inventory/lookups.ts` `orgLookupConfig()` | Integration pattern |
| BE cite contract | `ContractEntity.cs` · `ContractsController.cs` | child HĐ widen |
| BE integration | `RoadRoutesController` · `OrgUnitsController` · `PartnerUnitsController` | master READY |
| DOMAIN-MAP | `D:/AI-QLBD/Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Contract domain widen |

Normalized header (analy): `code|name|projectType|continuityKind|planYear|roadRouteCode|provinceCode|routeSegmentSummary|lengthM|capitalSourceKind|capitalPlanAmount|orgUnitCode|ownerUserId|bqlOrgUnitCode|contractorCode|status|decisionKind|decisionNo|decisionDate|issuingAgency|totalInvestment|approvedEstimate|adjustedTotalInvestment|contracts.contractNo|contracts.type|contracts.contractor|contracts.amount|contracts.status|attachments.fileName|search`

## 5. controlHint (PO chốt · copy data-analy — Design map UI · SA map API)

`controlHint=UNCLEAR`: `provinceCode` master P1 (FormsService or integration) · `ownerUserId` picker scope P2.

### List filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã CT · tên · số QĐ · số HĐ con |
| projectType | Loại công trình | `SearchInput` | kcht-project-type | SCĐK · SCĐX · KPTT · điểm đen · khác |
| roadRouteCode | Quốc lộ / tuyến | `SearchInput` | road-route | Integration `GET /integration/road-routes/search` |
| provinceCode | Tỉnh / TP | `SearchInput` | province | **UNCLEAR** master P1 |
| orgUnitCode | Đơn vị quản lý | `SearchInput` | org-unit | seed `REG-IV*` · `VP-IV.*` |
| bqlOrgUnitCode | Ban QLDA | `SearchInput` | org-unit | `SU-BQLDA-S` subtree |
| ownerUserId | Người phụ trách | `SearchInput` | users | JWT scope · P2 Integration |
| contractorCode | Nhà thầu | `SearchInput` | partner-unit | chính trên HĐ XL child |
| status | Trạng thái CT | `SearchInput` | kcht-project-status | nháp · đang TH · HT · đóng |

### List columns (Zone C bootstrap)

Mã CT · Tên · Loại · Tuyến · Tỉnh · ĐV QL · Ban QLDA · Nhà thầu chính · KH vốn · TT · actions

### Form Tab 0 — Chung (index 0)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| code | Mã công trình | `Text` readonly | auto | IdCode `CT-yyyyMMdd-nnnn` |
| name | Tên công trình | `Text` | * | |
| projectType | Loại công trình | `SearchInput` | * | enum 5+1 công văn |
| continuityKind | Mới / chuyển tiếp | `SearchInput` | | `moi` · `chuyen-tiep` |
| planYear | Năm kế hoạch | `Integer` | | |
| roadRouteCode | Tuyến quốc lộ | `SearchInput` | * | `road-route` master |
| provinceCode | Tỉnh / TP | `SearchInput` | * | **UNCLEAR** catalog |
| routeSegmentSummary | Đoạn tuyến (Km) | `Text` | | PH1 summary text |
| lengthM | Chiều dài (m) | `Number` | | |
| structureRefs | Vị trí cầu/cống | `Text` | | free text P2 asset ref |
| capitalSourceKind | Loại nguồn vốn | `SearchInput` | | enum SA |
| capitalPlanAmount | Kế hoạch vốn | `Money` | | |
| orgUnitCode | Đơn vị quản lý | `SearchInput` | * | `org-unit` |
| ownerUserId | Người phụ trách | `SearchInput` | | users P2 |
| bqlOrgUnitCode | Ban QLDA | `SearchInput` | | `SU-BQLDA-S` |
| status | Trạng thái | `SearchInput` | * | enum kcht-project-status |
| note | Ghi chú | `Text` | | textarea |

### Form Tab 1 — Quyết định (index 1)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| decisions[].decisionKind | Loại QĐ | `SearchInput` | * | chủ trương · phê duyệt · điều chỉnh |
| decisions[].decisionNo | Số quyết định | `Text` | * | |
| decisions[].decisionDate | Ngày QĐ | `Date` | * | UTC store |
| decisions[].issuingAgency | Cơ quan ban hành | `Text` | | |
| decisions[].totalInvestment | Tổng mức đầu tư | `Money` | | |
| decisions[].approvedEstimate | Dự toán được duyệt | `Money` | | |
| decisions[].adjustedTotalInvestment | TMĐT sau điều chỉnh | `Money` | | computed/last |
| addDecision | Thêm QĐ | action | | inline grid |
| removeDecision | Xóa QĐ | action danger | | confirm |

### Form Tab 2 — Hợp đồng (index 2)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| contracts[].code | Mã HĐ | `Text` readonly | | link existing or create |
| contracts[].contractNo | Số hợp đồng | `Text` | * | map `ContractEntity.ContractNo` |
| contracts[].name | Tên HĐ | `Text` | * | |
| contracts[].type | Loại HĐ | `SearchInput` | * | TVTK · TVGS · XL · QLDA · khác |
| contracts[].contractor | Nhà thầu | `SearchInput` | * | `partner-unit` |
| contracts[].amount | Giá trị HĐ | `Money` | * | |
| contracts[].signedAt | Ngày ký | `Date` | | |
| contracts[].startDate | Ngày khởi công | `Date` | | **NEW** vs contract today |
| contracts[].completionDate | Ngày HT theo HĐ | `Date` | | |
| contracts[].durationMonths | Thời gian TH (tháng) | `Integer` | | |
| contracts[].extensionDate | Ngày gia hạn | `Date` | | |
| contracts[].completionAfterExtension | Ngày HT sau gia hạn | `Date` | | |
| contracts[].adjustedAmount | Giá trị sau ĐC | `Money` | | |
| contracts[].status | Trạng thái HĐ | `SearchInput` | * | reuse contract status |
| contracts[].appendices | Phụ lục | `Text` | | P1 textarea |
| linkContract | Liên kết HĐ có sẵn | action | | SearchInput picker |
| addContract | Thêm HĐ mới | action | | inline create |
| openContractDetail | Mở HĐ | action ↗ | | `/hd-ns/:id` handoff |

### Form Tab 3 — Hồ sơ file (index 3)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| attachments[].fileName | Tên file | `Text` readonly | | FileService metadata |
| attachments[].docKind | Loại hồ sơ | `SearchInput` | | QĐ · HĐ · BBNT · khác |
| attachments[].uploadedAt | Ngày tải | `Date` readonly | | |
| uploadFile | Tải lên | action | | `/integrate-file-upload-web` presign |
| downloadFile | Tải xuống | action | | presign GET |
| deleteFile | Xóa | action danger | | soft-delete ref |

### Real-data bind (copy §B analy — SA **giữ** path cite)

**Prefix map** (đề xuất SA — **chưa live**):

| Operation | Path |
|-----------|------|
| List | `GET /web-bff/api/v1/kcht-ct/projects` |
| Detail | `GET /web-bff/api/v1/kcht-ct/projects/{id}` |
| Create | `POST /web-bff/api/v1/kcht-ct/projects` |
| Update | `PUT /web-bff/api/v1/kcht-ct/projects/{id}` |
| Delete | `DELETE /web-bff/api/v1/kcht-ct/projects/{id}` |
| Decisions | `GET/POST/PUT/DELETE …/projects/{id}/decisions` |
| Contract links | `GET/POST/DELETE …/projects/{id}/contracts` |
| Attachments | `GET/POST/DELETE …/projects/{id}/attachments` |

**Contract child cite** (live): `GET/POST/PUT /web-bff/api/v1/contract/contracts` · FE `src/services/contract/endpoint.ts`.

**Integration lookup cite** (live): `road-routes/search` · `org-units/search` · `partner-units/search`.

### Lookup / enum (handoff SA)

| catalogKind | Source | Notes |
|-------------|--------|-------|
| kcht-project-type | công văn §1.1 | `sua-chua-dinh-ky` · `sua-chua-dot-xuat` · `khac-phuc-thien-tai` · `diem-den-atgt` · `khac` |
| kcht-project-status | đề xuất SA | `nhap` · `dang-thuc-hien` · `hoan-thanh` · `dong` |
| kcht-continuity-kind | công văn | `moi` · `chuyen-tiep` |
| kcht-decision-kind | công văn §1.2 | `chu-truong` · `phe-duyet` · `dieu-chinh` |
| kcht-contract-type | công văn §1.3 | `tvtk` · `tvgs` · `xay-lap` · `qlda` · `khac` |
| road-route | `GET /integration/road-routes` | LRS master READY |
| org-unit | `GET /integration/org-units` | `REG-IV*` pilot |
| partner-unit | `GET /integration/partner-units` | nhà thầu |
| users | users domain | owner picker P2 |
| province | **UNCLEAR** | FormsService or integration P1 |

## 6. Grid AC (REQUIRED · list packKind)

| ID | AC |
|----|-----|
| AC-G-01 | Zones **A Header · B Toolbar · C Grid · D Pagination** (+ Zone F config) |
| AC-G-02 | Search + 7 filter → page=1 khi filter đổi |
| AC-G-03 | Row menu Xem / Sửa / Xóa / Lịch sử |
| AC-G-04 | `LinCatalogDataGrid` + kéo cột default ON · schema-driven columns |
| AC-G-05 | Footer `LinCatalogListPagination` 50/100/200/500 |
| AC-G-06 | 1× `LinPageLayout` — **cấm** nested CatalogListShell |
| AC-G-07 | Flex + skeleton — **cấm** blank body |
| AC-G-08 | Zone F `LinCatalogUiSchemaEditorModal` — **cấm** `configHint` |
| AC-G-09 | Empty list «Chưa có công trình» — **cấm** fake row |
| AC-G-10 | Toast 4xx/5xx — **cấm** `window.alert` |

### Report AC

**N/A** — packKind `list` · **không** report/dashboard wave 1 (**GAP-PO-RPT-01**).

## 7. Screens (REQUIRED)

| Surface | Pattern | FormMode | URL | Tab index | Actions |
|---------|---------|----------|-----|-----------|---------|
| S-LIST | Kind B catalog A–D+F | filter | `/kcht-cong-trinh` | — (list only) | search · filter · Tạo mới · Refresh · Delete · config · History |
| S-FORM-CREATE | Kind B full-page 4 tab | create | `/kcht-cong-trinh/tao-moi` | 0 Chung · 1 QĐ · 2 HĐ · 3 File | Lưu · Hủy · leave-confirm |
| S-FORM-EDIT | Kind B full-page 4 tab | edit | `/kcht-cong-trinh/:id` | same index **cấm** reorder | Lưu · Hủy · View `<dl>` |
| S-FORM-VIEW | Kind B full-page 4 tab | view | `/kcht-cong-trinh/:id` (mode=view) | same | read-only `<dl>` |
| S-HD-HANDOFF | Contract detail read-only | view | `/hd-ns/:contractId?from=kcht&projectId={id}` | — | ↗ từ tab Hợp đồng |
| S-SKIP | — | — | PH2–PH5 surfaces | — | **Cấm** trong wave 1 |

**Cấm** Slideout · **cấm** GOVOne chrome · **cấm** KPI strip wave 1.

## 8. Leave / alert (REQUIRED)

| Case | Control | Cấm |
|------|---------|-----|
| Form dirty · navigate away / đóng tab | `LeaveConfirmModal` + leave guard | `window.confirm` / native dialog |
| API 4xx validation | `useAppToast` business message | `window.alert` |
| API 5xx list/detail | toast error | silent empty |
| detail 404 | toast · navigate `/kcht-cong-trinh` | silent fail |
| Delete CT / QĐ / file / unlink HĐ | confirm modal | native `confirm` |
| Lookup no match | SearchInput empty state | free text substitute master |
| Upload fail FileService | toast error | silent fail |

## 9. Open questions — PO chốt (autopilot)

| ID | Question | Decision (PO) |
|----|----------|----------------|
| GAP-KCT-01 | Công trình = entity mới hay nhồi `contract`? | **Entity mới `KchtProject`** — 1 CT : n HĐ |
| GAP-KCT-02 | Host MFE | **Ứng viên `Linm.Web.RMMS.Contract`** — TL tick `ui_repo_confirm` |
| GAP-KCT-API-01 | API prefix | **Đề xuất `api/v1/kcht-ct`** — SA confirm scaffold |
| GAP-PO-PK-01 | packKind list vs dashboard | **`list`** Kind B catalog + form — KPI strip **DEFER** wave 5 |
| GAP-PO-PROVINCE-01 | `provinceCode` master P1 | **UNCLEAR** — SA/FormsService chốt P1 · không invent list |
| GAP-PO-OWNER-01 | `ownerUserId` picker | **P2 Integration** — field optional P1 · filter optional |
| GAP-PO-SLIDEOUT-01 | Slideout form CT? | **Cấm** — full-page 4 tab only |
| GAP-PO-BC-01 | Báo cáo trước form nguồn? | **Cấm** — PH5 sau PH1–4 (`data-analy-report-source-form`) |
| GAP-PO-DEMO-01 | Re-scan demo? | **Cấm** — hash skip · đọc control-hint + real-data |
| GAP-PO-ERP-01 | ERP.* paths | **Cấm** — BE = `Linm.RMMS.WebService` Contract widen |
| GAP-KCT-07 | Phạm vi địa lý | Pilot **Khu IV** (`REG-IV` + VP IV.1–4 + `SU-BQLDA-S`) |
| GAP-KCT-08 | PL01 P1-900 | **Ngoài** HĐ JNET — CR riêng Khu IV |
| PH2–PH5 | Đoạn tuyến · tiến độ · giải ngân · BC | **DEFER** waves 2–5 per PLAN |

## 10. Out of scope (this pack · Wave 1 PH1)

- PH2 đoạn tuyến + bảo hành 6 trạng thái + cảnh báo 90/60/30
- PH3 tiến độ tuần + đèn RAG + cảnh báo tự động
- PH4 giải ngân + đối chiếu KBNN + upload chứng từ giải ngân
- PH5 4 loại BC + dashboard 10 KPI login
- KPI strip metric cards trên list
- RBAC 5 nhóm seed 111 user (wave 5)
- Map canvas / LRS multi-segment child table
- `api/v1/rmms/*` · ERP.* · nhồi CT vào `contract` without parent
- Demo-json / GOVOne chrome SSOT · re-scan demo HTML
- `yarn build` / e2e / `start:std` ở role PO

## 11. Handoff → Design (`/agent-design`)

| Field | Value |
|-------|-------|
| feature / packKind | `kcht-cong-trinh` / **`list`** Kind B |
| phase_from / phase_to | po **confirmed** → design **pending** |
| STATUS | `specs/kcht-cong-trinh/STATUS.md` |
| Context / DA | CTX-01 · DA-01 · DA-02 · no Excel · no demo |
| controlHint | §5 — **cấm** đoán Text vs SearchInput ngoài bảng |
| Kind / zones | A Header · B Toolbar+filter · C Grid · D Pagination · Form full-page 4 tab |
| Tab index form | **0** Chung · **1** Quyết định · **2** Hợp đồng · **3** Hồ sơ file — **cấm** reorder |
| Prototype | content-only list + form 4 tab · **skip** GOVOne chrome/sidebar/menu |
| reviewUrl | bắt buộc · `autoApprove=ON` → agent tự confirm Design |
| peerStdUrl | `http://localhost:9301/kcht-cong-trinh` |
| Grid AC | §6 |
| Leave | §8 |
| BE | đề xuất `api/v1/kcht-ct` — **cấm** invent live path as DONE |
| cite MFE | `ContractListPage` + `ContractFormPage` shell |
| Next slash | `/agent-design` |
| Next roles | design → sa → team-lead → dev → qa → review = **pending** đến lượt · chain ON |
| e2e | queued `/agent-qa*` only |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po |
| skillVersion | 2026.08.21.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.21.01 |
| rulesVersion | 2026.08.25.4 |
| generatedAt | 2026-08-27T00:00:00.000Z |
| versionGate | rechecked |
| contentHashPriorDataAnaly | sha256:77c91b35d170a15297c00fd9219f11fbe1f9e51bcab589c0c9b1d7283c702bbe |
| orchestratorSkillVersion | 2026.08.21.01 |
| taskId | `task_3b4ed0d9` |

---
<!-- Version meta: skillId=agent-po skillVersion=2026.08.21.01 schemaVersion=1 workflowVersion=2026.08.21.01 rulesVersion=2026.08.25.4 versionGate=rechecked contentHashPriorDataAnaly=sha256:77c91b35d170a15297c00fd9219f11fbe1f9e51bcab589c0c9b1d7283c702bbe taskId=task_3b4ed0d9 -->
