# Design — incident-list (mobile list · Vấn đề)

| Field | Value |
|-------|-------|
| feature | `incident-list` |
| title | [Design] [Mobile] [Trang Chủ] -> Vấn đề |
| this role | `design` · `/agent-design-mobile` |
| status | `confirmed` (autoApprove=ON) |
| design_confirm | **approve** (`task_6800d075`) |
| packKind | **`list`** (PO confirm) |
| changeScope | `new_page` |
| stack | `native_dual` |
| kit_missing_confirm | **N/A** — reuse map list kit dual (`LinmTopBar` · `LinmSegment` · `LinmSearchField` · banner / `LinmListRow` · rich-card · `LinmBadge` · `LinmIconButton` · `LinmFAB` · `LinmToast`) |
| reviewUrlIos | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/incident-list/ui/prototype/ios/index.html#sc-incident-list` |
| reviewUrlAndroid | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/incident-list/ui/prototype/android/index.html#sc-incident-list` |
| ux-analy | `ui/ux-analy.md` §1–§9 |
| demo-parity | `ui/review/demo-parity.md` · Must **closed** |
| prior · po | `confirmed` · `po/requirement.md` |
| prior · data_analy | `confirmed` · `_data-analy/incident-list-control-hint.md` · `incident-list-real-data.md` · **hash skip** · **cấm** re-scan |
| updatedAt | `2026-08-29T01:45:00.000Z` |
| taskId | `task_6800d075` |

## 0. Context & Demo

| ID | Path |
|----|------|
| CTX | `docs/context/features/incident-list.md` |
| DEM-P1 | `specs/mobile-p1/ui/prototype/{ios,android}/index.html` `#sc-incident-list` · `DES-MOB-INC-LIST` |
| DEM | `specs/incident-list/ui/prototype/{ios,android}/index.html` |
| MAP | `docs/html-to-native-map.md` + `ui/html-to-native-map.md` |
| DA | `_data-analy/incident-list-control-hint.md` · `incident-list-bff-endpoints.md` · `incident-list-action-tree.md` · `incident-list-real-data.md` |
| PO | `po/requirement.md` |

**Cấm** `mfeStdUrl` / `yarn start:std` / WebView HTML-as-app / ERP.*.  
**Hash skip:** inventory + controlHint + real-data §A+§B từ DA — **cấm** re-scan demo HTML / crawl CTX (`GAP-DES-DEMO-RESCAN-01`).

## 1. Pattern

| Surface | Push list `#sc-incident-list` · shell tab `incident` selected · **không** Modal/Sheet · in-screen **segment-2** Danh sách / Bản đồ |
| Action this slug | GET incidents · display cards · client search · segment · banner · toast Lọc/chat · FAB create entry · nav siblings |
| Frame | iOS 390×844 · Android 412×915 |
| BFF | **chỉ** `GET incident/incidents` (page 1 size 50) · **cấm** invent `api/v1/incident-list` |

## 2. Screens / DES-MOB-*

| DES / sc-* | Tên VN | CTA / hành vi |
|------------|--------|---------------|
| `DES-MOB-INC-LIST` `#sc-incident-list` | Quản lý vấn đề | segment · search · banner · 2 rich cards · FAB |
| `DES-MOB-INC-BANNER` | Nhận diện mặt đường | banner CTA · toast P1 / later `go('vis-capture')` |
| `DES-MOB-INC-CARD` | Incident card | title · type+code · loc · person · time · status · thumb · actions |
| `DES-MOB-TABBAR` | Tab 5 | chrome `shell-tabs` · selected **Vấn đề** · **cấm** invent / reorder |

### IA lock

```
(auth) Login → Tab 5
  Trang Chủ → #sc-home (reuse · entry tile Vấn đề)
  … → Vấn đề tab / tile → push #sc-incident-list DES-MOB-INC-LIST  ← this pack
  Back → pop home
  Segment Bản đồ / #i-mappin → go('gis-map') (shared · không implement overlay)
  Banner → toast P1 / go('vis-capture') khi sibling ship
  Card / #i-list → toast P1 / go('incident-detail') pass Id
  #i-briefcase → go('mnt-list') reuse
  #i-chat → toast «Trao đổi sự cố»
  FAB #i-plus → startIncidentPick() · owner incident-create
```

**Cấm** invent tab 6 · filter sheet · create/detail/map form trên slug · watermark Gói · device label · «Có mạng».

## 3. Field inventory (kit dual)

| Field | VN | Kit dual | SF ↔ Material | Notes |
|-------|----|----------|---------------|-------|
| navBack | (chevron) | `LinmTopBar` leading | `chevron.left` ↔ `ArrowBack` · `#i-chevron-left` | pop `home` |
| title | Quản lý vấn đề | `LinmTopBar` title | — | fixed dual |
| navFilter | Lọc | `LinmTopBar` trailing | iOS text · Android `#i-list` | toast **Lọc tuyến · loại · trạng thái** · **cấm** sheet |
| segList | Danh sách | `LinmSegment` | — | selected · stay list |
| segMap | Bản đồ | `LinmSegment` | — | `go('gis-map')` |
| search | Tìm kiếm vấn đề… | `LinmSearchField` · `LinmSearchGlyph` | `#i-search` | client filter title/code/route |
| bannerTitle | Nhận diện mặt đường | banner / `LinmListRow` `#i-camera` | camera ↔ PhotoCamera | toast P1 / `vis-capture` |
| bannerSub | Chụp + định vị → gắn sự cố | subtitle | — | fixed |
| cardTitle | (tên vấn đề) | rich card / `LinmListRow` | — | DTO `Title` |
| cardTypeCode | loại · mã | subtitle `#i-warning` | exclamationmark.triangle ↔ Warning | `IncidentType` · `Code` |
| cardLoc | tuyến · km · nơi | subtitle `#i-mappin` | mappin ↔ Place | RouteName · KmStart · place fallback PO §7 |
| cardPerson | người · tổ | subtitle `#i-person` | person ↔ Person | ReporterName · AssigneeName |
| cardTime | datetime | caption | — | `RequestedAt` `yyyy-MM-dd HH:mm:ss` |
| cardThumb | thumb | Image placeholder | — | **DEFER** media · empty OK |
| cardStatus | Trạng thái: … | status bar text only | — | full width dưới `.rc-main` · **cấm** `LinmBadge` trùng prefix · **GAP-MOB-EDIT-STATUS-01** |
| actChat | Trao đổi | `LinmIconButton` `#i-chat` | | toast **Trao đổi sự cố** · `.rc-actions` **flex:1 dàn đều** |
| actAssign | Giao việc | `LinmIconButton` `#i-briefcase` | | `go('mnt-list')` · cùng hàng 4 nút |
| actDetail | Chi tiết | `LinmIconButton` `#i-list` | | `go('incident-detail')` / toast |
| actMap | Bản đồ | `LinmIconButton` `#i-mappin` | | `go('gis-map')` · **GAP-MOB-EDIT-ACT-01** |
| fabCreate | Ghi sự cố | `LinmFAB` `#i-plus` | plus ↔ Add | `startIncidentPick()` |
| empty | (trống) | `EmptyChrome` / `LinmEmptyChrome` | — | optional |
| tabIncident | Vấn đề | `LinmTabBar` | warning ↔ Report | selected · label **13** |

### Status VN map

| API `Status` (live string) | VN (demo) | chrome |
|----------------------------|-----------|--------|
| `Đợi phân công giám sát` / `Mới` / `new` | Đợi phân công giám sát | warn |
| `Đang được giám sát` / `in_progress` | Đang được giám sát | ok |
| `Đóng` / `closed` | Đã đóng | gray |
| other | raw `Status` | info |

UI prefix: `Trạng thái: `.

### Demo / fallback cards SSOT (**2** dual)

| title | typeCode | loc | person | time | statusLabel | chrome |
|-------|----------|-----|--------|------|-------------|--------|
| Nứt mặt đường | Sự cố nhanh · SC-2401 | QL.1 Km 1556+080 · Xuân Hải | Nguyễn Văn A · Tổ tuần đường VP-IV.1 | 2026-08-10 08:12:40 | Trạng thái: **Đợi phân công giám sát** | warn |
| Cống tắc | Hệ thống an toàn · SC-2398 | HCM · Km 12+400 | Trần Khánh · Chi cục II.2 | 2026-08-09 14:40:13 | Trạng thái: **Đang được giám sát** | ok |

Toast / banner → `LinmToast`. **Cấm** raw `List` / M3 `NavigationBar` / `TabView` / `UIAlert` / `AlertDialog` / `window.alert`.

## 4. Brand

| Token | Hex | Dùng |
|-------|-----|------|
| Primary | `#0C84C0` | tint · tab selected · FAB · icon actions · banner icon |
| Deep | `#086A9A` | header deep |
| Success | `#3CB448` | status ok |
| Warn | `#FCB43C` | status warn |
| Surface iOS | `#F2F2F7` | nền |
| Surface Android | `#FFFBFE` | nền Material · DEFER chrome |

**Cấm** skin đỏ CCCD / Ministry · **cấm** M3 tím indicator.

## 5. Typography

| Role | Size | Note |
|------|------|------|
| tab / segment / label | **13** | `GAP-TYP-01` |
| search / card title / banner title | **≥16** | |
| status / meta line | **13** | |

## 6. Cấm

- WebView HTML · `mfeStdUrl` · `yarn start:std` / e2e ở role này
- Invent tab 6 / filter sheet / create·detail·map form trên slug
- Invent PlaceName / OrgName / `IncidentListController` / `api/v1/incident-list`
- `UIAlert` / `AlertDialog` / `window.alert`
- Watermark Gói / device label / «Có mạng» / proto tap-cycle
- Start siblings `pending_confirm` · re-scan demo (`GAP-DES-DEMO-RESCAN-01`)
- Step 4b / migration / e2e ở role design

## 7. Handoff → SA

| Field | Value |
|-------|-------|
| Next slash | `/agent-sa-mobile` |
| BFF | `GET incident/incidents` only · Step 4b `/new-endpoint` **N/A** |
| Real-data | `_data-analy/incident-list-real-data.md` §A+§B |
| Open Q | GAP place/org/thumb **PO chốt** · Design closed · thumb DEFER |
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
| generatedAt | 2026-08-29T01:45:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:incident-list-mobile-list-20260829 |
| bffContentHash | sha256:incident-incidents-proxy-passthrough |
| taskId | `task_6800d075` |

---
<!-- Version meta: skillId=agent-design-mobile skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
