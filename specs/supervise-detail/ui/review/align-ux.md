# Align UX — supervise-detail

| Field | Value |
|-------|-------|
| feature | `supervise-detail` |
| method | Read CORE PNG vs demo `#sc-supervise-detail` · `/review-align-ux-ios-android` |
| updatedAt | `2026-09-20T00:50:00.000Z` |
| taskId | `task_94ee2d50` |
| align_confirm | approve (autoApprove · sau Read PNG) |

## Verdict

| Platform | CORE | vs demo | Result |
|----------|------|---------|--------|
| iOS | `qa/screens/A3-CORE.png` 1320×2868 | `ui/prototype/ios` `#sc-supervise-detail` | **Aligned** · title Chi tiết check-in · back Giám sát · hero Nguyễn Văn A · Mã · 6 row (org/tuyến/giờ/trạng thái/tọa độ/trong vùng) · CTA Xem trên bản đồ · tab Trang Chủ |
| Android | `qa/screens/P6-CORE.png` + `P6-CORE-2.png` 1080×1920 | `ui/prototype/android` `#sc-supervise-detail` | **Aligned** · cùng title/hero/6 row · CTA ở fold 2 · tab Trang Chủ |

Prototype detail **không** có `.row-icon`. Live không thiếu ô glyph so với demo. Giá trị live (`CC-DEMO-202609-001`, tổ `demo-seed`, status raw `in`) ≠ chuỗi demo — đúng data live; map status `other` → raw.

## Must open

none

Must count: **0** · Should: 0
