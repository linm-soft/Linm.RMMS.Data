# SA — Solution — asset-collect (mobile · Thu thập thủ công)

| Field | Value |
|-------|-------|
| feature | `asset-collect` |
| title | [Mobile] [Tài sản] -> Thủ công |
| this role | `sa` · `/agent-sa-mobile` |
| status | `confirmed` |
| solution_confirm | **approve** (`autoApprove=ON` · `task_b5598b84`) |
| changeScope | `new_page` |
| packKind | **`screen`** (PO + Design confirm · đóng GAP-MOB-ASSET-COLLECT-PACK-01 · **cấm** bottom-sheet) |
| stack | `native_dual` |
| Feature Kind | **screen form create** push `#sc-asset-collect` `DES-MOB-ASSET-COLLECT` · **cấm** Kind A–G web / Lin* grid / Report / `mfeStdUrl` |
| domain | **Asset** · `RoadAssetsController.Create` + `GetInitData` · Integration `AssetTypesController` · optional Patrol sessions / RoadRoutes · **cấm** invent `api/v1/asset-collect` / `AssetCollectController` / Finance `api/v1/assets` |
| BackendRoot | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` |
| prior · design | **confirmed** · `ui/design.md` · `ui/ux-analy.md` · `ui/html-to-native-map.md` · dual `#sc-asset-collect` · `ui/review/demo-parity.md` · contentHash `sha256:asset-collect-design-20260831` |
| prior · po | **confirmed** · `po/requirement.md` · contentHash `sha256:asset-collect-po-requirement-20260830` |
| prior · data_analy | **confirmed** · `_data-analy/asset-collect-control-hint.md` · `asset-collect-bff-endpoints.md` · `asset-collect-action-tree.md` · `asset-collect-real-data.md` · controlHint `sha256:asset-collect-control-hint-20260830` · real-data `sha256:asset-collect-real-data-20260830` · bff `sha256:asset-collect-bff-20260830` · action-tree `sha256:asset-collect-action-tree-20260830` |
| autoApprove | **ON** |
| e2eQa | ON — queued QA · `yarn e2e-qa-mobile` · **cấm** role SA chạy e2e / `yarn start:std` / `mfeStdUrl` |
| versionGate | `rechecked` |
| requestSource | run packet `task_b5598b84` · `/agent-qldb-workflow-mobile` · roleOnly=`sa` · `/agent-sa-mobile` |
| taskId | `task_b5598b84` |
| confirmedBy | agent autoApprove · `task_b5598b84` |
| updatedAt | `2026-08-30T22:40:00.000Z` |
| thisAction | **Thu thập thủ công** `#sc-asset-collect` only · GET types + init-data · GPS auto-pin · optional sessions/routes · local PhotoRow · POST create · toast Code · **cấm** gộp AI / adjust / list / detail |

**Cấm:** invent `api/v1/asset-collect` / `AssetCollectController` · invent media upload path P1 · fork `CreateRoadAssetRequest` mobile-only · app `:5101` · DbContext trên Mobile.Bff · parent JSON · ERP.* · `mfeStdUrl` / `yarn start:std` · `localhost` / LAN IP trong store listing (`GAP-SA-STORE-01`) · claim iPad family `1` · gộp sibling (`GAP-MOB-ACT-01/02`) · start `pending_confirm` (`GAP-MOB-ACT-06`) · enqueue Create/inputs/photo (`GAP-MOB-ACT-07`) · re-scan demo · Write MFE/native ở role SA · gõ tay lat/lng · `Source=ai` trên slug này · fake toast 200.

Standards: api-endpoint · bff-api-structure · company-field · no-parent-json-field · ssot-no-duplicate · sa-implement-gates · ios networking · android api-client · offline-sync · PrivacyInfo / Play Data safety.

---

## Architecture (repo SSOT)

| Layer | Choice |
|-------|--------|
| BackendRoot | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` |
| Domain | Asset · `RoadAssetsController` · table `rmms_road_assets` · Integration asset-types / road-routes · Patrol sessions (optional) |
| API downstream | `POST/GET api/v1/asset/road-assets` · `GET …/init-data` · `GET api/v1/integration/asset-types` · optional `GET api/v1/patrol/sessions` · `GET api/v1/integration/road-routes/search` |
| BFF mobile | `Linm.RMMS.Mobile.Bff` · `MobileApiProxyController` catch-all → `ApiBase` · path `asset/*` · `integration/*` · `patrol/*` |
| App | iOS `ApiClient` · Android Retrofit/`ApiService` · base `{BffBase}/mobile-bff/api/v1` |
| Persist | **không** bảng mới · **không** `/database-migration` · **không** `/new-endpoint` Create |
| Out of pack | AI create · adjust PUT/DELETE · list/detail · invent media upload · map embed · nearby/bbox · soft delete UI |

### Route decision

| | Choice |
|--|--------|
| Slug | `asset-collect` → **screen** form create · 1 màn `#sc-asset-collect` |
| App prefix | `mobile-bff/api/v1` |
| App path P1 | `GET integration/asset-types` · `GET asset/road-assets/init-data` · `POST asset/road-assets` · optional `GET patrol/sessions` · `GET integration/road-routes/search` |
| GPS / camera | device only · **không** API |
| Media upload | **OUT P1** · GAP-MOB-ASSET-COLLECT-MEDIA-01 · **cấm invent** |
| Step 4b | **N/A** Create — endpoints live · media **không** Signed P1 · **cấm** `/new-endpoint` / migration role này |
| Rationale | Live RoadAssets Create + init-data + asset-types đủ form · BFF proxy passthrough · **cấm** invent `asset-collect` path |

---

## BFF / API contract (từ analy — **cấm** invent)

Nguồn: `_data-analy/asset-collect-bff-endpoints.md` · `asset-collect-real-data.md` §B · verify `RoadAssetsController` + `CreateRoadAssetRequest` + `RoadAssetDto` + `RoadAssetInitDataDto` · `AssetTypesController`.

| Action / zone | Method | App `{BffPrefix}` path | Downstream | P1 |
|---------------|--------|------------------------|------------|-----|
| Catalog loại TS | GET | `integration/asset-types` | `AssetTypesController` list/search | **yes** · typeSelect |
| Init status/source/unit | GET | `asset/road-assets/init-data` | `RoadAssetsController.GetInitData` | **yes** · statusField |
| Prefill tuyến (optional) | GET | `patrol/sessions` | `PatrolSessionsController` | optional · routeKm |
| Resolve tuyến code | GET | `integration/road-routes/search` | `RoadRoutesController` | optional · routeKm |
| Thêm tài sản | POST | `asset/road-assets` | `RoadAssetsController.Create` | **yes** · btnAdd |
| GPS ghim | — | — | Device CL / Fused | **yes** · required UI |
| Camera / PhotoRow | — | — | Device camera | **yes** local · upload **OUT** |
| Media upload TS | — | — | **MISSING** | **OUT** · MEDIA-01 |
| Nav back hub | — | — | local | `go('asset-hub')` |
| Toast ok / err | — | — | local UI | Code / message |

### Create body P1 — `CreateRoadAssetRequest`

| Wire | Required | UI / nguồn |
|------|----------|------------|
| `Name` | yes | nameField |
| `Type` | yes | typeSelect · catalog **code** (`RequireTypeCodeAsync`) |
| `Route` | yes | routeKm parse · Integration code |
| `KmFrom` | yes | routeKm parse · GPS/session snap |
| `KmTo` | no | **OUT** P1 form (optional P2) |
| `Status` | yes | statusField · Value `tot` / Label «Tốt» default |
| `Lat` · `Lng` | no (API) / **yes UI** | gpsPin · deny → block submit |
| `Source` | default | omit OK → service `"manual"` · **cấm** `"ai"` trên slug này |
| `SourceRef` · `Note` · `Qr` · `Quantity` · `UnitCode` · `ValueVnd` · `CodePrefix` | no | **OUT** P1 form |
| photos | — | **không** trong body P1 |

### Response toast — `RoadAssetDto`

| Field | UI |
|-------|-----|
| `Code` | toast «Đã thêm tài sản · {Code}» · server `TS-yyyyMMdd-nnn` |
| `Id` | optional nav detail P2 · **OUT** P1 (stay / back hub OK) |

**Cấm** app fork DTO khác BFF table. **Cấm** invent path `asset-collect`.

### Init-data Statuses (live service)

| Value | Label |
|-------|-------|
| `tot` | Tốt |
| `theo_doi` | Theo dõi |
| `can_bao_tri` | Cần bảo trì |

### OUT slug `asset-collect` P1 (sibling / web)

| Method | Path | Owner |
|--------|------|-------|
| GET | `asset/road-assets` | `asset` list |
| GET | `asset/road-assets/{id}` | `asset-detail` |
| PUT/DELETE | `asset/road-assets/{id}` | `asset-adjust` |
| GET | `asset/road-assets/summary-by-type` | dashboard **OUT** |
| POST | `ai-vision/detect-assets` · candidates | `asset-ai` / HITL **OUT** |
| POST | invent `…/media` | **OUT** · MEDIA-01 |
| Web | `web-bff/api/v1/asset/**` | web · mobile = `mobile-bff` proxy |

---

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| HTTP app | `ApiClient` iOS · `ApiService` Android | **cấm** URLSession/OkHttp trong View · **cấm** VM→ApiClient trực tiếp nếu repo pattern đã có |
| Token | Keychain / EncryptedSharedPreferences | Bearer + `X-Company-Id` + `X-Timezone` interceptor |
| DTO | reuse `CreateRoadAssetRequest` / `RoadAssetDto` / init-data options · **cấm** fork | map → UI form model |
| Kit | `LinmTopBar` · `LinmSelect` · `LinmTextField` · PhotoRow pattern · CameraButton · `LinmPrimaryButton` · `LinmToast` · `DES-MOB-GPS-DENY` · `DES-MOB-LEAVE` · SectionLabel «Ảnh» · `LinmTabBar` shell · hub `LinmHubTile` | Design `kit_missing_confirm` PhotoRow **approve** · **cấm** invent kit lạ · **cấm** raw `UIAlert` / `AlertDialog` |
| Persist | no-parent-json-field | Create scalar body · **không** LinesJson |
| Tab | shell tab `home` = entry · surface `tabs: none` | **cấm** invent tab 6 / segment (`GAP-TAB-01`) |

---

## Implement gates (confirm)

| Gate | Decision | Endpoints / surfaces | Skill | Note |
|------|----------|----------------------|-------|------|
| TZ | **tz_na** | **không** DATE filter form · display toast only | `/review-timezone-implement` | header `X-Timezone` interceptor chung |
| XCO | **xco_na** | Create current-company · **không** View catalog GET/{id} trên slug | `/implement-view-cross-company` | XCO trên GetById **OUT** pack |
| SHARE | **n/a** | ghi existing `rmms_road_assets` · **không** bảng mới | `/implement-shared-table` | migration **không** |
| Offline | **POST fail → toast lỗi** · form **vẫn mở** · optional draft queue **P2** | **cấm** fake 200 / invent Code | offline-sync | GET catalog fail → empty select + disable CTA |
| GPS | **yes** · auto-pin * | deny / poor → `DES-MOB-GPS-DENY` · CTA **disabled** | — | **cấm** fake · **cấm** gõ tay |
| Camera | **yes** · local PhotoRow | permission deny → toast/in-app · **không** crash | — | upload **OUT** P1 |
| Push | **n/a** | — | — | — |
| Store | **N/A** signup | no account create/delete · PrivacyInfo đã khai báo PreciseLocation + Photos/Videos · Play Data safety tương ứng | GAP-SA-STORE-01 | **cấm** `localhost` / LAN IP listing · family `1` **cấm** iPad claim |
| Step 4b | **N/A** Create | reuse POST/GET road-assets + types | — | media **không** Signed P1 · **cấm** migration role SA |
| Media | **DEFER upload** | local only · **không** block Create thiếu ảnh | MEDIA-01 | **cấm invent** path |

AskQuestion (autoApprove=ON · không chờ board): `be_repo_confirm=rmms` · `sa_tz_gate=tz_na` · `sa_xco_gate=xco_na` · `sa_shared_table=share_na` · `solution_confirm=approve` · `2026-08-30T22:40:00.000Z`.

---

## Persist gate (no-parent-json-field)

| | |
|--|--|
| Parent JSON string inventory | **none** |
| Child tables this pack | **n/a** — existing `RoadAssetEntity` / `rmms_road_assets` |
| API shape | scalar `CreateRoadAssetRequest` · response `RoadAssetDto` |
| Migration | **không** `Schema_*` · **không** `/database-migration` |
| T-BE-API / T-BE-MIG | **n/a** Create · media upload **không** T-BE-* P1 |

---

## Live vs delta (audit)

| Surface | Live | SA chốt P1 |
|---------|------|------------|
| `POST …/asset/road-assets` | BE Create + Mobile.Bff proxy | **Giữ** · app path `asset/road-assets` · `Source=manual` |
| `GET …/init-data` | Statuses/Sources/Units live | **Giữ** · bind statusField dual |
| `GET …/integration/asset-types` | catalog live | **Giữ** · SSOT options · **cấm** hardcode demo 4–5 khi API OK |
| optional sessions / road-routes/search | live | optional prefill Route/Km |
| Native `#sc-asset-collect` | **chưa** (hub tile → toast stub) | **DELTA UI** dual form · wire hub → push |
| GPS deny / leave dirty | chrome Design | reuse `DES-MOB-GPS-DENY` · `DES-MOB-LEAVE` |
| Media upload | **MISSING** | local PhotoRow only · **cấm invent** (`GAP-MOB-ASSET-COLLECT-MEDIA-01`) |
| `AssetCollectController` / `api/v1/asset-collect` | **không** | **Cấm** tạo |
| Sibling AI / adjust / list / detail | out of pack | **cấm** gộp / auto start |
| Demo options / QL.1 preview | Design dual | fallback UI only khi catalog/GPS fail · **cấm** fake POST 200 |

### Demo / fallback UI SSOT (preview only — **không** fake Create)

| Field | Value |
|-------|-------|
| Title | Thu thập thủ công |
| Loại (demo preview) | Cột km / Biển báo / Cống / Hộ lan / Cầu |
| Tên | Cột Km 1556 |
| Tuyến · lý trình | QL.1 · Km 1556+000 |
| Định vị | 11.5300, 109.0040 · ±5 m |
| Tình trạng | Tốt (`tot`) |
| CTA | Thêm tài sản |
| Toast OK pattern | Đã thêm tài sản · {Code} |
| Back | Tài sản → hub |

---

## Form data analysis (REQUIRED)

| Screen / FormMode | Fields (UI) | Source type | Entity |
|-------------------|-------------|-------------|--------|
| `#sc-asset-collect` create | topbar · type · name · routeKm · gps · status · photos · CTA · toast · GPS deny · leave | api catalog + device GPS/camera + POST create | `RoadAsset` write |

### Field map (ui → dto → store) — khớp real-data §B

| uiField | Label VN | controlHint | dtoField / wire | Notes |
|---------|----------|-------------|-----------------|-------|
| navBack | Tài sản | BackButton | — local | `go('asset-hub')` · Android icon-only OK |
| title | Thu thập thủ công | TopBar title | — fixed | dual chrome |
| typeSelect | Loại tài sản * | Select | `Type` (code) | GET asset-types |
| nameField | Tên / mô tả * | TextField | `Name` | label 13 / value ≥16 |
| routeKm | Tuyến / lý trình * | TextField readonly | `Route` · `KmFrom` | parse display · GPS/session/routes |
| gpsPin | Định vị ghim tự động * | TextField readonly | `Lat` · `Lng` | required UI · ±m |
| statusField | Tình trạng | Select | `Status` | init-data · default `tot` · **dual** |
| photoLabel | Ảnh | SectionLabel | — | dual Android |
| photos | (slots) | PhotoRow | — | local only · MEDIA GAP |
| addPhoto | (camera) | CameraButton | — | `openCapture('asset')` `#i-camera` |
| btnAdd | Thêm tài sản | PrimaryButton | POST full Create | `Source=manual` · busy |
| toastOk | Đã thêm tài sản · TS-… | Toast | display `Code` | **cấm** invent Code |
| toastErr | (lỗi) | Toast | — | 422/mạng |
| gpsDeny | Định vị bị tắt | Modal | — | CTA off |
| leaveDirty | Bỏ thay đổi? | Modal | — | kit · **cấm** system alert |
| tileCollect | Thủ công | HubTile | — | owner `asset-hub` · wire push |

**Cấm** invent control / API ngoài bảng.

---

## Navigation / action (this pack)

| Control | Behavior P1 | Owner slug |
|---------|-------------|------------|
| Hub tile Thủ công `#i-plus` | push `#sc-asset-collect` · **cấm** toast-only sau ship | `asset-collect` (this) · entry `reuse=asset-hub` |
| Back | pop / `go('asset-hub')` | `asset-hub` reuse |
| Type / Name / Route / GPS / Status / Photo | same-slug inputs | **cấm** enqueue (`GAP-MOB-ACT-07`) |
| Thêm tài sản | POST create · toast Code | same slug submit |
| GPS deny | modal · CTA off | chrome reuse |
| Leave dirty | in-app confirm | chrome reuse |
| AI / adjust / list / detail | **không** CTA trên form | sibling **OUT** |

**Cấm** nav stub giả sibling · **cấm** start `pending_confirm` · **cấm** `UIAlert` / `AlertDialog` / `window.alert`.

---

## GAP chốt (SA)

| ID | Decision |
|----|----------|
| GAP-MOB-ASSET-COLLECT-PACK-01 | **PO+Design closed** · packKind **screen** · **cấm** sheet chrome |
| GAP-MOB-ASSET-COLLECT-STATUS-01 | **Design closed** · dual `LinmSelect` Status · default `tot` |
| GAP-MOB-ASSET-COLLECT-TYPE-01 | **PO closed** · catalog live = SSOT · demo options preview only |
| GAP-MOB-ASSET-COLLECT-MEDIA-01 | **SA Signed** · P1 **local PhotoRow only** · **không** invent upload · **không** block Create thiếu ảnh · upload = **DEFER** (không Step 4b / migration turn này) |
| GAP-MOB-ASSET-COLLECT-ROUTE-01 | **PO closed** · 1 display field · wire parse `Route`+`KmFrom` |
| GAP-MOB-ASSET-COLLECT-GPS-01 | **PO closed** · `DES-MOB-GPS-DENY` · CTA off · **cấm** fake / gõ tay |
| GAP-MOB-ASSET-COLLECT-NAV-01 / SCR-01 / CTA-01 | Dev ship push form + POST + toast Code |
| GAP-MOB-ACT-01/02 | **none** — 1 screen · không gộp AI/adjust/list |
| GAP-MOB-ACT-05 | Kit reuse map · PhotoRow compose OK |
| GAP-MOB-ACT-06 | Sibling **không** auto start |
| GAP-MOB-ACT-07 | Create/inputs/photo **cùng slug** · **không** enqueue |
| GAP-MOB-BFF-01 | **không** hàng Create mới — media field GAP only |
| GAP-MOB-REAL-01/02 | §B khớp BFF · **cấm** ship hardcode khi BFF live |
| GAP-SA-STORE-01 | **cấm** localhost/LAN listing · family `1` **cấm** iPad · PrivacyInfo location+photos đã có |
| Step 4b / T-BE-* | **N/A** Create · media **không** T-BE P1 |

---

## Client architecture (TL/Dev — WHAT, không HOW chi tiết)

| Layer | iOS | Android |
|-------|-----|---------|
| Feature | `Presentation/Features/AssetCollect/*` (hoặc `Asset/Collect/*`) | `presentation/feature/assetcollect/*` |
| Use cases | `FetchAssetTypesUseCase` · `FetchRoadAssetInitDataUseCase` · `CreateRoadAssetUseCase` · optional sessions/routes | same |
| Repo | `AssetCollectRepository` / `RoadAssetRepository` → paths trên bảng BFF | same |
| State | type/name/routeKm/gps/status/photos · loading · busy · toast · gpsDeny · dirty | same |
| GPS | CLLocation / accuracy · deny modal | FusedLocation · same chrome |
| Camera | local capture slot `asset` · PhotoRow | same |
| DI | `AppContainer` wire VM | Hilt ViewModel |
| Shell | Hub tile → push · `LinmTabBar` **giữ** · tab `home` | same |
| Offline | appear GET catalogs · POST fail toast · **cấm** fake 200 | same |
| Demo SSOT | preview fallback fields only khi fail | same |

**Cấm** WebView HTML · watermark Gói · device label · «Có mạng» · hardcode production thay live khi BFF OK · invent media API.

---

## VERIFY GATE (roleOnly=`sa`)

| Check | Result |
|-------|--------|
| be/solution-discovery.md | **PASS** · solution_confirm approve · BFF map analy |
| Design + control-hint + real-data §B | **PASS** · read · **cấm** invent API / control |
| be_repo_confirm | **PASS** · `Linm.RMMS.WebService` · Asset · **cấm ERP.*** |
| Step 4b / migration | **N/A** — reuse Create + init-data + types · media DEFER |
| yarn build / e2e / start:std | **SKIP** (cấm role SA) |
| Write MFE/native | **SKIP** (cấm role SA) |
| STATUS.md sa | **PASS** → confirmed · TL pending |

---

## Handoff → TL

| Field | Value |
|-------|-------|
| phase_from / phase_to | sa **confirmed** → team-lead pending |
| Tasks (gợi ý id) | `T-IOS-ASSET-COLLECT` · `T-AND-ASSET-COLLECT` · `T-BE` **n/a** · `T-BFF` **n/a** (proxy sẵn) |
| Step 4b | **N/A** Create · media **không** Signed P1 |
| BFF SSOT | `_data-analy/asset-collect-bff-endpoints.md` · real-data §B |
| Gaps open for Dev | NAV wire hub · form dual · GPS · local photo · POST + toast · STATUS/TYPE dual closed by Design |
| MEDIA-01 | local only · **cấm** invent upload trong Dev P1 |
| Next slash | `/agent-tl-mobile` |
| Chain this turn | **không** (roleOnly=sa · GAP-PKT-ROLE-01) |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** mfeStdUrl / start:std |
| STATUS | `specs/asset-collect/STATUS.md` |

---

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-sa-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.08.31.2 |
| generatedAt | `2026-08-30T22:40:00.000Z` |
| versionGate | rechecked |
| contentHash | sha256:asset-collect-sa-solution-20260830 |
| priorControlHintHash | sha256:asset-collect-control-hint-20260830 |
| priorRealDataHash | sha256:asset-collect-real-data-20260830 |
| priorBffHash | sha256:asset-collect-bff-20260830 |
| priorPoHash | sha256:asset-collect-po-requirement-20260830 |
| priorDesignHash | sha256:asset-collect-design-20260831 |
| dorGate | PASS |

---
<!-- Version meta: skillId=agent-sa-mobile skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked dorGate=PASS -->
