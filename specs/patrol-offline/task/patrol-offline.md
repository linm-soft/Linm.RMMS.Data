# Team lead — Task — patrol-offline (mobile list)

| Field | Value |
|-------|-------|
| feature | `patrol-offline` |
| title | [Mobile] Hàng đợi mất sóng |
| this role | `team_lead` · `/agent-tl-mobile` |
| status | `confirmed` |
| changeScope | `new_page` |
| packKind | **`list`** (PO + Design + SA confirm) |
| stack | `native_dual` |
| Feature Kind | **list** `#sc-patrol-offline` · local-first queue · batch sync · **cấm** Kind A–G web / Lin* grid |
| route_confirm | **route_a** (autoApprove=ON) — push `#sc-patrol-offline` / `DES-MOB-PAT-OFFLINE` từ Home tile **Lưu trữ** · Me row **Hàng đợi mất sóng** · patrol-home nav **Đồng bộ** (reuse cùng slug) · back «Trang Chủ» = pop parent · **cấm** invent tab / deep-link web / `mfeStdUrl` |
| autoApprove | **ON** |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · sim 6.9" + emulator + Maestro · PNG `qa/screens` + `qa/store/patrol-offline` · **cấm** `yarn start:std` / `mfeStdUrl` |
| prior · data_analy | **confirmed** · `_data-analy/patrol-offline-control-hint.md` · `patrol-offline-bff-endpoints.md` · `patrol-offline-action-tree.md` · contentHash `sha256:2f2cf6976914278da294ed00a6d1eeecb50364201812335d6852c0f4e46ccaad` · bffContentHash `sha256:10d525fc95cdd32c9e4ede818499041f44341c7481d1d44e0fde6bec5738f403` |
| prior · po | **confirmed** · `po/requirement.md` · `task_eefc9116` |
| prior · design | **confirmed** · `ui/design.md` · `ui/ux-analy.md` · dual `#sc-patrol-offline` · `task_bb1e90a6` · `kit_missing_confirm` **implement_kit** |
| prior · sa | **confirmed** · `be/solution-discovery.md` · `solution_confirm=approve` · `task_06ebc4bc` |
| taskId | `task_6a33be43` |
| updatedAt | `2026-08-19T14:05:00.000Z` |
| thisAction | **List Dữ liệu lưu trữ** `#sc-patrol-offline` only · local queue · POST sync batch · sibling writers = backlog `pending_confirm` |

**Cấm:** gộp sibling (`GAP-MOB-ACT-01/02`) · invent `GET patrol-offline/queue` / `PatrolOfflineController` · check-in live / incident form trên slug này · conflict UI · enqueue submit (`GAP-MOB-ACT-07`) · `ERP.*` · WebView HTML · `mfeStdUrl` · `UIAlert` / `AlertDialog` · raw `TabView` / M3 `NavigationBar` cho segment · numeric badge Home tile · start sibling `pending_confirm` (`GAP-MOB-ACT-06`) · re-seed demo sau sync (`GAP-F-OFFLINE-01`).

---

## Source lock

| Key | Value |
|-----|-------|
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · `ios_repo_confirm` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · `android_repo_confirm` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` |
| be | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` · **cấm ERP.*** |
| app base | `{BffBase}/mobile-bff/api/v1` — path **không** lặp prefix |
| kit | `LinmSegment` · `LinmBanner` · `LinmToast` · `LinmListRow` / rich card pattern · `LinmTopBar` **text slots** (implement_kit) · map `ui/html-to-native-map.md` + `docs/html-to-native-map.md` |
| scaffold | repos **đã có** prior `task_6e4103ce` — **không** `scaffold_new` · **không** `/mobile-app-architecture` |
| Step 4b | **N/A** — reuse `POST integration/sync/offline-batch` · **không** `/new-endpoint` / `/database-migration` / `/create-bff-api-feature` |

### route_confirm (autoApprove=ON)

| Option | Decision |
|--------|----------|
| **route_a** (chọn) | Có phiên → push `#sc-patrol-offline` từ **3 entry** (Home tile Lưu trữ · Me row Hàng đợi mất sóng · patrol-home nav Đồng bộ) = **cùng slug**. Back «Trang Chủ» → **pop** parent entry. Segment 0/1 filter local · POST Đồng bộ khi online. Sibling chưa ship → **cấm** mở · writer enqueue = sibling P2. |
| route_b | — không dùng (không deep-link web) |
| route_c | — không dùng (không invent tab) |

IA lock (design §2 / ux-analy §1): `home|me|patrol-home → push patrol-offline → pop parent`. **Cấm** invent tab · **cấm** Modal/Sheet child · **cấm** GET queue API.

---

## Live gap (TL audit 2026-08-19)

| Surface | Live | TL task |
|---------|------|---------|
| iOS `#sc-patrol-offline` | **DELTA** — scaffold shipped · custom `navBar` text (chưa `LinmTopBar` kit text slots) · segment/banner/cards OK | **T-IOS-PAT-OFFLINE** |
| Android `#sc-patrol-offline` | **DELTA** — scaffold shipped · custom `OfflineNavBar` (chưa kit TopBar text) · dual copy SSOT 2 card | **T-AND-PAT-OFFLINE** |
| `OfflineQueueRepositoryImpl` | **DELTA** — `seedDemoIfEmpty` + `demoItems` fallback khi empty / sau sync vi phạm `GAP-F-OFFLINE-01` | **T-IOS + T-AND** |
| `OfflineQueueStore` | **DELTA** — seed không có cờ `initialized` · post-sync có thể re-seed | **T-IOS + T-AND** |
| `LinmTopBar` kit | **DELTA** — icon-only leading/trailing · SSOT cần text «Trang Chủ» + «Đồng bộ» | **T-KIT-TOPBAR-TEXT** |
| Entry Home tile + Me row | **shipped** iOS + Android | **reuse** · verify wire |
| Entry patrol-home nav Đồng bộ | **MISSING** — chưa wire push patrol-offline | **wire trong T-IOS + T-AND** khi `patrol-home` ship · stub OK P1 nếu sibling pending |
| `POST integration/sync/offline-batch` | BFF proxy + BE **live** | **reuse** · app path `integration/sync/offline-batch` |
| Me badge `offlineCount` | local · **DELTA** count sai khi demo fallback | fix cùng seed policy |
| New BE endpoint / Schema_* | **không** | **T-BE-API** / **T-BE-MIG** = **n/a** |
| Sibling patrol-home / incident-create writers | backlog `pending_confirm` | **cấm** auto start (`GAP-MOB-ACT-06`) |

---

## Tasks

| id | layer | deps | status | skills | DoD |
|----|-------|------|--------|--------|-----|
| **T-KIT-TOPBAR-TEXT** | kit | — | pending | `/agent-dev-ios` + `/agent-dev-android` (kit repos) | Extend `LinmTopBar` dual: optional **text** leading/trailing slots («Trang Chủ» · «Đồng bộ») + giữ icon mode backward compat · **cấm** break AssetHub/Ops · gallery verify |
| **T-IOS-PAT-OFFLINE** | ios | SA · T-KIT · route_a | pending | `/agent-dev-ios` · `/ios-new-screen` · `/dev-ios-swiftui` · `/mobile-ui-ux-analy` packet | Delta `#sc-patrol-offline`: migrate nav → `LinmTopBar` text slots · fix `GAP-F-OFFLINE-01` seed once + post-sync no re-seed · segment/banner/cards parity SSOT · POST sync + toast · Me badge local · wire entries · `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** PASS · ghi `implement/ios.md` |
| **T-AND-PAT-OFFLINE** | android | SA · T-KIT · route_a | pending | `/agent-dev-android` · `/android-new-screen` · `/dev-android-compose` · cùng ux packet | Same field/API/DoD dual · `presentation/feature/patroloffline/*` · migrate `OfflineNavBar` → kit TopBar text · seed policy · `./gradlew :app:assembleDebug` PASS · ghi `implement/android.md` |
| **T-BE-API** | be | — | **n/a** | — | **không** `/new-endpoint` — Integration offline-batch **live** · Step 4b **N/A** |
| **T-BE-MIG** | be | — | **n/a** | — | **không** `/database-migration` |
| T-QA-PAT-OFFLINE | qa | T-IOS · T-AND | pending | `/agent-qa-mobile` | AC slug `patrol-offline` only · `yarn e2e-qa-mobile` · live sim 6.9" + emulator · store PNG `qa/store/patrol-offline` · **cấm** sibling in-scope · **cấm** `yarn e2e-qa` web |

**1 action = 1 feature.** **Cấm** gộp sibling (`patrol-home` check-in · `incident-create` form) vào task file này như in-scope implement.

---

## T-KIT-TOPBAR-TEXT — detail

| | |
|--|--|
| `source.repo` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.Mobile.Kit.iOS` · `/Users/mac/LINM-ORG/AI-QLBD/Linm.Mobile.Kit.Android` |
| SSOT | design `kit_missing_confirm` **implement_kit** · ux-analy §3 Nav back/sync text |

### API (kit)

| Slot | iOS | Android | Notes |
|------|-----|---------|-------|
| leadingText | optional `String?` + chevron | optional `String?` + arrow_back | «Trang Chủ» · tap pop |
| trailingText | optional `String?` | optional `String?` | «Đồng bộ» · tap action |
| leadingIcon / trailingIcon | giữ khi text nil | giữ khi text nil | backward compat AssetHub/Ops |

**Cấm** icon-only back khi caller truyền leadingText.

### Build DoD

Kit build qua app consumer PASS sau integrate · gallery snippet TopBar text mode.

---

## T-IOS-PAT-OFFLINE — detail

| | |
|--|--|
| `source.repo` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| `ssot.zones` | `DES-MOB-PAT-OFFLINE` · `DES-MOB-PAT-OFFLINE-NAV` · `DES-MOB-PAT-OFFLINE-SEG` · `DES-MOB-PAT-OFFLINE-BANNER` · `DES-MOB-PAT-OFFLINE-CARD` · `#sc-patrol-offline` |
| Pattern | Push list · **không** Modal/Sheet child · frame proto 390×844 |

### UI (kit cite — `ui/html-to-native-map.md`)

| Field | Kit | Notes |
|-------|-----|-------|
| navBack | `LinmTopBar` **text leading** | «Trang Chủ» + chevron · pop · e2e `nav-back` |
| title | TopBar title | `offline.title` **Dữ liệu lưu trữ** |
| syncBtn | TopBar **text trailing** | «Đồng bộ» · e2e `btn-sync` |
| segCheckIn | `LinmSegment` index **0** | filter `checkIn` · **cấm** đổi thứ tự |
| segIncident | `LinmSegment` index **1** | filter `incident` |
| offlineBanner | `LinmBanner` warning | `offline.banner.weak` · ẩn khi tab empty |
| card | rich card pattern | thumb 56 · mappin · content card1 · status **Chờ gửi** ngắn |
| toast | `LinmToast` | sync N · incidentEmpty · error · **cấm** `UIAlert` |
| busy | `LinmBusyOverlay` | sync in-flight |

### Store / seed (`GAP-F-OFFLINE-01`)

| Step | Spec |
|------|------|
| First launch | key `linm.offline.queue.v1` **chưa** initialized → seed SSOT 2 card **một lần** · set initialized |
| Appear | load local pending · **cấm** `demoItems` fallback runtime |
| Sync OK | POST batch · toast N · persist `[]` · initialized=true · **cấm** re-seed |
| Sync fail | toast lỗi · **giữ** queue |
| Badge Me | `pendingCount()` local · **ẩn khi 0** · **cấm** GET API |

### API

| Action | Path | When |
|--------|------|------|
| Sync batch | `POST integration/sync/offline-batch` | tap Đồng bộ · body `Partner` · `DeviceId` · `BatchId` · `RecordCount` · `Note` |

### Router / entry

`AppRouter`: Home tile → `showPatrolOfflineFromHome` · Me → `PatrolOfflineView` · patrol-home nav (wire when sibling). **Cấm** WebView HTML.

### Build DoD

```bash
cd /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS && xcodegen generate
xcodebuild -scheme LinmRmms -destination 'platform=iOS Simulator,name=iPhone 17 Pro' build
```

Fail → `build_fail_confirm` · **cấm** mark Dev done.

---

## T-AND-PAT-OFFLINE — detail

| | |
|--|--|
| `source.repo` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| `ssot.zones` | cùng DES / `#sc-patrol-offline` · frame 412×915 |
| Pattern | Push list · **không** Modal/Sheet · **không** `AlertDialog` system |

### UI / store / API

Cùng bảng field + seed policy + API như T-IOS. Kit dual Compose.  
`MainTabScreen`: route `patrol-offline` · Home/Me wire → navigate. Migrate `OfflineNavBar` → `LinmTopBar` text slots.

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
| Scope | Reuse live `POST api/v1/integration/sync/offline-batch` · **cấm** `PatrolOfflineController` |
| Build (baseline) | Mobile.Bff `dotnet build` PASS · **không** delta BE this pack |

**BE ALIGN:** SA chốt Step 4b **N/A**. Sau FE Dev **không** bắt buộc BE align delta — chỉ giữ verify BFF build xanh.

---

## Client contract (SSOT SA — bind Dev)

| Header | When |
|--------|------|
| `Authorization: Bearer {token}` | POST sync |
| `X-Company-Id` | interceptor chung |
| `X-Timezone` | interceptor chung |
| `Accept` | `application/json` |

| Envelope | Rule |
|----------|------|
| Sync 200 | `ApiResponse<SyncJobDto>` · toast N · clear local pending |
| Fail / offline | toast in-app · **giữ** queue · **cấm** block màn |

---

## Navigation / toast matrix (P1)

| Control | Behavior |
|---------|----------|
| Home tile Lưu trữ | push `#sc-patrol-offline` |
| Me row Hàng đợi mất sóng | push cùng màn |
| Patrol-home nav Đồng bộ | push cùng route (wire khi sibling) |
| Back «Trang Chủ» | pop parent |
| Đồng bộ OK | toast **Đã đồng bộ N bản ghi** · clear pending |
| Đồng bộ fail | toast lỗi · **giữ** queue |
| Segment 1 empty | toast **Sự cố mất sóng · chưa có bản ghi** |

---

## Out of scope (this pack)

- Check-in live / map ca (`patrol-home`) · incident form (`incident-create`)
- Xóa từng bản ghi · conflict UI (P2)
- Invent GET queue / server badge
- Numeric badge Home tile
- Reimplement Home/Me shell ngoài wire entry
- Foot watermark Gói · «Có mạng» · tap-cycle tín hiệu

---

## Handoff → Dev

| Field | Value |
|-------|-------|
| feature / packKind | `patrol-offline` / **`list`** |
| route_confirm | **route_a** |
| Tasks | `T-KIT-TOPBAR-TEXT` · `T-IOS-PAT-OFFLINE` · `T-AND-PAT-OFFLINE` · `T-BE-*` **n/a** |
| STATUS | `specs/patrol-offline/STATUS.md` |
| design / ux / solution | `ui/design.md` · `ui/ux-analy.md` · `be/solution-discovery.md` |
| reviewUrl | dual `file://…/prototype/{ios,android}/index.html#sc-patrol-offline` |
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
| generatedAt | 2026-08-19T14:05:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:2f2cf6976914278da294ed00a6d1eeecb50364201812335d6852c0f4e46ccaad |
| bffContentHash | sha256:10d525fc95cdd32c9e4ede818499041f44341c7481d1d44e0fde6bec5738f403 |

---
<!-- Version meta: skillId=agent-tl-mobile skillVersion=2026.08.19.23 schemaVersion=1 workflowVersion=2026.08.19.29 rulesVersion=2026.08.19.34 versionGate=rechecked -->
