# Design — kcht-cong-trinh (Công trình KCHT · Khu QLĐB IV)

| Field | Value |
|-------|-------|
| feature | `kcht-cong-trinh` |
| this role | `design` · `/agent-design` |
| Feature Kind | **B** — Catalog list A–D + **full-page** form **4 tab** · **cấm** Slideout / Kind D Resource |
| status | `confirmed` |
| design_confirm | **approve** (`autoApprove=ON` · `task_64fb2fd7`) |
| changeScope | `new_page` |
| packKind | `list` |
| gap | `crud_formtype` · GAP-KCT-01…09 |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Contract` (ứng viên — **chưa** `ui_repo_confirm`) |
| mfeStdRoute | `/kcht-cong-trinh` |
| mfeStdUrl | `http://localhost:9301/kcht-cong-trinh` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Contract** widen × **KchtProject** NEW · **cấm ERP.*** |
| prior · data_analy | `confirmed` · hash skip · `specs/_data-analy/features/kcht-cong-trinh-control-hint.md` · `kcht-cong-trinh-real-data.md` · contentHash `sha256:77c91b35d170a15297c00fd9219f11fbe1f9e51bcab589c0c9b1d7283c702bbe` |
| prior · po | `confirmed` · `po/requirement.md` · `task_3b4ed0d9` |
| autoApprove | **ON** |
| e2eQa | **ON** — queued `/agent-qa*` · **cấm** e2e/start:std ở role Design |
| updatedAt | `2026-08-27T00:30:00.000Z` |
| taskId | `task_64fb2fd7` |

## 0. Context & Demo (from PO · hash skip — **cấm** re-scan demo)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/kcht-cong-trinh.md` | PH1–5 waves · GAP-KCT-01…09 |
| CTX-02 | `docs/tinh-nang/Cung-cap-thong-tin-phan-mem.md` | công văn KQLĐB IV 5 phân hệ |
| PLAN-01 | `docs/plan/kcht-cong-trinh/PLAN.md` | D1–D8 · wave 1 = PH1 |
| DEM-01 | — | **N/A** — sourceKind=synthetic · **cấm** GOVOne chrome |
| DA-01 | `specs/_data-analy/features/kcht-cong-trinh-control-hint.md` | controlHint SSOT |
| DA-02 | `specs/_data-analy/features/kcht-cong-trinh-real-data.md` | real-data bind §A–§F |
| MFE cite list | `Linm.Web.RMMS.Contract/src/pages/ContractListPage/ContractListPage.tsx` | Kind B stack reuse |
| MFE cite form | `Linm.Web.RMMS.Contract/src/pages/ContractFormPage/ContractFormPage.tsx` | full-page shell · **add tabs** |
| MFE cite lookup | `src/services/inventory/lookups.ts` `orgLookupConfig()` | Integration pattern |

Persona: Lãnh đạo Khu · Phòng QLBT/QL-TCGT/KHTC · VP IV.1–IV.4 · Ban QLDA miền Nam · Cục ĐBVN (xem) · Cán bộ CĐS (admin). Pilot **Khu IV** (`REG-IV` + VP IV.1–4 + `SU-BQLDA-S`).

**≠** `asset` / `csdl-so-sach` · `maintenance` · `asset-kcht-dashboard` (hub 40 ô). **Cấm** nhồi CT vào `contract` parent-less.

## 1. Kind + UI pattern

| | |
|--|--|
| Feature Kind | **B** |
| List pattern | **1×** `LinPageLayout` kind=catalog — **cấm** nested `CatalogListShell` |
| Grid | `LinCatalogDataGrid` · kéo cột **default ON** |
| Footer | `LinCatalogListPagination` 50/100/200/500 — **cấm** footerPagination / pageSizeBar / raw table |
| Form pattern | **Full-page** 4 tab — **cấm** Slideout · **cấm** Resource |
| Routes | List `/kcht-cong-trinh` · Create `/kcht-cong-trinh/tao-moi` · Edit/View `/kcht-cong-trinh/:id` |
| Toolbar SSOT | `catalog-list-toolbar` + `erp-control-icon-map` (`editConfig`=`fa-cog`) |
| View | **`<dl>` / display** — **cấm** Input `readOnly` xám toàn form |
| KPI strip | **DEFER** wave 5 — **cấm** metric cards trên list PH1 |
| Zone F | `LinCatalogUiSchemaEditorModal` title «Cấu hình hiển thị danh mục» · `useCatalogUiSchema` · `buildDynamicGridColumns` · **cấm** `configHint` · **cấm** `LinListTableConfigModal` |
| Typography | label **13px** · input D14/M16 (**GAP-TYP-01**) |
| Labels | **cấm** hardcode VN — `useFormOptions()` |

## 2. Screens / zones

| Screen | FormMode | Zones | Controls |
|--------|----------|-------|----------|
| Công trình KCHT | list | **A Header · B Toolbar+filter · C Grid · D Pagination · F schema** | SearchTextInput + 7 SearchInput filter |
| Form CT | create/edit/view | **Full-page** header + **4 tab** + footer | Tab 0 Chung · 1 QĐ · 2 HĐ · 3 File · View=`<dl>` · footer Lưu/Hủy |

### Zone A — Header

- Icon `fa-road` (hoặc `fa-hard-hat` — Dev align icon map) + title **Công trình KCHT** (22px)
- **Cấm** nút Thêm mới / Tạo mới trên A

### Zone B — Toolbar + filter (PO DoD · 8 filter + search)

**Trái (filter + icon):**

| key | Label | Control (Design chốt) | catalogKind |
|-----|-------|------------------------|-------------|
| search | Tìm kiếm | `SearchTextInput` | text — mã CT · tên · số QĐ · số HĐ con |
| projectType | Loại công trình | `SearchInput` | enum `kcht-project-type` |
| roadRouteCode | Quốc lộ / tuyến | `SearchInput` | `road-route` Integration |
| provinceCode | Tỉnh / TP | `SearchInput` | `province` — **UNCLEAR** P1 SA/FormsService |
| orgUnitCode | Đơn vị quản lý | `SearchInput` | `org-unit` · seed `REG-IV*` |
| bqlOrgUnitCode | Ban QLDA | `SearchInput` | `org-unit` · `SU-BQLDA-S` subtree |
| ownerUserId | Người phụ trách | `SearchInput` | `users` — optional P1 · P2 Integration |
| contractorCode | Nhà thầu | `SearchInput` | `partner-unit` — filter chính trên HĐ XL child |
| status | Trạng thái CT | `SearchInput` | enum `kcht-project-status` |
| — | Làm mới | `fa-sync-alt` | reload · page=1 |
| — | Lịch sử | `fa-history` | `LinCatalogHistoryModal` |
| — | Cấu hình | `fa-cog` | Zone F schema modal |
| — | Xóa | `fa-trash` | selection · Lin confirm — **cấm** `window.alert` |

**Phải:** **Tạo mới** primary (`fa-plus`) — **chỉ trên B** → `/kcht-cong-trinh/tao-moi`.

Filter đổi → **page=1**. **Không** nút Tìm riêng (icon SearchTextInput OK).

### Zone C — Grid

- Card title: **Danh sách công trình**
- Help: nhấn đúp / menu dòng — Xem · Sửa · Xóa · Lịch sử
- Flex + skeleton load — **cấm** blank body
- Columns (kéo cột ON): STT · □ · **Mã CT** · **Tên** · **Loại** · **Tuyến** · **Tỉnh** · **ĐV QL** · **Ban QLDA** · **Nhà thầu chính** · **KH vốn** · **TT** · ⋯
- Click mã → View full-page `<dl>`
- Row menu P1: **Xem · Sửa · Xóa · Lịch sử**
- Empty: «Chưa có công trình» — **cấm** fake row

### Zone D — Pagination

`LinCatalogListPagination`: `Tổng: N · Trang x/y` · Hiển thị **50 / 100 / 200 / 500** · FA pager 32×32.

### Zone F — Schema editor

Title «Cấu hình hiển thị danh mục» · catalogKind=`kcht-projects` (SA confirm seed key). **Cấm** `configHint`.

## 3. Form — full-page 4 tab (GAP-TAB-01 · **cấm** reorder)

| Index | id | VN | Kind |
|-------|-----|-----|------|
| 0 | `general` | Thông tin chung | form tab |
| 1 | `decisions` | Quyết định | form tab · child inline grid |
| 2 | `contracts` | Hợp đồng | form tab · 1–n HĐ |
| 3 | `files` | Hồ sơ file | form tab · FileService presign |

**Cấm** Slideout · **cấm** gộp PH2–PH5 tab vào wave 1.

### Form wire

```
[Header] [← Quay lại]  Title «Công trình KCHT» · badge Tạo mới|Sửa|Xem
         [✏ Sửa] khi view — không Lưu/Hủy trên header (footer-only)
[Hint] leave-confirm dirty · GAP-TAB-01 index lock
[Tabs] 0 Chung · 1 Quyết định · 2 Hợp đồng · 3 Hồ sơ file
[Body Tab 0] 2-col · SearchInput lookups · Money · Text/Number/Integer/Date
[Body Tab 1] inline grid decisions · add/remove + confirm
[Body Tab 2] child HĐ list · link/create · open ↗ handoff
[Body Tab 3] file list · upload/download/delete presign
[Body View] <dl> display — không Input xám
[Footer] [Hủy] [Lưu] — ẩn khi view
```

### Tab 0 — Chung (field inventory · Design chốt controlHint)

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| code | Mã công trình | `Text` readonly | auto | IdCode `CT-yyyyMMdd-nnnn` |
| name | Tên công trình | `Text` | * | |
| projectType | Loại công trình | `SearchInput` | * | enum 5+1 công văn |
| continuityKind | Mới / chuyển tiếp | `SearchInput` | | `moi` · `chuyen-tiep` |
| planYear | Năm kế hoạch | `Integer` | | |
| roadRouteCode | Tuyến quốc lộ | `SearchInput` | * | `road-route` master |
| provinceCode | Tỉnh / TP | `SearchInput` | * | **UNCLEAR** catalog P1 |
| routeSegmentSummary | Đoạn tuyến (Km) | `Text` | | PH1 summary text |
| lengthM | Chiều dài (m) | `Number` | | |
| structureRefs | Vị trí cầu/cống | `Text` | | free text P2 asset ref |
| capitalSourceKind | Loại nguồn vốn | `SearchInput` | | enum SA |
| capitalPlanAmount | Kế hoạch vốn | `Money` | | max-width 200px |
| orgUnitCode | Đơn vị quản lý | `SearchInput` | * | `org-unit` |
| ownerUserId | Người phụ trách | `SearchInput` | | users P2 optional |
| bqlOrgUnitCode | Ban QLDA | `SearchInput` | | `SU-BQLDA-S` |
| status | Trạng thái | `SearchInput` | * | enum kcht-project-status |
| note | Ghi chú | `Text` textarea | | |

### Tab 1 — Quyết định (inline grid)

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| decisions[].decisionKind | Loại QĐ | `SearchInput` | * | chủ trương · phê duyệt · điều chỉnh |
| decisions[].decisionNo | Số quyết định | `Text` | * | |
| decisions[].decisionDate | Ngày QĐ | `Date` | * | UTC store |
| decisions[].issuingAgency | Cơ quan ban hành | `Text` | | |
| decisions[].totalInvestment | Tổng mức đầu tư | `Money` | | |
| decisions[].approvedEstimate | Dự toán được duyệt | `Money` | | |
| decisions[].adjustedTotalInvestment | TMĐT sau điều chỉnh | `Money` | | computed/last |
| addDecision | Thêm QĐ | action | | inline grid |
| removeDecision | Xóa QĐ | action danger | | Lin confirm |

### Tab 2 — Hợp đồng (1 CT : n HĐ)

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
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
| addContract | Thêm HĐ mới | action | | inline create child |
| openContractDetail | Mở HĐ | action ↗ | | `/hd-ns/:id?from=kcht&projectId={id}` read-only |

### Tab 3 — Hồ sơ file (GAP-KCT-FILE-01)

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| attachments[].fileName | Tên file | `Text` readonly | | FileService metadata |
| attachments[].docKind | Loại hồ sơ | `SearchInput` | | QĐ · HĐ · BBNT · khác |
| attachments[].uploadedAt | Ngày tải | `Date` readonly | | |
| uploadFile | Tải lên | action | | `/integrate-file-upload-web` presign |
| downloadFile | Tải xuống | action | | presign GET |
| deleteFile | Xóa | action danger | | soft-delete ref · confirm |

### Enum values (P1) — Design chốt value + label

**kcht-project-type**

| value | Label |
|-------|--------|
| `sua-chua-dinh-ky` | SCĐK |
| `sua-chua-dot-xuat` | SCĐX |
| `khac-phuc-thien-tai` | KPTT |
| `diem-den-atgt` | Điểm đen ATGT |
| `khac` | Khác |

**kcht-project-status**

| value | Label |
|-------|--------|
| `nhap` | Nháp |
| `dang-thuc-hien` | Đang thực hiện |
| `hoan-thanh` | Hoàn thành |
| `dong` | Đóng |

**kcht-continuity-kind**

| value | Label |
|-------|--------|
| `moi` | Mới |
| `chuyen-tiep` | Chuyển tiếp |

**kcht-decision-kind**

| value | Label |
|-------|--------|
| `chu-truong` | Chủ trương |
| `phe-duyet` | Phê duyệt DA |
| `dieu-chinh` | Điều chỉnh |

**kcht-contract-type**

| value | Label |
|-------|--------|
| `tvtk` | TVTK |
| `tvgs` | TVGS |
| `xay-lap` | Xây lắp |
| `qlda` | QLDA |
| `khac` | Khác |

### CSS / layout gates

| Rule | Gap |
|------|-----|
| Full-page form 4 tab · **cấm** Slideout | GAP-KCT-UI-01 |
| View `<dl>` — **cấm** Input `readOnly` xám | align ContractFormPage view pattern |
| SearchInput enum/lookup — **cấm** native Select | GAP-KCT-LOOKUP-01 |
| Tab index 0–3 lock — **cấm** reorder | GAP-TAB-01 |
| Zone F schema · **cấm** `configHint` | GAP-P2-CC-06 |
| Typography label 13 · input D14/M16 | GAP-TYP-01 |
| KPI strip on list | **DEFER** wave 5 — **cấm** PH1 |
| GOVOne chrome / demo-json SSOT | **cấm** — synthetic công văn only |

## 4. Real-data bind (cite §B analy — SA scaffold paths)

**Prefix đề xuất** (chưa live — mark GAP):

| Operation | Path |
|-----------|------|
| List | `GET /web-bff/api/v1/kcht-ct/projects` |
| Detail | `GET /web-bff/api/v1/kcht-ct/projects/{id}` |
| CRUD | POST/PUT/DELETE projects |
| Decisions | `…/projects/{id}/decisions` |
| Contract links | `…/projects/{id}/contracts` |
| Attachments | `…/projects/{id}/attachments` |

**Integration lookup** (live cite):

| Catalog | Path |
|---------|------|
| road-route | `GET /web-bff/api/v1/integration/road-routes/search` |
| org-unit | `GET /web-bff/api/v1/integration/org-units/search` |
| partner-unit | `GET /web-bff/api/v1/integration/partner-units/search` |

**Contract child** (live): `GET/POST/PUT /web-bff/api/v1/contract/contracts` · FE `src/services/contract/endpoint.ts`.

**UNCLEAR P1:** `provinceCode` master · `ownerUserId` users picker scope P2.

## Prototype (REQUIRED)

| | |
|--|--|
| Artifact | `ui/prototype/kcht-cong-trinh-prototype.html` |
| Zones | **A–D** content-only + Zone F schema mock — **skip** GOVOne chrome/sidebar/menu |
| Form | **Full-page 4 tab** (không Slideout) · View = `<dl>` · footer-only Lưu/Hủy |
| Lookups | SearchInput combo mock enum + integration labels |
| SSOT | Kind B list-shell · `erp-control-icon-map` · Contract MFE cite |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/kcht-cong-trinh/ui/prototype/kcht-cong-trinh-prototype.html` |
| **peerStdUrl** | `http://localhost:9301/kcht-cong-trinh` |

### List wire

```
[A] fa-road + «Công trình KCHT» — cấm Thêm mới trên A
[B] SearchTextInput · 7 SearchInput filter · Làm mới · Lịch sử · fa-cog · Xóa | [+ Tạo mới]
[C] «Danh sách công trình» · LinCatalogDataGrid mock · ⋯ menu
[D] Tổng · Hiển thị [50|100|200|500] · pager FA
[F] modal «Cấu hình hiển thị danh mục»
```

### Form wire (4 tab)

```
[Header] Quay lại · badge · Sửa (view only)
[Tabs] 0 Chung · 1 Quyết định · 2 Hợp đồng · 3 Hồ sơ file
[Tab 0] IdCode readonly · SearchInput lookups · Money KH vốn
[Tab 1] inline grid QĐ · Thêm/Xóa
[Tab 2] child HĐ table · Liên kết · Thêm · Mở HĐ ↗
[Tab 3] file rows · upload presign · download · delete
[Footer] Hủy · Lưu
```

## 5. Leave / alert (from PO §8)

| Case | Control | Cấm |
|------|---------|-----|
| Form dirty · navigate away | `LeaveConfirmModal` + leave guard | `window.confirm` |
| API 4xx validation | `useAppToast` | `window.alert` |
| API 5xx | toast error | silent empty |
| detail 404 | toast · navigate list | silent fail |
| Delete CT / QĐ / file / unlink HĐ | Lin confirm modal | native `confirm` |
| Lookup no match | SearchInput empty | free text substitute master |
| Upload fail FileService | toast error | silent fail |

## 6. Map / report / PH2–PH5 (out of pack wave 1)

- PH2 đoạn tuyến multi-segment · bảo hành 6-state · cảnh báo 90/60/30 — **DEFER**
- PH3 tiến độ tuần · RAG · cảnh báo — **DEFER**
- PH4 giải ngân · KBNN · chứng từ — **DEFER**
- PH5 4 loại BC · dashboard 10 KPI — **DEFER**
- KPI strip metric cards trên list — **DEFER** wave 5
- Map canvas — `map: none` PH1
- `api/v1/rmms/*` · ERP.* — **cấm**

## 7. Open questions (PO closed — Design không re-open)

| ID | Decision |
|----|----------|
| GAP-KCT-01 | Entity mới `KchtProject` — 1 CT : n HĐ |
| GAP-KCT-API-01 | Đề xuất `api/v1/kcht-ct` — SA confirm |
| GAP-PO-PK-01 | packKind `list` Kind B — KPI strip DEFER |
| GAP-PO-PROVINCE-01 | `provinceCode` **UNCLEAR** — SA/FormsService P1 |
| GAP-PO-OWNER-01 | `ownerUserId` optional P1 · P2 Integration |
| GAP-PO-SLIDEOUT-01 | **Cấm** Slideout — full-page 4 tab |
| GAP-PO-DEMO-01 | **Cấm** re-scan demo — hash skip |
| PH2–PH5 | **DEFER** waves 2–5 |

## Confirm

`design_confirm` = **approve** — autoApprove **ON** · agent tự confirm (`task_64fb2fd7`). Chain **SA** enqueue (roles sau = pending đến lượt).

## Handoff → SA

| Field | Value |
|-------|-------|
| Kind / pattern | B · catalog A–D + **full-page** form **4 tab** |
| Tab index | **0** Chung · **1** Quyết định · **2** Hợp đồng · **3** Hồ sơ file — **cấm** reorder |
| Field inventory | §3 · SearchInput all lookups/enums · Money fields · inline grid QĐ · child HĐ · FileService tab |
| Filters | search + 7 SearchInput → page=1 |
| Prototype · reviewUrl | § Prototype |
| API prefer | `api/v1/kcht-ct/projects` + nested decisions/contracts/attachments — **GAP** scaffold |
| Entity | `KchtProject` NEW · `KchtProjectDecision` · junction `KchtProjectContract` → `ContractEntity` widen |
| Lookups | Integration road-route/org-unit/partner-unit live · province/users **UNCLEAR** |
| Seed | CatalogUiSchemaRegistry kind `kcht-projects` · IdCode `CT-yyyyMMdd-nnnn` |
| File | FileService presign `/integrate-file-upload-web` — **cấm** byte on business DB |
| TZ | date fields form · list filter no date P1 → `tz_na` list |
| Next | SA **pending** đến lượt · chain ON |

## DES-GRID map → Lin\*

| Zone | DES-GRID | Component |
|------|----------|-----------|
| A | DES-GRID-A | `LinPageLayout` header |
| B | DES-GRID-B | `catalogToolbar` + 8 filters |
| C | DES-GRID-C2 | `LinCatalogDataGrid` + resize ON |
| D | DES-GRID-D | `LinCatalogListPagination` |
| F | schema | `LinCatalogUiSchemaEditorModal` |
| Form tabs | DES-FORM-TAB | Tab bar index 0–3 lock |
| Tab 1 grid | DES-CHILD-GRID | inline grid decisions |
| Tab 2 list | DES-CHILD-LIST | contract junction list |
| Tab 3 files | DES-FILE-LIST | FileService attachment list |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design |
| skillVersion | 2026.08.21.01 |
| schemaVersion | qldb-workflow-skill-v1 |
| workflowVersion | 2026.08.21.01 |
| rulesVersion | 2026.08.25.4 |
| generatedAt | 2026-08-27T00:30:00.000Z |
| versionGate | rechecked |
| contentHashPriorPo | sha256:77c91b35d170a15297c00fd9219f11fbe1f9e51bcab589c0c9b1d7283c702bbe |
| contentHashPriorDataAnaly | sha256:77c91b35d170a15297c00fd9219f11fbe1f9e51bcab589c0c9b1d7283c702bbe |
| orchestratorSkillVersion | 2026.08.21.01 |
| orchestratorWorkflowVersion | 2026.08.21.01 |
| orchestratorSchemaVersion | qldb-workflow-skill-v1 |
| dataAnalySkillVersion | 2026.08.21.01 |
| dataAnalyWorkflowVersion | 2026.08.21.01 |
| poSkillVersion | 2026.08.21.01 |
| taskId | `task_64fb2fd7` |

---
<!-- Version meta: skillId=agent-design skillVersion=2026.08.21.01 schemaVersion=qldb-workflow-skill-v1 workflowVersion=2026.08.21.01 rulesVersion=2026.08.25.4 versionGate=rechecked contentHashPriorDataAnaly=sha256:77c91b35d170a15297c00fd9219f11fbe1f9e51bcab589c0c9b1d7283c702bbe taskId=task_64fb2fd7 -->
