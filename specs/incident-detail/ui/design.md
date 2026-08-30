# Design — incident-detail (mobile · Chi tiết vấn đề)

| Field | Value |
|-------|-------|
| feature | `incident-detail` |
| title | [Design] [Mobile] [Vấn đề] -> Chi tiết |
| this role | `design` · `/agent-design-mobile` |
| status | `confirmed` (autoApprove=ON) |
| design_confirm | **approve** (`task_db8582b2`) |
| packKind | **`screen`** (PO chốt · đóng GAP-MOB-INC-DETAIL-PACK-01) |
| changeScope | `new_page` |
| stack | `native_dual` |
| kit_missing_confirm | **N/A** — reuse map detail kit dual (`LinmTopBar` · Text · `LinmBadge` · `LinmListRow` · `LinmPrimaryButton` · `LinmSecondaryButton` · `LinmToast` · `LinmEmptyChrome`) |
| reviewUrlIos | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/incident-detail/ui/prototype/ios/index.html#sc-incident-detail` |
| reviewUrlAndroid | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/incident-detail/ui/prototype/android/index.html#sc-incident-detail` |
| ux-analy | `ui/ux-analy.md` §1–§9 |
| demo-parity | `ui/review/demo-parity.md` · Must **closed** |
| prior · po | `confirmed` · `po/requirement.md` |
| prior · data_analy | `confirmed` · `_data-analy/incident-detail-control-hint.md` · `incident-detail-real-data.md` · **hash skip** · **cấm** re-scan |
| updatedAt | `2026-08-29T03:00:00.000Z` |
| taskId | `task_db8582b2` |

## 0. Context & Demo

| ID | Path |
|----|------|
| CTX | `docs/context/features/incident-detail.md` |
| DEM-P1 | `specs/mobile-p1/ui/prototype/{ios,android}/index.html` `#sc-incident-detail` · `DES-MOB-INC-DETAIL` (inventory từ DA — **không** re-scan) |
| DEM | `specs/incident-detail/ui/prototype/{ios,android}/index.html` |
| MAP | `docs/html-to-native-map.md` + `ui/html-to-native-map.md` |
| DA | `_data-analy/incident-detail-control-hint.md` · `incident-detail-bff-endpoints.md` · `incident-detail-action-tree.md` · `incident-detail-real-data.md` |
| PO | `po/requirement.md` |

**Cấm** `mfeStdUrl` / `yarn start:std` / WebView HTML-as-app / ERP.*.  
**Hash skip:** inventory + controlHint + real-data §A+§B từ DA — **cấm** re-scan demo HTML / crawl CTX (`GAP-DES-DEMO-RESCAN-01`).

## 1. Pattern

| Surface | Full screen push `#sc-incident-detail` · shell tab `incident` selected · **không** Modal/Sheet · **không** bottom-sheet chrome |
| Action this slug | GET by id · display hero/rows · POST close · toast · nav estimate / gis-map / list · empty 404 |
| Frame | iOS 390×844 · Android 412×915 |
| BFF | **chỉ** `GET incident/incidents/{id}` + `POST …/{id}/close` · **cấm** invent `api/v1/incident-detail` |

## 2. Screens / DES-MOB-*

| DES / sc-* | Tên VN | CTA / hành vi |
|------------|--------|---------------|
| `DES-MOB-INC-DETAIL` `#sc-incident-detail` | Chi tiết / Chi tiết sự cố | hero · rows · 3 CTA |
| `DES-MOB-TABBAR` | Tab 5 | chrome shell · selected **Vấn đề** · **cấm** invent / reorder |

### IA lock

```
(auth) Login → Tab 5
  … → Vấn đề / list card / create toast → push #sc-incident-detail DES-MOB-INC-DETAIL  ← this pack
  Back → go('incident-list')
  Giao việc xử lý → go('estimate') / toast P1 nếu sibling chưa ship
  Xem trên bản đồ → go('gis-map')
  Đóng sự cố → POST close · toast «Đã đóng sự cố» · refresh badge
  404 → EmptyChrome · back list
```

**Cấm** invent tab 6 · segment trên detail · list/create/chat/sheet trên slug · watermark Gói · device label · «Có mạng».

## 3. Field inventory (kit dual)

| Field | VN | Kit dual | SF ↔ Material | Notes |
|-------|----|----------|---------------|-------|
| navBack | Vấn đề | `LinmTopBar` leading `#i-chevron-left` | `chevron.left` ↔ `ArrowBack` | `go('incident-list')` · iOS text+chevron · Android icon-only |
| title | Chi tiết | `LinmTopBar` title | — | iOS **Chi tiết** · Android **Chi tiết sự cố** — chrome OK |
| codeLabel | Mã | Caption **13** | — | fixed |
| codeValue | SC-* | Display **≥24 / 28** bold | — | DTO `Code` · iOS 28 · Android 24 |
| badge | severity · status | `LinmBadge` | — | `Severity` · `Status` → VN |
| rowType | Loại | `LinmListRow` | — | `Title` ưu tiên · else `IncidentType` |
| rowLoc | Vị trí ghim tự động | `LinmListRow` | — | `"{RouteName} · Km {KmStart}"` |
| rowGps | Định vị | `LinmListRow` | — | `HasGps` · **cấm** fake lat/lng · demo coords offline only |
| rowSource | Nguồn | `LinmListRow` | — | `DetectionId` / reporter · **dual parity** khi có data · empty omit |
| btnAssign | Giao việc xử lý | `LinmPrimaryButton` | — | `go('estimate')` · **không** POST assign P1 |
| btnMap | Xem trên bản đồ | `LinmSecondaryButton` | — | `go('gis-map')` |
| btnClose | Đóng sự cố | `LinmSecondaryButton` | — | POST close · disable nếu closed |
| toastClose | Đã đóng sự cố | `LinmToast` | — | after Close 200 |
| empty404 | (không tìm thấy) | `LinmEmptyChrome` | — | NotFound · back list |
| tabIncident | Vấn đề | `LinmTabBar` | warning ↔ Report | selected · label **13** |

### Badge VN map

| API `Severity` | API `Status` | Badge demo | chrome |
|----------------|--------------|------------|--------|
| `Nghiêm trọng` / `critical` | open / `new` / `Đang mở` / not closed | Nghiêm trọng · Đang mở | red |
| `Cao` / `high` | `in_progress` / giám sát | Cao · Đang được giám sát | warn/orange |
| any | `closed` / `Đóng` | … · Đã đóng | gray |
| other | other | `{Severity} · {Status raw}` | info |

### Demo / fallback SSOT (dual)

| Field | Value |
|-------|-------|
| Code | SC-2401 |
| Badge | Nghiêm trọng · Đang mở |
| Loại | Nứt mặt đường |
| Vị trí | QL.1 · Km 1556+080 |
| Định vị (demo only) | 10.9620, 106.8518 · ±5 m |
| Nguồn | Tuần đường PAT-…0014 |
| Toast close | Đã đóng sự cố |

Toast → `LinmToast`. **Cấm** raw `NavigationBar` / M3 bar / `TabView` / `UIAlert` / `AlertDialog` / `window.alert`.

## 4. Brand

| Token | Hex | Dùng |
|-------|-----|------|
| Primary | `#0C84C0` | tint · tab selected · primary CTA |
| Deep | `#086A9A` | header deep |
| Success | `#3CB448` | — |
| Warn | `#FCB43C` | badge warn |
| Danger | `#FF3B30` / `#B3261E` | badge red (platform) |
| Surface iOS | `#F2F2F7` | nền |
| Surface Android | `#FFFBFE` | nền Material · DEFER chrome |

**Cấm** skin đỏ CCCD / Ministry · **cấm** M3 tím indicator.

## 5. Typography

| Role | Size | Note |
|------|------|------|
| tab / caption / badge | **13** | `GAP-TYP-01` |
| code hero | **≥24 / 28** | iOS 28 · Android 24 |
| row value / CTA | **≥16** / 17 (iOS CTA) | |

## 6. Cấm

- WebView HTML · `mfeStdUrl` · `yarn start:std` / e2e ở role này
- Invent tab 6 / segment trên detail / list·create·chat·sheet trên slug
- Invent `IncidentDetailController` / `api/v1/incident-detail` / Lat/Lng wire P1
- Fake lat/lng khi live OK · fake SC-* khi API OK · sửa định vị · DELETE
- `UIAlert` / `AlertDialog` / `window.alert`
- Watermark Gói / device label / «Có mạng» / proto tap-cycle
- Start siblings `pending_confirm` · re-scan demo (`GAP-DES-DEMO-RESCAN-01`)
- Step 4b / migration / e2e ở role design · bottom-sheet chrome (pack = **screen**)

## 7. Handoff → SA

| Field | Value |
|-------|-------|
| Next slash | `/agent-sa-mobile` |
| BFF | `GET incident/incidents/{id}` + `POST …/{id}/close` · Step 4b `/new-endpoint` **N/A** · Lat/Lng Signed = GAP nếu cần |
| Real-data | `_data-analy/incident-detail-real-data.md` §A+§B |
| Open Q | GPS/source **PO chốt** · Design closed dual Nguồn khi có data · packKind **screen** |
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
| generatedAt | 2026-08-29T03:00:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:incident-detail-control-hint-20260829 |
| realDataHash | sha256:incident-detail-mobile-real-data-20260829 |
| bffContentHash | sha256:incident-incidents-getbyid-close-proxy |
| taskId | `task_db8582b2` |

---
<!-- Version meta: skillId=agent-design-mobile skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
