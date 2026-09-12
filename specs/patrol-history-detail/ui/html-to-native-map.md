# HTML → native map — patrol-history-detail

| HTML / DES | Zone | Kit iOS | Kit Android | Notes |
|------------|------|---------|-------------|-------|
| `.nav-bar` / `.top-bar` · DES-MOB-PAT-DETAIL-NAV | Nav | `LinmTopBar` | `LinmTopBar` | iOS leadingText **Lịch sử** · Android icon-only `#i-chevron-left` · title **Chi tiết ca** · trailing `#i-ellipsis` |
| `.hero` · DES-MOB-PAT-DETAIL-HERO | Hero | Text + `LinmBadge` | same | codeLabel 13 · codeHero ≥26/28 · badge Status VN · GET session |
| `.section-label` | Section | `LinmSectionLabel` | same | Thông tin · Điểm tuần |
| `.row` · DES-MOB-PAT-DETAIL-INFO | Info | `LinmListRow` | same | label 13 / value ≥16 · GET session §B |
| `.tl-item` · DES-MOB-PAT-DETAIL-TL | Timeline | `LinmTimelineRow` | same | **runtime** GET check-ins · board 3-row = UI ref only · **cấm** timelineDemo |
| `#tlEmpty` | Empty TL | Empty inline | same | when `[]` · show empty copy |
| `.tl-link` / tap done | Tap | nav | nav | → checkin-detail + Id · **≠** toast |
| `.btn-primary` · `#btnMap` | CTA map | `LinmPrimaryButton` | same | nav `patrol-map` + session Id · **cấm** toast khi có Id |
| `.btn-secondary` · `#btnEnd` | CTA end | `LinmSecondaryButton` | same | toast P1 · **cấm** PUT |
| `.toast` | Feedback | `LinmToast` | same | share / end / err · **cấm** alert |
| `.tab` · DES-MOB-TABBAR | Tab shell | `LinmTabBar` | same | Tuần đường selected |
| `#sc-patrol-detail` | Screen | `PatrolHistoryDetailView` | `PatrolHistoryDetailScreen` | **defer** Dev · edit_page strip demo |

**Cấm** raw `List` / M3 `NavigationBar` / WebView HTML · invent kit · ship board timeline as runtime.

See also: `docs/html-to-native-map.md` (global SSOT).

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-design-mobile |
| skillVersion | 2026.08.31.2 |
| schemaVersion | 2 |
| generatedAt | 2026-09-12T13:40:00.000Z |
| contentHash | sha256:patrol-history-detail-control-hint-20260912-timeline-live |
