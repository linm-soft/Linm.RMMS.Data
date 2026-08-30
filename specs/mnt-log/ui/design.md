# Design — mnt-log (mobile sheet → screen · Nhật ký xử lý)

| Field | Value |
|-------|-------|
| feature | `mnt-log` |
| title | [Mobile] [Công việc] -> Nhật ký xử lý |
| role | `/agent-design-mobile` |
| status | **confirmed** (autoApprove=ON · `design_confirm`) |
| packKind | **`sheet`** (PO chốt · GAP-MOB-MNT-LOG-PACK-01 · surface = **full screen** `#sc-mnt-log` · **cấm** bottom-sheet chrome) |
| changeScope | `new_page` |
| stack | `native_dual` |
| taskId | `task_bda2e253` |
| priorPo | `po/requirement.md` **confirmed** · task `task_d21ff1dc` |
| priorDa | `_data-analy/mnt-log-control-hint.md` + `mnt-log-real-data.md` **confirmed** · hash skip · **cấm** re-scan (`GAP-DES-DEMO-RESCAN-01`) |
| contentHash | `sha256:mnt-log-mobile-control-hint-20260829` |
| realDataHash | `sha256:mnt-log-mobile-real-data-20260829` |
| actionTreeHash | `sha256:mnt-log-mobile-action-tree-20260829` |
| bffContentHash | `sha256:mnt-log-mobile-bff-20260829` |
| ctxContentHash | `sha256:87761a7752a493d6ad176d96d76ccaf6116ea407ec5ec5513b6e12372a58d701` |
| demoContentHash | `sha256:394ab44597648f04b25e6d58476378c16141feb53d3b58d39923b3defcff8328` |
| priorWeb | — (mobile-first · không design-web bắt buộc) |
| updatedAt | `2026-08-29T07:22:00.000Z` |

## reviewUrl (dual — REQUIRED)

| Platform | Path | reviewUrl |
|----------|------|-----------|
| iOS | `ui/prototype/ios/index.html` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/mnt-log/ui/prototype/ios/index.html` |
| iOS missing WO | same + `?missing=1` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/mnt-log/ui/prototype/ios/index.html?missing=1` |
| iOS empty | same + `?empty=1` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/mnt-log/ui/prototype/ios/index.html?empty=1` |
| iOS GET fail | same + `?fail=1` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/mnt-log/ui/prototype/ios/index.html?fail=1` |
| Android | `ui/prototype/android/index.html` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/mnt-log/ui/prototype/android/index.html` |
| Android missing WO | same + `?missing=1` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/mnt-log/ui/prototype/android/index.html?missing=1` |
| Android empty | same + `?empty=1` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/mnt-log/ui/prototype/android/index.html?empty=1` |
| Android GET fail | same + `?fail=1` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/mnt-log/ui/prototype/android/index.html?fail=1` |
| Workflow (ref) | mobile-p1 `#sc-mnt-list` `#i-list` toast | cite only · hash skip · **cấm** re-scan |

**Cấm** `mfeStdUrl` / `yarn start:std` / port 9301 · **cấm** board path chỉ `index.html` (`GAP-MOB-DES-PFX-01`).

## Frame / chrome

| | iOS | Android |
|--|-----|---------|
| Frame | 390×844 | 412×915 |
| Back | `#i-chevron-left` + label **Công việc** | icon-btn chevron only (parity OK) |
| Title | inline **Nhật ký xử lý** 17 | TopAppBar **Nhật ký xử lý** ~20 |
| Shell | Tab 5 · tab **`work`** (Công việc) active | NavigationBar 5 · cùng index |
| pack tabs | **none** — **cấm** invent segment (`GAP-TAB-01`) | same |
| Surface | **full screen** `#sc-mnt-log` — **cấm** bottom-sheet | same |
| Primary CTA | **none** (readonly) | same |

## DES table

| DES | Zone | iOS | Android | Notes |
|-----|------|-----|---------|-------|
| `DES-MOB-MNT-LOG` | Screen owner `#sc-mnt-log` | push từ mnt-list `#i-list` (done) | same | `data-tab="work"` · thay toast-only |
| Header WO | title · code · status | `LinmListRow` ×3 + badge | same | SSOT **Nạo cống** · CV-20260809-0002 · **Đã hoàn thành** |
| Section log | **Nhật ký** | SectionLabel 13 | same | |
| Timeline | mốc derive newest-first | TimelineList / `LinmList` | same | created · due · progress · done (SSOT) |
| Empty | **Chưa có nhật ký** | EmptyChrome | same | `?empty=1` / thiếu id / 0 derive |
| Toast Err | lỗi mạng / 404 | `LinmToast` | same | `?fail=1` · **cấm** fake timeline |
| Banner missing | thiếu WO id | in-app banner | same | `?missing=1` |
| Shell Tab 5 | chrome | `LinmTabBar` | NavigationBar | **giữ** · work active |

## SF ↔ Material icon

| `#i-*` | Motif (SSOT kit / mobile-p1 cite) | SF Symbol | Material |
|--------|----------------------------------|-----------|----------|
| `#i-chevron-left` | `M15 5l-7 7 7 7` | `chevron.left` | `ArrowBack` |
| `#i-home` | house path | `house` | `Home` |
| `#i-mappin` | pin + circle r=2.2 | `mappin` | `Place` |
| `#i-warning` | triangle | `exclamationmark.triangle` | `Warning` |
| `#i-wrench` | wrench path | `wrench` | `Build` |
| `#i-person` | person | `person` | `Person` |
| `#i-list` | 3 lines + dots (parent entry) | `list.bullet` | `List` |

Entry parent `#i-list` = mnt-list **done** only — **không** reimplement trên pack. Timeline dots = CSS chrome (không invent `#i-*`). **Cấm** invent `#i-*` · **cấm** lệch `d=` dual (`GAP-MOB-ICON-*`).

## Copy VN (SSOT — parity dual)

| Key | Copy |
|-----|------|
| Title | **Nhật ký xử lý** |
| Back (iOS) | **Công việc** |
| WO title label / value | **Công việc** / **Nạo cống** |
| WO code label / value | **Mã** / **CV-20260809-0002** |
| Status label / value | **Tình trạng hiện tại** / **Đã hoàn thành** (`done`) |
| Section | **Nhật ký** |
| Timeline (newest-first SSOT) | **Hoàn thành** · **Tiến độ hiện tại 100%** · **Hạn: 2026-08-09 16:00** · **Tạo công việc** |
| Empty | **Chưa có nhật ký** |
| Banner missing | **Thiếu công việc — không tải nhật ký. Mở từ mnt-list `#i-list`.** |
| Toast fail | **Không tải được nhật ký** |
| Tabs | Trang Chủ · Tuần đường · Vấn đề · Công việc · Tôi |

**Cấm ship:** watermark Gói · device label «iPhone»/«· Android» · «Có mạng» · fake timeline · map embed · bottom-sheet · badge P1/P2 header · Primary write · composer chat · gộp estimate/progress/chat.

## Kit map

| Demo | Kit iOS+Android | Notes |
|------|-----------------|-------|
| `.nav-bar` / `.top-bar` | `LinmTopBar` | leading chevron · iOS back text «Công việc» |
| `.card-group` `.row` | `LinmListRow` | WO header · label 13 / value ≥16 |
| `.section-label` | SectionLabel | **Nhật ký** · 13 |
| `.timeline` / `.tl-item` | TimelineList / `LinmList` | vertical · newest-first |
| `.empty` | EmptyChrome | **Chưa có nhật ký** |
| `#toast` | `LinmToast` | **cấm** UIAlert / AlertDialog |
| `.tabbar` / `.nav` | `LinmTabBar` | shell Tab 5 · work |
| Entry `#i-list` (parent) | `LinmIconButton` | mnt-list done only |

`kit_missing_confirm` = **N/A** — TopBar / ListRow / List / Empty / Toast / IconButton đã có dual kit (cite mnt-list · mnt-progress · estimate). Timeline = `LinmList` group + vertical rail (Design) — không invent tên kit mới.

## Control map (PO §5 · DA · real-data §B)

| Field | controlHint | Kit | Bind |
|-------|-------------|-----|------|
| screenTitle | TopBar title | `LinmTopBar` | — |
| navBack | BackButton | leading | `go('mnt-list')` |
| woTitle | ListRow readonly | `LinmListRow` | nav / GET `title` |
| woCode | Text readonly | `LinmListRow` | `code` |
| woStatus | Badge readonly | badge + row | status → VN mnt-list |
| sectionLog | SectionLabel | label 13 | — |
| timeline | TimelineList / List | `LinmList` / timeline | client derive GetById · newest-first |
| logAt | Text caption | caption 13 | `CreatedAt` / `DueAt` / `UpdatedAt` |
| logBody | Text | ≥16 | templates PO §5 |
| empty | EmptyChrome | EmptyChrome | thiếu id / 0 derive |
| toastErr | Toast | `LinmToast` | GET fail · **cấm** fake |
| actLog | IconButton (parent) | `#i-list` | mnt-list **done** entry only |

### Timeline derive (P1 · newest-first)

| kind | when | VN body | at |
|------|------|---------|-----|
| `done` | status=`done` | Hoàn thành | `UpdatedAt` |
| `note` | Note non-empty | {Note} | `UpdatedAt` |
| `progress` | %>0 hoặc in_progress/done | Tiến độ hiện tại {n}% | `UpdatedAt` |
| `description` | Description non-empty | Mô tả: {Description} | `CreatedAt` |
| `due` | DueAt set | Hạn: {fmt} | `DueAt` |
| `created` | always | Tạo công việc | `CreatedAt` |

Demo SSOT default (Design gate fallback): done · progress 100% · due · created — **không** description/note row.

## UX / parity gates

| Artifact | Path | Status |
|----------|------|--------|
| ux-analy §1–§9 | `ui/ux-analy.md` | **done** |
| html-to-native-map | `ui/html-to-native-map.md` | **done** |
| demo-parity | `ui/review/demo-parity.md` | **PASS** · Must open **0** |
| dual prototype | `ui/prototype/{ios,android}/index.html` | **done** · `#sc-mnt-log` |

## design_confirm

| Gate | Decision |
|------|----------|
| autoApprove | **ON** |
| design_confirm | **approve** (self-confirm · dual + ux-analy + demo-parity PASS) |
| at | `2026-08-29T07:22:00.000Z` |
| next | `sa-mobile` · `be/solution-discovery.md` · **không** chain this turn (roleOnly · GAP-PKT-ROLE-01) |

## Out of scope (Design)

- Reimplement `mnt-list` / estimate / mnt-chat / mnt-progress
- Invent `api/v1/mnt-log` / `…/logs` / history collection
- Map embed · bottom-sheet chrome · ERP.* · `mfeStdUrl`
- Composer / Primary write / POST progress
- Re-scan demo HTML (`GAP-DES-DEMO-RESCAN-01`)
- Dev / SA / QA / e2e / Step 4b / migration

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | 2026-08-29T07:22:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:mnt-log-mobile-control-hint-20260829 |
| realDataContentHash | sha256:mnt-log-mobile-real-data-20260829 |
| demoContentHash | sha256:394ab44597648f04b25e6d58476378c16141feb53d3b58d39923b3defcff8328 |
| taskId | `task_bda2e253` |

---
<!-- Version meta: skillId=agent-design-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
