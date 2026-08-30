# Demo parity — estimate (mobile)

**Slash:** `/review-demo-design-mobile`  
**DemoRoot:** `specs/estimate/ui/prototype/{ios,android}/index.html`  
**taskId:** `task_c0fb308d` · `2026-08-29T04:26:00.000Z`  
**SSOT:** mobile-p1 `#sc-estimate` · DA hash skip · **cấm** re-scan (`GAP-DES-DEMO-RESCAN-01`)

## Must

| Check | iOS | Android | Status |
|-------|-----|---------|--------|
| Title **Giao việc xử lý** | yes | yes | OK |
| From **Từ sự cố** / **SC-2401 · Ổ gà · QL.1 Km 1556+040** | yes | yes | OK |
| Asset **Loại tài sản** / **Mặt đường** | yes | yes | OK |
| Field **Giao cho *** / **Nguyễn Văn A · Tổ tuần đường** | yes | yes | OK |
| **Khối lượng** / **12.5** | yes | yes | OK |
| **Đơn giá** / **850.000** | yes | yes | OK |
| **Thành tiền** / **10.625.000** readonly | yes | yes | OK |
| **Thời hạn xử lý (giờ)** / **24** readonly | yes | yes | OK |
| **Hạn xử lý** / **19/08/2026 08:00** readonly | yes | yes | OK |
| Primary **Giao việc** | yes | yes | OK |
| Secondary **Lưu nháp** | yes | yes | OK |
| Toast OK **Đã giao việc · CV-20260818-0003 · thời hạn 24 giờ** | yes | yes | OK |
| Toast draft **Đã lưu nháp ước lượng** | yes | yes | OK |
| `#i-chevron-left` cùng `d=` `M15 5l-7 7 7 7` | yes | yes | OK |
| Shell Tab 5 cùng 5 nhãn (Trang Chủ · Tuần đường · Vấn đề · Công việc · Tôi) | yes | yes | OK |
| Tab **work** active | yes | yes | OK |
| Frame 390×844 / 412×915 | 390×844 | 412×915 | OK |
| Type: label 13 · value/btn 16 · title 17 (Android title ~20 OK) | yes | yes | OK |
| `tabs: none` · không invent segment | yes | yes | OK |
| Full screen · không bottom-sheet chrome | yes | yes | OK |
| Không watermark / device label / «Có mạng» | yes | yes | OK |
| `data-des-id` DES-MOB-EST | yes | yes | OK |
| packKind sheet · surface screen (PO) | yes | yes | OK |

## Should

| Check | Notes | Status |
|-------|-------|--------|
| `?missing=1` banner + disable Giao việc | dual | OK |
| qty/price input recalc Thành tiền | dual | OK |
| empty assignee disable primary | dual | OK |
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
| generatedAt | 2026-08-29T04:26:00.000Z |
| taskId | `task_c0fb308d` |

---
<!-- Version meta: skillId=review-demo-design-mobile -->
