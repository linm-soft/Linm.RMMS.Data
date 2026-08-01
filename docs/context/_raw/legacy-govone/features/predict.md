# Legacy capture — `predict` (AI dự báo bảo trì)

> **Không có màn GOVOne riêng** cho AI predict (hạng mục mới P1).  
> Capture synthetized từ `features/predict.md` · `07` §8 · `15-SCREEN-AI-MAP.md` · host UX **Dashboard / Báo cáo**.  
> Source: product docs — **không** password · **không** clone skin GOVOne.

## Pages (2)

### PRIORITY LIST — AI DỰ BÁO BẢO TRÌ

- **id:** `predict-priority-list`
- **url:** (planned) `/ai-vision/predict`
- **title:** AI dự báo bảo trì — Danh sách ưu tiên
- **headings:** Bộ lọc · KPI · Priority list · Model badge

#### Labels / field captions

- Tuyến:
- Horizon (tháng):
- Top N:
- Score tối thiểu:
- Mã đoạn:
- Tên đoạn / Km:
- Thứ hạng:
- Score (0–100):
- Tuổi thọ còn lại (tháng):
- Khuyến nghị:
- Model AI:
- PCI:
- Lưu lượng:
- Vật liệu:
- Tuổi công trình (năm):
- Thời tiết (agg):
- Lịch sử SC:
- Dự báo lúc:

#### Inputs

| tag | type | name/id | placeholder |
|-----|------|---------|-------------|
| select | select-one | routeId | QL1A |
| input | number | horizonMonths | 12 |
| input | number | topN | 8 |
| input | number | scoreMin | 60 |
| input | text | sectionId | SEC-001 |
| input | text | sectionName | QL1A · Km12+000–Km12+500 |
| input | number | rank | 1 |
| input | number | score | 82 |
| input | number | remainingLifeMonths | 14 |
| select | select-one | recommend | major_rehab |
| input | text | model | gpt-4o-mini |
| input | number | pci | 48 |
| input | number | traffic | 18500 |
| select | select-one | material | BTN |
| input | number | ageYears | 9 |
| input | text | weatherAgg | mưa nhiều · nhiệt cao |
| input | text | repairHistory | 2 SC / 24 tháng |
| input | datetime-local | predictedAt | 2026-08-01T10:00 |

#### Actions / buttons (full)

| label | kind | zone | tag | disabled |
|-------|------|------|-----|----------|
| Áp dụng lọc | action | filter | button | |
| Xóa lọc | action | filter | button | |
| Làm mới danh sách | action | toolbar | button | |
| Chạy dự báo hàng loạt | create | toolbar | button | |
| Xuất Excel | export | toolbar | button | |
| Mở Dashboard | nav | toolbar | button | |
| Column picker | action | toolbar | button | |
| Sort theo score | action | toolbar | button | |
| Xem chi tiết | nav | row | button | |
| Chạy dự báo đoạn | action | row | button | |
| Ưu tiên đại tu | action | row | button | |

### SECTION DETAIL — SLIDEOUT

- **id:** `predict-section-detail`
- **url:** (planned) `/ai-vision/predict` · slideout
- **title:** Chi tiết dự báo đoạn
- **headings:** Thông tin đoạn · Drivers · Biểu đồ stub · Khuyến nghị · Lịch sử audit

#### Labels / field captions (detail)

- Mã đoạn:
- Tên đoạn / Km:
- Tuyến:
- Score (0–100):
- Horizon (tháng):
- Tuổi thọ còn lại (tháng):
- Khuyến nghị:
- Model AI:
- PCI:
- Lưu lượng:
- Vật liệu:
- Tuổi công trình (năm):
- Thời tiết (agg):
- Lịch sử SC:
- Drivers:
- Trọng số driver:
- Ghi chú khuyến nghị:
- Dự báo lúc:
- Audit At:
- Audit Score:
- Audit Model:
- Audit Raw:

#### Actions / buttons (full)

| label | kind | zone | tag | disabled |
|-------|------|------|-----|----------|
| Chạy lại dự báo | action | toolbar | button | |
| Xem lịch sử audit | action | toolbar | button | |
| Gắn kế hoạch BT | nav | footer | button | |
| Lưu ghi chú | action | footer | button | |
| Hủy thay đổi | close | footer | button | |
| Đóng | close | header | button | |
| Quay lại | nav | header | button | |
| Copy mã đoạn | action | header | button | |
| Ưu tiên đại tu | action | footer | button | |

- **actionCount:** 20 (list 11 + detail 9)
- **fieldCount:** 22
