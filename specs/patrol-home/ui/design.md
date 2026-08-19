# Design — patrol-home (mobile hub · Tuần đường)

| Field | Value |
|-------|-------|
| feature | `patrol-home` |
| title | [Design] [Mobile] Tuần đường |
| this role | `design` · `/agent-design-mobile` |
| status | `confirmed` (autoApprove=ON) |
| design_confirm | **approve** (`task_e73de8f1`) |
| changeScope | `new_page` |
| packKind | **`hub`** (PO confirm) |
| stack | `native_dual` |
| kit_missing_confirm | **N/A** — reuse map hub kit dual (`LinmHeroCard` / `LinmKpiStrip` / `LinmSegment` / `LinmListRow` / …) |
| reviewUrlIos | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-home/ui/prototype/ios/index.html#sc-patrol-home` |
| reviewUrlAndroid | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-home/ui/prototype/android/index.html#sc-patrol-home` |
| ux-analy | `ui/ux-analy.md` §1–§9 |
| demo-parity | `ui/review/demo-parity.md` |
| prior | PO `confirmed` · `po/requirement.md` · contentHash `sha256:7ad6e12c43d77ffc6133f5e3063b85200a6d18d6bd1f8ff91a265b989dcd3b9c` · bffContentHash `sha256:bcf39a561ac6a4ecf60df85f6c8526b926a1c33a3b3f34628aeaa9b9d6d36ead` |
| autoApprove | **ON** |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** `yarn start:std` / `mfeStdUrl` |
| updatedAt | `2026-08-19T14:25:09.000Z` |
| taskId | `task_e73de8f1` |

## 0. Context & Demo

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/patrol-home.md` | hub field tab |
| CTX-02 | `docs/context/features/patrol.md` | sessions domain |
| CTX-03 | `docs/context/features/home.md` | entry quick/tile |
| CTX-04 | `docs/context/features/patrol-offline.md` | reuse sync / Lưu trữ |
| DEM-P1 | `specs/mobile-p1/ui/prototype/{ios,android}/index.html` `#sc-patrol-home` | visual SSOT copy · **không** board (sheet / badge `3` / Android `go('ops')`) |
| DEM | `specs/patrol-home/ui/prototype/{ios,android}/index.html` `#sc-patrol-home` | board dual · PO toast / badge 0 |
| MAP | `docs/html-to-native-map.md` + `ui/html-to-native-map.md` | kit hub |
| STR | `docs/mobile-strings.json` keys `patrol.*` | VN SSOT |
| DA | `_data-analy/patrol-home-control-hint.md` · `patrol-home-bff-endpoints.md` · `patrol-home-action-tree.md` | |
| PO | `po/requirement.md` | §5 controlHint · §7 chốt |

**Cấm** `mfeStdUrl` / `yarn start:std` / WebView HTML-as-app.

## 1. Pattern

| | |
|--|--|
| Surface | Tab field hub · nav + large title + segment 2 + hero + pin + KPI + 2 sections · **không** Modal/Sheet |
| FormMode | none |
| Action this slug | Appear GET sessions · display · toast siblings · push offline |
| `devSlash` | `/agent-dev-ios` + `/agent-dev-android` |
| Frame | iOS 390×844 · Android 412×915 · safe area |

## 2. Screens / DES-MOB-*

| DES / sc-* | Tên VN | Zones | CTA |
|------------|--------|-------|-----|
| `DES-MOB-PAT-HOME` `#sc-patrol-home` | Tuần đường | Nav · title · seg · hero · pin · KPI · hôm nay · quick · tab | toast / push offline |
| `DES-MOB-PAT-HOME-NAV` | Nav | sync icon · bell icon | push offline / toast Thông báo |
| `DES-MOB-PAT-SEG` | Segment 2 | idx **0** Tuần đường · **1** Chấm công | owner / toast |
| `DES-MOB-PAT-ACTIVE` | Hero ca | eyebrow+signal · title · meta · progress · 2 hero actions | toast P1 |
| `DES-MOB-CI-PIN-HERE` | Pin CTA | Primary | toast P1 · GPS P2 |
| `DES-MOB-PAT-KPI` | KPI 3 | Đã ghi · Còn lại · Độ phủ | bind session |
| `DES-MOB-PAT-TODAY` | Hôm nay | 2 rows + badge | toast mã P1 |
| `DES-MOB-PAT-QUICK` | Thao tác nhanh | 6 rows | toast · Lưu trữ push |
| `DES-MOB-TABBAR` | Tab 5 | Trang Chủ · **Tuần đường** · Vấn đề · Công việc · Tôi | shell |

### IA lock

```
(auth) Login → Tab 5
  Trang Chủ · Home quick «Điểm tuần» / tile «Tuần đường» → switch tab field
  Tuần đường (selected) → #sc-patrol-home DES-MOB-PAT-HOME
  Vấn đề · Công việc · Tôi (shell)
#sc-patrol-home
  → nav sync / row Lưu trữ = push #sc-patrol-offline (reuse)
  → bell = toast «Thông báo» · badge 0 ẩn · cấm push ops
  → segment 1 = toast «Chấm công»
  → hero / pin / today / quick siblings = toast nhãn · cấm sheet check-in
  → không child form / sheet
```

**Cấm** invent tab · reorder segment (`GAP-TAB-01`) · «Có mạng» · watermark Gói · device label · native alert · hardcode badge `3`.

## 3. Field inventory (kit dual)

| Field | VN | controlHint | Required | Kit dual | Notes |
|-------|----|-------------|----------|----------|-------|
| navSync | Đồng bộ | IconButton | * | `LinmTopBar` leading | `#i-sync` · push `patrol-offline` |
| navNotify | Thông báo | IconButton | * | `LinmTopBar` trailing | toast · badge **0 ẩn** |
| title | Tuần đường | LargeTitle | * | `LinmLargeTitle` | fixed |
| segPatrol | Tuần đường | Segment | * | `LinmSegment` idx **0** | owner |
| segAttendance | Chấm công | Segment | * | `LinmSegment` idx **1** | toast |
| heroEyebrow | Ca đang chạy · {signal} | Text + signal | * | `LinmHeroCard` · `LinmNetSignalMark` | OS path · hạng Tốt/TB/Yếu |
| heroTitle | QL.1 · Km 1556+000 | Text | * | `LinmHeroCard` | session.route |
| heroMeta | PAT-* · user · điểm/coverage | Text | * | `LinmHeroCard` | demo / live |
| heroProgress | 67% | Progress | * | `LinmProgress` | coverage |
| heroMap | Tiếp tục bản đồ | HeroAction | * | `LinmHeroAction` | toast P1 · `#i-map` |
| heroCheckin | Ghi điểm tuần | HeroAction | * | `LinmHeroAction` | toast P1 · **cấm** sheet · `#i-plus` |
| pinHere | Ghim vị trí hiện tại | PrimaryButton | * | `LinmPrimaryButton` | toast P1 · `#i-mappin` |
| kpiChecked | Đã ghi điểm tuần | KPI | * | `LinmKpiStrip` | 2 |
| kpiRemaining | Còn lại | KPI | * | `LinmKpiStrip` | 1 |
| kpiCoverage | Độ phủ | KPI | * | `LinmKpiStrip` | 67% |
| sectionToday | Hôm nay | SectionLabel | * | `LinmSectionLabel` | |
| todayRows | PAT-* | ListRow + `.row-icon` + badge | * | `LinmListRow` `leading:` `LinmRowIcon` | GET sessions · `#i-walk`/`#i-check` |
| sectionQuick | Thao tác nhanh | SectionLabel | * | `LinmSectionLabel` | |
| quickRows | 6 rows | ListRow + `.row-icon` | * | `LinmListRow` `leading:` `LinmRowIcon` | toast / Lưu trữ push |
| offlineBadge | N | Badge | | `LinmListRow` badge | local count · **ẩn 0** |
| tab | Tuần đường | TabBar | * | `LinmTabBar` | label **13** · glyph 22 |

Toast → `LinmToast`. **Cấm** raw `TabView` / M3 `NavigationBar` (`GAP-MOB-ACT-05`).

### Demo rows SSOT (Hôm nay)

| code | sub | badge |
|------|-----|-------|
| PAT-20260810-0014 | Tuần đường · QL.1 · 07:20 | **Đang tuần** |
| PAT-20260810-0009 | Tuần kiểm · HCM · Hoàn thành | **Xong** |

### Quick rows SSOT

| Title | Sub | Tap |
|-------|-----|-----|
| Ghi nhận hư hỏng | Chụp · hư / mất / hỏng · nhận diện | toast |
| Thu thập bằng camera | Tự nhận diện theo tọa độ · tạo vấn đề | toast |
| Bản đồ ca | Ghim điểm tuần · hành trình | toast |
| Lịch sử phiên | Lọc tuyến · trạng thái | toast |
| Giám sát | Lịch sử điểm tuần · bản đồ · thông báo | toast |
| Lưu trữ | Bản ghi chờ đồng bộ | push `patrol-offline` |

## 4. SF ↔ Material (chrome lệch OK · nghĩa khớp)

| Demo `#i-*` | Ý nghĩa | iOS (SF / kit) | Android (Material / kit) |
|-------------|---------|----------------|---------------------------|
| `#i-sync` | Đồng bộ / Lưu trữ | `LinmStrokeGlyph` `.sync` · row `LinmRowIcon` orange | cùng `d=` `LinmStrokeKind.Sync` |
| `#i-bell` | Thông báo | `bell` | `Notifications` |
| `#i-map` | Bản đồ | `LinmStrokeGlyph` `.map` · hero + row | cùng `d=` |
| `#i-plus` | Ghi điểm | `LinmStrokeGlyph` `.plus` | cùng `d=` |
| `#i-mappin` | Pin / tab Tuần đường | `LinmMapPinGlyph` | `LinmMapPinGlyph` |
| `#i-walk` | Ca đang tuần | `LinmRowIcon` `.walk` primary | cùng `d=` circle+path |
| `#i-check` | Xong | `LinmRowIcon` `.check` success | cùng `d=` |
| `#i-camera` | Hư hỏng | `LinmRowIcon` `.camera` danger | cùng `d=` |
| `#i-video` | Camera tuần | `LinmRowIcon` `.video` accentCam | cùng `d=` |
| `#i-list` | Lịch sử / Giám sát | `LinmRowIcon` `.list` muted / accentTeal | cùng `d=` |
| `#i-chevron-right` | Row chevron (iOS) | `chevron.right` | optional / none |
| `#i-house` | Tab Trang Chủ | `LinmHouseGlyph` | same |
| `#i-warning` | Tab Vấn đề | `LinmWarningGlyph` | same |
| `#i-wrench` | Tab Công việc | `LinmWrenchGlyph` | same |
| `#i-person` | Tab Tôi | `LinmPersonGlyph` | same |

## 5. Brand tokens

| Token | Hex | Dùng |
|-------|------|------|
| primary | `#0C84C0` | hero · pin · tab selected · KPI accent |
| success | `#34C759` / `#3CB448` | KPI đã ghi · badge Xong |
| warn | `#FF9500` / `#FCB43C` | KPI còn lại · Lưu trữ icon |
| surface iOS | `#F2F2F7` | nền |
| surface Android | `#FFFBFE` | nền |
| card | `#FFFFFF` | groups / KPI |

**Cấm** skin Ministry / CCCD · **cấm** M3 tím tab selected.

## 6. Behaviors (parity demo ↔ native)

| Case | UI |
|------|-----|
| Appear | GET `patrol/sessions` · map «Đang tuần» · fail → demo SSOT · hub **mở** |
| Nav sync / Lưu trữ | push `patrol-offline` · **cấm** reimplement offline |
| Bell | toast **Thông báo** · **cấm** alert · **cấm** push ops |
| Segment 1 | toast **Chấm công** |
| Hero map / check-in / pin | toast nhãn · **cấm** sheet / map live P1 |
| Today row | toast mã · drill P2 |
| Quick sibling | toast nhãn · **cấm** start `pending_confirm` |
| Offline badge | local count · **ẩn khi 0** |
| Home entry | switch tab field |
| Signal | OS path hạng · **cấm** «Có mạng» · **cấm** tap-cycle |

## 7. BFF (Design lock — cấm invent)

App `{BffBase}/mobile-bff/api/v1`:

| Method | Path | Slug? |
|--------|------|-------|
| GET | `patrol/sessions` | **yes** |
| GET | `patrol/sessions/{id}` | **no** P1 (toast) |

**Cấm** `GET patrol-home` · `PatrolHomeController` · Step 4b endpoint mới · ERP.*.

## 8. Cấm

- WebView HTML · `mfeStdUrl` · `yarn start:std`
- Gộp sibling screens · `openSheet('checkin')` · hardcode badge `3`
- `UIAlert` / `AlertDialog` / `window.alert`
- «Có mạng» · watermark Gói · device label «iPhone» / «· Android»
- Board prototype **không** prefix `ios/` · `android/` (`GAP-MOB-DES-PFX-01`)

## 9. Handoff → SA

| Field | Value |
|-------|-------|
| Next slash | `/agent-sa-mobile` |
| BFF | reuse `GET patrol/sessions` · Step 4b **N/A** |
| Open Q | PO §7 đã chốt — SA **không** invent hub API |
| kit_missing_confirm | **N/A** |
| Chain | roleOnly=`design` · **không** chain SA turn này |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design-mobile |
| skillVersion | 2026.08.19.23 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.19.29 |
| rulesVersion | 2026.08.19.34 |
| generatedAt | 2026-08-19T14:25:09.000Z |
| versionGate | rechecked |
| contentHash | sha256:7ad6e12c43d77ffc6133f5e3063b85200a6d18d6bd1f8ff91a265b989dcd3b9c |
| bffContentHash | sha256:bcf39a561ac6a4ecf60df85f6c8526b926a1c33a3b3f34628aeaa9b9d6d36ead |

---
<!-- Version meta: skillId=agent-design-mobile skillVersion=2026.08.19.23 schemaVersion=1 workflowVersion=2026.08.19.29 rulesVersion=2026.08.19.34 versionGate=rechecked -->
