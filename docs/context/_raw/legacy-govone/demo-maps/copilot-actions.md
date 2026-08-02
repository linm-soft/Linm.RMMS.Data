# Actions — `copilot` (synthetic)

| # | Action | Zone | Result (demo mock) |
|---|--------|------|-------------------|
| 1 | Mở Copilot | host | Open Kind D drawer |
| 2 | Đóng drawer | header | Close · leave-confirm nếu nháp |
| 3 | Phiên mới | toolbar | Create SES-* · empty messages + prompts |
| 4 | Chọn phiên | list | Load messages from session |
| 5 | Gửi | composer | Append user + assistant mock (delay) · tokens++ |
| 6–10 | Prompt gợi ý ×5 | prompts | Fill input / send canned NL answer |
| 11 | Thumb up | message | feedback=up toast · POST mock |
| 12 | Thumb down | message | modal note · feedback=down |
| 13 | Copy trả lời | message | clipboard toast |
| 14 | Xuất hội thoại | toolbar | export stub toast |
| 15 | Xóa phiên | toolbar | confirm → remove session |
| 16 | Lưu trữ phiên | toolbar | status=archived |
| 17 | Làm mới lịch sử | toolbar | re-render sessions |
| 18 | Chuyển P2 RAG | toolbar | engine P2 · disclaimer still |
| 19 | Escalate GPT-4o | composer | model=4o badge · cost note |
| 20 | Sinh biểu đồ | message | show chart card from JSON stub |
| 21 | Xem citation | message | toast domain link |
| 22 | Reset seed | host | localStorage reseed |
| 23 | Rate-limit info | header | toast remaining req |
| 24 | Lưu nháp message | composer | localStorage draft |

**Count:** 24 actions · parity control-map.
