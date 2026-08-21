# Team lead — Task — patrol-map (mobile map)

| Field | Value |
|-------|-------|
| feature | `patrol-map` |
| title | [Mobile] Bản đồ ca |
| this role | `team_lead` · `/agent-tl-mobile` |
| status | `confirmed` |
| changeScope | `new_page` |
| packKind | **`map`** (PO + Design + SA confirm) |
| stack | `native_dual` |
| Feature Kind | **map** push `#sc-patrol-map` · **cấm** Kind A–G web / Grid / Report |
| route_confirm | **route_a** (autoApprove=ON) — hub hero **Tiếp tục bản đồ** / row **Bản đồ ca** → push `#sc-patrol-map` · back pop `patrol-home` · check-in **toast only** · pin **loc live + zoom + pin here** · sibling check-in **pending_confirm** · **cấm** mfeStdUrl / sheet |
| autoApprove | **ON** |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · sim 6.9" + emulator + Maestro · PNG `qa/screens` + `qa/store/patrol-map` · **cấm** `yarn start:std` / `mfeStdUrl` |
| prior · data_analy | **confirmed** · `_data-analy/patrol-map-control-hint.md` · `patrol-map-bff-endpoints.md` · `patrol-map-action-tree.md` · contentHash `sha256:patrol-map-control-hint-20260820` · bffContentHash `sha256:patrol-map-mobile-bff-20260820` |
| prior · po | **confirmed** · `po/requirement.md` · `task_58c8b2b2` |
| prior · design | **confirmed** · `ui/design.md` · `ui/ux-analy.md` · `ui/review/demo-parity.md` · dual `#sc-patrol-map` · `task_4ba10fbc` · `kit_missing_confirm` **N/A** |
| prior · sa | **confirmed** · `be/solution-discovery.md` · `solution_confirm=approve` · `task_d5dd35ef` |
| taskId | `task_39458a9b` |
| updatedAt | `2026-08-19T19:10:00.000Z` |
| thisAction | **Bản đồ ca** `#sc-patrol-map` only · GET `patrol/sessions` bind next copy · MapKit/OSM composition · basemap/legend filter · toast CTAs · **cấm** check-in sheet |

**Cấm:** gộp check-in sheet / GPS form (`GAP-MOB-ACT-01/02`) · invent `GET patrol-map` / `PatrolMapController` · Kind E tracks/coverage P1 · WebView HTML · `ERP.*` · `mfeStdUrl` · `UIAlert` / `AlertDialog` · raw `TabView` / M3 `NavigationBar` · start sibling `pending_confirm` (`GAP-MOB-ACT-06/07`) · revert pin-here toast-only (`GAP-MOB-EDIT-01`).

---

## Source lock

| Key | Value |
|-----|-------|
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · `ios_repo_confirm` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · `android_repo_confirm` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` |
| be | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` · **cấm ERP.*** |
| app base | `{BffBase}/mobile-bff/api/v1` — path **không** lặp prefix |
| kit | reuse chrome · map = **feature** MapKit / osmdroid · `LinmTopBar` · `LinmPrimaryButton` · `LinmChip` · `LinmMapPinGlyph` · `LinmToast` · `LinmTabBar` · map `ui/html-to-native-map.md` · **không** `T-KIT-*` · **cấm** `LinmMap` kit |
| scaffold | repos **đã có** prior `task_eae07681` VERIFY PASS — **không** `scaffold_new` |
| Step 4b | **N/A** — reuse `GET patrol/sessions` · **không** `/new-endpoint` / `/database-migration` / `/create-bff-api-feature` |

### route_confirm (autoApprove=ON)

| Option | Decision |
|--------|----------|
| **route_a** (chọn) | Hub hero **Tiếp tục bản đồ** / row **Bản đồ ca** → push `#sc-patrol-map` / `DES-MOB-PAT-MAP`. Back **Tuần đường** → pop `patrol-home` (`reuse`). Appear → `GET patrol/sessions` bind active `Route` → next card. Ghi điểm tuần (nav + card) → toast **Ghi điểm tuần** · **cấm** sheet. Ghim → loc live + zoom follow + pin `.here` · toast ok/deny/timeout · **cấm** fake lat/lng. Basemap/legend = client filter cùng slug. Tab 5 shell **giữ** dưới map (field selected). |
| route_b | — không dùng (không deep-link web) |
| route_c | — không dùng (không invent tab) |

IA lock (design §2 / ux-analy §1): `(auth) Login → Tab 5 · Tuần đường hub → push #sc-patrol-map · back pop hub`. **Cấm** invent tab · **cấm** Modal/Sheet child · **cấm** `GET patrol-map` map API.

---

## Live gap (TL audit 2026-08-19)

| Surface | Live | TL task |
|---------|------|---------|
| iOS `#sc-patrol-map` | **DELTA** — scaffold shipped `task_eae07681` · MapKit + overlay + kit OK · pin-here loc+zoom+pin OK · **nextTitle hardcoded demo** | **T-IOS-PAT-MAP** |
| Android `#sc-patrol-map` | **DELTA** — scaffold shipped · osmdroid + FlowRow chips + pin-here OK · **nextTitle hardcoded demo** | **T-AND-PAT-MAP** |
| `GET patrol/sessions` | BFF proxy + BE `PatrolSessionsController` **live** | **reuse** · bind active session |
| `PatrolMapViewModel.load()` | calls fetch but ignores result → always `PatrolMapOverlay.nextDemoTitle` | **DELTA** bind `PatrolDtoMapper.active(from:)` → `routeKm` else demo |
| Entry hub hero/row | **shipped** iOS `setOpenMap` + Android `navigate("patrol-map")` | **reuse** |
| Pin-here dual | **shipped** loc + followToken/zoom 16.5 + pin `.here` + toast deny/timeout | **reuse** · verify dual |
| Basemap 4 + legend 4 | **shipped** local state · ChipWrap/FlowRow | **reuse** · verify Design zones |
| Check-in toast | **shipped** nav + card → toast · **cấm** sheet | **reuse** |
| Overlay demo OMS | **shipped** `PatrolMapOverlay` track/pins SSOT | **reuse** · **cấm** tracks API P1 |
| New BE endpoint / Schema_* | **không** | **T-BE-API** / **T-BE-MIG** = **n/a** |
| Sibling check-in | **pending_confirm** | **cấm** auto start (`GAP-MOB-ACT-06/07`) |

---

## Tasks

| id | layer | deps | status | skills | DoD |
|----|-------|------|--------|--------|-----|
| T-KIT | kit | — | **n/a** | — | Chrome kit **đã map dual** · map = feature composition · Design `kit_missing_confirm` **N/A** |
| **T-IOS-PAT-MAP** | ios | SA · route_a | pending | `/agent-dev-ios` · `/ios-new-screen` · `/dev-ios-swiftui` · ux packet | Delta `#sc-patrol-map`: bind `nextTitle` từ active session `Route` else demo · verify dual copy/kit zones §Design · toast CTAs · pin-here loc+zoom+pin · basemap/legend · **cấm** sheet · `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** PASS · ghi `implement/ios.md` |
| **T-AND-PAT-MAP** | android | SA · route_a | pending | `/agent-dev-android` · `/android-new-screen` · `/dev-android-compose` · cùng ux packet | Same field/API/DoD dual · bind `nextTitle` · `./gradlew :app:assembleDebug` PASS · ghi `implement/android.md` |
| **T-BE-API** | be | — | **n/a** | — | **không** `/new-endpoint` — `GET patrol/sessions` **live** · Step 4b **N/A** |
| **T-BE-MIG** | be | — | **n/a** | — | **không** `/database-migration` |
| T-QA-PAT-MAP | qa | T-IOS · T-AND | pending | `/agent-qa-mobile` | AC slug `patrol-map` only · `yarn e2e-qa-mobile` **ok:true** · live sim 6.9" + emulator · store PNG `qa/store/patrol-map` · **cấm** sibling in-scope · **cấm** `yarn e2e-qa` web |

**1 action = 1 feature.** **Cấm** gộp sibling check-in sheet / tracks API / `field-reflect` / `cam-patrol` vào task file này như in-scope implement.

---

## T-IOS-PAT-MAP — detail

| | |
|--|--|
| `source.repo` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| `ssot.zones` | `DES-MOB-PAT-MAP` · `DES-MOB-OMS-PATROL` · `DES-MOB-CI-PIN-HERE` · `DES-MOB-TABBAR` · `#sc-patrol-map` |
| Pattern | Push map full · **không** Modal/Sheet · frame proto 390×844 |

### UI (kit cite — `ui/html-to-native-map.md`)

| Field | Kit | Notes |
|-------|-----|-------|
| navBack | `LinmTopBar` leading text | **Tuần đường** · pop hub · e2e `btn-map-back` |
| title | `LinmTopBar` | **Ca đang chạy** |
| navCheckin | `LinmTopBar` trailing | toast **Ghi điểm tuần** · e2e `btn-map-checkin` · **cấm** sheet |
| mapHost | MapKit `Map` | polyline + pins · live tiles · e2e `map-patrol-host` · **cấm** WebView |
| nextEyebrow | overlay card | **Điểm tiếp theo · OSRM** · label 13 |
| nextTitle | overlay card | **DELTA** bind active `Route` else demo · label 16 |
| nextCheckin | `LinmPrimaryButton` | toast **Ghi điểm tuần** · e2e `btn-next-checkin` |
| pinHere | `LinmPrimaryButton` + `LinmMapPinGlyph` | loc live · camera follow span `0.006` · pin `.here` · toast · deny `patrol.map.locDeny` · e2e `btn-pin-here` |
| baseOsm/Esri/Sat/fitAll | `ChipWrap` + `LinmChip` | Đường default · e2e `mb-osm`…`mb-fit` |
| lgAll/Track/Done/Next | `ChipWrap` + `LinmChip` | isolate filter · e2e `lg-all`…`lg-next` |
| toast | `LinmToast` via `SessionController` | **cấm** `UIAlert` |

### API / store

| Step | Spec |
|------|------|
| Appear | `FetchPatrolSessionsUseCase` → `GET patrol/sessions` Bearer |
| Active | `PatrolDtoMapper.active(from:)` filter «Đang tuần» |
| nextTitle | `active?.routeKm` non-empty else `PatrolMapOverlay.nextDemoTitle` |
| Fail / offline | demo overlay SSOT · map **vẫn mở** · **cấm** block · **cấm** native alert |
| Overlay geometry | Waypoints `PatrolMapOverlay` · **paint OSRM** `routeAlongStreets` · pin `projectToPath` / `snapPointToStreet` · **cấm** polyline thẳng · **cấm** tracks API P1 |

### Router / shell

`AppRouter`: `patrolHomeViewModel.setOpenMap { showPatrolMapFromField = true }` · `PatrolMapViewModel.setOnBack { showPatrolMapFromField = false }`. Tab 5 shell **giữ**. **Cấm** WebView HTML.

### Build DoD

```bash
cd /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS && xcodegen generate
xcodebuild -scheme LinmRmms -destination 'platform=iOS Simulator,name=iPhone 17 Pro' build
```

Fail → `build_fail_confirm` · **cấm** mark Dev done.

---

## T-AND-PAT-MAP — detail

| | |
|--|--|
| `source.repo` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| `ssot.zones` | cùng DES / `#sc-patrol-map` · frame 412×915 |
| Pattern | Push map full · **không** Modal/Sheet · **không** `AlertDialog` system |

### UI / store / API

Cùng bảng field + API như T-IOS. **DELTA:** bind `nextTitle` từ `PatrolDtoMapper.active` → `routeKm` else demo trong `PatrolMapViewModel.load()`.  
`MainTabScreen`: field tab → `PatrolHomeScreen` · hero/row → `navigate("patrol-map")` · back `popBackStack()`.

Pin-here: `GetCurrentLocationUseCase` · zoom 16.5 `animateTo` · pin Here primary · permission launcher · toast deny/timeout.

### Build DoD

```bash
cd /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android && ./gradlew :app:assembleDebug
```

---

## T-BE-* (Step 4b — N/A)

| | |
|--|--|
| `source.repo` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` + Mobile.Bff |
| Skill | **không** `/new-endpoint` · **không** `/database-migration` · **không** `/create-bff-api-feature` |
| Scope | Reuse live `GET api/v1/patrol/sessions` via BFF proxy · **cấm** `PatrolMapController` |
| Build (baseline) | Mobile.Bff `dotnet build` PASS · **không** delta BE this pack |

**BE ALIGN:** SA chốt Step 4b **N/A**. Sau FE Dev **không** bắt buộc BE align delta — chỉ giữ verify BFF build xanh.

---

## Client contract (SSOT SA — bind Dev)

| Header | When |
|--------|------|
| `Authorization: Bearer {token}` | GET sessions |
| `X-Company-Id` | interceptor chung |
| `X-Timezone` | interceptor chung |
| `Accept` | `application/json` |

| Envelope | Rule |
|----------|------|
| List 200 | `ApiResponse<PatrolSessionPagedResult>` · map `items[]` → active session |
| Fail / offline | demo SSOT · map **vẫn mở** · **cấm** native alert |

Query: `search` · `status` · `route` · `page` (default 1) · `pageSize` (default 50).

---

## Navigation / toast matrix (P1)

| Control | Behavior |
|---------|----------|
| Hub hero **Tiếp tục bản đồ** / row **Bản đồ ca** | push `#sc-patrol-map` |
| Back **Tuần đường** | pop `patrol-home` |
| Appear | GET sessions · bind next · overlay demo |
| Ghi điểm tuần (nav + card) | toast **Ghi điểm tuần** · **cấm** sheet |
| Ghim vị trí hiện tại | loc live + **snap tim đường** + zoom + pin here tip neo đáy · toast ok · deny `patrol.map.locDeny` · timeout `patrol.map.locTimeout` |
| Basemap chips | switch tile/style · cùng slug |
| Toàn tuyến | fit overlay bounds |
| Legend chips | isolate filter client-side |
| Tab 5 | shell giữ · field selected · **cấm** invent |

---

## Out of scope (this pack)

- Check-in sheet / GPS form (`GAP-MOB-ACT-02`)
- POST tracks · GET coverage · GIS assets · invent `GET patrol-map`
- Polyline thẳng seed / pin raw lệch đường (**GAP-MAP-OSRM-ROUTE** / **GAP-MAP-OSRM-SNAP**)
- Invent `GET patrol-map` / `PatrolMapController` / Kind E endpoints P1
- WebView HTML Leaflet · fake lat/lng pin · revert pin toast-only
- Start sibling check-in `pending_confirm`
- Clone PatrolSessionsController · ERP.* · `mfeStdUrl`

---

## Handoff → Dev

| Field | Value |
|-------|-------|
| feature / packKind | `patrol-map` / **`map`** |
| route_confirm | **route_a** |
| Tasks | `T-IOS-PAT-MAP` · `T-AND-PAT-MAP` · `T-BE-*` **n/a** · `T-KIT` **n/a** |
| STATUS | `specs/patrol-map/STATUS.md` |
| design / ux / solution | `ui/design.md` · `ui/ux-analy.md` · `be/solution-discovery.md` |
| reviewUrl | dual `file://…/prototype/{ios,android}/index.html#sc-patrol-map` |
| Next slash | `/agent-dev-ios` + `/agent-dev-android` (role sau · **không** chain turn này) |
| Verify | iOS `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** · Android `assembleDebug` · BFF `dotnet build` |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** mfeStdUrl |
| Chain this turn | **không** (roleOnly=`team_lead`) |

---

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-tl-mobile |
| skillVersion | 2026.08.19.23 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.19.29 |
| rulesVersion | 2026.08.19.34 |
| generatedAt | `2026-08-19T19:10:00.000Z` |
| versionGate | rechecked |
| contentHash | sha256:patrol-map-control-hint-20260820 |
| bffContentHash | sha256:patrol-map-mobile-bff-20260820 |

---
<!-- Version meta: skillId=agent-tl-mobile skillVersion=2026.08.19.23 schemaVersion=1 workflowVersion=2026.08.19.29 rulesVersion=2026.08.19.34 versionGate=rechecked -->
