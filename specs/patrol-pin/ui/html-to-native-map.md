# html-to-native-map — patrol-pin

| Demo | Zone | HTML / token | iOS kit | Android kit | Notes |
|------|------|--------------|---------|-------------|-------|
| DES-MOB-CI-PIN-HERE hub | CTA | `.btn-primary.pin-here` `#btn-pin-here` + `#i-mappin` | `LinmPrimaryButton` + `LinmMapPinGlyph` | same | `pinHereCheckin()` |
| DES-MOB-CI-PIN-HERE map | CTA overlay | `.map-pin-here` + `#i-mappin` | same | same | reuse owner |
| Map pin here | annotation | `.pin.here` `#pin-here` | MapKit annotation | Maps marker | sau allow · live coords |
| Toast success | banner | `#toast` | `LinmToast` | same | bind `GET patrol/sessions` route + accuracy · **trước** handoff |
| Toast timeout | banner | `#toast` | `LinmToast` | same | `patrol.map.locTimeout` · **không** handoff |
| Toast offline queue | banner | `#toast` | `LinmToast` | same | `?offline=1` · queue handoff payload |
| DES-MOB-GPS-DENY | modal | `#modal-gps` | feature overlay | same | **cấm** system alert · **không** handoff |
| Deny primary | button | Sao chép hướng dẫn | `LinmPrimaryButton` | same | clipboard + toast |
| Deny secondary | button | Để sau | `LinmSecondaryButton` | same | dismiss |
| DES-MOB-HANDOFF-CHECKIN | sheet | `#sheet-handoff-checkin` | bottom sheet | Material bottom sheet | payload `sessionId`+`LocationFix` · **cấm** form fields |
| Handoff primary | button | Tiếp tục | `LinmPrimaryButton` | same | openSheet/navigate `patrol-checkin` |
| Handoff secondary | button | Để sau | `LinmSecondaryButton` | same | dismiss sheet |
| Shell Tab 5 | chrome | `.tabbar` / `.nav` | `LinmTabBar` | NavigationBar | **giữ** · không invent |
| Form Ghi điểm tuần | — | — | — | — | sibling `patrol-checkin` · **không map** trên pack |

**BFF bind (Design note · SA chi tiết):** `GET patrol/sessions` · GPS device · handoff → sibling `POST …/check-ins` · **cấm** invent `api/v1/patrol-pin` / `/pins` · **cấm** auto-POST từ pin.

| Field | Value |
|-------|-------|
| contentHash | sha256:patrol-pin-control-hint-20260912-persist |
| changeScope | edit_page |
| gapId | GAP-MOB-PIN-PERSIST-01 |
