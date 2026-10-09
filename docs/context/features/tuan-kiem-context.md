# Tuần kiểm — chuỗi sự cố, sổ nhật ký, báo cáo

> **Slug:** `tuan-kiem-context` · **Module:** Patrol · **Phase:** dev · **Wave:** sau A–E  
> **Status:** Implement `in_progress` — chưa `done`  
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

| Pack | Id | Kết quả | Trạng thái |
|------|----|---------|------------|
| Sự cố | TK-SC-01…04 | List theo đợt · mở hoặc lập phiếu · xác nhận đạt / chưa đạt · không Giao việc | Đã implement |
| Sổ | TK-SO-01…06 | Bìa, hai trang, dòng phiếu và đối chiếu, ký, cùng nguồn báo cáo | Đã implement trong code |
| Chuỗi | TK-BC-02, 05, 06 | Sự cố trong đợt · báo cáo không `checkInCount` · drill phiếu / sổ | Đã implement |
| Chuỗi | TK-BC-01, 03 | Ca và đối chiếu tuần đường đã có từ đợt A–E | Giữ nguyên |
| Chuỗi | TK-BC-04 | Phiếu, hạn, ảnh sau, xác nhận trên sổ | Đã implement trong code |

## 3. Chuỗi đọc

| Bước | Route phone | Ghi chú |
|------|-------------|---------|
| Ca tuần đường | `/tuan-duong` | `patrol/sessions` loại Tuần đường |
| Dòng nhật ký | `/nhat-ky/:sessionId` | Tuần kiểm chỉ xem và đối chiếu |
| Sự cố | `/van-de` | `incident/incidents` · lọc tuyến và km của đợt |
| Đợt tuần kiểm | `/tuan-kiem` · `/tuan-kiem/mo-dot` | Menu hub: Sự cố, Phiếu, Sổ. `FromKm`/`ToKm` trên đợt; đợt cũ vẫn đọc `Note` |
| Phiếu | `/phat-hien/:sessionId` | `patrol/findings` |
| Đối chiếu | `/phat-hien/:sessionId/review/:lineId` | khớp hoặc lệch |
| Xác nhận | `/phat-hien/:sessionId/:findingId` | Đạt / chưa đạt |
| Sổ | `/tuan-kiem/:sessionId/so` | Phiếu của đợt, cộng dòng nhật ký đã đối chiếu `khop`/`lech` |
| Báo cáo | `/bao-cao/tuan-kiem` · `/bao-cao/nk/tuan-kiem` | Drill về phiếu hoặc dòng sổ |

## 4. API đã có — không thêm path mới trong context này

| Việc | Path Live |
|------|-----------|
| Đợt / ca | `patrol/sessions` |
| Sự cố | `incident/incidents` |
| Phiếu, kiểm tra lại | `patrol/findings` · `…/recheck` |
| Ảnh | `files/*` |

Không thêm controller sổ. Dòng sổ là `patrol/findings` của đợt, cộng dòng đối chiếu qua `GET api/v1/patrol/sessions/{id}/reviewed-journal-lines`. Báo cáo nhật ký tuần kiểm đọc phiếu của đợt có `BookSignStatus = DaKy` và các dòng đối chiếu đó. Apply migration để sau.

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

| Id | Việc | Trạng thái |
|----|------|------------|
| GAP-TK-CTX-01 | List sự cố lọc tuyến + km đợt trên `incident/incidents` | Đã implement trong code |
| GAP-TK-CTX-02 | Bìa quyển và ký cuối tuần (`ChoKy` / `DaKy`) | Đã implement trong code |
| GAP-TK-CTX-03 | Nhật ký tuần kiểm đọc phiếu của sổ đã ký | Đã implement trong code |
| GAP-TK-CTX-04 | `FromKm` / `ToKm` trên đợt; đợt cũ vẫn fallback `Note` | Code có · apply DB bỏ qua |
| GAP-TK-CTX-05 | Hub tuần kiểm không hiện số điểm check-in | Đã implement |
| GAP-TK-CTX-06 | Apply `20261007165514_Schema_TuanKiemBook` và `20261007172920_Schema_TuanKiemJournalInspect` | Bỏ qua |
| GAP-TK-CTX-07 | Sổ cộng dòng nhật ký tuần đường đã đối chiếu khớp hoặc lệch | Đã implement trong code |
| GAP-TK-CTX-08 | Trang phải sổ hiện ảnh sau | Đã implement trong code |
| GAP-TK-CTX-09 | Trang trái sổ hiện ngày | Đã implement trong code |
