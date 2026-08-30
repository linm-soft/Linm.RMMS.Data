# Demo parity — patrol-checkin

**Slash:** `/review-demo-design-mobile`  
**DemoRoot:** `specs/patrol-checkin/ui/prototype/{ios,android}/index.html`  
**taskId:** `task_34eb58bb` · `2026-08-28T20:05:00.000Z`  
**Hash skip:** inventory từ control-hint + real-data · **cấm** re-scan mobile-p1 DemoRoot (`GAP-DES-DEMO-RESCAN-01`)

## Must

| Check | iOS | Android | Status |
|-------|-----|---------|--------|
| Sheet title **Ghi điểm tuần** | yes | yes | OK |
| Nav **Hủy** / **Lưu** | yes | yes | OK |
| Banner match copy đúng/sai điểm | yes | yes | OK |
| Fields: Điểm KH · Tuyến · GPS · Cách điểm · Nội dung | yes | yes | OK |
| Demo prefill `Km 1561+134 · Phước Dinh` / `QL.1 · Km 1561+134` | yes | yes | OK |
| section-label **Ảnh** | yes | yes (parity) | OK |
| `#i-camera` cùng `d=` + r=3.5 | yes | yes | OK |
| Primary **Ghi nhận điểm tuần** | yes | yes | OK |
| Footer **Hủy** | yes | yes | OK |
| Leave **Bỏ thay đổi?** / body / 2 CTA | yes | yes | OK |
| GPS deny reuse copy | yes | yes | OK |
| Toast block **Chặn — không đúng điểm kế hoạch** | yes | yes | OK |
| Detail title **Ghi điểm tuần** · back Ca | yes | yes | OK |
| Frame 390×844 / 412×915 | 390×844 | 412×915 | OK |
| Type: label/banner 13 · field/btn ≥16 · title 17 | yes | yes | OK |
| `tabs: none` · shell Tab 5 giữ | yes | yes | OK |
| Không watermark / device label / pin CTA | yes | yes | OK |
| DES ids: CHECKIN-SHEET · LOC-MISMATCH · LEAVE · GPS-DENY · CI-DETAIL | yes | yes | OK |

## Should

| Check | Notes | Status |
|-------|-------|--------|
| `?mismatch=1` disable Lưu + primary | dual | OK |
| `?deny=1` open GPS modal | dual | OK |
| `?surface=detail` read surface | dual | OK |
| After save → detail | dual | OK |

## DEFER (platform-OK)

| Item | Notes |
|------|-------|
| Large title vs TopAppBar under sheet | HIG vs Material |
| Sheet radius 14 vs 28 | platform |
| Toast blur vs `#323232` | platform |
| Field fill white vs tonal Material | platform |

## Must open

**0**

## Verdict

`/review-demo-design-mobile` **PASS** · đủ điều kiện `design_confirm`.
