# SA — Solution — asset-hub (mobile hub)

| Field | Value |
|-------|-------|
| feature | `asset-hub` |
| title | [Mobile] Tài sản |
| this role | `sa` · `/agent-sa-mobile` |
| status | `confirmed` |
| solution_confirm | **approve** (`autoApprove=ON` · `task_d250d60c`) |
| changeScope | `new_page` |
| packKind | **`hub`** (PO + Design confirm) |
| stack | `native_dual` |
| Feature Kind | **hub** push `#sc-asset-hub` · **cấm** Kind A–G web / Lin* list / web catalog `asset` |
| domain | **Integration** (asset-types · road-routes) × **AiVision** (asset-candidates) · **không** domain Asset CRUD trên hub · **không** `AssetHub` controller |
| BackendRoot | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` |
| prior · design | **confirmed** · `ui/design.md` · `ui/ux-analy.md` · dual `#sc-asset-hub` · `task_c98a6c21` |
| prior · po | **confirmed** · `po/requirement.md` · `task_0aaf7eeb` |
| prior · data_analy | **confirmed** · `_data-analy/asset-hub-*.md` · contentHash `sha256:c4be71e3e31309204f5a43ff4fd1aed611bcc7ab643bcdb054e0170334628bf2` · bffContentHash `sha256:6c32dc678168a7923cbd7c06a412ac5c3628d112a6d44ea22c4086128f9bf2a0` |
| autoApprove | **ON** |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** `yarn start:std` / `mfeStdUrl` |
| versionGate | `rechecked` |
| taskId | `task_d250d60c` |
| confirmedBy | agent autoApprove · `task_d250d60c` |
| updatedAt | `2026-08-19T09:22:02.000Z` |
| thisAction | **Hub Tài sản** only · sibling route = backlog `pending_confirm` · entry từ `home` tile + wallet |

**Cấm:** invent `api/v1/asset-hub` / hub wallet / org-unit · `AssetHubController` · fork DTO · app `:5001` / `:5101` · gộp sibling screens (`GAP-MOB-ACT-01/02`) · enqueue submit trên hub (`GAP-MOB-ACT-07`) · parent JSON · ERP.* · `mfeStdUrl` / `yarn start:std` · `localhost` trong store listing (`GAP-SA-STORE-01`) · claim iPad family `1` · hard delete TS · WebView HTML.

Standards: api-endpoint · bff-api-structure · company-field · no-parent-json-field · ssot-no-duplicate · sa-implement-gates · ios networking · android api-client · offline-sync (hub = **no queue**).

---

## Architecture (repo SSOT)

| Layer | Choice |
|-------|--------|
| BackendRoot | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` |
| Domain | Integration catalog + AiVision candidates · **không** RMMS `asset-hub` / wallet API |
| API host | `AssetTypesController` · `RoadRoutesController` · `AiVisionAssetCandidatesController` — **DONE** live |
| BFF mobile | `Linm.RMMS.Mobile.Bff` · `MobileApiProxyController` catch-all · `docs/bff-route-map.md` `integration/*` · `ai-vision/*` |
| App | iOS `ApiClient` · Android Retrofit · base `{BffBase}/mobile-bff/api/v1` |
| Persist | **không** bảng mới · **không** `/database-migration` · **không** `/new-endpoint` |
| Out of pack | mọi sibling màn (`asset-types` · `asset-list` · `asset-collect` · `asset-adjust` · `asset-ai` · `gis-map` · `det-hitl` · …) · confirm/dismiss AI · CRUD road-assets |

### Route decision

| | Choice |
|--|--------|
| Slug | `asset-hub` → **hub** · 1 màn `#sc-asset-hub` |
| App prefix | `mobile-bff/api/v1` |
| Resource proxy | `integration/*` → `api/v1/integration/*` · `ai-vision/*` → `api/v1/ai-vision/*` |
| App paths (hub) | `GET integration/asset-types` · optional `GET integration/road-routes/search` · `GET ai-vision/asset-candidates?status=Draft` |
| Step 4b | **N/A** — không endpoint mới · không BE align delta · **cấm** `AssetHubController` |
| Rationale | Live Integration + AiVision đủ wallet summary + AI pending — **cấm** invent hub aggregate |

---

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| Asset types | `AssetTypesController` `api/v1/integration/asset-types` | **cấm** clone / invent count endpoint |
| Road routes | `RoadRoutesController` `…/road-routes/search` | optional wallet title · **cấm** invent org API |
| AI candidates | `AiVisionAssetCandidatesController` `…/asset-candidates` | filter `status=Draft` · **cấm** confirm trên hub |
| HTTP app | `ApiClient` iOS · `ApiService` Android | **cấm** URLSession/OkHttp trong View · **cấm** VM→ApiClient trực tiếp (qua Repository/UseCase) |
| Token | Keychain / EncryptedSharedPreferences | Bearer + `X-Company-Id` + `X-Timezone` interceptor |
| Kit | `LinmTopBar` · `LinmWalletCard` · `LinmHubTile` · `LinmSectionLabel` · `LinmListRow` · `LinmPrimaryButton` · `LinmToast` | Design `kit_missing_confirm` **N/A** · **cấm** raw `LazyVGrid` / `LazyVerticalGrid` |
| Persist | no-parent-json-field | hub **không** ghi inventory JSON |

---

## Implement gates (confirm)

| Gate | Decision | Endpoints / surfaces | Skill | Note |
|------|----------|----------------------|-------|------|
| TZ | **tz_na** | GET list/search — **không** DATE filter UI · candidate `fromDate`/`toDate` **không** gọi P1 | `/review-timezone-implement` | header `X-Timezone` giữ interceptor chung |
| XCO | **xco_na** | **không** GET/{id} View catalog trên hub | `/implement-view-cross-company` | list/search tenant filter server · app **cấm** query company khác |
| SHARE | **n/a** | **không** bảng mới pack này | `/implement-shared-table` | catalog/candidates schema **DONE** · hub chỉ đọc |
| Offline | **no queue** · hub **vẫn mở** | GET fail → demo wallet · ẩn AI section | offline-sync | **cấm** block hub · **cấm** enqueue «asset-hub» |
| GPS | **n/a** | — | — | sibling `gis-map` · `asset-collect` · nearby optional **không** DoD |
| Camera | **n/a** | — | — | sibling `asset-ai` |
| Push | **n/a** | — | — | — |
| Store | **N/A** signup | no account create/delete trên hub | GAP-SA-STORE-01 | **cấm** `localhost` / LAN IP trong listing · family `1` **cấm** claim iPad |

AskQuestion (autoApprove=ON · không chờ board): `sa_tz_gate=tz_na` · `sa_xco_gate=xco_na` · `sa_shared_table=share_na` · `solution_confirm=approve` · `2026-08-19T09:22:02.000Z`.

---

## Persist gate (no-parent-json-field)

| | |
|--|--|
| Parent JSON string inventory | **none** |
| Child tables this pack | **n/a** |
| API shape | Integration scalars · AiVision candidate scalars |
| Migration | **không** `Schema_*` · **không** `/database-migration` |
| T-BE-API / T-BE-MIG | **n/a** |

---

## Live vs delta (audit 2026-08-19)

| Surface | Live | SA chốt P1 |
|---------|------|------------|
| `GET …/integration/asset-types` | `AssetTypesController` paged `TotalCount` | **Giữ** · wallet subtitle count · `page=1&pageSize=1` đủ đọc `totalCount` |
| `GET …/integration/road-routes/search` | `RoadRoutesController.Search` | **Optional** wallet title · item đầu `code`/`name` · fail/empty → demo **QL.1 · Khu IV** (`GAP-F-AHUB-01`) |
| `GET …/ai-vision/asset-candidates` | `AiVisionAssetCandidatesController` | **Giữ** · `status=Draft&page=1&pageSize=10` · empty → **ẩn** section · ≥1 → row đầu |
| `GET …/ai-vision/asset-candidates/nearby` | live Haversine | **Optional** · **không** block DoD · **không** GPS request trên hub |
| `POST …/confirm` / dismiss | live HITL | **Không gọi** turn hub · toast **Xác nhận AI** (`det-hitl` pending) |
| `AssetHubController` / `api/v1/asset-hub` | **không** | **Cấm** tạo |
| Native `#sc-asset-hub` | **MISSING** (home toast **Tài sản**) | **DELTA UI** iOS + Android hub kit · wire `home` tile/wallet → push · **không** DELTA API |
| Sibling CRUD / map / detect | live domain | **Không gọi** trên slug `asset-hub` |

---

## Form data analysis (REQUIRED)

| Screen / FormMode | Fields (UI) | Source type | Entity |
|-------------------|-------------|-------------|--------|
| `#sc-asset-hub` hub | nav · wallet · hub-grid ×3 · list row · AI pending | query Integration + AiVision + static chrome | **không** RMMS form entity |

### Field map (ui → dto → store)

| uiField | Label VN | dtoField | Wire | Notes |
|---------|----------|----------|------|-------|
| navBack | Trang Chủ | — | local | pop `home` |
| walletK | HỒ SƠ TÀI SẢN | — | static | eyebrow |
| walletT | QL.1 · Khu IV | `code` · `name` | optional GET `integration/road-routes/search` | first item: cả hai → `{code} · {name}` · chỉ một → giá trị đó · empty/fail → demo · **cấm** invent org |
| walletM | N loại KCHT… | `totalCount` | GET `integration/asset-types` | subtitle `{N} loại KCHT · thông số + checklist sự cố` · fail → «32 loại…» · tile label giữ «32 loại tài sản» marketing |
| walletPatrol | Cột Km… đang tuần | — | demo iOS | **không** API · Android optional omit |
| tile* / rowMap | nhãn control | — | toast | xem § navigation · **cấm** push sibling |
| secAI | Chờ xác nhận AI | — | — | ẩn khi 0 Draft |
| aiTitle | Ứng viên … | `code` · `assetClass` | GET candidates | `Ứng viên {code} · {assetClass}` |
| aiSub | 91% · … | `score` · `routeLabel` | same | score 0–1 → `%` round · format `{pct}% · {routeLabel}` (Android rút gọn OK) |
| aiConfirm | Xác nhận | — | toast | **Xác nhận AI** · **cấm** POST confirm |

**Cấm** invent DTO hub aggregate / org wallet.

---

## API catalog

Base app: `{BffBase}/mobile-bff/api/v1`. Path **không** lặp prefix.  
Permission: Bearer user JWT (proxy forward).  
Tenant: `X-Company-Id` từ session.  
Errors: fail → demo/ẩn section + optional `LinmToast` · **cấm** native alert · **cấm** full-screen block.

### API-01: GET integration/asset-types

| | |
|--|--|
| Purpose | Wallet subtitle — số loại catalog |
| Permission | Bearer · proxy |
| BFF | `MobileApiProxyController` → `api/v1/integration/asset-types` |
| Downstream | `AssetTypesController.GetList` |
| Query P1 | `page=1` · `pageSize=1` (đọc `data.totalCount`) |
| gates.tz | n/a |
| gates.xco | n/a |
| gates.shared | n/a |

**Response** `ApiResponse<AssetTypePagedResult>` — bind `data.totalCount` (int).

### API-02: GET integration/road-routes/search (optional)

| | |
|--|--|
| Purpose | Wallet title tuyến — optional live |
| Permission | Bearer · proxy |
| BFF | proxy → `api/v1/integration/road-routes/search` |
| Downstream | `RoadRoutesController.Search` |
| Query P1 | `page=1` · `pageSize=1` (hoặc 5 lấy item đầu) |
| gates | n/a |

**Response** `ApiResponse<IReadOnlyList<RoadRouteSearchItemDto>>` — first `code`/`name` → walletT · empty/fail → demo.

### API-03: GET ai-vision/asset-candidates

| | |
|--|--|
| Purpose | Section «Chờ xác nhận AI» — Draft pending |
| Permission | Bearer · proxy |
| BFF | proxy → `api/v1/ai-vision/asset-candidates` |
| Downstream | `AiVisionAssetCandidatesController.GetList` |
| Query P1 | `status=Draft` · `page=1` · `pageSize=10` |
| gates.tz | n/a (không date filter UI) |
| gates.xco | n/a |

**Response** `ApiResponse<AssetCandidatePagedResult>` — `data.items` empty → ẩn section · else row 0 bind `code` · `assetClass` · `score` · `routeLabel`.

**Cấm trên hub:** POST/PUT/DELETE candidates · confirm · dismiss · `asset/road-assets*` · `gis/*` · `ai-vision/detect-assets`.

---

## Navigation / action (this pack)

| Control | Behavior P1 | Owner slug |
|---------|-------------|------------|
| Back «Trang Chủ» | pop `home` | `reuse=home` |
| Wallet tap | **no-op** (display only) | — |
| 32 loại tài sản | `LinmToast` **32 loại tài sản** | `asset-types` pending |
| Xem trên bản đồ | toast **Xem trên bản đồ** | `gis-map` pending |
| Bản đồ tài sản (row) | toast **Bản đồ tài sản** | **cùng** `gis-map` (1 route stub) |
| Thủ công | toast **Thủ công** | `asset-collect` pending |
| Camera AI | toast **Camera AI** | `asset-ai` pending |
| Danh sách | toast **Danh sách** | `asset-list` pending |
| Cập nhật / bớt | toast **Cập nhật / bớt** | `asset-adjust` pending |
| Xác nhận (AI) | toast **Xác nhận AI** | `det-hitl` pending |

**Entry (parent `home` — cùng pack ship):** tile **Tài sản** + wallet → push `#sc-asset-hub` (thay toast hiện tại) · **cấm** reimplement `HomeView` ngoài wire nav.

**Cấm** nav stub giả màn sibling · **cấm** start `pending_confirm` (`GAP-MOB-ACT-06`) · **cấm** `UIAlert` / `AlertDialog`.

---

## GAP chốt (SA)

| ID | Decision |
|----|----------|
| GAP-F-AHUB-01 | Optional `road-routes/search` · fail → demo **QL.1 · Khu IV** · **cấm** invent org API · **cấm** block hub |
| GAP-F-AHUB-02 | Subtitle = live `totalCount` · tile «32 loại tài sản» marketing · fail → «32 loại KCHT…» · **cấm** hardcode «36» khi API khác |
| GAP-F-AHUB-03 | GET Draft on appear · empty ẩn section · ≥1 row đầu + toast Xác nhận |
| GAP-MOB-ACT-01/02 | **none** — 1 hub · không child form |
| GAP-MOB-ACT-05 | Kit reuse map · **cấm** raw grid |
| GAP-MOB-ACT-06 | Sibling giữ `pending_confirm` |
| GAP-MOB-ACT-07 | **không** enqueue submit trên hub |
| GAP-MOB-ALIGN-01 | Cùng `gis-map` trên tile + row = **một** slug |
| GAP-SA-STORE-01 | **cấm** localhost/LAN trong listing · family `1` **cấm** iPad claim |
| GAP-MOB-BFF-01 | **không** hàng mới — Integration + AiVision live đủ |
| Step 4b / T-BE-* | **N/A** |

---

## Client architecture (TL/Dev)

| Layer | iOS | Android |
|-------|-----|---------|
| Feature | `Presentation/Features/AssetHub/*` | `presentation/feature/assetHub/*` |
| Use cases | `FetchAssetTypesCount` · optional `SearchRoadRoutes` · `FetchDraftAssetCandidates` | same |
| Repository | Integration + AiVision thin repos (DTO map) | same |
| State | wallet title/subtitle/patrol · aiVisible · aiRow · toast | same |
| DI | `AppContainer` wire AssetHub VM | Hilt `AssetHubViewModel` |
| Parent | `HomeViewModel` tile/wallet → navigate AssetHub (thay toast) | same |
| Offline | appear: parallel GET · fail → demo / ẩn AI · toast không block | same |

**Cấm** WebView HTML · watermark Gói · hardcode production wallet khi API success.

---

## Handoff → TL

| Field | Value |
|-------|-------|
| feature / packKind | `asset-hub` / **`hub`** |
| solution_confirm | **approve** |
| BFF | `GET integration/asset-types` · optional `GET integration/road-routes/search` · `GET ai-vision/asset-candidates?status=Draft` · Step 4b **N/A** |
| Tasks đề xuất | `T-IOS-ASSET-HUB` · `T-AND-ASSET-HUB` · `T-HOME-WIRE` (nav entry) · `T-KIT` **n/a** · `T-BE` **n/a** |
| Kit | reuse map dual — **không** `implement_kit` |
| Nav | back → home · sibling → toast nhãn · wallet display-only |
| Verify (Dev) | iOS `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** · Android `assembleDebug` · BFF `dotnet build` |
| Next slash | `/agent-tl-mobile` |
| Chain this turn | **không** (roleOnly=`sa`) |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** mfeStdUrl |

---

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-sa-mobile |
| skillVersion | 2026.08.19.21 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.19.21 |
| rulesVersion | 2026.08.19.24 |
| generatedAt | 2026-08-19T09:22:02.000Z |
| versionGate | rechecked |
| contentHash | sha256:c4be71e3e31309204f5a43ff4fd1aed611bcc7ab643bcdb054e0170334628bf2 |
| bffContentHash | sha256:6c32dc678168a7923cbd7c06a412ac5c3628d112a6d44ea22c4086128f9bf2a0 |

---
<!-- Version meta: skillId=agent-sa-mobile skillVersion=2026.08.19.21 schemaVersion=1 workflowVersion=2026.08.19.21 rulesVersion=2026.08.19.24 versionGate=rechecked -->
