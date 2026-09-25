# html-to-native-map — nghiem-thu

**Sources:** dual `#sc-nghiem-thu` · DA controlHint · PO § Delta MAU+Result · map skill `html-to-native-map.md`  
**changeScope:** `edit_page` · mobile list · MAU-10 + ResultCode overlay  
**Cấm** WebView bọc HTML · invent `api/v1/nghiem-thu` · ERP.* · demoItems SSOT · «Mẫu nghiệm thu NN»

| Demo | Zone | HTML / token | iOS kit | Android kit | Notes |
|------|------|--------------|---------|-------------|-------|
| DES-MOB-NGHIEM-THU | Header | `.nav-bar` / `.top-bar` · `.nav-title` | `LinmTopBar` | same | title 17 / ~20 |
| DES-MOB-NGHIEM-THU | Back | `.nav-btn` + `#i-chevron-left` · text «Tuần đường» (iOS) | leading | `icon-btn` chevron only | `go('patrol-home')` |
| DES-MOB-NGHIEM-THU | Trailing | `.nav-trail` **Tạo** | TextButton | same | → `nghiem-thu-create` |
| DES-MOB-NT-SEARCH | Search | `.search-wrap` + `#i-search` + `input type=search` | `LinmSearchField` | same | placeholder **Tìm mẫu nghiệm thu…** · `?search=` |
| Row | List | `.list-row` · `#i-check` · `.row-title` ≥16 · `.row-sub` 13 | `LinmListRow` | same | Code · **TemplateLabel MAU-10** · Route · Km |
| DES-MOB-NT-STATUS | Status | `.badges` > `.badge` Status | StatusBadge | same | draft/in_progress/done/cancelled |
| DES-MOB-NT-RESULT | Result | `.badges` > `.badge` Result | ResultBadge | same | pass/fail/deduct · **ẩn** null |
| Chevron | Affordance | `#i-chevron-right` | chevron | same | detail |
| Empty | EmptyChrome | `.empty` | EmptyChrome | same | `?empty=1` · 0 Items |
| Toast fail | Banner | `#toast` | `LinmToast` | Snackbar | `?fail=1` · **cấm** alert |
| Shell Tab 5 | Chrome | `.tabbar` / `.nav` · `data-tab=field` | `LinmTabBar` | NavigationBar | **giữ** · không invent |
| Entry hub | — | `#row-nghiem-thu` `#i-check` trên patrol-home | reuse | reuse | sub BDTX · **không** reimplement |

## CSS token (ý nghĩa — không clone px)

| CSS demo | Native |
|----------|--------|
| `--blue` / `#0C84C0` | brand primary tint |
| `--green` / `#34C759` | success / Đạt / Hoàn thành |
| `--orange` / `#FF9500` | Khấu trừ |
| `--danger` | Không đạt |
| `--surface` `#F2F2F7` | page background |
| `.row-sub` 13 / `.row-title` 16 / title 17 | Dynamic Type / M3 scale |
| `.badges` column gap 4 | Status trên · Result dưới |

## JS hành vi → native

| Demo JS | Native |
|---------|--------|
| `render(DEMO)` default | `GET patrol/nghiem-thu` → Items · **cấm** ship DEMO |
| rowSub MAU-10 string | `TemplateType`→Label + Route + KmFrom |
| `result` null → no badge | `ResultCode` null/draft → ẩn ResultBadge |
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
| Status / Template / Result labels | `GET …/init-data` Statuses · TemplateTypes(+criteria) · ResultCodes |
| Scores / Files | **OUT** list · create/detail FileService |
| Schema | `Schema_NghiemThuMau` → SA |

**Cấm** invent root path · ERP.* · gộp WO / sessions · hardcode 100+ tiêu chí FE.

## Version meta

| Field | Value |
|-------|-------|
| skillId | mobile-ui-ux-analy |
| generatedAt | 2026-09-20T00:55:00.000Z |
| contentHash | sha256:1044ba719edda88d256d5c2a780cd2293f2fab87e2a39acdbb86001fad6ff659 |

---
<!-- Version meta: skillId=mobile-ui-ux-analy contentHash=sha256:1044ba719edda88d256d5c2a780cd2293f2fab87e2a39acdbb86001fad6ff659 -->
