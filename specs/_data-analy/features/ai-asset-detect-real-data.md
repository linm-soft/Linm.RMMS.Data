# Data-analy — real-data bind — ai-asset-detect

| Field | Value |
|-------|-------|
| feature | `ai-asset-detect` |
| title | AI phát hiện TS mới + mất TS (GPS có / frame trống) |
| packKind | `list` · featureClass `ai` |
| changeScope | `edit_page` |
| status | `done` |
| taskId | `task_5eafb531` |
| prefix API | `api/v1/ai-vision` |
| prefix BFF | `web-bff/api/v1/ai-vision` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.AiVision` |
| mfeStdUrl | `http://localhost:9303/ai-vision/ai-asset-detect` |
| hostInfer | `Linm.RMMS.Vision` |
| contentHash | `sha256:48ebba7d1ea4319eeaa330252a90d875a2a1dca1ff750846b50ff9c18897c20f` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.05.03` |
| rulesVersion | `2026.09.06.1` |
| analyzedAt | `2026-09-06T16:20:00.000Z` |

## § Delta Current vs New (`edit_page` · `task_5eafb531`)

| ID | Current | New |
|----|---------|-----|
| Analy L3 | control-hint done · real-data **stub draft** | §A+§B+§D+§E **done** |
| Business | Detect **TS mới** → candidate → Confirm Asset | + **Miss reconcile** GPS có Asset · frame 0 detect → Draft Incident (GAP-ITS-MISS-01) |
| YOLO | Class thiết bị TS | **Cấm** class «mất» |
| Frame | `ImageUrl` string | Prefer **fileId** FileService · resign · **GAP-AAD-FILE-01** |
| Demo packet | `ai-kd/phat-hien-ts.html` | Missing → cite `ai-vision/ai-asset-detect.html` |
| PO/Design | Keep artifacts | PO copies delta vào requirement |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/ai-asset-detect.md` | — | version gate |
| `context` | `docs/context/features/its-traffic-detect.md` §8 · GAP-ITS-MISS-01 | — | miss policy |
| `context` | `docs/context/features/ai-vision-service.md` | — | Vision host |
| `demo` | `Linm.RMMS.Demo/src/demo/ai-vision/ai-asset-detect.html` | — | UI ref only · **cấm** SSOT data |
| `demo` | packet `…/ai-kd/phat-hien-ts.html` | **GAP-DA-DEMO-01** | missing file |
| `api` | `AiVisionAssetCandidatesController` `api/v1/ai-vision/asset-candidates` | empty grid | toast · **cấm** alert |
| `api` | `AiVisionDetectAssetsController` `POST …/detect-assets` · `/batch` | — | 422 toast |
| `api` | confirm/dismiss on same controller | — | 404/422 |
| `entity` | `AiVisionAssetCandidateEntity` · migration `20260812150000_Schema_RmmsAiVisionAssetCandidates` | — | tenant |
| `domain-map` | `DOMAIN-MAP.md` slug `ai-asset-detect` → AiVision | — | |
| `mfe` | `pages/AiAssetDetectListPage/*` · `services/aiAssetDetect/aiAssetDetectService.ts` | empty OK | live BFF |
| `catalog` | init-data LOOKUP_STATIC assetClass/status/engine | — | |
| `catalog` | Integration `road-routes/search` · `asset-types/search` | — | SearchInput |
| `geo` | nearby Haversine (demo 25 m) · prod ITS 10 m PostGIS | no nearby | banner |
| `files` | BFF `web-bff/api/v1/files/*` · `Linm.Platform.FileService.Bff` | — | resign fail toast |
| `derived` | miss → `POST /api/v1/incident/incidents` (peer ITS · **cấm** invent missing-detect) | — | HITL |

## §B — Bind field (HARD)

| uiField | Label | controlHint | catalogKind | GET | write field | sameMfe |
|---------|-------|-------------|-------------|-----|-------------|---------|
| search | Tìm | SearchInput | — | `?search=` | — | yes |
| routeId | Tuyến | SearchInput | road-route | `?routeId=` / detail | `routeId` | yes |
| assetClass | Loại TS | Dropdown | LOOKUP_STATIC | `?assetClass=` / init / detail | `assetClass` | yes |
| status | TT | Dropdown | LOOKUP_STATIC | `?status=` / init | `status` | yes |
| fromDate / toDate | Kỳ | Date | — | `?fromDate=&toDate=` | — | yes |
| missOnly | Chỉ mất | Checkbox | — | client/filter gap | — | gap |
| code | Mã AC-* | Text | — | list/detail | auto | yes |
| score | Confidence | Number | — | detail | `score` | yes |
| engine | Engine | Dropdown | LOOKUP_STATIC | detail | `engine` | yes |
| lat / lng | XY | Number | — | detail | `lat`/`lng` | yes |
| routeLabel | Nhãn tuyến | Text | — | detail | `routeLabel` | yes |
| sectionId | Đoạn | Text | — | detail | `sectionId` | yes |
| patrolTripId | Chuyến | Text | — | detail | `patrolTripId` | yes |
| bboxJson | BBox | Text | — | detail | `bboxJson` | yes |
| modelVersion | Model | Text | — | detail | `modelVersion` | yes |
| nearbyRisk | Nearby | Checkbox | — | detail / nearby API | derived | yes |
| nearbyOf | Near of | Text | — | detail | `nearbyOf` | yes |
| note | Ghi chú | Text | — | detail | `note` | yes |
| assetCode / assetId | Asset | Text | — | after confirm | set by confirm | yes |
| imageFileId | Frame id | FileUpload | files | detail gap | guid | gap · **GAP-AAD-FILE-01** |
| imageUrl | Preview | derived | files resign | detail | `imageUrl` (legacy) | yes |
| detectedAt | Phát hiện | Date | — | detail | `detectedAt` | yes |
| expectedAssetId | TS kỳ vọng | SearchInput | asset / road-assets | miss UI | NEW | gap |
| missWindowMin | N phút | Number | — | miss UI | NEW | gap |
| incidentDraftId | Incident | Text | — | after miss gim | NEW | gap |
| assetTypeCode | Loại Confirm | SearchInput | asset-type | confirm modal | confirm body | yes |

**BFF:** `web-bff/api/v1/ai-vision/asset-candidates` → API cùng resource.  
**Cấm** ERP.* · invent `api/v1/ai-kd/*` · invent `missing-detect`.

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| road-route | Integration road-routes/search | shared-catalogs/road-route-seed.json | free-text route |
| asset-type | Integration asset-types/search | shared-catalogs/asset-type-seed.json | Dropdown cứng demo |
| LOOKUP_STATIC | `GET …/asset-candidates/init-data` | controller | hardcode options ngoài init |
| files | `web-bff/api/v1/files/*` | FileService Bff | persist full URL |

## §D — Map / vẽ

| Mục | Ghi |
|-----|-----|
| Engine | Leaflet (demo + MFE) · CTX map pin · **không** invent SDK |
| Tools | Fit · pin click → View · **không** draw polygon P1 |
| Layer | AI new (candidate) · TS đã có (Asset) · miss reconcile pin (gap) |
| Load | list candidates + Asset pins · nearby |
| Save | geometry = Point lat/lng trên candidate · Confirm → Asset |
| Pick | chọn class **trước** detect · miss: chọn expected Asset trước gim |

## §E — Progress / vòng đời

| stateField | Nguồn | Ai đổi | API | UI |
|------------|-------|--------|-----|-----|
| status | entity | user / confirm|dismiss | PUT · POST confirm/dismiss | chip Draft/Confirmed/Dismissed |
| nearbyRisk | derived nearby | system | GET nearby | banner |
| miss → Incident | peer Incident | user HITL | POST incidents | toolbar Reconcile (gap) |
| engine P1/P2 | entity | detect | POST detect-assets | badge AI |

## §F — Handoff

| Role | Dùng |
|------|------|
| PO | DoD data thật · § Delta · GAP-DA-DEMO-01 · miss AC |
| Design | control-map = §B · miss UI · FileUpload |
| SA | giữ paths · FileService · optional ImageFileId · Incident link · Vision |
| Dev | sameMfe fields · enhance · **cấm** ERP |

## Cấm

| ❌ | ✅ |
|----|-----|
| Class YOLO «mất» | Reconcile Asset + 0 detect + Incident |
| Mock-only SSOT | Cite controller/entity |
| Full presigned URL persist | file id + resign |
| ERP.WebService | Linm.RMMS.WebService only |
| Skip §B | this file |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.09.05.03 |
| schemaVersion | 2 |
| workflowVersion | 2026.09.05.03 |
| rulesVersion | 2026.09.06.1 |
| generatedAt | 2026-09-06T16:20:00.000Z |
| versionGate | ok |

---
<!-- Version meta: skillVersion=2026.09.05.03 · schemaVersion=data-analy-real-data-v2 · workflowVersion=2026.09.05.03 · versionGate=ok -->
