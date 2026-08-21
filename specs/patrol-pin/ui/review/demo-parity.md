# Demo parity — patrol-pin

**Slash:** `/review-demo-design-mobile`  
**DemoRoot:** `specs/patrol-pin/ui/prototype/{ios,android}/index.html`  
**taskId:** `task_463367a8` · `2026-08-21T03:23:01.000Z`

## Must

| Check | iOS | Android | Status |
|-------|-----|---------|--------|
| CTA copy **Ghim vị trí hiện tại** | hub + map | same | OK |
| `#i-mappin` cùng `d=` (mobile-p1 SSOT pin+circle) | yes | yes | OK |
| Toast OK template `Đã ghim vị trí hiện tại · … · ±N m` | yes | yes | OK |
| Toast timeout `Chưa lấy được vị trí. Thử lại.` | yes | yes | OK |
| Deny title **Định vị bị tắt** | yes | yes | OK |
| Deny body demo copy | yes | yes | OK |
| Primary **Sao chép hướng dẫn** · Secondary **Để sau** | yes | yes | OK |
| Frame 390×844 / 412×915 | 390×844 | 412×915 | OK |
| Type: label 13 · button 16 · modal title 17 | yes | yes | OK |
| Check-in form out of pack | no form | no form | OK |
| `tabs: none` · không invent segment | query surface only | same | OK |
| Shell Tab 5 cùng 5 nhãn | yes | yes | OK |
| Không watermark / device label | yes | yes | OK |

## Should

| Check | Notes | Status |
|-------|-------|--------|
| Map pin `.here` sau allow | dual | OK |
| Handoff stub toast sibling | không open sheet-checkin | OK |
| `?deny=1` / `?timeout=1` demo | dual | OK |

## DEFER (platform-OK)

| Item | Notes |
|------|-------|
| Large title vs TopAppBar | HIG vs Material chrome |
| Toast blur vs `#323232` | platform toast surface |
| Modal radius 14 vs 28 | platform |

## Must open

**0**

## Verdict

`/review-demo-design-mobile` **PASS** · đủ điều kiện `design_confirm`.
