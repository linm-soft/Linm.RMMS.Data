# html-to-native-map — me-settings

**Sources:** dual `#sc-me-settings` · DA controlHint · PO §5 · map skill `docs/html-to-native-map.md`  
**Cấm** WebView bọc HTML · invent `me-settings` / `preferences` API · ERP.* · `mfeStdUrl`

| Demo | Zone | HTML / token | iOS kit | Android kit | Notes |
|------|------|--------------|---------|-------------|-------|
| DES-MOB-ME-SETTINGS | Header | `.nav-bar` / `.top-bar` · `.nav-title` | `LinmTopBar` | same | title 17 / ~20 · **cấm** badge P1/P2 |
| DES-MOB-ME-SETTINGS | Back | `.nav-btn` / `.icon-btn` + `#i-chevron-left` · text «Tôi» (iOS) | leading | `icon-btn` chevron only | `go('me')` |
| sectionPerm | Section | `.section-label` | `LinmSectionLabel` | same | **13** · Quyền ứng dụng |
| rowLocation | ListRow | `#row-location` · `#i-mappin` · `#st-location` | `LinmListRow` | same | status OS · tap openAppSettings |
| rowCamera | ListRow | `#row-camera` · `#i-camera` · `#st-camera` | `LinmListRow` | same | status OS · tap openAppSettings |
| rowNotifyOs | ListRow | `#row-notify-os` · `#i-bell` | `LinmListRow` | same | **≠** ops · tap openAppSettings |
| btnOpenOs | CTA | `#btn-open-os` `.btn-secondary` | `LinmSecondaryButton` | same | openAppSettings · toast fail |
| sectionSync | Section | `.section-label` | `LinmSectionLabel` | same | Đồng bộ |
| rowOffline | ListRow nav | `#row-offline` · `#i-sync` | `LinmListRow` | same | `reuse=patrol-offline` |
| sectionAbout | Section | `.section-label` | `LinmSectionLabel` | same | Thông tin |
| appVersion | Display | `#row-version` · `#app-version` | Text | same | Bundle `x.y.z (build)` · empty «—» |
| rowPrivacy | ListRow nav | `#row-privacy` · `#i-info` | `LinmListRow` | same | push privacy · `home.privacy.*` |
| Privacy panel | Content | `#privacy-panel` · `#privacy-body` | scroll Text | same | **cấm** invent HTTPS |
| Toast OS fail | Banner | `#toast` | `LinmToast` | same | **cấm** alert · **cấm** fake ok |
| Shell Tab 5 | Chrome | `.tab-bar` / `.nav-bar` · `data-tab=me` | `LinmTabBar` | NavigationBar | **giữ** · không invent |
| Entry hub | — | Me `row-settings` `#i-gear` | `LinmListRow` reuse | reuse · no chevron Android | **không** reimplement trên pack |

## CSS token (ý nghĩa — không clone px)

| CSS demo | Native |
|----------|--------|
| `--blue` / `--md-primary` `#0C84C0` | brand primary tint |
| `--surface` `#F2F2F7` | page background |
| `.section-label` 13 / `.row-title` 16 / `.row-sub` 13 / `.btn` 16 / title 17 | Dynamic Type / M3 scale |
| padding 8–16 rhythm | HIG 8pt · M3 4dp grid |
| `.btn` radius 12 (iOS) / 24 (Android) | platform CTA shape OK |
| `.btn-secondary` outline | bordered / OutlinedButton |
| `.card-group` radius 12 / 16 | grouped list |

## JS hành vi → native

| Demo JS | Native |
|---------|--------|
| Appear `applyStatuses()` | onAppear / onResume → đọc OS location/camera auth · bind phụ |
| `openOsSettings()` | iOS `UIApplication.openSettingsURLString` · Android `ACTION_APPLICATION_DETAILS_SETTINGS` |
| `?fail=1` → toast «Không mở được Cài đặt hệ thống» | catch open fail → `LinmToast` · **cấm** fake ok |
| `?unknown=1` → «Không xác định» | OS undetermined / restricted |
| `#app-version` Bundle mock | `CFBundleShortVersionString` + build / `versionName` + `versionCode` |
| `?emptyver=1` → «—» | empty fallback |
| `goOffline()` | nav `patrol-offline` · **cấm** reimplement queue |
| `openPrivacy()` | push/sheet `home.privacy.title` / `home.privacy.body` |
| `onBack()` | pop → `me` |
| **không** toast «Đã lưu cài đặt» | **cấm** fake write |

## Bind (Design note · SA chi tiết)

| Zone | Source |
|------|--------|
| Vị trí / Camera status | OS permission APIs · **không** BFF |
| openAppSettings | OS Settings URL / App details |
| Phiên bản | Bundle / BuildConfig |
| Privacy | `LinmCopy` `home.privacy.*` |
| Offline | nav reuse `patrol-offline` |
| Preferences API | **cấm invent** |

**Cấm** invent `api/v1/me-settings` · `MeSettingsController` trên Mobile.Bff · app `:5101`.

## Version meta

| Field | Value |
|-------|-------|
| skillId | mobile-ui-ux-analy |
| generatedAt | 2026-08-30T20:25:00.000Z |
| contentHash | sha256:me-settings-control-hint-20260830 |
| designContentHash | sha256:me-settings-design-20260830 |
| taskId | `task_d7095795` |

---
<!-- Version meta: skillId=mobile-ui-ux-analy schemaVersion=1 -->
