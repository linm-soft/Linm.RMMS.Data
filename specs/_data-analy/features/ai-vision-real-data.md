# Real-data bind — ai-vision (Kind B · ảnh hiện trạng · packKind ai)

| | |
|---|---|
| feature | `ai-vision` |
| prefix | `web-bff/api/v1` |
| sourceTables | `rmms_ai_vision_detections` |
| changeScope | `edit_page` |
| taskId | `task_cc211171` |
| contentHash | `sha256:506a7c7045dab6bd32038fe1dd6984ce12e7d01feea4b9bddcc3be35c0d66236` |
| updatedAt | `2026-09-12T08:20:36.268Z` |

## §A Resource

| Resource | Entity / table | Key |
|----------|----------------|-----|
| Detection list/detail | `AiVisionDetectionEntity` / `rmms_ai_vision_detections` | `Id` Guid · `Code` DET-* · tenant `CompanyCode` |
| Section lookup | demo seed `SECTIONS` + BE filter `sectionId` | `SEC-QL1-*` |
| Defect taxonomy | init constants `DEFECT_CLASSES` (10 classes mặt đường) | Ổ gà … Hư mép — **cấm** catalog TS |
| Engine | `P1` / `P2` | modelVersion gpt-4o-vision / onnx-rmms-v1 |
| Catalog UI schema | `CatalogUiSchemaRegistry` kind `ai-vision-detections` | seed cột list + form |
| Frame file | FileService BFF `files/*` | `imageFileId` Guid · resign URL |
| Detect | `POST /ai-vision/detect` | Draft từ 1 frame ảnh hiện trạng |
| PCI history stub | `GET /ai-vision/pci-history/{sectionId}` | modal (out list pack) |

## §B Bind

| UI zone | Method | Path | DTO → display |
|---------|--------|------|---------------|
| Zone B search | GET | `/ai-vision/detections?search=&defectClass=&severity=&status=&engine=&sectionId=&page=&pageSize=` | filter → page=1 |
| Zone C grid | GET | (same list) | `code` · `defectClass` · `score` · `severity` · `sectionId` · `routeLabel` · `status` · `engine` · `incidentCode` |
| Zone D pagination | — | server | `totalCount` · pageSize 50 default |
| Section filter | GET | `sectionId` query | Dropdown `SECTIONS` (**CLOSED**) |
| Form View/Edit | GET | `/ai-vision/detections/{id}` | full DTO + resign `imageUrl` từ `imageFileId` |
| Create/Copy | POST | `/ai-vision/detections` | body fields per controlHint |
| Update | PUT | `/ai-vision/detections/{id}` | body + soft fields |
| Soft delete | DELETE | `/ai-vision/detections/{id}` | `IsActive=false` |
| Zone A Upload | POST/PUT | `web-bff/api/v1/files/*` | FileService init→PUT→complete → `imageFileId` |
| Detect toolbar | POST | `/ai-vision/detect` | `{ imageUrl\|imageFileId, engine? }` → new Draft |
| Incident confirm | PUT | `/ai-vision/detections/{id}` | `status=IncidentCreated` · `incidentCode=VI-*` |
| Schema editor | GET/PUT | `/integration/catalogs/ai-vision-detections/ui-schema` | `LinCatalogUiSchemaEditorModal` |

**BFF:** `web-bff/api/v1/ai-vision/**` proxy → `api/v1/ai-vision/**`.  
**Files:** Host BFF `Linm.RMMS.WebService/bff/src/RMMS.Service.Bff` · route `web-bff/api/v1/files/*` · NuGet `Linm.Platform.FileService.Bff`.  
**Cấm** ERP.* · `Domains/Master` · prefix `/rmms/` ERP · persist presigned URL · copy `FilesController` · `/implement-file-service`.

## §C Write rules

| Action | Rule |
|--------|------|
| create | `defectClass` + `sectionId` + `engine` required · `Code` auto DET-* |
| update | PUT scalars flat · incident via status transition |
| copy | POST new · clear `id` · new `code` · clear `imageFileId` optional re-upload |
| delete | soft delete tenant-scoped |
| upload | FileService only · store **file id** · resign on read |
| detect | require frame (`imageFileId` hoặc non-`mock://` `imageUrl`) · engine P1 default · Draft |
| incident | Critical + Draft → row menu «Tạo Vấn đề» → VI-* |
| taxonomy | **chỉ** `DEFECT_CLASSES` mặt đường — **cấm** map/trộn `assetClass` / TRAFFIC_SIGN |

## §D Empty / fail

| Case | Behavior |
|------|----------|
| list empty | «Không có dữ liệu phát hiện.» |
| list filtered empty | «Không tìm thấy phát hiện phù hợp» |
| list fail | empty grid · totalCount=0 · localStorage fallback |
| upload fail | toast error · không gọi detect |
| detect without frame | disable button · hint «Chọn ảnh hiện trạng» |
| detect `mock://` | Vision 422 / fail toast — **cấm** gửi mock khi FileService sẵn |
| detect fail | toast error · no row added |
| form 404 | redirect list |
| schema fail | bootstrap columns from `uiColumns` |

## §E Progress

| Milestone | Status |
|-----------|--------|
| Analy real-data | **this turn** (`task_cc211171`) |
| GAP-FILTER-SECTION / GAP-STATUS-LABEL | **CLOSED** on MFE |
| GAP-UPLOAD-FILE FileService bind | Dev next |
| GAP-TOOLBAR-DETECT + GAP-DETECT-BODY | Dev next |
| GAP-TAXONOMY-SEP enforce | Dev/QA verify |
| GAP-F-AIV-04 Vision host cutover | OUT → `ai-vision-service` |
| Kind F map / PCI modal | OUT list pack |

## §F Cấm

- Badge/tag `AI` · P1/P2 chrome on header/`beforeToolbar` (`ai-chrome-skip.md`)
- ERP.WebService / Domains/Master fork
- Trộn class ổ gà / nứt… với catalog TS (`ai-asset-detect`)
- Persist presigned URL · scaffold FilesController · `/implement-file-service`
- Invent API ngoài `api/v1/ai-vision` + `files/*`
- Mock-only list khi BFF available (fallback OK)
- Real GPT-4o / ONNX runtime trên WebService (stub/Vision host)

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.08.09.02 |
| schemaVersion | qldb-workflow-skill-v1 |
| workflowVersion | 2026.08.09.02 |
| generatedAt | 2026-09-12T08:20:36.268Z |
| versionGate | ok |

---
<!-- Version meta: skillId=agent-data-analy skillVersion=2026.08.09.02 schemaVersion=qldb-workflow-skill-v1 workflowVersion=2026.08.09.02 versionGate=ok -->
