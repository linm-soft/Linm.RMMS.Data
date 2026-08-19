# UI review: login-forgot

Reviewed: `ui/design.md` · `ui/ux-analy.md` · `/dev-ios-swiftui` · `/dev-android-compose`  
Date: 2026-08-19  
Frames: iOS dest **iPhone 17 Pro** build PASS · Android `assembleDebug` PASS · live PNG **QA** `yarn e2e-qa-mobile` (e2eQa=ON · roleOnly=dev không chain)

## Screenshots

| File | Surface |
|------|---------|
| proto `ui/prototype/ios/index.html#sc-forgot` | SSOT 390×844 |
| proto `ui/prototype/android/index.html#sc-forgot` | SSOT 412×915 |
| Live PNG | **QA** `qa/screens` + `qa/store/login-forgot` — **cấm** `yarn start:std` |

## Must fix

_(none)_

## Should fix

1. **Live frame** — capture sim/emulator thuộc `/agent-qa-mobile` (Maestro slug `login-forgot`). _Fix:_ QA `yarn e2e-qa-mobile`.

## Could improve

1. Kit leave copy **Ở lại / Rời** (SSOT kit) vs proto **Hủy / Đồng ý** — giữ kit · e2e ids `btn-leave-cancel` / `btn-leave-ok`.
2. `LinmTextField` chưa expose `keyboardType` tel / `one-time-code` (`kit_skip`).

## Pass

- [x] P1 surface 1 cột native · ngoài TabView · [x] P4 spacing 4–32 · form 52 · [x] P6 empty/loading/error/offline/leave dirty · [x] P7 back + leave ids
- [x] Packet field+CTA 1:1 (phone · Gửi mã · OTP · MK · confirm · Đặt lại · leave)
- [x] 0 WebView-as-app · 0 watermark `bản Gói N` · 0 `UIAlert`/`AlertDialog`
- [x] Must = 0
