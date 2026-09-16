# PO — Requirement — mnt-chat

| Field | Value |
|-------|-------|
| feature | `mnt-chat` |
| thisAction | **Trao đổi công việc** · entry `mnt-list` `#i-chat` |
| changeScope | `edit_page` |
| packKind | `screen` |
| stack | `native_dual` |
| status | **confirmed** |
| updatedAt | `2026-09-16T14:25:00.000Z` |

## Goal

Thay toast «Trao đổi công việc» bằng màn chat style: bubble + composer gửi tin qua Message contract trên work-order.

## Device AC

1. Tap `#i-chat` trên card → `#sc-mnt-chat` (không toast).  
2. Thread empty copy `mnt.chat.empty` khi chưa có tin.  
3. Gửi → bubble mine xuất hiện · POST `…/work-orders/{id}/messages`.  
4. Live WO: GET load lịch sử. Demo id: composer local fallback (không fake «Đã gửi» toast).  
5. Back → list. Dual iOS + Android.  
6. **1 header** trên `#sc-mnt-chat`: chỉ `LinmTopBar` (back «Công việc» + title). **Cấm** system NavigationStack / Scaffold TopAppBar chồng (`GAP-MOB-CHAT-HDR-01`). Subtitle WO không phải header thứ 2.  
7. Focus ô «Nhập tin nhắn» → composer **dính mép trên** bàn phím (không chìm, không cách tab-bar). Dual. **GAP-MOB-CHAT-IME-01**.

## DoD

`#sc-mnt-chat` dual · kit chat · BFF messages · specs lock · **cấm** revert toast.
