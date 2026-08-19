# Team lead — Task — asset-hub (mobile hub)

| Field | Value |
|-------|-------|
| feature | `asset-hub` |
| title | [Mobile] Tài sản |
| this role | `team_lead` · `/agent-tl-mobile` |
| status | `confirmed` |
| changeScope | `new_page` |
| packKind | **`hub`** (PO + Design + SA confirm) |
| stack | `native_dual` |
| Feature Kind | **hub** push `#sc-asset-hub` · **cấm** Kind A–G web / Lin* list / web catalog `asset` |
| route_confirm | **route_a** (autoApprove=ON) — dưới tab **Trang Chủ**: `NavigationStack` push `#sc-asset-hub` / `DES-MOB-ASSET-HUB` từ tile **Tài sản** + wallet · back «Trang Chủ» = pop · sibling → toast nhãn · **cấm** invent tab / deep-link web / `mfeStdUrl` |
| autoApprove | **ON** |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · sim 6.9" + emulator + Maestro · PNG `qa/screens` + `qa/store/asset-hub` · **cấm** `yarn start:std` / `mfeStdUrl` |
| prior · data_analy | **confirmed** · `_data-analy/asset-hub-control-hint.md` · `asset-hub-bff-endpoints.md` · `asset-hub-action-tree.md` · contentHash `sha256:c4be71e3e31309204f5a43ff4fd1aed611bcc7ab643bcdb054e0170334628bf2` · bffContentHash `sha256:6c32dc678168a7923cbd7c06a412ac5c3628d112a6d44ea22c4086128f9bf2a0` |
| prior · po | **confirmed** · `po/requirement.md` · `task_0aaf7eeb` |
| prior · design | **confirmed** · `ui/design.md` · `ui/ux-analy.md` · dual `#sc-asset-hub` · `task_c98a6c21` |
| prior · sa | **confirmed** · `be/solution-discovery.md` · `solution_confirm=approve` · `task_d250d60c` |
| taskId | `task_c7512c97` |
| updatedAt | `2026-08-19T09:28:30.000Z` |
| thisAction | **Hub Tài sản** `#sc-asset-hub` only · wire entry từ `home` tile/wallet · sibling = backlog `pending_confirm` · reuse Integration + AiVision live BFF |

**Cấm:** gộp sibling screens (`GAP-MOB-ACT-01/02`) · invent `api/v1/asset-hub` / `AssetHubController` / org-unit · enqueue submit trên hub (`GAP-MOB-ACT-07`) · POST confirm/dismiss AI · `ERP.*` · WebView HTML · `mfeStdUrl` · `UIAlert` / `AlertDialog` · raw `LazyVGrid` / `LazyVerticalGrid` · hardcode «36» khi API khác · block hub khi API fail · start sibling `pending_confirm` (`GAP-MOB-ACT-06`) · `scaffold_new` / `/mobile-app-architecture` (repos đã có) · `T-KIT-*` (kit map dual **N/A**).

---

## Source lock

| Key | Value |
|-----|-------|
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · `ios_repo_confirm` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · `android_repo_confirm` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` |
| be | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` · **cấm ERP.*** |
| app base | `{BffBase}/mobile-bff/api/v1` — path **không** lặp prefix |
| Auth | Bearer + `X-Company-Id` + `X-Timezone` interceptor chung |
| kit | reuse map dual — `LinmTopBar` · `LinmWalletCard` · `LinmHubTile` · `LinmSectionLabel` · `LinmListRow` · `LinmPrimaryButton` · `LinmToast` · map `ui/html-to-native-map.md` + `docs/html-to-native-map.md` · **không** `T-KIT-*` · `kit_missing_confirm` **N/A** |
| scaffold | repos **đã có** — **không** `scaffold_new` · **không** `/mobile-app-architecture` trước Dev |
| Step 4b | **N/A** — không endpoint mới · không migration · **không** `/new-endpoint` / `/database-migration` / `/create-bff-api-feature` |

### route_confirm (autoApprove=ON)

| Option | Decision |
|--------|----------|
| **route_a** (chọn) | Có phiên · tab **Trang Chủ** selected → tap tile **Tài sản** / wallet trên `#sc-home` → **push** `#sc-asset-hub` / `DES-MOB-ASSET-HUB` trong stack **dưới** tab Home (giữ `LinmTabBar`). Back «Trang Chủ» → **pop** home. Wallet trên hub = **display only**. Sibling chưa ship → `LinmToast` **đúng nhãn control** · **không** mở màn sibling. |
| route_b | — không dùng (không deep-link web / `mfeStdUrl`) |
| route_c | — không dùng (không invent tab Tài sản) |

IA lock (design §2 / ux-analy §1): `home → push asset-hub → pop home`. **Cấm** invent tab · **cấm** Modal/Sheet child · **cấm** `TabView` / M3 `NavigationBar` thay `LinmTabBar` / `LinmTopBar`.

---

## Live gap (TL audit 2026-08-19)

| Surface | Live | TL task |
|---------|------|---------|
| iOS `#sc-asset-hub` | **MISSING** — không `Presentation/Features/AssetHub/*` | **T-IOS-ASSET-HUB** |
| Android `#sc-asset-hub` | **MISSING** — không `presentation/feature/assetHub/*` | **T-AND-ASSET-HUB** |
| Home tile/wallet **Tài sản** | **DELTA** — iOS `HomeViewModel` `.tileAsset`/`.wallet` → toast «Tài sản» · Android cùng toast · **chưa** push | **wire trong T-IOS + T-AND** (thay toast → navigate AssetHub) · **cấm** reimplement Home ngoài wire |
| Home / Me / Login shell | **shipped** | **reuse** · **cấm** fork tab shell |
| `GET integration/asset-types` | BFF proxy + BE `AssetTypesController` **live** · app **chưa** gọi | **DELTA** thin repo + use case count |
| `GET integration/road-routes/search` | BE **live** · app **chưa** gọi | **optional** · fail → demo (`GAP-F-AHUB-01`) |
| `GET ai-vision/asset-candidates` | BE **live** · app **chưa** gọi | **DELTA** Draft list · empty ẩn |
| `ApiService` / `ApiClient` paths | chỉ auth + session-window | **add** 3 GET paths trên client (không invent hub aggregate) |
| NavigationStack Home | **MISSING** push stack (AppRouter switch tab only) | Dev **thêm** stack dưới tab Home cho AssetHub |
| New BE endpoint / Schema_* | **không** | **T-BE-API** / **T-BE-MIG** = **n/a** |
| Kit hub | dual shipped + map | Dev **cấm** raw grid · **cấm** `T-KIT-*` |
| Sibling 8 × `pending_confirm` | backlog | **cấm** auto start (`GAP-MOB-ACT-06`) |

---

## Tasks

| id | layer | deps | status | skills | DoD |
|----|-------|------|--------|--------|-----|
| T-KIT-ASSET-HUB | kit | — | **n/a** | — | Kit hub **đã map dual** · Design `kit_missing_confirm` **N/A** — **không** giao Dev kit |
| **T-IOS-ASSET-HUB** | ios | SA · route_a | **done** | `/agent-dev-ios` · `/ios-new-screen` · `/dev-ios-swiftui` · `/mobile-ui-ux-analy` packet · MVVM | Ship `Presentation/Features/AssetHub/*` · hub kit parity · GET asset-types + optional road-routes + AI Draft · wire Home tile/wallet → push · toast sibling · offline fallback · `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** PASS · ghi `implement/ios.md` |
| **T-AND-ASSET-HUB** | android | SA · route_a | **done** | `/agent-dev-android` · `/android-new-screen` · `/dev-android-compose` · `/android-new-api-call` · cùng ux packet | Same field/API/DoD dual · `presentation/feature/assetHub/*` · Home wire · `./gradlew :app:assembleDebug` PASS · ghi `implement/android.md` |
| **T-BE-API** | be | — | **n/a** | — | **không** `/new-endpoint` — Integration + AiVision **live** · Step 4b **N/A** |
| **T-BE-MIG** | be | — | **n/a** | — | **không** `/database-migration` |
| T-QA-ASSET-HUB | qa | T-IOS · T-AND | pending | `/agent-qa-mobile` | AC slug `asset-hub` only · `yarn e2e-qa-mobile` · live sim 6.9" + emulator · store PNG `qa/store/asset-hub` · **cấm** sibling screens in-scope · **cấm** `yarn e2e-qa` web |

**1 action = 1 feature.** **Cấm** gộp sibling (`asset-types` · `asset-list` · `asset-collect` · `asset-adjust` · `asset-ai` · `gis-map` · `det-hitl`) vào task file này như in-scope implement. Sibling giữ `pending_confirm` — **cấm** auto start (`GAP-MOB-ACT-06`).

---

## T-IOS-ASSET-HUB — detail

| | |
|--|--|
| `source.repo` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| `ssot.zones` | `DES-MOB-ASSET-HUB` · `DES-MOB-ASSET-WALLET` · `DES-MOB-ASSET-GRID` · `DES-MOB-ASSET-MAP-ROW` · `DES-MOB-ASSET-AI` · `#sc-asset-hub` |
| Pattern | Hub push từ home · **không** Modal/Sheet child · frame proto 390×844 |

### UI (kit cite — `ui/html-to-native-map.md`)

| Field | Kit | Notes |
|-------|-----|-------|
| navBack | `LinmTopBar` | title **Tài sản** · back text **Trang Chủ** · pop home · e2e id `nav-back` / proto |
| walletK | `LinmWalletCard` eyebrow | **HỒ SƠ TÀI SẢN** · display · **không** tap nav |
| walletT | `LinmWalletCard` title | live optional route · fail → **QL.1 · Khu IV** |
| walletM | `LinmWalletCard` subtitle | `{N} loại KCHT · thông số + checklist sự cố` · fail → «32 loại…» |
| walletPatrol | `LinmWalletCard` line 3 | demo **Cột Km 1556+000 · đang tuần** · **không** API |
| tileTypes | `LinmHubTile` bg `#0C84C0` · `#i-cube` | title **32 loại tài sản** · toast **32 loại tài sản** |
| tileMap | `LinmHubTile` bg `#1B8A4A` | **Xem trên bản đồ** · toast cùng nhãn |
| secCollect | `LinmSectionLabel` | **Thu thập** |
| tileCollect | `LinmHubTile` | **Thủ công** · toast |
| tileAI | `LinmHubTile` indigo `#5856D6` | **Camera AI** · toast |
| secManage | `LinmSectionLabel` | **Quản lý** |
| tileList | `LinmHubTile` gray | **Danh sách** · toast |
| tileAdjust | `LinmHubTile` orange `#FF9500` | **Cập nhật / bớt** · toast |
| rowMap | `LinmListRow` | **Bản đồ tài sản** · cùng slug `gis-map` · toast **Bản đồ tài sản** |
| secAI | `LinmSectionLabel` | **Chờ xác nhận AI** · **ẩn** khi 0 Draft |
| aiRow | `LinmListRow` | title `Ứng viên {code} · {assetClass}` · sub `Độ tin cậy {pct}% · {routeLabel}` |
| aiConfirm | `LinmPrimaryButton` compact | **Xác nhận** → toast **Xác nhận AI** · **cấm** POST |
| toast | `LinmToast` | sibling · offline optional · **cấm** `UIAlert` |

**Cấm** WebView HTML · watermark Gói · raw `LazyVGrid`.

### API / store

| Step | Spec |
|------|------|
| Appear | Parallel: `GET integration/asset-types?page=1&pageSize=1` · optional `GET integration/road-routes/search?page=1&pageSize=1` · `GET ai-vision/asset-candidates?status=Draft&page=1&pageSize=10` |
| Bind wallet | subtitle từ `totalCount` · title từ first route `code`/`name` · patrol demo static |
| Bind AI | items empty → ẩn section · else row 0 · score 0–1 → `%` round |
| Fail / offline | wallet demo · AI ẩn nếu fail · hub **vẫn mở** · toast không block · **cấm** enqueue «asset-hub» |
| Confirm / CRUD | **không** gọi POST/PUT/DELETE trên hub |

### Router / shell / Home wire

1. `AppRouter` (hoặc Home host): bọc tab Home trong `NavigationStack` · destination `AssetHubView`.
2. `HomeViewModel` `.tileAsset` / `.wallet`: **thay** toast → `onOpenAssetHub()` callback (set từ AppRouter).
3. DI `AppContainer`: wire `AssetHubViewModel` + Integration/AiVision repos + use cases (`FetchAssetTypesCount` · optional `SearchRoadRoutes` · `FetchDraftAssetCandidates`).
4. **Cấm** reimplement Home/Me logic ngoài wire nav · **cấm** second profile repository.

### Build DoD

```bash
cd /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS && xcodegen generate
xcodebuild -scheme LinmRmms -destination 'platform=iOS Simulator,name=iPhone 17 Pro' build
```

Fail → `build_fail_confirm` · **cấm** mark Dev done.

---

## T-AND-ASSET-HUB — detail

| | |
|--|--|
| `source.repo` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| `ssot.zones` | cùng DES / `#sc-asset-hub` · frame 412×915 |
| Pattern | Hub push từ home · **không** Modal/Sheet · **không** `AlertDialog` system |

### UI / API

Cùng bảng field + API như T-IOS. Kit dual Compose.  
Parity note Design §5: AI sub rút gọn «{pct}% · {routeLabel}» OK · wallet patrol line **không bắt buộc** P1 · Camera AI indigo `#6750A4` · Cập nhật warn `#E8A317`.

`MainTabScreen` Home: thêm Nav host / stack push `AssetHubScreen` · `HomeViewModel` `TileAsset`/`Wallet` → navigate (thay toast). Hilt `AssetHubViewModel` + Retrofit paths trên `ApiService` + thin repos/use cases. Offline: demo wallet · ẩn AI · toast không block.

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
| Scope | Reuse live `integration/asset-types` · `integration/road-routes/search` · `ai-vision/asset-candidates` · **cấm** `AssetHubController` / `api/v1/asset-hub` |
| Build (baseline) | Mobile.Bff `dotnet build` PASS · **không** delta BE this pack |

**BE ALIGN:** SA chốt Step 4b **N/A**. Sau FE Dev **không** bắt buộc BE align delta — chỉ giữ verify BFF build xanh.

---

## Client contract (SSOT SA — bind Dev)

| Header | When |
|--------|------|
| `Authorization: Bearer {token}` | mọi GET hub |
| `X-Company-Id` | interceptor chung |
| `X-Timezone` | interceptor chung |
| `Accept` | `application/json` |

| Envelope | Rule |
|----------|------|
| asset-types 200 | `data.totalCount` (int) → wallet subtitle |
| road-routes/search 200 | first item `code`/`name` → wallet title · empty → demo |
| asset-candidates 200 | `data.items` · filter Draft · empty → ẩn AI |
| Fail / offline | không block hub · toast in-app optional |

---

## Navigation / toast matrix (P1)

| Control | Behavior |
|---------|----------|
| Home tile **Tài sản** / wallet | **push** `#sc-asset-hub` (thay toast hiện tại) |
| Back «Trang Chủ» | **pop** home |
| Wallet trên hub | **no-op** display |
| 32 loại tài sản | toast **32 loại tài sản** |
| Xem trên bản đồ | toast **Xem trên bản đồ** |
| Bản đồ tài sản (row) | toast **Bản đồ tài sản** |
| Thủ công | toast **Thủ công** |
| Camera AI | toast **Camera AI** |
| Danh sách | toast **Danh sách** |
| Cập nhật / bớt | toast **Cập nhật / bớt** |
| Xác nhận (AI) | toast **Xác nhận AI** |

Cùng `gis-map` trên tile + row = **một** slug stub (toast khác nhãn control — Design 2 control · 1 owner route).

---

## Out of scope (this pack)

- Sibling màn: `asset-types` · `asset-list` · `asset-collect` · `asset-adjust` · `asset-ai` · `gis-map` · `det-hitl` · `asset-detail`
- Invent `GET asset-hub` / hub wallet / org API
- POST confirm/dismiss · CRUD road-assets · detect-assets · GPS/camera request trên hub
- Reimplement Home/Me/Login ngoài wire nav
- Foot watermark Gói · kit gallery trên production hub
- Start 8 sibling `pending_confirm`

---

## Handoff → Dev

| Field | Value |
|-------|-------|
| feature / packKind | `asset-hub` / **`hub`** |
| route_confirm | **route_a** |
| Tasks | `T-IOS-ASSET-HUB` · `T-AND-ASSET-HUB` · `T-BE-*` **n/a** · `T-KIT` **n/a** |
| STATUS | `specs/asset-hub/STATUS.md` |
| design / ux / solution | `ui/design.md` · `ui/ux-analy.md` · `be/solution-discovery.md` |
| reviewUrl | dual `file://…/prototype/{ios,android}/index.html#sc-asset-hub` |
| Next slash | `/agent-dev-ios` + `/agent-dev-android` (role sau · **không** chain turn này — roleOnly=TL) |
| Verify | iOS `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** · Android `assembleDebug` · BFF `dotnet build` |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** mfeStdUrl |
| Chain this turn | **không** (roleOnly=`team_lead`) |

---

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-tl-mobile |
| skillVersion | 2026.08.19.21 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.19.21 |
| rulesVersion | 2026.08.19.24 |
| generatedAt | 2026-08-19T09:28:30.000Z |
| versionGate | rechecked |
| contentHash | sha256:c4be71e3e31309204f5a43ff4fd1aed611bcc7ab643bcdb054e0170334628bf2 |
| bffContentHash | sha256:6c32dc678168a7923cbd7c06a412ac5c3628d112a6d44ea22c4086128f9bf2a0 |

---
<!-- Version meta: skillId=agent-tl-mobile skillVersion=2026.08.19.21 schemaVersion=1 workflowVersion=2026.08.19.21 rulesVersion=2026.08.19.24 versionGate=rechecked -->
