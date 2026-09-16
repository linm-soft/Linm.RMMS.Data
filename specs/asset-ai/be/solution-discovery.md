# SA — Solution — asset-ai (mobile · Camera AI)

| Field | Value |
|-------|-------|
| feature | `asset-ai` |
| title | [Mobile] [Tài sản] -> Camera AI |
| this role | `sa` · `/agent-sa-mobile` |
| status | `confirmed` |
| solution_confirm | **approve** (`autoApprove=ON` · `task_e939f217`) |
| changeScope | `new_page` |
| packKind | **`sheet`** (PO + Design confirm · đóng GAP-MOB-ASSET-AI-PACK-01 · **cấm** bottom-sheet) |
| stack | `native_dual` |
| Feature Kind | **sheet form detect** push `#sc-asset-ai` `DES-MOB-ASSET-AI` · **cấm** Kind A–G web / Lin* grid / Report / `mfeStdUrl` |
| domain | **AiVision** · asset-candidates peer `ai-asset-detect` · `AiVisionDetectAssetsController` · `AiVisionUploadsController` · optional Patrol sessions / RoadRoutes · **cấm** invent `api/v1/asset-ai` / `AssetAiController` / defect `ai-vision` / Finance `api/v1/assets` |
| BackendRoot | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` |
| prior · design | **confirmed** · `ui/design.md` · `ui/ux-analy.md` · `ui/html-to-native-map.md` · dual `#sc-asset-ai` · contentHash via `handoff/design-compact.md` · skillVersion `2026.08.25.01` |
| prior · po | **confirmed** · `po/requirement.md` · `handoff/po-compact.md` · hash `asset-ai-po-req-20260901` |
| prior · data_analy | **confirmed** · `_data-analy/asset-ai-control-hint.md` · `asset-ai-bff-endpoints.md` · `asset-ai-action-tree.md` · `asset-ai-real-data.md` · bff hash `asset-ai-bff-20260901` · control-hint `asset-ai-control-hint-20260901` · real-data `asset-ai-real-data-20260901` |
| autoApprove | **ON** |
| e2eQa | ON — queued QA · `yarn e2e-qa-mobile` · **cấm** role SA chạy e2e / `yarn start:std` / `mfeStdUrl` |
| versionGate | `rechecked` |
| requestSource | run packet `task_e939f217` · `/agent-qldb-workflow-mobile` · roleOnly=`sa` · `/agent-sa-mobile` |
| taskId | `task_e939f217` |
| confirmedBy | agent autoApprove · `task_e939f217` |
| updatedAt | `2026-09-01T17:15:00.000Z` |
| thisAction | **Camera AI** `#sc-asset-ai` only · GPS chốt * · capture · uploads → ImageUrl · POST detect-assets · bind AssetClass/Score% · toast Code · enqueue `det-hitl` + Id · **cấm** Confirm/Dismiss / auto sổ / gộp collect/cam-patrol |

**Cấm:** invent `api/v1/asset-ai` / `AssetAiController` · fork `DetectAssetsRequest` / `AssetCandidateDto` mobile-only · app `:5101` · DbContext trên Mobile.Bff · parent JSON · ERP.* · `mfeStdUrl` / `yarn start:std` · `localhost` / LAN IP store listing (`GAP-SA-STORE-01`) · claim iPad family `1` · Confirm/Dismiss trên slug (`GAP-MOB-ACT-02`) · gộp sibling (`GAP-MOB-ACT-01`) · enqueue capture/detect/GPS (`GAP-MOB-ACT-07`) · fake GPS / `mock://` ImageUrl · fake toast 200 · re-scan demo · Write MFE/native ở role SA · Step 4b / migration.

Standards: api-endpoint · bff-api-structure · company-field · no-parent-json-field · ssot-no-duplicate · sa-implement-gates · ios networking · android api-client · offline-sync · PrivacyInfo / Play Data safety.

---

## Architecture (repo SSOT)

| Layer | Choice |
|-------|--------|
| BackendRoot | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm=rmms` |
| Domain | AiVision · detect-assets + uploads + asset-candidates (HITL sibling) · Integration road-routes · Patrol sessions |
| API downstream | `POST api/v1/ai-vision/detect-assets` · `POST/PUT api/v1/ai-vision/uploads/*` · optional `GET api/v1/patrol/sessions` · `GET api/v1/integration/road-routes/search` · optional `GET api/v1/ai-vision/asset-candidates/nearby` |
| BFF mobile | `Linm.RMMS.Mobile.Bff` · `MobileApiProxyController` catch-all → `ApiBase` · path `ai-vision/*` · `integration/*` · `patrol/*` |
| App | iOS `ApiClient` · Android Retrofit/`ApiService` · base `{BffBase}/mobile-bff/api/v1` |
| Persist | **không** bảng mới · detect service **auto Create Draft** candidates · **không** `/database-migration` · **không** `/new-endpoint` |
| Out of pack | Confirm/Dismiss · list Draft UI · defect `POST ai-vision/detect` · manual `POST asset/road-assets` · batch detect · map embed · web-bff |

### Route decision

| | Choice |
|--|--------|
| Slug | `asset-ai` → **sheet** form detect · 1 màn `#sc-asset-ai` |
| App prefix | `mobile-bff/api/v1` |
| App path P1 | `POST ai-vision/uploads/init` · `PUT ai-vision/uploads/{id}/object` · `POST ai-vision/detect-assets` · optional `GET patrol/sessions` · `GET integration/road-routes/search` · optional nearby |
| GPS / camera | device only · **không** API |
| Media upload | **P1 required** · uploads → `ImageUrl` · **cấm** `mock://` |
| Step 4b | **N/A** — detect/uploads **DONE** · **cấm** `/new-endpoint` / migration role này |
| Rationale | Live AiVision detect-assets + uploads đủ form · BFF proxy passthrough · **cấm** invent `asset-ai` path |

---

## BFF / API contract (từ analy — **cấm** invent)

Nguồn: `_data-analy/asset-ai-bff-endpoints.md` · `asset-ai-real-data.md` §B · verify `AiVisionDetectAssetsController` + `DetectAssetsRequest` + `AssetCandidateDto` · `AiVisionUploadsController`.

| Action / zone | Method | App `{BffPrefix}` path | Downstream | P1 |
|---------------|--------|------------------------|------------|-----|
| Prefill tuyến (optional) | GET | `patrol/sessions` | `PatrolSessionsController` | optional · rowPos |
| Resolve tuyến code | GET | `integration/road-routes/search` | `RoadRoutesController` | optional · rowPos · require RouteId |
| Upload frame init | POST | `ai-vision/uploads/init` | `AiVisionUploadsController.Init` | **yes** · ImageUrl |
| Upload object | PUT | `ai-vision/uploads/{id}/object` | uploads Object | **yes** · MEDIA-01 |
| Detect → Draft | POST | `ai-vision/detect-assets` | `AiVisionDetectAssetsController.Detect` | **yes** · btnSend |
| Nearby warn (optional) | GET | `ai-vision/asset-candidates/nearby` | candidates Nearby | optional · soft |
| GPS chốt | — | — | Device CL / Fused | **yes** · Lat/Lng * |
| Camera capture | — | — | Device camera | **yes** · PhotoRow |
| Nav HITL | — | — | local nav | `go('det-hitl')` + candidate Id |
| Nav back / Hủy | — | — | local | `go('asset-hub')` |
| Toast ok / err | — | — | local UI | Code / message |

### Detect body P1 — `DetectAssetsRequest`

| Wire | Required | UI / nguồn |
|------|----------|------------|
| `ImageUrl` | **yes** | sau uploads · **cấm** `mock://` |
| `Lat` · `Lng` | **yes** | GPS chốt · BE reject cả 0 |
| `RouteId` | **yes** | sessions / road-routes |
| `RouteLabel` | no | display rowPos |
| `PatrolTripId` | no | session Id |
| `Engine` | no | default P1 |
| `HasImage` · `ImageFileName` | no | upload meta |

### Response bind — `AssetCandidateDto[]`

| Field | UI |
|-------|-----|
| `AssetClass` | rowClass «Loại đề xuất» |
| `Score` | rowScore % · SCORE-01 P1 show |
| `RouteLabel` (+ Km) | rowPos |
| `Code` · `Id` | toast · handoff `det-hitl` |
| `Lat` · `Lng` | verify vs device |
| `NearbyRisk` | optional warn · không block P1 |

Detect service **auto Create** Draft — **không** cần POST `asset-candidates` riêng trên CTA P1.

**Cấm** app fork DTO khác BFF table. **Cấm** invent path `asset-ai`.

### OUT slug `asset-ai` P1 (sibling / web)

| Method | Path | Owner |
|--------|------|-------|
| GET | `ai-vision/asset-candidates` | hub pending / `det-hitl` |
| GET | `ai-vision/asset-candidates/{id}` | `det-hitl` |
| POST | `…/confirm` · `…/dismiss` | **owner `det-hitl`** |
| POST | `ai-vision/detect` | defect · `cam-patrol` / `ai-vision` |
| POST | `asset/road-assets` | `asset-collect` |
| POST | `ai-vision/detect-assets/batch` | **OUT** P1 mobile |
| Web | `web-bff` / domain AiVision BFF | web · mobile = `mobile-bff` |

---

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| HTTP app | `ApiClient` iOS · `ApiService` Android | **cấm** URLSession/OkHttp trong View |
| Token | Keychain / EncryptedSharedPreferences | Bearer + `X-Company-Id` + `X-Timezone` |
| DTO | reuse `DetectAssetsRequest` / `AssetCandidateDto` / upload init · **cấm** fork | map → UI rows |
| Kit | `LinmTopBar` · PhotoRow · CameraButton · `LinmListRow` · Primary/Secondary · Toast · `DES-MOB-GPS-DENY` · hub tile | Design dual · **cấm** invent kit · **cấm** raw system alert |
| Persist | no-parent-json-field | scalar Detect body · **không** LinesJson |
| Tab | shell tab `home` = entry · surface tabs none on sheet | **cấm** invent tab (`GAP-TAB-01`) |

---

## Implement gates (confirm)

| Gate | Decision | Endpoints / surfaces | Skill | Note |
|------|----------|----------------------|-------|------|
| TZ | **tz_na** | **không** DATE filter form · display toast only | `/review-timezone-implement` | header `X-Timezone` interceptor chung |
| XCO | **xco_na** | detect current-company · **không** View catalog GET/{id} cross-co trên slug | `/implement-view-cross-company` | confirm/detail **OUT** → det-hitl |
| SHARE | **n/a** | ghi existing AiVision candidates · **không** bảng mới | `/implement-shared-table` | migration **không** |
| Offline | **POST/upload fail → toast lỗi** · form **vẫn mở** · **cấm** fake 200 / invent Code | queue queue detect **P2** | offline-sync | thiếu mạng → block detect · giữ photo local |
| GPS | **yes** · chốt * | deny / poor → `DES-MOB-GPS-DENY` · CTA **disabled** | — | **cấm** fake · **cấm** gõ tay · BE reject Lat/Lng=0 |
| Camera | **yes** · PhotoRow + uploads | permission deny → toast · **không** crash | — | upload **required** trước detect |
| Push | **n/a** | — | — | — |
| Store | **N/A** signup | PrivacyInfo PreciseLocation + Camera/Photos · Play Data safety tương ứng | GAP-SA-STORE-01 | **cấm** localhost/LAN listing · family `1` **cấm** iPad claim |
| Step 4b | **N/A** | reuse detect + uploads live | — | **cấm** migration / new-endpoint role SA |
| Media | **P1 uploads** | init + object → ImageUrl · block detect nếu fail | MEDIA-01 | **cấm** mock:// · **cấm invent** path khác BFF |

AskQuestion (autoApprove=ON · không chờ board): `be_repo_confirm=rmms` · `sa_tz_gate=tz_na` · `sa_xco_gate=xco_na` · `sa_shared_table=share_na` · `solution_confirm=approve` · `2026-09-01T17:15:00.000Z`.

---

## Persist gate (no-parent-json-field)

| | |
|--|--|
| Parent JSON string inventory | **none** |
| Child tables this pack | **n/a** — existing AiVision asset_candidates (Draft via Detect) |
| API shape | scalar `DetectAssetsRequest` · response `AssetCandidateDto[]` |
| Migration | **không** `Schema_*` · **không** `/database-migration` |
| T-BE-API / T-BE-MIG | **n/a** — detect/uploads live · **không** T-BE-* P1 |

---

## Live vs delta (audit)

| Surface | Live | SA chốt P1 |
|---------|------|------------|
| `POST …/ai-vision/detect-assets` | BE Detect + Create Draft + Mobile.Bff proxy | **Giữ** · app path `ai-vision/detect-assets` |
| `POST/PUT …/ai-vision/uploads/*` | live | **Giữ** · ImageUrl trước detect |
| optional sessions / road-routes/search | live | RouteId / RouteLabel rowPos |
| optional nearby | live | soft warn |
| Native `#sc-asset-ai` | **chưa** (hub tile stub) | **DELTA UI** dual sheet · wire hub → push |
| GPS deny | chrome Design | reuse `DES-MOB-GPS-DENY` · CTA off |
| Confirm/Dismiss | live trên candidates | **OUT** slug · owner `det-hitl` |
| `AssetAiController` / `api/v1/asset-ai` | **không** | **Cấm** tạo |
| Sibling collect / cam-patrol / defect | out of pack | **cấm** gộp |
| Demo rows QL.1 / Cống / 91% | Design dual | fallback UI only · **cấm** fake POST 200 |

### Demo / fallback UI SSOT (preview only — **không** fake Detect)

| Field | Value |
|-------|-------|
| Title | Camera AI |
| Section | Chụp tài sản / thiết bị mới |
| Vị trí | QL.1 · Km 1556+000 |
| Loại đề xuất | Cống |
| Độ tin cậy | 91% |
| CTA | Gửi nhận diện |
| Secondary | Hủy |
| Toast OK pattern | Đã gửi · {Code} |
| Back | Tài sản → hub |

---

## Form data analysis (REQUIRED)

| Screen / FormMode | Fields (UI) | Source type | Entity |
|-------------------|-------------|-------------|--------|
| `#sc-asset-ai` detect sheet | topbar · photo · rowPos · rowClass · rowScore · CTA · cancel · toast · GPS deny | device GPS/camera + uploads + POST detect | `AssetCandidate` Draft write |

### Field map (ui → dto → store) — khớp real-data §B

| uiField | Label VN | controlHint | dtoField / wire | Notes |
|---------|----------|-------------|-----------------|-------|
| navBack | Tài sản | LinmTopBar | — local | iOS text+chevron · Android icon · `go('asset-hub')` |
| addPhoto | (camera) | CameraButton | → uploads → `ImageUrl` | `#i-camera` openCapture |
| photos | (ảnh) | PhotoRow | local → upload | block detect nếu chưa ImageUrl |
| rowPos | Vị trí đã chốt | LinmListRow | `RouteId` · `RouteLabel` · `Lat` · `Lng` | GPS * · deny modal |
| rowClass | Loại đề xuất | LinmListRow | display `AssetClass` | sau detect |
| rowScore | Độ tin cậy | LinmListRow | display `Score` % | SCORE-01 P1 show |
| btnSend | Gửi nhận diện | PrimaryButton | POST full Detect | busy · → det-hitl |
| btnCancel | Hủy | SecondaryButton | — local | hub |
| toastOk | Đã gửi… | Toast | display `Code` | **cấm** invent Code |
| toastErr | (lỗi) | Toast | — | 422/mạng/upload |
| gpsDeny | Định vị bị tắt | Modal | — | CTA off · `?gpsdeny=1` proto |
| tileAI | Camera AI | HubTile | — | owner `asset-hub` · wire push |

**Cấm** invent control / API ngoài bảng.

---

## Navigation / action (this pack)

| Control | Behavior P1 | Owner slug |
|---------|-------------|------------|
| Hub tile Camera AI `#i-camera` | push `#sc-asset-ai` · **cấm** toast-only sau ship | `asset-ai` (this) · entry `reuse=asset-hub` |
| Back / Hủy | pop / `go('asset-hub')` | `asset-hub` reuse |
| Camera / GPS / upload / detect | same-slug | **cấm** enqueue (`GAP-MOB-ACT-07`) |
| Gửi nhận diện | POST detect · toast Code · nav `det-hitl` + Id | same slug submit · HITL enqueue only |
| GPS deny | modal · CTA off | chrome reuse |
| Confirm / Dismiss / collect | **không** CTA trên form | sibling **OUT** |

**Cấm** nav stub giả sibling · **cấm** `UIAlert` / `AlertDialog` / `window.alert`.

---

## GAP chốt (SA)

| ID | Decision |
|----|----------|
| GAP-MOB-ASSET-AI-PACK-01 | **PO+Design closed** · packKind **sheet** · **cấm** bottom-sheet |
| GAP-MOB-ASSET-AI-SCORE-01 | **PO+Design closed** · P1 **show Score %** · không ẩn brand |
| GAP-MOB-ASSET-AI-HITL-01 | **PO closed** · Confirm/Dismiss **OUT** · enqueue `det-hitl` + Id |
| GAP-MOB-ASSET-AI-MEDIA-01 | **SA Signed** · P1 uploads init+object → ImageUrl · block detect nếu fail · **cấm invent** path |
| GAP-MOB-ASSET-AI-GPS-01 | **PO closed** · `DES-MOB-GPS-DENY` · CTA off · **cấm** fake / gõ tay |
| GAP-MOB-ASSET-AI-NAV-01 / DET-01 / CTA-01 | Dev ship push sheet + upload + detect + bind + toast |
| GAP-MOB-ACT-01/02 | **none** gộp · Confirm **OUT** slug |
| GAP-MOB-ACT-05 | Kit reuse · PhotoRow + ListRow |
| GAP-MOB-ACT-06 | Sibling **không** auto start |
| GAP-MOB-ACT-07 | capture/GPS/upload/detect **cùng slug** · **không** enqueue |
| GAP-MOB-BFF-01 | **không** path mới — proxy live |
| GAP-MOB-REAL-01/02 | §B khớp BFF · **cấm** ship hardcode khi BFF live |
| GAP-SA-STORE-01 | **cấm** localhost/LAN listing · family `1` **cấm** iPad · PrivacyInfo location+camera/photos |
| Step 4b / T-BE-* | **N/A** detect/uploads live |

---

## Tasks handoff (TL)

| id | page | role | deps | notes |
|----|------|------|------|-------|
| T-IOS-1 | asset-ai | dev-ios | sa | `#sc-asset-ai` · wire hub · GPS · camera · uploads · detect · Score% · toast · push det-hitl |
| T-AND-1 | asset-ai | dev-android | sa | cùng §B · dual chrome |
| T-QA-1 | asset-ai | qa | dev | e2eQa · GPS deny · offline toast · SCORE · HITL enqueue · **cấm** mfeStdUrl |
| T-BE-* | — | — | — | **n/a** |

---

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-sa-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.29.1 |
| rulesVersion | 2026.08.29.5 |
| generatedAt | 2026-09-01T17:15:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:asset-ai-sa-solution-20260901 |
| taskId | `task_e939f217` |
| solution_confirm | approve |
| confirmedAt | 2026-09-01T17:15:00.000Z |

---
<!-- Version meta: skillId=agent-sa-mobile skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.08.29.1 rulesVersion=2026.08.29.5 versionGate=rechecked -->
