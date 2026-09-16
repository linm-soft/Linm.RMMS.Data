# Solution discovery — ai-vision-service

> Status: **confirmed** (`solution_confirm=approve` · autopilot · autoApprove=ON)  
> Standards: api-endpoint · bff-api-structure · company-field · database-migration · no-parent-json-field  
> **SA detail:** `sa-api-form-data.md` · `sa-repo-solution.md` · `sa-implement-gates.md` · `form-type-task-pack.md` (packKind=`ai`) · `ai-chrome-skip.md`  
> Requires: `ui/design.md` **confirmed** · design_confirm=`approve`  
> **changeScope:** `edit_page` · Wave 0p+1 done → Wave **2** BFF retarget · **3** hard cutover · **4** HITL upload  
> **Cấm** invent `api/v1/ai-vision-service/*` · ERP.* · MFE→`:5311` · Medical `:5301` sau cutover · chrome P1/P2/AI/score header

| Field | Value |
|-------|-------|
| feature | `ai-vision-service` |
| packKind | `ai` · stack host (Kind B+D peer lists) |
| changeScope | `edit_page` |
| status | `confirmed` |
| design_confirm | approve |
| domain_map | **AiVision** · kebab `ai-vision` |
| visionHost | `D:/AI-QLBD/Linm.RMMS.Vision` · `api/src/Vision.Api` · `:5311` · DB `linm_rmms_vision` |
| backendBff | `D:/AI-QLBD/Linm.RMMS.WebService` · `bff/domains/ai-vision` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.AiVision` · peerStdUrl `http://localhost:9301/ai-vision-service` |
| lane | **web only** · mobile BFF **defer** (Q-AVS-01) |
| cutover | **hard** after BFF smoke (Q-AVS-02) |
| chrome | **GAP-AI-DETECT-CHROME** skip |
| sa_tz_gate | **tz_required** |
| sa_xco_gate | **xco_get_only** |
| sa_shared_table | **share_tenant** (tenant_keep) |
| solution_confirm | **approve** |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.05.03` |
| rulesVersion | `2026.09.12.2` |
| contentHash | `sha256:90961d05e9d8c5fb4be3e151dc476d18c4c65e093aa0d9151d2a86ba6962702f` |
| versionGate | `ok` |
| updatedAt | `2026-09-12T14:30:00.000Z` |
| taskId | `task_31fbfd98` |

## 0. Path guard

| ✅ In pack | ❌ Out |
|------------|-------|
| `Linm.RMMS.Vision` infer+persist HITL | `Linm.Web.ERP.WebService` · `ERP.Service.*` |
| `Linm.RMMS.WebService` **BFF only** `bff/domains/ai-vision` | Keep WebService AiVision tables as SSOT after Wave 3 |
| `Linm.Web.RMMS.AiVision` via `web-bff/api/v1/ai-vision/**` | MFE direct `:5311` · invent `ai-vision-service/*` · `rmms-vision/*` |
| FileService `web-bff/api/v1/files/*` (peer AAD) | Azure SDK in WebService / MFE |
| — | `Linm.AI.WebService` `:5301` after cutover · TrafficAI scaffold |

**be_repo_confirm:** Vision host + WebService BFF (QLBD) · **ui_repo_confirm:** `Linm.Web.RMMS.AiVision`.

## 1. Ownership

| Layer | Repo / module |
|-------|----------------|
| **Vision host** | `D:/AI-QLBD/Linm.RMMS.Vision` · `Vision.Api` · JWT `company_id` |
| **API prefix** | `api/v1/ai-vision/**` trên Vision (Signed — **không** prefix mới) |
| **Internal infer** | `POST /api/v1/vision/detect` · **cấm** lộ MFE |
| **BFF** | `LINM.RMMS.AiVision.Bff` · proxy only · downstream → `ServiceEndpoints:Vision` / `AiVisionBaseUrl`=`http://localhost:5311` |
| **MFE** | `Linm.Web.RMMS.AiVision` · same BFF path |
| **Persist** | PG `linm_rmms_vision` · Wave 1 `Schema_RmmsVision` **done** |
| **Cutover** | Wave 3: 0 call `:5301` · 0 persist AiVision SSOT trên WebService |
| **Files** | Vision `…/uploads` **or** FileService BFF (prefer `fileId`) |

### Architecture (repo SSOT)

| Layer | Choice |
|-------|--------|
| VisionRoot | `D:/AI-QLBD/Linm.RMMS.Vision` |
| BackendRoot (BFF) | `D:/AI-QLBD/Linm.RMMS.WebService` |
| Domain | AiVision / `ai-vision` · **không** domain mới |
| API prefix | `api/v1/ai-vision` |
| BFF | `web-bff/api/v1/ai-vision/**` · proxy only = **yes** · **cấm** lộ `:5311` |
| Files BFF | `web-bff/api/v1/files/**` · existing |
| MFE | `Linm.Web.RMMS.AiVision` |
| Response | ApiResponse / paged |
| Auth perm | `ai-vision.*.read\|create\|update\|delete\|confirm\|dismiss\|detect` (peer codes) |
| Persist | flat TenantEntity scalars · **no** parent `*LinesJson` · `BboxJson` opaque output OK |
| Out of pack | GIS/Camera/Incident migrate · Wave 5 P2 GPU · mobile BFF |

### SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| UI | `@linm-soft-org/linm-web-common-components` | LinPageLayout · LinCatalogDataGrid · LeaveConfirmModal · FileUpload · LinErpListFilterBar |
| HTTP | apiClient SSOT | re-export only · **cấm** axios thẳng Vision |
| BE | Linm.Platform.CommonLib | ApiResponse envelope |
| Files | FileService BFF + Vision uploads | resign by fileId · **cấm** persist full URL |
| Persist | `no-parent-json-field` | child rows / scalar |
| Catalog | Integration road-route / asset-type · Vision init-data | SearchInput · Dropdown từ init |
| Chrome | `ai-chrome-skip` | 0 P1/P2/AI/score header · score form-only |

## 2. Form data analysis (REQUIRED)

| Screen / FormMode | Fields (UI) | Source type | Entity | data-import / mock |
|-------------------|-------------|-------------|--------|---------------------|
| S-HOST / S-WAVE | stack hub status | derived | — | prototype hub |
| S-BFF-WEB | smoke proxy | bff | — | Wave 2 |
| S-CUTOVER | ops flag | config | — | Wave 3 |
| S-LIST-AIV | search · routeId · status · fromDate · toDate · classCode | query + LOOKUP | Detection | peer list |
| S-LIST-AAD / ITS / ANPR / PRED / EST | peer filters (peer analy) | query | peer entities | peer |
| S-FORM-AIV Create/Edit/View | classCode* · status · score · lat/lng · routeId · sectionId · engine(hidden) · image/file | tx + LOOKUP + files | Detection | — |
| S-DETECT | imageUrl/fileId · taxonomy | action | Detection Draft | POST detect |
| S-UPLOAD | FileUpload session | uploads/files | upload session | Wave 4 |
| S-HITL | confirm / dismiss · status chip | action | Detection/Candidate | POST confirm\|dismiss |
| S-LEAVE | LeaveConfirmModal | UI only | — | dirty form |

### List filter query keys (peer S-LIST — WHAT only)

| Query key | controlHint | Notes |
|-----------|-------------|-------|
| search | SearchInput | API list |
| routeId | SearchInput road-route | Integration search |
| classCode | Dropdown | init-data / catalog_codes |
| status | Dropdown | Draft/Confirmed/Dismissed |
| fromDate / toDate | Date | TZ bounds |
| (peer AAD) missOnly | Checkbox | peer AAD only — không invent trên stack slug |

### controlHint → API shape

| controlHint | SA contract |
|-------------|-------------|
| SearchInput (routeId) | Integration `road-routes/search` · **cấm** free-text only |
| Dropdown (classCode/status) | `GET …/asset-candidates/init-data` · peer init · **cấm** FE-only enum |
| FileUpload | uploads init→PUT→complete **or** FileService · prefer fileId |
| Number (score) | scalar · form only · **cấm** chrome badge |
| hidden (engine) | persist OK · **cấm** header display |

## 3. FormMode ↔ API (REQUIRED)

| FormMode / surface | Method | Path (qua BFF) | Notes |
|--------------------|--------|----------------|-------|
| List AIV | GET | `/api/v1/ai-vision/detections` | page · filters §2 |
| View/Edit AIV | GET/PUT | `/api/v1/ai-vision/detections/{id}` | XCO get_only |
| Create AIV | POST | `/api/v1/ai-vision/detections` | Draft |
| Delete AIV | DELETE | `/api/v1/ai-vision/detections/{id}` | perm |
| Detect pavement | POST | `/api/v1/ai-vision/detect` | body imageUrl/fileId · **cấm** mock:// |
| PCI history | GET | `/api/v1/ai-vision/pci-history/{sectionId}` | derived |
| List/CRUD AAD | * | `/api/v1/ai-vision/asset-candidates/**` | peer |
| Detect assets | POST | `/api/v1/ai-vision/detect-assets` | catalog_codes |
| HITL confirm/dismiss | POST | `/api/v1/ai-vision/…/{id}/confirm\|dismiss` | peer paths |
| Nearby | GET | `/api/v1/ai-vision/asset-candidates/nearby` | peer |
| Init-data | GET | `/api/v1/ai-vision/asset-candidates/init-data` | LOOKUP_STATIC |
| Uploads | POST/PUT | `/api/v1/ai-vision/uploads/**` | Wave 4 HITL |
| Files resign | * | `/api/v1/files/**` | FileService BFF |
| ITS / ANPR / predict / estimates | * | `/api/v1/ai-vision/its|anpr|predict|estimates/**` | peer Signed |
| Internal infer | POST | `/api/v1/vision/detect` | **Vision-only · cấm MFE** |

**Cấm** invent path ngoài DOMAIN-MAP / plan Signed table.

## 4. API catalog (blocks)

### API-01: GET web-bff/api/v1/ai-vision/detections

| | |
|--|--|
| Purpose | Paged list detections (pavement) |
| Permission | `ai-vision.detections.read` |
| Tenant | X-Company-Id |
| Request | query: search · routeId · classCode · status · fromDate · toDate · page · pageSize |
| Response | paged DTO · grid columns peer |
| Errors | 401 · empty grid OK |
| Form surfaces | S-LIST-AIV |
| Field map | ui filters → query · row → Detection columns |
| gates.tz | yes (from/to) |
| gates.xco | n/a (list) |
| Migration | none (Wave 1 done) |
| data-import | N/A stack · live Vision DB |

### API-02: GET/PUT/POST/DELETE …/detections/{id}

| | |
|--|--|
| Purpose | CRUD detection HITL form |
| Permission | read/create/update/delete |
| Request/Response | classCode · status · score · lat/lng · routeId · sectionId · engine · imageFileId/imageUrl · detectedAt |
| Form surfaces | S-FORM-AIV |
| gates.tz | yes (detectedAt) |
| gates.xco | yes GET/{id} |
| Persist | Detection entity Vision · no parent LinesJson |

### API-03: POST …/detect

| | |
|--|--|
| Purpose | Run pavement detect → Draft rows |
| Request | imageUrl **or** fileId · taxonomy pavement |
| Errors | **422** `mock://` · toast (cấm alert) |
| Form surfaces | S-DETECT |
| Downstream | Vision internal GPT adapter · persist `linm_rmms_vision` |

### API-04: GET …/pci-history/{sectionId}

| | |
|--|--|
| Purpose | PCI history derived |
| Form surfaces | S-FORM / peer |
| gates.xco | get_only if by id scope |

### API-05: * …/asset-candidates/** (+ detect-assets · confirm · dismiss · nearby · init-data)

| | |
|--|--|
| Purpose | Peer AAD contracts (reuse Signed) |
| Form surfaces | S-LIST-AAD · S-HITL |
| Note | **Không** re-define AAD miss API đây — cite peer `ai-asset-detect` solution |

### API-06: POST/PUT …/uploads/** (+ optional files BFF)

| | |
|--|--|
| Purpose | Frame upload session Wave 4 |
| Flow | init → PUT object → complete · abort on fail |
| Prefer | fileId + FileService resign |
| Form surfaces | S-UPLOAD · S-HITL |
| Cấm | persist full absolute URL as SSOT |

### API-07: Peer ITS / ANPR / predict / estimates

| | |
|--|--|
| Purpose | Same host Vision · same BFF prefix |
| Paths | Signed plan table · **không** invent |
| Form surfaces | S-LIST-ITS/ANPR/PRED/EST |

### API-08: BFF retarget (Wave 2 — không API mới)

| | |
|--|--|
| Purpose | Point `AiVisionBaseUrl` → Vision `:5311` · JWT forward |
| Skill | `/create-bff-api-feature` · Ask BFF (không API mới) |
| Verify | `POST web-bff/api/v1/ai-vision/detect` → row DB Vision |
| Cấm | BFF host mới · lộ `:5311` ra MFE |

### API-09: Cutover (Wave 3 — integrate)

| | |
|--|--|
| Purpose | Hard cutover: MFE→BFF only · 0 `:5301` · 0 WebService AiVision persist SSOT |
| Gap | **GAP-VIS-CUTOVER-01** |
| Migration | out/disable WebService AiVision tables as SSOT (pair Designer nếu còn ghi) |
| Verify | 0 Medical vision call · health Vision 200 |

## 5. Entity / migration

| Item | Decision |
|------|----------|
| Wave 1 schema | **done** `Schema_RmmsVision` pair trên Vision |
| Wave 2 | **no** new entity — BFF config only |
| Wave 3 | **migrate out** WebService AiVision SSOT · keep Vision DB |
| Wave 4 | uploads session fields already on Vision · FileService consumer if gap |
| Wave 5 | P2 ONNX adapter only — **path không đổi** · skip_until_p2_0 OK |
| Parent JSON | **cấm** inventory LinesJson · bbox scalar text OK |

## 6. Implement gates (confirm)

| Gate | Decision | Endpoints / surfaces | Skill | Note |
|------|----------|----------------------|-------|------|
| TZ | **tz_required** | API-01 from/to · detectedAt forms | `/review-timezone-implement` | UTC store · FE 2dt |
| XCO | **xco_get_only** | API-02 GET/{id} · peer getById | `/implement-view-cross-company` | AllowedCompanyIds |
| SHARE | **share_tenant** | Detection · Candidate · peer tx | `/implement-shared-table` | tenant_keep · không shared master |

AskQuestion (autoApprove ON): `sa_tz_gate=tz_required` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant` · `2026-09-12T14:30:00.000Z`

## 7. FormType pack (packKind=`ai`)

| Surface | Pattern | devSlash |
|---------|---------|----------|
| Peer S-LIST-* | Kind B Full page · `data-form-cols=5` · LinErpListFilterBar | `/agent-dev` |
| Detect / Upload / HITL | Kind D + FileUpload · chrome skip | `/agent-dev-ai-detect` |
| BFF Wave 2 | retarget only | `/create-bff-api-feature` |
| Leave | LeaveConfirmModal | T-UI-LEAVE / T-UI-AI-FORM |

**TL task ids (WHAT only — cấm HOW):** T-BFF · T-CUTOVER · T-HITL-UPLOAD · T-UI-FILTER-01 (peer lists) · T-UI-AI-01 · T-UI-AI-FORM-01 · T-UI-LEAVE-01 · T-BE-CRUD (peer) · T-PERM · T-QA-* (queued QA).

## 8. Waves → solution map

| Wave | SA decision | Status |
|------|-------------|--------|
| 0p Host | Vision scaffold | **done** |
| 1 Vision API | catalog_codes · uploads · detect | **done** |
| 2 BFF | retarget → `:5311` · same path | **next Dev** |
| 3 Cutover | hard · GAP-VIS-CUTOVER-01 | after BFF smoke |
| 4 HITL UI | upload thật · 0 chrome | after cutover |
| 5 P2 GPU | adapter only | defer / skip_until_p2_0 |

## 9. Handoff → team_lead

| Field | Value |
|-------|-------|
| feature / packKind | `ai-vision-service` / `ai` |
| phase_from / phase_to | sa → team_lead |
| STATUS | solution **confirmed** |
| FormMode↔API | §3 · API-01…09 |
| TZ/XCO/SHARE | tz_required · xco_get_only · share_tenant |
| entity/migration | Wave1 done · W2 config · W3 out WebService SSOT · W4 uploads |
| BFF vs API | BFF proxy only · API on Vision |
| Gaps | GAP-VIS-CUTOVER-01 · GAP-AI-DETECT-CHROME · GAP-VIS-UPLOAD-01 |
| Open questions | none (autoApprove) |
| Next | TL T-* pack · **cấm** Dev trước TL · E2E queued `/agent-qa*` |

## Version meta

| Key | Value |
|-----|-------|
| skillVersion | 2026.09.05.03 |
| rulesVersion | 2026.09.12.2 |
| contentHash | sha256:90961d05e9d8c5fb4be3e151dc476d18c4c65e093aa0d9151d2a86ba6962702f |
| solution_confirm | approve |
| writtenAt | 2026-09-12T14:30:00.000Z |
