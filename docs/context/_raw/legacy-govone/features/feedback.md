# Legacy capture — `feedback` (Góp ý phần mềm)

> **Không có màn GOVOne vision** riêng cho Mobile **Góp ý**.  
> Capture synthetized từ `Hướng dẫn sử dụng` § Góp ý · `features/feedback.md` · `15-SCREEN-AI-MAP.md`.  
> Source: product docs — **không** password · **không** clone skin GOVOne.  
> **≠** Cổng người dân (`citizen`).

## Pages (1)

### GÓP Ý PHẦN MỀM (form gửi)

- **id:** `feedback-send-form`
- **url:** (planned) `/integration/feedback`
- **title:** Góp ý phần mềm
- **headings:** Thông tin người gửi · Nội dung góp ý · Gửi

#### Labels / field captions

- Mã góp ý:
- Người gửi:
- Vai trò:
- Thời gian:
- Loại góp ý:
- Nội dung cần góp ý:
- Trạng thái:

#### Inputs

| tag | type | name/id | placeholder |
|-----|------|---------|-------------|
| input | text | feedbackCode | FB-20260801-0001 |
| input | text | senderName | Nguyễn Văn A |
| select | select-one | senderRole | tuan-duong |
| input | datetime-local | sentAt | 2026-08-01T18:00 |
| select | select-one | category | de-xuat |
| textarea | text | body | Nội dung cần góp ý… |
| select | select-one | status | draft |

#### Actions / buttons (full)

| label | kind | zone | tag | disabled |
|-------|------|------|-----|----------|
| Mở góp ý | create | host | button | |
| Gửi góp ý của bạn | create | footer | button | |
| Lưu nháp | action | footer | button | |
| Xóa nội dung | destructive | footer | button | |
| Đóng | close | header | button | |
| Quay lại | nav | header | button | |
| Hủy thay đổi | close | footer | button | |

- **actionCount:** 7
- **fieldCount:** 7
