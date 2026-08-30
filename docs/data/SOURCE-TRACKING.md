# SOURCE-TRACKING — tài liệu khách → feature (SSOT)

> **Đọc file này trước** mọi `@` / `Read` binary trong `Linm.RMMS.Data/docs`.  
> Gốc không move. Extract = `analyzed/`. Pipeline feature = [`FEATURE-TRACKING.md`](../context/FEATURE-TRACKING.md).  
> **Cập nhật:** 2026-08-29

## Legend

| Status | Ý nghĩa | Agent |
|--------|---------|-------|
| `analyzed` | Đã extract UTF-8 — **cấm** đọc lại gốc trừ lệch hash / user `--force` | Dùng extract + context |
| `partial` | Có context/API map nhưng chưa extract hết file gốc | Đọc extract; gốc chỉ khi thiếu cột |
| `pending` | Chưa phân tích | Được `Read` gốc lần đầu → ghi extract |
| `skip` | Demo / archive / dump — không phải nguồn khách mới | Không index |

**Kind:** `customer` = khách gửi · `internal` = extract nội bộ · `dump` = gov import.

---

## Index — file khách (docs/)

| ID | File gốc | Kind | Status | Feature slug | Extract / context |
|----|----------|------|--------|--------------|-------------------|
| SRC-KCT-CV | `docs/tinh-nang/Cung cấp thông tin phần mềm.doc` | customer | analyzed | `kcht-cong-trinh` | [Cung-cap-thong-tin-phan-mem.md](../tinh-nang/Cung-cap-thong-tin-phan-mem.md) · [kcht-cong-trinh.md](../context/features/kcht-cong-trinh.md) |
| SRC-KCT-GN03 | `docs/Hồ sơ xin ý kiến chuẩn hóa sổ sách/Sổ chi tiết theo dõi từng dự án và biểu tổng hợp báo cáo giải ngân (03 sheet).xlsx` | customer | analyzed | `kcht-cong-trinh` PH4+PH5 | [kcht-giai-ngan-03-sheet.md](analyzed/kcht-giai-ngan-03-sheet.md) · wave [kcht-wave-ph2-ph4.md](analyzed/kcht-wave-ph2-ph4.md) |
| SRC-CSDL-41 | `docs/Hồ sơ xin ý kiến chuẩn hóa sổ sách/4.1. In_Mẫu biểu_Cơ sở dữ liệu.xlsx` | customer | analyzed | `csdl-so-sach` · `pavement-section` | [11-CSDL-SO-SACH-DATABASE-API.md](../context/11-CSDL-SO-SACH-DATABASE-API.md) |
| SRC-CSDL-SO | `docs/Hồ sơ xin ý kiến chuẩn hóa sổ sách/3. Mẫu sổ.docx` | customer | analyzed | `csdl-so-sach` · `patrol` | [11-CSDL…](../context/11-CSDL-SO-SACH-DATABASE-API.md) §3 |
| SRC-CSDL-BIA | `docs/Hồ sơ xin ý kiến chuẩn hóa sổ sách/4. Bìa_Cơ sở dữ liệu.docx` | customer | pending | `csdl-so-sach` | — |
| SRC-HDSD | `docs/tai-lieu/Hướng dẫn sử dụng phần mềm.docx` (copy `mobile-legacy/` · `_extract/`) | customer | partial | hub 18 phân hệ · `15-SCREEN-AI-MAP` | [15-SCREEN-AI-MAP.md](../context/15-SCREEN-AI-MAP.md) · features/* |
| SRC-GIAI-PHAP | `docs/tai-lieu/RMMS_Giaiphap_tinhnang.docx` | customer | partial | backlog 18 PH | [features/README.md](../context/features/README.md) |
| SRC-TUAN-DC | `docs/tinh-nang/Dự thảo Đề cương Thiết kế Web-App Tuần Đường.pdf` | customer | analyzed | `patrol` · `road-route` | [24-TUAN-DUONG-DUONG-BO.md](../context/24-TUAN-DUONG-DUONG-BO.md) |
| SRC-DEM-XE | `docs/tinh-nang/Đếm xe tự động.docx` | customer | pending | `rpt-dem-xe` · `its-anpr-overload` | — |
| SRC-HS-01 | `docs/Hồ sơ…/1_Phiếu trình Lãnh đạo Cục xin ý kiến góp ý.docx` | customer | pending | `csdl-so-sach` | — |
| SRC-HS-02 | `docs/Hồ sơ…/2_Cục. 4930- Xin ý kiến chuẩn hóa mẫu sổ sách.pdf` | customer | pending | `csdl-so-sach` | — |
| SRC-HS-05 | `docs/Hồ sơ…/5_P. BT (sửa 1)- Chuẩn hoá hồ sơ quản lý, bảo dưỡng.docx` | customer | pending | `csdl-so-sach` · `maintenance` | — |
| SRC-HS-06 | `docs/Hồ sơ…/6_Khu I. 1539. Báo cáo sổ ghi chép BDTX.pdf` | customer | pending | `csdl-so-sach` | — |
| SRC-HS-07 | `docs/Hồ sơ…/7_Khu II. So hoa cac so QLBDTX.pdf` | customer | pending | `csdl-so-sach` | — |
| SRC-HS-08 | `docs/Hồ sơ…/8_Khu III. 1462- Báo cáo rà soát số sách.pdf` | customer | pending | `csdl-so-sach` | — |
| SRC-HS-09 | `docs/Hồ sơ…/9_Khu IV. 1862- Báo cáo rà soát sổ ghi chép và số hóa.pdf` | customer | pending | `csdl-so-sach` · Khu IV sổ (≠ QLDA) | — |
| SRC-HS-10 | `docs/Hồ sơ…/10_Cục. 111-TB KL của CT Cục ĐBVN.pdf` | customer | pending | `csdl-so-sach` | — |
| SRC-HS-11 | `docs/Hồ sơ…/11_Cục. 3858- Rà soát đánh giá sự thống nhất….pdf` | customer | pending | `csdl-so-sach` | — |
| SRC-MAU-IMP | `docs/Mẫu import/temp_*.xlsx` (18 file) | skip | skip | demo archive | [import-gov-ssot.md](../context/features/import-gov-ssot.md) |
| SRC-GOV-VN | `data-import/Sau-sat-nhap/gov/*.xlsx` | dump | skip | `asset` · `road-route` | [import-gov-ssot.md](../context/features/import-gov-ssot.md) — **không** khu-2/khu-4 |
| SRC-ARC-K4 | `data-import/_archive/19. Khu Quản lý đường bộ IV.xlsx` | dump | skip | archive | không seed live |

---

## Feature web ↔ nguồn khách

| Slug | Nguồn SSOT (đọc extract, không đọc lại gốc) | Pipeline (STATUS) | Ghi chú |
|------|---------------------------------------------|-------------------|---------|
| `kcht-cong-trinh` | SRC-KCT-CV · **SRC-KCT-GN03** | Wave 1 done · **PH2–PH4** `task_399151e1` data_analy | QLDA Khu IV · PH5 park · **không** = 12 biểu CSDL |
| `csdl-so-sach` | SRC-CSDL-41 · SRC-CSDL-SO | `data_analy` / pending | 12 biểu + 8 sổ · Khu I–IV PDF vẫn `pending` |
| `pavement-section` | SRC-CSDL-41 Biểu 1 | done | Deep form Biểu 1 |
| `asset` · `asset-kcht-32` | SRC-GOV-VN + 12 biểu | asset `data_analy` draft · 32 design confirm | Catalog ≠ dump |
| `patrol` · `tuan-duong-web` | SRC-TUAN-DC · HDSD | patrol Dev leftover | TT 04 |
| `contract` | HDSD / giải pháp · **không** = parent CT | done (mỏng) | Child HĐ của `kcht-cong-trinh` |
| `reports` + `rpt-*` | HDSD GOVOne | done (hub P1) | **≠** PHỤ LỤC 03 giải ngân Khu IV |
| `incident` | HDSD | `dev` / in_progress | — |
| Còn lại 18 PH | SRC-HDSD · SRC-GIAI-PHAP · FEATURE-TRACKING Index | xem tracking | Không đọc lại docx 13MB |

**Khu 4 = hai việc khác nhau**

| | QLDA công trình (`kcht-cong-trinh`) | Sổ sách BDTX (file 9) |
|--|-------------------------------------|------------------------|
| Nguồn | Công văn `/KQLĐBIV-QLBT` + workbook 03 sheet | `9_Khu IV. 1862-…pdf` |
| Domain | Vốn SCĐK / SCTX / đột xuất · giải ngân KBNN | Ghi chép sổ nội nghiệp |
| Status nguồn | analyzed | **pending** |

---

## Hash / lần quét

| ID | size | scannedAt | hashMode |
|----|------|-----------|----------|
| SRC-KCT-GN03 | 135537 | 2026-08-29 | size+mtime · unzip 3 sheet |
| SRC-KCT-CV | 81920 (.doc) | 2026-08-27 | extract UTF-8 đã có |

Đổi size/mtime → bump extract version · **không** re-read nếu Unchanged.
