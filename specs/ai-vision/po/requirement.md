# PO — ai-vision (AI kiểm định mặt đường)

| Field | Value |
|-------|-------|
| feature | `ai-vision` |
| changeScope | `edit_page` |
| packKind | `ai` |
| Feature Kind | **B** — Catalog list + form (full page) |
| status | `confirmed` (autopilot · `task_2dfc095f` · prior analy `task_cc211171`) |
| skillVersion | `2026.08.09.02` |
| schemaVersion | `qldb-workflow-skill-v1` |
| workflowVersion | `2026.08.09.02` |
| versionGate | `ok` |
| contentHash | `sha256:506a7c7045dab6bd32038fe1dd6984ce12e7d01feea4b9bddcc3be35c0d66236` |
| controlHint | `specs/_data-analy/features/ai-vision-control-hint.md` |
| realData | `specs/_data-analy/features/ai-vision-real-data.md` |
| mfeStdUrl | `http://localhost:9301/ai-vision` |
| taskId | `task_2dfc095f` |
| updatedAt | `2026-09-12T08:25:00.000Z` |

## 1. Goal

Kind B **AI kiểm định mặt đường**: list + form parity + **Upload ảnh hiện trạng (FileService)** → `POST …/detect` tạo Draft. Taxonomy **chỉ** 10 class mặt đường. BE `Linm.RMMS.WebService` · `api/v1/ai-vision` · **cấm ERP.*** · **cấm** AI chrome header.

## 2. Current → New (edit_page · `task_2dfc095f`)

| Layer | Current (MFE / prior) | New (delta họp 04/09 + Upload HARD) |
|-------|----------------------|-------------------------------------|
| List shell | Zone B–D · grid · pagination · sectionId · status VI | **giữ** |
| Zone A toolbar | thiếu Upload/detect | FileUpload ảnh hiện trạng → FileService → `runDetect` |
| Form image | `imageUrl` text / `mock://` | `FileUpload` · persist `imageFileId` · resign preview |
| Detect body | `{ engine?, note? }` | `{ imageUrl \| imageFileId, engine? }` — 1 frame |
| Taxonomy | 10 class MD | **HARD** cấm trộn `defectClass` ↔ catalog TS |
| Vision host | stub `mock://` | GAP-F-AIV-04 **OUT** → `Linm.RMMS.Vision` pack |

### 2b. Gap matrix (PO DoR)

| ID | Status | AC |
|----|--------|-----|
| GAP-FILTER-SECTION | **CLOSED** | Zone B `sectionId` → list query |
| GAP-STATUS-LABEL | **CLOSED** | status nhãn VI |
| GAP-UPLOAD-FILE | **OPEN → Dev** | FileUpload Zone A + form · `imageFileId` · **cấm** persist presigned |
| GAP-TOOLBAR-DETECT | **OPEN → Dev** | Zone A Upload + Button `runDetect` enabled khi có frame |
| GAP-DETECT-BODY | **OPEN → Dev** | body `{ imageUrl\|imageFileId, engine? }` · P1 default |
| GAP-TAXONOMY-SEP | **OPEN → Dev/QA** | chỉ `DEFECT_CLASSES` MD |
| GAP-F-AIV-04 | **OUT** | Vision host `:5311` — không block DoR list pack |

## 3. Personas / DoD

1. List load + search (code/class/section/route/incident/note) + filters: defectClass · severity · status · engine · sectionId
2. **Grid AC:** STT · Mã · Class · Score · Severity · Section · Route · Status · Engine · Incident · actions · pageSize 50 · empty/fail per real-data §D
3. **Zone A:** chọn ảnh hiện trạng (FileService init→PUT→complete) → Chạy detect → Draft row · toast fail không thêm row · disable nếu chưa có frame
4. Row menu: Xem · Sửa · Sao chép · (Critical+Draft) Tạo Vấn đề → VI-*
5. Form C/E/V/Copy: validate · FileUpload `imageFileId` · `imageUrl` derived resign · View readOnly
6. **Leave:** dirty form → confirm discard · cancel detect mid-upload → no orphan persist requirement beyond FileService incomplete
7. FE build/typecheck + BE build — **Dev/QA gates** (không chạy ở PO)
8. E2E — queued `/agent-qa*` only

## 4. Screens / zones

| Zone | Purpose | Controls (ids) |
|------|---------|----------------|
| A | Toolbar + Upload/detect | attachFrame FileUpload · runDetect Button · engineDetect Dropdown · Tạo mới · Làm mới · history · config |
| B | Filters | search · defectClass · severity · status · engine · sectionId |
| C | Grid | LinCatalogDataGrid columns §4b |
| D | Pagination | LinCatalogListPagination |
| Form | C/E/V/Copy | fields §4c |

reviewUrl: `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/ai-vision/ui/prototype/ai-vision-list-prototype.html`  
mfeStdUrl: `http://localhost:9301/ai-vision` · route `/ai-vision`

### 4b. List columns

STT · Mã · Class · Score · Severity · Section · Route · Status · Engine · Incident · actions

### 4c. Form fields (*)

code (readonly) · defectClass* · score* · severity* · status* · engine* · sectionId* · routeLabel · lat · lng · pciSnapshot · modelVersion · bboxJson · **imageFileId* (FileUpload)** · imageUrl (derived) · note · incidentCode (readonly)

## 5. API / bind (from real-data §A+§B)

| Action | Method | Path |
|--------|--------|------|
| List | GET | `api/v1/ai-vision/detections?…` |
| Detail | GET | `…/detections/{id}` |
| Create/Update/Delete | POST/PUT/DELETE | `…/detections` |
| Detect | POST | `…/detect` body `{ imageUrl\|imageFileId, engine? }` |
| Files | * | `web-bff/api/v1/files/*` (FileService BFF) |
| PCI | GET | `…/pci-history/{sectionId}` (stub · OUT list focus) |

**Cấm:** ERP.* · invent `ai-vision/uploads/*` · FilesController copy · persist presigned · AI badge chrome · trộn TS taxonomy · re-scan demo (hash skip).

## 6. CTX / DEM inventory

| Source | Path |
|--------|------|
| Context | `docs/context/features/ai-vision.md` |
| controlHint | `_data-analy/features/ai-vision-control-hint.md` |
| real-data | `_data-analy/features/ai-vision-real-data.md` |
| Demo | `Demo/.../ai-vision/ai-vision.html` (hash locked — no rescan) |
| MFE | `Linm.Web.RMMS.AiVision` |
| BE | `Linm.RMMS.WebService` · `api/v1/ai-vision` |

## 7. Out of scope

- Kind F Leaflet map · full PCI modal UX
- Real GPT-4o / ONNX runtime on WebService
- Vision host cutover (GAP-F-AIV-04 → `ai-vision-service`)
- ai-asset-detect / TRAFFIC_SIGN catalog
- Token budget alert · ERP.Master fork

## 8. Leave / non-happy

| Case | Behavior |
|------|----------|
| list empty / filtered empty / fail | §D real-data copy |
| upload fail | toast · không detect |
| detect no frame | disable + hint «Chọn ảnh hiện trạng» |
| detect `mock://` | fail toast · cấm gửi khi FileService sẵn |
| form 404 | redirect list |
| leave dirty | confirm discard |

## 9. Handoff → Design

Kind B zones A–D · FileUpload Zone A + form · control-map từ controlHint · prototype + reviewUrl · **cấm** AI chrome · packKind=ai · changeScope=edit_page · contentHash giữ.

---
<!-- Version meta: skillVersion=2026.08.09.02 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.08.09.02 · versionGate=ok · taskId=task_2dfc095f -->
