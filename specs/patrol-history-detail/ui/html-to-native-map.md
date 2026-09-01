# HTML → native map — patrol-history-detail

| HTML / DES | Zone | Kit iOS | Kit Android | Notes |
|------------|------|---------|-------------|-------|
| `.nav-bar` / `.top-bar` · DES-MOB-PAT-DETAIL-NAV | Nav | `LinmTopBar` | `LinmTopBar` | iOS leadingText **Lịch sử** · Android icon-only `#i-chevron-left` · title **Chi tiết ca** · trailing `#i-ellipsis` |
| `.hero` · DES-MOB-PAT-DETAIL-HERO | Hero | Text + `LinmBadge` | same | codeLabel 13 · codeHero ≥26/28 · badge Status VN |
| `.section-label` | Section | `LinmSectionLabel` | same | Thông tin · Điểm tuần |
| `.row` · DES-MOB-PAT-DETAIL-INFO | Info | `LinmListRow` | same | label 13 / value ≥16 · GET §B |
| `.tl-item` · DES-MOB-PAT-DETAIL-TL | Timeline | `LinmTimelineRow` | same | demo SSOT 3 · tap → checkin-detail |
| `.btn-primary` · `#btnMap` | CTA map | `LinmPrimaryButton` | same | `go('patrol-map')` + Id |
| `.btn-secondary` · `#btnEnd` | CTA end | `LinmSecondaryButton` | same | toast · **cấm** PUT |
| `.toast` | Feedback | `LinmToast` | same | share / end / err · **cấm** alert |
| `.tab` · DES-MOB-TABBAR | Tab shell | `LinmTabBar` | same | Tuần đường selected |
| `#sc-patrol-detail` | Screen | `PatrolHistoryDetailView` | `PatrolHistoryDetailScreen` | **defer** Dev |

**Cấm** raw `List` / M3 `NavigationBar` / WebView HTML · invent kit.

See also: `docs/html-to-native-map.md` (global SSOT).
