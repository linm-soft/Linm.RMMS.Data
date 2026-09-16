# Data-analy — real-data bind — ai-vision-service

| Field | Value |
|-------|-------|
| feature | `ai-vision-service` |
| title | Vision stack Wave 2–4 BFF + HITL (host AiVision) |
| packKind | `ai` |
| changeScope | `edit_page` |
| status | `done` |
| taskId | `task_d99b6bc2` |
| prefix API | `api/v1/ai-vision` |
| prefix BFF | `web-bff/api/v1/ai-vision` |
| hostInfer | `Linm.RMMS.Vision` (`:5311`) |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` (DOMAIN-MAP · cutover) · **cấm ERP.*** |
| visionRepo | `D:/AI-QLBD/Linm.RMMS.Vision` |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.AiVision` |
| mfeStdUrl | `http://localhost:9301/ai-vision-service` (packet) · consumer routes under `/ai-vision/*` |
| demo | N/A |
| contentHash | `sha256:90961d05e9d8c5fb4be3e151dc476d18c4c65e093aa0d9151d2a86ba6962702f` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.05.03` |
| rulesVersion | `2026.09.12.2` |
| analyzedAt | `2026-09-12T07:05:00.000Z` |

## § Delta Current vs New (`edit_page` · `task_d99b6bc2`)

| ID | Current | New |
|----|---------|-----|
| Analy | stub draft auto-created | §A+§B+§C+§E **done** · map `none` |
| Wave | 0p+1 API+schema done · runtime còn WebService+`:5301` | Wave **2** BFF retarget · **3** cutover · **4** HITL upload |
| Path | Signed `api/v1/ai-vision/**` trên Vision | Client **chỉ** BFF cùng path · **cấm** invent prefix |
| Persist | `linm_rmms_vision` Draft | Wave 3: out WebService SSOT tables |
| Chrome | Demo/legacy có thể còn badge | Wave 4: **0** P1/P2/AI/score header (`GAP-AI-DETECT-CHROME`) |
| PO/Design | Keep | Copy delta |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/ai-vision-service.md` | — | version gate |
| `plan` | `docs/plan/ai-vision-service/README.md` | — | wave order |
| `api` | `AiVisionOpsController` `POST api/v1/ai-vision/detect` · `detect-assets` · `GET pci-history/{sectionId}` | — | 422 toast (`mock://` reject) |
| `api` | `AiVisionDetectionsController` `api/v1/ai-vision/detections` | empty grid | toast · **cấm** alert |
| `api` | `AiVisionAssetCandidatesController` `api/v1/ai-vision/asset-candidates` (+ confirm/dismiss/nearby/init-data) | empty grid | 404/422 |
| `api` | `AiVisionUploadsController` `api/v1/ai-vision/uploads` init/object/complete/abort | — | abort on fail |
| `api` | `VisionDetectController` `POST api/v1/vision/detect` | — | **internal only** · **cấm** MFE |
| `entity` | Vision DB `linm_rmms_vision` · migration pair `20260905173308_Schema_RmmsVision` | — | tenant |
| `domain-map` | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` · slug paths `ai-vision/**` | — | Signed reuse |
| `bff` | `bff/domains/ai-vision` · Wave 2 retarget → Vision `:5311` | — | JWT company_id |
| `mfe` | `Linm.Web.RMMS.AiVision/src/pages/*` (AiVision* · AiAssetDetect* · Its* · Predict* · Estimate*) | empty OK | live BFF |
| `legacy` | WebService AiVision + `Linm.AI.WebService` `:5301` | — | Wave 3 remove · **GAP-VIS-CUTOVER-01** |
| `files` | uploads session **or** FileService `web-bff/api/v1/files/*` (peer AAD) | — | resign fail toast |

## §B — Bind field (HARD) — stack + shared HITL

| uiField | Label | controlHint | catalogKind | GET | write field | sameMfe |
|---------|-------|-------------|-------------|-----|-------------|---------|
| detections.* | Danh sách detection | grid peer | — | `GET …/detections` | CRUD | yes (`AiVisionListPage`) |
| detect | Chạy detect pavement | action | — | — | `POST …/detect` | yes |
| pciHistory | PCI history | Text/derived | — | `GET …/pci-history/{sectionId}` | — | gap/peer |
| assetCandidates.* | Candidate TS | grid peer | — | `GET …/asset-candidates` | CRUD | yes (`AiAssetDetectListPage`) |
| detectAssets | Detect assets | action | — | — | `POST …/detect-assets` | yes |
| confirm / dismiss | HITL | button | — | — | `POST …/{id}/confirm\|dismiss` | yes |
| nearby | Nearby risk | derived | — | `GET …/asset-candidates/nearby` | — | yes |
| uploadId | Frame session | FileUpload | uploads | init→PUT→complete | uploadId / object | gap→Wave4 |
| imageUrl / fileId | Frame ref | FileUpload | files/uploads | resign / object GET | guid/url | gap prefer fileId |
| classCode | Mã class | Dropdown | LOOKUP / catalog | init-data / detect body | classCode | yes |
| status | TT HITL | Dropdown | LOOKUP_STATIC | list/detail | status | yes |
| score | Confidence | Number | — | detail | score | yes (form only) |
| lat / lng | XY | Number | — | detail | lat/lng | yes |
| routeId | Tuyến | SearchInput | road-route | filter/detail | routeId | yes |
| sectionId | Đoạn | Text | — | pci / detail | sectionId | yes |
| engine | Engine | hidden | — | detail | engine | yes · **cấm** chrome |
| its.* / anpr.* / predict.* / estimates.* | Peer domains | peer analy | — | `api/v1/ai-vision/its|anpr|predict|estimates` | peer | yes pages |

**BFF:** `web-bff/api/v1/ai-vision/{resource}` → Vision cùng resource (Wave 2).  
**Cấm** invent `ai-vision-service/*` · ERP.* · MFE→`:5311` · Medical `:5301` sau cutover.

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| LOOKUP_STATIC (status/taxonomy/engine) | `GET …/asset-candidates/init-data` · peer init | Vision controllers | hardcode ngoài init |
| road-route | Integration road-routes/search | shared-catalogs | free-text |
| asset-type | Integration asset-types/search | shared-catalogs | Dropdown demo cứng |
| taxonomy catalog_codes | Vision Wave 1 catalog | plan taxonomy table | `GANTRY_SIGN` lẫn `TRAFFIC_SIGN` |
| files / uploads | `…/uploads/*` · FileService Bff | FileService | persist full URL |

## §D — Map / vẽ

`map: none` trên **slug stack** (không surface map riêng). Peer `ai-asset-detect` / ITS giữ §D riêng — **không** GAP-DA-MAP-01.

## §E — Progress / vòng đời

| stateField | Nguồn | Ai đổi | API | UI |
|------------|-------|--------|-----|-----|
| Wave 0p–5 | STATUS.md | stack skill AskConfirm | `/implement-ai-vision-stack` | STATUS board |
| detection/candidate `status` | entity Vision | user HITL | PUT · confirm/dismiss | chip Draft/Confirmed/Dismissed |
| upload session | uploads | user / system | init→complete/abort | progress toast |
| cutover flag | ops | SA/Dev Wave 3 | BFF downstream + 0 `:5301` | no dual SSOT |
| engine P1→P2 | adapter Vision | Wave 5 | same path | **cấm** badge chrome |

## §F — Handoff

| Role | Dùng packet |
|------|-------------|
| PO | DoD Wave 2–4 · copy § Delta · chrome skip AC · Ask Q-AVS-* |
| Design | peer prototypes · reviewUrl · **không** chrome P1/P2/AI/score |
| SA | BFF retarget · cutover · giữ path §B · migration out WebService |
| TL | T-BFF · T-CUTOVER · T-HITL-UPLOAD · web lane only |
| Dev | `/create-bff-api-feature` · `/agent-dev-ai-detect` · Vision host |
| QA | BFF smoke · 0 `:5301` · HITL upload · chrome absence |

## Gaps

| ID | Note |
|----|------|
| GAP-VIS-CUTOVER-01 | Runtime còn WebService+`:5301` — Wave 3 |
| GAP-F-AIV-04 | `mock://` WebService vs Vision 422 |
| GAP-F-AAD-MAP-01 | Online Biển báo → GANTRY vs TRAFFIC_SIGN |
| GAP-AI-DETECT-CHROME | Wave 4 header chrome |

## Version meta

| skillVersion | schemaVersion | contentHash | rulesVersion | status |
|--------------|---------------|-------------|--------------|--------|
| `2026.09.05.03` | `2` | `sha256:90961d05e9d8c5fb4be3e151dc476d18c4c65e093aa0d9151d2a86ba6962702f` | `2026.09.12.2` | `done` |
