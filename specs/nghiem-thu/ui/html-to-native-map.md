# html-to-native-map — nghiem-thu

**Sources:** dual `#sc-nghiem-thu` · DA controlHint · PO § Delta · map skill `html-to-native-map.md`  
**changeScope:** `edit_page` · mobile list  
**Cấm** WebView bọc HTML · invent `api/v1/nghiem-thu` · ERP.* · demoItems SSOT

| Demo | Zone | HTML / token | iOS kit | Android kit | Notes |
|------|------|--------------|---------|-------------|-------|
| DES-MOB-NGHIEM-THU | Header | `.nav-bar` / `.top-bar` · `.nav-title` | `LinmTopBar` | same | title 17 / ~20 |
| DES-MOB-NGHIEM-THU | Back | `.nav-btn` + `#i-chevron-left` · text «Tuần đường» (iOS) | leading | `icon-btn` chevron only | `go('patrol-home')` |
| DES-MOB-NGHIEM-THU | Trailing | `.nav-trail` **Tạo** | TextButton | same | → `nghiem-thu-create` |
| DES-MOB-NT-SEARCH | Search | `.search-wrap` + `#i-search` + `input type=search` | `LinmSearchField` | same | placeholder **Tìm mẫu nghiệm thu…** · `?search=` |
| Row | List | `.list-row` · `#i-check` · `.row-title` ≥16 · `.row-sub` 13 | `LinmListRow` | same | Code · Template·Route·Km |
| Badge | Status | `.badge` blue/green/info/gray | StatusBadge | same | init-data map · ship **Hoàn thành** (không «Xong») |
| Chevron | Affordance | `#i-chevron-right` | chevron | same | detail |
| Empty | EmptyChrome | `.empty` | EmptyChrome | same | `?empty=1` · 0 Items |
| Toast fail | Banner | `#toast` | `LinmToast` | Snackbar | `?fail=1` · **cấm** alert |
| Shell Tab 5 | Chrome | `.tabbar` / `.nav` · `data-tab=field` | `LinmTabBar` | NavigationBar | **giữ** · không invent |
| Entry hub | — | `#row-nghiem-thu` `#i-check` trên patrol-home | reuse | reuse | **không** reimplement |

## CSS token (ý nghĩa — không clone px)

| CSS demo | Native |
|----------|--------|
| `--blue` / `#0C84C0` | brand primary tint |
| `--green` / `#34C759` | success badge / row icon |
| `--surface` `#F2F2F7` | page background |
| `.row-sub` 13 / `.row-title` 16 / title 17 | Dynamic Type / M3 scale |
| search / list padding 8–16 | HIG 8pt · M3 4dp grid |

## JS hành vi → native

| Demo JS | Native |
|---------|--------|
| `render(DEMO)` default | `GET patrol/nghiem-thu` → Items · **cấm** ship DEMO |
| `?empty=1` | 0 Items + OK → EmptyChrome |
| `?fail=1` | `.loadFailed` → toast fail |
| search `input` | query `?search=` debounce |
| `goCreate` | nav `nghiem-thu-create` |
| `goDetail(id)` | nav `nghiem-thu-detail` + `Id` |
| `goBack` | pop → `patrol-home` |

## BFF bind (Design note · SA chi tiết)

| Zone | Method · Path |
|------|----------------|
| List items | `GET mobile-bff/api/v1/patrol/nghiem-thu` |
| Search | same + `?search=` |
| Badge / template labels | `GET …/init-data` |
| Files | **OUT** list · create/detail FileService |

**Cấm** invent root path · ERP.* · gộp WO / sessions.

## Version meta

| Field | Value |
|-------|-------|
| skillId | mobile-ui-ux-analy |
| generatedAt | 2026-09-19T15:50:00.000Z |
| contentHash | sha256:a635f3f55a8bedd952c4449056cf072a8eda890eda2b30a45e84bda5d7bf3859 |

---
<!-- Version meta: skillId=mobile-ui-ux-analy contentHash=sha256:a635f3f55a8bedd952c4449056cf072a8eda890eda2b30a45e84bda5d7bf3859 -->
