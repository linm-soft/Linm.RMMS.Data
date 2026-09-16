# Data-analy — controlHint — ai-vision-service (packKind `ai` · Vision host stack)

| Field | Value |
|-------|-------|
| feature | `ai-vision-service` |
| packKind | `ai` |
| featureClass | `ai` · stack host (Wave 2–4 BFF + HITL) |
| changeScope | `edit_page` |
| mode | `feature_context` |
| status | `done` |
| taskId | `task_d99b6bc2` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.05.03` |
| rulesVersion | `2026.09.12.2` |
| versionGate | `ok` |
| contentHash | `sha256:90961d05e9d8c5fb4be3e151dc476d18c4c65e093aa0d9151d2a86ba6962702f` |
| analyzedAt | `2026-09-12T07:05:00.000Z` |
| updatedAt | `2026-09-12T07:05:00.000Z` |
| stackSkill | `/implement-ai-vision-stack` |
| lane | **web only** · cấm yarn run-implement-mobile / queue qlbd-mobile |

> Data-analy **đề xuất** controlHint / surface map. Design **chốt** control-map + prototype. SA **chốt** BFF retarget + cutover.  
> **Không** MFE riêng cho slug này — UI consumer = `Linm.Web.RMMS.AiVision` qua BFF.  
> **Chrome HARD:** `ai-chrome-skip.md` — **cấm** badge `AI` / `P1` / `P2` / score trên header/toolbar (`GAP-AI-DETECT-CHROME`).

## § Delta Current vs New (`edit_page` · họp 04/09 · W2–W4 · `task_d99b6bc2`)

| ID | Current (shipped / prior) | New (this run / Wave 2–4) |
|----|---------------------------|---------------------------|
| Host | Wave **0p done** `Linm.RMMS.Vision` `:5311` · Wave **1 done** `api/v1/ai-vision/**` + `Schema_RmmsVision` | Giữ host · **không** scaffold TrafficAI · **không** `:5301` SSOT |
| Runtime lệch | WebService AiVision + `Linm.AI.WebService` `:5301` vẫn phục vụ MFE | Wave **3** cutover → BFF → Vision · 0 call `:5301` từ RMMS |
| BFF | Path `web-bff/api/v1/ai-vision/**` đã có · downstream **chưa** retarget Vision | Wave **2** `/create-bff-api-feature` retarget `{WebBff}` → `:5311` · **cấm** lộ `:5311` ra MFE · mobile BFF **defer** (lane web) |
| UI HITL | List/form pages đã ship trên AiVision MFE (detect / asset / ITS / ANPR / predict / estimate) | Wave **4** `/agent-dev-ai-detect` — upload thật · HITL · **0** chrome P1/P2/score |
| Taxonomy | Vision catalog_codes (`TRAFFIC_SIGN` ≠ `GANTRY_SIGN`) | Giữ · cấm class ổ gà trên asset · cấm nhãn VN làm id |
| Persist | PG `linm_rmms_vision` · Draft | Wave 3: WebService **migrate out** bảng vision SSOT |
| Demo | N/A (packet) | Không crawl demo HTML · UI ref = peer feature demos / live MFE |
| PO/Design artifacts | Giữ nếu có | **Không** xóa · PO copy delta vào requirement |

## Sources

| Source | Path | note |
|--------|------|------|
| Context | `docs/context/features/ai-vision-service.md` | contentHash CTX |
| Plan | `docs/plan/ai-vision-service/README.md` | waves SSOT |
| Peer CTX | `ai-vision.md` · `ai-asset-detect.md` · `its-traffic-detect.md` · `its-anpr-overload.md` · `predict.md` · `estimate.md` | consumer surfaces |
| STATUS | `specs/ai-vision-service/STATUS.md` | Wave 0p+1 done · 2–4 pending |
| Vision API | `Linm.RMMS.Vision/api/src/Vision.Api/Domains/AiVision/Controllers/*` | cite routes |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Signed paths `api/v1/ai-vision/**` · **cấm** invent prefix |
| BE runtime (legacy) | `Linm.RMMS.WebService` AiVision domain | cutover Wave 3 only |
| BFF | `bff/domains/ai-vision` · `LINM.RMMS.AiVision.Bff` | retarget Wave 2 |
| MFE | `Linm.Web.RMMS.AiVision` | pages list below · mfeStdUrl host `:9301` packet alias |
| Chrome | `agent-dev-ai-detect/example/ai-chrome-skip.md` | HARD skip |

## Kind / zones (stack · không 1 grid page)

| Zone / Surface | Pattern | DoD Wave |
|----------------|---------|----------|
| HOST | Vision.Api health `:5311` | 0p+1 **done** |
| BFF-WEB | Proxy `web-bff/api/v1/ai-vision/**` → Vision | **2** |
| CUTOVER | MFE 0 `:5301` · 0 persist SSOT trên WebService | **3** |
| HITL-UI | Upload + confirm/dismiss · chrome skip | **4** |
| DES-LIST-AIV | `AiVisionListPage` · detections | consumer |
| DES-LIST-AAD | `AiAssetDetectListPage` · asset-candidates | consumer |
| DES-LIST-ITS | `ItsTrafficDetectListPage` | consumer |
| DES-LIST-ANPR | `ItsAnprOverloadListPage` | consumer |
| DES-LIST-PRED | `PredictListPage` | consumer |
| DES-LIST-EST | `EstimateListPage` | consumer |
| DES-FORM-AIV | `AiVisionFormPage` | consumer |
| UPLOAD | `POST …/uploads` init→PUT→complete | 1 done · BFF 2 |
| INTERNAL | `POST /api/v1/vision/detect` | **cấm** lộ MFE |

## Control hint — stack / ops (không form CRUD mới trên slug)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| detectImageUrl / fileId | Frame upload | `FileUpload` | files | FileService / uploads session · **cấm** persist full presigned URL |
| taxonomy | Taxonomy | `Dropdown` | LOOKUP_STATIC | `pavement` \| `asset` \| ITS/ANPR per CTX |
| classCode | Class / mã catalog | `Dropdown` / `SearchInput` | catalog per taxonomy | **mã** · cấm nhãn VN id · `TRAFFIC_SIGN` ≠ `GANTRY_SIGN` |
| status | Trạng thái HITL | `Dropdown` | LOOKUP_STATIC | Draft / Confirmed / Dismissed |
| engine | Engine (persist only) | — (hidden) | — | API may store P1/P2 · **cấm** render header badge |
| score | Confidence | `Text` (number) **in form/detail only** | — | HITL field OK · **cấm** toolbar chrome |
| lat / lng | Tọa độ | `Text` (number) | — | Point |
| routeId | Tuyến | `SearchInput` | road-route | shared catalog |
| sectionId | Đoạn | `Text` / SearchInput | — | PCI history key |
| note | Ghi chú | `Text` | — | multiline |

## Control hint — consumer list filters (delegate peer analy)

Peer features giữ filter-bar / control-hint riêng (`ai-vision` · `ai-asset-detect` · …). Stack analy **không** duplicate full grid inventory — chỉ khóa path + chrome + wave DoD.

| Peer slug | List page | Filter bar SSOT |
|-----------|-----------|-----------------|
| `ai-vision` | AiVisionListPage | peer analy |
| `ai-asset-detect` | AiAssetDetectListPage | `ai-asset-detect-filter-bar.md` |
| `its-traffic-detect` | ItsTrafficDetectListPage | peer |
| `its-anpr-overload` | ItsAnprOverloadListPage | peer |
| `predict` / `estimate` | Predict / Estimate pages | peer |

## Open questions (PO AskQuestion trước Design nếu cần)

| ID | Question | Default đề xuất |
|----|----------|-----------------|
| Q-AVS-01 | Wave 2 chỉ Web BFF trước — Mobile BFF khi nào? | **Defer** mobile (lane web · packet HARD) |
| Q-AVS-02 | Wave 3: soft dual-run hay hard cutover 1 lần? | Hard cutover sau BFF smoke · STATUS Wave 3 confirm |
| Q-AVS-03 | reviewUrl prototype stack page? | Design = peer list prototypes · **không** gen demo mới (edit_page) |

## UNCLEAR

- none (chrome + path + waves chốt từ CTX/plan/STATUS)

## Cấm

| ❌ | ✅ |
|----|-----|
| Invent `api/v1/ai-vision-service/*` · `api/v1/rmms-vision/*` | Reuse `api/v1/ai-vision/**` |
| Scaffold TrafficAI · Medical `:5301` SSOT | Host `Linm.RMMS.Vision` only |
| ERP.WebService / Domains/Master | `Linm.RMMS.WebService` DOMAIN-MAP + Vision |
| MFE gọi `:5311` trực tiếp | Chỉ `web-bff/api/v1/ai-vision/**` |
| Badge P1/P2/AI/score trên header | `ai-chrome-skip.md` |
| Parallel lock cùng feature | 1 lock / STATUS |
| yarn run-implement-mobile (this lane) | web only |

## Version meta

| skillVersion | schemaVersion | contentHash | rulesVersion | status |
|--------------|---------------|-------------|--------------|--------|
| `2026.09.05.03` | `1` | `sha256:90961d05e9d8c5fb4be3e151dc476d18c4c65e093aa0d9151d2a86ba6962702f` | `2026.09.12.2` | `done` |
