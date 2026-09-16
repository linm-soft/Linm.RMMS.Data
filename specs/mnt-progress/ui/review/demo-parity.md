# Demo parity — mnt-progress (mobile)

**Slash:** `/review-demo-design-mobile`  
**DemoRoot:** `specs/mnt-progress/ui/prototype/{ios,android}/index.html`  
**taskId:** `task_be38de39` · `2026-08-29T06:09:10.000Z`  
**SSOT:** DA controlHint + PO + real-data · mobile-p1 entry `#i-sync` cite only · hash skip · **cấm** re-scan (`GAP-DES-DEMO-RESCAN-01`)

## Must

| Check | iOS | Android | Status |
|-------|-----|---------|--------|
| Title **Cập nhật trạng thái** | yes | yes | OK |
| WO **Công việc** / **Vá mặt đường** | yes | yes | OK |
| Code **Mã** / **CV-20260810-0001** | yes | yes | OK |
| Status **Tình trạng hiện tại** / **Chờ xử lý** | yes | yes | OK |
| Field **Tiến độ (%)** · slider + number 0–100 | yes | yes | OK |
| **Ghi chú** · placeholder **Mô tả tiến độ / ghi chú hiện trường…** | yes | yes | OK |
| Section **Ảnh hiện trường** + PhotoRow + `#i-camera` | yes | yes | OK |
| **Vị trí đã chốt** / **QL.1 · Km 1556+080 · ±5 m** | yes | yes | OK |
| Primary **Cập nhật** | yes | yes | OK |
| Toast OK **Đã cập nhật tiến độ · {n}%** | yes | yes | OK |
| `#i-chevron-left` cùng `d=` `M15 5l-7 7 7 7` | yes | yes | OK |
| `#i-camera` cùng motif body + circle r=3.5 | yes | yes | OK |
| Shell Tab 5 cùng 5 nhãn (Trang Chủ · Tuần đường · Vấn đề · Công việc · Tôi) | yes | yes | OK |
| Tab **work** active | yes | yes | OK |
| Frame 390×844 / 412×915 | 390×844 | 412×915 | OK |
| Type: label 13 · value/btn 16 · title 17 (Android title ~20 OK) | yes | yes | OK |
| `tabs: none` · không invent segment | yes | yes | OK |
| Full screen · không bottom-sheet chrome | yes | yes | OK |
| Không watermark / device label / «Có mạng» | yes | yes | OK |
| `data-des-id` DES-MOB-MNT-PROGRESS | yes | yes | OK |
| packKind sheet · surface screen (PO) | yes | yes | OK |
| GPS deny modal `DES-MOB-GPS-DENY` | yes | yes | OK |
| Leave modal `DES-MOB-LEAVE` | yes | yes | OK |

## Should

| Check | Notes | Status |
|-------|-------|--------|
| `?missing=1` banner + disable Cập nhật | dual | OK |
| `?deny=1` GPS modal + location empty | dual | OK |
| @100 → status Đã hoàn thành + toast 100% | dual | OK |
| progress &lt;100 → status Đang xử lý | dual | OK |
| Back iOS text «Công việc» vs Android icon-only | chrome OK | OK |

## DEFER (platform-OK)

| Item | Notes |
|------|-------|
| Back label «Công việc» vs icon-only | HIG vs Material chrome · DA dual OK |
| Toast blur vs `#323232` | platform toast surface |
| Button radius 12 vs 28 | platform |
| Nav title 17 vs ~20 | platform |
| Card/field radius 12 vs 16 | platform |

## Must open

**0**

## Verdict

`/review-demo-design-mobile` **PASS** · đủ điều kiện `design_confirm`.

## Version meta

| Field | Value |
|-------|-------|
| skillId | review-demo-design-mobile |
| generatedAt | 2026-08-29T06:09:10.000Z |
| taskId | `task_be38de39` |

---
<!-- Version meta: skillId=review-demo-design-mobile -->
