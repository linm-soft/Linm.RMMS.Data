# Demo parity — mobile-p1

Nguồn: `specs/mobile-p1/ui/prototype/ios/index.html` · `android/index.html`  
Slash: `/review-demo-design-mobile` · gate `ios-android-demo-parity.md`  
Ngày: 2026-08-19

## Verdict

**Must mở** — **cấm** `design_confirm` / `review_confirm` PASS cho pack P1 cho đến khi sửa demo Android (pill + Cài đặt + `#i-gear` + label 12).

Tab **copy + `#i-home|mappin|warning|wrench|person`** đã khớp. Native Filled/`Build` là bug app (không phải HTML tab).

## Must

| Id | Zone | iOS | Android | Fix |
|----|------|-----|---------|-----|
| **GAP-MOB-DEMO-PAD-01** | Tab active `.ti` | 28×28, no fill | 64×32 + `background: rgba(27,110,243,.14)` pill | Bỏ fill; box 28×28 như iOS (M3 indicator **không** capsule trên demo) |
| **GAP-MOB-DEMO-COPY-01** | Me | Row **Cài đặt** + `#i-gear` | Thiếu hàng (Góp ý / Camera / Thông báo / Đăng xuất) | Thêm row **Cài đặt** cùng copy + `#i-gear` |
| **GAP-MOB-DEMO-ICON-01** | `<symbol id="i-gear">` | 8-spoke | Stub (N/S ticks) | Copy path iOS |
| **GAP-MOB-DEMO-TYPE-01** | `.section-label` | 13 | **12** | 13 — **GAP-TYP-01** |
| **GAP-MOB-DEMO-TYPE-02** | `.home-hello .g` | 13 | **12** | 13 — **GAP-TYP-01** |

## Should

| Id | Zone | iOS | Android |
|----|------|-----|---------|
| GAP-MOB-DEMO-PAD-02 | `.row-icon` | 30×30 r7 | 40×40 r12 | Align token kit nếu native copy demo Android to |

## DEFER (platform-OK)

| Token | iOS | Android | Note |
|-------|-----|---------|------|
| Frame | 390×844 | 412×915 | Device chrome |
| `.large-title` | 34 | 32 | Display title |
| `.nav-title` | 17 | 18 | 1px |
| `.row` min-height | 44 | 56 | HIG vs M3 |
| `.row-title` | 17 | 16 | List title; field vẫn ≥16 |
| `.badge` | 12 | 11 | Chip |
| Status / gesture | 15 / home 134×5 | 12 / bar 108×4 | OS chrome |

## Copy + pict đã khớp (tab)

`Trang Chủ` `#i-home` · `Tuần đường` `#i-mappin` · `Vấn đề` `#i-warning` · `Công việc` `#i-wrench` · `Tôi` `#i-person`.

## Ảnh hưởng native

Pill trên demo Android → AI từng ship tab capsule. Sửa HTML **trước** Design confirm / kit tab.
