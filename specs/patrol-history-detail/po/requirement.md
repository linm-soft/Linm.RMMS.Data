# PO — Requirement — patrol-history-detail

| Field | Value |
|-------|-------|
| feature | `patrol-history-detail` |
| title | [Mobile] [Lịch sử phiên] -> Chi tiết ca |
| this role | `po` · `/agent-po-mobile` |
| changeScope | `new_page` |
| packKind | **`sheet`** (STATUS / ACTION-TREE scan) · **surface = Full screen** `#sc-patrol-detail` `DES-MOB-PAT-DETAIL` — **PO chốt PACK-01** |
| formPattern | **Full** (không Modal / BottomSheet) |
| stack | `native_dual` |
| thisAction | **Chi tiết ca** `#sc-patrol-detail` only · push từ list row `patrol-history` + `Id` · GET `patrol/sessions/{id}` · **không** gộp list/filter · **không** gộp `#sc-checkin-detail` save (`patrol-checkin`) · **không** PUT end session P1 |
| status | `confirmed` (autoApprove=ON) |
| requestSource | run packet `task_74ed698b` · `/agent-qldb-workflow-mobile` · roleOnly=`po` · `/agent-po-mobile` · Retry |
| autoApprove | **ON** — Design/SA tự confirm **khi tới lượt** · turn này **không** chain role khác (**GAP-PKT-ROLE-01**) |
| e2eQa | ON queued → `/agent-qa*` · `yarn e2e-qa-mobile` · sim 6.9" + emulator + Maestro · PNG `qa/screens` + `qa/store/patrol-history-detail` · **cấm** role PO chạy e2e / `yarn start:std` / `mfeStdUrl` |
| prior | data-analy **confirmed** · `specs/_data-analy/patrol-history-detail-control-hint.md` · `…-bff-endpoints.md` · `…-action-tree.md` · `…-real-data.md` · contentHash `sha256:patrol-history-detail-control-hint-20260831` · realDataHash `sha256:patrol-history-detail-real-data-20260831` · bffContentHash `sha256:patrol-sessions-getbyid-passthrough` · actionTreeHash `sha256:patrol-history-detail-action-tree-20260831` · **hash skip** · **cấm** re-scan demo (**GAP-PO-DEMO-RESCAN-01**) · compact prior missing → đọc full |
| parent | `patrol-history` · list `#sc-patrol-history` — **supersede** P1 toast-only row → **wire push** detail + `Id` (DEAD-BUTTONS `task_b2fb1a98`) |
| `devSlash` | `/agent-dev-ios` + `/agent-dev-android` |
| updatedAt | `2026-09-01T00:50:00.000Z` |
| taskId | `task_74ed698b` |

**Cấm:** invent `api/v1/patrol-history-detail` · invent GET check-ins list P1 · ERP.* · `mfeStdUrl` · Grid AC web / Report AC Lin* · WebView HTML · `UIAlert` / `AlertDialog` / `window.alert` · watermark «bản Gói N» / «gen realapp» · device label «iPhone» / «· Android» · AC tap-cycle tín hiệu · gộp list/filter/CI-save/end-PUT (`GAP-MOB-ACT-01/02/07`) · start sibling `patrol-map` / `patrol-checkin` (`GAP-MOB-ACT-06`) · AC implement lại kit đã map (`GAP-MOB-ACT-05`) · fake GET 200 (`GAP-MOB-REAL-02`) · ship hardcode khi BFF live · Step 4b / migration ở role PO.

## 1. Goal

Màn **Chi tiết ca** native dual (iOS SwiftUI + Android Compose): full screen đọc phiên tuần · hero mã + badge · info rows · timeline điểm tuần (demo SSOT P1) · CTA bản đồ / kết thúc (toast P1). Persona: Tuần đường · hiện trường. App **chỉ** `{BffBase}/mobile-bff/api/v1/…`. **Cấm** ERP.* · clone controller · WebView bọc HTML · `mfeStdUrl`.

**1 action = 1 feature.** Slug `patrol-history-detail` = `#sc-patrol-detail` `DES-MOB-PAT-DETAIL`. Entry: tap row trên `patrol-history` → **push** detail + pass `Id` (thay toast `patrol.toast.detail`). Back → pop `#sc-patrol-history`.

## 2. changeScope `new_page`

Pack detail **mới** theo data-analy (`new_page`). Visual SSOT = dual HTML mobile-p1 `#sc-patrol-detail` (iOS 390×844 · Android 412×915 · **parity copy** trừ chrome HIG/Material: iOS back text «Lịch sử» · Android icon-only).

**PACK-01 (PO chốt):** `packKind=sheet` giữ trên STATUS/scan · **surface = Full screen** (không bottom-sheet / Modal). Design dual full `#sc-patrol-detail` · **cấm** coi như sheet overlay CI.

**TIMELINE-01 (PO chốt):** timeline **demo SSOT 3 rows P1** · **không** GET check-ins · P2 = SA/TL nếu mở API — **cấm** invent path P1.

## 3. Screens / action-tree

```
patrol-history (#sc-patrol-history)  — parent list · reuse
└── patrol-history-detail (#sc-patrol-detail)  — OWNER this turn
    ├── appear GET patrol/sessions/{id}     — same-slug load · cấm enqueue
    ├── timeline tap → patrol-checkin       — reuse sibling · ≠ slug · cấm gộp save
    ├── CTA Mở bản đồ ca → patrol-map       — shared_action reuse · cấm start Dev
    └── CTA Kết thúc ca / Chia sẻ           — toast P1 · cấm PUT / share sheet
```

| Screen | DES | Pattern | In scope |
|--------|-----|---------|----------|
| Chi tiết ca | `DES-MOB-PAT-DETAIL` | Full | **yes** — owner |
| Lịch sử ca | `DES-MOB-PAT-LIST` | list | entry + back only · **không** AC list/search/filter |
| Bản đồ ca | `DES-MOB-PAT-MAP` | map | CTA nav only · **cấm** implement map |
| Check-in detail | `DES-MOB-CI-DETAIL` | sheet/read | timeline tap nav only · **cấm** save/POST |
| Leave dirty | `DES-MOB-LEAVE` | modal | **N/A** — readonly · không dirty form |

`tabs: none` trên detail · shell Tab **Tuần đường** giữ dưới stack (`GAP-TAB-01`).

## 4. DoD (đo được)

1. Dual native push `#sc-patrol-detail` từ list row + `Id`: top bar title **Chi tiết ca** · back → `#sc-patrol-history` (iOS text «Lịch sử» + chevron · Android icon-only `#i-chevron-left`) · trailing ellipsis **Chia sẻ** → toast P1 · **cấm** system share sheet P1. Frame proto iOS 390×844 · Android 412×915.
2. Appear: GET `patrol/sessions/{id}` · bind hero + info rows (§5/§6). Live OK → **cấm** ship hardcode (`GAP-MOB-REAL-02`). Fail/offline → toast lỗi + demo SSOT fallback · screen **vẫn mở** · **cấm** fake 200. 404 → empty chrome + back list. 403 XCO → toast + back. Thiếu `Id` nav → toast + back list.
3. Hero: caption **Mã phiên** (13) · `Code` display **≥26/28** bold · `LinmBadge` status VN map (§7).
4. Section **Thông tin**: rows Nhân viên / Tuyến / Loại tuần / Ngày KH / Bắt đầu / Độ phủ — label **13** · value **≥16** · `LinmListRow` · format § real-data display rules.
5. Section **Điểm tuần**: **3** timeline rows demo SSOT P1 (Km 1551+200 · 1556+000 · 1561+134) · tap done → `go('checkin-detail')` owner `patrol-checkin` · **cấm** GET check-ins · **cấm** gộp save sheet.
6. Primary **Mở bản đồ ca** → nav `patrol-map` + pass session `Id` · **cấm** embed map · **cấm** fake coords · **cấm** start `patrol-map` Dev trong turn này.
7. Secondary **Kết thúc ca** → toast «Kết thúc ca — xác nhận sau» · **cấm** PUT/DELETE session P1.
8. Parent list: rewire row toast → **push** detail + `Id` (`GAP-MOB-PAT-HIST-DET-NAV-01` / DEMO-01) · **không** đổi search/filter list.
9. Kit reuse map: `LinmTopBar` · `LinmBadge` · `LinmSectionLabel` · `LinmListRow` · `LinmTimelineRow` · `LinmPrimaryButton` · `LinmSecondaryButton` · `LinmToast` · EmptyChrome. **Cấm** raw `UIAlert` / M3 alert / WebView (`GAP-MOB-ACT-05`).
10. Typography: label/tab/caption **13** · field/timeline title **≥16** (`GAP-TYP-01`) · dual copy parity trừ chrome HIG vs Material.
11. Device AC: GPS **display-only** trên timeline subtitle · **không** request location trên detail · Camera n/a · Offline = GET fail → demo + toast · Leave-dirty **N/A** · Biometric/Push n/a.
12. App chỉ `{BffPrefix}` · token Keychain / Encrypted · **cấm** biết RMMS `:5101` · **cấm** ERP.*.
13. BE align: reuse `GET patrol/sessions/{id}` proxy · Step 4b **N/A** · **cấm** invent controller/path.
14. Dev (role sau): iOS `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** PASS · Android `assembleDebug` PASS · Mobile.Bff `dotnet build` PASS — **cấm** `yarn start:std`.
15. QA (role sau): Maestro slug `patrol-history-detail` · login → Tuần đường → Lịch sử → tap row → `#sc-patrol-detail` · live sim 6.9" + emulator · store PNG `qa/store/patrol-history-detail` · **cấm** `yarn e2e-qa` web · **cấm** assert CI save / end PUT.

## 5. CTX / DEM / DI inventory

| ID | Path | Loại |
|----|------|------|
| CTX-01 | `docs/context/features/patrol-history-detail.md` | detail · UI · API GetById |
| CTX-02 | `docs/context/features/patrol-history.md` | parent list · entry row |
| CTX-03 | `docs/context/features/patrol.md` | DOMAIN-MAP sessions |
| DEM-01 | `specs/mobile-p1/ui/prototype/ios/index.html` `#sc-patrol-detail` | iOS 390×844 · `DES-MOB-PAT-DETAIL` · **copy SSOT** |
| DEM-02 | `specs/mobile-p1/ui/prototype/android/index.html` `#sc-patrol-detail` | Android 412×915 · parity copy |
| DEM-03 | `specs/patrol-history-detail/ui/prototype/{ios,android}/` | pack stub — Design chép dual từ mobile-p1 |
| DI-01 | — | **no Excel** |
| DA-01 | `specs/_data-analy/patrol-history-detail-control-hint.md` | controlHint · hash `…-20260831` |
| DA-02 | `specs/_data-analy/patrol-history-detail-bff-endpoints.md` | BFF GetById |
| DA-03 | `specs/_data-analy/patrol-history-detail-action-tree.md` | 1 owner + reuse map/CI |
| DA-04 | `specs/_data-analy/patrol-history-detail-real-data.md` | §A+§B bind |
| SCAN | — | **hash skip** · **cấm** re-crawl (`GAP-PO-DEMO-RESCAN-01`) |
| IOS | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` | native |
| AND | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` | native |
| BFF | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` | `mobile-bff/api/v1` |
| BE | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` | Patrol · **cấm ERP.*** |
| KIT | `Linm.Mobile.Kit.iOS` + `Linm.Mobile.Kit.Android` | TopBar / Badge / SectionLabel / ListRow / TimelineRow / Primary / Secondary / Toast |

**Cấm** cite `mfeStdUrl` / `http://localhost:9301/` trên artifact native.

## 6. controlHint (PO chốt — Design map kit · SA map API)

Nguồn DA-01 + DA-04. UNCLEAR field = **none**.

| Field | VN | controlHint | Required | Kit | Notes |
|-------|----|-------------|----------|-----|-------|
| navBack | Lịch sử | BackButton | * | `LinmTopBar` leading `#i-chevron-left` | pop list · iOS text · Android icon-only |
| title | Chi tiết ca | TopBar title | * | `LinmTopBar` | fixed SSOT |
| navShare | (Chia sẻ) | IconButton | * | trailing `#i-ellipsis` | toast P1 · **cấm** share sheet |
| codeLabel | Mã phiên | Text caption | * | — | size **13** |
| codeHero | PAT-* | Text display | * | — | GET `Code` · **≥26/28** bold |
| badgeStatus | (trạng thái) | Badge | * | `LinmBadge` | GET `Status` + OfflineQueued map |
| sectionInfo | Thông tin | SectionLabel | * | `LinmSectionLabel` | fixed |
| rowUser | Nhân viên | ListRow | * | `LinmListRow` | GET `UserName` |
| rowRoute | Tuyến | ListRow | * | `LinmListRow` | GET `Route` |
| rowType | Loại tuần | ListRow | * | `LinmListRow` | GET `PatrolType` |
| rowPlanDate | Ngày KH | ListRow | * | `LinmListRow` | `PlannedDate` dd/MM/yyyy |
| rowStarted | Bắt đầu | ListRow | * | `LinmListRow` | `StartedAt` HH:mm + TZ |
| rowCoverage | Độ phủ | ListRow | * | `LinmListRow` | `CoveragePercent` + `%` |
| sectionTimeline | Điểm tuần | SectionLabel | * | `LinmSectionLabel` | fixed |
| tlItem | (km · địa danh) | TimelineRow | * | `LinmTimelineRow` | demo SSOT P1 |
| tlTapDone | Xem | TimelineRow tap | * | nav | → `checkin-detail` · ≠ save |
| btnMap | Mở bản đồ ca | PrimaryButton | * | `LinmPrimaryButton` | → `patrol-map` + Id |
| btnEnd | Kết thúc ca | SecondaryButton | * | `LinmSecondaryButton` | toast · **cấm** PUT |
| empty404 | (không tìm thấy) | EmptyChrome | * | — | NotFound · back |
| toastErr / Share / End | — | Toast | * | `LinmToast` | **cấm** native alert |

## 7. Status VN map + demo SSOT fallback

| API `Status` (raw) | UI badge |
|--------------------|----------|
| `active` / `in_progress` / «Đang tuần» / empty+isActive | Đang tuần |
| `done` / `completed` / «Hoàn thành» / «Xong» | Hoàn thành |
| `missed` / «Bỏ sót» | Bỏ sót |
| `offline` / `sync_pending` / OfflineQueued=true | Mất sóng |
| other | `{Status raw}` |

Demo fallback (UI-only khi GET fail — **không** fake 200): Code `PAT-20260810-0014` · Đang tuần · Nguyễn Văn A · QL.1 · Km 1551+200–1561+134 · Tuần đường · 10/08/2026 · 07:20 (UTC+7) · 67% · timeline 3 rows SSOT DA-04.

## 8. BFF (PO chốt path — **cấm** invent)

App `ApiClient.base` = `{BffBase}/mobile-bff/api/v1`.

| Action | Method | Path | In slug? |
|--------|--------|------|----------|
| Load detail | GET | `patrol/sessions/{id}` | **yes** — same-slug |
| Timeline points | — | — | **no P1** — demo SSOT |
| End session | PUT/DELETE | — | **OUT** |
| Check-ins list/save | GET/POST | — | **OUT** — `patrol-checkin` |
| Map embed | — | — | **OUT** — nav only |

## 9. Device AC

| Case | Expected |
|------|----------|
| Offline / GET fail | Toast lỗi · bind demo SSOT · **cấm** fake success |
| 404 | Empty · back list |
| 403 XCO | Toast · back |
| Missing Id | Toast · back list |
| GPS | display timeline only · **không** request trên detail |
| Leave dirty | **N/A** readonly |
| Native alert | **cấm** — chỉ `LinmToast` / in-app empty |

## 10. KPI / Open questions

| KPI | Target |
|-----|--------|
| Row → detail push + GET bind | 100% DoD 1–2 |
| Dual chrome parity | iOS/Android trừ back chrome |
| Timeline P1 | 3 demo rows · 0 invent API |
| CTA map / end | nav / toast only |

| ID | Decision (autoApprove) |
|----|------------------------|
| GAP-MOB-PAT-HIST-DET-PACK-01 | **chốt** sheet meta · Full screen surface |
| GAP-MOB-PAT-HIST-DET-TIMELINE-01 | **chốt** demo SSOT P1 · GET check-ins = P2 |
| GAP-MOB-PAT-HIST-DET-END-01 | toast P1 · **cấm** PUT |
| Open Q còn lại | **none** — Design parity chrome only |

## 11. Handoff → Design

| Field | Value |
|-------|-------|
| write | `ui/design.md` · `ui/ux-analy.md` · `ui/prototype/{ios,android}/index.html` |
| SSOT | DEM-01/02 `#sc-patrol-detail` · controlHint §6 · real-data §B |
| rewire | list row → `go('patrol-detail')` + Id |
| pack | Full screen · **không** sheet overlay |
| grid_standard | **N/A** (không Kind B web) |
| leave | **N/A** |
| next | `/agent-design-mobile` khi tới lượt · **cấm** start trong task PO |
| compact | `handoff/po-compact.md` |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-po-mobile |
| skillVersion | 2026.08.31.2 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.08.31.2 |
| generatedAt | `2026-09-01T00:50:00.000Z` |
| versionGate | rechecked |
| contentHashPrior | sha256:patrol-history-detail-control-hint-20260831 |
| taskId | `task_74ed698b` |

---
<!-- Version meta: skillId=agent-po-mobile skillVersion=2026.08.31.2 schemaVersion=2 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked -->
