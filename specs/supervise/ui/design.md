# Design — supervise (mobile list · Giám sát)

| Field | Value |
|-------|-------|
| feature | `supervise` |
| title | [Design] [Mobile] Giám sát |
| this role | `design` · `/agent-design-mobile` |
| status | `confirmed` (autoApprove=ON) |
| design_confirm | **approve** (`task_b163f3ae`) |
| changeScope | `new_page` |
| packKind | **`list`** (PO confirm) |
| stack | `native_dual` |
| kit_missing_confirm | **N/A** — reuse map dual · `.rich-card` = `LinmCard` + feature composition (**cấm** invent `LinmRichCheckinCard` kit) |
| reviewUrlIos | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/supervise/ui/prototype/ios/index.html#sc-supervise` |
| reviewUrlAndroid | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/supervise/ui/prototype/android/index.html#sc-supervise` |
| ux-analy | `ui/ux-analy.md` §1–§9 |
| demo-parity | `ui/review/demo-parity.md` |
| kit-scan | `ui/kit-scan.md` — all `exists` |
| prior | PO `confirmed` · `po/requirement.md` · contentHash `sha256:supervise-mobile-list-20260819` · bffContentHash `sha256:supervise-mobile-bff-20260819` |
| autoApprove | **ON** |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** `yarn start:std` / `mfeStdUrl` |
| updatedAt | `2026-08-19T15:25:00.000Z` |
| taskId | `task_b163f3ae` |

## 0. Context & Demo

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/supervise.md` | list check-in |
| CTX-02 | `docs/context/features/patrol.md` | domain attendance-logs |
| CTX-03 | `docs/context/features/home.md` | parent entry tile |
| CTX-04 | `docs/context/features/patrol-home.md` | parent entry quick |
| DEM-P1 | `specs/mobile-p1/ui/prototype/{ios,android}/index.html` `#sc-supervise` | visual copy SSOT · **không** board (`go('patrol-map')` / `go('checkin-detail')` / Android thiếu Lọc + card 2) |
| DEM | `specs/supervise/ui/prototype/{ios,android}/index.html` `#sc-supervise` | board dual · PO toast sibling |
| MAP | `docs/html-to-native-map.md` + `ui/html-to-native-map.md` | kit list |
| STR | `docs/mobile-strings.json` keys `supervise.*` | VN SSOT |
| DA | `_data-analy/supervise-control-hint.md` · `supervise-bff-endpoints.md` · `supervise-action-tree.md` | |
| PO | `po/requirement.md` | §5 controlHint · §7 chốt |

**Cấm** `mfeStdUrl` / `yarn start:std` / WebView HTML-as-app.

## 1. Pattern

| | |
|--|--|
| Surface | Push list · nav text back + title + Lọc · segment 2 · rich-card scroll · **không** Modal/Sheet / tab bar on this screen |
| FormMode | none |
| Action this slug | Appear GET attendance-logs · display cards · toast filter/map/card |
| `devSlash` | `/agent-dev-ios` + `/agent-dev-android` |
| Frame | iOS 390×844 · Android 412×915 · safe area |

## 2. Screens / DES-MOB-*

| DES / sc-* | Tên VN | Zones | CTA |
|------------|--------|-------|-----|
| `DES-MOB-SUPERVISE` `#sc-supervise` | Giám sát tuần đường | Nav · segment · list cards | toast / pop |
| `DES-MOB-SUP-NAV` | Nav | back **Trang Chủ** · title · **Lọc** | pop / toast |
| `DES-MOB-SUP-SEG` | Segment 2 | idx **0** Danh sách check in · **1** Bản đồ | owner / toast |
| `DES-MOB-SUP-LIST` | List | ≥2 rich-card (demo SSOT) | |
| `DES-MOB-SUP-CARD` | Card | title · org · loc · time · status · thumb | toast detail |

### IA lock

```
(auth) Login → Tab 5
  Trang Chủ · Home tile «Giám sát» → push #sc-supervise
  Tuần đường · patrol-home quick «Giám sát» → push #sc-supervise
  Vấn đề · Công việc · Tôi (shell)
#sc-supervise  DES-MOB-SUPERVISE  ← this pack (không tab bar trên màn)
  → nav back = pop #sc-home
  → Lọc = toast «Lọc tuyến · ngày» · cấm filter sheet
  → segment 1 = toast «Bản đồ» · reset idx 0 · cấm push #sc-patrol-map
  → tap card = toast «Chi tiết check-in» · cấm push #sc-checkin-detail
  → không child form / sheet
```

**Cấm** invent tab · reorder segment (`GAP-TAB-01`) · «Có mạng» · watermark Gói · device label · native alert · start sibling `pending_confirm`.

## 3. Field inventory (kit dual)

| Field | VN | controlHint | Required | Kit dual | Notes |
|-------|----|-------------|----------|----------|-------|
| navBack | Trang Chủ | Text+icon leading | * | `LinmTopBar` | `#i-chevron-left` · pop |
| navTitle | Giám sát tuần đường | Text title | * | `LinmTopBar` | fixed |
| navFilter | Lọc | Text trailing | * | `LinmTopBar` | toast **Lọc tuyến · ngày** |
| segList | Danh sách check in | Segment | * | `LinmSegment` idx **0** | owner |
| segMap | Bản đồ | Segment | * | `LinmSegment` idx **1** | toast · reset 0 |
| cardTitle | Nguyễn Văn A | Text | * | `LinmCard` composition | `UserName` |
| cardOrg | Tổ tuần đường · VP-IV.1 | Text + `#i-building` | | same | demo / `Note` · GAP-MOB-SUP-03 |
| cardLoc | QL.1 Km 1556+000 · Xuân Hải | Text + `#i-mappin` | * | same | `Route` + `KmPoint` |
| cardTime | 2026-08-10 08:40:12 | Text muted | * | same | `CheckInAt` local |
| cardStatus | Trạng thái: Đã ghi điểm tuần | Status strip | * | same | `Status` ok/warn |
| cardThumb | (placeholder) | Thumb 56 | | same | gradient P1 · camera P2 |

Toast → `LinmToast`. **Cấm** raw `List` / M3 `NavigationBar` / `TabView` (`GAP-MOB-ACT-05`). **Cấm** invent kit `LinmRichCheckinCard`.

### Demo rows SSOT

| userName | orgUnit | location | time | status |
|----------|---------|----------|------|--------|
| Nguyễn Văn A | Tổ tuần đường · VP-IV.1 | QL.1 Km 1556+000 · Xuân Hải | 2026-08-10 08:40:12 | Trạng thái: Đã ghi điểm tuần |
| Trần Khánh | Chi cục II.2 | QL.1 Km 1561+134 · Phước Dinh | 2026-08-10 09:12:44 | Trạng thái: Đã ghi điểm tuần |

## 4. SF ↔ Material (chrome lệch OK · nghĩa khớp)

| Demo `#i-*` | Ý nghĩa | iOS (SF / kit) | Android (Material / kit) |
|-------------|---------|----------------|---------------------------|
| `#i-chevron-left` | Back | `chevron.left` | `ArrowBack` (kit text slot) |
| `#i-building` | Org | `building.2` · **cùng motif** | outline building · **cấm** `Icons.Filled.Business` lệch metaphor |
| `#i-mappin` | Location | `mappin` / `LinmMapPinGlyph` · **cùng `d=`** | outline pin · **cấm** `Icons.Filled.Place` nếu lệch nét |

`/convert-web-icon-to-mobile`: dual HTML **cùng `d=`** `#i-chevron-left` · `#i-building` · `#i-mappin`. Native Dev bind kit glyph / path — **cấm** Filled 1 OS (`GAP-MOB-ICON-02`).

## 5. Brand tokens

| Token | Hex | Dùng |
|-------|------|------|
| primary | `#0C84C0` | nav tint · Android seg selected |
| success | `#34C759` / `#1B5E20` text | status ok strip |
| warn | `#FF9500` / `#E65100` | status warn |
| surface iOS | `#F2F2F7` | nền |
| surface Android | `#FFFBFE` | nền |
| card | `#FFFFFF` | cards · nav |

**Cấm** skin Ministry / CCCD · **cấm** M3 tím segment selected.

## 6. Behaviors (parity demo ↔ native)

| Case | UI |
|------|-----|
| Appear | GET `patrol/attendance-logs` · map cards · fail/empty/offline → demo SSOT · list **mở** |
| Back | pop `#sc-home` · **cấm** alert |
| Filter | toast **Lọc tuyến · ngày** · **cấm** sheet / API filter P1 |
| Segment 1 | toast **Bản đồ** · stay list idx **0** |
| Tap card | toast **Chi tiết check-in** · **cấm** push detail |
| Home / patrol entry | tile / quick → push `#sc-supervise` (reuse · **cấm** reimplement hubs) |
| Signal | **N/A** trên list · **cấm** «Có mạng» · **cấm** tap-cycle |

## 7. BFF (Design lock — cấm invent)

App `{BffBase}/mobile-bff/api/v1`:

| Method | Path | Slug? |
|--------|------|-------|
| GET | `patrol/attendance-logs` | **yes** |
| GET | `patrol/attendance-logs/{id}` | **no** P1 (toast) |

**Cấm** `GET supervise` · `SuperviseController` · Step 4b endpoint mới · ERP.*.

## 8. Cấm

- WebView HTML · `mfeStdUrl` · `yarn start:std`
- Gộp sibling screens · `go('patrol-map')` / `go('checkin-detail')` P1
- `UIAlert` / `AlertDialog` / `window.alert`
- «Có mạng» · watermark Gói · device label «iPhone» / «· Android»
- Board prototype **không** prefix `ios/` · `android/` (`GAP-MOB-DES-PFX-01`)
- Invent kit `LinmRichCheckinCard`

## 9. Handoff → SA

| Field | Value |
|-------|-------|
| Next slash | `/agent-sa-mobile` |
| BFF | reuse `GET patrol/attendance-logs` · Step 4b **N/A** |
| Open Q | PO §7 đã chốt — SA **không** invent list API |
| kit_missing_confirm | **N/A** |
| Chain | roleOnly=`design` · **không** chain SA turn này |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design-mobile |
| skillVersion | 2026.08.19.24 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.19.29 |
| rulesVersion | 2026.08.19.34 |
| generatedAt | 2026-08-19T15:25:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:supervise-mobile-list-20260819 |
| bffContentHash | sha256:supervise-mobile-bff-20260819 |

---
<!-- Version meta: skillId=agent-design-mobile skillVersion=2026.08.19.24 schemaVersion=1 workflowVersion=2026.08.19.29 rulesVersion=2026.08.19.34 versionGate=rechecked -->
