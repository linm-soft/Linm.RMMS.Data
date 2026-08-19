# HTML → Native map — patrol-offline

**Feature:** `patrol-offline` · `#sc-patrol-offline` · `DES-MOB-PAT-OFFLINE`  
**Sources:** `ui/prototype/{ios,android}/index.html` · `docs/html-to-native-map.md` global rows

## Screen zones

| Demo selector | Zone | Kit iOS | Kit Android | Notes |
|---------------|------|---------|-------------|-------|
| `.nav-bar` / `.top-bar` | Nav chrome | `LinmTopBar` **implement_kit** text leading + trailing | same | back «Trang Chủ» · title · «Đồng bộ» |
| `.nav-btn` leading | Back | text + `chevron.left` | text + `ArrowBack` | `nav-back` a11y |
| `.nav-title` | Title | TopBar center | TopAppBar title | `offline.title` |
| `.nav-btn` trailing / `.btn` sync | Sync CTA | text button | text button | `btn-sync` |
| `.seg` | Segment 2 | `LinmSegment` | `LinmSegment` | idx 0 check-in · 1 incident |
| `.offline-banner` | Weak signal | `LinmBanner` `.warning` | same | `#i-wifi-off` · ẩn empty |
| `.rich-card` | Card container | custom VStack + card bg | same | map → `LinmListRow` pattern if kit sufficient |
| `.rc-thumb` | Thumb 56 | RoundedRect gradient | same | demo visual |
| `.rc-title` | Title | Text subheadline semibold | same | |
| `.rc-line` + `#i-mappin` | Location | HStack + mappin glyph | same | |
| `.rc-line` (content) | Extra line | Text caption | card 1 only | |
| `.rc-line` / `.rc-time` | Timestamp | Text caption2 | | |
| `.rc-status.warn` | Status strip | warn bg strip + «Chờ gửi» | same | **ngắn** pill |
| `.toast` | Feedback | `LinmToast` | `LinmToast` | **cấm** alert · app truyền `bottomBarHeight` (đo `LinmTabBar`) |

## Entry wiring (reuse — không reimplement hub)

| Entry demo | Native route | Kit |
|------------|--------------|-----|
| Home `#sc-home` tile Lưu trữ | push `PatrolOfflineView` | `LinmHomeTile` |
| Me `#sc-me` row offline | NavigationLink same view | `LinmListRow` + badge local |
| Patrol-home nav Đồng bộ | reuse slug | sibling wiring |

## kit_missing_confirm

| Gap | Decision |
|-----|----------|
| `LinmTopBar` icon-only ≠ SSOT text | **implement_kit** — text leading «Trang Chủ» + trailing «Đồng bộ» dual |
| Rich card thumb + status | verify against `LinmListRow` — hiện custom card OK nếu thumb 56 + strip present · **cấm** invent `LinmRichCard` tên mới |

## Version meta

skillId=agent-design-mobile · generatedAt=2026-08-19T14:30:00.000Z · feature=patrol-offline
