# Extract — Nhật ký tuần đường (PDF scan)

| Field | Value |
|-------|-------|
| ID | `SRC-NKTD-PDF` |
| File gốc | `docs/tinh-nang/Nhat Ky Tuan duong.pdf` |
| size | 23347991 |
| pages | 4 (scan, **0 text layer**) |
| scannedAt | `2026-09-17` |
| kind | customer |
| status | `analyzed` (trang 1 OCR + map TT 41 PL VIII; trang 2–4 handwriting — OCR WinRT 0 dòng) |
| Feature | `csdl-so-02` (form tạo data) · `rpt-nhat-ky-tuan-duong` (Kind E đọc sổ) |
| Căn cứ cột | TT 41 Phụ lục VIII · `11-CSDL` §3.1 · T-SO-02 |

**Cấm** đọc lại PDF 23MB trừ `--force` / hash đổi.

## Trang 1 — bìa sổ (OCR WinRT en-US, noisy)

Nội dung nhận được (chuẩn hoá từ OCR):

| Ô bìa | OCR / đọc | Field live |
|-------|-----------|------------|
| Tiêu đề | TUẦN ĐƯỜNG / nhật ký tuần đường | title Sổ 02 |
| Quyển số | `Quyển số: …` | `bookNo` |
| Đơn vị / nhà thầu | `Công ty cổ phần QL&XD ĐB Khánh Hòa` | `contractor` · `manageUnit` |
| Tuyến | `QLĐB` + tên đường (mờ) | `roadCode` / `roadName` SearchInput |
| Lý trình | `Từ Km … Km …` | `kmFrom` · `kmTo` |
| NV tuần | `Nhân viên tuần đường…` | `patrolStaff` |
| Kỳ | `ngày … / … / năm …` | `periodStart` · `periodEnd` |

Chân trang OCR: `CamScanner` — bản chụp sổ giấy, không phải file Word Cục.

## Trang 2–4 — dòng sổ (scan tay)

Windows OCR **0 dòng**. Layout = bảng in + chữ viết tay (file PNG lớn hơn trang bìa). Map cột **không invent** — dùng SSOT đã chốt:

| Cột sổ (TT 41 PL VIII / T-SO-02) | Entity |
|----------------------------------|--------|
| Ngày giờ kiểm tra | `CsdlBookEntry.EventAt` |
| Vị trí, lý trình sự cố/vi phạm | `LocationKm` + **thiếu** `LocationText` |
| Thời tiết, diễn biến | `WeatherEvent` |
| Đã xử lý tại chỗ | `OnSiteAction` |
| Nhận xét người nhận BC + ký | `RemarkSign` (gộp; thiếu `SupervisorSignedAt`) |
| Ghi chú | `Note` |
| Minh họa / sketch | `SketchRef` (P1 = text file-id, không picker) |

## Không có trên bìa PDF (live đang bắt)

- `province` Dropdown 5 tỉnh
- `status` tot/tb/kem/hong (tình trạng đoạn — **không** cột sổ giấy)
- `code` IdCode `SO-` (hệ thống, giữ)

## Nguồn sibling (không đọc lại)

- Word mẫu Cục: T-SO-02 trong `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md`
- `docs/context/11-CSDL-SO-SACH-DATABASE-API.md` §3.1
- Live form `/csdl-so-02` · report `/bao-cao/nk-td`
