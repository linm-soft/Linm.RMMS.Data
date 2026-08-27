# Data-analy — controlHint — kcht-cong-trinh (Công trình KCHT · Khu QLĐB IV)

| Field | Value |
|-------|-------|
| feature | `kcht-cong-trinh` |
| packKind | `list` |
| mode | `feature_context` (công văn synthetic · **no Excel** · **no GOVOne demo** · live Contract MFE cite) |
| changeScope | `new_page` |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.21.01` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.21.01` |
| rulesVersion | `2026.08.25.4` |
| versionGate | `rechecked` |
| contentHash | `sha256:77c91b35d170a15297c00fd9219f11fbe1f9e51bcab589c0c9b1d7283c702bbe` |
| headerFingerprint | `sha256:kcht-cong-trinh-ph1-v1` |
| analyzedAt | `2026-08-26T23:50:00.000Z` |
| cluster | — (không Excel) |
| taskId | `task_e3745f39` |
| autoApprove | `ON` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Contract** widen × **KchtProject** NEW · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Contract` (ứng viên — **chưa** `ui_repo_confirm`) |
| devSlash | `/agent-qldb-workflow` wave 1 PH1 · FileService `/integrate-file-upload-web` wave 4 |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** route `api/v1/kcht-ct/…`.  
> **Cấm** Dev đoán Text vs SearchInput khi đã có bảng này.  
> **Cấm** Slideout form hồ sơ CT · **cấm** hardcode label VN — `useFormOptions()`.  
> Typography: label **13** · input D14 / M16 (**GAP-TYP-01**).  
> **DEM N/A** (`sourceKind=synthetic`) — **cấm** GOVOne chrome · **cấm** demo-json SSOT.

## Sources

| Source | Path | Note |
|--------|------|------|
| Context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/kcht-cong-trinh.md` | PH1–5 waves · GAP-KCT-01…09 |
| Công văn | `D:/AI-QLBD/Linm.RMMS.Data/docs/tinh-nang/Cung-cap-thong-tin-phan-mem.md` | 5 phân hệ · RBAC 5 nhóm |
| Plan | `D:/AI-QLBD/Linm.RMMS.Data/docs/plan/kcht-cong-trinh/PLAN.md` | D1–D8 · wave 1 = PH1 |
| MFE list cite | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Contract/src/pages/ContractListPage/ContractListPage.tsx` | Kind B stack reuse |
| MFE form cite | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Contract/src/pages/ContractFormPage/ContractFormPage.tsx` | full-page shell · **no tabs today** |
| MFE inventory cite | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Contract/src/services/inventory/lookups.ts` | `orgLookupConfig()` Integration pattern |
| BE contract | `D:/AI-QLBD/Linm.RMMS.WebService/api/shared/RMMS.Service.Persistence/Entities/ContractEntity.cs` | child HĐ widen |
| BE integration | `RoadRoutesController` · `OrgUnitsController` · `PartnerUnitsController` | master READY |
| DOMAIN-MAP | `D:/AI-QLBD/Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Contract domain widen |

Normalized header (no Excel · PH1 wave):

`code|name|projectType|continuityKind|planYear|roadRouteCode|provinceCode|routeSegmentSummary|lengthM|capitalSourceKind|capitalPlanAmount|orgUnitCode|ownerUserId|bqlOrgUnitCode|contractorCode|status|decisionKind|decisionNo|decisionDate|issuingAgency|totalInvestment|approvedEstimate|adjustedTotalInvestment|contracts.contractNo|contracts.type|contracts.contractor|contracts.amount|contracts.status|attachments.fileName|search`

## § Delta Current vs New (`new_page`)

| ID | Current (2026-08-27 inventory) | New (SSOT công văn PH1) | Surface |
|----|--------------------------------|-------------------------|---------|
| GAP-KCT-01 | Không entity `KchtProject` · HĐ mỏng 1:1 | Entity mới parent CT · 1 CT : n HĐ | BE + list |
| GAP-KCT-UI-01 | Contract MFE chỉ `/hd-ns` HĐ · form không tab | Route `/kcht-cong-trinh` · Kind B list + **full-page 4 tab** | MFE |
| GAP-KCT-FILTER-01 | Contract list 4 filter (search/type/status/contractor) | + quốc lộ · tỉnh · loại CT · Ban QLDA · người PT · nhà thầu | list Zone B |
| GAP-KCT-LOOKUP-01 | `orgUnit`/`contractor` demo seed local | `SearchInput` → `org-unit` · `partner-unit` · `road-route` Integration | form + filter |
| GAP-KCT-DECISION-01 | Không QĐ chủ trương/phê duyệt | Tab Quyết định · child `KchtProjectDecision` | form tab 1 |
| GAP-KCT-CHILD-HD-01 | HĐ độc lập không `ProjectId` | Tab Hợp đồng · junction `KchtProjectContract` → `contract` | form tab 2 |
| GAP-KCT-FILE-01 | FileService platform READY · chưa bind CT | Tab Hồ sơ file · `attachmentId` on project | form tab 3 |
| GAP-KCT-ROUTE-01 | `routeSegment` plain text trên HĐ | PH1: `roadRouteCode` SearchInput · PH2: multi-segment child | form Chung |
| GAP-KCT-API-01 | Chỉ `api/v1/contract/contracts` | **đề xuất** `api/v1/kcht-ct/projects` — SA confirm | BE |
| PH2–PH5 | — | đoạn tuyến/BH · tiến độ tuần · giải ngân · BC — **DEFER** wave 2–5 | — |

**Không** đổi: Kind B `LinPageLayout` + `LinCatalogDataGrid` + `LinCatalogListPagination` · `useCatalogUiSchema` · leave-guard · toast not alert.

**Cấm** nhồi CT vào `contract` parent-less · **cấm** `api/v1/rmms/*` · **cấm ERP.***

## Kind / zones (handoff Design)

Pack **list** = Kind **B** catalog (MFE Contract host). **Không** demo HTML — công văn synthetic only.

| Zone | Pattern | DoD |
|------|---------|-----|
| A | Header | title «Công trình KCHT» — **cấm** Thêm mới trên A |
| B | Toolbar + filter | SearchTextInput · SearchInput loại CT / QL / tuyến / tỉnh / Ban QLDA / người PT / nhà thầu · Tạo mới primary · Refresh · Delete · config · History |
| C | `LinCatalogDataGrid` | Mã CT · Tên · Loại · Tuyến · Tỉnh · ĐV QL · Ban QLDA · Nhà thầu chính · KH vốn · TT · row menu |
| D | Footer | `LinCatalogListPagination` 50/100/200/500 |
| Form | Kind B **full-page** 4 tab | **cấm** Slideout · View=`<dl>` · footer Lưu/Hủy · leave-confirm |
| KPI strip | metric cards (P2) | Tổng CT · đang TC · chậm TT · sắp hết BH — **DEFER** dashboard wave 5 |

**Skip chrome:** GOVOne · hub nav · demo skin.

## Control hint — list filters (Zone B · PH1)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã CT · tên · số QĐ · số HĐ con |
| projectType | Loại công trình | `SearchInput` | enum kcht-project-type | SCĐK · SCĐX · KPTT · điểm đen · khác |
| roadRouteCode | Quốc lộ / tuyến | `SearchInput` | road-route | Integration `GET /integration/road-routes/search` |
| provinceCode | Tỉnh / TP | `SearchInput` | province | **UNCLEAR** master P1 — SA/FormsService |
| orgUnitCode | Đơn vị quản lý | `SearchInput` | org-unit | seed `REG-IV*` · `VP-IV.*` |
| bqlOrgUnitCode | Ban QLDA | `SearchInput` | org-unit | `SU-BQLDA-S` subtree |
| ownerUserId | Người phụ trách | `SearchInput` | users | JWT scope · P2 Integration |
| contractorCode | Nhà thầu | `SearchInput` | partner-unit | chính trên HĐ XL child |
| status | Trạng thái CT | `SearchInput` | enum kcht-project-status | nháp · đang TH · HT · đóng — SA enum |

## Control hint — form Tab 0 Chung (công văn §1.1)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| code | Mã công trình | `Text` readonly | auto | IdCode `CT-yyyyMMdd-nnnn` — SA `IIdCodeService` |
| name | Tên công trình | `Text` | * | |
| projectType | Loại công trình | `SearchInput` | * | enum 5+1 công văn |
| continuityKind | Mới / chuyển tiếp | `SearchInput` | | enum `moi` · `chuyen-tiep` |
| planYear | Năm kế hoạch | `Integer` | | |
| roadRouteCode | Tuyến quốc lộ | `SearchInput` | * | `road-route` master |
| provinceCode | Tỉnh / TP | `SearchInput` | * | **UNCLEAR** catalog |
| routeSegmentSummary | Đoạn tuyến (Km) | `Text` | | PH1 summary text · PH2 child table |
| lengthM | Chiều dài (m) | `Number` | | |
| structureRefs | Vị trí cầu/cống | `Text` | | free text / asset ref P2 |
| capitalSourceKind | Loại nguồn vốn | `SearchInput` | | enum SA |
| capitalPlanAmount | Kế hoạch vốn | `Money` | | |
| orgUnitCode | Đơn vị quản lý | `SearchInput` | * | `org-unit` |
| ownerUserId | Người phụ trách | `SearchInput` | | users |
| bqlOrgUnitCode | Ban QLDA | `SearchInput` | | `SU-BQLDA-S` |
| status | Trạng thái | `SearchInput` | * | enum kcht-project-status |
| note | Ghi chú | `Text` | | textarea |

## Control hint — form Tab 1 Quyết định (công văn §1.2 · **NEW**)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| decisions[].decisionKind | Loại QĐ | `SearchInput` | * | chủ trương · phê duyệt DA · điều chỉnh |
| decisions[].decisionNo | Số quyết định | `Text` | * | |
| decisions[].decisionDate | Ngày QĐ | `Date` | * | UTC store |
| decisions[].issuingAgency | Cơ quan ban hành | `Text` | | |
| decisions[].totalInvestment | Tổng mức đầu tư | `Money` | | |
| decisions[].approvedEstimate | Dự toán được duyệt | `Money` | | |
| decisions[].adjustedTotalInvestment | TMĐT sau điều chỉnh | `Money` | | computed/last adjustment |
| addDecision | Thêm QĐ | action | | inline grid / subform |
| removeDecision | Xóa QĐ | action danger | | confirm |

## Control hint — form Tab 2 Hợp đồng (công văn §1.3 · widen `contract`)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| contracts[].code | Mã HĐ | `Text` readonly | | link existing or create |
| contracts[].contractNo | Số hợp đồng | `Text` | * | map `ContractEntity.ContractNo` |
| contracts[].name | Tên HĐ | `Text` | * | |
| contracts[].type | Loại HĐ | `SearchInput` | * | TVTK · TVGS · XL · QLDA · khác — **widen** enum |
| contracts[].contractor | Nhà thầu | `SearchInput` | * | `partner-unit` |
| contracts[].amount | Giá trị HĐ | `Money` | * | |
| contracts[].signedAt | Ngày ký | `Date` | | |
| contracts[].startDate | Ngày khởi công | `Date` | | **NEW** vs contract today |
| contracts[].completionDate | Ngày HT theo HĐ | `Date` | | |
| contracts[].durationMonths | Thời gian TH (tháng) | `Integer` | | |
| contracts[].extensionDate | Ngày gia hạn | `Date` | | |
| contracts[].completionAfterExtension | Ngày HT sau gia hạn | `Date` | | |
| contracts[].adjustedAmount | Giá trị sau ĐC | `Money` | | |
| contracts[].status | Trạng thái HĐ | `SearchInput` | * | reuse contract status enum |
| contracts[].appendices | Phụ lục | `Text` / child | | P1 textarea · P2 structured |
| linkContract | Liên kết HĐ có sẵn | action | | SearchInput picker |
| addContract | Thêm HĐ mới | action | | inline create child |
| openContractDetail | Mở HĐ | action ↗ | | `/hd-ns/:id` read-only handoff |

## Control hint — form Tab 3 Hồ sơ file (**GAP-KCT-FILE-01**)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| attachments[].fileName | Tên file | `Text` readonly | | FileService metadata |
| attachments[].docKind | Loại hồ sơ | `SearchInput` | | QĐ · HĐ · BBNT · khác |
| attachments[].uploadedAt | Ngày tải | `Date` readonly | | |
| uploadFile | Tải lên | action | | `/integrate-file-upload-web` presign |
| downloadFile | Tải xuống | action | | presign GET |
| deleteFile | Xóa | action danger | | soft-delete attachment ref |

`controlHint=UNCLEAR`: `provinceCode` master P1 · `ownerUserId` picker scope.

## § Tab index (HARD · GAP-TAB-01)

Role sau **cấm** reorder / invent tab.

### Surface A — List page (`/kcht-cong-trinh` draft)

| Index | id | VN | Kind |
|-------|-----|-----|------|
| — | — | Kind B catalog only | list |

### Surface B — Form page (`/kcht-cong-trinh/tao-moi` · `/kcht-cong-trinh/:id`)

| Index | id | VN | Kind |
|-------|-----|-----|------|
| 0 | `general` | Thông tin chung | form tab |
| 1 | `decisions` | Quyết định | form tab · child grid |
| 2 | `contracts` | Hợp đồng | form tab · 1–n HĐ |
| 3 | `files` | Hồ sơ file | form tab · FileService |

**Cấm** Slideout · **cấm** gộp PH2–PH5 tab vào wave 1.

## Lookup / enum (handoff SA)

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

## Handoff → PO

| Field | Value |
|-------|-------|
| feature / packKind | `kcht-cong-trinh` / `list` |
| phase_from / phase_to | data_analy → po |
| STATUS | data-analy **done** · chain `roleOnly=po` |
| Context / Demo / DI | CTX + công văn · **no demo** · DI none |
| controlHint / UNCLEAR | this file · `provinceCode` · `ownerUserId` |
| real-data | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/kcht-cong-trinh-real-data.md` |
| Screens / Pattern / devSlash | Kind B list + full-page 4-tab · wave 1 PH1 only |
| Open questions | GAP-KCT-01 entity confirm · `api/v1/kcht-ct` prefix · `ui_repo_confirm` |
| Next | PO: AC PH1 CRUD + QĐ + 1–n HĐ + filter công văn |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.08.21.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.21.01 |
| rulesVersion | 2026.08.25.4 |
| generatedAt | 2026-08-26T23:50:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:77c91b35d170a15297c00fd9219f11fbe1f9e51bcab589c0c9b1d7283c702bbe |
| taskId | `task_e3745f39` |

---
<!-- Version meta: skillId=agent-data-analy skillVersion=2026.08.21.01 schemaVersion=1 workflowVersion=2026.08.21.01 rulesVersion=2026.08.25.4 versionGate=rechecked contentHash=sha256:77c91b35d170a15297c00fd9219f11fbe1f9e51bcab589c0c9b1d7283c702bbe taskId=task_e3745f39 -->
