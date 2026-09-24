# Dev — Implement — incident-create (iOS)

| Field | Value |
|-------|-------|
| feature | `incident-create` |
| platform | iOS · SwiftUI |
| role | `dev` · `/agent-dev-ios` · `/dev-ios-swiftui` · `/dev-ui-review` |
| task | `T-IOS-INC-CREATE` · queue `task_c05490fb` |
| status | **done** |
| changeScope | `new_page` |
| packKind | **`screen`** |
| route | **route_a** · tab `home` · Home quick/tile → pick → `#sc-inc-form` |
| autoApprove | ON |
| contentHash | sha256:incident-create-control-hint-20260829 |
| updatedAt | `2026-08-29T01:00:00.000Z` |

## Shipped

| Area | Path |
|------|------|
| Feature UI | `Presentation/Features/IncidentCreate/*` — pick gate + form `DES-MOB-INC-FORM` / `DES-MOB-INC-KIND` |
| Catalog + CHK | `Domain/Entities/AssetKcht32Catalog.swift` · `IncidentCreateModels.swift` (local · **cấm** invent CHK API) |
| Fetch types | `FetchAssetTypesUseCase` · `GET integration/asset-types` · fail/empty = [] + toast · **cấm** catalog fallback |
| Create body | `CreateIncidentBody.assetLabel` bind Title/Kind/Severity/GPS/Description/DetectionId |
| Entry | `HomeViewModel` quickIncident + tileIncident → `setOpenIncidentCreate` |
| Router | `AppRouter` `showIncidentCreateFromHome` · secondary cam → Field/`CamPatrol` · estimate toast |
| Deny | reuse `GpsDenyModal` · still camera `FieldReflectCameraPicker` |
| Copy | `LinmCopy` `inc.*` VN SSOT |

## Notes

`/edit-mobile-feature` 2026-08-29: **GAP-MOB-INC-PICK-ALIGN-01** — pick grid 3 cột stretch · label 3 dòng · `LinmAssetKchtPict` 36 SSOT `asset-kcht-icons.js` · **cấm** `square.grid.2x2` · kit local **không** bump · dest **iPhone 17 Pro Max** `xcodebuild` **PASS**.

## Notes (`/edit-mobile-feature` · 2026-09-16 · detect after Dùng ảnh)

- Toast **Không nhận diện được** sau Use = BE persist JPEG `data:` vào `ImageUrl` varchar(1024) + BFF timeout 15s → **GAP-MOB-INC-DETECT-URL-01 CLOSED**.
- After photo-geo Use: bind `result.detection` · fallback `POST ai-vision/detect` với `imageFileId` · **cấm** GPS skip · **cấm** toast `inc.toast.detectFail` khi BE 200.
- Real Vision engine = P2 later.
- VERIFY: `xcodegen` + `xcodebuild` dest **iPhone 17 Pro Max** **PASS**.

## Notes (`/edit-mobile-feature` · 2026-09-16 · tạo vấn đề POST BE)

- **GAP-MOB-INC-CREATE-QUEUE-01 CLOSED** — Create/Draft queue **chỉ** khi mất sóng (NWPath / transport). Online 4xx/5xx → toast `inc.toast.createFail` · **cấm** enqueue.
- Catalog map `CreateIncidentCatalog`: UI Hư/Cao/`Draft` → BE `khac`/`high`/`new` · `mediaIds` từ attachmentId · replay `incidentBody` khi có mạng.
- dest A4 `xcodebuild` **iPhone 17 Pro** **PASS**.

`/edit-mobile-feature` 2026-09-18: **GAP-MOB-EDIT-FIELD-CHROME** — description `LinmTextArea` · **cấm** raw `TextEditor` · dest **iPhone 17 Pro Max** + **iPad Pro 13-inch (M5)** **PASS**.

## VERIFY GATE

| Check | Result |
|-------|--------|
| `xcodegen generate` | **PASS** |
| `xcodebuild -scheme LinmRmms -destination 'platform=iOS Simulator,name=iPhone 17 Pro' build` | **PASS** |
| BFF `dotnet build` | **PASS** (shared) |
| E2E / start:std / mfeStdUrl | **SKIP** (cấm role Dev) |

## Step 4b / BE

| Item | Result |
|------|--------|
| `POST incident/incidents` + `AssetLabel` | **LIVE** — app binds `assetLabel` · **không** invent path |
| `T-BE-INC-CREATE-DETECT-BIND` | **n/a LIVE** |
| `T-BE-INC-CREATE-MEDIA-API` | **SKIP** P1 — optional Signed · app **không** gửi `media[]` |
| `T-BE-INC-CREATE-MIG` | **n/a** — không cột mới |
| BFF controller | **n/a** — catch-all proxy |

## AC map (cite TL)

1. Full form WalletCard · kind · checklist · PhotoRow · AI · loc · severity · desc · Create/Draft/secondary — **PASS**
2. Pick banner + grid → openForm(code) — **PASS**
3. Create requires asset + HasGps · POST BE online · queue **chỉ** mất sóng — **PASS**
4. Tab 5 giữ · pack `tabs: none` · home active — **PASS**

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev-ios |
| skillVersion | 2026.08.25.01 |
| workflowVersion | 2026.08.25.01 |
| generatedAt | `2026-08-29T01:00:00.000Z` |
| versionGate | rechecked |


## Notes — MOB-PERM-OS-01 (2026-09-20)

- OS location/camera dialog **trước** GPS read / capture (`LaunchLocationPermissionOnStart` / `rememberAskLocationPermission` · iOS `requestWhenInUseAuthorization` / `requestAccess`).
- GPS deny modal primary **Mở Cài đặt** · secondary **Để sau** · **cấm** Sao chép hướng dẫn / clipboard.
- iOS already-denied camera → `AppSettingsOpener` (không re-prompt). Android camera Don't ask again → app Settings.

---
<!-- Version meta: skillId=agent-dev-ios workflowVersion=2026.08.25.01 -->
