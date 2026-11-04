# Plan — HDSD mobile theo vai

Ngày: 2026-10-29  
App: `MFE-Source/Linm.Web.RMMS.Mobile`  
Skill: `/gen-hdsd-rmms-page`  
Soạn: `Linm.RMMS.Data/docs/hdsd/web-m/`  
Deploy: `MFE-CORE/Linm.Web.Root/public/hdsd/`  
Giọng: `common/skill/gen-doc-hdsd/example/hdsd-voice.md`

`role_detail=gen_all` ngày 2026-10-29. Đã viết lại `docs/hdsd/web-m/index.html` và ba trang `tuan-duong`, `tuan-kiem`, `nghiem-thu`, rồi copy sang `MFE-CORE/Linm.Web.Root/public/hdsd/`.

## 1. Vai trên app

Một phiên một view. Mã view: `tuan-duong`, `tuan-kiem`, `quan-ly`.  
`nghiem-thu` và `ql-hat` trên phiên cũ gộp vào `quan-ly` (`viewRole.ts`).

| View | Vào sau đăng nhập | Tab dưới | Ô trang chủ |
|------|-------------------|----------|-------------|
| Tuần đường | `/tuan-duong` | Trang Chủ, Tuần đường, Vấn đề, Công việc, Tôi | Tuần đường, Công việc, Vấn đề, Tài sản, Lưu trữ |
| Tuần kiểm | `/tuan-kiem` | Trang Chủ, Tuần kiểm, Vấn đề, Công việc, Tôi | Tuần kiểm, Sự cố của đợt, Phiếu phát hiện, Sổ nhật ký, Công việc, Vấn đề |
| Quản lý | `/trang-chu` | Trang Chủ, Nghiệm thu, Vấn đề, Công việc, Tôi | Giám sát, Bản đồ camera, Thông tin tài sản, Công tác nghiệm thu, Giao việc, Công việc, Vấn đề |

Tuần kiểm bị đẩy khỏi `/tuan-duong`, `/nghiem-thu`, `/giam-sat`.  
Tuần đường bị đẩy khỏi `/tuan-kiem`, `/nghiem-thu`, `/giam-sat`.  
Quản lý bị đẩy khỏi hub `/tuan-duong` và `/tuan-kiem` về `/trang-chu`.

Danh sách người dùng vẫn gán vai từ chức danh (`example/role-map.md`): tuần kiểm, tuần đường hoặc tuần điện, nghiệm thu. Chức danh không chứa các cụm đó giữ **Chưa gán vai**. Tài khoản đăng nhập là số điện thoại. Plan này không sinh lại `nguoi-dung/index.html`.

Trước hub tuần đường và tuần kiểm, app có thể mở `/xac-nhan-tuyen`: tiêu đề **Xác nhận tuyến**, nút **Xác nhận**, **Thêm tuyến**. Ô **Tôi là quản lý** thì tuyến không bắt buộc.

## 2. Màn và nhãn giữ đúng UI

### Tuần đường

| Việc | Route | Nhãn trên UI |
|------|-------|----------------|
| Hub | `/tuan-duong` | Mở ca, Thêm ca, Ghi điểm tuần, Tiếp tục bản đồ, Ghi nhận hư hỏng, Lịch sử phiên, Lưu trữ. Badge Đang tuần, Xong |
| Mở ca | `/tuan-duong/mo-ca` | Tuyến, Cột KM, Khoảng cách (m), Người, Chiều, Ngày, Mở ca, Hủy. Thiếu cột KM: **Nhập cột KM từ và đến trước khi mở ca.** |
| Ghi điểm | `/tuan-duong/:id/diem-tuan` | Điểm kế hoạch, Tuyến, Tìm tuyến…, Cột KM, Khoảng cách (m), Nội dung, Chụp, Lưu, Ghi nhận điểm tuần, Hủy. Thiếu cột: **Nhập cột KM trước khi lưu** |
| Lịch sử | `/tuan-duong/lich-su` | Lọc, Áp dụng, Xóa lọc |
| Kết ca | chi tiết ca, `/tuan-duong/:id/ket-ca` | Kết thúc ca. Chỉ khi còn ca Đang tuần |
| Vấn đề | `/van-de`, `/van-de/moi` | Tạo, Ghi sự cố, Hư, Mất, Hỏng, Trao đổi, Đợi phân công giám sát, Đã đóng |

Tuần đường không có ô Giao việc, không có tab Tuần kiểm, không có Công tác nghiệm thu.

### Tuần kiểm

| Việc | Route | Nhãn trên UI |
|------|-------|----------------|
| Hub | `/tuan-kiem` | Mở đợt, Sự cố của đợt, Phiếu phát hiện, Sổ nhật ký |
| Mở đợt | `/tuan-kiem/mo-dot` | Tuyến, Cột KM và Khoảng cách (m) cho đầu đoạn và cuối đoạn, Định kỳ hoặc Đột xuất, lý do đột xuất, Người, Mở đợt. Thiếu lý trình: **Nhập cột KM từ và đến trước khi mở đợt.** |
| Phiếu | `/phat-hien/:sessionId/:findingId` | **Xác nhận đạt**, **Ghi chưa đạt** |
| Sổ | `/tuan-kiem/:sessionId/so` | Đối chiếu tuần đường: Khớp, Lệch. Ký cuối tuần: chỉ quản lý. Dòng **Chỉ quản lý ký. Tuần kiểm không ký hộ.** |
| Công việc được giao | `/cong-viec` | Cập nhật trạng thái, Hoàn thành (màn tiến độ), Trao đổi. Tình trạng: Chờ xử lý, Đang xử lý, Đã hoàn thành |

Tuần kiểm không bấm Giao việc. Giao việc nằm ở view quản lý.

### Quản lý (trang nghiệm thu)

| Việc | Route | Nhãn trên UI |
|------|-------|----------------|
| Tab | `/nghiem-thu` | Nghiệm thu. Ô trang chủ: **Công tác nghiệm thu** |
| Tìm | `/nghiem-thu` | Tìm kiếm, placeholder Mã · tuyến · hiện trường, Tạo nghiệm thu |
| Phiếu | `/nghiem-thu/moi`, `/nghiem-thu/:id` | Mẫu nghiệm thu, Tuyến, Người NT, Thời điểm NT, Hiện trường, Ghim vị trí hiện tại, Đạt, Không đạt, Không áp dụng, kết quả Đạt / Không đạt / Khấu trừ, Lưu, Lưu nháp, Huỷ, Nghiệm thu (ký) |
| Giao việc | ô **Giao việc** mở `/van-de`. Dòng vấn đề: **Giao việc**. Form việc: **Giao việc xử lý**, Người được giao việc, Thời hạn hoàn thành |
| Giám sát | `/giam-sat`, `/giam-sat/ban-do-camera`, `/giam-sat/tai-san` | Giám sát, Bản đồ camera, Thông tin tài sản |

Mười mẫu phiếu giữ bảng đang có trong `docs/hdsd/web-m/nghiem-thu/index.html`. Chấm điểm tháng 100 điểm (Thông tư 41/2024 Phụ lục IV) chỉ giữ khi bản viết lại chọn kèm mục đó. Phiếu điện thoại vẫn là Đạt / Không đạt / Khấu trừ.

## 3. Lệch bản HTML đang có

| Trang | Đang viết | Source 2026-10-29 |
|-------|-----------|-------------------|
| Tuần đường, Mở ca | Tuyến, Người, Chiều, Ngày | Thêm Cột KM và Khoảng cách (m) trước khi Mở ca |
| Tuần kiểm, Mở đợt | Ô **Từ km**, **Đến km** | Hai cặp Cột KM + Khoảng cách (m) |
| Tuần kiểm, đối chiếu | Mở mục Tuần đường, Lịch sử phiên | View tuần kiểm không ở `/tuan-duong`. Đối chiếu trên sổ: **Đối chiếu tuần đường**, Khớp / Lệch |
| Tuần kiểm, xác nhận | Trên Công việc nhấn **Hoàn thành** rồi **Đóng sự cố** | Phiếu phát hiện: **Xác nhận đạt** / **Ghi chưa đạt**. **Hoàn thành** nằm ở tiến độ công việc của người được giao |
| Tuần kiểm | Hạt trưởng bấm **Giao việc** trong cùng trang | Nút **Giao việc** thuộc view quản lý |
| Một trang `index.html`, mục Chức vụ | Bốn chức vụ, trong đó hạt trưởng là hàng riêng | Ba view. Quản lý gồm nghiệm thu, giao việc, giám sát |
| `PLAN-3-VAI.md` (2026-09-30) | App chưa lọc menu | `HomePage` và tab dưới đã lọc theo view |

Ảnh cũ trong `/hdsd/img/` dùng lại khi khung hình còn đúng nhãn. Ảnh lệch nhãn (Từ km, mở lịch sử tuần đường từ vai tuần kiểm) chụp lại trước khi gắn vào HTML.

## 4. Việc viết lại

Giữ đường dẫn:

- `{AuthorDir}/index.html` và ba trang `tuan-duong`, `tuan-kiem`, `nghiem-thu`
- Copy cùng nội dung sang `{PublicHdsd}`

| # | File | Việc |
|---|------|------|
| 1 | `web-m/index.html` | Bảng chức vụ thành 3 view. Mỗi mục trỏ trang chi tiết. Bước Mở ca và Mở đợt theo mục 2 |
| 2 | `web-m/tuan-duong/index.html` | Xác nhận tuyến khi app yêu cầu. Mở ca có lý trình. Ghi điểm, ghi hư hỏng, lịch sử, kết ca. Bỏ nút của tuần kiểm và nghiệm thu |
| 3 | `web-m/tuan-kiem/index.html` | Mở đợt bằng Cột KM. Sự cố của đợt, phiếu, sổ, Xác nhận đạt / Ghi chưa đạt. Một đoạn nêu việc đã được quản lý giao, không hướng dẫn bấm Giao việc |
| 4 | `web-m/nghiem-thu/index.html` | Tìm phiếu, lập phiếu, 10 mẫu. Thêm Giao việc và ba ô giám sát vì cùng view quản lý |
| 5 | Copy | Mỗi file ghi đủ AuthorDir và PublicHdsd |

Câu lệnh danh sách người dùng không chạy trong plan này.

## 5. Ngoài phạm vi

- Không bịa nút, không viết hộp «Không gồm».
- Không gộp tuần kiểm vào trang nghiệm thu.
- Không suy vai từ hạt trưởng, chuyên viên, gói `RMMS-TDTK` hoặc `MANAGER-RMMS` trên danh sách người dùng.
- Không ghi mật khẩu vào trang plan hoặc vào chat.
