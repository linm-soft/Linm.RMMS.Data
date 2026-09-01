# Design — attendance-day (mobile · Chi tiết ngày công)

| Field | Value |
|-------|-------|
| feature | `attendance-day` |
| title | [Design] [Mobile] [Chấm công] -> Chi tiết ngày công |
| this role | `design` · `/agent-design-mobile` |
| status | `confirmed` (autoApprove=ON) |
| design_confirm | **approve** (`task_db7380c8`) |
| packKind | **`screen`** (PO chốt · đóng GAP-MOB-ATT-DAY-PACK-01) |
| changeScope | `new_page` |
| stack | `native_dual` |
| kit_missing_confirm | **N/A** — reuse map detail kit dual (`LinmTopBar` · Text · `LinmBadge` · `LinmListRow` · `LinmSectionLabel` · `LinmEmptyChrome` · `LinmToast`) |
| reviewUrlIos | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/attendance-day/ui/prototype/ios/index.html#sc-attendance-day` |
| reviewUrlAndroid | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/attendance-day/ui/prototype/android/index.html#sc-attendance-day` |
| ux-analy | `ui/ux-analy.md` §1–§9 |
| demo-parity | `ui/review/demo-parity.md` · Must **closed** |
| prior · po | `confirmed` · `po/requirement.md` |
| prior · data_analy | `confirmed` · `_data-analy/attendance-day-control-hint.md` · `attendance-day-real-data.md` · **hash skip** · **cấm** re-scan |
| updatedAt | `2026-08-31T03:00:00.000Z` |
| taskId | `task_db7380c8` |

## 0. Context & Demo

| ID | Path |
|----|------|
| CTX | `docs/context/features/attendance-day.md` |
| CTX parent | `docs/context/features/attendance.md` |
| DEM-P1 | `specs/mobile-p1/ui/prototype/{ios,android}/index.html` `#sc-attendance` entry · target `#sc-attendance-day` (inventory từ DA — **không** re-scan) |
| DEM | `specs/attendance-day/ui/prototype/{ios,android}/index.html` |
| MAP | `docs/html-to-native-map.md` + `ui/html-to-native-map.md` |
| DA | `_data-analy/attendance-day-control-hint.md` · `attendance-day-bff-endpoints.md` · `attendance-day-action-tree.md` · `attendance-day-real-data.md` |
| PO | `po/requirement.md` |

**Cấm** `mfeStdUrl` / `yarn start:std` / WebView HTML-as-app / ERP.*.  
**Hash skip:** inventory + controlHint + real-data §A+§B từ DA — **cấm** re-scan demo HTML / crawl CTX (`GAP-DES-DEMO-RESCAN-01`).

## 1. Pattern

| Surface | Full screen push `#sc-attendance-day` · shell tab `field` (Tuần đường) selected · **không** Modal/Sheet · **không** bottom-sheet chrome |
| Action this slug | GET list + client filter `dayKey` · display hero/summary/logs · toast err · empty day · nav hub · tap log toast |
| Frame | iOS 390×844 · Android 412×915 |
| BFF | **chỉ** `GET patrol/attendance-logs` + client filter · **cấm** invent `api/v1/attendance-day` |

## 2. Screens / DES-MOB-*

| DES / sc-* | Tên VN | CTA / hành vi |
|------------|--------|---------------|
| `DES-MOB-ATT-DAY` `#sc-attendance-day` | Chi tiết ngày công | hero · badge · summary rows · section logs · empty |
| `DES-MOB-TABBAR` | Tab 5 | chrome shell · selected **Tuần đường** · **cấm** invent / reorder |

### IA lock

```
(auth) Login → Tab 5
  Tuần đường → #sc-patrol-home → segment Chấm công → #sc-attendance
    → tap day row → push #sc-attendance-day DES-MOB-ATT-DAY  ← this pack
  Back → go('attendance')
  Appear → GET patrol/attendance-logs · filter dayKey · bind summary + log rows
  Empty count=0 → EmptyChrome · badge Nghỉ · **cấm** demo SSOT / mock
  GET fail → empty chrome + LinmToast · screen vẫn mở · **cấm** demo T7/CN · cấm fake 200
  Tap log row → toast «Chi tiết lần chấm» · cấm push supervise-detail
  không child form / sheet / segment trên detail
```

**Cấm** invent tab 6 · segment trên detail · hub hero/POST · `#sc-supervise-detail` GetById · `#sc-attendance-report` · embed map · watermark Gói · device label · «Có mạng».

## 3. Field inventory (kit dual)

| Field | VN | Kit dual | SF ↔ Material | Notes |
|-------|----|----------|---------------|-------|
| navBack | Chấm công | `LinmTopBar` leading `#i-chevron-left` | `chevron.left` ↔ `ArrowBack` | `go('attendance')` · iOS text+chevron · Android icon-only |
| title | Chi tiết ngày công | `LinmTopBar` title | — | dual fixed SSOT |
| dayHero | (T7 09/08) | Display **≥24 / 28** bold | — | nav `dayTitle` · iOS 28 · Android 24 |
| dayBadge | Đủ công / Nghỉ / Đã chấm | `LinmBadge` | — | derived aggregate §3.5 PO |
| rowRange | Khoảng giờ | `LinmListRow` | — | label **13** / value **≥16** · min/max `CheckInAt` |
| rowRoute | Tuyến · ca | `LinmListRow` | — | first log `Route` · empty → «—» · **cấm** invent Ca sáng / QL.1 |
| rowCount | Số lần chấm | `LinmListRow` | — | count filtered logs |
| sectionLogs | Các lần chấm | `LinmSectionLabel` | — | hidden khi empty |
| logTime | (HH:mm) | `LinmListRow` title | — | `CheckInAt` local |
| logSub | QL.1 · Đúng tuyến · Trong vùng | `LinmListRow` subtitle | — | Route · Status · InZone VN |
| logBadge | Trong vùng / Ngoài vùng | `LinmBadge` optional | — | `InZone` |
| emptyDay | Không có lần chấm trong ngày | `LinmEmptyChrome` | — | badge Nghỉ · count=0 |
| toastErr | (lỗi mạng) | `LinmToast` | — | GET fail · **cấm** fake ok |
| toastLogTap | Chi tiết lần chấm | `LinmToast` | — | tap log row P1 · **cấm** GetById push |
| tabField | Tuần đường | `LinmTabBar` | map ↔ Route | selected · label **13** |

### Entry (parent — không control riêng slug)

| Field | VN | Kit | Notes |
|-------|----|-----|-------|
| dayRow | CN/T7… · time · badge | `LinmListRow` nav | `attendance` · wire `go('attendance-day')` + `dayKey` + `dayTitle` |

### Badge map (demo SSOT · khớp hub aggregate)

| Condition | badge |
|-----------|-------|
| 0 logs day | Nghỉ · idle |
| 1 log | Đã chấm · ok |
| ≥2 logs | Đủ công · ok |
| any `InZone=false` | Lệch zone · warn (optional P1) |

### Live-only bind (edit-mobile-feature · no mock)

| Case | Behavior |
|------|----------|
| GET OK · logs for day | Bind BE fields · badge/range/route/count/logs derived |
| GET OK · empty day | EmptyChrome + badge **Nghỉ** · **cấm** demo T7/CN SSOT |
| GET fail / offline | Empty chrome + toast · screen vẫn mở · **cấm** demo / mock · **cấm** fake 200 |
| Route / status missing | Display «—» · **cấm** invent QL.1 / Đúng tuyến / Ca sáng |

Toast → `LinmToast`. **Cấm** raw `NavigationBar` / M3 bar / `TabView` / `UIAlert` / `AlertDialog` / `window.alert`.

## 4. Brand

| Token | Hex | Dùng |
|-------|-----|------|
| Primary | `#0C84C0` | tint · tab selected |
| Deep | `#086A9A` | header deep |
| Success | `#3CB448` / `#34C759` | badge Đủ công · ok |
| Warn | `#FCB43C` | Lệch zone optional |
| Idle | `#8E8E93` / `#79747E` | badge Nghỉ |
| Surface iOS | `#F2F2F7` | nền |
| Surface Android | `#FFFBFE` | nền Material · DEFER chrome |

**Cấm** skin đỏ CCCD / Ministry · **cấm** M3 tím indicator.

## 5. Typography

| Role | Size | Note |
|------|------|------|
| tab / caption / label / section | **13** | `GAP-TYP-01` |
| dayHero | **≥24 / 28** | iOS 28 · Android 24 |
| row value / log title | **≥16** | |

## 6. Cấm

- WebView HTML · `mfeStdUrl` · `yarn start:std` / e2e ở role này
- Invent tab 6 / segment trên detail / hub hero POST / report / supervise GetById
- Invent `AttendanceDayController` / `api/v1/attendance-day`
- Fake GET 200 · fake data khi live OK · POST/PUT/DELETE attendance
- Embed map P1 · CTA bản đồ
- `UIAlert` / `AlertDialog` / `window.alert`
- Watermark Gói / device label / «Có mạng» / proto tap-cycle
- Start siblings · re-scan demo (`GAP-DES-DEMO-RESCAN-01`)
- Step 4b / migration / e2e ở role design · bottom-sheet chrome (pack = **screen**)

## 7. Handoff → SA

| Field | Value |
|-------|-------|
| Next slash | `/agent-sa-mobile` |
| BFF | `GET patrol/attendance-logs` + client filter · Step 4b `/new-endpoint` **N/A** |
| Real-data | `_data-analy/attendance-day-real-data.md` §A+§B |
| Open Q | packKind **screen** · DEMO rewire · TITLE chrome · NAV push — **PO chốt** · Design closed dual |
| Chain | roleOnly=design · **không** chain SA turn này (`GAP-PKT-ROLE-01`) |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** role này |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.08.31.2 |
| generatedAt | 2026-08-31T03:00:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:attendance-day-control-hint-20260831 |
| realDataHash | sha256:attendance-day-real-data-20260831 |
| bffContentHash | sha256:patrol-attendance-logs-list-day-filter |
| actionTreeHash | sha256:attendance-day-action-tree-20260831 |
| taskId | `task_db7380c8` |

---
<!-- Version meta: skillId=agent-design-mobile skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked -->
