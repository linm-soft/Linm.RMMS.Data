# Data-analy — controlHint — ai-asset-detect (Kind B catalog + Kind F map · AI)

| Field | Value |
|-------|-------|
| feature | `ai-asset-detect` |
| packKind | `list` · featureClass `ai` (packet packKind `ai`) |
| changeScope | `edit_page` |
| mode | `feature_context` |
| status | `done` |
| taskId | `task_5eafb531` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.05.03` |
| rulesVersion | `2026.09.06.1` |
| versionGate | `ok` (bump SSOT · autopilot regen) |
| contentHash | `sha256:48ebba7d1ea4319eeaa330252a90d875a2a1dca1ff750846b50ff9c18897c20f` |
| analyzedAt | `2026-09-06T16:20:00.000Z` |
| updatedAt | `2026-09-06T16:20:00.000Z` |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** schema/API.  
> **Khác `ai-vision`:** taxonomy **thiết bị TS** → Asset · **cấm** class ổ gà.  
> **Host infer:** `Linm.RMMS.Vision` (CTX `ai-vision-service.md`) · **cấm** YOLO class «mất».

## § Delta Current vs New (`edit_page` · họp 04/09 W4-6 · `task_5eafb531`)

| ID | Current (shipped / prior analy) | New (this run) |
|----|----------------------------------|----------------|
| Scope title | AI phát hiện **TS/thiết bị mới** | + **AI mất tài sản** = GPS có TS kỳ vọng · **frame trống / 0 detect** |
| Miss semantics | Chỉ candidate «mới» từ detect | **GAP-ITS-MISS-01** reconcile Asset nearby vs 0 detect/N phút · **cấm** class YOLO «mất» |
| Host | Adapter stub / AiService wait | Host **`Linm.RMMS.Vision`** |
| Frame upload | `imageUrl` text / stub | **FileService** BFF `web-bff/api/v1/files/*` · persist **file id (guid)** · resign mỗi xem · **cấm** scaffold API mới / invent `nghiem-thu-files` |
| Demo path packet | `…/ai-kd/phat-hien-ts.html` | **MISSING trên disk** → baseline `…/ai-vision/ai-asset-detect.html` (hash dưới) · PO/Design giữ prototype cũ |
| Dedupe radius | Demo 25 m · ITS SSOT 10 m | Giữ; miss-window align ITS peer |
| PO/Design/SA/Dev artifacts | **giữ** | Chỉ analy delta · **không** xóa requirement/design |

## Sources

| Source | Path | sha256 / note |
|--------|------|---------------|
| Context | `docs/context/features/ai-asset-detect.md` | `eee60dbc…8f53de` |
| Peer miss SSOT | `docs/context/features/its-traffic-detect.md` §8 · GAP-ITS-MISS-01 | cite |
| Demo (baseline) | `Linm.RMMS.Demo/src/demo/ai-vision/ai-asset-detect.html` | `799bbc50…7522` |
| Demo packet | `Linm.RMMS.Demo/src/demo/ai-kd/phat-hien-ts.html` | **GAP-DA-DEMO-01** missing |
| Control map | `docs/context/_raw/legacy-govone/demo-maps/ai-asset-detect-control-map.md` | prior |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` · slug → AiVision | cite |
| API | `AiVisionAssetCandidatesController` · `AiVisionDetectAssetsController` | cite |
| Entity | `AiVisionAssetCandidateEntity` · migration `20260812150000_Schema_RmmsAiVisionAssetCandidates` | cite |
| MFE | `Linm.Web.RMMS.AiVision/src/pages/AiAssetDetectListPage/*` | sameMfe=yes |
| Filter bar | `specs/_data-analy/features/ai-asset-detect-filter-bar.md` | this run |

## Kind / zones

| Zone | Pattern | DoD |
|------|---------|-----|
| A | Toolbar | Tạo candidate · Giả lập frame · Nearby · Refresh · Export stub · badge **AI** P1/P2 · **Reconcile mất** (new — draft Incident / miss queue) |
| B | Filter | Search + Dropdown/SearchInput + Date · slots per filter-bar |
| C | `LinCatalogDataGrid` | cột default ON · row Xem/Sửa/Copy/Confirm/Dismiss · row **Mất?** (gap UI) |
| D | Footer | `LinCatalogListPagination` |
| Form | Kind D slideout | C/E/V/Copy · footer actions · leave-confirm dirty |
| Map | Kind F | pin «AI new» vs TS đã có vs **miss reconcile** · Fit · pin→View |
| Upload | FileService | JPEG frame · fileId guid · resign GET |

## Control hint — list filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchInput` | text | code · loại · tuyến · trip · section · assetCode · note |
| routeId | Tuyến | `SearchInput` | **road-route** | **cấm** free-text |
| assetClass | Loại TS | `Dropdown` | LOOKUP_STATIC | init-data · **không** class «mất» |
| status | Trạng thái | `Dropdown` | LOOKUP_STATIC | Draft / Confirmed / Dismissed |
| fromDate / toDate | Từ/Đến ngày | `Date` | — | `detectedAt` |
| missOnly | Chỉ mất TS | `Checkbox` | — | **NEW** filter reconcile · UNCLEAR layout Design |

## Control hint — form fields

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| id / code | Id / Mã | `Text` | auto | Guid · `AC-*` readonly |
| assetClass | Loại TS | `Dropdown` | * | 8 class AI · **cấm** «mất» |
| assetTypeCode | Loại Asset (Confirm) | `SearchInput` | * on confirm | `catalogKind=asset-type` |
| score | Confidence | `Text` (number) | * | 0–1 |
| status | Trạng thái | `Dropdown` | * | |
| engine | Engine | `Dropdown` | * | P1 / P2 |
| lat / lng | Tọa độ | `Text` (number) | * | Point pair |
| routeId | Tuyến | `SearchInput` | * | road-route |
| routeLabel | Nhãn / lý trình | `Text` | | |
| sectionId | Đoạn | `Text` | | |
| patrolTripId | Chuyến tuần đường | `Text` | | |
| bboxJson | BBox | `Text` | | empty khi miss=0 detect |
| modelVersion | Model | `Text` | | readonly |
| nearbyRisk / nearbyOf | Nearby | `Checkbox` / `Text` | | radius demo 25 m · prod 10 m |
| note | Ghi chú | `Text` | | multiline |
| assetCode / assetId | Asset sau Confirm | `Text` | | readonly |
| imageFileId | Frame file | `FileUpload` | | **FileService id** · **cấm** persist full presigned URL |
| imageUrl | Preview resign | derived | | resign mỗi xem từ fileId |
| detectedAt | Phát hiện | `Date` | | |
| expectedAssetId | TS kỳ vọng (miss) | `SearchInput` | miss flow | **NEW** · Asset nearby GPS |
| missWindowMin | Cửa sổ N phút | `Number` | miss flow | **NEW** · GAP-ITS-MISS-01 |
| incidentDraftId | Incident nháp | `Text` | | **NEW** sau gim mất · `POST /api/v1/incident/incidents` |

## AI taxonomy ↔ asset-type (Confirm)

Closed set init-data (8). **Không** thêm mã «mất» / `MISSING`.

| assetClass (AI) | Proposed `asset-type.code` | controlHint |
|-----------------|----------------------------|-------------|
| Biển báo | `GANTRY_SIGN` | SearchInput |
| Hộ lan | `GUARDRAIL` | SearchInput |
| Cột Km | `KM_POST` | SearchInput |
| Cột H | `DELINEATOR` | SearchInput |
| Đèn chiếu sáng | `LIGHTING` | SearchInput |
| Cống | `CULVERT_X` / `CULVERT_L` | SearchInput |
| Taluy | `SLOPE_PROTECT` | SearchInput |
| Camera ITS | `ITS_CAMERA` / gap | SearchInput · seed có `ITS_CAMERA` |

**Cấm** trộn 10 class mặt đường (`ai-vision`) — GAP-F-AAD-01.

## Upload HARD (họp 1–5)

| Rule | Value |
|------|-------|
| Host BFF | `Linm.RMMS.WebService/bff/src/RMMS.Service.Bff` |
| Route | `web-bff/api/v1/files/*` · NuGet `Linm.Platform.FileService.Bff` |
| Slash | `/init-bff-file` + `/integrate-file-upload-web` nếu thiếu package |
| Persist | **file id (guid)** only |
| View | resign mỗi lần |
| **Cấm** | `/implement-file-service` · copy `FilesController` · invent `api/v1/nghiem-thu-files` · log full URL |

## Lookup / API (cite — đã có)

| Lookup | API | controlHint consumer |
|--------|-----|----------------------|
| list | `GET /api/v1/ai-vision/asset-candidates` | Zone B+C |
| init | `GET …/asset-candidates/init-data` | Dropdowns |
| by id | `GET …/asset-candidates/{id}` | form |
| CRUD | `POST` / `PUT` / soft `DELETE` | form |
| nearby | `GET …/asset-candidates/nearby` | toolbar · miss reconcile |
| detect | `POST /api/v1/ai-vision/detect-assets` (+ `/batch`) | toolbar frame |
| confirm / dismiss | `POST …/{id}/confirm` · `/dismiss` | row/modal |
| road-route / asset-type | Integration search | SearchInput |
| files | `web-bff/api/v1/files/*` | upload/resign |
| miss → Incident | `POST /api/v1/incident/incidents` (peer ITS) | **cấm** invent `missing-detect` |

## Open / UNCLEAR

| ID | Q | Owner |
|----|---|-------|
| GAP-DA-DEMO-01 | Packet demo `phat-hien-ts.html` missing — dùng `ai-asset-detect.html`? | PO |
| GAP-AAD-MISS-UI-01 | Miss = tab riêng / filter `missOnly` / toolbar Reconcile? | Design |
| GAP-AAD-FILE-01 | Đổi cột `ImageUrl` → `ImageFileId` migration? | SA |
| Camera ITS 1:1 | Đã có `ITS_CAMERA` seed — confirm label | PO (prior UNCLEAR giảm) |

## Handoff

→ **PO:** § Delta + inventory · DoD miss reconcile · demo path · FileService  
→ **Design:** zones + miss UI · prototype keep · reviewUrl  
→ **SA:** giữ path `asset-candidates` · FileService · Incident link · Vision host  
→ **TL/Dev:** enhance mode · **không** greenfield  

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.09.05.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.05.03 |
| rulesVersion | 2026.09.06.1 |
| generatedAt | 2026-09-06T16:20:00.000Z |
| versionGate | ok |

---
<!-- Version meta: skillVersion=2026.09.05.03 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.09.05.03 · versionGate=ok -->
