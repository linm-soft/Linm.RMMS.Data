# Tuần kiểm — chuỗi sự cố, sổ nhật ký, báo cáo

> **Slug:** `tuan-kiem-context` · **Module:** Patrol · **Phase:** context · **Wave:** sau A–E  
> **Status:** Context draft  
> **Command:** `/implement-tuan-kiem-context`  
> **MFE phone:** `Linm.Web.RMMS.Mobile` · **MFE báo cáo:** `Linm.Web.RMMS.Report`  
> **BE:** `Linm.RMMS.WebService` · domain Patrol + Incident · **cấm ERP.***  
> **Luật:** Thông tư 41/2024 Điều 20 · Phụ lục VIII mục II · sửa bởi Thông tư 72/2025 Điều 17  
> **Peer đã xong:** `web-rmms-mobile-a` … `e` · `web-rmms-cam-finding` · `web-rmms-incident` · `rpt-tuan-kiem` · `rpt-nhat-ky-tuan-kiem`

## 1. Mục tiêu

Nối ba việc còn lệch sau khi hub, phiếu, đối chiếu và kiến nghị đã có:

1. Tuần kiểm thấy sự cố của đợt (cùng tuyến, trong km đợt) và xác nhận trên phiếu.
2. Sổ nhật ký đúng hai trang Phụ lục VIII, lãnh đạo ký cuối tuần.
3. Báo cáo tuần kiểm và nhật ký tuần kiểm đọc sổ và phiếu, không đọc số điểm check-in.

## 2. Pack

Chi tiết id: `Linm.Development.Rules/common/skill/implement-tuan-kiem-context/example/tasks.md`.

| Pack | Id | Kết quả |
|------|----|---------|
| Sự cố | TK-SC-01…04 | List theo đợt · mở hoặc lập phiếu · xác nhận đạt / chưa đạt · không Giao việc |
| Sổ | TK-SO-01…06 | Bìa quyển · trang trái · trang phải · dòng từ phiếu và đối chiếu · ký cuối tuần · cùng nguồn với báo cáo nhật ký |
| Chuỗi | TK-BC-01…06 | Tuần đường → sự cố → đối chiếu → phiếu → sổ → `/bao-cao/tuan-kiem` và `/bao-cao/nk/tuan-kiem` |

## 3. Chuỗi đọc

| Bước | Route phone | Ghi chú |
|------|-------------|---------|
| Ca tuần đường | `/tuan-duong` | `patrol/sessions` loại Tuần đường |
| Dòng nhật ký | `/nhat-ky/:sessionId` | Tuần kiểm chỉ xem và đối chiếu |
| Sự cố | `/van-de` | `incident/incidents` · lọc tuyến và km của đợt |
| Đợt tuần kiểm | `/tuan-kiem` · `/tuan-kiem/mo-dot` | Giữ đợt A. Lý trình đang nằm trong `Note` đến khi có cột |
| Phiếu | `/phat-hien/:sessionId` | `patrol/findings` |
| Đối chiếu | `/phat-hien/:sessionId/review/:lineId` | khớp hoặc lệch |
| Xác nhận | `/phat-hien/:sessionId/:findingId` | Đạt / chưa đạt |
| Sổ | xem từ hub đợt | Dòng = phiếu + kết quả đối chiếu |
| Báo cáo | `/bao-cao/tuan-kiem` · `/bao-cao/nk/tuan-kiem` | Drill về phiếu hoặc dòng sổ |

## 4. API đã có — không thêm path mới trong context này

| Việc | Path Live |
|------|-----------|
| Đợt / ca | `patrol/sessions` |
| Sự cố | `incident/incidents` |
| Phiếu, kiểm tra lại | `patrol/findings` · `…/recheck` |
| Ảnh | `files/*` |

Context này không thêm controller sổ. Dòng sổ tuần kiểm sinh từ phiếu (`patrol/findings`) và kết quả đối chiếu. Khi implement, SA chọn một bảng Patrol, gắn phiếu bằng id. Báo cáo đọc bảng đó. Cột lý trình đợt, bìa quyển và chữ ký là migration `Schema_*` lúc implement, chưa có trên entity.

Catalog CSDL `inspection-logs` (`asset/csdl-records?resource=inspection-logs`) là sổ danh mục tài sản, không phải dòng sổ của pack này.

`rpt-tuan-kiem` hiện mô tả đọc `PatrolSession`. `rpt-nhat-ky-tuan-kiem` mô tả đọc `InspectionLogBook`. Hai mô tả lệch nhau. Pack 3 chốt một nguồn: dòng sổ sinh từ phiếu. Báo cáo không đọc `checkInCount`.

## 5. Ngoài phạm vi

Đợt A–E, nút Giao việc (vai Quản lý, xem `quan-ly-context`), nghiệm thu chấm điểm, công thức Mục IV, trang bị xe, track GPS liên tục, app native.

## 6. Persona

| Vai | Việc trên chuỗi này |
|-----|---------------------|
| Tuần đường | Ghi ca, nhật ký, sự cố. Không lập phiếu tuần kiểm |
| Tuần kiểm | Xem sự cố cùng tuyến, lập phiếu, đối chiếu, xác nhận. Không giao việc, không ký hộ |
| Quản lý (`quan-ly-context`) | Ký sổ cuối tuần và giao việc. Không xác nhận đạt hộ |

## 7. Gap

| Id | Việc |
|----|------|
| GAP-TK-CTX-01 | List sự cố chưa lọc theo đợt tuần kiểm |
| GAP-TK-CTX-02 | Chưa có bìa quyển và ký cuối tuần |
| GAP-TK-CTX-03 | Phiếu và sổ báo cáo chưa cùng một dòng |
| GAP-TK-CTX-04 | Từ km / đến km của đợt còn trong `Note` |
| GAP-TK-CTX-05 | Hub đợt còn hiện số điểm check-in |
