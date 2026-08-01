# Legacy capture — `citizen` (Cổng người dân)

> **Không có màn GOVOne vision** — portal mới (P3).  
> Capture synthetized từ `RMMS` §15 · `07-TECHNICAL-IMPLEMENTATION` Hạng mục 15 · `06-SECURITY-RATELIMIT` · `01-PLATFORM-OVERVIEW`.  
> Source: product docs — **không** password · **không** clone skin GOVOne.  
> **≠** Mobile **Góp ý** nội bộ (`feedback`).

## Pages (2)

### 1) BÁO SỰ CỐ / PHẢN ÁNH HIỆN TRƯỜNG (form public)

- **id:** `citizen-report-form`
- **url:** (planned) `/citizen` · `/integration/citizen`
- **title:** Cổng người dân — Báo sự cố
- **headings:** Thông tin người báo · Vị trí hiện trường · Ảnh/Video · Gửi

#### Labels / field captions

- Mã theo dõi:
- Họ tên:
- Số điện thoại:
- Email:
- Loại sự cố:
- Mô tả / phản ánh hiện trường:
- Địa chỉ vị trí:
- Vĩ độ:
- Kinh độ:
- Tuyến đường:
- Lý trình (Km):
- Ảnh đính kèm:
- Video đính kèm:
- Thời gian báo cáo:
- OTP:
- Trạng thái xử lý:
- Nguồn:

#### Inputs

| tag | type | name/id | placeholder |
|-----|------|---------|-------------|
| input | text | trackingCode | CIT-20260801-0001 |
| input | text | reporterName | Nguyễn Văn Dân |
| input | tel | phone | 09xxxxxxxx |
| input | email | email | email@example.com |
| select | select-one | incidentType | o-ga |
| textarea | text | description | Mô tả sự cố / phản ánh hiện trường… |
| input | text | address | Địa chỉ gần đúng |
| input | number | lat | 21.0285 |
| input | number | lng | 105.8542 |
| input | text | roadName | QL1A |
| input | text | chainage | Km 12+350 |
| input | file | photos | image/* |
| input | file | videos | video/* |
| input | datetime-local | reportedAt | 2026-08-01T18:00 |
| input | text | otp | 6 số |
| select | select-one | status | draft |
| input | text | source | citizen |

#### Actions / buttons (full)

| label | kind | zone | tag | disabled |
|-------|------|------|-----|----------|
| Báo sự cố | create | host | button | |
| Gửi báo cáo | create | footer | button | |
| Lưu nháp | action | footer | button | |
| Xóa nội dung | destructive | footer | button | |
| Chọn ảnh | action | content | button | |
| Xóa ảnh | destructive | content | button | |
| Chọn video | action | content | button | |
| Xóa video | destructive | content | button | |
| Lấy vị trí GPS | action | content | button | |
| Gửi OTP | action | content | button | |
| Xác thực OTP | action | content | button | |
| Đóng | close | header | button | |
| Quay lại | nav | header | button | |
| Hủy thay đổi | close | footer | button | |

- **actionCount:** 14
- **fieldCount:** 17

### 2) THEO DÕI XỬ LÝ (tra cứu mã)

- **id:** `citizen-track-status`
- **url:** (planned) `/citizen/track`
- **title:** Theo dõi xử lý sự cố
- **headings:** Tra cứu mã · Tiến độ xử lý

#### Labels / field captions

- Mã theo dõi:
- Trạng thái xử lý:
- Thời gian cập nhật:
- Ghi chú tiến độ:

#### Actions / buttons (full)

| label | kind | zone | tag | disabled |
|-------|------|------|-----|----------|
| Theo dõi xử lý | view | host | button | |
| Tra cứu mã | filter | track | button | |
| Làm mới tra cứu | filter | track | button | |

- **actionCount:** 3 (host+track; tổng portal = 17 khi gộp host)
