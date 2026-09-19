# Design — nghiem-thu (mobile list)

| Field | Value |
|-------|-------|
| feature | `nghiem-thu` |
| title | [Mobile] [Tuần đường] -> Công tác nghiệm thu |
| role | `/agent-design-mobile` |
| status | **confirmed** (autoApprove=ON · `design_confirm=approve`) |
| packKind | **`list`** |
| changeScope | `edit_page` · delta = native list only · **keep** web Full-page Kind B |
| formPattern | **N/A** on list slug · create/detail = sibling sheets (`pending_confirm`) |
| taskId | `task_059c4327` |
| priorPo | `po/requirement.md` **done** · `handoff/po-compact.md` |
| priorDa | `_data-analy/nghiem-thu-control-hint.md` + `nghiem-thu-real-data.md` **done** · hash skip · **cấm** re-scan (`GAP-DES-DEMO-RESCAN-01`) |
| contentHash | `sha256:a635f3f55a8bedd952c4449056cf072a8eda890eda2b30a45e84bda5d7bf3859` |
| real_view_parity | `v1` |
| updatedAt | `2026-09-19T15:50:00.000Z` |

## § Keep web (confirmed · không đổi)

Web MFE Kind B A–D + Full page `data-form-cols=5` · LeaveConfirmModal · FileMulti · route `/nghiem-thu` — **giữ** (task_16791ccc…). Lane này **chỉ** native dual list.

## § Delta Current vs New (`edit_page` · mobile)

| ID | Current | New (Design DoD) | Surface |
|----|---------|------------------|---------|
| GAP-MOB-NT-LIST-01 | Native list chưa ship | Dual `#sc-nghiem-thu` `DES-MOB-NGHIEM-THU` | list |
| GAP-MOB-NT-DATA-01 | Demo toast rows | Proto rows = preview only · ship GET BFF · empty/fail chrome | list |
| GAP-MOB-NT-ROW-01 | toast code | Row tap → `nghiem-thu-detail` + `Id` | nav |
| GAP-MOB-NT-CREATE-01 | CTA Tạo demo | Trailing **Tạo** → `nghiem-thu-create` | nav |
| GAP-MOB-NT-FILTER-01 | placeholder search | `LinmSearchField` · `?search=` | filter |

## reviewUrl (dual — REQUIRED)

| Platform | Path | reviewUrl |
|----------|------|-----------|
| iOS | `ui/prototype/ios/index.html` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu/ui/prototype/ios/index.html` |
| iOS empty | same + `?empty=1` | `…/ios/index.html?empty=1` |
| iOS fail | same + `?fail=1` | `…/ios/index.html?fail=1` |
| Android | `ui/prototype/android/index.html` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu/ui/prototype/android/index.html` |
| Android empty | same + `?empty=1` | `…/android/index.html?empty=1` |
| Android fail | same + `?fail=1` | `…/android/index.html?fail=1` |

**peerStdUrl:** `http://localhost:9304/patrol` (web clone ref only · **cấm** `mfeStdUrl` native) · **cấm** `yarn start:std` / e2e ở role này.

## Frame / chrome

| | iOS | Android |
|--|-----|---------|
| Frame | 390×844 | 412×915 |
| Back | `#i-chevron-left` + **Tuần đường** | icon-btn chevron only |
| Title | **Công tác nghiệm thu** 17 | TopAppBar ~20 |
| Trailing | TextButton **Tạo** | same |
| Shell | Tab 5 · tab **`field`** active | Nav 5 · cùng index |
| pack tabs | **none** · **cấm** invent (`GAP-TAB-01`) | same |

## DES table

| DES | Zone | iOS | Android | Notes |
|-----|------|-----|---------|-------|
| `DES-MOB-NGHIEM-THU` | `#sc-nghiem-thu` | push từ hub `#row-nghiem-thu` | same | `data-tab="field"` |
| `DES-MOB-NT-SEARCH` | SearchField | `LinmSearchField` `#i-search` | same | placeholder **Tìm mẫu nghiệm thu…** · `?search=` |
| Row | `LinmListRow` | `#i-check` + Code ≥16 · sub 13 · Badge · `#i-chevron-right` | same | bind `Code` · `TemplateType`/`Route`/`KmFrom` · `Status` |
| EmptyChrome | empty | «Chưa có phiếu nghiệm thu» | same | 0 Items + OK · `?empty=1` |
| Toast fail | `#toast` | `LinmToast` | Snackbar-style | 4xx/offline · `?fail=1` · **cấm** alert |
| Hub entry | `#row-nghiem-thu` | trên `patrol-home` | same | **không** reimplement trên pack |

## SF ↔ Material icon

| `#i-*` | Motif | SF Symbol | Material |
|--------|-------|-----------|----------|
| `#i-chevron-left` | `M15 5l-7 7 7 7` | `chevron.left` | `ArrowBack` |
| `#i-chevron-right` | `M9 5l7 7-7 7` | `chevron.right` | `ChevronRight` |
| `#i-search` | circle + stem | `magnifyingglass` | `Search` |
| `#i-check` | check path | `checkmark` | `Check` |
| `#i-home` / `#i-mappin` / `#i-warning` / `#i-wrench` / `#i-person` | shell Tab 5 | same motif dual | same |

**Cấm** invent `#i-*` · **cấm** lệch `d=` dual.

## Copy VN (SSOT — parity dual)

| Key | Copy |
|-----|------|
| Title | **Công tác nghiệm thu** |
| Back (iOS) | **Tuần đường** |
| Trailing | **Tạo** |
| Search placeholder | **Tìm mẫu nghiệm thu…** |
| Empty title | **Chưa có phiếu nghiệm thu** |
| Empty hint | **Nhấn Tạo để lập phiếu mới** |
| Toast fail | **Không tải được danh sách nghiệm thu** |
| Badge | **Nháp** / **Đang NT** / **Hoàn thành** / **Hủy** (demo «Xong» → ship **Hoàn thành**) |
| Proto rows (preview only) | `NT-20260906-0001` · `NT-20260905-0012` |
| Tabs | Trang Chủ · Tuần đường · Vấn đề · Công việc · Tôi |

**Cấm ship:** watermark Gói · device label · «Có mạng» · `demoItems` SSOT · ERP.* · gộp create/detail.

## Kit map

| Demo | Kit | Notes |
|------|-----|-------|
| `.nav-bar` / `.top-bar` | `LinmTopBar` | trailing TextButton Tạo |
| `.search-wrap` | `LinmSearchField` | query `search` |
| `.list-row` | `LinmListRow` | tap → detail |
| `.badge` | StatusBadge | init-data map |
| `.empty` | EmptyChrome | 0 items |
| `#toast` | `LinmToast` | fail/offline |
| `.tabbar` / `.nav` | `LinmTabBar` | field active |

## States

| State | Query / trigger | UI |
|-------|-----------------|-----|
| default | — | 2 proto rows (preview) · ship = live Items |
| empty | `?empty=1` | EmptyChrome · giữ shell + Tạo |
| fail | `?fail=1` | empty list + toast fail |
| search | input | filter local proto · ship = `?search=` |
| loading | appear | Progress (Dev) · proto N/A |

## Prototype (REQUIRED)

| | |
|--|--|
| Artifact | `ui/prototype/ios/index.html` · `ui/prototype/android/index.html` |
| List zones | TopBar · Search · ListRow · Empty · Toast · Tab 5 |
| Form zones | **N/A** list |
| SSOT | control-hint · real-data §A+§B · `artifact-prefix.md` |
| **reviewUrlIos** | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu/ui/prototype/ios/index.html` |
| **reviewUrlAndroid** | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu/ui/prototype/android/index.html` |
| **peerStdUrl** | `http://localhost:9304/patrol` |
| **real_view_parity** | `v1` |

### Wire (list)

```
[TopBar] ← Tuần đường | Công tác nghiệm thu | Tạo
[Search] LinmSearchField «Tìm mẫu nghiệm thu…»
[List]   #i-check · Code · sub · Badge · chevron → detail
[Empty]  Chưa có phiếu · hint Tạo
[Toast]  fail GET
[Tab]    field active
```

## Gate

| Gate | Result |
|------|--------|
| `ux-analy.md` §1–§9 | PASS |
| `html-to-native-map.md` | PASS |
| `ui/review/demo-parity.md` Must | PASS |
| `design_confirm` | **approve** (autoApprove ON) |
| e2e / start:std | **cấm** this role |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-design-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.19.3 |
| rulesVersion | 2026.09.19.6 |
| generatedAt | 2026-09-19T15:50:00.000Z |
| versionGate | ok |
| contentHash | sha256:a635f3f55a8bedd952c4449056cf072a8eda890eda2b30a45e84bda5d7bf3859 |

---
<!-- Version meta: skillId=agent-design-mobile skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.09.19.3 rulesVersion=2026.09.19.6 versionGate=ok -->
