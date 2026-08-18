# UI review: login

Reviewed: `ui/design.md` · `ui/ux-analy.md` · `/dev-ios-swiftui` · `/dev-android-compose`  
Date: 2026-08-19  
Frames: iOS live **iPhone 17 Pro Max**  · Android native screencap **blocked** (emulator `adb offline`)

## Screenshots

| File | Surface |
|------|---------|
| `review-login-ios-390.png` | iOS live Simulator — `#sc-login` |
| Android 412×915 | **chưa** live — `assembleDebug` PASS · emulator Pixel_9a adb offline lúc capture |

## Must fix

_(none)_

## Should fix

1. **Username lead person** — kit `LinmTextField` không leading slot. Password đã `LinmSecureTextField` + lock + eye kit. Ảnh iOS. _Fix:_ kit `LinmTextField(leading:)` sau pack.
2. **Android live frame** — emulator adb offline. _Fix:_ QA `/agent-qa-mobile` `adb exec-out screencap` khi emu `device`.

## Could improve

1. Regular/iPad: form `maxWidth 430` đã có · chưa split (design không chốt tablet).
2. CTA kit capsule vs demo radius 12 — giữ kit `LinmPrimaryButton`.

## Pass

- [x] P1 surface 1 cột native · [x] P4 spacing 4–32 · [x] P6 default/loading/error/offline (toast, không system alert) · [x] P7 VoiceOver logo + forgot + signal tap
- [x] Packet field+CTA 1:1 (Tài khoản · Mật khẩu+eye · Đăng nhập · Quên mật khẩu? · Tín hiệu Tốt/TB/Yếu)
- [x] 0 WebView-as-app · 0 watermark `bản Gói 1` (iOS live)
- [x] Must = 0
