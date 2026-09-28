# Đối chiếu report chuẩn — biểu CSDL 01–16 và sổ 01–10

Ngày chốt: 2026-09-28.

Nguồn mẫu: `data-import/Sổ sách, biểu mãu trình LĐ Cục`

- Excel: `1. Biểu mẫu CSDL.xls` (16 sheet)
- Word sổ: mẫu `1.`–`10.`

**Chuẩn** = tiêu đề đúng câu chữ mẫu, hàng nhóm cột (nếu mẫu có), số cột `(1)…(n)`, dữ liệu nằm đúng cột. Ô không có field để trống. Không xuất dòng ví dụ có sẵn trong file mẫu.

## Đã có report chuẩn

| Mẫu | Nơi mở | Output |
|-----|--------|--------|
| Sổ 01 — Nhật ký tuần kiểm | `/bao-cao/tuan-kiem`, `/bao-cao/nk/tuan-kiem` | PDF (`window.print`) và Word: bìa dọc + bảng ngang đúng cột mẫu |
| Sổ 02 — Nhật ký tuần đường | `/bao-cao/tuan-duong`, `/bao-cao/nhat-ky-tuan-duong` | Cùng kiểu, `PatrolOfficialPrintModal` |
| Biểu 16 — Thống kê các nút giao | Xuất Excel trên list `csdl-bieu-16` | Sheet `16. Nút giao`: tiêu đề, nhóm Tuyến chính / Đường nhánh tách, nhập làn / Tuyến nhánh / ATGT, hàng `(1)`–`(39)`, dữ liệu theo cột mẫu |

Biểu 16 để trống các cột mẫu không có field: kết cấu mặt, cả nhóm tuyến nhánh thứ hai (cột 23–32), bán kính R. Một nút nhiều nhánh thì mỗi nhánh một dòng. Hàng khóa field nằm ẩn để import đọc lại, không hiện trên lưới.

Nút **In mẫu** trên list Biểu 16 in PDF/Word cùng 39 cột lá (một hàng tiêu đề), chưa gộp băng nhóm như file Excel.

## Có nút in / file Excel, chưa đúng mẫu

Các list CSDL đều có **In mẫu** (`CsdlOfficialPrintModal`) và xuất Excel (`CsdlOfficialXlsx`). Layout hiện tại của nhóm này là một hàng nhãn tiếng Việt, hàng khóa field ẩn, rồi dữ liệu. Chưa có hàng nhóm cột và số `(1)…(n)` của file Cục.

| Mẫu | Sheet Excel | In PDF/Word trên form |
|-----|-------------|------------------------|
| Biểu 01 Đường | `01. Duong` | Một hàng tiêu đề, chưa 38 cột mẫu |
| Biểu 02 Cầu | `02. Cau` | Một hàng tiêu đề |
| Biểu 03 Hầm | `03. Ham` | Một hàng tiêu đề |
| Biểu 04 Cống | `04. Cong` | Một hàng tiêu đề |
| Biểu 05 Rãnh | `05. Rãnh` | Một hàng tiêu đề |
| Biểu 06 Hầm chui dân sinh | `06. Hầm chui DS` | Một hàng tiêu đề |
| Biểu 07 Lề đường, hàng rào | `07. Lề đường, PQ` | Một hàng tiêu đề |
| Biểu 08 ATGT | `08. ATGT` | Một hàng tiêu đề |
| Biểu 09 Mốc lộ giới, GPMB | `09. MLG, GPMB` | Một hàng tiêu đề |
| Biểu 10 Kè, tường chắn | `10. Kè, tường chắn` | Một hàng tiêu đề |
| Biểu 11 Chiếu sáng | `11. Chiếu sáng` | Một hàng tiêu đề |
| Biểu 12 Cây xanh, thảm cỏ | `12. CX, thảm cỏ` | Một hàng tiêu đề |
| Biểu 13 Tường chống ồn | `13. Tường chống ồn` | Một hàng tiêu đề |
| Biểu 14 ITS | `14. Hệ thống GTTM(ITS)` | Một hàng tiêu đề |
| Biểu 15 Nhà điều hành, trạm thu | `15. Nhà điều hành, trạm thu` | Một hàng tiêu đề |
| Sổ 01–10 trên list `csdl-so-01` … `csdl-so-10` | Không có tab Excel trong file mẫu (mẫu là Word) | Có bìa + bảng, cột rút gọn so với docx Cục |

Sổ 01 và sổ 02 trên **list CSDL** thuộc nhóm này. Bản chuẩn của hai sổ nằm ở bốn trang báo cáo ở bảng trên.

## Report khác — in lưới, không theo mẫu Cục

Các trang sau gọi `triggerErpReportPrint()` (in đúng lưới đang xem):

- Báo cáo danh sách
- Nhật ký công việc, nhật ký BDTX, tổng hợp bảo trì
- Đếm xe, TNGT, vi phạm hàng, tình trạng mặt đường
- Sự cố, thiên tai, hư hỏng, khối lượng hư hỏng
- Giấy phép thi công, ùn tắc

Các trang này chưa có form Word/PDF theo mẫu sổ hoặc biểu.
