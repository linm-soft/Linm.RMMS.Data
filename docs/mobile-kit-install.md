# Check + install kit — cùng layout/style iOS ↔ Android

## Cách “common” hoạt động

Không có **một** package UI chạy cả 2 OS. Common = **3 lớp**:

| Lớp | File | Việc |
|-----|------|------|
| Tokens | `docs/mobile-tokens.json` | Cùng hex (`#0C84C0`…) |
| Map | `docs/html-to-native-map.md` | Cùng **tên semantic** (`LinmCard` · `LinmMenu` · `LinmToast`) |
| Kit | SPM + Maven **hai repo** | HIG vs Material — cùng nghĩa |

## Test gallery local (cùng 8 section)

Shell Home = `LinmKitGallery` — **không** gọi API. Thứ tự giống nhau:

1. Card · 2. Form · 3. Menu · 4. Toast / Banner · 5. Chip / Segment / Badge · 6. KPI / Hub · 7. List · 8. Sheet / Leave / FAB

**Cấm** `alert` / `confirm`. Toast = overlay đáy 2 giây.

### iOS

```bash
cd /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS
xcodegen generate
open LinmRmms.xcodeproj
```

Xcode → scheme **LinmRmms** → iPhone simulator → Run (⌘R).

Canvas (không máy): mở `Linm.Mobile.Kit.iOS/Sources/LinmMobileKit/Gallery/LinmKitGallery.swift` → Preview **Kit gallery**.

### Android

```bash
cd /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android
test -f local.properties || cp local.properties.example local.properties
# sửa sdk.dir = $HOME/Library/Android/sdk
./gradlew :app:assembleDebug
./gradlew :app:installDebug
```

Android Studio → mở `Linm.RMMS.Mobile.Android` → Run app.  
Preview: `Linm.Mobile.Kit.Android/.../gallery/LinmKitGallery.kt` → `@Preview` 412×915.

### So hai máy

Mở iOS Simulator + Android Emulator **cùng lúc**. Cùng section 1→8. **Cùng số:** card r16 · control/button h44 · primary `#0C84C0` · toggle primary (không tím M3). Lệch hợp lệ chỉ hành vi OS: `Menu` vs `DropdownMenu` · `.sheet` vs `ModalBottomSheet`.

## Cài vào app (path local)

**iOS** — `project.yml` product `LinmMobileKit` path `../Linm.Mobile.Kit.iOS`.  
`import LinmMobileKit`

**Android** — `includeBuild("../Linm.Mobile.Kit.Android")` + `implementation("org.linmsoft.mobile:ui")`.  
`import org.linmsoft.mobile.ui.gallery.LinmKitGallery`

Publish sau: iOS git tag · Android Maven — GHA bump.

## Feature sau

`/mobile-ui-ux-analy` → cite hàng map → Dev import kit. **Cấm** copy control vào `Features/`.
