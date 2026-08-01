# Legacy capture — `ops` (Chỉ đạo điều hành)

> **Không có màn GOVOne vision** riêng cho «Chỉ đạo điều hành».  
> GOVOne **QUẢN LÝ GIÁM SÁT** (`dbv3giamsat.aspx`) đã map slug **`patrol`** — không dùng làm skin/SSOT của `ops`.  
> Capture synthetized từ `features/ops.md` · Mobile/Web Giám sát notify · Notification MFE routes `/ops` · `15-SCREEN-AI-MAP.md`.  
> Source: product docs — **không** password · **không** clone skin GOVOne.

## Pages (3)

### INBOX CHỈ ĐẠO / THÔNG BÁO (list)

- **id:** `ops-inbox-list`
- **url:** (planned) `/ops`
- **title:** Chỉ đạo điều hành — Inbox
- **headings:** Overview · Bộ lọc · Danh sách chỉ đạo · Liên kết giám sát

#### Labels / field captions

- Mã chỉ đạo:
- Tiêu đề:
- Người gửi:
- Người nhận / đội:
- Độ ưu tiên:
- Loại chỉ đạo:
- Liên kết nguồn:
- Trạng thái:
- Thời gian gửi:
- Kênh gửi:
- Nội dung:
- Phản hồi (P2):

#### Inputs (filter + grid keys)

| tag | type | name/id | placeholder |
|-----|------|---------|-------------|
| input | search | qSearch | Mã · tiêu đề · đội… |
| select | select-one | fStatus | moi |
| select | select-one | fPriority | cao |
| select | select-one | fType | tuan-tra |
| select | select-one | fUnreadOnly | unread |

#### Actions / buttons (full)

| label | kind | zone | tag | disabled |
|-------|------|------|-----|----------|
| Làm mới | action | toolbar | button | |
| Làm mới overview | action | toolbar | button | |
| Tạo chỉ đạo | create | toolbar | button | |
| Lọc / Tìm | filter | filter | button | |
| Lọc chưa đọc | filter | filter | button | |
| Đánh dấu đã đọc | action | grid | button | |
| Đánh dấu tất cả đã đọc | action | toolbar | button | |
| Xem chi tiết | view | grid | button | |
| Giao việc | action | grid | button | P2 badge |
| Xuất inbox | export | toolbar | button | |
| Mở Giám sát | nav | toolbar | a/button | → patrol |
| Mở Bản đồ | nav | toolbar | a/button | → gis |
| Mở Sự cố | nav | toolbar | a/button | → incident |
| Command center | nav | toolbar | button | P2 badge |
| Thông báo | nav | header | button | |
| User menu | nav | header | button | |

### TẠO / CHI TIẾT CHỈ ĐẠO (Kind D slideout)

- **id:** `ops-compose-detail`
- **url:** (planned) `/ops/new` · `/ops/:id`
- **title:** Tạo / Chi tiết chỉ đạo

#### Inputs

| tag | type | name/id | placeholder |
|-----|------|---------|-------------|
| input | text | code | OPS-20260801-0001 |
| input | text | title | Điều phối tuần tra tuyến… |
| textarea | text | body | Nội dung chỉ đạo… |
| select | select-one | recipient | team-1 |
| select | select-one | priority | cao |
| select | select-one | type | tuan-tra |
| input | text | linkRef | INC-2026-0142 |
| select | select-one | status | moi |
| input | datetime-local | sentAt | 2026-08-01T09:00 |
| input | text | sender | Hạt trưởng A |
| select | select-one | channel | inbox |
| textarea | text | reply | Phản hồi thread (P2)… |

#### Actions / buttons (full)

| label | kind | zone | tag | disabled |
|-------|------|------|-----|----------|
| Gửi chỉ đạo | create | footer | button | |
| Lưu nháp | action | footer | button | |
| Xóa nội dung | destructive | footer | button | |
| Hủy thay đổi | close | footer | button | |
| Đóng | close | header | button | |
| Quay lại | nav | header | button | |
| Giao việc | action | footer | button | P2 badge |

### OVERVIEW ĐIỀU HÀNH (P1 strip · P2 hub badge)

- **id:** `ops-overview`
- **url:** (planned) `/ops` (zone overview)
- **title:** Overview điều hành

#### Labels

- Cán bộ online
- Sự cố mở
- WO đang SC
- Chưa đọc

## Totals

- **fieldCount:** 12
- **actionCount:** 22
- **pages:** 3
