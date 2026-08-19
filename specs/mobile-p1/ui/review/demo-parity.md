# Demo parity — mobile-p1

Nguồn: `specs/mobile-p1/ui/prototype/ios/index.html` · `android/index.html`  
Slash: `/review-demo-design-mobile` · gate `ios-android-demo-parity.md` · `typography-web-mobile.md`  
Ngày: 2026-08-19 (align fix)

## Verdict

**Must đóng** — dual HTML copy / `#i-*` / type 13 / tab `.ti` 28×28 không pill đã khớp.  
`design_confirm` không còn bị chặn bởi demo-parity (vẫn pending IA v3.3).

## Must — đã sửa (Android)

| Id | Fix |
|----|-----|
| GAP-MOB-DEMO-PAD-01 | `.tab .ti` 28×28 · bỏ fill pill |
| GAP-MOB-DEMO-COPY-01 | Row **Cài đặt** + `#i-gear` |
| GAP-MOB-DEMO-COPY-02 | **Thao tác nhanh** + **Lịch sử phiên** |
| GAP-MOB-DEMO-COPY-03 | **7 ngày gần đây** · **Thông tin** · **Chờ người xác nhận** · **Chụp tài sản / thiết bị mới** |
| GAP-MOB-DEMO-COPY-04 | CTA **Ghi nhận điểm tuần** · toast đủ |
| GAP-MOB-DEMO-ICON-01 | `#i-gear` 8-spoke |
| GAP-MOB-DEMO-ICON-02 | `#i-wifi-off` `#i-list` `#i-map` `#i-walk` `#i-cube` path iOS |
| GAP-MOB-DEMO-TYPE-01 | `.section-label` 13 |
| GAP-MOB-DEMO-TYPE-03 | `.field label` 13 |
| GAP-MOB-ALIGN-01 | dual lệch Must đã đóng |

## Should — đã sửa

COPY-05/06 · ICON-03 (`#i-ellipsis` `#i-layers` `#i-arrow-down` `#i-sparkles`) · TYPE-02 `.home-hello .g` 13.

## DEFER (platform-OK)

| Token | iOS | Android | Note |
|-------|-----|---------|------|
| Frame | 390×844 | 412×915 | Device chrome |
| `.large-title` | 34 | 32 | Display title |
| `.nav-title` | 17 | 18 | 1px |
| `.row` min-height | 44 | 56 | HIG vs M3 |
| `.row-icon` | 30×30 r7 | 40×40 r12 | PAD-02 · token M3 |
| `.row-title` | 17 | 16 | List title; field ≥16 |
| `.badge` | 12 | 11 | Chip |
| Status / gesture | 15 / home 134×5 | 12 / bar 108×4 | OS chrome |

## Copy + pict khớp

**Tab:** `Trang Chủ` `#i-home` · `Tuần đường` `#i-mappin` · `Vấn đề` `#i-warning` · `Công việc` `#i-wrench` · `Tôi` `#i-person`.

**Me:** Góp ý · Camera xem · Thông báo · **Cài đặt** · Đăng xuất.

**Tuần đường:** Thao tác nhanh · Lịch sử phiên · Bản đồ ca `Ghim điểm tuần · hành trình`.
