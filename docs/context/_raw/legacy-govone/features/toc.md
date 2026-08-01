# Legacy capture — `toc` (Trung tâm điều hành giao thông)

> **Không có màn GOVOne vision** riêng cho «Trung tâm ĐH GT».  
> Module mới P3 — OUT P1–P2 (`09` · `15-SCREEN-AI-MAP` #14).  
> Capture synthetized từ `07-TECHNICAL-IMPLEMENTATION.md` § Hạng mục 14 · `01-PLATFORM-OVERVIEW` Traffic Management Center.  
> Source: product docs — **không** password · **không** clone skin GOVOne.

## Pages (3)

### DANH SÁCH SỰ KIỆN GT / AI DETECTION (list)

- **id:** `toc-event-list`
- **url:** (planned) `/toc`
- **title:** Trung tâm ĐH GT — Sự kiện
- **headings:** Overview KPI · Bộ lọc · Danh sách sự kiện · Liên kết GIS / Incident

#### Labels / field captions

- Mã sự kiện:
- Loại phát hiện:
- Mức độ:
- Camera nguồn:
- Tuyến / đoạn:
- Km / marker:
- Lat:
- Lng:
- Thời điểm phát hiện:
- Độ tin cậy AI (%):
- Trạng thái:
- Biển số:
- Hướng làn:
- Tốc độ TB (km/h):
- VMS đích:
- Thông điệp VMS:
- Tốc độ giới hạn động:
- Incident ref:
- Operator:
- Ghi chú:
- Stream URL:
- Frame key:
- Thời gian đóng:

#### Inputs (filter + grid keys)

| tag | type | name/id | placeholder |
|-----|------|---------|-------------|
| input | search | qSearch | Mã · camera · tuyến… |
| select | select-one | fType | un-tac |
| select | select-one | fSeverity | cao |
| select | select-one | fStatus | moi |
| select | select-one | fCamera | cam-ql1a-12 |

#### Actions / buttons (full)

| label | kind | zone | tag | disabled |
|-------|------|------|-----|----------|
| Làm mới | action | toolbar | button | |
| Làm mới KPI | action | toolbar | button | |
| Tạo sự kiện thủ công | create | toolbar | button | |
| Lọc / Tìm | filter | filter | button | |
| Xem chi tiết | view | grid | button | |
| Sửa | action | grid | button | |
| Xóa | destructive | grid | button | |
| Xác nhận AI | action | grid | button | |
| False positive | action | grid | button | |
| Gửi sự cố | action | grid | button | |
| Gửi lệnh VMS | action | grid/footer | button | |
| Đặt tốc độ động | action | grid/footer | button | |
| Mở camera wall | view | toolbar | button | P3 |
| Mở GIS | nav | toolbar | a/button | → gis |
| Mở Sự cố | nav | toolbar | a/button | → incident |
| Xuất Excel | export | toolbar | button | |
| User menu | nav | header | button | |

### CHI TIẾT / TẠO SỰ KIỆN + VMS (Kind D slideout)

- **id:** `toc-event-form`
- **url:** (planned) `/toc/new` · `/toc/:id`
- **title:** Chi tiết sự kiện GT / lệnh VMS

#### Inputs

| tag | type | name/id | placeholder |
|-----|------|---------|-------------|
| input | text | code | TOC-20260801-0001 |
| select | select-one | detectType | un-tac |
| select | select-one | severity | cao |
| select | select-one | camera | cam-ql1a-12 |
| input | text | road | QL1A Km40–Km42 |
| input | text | marker | Km41+200 |
| input | number | lat | 10.8231 |
| input | number | lng | 106.6297 |
| input | datetime-local | detectedAt | |
| input | number | confidence | 92 |
| select | select-one | status | moi |
| input | text | plate | 51A-123.45 |
| select | select-one | laneDir | bac-nam |
| input | number | avgSpeed | 18 |
| select | select-one | vmsTarget | vms-ql1a-04 |
| input | text | vmsMessage | ÙN TẮC — GIẢM TỐC |
| input | number | dynamicSpeed | 40 |
| input | text | incidentRef | INC-2026-0142 |
| input | text | operator | Điều hành viên A |
| textarea | text | note | Ghi chú… |
| input | text | streamUrl | rtsp://… (stub) |
| input | text | frameKey | toc/frames/… |
| input | datetime-local | closedAt | |
| select | select-one | vmsBoard (line) | vms-ql1a-04 |
| input | text | vmsLineMsg (line) | Thông điệp |
| select | select-one | vmsLineStatus (line) | cho |

#### Actions / buttons (full)

| label | kind | zone | tag | disabled |
|-------|------|------|-----|----------|
| Lưu | create | footer | button | |
| Lưu nháp | action | footer | button | |
| Đóng sự kiện | action | footer | button | |
| Thêm lệnh VMS | create | lines | button | |
| Xóa lệnh VMS | destructive | lines | button | |
| Hủy thay đổi | close | footer | button | |
| Đóng | close | header | button | |
| Quay lại | nav | header | button | |

### CAMERA WALL / STREAM STUB (modal)

- **id:** `toc-camera-wall`
- **title:** Camera wall stub (P3)
- **Actions:** Đóng

## Summary

- **actionCount:** 25
- **fieldCount:** 26
- **pages:** 3

## Migration notes

- Map fields/actions → control-map modern MFE · erp-form-context Kind B+D + camera wall stub.
- Detection → Incident · VMS Open API partner · ITS adapter (Integration) — demo mock only.
- Demo: same fields · Linm shell — **cấm** clone skin GOVOne · **cấm** BE.
)
