# html-to-native-map — mnt-log (mobile)

**Sources:** dual `#sc-mnt-log` · DA controlHint · PO §5 · real-data §B · map skill `docs/html-to-native-map.md`  
**Cấm** WebView bọc HTML · invent `api/v1/mnt-log` / `…/logs` · ERP.* · bottom-sheet chrome · Primary write · composer · fake timeline

| Demo | Zone | HTML / token | iOS kit | Android kit | Notes |
|------|------|--------------|---------|-------------|-------|
| DES-MOB-MNT-LOG | Header | `.nav-bar` / `.top-bar` · `.nav-title` | `LinmTopBar` | same | title 17 / ~20 · **Nhật ký xử lý** |
| DES-MOB-MNT-LOG | Back | `.nav-btn` / `.icon-btn` + `#i-chevron-left` · text «Công việc» (iOS) | leading | `icon-btn` chevron only | `go('mnt-list')` |
| woTitle | List | `.card-group` `.row` · `#wo-title` | `LinmListRow` | same | label 13 · value ≥16 · **Nạo cống** |
| woCode | List | `.row` · `#wo-code` | `LinmListRow` | same | **CV-20260809-0002** |
| woStatus | List + badge | `.row` · `#wo-status-text` · `#wo-status-badge` | `LinmListRow` + badge | same | **Đã hoàn thành** |
| sectionLog | Section | `.section-label` · `#section-log` | SectionLabel | same | **Nhật ký** · 13 |
| timeline | Timeline | `#timeline` · `.tl-item` · `.tl-at` · `.tl-body` | TimelineList / `LinmList` | same | newest-first · derive |
| empty | Empty | `#empty` · `.empty` | EmptyChrome | same | **Chưa có nhật ký** |
| Toast Err | Banner | `#toast` | `LinmToast` | same | **cấm** alert · **cấm** fake |
| Banner missing | Warn | `.banner` · `#banner-missing` | Text / banner | same | `?missing=1` |
| Shell Tab 5 | Chrome | `.tabbar` / `.nav` · `data-tab=work` | `LinmTabBar` | NavigationBar | **giữ** · không invent |
| Entry mnt-list | — | `#i-list` parent (done) | navigate push | reuse | **không** reimplement trên pack |

## CSS token (ý nghĩa — không clone px)

| CSS demo | Native |
|----------|--------|
| `--blue` / `#0C84C0` | brand primary tint · timeline rail |
| `--surface` `#F2F2F7` | page background |
| `.row-sub` 13 / `.row-title` 16 | Dynamic Type / M3 scale |
| `.section-label` 13 | section |
| `.tl-at` 13 / `.tl-body` 16 | caption / body |
| `.empty` 16 | EmptyChrome |
| padding 8–16 rhythm | HIG 8pt · M3 4dp grid |
| iOS radius 12 / Android 16–28 | platform chrome OK |
| `.tl-dot` / rail | native timeline chrome (không invent `#i-*`) |

## JS hành vi → native

| Demo JS | Native |
|---------|--------|
| seed appear SSOT Nạo cống + 4 rows | nav args / `GET …/work-orders/{id}` · client derive · Design gate fallback |
| newest-first render | sort by `at` desc · templates PO §5 |
| `?empty=1` → hide timeline · show empty | 0 derive + no fallback · EmptyChrome |
| `?missing=1` banner + empty | thiếu WO id · chặn load |
| `?fail=1` toast + empty | GET fail/404 · `LinmToast` · **cấm** fake rows |
| `goBack` | pop `NavigationStack` / `NavController` → mnt-list · **không** leave modal |

## BFF bind (Design note · SA chi tiết)

| Zone | Method · Path |
|------|----------------|
| Prefill header + timeline | `GET maintenance/work-orders/{id}` · **primary** · client derive |
| Init status (opt) | `GET maintenance/work-orders/init-data` · chrome = mnt-list VN |
| History list API | **không live** · **cấm invent** · GAP-MOB-MNT-LOG-HIST-01 |
| Comments / progress write | **OUT** · `mnt-chat` / `mnt-progress` |

**Cấm** invent `api/v1/mnt-log` · `…/logs` · `LogController` trên Mobile.Bff · ERP.*.

## Version meta

| Field | Value |
|-------|-------|
| skillId | mobile-ui-ux-analy |
| generatedAt | 2026-08-29T07:22:00.000Z |
| contentHash | sha256:mnt-log-mobile-control-hint-20260829 |
| taskId | `task_bda2e253` |

---
<!-- Version meta: skillId=mobile-ui-ux-analy schemaVersion=2 -->
