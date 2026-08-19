# HTML → native map — patrol-home

| HTML / DES | Zone | Kit iOS | Kit Android | Notes |
|------------|------|---------|-------------|-------|
| `.nav-bar` / `.top-bar` · DES-MOB-PAT-HOME-NAV | Nav icons | `LinmTopBar` | `LinmTopBar` | sync · bell |
| `.large-title` | Title | `LinmLargeTitle` | same | Tuần đường |
| `.seg` · DES-MOB-PAT-SEG | Segment 2 | `LinmSegment` | same | idx 0/1 lock |
| `.hero-card` · DES-MOB-PAT-ACTIVE | Hero ca | `LinmHeroCard` | same | + `LinmNetSignalMark` |
| `.progress` | Coverage | `LinmProgress` | same | 67% |
| `.hero-actions` `.btn` | Hero CTA | `LinmHeroAction` + `#i-map` / `#i-plus` | same | toast P1 |
| `.btn-primary` · DES-MOB-CI-PIN-HERE | Pin | `LinmPrimaryButton` + `LinmMapPinGlyph` `#i-mappin` | same | toast P1 |
| `.kpi-strip` · DES-MOB-PAT-KPI | KPI 3 | `LinmKpiStrip` | same | |
| `.section-label` | Section | `LinmSectionLabel` | same | Hôm nay / Thao tác nhanh |
| `.row` · DES-MOB-PAT-TODAY / QUICK | List | `LinmListRow` + `LinmRowIcon` `#i-*` + `LinmBadge` · iOS chevron | `LinmListRow` + `LinmRowIcon` + `LinmBadge` | `.row-icon` 36 rounded / 40 circle |
| `.toast` | Feedback | `LinmToast` | same | **cấm** alert |
| `.tab` · DES-MOB-TABBAR | Tab 5 | `LinmTabBar` | same | label 13 |

**Cấm** raw `TabView` / M3 `NavigationBar` · WebView HTML.

See also: `docs/html-to-native-map.md` (global SSOT).
