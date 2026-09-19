# UX analy — nghiem-thu

**Sources:** `ui/prototype/ios/index.html` · `ui/prototype/android/index.html` · `ui/design.md` · PO · DA controlHint + real-data  
**Gate:** `/mobile-ui-ux-analy` §1–§9 · **REQUIRED** trước Dev  
**Slash:** `/mobile-ui-ux-analy` · `task_059c4327` · `2026-09-19T15:50:00.000Z`  
**Brand tokens:** Primary `#0C84C0` · deep `#086A9A` · success `#34C759` · surface `#F2F2F7` · label `#1C1C1E` · muted `#8E8E93`  
**Hash skip:** DA contentHash `sha256:a635f3f55a8bedd952c4449056cf072a8eda890eda2b30a45e84bda5d7bf3859` · **cấm** re-scan DemoRoot (`GAP-DES-DEMO-RESCAN-01`)  
**changeScope:** `edit_page` · mobile list only · keep web Full-page

## 1. IA

```
Login → Tab Tuần đường (shell Tab 5 · index field)
  → Hub #sc-patrol-home
       → row «Công tác nghiệm thu» #row-nghiem-thu #i-check → push #sc-nghiem-thu
  → #sc-nghiem-thu DES-MOB-NGHIEM-THU
       → appear GET mobile-bff/api/v1/patrol/nghiem-thu (+ ?search=)
            · Items → rows Code / sub / Badge
            · 0 + OK → EmptyChrome
            · 4xx/offline → empty + toastFail
       → trailing Tạo → nghiem-thu-create (sibling pending_confirm)
       → row tap → nghiem-thu-detail + Id (sibling pending_confirm)
  → back → patrol-home
```

`tabs: none` trên surface · **cấm** invent segment (`GAP-TAB-01`). Tab shell **`field`** active.

## 2. Màn

| DES / sc-* | Tên VN | iOS chrome | Android chrome | CTA |
|------------|--------|------------|----------------|-----|
| DES-MOB-NGHIEM-THU / `#sc-nghiem-thu` | Công tác nghiệm thu | back «Tuần đường» + chevron · title 17 · trail Tạo · Tab 5 field | icon-btn chevron · TopAppBar ~20 · trail Tạo · Nav 5 field | Tạo · row → detail |
| DES-MOB-NT-SEARCH | Search | `LinmSearchField` | same | filter `search` |

## 3. Zone

### DES-MOB-NGHIEM-THU

| Zone | Demo (user thấy) | Map row (html-to-native-map) | SwiftUI | Compose |
|------|------------------|------------------------------|---------|---------|
| Header | Tuần đường · Công tác nghiệm thu · Tạo | A `.nav-bar` / `.top-bar` | `LinmTopBar` | same |
| Search | Tìm mẫu nghiệm thu… | A `.search-wrap` + `#i-search` | `LinmSearchField` | same |
| Row | NT-* · sub · Badge · chevron | A `.list-row` + `#i-check` | `LinmListRow` | same |
| Empty | Chưa có phiếu nghiệm thu | A `.empty` | EmptyChrome | same |
| Toast fail | Không tải được danh sách nghiệm thu | D `#toast` | `LinmToast` | Snackbar |
| Tab | field active | A `.tabbar` / `.nav` | `LinmTabBar` | NavigationBar |

**States:** default (proto preview / ship live) · empty (`?empty=1`) · fail (`?fail=1`) · search · loading (Dev) · leave **n/a** list · GPS/camera **n/a**

### DES-MOB-NT-SEARCH

| Zone | Demo | Map row | SwiftUI | Compose |
|------|------|---------|---------|---------|
| SearchField | placeholder VN | `input type=search` | `.searchable` / kit | `SearchBar` |

## 4. Copy SSOT

Nhãn lấy đúng HTML dual — **cấm** invent / lệch iOS↔Android (trừ back: iOS có chữ «Tuần đường»).

**Cấm trên máy:** watermark «bản Gói N» · device label «iPhone»/«· Android» · «Có mạng» · `demoItems` SSOT · loanword Offline như title.

## 5. Brand

| Token | Hex | Dùng |
|-------|-----|------|
| Primary | `#0C84C0` | tint · tab · badge Nháp · trail |
| Deep | `#086A9A` | badge Đang NT |
| Success | `#34C759` | badge Hoàn thành · row icon |
| Surface | `#F2F2F7` | nền |
| Card | `#FFFFFF` | list · search |
| Label / muted | `#1C1C1E` / `#8E8E93` | title / sub |

**Cấm** skin đỏ Ministry / CCCD (`GAP-MOB-BRAND-01`).

## 6. Signal

N/A trên list surface — **không** pill mạng · **cấm** tap cycle proto.

## 7. Pictogram

Shell Tab 5 icons only (`#i-home` · `#i-mappin` · `#i-warning` · `#i-wrench` · `#i-person`) + list `#i-check` · `#i-search` · chevrons. **Cấm** invent asset-kcht trên list.

## 8. Motion

Không `/wf-anim` — N/A.

## 9. GAP

| ID | Demo vs native | Quyết định |
|----|----------------|------------|
| GAP-MOB-NT-DATA-01 | Proto 2 rows preview | Ship GET BFF · **cấm** demoItems SSOT |
| GAP-MOB-NT-ROW-01 / CREATE-01 | toast navigate | Nav sibling create/detail (pending_confirm) |
| GAP-DES-DEMO-RESCAN-01 | hash skip | Dùng control-hint · **cấm** crawl mobile-p1 |
| Chrome iOS↔Android | back label vs icon-btn | Platform-OK · cùng nghĩa |

## Version meta

| Field | Value |
|-------|-------|
| skillId | mobile-ui-ux-analy |
| skillVersion | 2026.08.25.01 |
| generatedAt | 2026-09-19T15:50:00.000Z |
| contentHash | sha256:a635f3f55a8bedd952c4449056cf072a8eda890eda2b30a45e84bda5d7bf3859 |

---
<!-- Version meta: skillId=mobile-ui-ux-analy skillVersion=2026.08.25.01 contentHash=sha256:a635f3f55a8bedd952c4449056cf072a8eda890eda2b30a45e84bda5d7bf3859 -->
