# Prototype — vis-capture

Design gate: dual HTML · `design_confirm` **approve** (autoApprove=ON).

| | |
|--|--|
| Feature | `vis-capture` |
| Title | Nhận diện mặt đường |
| packKind | **`screen`** (PO · đóng GAP-MOB-VIS-PACK-01) |
| Owner | `#sc-vis-capture` `DES-MOB-VIS-CAPTURE` |
| Demo SSOT | mobile-p1 `#sc-vis-capture` · hash skip · **cấm** re-scan |
| Frame | iOS 390×844 · Android 412×915 |
| Tab | shell **incident** active · `tabs: none` |

## reviewUrl

| Platform | URL |
|----------|-----|
| iOS | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/vis-capture/ui/prototype/ios/index.html` |
| iOS deny | `…/ios/index.html?deny=1` |
| iOS gate | `…/ios/index.html?acc=35` |
| Android | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/vis-capture/ui/prototype/android/index.html` |
| Android deny | `…/android/index.html?deny=1` |
| Android gate | `…/android/index.html?acc=35` |

**Cấm** `mfeStdUrl` · `yarn start:std`.

## Dual parity (GAP-MOB-VIS-DUAL-01 CLOSED)

Android proto **có** section «Ảnh hiện trường» + CTA «Bỏ qua» (khác mobile-p1 Android thiếu).
