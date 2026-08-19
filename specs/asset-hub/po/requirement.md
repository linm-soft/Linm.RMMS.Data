# PO — Requirement — asset-hub (mobile hub)

| Field | Value |
|-------|-------|
| feature | `asset-hub` |
| title | [Mobile] Tài sản |
| this role | `po` · `/agent-po-mobile` |
| changeScope | `new_page` |
| packKind | **`hub`** (PO confirm · data-analy đề xuất) |
| stack | `native_dual` |
| thisAction | **Hub Tài sản** `#sc-asset-hub` only · entry `home` tile + wallet · **không** gộp sibling |
| status | `confirmed` (autoApprove=ON) |
| requestSource | run packet `task_0aaf7eeb` · `/agent-qldb-workflow-mobile` · roleOnly=`po` · `/agent-po-mobile` |
| autoApprove | **ON** — Design/SA tự confirm **khi tới lượt** · turn này **không** chain |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · sim 6.9" + emulator + Maestro · PNG `qa/screens` + `qa/store/asset-hub` · **cấm** `yarn e2e-qa` / `yarn start:std` / `mfeStdUrl` / test thủ công thay runtime |
| prior | data-analy **confirmed** · `specs/_data-analy/asset-hub-control-hint.md` · `asset-hub-bff-endpoints.md` · `asset-hub-action-tree.md` · contentHash `sha256:c4be71e3e31309204f5a43ff4fd1aed611bcc7ab643bcdb054e0170334628bf2` · bffContentHash `sha256:6c32dc678168a7923cbd7c06a412ac5c3628d112a6d44ea22c4086128f9bf2a0` · cluster `specs/asset-hub/specs/_data-analy/` **không tồn tại** — SSOT = 3 file `_data-analy/asset-hub-*` · **no Excel** |
| `devSlash` | `/agent-dev-ios` + `/agent-dev-android` |
| updatedAt | `2026-08-19T09:15:00.000Z` |
| taskId | `task_0aaf7eeb` |

**Cấm:** gộp sibling screens (`GAP-MOB-ACT-01/02`) · invent `api/v1/asset-hub` / hub wallet controller · Grid AC web / Report AC Lin* · ERP.* · WebView HTML · `mfeStdUrl` · `UIAlert` / `AlertDialog` / `window.alert` · watermark «Phiên bản Gói N» · hard delete TS · submit Lưu/Tạo/Bớt trên hub (`GAP-MOB-ACT-07`) · start sibling `pending_confirm` (`GAP-MOB-ACT-06`).

## 1. Goal

Hub **Tài sản** native dual (iOS SwiftUI + Android Compose): nav back · ví hồ sơ tuyến · lưới 32 loại + bản đồ · section Thu thập / Quản lý · row bản đồ · hàng chờ xác nhận AI. Persona: Tuần đường · Hạt QLĐB IV · hiện trường. App **chỉ** `{BffBase}/mobile-bff/api/v1/…`. **Cấm** ERP.* · clone controller · WebView bọc HTML demo · `mfeStdUrl`.

**1 action = 1 feature.** Slug `asset-hub` = màn hub `#sc-asset-hub` `DES-MOB-ASSET-HUB`. **Cấm** gộp `asset-types` / `asset-list` / `asset-collect` / `asset-adjust` / `asset-ai` / `gis-map` / `det-hitl` / form sibling (`GAP-MOB-ACT-01`). `#sc-asset-hub` **không** child form/sheet (`GAP-MOB-ACT-02` = none). **Không** enqueue submit trên hub (`GAP-MOB-ACT-07`).

Entry: `home` tile **Tài sản** + wallet (cùng slug) → push `#sc-asset-hub`. Back «Trang Chủ» → `home`.

## 2. changeScope `new_page`

Native **chưa** có màn `#sc-asset-hub` (home hiện toast **Tài sản** khi tap tile/wallet — chưa nav hub). Không bảng Current vs New (`edit_page`). SSOT visual = dual HTML `#sc-asset-hub` (iOS 390×844 · Android 412×915 · **parity copy** trừ patrol line §7). Field + API khớp CTX `docs/context/features/asset-hub.md` + data-analy — **cấm** clone web catalog `asset` Kind B.

Pack này **thêm** hub kit sau login tab flow · parent `home` cập nhật nav khi cả hai pack ship — **cấm** reimplement `HomeView` logic ngoài wire `go('asset-hub')`.

## 3. DoD (đo được)

1. Dual native: iOS SwiftUI + Android Compose — **cùng** zone `#sc-asset-hub`: nav · wallet · hub-grid ×3 section · list row bản đồ · AI pending. Frame proto iOS 390×844 · Android 412×915.
2. Nav back «Trang Chủ» → pop `home` · title bar **Tài sản**.
3. Wallet `LinmWalletCard` **display only** trên hub — tap **không** nav (đã ở hub) · khác `home` wallet (reuse copy · owner nav = entry từ home).
4. Wallet live (P1):
   - Title tuyến: optional `GET integration/road-routes/search` → label đầu khi success · fail/offline → demo **QL.1 · Khu IV** (`GAP-F-AHUB-01`).
   - Subtitle count: `GET integration/asset-types` → `{N} loại KCHT · thông số + checklist sự cố` · fail → demo «32 loại…» (`GAP-F-AHUB-02`).
   - iOS thêm dòng patrol demo **Cột Km 1556+000 · đang tuần** khi có context tuần (demo copy P1 · **không** API hub) · Android **không bắt buộc** dòng này P1.
5. Hub **vẫn mở** khi wallet/AI API fail · toast in-app **không** chặn màn · **cấm** full-screen block.
6. AI pending: `GET ai-vision/asset-candidates` filter Draft on appear · empty → **ẩn** section «Chờ xác nhận AI» · ≥1 → row đầu + nút **Xác nhận** (`GAP-F-AHUB-03`).
7. Tap sibling **chưa** ship → `LinmToast` **đúng nhãn control** · **không** mở màn sibling trong pack `asset-hub` · **không** start `pending_confirm` (`GAP-MOB-ACT-06`):

   | Control | Toast |
   |---------|-------|
   | 32 loại tài sản | **32 loại tài sản** |
   | Xem trên bản đồ | **Xem trên bản đồ** |
   | Bản đồ tài sản (row) | **Bản đồ tài sản** |
   | Thủ công | **Thủ công** |
   | Camera AI | **Camera AI** |
   | Danh sách | **Danh sách** |
   | Cập nhật / bớt | **Cập nhật / bớt** |
   | Xác nhận (AI) | **Xác nhận AI** |

8. Cùng `go('gis-map')` trên tile + row = **một** slug sibling · Design 2 control · Dev **một** route stub.
9. Kit **reuse map**: `LinmTopBar` · `LinmWalletCard` · `LinmHubTile` · `LinmSectionLabel` · `LinmListRow` · `LinmPrimaryButton` · `LinmToast`. **Cấm** raw grid/row khi kit đã map (`GAP-MOB-ACT-05` · `GAP-MOB-ALIGN-01`).
10. App chỉ `{BffPrefix}` · **cấm** biết RMMS `:5101` · token Keychain / Encrypted.
11. Dev (role sau): iOS `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** PASS · Android `assembleDebug` PASS · Mobile.Bff `dotnet build` PASS — **cấm** `yarn start:std`.
12. QA (role sau): Maestro slug `asset-hub` only · live sim 6.9" + emulator · store PNG `qa/store/asset-hub` · **cấm** test sibling in-scope · **cấm** `yarn e2e-qa` web.
13. BE align: **không** endpoint mới — reuse proxy `integration/*` · `ai-vision/*`. Step 4b `/new-endpoint` **N/A** pack này. **Cấm** `AssetHubController` / `api/v1/asset-hub`.

## 4. CTX / DEM / DI inventory

| ID | Path | Loại |
|----|------|------|
| CTX-01 | `docs/context/features/asset-hub.md` | hub · §2 UI · §3 API · §4 GAP |
| CTX-02 | `docs/context/features/asset.md` | sibling CRUD · road-assets |
| CTX-03 | `docs/context/features/home.md` | parent entry tile + wallet |
| CTX-04 | `docs/context/features/ai-asset-detect.md` | AI candidates · HITL sibling |
| DEM-01 | `specs/mobile-p1/ui/prototype/ios/index.html` `#sc-asset-hub` | iOS 390×844 · `DES-MOB-ASSET-HUB` |
| DEM-02 | `specs/mobile-p1/ui/prototype/android/index.html` `#sc-asset-hub` | Android 412×915 · **cùng copy** (trừ patrol line) |
| DEM-03 | `specs/asset-hub/ui/prototype/` | pack stub — Design chép dual từ mobile-p1 |
| MAP | `docs/html-to-native-map.md` | kit hub **đã map dual** |
| DI-01 | — | **no Excel** |
| DA-01 | `specs/_data-analy/asset-hub-control-hint.md` | controlHint |
| DA-02 | `specs/_data-analy/asset-hub-bff-endpoints.md` | BFF hub summary |
| DA-03 | `specs/_data-analy/asset-hub-action-tree.md` | 1 hub + sibling enqueue |
| SCAN | `specs/_form-type-mobile/ACTION-TREE.md` | verify |
| IOS | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` | native · home toast stub |
| AND | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` | native |
| BFF | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` | `mobile-bff/api/v1` proxy |
| BE | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` | DOMAIN-MAP — **cấm ERP.*** · **không** `api/v1/asset-hub` |
| KIT | `Linm.Mobile.Kit.iOS` + `Linm.Mobile.Kit.Android` | `LinmHubTile` / `LinmWalletCard` / `LinmListRow` **đã có** |

**Cấm** cite `mfeStdUrl` / `http://localhost:9301/` trên artifact native.

## 5. controlHint (PO chốt — Design map kit · SA map API)

Nguồn `#sc-asset-hub` dual + DA-01.

| Field | VN | controlHint | Required | Kit (iOS+Android cùng turn) | Notes |
|-------|----|-------------|----------|------------------------------|-------|
| navBack | Trang Chủ | BackButton | * | `LinmTopBar` / nav chrome | `go('home')` · parent `home` |
| walletK | HỒ SƠ TÀI SẢN | Text display | * | `LinmWalletCard` eyebrow | display · **không** tap nav |
| walletT | QL.1 · Khu IV | Text display | * | `LinmWalletCard` title | live optional route search · fallback demo |
| walletM | 32 loại KCHT… | Text display | * | `LinmWalletCard` subtitle | live count API · fallback «32» |
| walletPatrol | Cột Km… đang tuần | Text display | | `LinmWalletCard` line 3 | **iOS demo P1** · Android optional |
| tileTypes | 32 loại tài sản | HubTile | * | `LinmHubTile` `#i-cube` bg `#0C84C0` | sibling `asset-types` |
| tileMap | Xem trên bản đồ | HubTile | * | `LinmHubTile` `#i-scope` bg teal | sibling `gis-map` |
| secCollect | Thu thập | SectionLabel | * | `LinmSectionLabel` | không route |
| tileCollect | Thủ công | HubTile | * | `LinmHubTile` `#i-plus` | sibling `asset-collect` |
| tileAI | Camera AI | HubTile | * | `LinmHubTile` `#i-camera` bg indigo | sibling `asset-ai` |
| secManage | Quản lý | SectionLabel | * | `LinmSectionLabel` | không route |
| tileList | Danh sách | HubTile | * | `LinmHubTile` `#i-cube` bg gray | sibling `asset-list` |
| tileAdjust | Cập nhật / bớt | HubTile | * | `LinmHubTile` `#i-minus` bg orange | sibling `asset-adjust` |
| rowMap | Bản đồ tài sản | ListRow | * | `LinmListRow` `#i-scope` | cùng slug `gis-map` |
| secAI | Chờ xác nhận AI | SectionLabel | | `LinmSectionLabel` | ẩn khi 0 Draft |
| aiTitle | Ứng viên TS-88 · Cống | Text display | | `LinmListRow` title | GET candidates row 1 |
| aiSub | 91% · QL.1 Km… | Text display | | `LinmListRow` subtitle | candidate DTO |
| aiConfirm | Xác nhận | PrimaryButton | * | `LinmPrimaryButton` compact | sibling `det-hitl` |

Toast / banner → `LinmToast`. **Cấm** AC implement raw control khi kit đã map.

## 6. BFF (PO chốt path — **cấm** invent)

App `ApiClient.base` = `{BffBase}/mobile-bff/api/v1`. Path **không** lặp prefix.

| Action / zone | Method | Path | In slug `asset-hub`? |
|---------------|--------|------|----------------------|
| Wallet — số loại catalog | GET | `integration/asset-types` | **yes** — count → subtitle ví |
| Wallet — tuyến label | GET | `integration/road-routes/search` | **yes** — optional live · fallback demo |
| Wallet — patrol line | — | — | **no** — demo copy · owner `patrol-home` |
| AI pending list | GET | `ai-vision/asset-candidates` | **yes** — filter status=Draft |
| AI pending nearby | GET | `ai-vision/asset-candidates/nearby` | optional — không block DoD |
| Nav back home | — | — | local nav · **không** API |
| Sibling CRUD / map / detect | — | `asset/*` · `gis/*` · `ai-vision/detect-assets` | **no** — sibling screens |

**Cấm** `GET asset-hub` · `AssetHubController` · DbContext trên Mobile.Bff.

## 7. Open questions — PO chốt

| ID | Question | Decision (PO) |
|----|----------|----------------|
| GAP-F-AHUB-01 | Wallet «QL.1 · Khu IV» live từ API nào | **Không invent org API.** P1: demo copy static. Optional live: `GET integration/road-routes/search` label đầu khi success · fail → giữ demo · **cấm** block hub. |
| GAP-F-AHUB-02 | 32 vs 36 loại trên ví | Subtitle ví = **live count** từ `integration/asset-types` · tile label giữ «32 loại tài sản» marketing P1 · fail → «32 loại KCHT…». |
| GAP-F-AHUB-03 | Hub load AI pending mỗi lần mở | GET candidates Draft on appear · empty → **ẩn** section · ≥1 → row đầu + CTA **Xác nhận**. |
| Tap sibling vs nav stub | data-analy để PO chốt | **Toast nhãn** §3.7 đến khi sibling Approve + implement · TL **không** nav stub giả màn. |
| packKind | data-analy `hub` | **Confirm `hub`.** **≠** web catalog `asset`. **Cấm** Grid/Report AC. |
| Kit hub | map + kit dual đã có | **`kit_missing_confirm` N/A** — reuse map. Design **verify** dual. Thiếu mới `implement_kit`. **Cấm** Dev raw grid. |
| Wallet tap on hub | display vs nav | **Display only** — đã ở hub · **cấm** re-nav self. |
| iOS patrol line | demo HTML extra line | **Giữ iOS demo** P1 · Android **không bắt buộc** — Design ghi parity note. |
| Sibling 8 × `pending_confirm` | GAP-MOB-ACT-06 | **Không** start. Board Approve riêng. |
| Cluster web path | `specs/asset-hub/specs/_data-analy/` | **N/A.** Dùng `_data-analy/asset-hub-*.md`. |
| GAP-PO-STORE-01 | signup / xóa tài khoản | **N/A** — hub không signup. |

UNCLEAR field = **none** — không AskQuestion field.

## 8. Screens (REQUIRED)

| Surface | Demo | Pattern | FormMode | Actions **this** `{feature}` | `devSlash` |
|---------|------|---------|----------|------------------------------|------------|
| Hub Tài sản | `#sc-asset-hub` `DES-MOB-ASSET-HUB` · iOS + Android | **Hub** (push từ home · không Modal/Sheet) | none (không form) | Display wallet summary · load AI pending · tap tiles/row **theo §3** | `/agent-dev-ios` + `/agent-dev-android` |

**Không** trên pack này: `#sc-asset-types` / `#sc-asset-list` / `#sc-asset-collect` / `#sc-asset-adjust` / `#sc-asset-ai` / `#sc-gis-map` / `#sc-det-hitl` / `#sc-asset-form` · submit/Lưu · hard delete.

Cùng `go('gis-map')` trên tile + row = **một** slug sibling — Design 2 control · **một** route owner.

Frame: iOS 390×844 · Android 412×915 · safe area · content không đè notch / home indicator.

## 9. Device AC (REQUIRED)

| ID | Behavior | AC |
|----|----------|-----|
| AC-D-01 | Offline | Hub **mở** · wallet demo copy · AI section ẩn nếu fail · toast in-app không chặn · **cấm** full-screen block |
| AC-D-02 | GPS deny | **N/A** — hub không GPS (sibling `gis-map` · `asset-collect`) |
| AC-D-03 | Leave dirty | **N/A** — không form |
| AC-D-04 | Native alert | **Cấm** `UIAlert` / `AlertDialog` / `window.alert`. Mọi phản hồi = `LinmToast` |
| AC-D-05 | Keyboard | **N/A** — không input |
| AC-D-06 | Safe area | Nav + wallet + grids + AI row không đè notch / home indicator |
| AC-D-07 | Biometric | **N/A** |
| AC-D-08 | Signal | **N/A** trên hub (không tín hiệu capsule) |
| AC-D-09 | Token | GET BFF Bearer Keychain / Encrypted · app chỉ `{BffPrefix}` |
| AC-D-10 | Back nav | «Trang Chủ» → pop `home` · **cấm** invent tab mới |
| AC-D-11 | Camera / push | **N/A** trên hub (Camera AI = sibling) |
| AC-F-01 | Appear | Parallel optional: route search · asset-types count · AI candidates Draft |
| AC-F-02 | Wallet fail | Giữ demo 3 dòng · toast optional · **cấm** block hub |
| AC-F-03 | AI empty | Section «Chờ xác nhận AI» **ẩn** |
| AC-F-04 | AI row | Row đầu bind candidate · nút **Xác nhận** → toast **Xác nhận AI** (sibling chưa ship) |
| AC-F-05 | Sibling tap | Toast nhãn §3.7 · **cấm** push màn sibling |
| AC-F-06 | Dual parity | iOS + Android **cùng** tiles + sections + wallet core copy · patrol line iOS-only OK P1 |
| AC-F-07 | Entry | `home` tile/wallet → push `#sc-asset-hub` khi wired · back → `home` |

## 10. Leave / alert (REQUIRED)

| Case | UI |
|------|-----|
| Dirty leave | **Không áp dụng** |
| Wallet / AI API fail | `LinmToast` optional + demo fallback · **cấm** native alert |
| Sibling tap | Toast in-app §3.7 |
| Back | Pop `home` · không confirm |

## 11. Out of scope (this pack)

- Mọi màn sibling (`asset-types` · `asset-list` · `asset-collect` · `asset-adjust` · `asset-ai` · `gis-map` · `det-hitl` · `asset-detail` · `incident-create`)
- Invent `GET asset-hub` / hub wallet controller / org-unit API
- Submit Lưu / Tạo / Bớt / confirm AI thực thi trên hub
- Hard delete tài sản · Web catalog `asset` MFE
- GPS / camera / map embed / biometric / push request trên hub
- Start 8 sibling `pending_confirm`
- ERP.* · `mfeStdUrl` · WebView HTML

## 12. KPI (HĐ Gói 1 — màn này)

Hub Tài sản là cổng hiện trường: ví tuyến + lối vào 32 loại · thu thập · quản lý · bản đồ · hàng chờ AI — **một** slug sau tile home. DoD mobile-p1 yêu cầu `#sc-asset-hub` dual + read summary BFF + kit hub — **không** omni-implement sibling trong 1 slug.

## 13. Handoff → Design

| Field | Value |
|-------|-------|
| feature / packKind | `asset-hub` / **`hub`** (confirmed) |
| phase_from / phase_to | po **confirmed** → design pending |
| STATUS | `specs/asset-hub/STATUS.md` |
| Context / Demo / DI | CTX-01 · DEM dual `#sc-asset-hub` · no Excel |
| controlHint / UNCLEAR | §5 · none |
| Screens / Pattern / `devSlash` | Hub `#sc-asset-hub` · `/agent-dev-ios` + `/agent-dev-android` |
| Grid AC / Report AC | **N/A** — không list/report web |
| peerStdUrl / reviewUrl | **cấm** `mfeStdUrl` · Design mở dual `file://…/mobile-p1/ui/prototype/{ios,android}/index.html#sc-asset-hub` + pack stub `specs/asset-hub/ui/prototype/` |
| ux-analy | `/mobile-ui-ux-analy` → `ui/ux-analy.md` §1–§9 **REQUIRED** trước `design_confirm` |
| Kit | reuse map · `kit_missing_confirm` **N/A** · verify dual `LinmHubTile` / `LinmWalletCard` / `LinmListRow` |
| BFF | `asset-hub-bff-endpoints.md` · hub read summary only |
| Open questions | GAP-F-AHUB-01/02/03 đã chốt §7 — Design **không** vẽ org API invent · **không** hardcode «36» khi API trả khác |
| Next AskQuestion | autoApprove=ON — `design_confirm` khi Design xong **cả hai** mock + ux-analy |
| Next slash | `/agent-design-mobile` |
| Chain this turn | **không** (roleOnly=po) |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** yarn start:std / mfeStdUrl |

Design: HIG + Material · copy VN đúng HTML · **cấm** skin Ministry · packet `design-demo-ssot.md`.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po-mobile |
| skillVersion | 2026.08.19.15 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.19.20 |
| rulesVersion | 2026.08.19.23 |
| generatedAt | 2026-08-19T09:15:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:c4be71e3e31309204f5a43ff4fd1aed611bcc7ab643bcdb054e0170334628bf2 |
| bffContentHash | sha256:6c32dc678168a7923cbd7c06a412ac5c3628d112a6d44ea22c4086128f9bf2a0 |

---
<!-- Version meta: skillId=agent-po-mobile skillVersion=2026.08.19.15 schemaVersion=1 workflowVersion=2026.08.19.20 rulesVersion=2026.08.19.23 versionGate=rechecked -->
