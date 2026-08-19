# HTML → native — patrol-map

| Demo | Ý nghĩa | SwiftUI | Compose | Notes |
|------|---------|---------|---------|-------|
| `.nav-bar` / `.top-bar` | Nav | `LinmTopBar` | `LinmTopBar` | iOS leadingText **Tuần đường** · Android icon back |
| `#btn-map-checkin` | Trailing | `LinmTopBar` trailing | same | toast **Ghi điểm tuần** · **cấm** sheet |
| `#map-patrol-host` / `#map-patrol` | Live map | MapKit `Map` | osmdroid `MapView` | **cấm** WebView HTML demo |
| `.map-next-card` | Overlay kế tiếp | feature card + `LinmPrimaryButton` | same | eyebrow 13 · title 16 |
| `#btn-next-checkin` | Card CTA | `LinmPrimaryButton` | same | toast **Ghi điểm tuần** |
| `#btn-pin-here` `#i-mappin` | Pin | `LinmPrimaryButton` + `LinmMapPinGlyph` | same | loc live · zoom follow · pin `.here` primary · toast · deny `patrol.map.locDeny` · **cấm** fake lat/lng · **cấm** sheet |
| `#mb-osm`…`#mb-fit` | Basemap wrap | `ChipWrap` + `LinmChip` | `FlowRow` + `LinmChip` | Đường default on · wrap 1 hàng+ |
| `#lg-all`…`#lg-next` | Legend wrap | `ChipWrap` + `LinmChip` | `FlowRow` + `LinmChip` | isolate client · wrap |
| toast | Feedback | `LinmToast` | same | **cấm** alert |
| Tab 5 shell | Field selected | `LinmTabBar` | same | **cấm** invent tab |

**Cấm** raw M3 `NavigationBar` / `TabView` / `AlertDialog` khi kit đã map (`GAP-MOB-ACT-05`).
