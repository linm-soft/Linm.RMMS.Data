# Plan — 3 vai: tuần đường, tuần kiểm, nghiệm thu

> Ngày: 2026-09-30  
> App: `Linm.Web.RMMS.Mobile` · route public `/tuan-duong`, `/tuan-kiem`, `/nghiem-thu`  
> Nghiệp vụ: Thông tư 41/2024 Phụ lục IV · chuỗi sự cố đã chốt  
> Peer: [`IMPLEMENT-SCREENS.md`](IMPLEMENT-SCREENS.md) · [`GAP-TUAN-DUONG-TUAN-KIEM.md`](GAP-TUAN-DUONG-TUAN-KIEM.md) · HDSD `/hdsd/tuan-duong/` · `/hdsd/tuan-kiem/` · `/hdsd/nghiem-thu/`

Ba vai dùng ba cụm màn. Không gộp tuần kiểm vào tuần đường. Không gộp nghiệm thu vào tuần kiểm. Giao việc là quyền riêng package `QL_HAT` của hạt trưởng và hạt phó, không phải ô thứ tư của tuần đường.

## Chuỗi sự cố

| Bước | Vai | Việc | Màn đang có |
|------|-----|------|-------------|
| 1 | Tuần đường | Phát hiện, ghi sự cố, xử lý tại chỗ nếu làm được | `/van-de/moi` · `/tuan-duong/:id/diem-tuan` · `/nhat-ky/:sessionId/moi` |
| 2 | Hạt trưởng, hạt phó (`QL_HAT`) | Xem mọi sự cố và báo cáo, giao việc, ghi người nhận và thời hạn | Chi tiết sự cố, nút **Giao việc xử lý** |
| 3 | Tuần kiểm | Kiểm tra lại. Đạt thì xác nhận. Chưa đạt thì giữ việc | `/phat-hien/:sessionId/:findingId` nút **Xác nhận đạt** / **Ghi chưa đạt** |
| 4 | Nghiệm thu | Phiếu hiện trường và chấm điểm kỳ | `/nghiem-thu` · `/nghiem-thu/moi` |

Tuần đường không có nút giao việc. Tuần kiểm không có nút giao việc. Nghiệm thu không mở ca tuần đường và không xác nhận hoàn thành sự cố.

## Thời hạn khắc phục

Hạt trưởng ghi hạn lúc giao việc. Tuần kiểm lấy hạn đó khi xác nhận. Nguồn: Thông tư 41/2024, Phụ lục IV.

| Hạng mục | Thời hạn |
|----------|----------|
| Vá ổ gà | 3 ngày cấp I, II. 5 ngày cấp III–VI. Tính từ khi xuất hiện |
| Nứt dọc, nứt ngang, nứt mai rùa | 7 ngày mùa mưa. 14 ngày mùa khô |
| Lún lõm, sình lún vượt mức | 10 ngày. Không tính ngày mưa, mặt đường ẩm |
| Vệ sinh mặt đường, chướng ngại mất an toàn | 1 giờ nếu nguy hiểm. 7 ngày phần còn lại |
| Nước đọng mặt đường | Không quá 24 giờ |
| Biển cấm, biển hiệu lệnh | 1 ngày sau khi phát hiện. Biển còn lại 3 ngày |
| Vạch sơn hư cục bộ | 28 ngày |
| Tồn tại lúc nghiệm thu | Tối đa 5 ngày kể từ văn bản yêu cầu. Tuần kiểm xác nhận khắc phục |

Trên phiếu phát hiện, field `dueAt` đã có (`FindingFormPage`, bắt buộc khi phạm vi `bdtx`). Chưa có catalog hạn theo hạng mục: người giao đang nhập tay.

## Công thức điểm và trừ điểm

Khung 100 điểm cho cả gói. Hợp đồng nhiều việc có thể dùng khung 1.000 điểm.

Không ưu tiên:

`Điểm việc = 100 × (dự toán việc / tổng dự toán gói)`

Ví dụ Thông tư: gói 500 triệu, vá ổ gà 200 triệu = 40 điểm.

Có ưu tiên, hệ số do người duyệt hồ sơ mời thầu chọn:

| Nhóm | Việc | Hệ số |
|------|------|-------|
| Ưu tiên 1 | Vá ổ gà, trám nứt, lún lõm mặt, mặt cầu, khe co giãn, hầm, giám sát điều hành cao tốc | 1,5 đến 2 |
| Ưu tiên 2 | Nạo vét, cống rãnh, ATGT, lề, nền, hành lang, đấu nối trái phép | 1,25 đến 1,5 |
| Còn lại | Tuần đường, cắt cỏ, việc khác | 1 |

Công thức Thông tư: `100 × (hệ số × dự toán việc / TL)`.

Bản trích `docs/plan/nghiem-thu-mau/extract/tt41-2024-phuluc-iv-mau-01.md` dừng giữa công thức này. Chưa có định nghĩa TL. Chưa có Mục IV cách tính số tiền khấu trừ theo ngày quá hạn. App không được tự đặt tỷ lệ trừ theo ngày. Khi có đủ Mục IV, mới thêm màn chấm kỳ. Phiếu điện thoại giữ Đạt / Không đạt / Khấu trừ.

Điểm tháng = trung bình cộng điểm các thành viên. Bên A và tư vấn giám sát chiếm không ít hơn 2/3 số thành viên.

## Match source

App chưa lọc menu theo vai. `HomePage` và `PatrolHubPage` hiện cùng một lưới cho mọi tài khoản. Không có `jobTitle` / `packageCode` trên client.

| Route | File | Vai đúng | Ghi chú source |
|-------|------|----------|----------------|
| `/trang-chu` | `WebRmmsHome/HomePage.tsx` | Cả ba, nhưng phải lọc ô | Có Tuần đường, Công việc, Vấn đề, Công tác nghiệm thu. Không có ô Tuần kiểm |
| `/tuan-duong` | `PatrolHubPage.tsx` | Tuần đường | Mở ca, ghi điểm, lịch sử. Thao tác nhanh vẫn có Công tác nghiệm thu và Giám sát |
| `/tuan-duong/mo-ca` | `OpenPatrolPage.tsx` | Tuần đường | Tuyến, Chiều, Người, Ngày. Loại Tuần đường · Đang tuần |
| `/tuan-duong/:id` | `PatrolDetailPage.tsx` | Tuần đường | Kết thúc ca |
| `/tuan-duong/:id/diem-tuan` | check-in sheet | Tuần đường | Ghi điểm tuần |
| `/tuan-duong/:id/ket-ca` | `CloseSessionPage` | Tuần đường | Kết ca |
| `/nhat-ky/:sessionId` | `JournalListPage` / `JournalFormPage` | Tuần đường ghi, tuần kiểm chỉ xem | Báo tuần kiểm = cờ, chưa tạo phiếu |
| `/tuan-kiem` | `InspectHubPage.tsx` | Tuần kiểm | Đợt đang kiểm, Phiếu phát hiện, Sổ kiến nghị. Không có trên lưới trang chủ |
| `/tuan-kiem/mo-dot` | `OpenInspectPage.tsx` | Tuần kiểm | Tuyến, Từ km, Đến km, Định kỳ/Đột xuất |
| `/phat-hien/:sessionId` | `FindingListPage` | Tuần kiểm | Mở từ hub tuần kiểm |
| `/phat-hien/:sessionId/moi` | `FindingFormPage.tsx` | Tuần kiểm lập phiếu | `dueAt` khi `bdtx`. Nguồn gồm `tuan-duong` |
| `/phat-hien/:sessionId/review/:lineId` | `JournalReviewPage` | Tuần kiểm | Đối chiếu dòng nhật ký |
| `/phat-hien/:sessionId/:findingId` | `FindingDetailPage.tsx` | Tuần kiểm xác nhận | **Xác nhận đạt** / **Ghi chưa đạt**. Phản hồi BDTX là form khác trên cùng trang |
| `/van-de` | `IncidentListPage.tsx` | Tuần đường tạo. Hạt trưởng giao | Icon **Giao việc** → `paths.workFor` |
| `/van-de/moi` | `IncidentCreatePage.tsx` | Tuần đường | Ghi sự cố |
| `/cong-viec` | `WorkListPage.tsx` | Đơn vị được giao. Tuần kiểm theo dõi | Hub tiêu đề Giao việc xử lý. Không phải màn xác nhận của tuần kiểm |
| `/cong-viec/tien-do` | `MntProgressPage` | Đơn vị được giao | Cập nhật trạng thái |
| `/uoc-luong` | `EstimateFormPage.tsx` | Hạt trưởng | Nút **Giao việc** tạo work order |
| `/nghiem-thu` | `NghiemThuListPage.tsx` | Nghiệm thu | Tìm phiếu |
| `/nghiem-thu/moi` · `/:id` | `NghiemThuFormPage.tsx` | Nghiệm thu | Mẫu, kết quả `pass` / `fail` / `deduct`, hạng mục Đạt / Không đạt / Không áp dụng |
| `/tan-suat` | `FrequencyPlanListPage` | Tuần kiểm | Kế hoạch tần suất, đợt E |
| `/kien-nghi` | `PetitionListPage` | Tuần kiểm | Việc vượt BDTX |
| `/giam-sat` | `SuperviseListPage` | Hạt trưởng xem điểm tuần | Không phải sổ tuần kiểm, không giao việc |

Shell (`WebRmmsShellLayout`) gom `/tuan-kiem`, `/phat-hien`, `/nhat-ky`, `/nghiem-thu` vào tab Tuần đường. Tab không đổi theo vai.

## View từng vai

### Tuần đường

Thấy:

- `/tuan-duong`, mở ca, điểm tuần, kết ca, lịch sử, bản đồ ca, camera tuần
- `/nhat-ky` để ghi dòng trong ca
- `/van-de/moi` và danh sách vấn đề do mình ghi
- Trao đổi trên vấn đề của mình

Không thấy:

- Nút **Giao việc** trên `/van-de` và `/uoc-luong`
- `/tuan-kiem`, `/phat-hien` (lập phiếu, xác nhận đạt)
- `/nghiem-thu/moi`
- `/kien-nghi/moi`

### Tuần kiểm

Thấy:

- Ô **Tuần kiểm** trên trang chủ, vào `/tuan-kiem`
- Mở đợt, danh sách phát hiện, đối chiếu nhật ký `/phat-hien/:sessionId/review/:lineId`
- Chi tiết phiếu: hạn, ảnh, **Xác nhận đạt**, **Ghi chưa đạt**
- `/tan-suat`, `/kien-nghi`
- Xem ca tuần đường và vấn đề cùng tuyến, không sửa diễn biến tuần đường

Không thấy:

- Mở ca tuần đường
- **Giao việc**
- Tạo phiếu nghiệm thu

### Công tác nghiệm thu

Thấy:

- Ô **Công tác nghiệm thu** → `/nghiem-thu`, `/nghiem-thu/moi`, `/nghiem-thu/:id`
- Mẫu 01–10, kết quả Đạt / Không đạt / Khấu trừ, hạng mục Đạt / Không đạt / Không áp dụng
- Xem nhật ký tuần đường và phiếu phát hiện đã **Xác nhận đạt** để đối chiếu, chỉ đọc

Không thấy:

- Mở ca, mở đợt
- Giao việc
- Xác nhận đạt trên phiếu phát hiện

Chấm 100 điểm và tiền khấu trừ Mục IV để sau, khi bản trích đủ TL và Mục IV. Không nhét vào form Tạo nghiệm thu (`CHI-SO.md`).

### Giao việc riêng, package QL_HAT

Chức danh: Hạt trưởng, Hạt phó, P Hạt trưởng. Seed hiện gắn `HAT-TRUONG` và `HAT-PHO` vào `MANAGER-RMMS`. Khi làm, hai mã này chuyển sang package `QL_HAT`. Đội trưởng và trưởng văn phòng giữ `MANAGER-RMMS`.

`QL_HAT` xem mọi sự cố và mọi báo cáo ca, không lọc theo người tạo. Giao từ sự cố hoặc từ báo cáo. Chức danh còn có tuần đường thì vẫn thấy hub tuần đường.

Giao diện theo `incident-detail.md` (`DES-MOB-INC-DETAIL`): màn đầy đủ, không slideout.

| Vùng | Nội dung |
|------|----------|
| Danh sách | Mọi sự cố `/van-de` và báo cáo ca `/tuan-duong/lich-su`. Lọc tuyến, loại, trạng thái, mức |
| Đầu trang chi tiết | Mã. Mức và trạng thái |
| Dòng chỉ đọc | Loại, vị trí, lý trình, định vị. Không sửa tọa độ, không xóa phiếu |
| Nút chính | **Giao việc xử lý** |
| Nút phụ | Xem trên bản đồ. Không có Đóng sự cố |
| Form giao | Nguồn sự cố hoặc báo cáo, người nhận, đơn vị, hạng mục, hạn gợi ý, ghi chú |
| Sau giao | Tạo công việc. Sự cố rời trạng thái Đợi phân công giám sát |
| Đã giao | `/cong-viec`. Theo dõi. Không bấm Hoàn thành hộ đơn vị |

| Ô form | Source hiện tại | Làm mới |
|--------|-----------------|---------|
| Người nhận | `AssigneeName` | Bắt buộc |
| Đơn vị | `TeamName` | Đơn vị bảo dưỡng |
| Hạn `DueAt` | Nhập tay | Gợi ý theo bảng Thông tư 41, sửa được trước khi giao |
| `SlaHours` | SCREENS mặc định 24 giờ | Bỏ 24 giờ. SLA bằng hạn vừa chốt |

Nút **Giao việc xử lý** chỉ package `QL_HAT` thấy. Không xác nhận hoàn thành, không lập phiếu nghiệm thu.

### Công thức chấm điểm đang có

Nguồn: Thông tư 41/2024, Phụ lục IV, Mục II và Mục III, file `docs/plan/nghiem-thu-mau/extract/tt41-2024-phuluc-iv-mau-01.md`. Bản trích dừng ở điểm nhóm A. Chưa có định nghĩa TL, chưa có điểm nhóm B và C, chưa có Mục IV tính tiền.

| Quy định | Cách làm |
|----------|----------|
| Kỳ | Tháng hoặc quý, theo hợp đồng |
| Thành phần | Bên A chủ trì. Bên A và tư vấn giám sát, nếu có, không ít hơn 2/3 |
| Điểm tháng | Trung bình cộng điểm các thành viên |
| Khung | 100 điểm cả gói. Nhiều việc thì khung 1.000, thay 100 bằng 1.000 |
| Không khấu trừ | Thanh toán 100% giá trị dự toán của kỳ |
| Có khấu trừ | Trừ phần tương ứng số điểm được nghiệm thu. Cách ra số tiền ở Mục IV, bản trích chưa có |
| Tồn tại | Khắc phục tối đa 5 ngày kể từ văn bản yêu cầu |

Không ưu tiên: `Ni = 100 × (Di / TD)`. Ni là điểm việc i. Di là dự toán việc. TD là tổng dự toán các việc bảo trì theo chất lượng trong gói.

Ví dụ gói 500 triệu: vá ổ gà 200 triệu = 40 điểm. Mặt cầu khe co giãn 100 triệu = 20. Nạo vét 100 triệu = 20. Cắt cỏ 100 triệu = 20. Cộng 100.

Có ưu tiên. Hệ số do người duyệt hồ sơ mời thầu chọn.

| Nhóm | Việc | Hệ số |
|------|------|-------|
| A | Vá ổ gà, trám nứt, lún lõm mặt, giám sát điều hành cao tốc, mặt cầu, khe co giãn, vệ sinh hầm, thiết bị hầm | Kai từ 1,5 đến 2 |
| B | Nạo vét, khơi thông cống rãnh, an toàn giao thông, lề, nền, vi phạm hành lang, đấu nối trái phép | Kbi từ 1,25 đến 1,5 |
| C | Tuần đường, cắt cỏ và việc còn lại | Kci = 1 |

Điểm nhóm A trong bản trích: `100 × (Kai × DAi / TL)`. Nhóm B và C cùng mẫu số TL, file trích chưa có.

### Tuần kiểm đánh giá SLA

Hạn lấy từ lần giao việc. Tuần kiểm không đặt hạn thứ hai. Trên `/phat-hien/:sessionId/:findingId`:

| Kết quả việc | So với hạn | Ghi phiếu |
|--------------|------------|-----------|
| Xác nhận đạt | Trước hoặc đúng hạn | Đạt, Trong hạn |
| Xác nhận đạt | Sau hạn | Đạt, Quá hạn |
| Ghi chưa đạt | Còn hạn | Chưa đạt, giữ việc, hạn cũ |
| Ghi chưa đạt | Đã quá hạn | Chưa đạt, Quá hạn. Hạt trưởng giao lại nếu cần hạn mới |

Quá hạn là đánh giá SLA, chưa tính tiền. Mục IV chưa có trong bản trích.

## Plan thực hiện

Làm trên route đã có. Không thêm host, không thêm tab thứ tư.

| # | Việc | File | Xong khi |
|---|------|------|----------|
| 1 | Package `QL_HAT` cho `HAT-TRUONG` và `HAT-PHO`. Vai còn lại vẫn theo chức danh: `tuan-duong`, `tuan-kiem`, `nghiem-thu` | Job title catalog + profile sau login | `QL_HAT` thấy mọi sự cố và báo cáo. Không suy giao việc từ `MANAGER-RMMS` |
| 2 | Lưới trang chủ theo vai | `HomePage.tsx` | Tuần đường không thấy ô nghiệm thu. Tuần kiểm thấy ô Tuần kiểm tới `/tuan-kiem`. Nghiệm thu chỉ thấy Công tác nghiệm thu và xem vấn đề |
| 3 | Thao tác nhanh hub tuần đường | `PatrolHubPage.tsx` | Bỏ Công tác nghiệm thu khỏi hub tuần đường. Tuần kiểm không vào hub này |
| 4 | Nút **Giao việc xử lý** chỉ `QL_HAT` | Chi tiết sự cố và báo cáo ca | Tuần đường, tuần kiểm, nghiệm thu không thấy. Danh sách không lọc theo người tạo |
| 5 | Hạn gợi ý | `FindingFormPage` và form giao việc | Chọn hạng mục thì điền `dueAt` theo bảng thời hạn. Người giao sửa được. Không tự tính tiền trừ |
| 6 | Xác nhận chỉ tuần kiểm | `FindingDetailPage.tsx` | **Xác nhận đạt** / **Ghi chưa đạt** chỉ vai tuần kiểm. Quá `dueAt` thì hiện nhãn quá hạn, chưa trừ điểm |
| 7 | Nghiệm thu chỉ đọc chuỗi trước | `NghiemThuFormPage.tsx` | Link sang ca tuần đường và phiếu phát hiện đã xác nhận. Không nút Hoàn thành, không nút Giao việc |
| 8 | Tab shell | `WebRmmsShellLayout.tsx` | Tab nổi bật theo vai đang mở: tuần đường, vấn đề, công việc, nghiệm thu. `/tuan-kiem` và `/phat-hien` không thắp tab Tuần đường khi vai là tuần kiểm |
| 9 | Chấm kỳ | Chưa làm | Dừng đến khi hồ sơ có TL và Mục IV. Sau đó màn riêng, không sửa form phiếu hiện trường |

## List enqueue — form camera theo tài khoản

Mọi form dưới đây đã có `RouteCaptureControl`. `changeScope=edit_page`. MFE `Linm.Web.RMMS.Mobile`. Không thêm route. Tài khoản sau login chỉ thấy nghiệp vụ của vai đó trên đúng form.

| # | Slug | Form camera | Tài khoản |
|---|------|-------------|-----------|
| 1 | `web-rmms-role-gate` | Profile sau login | `QL_HAT` = `HAT-TRUONG`, `HAT-PHO`. Còn lại theo chức danh: tuần đường, tuần kiểm, nghiệm thu |
| 2 | `web-rmms-cam-checkin` | `CheckInSheet`, `PatrolDetailPage` | Tuần đường chụp và ghi điểm tuần. `QL_HAT` xem. Tuần kiểm và nghiệm thu không mở ca |
| 3 | `web-rmms-cam-journal` | `JournalFormPage` | Tuần đường ghi nhật ký và ảnh. Vai khác không tạo dòng |
| 4 | `web-rmms-cam-incident` | `IncidentCaptureSheet`, `IncidentDetailPage` | Tuần đường tạo sự cố và ảnh. `QL_HAT` xem mọi sự cố, nút **Giao việc xử lý**. Tuần kiểm xem, không giao. Nghiệm thu chỉ xem |
| 5 | `web-rmms-cam-finding` | `FindingFormPage`, `FindingDetailPage` | Tuần kiểm lập phiếu, ảnh, **Xác nhận đạt** / **Ghi chưa đạt**, nhãn Trong hạn hoặc Quá hạn. Không nút giao việc |
| 6 | `web-rmms-cam-nghiem-thu` | `NghiemThuFormPage` | Nghiệm thu lập phiếu và ảnh. Không giao việc, không xác nhận hoàn thành sự cố |
| 7 | `web-rmms-cam-home` | `HomePage`, `PatrolHubPage`, `WebRmmsShellLayout` | Ô và tab theo vai. Hub tuần đường không có Công tác nghiệm thu |
| 8 | `web-rmms-giao-viec-ql-hat` | Form giao trên chi tiết sự cố và báo cáo ca | Chỉ `QL_HAT`. Người nhận, đơn vị, hạng mục, hạn gợi ý Phụ lục IV. Bỏ hạn 24 giờ |

Slug 9 chấm tiền Mục IV không vào queue.

## Không làm trong đợt này

- Tự đặt công thức tiền trừ theo ngày.
- Màn chấm 100 điểm trên điện thoại.
- Gộp **Xác nhận đạt** vào nút **Hoàn thành** của `/cong-viec`. Hai nút hai việc: Hoàn thành là đơn vị được giao báo xong, Xác nhận đạt là tuần kiểm đóng chuỗi.
- Đổi route public đã ship.
