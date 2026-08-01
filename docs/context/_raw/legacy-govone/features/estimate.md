# Legacy capture — `estimate` (AI ước lượng sửa chữa)

> **Không có màn GOVOne riêng** cho AI estimate (hạng mục mới P1).  
> Capture synthetized từ `features/estimate.md` · `07` §10 · `15-SCREEN-AI-MAP.md` · host UX **Công việc / Sự cố**.  
> Source: product docs — **không** password · **không** clone skin GOVOne.

## Pages (1)

### AI ƯỚC LƯỢNG SỬA CHỮA (panel trên Công việc / Sự cố)

- **id:** `estimate-panel-ai`
- **url:** (planned) `/ai-vision/estimate` · host panel Công việc / chi tiết Sự cố
- **title:** AI ước lượng sửa chữa
- **headings:** Nguồn · Thông tin ước lượng · Bảng khối lượng · Nhân công & thiết bị · Tổng chi phí

#### Labels / field captions

- Mã ước lượng:
- Sự cố / Vấn đề:
- Nguồn (detection / sự cố):
- Detection IDs:
- Tuyến / đoạn:
- Loại hư hỏng:
- Diện tích (m²):
- Mức độ:
- Model AI:
- Giờ nhân công:
- Thiết bị:
- Thời gian thi công (ngày):
- Tổng chi phí (VND):
- Trạng thái:
- Hạng mục (dòng):
- Khối lượng:
- Đơn vị:
- Đơn giá:
- Thành tiền:
- Ghi chú dòng:

#### Inputs

| tag | type | name/id | placeholder |
|-----|------|---------|-------------|
| input | text | estimateCode | EST-20260801-0001 |
| select | select-one | incidentId | Chọn sự cố |
| select | select-one | sourceType | from-incident |
| input | text | detectionIds | DET-901, DET-902 |
| input | text | routeSection | QL1A · Km12+100 |
| select | select-one | defectType | Ổ gà |
| input | number | defectArea | 12.5 |
| select | select-one | severity | Critical |
| input | text | model | gpt-4o |
| input | number | laborHours | 16 |
| input | text | equipment | lu, máy cắt |
| input | number | durationDays | 2 |
| input | number | totalAmount | 5625000 |
| select | select-one | status | draft |
| input | text | lineItem | BTN |
| input | number | lineQty | 12.5 |
| input | text | lineUnit | m2 |
| input | number | lineUnitPrice | 450000 |
| input | number | lineAmount | 5625000 |
| textarea | text | lineNote | Vá ổ gà |

#### Actions / buttons (full)

| label | kind | zone | tag | disabled |
|-------|------|------|-----|----------|
| AI ước lượng từ sự cố | create | toolbar | button | |
| AI ước lượng từ detections | create | toolbar | button | |
| Chạy lại ước lượng | action | toolbar | button | |
| Thêm dòng | create | lines | button | |
| Xóa dòng | destructive | lines | button | |
| Sửa dòng | action | lines | button | |
| Xác nhận số liệu | action | footer | button | |
| Lưu nháp | action | footer | button | |
| Gắn Công việc | nav | footer | button | |
| Xuất Excel | export | toolbar | button | |
| Đóng | close | header | button | |
| Quay lại | nav | header | button | |
| Hủy thay đổi | close | footer | button | |

- **actionCount:** 13
- **fieldCount:** 20
