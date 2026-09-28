# RMMS mobile chat shell — SSOT chrome

Shared phone chat chrome for **sự cố** and **công việc**. API and slug stay on each feature. This file is the chrome contract only.

| | Sự cố | Công việc |
|--|--|--|
| Slug | `web-rmms-incident-chat` | `web-rmms-mnt-chat` |
| Route | `/van-de/trao-doi` | `/cong-viec/trao-doi` |
| Frame | `#sc-incident-chat` | `#sc-mnt-chat` |
| Context | `web-rmms-incident-chat.md` | `web-rmms-mnt-chat.md` |
| Messages | `incident/incidents/{id}/messages` | `maintenance/work-orders/{id}/messages` |

## Code

`Linm.Web.RMMS.Mobile/src/shared/chat/`

| File | Việc |
|------|------|
| `LinmChatComposer.tsx` | Enter gửi · Ctrl/Cmd+Enter xuống dòng · Enter đang gõ IME không gửi |
| `LinmChatThread.tsx` | Bubble · cuộn trong pane · ghim tin mới |
| `chatShell.module.css` | Header ghim · pane giữa · composer đáy |
| `routes.ts` | `isRmmsChatPath` — shell khóa cuộn body |
| `../device/chatKeyboard.ts` | Bàn phím mở → thu khung vào visual viewport · ẩn footer |

Mỗi màn giữ lookup, API, và TopBar. Cả hai bọc nội dung trong `.threadPane` (loading / empty / thread) và để composer ngoài pane.

## Chrome

1. Ô nhập luôn ở đáy khung, dưới vùng tin.
2. Enter gửi. Ctrl+Enter hoặc Cmd+Enter xuống dòng.
3. Bàn phím mở: ẩn tab footer. Header giữ trên cùng.
4. Tin nhắn chỉ cuộn giữa header và ô nhập.
