# PO — Requirement — kcht-cong-trinh (Công trình KCHT · edit_page PH2–PH4)

| Field | Value |
|-------|-------|
| feature | `kcht-cong-trinh` |
| this role | `po` · `/agent-po` |
| changeScope | `edit_page` (PH2–PH4) · Wave 1 PH1 **giữ** |
| packKind | **`list`** (Kind **B** catalog — list CT + child đoạn/tuần/sổ) — PO confirm |
| Feature Kind | **B** catalog list + full-page / nested Kind B surfaces — **cấm** Slideout hồ sơ CT · **cấm** Kind D Resource |
| gap | `edit_page` · GAP-KCT-PH2-* · GAP-KCT-PH3-* · GAP-KCT-PH4-* · GAP-KCT-PH5-01 park |
| mode | `feature_context` · **no Excel raw** · **no GOVOne demo** · sourceKind=`synthetic` · form nguồn extract `SRC-KCT-GN03` |
| status | `done` |
| requestSource | run packet `task_5e779467` · `/agent-qldb-workflow` · roleOnly=`po` · `/agent-po` · autoApprove **ON** · wave PH2–PH4 |
| autoApprove | **ON** — Design/SA/Review khi tới lượt → agent tự confirm · enqueue role kế. Role PO **không** gate confirm. |
| e2eQa | **ON** — queued tới `/agent-qa*` · **cấm** e2e / `yarn start:std` / `yarn build` ở role PO |
| prior · data_analy | status=`confirmed`/`done` · `specs/_data-analy/features/kcht-cong-trinh-control-hint.md` · `kcht-cong-trinh-real-data.md` · contentHash `sha256:4652f6331035f6521fe50b83cf35ad19d594ca0b4de1fbb40a44f17d52a337dd` · headerFingerprint `sha256:b42f332386243b15594ca97c71e26d37f16a62eb27badbe7df51aabbe4554167` · **cấm** re-scan demo (**GAP-PO-DEMO-RESCAN-01**) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Contract` · `ui_repo_confirm` **locked** |
| mfeStdUrl | `http://localhost:9312/kcht-cong-trinh` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Contract** widen × **KchtProject** live × Disburse/Segment/Weekly **NEW GAP** · **cấm ERP.*** |
| domain | **Contract** (widen) × **KchtProject** live × PH2–PH4 NEW |
| sourceDoc | `D:/AI-QLBD/Linm.RMMS.Data/docs/tinh-nang/Cung-cap-thong-tin-phan-mem.md` |
| plan | `D:/AI-QLBD/Linm.RMMS.Data/docs/plan/kcht-cong-trinh/PLAN.md` |
| waveSsot | `D:/AI-QLBD/Linm.RMMS.Data/docs/data/analyzed/kcht-wave-ph2-ph4.md` |
| formNguon | `D:/AI-QLBD/Linm.RMMS.Data/docs/data/analyzed/kcht-giai-ngan-03-sheet.md` (`SRC-KCT-GN03`) — **cấm** Read xlsx lại |
| updatedAt | `2026-08-29T04:20:00.000Z` |
| taskId | `task_5e779467` · analy `task_399151e1` · Wave 1 PO `task_3b4ed0d9` **giữ** |

## 1. Goal

Chốt yêu cầu **wave PH2–PH4** (`edit_page`) trên feature **Công trình KCHT** đã ship Wave 1: giữ Kind **B** list + form full-page **4 tab** PH1; bổ sung **đoạn tuyến + bảo hành** (PH2), **tiến độ tuần + RAG** (PH3), **sổ giải ngân SCĐK/SCTX + chứng từ KBNN + đối chiếu 3 cột** (PH4).

**packKind confirm:** `list` (data-analy đề xuất · PO chốt). **Không** enqueue `packKind=report` / Kind E PH5 — `sourceFormReady=no` (**GAP-KCT-PH5-01**).

**Delta pack (SSOT lock):** child `KchtRouteSegment` · `KchtWeeklyProgress` · `KchtCapitalPlan` · `KchtDisbursement` (+ optional FK Payment) · nested routes đề xuất · API nested **GAP** đến SA `Schema_KchtCongTrinhDisburse*` · **cấm** invent path live as DONE · **cấm ERP.*** · **cấm** `api/v1/rmms/*`.

**≠** reset CRUD PH1 · ≠ `asset` TS · ≠ `maintenance` WO · ≠ dashboard KPI login (PH5 park).

Persona: Lãnh đạo Khu · Phòng QLBT / QL-TCGT / KHTC · VP IV.1–IV.4 · Ban QLDA miền Nam · Cục ĐBVN (xem) · Cán bộ CĐS (admin).

## 2. Current → New (`edit_page` · REQUIRED)

Nguồn SSOT: control-hint + real-data `2026-08-29T04:15:00.000Z` · wave SSOT · SRC-KCT-GN03 · **không** re-crawl demo/CTX.

| Layer | Current (live Wave 1 · 2026-08-29) | New (delta PO chốt · copy analy) |
|-------|-------------------------------------|----------------------------------|
| Entity BE | `KchtProject` + Decision + Contract junction + Attachment · `rmms_kcht_projects` | **giữ** + `KchtRouteSegment` · `KchtWeeklyProgress` · `KchtCapitalPlan` · `KchtDisbursement` **GAP** |
| MFE route | `/kcht-cong-trinh` · `/tao-moi` · `/:id` · form 4 tab | + `/:id/doan-tuyen` · `/:id/tien-do` · `/:id/giai-ngan` **GAP** (SA/TL confirm) |
| Đoạn / BH | `routeSegmentSummary` Text Tab Chung · Contract warranty mỏng | Child đoạn LRS + 6 TT · badge 90/60/30 · supersede summary text (**GAP-KCT-PH2-01/02**) |
| Tiến độ tuần | **none** | Kind B list tuần + form · header readonly auto · RAG · 3 nhóm cảnh báo (**GAP-KCT-PH3-01/02**) |
| KH vốn | `capitalPlanAmount` 1 số | `KchtCapitalPlan` theo năm (**GAP-KCT-PH4-01**) |
| Thanh toán / sổ | `ContractPayment` Period/Amount/PaidAt mỏng | `KchtDisbursement` 1 TT = 1 GD · voucher · party · FileService KBNN · 2 layout SCĐK/SCTX (**GAP-KCT-PH4-02/03/04**) |
| Đối chiếu KBNN | — | Grid 3 cột PM × KBNN × chênh · nhập/Excel P1 · **cấm** giả API KBNN (**GAP-KCT-PH4-05**) |
| File | Tab hồ sơ stub storageKey (P1 accept) | Bind chứng từ **dòng GD** (6 loại công văn) — harden (**GAP-KCT-PH4-04**) |
| API prefix | **live** `api/v1/kcht-ct/projects` | Nested segments/weekly/capital-plans/disbursements = **GAP** — SA scaffold |
| PH5 BC | — | **PARK** `sourceFormReady=no` |
| Demo | N/A synthetic | **cấm** demo-json / GOVOne chrome · **cấm** re-scan |

**Không đổi (PH1 giữ):** Kind B list A–D+F · full-page 4 tab `general|decisions|contracts|files` · catalog `kcht-projects` · Integration lookups · leave-guard · toast not alert · IdCode `CT-yyyyMMdd-nnnn` · handoff `/hd-ns/:id?from=kcht&projectId=` · `ui_repo_confirm` / `be_repo_confirm` locked · mfeStd `:9312`.

### GAP IDs (PO bắt buộc Design/Dev đóng P1 trừ PARK/DEFER)

| ID | New |
|----|-----|
| GAP-KCT-PH2-01 | Child đoạn tuyến + BH · thay `routeSegmentSummary` text-only |
| GAP-KCT-PH2-02 | BH gắn đoạn (start/end/months) · job badge 90/60/30 |
| GAP-KCT-PH2-03 | MFE route `/:id/doan-tuyen` · **cấm** Slideout hồ sơ CT |
| GAP-KCT-PH3-01 | `KchtWeeklyProgress` · 1 dòng/CT/tuần · header auto · RAG · alerts |
| GAP-KCT-PH3-02 | Job «chưa cập nhật tuần này» |
| GAP-KCT-PH4-01 | `KchtCapitalPlan` (năm · đầu năm · bổ sung · ± · tiết kiệm · cuối) |
| GAP-KCT-PH4-02 | `KchtDisbursement` 1 TT = 1 GD · voucher · party |
| GAP-KCT-PH4-03 | 2 layout Kind B sổ **SCĐK** + **SCTX** (cây + quý + liên danh) |
| GAP-KCT-PH4-04 | FileService bind chứng từ dòng GD (không stub-only) |
| GAP-KCT-PH4-05 | Lưới đối chiếu PM × KBNN × chênh (nhập/Excel) |
| GAP-KCT-PH5-01 | PHỤ LỤC 03 · **PARK** đến PH4 done + `sourceFormReady=yes` |
| GAP-KCT-DM-01 | DOMAIN-MAP thiếu slug `kcht-ct` — SA/TL bổ sung (debt) |
| GAP-KCT-SEG-ENT-01 | Entity đoạn = **NEW `KchtRouteSegment`** (PO default) · SA có thể widen `ContractRoute` nếu cite rõ |
| GAP-PO-SO-ROUTE-01 | 1 URL `/giai-ngan` · layout SCĐK\|SCTX theo `projectType` (PO chốt) · SA/TL có thể tách 2 route nếu cần |

## 3. DoD (đo được · wave PH2–PH4)

### PH1 giữ (regression — không regress)

1. List Kind B A–D+F `/kcht-cong-trinh` · empty «Chưa có công trình» · **cấm** fake row · **cấm** Thêm mới trên Zone A.
2. Form full-page 4 tab index **0 Chung · 1 QĐ · 2 HĐ · 3 File** — **cấm** reorder (**GAP-TAB-01**).
3. API live `GET/POST/PUT/DELETE …/kcht-ct/projects` (+ contracts/attachments) PASS.

### PH2 — đoạn tuyến / bảo hành

4. Surface Kind B child tại `/kcht-cong-trinh/:id/doan-tuyen` (đề xuất) — list đoạn + form full-page/nested — **cấm** Slideout hồ sơ CT.
5. CRUD đoạn: roadRouteCode · provinceCode · kmFrom/kmTo · lengthM · workItem · contractId · contractorCode · dates · warranty* · status (6 giá trị).
6. Badge `warrantyAlert` 90 / 60 / 30 ngày (derived + job) hiển thị trên list đoạn và (tuỳ Design) chip trên CT.
7. Tab Chung: `routeSegmentSummary` **readonly derived** từ child đoạn **hoặc** ẩn khi có ≥1 đoạn — **cấm** nhập song song lệch SSOT.
8. Empty đoạn: empty + CTA «Thêm đoạn» — **cấm** fake row.
9. Lookup đoạn: `road-route` · `partner-unit` · child contracts PH1 · `kcht-segment-status` via `useFormOptions()` — **cấm** hardcode label VN.

### PH3 — tiến độ tuần

10. Surface Kind B `/kcht-cong-trinh/:id/tien-do` — list tuần + form.
11. Header form **readonly auto** từ PH1–PH2 (mã/tên · QL · đoạn · tỉnh · TMĐT · Gtri HĐ · DT năm · NT · TVGS · Ban QLDA · ngày KC/HT/gia hạn) — **cấm** bắt user nhập lại.
12. Body user: weekOf · % KH/TT · prev/delta · valueCum/valueWeek · situation · nextWeekWork · issues · delayCause · solution · rag.
13. Unique 1 dòng / CT / tuần / tenant — duplicate week → toast validation.
14. Đèn RAG xanh/vàng/đỏ (rule công văn + user) · chips alerts[] 3 nhóm (tiến độ · GN · BH/HĐ).
15. Job «chưa cập nhật tuần này» tạo/ghi alert — empty list + CTA «Cập nhật tuần».
16. Toast 4xx/5xx — **cấm** `window.alert`.

### PH4 — sổ giải ngân + đối chiếu

17. Surface Kind B `/kcht-cong-trinh/:id/giai-ngan` — layout **SCĐK** khi `projectType` SCĐK/vốn định kỳ · layout **SCTX** khi BDTX/SCTX (PO **GAP-PO-SO-ROUTE-01**).
18. Header sổ: project readonly · TMĐT · yearEstimate · yearEstimateFinal · savingDeducted · capitalPlan (từ `KchtCapitalPlan` — **không** đủ 1 cột PH1).
19. Dòng GD: 1 hàng = 1 lần TT · costGroup · content · contractValue (SCTX) · paymentValue · disbursedValue · outstandingValue · partyCode/Kind · voucherKind/No/Date · attachments[].
20. Cây SCĐK / dòng SCTX = lookup `useFormOptions()` — **cấm** hardcode label VN.
21. Upload chứng từ KBNN trên **dòng GD** qua FileService — **cấm** chỉ stub storageKey · **cấm** byte trên DB nghiệp vụ.
22. Đối chiếu P1: grid 3 cột PM × KBNN × chênh — nhập tay / Excel import — **cấm** giả API KBNN.
23. Empty sổ + CTA «Thêm giao dịch».
24. Schema CLI đề xuất `Schema_KchtCongTrinhDisburse*` · Schema ≠ Seed — SA.

### Cross-cutting

25. Typography: label **13** · input D14/M16 (**GAP-TYP-01**).
26. Leave-confirm dirty trên mọi form đoạn/tuần/sổ · toast not alert.
27. `yarn build` / e2e / `start:std` **chỉ** Dev/QA — PO **cấm**.
28. PH5 Kind E / PHỤ LỤC 03 — **cấm** enqueue đến `sourceFormReady=yes`.

## 4. CTX / DEM / DI inventory (hash skip — đọc analy · **không** re-crawl)

| ID | Path | Loại |
|----|------|------|
| CTX-01 | `docs/context/features/kcht-cong-trinh.md` | feature · wave PH2–PH4 |
| CTX-02 | `docs/tinh-nang/Cung-cap-thong-tin-phan-mem.md` | công văn PH2–PH4 |
| WAVE-01 | `docs/data/analyzed/kcht-wave-ph2-ph4.md` | wave SSOT · headerFingerprint |
| FORM-01 | `docs/data/analyzed/kcht-giai-ngan-03-sheet.md` | SRC-KCT-GN03 · **cấm** xlsx |
| PLAN-01 | `docs/plan/kcht-cong-trinh/PLAN.md` | Wave 2–4 · D1–D8 |
| DEM-01 | — | **N/A** — sourceKind=synthetic · **cấm** GOVOne chrome |
| DI-01 | — | **no Excel raw** · dùng extract md |
| DA-01 | `specs/_data-analy/features/kcht-cong-trinh-control-hint.md` | controlHint · **done** |
| DA-02 | `specs/_data-analy/features/kcht-cong-trinh-real-data.md` | real-data §A–§F |
| MFE live list | `…/KchtProjectListPage.tsx` | Kind B PH1 |
| MFE live form | `…/KchtProjectFormPage.tsx` | 4 tab PH1 · **chưa** PH2–PH4 |
| MFE endpoint | `src/services/kchtProject/endpoint.ts` | `BASE=/kcht-ct/projects` |
| BE live | `KchtProjectsController.cs` · `KchtProjectEntity.cs` | prefix live |
| BE payment mỏng | `ContractPaymentEntity.cs` | **không** đủ PH4 |
| Integration | road-routes · org-units · partner-units search | READY |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | **GAP** slug row |

Normalized header (analy): `code|name|projectType|continuityKind|planYear|roadRouteCode|provinceCode|routeSegmentSummary|lengthM|capitalSourceKind|capitalPlanAmount|orgUnitCode|ownerUserId|bqlOrgUnitCode|contractorCode|status|segments.status|segments.warrantyEnd|weekOf|planPctToWeek|actualPctToWeek|rag|yearEstimate|capitalPlan|costGroup|content|paymentValue|disbursedValue|outstandingValue|partyCode|voucherKind|voucherNo|voucherDate|search`

## 5. controlHint (PO chốt · copy data-analy — Design map UI · SA map API)

`controlHint=UNCLEAR`: `provinceCode` master P1 (FormsService) · `ownerUserId` picker P2 — **không** invent list · SA chốt.

### PH1 list filters + form tabs — **giữ** (không reorder tab)

Giữ nguyên Wave 1: SearchTextInput + SearchInput filters · Tab 0–3 `general|decisions|contracts|files`. Chi tiết field PH1 = artifact Wave 1 + DA-01 § PH1 — **không** regress.

### PH2 đoạn tuyến / bảo hành (**NEW**)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| segments[].roadRouteCode | Quốc lộ | `SearchInput` | road-route | live Integration |
| segments[].provinceCode | Tỉnh | `SearchInput` | province | **UNCLEAR** P1 |
| segments[].kmFrom | Lý trình đầu | `Number` | — | LRS |
| segments[].kmTo | Lý trình cuối | `Number` | — | |
| segments[].lengthM | Chiều dài (m) | `Number` | — | |
| segments[].workItem | Hạng mục SC | `Text` | — | |
| segments[].assetRef | Cầu/cống | `SearchInput` / Text | asset | **tham chiếu** — không tạo TS |
| segments[].contractId | Hợp đồng | `SearchInput` | kcht-project-contracts | child PH1 live |
| segments[].contractorCode | Nhà thầu | `SearchInput` | partner-unit | live |
| segments[].startAt | Ngày KC | `Date` | — | UTC |
| segments[].finishAt | Ngày HT | `Date` | — | |
| segments[].acceptAt | Ngày NT | `Date` | — | |
| segments[].handoverAt | Ngày bàn giao | `Date` | — | |
| segments[].warrantyMonths | BH (tháng) | `Integer` | — | |
| segments[].warrantyStart | Bắt đầu BH | `Date` | — | |
| segments[].warrantyEnd | Hết BH | `Date` | — | |
| segments[].status | Trạng thái đoạn | `SearchInput` | kcht-segment-status | 6: chua-tc · dang-tc · ht · nt · dang-bh · het-bh |
| warrantyAlert | Cảnh báo BH | derived badge | — | 90 / 60 / 30 |

### PH3 tiến độ tuần (**NEW**)

**Header (readonly · auto):** projectCode · projectName · roadRouteCode · segmentLabel · provinceCode · totalInvestment · contractAmount · yearEstimate · contractor · supervisor · bqlOrgUnitCode · startAt · completionDate · completionAfterExtension.

**Body (user):**

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
| rag | Đèn RAG | `SearchInput` / derived | kcht-rag |
| alerts[] | Cảnh báo | derived chips | tiến độ · GN · BH |

### PH4 sổ giải ngân (**NEW** · SRC-KCT-GN03)

**Header sổ:**

| Field key | Label | controlHint | Notes |
|-----------|-------|-------------|-------|
| projectId | Công trình | SearchInput readonly | live `KchtProject` |
| projectName | Tên DA | Text readonly | |
| totalInvestment | TMĐT | Money readonly | last QĐ |
| yearEstimate | DT giao đầu năm | Money | |
| yearEstimateFinal | DT lần cuối | Money | |
| savingDeducted | Trừ tiết kiệm | Money | |
| capitalPlan | KH vốn | Money | từ `KchtCapitalPlan` |

**Dòng giao dịch:**

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| costGroup | Nhóm chi phí | `SearchInput` | kcht-cost-group | TT 1–8 SCĐK |
| content | Nội dung | `Text` | — | cây TU / giai đoạn / quý |
| contractValue | Giá trị HĐ | `Money` | — | SCTX cột thêm |
| paymentValue | Giá trị TT | `Money` | — | |
| disbursedValue | Đã giải ngân | `Money` | — | |
| outstandingValue | Còn nợ | `Money` | — | computed hoặc nhập |
| partyCode | Đơn vị | `SearchInput` | partner-unit \| org-unit | |
| partyKind | Loại ĐV | `SearchInput` | kcht-party-kind | contractor · khu · bql · cuc |
| voucherKind | Loại chứng từ | `SearchInput` | kcht-voucher-kind | giay-rut · pg · unc |
| voucherNo | Số chứng từ | `Text` | — | |
| voucherDate | Ngày | `Date` | — | UTC |
| attachments[] | Chứng từ KBNN | file | FileService | 6 loại công văn |

### Real-data bind (copy §B–§B4 analy — SA **giữ** cite · **cấm** invent DONE)

**PH1 live prefix:**

| Operation | Path |
|-----------|------|
| List/Detail/CRUD | `…/web-bff/api/v1/kcht-ct/projects` **live** |
| Contracts / Attachments | nested **live** |

**PH2–PH4 đề xuất (GAP đến SA):**

| Operation | Path đề xuất |
|-----------|--------------|
| Segments | `…/kcht-ct/projects/{id}/segments` **GAP** |
| Weekly | `…/kcht-ct/projects/{id}/weekly-progress` **GAP** |
| Capital plans | `…/kcht-ct/projects/{id}/capital-plans` **GAP** |
| Disbursements | `…/kcht-ct/projects/{id}/disbursements` **GAP** |

FE cite PH1: `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Contract/src/services/kchtProject/endpoint.ts`.

### Lookup / enum (handoff SA)

| catalogKind | Source | Notes |
|-------------|--------|-------|
| kcht-project-type · kcht-project-status | live PH1 | giữ |
| kcht-segment-status | công văn PH2 | 6 giá trị **NEW** |
| kcht-delay-cause | công văn PH3 | mặt bằng · thời tiết · NT · VL · TK · ĐC DA · ĐC KT · giải ngân · thủ tục · khác |
| kcht-rag | công văn PH3 | xanh · vàng · đỏ |
| kcht-cost-group | SRC-KCT-GN03 | 8 nhóm SCĐK |
| kcht-voucher-kind | công văn PH4 | giay-rut · pg · unc |
| kcht-party-kind | đề xuất | contractor · khu · bql · cuc |
| road-route · org-unit · partner-unit | Integration live | READY |
| province | **UNCLEAR** | FormsService P1 |
| users | P2 | owner picker |

## 6. Grid AC (REQUIRED · list packKind)

Áp dụng mọi surface Kind B list trong pack (list CT PH1 giữ + list đoạn + list tuần + sổ dòng GD).

| ID | AC |
|----|-----|
| AC-G-01 | Zones **A Header · B Toolbar · C Grid · D Pagination** (+ Zone F config khi có cột schema) |
| AC-G-02 | Filter bar = **`LinErpListFilterBar`** **1 hàng wrap** · input cụm **phải** (`filter-bar-layout-hard`) — filter đổi → page=1 |
| AC-G-03 | Row menu Xem / Sửa / Xóa / Lịch sử (theo surface) |
| AC-G-04 | `LinCatalogDataGrid` + kéo cột default ON · schema-driven columns |
| AC-G-05 | Footer `LinCatalogListPagination` pageSize **50 / 100 / 200 / 500** (list CT; child list có thể cùng rule) |
| AC-G-06 | 1× `LinPageLayout` / surface — **cấm** nested CatalogListShell |
| AC-G-07 | Flex + skeleton — **cấm** blank body |
| AC-G-08 | Zone F `LinCatalogUiSchemaEditorModal` khi có cột list — **cấm** `configHint` / `LinListTableConfigModal` cột |
| AC-G-09 | Empty state đúng copy surface — **cấm** fake row |
| AC-G-10 | Toast 4xx/5xx — **cấm** `window.alert` |
| AC-G-11 | List CT PH1: **cấm** Thêm mới trên Zone A · Tạo mới primary Zone B |
| AC-G-12 | Sổ SCĐK/SCTX: cây/nhóm chi phí = SearchInput lookup — **cấm** plain Text thay master |

### Report AC

**N/A** — packKind `list` · PH5 Kind E **PARK** (`sourceFormReady=no`) — **GAP-PO-RPT-01** / **GAP-KCT-PH5-01**. Đối chiếu KBNN = **grid 3 cột** trên surface sổ (không phải Kind E report pack).

## 7. Screens (REQUIRED)

| Surface | Pattern | FormMode | URL | Tab / notes | Actions | devSlash |
|---------|---------|----------|-----|-------------|---------|----------|
| S-LIST | Kind B A–D+F | filter | `/kcht-cong-trinh` | PH1 **giữ** | search · filter · Tạo mới · Refresh · Delete · config · History | `/agent-dev` |
| S-FORM-CT | Full page 4 tab | create/edit/view | `/kcht-cong-trinh/tao-moi` · `/:id` | 0–3 **cấm** reorder | Lưu · Hủy · leave · View `<dl>` | `/agent-dev` |
| S-HD-HANDOFF | Full page (Contract) | view | `/hd-ns/:contractId?from=kcht&projectId=` | PH1 **giữ** | ↗ từ tab HĐ | `/agent-dev` |
| S-SEG-LIST | Kind B child | filter | `/kcht-cong-trinh/:id/doan-tuyen` | PH2 **NEW** | CRUD đoạn · badge BH | `/agent-dev` |
| S-SEG-FORM | Full page / nested | create/edit/view | cùng hoặc `…/doan-tuyen/:segId` | SA/TL chốt | Lưu · Hủy · leave | `/agent-dev` |
| S-WEEK-LIST | Kind B | filter | `/kcht-cong-trinh/:id/tien-do` | PH3 **NEW** | list tuần · RAG chips | `/agent-dev` |
| S-WEEK-FORM | Full page | create/edit/view | `…/tien-do` (+ id) | header readonly · body user | Lưu · Hủy · leave | `/agent-dev` |
| S-DISB-BOOK | Kind B sổ | filter/edit | `/kcht-cong-trinh/:id/giai-ngan` | SCĐK\|SCTX by `projectType` | CRUD dòng · attach · đối chiếu | `/agent-dev` |
| S-KBN-COMPARE | Grid 3 cột | edit | vùng trên S-DISB-BOOK hoặc tab | P1 nhập/Excel | import · save | `/agent-dev` |
| S-SKIP-PH5 | — | — | Kind E BC | **Cấm** enqueue | — | — |

**Cấm** Slideout form hồ sơ CT · **cấm** GOVOne chrome · **cấm** map canvas (đoạn = LRS fields only · `map: none`).

## 8. Leave / alert (REQUIRED)

| Case | Control | Cấm |
|------|---------|-----|
| Form dirty đoạn / tuần / sổ / CT · navigate away | `LeaveConfirmModal` + leave guard | `window.confirm` / native dialog |
| API 4xx validation | `useAppToast` / `dispatchAppToast` business message | `window.alert` |
| API 5xx | toast error | silent empty |
| detail / child 404 | toast · về list CT hoặc parent surface | silent fail |
| Delete đoạn / tuần / dòng GD / file | confirm modal (`useAlert` / Modal) | native `confirm` |
| Lookup no match | SearchInput empty | free text substitute master |
| Upload fail FileService | toast error | silent fail |
| Duplicate weekOf | toast validation | silent overwrite |

## 9. Open questions — PO chốt (autopilot)

| ID | Question | Decision (PO) |
|----|----------|----------------|
| GAP-KCT-SEG-ENT-01 | NEW segment vs widen `ContractRoute`? | **NEW `KchtRouteSegment`** default · SA refine nếu cite widen rõ |
| GAP-PO-SO-ROUTE-01 | 2 URL sổ vs 1? | **1 URL** `/giai-ngan` · layout theo `projectType` · SA/TL có thể tách |
| GAP-PO-PROVINCE-01 | `provinceCode` master | **UNCLEAR** — SA/FormsService P1 · không invent |
| GAP-PO-OWNER-01 | `ownerUserId` | **P2** optional · không block PH2–PH4 |
| GAP-PO-SLIDEOUT-01 | Slideout hồ sơ CT? | **Cấm** — full-page / Kind B nested only |
| GAP-PO-KBNN-01 | API KBNN? | **Cấm** P1 — nhập/Excel đối chiếu tay |
| GAP-PO-BC-01 | PH5 trước form nguồn? | **Cấm** — `sourceFormReady=no` |
| GAP-PO-DEMO-01 | Re-scan demo? | **Cấm** — hash skip · đọc DA only |
| GAP-PO-ERP-01 | ERP.* | **Cấm** — BE `Linm.RMMS.WebService` |
| GAP-KCT-DM-01 | DOMAIN-MAP slug | SA/TL bổ sung row `kcht-ct` (debt P1) |
| GAP-PO-PK-01 | packKind | **`list`** — không report pack wave này |
| Wave 1 | PH1 CRUD | **Giữ** — không reset artifacts confirmed |

## 10. Out of scope (this pack · PH2–PH4)

- PH5 PHỤ LỤC 03 / 4 loại BC / dashboard 10 KPI login / RBAC 111 user seed
- Invent nested API as live DONE · `api/v1/rmms/*` · ERP.*
- Re-scan demo HTML / crawl DemoRoot / Read lại xlsx SRC-KCT-GN03
- Slideout form hồ sơ CT · hardcode label VN
- Giả API KBNN · map canvas Kind F
- Reset / regress Wave 1 list+form 4 tab
- `yarn build` / e2e / `start:std` ở role PO
- Start role Design/SA/Dev trong cùng task (**GAP-PKT-ROLE-01**)

## 11. Handoff → Design (`/agent-design`)

| Field | Value |
|-------|-------|
| feature / packKind | `kcht-cong-trinh` / **`list`** Kind B |
| changeScope | `edit_page` PH2–PH4 |
| phase_from / phase_to | po **confirmed** → design **pending** |
| STATUS | `specs/kcht-cong-trinh/STATUS.md` |
| Context / DA | CTX-01 · WAVE-01 · FORM-01 · DA-01 · DA-02 · no Excel raw · no demo |
| controlHint | §5 — **cấm** đoán Text vs SearchInput ngoài bảng |
| Kind / zones | A–D+F list · Kind B đoạn/tuần/sổ · full-page CT 4 tab giữ |
| Screens | §7 · Grid AC §6 · Leave §8 |
| Prototype | content-only · đoạn + tuần + sổ SCĐK/SCTX · **skip** GOVOne chrome |
| reviewUrl | bắt buộc · `autoApprove=ON` → agent tự confirm Design |
| peerStdUrl / mfeStdUrl | `http://localhost:9312/kcht-cong-trinh` |
| BE | live `api/v1/kcht-ct/projects` · nested **GAP** — **cấm** invent DONE |
| cite MFE | `KchtProjectListPage` · `KchtProjectFormPage` · endpoint `kchtProject` |
| Next slash | `/agent-design` |
| Next roles | design → sa → team-lead → dev → qa → review = **pending** đến lượt · chain ON |
| e2e | queued `/agent-qa*` only |
| Wave 1 | design/sa/review **confirmed** PH1 — PH2–PH4 **re-Approve** khi tới gate |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po |
| skillVersion | 2026.08.21.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.21.01 |
| rulesVersion | 2026.08.25.4 |
| generatedAt | 2026-08-29T04:20:00.000Z |
| versionGate | rechecked |
| contentHashPriorDataAnaly | sha256:4652f6331035f6521fe50b83cf35ad19d594ca0b4de1fbb40a44f17d52a337dd |
| headerFingerprintPrior | sha256:b42f332386243b15594ca97c71e26d37f16a62eb27badbe7df51aabbe4554167 |
| orchestratorSkillVersion | 2026.08.21.01 |
| taskId | `task_5e779467` |

---
<!-- Version meta: skillId=agent-po skillVersion=2026.08.21.01 schemaVersion=1 workflowVersion=2026.08.21.01 rulesVersion=2026.08.25.4 versionGate=rechecked contentHashPriorDataAnaly=sha256:4652f6331035f6521fe50b83cf35ad19d594ca0b4de1fbb40a44f17d52a337dd headerFingerprintPrior=sha256:b42f332386243b15594ca97c71e26d37f16a62eb27badbe7df51aabbe4554167 taskId=task_5e779467 -->
