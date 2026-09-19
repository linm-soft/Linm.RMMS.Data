# In / xuất PDF + Excel đúng mẫu data

> **Slug:** `csdl-export-print` · **Module:** Asset · Patrol · Maint · Report · QLDA  
> **Phase:** P1 (CSDL) · P1–P3 (GOVOne `rpt-*`) · CR-Khu-IV (KCHT giải ngân)  
> **Status:** Context · task pack **open** (2026-09-17 · `/hey-linm` Apply `all_templates`)  
> **Parent typed:** [`csdl-cuc-2026.md`](csdl-cuc-2026.md) · hub [`csdl-so-sach.md`](csdl-so-sach.md)  
> **Analy CSDL:** [`specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md`](../../../specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md) Wave 3 `T-XLS-*`  
> **Nguồn khách:** [`SOURCE-TRACKING.md`](../../data/SOURCE-TRACKING.md)  
> **≠** typed CRUD `csdl-bieu-*` / `csdl-so-*` (**done** = form, **không** = in) · ≠ Sổ TS / hang-muc (`GAP-CSDL-CUC-11`)

**Live menu «CSDL 12 biểu + 8 sổ BDTX» = shell cũ.** Mẫu in chuẩn = **QĐ Cục 08/2026: 16 biểu Excel + 10 sổ Word.** Hồ sơ 12+8 chỉ tham chiếu lịch sử.

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | Export/print **đúng cột + merge + bìa** của file mẫu khách — không CSV lưới generic |
| Persona | Khu QLĐB · Văn phòng · Nhà thầu BDTX · QLDA Khu IV |
| DoD epic | Golden file: mở Excel/PDF cạnh mẫu Cục / GOVOne / PHỤ LỤC 03 · checksum cột · toolbar **Xuất / In** work |
| MFE | Asset `:9301` list/sổ · Report `:9311` `/bao-cao/*` · KCHT theo `kcht-cong-trinh` |
| API | Giữ path live — **cấm** invent `api/v1/infra/*` · **cấm** ERP.* |

Ba gói **không gộp form/row**:

| Pack | Việc | Form nguồn | Output |
|------|------|------------|--------|
| **A — CSDL in** | 16 biểu + 10 sổ | `1. Biểu mẫu CSDL.xls` + Word `1.`–`10.` | Excel đúng sheet · PDF/Word sổ |
| **B — GOVOne BC** | 21 leaf `rpt-*` | HDSD / capture GOVOne | Excel + In Kind E |
| **C — KCHT GN** | PH4 sổ DA + PH5 PL03 | SRC-KCT-GN03 (03 sheet) | Excel đúng 3 sheet · **≠** `rpt-tong-hop-bao-tri` |

## 1b. Data đã dùng (không đọc lại binary `analyzed`)

| ID / path | Status | Dùng cho pack |
|-----------|--------|----------------|
| `data-import/Sổ sách, biểu mãu trình LĐ Cục/1. Biểu mẫu CSDL.xls` | analyzed (Cục 16 sheet) | A |
| Cùng folder `1.`–`10.` `Mẫu_*.docx` | analyzed | A |
| `2026.08.20_QĐ BAN HÀNH…docx` · `437/BC-QLBT` | analyzed | A — danh mục 16+10 |
| `docs/Hồ sơ…/4.1. In_Mẫu biểu_Cơ sở dữ liệu.xlsx` | analyzed **STALE 12 biểu** | A — chỉ so sánh; **cấm** làm golden |
| `docs/Hồ sơ…/3. Mẫu sổ.docx` | analyzed **STALE 8 sổ** | A — chỉ so sánh |
| `docs/Hồ sơ…/4. Bìa_Cơ sở dữ liệu.docx` | **pending** | A — bìa bộ biểu |
| SRC-HS-06…11 PDF Khu I–IV | **pending** | A — hiện trạng ghi chép, không layout in |
| `gov-vn` / `moc_dbvn` CSV | skip dump | **Không** mẫu in — lớp Sổ TS |
| HDSD + GOVOne `rpt-*` | partial / context | B |
| `SRC-NKTD-PDF` scan 4 trang | analyzed | A/B — **sổ giấy chụp**, không golden in; CR form `csdl-so-02` trước print/report |
| SRC-KCT-GN03 xlsx 03 sheet | analyzed | C |

**Cấm** `Read` lại xlsx/docx khi `analyzed` trừ size đổi / `--force`. Fixture mẫu **không** seed prod.

## 2. Design / UI

| Screen | Pattern | Export |
|--------|---------|--------|
| List biểu `csdl-bieu-{nn}` | Kind B toolbar | **Xuất Excel** đúng sheet · Import P1 |
| Sổ `csdl-so-{nn}` | Kind B + book | **In PDF** mẫu Word · Excel dòng (phụ) |
| Hub `csdl-so-sach` | Kind G | **Không** nút export trên catalog — vào resource |
| Leaf `/bao-cao/*` | Kind E | Toolbar **Xem · Xuất Excel · In** — **cấm** trên filter bar |
| KCHT PH4/PH5 | Kind B sổ + Kind E PL03 | Xuất 3 sheet · đơn vị **đồng** (sổ) ≠ **nghìn đồng** (PL03) |

**Cấm:** toast stub (`csdl-so-sach-control-map` action 17/18/23) coi là xong · export trên `LinErpListFilterBar` · gộp 12+8 vào KPI 16+10.

## 3. API (giữ live — SA chốt binary)

```
GET  /api/v1/asset/csdl-records/export?resource=
POST /api/v1/asset/csdl-records/import?resource=
GET  /api/v1/asset/csdl-records/{id}/print     # sổ PDF — SA đặt path; cấm /infra/
GET  /api/v1/reports/{leaf}/export
GET  /api/v1/kcht-ct/…                         # prefix SA kcht — cấm bịa runtime mới
```

BFF proxy only. Binary file qua BFF — skill `/implement-export-import-excel`. Sổ PDF: HTML→print hoặc `/implement-export-html-to-doc` rồi PDF; **cấm** screenshot.

## 4. Database

Không bảng «report store» P1. Đọc typed `rmms_csdl_bieu*` / sổ entries / domain `rpt-*` / `kcht-cong-trinh` PH4–PH5. Schema mới chỉ khi SA (KCHT giải ngân) — `/database-migration` pair.

## 5. Events / tích hợp

Không. FileService cho ảnh sổ 1/2/6 (`T-FILE-01`) — **cấm** invent file API.

## 5b. Task pack

`devSlash` Excel = `/implement-export-import-excel` · print sổ = `/implement-export-html-to-doc` (+ PDF) · report leaf = `/erp-report-context` **sau** `data-analy-report-source-form` · KCHT = `/agent-qldb-workflow` `kcht-cong-trinh` edit_page PH4–PH5. Queue **web** `qlbd`. **Cấm** `yarn run-implement` mobile. **Cấm** re-run typed CRUD child `done`.

### Wave 0 — Engine (P0)

| ID | Việc | DoD | deps |
|----|------|-----|------|
| T-EXP-00 | Index golden: 16 sheet + 10 Word + bìa · ghi `docs/data/analyzed/csdl-export-golden.md` | Cite path · **cấm** 12+8 làm golden | — |
| T-XLS-00 | Parser merge-header Excel 16 sheet | Row count + checksum cột (7) · skip hàng cầu âm Biểu 1 | T-EXP-00 |
| T-XLS-ENG | Shared export/import template API + FE dropdown | 1 engine · BFF binary | T-XLS-00 |
| T-PDF-00 | Engine in sổ = layout Word (header quyển + dòng) | Pilot Sổ 2 + Sổ 8 | T-EXP-00 |
| T-TB-00 | Toolbar Xuất/In trên list/sổ/Kind E | **cấm** filter bar · đóng toast stub | T-XLS-ENG |
| T-BIA-00 | Extract `4. Bìa_Cơ sở dữ liệu.docx` (SRC-CSDL-BIA pending) | Cover PDF/Excel bộ biểu | T-EXP-00 |

### Wave 1 — 16 biểu Excel (đóng `GAP-CSDL-CUC-04` · `T-OUT-01`)

**Queue 2026-09-17:** `/add-task` preset `csdl_wave1_xls` · `edit_page` `--force` · `roleOnly=data_analy` · enqueue-only (worker `yarn run-implement` sẵn).

Pattern mỗi biểu: **T-XLS-S{nn}** import 1 sheet = 1 `resource` + export đúng merge + ghi chú chân biểu. Pilot **Biểu 1 (38) + Biểu 8 (45)** trước (`T-XLS-OUT` analy).

| ID | Slug | Sheet / cột | Ghi chú |
|----|------|-------------|---------|
| T-XLS-S01 | `csdl-bieu-01` | 38 | skip-bridge · LOOKUP `road-route` |
| T-XLS-S02 | `csdl-bieu-02` | 48 | GPS 3 điểm |
| T-XLS-S03 | `csdl-bieu-03` | 42 | 2 ống = 2 GPS |
| T-XLS-S04 | `csdl-bieu-04` | 17 | **cấm** gộp Sổ TS cống |
| T-XLS-S05 | `csdl-bieu-05` | 18 | |
| T-XLS-S06 | `csdl-bieu-06` | 19 | + hộp KT |
| T-XLS-S07 | `csdl-bieu-07` | 20 | formNo Cục **7** (live cũ #10) |
| T-XLS-S08 | `csdl-bieu-08` | 45 · 11 nhóm | **cấm** 1 hàng kéo ngang |
| T-XLS-S09 | `csdl-bieu-09` | 17 | |
| T-XLS-S10 | `csdl-bieu-10` | 21 | |
| T-XLS-S11 | `csdl-bieu-11` | 24 | LED + NLMT |
| T-XLS-S12 | `csdl-bieu-12` | 15 | |
| T-XLS-S13 | `csdl-bieu-13` | 13 | NEW hub |
| T-XLS-S14 | `csdl-bieu-14` | 21 | NEW |
| T-XLS-S15 | `csdl-bieu-15` | 20 | 5 loại CT |
| T-XLS-S16 | `csdl-bieu-16` | 39 | nhánh 1–n |

### Wave 2 — 10 sổ PDF/Word

Pattern: header quyển + `entries[]` typed · In = mẫu Word Cục. Excel dòng = phụ.

| ID | Slug | Mẫu Word | Extra |
|----|------|----------|-------|
| T-PDF-SO01 | `csdl-so-01` | Nhật ký tuần kiểm | FileService sau SC |
| T-PDF-SO02 | `csdl-so-02` | Nhật ký tuần đường | sketch · **sau** CR [`nktd-pdf-20260917`](../../../specs/_cr/nktd-pdf-20260917/README.md) · golden = Word Cục **không** scan CamScanner |
| T-PDF-SO03 | `csdl-so-03` | Trực BĐGT+chốt+SC | 1 mẫu gộp |
| T-PDF-SO04 | `csdl-so-04` | Đếm xe | 16 hạng xe · **cấm** 1:1 camera type |
| T-PDF-SO05 | `csdl-so-05` | TNGT + điểm đen | 3 bảng C.1 / C.2 / điểm đen |
| T-PDF-SO06 | `csdl-so-06` | QL cầu / phiếu KT | 20 dòng cố định |
| T-PDF-SO07 | `csdl-so-07` | HL + GPTC + DA | 2 khối |
| T-PDF-SO08 | `csdl-so-08` | Kết quả BDTX | 5 cột |
| T-PDF-SO09 | `csdl-so-09` | ITS/ETC vận hành | NEW |
| T-PDF-SO10 | `csdl-so-10` | Bình đồ duỗi thẳng | Kind F map · in strip / ảnh |

### Wave 3 — GOVOne `rpt-*` (Kind E)

Gate: **form nguồn READY** (`data-analy-report-source-form` · analy `T-RPT-01`). **Cấm** report pack trước typed CSDL nếu leaf đọc biểu/sổ.

| Wave | Slug | Excel path (context) |
|------|------|----------------------|
| P1 | `rpt-tai-san` · `rpt-su-co` · `rpt-checkin` | `/api/v1/reports/assets\|incidents\|checkins/export` |
| P1.5 | `rpt-bao-cao-cong` · `rpt-tuan-duong` · `rpt-tuan-kiem` | attendance / patrol-road / patrol-inspect |
| P2 | `rpt-tong-hop-bao-tri` · `rpt-nhat-ky-tuan-duong` · `rpt-nhat-ky-tuan-kiem` · `rpt-nhat-ky-cong-viec` · `rpt-thien-tai` · `rpt-thiet-hai` · `rpt-un-tac` · `rpt-hang-muc-hu-hong` · `rpt-tinh-trang-mat-duong` · `rpt-kiem-tra-cau` · `rpt-tngt` · `rpt-vi-pham-hlatdb` · `rpt-dem-xe` | đúng path từng ctx · **In** toolbar |
| P3 | `rpt-giay-phep-thi-cong` · `rpt-cong-van` | P3-CR |

Mỗi leaf: **T-XLS-RPT-{slug}** cột đúng + **T-PRT-RPT-{slug}** In. Hub `reports` không implement lưới.

### Wave 4 — KCHT giải ngân (SRC-KCT-GN03)

Thuộc `kcht-cong-trinh` PH4–PH5 — **không** slug `rpt-*` trừ SA tách `rpt-kcht-giai-ngan`.

| ID | Sheet | Output |
|----|-------|--------|
| T-KCT-XLS-SCDK | `Vốn SCĐK` | Sổ chi tiết DA · đồng · cây 8 nhóm |
| T-KCT-XLS-SCTX | `Vốn SCTX` | Quý + liên danh · cột HĐ |
| T-KCT-XLS-PL03 | `Tổng hợp BC giải ngân từng DA` | PHỤ LỤC 03 · nghìn đồng · cột 1–20 + CT 7/11/15 |
| T-KCT-FILE | Upload Giấy rút / UNC / KBNN | FileService P1 · cổng DVC P2 |

**Cấm** map sheet 3 → `rpt-tong-hop-bao-tri`. Form PH4 trước Kind E PH5.

## 6. Gaps

| ID | Sev | Note |
|----|-----|------|
| GAP-CSDL-CUC-04 | P0 | Import/export Excel đúng sheet — đóng `GAP-CSDL-XLS-01` |
| GAP-CSDL-03 | P1 | PDF mẫu in sổ (song song giấy) |
| GAP-CSDL-CUC-12 | Info | Docs `11-…` vẫn 12+8 — **cấm** golden |
| GAP-EXP-STUB-01 | P0 | Toolbar toast stub ≠ export |
| GAP-EXP-GOLD-12 | P0 | **Cấm** `4.1. In_Mẫu…xlsx` 12 biểu làm layout 2026 |
| GAP-RPT-SRC-01 | P1 | Report sau form nguồn — `T-RPT-01` |
| GAP-KCT-PL03-01 | P1 | PL03 ≠ hub reports P1 |
| GAP-CSDL-CUC-11 | P1 | LOOKUP chung · ROW riêng vs Sổ TS |

## 7. Run order

```
T-EXP-00 → T-XLS-00 → T-XLS-ENG → T-TB-00
→ T-XLS-S01 + T-XLS-S08 (pilot) → T-XLS-S04..06 → còn lại 16
→ T-PDF-00 → T-PDF-SO08 (pilot) → T-PDF-SO01,03,06,07 → 04,05,09,10 · T-PDF-SO02 **sau** CR nktd-pdf
→ T-XLS-RPT P1 → P1.5 → P2 → P3
→ T-KCT-XLS-SCDK/SCTX (PH4) → T-KCT-XLS-PL03 (PH5)
```

```
/hey-linm                         # epic này
/implement-export-import-excel    # Wave 0–1
/implement-export-html-to-doc     # Wave 2
/erp-report-context @{rpt-*}      # Wave 3 · sau source form
/agent-qldb-workflow @kcht-cong-trinh   # Wave 4 PH4–PH5
/database-migration               # chỉ khi SA schema KCHT
```

**Cấm** `/agent-qldb-workflow` full typed trên child `done`. Export = **edit_page** export/print trên slug sẵn có, hoặc task ID epic này.

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `data_analy` | `draft` | `2026-09-17T16:30:00.000Z` |
| mobile | — | — | — |
