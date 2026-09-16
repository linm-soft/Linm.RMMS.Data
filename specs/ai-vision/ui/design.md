# Design — ai-vision (AI kiểm định mặt đường)

| Field | Value |
|-------|-------|
| feature | `ai-vision` |
| Feature Kind | **B** — Catalog list + form |
| packKind | `ai` |
| changeScope | `edit_page` |
| status | `confirmed` (autopilot · design_confirm=approve) |
| skillVersion | `2026.08.09.02` |
| schemaVersion | `qldb-workflow-skill-v1` |
| workflowVersion | `2026.08.09.02` |
| versionGate | `ok` |
| taskId | `task_83da313e` |
| contentHash | `sha256:506a7c7045dab6bd32038fe1dd6984ce12e7d01feea4b9bddcc3be35c0d66236` |
| controlHint | `specs/_data-analy/features/ai-vision-control-hint.md` |
| realData | `specs/_data-analy/features/ai-vision-real-data.md` |
| updatedAt | `2026-09-12T08:26:00.000Z` |

## Prototype + reviewUrl (REQUIRED)

| Artifact | Path |
|----------|------|
| Prototype HTML | [`ui/prototype/ai-vision-list-prototype.html`](./prototype/ai-vision-list-prototype.html) |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/ai-vision/ui/prototype/ai-vision-list-prototype.html` |
| Demo SSOT | `D:/AI-QLBD/Linm.RMMS.Demo/src/demo/ai-vision/ai-vision.html` |
| mfeStdUrl | `http://localhost:9301/ai-vision` |

> Autopilot: `design_confirm=approve` · hash skip · **cấm** re-scan demo · **cấm** AI chrome header (`ai-chrome-skip`).

## Delta `edit_page` (chốt Design)

| ID | Design decision | Surface |
|----|-----------------|---------|
| GAP-TOOLBAR-DETECT | Zone A: `FileUpload` ảnh hiện trạng + `Dropdown` engine + `Button` Chạy detect | list toolbar |
| GAP-UPLOAD-FILE | Form + toolbar: `FileUpload` → persist `imageFileId` · preview via resign · **cấm** Text `imageUrl` làm nguồn upload | list/form |
| GAP-DETECT-BODY | Detect chỉ khi có frame · body `{ imageUrl\|imageFileId, engine? }` · P1 default · Draft | list |
| GAP-TAXONOMY-SEP | Dropdown class **chỉ** 10 MD · **cấm** catalog TS | all |
| GAP-FILTER-SECTION / GAP-STATUS-LABEL | **CLOSED** — giữ Zone B `sectionId` + status VI | list |
| GAP-F-AIV-04 | Vision host OUT — prototype không mô phỏng GPT runtime | OUT |

## Zones A–D (list-shell · content-only)

| Zone | Content | controlHint |
|------|---------|-------------|
| **A** Toolbar | Title **AI kiểm định mặt đường** (text only) · `+Thêm` · refresh · history · config · **Upload ảnh hiện trạng** · engine detect · **Chạy detect** · preview thumb | FileUpload · Dropdown · Button — **cấm** badge AI/P1 trên header |
| **B** Filters | SearchInput · defectClass · severity · status (VI) · engine · sectionId · Tìm | SearchInput + Dropdown |
| **C** Grid | LinCatalogDataGrid · STT·Mã·Class·Score·Severity·Section·Route·Status·Engine·Incident·actions · row menu Xem/Sửa/Sao chép/Tạo Vấn đề | catalog grid |
| **D** Footer | **LinCatalogListPagination** · Tổng · pageSize 50 · FA pager — **cấm** footerPagination generic | pagination |

## Shell

- Root `data-catalog-list-page`
- **1** `LinPageLayout kind="catalog"` — cấm nested CatalogListShell
- `catalogToolbar` / Zone A detect cluster **trước** filter bar
- `useServerPagedListLoading` · skeletonRows
- Form **full page** C/E/V/Copy (không modal production) — prototype modal = wireframe only
- Kind F map / PCI modal · AI chrome · OUT this pack

## Control map (Design chốt · từ controlHint)

### Zone A — toolbar / detect (NEW)

| Field key | Label | control | Notes |
|-----------|-------|---------|-------|
| attachFrame | Ảnh hiện trạng | `FileUpload` | accept image/* · FileService init→PUT→complete |
| imageFileId | File id | hidden | Guid · SSOT persist |
| engineDetect | Engine | `Dropdown` | P1 default · P2 optional |
| runDetect | Chạy detect | `Button` | enabled khi có frame · disable + hint nếu thiếu |

### Zone B — filters

| Field key | Label | control | Notes |
|-----------|-------|---------|-------|
| search | Tìm kiếm | `SearchInput` | code · class · section · route · incident · note |
| defectClass | Loại hư hỏng | `Dropdown` | 10 class MD only |
| severity | Mức độ | `Dropdown` | Critical/High/Medium/Low |
| status | Trạng thái | `Dropdown` | Draft→Nháp · IncidentCreated→Đã tạo Vấn đề · Dismissed→Đã bỏ |
| engine | Engine | `Dropdown` | P1 / P2 |
| sectionId | Đoạn đường | `Dropdown` | CLOSED wired |

### Form C/E/V/Copy

| Field key | Label | control | required |
|-----------|-------|---------|----------|
| code | Mã DET | Text readonly | auto |
| defectClass | Loại hư hỏng | Dropdown | * |
| score | Confidence | Number | * |
| severity | Mức độ | Dropdown | * |
| status | Trạng thái | Dropdown | * |
| engine | Engine | Dropdown | * |
| sectionId | Đoạn | Dropdown | * |
| routeLabel | Tuyến | Text | |
| lat / lng | Tọa độ | Number | |
| pciSnapshot | PCI | Number | |
| modelVersion | Model | Text | |
| bboxJson | BBox | Text | |
| imageFileId | Ảnh hiện trạng | **FileUpload** | * cho detect |
| imageUrl | Preview | Text derived | resign · **cấm** persist |
| note | Ghi chú | Text multiline | |
| incidentCode | Mã Vấn đề | Text readonly | VI-* |

## Grid / Leave

- Columns: STT · Mã · Class · Score · Severity · Section · Route · Status · Engine · Incident · actions
- pageSize default **50**
- Leave: dirty confirm · **không** detect khi chưa có frame · upload fail → không gọi detect

## Empty / fail (UI copy)

| Case | Copy |
|------|------|
| list empty | Không có dữ liệu phát hiện. |
| filtered empty | Không tìm thấy phát hiện phù hợp |
| no frame | Chọn ảnh hiện trạng |
| upload fail | toast · không detect |
| detect fail | toast · không thêm row |

## DES-RPT (Design report)

| Check | Result |
|-------|--------|
| Zones A–D mapped | **PASS** |
| Control = controlHint (FileUpload Zone A/form) | **PASS** |
| reviewUrl present | **PASS** |
| AI chrome skip | **PASS** — no header AI/P1 badge |
| Taxonomy MD only | **PASS** |
| Kind F OUT | **PASS** |
| Hash skip / no demo rescan | **PASS** |
| design_confirm | **approve** (autopilot) |

## Handoff → SA

- APIs: `api/v1/ai-vision/detections` CRUD · `POST …/detect` · `GET …/pci-history/{sectionId}` · files `web-bff/api/v1/files/*`
- Bind `imageFileId` + resign · **cấm** ERP.* · FilesController · invent uploads API
- BE: `Linm.RMMS.WebService` · Vision host cutover OUT (`GAP-F-AIV-04`)

---
<!-- Version meta: skillVersion=2026.08.09.02 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.08.09.02 · versionGate=ok · taskId=task_83da313e -->
