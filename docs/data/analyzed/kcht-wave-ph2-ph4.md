# Wave PH2–PH4 — kcht-cong-trinh (edit_page · 2026-08-29)

> **Enqueued:** `task_399151e1` · `roleOnly=data_analy` · `changeScope=edit_page` · `packKind=list` · slug **`kcht-cong-trinh`** · MFE Contract `:9312`  
> **Cấm** 5 feature queue song song (PLAN D1). **Cấm** enqueue `packKind=report` PH5 trước PH4.  
> **Form nguồn PH4:** [kcht-giai-ngan-03-sheet.md](kcht-giai-ngan-03-sheet.md) (`SRC-KCT-GN03`) — **cấm** đọc lại xlsx.  
> **Công văn PH2–PH3:** [Cung-cap-thong-tin-phan-mem.md](../../tinh-nang/Cung-cap-thong-tin-phan-mem.md)  
> **Current live:** `api/v1/kcht-ct/projects` · entity `rmms_kcht_projects` · MFE `/kcht-cong-trinh` :9312  
> **Cấm invent** path live mới — mọi API PH2–PH4 = **GAP** đến SA `Schema_KchtCongTrinhDisburse*`.

## Current vs New

| ID | Current (Wave 1 done) | New (wave này) |
|----|----------------------|----------------|
| PH1 | List + form 4 tab · `KchtProject` + QĐ + link HĐ + attach stub | **Giữ** — không reset CRUD PH1 |
| PH2 | `routeSegmentSummary` text | Child **đoạn tuyến + BH** 6 trạng thái · badge 90/60/30 |
| PH3 | — | **Tiến độ tuần** + RAG + cảnh báo 3 nhóm |
| PH4 | `capitalPlanAmount` 1 số · `ContractPayment` (Period/Amount) mỏng | **Sổ chi tiết DA** (SCĐK + SCTX) · 1 lần TT = 1 GD · Giấy rút/UNC · upload KBNN |
| PH5 | — | PHỤ LỤC 03 · **`sourceFormReady=no`** đến PH4 STATUS done |

## PH2 — đoạn tuyến + bảo hành

| Field | controlHint | catalogKind | Cite |
|-------|-------------|-------------|------|
| segments[].roadRouteCode | SearchInput | road-route | live Integration |
| segments[].provinceCode | SearchInput | province | UNCLEAR P1 |
| segments[].kmFrom / kmTo | Number | — | LRS |
| segments[].lengthM | Number | — | |
| segments[].workItem | Text | — | hạng mục SC |
| segments[].contractId | SearchInput | kcht-project-contracts | child HĐ PH1 |
| segments[].contractorCode | SearchInput | partner-unit | live |
| segments[].startAt / finishAt / acceptAt / handoverAt | Date | — | UTC |
| segments[].warrantyMonths | Integer | — | |
| segments[].warrantyStart / warrantyEnd | Date | — | |
| segments[].status | SearchInput | kcht-segment-status | 6: chưa TC · đang TC · HT · NT · đang BH · hết BH |
| warrantyAlert | derived badge | — | job 90/60/30 |

**Entity đề xuất:** `KchtRouteSegment` NEW **hoặc** widen `ContractRoute` — SA. Map cầu/cống → `asset` **tham chiếu**, không tạo TS.

## PH3 — tiến độ tuần

Header **auto** từ PH1–PH2 (không nhập lại): mã/tên CT · QL · đoạn · tỉnh · TMĐT · Gtri HĐ · DT chi năm · NT · TVGS · Ban QLDA · ngày KC/HT/gia hạn.

| Field user | controlHint | Notes |
|------------|-------------|-------|
| weekOf | Date / week | 1 dòng / CT / tuần |
| planPctToWeek · actualPctToWeek · prevWeekPct · weekDeltaPct | Number % | |
| valueCum · valueWeek | Money | |
| situation · nextWeekWork · issues · solution | Text | |
| delayCause | SearchInput | enum công văn: mặt bằng · thời tiết · NT · VL · TK · ĐC DA · ĐC KT · giải ngân · thủ tục · khác |
| rag | SearchInput / derived | xanh / vàng / đỏ — rule công văn |
| alerts[] | derived | chậm · chưa cập nhật tuần · sắp hết HĐ · quá HT · đang xin GH · GN thấp/cao · BH 30/60 |

**Entity đề xuất:** `KchtWeeklyProgress` NEW. Job «chưa cập nhật tuần này».

## PH4 — sổ giải ngân (form nguồn SRC-KCT-GN03)

Hai **màn Kind B** (cùng feature, 2 route SA/TL):

| Màn | Sheet | Khi |
|-----|-------|-----|
| Sổ SCĐK | `Vốn SCĐK` | `projectType` SCĐK / vốn định kỳ |
| Sổ SCTX | `Vốn SCTX` | BDTX / SCTX · thanh toán quý · liên danh |

### Header sổ (1 DA)

| Field | controlHint | Map PH1 / mới |
|-------|-------------|----------------|
| projectId | SearchInput readonly | `KchtProject` live |
| projectName | Text readonly | `Name` |
| totalInvestment | Money readonly | last QĐ `totalInvestment` |
| yearEstimate · yearEstimateFinal | Money | DT giao đầu năm · DT lần cuối |
| savingDeducted | Money | Trừ tiết kiệm |
| capitalPlan | Money | SCTX: KH vốn (sheet 2) — widen `capitalPlanAmount` **không đủ** (cần dòng năm) |

**Entity đề xuất:** `KchtCapitalPlan` (năm · đầu năm · bổ sung · ± · tiết kiệm · cuối cùng).

### Dòng giao dịch (1 hàng = 1 lần TT)

| Field | controlHint | Sheet col | GAP |
|-------|-------------|-----------|-----|
| costGroup | SearchInput | TT 1–8 SCĐK | enum: TVTK · HSMT · XL · GS · QLDA · lệ phí · KT · thẩm tra QT |
| content | Text | Nội dung / cây `- Tạm ứng`… | |
| contractValue | Money | SCTX cột Giá trị HĐ | optional SCĐK |
| paymentValue | Money | Giá trị thanh toán | |
| disbursedValue | Money | Đã giải ngân TT | |
| outstandingValue | Money | Còn nợ | computed hoặc nhập |
| partyCode | SearchInput | Đơn vị | partner-unit **hoặc** org-unit (`Khu 4` · Cục) |
| partyKind | SearchInput | — | contractor · khu · bql · cuc |
| voucherKind | SearchInput | — | giay-rut · pg · unc |
| voucherNo | Text | Số Giấy rút / PG, UNC | |
| voucherDate | Date | ngày | UTC |
| attachments[] | file | ghi chú KBNN | FileService — 6 loại công văn PH4 §5 |

**Cây SCĐK (lookup lines, không hardcode label VN — `useFormOptions()`):** Tư vấn TK (KS BCKTKT / TK BVTC) · HSMT · Xây lắp (tạm ứng / giai đoạn n / trừ TU / TT / HT / thầu chính·phụ) · GS · QLDA (trích 20% Khu · TV 80% Ban QLDA) · lệ phí Cục · kiểm toán · thẩm tra QT · Cộng · vốn dư.

**SCTX:** KH vốn · Lập HSMT · Lập giá SPDV · tạm ứng đợt · TT % quý · trừ TU theo **từng** nhà thầu liên danh.

**Entity đề xuất:** `KchtDisbursement` NEW + optional FK `ContractPayment` (Period/Amount **không** đủ voucher/KBNN). Schema CLI `Schema_KchtCongTrinhDisburse`.

**Đối chiếu P1:** lưới 3 cột PM × KBNN × chênh — nhập/Excel. **Cấm** giả API KBNN.

## PH5 — park (không enqueue)

| | |
|--|--|
| sourceFeature | `kcht-cong-trinh` (sổ PH4) |
| sourceTables | **GAP** `rmms_kcht_disbursements` · `rmms_kcht_capital_plans` — chưa có |
| sourceFormReady | **no** |
| Report | PHỤ LỤC 03 · Kind E · cột 1–20 extract · đơn vị **nghìn đồng** |

Khi PH4 STATUS `done` → enqueue `packKind=report` **hoặc** màn PH5 trong cùng slug (TL chốt).

## Routes đề xuất (SA/TL · chưa live)

| UI | Path đề xuất |
|----|----------------|
| List CT | `/kcht-cong-trinh` **giữ** |
| Sổ GN | `/kcht-cong-trinh/:id/giai-ngan` |
| Đoạn + BH | `/kcht-cong-trinh/:id/doan-tuyen` |
| Tiến độ tuần | `/kcht-cong-trinh/:id/tien-do` |
| API sổ | `api/v1/kcht-ct/projects/{id}/disbursements` **GAP** |
| API KH vốn | `api/v1/kcht-ct/projects/{id}/capital-plans` **GAP** |
| API đoạn | `api/v1/kcht-ct/projects/{id}/segments` **GAP** |
| API tuần | `api/v1/kcht-ct/projects/{id}/weekly-progress` **GAP** |

## DoD queue (data-analy → PO)

- [x] Delta PH2–PH4 trên control-hint + real-data (`task_399151e1` · contentHash CTX `4652f633…`)  
- [x] PO AC sổ SCĐK + SCTX + child đoạn + form tuần (`task_5e779467` · `po/requirement.md`)  
- [x] Design Kind B sổ / đoạn / tuần — **cấm** Slideout hồ sơ CT (`task_92f4685f` · `ui/design.md` + prototype · design_confirm approve)  
- [x] SA entity + EF pair · **cấm ERP.*** (`task_210b1351` · `be/solution-discovery.md` · solution_confirm approve · Schema_KchtCongTrinhDisburse)  
- [ ] FileService bind dòng GD (không stub-only như Wave 1 accept)  
- [ ] PH5 không vào pack đến `sourceFormReady=yes`
