# HTML → native map — patrol-home

| HTML / DES | Zone | Kit iOS | Kit Android | Notes |
|------------|------|---------|-------------|-------|
| `.nav-bar` / `.top-bar` · DES-MOB-PAT-HOME-NAV | Nav icons | `LinmTopBar` | `LinmTopBar` | sync · bell |
| `.large-title` | Title | `LinmLargeTitle` | same | Tuần đường |
| `.seg` · DES-MOB-PAT-SEG | Segment 2 | `LinmSegment` | same | idx 0/1 lock |
| `#hero-active` · DES-MOB-PAT-ACTIVE | Hero ca | `LinmHeroCard` | same | live only · empty=`—` |
| `#hero-empty` · DES-MOB-PAT-EMPTY | Hero empty | `LinmHeroCard` | same | no active |
| `#btn-open-session` | Mở ca | `LinmPrimaryButton` | same | POST `patrol/sessions` |
| `.progress` | Coverage | `LinmProgress` | same | active only |
| `.hero-actions` `.btn` | Hero CTA | `LinmHeroAction` + `#i-map` / `#i-plus` | same | ẩn khi empty |
| `#pin-here` · DES-MOB-CI-PIN-HERE | Pin | `LinmPrimaryButton` + `#i-mappin` | same | keep |
| `.kpi-strip` · DES-MOB-PAT-KPI | KPI 3 | `LinmKpiStrip` | same | empty → `—` |
| `.section-label` | Section | `LinmSectionLabel` | same | Hôm nay / Thao tác nhanh |
| `.row` · DES-MOB-PAT-TODAY / QUICK | List | `LinmListRow` + `LinmRowIcon` + `LinmBadge` | same | route trống=`—` |
| `btnEndSession` (detail) | Kết ca | existing detail CTA | same | PUT · không toast-only |
| `.toast` | Feedback | `LinmToast` | same | **cấm** alert |
| `.tab` · DES-MOB-TABBAR | Tab 5 | `LinmTabBar` | same | label 13 |

**Cấm** raw `TabView` / M3 `NavigationBar` · WebView HTML · demo mapper fallback.

See also: `docs/html-to-native-map.md` (global SSOT).
