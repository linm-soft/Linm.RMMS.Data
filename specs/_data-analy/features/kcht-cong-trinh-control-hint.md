# Data-analy — controlHint — kcht-cong-trinh (Công trình KCHT · edit_page PH2–PH4)

| Field | Value |
|-------|-------|
| feature | `kcht-cong-trinh` |
| packKind | `list` |
| mode | `feature_context` (công văn synthetic · **no Excel raw** · **no GOVOne demo** · live Contract MFE + BE cite · form nguồn extract `SRC-KCT-GN03`) |
| changeScope | `edit_page` (PH2–PH4) · Wave 1 PH1 **giữ** |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.21.01` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.21.01` |
| rulesVersion | `2026.08.25.4` |
| versionGate | `rechecked` |
| contentHash | `sha256:4652f6331035f6521fe50b83cf35ad19d594ca0b4de1fbb40a44f17d52a337dd` |
| headerFingerprint | `sha256:b42f332386243b15594ca97c71e26d37f16a62eb27badbe7df51aabbe4554167` |
| analyzedAt | `2026-08-29T04:15:00.000Z` |
| cluster | — (không Excel raw · dùng extract md) |
| taskId | `task_399151e1` |
| autoApprove | `ON` |
| realData | `specs/_data-analy/features/kcht-cong-trinh-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Contract** widen × **KchtProject** live · PH2–PH4 NEW **GAP** · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Contract` · `ui_repo_confirm` **locked** |
| mfeStdUrl | `http://localhost:9312/kcht-cong-trinh` |
| runMode | `full_pipeline` · wave PH2–PH4 · PH5 park |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** route PH2–PH4 `api/v1/kcht-ct/…` (PH1 prefix **đã live**).  
> **Cấm** Dev đoán Text vs SearchInput khi đã có bảng này.  
> **Cấm** Slideout form hồ sơ CT · **cấm** hardcode label VN — `useFormOptions()`.  
> Typography: label **13** · input D14 / M16 (**GAP-TYP-01**).  
> **DEM N/A** (`sourceKind=synthetic`) — **cấm** GOVOne chrome · **cấm** demo-json SSOT.  
> **Giữ** PO/Design/SA/TL/Dev/QA artifacts Wave 1 đã confirmed — pack này = **Delta PH2–PH4 only**.

## Sources

| Source | Path | sha256 / note |
|--------|------|---------------|
| Context | `docs/context/features/kcht-cong-trinh.md` | `4652f633…` (contentHash) |
| Wave SSOT | `docs/data/analyzed/kcht-wave-ph2-ph4.md` | `b42f3323…` (headerFingerprint) |
| Form nguồn PH4 | `docs/data/analyzed/kcht-giai-ngan-03-sheet.md` | `6b528e73…` · `SRC-KCT-GN03` |
| Công văn | `docs/tinh-nang/Cung-cap-thong-tin-phan-mem.md` | PH2–PH4 § phân hệ 2–4 |
| Plan | `docs/plan/kcht-cong-trinh/PLAN.md` | Wave 2–4 · D1–D8 |
| MFE list live | `Linm.Web.RMMS.Contract/.../KchtProjectListPage.tsx` | Kind B · catalog `kcht-projects` |
| MFE form live | `.../KchtProjectFormPage.tsx` | full-page **4 tab** · **không** tab đoạn/tuần/GN |
| MFE routes | `src/index.tsx` | `/kcht-cong-trinh` · `/tao-moi` · `/:id` only |
| BE API live | `.../KchtProjectsController.cs` | `api/v1/kcht-ct/projects` |
| BE entity live | `.../Entities/KchtProjectEntity.cs` | `rmms_kcht_projects` |
| Payment mỏng | `.../ContractPaymentEntity.cs` | Period/Amount/PaidAt — **thiếu** voucher/KBNN |
| Integration | `road-routes` · `org-units` · `partner-units` search | READY |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | **GAP** slug row (P1 accept) |

Normalized header (PH1 live + PH2–PH4 proposed):

`code|name|projectType|continuityKind|planYear|roadRouteCode|provinceCode|routeSegmentSummary|lengthM|capitalSourceKind|capitalPlanAmount|orgUnitCode|ownerUserId|bqlOrgUnitCode|contractorCode|status|segments.status|segments.warrantyEnd|weekOf|planPctToWeek|actualPctToWeek|rag|yearEstimate|capitalPlan|costGroup|content|paymentValue|disbursedValue|outstandingValue|partyCode|voucherKind|voucherNo|voucherDate|search`

## § Delta Current vs New (`edit_page` · wave PH2–PH4 · `task_399151e1`)

Giữ Wave 1 artifacts (PO/Design/SA/TL/Dev/QA) + live PH1 CRUD. Delta **bắt buộc** = sổ/đoạn/tuần theo wave SSOT + form nguồn SRC-KCT-GN03.

| ID | Current (live inventory 2026-08-29) | New (SSOT PH2–PH4) | Surface |
|----|-------------------------------------|--------------------|---------|
| GAP-KCT-PH2-01 | `routeSegmentSummary` Text trên Tab Chung · **không** child đoạn | Child **đoạn tuyến + BH** 6 TT · badge 90/60/30 · route đề xuất `/:id/doan-tuyen` | Kind B + form |
| GAP-KCT-PH2-02 | `ContractEntity.WarrantyMonths` / `WarrantyExpires` mỏng trên HĐ | BH gắn **đoạn** (start/end/months) · job cảnh báo | form đoạn + job |
| GAP-KCT-PH2-03 | MFE routes chỉ list + form 4 tab | + surface đoạn · **cấm** Slideout hồ sơ CT | MFE route |
| GAP-KCT-PH3-01 | **Không** entity/API/UI tiến độ tuần | `KchtWeeklyProgress` · 1 dòng/CT/tuần · header auto · RAG · 3 nhóm cảnh báo | Kind B tuần |
| GAP-KCT-PH3-02 | — | Job «chưa cập nhật tuần này» | BE job |
| GAP-KCT-PH4-01 | `capitalPlanAmount` 1 số trên project | `KchtCapitalPlan` (năm · đầu năm · bổ sung · ± · tiết kiệm · cuối) | sổ header |
| GAP-KCT-PH4-02 | `ContractPayment` Period/Amount/PaidAt/Status/Note | `KchtDisbursement` 1 TT = 1 GD · voucher · party · FileService KBNN | sổ dòng |
| GAP-KCT-PH4-03 | — | 2 màn Kind B: sổ **SCĐK** + sổ **SCTX** (cây + quý + liên danh) | UI sổ |
| GAP-KCT-PH4-04 | File tab = stub storageKey (P1 accept) | Bind chứng từ **dòng GD** (6 loại công văn) — không stub-only | FileService |
| GAP-KCT-PH4-05 | — | Lưới đối chiếu PM × KBNN × chênh (nhập/Excel) · **cấm** giả API KBNN | report/grid |
| GAP-KCT-PH5-01 | — | PHỤ LỤC 03 · `sourceFormReady=no` đến PH4 done | **cấm** enqueue report |
| GAP-KCT-DM-01 | DOMAIN-MAP thiếu slug `kcht-ct` | SA/TL bổ sung row (debt P1) | docs |

**Không** đổi: PH1 list `/kcht-cong-trinh` Kind B A–D+F · full-page 4 tab `general|decisions|contracts|files` · `api/v1/kcht-ct/projects` live · catalog `kcht-projects` · Integration lookups · leave-guard · toast not alert · **cấm ERP.*** · **cấm** `api/v1/rmms/*`.

## Kind / zones (handoff Design)

Pack **list** = Kind **B** catalog (MFE Contract host `:9312`). **Không** demo HTML.

| Zone / surface | Pattern | DoD |
|----------------|---------|-----|
| List CT (PH1 giữ) | Kind B A–D+F | filter công văn · **cấm** Thêm mới trên A |
| Form CT (PH1 giữ) | full-page 4 tab | **cấm** Slideout · View=`<dl>` · footer Lưu/Hủy |
| Đoạn + BH (PH2 **NEW**) | Kind B child + full-page / nested | 6 status · badge 90/60/30 · LRS SearchInput |
| Tiến độ tuần (PH3 **NEW**) | Kind B list tuần + form | header readonly auto · body user · RAG |
| Sổ SCĐK (PH4 **NEW**) | Kind B sổ | cây 8 nhóm · Giấy rút/UNC · attach |
| Sổ SCTX (PH4 **NEW**) | Kind B sổ | KH vốn · quý · liên danh nhiều NT |
| Đối chiếu KBNN | grid 3 cột | P1 nhập/Excel |
| PH5 BC | Kind E | **PARK** |

**Skip chrome:** GOVOne · hub nav · demo skin.

## Control hint — PH1 list filters (Zone B · **giữ**)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã CT · tên · số QĐ · số HĐ con |
| projectType | Loại công trình | `SearchInput` | kcht-project-type | SCĐK · SCĐX · KPTT · điểm đen · khác |
| roadRouteCode | Quốc lộ / tuyến | `SearchInput` | road-route | live Integration |
| provinceCode | Tỉnh / TP | `SearchInput` | province | **UNCLEAR** master P1 — FormsService |
| orgUnitCode | Đơn vị quản lý | `SearchInput` | org-unit | `REG-IV*` · `VP-IV.*` |
| bqlOrgUnitCode | Ban QLDA | `SearchInput` | org-unit | `SU-BQLDA-S` |
| ownerUserId | Người phụ trách | `SearchInput` | users | P2 Integration |
| contractorCode | Nhà thầu | `SearchInput` | partner-unit | filter từ HĐ XL |
| status | Trạng thái CT | `SearchInput` | kcht-project-status | live enum |

## Control hint — PH1 form tabs (giữ · **cấm** reorder)

| Index | id | VN | Kind |
|-------|-----|-----|------|
| 0 | `general` | Thông tin chung | form tab · gồm `routeSegmentSummary` text (PH2 thay bằng child) |
| 1 | `decisions` | Quyết định | child grid |
| 2 | `contracts` | Hợp đồng | 1–n link `contract` |
| 3 | `files` | Hồ sơ file | FileService · stub → harden PH4 |

## Control hint — PH2 đoạn tuyến / bảo hành (**NEW**)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| segments[].roadRouteCode | Quốc lộ | `SearchInput` | road-route | live |
| segments[].provinceCode | Tỉnh | `SearchInput` | province | UNCLEAR P1 |
| segments[].kmFrom | Lý trình đầu | `Number` | — | LRS |
| segments[].kmTo | Lý trình cuối | `Number` | — | |
| segments[].lengthM | Chiều dài (m) | `Number` | — | |
| segments[].workItem | Hạng mục SC | `Text` | — | |
| segments[].assetRef | Cầu/cống | `SearchInput` / Text | asset | **tham chiếu** — không tạo TS |
| segments[].contractId | Hợp đồng | `SearchInput` | kcht-project-contracts | child PH1 |
| segments[].contractorCode | Nhà thầu | `SearchInput` | partner-unit | live |
| segments[].startAt | Ngày KC | `Date` | — | UTC |
| segments[].finishAt | Ngày HT | `Date` | — | |
| segments[].acceptAt | Ngày NT | `Date` | — | |
| segments[].handoverAt | Ngày bàn giao | `Date` | — | |
| segments[].warrantyMonths | BH (tháng) | `Integer` | — | |
| segments[].warrantyStart | Bắt đầu BH | `Date` | — | |
| segments[].warrantyEnd | Hết BH | `Date` | — | |
| segments[].status | Trạng thái đoạn | `SearchInput` | kcht-segment-status | 6: chưa-tc · dang-tc · ht · nt · dang-bh · het-bh |
| warrantyAlert | Cảnh báo BH | derived badge | — | 90 / 60 / 30 ngày |

## Control hint — PH3 tiến độ tuần (**NEW**)

### Header (readonly · auto từ PH1–PH2)

| Field key | controlHint | Notes |
|-----------|-------------|-------|
| projectCode · projectName | Text readonly | PH1 |
| roadRouteCode · segmentLabel · provinceCode | Text/SearchInput readonly | PH1–PH2 |
| totalInvestment · contractAmount · yearEstimate | Money readonly | QĐ / HĐ / KH vốn |
| contractor · supervisor · bqlOrgUnitCode | Text readonly | |
| startAt · completionDate · completionAfterExtension | Date readonly | |

### Body (user nhập)

| Field key | Label | controlHint | catalogKind |
|-----------|-------|-------------|-------------|
| weekOf | Tuần báo cáo | `Date` / week | — |
| planPctToWeek | % KH đến tuần | `Number` | — |
| actualPctToWeek | % TT đến tuần | `Number` | — |
| prevWeekPct | % tuần trước | `Number` | derived/readonly ok |
| weekDeltaPct | % tăng trong tuần | `Number` | derived ok |
| valueCum | GT thực hiện lũy kế | `Money` | — |
| valueWeek | GT trong tuần | `Money` | — |
| situation | Tình hình TC | `Text` | textarea |
| nextWeekWork | CV tuần tới | `Text` | |
| issues | Tồn tại / vướng mắc | `Text` | |
| delayCause | Nguyên nhân chậm | `SearchInput` | kcht-delay-cause |
| solution | Giải pháp | `Text` | |
| rag | Đèn RAG | `SearchInput` / derived | kcht-rag · xanh/vàng/đỏ |
| alerts[] | Cảnh báo | derived chips | tiến độ · GN · BH |

## Control hint — PH4 sổ giải ngân (SRC-KCT-GN03 · **NEW**)

Hai màn Kind B (cùng feature · route SA/TL):

| Màn | Khi | Sheet |
|-----|-----|-------|
| Sổ SCĐK | `projectType` SCĐK / vốn định kỳ | `Vốn SCĐK` |
| Sổ SCTX | BDTX / SCTX | `Vốn SCTX` |

### Header sổ (1 DA)

| Field key | Label | controlHint | Notes |
|-----------|-------|-------------|-------|
| projectId | Công trình | SearchInput readonly | live `KchtProject` |
| projectName | Tên DA | Text readonly | |
| totalInvestment | TMĐT | Money readonly | last QĐ |
| yearEstimate | DT giao đầu năm | Money | |
| yearEstimateFinal | DT lần cuối | Money | |
| savingDeducted | Trừ tiết kiệm | Money | |
| capitalPlan | KH vốn | Money | SCTX / widen — **không** đủ 1 cột PH1 |

### Dòng giao dịch (1 hàng = 1 lần TT)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| costGroup | Nhóm chi phí | `SearchInput` | kcht-cost-group | TT 1–8 SCĐK |
| content | Nội dung | `Text` | — | cây tạm ứng / giai đoạn / quý |
| contractValue | Giá trị HĐ | `Money` | — | SCTX cột thêm |
| paymentValue | Giá trị TT | `Money` | — | |
| disbursedValue | Đã giải ngân | `Money` | — | |
| outstandingValue | Còn nợ | `Money` | — | computed hoặc nhập |
| partyCode | Đơn vị | `SearchInput` | partner-unit \| org-unit | NT · Khu 4 · Ban · Cục |
| partyKind | Loại ĐV | `SearchInput` | kcht-party-kind | contractor · khu · bql · cuc |
| voucherKind | Loại chứng từ | `SearchInput` | kcht-voucher-kind | giay-rut · pg · unc |
| voucherNo | Số Giấy rút / PG / UNC | `Text` | — | |
| voucherDate | Ngày | `Date` | — | UTC |
| attachments[] | Chứng từ KBNN | file | FileService | 6 loại công văn PH4 §5 |

**Cây SCĐK (lookup · `useFormOptions()`):** TVTK (KS BCKTKT / TK BVTC) · HSMT · Xây lắp (TU / giai đoạn / trừ TU / TT / HT / thầu chính·phụ) · GS · QLDA (20% Khu · 80% Ban) · lệ phí Cục · kiểm toán · thẩm tra QT · Cộng · vốn dư.

**SCTX:** Lập HSMT · Lập giá SPDV · tạm ứng đợt · TT % quý · trừ TU theo **từng** NT liên danh.

## Lookup / enum (handoff SA)

| catalogKind | Source | Notes |
|-------------|--------|-------|
| kcht-project-type | live PH1 | giữ |
| kcht-project-status | live PH1 | giữ |
| kcht-segment-status | công văn PH2 | 6 giá trị |
| kcht-delay-cause | công văn PH3 | mặt bằng · thời tiết · NT · VL · TK · ĐC DA · ĐC KT · giải ngân · thủ tục · khác |
| kcht-rag | công văn PH3 | xanh · vàng · đỏ |
| kcht-cost-group | SRC-KCT-GN03 | 8 nhóm SCĐK |
| kcht-voucher-kind | công văn PH4 | giay-rut · pg · unc |
| kcht-party-kind | đề xuất | contractor · khu · bql · cuc |
| road-route · org-unit · partner-unit | Integration live | READY |
| province | **UNCLEAR** | FormsService P1 |
| users | P2 | owner picker |

## Routes đề xuất (SA/TL · **chưa live** = GAP)

| UI | Path |
|----|------|
| List / form CT | `/kcht-cong-trinh` · `/tao-moi` · `/:id` **giữ** |
| Đoạn + BH | `/kcht-cong-trinh/:id/doan-tuyen` |
| Tiến độ tuần | `/kcht-cong-trinh/:id/tien-do` |
| Sổ GN | `/kcht-cong-trinh/:id/giai-ngan` |
| API đoạn | `api/v1/kcht-ct/projects/{id}/segments` **GAP** |
| API tuần | `api/v1/kcht-ct/projects/{id}/weekly-progress` **GAP** |
| API KH vốn | `api/v1/kcht-ct/projects/{id}/capital-plans` **GAP** |
| API sổ | `api/v1/kcht-ct/projects/{id}/disbursements` **GAP** |

Schema CLI đề xuất: `Schema_KchtCongTrinhDisburse*` · Schema ≠ Seed.

## Handoff → PO

| Field | Value |
|-------|-------|
| feature / packKind | `kcht-cong-trinh` / `list` |
| phase_from / phase_to | data_analy → po |
| STATUS | data-analy **done** · chain `roleOnly=po` (orchestrator) |
| Context / Demo / DI | CTX + wave SSOT + SRC-KCT-GN03 · **no demo** · DI none |
| controlHint / UNCLEAR | this file · `provinceCode` · `ownerUserId` |
| real-data | `kcht-cong-trinh-real-data.md` |
| Screens | PH1 giữ + PH2 đoạn/BH + PH3 tuần + PH4 sổ SCĐK/SCTX · **cấm** PH5 đến sourceFormReady |
| Open questions | Entity đoạn = NEW vs widen `ContractRoute` · 2 route sổ vs 1 · DOMAIN-MAP slug |
| Next | PO: AC PH2–PH4 — **cấm** invent live API · **cấm** PH5 Kind E |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.08.21.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.21.01 |
| rulesVersion | 2026.08.25.4 |
| generatedAt | 2026-08-29T04:15:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:4652f6331035f6521fe50b83cf35ad19d594ca0b4de1fbb40a44f17d52a337dd |
| headerFingerprint | sha256:b42f332386243b15594ca97c71e26d37f16a62eb27badbe7df51aabbe4554167 |
| taskId | `task_399151e1` |

---
<!-- Version meta: skillId=agent-data-analy skillVersion=2026.08.21.01 schemaVersion=1 workflowVersion=2026.08.21.01 rulesVersion=2026.08.25.4 versionGate=rechecked contentHash=sha256:4652f6331035f6521fe50b83cf35ad19d594ca0b4de1fbb40a44f17d52a337dd headerFingerprint=sha256:b42f332386243b15594ca97c71e26d37f16a62eb27badbe7df51aabbe4554167 taskId=task_399151e1 -->
