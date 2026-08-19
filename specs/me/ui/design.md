# Design — me (mobile hub)

| Field | Value |
|-------|-------|
| feature | `me` |
| title | [Mobile] Tôi / Hồ sơ |
| this role | `design` · `/agent-design-mobile` |
| status | `confirmed` (autoApprove=ON) |
| design_confirm | **approve** (`task_84e8e0e2`) |
| packKind | **`hub`** |
| kit_missing_confirm | **implement_kit** · `LinmListRow` tap/leading/chevron/badge dual |
| reviewUrlIos | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/me/ui/prototype/ios/index.html` |
| reviewUrlAndroid | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/me/ui/prototype/android/index.html` |
| updatedAt | `2026-08-19T02:20:00.000Z` |
| taskId | `task_84e8e0e2` |

## 0. Context & Demo

| ID | Path |
|----|------|
| CTX | `docs/context/features/me.md` |
| DEM-P1 | `specs/mobile-p1/ui/prototype/{ios,android}/index.html` `#sc-me` |
| DEM | `specs/me/ui/prototype/{ios,android}/index.html` |
| MAP | `docs/html-to-native-map.md` + `ui/html-to-native-map.md` |
| DA | `_data-analy/me-*.md` |

## 1. Pattern

| Surface | Tab 5 · selected **Tôi** · large title · grouped rows |
| Action this slug | Hub display + logout local + toast sibling |
| Frame | iOS 390×844 · Android 412×915 |

## 2. Screens / DES-MOB-*

| DES / sc-* | Tên VN | CTA |
|------------|--------|-----|
| `DES-MOB-ME` `#sc-me` | Tôi | rows |
| `DES-MOB-TABBAR` | Tab 5 | chrome `shell-tabs` · `LinmTabBar` dual · label **`tabLabel` 10** · Tuần đường **`location.fill` ≡ Place** · **cấm** `TabView` / M3 `NavigationBar` / `mappin` kim dài |

### IA lock

```
(auth) Login  →  Tab 5
  Trang Chủ (kit + btn-logout)
  Tuần đường / Vấn đề / Công việc (placeholder)
  Tôi → #sc-me
#sc-me Đăng xuất → local clear → Login
```

**Cấm** invent tab · «Có mạng» · watermark Gói · device label trên title.

## 3. Field inventory

| Field | VN | Kit dual | Notes |
|-------|----|----------|-------|
| title | Tôi | `LinmLargeTitle` | |
| profile | tên live | `LinmListRow` + person | iOS chevron · Android không |
| offlineQueue | Hàng đợi mất sóng | `LinmListRow` | toast sibling |
| signal | Tín hiệu | `LinmListRow` + `LinmNetSignalMark` | iOS toast **Đã làm mới** |
| feedback | Góp ý | `LinmListRow` | toast |
| camView | Camera xem | `LinmListRow` | toast |
| ops | Thông báo | `LinmListRow` | toast · badge 0 ẩn |
| settings | Cài đặt | `LinmListRow` | **iOS only** toast |
| logout | Đăng xuất | `LinmListRow` danger | local |
| tab | Tôi | `LinmTabBar` · `tabLabel` **10** | **cấm** scale <10 · proto Android **cấm** 11 |

SF ↔ Material: house/Home · **`location.fill`/Place** (tab Tuần đường) · warning/Warning · wrench/Build · person/Person. **Cấm** tab `mappin`.

## 4. Cấm

WebView HTML · M3 purple nav selected · `alert` · hardcode mock name trên production.

## Version meta

skillId=agent-design-mobile · skillVersion=2026.08.19.07 · workflowVersion=2026.08.19.19 · generatedAt=2026-08-19T02:20:00.000Z
