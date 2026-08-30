# Design — mnt-list (mobile list · Công việc)

| Field | Value |
|-------|-------|
| feature | `mnt-list` |
| title | [Design] [Mobile] [Trang Chủ] -> Công việc |
| this role | `design` · `/agent-design-mobile` |
| status | `confirmed` (autoApprove=ON) |
| design_confirm | **approve** (`task_9df501b1`) |
| packKind | **`list`** (PO confirm) |
| changeScope | `new_page` |
| stack | `native_dual` |
| kit_missing_confirm | **N/A** — reuse map list kit dual (`LinmTopBar` · `LinmSearchField` · `LinmListRow` · rich-card · `LinmBadge` · `LinmIconButton` · `LinmToast`) |
| reviewUrlIos | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/mnt-list/ui/prototype/ios/index.html#sc-mnt-list` |
| reviewUrlAndroid | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/mnt-list/ui/prototype/android/index.html#sc-mnt-list` |
| ux-analy | `ui/ux-analy.md` §1–§9 |
| demo-parity | `ui/review/demo-parity.md` · Must **closed** |
| prior · po | `confirmed` · `po/requirement.md` |
| prior · data_analy | `confirmed` · `_data-analy/mnt-list-control-hint.md` · `mnt-list-real-data.md` · **hash skip** · **cấm** re-scan |
| updatedAt | `2026-08-29T01:50:00.000Z` |
| taskId | `task_9df501b1` |

## 0. Context & Demo

| ID | Path |
|----|------|
| CTX | `docs/context/features/mnt-list.md` |
| DEM-P1 | `specs/mobile-p1/ui/prototype/{ios,android}/index.html` `#sc-mnt-list` · `DES-MOB-MNT-LIST` |
| DEM | `specs/mnt-list/ui/prototype/{ios,android}/index.html` |
| MAP | `docs/html-to-native-map.md` + `ui/html-to-native-map.md` |
| DA | `_data-analy/mnt-list-control-hint.md` · `mnt-list-bff-endpoints.md` · `mnt-list-action-tree.md` · `mnt-list-real-data.md` |
| PO | `po/requirement.md` |

**Cấm** `mfeStdUrl` / `yarn start:std` / WebView HTML-as-app / ERP.*.

## 1. Pattern

| Surface | Push list `#sc-mnt-list` · shell tab `work` selected · **không** Modal/Sheet · in-screen tabs **none** |
| Action this slug | GET work-orders · display cards · client search · toast Lọc / sibling CTAs |
| Frame | iOS 390×844 · Android 412×915 |
| BFF | **chỉ** `GET maintenance/work-orders` (page 1 size 50) · init-data **P2** · **cấm** invent `api/v1/mnt-list` |

## 2. Screens / DES-MOB-*

| DES / sc-* | Tên VN | CTA / hành vi |
|------------|--------|---------------|
| `DES-MOB-MNT-LIST` `#sc-mnt-list` | Danh sách công việc | search · hub · 2+ rich cards · actions |
| `DES-MOB-MNT-HUB` | Giao việc xử lý | row hub · P1 toast **Giao việc xử lý** |
| `DES-MOB-MNT-CARD` | WO card | title · assign · range · meta · status · icons |
| `DES-MOB-TABBAR` | Tab 5 | chrome `shell-tabs` · selected **Công việc** · **cấm** invent / reorder |

### IA lock

```
(auth) Login → Tab 5
  Trang Chủ → #sc-home (reuse · entry tile Công việc)
  … → Công việc tab / tile → push #sc-mnt-list DES-MOB-MNT-LIST  ← this pack
  Back → pop home
  Hub / #i-sum → toast P1 (sibling estimate pending_confirm)
  #i-chat / #i-sync / #i-list → toast P1 (siblings pending_confirm)
```

**Cấm** invent tab · filter sheet · estimate form · watermark Gói · device label · «Có mạng».

## 3. Field inventory (kit dual)

| Field | VN | Kit dual | SF ↔ Material | Notes |
|-------|----|----------|---------------|-------|
| navBack | (chevron) | `LinmTopBar` leading | `chevron.left` ↔ `ArrowBack` · `#i-chevron-left` | pop `home` |
| title | Danh sách công việc | `LinmTopBar` title | — | fixed dual |
| navFilter | Lọc | `LinmTopBar` trailing | iOS text · Android `#i-list` | toast **Bộ lọc · tuyến đường** · **cấm** sheet |
| search | Tìm kiếm công việc… | `LinmSearchField` · `LinmSearchGlyph` | `#i-search` | client filter title/route/code/assign |
| hubTitle | Giao việc xử lý | `LinmListRow` leading `#i-sum` green | sum ↔ Functions | toast P1 / later `go('estimate')` |
| hubSub | Khối lượng · thời hạn · giao việc | `LinmListRow` subtitle | — | fixed |
| cardTitle | (tên CV) | rich card / `LinmListRow` | — | DTO `title` |
| cardAssign | … giao việc cho … | subtitle | — | TeamName + AssigneeName · **cấm** invent AssignerName |
| cardRange | from — to | subtitle | — | CreatedAt — DueAt |
| cardMeta | sự cố · tuyến | subtitle | — | IncidentId · RouteName |
| cardStatus | Tình trạng xử lý: … | status bar text only | — | 1 dòng prefix+label · **cấm** `LinmBadge` trùng · **GAP-MOB-EDIT-STATUS-01** |
| actChat | Trao đổi | `LinmIconButton` `#i-chat` | | toast **Trao đổi công việc** · `.rc-actions` **flex:1 dàn đều** (**GAP-MOB-EDIT-ACT-01**) |
| actProgress | Cập nhật trạng thái | `LinmIconButton` `#i-sync` | | toast **Cập nhật trạng thái · ảnh + định vị** |
| actEstimate | Ước lượng / giao | `LinmIconButton` `#i-sum` | | toast **Giao việc xử lý** |
| actLog | Nhật ký xử lý | `LinmIconButton` `#i-list` | | done card · toast **Nhật ký xử lý** |
| empty | (trống) | `EmptyChrome` / `LinmEmptyChrome` | — | optional · 0 live + no demo gate |
| tabWork | Công việc | `LinmTabBar` | wrench ↔ Build | selected · label **13** |

### Status VN map

| API `status` | VN | chrome |
|--------------|----|--------|
| `new` | Chờ xử lý | warn |
| `in_progress` | Đang xử lý | info |
| `done` | Đã hoàn thành | ok |
| `cancelled` | Đã hủy | gray |

### Demo / fallback cards SSOT (**2** dual)

| title | assignLine | range | meta | statusLabel | chrome |
|-------|------------|-------|------|-------------|--------|
| Vá mặt đường | Hạt trưởng VP-IV.1 giao việc cho Nguyễn Văn A · Tổ tuần đường | 2026-08-10 08:30 — 2026-08-12 17:00 | Từ sự cố SC-2401 · QL.1 Km 1556+080 | Tình trạng xử lý: **Chờ xử lý** | warn |
| Nạo cống | Hạt trưởng giao việc cho Trần Khánh · Chi cục II.2 | 2026-08-09 07:00 — 2026-08-09 16:00 | Tuyến HCM | Tình trạng xử lý: **Đã hoàn thành** | ok |

Toast / banner → `LinmToast`. **Cấm** raw `List` / M3 `NavigationBar` / `TabView` / `UIAlert` / `AlertDialog` / `window.alert`.

## 4. Brand

| Token | Hex | Dùng |
|-------|-----|------|
| Primary | `#0C84C0` | tint · tab selected · icon actions |
| Deep | `#086A9A` | header deep |
| Success | `#3CB448` | hub leading · status ok |
| Warn | `#FCB43C` | status warn |
| Surface iOS | `#F2F2F7` | nền |
| Surface Android | `#FFFBFE` | nền Material · DEFER chrome |

**Cấm** skin đỏ CCCD / Ministry · **cấm** M3 tím indicator.

## 5. Typography

| Role | Size | Note |
|------|------|------|
| tab / label | **13** | `GAP-TYP-01` |
| search / card title / field | **≥16** | |
| status / meta line | **13** | |

## 6. Cấm

- WebView HTML · `mfeStdUrl` · `yarn start:std` / e2e ở role này
- Invent tab / filter sheet / estimate form trên slug
- Invent AssignerName / `MntListController` / `api/v1/mnt-list`
- `UIAlert` / `AlertDialog` / `window.alert`
- Watermark Gói / device label / «Có mạng» / proto tap-cycle
- Start siblings `pending_confirm` · re-scan demo (`GAP-DES-DEMO-RESCAN-01`)
- Android 1-card (GAP-MOB-MNT-DEMO-01 **closed** — dual 2 cards)

## 7. Handoff → SA

| Field | Value |
|-------|-------|
| Next slash | `/agent-sa-mobile` |
| BFF | `GET maintenance/work-orders` only · Step 4b `/new-endpoint` **N/A** |
| Real-data | `_data-analy/mnt-list-real-data.md` §A+§B |
| Open Q | GAP-F-MNT-MOB-01 · GAP-MOB-MNT-DEMO-01 đã chốt PO · Design closed |
| Chain | roleOnly=design · **không** chain SA turn này (`GAP-PKT-ROLE-01`) |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** role này |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | 2026-08-29T01:50:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:mnt-list-mobile-list-20260828 |
| bffContentHash | sha256:mnt-list-mobile-bff-20260828 |

---
<!-- Version meta: skillId=agent-design-mobile skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
