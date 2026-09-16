# Demo parity — mnt-log (mobile)

**Slash:** `/review-demo-design-mobile`  
**DemoRoot:** `specs/mnt-log/ui/prototype/{ios,android}/index.html`  
**taskId:** `task_bda2e253` · `2026-08-29T07:22:00.000Z`  
**SSOT:** DA controlHint + PO + real-data · mobile-p1 entry `#i-list` cite only · hash skip · **cấm** re-scan (`GAP-DES-DEMO-RESCAN-01`)

## Must

| Check | iOS | Android | Status |
|-------|-----|---------|--------|
| Title **Nhật ký xử lý** | yes | yes | OK |
| WO **Công việc** / **Nạo cống** | yes | yes | OK |
| Code **Mã** / **CV-20260809-0002** | yes | yes | OK |
| Status **Tình trạng hiện tại** / **Đã hoàn thành** | yes | yes | OK |
| Section **Nhật ký** | yes | yes | OK |
| Timeline newest-first: **Hoàn thành** · **Tiến độ hiện tại 100%** · **Hạn: 2026-08-09 16:00** · **Tạo công việc** | yes | yes | OK |
| Empty **Chưa có nhật ký** (`?empty=1`) | yes | yes | OK |
| Banner missing **Thiếu công việc — không tải nhật ký. Mở từ mnt-list `#i-list`.** | yes | yes | OK |
| Toast fail **Không tải được nhật ký** (`?fail=1`) | yes | yes | OK |
| `#i-chevron-left` cùng `d=` `M15 5l-7 7 7 7` | yes | yes | OK |
| Shell Tab 5 cùng 5 nhãn (Trang Chủ · Tuần đường · Vấn đề · Công việc · Tôi) | yes | yes | OK |
| Tab **work** active | yes | yes | OK |
| Frame 390×844 / 412×915 | 390×844 | 412×915 | OK |
| Type: label 13 · value 16 · title 17 (Android title ~20 OK) · section 13 · tl-at 13 · tl-body 16 | yes | yes | OK |
| `tabs: none` · không invent segment | yes | yes | OK |
| Full screen · không bottom-sheet chrome | yes | yes | OK |
| Không Primary write CTA · không composer | yes | yes | OK |
| Không watermark / device label / «Có mạng» | yes | yes | OK |
| `data-des-id` DES-MOB-MNT-LOG | yes | yes | OK |
| `#sc-mnt-log` | yes | yes | OK |
| packKind sheet · surface screen (PO) | yes | yes | OK |

## Should

| Check | Notes | Status |
|-------|-------|--------|
| `?missing=1` banner + empty | dual | OK |
| `?empty=1` hide timeline · show empty | dual | OK |
| `?fail=1` toast + empty · **cấm** fake rows | dual | OK |
| Back iOS text «Công việc» vs Android icon-only | chrome OK | OK |
| Timeline rail CSS (không invent `#i-*`) | dual | OK |

## DEFER (platform-OK)

| Item | Notes |
|------|-------|
| Back label «Công việc» vs icon-only | HIG vs Material chrome · DA dual OK |
| Toast blur vs `#323232` | platform toast surface |
| Card/timeline radius 12 vs 16 | platform |
| Nav title 17 vs ~20 | platform |
| Tabbar height / label 10 vs 11 | platform chrome |

## Must open

**0**

## Verdict

`/review-demo-design-mobile` **PASS** · đủ điều kiện `design_confirm`.

## Version meta

| Field | Value |
|-------|-------|
| skillId | review-demo-design-mobile |
| generatedAt | 2026-08-29T07:22:00.000Z |
| taskId | `task_bda2e253` |

---
<!-- Version meta: skillId=review-demo-design-mobile -->
