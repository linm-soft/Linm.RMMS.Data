# UX analy — nghiem-thu

**Sources:** `ui/prototype/ios/index.html` · `ui/prototype/android/index.html` · `ui/design.md` · PO compact · DA control-hint + real-data  
**Gate:** `/mobile-ui-ux-analy` §1–§9 · **REQUIRED** trước Dev  
**Slash:** `/mobile-ui-ux-analy` · `task_5999afb9` · `2026-09-20T00:55:00.000Z`  
**Brand tokens:** Primary `#0C84C0` · deep `#086A9A` · success `#34C759` · orange `#FF9500` · danger `#FF3B30` · surface `#F2F2F7` · label `#1C1C1E` · muted `#8E8E93`  
**Hash skip:** DA contentHash `sha256:1044ba719edda88d256d5c2a780cd2293f2fab87e2a39acdbb86001fad6ff659` · **cấm** re-scan DemoRoot (`GAP-DES-DEMO-RESCAN-01`)  
**changeScope:** `edit_page` · § Delta MAU-10 Label + ResultCode badge · keep list chrome

## 1. IA

```
Login → Tab Tuần đường (shell Tab 5 · index field)
  → Hub #sc-patrol-home
       → row «Công tác nghiệm thu» #row-nghiem-thu #i-check
            sub: 10 công việc BDTX · ảnh / video hiện trường
            → push #sc-nghiem-thu
  → #sc-nghiem-thu DES-MOB-NGHIEM-THU
       → appear GET mobile-bff/api/v1/patrol/nghiem-thu (+ ?search=)
            · Items → Code / sub MAU-10 / StatusBadge / ResultBadge(optional) / chevron
            · 0 + OK → EmptyChrome
            · 4xx/offline → empty + toastFail
       → trailing Tạo → nghiem-thu-create (sibling pending_confirm · scores)
       → row tap → nghiem-thu-detail + Id (sibling pending_confirm · scores)
  → back → patrol-home
```

`tabs: none` trên surface · **cấm** invent segment (`GAP-TAB-01`). Tab shell **`field`** active.

## 2. Màn

| DES / sc-* | Tên VN | iOS chrome | Android chrome | CTA |
|------------|--------|------------|----------------|-----|
| DES-MOB-NGHIEM-THU / `#sc-nghiem-thu` | Công tác nghiệm thu | back «Tuần đường» + chevron · title 17 · trail Tạo · Tab 5 field | icon-btn chevron · TopAppBar ~20 · trail Tạo · Nav 5 field | Tạo · row → detail |
| DES-MOB-NT-SEARCH | Search | `LinmSearchField` | same | filter `search` |
| DES-MOB-NT-STATUS | Status badge | StatusBadge | same | map init Statuses |
| DES-MOB-NT-RESULT | Result badge | ResultBadge · ẩn null | same | map ResultCodes |

## 3. Zone

### DES-MOB-NGHIEM-THU

| Zone | Demo (user thấy) | Map row (html-to-native-map) | SwiftUI | Compose |
|------|------------------|------------------------------|---------|---------|
| Header | Tuần đường · Công tác nghiệm thu · Tạo | A `.nav-bar` / `.top-bar` | `LinmTopBar` | same |
| Search | Tìm mẫu nghiệm thu… | A `.search-wrap` + `#i-search` | `LinmSearchField` | same |
| Row | NT-* · MAU-10 sub · Status ± Result · chevron | A `.list-row` + `#i-check` + `.badges` | `LinmListRow` | same |
| Status | Nháp / Đang NT / Hoàn thành / Hủy | `DES-MOB-NT-STATUS` | StatusBadge | same |
| Result | Đạt / Không đạt / Khấu trừ | `DES-MOB-NT-RESULT` | ResultBadge | same · **ẩn** null |
| Empty | Chưa có phiếu nghiệm thu | A `.empty` | EmptyChrome | same |
| Toast fail | Không tải được danh sách nghiệm thu | D `#toast` | `LinmToast` | Snackbar |
| Tab | field active | A `.tabbar` / `.nav` | `LinmTabBar` | NavigationBar |

**States:** default (proto preview / ship live) · empty (`?empty=1`) · fail (`?fail=1`) · search · loading (Dev) · leave **n/a** list · GPS/camera **n/a** · scores **n/a** list

### DES-MOB-NT-SEARCH

| Zone | Demo | Map row | SwiftUI | Compose |
|------|------|---------|---------|---------|
| SearchField | placeholder VN | `input type=search` | `.searchable` / kit | `SearchBar` |

## 4. Copy SSOT

Nhãn lấy đúng HTML dual — **cấm** invent / lệch iOS↔Android (trừ back: iOS có chữ «Tuần đường»).

| Zone | Copy |
|------|------|
| rowSub | `{TemplateLabel MAU-10} · {Route} Km {KmFrom}` |
| hub sub | 10 công việc BDTX · ảnh / video hiện trường |
| Result null | **không** hiện badge / **không** «Chưa đánh giá» trên list |

**Cấm trên máy:** watermark «bản Gói N» · device label · «Mẫu nghiệm thu NN» · `demoItems` SSOT · loanword Offline như title.

## 5. Brand

| Token | Hex | Dùng |
|-------|-----|------|
| Primary | `#0C84C0` | tint · tab · badge Nháp · trail |
| Deep | `#086A9A` | badge Đang NT |
| Success | `#34C759` | badge Hoàn thành / Đạt · row icon |
| Orange | `#FF9500` | badge Khấu trừ |
| Danger | `#FF3B30` / `#E53935` | badge Không đạt |
| Surface | `#F2F2F7` | nền |
| Card | `#FFFFFF` | list · search |
| Label / muted | `#1C1C1E` / `#8E8E93` | title / sub |

**Cấm** skin đỏ Ministry / CCCD (`GAP-MOB-BRAND-01`).

## 6. Signal

N/A trên list surface — **không** pill mạng · **cấm** tap cycle proto.

## 7. Pictogram

`#i-check` row · `#i-search` · `#i-chevron-left/right` · shell Tab 5 — **cấm** invent `#i-*` · dual `d=` khớp.

## 8. A11y / size

| Element | Min |
|---------|-----|
| Title / Code / Search / Trail | ≥16 |
| Sub / Badge | 13 |
| Hit target | ≥44pt / 48dp |
| Badge stack | Status trên · Result dưới · gap 4 |

## 9. Demo-parity Must

| Must | Check | Result |
|------|-------|--------|
| Dual copy VN khớp (trừ iOS back text) | ios ↔ android | PASS |
| rowSub MAU-10 · **không** «Mẫu 0N» | proto DEMO | PASS |
| Result badge chỉ khi có ResultCode | draft ẩn · done+pass hiện | PASS |
| Empty / fail chrome | `?empty=1` / `?fail=1` | PASS |
| Tab `field` active · tabs none | shell | PASS |
| **Cấm** invent API / ERP.* / scores on list | design.md | PASS |

**Must count = 0 fail** · `design_confirm=approve`.

## Version meta

| Field | Value |
|-------|-------|
| skillId | mobile-ui-ux-analy |
| generatedAt | 2026-09-20T00:55:00.000Z |
| contentHash | sha256:1044ba719edda88d256d5c2a780cd2293f2fab87e2a39acdbb86001fad6ff659 |

---
<!-- Version meta: skillId=mobile-ui-ux-analy contentHash=sha256:1044ba719edda88d256d5c2a780cd2293f2fab87e2a39acdbb86001fad6ff659 -->
