# Data-analy — controlHint — ai-vision (Kind B catalog · ảnh hiện trạng)

| Field | Value |
|-------|-------|
| feature | `ai-vision` |
| packKind | `ai` |
| mode | `feature_context` (`edit_page` · NEW task `task_cc211171`) |
| status | `done` |
| changeScope | `edit_page` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.09.02` |
| schemaVersion | `qldb-workflow-skill-v1` |
| workflowVersion | `2026.08.09.02` |
| versionGate | `ok` |
| taskId | `task_cc211171` |
| realData | `specs/_data-analy/features/ai-vision-real-data.md` |
| contentHash | `sha256:506a7c7045dab6bd32038fe1dd6984ce12e7d01feea4b9bddcc3be35c0d66236` (CTX+demo `ai-vision.html`) |
| ctxHash | `sha256:2945222560369CE01C63C74E44775491B5AA294F00B6F8107F3D605AE7447C44` |
| demoHash | `sha256:557D82C50E930BE88BB4C8F954B055296658F44D08738DDBA33325731F5B4C90` |
| updatedAt | `2026-09-12T08:20:36.268Z` |

## § Delta Current vs New (`edit_page` · `task_cc211171`)

Giữ PO/Design/SA/TL artifacts đã confirmed. Delta **bắt buộc** pack edit (họp 04/09 · Upload HARD):

| ID | Current (MFE / prior `task_d52ac8ac`) | New (SSOT + họp) | Surface |
|----|----------------------------------------|------------------|---------|
| GAP-FILTER-SECTION | **CLOSED** — Zone B `sectionId` Dropdown + `getList` | giữ | list |
| GAP-STATUS-LABEL | **CLOSED** — `statusLabel` VI | giữ | list |
| GAP-TOOLBAR-DETECT | service `detect()` có · **MFE thiếu** Upload/detect toolbar | Zone A: Upload ảnh hiện trạng → FileService → `POST /ai-vision/detect` | list |
| GAP-UPLOAD-FILE | Form `imageUrl` text · default `mock://` · **không** FileUpload | `FileUpload` · `imageFileId` · resign URL · **cấm** persist presigned | list/form |
| GAP-DETECT-BODY | `detect({ engine?, note? })` không truyền frame | body `{ imageUrl \| imageFileId, engine? }` — 1 frame ảnh hiện trạng | API/MFE |
| GAP-TAXONOMY-SEP | taxonomy 10 class ổ gà… | **HARD** cấm trộn `defectClass` với catalog TS (`ai-asset-detect`) | all |
| GAP-F-AIV-04 | WebService `DetectStubAsync` `mock://` | host Vision `:5311` · reject `mock://` 422 — OUT runtime này (plan `ai-vision-service`) | BE host |

**Không** đổi: Kind B A–D shell · LinPageLayout · LinCatalogDataGrid · LinCatalogListPagination · form C/E/V/Copy · API prefix `api/v1/ai-vision` · **cấm** AI chrome header · Kind F map OUT this pack · PO/Design confirmed.

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** lookup + FileService bind.  
> **Cấm** Dev đoán FileUpload vs Text khi đã có bảng này.

## Sources

| Source | Path |
|--------|------|
| Context | `docs/context/features/ai-vision.md` |
| Demo | `Demo/src/demo/ai-vision/ai-vision.html` (+ redirect `features/ai-vision-demo.html`) |
| Họp 04/09 | Hư hỏng từ ảnh hiện trạng · cùng `api/v1/ai-vision` · cấm trộn class ổ gà ↔ TS |
| Upload HARD | `/init-bff-file` + `/integrate-file-upload-web` · `web-bff/api/v1/files/*` · NuGet `Linm.Platform.FileService.Bff` |
| SSOT P2 | `docs/context/14-P2-AI-VISION-STANDARD.md` |

## Control hint cluster — list filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchInput` | text | code · class · section · route · incident · note |
| defectClass | Loại hư hỏng | `Dropdown` | enum | taxonomy 10 classes **chỉ** mặt đường |
| severity | Mức độ | `Dropdown` | enum | Critical/High/Medium/Low |
| status | Trạng thái | `Dropdown` | enum | Draft/IncidentCreated/Dismissed · nhãn VI |
| engine | Engine | `Dropdown` | enum | P1 / P2 |
| sectionId | Đoạn đường | `Dropdown` | lookup | sections seed |
| fromDate | Từ ngày | `Date` | optional | OUT this pack if not in demo list |
| toDate | Đến ngày | `Date` | optional | OUT this pack |

## Control hint cluster — toolbar / detect (Zone A) — NEW

| Field key | Label | controlHint | Notes |
|-----------|-------|-------------|-------|
| attachFrame | Ảnh hiện trạng | `FileUpload` | accept image/* · FileService init→PUT→complete |
| imageFileId | File id | hidden | Guid từ FileService · SSOT persist |
| runDetect | Chạy detect | `Button` | enabled khi có frame · `POST …/detect` |
| engineDetect | Engine detect | `Dropdown` | P1 default · optional P2 |

## Control hint cluster — form fields

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| code | Mã DET | `Text` | auto | readonly server/local gen |
| defectClass | Loại hư hỏng | `Dropdown` | * | taxonomy MD — **cấm** assetClass TS |
| score | Confidence | `Text` (number) | * | 0–1 |
| severity | Mức độ | `Dropdown` | * | |
| status | Trạng thái | `Dropdown` | * | |
| engine | Engine | `Dropdown` | * | P1 / P2 |
| sectionId | Đoạn | `Dropdown` | * | |
| routeLabel | Tuyến | `Text` | | |
| lat / lng | Tọa độ | `Text` (number) | | |
| pciSnapshot | PCI | `Text` (number) | | |
| modelVersion | Model | `Text` | | gpt-4o-vision / onnx-rmms-v1 |
| bboxJson | BBox | `Text` | | JSON |
| imageFileId | Ảnh hiện trạng | `FileUpload` | * detect | FileService guid · **cấm** lưu presigned |
| imageUrl | Preview URL | `Text` | derived | resign on read · legacy display |
| note | Ghi chú | `Text` | | multiline |
| incidentCode | Mã Vấn đề | `Text` | readonly | VI-* after confirm |

## Lookup APIs (SA)

| Lookup | API | controlHint consumer |
|--------|-----|----------------------|
| detections list | `GET /api/v1/ai-vision/detections` | SearchInput + Dropdown filters |
| detection by id | `GET /api/v1/ai-vision/detections/{id}` | form View/Edit |
| create/update | `POST/PUT …/detections` | form save |
| detect | `POST /api/v1/ai-vision/detect` | toolbar/form Upload → Draft |
| files | `web-bff/api/v1/files/*` | FileUpload (reuse BFF FileService) |
| pci history | `GET /api/v1/ai-vision/pci-history/{sectionId}` | PCI modal (stub) |
| health | `GET /api/v1/ai-vision/health` | ops |

**Cấm:** invent `ai-vision/uploads/*` mới cho lane này nếu FileService `files/*` đã đủ · copy `FilesController` · `/implement-file-service` · ERP.* · `detect-assets` trên màn kiểm định MD.

## Handoff

→ PO: Kind B list+form DoD · DEM · taxonomy MD · Upload FileService · Delta § trên  
→ Design: zones A–D · FileUpload Zone A/form · reviewUrl  
→ SA: AiVision APIs + FileService bind · **cấm** ERP.Master  

---
<!-- Version meta: skillId=agent-data-analy skillVersion=2026.08.09.02 schemaVersion=qldb-workflow-skill-v1 workflowVersion=2026.08.09.02 versionGate=ok -->
