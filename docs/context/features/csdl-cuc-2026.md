# CSDL Cục 2026 — epic 16 biểu + 10 sổ

> **Slug:** `csdl-cuc-2026` · parent hub [`csdl-so-sach.md`](csdl-so-sach.md)  
> **Status:** Context (typed **chưa** implement)  
> **sourceKind:** `data-import/Sổ sách, biểu mẫu trình LĐ Cục` · 437/BC-QLBT 20/08/2026  
> **Analy:** [`specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md`](../../../specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md)  
> **Chốt user 2026-09-05:** **1 nút = 1 feature** `csdl-bieu-{nn}` / `csdl-so-{nn}` — **không** gộp typed vào hub  
> **Hai lớp chứng từ:** Sổ TS / hang-muc ≠ biểu·sổ Cục — **LOOKUP chung · ROW riêng** (§1b)  
> **API:** giữ `api/v1/asset/csdl-records?resource=` đến SA typed table · **cấm** invent `infra` / ERP.*  
> **≠** `/so-ts/hang-muc` · ≠ Sổ TS `so-ts-*` (deep-link only)

## 1. Mục tiêu

Số hóa đúng **QĐ ban hành mẫu** 08/2026: 16 biểu in Excel + 10 sổ Word. Hub Kind G đổi KPI 16/10. Mỗi biểu/sổ có list Kind B + form Kind D (Sổ 10 = map).

## 1b. Hai lớp chứng từ (chốt 2026-09-05)

**Không gộp form/row.** SSOT = một loại chứng từ một nguồn — không phải «cùng chủ đề hạ tầng thì một bảng».

| | **Lớp 1 — Sổ TS / hang-muc** | **Lớp 2 — Biểu + sổ Cục** |
|--|--|--|
| Việc | Quản lý **từng cái** trên đường | **In/nộp** mẫu QĐ Cục 08/2026 |
| 1 dòng | 1 công trình / 1 biển / 1 hộ chiếu | 1 hàng thống kê (hoặc 1 ngày nhật ký) |
| Route | `/so-ts/hang-muc` → `/so-ts?type=` | `/so-ts/csdl-so-sach` → `csdl-bieu-*` / `csdl-so-*` |
| API / bảng | `road-assets/summary-by-type` · `rmms_road_assets` | `csdl-records?resource=` (typed khi SA) |
| Nguồn | CSV `gov-vn` / dump `moc_dbvn` | Excel 16 sheet + Word 10 mẫu |
| Hang-muc | Chỉ **đếm** — không form nhập | Không dùng lưới 40 ô |

**LOOKUP chung (được):** `road-route` (nên 3 tầng như Sổ TS) · tỉnh · org · Km · side L/R · GPS · TT.  
**ROW riêng (cấm merge):** `type=CULVERT_X` ≠ `resource=culverts`. 9 biểu 1:1 loại (01, 04–06, 10–11, 13–14, 16) vẫn 2 bảng. Biểu 07/08/15 trùng chủ đề nhiều ô. Biểu 02/03/09/12 không có ô hang-muc. 10 sổ BDTX = nhật ký — không phải hạng mục.

P1: deep-link peer + import Excel Cục. Sync TS → biểu = `Q-PEER` sau P1. Map loại: analy §1.4.

## 2. Catalog con

### Biểu

| Slug | # | Tên | resource live | Cột | packKind |
|------|---|-----|---------------|-----|----------|
| `csdl-bieu-01` | 1 | Phân loại mặt đường | `pavement-sections` | 38 | list |
| `csdl-bieu-02` | 2 | Thống kê cầu | `bridges` | 48 | list |
| `csdl-bieu-03` | 3 | Hầm đường bộ | `road-tunnels` | 42 | list |
| `csdl-bieu-04` | 4 | Cống | `culverts` | 17 | list |
| `csdl-bieu-05` | 5 | Rãnh | `ditches` | 18 | list |
| `csdl-bieu-06` | 6 | Hầm chui DS + hộp KT | `underpasses` | 19 | list |
| `csdl-bieu-07` | 7 | Lề / taluy / hàng rào | `shoulders-fences` (live #10) | 20 | list |
| `csdl-bieu-08` | 8 | ATGT | `traffic-safety` (live #7) | 45 | list |
| `csdl-bieu-09` | 9 | Mốc LG / GPMB | `boundary-markers` | 17 | list |
| `csdl-bieu-10` | 10 | Kè, tường chắn | `retaining-walls` | 21 | list |
| `csdl-bieu-11` | 11 | Chiếu sáng | `lighting-systems` | 24 | list |
| `csdl-bieu-12` | 12 | Cây xanh, thảm cỏ | `green-assets` | 15 | list |
| `csdl-bieu-13` | 13 | Tường chống ồn | **new** | 13 | list |
| `csdl-bieu-14` | 14 | ITS | **new** | 21 | list |
| `csdl-bieu-15` | 15 | TMC / thu phí / hạt / kho | **new** | 20 | list |
| `csdl-bieu-16` | 16 | Nút giao | **new** | 39 | list |

### Sổ

| Slug | # | Tên | resource live | packKind |
|------|---|-----|---------------|----------|
| `csdl-so-01` | 1 | Nhật ký tuần kiểm | `inspection-logs` (live #8) | list |
| `csdl-so-02` | 2 | Nhật ký tuần đường | `patrol-logs` (live #1) | list |
| `csdl-so-03` | 3 | Trực BĐGT + chốt + SC | gộp `duty-logs`+`checkpoint-duties` | list |
| `csdl-so-04` | 4 | Đếm xe | `traffic-counts` | list |
| `csdl-so-05` | 5 | TNGT + điểm đen | **new** (tách từ live #4) | list |
| `csdl-so-06` | 6 | QL cầu / phiếu KT | `bridge-inspections` | list |
| `csdl-so-07` | 7 | HL + GPTC + Dự án | `row-violations` | list |
| `csdl-so-08` | 8 | Kết quả BDTX | `maintenance-work-logs` | list |
| `csdl-so-09` | 9 | QL vận hành ITS/ETC | **new** | list |
| `csdl-so-10` | 10 | Bình đồ duỗi thẳng | **new** | **map** |

## 3. Run order

Wave 0 hub (`csdl-so-sach` edit_page catalog only) → bieu 01,04,05,06 → 02,03 → 07–12 → 13–16 → so 02,01,08,03 → 06,07,04,05 → 09,10.

Slash: `/agent-qldb-workflow @{slug}` · `csdl-so-10` → `/agent-dev-oms-map` · Schema → `/database-migration`.

## 4. Cấm

- Gộp typed vào `csdl-so-sach`  
- Fake STATUS done trên child  
- Merge row Sổ TS / hang-muc vào biểu thống kê (một form hai chuẩn)  
- Coi LOOKUP chung (`road-route`) = được gộp PK / entity  
- Invent `api/v1/infra/*`

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `done` | `done` | `2026-09-06T20:15:49.737Z` |
| mobile | — | — | — |
