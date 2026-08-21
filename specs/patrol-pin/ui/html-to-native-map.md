# html-to-native-map — patrol-pin

| Demo | Zone | HTML / token | iOS kit | Android kit | Notes |
|------|------|--------------|---------|-------------|-------|
| DES-MOB-CI-PIN-HERE hub | CTA | `.btn-primary.pin-here` `#btn-pin-here` + `#i-mappin` | `LinmPrimaryButton` + `LinmMapPinGlyph` | same | `pinHereCheckin()` |
| DES-MOB-CI-PIN-HERE map | CTA overlay | `.map-pin-here` + `#i-mappin` | same | same | reuse owner |
| Map pin here | annotation | `.pin.here` `#pin-here` | MapKit annotation | Maps marker | sau allow · live coords |
| Toast success | banner | `#toast` | `LinmToast` | same | bind `GET patrol/sessions` route + accuracy |
| Toast timeout | banner | `#toast` | `LinmToast` | same | `patrol.map.locTimeout` |
| DES-MOB-GPS-DENY | modal | `#modal-gps` | feature overlay | same | **cấm** system alert |
| Deny primary | button | Sao chép hướng dẫn | `LinmPrimaryButton` | same | clipboard + toast |
| Deny secondary | button | Để sau | `LinmSecondaryButton` | same | dismiss |
| Shell Tab 5 | chrome | `.tabbar` / `.nav` | `LinmTabBar` | NavigationBar | **giữ** · không invent |
| `#sheet-checkin` | — | — | — | — | sibling `patrol-checkin` · **không map** |

**BFF bind (Design note · SA chi tiết):** chỉ `GET patrol/sessions` · GPS device · **cấm** invent `api/v1/patrol-pin`.
