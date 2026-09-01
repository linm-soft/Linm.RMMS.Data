# Design — asset-detail (mobile · Chi tiết tài sản)

| Field | Value |
|-------|-------|
| feature | `asset-detail` |
| title | [Design] [Mobile] [Tài sản] -> Chi tiết tài sản |
| this role | `design` · `/agent-design-mobile` |
| status | `confirmed` (autoApprove=ON) |
| design_confirm | **approve** (`task_039c59ba`) |
| packKind | **`screen`** (PO chốt · đóng GAP-MOB-ASSET-DET-PACK-01) |
| changeScope | `new_page` |
| stack | `native_dual` |
| kit_missing_confirm | **N/A** — reuse map detail kit dual (`LinmTopBar` · Text · `LinmListRow` · `LinmPrimaryButton` · `LinmToast` · `LinmEmptyChrome`) |
| reviewUrlIos | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/asset-detail/ui/prototype/ios/index.html#sc-asset-detail` |
| reviewUrlAndroid | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/asset-detail/ui/prototype/android/index.html#sc-asset-detail` |
| ux-analy | `ui/ux-analy.md` §1–§9 |
| demo-parity | `ui/review/demo-parity.md` · Must **closed** |
| prior · po | `confirmed` · `po/requirement.md` · `sha256:asset-detail-po-requirement-20260830` |
| prior · data_analy | `confirmed` · `_data-analy/asset-detail-control-hint.md` · `asset-detail-real-data.md` · **hash skip** · **cấm** re-scan |
| updatedAt | `2026-08-30T21:30:00.000Z` |
| taskId | `task_039c59ba` |

## 0. Context & Demo

| ID | Path |
|----|------|
| CTX | `docs/context/features/asset-detail.md` |
| DEM-P1 | `specs/mobile-p1/ui/prototype/{ios,android}/index.html` `#sc-asset-detail` · `DES-MOB-ASSET-DETAIL` (inventory từ DA — **không** re-scan) |
| DEM | `specs/asset-detail/ui/prototype/{ios,android}/index.html` |
| MAP | `docs/html-to-native-map.md` + `ui/html-to-native-map.md` |
| DA | `_data-analy/asset-detail-control-hint.md` · `asset-detail-bff-endpoints.md` · `asset-detail-action-tree.md` · `asset-detail-real-data.md` |
| PO | `po/requirement.md` |

**Cấm** `mfeStdUrl` / `yarn start:std` / WebView HTML-as-app / ERP.*.  
**Hash skip:** inventory + controlHint + real-data §A+§B từ DA — **cấm** re-scan demo HTML / crawl CTX (`GAP-DES-DEMO-RESCAN-01`).

## 1. Pattern

| Surface | Full screen push `#sc-asset-detail` · shell tab `home` selected · **không** Modal/Sheet · **không** bottom-sheet chrome |
| Action this slug | GET by id · display hero/rows · toast err · empty 404 · nav gis-map / list |
| Frame | iOS 390×844 · Android 412×915 |
| BFF | **chỉ** `GET asset/road-assets/{id}` · **cấm** invent `api/v1/asset-detail` · **cấm** PUT/DELETE |

## 2. Screens / DES-MOB-*

| DES / sc-* | Tên VN | CTA / hành vi |
|------------|--------|---------------|
| `DES-MOB-ASSET-DETAIL` `#sc-asset-detail` | Chi tiết / Chi tiết tài sản | hero · rows · CTA Ghim trên bản đồ |
| `DES-MOB-TABBAR` | Tab 5 | chrome shell · selected **Trang Chủ** · **cấm** invent / reorder |

### IA lock

```
(auth) Login → Tab 5
  … → Trang Chủ / asset list row / adjust «Sửa» → push #sc-asset-detail DES-MOB-ASSET-DETAIL  ← this pack
  Back → go('asset-list')
  Ghim trên bản đồ → go('gis-map') / toast P1 nếu sibling chưa ship
  404 → EmptyChrome · back list
  GET fail → demo SSOT + toast · **cấm** fake 200
```

**Cấm** invent tab 6 · segment trên detail · list/collect/adjust/AI trên slug · watermark Gói · device label · «Có mạng».

## 3. Field inventory (kit dual)

| Field | VN | Kit dual | SF ↔ Material | Notes |
|-------|----|----------|---------------|-------|
| navBack | Tài sản | `LinmTopBar` leading `#i-chevron-left` | `chevron.left` ↔ `ArrowBack` | `go('asset-list')` · iOS text+chevron · Android icon-only |
| title | Chi tiết / Chi tiết tài sản | `LinmTopBar` title | — | iOS **Chi tiết** · Android **Chi tiết tài sản** — chrome OK (GAP-MOB-ASSET-DET-TITLE-01) |
| codeLabel | Mã TS | Caption **13** | — | fixed |
| codeValue | TS-* | Display **≥24 / 28** bold | — | DTO `Code` · iOS 28 · Android 24 |
| rowType | Loại | `LinmListRow` no-icon | — | `typeLabel(Type)` · unknown → raw `Type` |
| rowRouteKm | Tuyến · lý trình | `LinmListRow` no-icon | — | `"{Route} · Km {KmFrom}"` · optional `KmTo` |
| rowGps | Tọa độ | `LinmListRow` no-icon | — | `Lat`,`Lng` · ẩn nếu null · **parity dual** (GAP-MOB-ASSET-DET-GPS-01) |
| btnPinMap | Ghim trên bản đồ | `LinmPrimaryButton` | — | `go('gis-map')` · pass Id/coords · toast P1 nếu chưa ship |
| empty404 | (không tìm thấy) | `LinmEmptyChrome` | — | NotFound · back list |
| toastErr | (lỗi mạng) | `LinmToast` | — | GET fail · **cấm** fake ok |
| tabHome | Trang Chủ | `LinmTabBar` | house ↔ Home | selected · label **13** |

### Demo / fallback SSOT (dual)

| Field | Value |
|-------|-------|
| Title iOS | Chi tiết |
| Title Android | Chi tiết tài sản |
| Code | TS-20260810-014 |
| Loại | Cống |
| Tuyến · lý trình | QL.1 · Km 1556+000 |
| Tọa độ | 11.5300, 109.0040 (khi có Lat/Lng · ẩn nếu null · demo coords **chỉ** offline) |
| CTA | Ghim trên bản đồ |
| Back | Tài sản |

Toast → `LinmToast`. **Cấm** raw `NavigationBar` / M3 bar / `TabView` / `UIAlert` / `AlertDialog` / `window.alert`.

## 4. Brand

| Token | Hex | Dùng |
|-------|-----|------|
| Primary | `#0C84C0` | tint · tab selected · primary CTA |
| Deep | `#086A9A` | header deep |
| Success | `#3CB448` | — |
| Warn | `#FCB43C` | — |
| Danger | `#FF3B30` / `#B3261E` | — |
| Surface iOS | `#F2F2F7` | nền |
| Surface Android | `#FFFBFE` | nền Material · DEFER chrome |

**Cấm** skin đỏ CCCD / Ministry · **cấm** M3 tím indicator.

## 5. Typography

| Role | Size | Note |
|------|------|------|
| tab / caption | **13** | `GAP-TYP-01` |
| code hero | **≥24 / 28** | iOS 28 · Android 24 |
| row value / CTA | **≥16** / 17 (iOS CTA) | |

## 6. Cấm

- WebView HTML · `mfeStdUrl` · `yarn start:std` / e2e ở role này
- Invent tab 6 / segment trên detail / list·collect·adjust·AI trên slug
- Invent `AssetDetailController` / `api/v1/asset-detail` / Finance `api/v1/assets`
- Fake coords khi live OK · fake TS-* khi API OK · PUT/DELETE
- `UIAlert` / `AlertDialog` / `window.alert`
- Watermark Gói / device label / «Có mạng» / proto tap-cycle
- Start siblings `pending_confirm` · re-scan demo (`GAP-DES-DEMO-RESCAN-01`)
- Step 4b / migration / e2e ở role design · bottom-sheet chrome (pack = **screen**)

## 7. Handoff → SA

| Field | Value |
|-------|-------|
| Next slash | `/agent-sa-mobile` |
| BFF | `GET asset/road-assets/{id}` · Step 4b `/new-endpoint` **N/A** · XCO giữ |
| Real-data | `_data-analy/asset-detail-real-data.md` §A+§B |
| Open Q | TITLE/GPS/PACK/TYPE **PO chốt** · Design closed dual GPS khi có data · packKind **screen** |
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
| generatedAt | 2026-08-30T21:30:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:asset-detail-design-20260830 |
| priorControlHintHash | sha256:asset-detail-control-hint-20260830 |
| priorRealDataHash | sha256:asset-detail-real-data-20260830 |
| priorPoHash | sha256:asset-detail-po-requirement-20260830 |
| bffContentHash | sha256:asset-detail-bff-20260830 |
| demoContentHash | sha256:mobile-p1-sc-asset-detail-20260830 |
| taskId | `task_039c59ba` |

---
<!-- Version meta: skillId=agent-design-mobile skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked -->
