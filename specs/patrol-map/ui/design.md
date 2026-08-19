# Design — patrol-map (mobile map · Bản đồ ca)

| Field | Value |
|-------|-------|
| feature | `patrol-map` |
| title | [Design] [Mobile] [Tuần đường] -> Tiếp tục bản đồ |
| this role | `design` · `/agent-design-mobile` |
| status | `confirmed` (autoApprove=ON) |
| design_confirm | **approve** (`task_4ba10fbc`) |
| changeScope | `new_page` |
| packKind | **`map`** (PO confirm) |
| stack | `native_dual` |
| kit_missing_confirm | **N/A** — chrome kit đã có · map = feature MapKit / OSM composition (**cấm** `LinmMap` kit · **cấm** WebView HTML) |
| reviewUrlIos | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-map/ui/prototype/ios/index.html#sc-patrol-map` |
| reviewUrlAndroid | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-map/ui/prototype/android/index.html#sc-patrol-map` |
| ux-analy | `ui/ux-analy.md` §1–§9 |
| demo-parity | `ui/review/demo-parity.md` |
| prior | PO `confirmed` · `po/requirement.md` · contentHash `sha256:patrol-map-control-hint-20260820` · bffContentHash `sha256:patrol-map-mobile-bff-20260820` |
| autoApprove | **ON** |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** `yarn start:std` / `mfeStdUrl` |
| updatedAt | `2026-08-20T01:56:00.000Z` |
| taskId | `task_4ba10fbc` |

## 0. Context & Demo

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/patrol-map.md` | map · §2 UI · §3 API · sibling |
| CTX-02 | `docs/context/features/patrol.md` | domain sessions |
| CTX-03 | `docs/context/features/patrol-home.md` | parent entry hero/row |
| DEM-P1 | `specs/mobile-p1/ui/prototype/{ios,android}/index.html` `#sc-patrol-map` | visual SSOT copy · **board** = toast P1 (không sheet) |
| DEM | `specs/patrol-map/ui/prototype/{ios,android}/index.html` `#sc-patrol-map` | board dual · PO toast / no sheet |
| MAP | `ui/html-to-native-map.md` | kit topbar/chip/pin |
| STR | copy VN từ HTML `#sc-patrol-map` | |
| DA | `_data-analy/patrol-map-control-hint.md` · `patrol-map-bff-endpoints.md` · `patrol-map-action-tree.md` | |
| PO | `po/requirement.md` | §5 controlHint · §7 chốt |

**Cấm** `mfeStdUrl` / `yarn start:std` / WebView HTML-as-app / ERP.* / watermark Gói / device label.

## 1. Pattern

| | |
|--|--|
| Surface | Push map full · nav + OMS host + next overlay + pin + basemap bar + legend · **không** Modal/Sheet |
| FormMode | none |
| Action this slug | Appear GET sessions · display map/overlay · basemap/legend filter · toast CTAs |
| `devSlash` | `/agent-dev-ios` + `/agent-dev-android` |
| Frame | iOS 390×844 · Android 412×915 · safe area · Tab 5 **giữ** dưới map |

## 2. Screens / DES-MOB-*

| DES / sc-* | Tên VN | Zones | CTA |
|------------|--------|-------|-----|
| `DES-MOB-PAT-MAP` `#sc-patrol-map` | Ca đang chạy | Nav · map · next · pin · bar · legend · tab | toast / pop |
| `DES-MOB-OMS-PATROL` | OMS host | polyline · pins | isolate / basemap |
| `DES-MOB-CI-PIN-HERE` | Ghim | primary + `#i-mappin` | loc live · zoom · pin here · toast · deny copy |
| `DES-MOB-TABBAR` | Tab 5 | shell dưới map · field selected | **cấm** invent |

### IA lock

```
(auth) Login → Tab 5
  Tuần đường → #sc-patrol-home
    push #sc-patrol-map DES-MOB-PAT-MAP   ← this pack
      ← back pop patrol-home
      → Ghi điểm tuần = toast P1 · cấm sheet
      → Ghim = loc live + zoom + pin here · cấm fake lat/lng
      → basemap / legend = client filter cùng slug
  Tab 5 shell giữ (field selected)
```

**Cấm** invent tab (`GAP-TAB-01`) · «Có mạng» · watermark Gói · device label · native alert · openSheet check-in trên map.

## 3. Field inventory (kit dual)

| Field | VN | controlHint | Required | Kit dual | Notes |
|-------|----|-------------|----------|----------|-------|
| navBack | Tuần đường | IconButton / text+chevron | * | `LinmTopBar` leading | iOS text · Android icon · pop hub |
| title | Ca đang chạy | NavTitle | * | `LinmTopBar` | fixed |
| navCheckin | Ghi điểm tuần | TextButton | * | `LinmTopBar` trailing | toast **Ghi điểm tuần** · **cấm** sheet |
| mapHost | Bản đồ tuần tra OMS | Map | * | feature MapKit / OSM | **cấm** WebView HTML |
| nextEyebrow | Điểm tiếp theo · OSRM | Text | * | overlay card | label **13** |
| nextTitle | Km 1561+134 · Phước Dinh | Text | * | overlay card | field **16** · bind route P1 fallback demo |
| nextCheckin | Ghi điểm tuần | PrimaryButton | * | `LinmPrimaryButton` | toast P1 |
| pinHere | Ghim vị trí hiện tại | PrimaryButton | * | `LinmPrimaryButton` + `LinmMapPinGlyph` `#i-mappin` | loc live · zoom follow · pin `.here` · toast · deny `patrol.map.locDeny` · **cấm** fake lat/lng |
| baseOsm | Đường | Chip | * | `LinmChip` wrap bar | default on · `ChipWrap` / `FlowRow` |
| baseEsri | Phố | Chip | * | `LinmChip` wrap bar | |
| baseSat | Vệ tinh | Chip | * | `LinmChip` wrap bar | |
| fitAll | Toàn tuyến | Chip | * | `LinmChip` wrap bar | fit overlay |
| lgAll | Tất cả | Chip | * | `LinmChip` wrap legend | isolate all |
| lgTrack | Hành trình | Chip | * | `LinmChip` wrap legend | polyline |
| lgDone | Đã ghi điểm tuần | Chip | * | `LinmChip` wrap legend | pin done |
| lgNext | Điểm kế tiếp | Chip | * | `LinmChip` wrap legend | pin next |

Toast → `LinmToast`. **Cấm** AC implement raw control khi kit đã map.

## 4. Tokens

Same SSOT `docs/mobile-tokens.json` · primary `#0C84C0` · success `#3CB448` · warn `#FCB43C`.  
Track line `#0A84FF`. Pin done iOS `#34C759` / Android `#1B8A4A`. Next iOS `#FF9500` / Android `#E67E00`.

**Cấm** skin Ministry / CCCD.

## 5. Copy VN (SSOT máy)

Ca đang chạy · Tuần đường · Ghi điểm tuần · Điểm tiếp theo · OSRM · Km 1561+134 · Phước Dinh · Ghim vị trí hiện tại · Đường · Phố · Vệ tinh · Toàn tuyến · Tất cả · Hành trình · Đã ghi điểm tuần · Điểm kế tiếp.

**Cấm trên máy:** Check-in (EN) · Có mạng · GPS label · Offline chrome · P1/P2 · watermark Gói · «· iPhone» / «· Android».

## 6. Icon `#i-*`

| Id | Use | SF ↔ Material |
|----|-----|----------------|
| `#i-chevron-left` | back | chevron.left ↔ ArrowBack |
| `#i-mappin` | pin CTA | mappin ↔ Place |

**Cấm** invent `#i-*` · Material Filled-only 1 OS.

## 7. Type / pad

| Role | Size |
|------|------|
| Nav title | **17** |
| Overlay eyebrow / chip / legend | **13** (`GAP-TYP-01`) |
| Next title / primary CTA | **≥16** |

Safe area: nav + map + overlay + tab không đè notch / home indicator.

## 8. States

| State | UI |
|-------|-----|
| default | overlay demo OMS · Đường on · Tất cả on |
| isolate track/done/next | legend filter client |
| GET sessions fail / offline | map **mở** · demo overlay · optional toast · **cấm** full-screen block |
| check-in tap | `LinmToast` **Ghi điểm tuần** · **cấm** sheet / alert |
| pin-here ok | loc live · camera follow zoom · pin `.here` primary · toast **Ghim vị trí hiện tại** |
| pin-here deny / timeout | toast `patrol.map.locDeny` / `patrol.map.locTimeout` · **cấm** fake pin |
| back | pop hub · không confirm |

## 9. BFF (Design cite — SA map)

App `{BffBase}/mobile-bff/api/v1` · **chỉ** `GET patrol/sessions` P1 (+ detail P2). Overlay geometry = demo `map-oms.js`. **Cấm** invent `patrol-map` API · Kind E tracks/coverage P1.

## 10. Out of scope (board)

- Check-in sheet / GPS form (`GAP-MOB-ACT-02`)
- POST tracks · GET coverage · OSRM live network
- Fake lat/lng khi deny/timeout · chữ «GPS» trên máy
- WebView Leaflet-as-app · `LinmMap` kit · invent tab
- Start sibling check-in `pending_confirm`

## 11. Handoff → SA

| Field | Value |
|-------|-------|
| feature / packKind | `patrol-map` / **`map`** |
| phase_from / phase_to | design **confirmed** → sa pending |
| STATUS | `specs/patrol-map/STATUS.md` |
| reviewUrl | dual `file://…/prototype/{ios,android}/index.html#sc-patrol-map` |
| ux-analy / demo-parity | §1–§9 · Must đóng |
| Kit | reuse chrome · map feature composition · `kit_missing_confirm` **N/A** |
| BFF | `GET patrol/sessions` only · Step 4b **N/A** |
| Next AskQuestion | autoApprove=ON — `solution_confirm` khi SA xong |
| Next slash | `/agent-sa-mobile` |
| Chain this turn | **không** (roleOnly=design) |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design-mobile |
| skillVersion | 2026.08.19.23 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.19.29 |
| rulesVersion | 2026.08.19.34 |
| generatedAt | 2026-08-20T01:56:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:patrol-map-control-hint-20260820 |
| bffContentHash | sha256:patrol-map-mobile-bff-20260820 |

---
<!-- Version meta: skillId=agent-design-mobile skillVersion=2026.08.19.23 schemaVersion=1 workflowVersion=2026.08.19.29 rulesVersion=2026.08.19.34 versionGate=rechecked -->
