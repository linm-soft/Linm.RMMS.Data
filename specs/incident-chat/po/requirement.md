# PO — Requirement — incident-chat

| Field | Value |
|-------|-------|
| feature | `incident-chat` |
| thisAction | **Trao đổi sự cố** · entry `incident-list` `#i-chat` |
| changeScope | `edit_page` |
| packKind | `screen` |
| stack | `native_dual` |
| status | **confirmed** |
| updatedAt | `2026-08-29T17:40:00.000Z` |

## Goal

Thay toast «Trao đổi sự cố» bằng màn chat style: bubble + composer gửi tin qua Message contract trên incident.

## Device AC

1. Tap `#i-chat` trên card → `#sc-incident-chat` (không toast).  
2. Thread empty copy `inc.chat.empty` khi chưa có tin.  
3. Gửi → bubble mine xuất hiện · POST `…/incidents/{id}/messages`.  
4. Live incident: GET load lịch sử. Demo id: composer local fallback (không fake «Đã gửi» toast).  
5. Back → list. Dual iOS + Android.

## DoD

`#sc-incident-chat` dual · kit chat · BFF messages · specs lock · **cấm** revert toast.
