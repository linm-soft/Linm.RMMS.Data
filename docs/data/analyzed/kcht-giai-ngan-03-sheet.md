# Extract — Sổ chi tiết DA + biểu tổng hợp giải ngân (03 sheet)

> **ID:** SRC-KCT-GN03 · **Status:** analyzed · 2026-08-29  
> **Gốc:** `docs/Hồ sơ xin ý kiến chuẩn hóa sổ sách/Sổ chi tiết theo dõi từng dự án và biểu tổng hợp báo cáo giải ngân (03 sheet).xlsx` (135 537 bytes)  
> **Copy archive:** `data-import/_archive/` (cùng size — skip)  
> **Feature:** `kcht-cong-trinh` PH4 (sổ chi tiết) + PH5 BC3 (PHỤ LỤC 03)  
> **Công văn:** [`Cung-cap-thong-tin-phan-mem.md`](../../tinh-nang/Cung-cap-thong-tin-phan-mem.md) PH4–PH5  
> **Context:** [`kcht-cong-trinh.md`](../../context/features/kcht-cong-trinh.md)  
> **Cấm** `Read` lại xlsx trừ size đổi. **Cấm** coi đây là `csdl-so-sach` / `rpt-tong-hop-bao-tri`.  
> **Cấm** invent API runtime — prefix SA `api/v1/kcht-ct`.

## Meta workbook

| | |
|--|--|
| Sheets | `Vốn SCĐK` · `Vốn SCTX` · `Tổng hợp BC giải ngân từng DA` |
| Author path (xls) | `D:\Học hành 2023\Cung cấp số liệu viết phần mềm Giải ngân\` |
| Đơn vị mẫu | **Khu QLĐB IV** · Ban QLDA miền Nam · Cục ĐBVN |
| Đơn vị tính BC | Nghìn đồng (sheet 3) · đồng (sheet 1–2 số raw) |
| Văn bản kèm | `/KQLĐBIV-KHTC` năm 2026 (PHỤ LỤC 03) |

Khách gửi file này **làm số liệu mẫu viết phần mềm giải ngân** — form nguồn PH4/PH5, không phải dump import `gov-vn`.

---

## Kết luận (Khu 4 × report)

1. **Hai lớp UI:** sổ **chi tiết từng DA** (sheet 1–2, 1 DA = 1 block dòng) và **biểu tổng hợp** PHỤ LỤC 03 (sheet 3, 1 dòng = 1 CT/hạng mục, ~599 hàng).  
2. **Hai nguồn vốn / loại CT** trên sổ chi tiết: **SCĐK** (sửa chữa định kỳ, TMĐT + DT năm + tiết kiệm) vs **SCTX** (bảo dưỡng thường xuyên, KH vốn + thanh toán theo **quý** + **liên danh** nhiều nhà thầu).  
3. **1 lần thanh toán = 1 giao dịch** có: nội dung (cây chi phí) · giá trị TT · đã giải ngân · còn nợ · đơn vị/nhà thầu · **số Giấy rút / PG / UNC** · ngày. Khớp công văn PH4 §3.  
4. **Yêu cầu upload KBNN (ghi chú sheet 1):** mở cổng up file Giấy rút vốn tải từ **dịch vụ công Kho bạc** theo từng đợt — khớp PH4 §5–6. P1 = FileService upload; API KBNN = P2 (PLAN D6).  
5. **QLDA Khu 4 trên dòng sổ:** «Điều hành DA, QLDA» tách **Trích 20% → đơn vị `Khu 4`** và **TV QLDA 80% → Ban QLDA miền Nam**.  
6. **PHỤ LỤC 03** = BC kết quả thực hiện KH bảo trì năm (Bộ/Cục), **không** = hub `reports` P1 (tài sản/sự cố/check-in). Fail-closed: form nguồn PH1–4 trước Kind E.  
7. Wave 1 `kcht-cong-trinh` (list+hồ sơ CT) **chưa** cover PH4/PH5. Next: wave giải ngân + report PHỤ LỤC 03.

---

## Sheet 1 — `Vốn SCĐK` (sổ chi tiết)

**Dim:** A1:H128 · 2 dự án mẫu (block lặp). Merge title hàng.

### Header block (mỗi DA)

| Hàng | Nội dung |
|------|----------|
| Title | `SỐ CHI TẾT DỰ ÁN` |
| Tên | `1. Tên dự án: …` (QL + Km + tỉnh) |
| TMĐT | `Tổng mức đầu tư` / `TMĐT` |
| DT | `Dự toán 2024` · `DT giao đầu năm` · `Trừ tiết kiệm` · `Đã trừ tiết kiệm` · `DT đc lần cuối` |

### Cột dòng thanh toán

| Cột | Field đề xuất | Ghi chú |
|-----|---------------|---------|
| A | `lineNo` / nhóm | TT 1…8 hoặc trống (dòng con) |
| B | `content` | Cây: nhóm → `- Tạm ứng` · `- Giai đoạn n` · `- Trừ tạm ứng` · `- Thanh toán` · `- Hoàn thành` · `+ Thầu chính/phụ` |
| C | `paymentValue` | Giá trị thanh toán (đồng) |
| D | `disbursedValue` | Đã giải ngân TT |
| E | `outstandingValue` | Số kinh phí còn nợ |
| F | `partyName` | Đơn vị / nhà thầu / `Khu 4` / Cục |
| G | `voucherNo` | Số Giấy rút vốn **hoặc** PG, UNC |
| H | `voucherDate` | Ngày (dd/MM/yyyy; có ô `/6/2025`) |

### Cây chi phí chuẩn (mẫu DA 1 — QL.1 Cần Thơ)

| TT | Nhóm | Ví dụ party |
|----|------|-------------|
| 1 | Tư vấn thiết kế → Khảo sát BCKTKT / TK BVTC | Trung Nam · Tedi South · TV Đồng Tiến |
| 2 | Tư vấn lập HSMT | — |
| 3 | Xây lắp (Gtri HĐ) → tạm ứng / giai đoạn / trừ TU / TT / HT | Khánh Cường · Cty 134 · Hiệp Phát (thầu phụ) |
| 4 | Giám sát TC | — |
| 5 | Điều hành DA, QLDA → Trích 20% · TV QLDA 80% | **Khu 4** · Ban QLDA miền Nam |
| 6 | Lệ phí thẩm định dự án | Cơ quan Cục ĐBVN |
| 7 | Chi phí kiểm toán | — |
| 8 | Chi phí thẩm tra QT | Cơ quan Cục ĐBVN |
| — | Cộng · Kinh phí vốn còn dư | footer |

**Mẫu 2** (ghi chú hàng 38): gói thầu thi công **liên danh nhiều nhà thầu** — cùng cây, nhiều dòng party.

Số liệu mẫu (DA 1): DT đầu năm `16_217_500_000` · tạm ứng XL `14_919_420_425` / giải ngân TU `4_475_826_127` (Giấy 35, 04/02/2026).

---

## Sheet 2 — `Vốn SCTX` (sổ chi tiết)

**Dim:** A1:I54 · 1 DA mẫu: *Quản lý, SCTX hệ thống cầu Cần Thơ năm 2026*.

### Khác SCĐK

| | SCĐK | SCTX |
|--|------|------|
| Header tiền | TMĐT + DT năm + tiết kiệm | `Kế hoạch vốn` (ô mẫu `14_110_030_000`) |
| Cột thêm | — | **Giá trị HĐ** (cột C) trước giá trị TT |
| Nhịp TT | Giai đoạn 1…n + hoàn thành | **Quý** (Q4/25 · Q1–Q4) + tạm ứng đợt |
| Nhà thầu | 1 chính (+ phụ) | **Liên danh:** Cty cầu Cần Thơ · 68 Thăng Long · Đồng Thuận |
| Đầu kỳ | Tư vấn / XL / GS / QLDA | `Lập HSMT` (KT AC) · `Lập giá SPDV công` (TTKTĐB 4) |

Cột: TT · Nội dung · Giá trị HĐ · Giá trị thanh toán · Đã giải ngân TT · Còn nợ · Đơn vị · PG, UNC · ngày.

Pattern dòng: `Tạm ứng đợt 1` → `Thanh toán 15% quý 4/25` → `Giá trị thanh toán Qn` → `- Trừ tạm ứng` → `- Thanh toán` (lặp theo nhà thầu).

---

## Sheet 3 — `Tổng hợp BC giải ngân từng DA` = PHỤ LỤC 03

**Dim:** A1:AF599 · merge header 3 hàng (cột 1–20).  
**Tiêu đề:** Báo cáo kết quả thực hiện các công trình, nhiệm vụ thuộc **kế hoạch bảo trì năm 2026** · Đơn vị Khu QLĐB IV · kèm `/KQLĐBIV-KHTC`.

### Cột (số cột form; thiếu số 5 — đúng mẫu)

| # | Header | Công thức / ý |
|---|--------|----------------|
| 1 | TT | Nhóm A–E hoặc STT tuyến/CT |
| 2 | Công trình, hạng mục công việc | Tên CT · đoạn Km · QL |
| 3–4 | QĐ phê duyệt DA / BCKTKT | Số QĐ · kinh phí |
| 6 | KHBT năm 2025 Bộ GTVT phê duyệt | — |
| 7–9 | Dự toán chi được giao | 7=8+9 · hết 2025 · năm 2026 |
| 10 | Giá trị thực tế thực hiện CT / nhiệm vụ | — |
| 11–14 | KL đủ ĐK nghiệm thu, thanh toán | 11=12+13+14 · hết 2025 · 01/01→BC (BBNT A-B) · dự kiến → 31/12/2026 |
| 15–18 | **Giải ngân** | 15=16+17+18 · lũy kế hết 2025 · 01/01→BC (**xác nhận KBNN hoặc UNC**) · dự kiến → **31/01/2027** |
| 19 | Đánh giá kết quả / kiến nghị | — |
| 20 | Ghi chú | — |

### Cây nhóm (hàng tổng + chi tiết)

| Mã | Nhóm | Con |
|----|------|-----|
| A | Bảo dưỡng thường xuyên | Năm 2025 · Năm 2026 · rồi **theo quốc lộ / đoạn** (QL1, 14, 20, 22, 22B, 27, 28, 30, 50, 51, 53, 53B, 54, 56, 57, 60, 61, 61B, 61C, 63, 80, 91, N2, N2B, Nam Sông Hậu, Quản Lộ Phụng Hiệp, HLVB phía Nam, Hồ Chí Minh, Trường Sơn Đông, **cao tốc**, kho vật tư) |
| B | Sửa chữa định kỳ | Chuyển tiếp · Mới · TMĐT &lt; 15 tỷ · TMĐT ≥ 15 tỷ |
| C | Sửa chữa đột xuất | Thiên tai · Điểm đen / mất ATGT · Đột xuất khác · (mỗi nhánh: chuyển tiếp / mới) |
| D | Công tác khác | Chuyển tiếp · mới (phà Vàm Cống · nhà hạt · kiểm tra cầu 5 năm · PCTT…) |
| E | Công trình kiến nghị dùng **NSĐP** | — |

Chi tiết B/C: mỗi CT có **số QĐ** (Cục `…/QĐ-CĐBVN` hoặc Khu `…/QĐ-KQLĐBIV` / công điện TCGT).

---

## Map công văn ↔ workbook

| Công văn | Workbook | Entity đề xuất (chưa live) |
|----------|----------|----------------------------|
| PH1 loại CT SCĐK / SCTX / đột xuất / khác | Sheet 1 vs 2 vs nhóm C/D | `KchtProject.projectType` + `capitalSourceKind` |
| PH1 mới / chuyển tiếp · năm KH | Sheet 3 nhóm B/C con | `continuityKind` · `planYear` |
| PH1 QĐ + TMĐT + DT | Header sổ + cột 3–4, 7–9 | `KchtProjectDecision` · `KchtCapitalPlan` |
| PH1 1 CT : n HĐ / n NT | Cây XL + LD sheet 2 | `KchtProjectContract` |
| PH4 KH vốn ± tiết kiệm | DT đầu năm / trừ TK / KH vốn SCTX | `KchtCapitalPlan` |
| PH4 1 lần TT = 1 GD | 1 hàng sổ (C–H / C–I) | `KchtDisbursement` |
| PH4 Giấy rút / PG / UNC + ngày + KBNN | Cột G–H · ghi chú upload | FileService `attachmentId` |
| PH4 đối chiếu PM × KBNN | BC cột 11–14 vs 15–18 | `KchtKbnCompare` |
| PH5 BC3 giải ngân tự động | **Chính sheet 3** | Kind E `reportToolbar` **sau** PH4 |
| PH5 BC đột xuất / dashboard | Aggregate từ sheet 3 (chậm / &lt;50% GN) | KPI login — chưa có trong xlsx |
| GAP-KCT-04 import KBNN | Ghi chú sheet 1 | P1 upload Excel/PDF · P2 cổng DVC |

**Không** map sheet 3 → `rpt-tong-hop-bao-tri` (GOVOne BDTX). Report mới = màn PH5 của `kcht-cong-trinh` (hoặc slug `rpt-kcht-giai-ngan` **chỉ khi** SA/TL tách pack).

---

## AC / DoD (wave PH4–PH5 — chưa implement)

- [ ] Sổ chi tiết: 1 DA / 1 màn; lặp block; cây chi phí 8 nhóm SCĐK + quý SCTX  
- [ ] Dòng GD: money 3 cột + party SearchInput + voucherNo + date UTC  
- [ ] Liên danh: nhiều party / 1 gói (Mẫu 2)  
- [ ] Upload Giấy rút / UNC / chứng từ KBNN / BBNT / bảng KL — FileService  
- [ ] PHỤ LỤC 03: filter năm · loại A–E · QL · xuất Excel cột 1–20 + công thức 7/11/15  
- [ ] Đơn vị tính BC: nghìn đồng; sổ chi tiết: đồng — **không** trộn  
- [ ] `sourceKind=synthetic` · số trong xlsx = **fixture mẫu**, không seed prod  
- [ ] Pilot tenant `REG-IV` — cấm seed CUC 2

## Next slash

```
/agent-data-analy  slug=kcht-cong-trinh  (bổ sung real-data PH4/PH5 từ extract này)
→ PO AC PH4–PH5 → Design Kind B sổ + Kind E PHỤ LỤC 03
→ SA entity KchtDisbursement + KchtCapitalPlan · Schema_KchtCongTrinhDisburse
```

**Không** `yarn run-implement` MAIN3 cho report trước form nguồn PH4.
