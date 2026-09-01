# Design — supervise-detail (mobile · Chi tiết check-in)

| Field | Value |
|-------|-------|
| feature | `supervise-detail` |
| title | [Design] [Mobile] [Giám sát] -> Chi tiết check-in |
| this role | `design` · `/agent-design-mobile` |
| status | `confirmed` (autoApprove=ON) |
| design_confirm | **approve** (`task_d9769d91`) |
| packKind | **`screen`** (PO chốt · đóng GAP-MOB-SUP-DET-PACK-01) |
| changeScope | `new_page` |
| stack | `native_dual` |
| kit_missing_confirm | **N/A** — reuse map detail kit dual (`LinmTopBar` · Text · `LinmListRow` · `LinmPrimaryButton` · `LinmToast` · `LinmEmptyChrome`) |
| reviewUrlIos | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/supervise-detail/ui/prototype/ios/index.html#sc-supervise-detail` |
| reviewUrlAndroid | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/supervise-detail/ui/prototype/android/index.html#sc-supervise-detail` |
| ux-analy | `ui/ux-analy.md` §1–§9 |
| demo-parity | `ui/review/demo-parity.md` · Must **closed** |
| prior · po | `confirmed` · `po/requirement.md` |
| prior · data_analy | `confirmed` · `_data-analy/supervise-detail-control-hint.md` · `supervise-detail-real-data.md` · **hash skip** · **cấm** re-scan |
| updatedAt | `2026-08-31T02:10:00.000Z` |
| taskId | `task_d9769d91` |

## 0. Context & Demo

| ID | Path |
|----|------|
| CTX | `docs/context/features/supervise-detail.md` |
| DEM-P1 | `specs/mobile-p1/ui/prototype/{ios,android}/index.html` `#sc-supervise` entry · target `#sc-supervise-detail` (inventory từ DA — **không** re-scan) |
| DEM | `specs/supervise-detail/ui/prototype/{ios,android}/index.html` |
| MAP | `docs/html-to-native-map.md` + `ui/html-to-native-map.md` |
| DA | `_data-analy/supervise-detail-control-hint.md` · `supervise-detail-bff-endpoints.md` · `supervise-detail-action-tree.md` · `supervise-detail-real-data.md` |
| PO | `po/requirement.md` |

**Cấm** `mfeStdUrl` / `yarn start:std` / WebView HTML-as-app / ERP.*.  
**Hash skip:** inventory + controlHint + real-data §A+§B từ DA — **cấm** re-scan demo HTML / crawl CTX (`GAP-DES-DEMO-RESCAN-01`).

## 1. Pattern

| Surface | Full screen push `#sc-supervise-detail` · shell tab `home` (Trang Chủ) selected · **không** Modal/Sheet · **không** bottom-sheet chrome |
| Action this slug | GET by id · display hero/rows · toast err · empty 404 · nav gis-map / supervise list |
| Frame | iOS 390×844 · Android 412×915 |
| BFF | **chỉ** `GET patrol/attendance-logs/{id}` · **cấm** invent `api/v1/supervise-detail` / `checkin-detail` |

## 2. Screens / DES-MOB-*

| DES / sc-* | Tên VN | CTA / hành vi |
|------------|--------|---------------|
| `DES-MOB-SUP-DETAIL` `#sc-supervise-detail` | Chi tiết check-in | hero · code · rows · CTA map |
| `DES-MOB-TABBAR` | Tab 5 | chrome shell · selected **Trang Chủ** · **cấm** invent / reorder |

### IA lock

```
(auth) Login → Tab 5
  Trang Chủ → Giám sát list #sc-supervise → push #sc-supervise-detail DES-MOB-SUP-DETAIL  ← this pack
  Back → go('supervise')
  Xem trên bản đồ → go('gis-map') pass Id/Lat/Lng · toast P1 nếu sibling chưa ship
  404 → EmptyChrome · back list
  GET fail → demo SSOT + LinmToast · screen vẫn mở · cấm fake 200
```

**Cấm** invent tab 6 · segment trên detail · list/filter · `#sc-checkin-detail` / `#sheet-checkin` · watermark Gói · device label · «Có mạng».

## 3. Field inventory (kit dual)

| Field | VN | Kit dual | SF ↔ Material | Notes |
|-------|----|----------|---------------|-------|
| navBack | Giám sát | `LinmTopBar` leading `#i-chevron-left` | `chevron.left` ↔ `ArrowBack` | `go('supervise')` · iOS text+chevron · Android icon-only |
| title | Chi tiết check-in | `LinmTopBar` title | — | dual fixed SSOT |
| userHero | (tên NV) | Display **≥24 / 28** bold | — | GET `UserName` · iOS 28 · Android 24 |
| codeLabel | Mã | Caption **13** | — | fixed |
| codeValue | CC-* | Text ≥16 | — | GET `Code` |
| rowOrg | Tổ / đơn vị | `LinmListRow` | `#i-building` optional | `Note` · demo fallback |
| rowLoc | Tuyến · lý trình | `LinmListRow` | `#i-mappin` optional | `Route` · `KmPoint` · địa danh |
| rowTime | Thời điểm | `LinmListRow` | — | `CheckInAt` local |
| rowStatus | Trạng thái | `LinmListRow` / status strip | — | `Status` mapped VN · ok tint |
| rowGps | Tọa độ | `LinmListRow` | — | `Lat`,`Lng` |
| rowInZone | Trong vùng | `LinmListRow` | — | `InZone` → Trong vùng / Ngoài vùng |
| btnMap | Xem trên bản đồ | `LinmPrimaryButton` | — | `go('gis-map')` · pass id/coords |
| empty404 | (không tìm thấy) | `LinmEmptyChrome` | — | NotFound · back list |
| toastErr | (lỗi mạng) | `LinmToast` | — | GET fail · **cấm** fake ok |
| tabHome | Trang Chủ | `LinmTabBar` | house ↔ Home | selected · label **13** |

### Entry (parent — không control riêng slug)

| Field | VN | Kit | Notes |
|-------|----|-----|-------|
| cardCheckin | (live UserName · loc · time) | `LinmRichCheckinCard` | `supervise` · wire `go('supervise-detail')` + `Id` · **cấm** `go('checkin-detail')` / CI-DETAIL |

### Status VN map (demo SSOT)

| API `Status` (raw) | UI |
|--------------------|-----|
| `checked_in` / `ok` / chứa «ghi điểm» / empty+InZone | Đã ghi điểm tuần |
| `out_zone` / `warn` / InZone=false | Ngoài vùng · cần kiểm |
| other | `{Status raw}` |

### Demo / fallback SSOT (dual)

| Field | Value |
|-------|-------|
| Title | Chi tiết check-in |
| UserName | Nguyễn Văn A |
| Code | CC-20260810-001 |
| Tổ | Tổ tuần đường · VP-IV.1 |
| Tuyến | QL.1 Km 1556+000 · Xuân Hải |
| Thời điểm | 2026-08-10 08:40:12 |
| Trạng thái | Đã ghi điểm tuần |
| Tọa độ | 11.5300, 109.0040 |
| Trong vùng | Trong vùng |
| CTA | Xem trên bản đồ |
| Back | Giám sát |

Toast → `LinmToast`. **Cấm** raw `NavigationBar` / M3 bar / `TabView` / `UIAlert` / `AlertDialog` / `window.alert`.

## 4. Brand

| Token | Hex | Dùng |
|-------|-----|------|
| Primary | `#0C84C0` | tint · tab selected · primary CTA |
| Deep | `#086A9A` | header deep |
| Success | `#3CB448` | status ok strip |
| Warn | `#FCB43C` | out_zone / warn status |
| Danger | `#FF3B30` / `#B3261E` | — |
| Surface iOS | `#F2F2F7` | nền |
| Surface Android | `#FFFBFE` | nền Material · DEFER chrome |

**Cấm** skin đỏ CCCD / Ministry · **cấm** M3 tím indicator.

## 5. Typography

| Role | Size | Note |
|------|------|------|
| tab / caption / label | **13** | `GAP-TYP-01` |
| userHero | **≥24 / 28** | iOS 28 · Android 24 |
| row value / code / CTA | **≥16** / 17 (iOS CTA) | |

## 6. Cấm

- WebView HTML · `mfeStdUrl` · `yarn start:std` / e2e ở role này
- Invent tab 6 / segment trên detail / list·filter·checkin·sheet trên slug
- Invent `SuperviseDetailController` / `api/v1/supervise-detail` / `checkin-detail` / OrgUnit API P1
- Reuse `#sc-checkin-detail` / title «Ghi điểm tuần» (`GAP-MOB-SUP-DET-DEMO-01`)
- Fake GET 200 · fake coords khi live OK · POST/PUT/DELETE attendance
- `UIAlert` / `AlertDialog` / `window.alert`
- Watermark Gói / device label / «Có mạng» / proto tap-cycle
- Start siblings · re-scan demo (`GAP-DES-DEMO-RESCAN-01`)
- Step 4b / migration / e2e ở role design · bottom-sheet chrome (pack = **screen**)

## 7. Handoff → SA

| Field | Value |
|-------|-------|
| Next slash | `/agent-sa-mobile` |
| BFF | `GET patrol/attendance-logs/{id}` · Step 4b `/new-endpoint` **N/A** |
| Real-data | `_data-analy/supervise-detail-real-data.md` §A+§B |
| Open Q | packKind **screen** · ORG Note/fallback · DEMO rewire · MAP nav — **PO chốt** · Design closed dual |
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
| generatedAt | 2026-08-31T02:10:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:supervise-detail-control-hint-20260831 |
| realDataHash | sha256:supervise-detail-real-data-20260831 |
| bffContentHash | sha256:patrol-attendance-logs-getbyid-passthrough |
| actionTreeHash | sha256:supervise-detail-action-tree-20260831 |
| taskId | `task_d9769d91` |

---
<!-- Version meta: skillId=agent-design-mobile skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked -->
