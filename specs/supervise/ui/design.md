# Design — supervise (mobile list · Giám sát)

| Field | Value |
|-------|-------|
| feature | `supervise` |
| title | [Design] [Mobile] Giám sát — filter live + map sibling |
| this role | `design` · `/agent-design-mobile` |
| status | `confirmed` (autoApprove=ON) |
| design_confirm | **approve** (`task_69283465`) |
| changeScope | `edit_page` |
| packKind | **`list`** (PO confirm) |
| stack | `native_dual` |
| kit_missing_confirm | **N/A** — reuse map dual · `.rich-card` = `LinmCard` + feature composition · sheet = Modal/bottom sheet kit |
| reviewUrlIos | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/supervise/ui/prototype/ios/index.html#sc-supervise` |
| reviewUrlAndroid | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/supervise/ui/prototype/android/index.html#sc-supervise` |
| peerStdUrl | — (native · **cấm** mfeStdUrl) |
| real_view_parity | `v1` · edit delta filter/map |
| formPattern | N/A CRUD · **owner filter sheet** |
| ux-analy | `ui/ux-analy.md` §1–§9 |
| demo-parity | `ui/review/demo-parity.md` |
| prior | PO `confirmed` · `handoff/po-compact.md` · analy `contentHash` skip |
| autoApprove | **ON** |
| e2eQa | ON queued QA · **cấm** `yarn start:std` / e2e this role |
| updatedAt | `2026-09-12T09:55:00.000Z` |
| taskId | `task_69283465` |

## § Delta Current vs New (edit_page)

| Zone / hành vi | Current (prior design) | New (this task) |
|----------------|------------------------|-----------------|
| `btn-sup-filter` | toast «Lọc tuyến · ngày» | **open filter sheet** · Tuyến + Ngày · Áp dụng / Xóa lọc |
| Filter bind | none | `route` GET query · ngày = client `CheckInAt` day |
| `segMap` | toast «Bản đồ» · reset 0 | **push** `#sc-patrol-map` · reset seg 0 · **cấm** toast |
| Tap card | toast detail | **keep** push `supervise-detail` |
| List / EmptyChrome | live GET | **giữ** |

## 0. Context & Demo

| ID | Path | Notes |
|----|------|-------|
| DA | `_data-analy/supervise-control-hint.md` · `supervise-real-data.md` | hash skip · **cấm** re-scan |
| PO | `po/requirement.md` · `handoff/po-compact.md` | § Delta filter/map Must |
| DEM | `ui/prototype/{ios,android}/index.html` `#sc-supervise` | board dual · sheet + map CTA |
| MAP | `ui/html-to-native-map.md` | kit list + sheet |

**Cấm** `mfeStdUrl` / `yarn start:std` / WebView HTML-as-app · **cấm** re-scan demo HTML từ DemoRoot.

## 1. Pattern

| | |
|--|--|
| Surface | Push list · nav back+title+Lọc · segment 2 · **bottom sheet Lọc** · rich-card scroll |
| FormMode | none CRUD · filter sheet owner on list |
| Action this slug | Appear GET · filter Apply/Clear · map → sibling push · card → detail |
| `devSlash` | `/agent-dev-ios` + `/agent-dev-android` |
| Frame | iOS 390×844 · Android 412×915 · safe area |
| Grid AC / Report AC | **N/A** (native mobile) |

## 2. Screens / DES-MOB-*

| DES / sc-* | Tên VN | Zones | CTA |
|------------|--------|-------|-----|
| `DES-MOB-SUPERVISE` `#sc-supervise` | Giám sát tuần đường | Nav · segment · filter chip · list · sheet | pop / sheet / push |
| `DES-MOB-SUP-NAV` | Nav | back **Trang Chủ** · title · **Lọc** | pop / open sheet |
| `DES-MOB-SUP-SEG` | Segment 2 | idx **0** list · **1** Bản đồ | owner / push map |
| `DES-MOB-SUP-FILTER` | Sheet Lọc | `filterRoute` · `filterDate` · Apply · Clear | reload list |
| `DES-MOB-SUP-FILTER-CHIP` | Active filter | chip text when route/date set | optional |
| `DES-MOB-SUP-LIST` | List | live cards · EmptyChrome | |
| `DES-MOB-SUP-CARD` | Card | title · org · loc · time · status · thumb | push detail |

### IA lock

```
(auth) Login → Tab 5
  Trang Chủ · Home tile «Giám sát» → push #sc-supervise
  Tuần đường · patrol-home quick «Giám sát» → push #sc-supervise
#sc-supervise  DES-MOB-SUPERVISE
  → nav back = pop #sc-home
  → Lọc = open DES-MOB-SUP-FILTER · Apply → GET ±route + client date · Clear → bare GET
  → segment 1 = push #sc-patrol-map · reset idx 0 · cấm toast map
  → tap card = push supervise-detail
  → fail GET = EmptyChrome + toast loadFail · cấm demoItems · cấm native alert
```

**Cấm** invent tab · reorder segment (`GAP-TAB-01`) · embed map on list · toast giả lập filter/map · watermark Gói.

## 3. Field inventory (kit dual)

| Field | VN | controlHint | Required | Kit dual | Notes |
|-------|----|-------------|----------|----------|-------|
| navBack | Trang Chủ | Text+icon leading | * | `LinmTopBar` | `#i-chevron-left` · pop |
| navTitle | Giám sát tuần đường | Text title | * | `LinmTopBar` | fixed |
| navFilter | Lọc | Text trailing | * | `LinmTopBar` | **open sheet** · a11y `btn-sup-filter` |
| filterRoute | Tuyến | TextField | | Modal/sheet field | → query `route` |
| filterDate | Ngày | DatePicker | | Modal/sheet field | client `CheckInAt` day |
| filterApply | Áp dụng | Primary | * | Primary button | dismiss · reload |
| filterClear | Xóa lọc | Ghost | * | Ghost/text | clear · reload |
| segList | Danh sách check in | Segment | * | `LinmSegment` idx **0** | owner |
| segMap | Bản đồ | Segment | * | `LinmSegment` idx **1** | **push** patrol-map |
| cardTitle | Nguyễn Văn A | Text | * | `LinmCard` composition | `UserName` |
| cardOrg | Tổ tuần đường · VP-IV.1 | Text + `#i-building` | | same | `Note` · GAP-MOB-SUP-03 |
| cardLoc | QL.1 Km 1556+000 · Xuân Hải | Text + `#i-mappin` | * | same | `Route` + `KmPoint` |
| cardTime | 2026-08-10 08:40:12 | Text muted | * | same | `CheckInAt` local |
| cardStatus | Trạng thái: Đã ghi điểm tuần | Status strip | * | same | `Status` ok/warn |
| cardThumb | (placeholder) | Thumb 56 | | same | gradient P1 |
| empty | Không có check-in | EmptyChrome | | EmptyChrome | 0 after filter / fail |

Toast → `LinmToast` **chỉ** loadFail (không filter/map). **Cấm** invent kit `LinmRichCheckinCard`.

### Demo rows SSOT (UI-only · không ship runtime)

| userName | orgUnit | location | time | status |
|----------|---------|----------|------|--------|
| Nguyễn Văn A | Tổ tuần đường · VP-IV.1 | QL.1 Km 1556+000 · Xuân Hải | 2026-08-10 08:40:12 | Trạng thái: Đã ghi điểm tuần |
| Trần Khánh | Chi cục II.2 | QL.1 Km 1561+134 · Phước Dinh | 2026-08-10 09:12:44 | Trạng thái: Đã ghi điểm tuần |

## 4. SF ↔ Material

| Demo `#i-*` | Ý nghĩa | iOS | Android |
|-------------|---------|-----|---------|
| `#i-chevron-left` | Back | `chevron.left` | `ArrowBack` |
| `#i-building` | Org | `building.2` | outline building |
| `#i-mappin` | Location | `mappin` | outline pin |

Dual HTML **cùng `d=`** — **cấm** Filled lệch metaphor (`GAP-MOB-ICON-02`).

## 5. Brand tokens

| Token | Hex | Dùng |
|-------|------|------|
| primary | `#0C84C0` | nav tint · Apply · Android seg |
| success | `#34C759` / `#1B5E20` | status ok |
| warn | `#FF9500` | status warn |
| surface iOS | `#F2F2F7` | nền · field |
| surface Android | `#FFFBFE` | nền · field |
| card | `#FFFFFF` | cards · sheet · nav |

## 6. Behaviors

| Case | UI |
|------|-----|
| Appear | GET `patrol/attendance-logs?page=1&pageSize=50` · cards / EmptyChrome |
| Back | pop `#sc-home` · **cấm** alert |
| Filter open | sheet · prefill route/date |
| Apply | dismiss · GET ±`route` · client day filter · refresh · chip optional |
| Clear | clear state · GET bare · hide chip |
| Segment 1 | push `#sc-patrol-map` · reset idx **0** · **cấm** toast |
| Tap card | push `supervise-detail` |
| GET fail | EmptyChrome + toast loadFail · **cấm** demoItems |

## 7. BFF (Design lock)

App `{BffBase}/mobile-bff/api/v1`:

| Method | Path | Notes |
|--------|------|-------|
| GET | `patrol/attendance-logs` ± `route` · page/pageSize | **yes** |
| Date | client `CheckInAt` | BE fromDate = **P2** GAP-MOB-SUP-04 |

**Cấm** invent `GET supervise` · Step 4b · ERP.*.

## 8. Prototype (REQUIRED)

| | |
|--|--|
| Artifact iOS | `ui/prototype/ios/index.html` `#sc-supervise` |
| Artifact Android | `ui/prototype/android/index.html` `#sc-supervise` |
| Zones | DES-MOB-SUPERVISE · NAV · SEG · FILTER · LIST · CARD |
| formPattern | N/A CRUD · owner filter sheet |
| peerStdUrl | — |
| real_view_parity | `v1` |
| **reviewUrlIos** | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/supervise/ui/prototype/ios/index.html#sc-supervise` |
| **reviewUrlAndroid** | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/supervise/ui/prototype/android/index.html#sc-supervise` |

## 9. Cấm

- Toast giả lập filter / map
- Embed map on list · invent tab
- WebView HTML · `mfeStdUrl` · `yarn start:std` / e2e this role
- `UIAlert` / `AlertDialog` · watermark Gói · device label
- Board thiếu prefix `ios/` · `android/` (`GAP-MOB-DES-PFX-01`)
- Re-scan demo / crawl CTX (`GAP-DES-DEMO-RESCAN-01`)

## 10. Handoff → SA

| Field | Value |
|-------|-------|
| Next slash | `/agent-sa-mobile` |
| BFF | reuse GetList ± `route` · date client · Step 4b **N/A** |
| Open Q | none · GAP-MOB-SUP-04 P2 |
| Chain | roleOnly=`design` · **không** start SA this task |
| e2eQa | queued `/agent-qa*` |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design-mobile |
| skillVersion | 2026.08.19.26 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.08.31.2 |
| generatedAt | 2026-09-12T09:55:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:supervise-mobile-filter-live-20260912 |
| bffContentHash | sha256:supervise-mobile-bff-filter-20260912 |

---
<!-- Version meta: skillId=agent-design-mobile skillVersion=2026.08.19.26 schemaVersion=1 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked -->
